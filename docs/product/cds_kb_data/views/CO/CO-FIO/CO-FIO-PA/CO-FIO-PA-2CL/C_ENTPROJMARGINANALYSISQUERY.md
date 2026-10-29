---
name: C_ENTPROJMARGINANALYSISQUERY
description: "This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Contribution Margin Query — CDS view tiêu dùng dựa trên Contribution Margin Query."
keywords:
  - "Contribution Margin Query"
  - "contribution"
  - "margin"
  - "query"
  - "currency"
  - "field"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "ledger"
tags:
  - CO
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
  - stock
  - bo:project
---
# C_ENTPROJMARGINANALYSISQUERY

**This CDS view is designed to provide a comprehensive analysis of contribution margins across various dimensions such as products, projects, and fiscal periods. It aggregates financial data to calculate different types of contribution margins, including Contribution Margin I, II, and III, by considering billed revenue, sales deductions, cost of goods sold, price differences, and overhead costs. The view is intended for analytical purposes, allowing users to filter and analyze data based on multiple criteria such as company code, fiscal year, ledger, and product details. This CDS view provides the data to answer the following business questions: What is the contribution margin for specific products or projects within a given fiscal year or period? How do billed revenue, sales deductions, and revenue adjustments impact the overall contribution margin? What are the fixed and variable costs of goods sold, and how do they affect the contribution margin? How do price variances and overhead costs (administrative, sales, marketing, R&amp;D) influence the contribution margin? What is the margin per unit and margin percentage for Contribution Margin I and II? How does the contribution margin vary across different sales organizations, distribution channels, and customer groups? What is the impact of project stock on the contribution margin? Who is the project manager responsible for specific projects, and how do their projects perform in terms of contribution margin? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Role |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'BILL_REV' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `SalesDeductionAmountInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'SALES_DED' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'ADJ_REV' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `RecognizedRevnAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_REV' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `VarblCOGSAmtInDspCrcy` |  | |  | `cast( $projection.CostOfGoodsSoldAmtInDspCrcy - $projection.FxdCOGSAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `ContrbnMargin1AmtInDspCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy - $projection.FxdCOGSAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `FxdCOGSAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and AccountAssignmentType != 'OR' ) then FixedAmountInDspCrcy else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  | `cast( case when ( SemanticTag = 'PRICE_DIF' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `ContrbnMargin2AmtInDspCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `PeriodicCostAmtInDspCrcy` |  | |  | `cast( $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.MarketingOvhdAmtInDspCrcy + $projection.RnDOverheadAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `AdminOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_ADMIN' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `SalesOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_SALES' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `MarketingOvhdAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_MARKET' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `RnDOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_RND' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `ContrbnMargin3AmtInDspCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy + $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.MarketingOvhdAmtInDspCrcy + $projection.RnDOverheadAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `CostOfGoodsSoldAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and AccountAssignmentType != 'OR' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `BilledValnQtyInCostSourceUnit` |  | |  | `cast( case when SemanticTag = 'BILL_REV' then ValuationQuantity else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `MargPerUntAmtInDisplayCurrency` |  | |  | `$projection.ContrbnMargin1AmtInDspCrcy / $projection.BilledValnQtyInCostSourceUnit` | `DECF(34)` |  |
| `ContributionMargin2InPercent` |  | |  | `$projection.ContrbnMargin2AmtInDspCrcy / $projection.RecognizedRevnAmtInDspCrcy * 100` | `DECF(34)` |  |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PRSLS_STCK' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINANALYSISQUERY')/$value)*

```abap
@EndUserText.label: 'Contribution Margin Query'
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking:#REQUIRED
//@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_PRODMARGA_RB_EXIT'
//@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_EntProjMarginAnalysisQuery
  provider contract analytical_query
  with parameters
    @EndUserText.label: 'Financial Statement Version'
    @Consumption.valueHelpDefinition: [{
      entity: {
       name:    'I_GLAccountHierarchyStdVH',
       element: 'GLAccountHierarchy'
           }
      }]
    @Consumption.defaultValue: 'YPS2'
    P_GLAccountHierarchy       : fins_sem_tag_hryid,

    @Consumption.hidden: true    
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }         
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant          : fis_periv
    
//    @EndUserText.label:'Reporting Date'
//    @Semantics.businessDate.at: true
//    @Environment.systemField : #SYSTEM_DATE
//    P_ReportingDate              : vdm_v_key_date,
//
//    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
//                               resultElement: 'FiscalYearStartDate',
//                               binding: [ { targetElement: 'CalendarDate', type: #PARAMETER, value: 'P_ReportingDate' },
//                                          { targetElement: 'FiscalYearVariant',
//                                            type: #ELEMENT,
//                                            value: 'FiscalYearVariant' } ] }                                     
//    @Consumption.hidden: true
//    P_FiscalYearStartDate         : vdm_v_key_date
    
  as projection on I_EntProjMarginAnalysisCube
                                  ( P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                                  )
                                  as I_ProductMarginAnalysisCube
 {
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true, defaultValue: 'CCC  ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  CompanyCode
  ,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  @Consumption.dynamicLabel: { label: 'Ledger'}
  Ledger,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  LedgerFiscalYear,
  
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true}
  @Consumption.derivation: { lookupEntity: 'F_LdgrCoCodeFsclYrVariant',
                             resultElement: 'FiscalYearVariant',
                             resultAggregation: #MAX,
                             binding: [ { targetElement: 'Ledger',      type: #ELEMENT, value: 'Ledger'      },
                                          { targetElement: 'CompanyCode', type: #ELEMENT, value: 'CompanyCode' } ] }  
  @Semantics.fiscal.yearVariant: true
  FiscalYearVariant,
          
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,
  
  @UI.textArrangement: #TEXT_LAST
  FiscalYearPeriod,
  
  CurrencyRole,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @UI.textArrangement: #TEXT_LAST
  Product,  
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SalesDocument,
  @UI.textArrangement: #TEXT_LAST
  @Consumption.dynamicLabel: { label: 'Sales Document Item'}
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  SalesDocumentItem,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,
  SemanticTag,
  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,
  @UI.textArrangement: #TEXT_LAST
  BillToParty,
  @UI.textArrangement: #TEXT_LAST
  ShipToParty,
  
  @UI.textArrangement: #TEXT_LAST
  TradingPartner,
  
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,
  @UI.textArrangement: #TEXT_LAST
  DistributionChannel,
  @UI.textArrangement: #TEXT_LAST
  OrganizationDivision,
  @UI.textArrangement: #TEXT_LAST
  Segment,
  @UI.textArrangement: #TEXT_LAST
  Plant,
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @UI.textArrangement: #TEXT_LAST
  Project,  

  @UI.textArrangement: #TEXT_LAST
  ProjectProfileCode, 


  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID, 
  
//  @UI.textArrangement: #TEXT_LAST
//  WBSElement,   

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Status'
  @UI.textArrangement: #TEXT_LAST
  ProcessingStatus,  
  
  @EndUserText.label: 'WBS Element Internal ID'
  WBSElementInternalID,
  @EndUserText.label: 'WBS Element External ID'  
  WBSElementExternalID,
  
  @EndUserText.label: 'Billing Element'
  @UI.textArrangement: #TEXT_LAST
  BillingWBSElementExternalID,


  @UI.textArrangement: #TEXT_LAST
  ServiceDocument,
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentType,
  @UI.textArrangement: #TEXT_LAST
  ServiceContract,
  @UI.textArrangement: #TEXT_LAST      
  ServiceContractType,
  @UI.textArrangement: #TEXT_LAST      
  OrderID,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }    
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,
  
  @EndUserText.label: 'CO Debit/Credit Indicator'
  @UI.textArrangement: #TEXT_LAST
  ControllingDebitCreditCode,
    
  @Consumption.hidden: true
  CostSourceUnit,
       
  Currency,
  
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Amount in Display Currency'
  @Consumption.hidden: true
  AmountInDisplayCurrency,
  
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Fixed Amount in Display Currency'
  @Consumption.hidden: true
  FixedAmountInDspCrcy,
 
  
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Inpt Price Variance'
  @AnalyticsDetails.query.reverseSign: true
  InptPrVarcAmtInDspCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Output Price Variance'
  @AnalyticsDetails.query.reverseSign: true
  OutpPrVarcAmtInDspCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Input Quantity Variance'
  @AnalyticsDetails.query.reverseSign: true
  InptQtyVarcAmtInDspCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Resource Usage Variance'
  @AnalyticsDetails.query.reverseSign: true
  RsceUsgeVarcAmtInDspCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Lot Size Variancee'
  @AnalyticsDetails.query.reverseSign: true
  LotSizeVarcAmtInDspCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @EndUserText.label: 'Remaining Variance'
  @AnalyticsDetails.query.reverseSign: true
  InptRmngVarcAmtInDspCrcy,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Billed Revenue'
  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'BILL_REV'  ) then AmountInDisplayCurrency else null end  as abap.dec(23,2) )  as BilledRevenueAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Sales Deduction'
  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'SALES_DED'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )  as SalesDeductionAmountInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Revenue Adjustment'
  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'ADJ_REV'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )    as RevenueAdjustmentAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Recognized Revenue'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'RECO_REV' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )   as RecognizedRevnAmtInDspCrcy,

  @EndUserText.label: 'COGS Variable'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInDspCrcy'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.reverseSign: true
  cast(  $projection.CostOfGoodsSoldAmtInDspCrcy - $projection.FxdCOGSAmtInDspCrcy   as abap.dec(23,2) )            as VarblCOGSAmtInDspCrcy,

  @EndUserText.label: 'Contribution Margin I'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.reverseSign: true
  cast(  $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy +  $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy - $projection.FxdCOGSAmtInDspCrcy
  as abap.dec(23,2) )                                                                                               as ContrbnMargin1AmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @EndUserText.label: 'COGS Fixed'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'RECO_COS' and AccountAssignmentType != 'OR' ) then FixedAmountInDspCrcy else null end  as abap.dec(23,2) ) as FxdCOGSAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Price Difference'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'PRICE_DIF' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )  as PriceDiffAmtInDisplayCrcy,

  @EndUserText.label: 'Contribution Margin II'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInDspCrcy'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.reverseSign: true
  cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy +  $projection.RevenueAdjustmentAmtInDspCrcy
    + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy as abap.dec(23,2) )           as ContrbnMargin2AmtInDspCrcy,
  
  @EndUserText.label: 'Periodic Cost'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInDspCrcy'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.reverseSign: true
  cast( $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy +  $projection.MarketingOvhdAmtInDspCrcy
    + $projection.RnDOverheadAmtInDspCrcy as abap.dec(23,2) )           as PeriodicCostAmtInDspCrcy,
    
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Admin Overhead'
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'OVH_ADMIN'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )  as AdminOverheadAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Sales Overhead'
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'OVH_SALES'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )  as SalesOverheadAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Marketing Overhead'
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'OVH_MARKET'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) ) as MarketingOvhdAmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'R&D Overhead'
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'OVH_RND'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )    as RnDOverheadAmtInDspCrcy,


  @EndUserText.label: 'Contribution Margin III'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.reverseSign: true
  cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy +  $projection.RevenueAdjustmentAmtInDspCrcy
    + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy
    + $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.MarketingOvhdAmtInDspCrcy
    + $projection.RnDOverheadAmtInDspCrcy  as abap.dec(23,2) )                                                      as ContrbnMargin3AmtInDspCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'COGS'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'RECO_COS' and AccountAssignmentType != 'OR' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )   as CostOfGoodsSoldAmtInDspCrcy,

  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Billed Quantity'
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  @AnalyticsDetails.query.reverseSign: true
  cast( case when SemanticTag = 'BILL_REV' then ValuationQuantity else null end   as abap.dec(23,2) )    as BilledValnQtyInCostSourceUnit,

  @EndUserText.label: 'Margin per Unit (CM I)'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  @Aggregation.default: #FORMULA
  $projection.ContrbnMargin1AmtInDspCrcy / $projection.BilledValnQtyInCostSourceUnit     as MargPerUntAmtInDisplayCurrency,


  @AnalyticsDetails.query.axis: #ROWS
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Margin in Percent (CM II) %'
//  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  $projection.ContrbnMargin2AmtInDspCrcy / $projection.RecognizedRevnAmtInDspCrcy * 100      as ContributionMargin2InPercent,

//  @EndUserText.label: 'Ratio Unit %'
//  @AnalyticsDetails.query.axis: #COLUMNS
//  @UI.textArrangement: #TEXT_LAST
//  cast( '%' as abap.unit )                                                                                         as RatioUnit
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,
  @UI.textArrangement: #TEXT_LAST  
  PurchasingDocument,

  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Project Stock'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( SemanticTag = 'PRSLS_STCK'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )  as ProjAndSlsOrdStkAmtInDspCrcy,
   @Consumption.hidden: true 
  SourceLedger,
   @Consumption.hidden: true   
  AccountingDocument,
  @Consumption.hidden: true  
  LedgerGLLineItem,
  @Consumption.hidden: true  
  GLAccountHierarchy,     
  _DocumentStore,
  @UI.textArrangement: #TEXT_ONLY    
  WBSIsStatisticalWBSElement
      
}
where
//          PostingDate              >= $parameters.P_FiscalYearStartDate
//      and PostingDate              <= $parameters.P_ReportingDate
        ProjectProfileCode       = 'YP05'
```
