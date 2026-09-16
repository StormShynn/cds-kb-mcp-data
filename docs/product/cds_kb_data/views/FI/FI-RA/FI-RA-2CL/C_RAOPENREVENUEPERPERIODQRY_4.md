---
name: C_RAOPENREVENUEPERPERIODQRY_4
description: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value
semantic_en: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?"
keywords:
  - "Waterfall Report New Version - Query"
  - "Waterfall Report New Version - Query"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - consumption-view
  - document
  - FI-RA
  - FI-RA-2CL
  - lob:finance
  - plan
  - metadata-only
---
# C_RAOPENREVENUEPERPERIODQRY_4

**This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item ID |
| `RAContractIsUniversal` |  | |  |  | `CHAR(1)` | Universal Revenue Recognition Contract |
| `BandFiscalYearPeriodText` |  | |  |  | `SSTR(15)` | FiscalYearPeriod for reporting Disclosure 120 |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `PerfOblgnEventType` |  | |  |  | `CHAR(2)` | Event Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `DeltaRecognizedRevnInDspCrcy` |  | |  |  | `CURR(23)` |  |
| `RecgdCatchUpAmtInDspCrcy` |  | |  |  | `CURR(23)` |  |
| `RAPerPeriodOpenRevnInDspCrcy` |  | |  |  | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `RAPerPerdOpenRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` | Recognizable Revenue up to the Current Period |
