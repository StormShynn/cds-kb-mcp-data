---
name: I_CREDITMANAGEMENTACCOUNTDEX
description: "Data Extraction of Credit Accounts"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value
semantic_en: "Data Extraction of Credit Accounts"
tags:
  - FIN
  - account
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITMANAGEMENTACCOUNTDEX

**Data Extraction of Credit Accounts**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITMANAGEMENTACCOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(15)` | Credit Limit |
| `CreditLimitCalculatedAmount` |  | |  |  | `CURR(15)` | Calculated Credit Limit |
| `CreditLimitRequestedAmount` |  | |  |  | `CURR(15)` | Credit Limit Requested |
| `CreditAccountIsBlocked` |  | |  |  | `CHAR(1)` | Blocked by Credit Management |
| `CreditLimitValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `CreditLimitLastChangeDate` |  | |  |  | `DATS(8)` | Change Date for Credit Limit |
| `CreditCoordinator` |  | |  |  | `CHAR(12)` | Credit Analyst |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Limit Is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Reason for Block in Credit Management |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  |  | `CHAR(1)` | Limit Request from Automatic Calculation |
| `CreditLimitReqdValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date (Requested) |
| `CreditLimitRequestDate` |  | |  |  | `DATS(8)` | Request Date |
