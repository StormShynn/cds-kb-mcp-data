cd D:\__StormShyn\harness_sap_cds_kb_mcp_data\docs\product\cds_kb_mcp

# 1. Lưu credential BTP (mã hoá, chỉ máy+account Windows này đọc được)
New-Item -ItemType Directory -Force "$env:USERPROFILE\.cds-kb-mcp" | Out-Null
Get-Credential -Message "BTP trial (nghiabht@fpt.com)" |
  Export-Clixml -Path "$env:USERPROFILE\.cds-kb-mcp\btp-cred.xml"

# 2. Đăng ký task chạy hàng ngày (mặc định 08:00, đổi bằng -At "07:30")
.\wire-up-daily-wake.ps1
.\wire-up-daily-wake.ps1 -EveryHours 2 -At 07:00

# 3. Test ngay không cần chờ tới giờ:
schtasks /Run /TN "cds-kb-mcp daily wake"
Get-Content "$env:USERPROFILE\.cds-kb-mcp\wake.log" -Tail 10

# 4. Không có máy nào bật/đăng nhập liên tục? Dùng CI/CD thay Task Scheduler:
#    docs/product/cds_kb_mcp/wake-worker/ — Cloudflare Worker chạy bằng Cron
#    Trigger, không phụ thuộc máy nào phải mở. Deploy qua
#    .github/workflows/deploy-wake-worker.yml (workflow_dispatch, cần
#    CLOUDFLARE_API_TOKEN/CLOUDFLARE_ACCOUNT_ID/BTP_USERNAME/BTP_PASSWORD/
#    CDS_KB_WAKE_TOKEN trong repo secrets). Xem wake-worker/README.md để biết
#    chi tiết + troubleshooting.