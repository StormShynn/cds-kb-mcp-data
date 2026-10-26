---
name: C_PRODANDSRVCMARGANLYSQ
description: "This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value
semantic_en: "This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product and Service Margins - Qry — CDS view tiêu dùng dựa trên Product and Service Margins - Qry."
keywords:
  - "Product and Service Margins - Qry"
  - "product"
  - "and"
  - "service"
  - "margins"
  - "qry"
  - "company"
  - "code"
  - "currency"
  - "field"
  - "fiscal"
  - "year"
  - "ledger"
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
  - contract
  - customer
  - lob:controlling
  - lob:finance
  - order
  - product
  - project
  - sales-order
  - bo:material
---
# C_PRODANDSRVCMARGANLYSQ

**This CDS view is designed to provide analytical insights into product and service margins by aggregating and projecting financial data related to revenues, costs, and margins. It is intended for use in analytical queries to assess financial performance across various dimensions such as company code, fiscal year, profit center, and more. This CDS view provides the data to answer the following business questions: What are the recognized revenues and costs for products and services in a specific company code and fiscal year? How do the margins for products and services vary across different profit centers and sales organizations? What is the impact of sales deductions and revenue adjustments on the overall financial performance? How do accrued and deferred revenues and costs affect the financial statements? What are the reserves for imminent losses, sales deductions, and unrealized costs? How does the margin percentage compare across different products, customer groups, and sales districts? What are the financial implications of business solution orders, service contracts, and sales orders on margins? How do different account assignment types and ledger entries influence the product and service margins? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInDspCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizableCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `ImminentLossRsrvAmtInDspCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `Reserves` |  | |  | `cast( ImminentLossRsrvAmtInDspCrcy + SalesDeductReserveAmtInDspCrcy + UnrlzdCostsReserveAmtInDspCrcy as fins_trr_reserves )` | `CURR(23)` | Reserves |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Income Statement in Display Crcy |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `MarginInPct` |  | |  | `ratio_of( portion => cast ( $projection.recognizedmargamtindisplaycrcy as abap.dec( 23, 2 ) ) , total => cast ( $projection.recognizedrevnamtindspcrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODANDSRVCMARGANLYSQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Product and Service Margins - Qry'
@Metadata.allowExtensions: true
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@OData.publish: true
define transient view entity C_ProdAndSrvcMargAnlysQ 
  provider contract analytical_query
  with parameters
    @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_FinancialStatementHierarchy',
            element: 'GLAccountHierarchy'
        }
        }]
    @Consumption.defaultValue: 'YPS2'
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
          resultElement: 'CtrlgStdFinStatementVersion' }
    @AnalyticsDetails.query.variableSequence : 10 
    P_GLAccountHierarchy : fins_sem_tag_hryid
      
   as projection on I_ProdAndSrvcMargAnlysCube(P_GLAccountHierarchy :$parameters.P_GLAccountHierarchy)  as I_MargAnlysProdAndSrvcCube
{
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,
  
  @Consumption.filter :{ selectionType: #SINGLE, 
                         multipleSelections: true, 
                         mandatory: true, 
                         defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  @AnalyticsDetails.query.variableSequence : 200
  CurrencyField,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 40
  @Consumption.derivation: {
     lookupEntity:  'F_FsclYrDteFuncSglVal',
     resultElement: 'FiscalYear',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
          { targetParameter: 'P_FiscalYearVariant', type : #CONSTANT, value: 'K4' }
          ]
  }
  @Semantics.fiscal.year: true
  FiscalYear,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true, defaultValue: '0L' }
  @AnalyticsDetails.query.variableSequence : 20
  Ledger,  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @Consumption.derivation: {
     lookupEntity:  'F_FsclPerdDteFuncSglVal',
     resultElement: 'FiscalPeriod',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALPERIOD' },
          { targetParameter: 'P_FiscalYearVariant', type : #CONSTANT, value: 'K4' }
          ]
  }
  @Semantics.fiscal.period: true
  FiscalPeriod,

  FiscalYearPeriod,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false , defaultValue: 'EO', defaultValueHigh: 'SV' } 
  @AnalyticsDetails.query.variableSequence : 60
  AccountAssignmentType,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 70
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,
  
  
  @AnalyticsDetails.query.variableSequence : 80
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  BusinessSolutionOrder, 
   
  BusinessSolutionOrderItem,
  
  @AnalyticsDetails.query.variableSequence : 90
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  ServiceDocument,

  ServiceDocumentItem,
  
  ServiceDocumentType,
  
  @AnalyticsDetails.query.variableSequence : 100
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  ServiceContract,

  ServiceContractItem,

  ServiceContractType,
  
  @AnalyticsDetails.query.variableSequence : 110
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  SalesOrder,

  @ObjectModel.text.element: null
  SalesOrderItem,

  SalesDocument,

  @ObjectModel.text.element: null
  SalesDocumentItem,
  
  @AnalyticsDetails.query.variableSequence : 120
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  ProjectExternalID,
  
  @AnalyticsDetails.query.axis:#ROWS
  @AnalyticsDetails.query.variableSequence : 130
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,
  
  @AnalyticsDetails.query.variableSequence : 140
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,
  
  @AnalyticsDetails.query.variableSequence : 150
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,
  
  @AnalyticsDetails.query.variableSequence : 160
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,
  
  @AnalyticsDetails.query.variableSequence : 170
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  ProviderContract,
  
  @AnalyticsDetails.query.variableSequence : 180
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  ProviderContractItem,
  @AnalyticsDetails.query.variableSequence : 190
  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,
  
  @UI.textArrangement: #TEXT_LAST
  Product,
  @UI.textArrangement: #TEXT_LAST
  BillToParty,
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,
  @UI.textArrangement: #TEXT_LAST
  DistributionChannel,
  @UI.textArrangement: #TEXT_LAST
  OrganizationDivision,
  @UI.textArrangement: #TEXT_LAST
  Plant,
  @UI.textArrangement: #TEXT_LAST
  ShipToParty,
  
  @UI.textArrangement: #TEXT_LAST
  WBSElement,
  
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,
  
  ServicesRenderedDate,
  OrderID,
  
//exposed these two fields because some odd ATC check errors
  ChartOfAccounts,
  ControllingArea,
  BusinessTransactionType,
  @UI.textArrangement: #TEXT_LAST
  GLAccount,
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,
  
  // Convert type CURR to DEC
  Currency,

  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  RecognizedRevnAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  BilledRevenueAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  SalesDeductionAmountInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  RevenueAdjustmentAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  RecognizedCOGSAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  RecognizableCostAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  COGSAdjustmentAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  RecognizedMargAmtInDisplayCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  AccruedRevenueAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  DeferredRevenueAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  AccruedCOGSAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  DeferredCOGSAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  ImminentLossRsrvAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  SalesDeductReserveAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  UnrlzdCostsReserveAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #FORMULA
  cast( ImminentLossRsrvAmtInDspCrcy + SalesDeductReserveAmtInDspCrcy + 
        UnrlzdCostsReserveAmtInDspCrcy as fins_trr_reserves ) as Reserves,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  ProjAndSlsOrdStkAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  MnlContrAccrPnLItmAmtInDspCrcy,
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  DownPaymentAmountInDspCrcy,
  @AnalyticsDetails.query.collisionHandling.formula: #THIS 
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Margin in Percent %'
  ratio_of( portion =>  cast ( $projection.recognizedmargamtindisplaycrcy as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.recognizedrevnamtindspcrcy as abap.dec( 23, 2 ) ) ) * 100
  as MarginInPct

  

  

}
```
