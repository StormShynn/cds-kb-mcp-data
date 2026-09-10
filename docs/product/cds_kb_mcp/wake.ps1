# wake.ps1 — one command to bring cds-kb-mcp back up after it idles out on the
# BTP trial (memory quota / trial inactivity stops the app — see A.6 in
# mcp_btp_deployment_guide.md). Safe to run anytime: no-ops if already running.
#
# Usage:  .\wake.ps1
# (or from anywhere: pwsh docs\product\cds_kb_mcp\wake.ps1)

$ErrorActionPreference = 'Stop'
$App = 'cds-kb-mcp'

Write-Host "Checking $App on BTP..." -ForegroundColor Cyan
$appInfo = cf app $App 2>&1
if ($LASTEXITCODE -ne 0) {
    if ($appInfo -match 'token expired|Please log back in|not logged in|Not logged in') {
        Write-Host "`ncf session het han. Chay 'cf login' roi thu lai." -ForegroundColor Yellow
    } else {
        Write-Host "`ncf app that bai:`n$appInfo" -ForegroundColor Red
    }
    exit 1
}

if ($appInfo -match 'requested state:\s*started') {
    Write-Host "$App dang chay san. Khong can lam gi them." -ForegroundColor Green
} else {
    Write-Host "$App dang stopped -> dang start lai..." -ForegroundColor Yellow
    cf start $App
    if ($LASTEXITCODE -ne 0) {
        Write-Host "`ncf start that bai, xem log o tren." -ForegroundColor Red
        exit 1
    }
}

Write-Host "`nKiem tra qua domain thuc (mcp.tringhia.io.vn)..." -ForegroundColor Cyan
try {
    $resp = Invoke-WebRequest -Uri 'https://mcp.tringhia.io.vn/health' -UseBasicParsing -TimeoutSec 15
    Write-Host "OK - /health tra ve $($resp.StatusCode): $($resp.Content)" -ForegroundColor Green
    Write-Host "San sang dung: https://mcp.tringhia.io.vn/api-docs/" -ForegroundColor Green
} catch {
    Write-Host "Chua goi duoc qua mcp.tringhia.io.vn (co the can vai giay de khoi dong xong): $($_.Exception.Message)" -ForegroundColor Yellow
}
