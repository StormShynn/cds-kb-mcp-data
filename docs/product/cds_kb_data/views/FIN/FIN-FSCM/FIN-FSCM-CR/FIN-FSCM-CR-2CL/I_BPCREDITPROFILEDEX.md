---
name: I_BPCREDITPROFILEDEX
description: "Data Extraction of Credit Profile"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value
semantic_en: "Data Extraction of Credit Profile"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BPCREDITPROFILEDEX

**Data Extraction of Credit Profile**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPCREDITPROFILEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CustBusinessRelshpStartYear` |  | |  |  | `NUMC(4)` | First Year of Customer Relationship |
| `CreditWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Score |
| `CrdtWrthnssScoreValdtyEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `CrdtWorthinessScoreLastChgDate` |  | |  |  | `DATS(8)` | Change Date for Score |
| `CalcdCrdtWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Calculated Score |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CalculatedCreditRiskClass` |  | |  |  | `CHAR(3)` | Calculated Risk Class |
| `CreditRiskClassLastChangeDate` |  | |  |  | `DATS(8)` | Risk Class Changed On |
| `CreditCheckRule` |  | |  |  | `CHAR(10)` | Rule for Credit Check |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `BPLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change to Credit Master Data |
