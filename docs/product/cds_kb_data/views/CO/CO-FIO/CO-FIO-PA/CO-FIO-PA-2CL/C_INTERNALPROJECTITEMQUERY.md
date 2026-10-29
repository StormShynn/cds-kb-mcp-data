---
name: C_INTERNALPROJECTITEMQUERY
description: "This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value
semantic_en: "This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Internal Project Item Query — CDS view tiêu dùng dựa trên Internal Project Item Query."
keywords:
  - "Internal Project Item Query"
  - "internal"
  - "project"
  - "item"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
tags:
  - CO
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
  - product
  - project
  - bo:project
---
# C_INTERNALPROJECTITEMQUERY

**This CDS view is designed to provide analytical insights into internal project items, specifically focusing on engagement project margin items. It is intended for consumption in analytical queries, allowing users to filter and analyze data related to internal projects, such as financial metrics, project details, and associated entities. This CDS view provides the data to answer the following business questions: What is the financial performance of internal projects in terms of amounts in display currency? How do different company codes and profit centers contribute to the overall project performance? What are the fiscal year and period-specific financial metrics for internal projects? How do different sold products and customer groups impact project margins? What is the role of specific project managers and their associated projects in financial outcomes? How do different functional areas and segments contribute to project financials? What are the quantities and valuation quantities associated with internal projects? How do different general ledger accounts impact the financial performance of projects? What is the distribution of financial metrics across different currencies and debit/credit codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value) |

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
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `case when BaseUnit is not initial then Quantity else null end` | `QUAN(23)` | Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALPROJECTITEMQUERY')/$value)*

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
@EndUserText.label: 'Internal Project Item Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_INTPJITEM_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_InternalProjectItemQuery
  provider contract analytical_query
  as projection on I_EngmntPrjMarginItemCube as I_EngmPrjMarginItemCube
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
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.period: true
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

  @Semantics.fiscal.yearPeriod: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  @Consumption.filter :{ hidden: true, selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'PR' }
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
  ChartOfAccounts,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  Project,

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,

  @Semantics.text: true
  @EndUserText.label: 'Project Manager Name'
  ProjectManagerName,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  EngagementProjectStage,

  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @UI.textArrangement: #TEXT_LAST
  Currency,

  @UI.textArrangement: #TEXT_ONLY
  DebitCreditCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Amount in Display Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  AmountInDisplayCurrency,

  BaseUnit,
  @Aggregation.default: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.axis: #COLUMNS
  case 
    when BaseUnit is not initial
      then Quantity
    else null
  end as Quantity,

  @Aggregation.default: #SUM
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @AnalyticsDetails.query.axis: #COLUMNS
  ValuationQuantity,
  
  CostSourceUnit,
  
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  LedgerGLLineItem,
  
  _DocumentStore

}
where
      ProjectProfileCode    = 'P002'
  and AccountAssignmentType = 'PR'
```
