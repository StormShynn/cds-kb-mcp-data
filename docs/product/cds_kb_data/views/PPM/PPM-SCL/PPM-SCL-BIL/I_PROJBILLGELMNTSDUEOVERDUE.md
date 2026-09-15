---
name: I_PROJBILLGELMNTSDUEOVERDUE
description: "Billing elements due and overdue"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJBILLGELMNTSDUEOVERDUE')/$value
semantic_en: "Billing elements due and overdue"
tags:
  - PPM
  - billing
  - bo:billingdocument
  - component:PPM-SCL-BIL
  - interface-view
  - PPM-SCL
  - PPM-SCL-BIL
  - metadata-only
---
# I_PROJBILLGELMNTSDUEOVERDUE

**Billing elements due and overdue**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| Release State (SAP ATC / Clean Core) | Released — a third, independent signal from SAP's ABAP Cloud released-objects list |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJBILLGELMNTSDUEOVERDUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingElementUUID` |  | |  |  | `RAW(16)` | Project Billing Element UUID |
| `DueBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingWBSElementInternalID` |  | |  |  | `NUMC(8)` |  |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Document Currency |
| `BillableRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billable Revenue |
| `BillingPlanUsageCategory` |  | |  |  | `CHAR(2)` |  |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` |  |
| `Project` |  | |  |  | `CHAR(24)` |  |
| `Customer` |  | |  |  | `CHAR(10)` | Project Customer |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectBillingRequest` |  | |  |  | `CHAR(10)` |  |
