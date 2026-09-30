---
name: C_MARKETSEGMENTPLANACTQ
description: "Market Segments Plan Actual - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTPLANACTQ')/$value
semantic_en: "Market Segments Plan Actual - Query"
semantic_vi: "Market Segments Plan Actual - Query — CDS view tiêu dùng dựa trên Market Segments Plan Actual - Query."
keywords:
  - "Market Segments Plan Actual - Query"
  - "market"
  - "segments"
  - "plan"
  - "actual"
  - "query"
  - "customer"
  - "group"
  - "sold"
  - "product"
  - "account"
  - "currency"
  - "field"
  - "cost"
  - "activity"
  - "type"
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - plan
---
# C_MARKETSEGMENTPLANACTQ

**Market Segments Plan Actual - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTPLANACTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualAmountInDisplayCurrency` |  | |  | `cast ( case when ActualPlanCode = 'A' then ActualAmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlanAmountInDisplayCurrency` |  | |  | `cast ( case when ActualPlanCode = 'P' and PlanningCategory = $parameters.P_PlanningCategory then PlanAmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DifferenceAmtInDspCrcy` |  | |  | `$projection.ActualAmountInDisplayCurrency - $projection.PlanAmountInDisplayCurrency` | `DEC(24)` |  |
| `DifferencePercent` |  | |  | `cast( case when $projection.ActualAmountInDisplayCurrency > abap.dec'0' then ($projection.ActualAmountInDisplayCurrency - $projection.PlanAmountInDisplayCurrency) / $projection.ActualAmountInDisplayCurrency * 100 else ratio_of( portion => ($projection.PlanAmountInDisplayCurrency - $projection.ActualAmountInDisplayCurrency), total => ($projection.ActualAmountInDisplayCurrency) ) * 100 end as abap.dec(15,2) )` | `DEC(15)` |  |
| `ActualValuationQuantity` |  | |  | `case when ActualPlanCode = 'A' then ActualValuationQuantity else null end` | `QUAN(23)` | Actual Valuation Quantity |
| `PlanValuationQuantity` |  | |  | `case when ActualPlanCode = 'P' and PlanningCategory = $parameters.P_PlanningCategory then PlanValuationQuantity else null end` | `QUAN(23)` | Plan Valuation Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTPLANACTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MARKETSEGMENTPLANACTQ')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions: true
@Analytics.settings.maxProcessingEffort: #HIGH
@EndUserText.label: 'Market Segments Plan Actual - Query'
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@Metadata.ignorePropagatedAnnotations: true
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
@OData.publish: true
define transient view entity C_MarketSegmentPlanActQ
  provider contract analytical_query
  with parameters

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue : 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_PlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_InputPlanningCategory  : fcom_category,

    @AnalyticsDetails.variable: { usageType: #FILTER, 
                                  referenceElement: 'PlanningCategory', 
                                  mandatory: true, 
                                  selectionType: #SINGLE, 
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory', 
                                             type : #PARAMETER, 
                                             value: 'P_InputPlanningCategory' }
                               ]
    }
    @Consumption.hidden: true
    P_PlanningCategory         : fcom_category,


//    @EndUserText.label: 'Plan Category'
//    //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlanningCategoryVH', element: 'PlanningCategory' } } ]
//    @Consumption.valueHelpDefinition: [ { entity: { name    : 'I_PlanningCategory',
//                                                    element : 'PlanningCategory' } } ]
//    @AnalyticsDetails.query.variableSequence: 30
//    P_PlanningCategory : fcom_category,

//    @Semantics.businessDate.at: true
//    @Environment.systemField: #SYSTEM_DATE
//    @AnalyticsDetails.query.variableSequence: 40
//    P_KeyDate          : vdm_v_key_date,
//
//    @Consumption.hidden: true
//    @Environment.systemField: #USER
//    P_BusinessUser     : syuname,
//
//    @Consumption.hidden: true
//    @Consumption.derivation: {
//       lookupEntity: 'I_UserSetGetParamForCtrlgArea',
//       resultElement: 'ControllingArea',
//       binding: [
//         { targetElement : 'BusinessUser' ,
//           type          : #PARAMETER,
//           value         : 'P_BusinessUser' } ]
//    }
//    @AnalyticsDetails.query.variableSequence: 5
//    P_ControllingArea  : kokrs,

    @Consumption.valueHelpDefinition: [
       { entity: {
           name     : 'I_LedgerStdVH',
           element  : 'Ledger' } } ]
    @Consumption.derivation: {
      lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X' } ] }
    @AnalyticsDetails.query.variableSequence: 10
    P_Ledger           : fins_ledger
  as projection on I_ActPlnJrnlEntrItemCube_2(
//                   P_PlanningCategory: $parameters.P_PlanningCategory,
//                   P_ControllingArea : $parameters.P_ControllingArea,
                   P_Ledger          : $parameters.P_Ledger
                   ) as I_ActualPlanJrnlEntryItemCube
{
  ------------------------------------------------------------------------------------------------------
  -- ROWS
  ------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: {
     selectionType        : #INTERVAL,
     multipleSelections   : true,
     mandatory            : false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: { 
     selectionType      : #INTERVAL, 
     multipleSelections : true, 
     mandatory          : false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @AnalyticsDetails.query.variableSequence: 140
  @Consumption.filter: {  
     selectionType      : #HIERARCHY_NODE,
     multipleSelections : true,
     mandatory          : false,
     hierarchyBinding   : [
       { type             : #USER_INPUT,
         value            : 'GLAccountHierarchyName',
         variableSequence : 130 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER_ONLY
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,
  
  @Consumption.filter :{ selectionType: #SINGLE, 
                         multipleSelections: true, 
                         mandatory: true, 
                         defaultValue: 'GC  ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  @AnalyticsDetails.query.variableSequence: 260
  CurrencyField,

  ------------------------------------------------------------------------------------------------------
  -- FREE
  ------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CostCtrActivityType,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  CalendarMonth,
  @UI.textArrangement: #TEXT_LAST
  CalendarQuarter,
  @UI.textArrangement: #TEXT_LAST
  CalendarWeek,
  @UI.textArrangement: #TEXT_LAST
  CalendarYear,

  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence:60
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,

//  @AnalyticsDetails.query.totals: #SHOW
//  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CostCenter,

  CostSourceUnit,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,

  @AnalyticsDetails.query.variableSequence: 120
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  Customer,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  DistributionChannel,

  @UI.textArrangement: #TEXT_LAST
  OrganizationDivision,

  @AnalyticsDetails.query.axis: #FREE
  ControllingDebitCreditCode,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  FiscalQuarter,
  @UI.textArrangement: #TEXT_LAST
  FiscalWeek,
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,
  @UI.textArrangement: #TEXT_LAST
  FiscalYearQuarter,
  @UI.textArrangement: #TEXT_LAST
  FiscalYearWeek,
  @UI.textArrangement: #TEXT_LAST
  FiscalYearVariant,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 80
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

//  @AnalyticsDetails.query.totals: #SHOW
//  GlobalCurrency,

  @AnalyticsDetails.query.totals: #SHOW
  AccountingDocument,

  @AnalyticsDetails.query.totals: #SHOW
  LedgerGLLineItem,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', 
                                                element: 'FiscalYear' } ,
                                       additionalBinding: [{ localElement: 'CompanyCode', 
                                                             element: 'CompanyCode' }] 
  }]
  @AnalyticsDetails.query.variableSequence: 20
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,

  @AnalyticsDetails.query.totals: #SHOW
  OrderID,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginProfitCenter,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PartnerCostCenter,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PartnerFunctionalArea,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  //PartnerOrder_2                                                                                                                   as PartnerOrder,
  PartnerOrder,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  PartnerProfitCenter,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PartnerProjectExternalID,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PartnerWBSElementExternalID,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  PlanningCategory,

  @AnalyticsDetails.query.totals: #SHOW
  PersonnelNumber,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  Plant,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Product,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  CostAnalysisResource,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  SalesDocument,
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  SalesDocumentItem,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentType,
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ServiceDocument,
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentItem,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 90
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Segment,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  PartnerCompany,

//  TransactionCurrency,

  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  WorkItem,

//  @UI.textArrangement: #TEXT_LAST
//  YearMonth,
//  @UI.textArrangement: #TEXT_LAST
//  YearQuarter,
//  @UI.textArrangement: #TEXT_LAST
//  YearWeek,

  //Key Figures
  
  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  Currency,
  
  @EndUserText.label: 'Actual Amount'
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Consumption.semanticObject: 'GLAccount'
  cast (
    case
      when ActualPlanCode = 'A'
        then ActualAmountInDisplayCurrency
      else
        null
    end
  as abap.dec( 23, 2 ) )                                                             as ActualAmountInDisplayCurrency,

  @EndUserText.label: 'Plan Amount'
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Consumption.semanticObject: 'GLAccount'
  cast (
    case
      when ActualPlanCode = 'P' and PlanningCategory =  $parameters.P_PlanningCategory
        then PlanAmountInDisplayCurrency
      else
        null
    end
  as abap.dec( 23, 2 ) )                                                             as PlanAmountInDisplayCurrency,

  @EndUserText.label: 'Difference Actual Plan'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.semanticObject: 'GLAccount'
  $projection.ActualAmountInDisplayCurrency - $projection.PlanAmountInDisplayCurrency as DifferenceAmtInDspCrcy,

  @EndUserText.label: 'Difference (%)'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  @Consumption.semanticObject: 'GLAccount'
  cast(
    case
      when $projection.ActualAmountInDisplayCurrency > abap.dec'0'
        then ($projection.ActualAmountInDisplayCurrency - $projection.PlanAmountInDisplayCurrency) /
             $projection.ActualAmountInDisplayCurrency * 100
      else
        ratio_of(
          portion => ($projection.PlanAmountInDisplayCurrency - $projection.ActualAmountInDisplayCurrency),
          total => ($projection.ActualAmountInDisplayCurrency)
        ) * 100
    end
  as abap.dec(15,2) )                                                                 as DifferencePercent,

  @AnalyticsDetails.query.hidden: true
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  case
    when ActualPlanCode = 'A'
      then ActualValuationQuantity
    else
      null
  end                                                                                 as ActualValuationQuantity,

  @AnalyticsDetails.query.hidden: true
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  case
    when ActualPlanCode = 'P' and PlanningCategory =  $parameters.P_PlanningCategory
      then PlanValuationQuantity
    else
      null
  end                                                                                 as PlanValuationQuantity,
  
  @AnalyticsDetails.query.hidden: true
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,

  @AnalyticsDetails.query.hidden: true
  @Analytics.internalName: #LOCAL
  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,
  
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  Ledger,
  @Consumption.hidden: true
  FiscalYear,
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  ActualPlanJournalEntryItem,
  
  _DocumentStore
}
where PlanningCategory = 'ACT01'
   or PlanningCategory = $parameters.P_PlanningCategory
```
