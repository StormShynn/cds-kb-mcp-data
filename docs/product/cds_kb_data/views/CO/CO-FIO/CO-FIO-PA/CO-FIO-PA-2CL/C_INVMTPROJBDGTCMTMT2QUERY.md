---
name: C_INVMTPROJBDGTCMTMT2QUERY
description: "Invmt Proj for Budget Commit - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value
semantic_en: "Invmt Proj for Budget Commit - Query"
tags:
  - CO
  - bo:project
  - budget
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# C_INVMTPROJBDGTCMTMT2QUERY

**Invmt Proj for Budget Commit - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `BdgtCtrldBdgtCostInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlActlCostAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlCmtmtAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlBdgtCostInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `AvailyCtrlProjStkAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `NonAccmltdAssgdValForBdgt` |  | |  |  | `DEC(25)` |  |
| `AvailableBdgtAmtInDspCrcy` |  | |  |  | `DEC(26)` |  |
| `AvailyCtrlUsdBdgtAmtInDspCrcy` |  | |  |  | `DECF(34)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `CostVariance` |  | |  |  | `DEC(24)` |  |
| `ComprnPlndCostInDspCrcy` |  | |  |  | `DEC(23)` |  |
| `ComprnCostVarcAmtInDspCrcy` |  | |  |  | `DEC(24)` |  |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AvailabilityControlIsActive` |  | |  |  | `CHAR(1)` | Availability control indicator(AVC) |
