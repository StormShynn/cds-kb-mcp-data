---
name: I_CRDTMPAYTBEHAVIORKEYFIGS
description: "Payment Behavior Newest Key Figures"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORKEYFIGS')/$value
semantic_en: "Payment Behavior Newest Key Figures"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_CRDTMPAYTBEHAVIORKEYFIGS

**Payment Behavior Newest Key Figures**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| Release State (SAP ATC / Clean Core) | Released — a third, independent signal from SAP's ABAP Cloud released-objects list |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMPAYTBEHAVIORKEYFIGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMKeyFigureInfoIsErroneous` |  | |  |  | `CHAR(1)` | Key Figures are Erroneous |
| `DaysSalesOutstanding` |  | |  |  | `DEC(6)` | Key Figure: Days Sales Outstanding |
| `TotalOutstandingAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Total Outstanding Amount |
| `SenderCurrency` |  | |  |  | `CUKY(5)` | Currency of Key Figures |
| `CrdtMKeyFigureTransmnDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `NoCshDiscAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears for Payments Where No Cash Discount Taken |
| `PaytNoCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items with Cash Discount Not Taken |
| `CshDiscClmAvgNrOfDaysInArrears` |  | |  |  | `DEC(3)` | Average Arrears with Cash Discount Payments |
| `PaytWthCshDiscTotAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Gross Total of Cleared Items Without Cash Discount Loss |
| `TotLast12MnthsSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Sales of Last 12 Months |
| `Last12MnthsMaxSlsAmtInSndrCrcy` |  | |  |  | `CURR(15)` | Highest Monthly Sales in Last 12 Months |
