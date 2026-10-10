---
name: I_BILLGPLNUSGECATTXT_2
description: "Billing Plan Usage Category - Text"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNUSGECATTXT_2')/$value
semantic_en: "Billing Plan Usage Category - Text"
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-BIL-IV-BP-2CL
  - interface-view
  - lob:sales & distribution
  - plan
  - SD-BIL
  - SD-BIL-IV
  - SD-BIL-IV-BP
  - SD-BIL-IV-BP-2CL
  - metadata-only
---
# I_BILLGPLNUSGECATTXT_2

**Billing Plan Usage Category - Text**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLGPLNUSGECATTXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingPlanUsageCategory` |  | |  |  | `CHAR(2)` | Billing Plan Usage Category |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BillingPlanUsageCategoryName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
