# wire-up-daily-wake.ps1 — registers the Windows Scheduled Task that runs
# daily-wake.ps1 on a repeating schedule (hourly by default — it re-checks
# and starts the app back up if it's stopped). Run this ONCE yourself
# (from this folder):
#
#   .\wire-up-daily-wake.ps1                       # every 1 hour, from 08:00
#   .\wire-up-daily-wake.ps1 -EveryHours 2 -At 07:00
#
# The task runs under your current Windows account, "only when logged on" —
# no Windows password is stored anywhere for this (that's a deliberate
# trade-off: it won't fire if the laptop is off/locked-out at that account,
# but it also means nothing but the BTP credential file — see
# daily-wake.ps1's header — needs to exist on disk).
#
# To remove it later:  schtasks /Delete /TN "cds-kb-mcp wake" /F

param(
    [string]$At = '08:00',
    [int]$EveryHours = 1
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Target = Join-Path $ScriptDir 'daily-wake.ps1'
$TaskName = 'cds-kb-mcp wake'
$OldTaskName = 'cds-kb-mcp daily wake'  # superseded name from the once-a-day version

if (-not (Test-Path $Target)) {
    Write-Host "Khong tim thay $Target - dam bao file daily-wake.ps1 nam cung thu muc voi script nay." -ForegroundColor Red
    exit 1
}

# Clean up the old once-daily task if it's still registered under its old
# name, so there isn't a stray duplicate left running alongside this one.
$null = schtasks /Delete /TN $OldTaskName /F 2>&1

$action = "powershell.exe -NoProfile -ExecutionPolicy Bypass -File `"$Target`""

schtasks /Create /TN $TaskName /TR $action /SC HOURLY /MO $EveryHours /ST $At /F

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDa dang ky task '$TaskName', chay lap lai moi $EveryHours gio, bat dau tu $At (khi ban da dang nhap Windows)." -ForegroundColor Green
    Write-Host "Log ket qua tung lan chay: $env:USERPROFILE\.cds-kb-mcp\wake.log" -ForegroundColor Green
    Write-Host "Kiem tra task:  schtasks /Query /TN `"$TaskName`" /V /FO LIST" -ForegroundColor Cyan
    Write-Host "Chay thu ngay:  schtasks /Run /TN `"$TaskName`"" -ForegroundColor Cyan
} else {
    Write-Host "`nDang ky task that bai, xem log o tren." -ForegroundColor Red
}
