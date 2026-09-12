---
name: I_INVMTPROJACTLLINEITMCUBE
description: "Invmt Proj for Actual Line Items - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value
semantic_en: "Invmt Proj for Actual Line Items - Cube"
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_INVMTPROJACTLLINEITMCUBE

**Invmt Proj for Actual Line Items - Cube**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `StandardProjectWithCodingMask` |  | |  |  | `CHAR(24)` | Standard Project Number (Extern) Edited |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManagerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
