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
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value
semantic_en: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue in display currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the total open revenue for each account assignment, for example, by profit centre?"
semantic_vi: "Waterfall Report New Version - Query — CDS view tiêu dùng dựa trên Waterfall Report New Version - Query."
keywords:
  - "Waterfall Report New Version - Query"
  - "waterfall"
  - "report"
  - "new"
  - "version"
  - "query"
  - "company"
  - "code"
  - "ledger"
  - "accounting"
  - "principle"
  - "revenue"
  - "contract"
  - "performance"
  - "obligation"
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
  - bo:purchaseorder
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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value) |

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
| `DisplayCurrency` |  | |  | `cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type)` | `CUKY(5)` | Display Currency |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `DeltaRecognizedRevnInDspCrcy` |  | |  | `currency_conversion(amount => OpenRevenuePerPeriod.RARecognizedRevnInSlsDocCrcy, source_currency => OpenRevenuePerPeriod.SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate)` | `CURR(23)` |  |
| `RecgdCatchUpAmtInDspCrcy` |  | |  | `currency_conversion(amount => OpenRevenuePerPeriod.RecgdCatchUpAmtInSlsDocCrcy, source_currency => OpenRevenuePerPeriod.SalesDocumentCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => $parameters.P_ExchangeRateType, exchange_rate_date => $parameters.P_ExchangeRateDate)` | `CURR(23)` |  |
| `RAPerPeriodOpenRevnInDspCrcy` |  | |  | `cast($projection.DeltaRecognizedRevnInDspCrcy + $projection.RecgdCatchUpAmtInDspCrcy as farr_recog_amt)` | `CURR(23)` | Recognizable Revenue up to the Current Period |
| `RAPerPerdOpenRevnInSlsDocCrcy` |  | |  | `cast(RARecognizedRevnInSlsDocCrcy + RecgdCatchUpAmtInSlsDocCrcy as farr_recog_amt)` | `CURR(23)` | Recognizable Revenue up to the Current Period |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RAOPENREVENUEPERPERIODQRY_4')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false

@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED

@Analytics.technicalName: 'CRAOPNRVNPRDQRY4'

@EndUserText.label: 'Waterfall Report New Version - Query'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory: #XXL, dataClass: #MIXED }


@VDM.viewType: #CONSUMPTION
define transient view entity C_RAOpenRevenuePerPeriodQry_4   

  provider contract analytical_query
  with parameters
    @AnalyticsDetails.query.variableSequence: 30
    @EndUserText.label: 'From Fiscal Year Period'
    @Semantics.fiscal.yearPeriod: true
    @Consumption.valueHelpDefinition: [ { entity: { name: 'C_RAFiscalYearPeriodVH', element: 'FiscalYearPeriod' } } ]
    P_FromFiscalYearPeriod  : fins_fyearperiod,


    @AnalyticsDetails.query.variableSequence: 40
    @EndUserText.label: 'To Fiscal Year Period'
    @Semantics.fiscal.yearPeriod: true
    @Consumption.valueHelpDefinition: [ { entity: { name: 'C_RAFiscalYearPeriodVH', element: 'FiscalYearPeriod' } } ]
    P_ToFiscalYearPeriod    : fins_fyearperiod,


    @AnalyticsDetails.query.variableSequence: 50
    P_DisplayCurrency  : vdm_v_display_currency,


    @AnalyticsDetails.query.variableSequence: 60
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } } ]
    P_ExchangeRateType : kurst,


    @AnalyticsDetails.query.variableSequence: 70
    @Environment.systemField: #SYSTEM_DATE
    P_ExchangeRateDate : vdm_v_exchange_rate_date


  as projection on I_RAOpenRevenuePerPeriodCube_4(
                   P_FromFiscalYearPeriod   : $parameters.P_FromFiscalYearPeriod,
                   P_ToFiscalYearPeriod     : $parameters.P_ToFiscalYearPeriod) as OpenRevenuePerPeriod

{
  
  @AnalyticsDetails.query: { variableSequence: 10, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,


  @AnalyticsDetails.query: { variableSequence: 20, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  Ledger,


  @AnalyticsDetails.query: { variableSequence: 80, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  AccountingPrinciple,


  @AnalyticsDetails.query: { variableSequence: 90, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  RevenueAccountingContract,


  @AnalyticsDetails.query: { variableSequence: 100, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  PerformanceObligation,


  @AnalyticsDetails.query: { variableSequence: 110, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,


  @AnalyticsDetails.query: { variableSequence: 120, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  BusinessArea,


  @AnalyticsDetails.query: { variableSequence: 130, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  Segment,


  @AnalyticsDetails.query: { variableSequence: 140, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,


  @AnalyticsDetails.query: { variableSequence: 150, axis: #FREE, totals: #SHOW }
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,


  @AnalyticsDetails.query: { variableSequence: 160, axis: #ROWS }
  @UI.textArrangement: #TEXT_LAST
  RAPerformanceObligationType,


  @AnalyticsDetails.query: { variableSequence: 170, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,


  @AnalyticsDetails.query: { variableSequence: 180, totals: #HIDE }
  RevnAcctgContractCreationDate,
  

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: { variableSequence: 190, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  BusinessSolutionOrder,


  @AnalyticsDetails.query: { variableSequence: 200, axis: #FREE, totals: #SHOW }
  @UI.textArrangement: #TEXT_LAST
  BusinessSolutionOrderItem,
    
  
  @AnalyticsDetails.query: { variableSequence: 210, axis: #FREE, totals: #SHOW }
  @EndUserText.label: 'Universal Revenue Contract'
  @UI.textArrangement: #TEXT_LAST
  RAContractIsUniversal,  


  @AnalyticsDetails.query: { axis: #COLUMNS, totals: #SHOW }
  BandFiscalYearPeriodText,
  

  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  RevnAcctgSalesOrganization,


  @AnalyticsDetails.query: { axis: #FREE, totals: #SHOW }
  CostCenter,


  PerformanceObligationClass,
  

  @UI.textArrangement: #TEXT_LAST
  PerfOblgnFulfillmentType,
  
  
  @UI.textArrangement: #TEXT_LAST
  PerfOblgnEventType,

  @AnalyticsDetails.query.totals: #SHOW
  @Aggregation.default: #FORMULA
  @UI.textArrangement: #TEXT_LAST
  cast($parameters.P_DisplayCurrency as vdm_v_display_currency preserving type) as DisplayCurrency,


  @AnalyticsDetails.query.totals: #SHOW
  SalesDocumentCurrency,


  @Consumption.hidden: true
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'To Be Recgd Revenue in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  currency_conversion(amount => OpenRevenuePerPeriod.RARecognizedRevnInSlsDocCrcy,
                      source_currency    => OpenRevenuePerPeriod.SalesDocumentCurrency,
                      target_currency    => $parameters.P_DisplayCurrency,
                      exchange_rate_type => $parameters.P_ExchangeRateType,
                      exchange_rate_date => $parameters.P_ExchangeRateDate) as DeltaRecognizedRevnInDspCrcy,
  
                      
  @Consumption.hidden: true
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'To Be Recgd Catchup in Display Currency'
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  currency_conversion(amount => OpenRevenuePerPeriod.RecgdCatchUpAmtInSlsDocCrcy,
                      source_currency    => OpenRevenuePerPeriod.SalesDocumentCurrency,
                      target_currency    => $parameters.P_DisplayCurrency,
                      exchange_rate_type => $parameters.P_ExchangeRateType,
                      exchange_rate_date => $parameters.P_ExchangeRateDate) as RecgdCatchUpAmtInDspCrcy,
                      
                         
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast($projection.DeltaRecognizedRevnInDspCrcy + $projection.RecgdCatchUpAmtInDspCrcy
       as farr_recog_amt)                    as RAPerPeriodOpenRevnInDspCrcy,                      


  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'To Be Recgd Revenue in Document Currency'
  @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
  @Consumption.hidden: true
  cast(RARecognizedRevnInSlsDocCrcy + RecgdCatchUpAmtInSlsDocCrcy
       as farr_recog_amt)                    as RAPerPerdOpenRevnInSlsDocCrcy  
       
}
```
