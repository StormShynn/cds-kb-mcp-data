# wire-up-daily-wake.ps1 — registers the Windows Scheduled Task that runs
# daily-wake.ps1 every day. Run this ONCE yourself (from this folder):
#
#   .\wire-up-daily-wake.ps1              # defaults to 08:00 daily
#   .\wire-up-daily-wake.ps1 -At 07:30    # pick a different time
#
# The task runs under your current Windows account, "only when logged on" —
# no Windows password is stored anywhere for this (that's a deliberate
# trade-off: it won't fire if the laptop is off/locked-out at that account,
# but it also means nothing but the BTP credential file — see
# daily-wake.ps1's header — needs to exist on disk).
#
# To remove it later:  schtasks /Delete /TN "cds-kb-mcp daily wake" /F

param(
    [string]$At = '08:00'
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$Target = Join-Path $ScriptDir 'daily-wake.ps1'
$TaskName = 'cds-kb-mcp daily wake'

if (-not (Test-Path $Target)) {
    Write-Host "Khong tim thay $Target - dam bao file daily-wake.ps1 nam cung thu muc voi script nay." -ForegroundColor Red
    exit 1
}

$action = "powershell.exe -NoProfile -ExecutionPolicy Bypass -File `"$Target`""

schtasks /Create /TN $TaskName /TR $action /SC DAILY /ST $At /F

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDa dang ky task '$TaskName', chay hang ngay luc $At (khi ban da dang nhap Windows)." -ForegroundColor Green
    Write-Host "Log ket qua tung lan chay: $env:USERPROFILE\.cds-kb-mcp\wake.log" -ForegroundColor Green
    Write-Host "Kiem tra task:  schtasks /Query /TN `"$TaskName`" /V /FO LIST" -ForegroundColor Cyan
    Write-Host "Chay thu ngay:  schtasks /Run /TN `"$TaskName`"" -ForegroundColor Cyan
} else {
    Write-Host "`nDang ky task that bai, xem log o tren." -ForegroundColor Red
}
