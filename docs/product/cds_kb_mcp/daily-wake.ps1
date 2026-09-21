# daily-wake.ps1 — unattended version of wake.ps1 for a scheduled task.
#
# Difference from wake.ps1: this one runs with no one watching, so it can't
# just print and stop when the cf session has expired — it re-authenticates
# itself from a saved credential, then does the same start-if-stopped +
# verify wake.ps1 does. Everything goes to a log file, not the console.
#
# One-time setup (run yourself, in your own terminal — never paste a
# password into a chat session):
#   New-Item -ItemType Directory -Force "$env:USERPROFILE\.cds-kb-mcp" | Out-Null
#   Get-Credential -Message "BTP trial (nghiabht@fpt.com)" |
#     Export-Clixml -Path "$env:USERPROFILE\.cds-kb-mcp\btp-cred.xml"
# Export-Clixml encrypts the password with Windows DPAPI, keyed to this
# Windows account on this machine — no one else, and no other machine, can
# read it back out, and it is never written in plaintext anywhere.
#
# Then register the daily task (see wire-up-daily-wake.ps1 next to this file).

$CredPath = "$env:USERPROFILE\.cds-kb-mcp\btp-cred.xml"
$LogPath = "$env:USERPROFILE\.cds-kb-mcp\wake.log"
$ApiEndpoint = 'https://api.cf.us10-001.hana.ondemand.com'
$Org = '0f096230trial'
$Space = 'dev'
$App = 'cds-kb-mcp'

New-Item -ItemType Directory -Force (Split-Path $LogPath) | Out-Null

function Log($msg) {
    $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $msg"
    Add-Content -Path $LogPath -Value $line
}

Log '=== wake run start ==='

function Try-Login {
    if (-not (Test-Path $CredPath)) {
        Log "LOI: chua co credential tai $CredPath - chay lenh setup 1 lan (xem comment dau file), roi thu lai."
        return $false
    }
    $cred = Import-Clixml -Path $CredPath
    $plainPassword = $cred.GetNetworkCredential().Password
    Log "cf session het han/chua login - dang tu dang nhap lai bang user $($cred.UserName)..."
    $null = cf login -a $ApiEndpoint -u $cred.UserName -p $plainPassword -o $Org -s $Space 2>&1
    $plainPassword = $null  # don't linger in memory longer than needed
    return ($LASTEXITCODE -eq 0)
}

$appInfo = cf app $App 2>&1
if ($LASTEXITCODE -ne 0) {
    if ($appInfo -match 'token expired|Please log back in|not logged in|Not logged in|Authentication has expired') {
        if (-not (Try-Login)) {
            Log 'Tu dang nhap lai KHONG thanh cong. Dung tai day - can kiem tra thu cong (co the mat khau da doi, hoac can SSO passcode).'
            Log '=== wake run end (failed) ==='
            exit 1
        }
        $appInfo = cf app $App 2>&1
        if ($LASTEXITCODE -ne 0) {
            Log "cf app van loi sau khi da login lai:`n$appInfo"
            Log '=== wake run end (failed) ==='
            exit 1
        }
    } else {
        Log "cf app that bai (khong phai do het session):`n$appInfo"
        Log '=== wake run end (failed) ==='
        exit 1
    }
}

if ($appInfo -match 'requested state:\s*started') {
    Log "$App dang chay san. Khong can start."
} else {
    Log "$App dang stopped -> dang start lai..."
    $startOut = cf start $App 2>&1
    if ($LASTEXITCODE -ne 0) {
        Log "cf start that bai:`n$startOut"
        Log '=== wake run end (failed) ==='
        exit 1
    }
    Log "$App da start xong."
}

try {
    $resp = Invoke-WebRequest -Uri 'https://mcp.tringhia.io.vn/health' -UseBasicParsing -TimeoutSec 20
    Log "Xac nhan qua mcp.tringhia.io.vn: HTTP $($resp.StatusCode) - $($resp.Content)"
} catch {
    Log "Chua goi duoc qua mcp.tringhia.io.vn (co the can vai giay khoi dong xong): $($_.Exception.Message)"
}

Log '=== wake run end (ok) ==='
