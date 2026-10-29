---
name: C_OVHDPRJDEBITCRDTQUERY
description: "This CDS view is designed to provide an analytical query for examining overhead project debit and credit transactions. It allows users to analyze financial data related to projects, including various dimensions such as company code, fiscal year, profit center. This CDS view provides the data to answer the following business questions: What are the debit and credit amounts for overhead projects within a specific company code and fiscal year? How do these amounts vary across different profit centers and functional areas? What is the financial impact of specific projects or project profiles on the company's ledger? How do sales documents and customer groups contribute to the overall project financials? What are the quantities and amounts in display currency for specific projects or WBS elements? How do different controlling debit/credit codes affect the financial planning and actual transactions? What is the role of specific project managers in the financial outcomes of projects? How do fiscal periods and year variants influence the financial data of projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value
semantic_en: "This CDS view is designed to provide an analytical query for examining overhead project debit and credit transactions. It allows users to analyze financial data related to projects, including various dimensions such as company code, fiscal year, profit center. This CDS view provides the data to answer the following business questions: What are the debit and credit amounts for overhead projects within a specific company code and fiscal year? How do these amounts vary across different profit centers and functional areas? What is the financial impact of specific projects or project profiles on the company's ledger? How do sales documents and customer groups contribute to the overall project financials? What are the quantities and amounts in display currency for specific projects or WBS elements? How do different controlling debit/credit codes affect the financial planning and actual transactions? What is the role of specific project managers in the financial outcomes of projects? How do fiscal periods and year variants influence the financial data of projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Overhead Project Debit Credit - Query — CDS view tiêu dùng dựa trên Overhead Project Debit Credit - Query."
keywords:
  - "Overhead Project Debit Credit - Query"
  - "overhead"
  - "project"
  - "debit"
  - "credit"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
tags:
  - CO
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - document
  - lob:controlling
  - lob:finance
  - plan
  - project
  - transaction
  - bo:project
---
# C_OVHDPRJDEBITCRDTQUERY

**This CDS view is designed to provide an analytical query for examining overhead project debit and credit transactions. It allows users to analyze financial data related to projects, including various dimensions such as company code, fiscal year, profit center. This CDS view provides the data to answer the following business questions: What are the debit and credit amounts for overhead projects within a specific company code and fiscal year? How do these amounts vary across different profit centers and functional areas? What is the financial impact of specific projects or project profiles on the company's ledger? How do sales documents and customer groups contribute to the overall project financials? What are the quantities and amounts in display currency for specific projects or WBS elements? How do different controlling debit/credit codes affect the financial planning and actual transactions? What is the role of specific project managers in the financial outcomes of projects? How do fiscal periods and year variants influence the financial data of projects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVHDPRJDEBITCRDTQUERY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking:#REQUIRED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Overhead Project Debit Credit - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_OVPJDBTCRD_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_OvhdPrjDebitCrdtQuery
  provider contract analytical_query
  as projection on I_EntPrjMarginItemCube as I_EntPrjMarginItemCube
{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  Ledger,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false}
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  //@Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.period: true
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                   additionalBinding: [
                                   { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                      { localElement: 'FiscalYear', element: 'FiscalYear' } ] }]
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

//  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.yearPeriod: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  //@Consumption.filter :{ hidden: false, selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,

  @Semantics.fiscal.yearVariant: true
  FiscalYearVariant,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginProfitCenter,

  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @UI.textArrangement: #TEXT_LAST
  SalesDocument,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  SalesOrder,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  Project,

  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  @Consumption.hidden: true
  PersonWorkAgreement,

  @UI.textArrangement: #TEXT_LAST
  ProcessingStatus,
  
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true }
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @UI.textArrangement: #TEXT_LAST
  Currency,

  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_ONLY
  @AnalyticsDetails.query.sortDirection: #DESC
  DebitCreditCode,

//  @Consumption.filter: {
//    selectionType: #HIERARCHY_NODE,
//    multipleSelections: true,
//    hierarchyBinding: [{ type: #PARAMETER, value: 'P_GLAccountHierarchy' }],
//    mandatory: false }
//  @AnalyticsDetails.query: {
//    axis: #ROWS,
//    displayHierarchy: #FILTER_ONLY,
//    hierarchyInitialLevel: 2,
//    totals: #SHOW
//  }
//  @UI.textArrangement: #TEXT_ONLY
//  OldGLAccount,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Amount in Display Currency'
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  AmountInDisplayCurrency,
  
  BaseUnit,
  @Aggregation.default: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.axis: #COLUMNS
  Quantity,
    
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  CostCenter,
  
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,
  
  @EndUserText.label: 'CO Debit/Credit Indicator'
  @UI.textArrangement: #TEXT_LAST
  ControllingDebitCreditCode,
  
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  ActualPlanJournalEntryItem,
  
  _DocumentStore

}
where ( ProjectProfileCode = 'YP03' or ProjectProfileCode = 'YP04' )
  and PlanningCategory   = 'ACT01'
```
