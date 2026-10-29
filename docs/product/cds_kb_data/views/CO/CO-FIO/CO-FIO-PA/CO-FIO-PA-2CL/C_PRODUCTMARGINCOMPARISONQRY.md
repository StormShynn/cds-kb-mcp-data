---
name: C_PRODUCTMARGINCOMPARISONQRY
description: "This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Margin Comparison - Query — CDS view tiêu dùng dựa trên Product Margin Comparison - Query."
keywords:
  - "Product Margin Comparison - Query"
  - "product"
  - "margin"
  - "comparison"
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
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - product
  - bo:material
---
# C_PRODUCTMARGINCOMPARISONQRY

**This CDS view is designed to provide a comprehensive analysis of product margins by comparing financial data across different fiscal periods. It enables users to evaluate the performance of products by analyzing various financial metrics such as revenue, cost of goods sold, overhead costs, and contribution margins. The view facilitates the comparison of current fiscal period data with previous periods, allowing for insights into trends and variances in product profitability. This CDS view provides the data to answer the following business questions: What is the product margin for the current fiscal period compared to previous periods? How do input and output price variances affect the overall product margin? What is the impact of resource usage and lot size variances on product profitability? How do sales deductions and revenue adjustments influence recognized revenue? What are the contributions of fixed and variable costs to the overall cost of goods sold? How do overhead costs such as administrative, sales, marketing, and R&amp;D affect contribution margins? What is the margin per unit and margin percentage for contribution margins I and II? How does the current fiscal period's performance compare to the previous fiscal year period? What are the differences and percentage changes between the current fiscal period and the previous fiscal year period? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value) |

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
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
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
| `FxdCOGSAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' ) then FixedAmountInDspCrcy else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  | `cast( case when ( SemanticTag = 'PRICE_DIF' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `ContrbnMargin2AmtInDspCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `PeriodicCostAmtInDspCrcy` |  | |  | `cast( $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.MarketingOvhdAmtInDspCrcy + $projection.RnDOverheadAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `AdminOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_ADMIN' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `SalesOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_SALES' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `MarketingOvhdAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_MARKET' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `RnDOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'OVH_RND' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `ContrbnMargin3AmtInDspCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.SalesDeductionAmountInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy + $projection.CostOfGoodsSoldAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy + $projection.AdminOverheadAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.MarketingOvhdAmtInDspCrcy + $projection.RnDOverheadAmtInDspCrcy as abap.dec(23,2) )` | `DEC(23)` |  |
| `CostOfGoodsSoldAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `BilledValnQtyInCostSourceUnit` |  | |  | `cast( case when SemanticTag = 'BILL_REV' then ValuationQuantity else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `MargPerUntAmtInDisplayCurrency` |  | |  | `$projection.ContrbnMargin1AmtInDspCrcy / $projection.BilledValnQtyInCostSourceUnit` | `DECF(34)` |  |
| `ContributionMargin2InPercent` |  | |  | `$projection.ContrbnMargin2AmtInDspCrcy / $projection.RecognizedRevnAmtInDspCrcy * 100` | `DECF(34)` |  |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` | `UNIT(3)` |  |
| `CurrentFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PreviousFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodValue` |  | |  | `cast( $projection.CurrentFYPeriodValue - $projection.PreviousFYPeriodValue as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=> abs( $projection.PreviousFYPeriodValue ) ) * 100` | `DECF(34)` |  |
| `PrevYearCurrentFYPeriodValue` |  | |  | `cast(case when (FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear) then 1 else null end as abap.dec(23,2))` | `DEC(23)` |  |
| `DeltaCurFYPerPreFYPerValue` |  | |  | `$projection.CurrentFYPeriodValue - $projection.PrevYearCurrentFYPeriodValue` | `DEC(24)` |  |
| `DeltaCurFYPerPreFYPerRatio` |  | |  | `ratio_of(portion => $projection.DeltaCurFYPerPreFYPerValue, total => abs( $projection.PrevYearCurrentFYPeriodValue) ) * 100` | `DECF(34)` |  |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTMARGINCOMPARISONQRY')/$value)*

```abap
@EndUserText.label: 'Product Margin Comparison - Query'
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
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_PRODMARGA_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'

define transient view entity C_ProductMarginComparisonQry
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
    
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }         
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant          : fis_periv,
    
    @EndUserText.label:'Reporting Date'
    @Semantics.businessDate.at: true
    @Environment.systemField : #SYSTEM_DATE
    P_ReportingDate              : vdm_v_key_date,

    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearStartDate',
                               binding: [ { targetElement: 'CalendarDate', type: #PARAMETER, value: 'P_ReportingDate' },
                                          { targetElement: 'FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }                                     
    @Consumption.hidden: true
    P_FiscalYearStartDate         : vdm_v_key_date,

    // Key Date in Previous Fiscal Year
    @Consumption.derivation: { lookupEntity: 'F_FiscalCalendarDayShift',
                               resultElement: 'ShiftedCalendarDate',
                               binding: [ { targetParameter: 'P_CalendarDate', type: #PARAMETER, value: 'P_ReportingDate' },
                                          { targetParameter: 'P_FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' },
                                          { targetParameter: 'P_FsclTimePeriodOffsetDuration',
                                            type: #CONSTANT,
                                            value: '-365' } ] }
    @Consumption.hidden: true
    P_ComparisonReportingDate     : vdm_v_key_date,


    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearStartDate',
                               binding: [ { targetElement: 'CalendarDate',
                                            type: #PARAMETER,
                                            value: 'P_ComparisonReportingDate' },
                                          { targetElement: 'FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }
    @Consumption.hidden: true
    P_PreviousFiscalYearStartDate : vdm_v_key_date,
    
    // Fiscal Year
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYear',
                               binding: [ { targetElement: 'CalendarDate', type: #PARAMETER, value: 'P_ReportingDate' },
                                          { targetElement: 'FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    P_FiscalYear                  : fis_gjahr_no_conv,

    // Fiscal Period
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalPeriod',
                               binding: [ { targetElement: 'CalendarDate', type: #PARAMETER, value: 'P_ReportingDate' },
                                          { targetElement: 'FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }
    @Consumption.hidden: true
    @Semantics.fiscal.period: true
    P_FiscalPeriod                : fins_fiscalperiod,

    @Consumption.derivation: { lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
                               resultElement: 'FiscalYearPeriod',
                               binding: [ { targetParameter: 'P_FiscalYear', type: #PARAMETER, value: 'P_FiscalYear' },
                                          { targetParameter: 'P_FiscalPeriod', type: #PARAMETER, value: 'P_FiscalPeriod' },
                                          { targetParameter: 'P_FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod            : fis_jahrper_conv,

    // 'Previous Fiscal Year Period' 
    @EndUserText.label: 'Previous Fiscal Year Period' 
    @Consumption.derivation: {
         lookupEntity: 'F_FiscalYearPeriodShift',
         resultElement: 'ShiftedFiscalYearPeriod',
         binding: [
             { targetParameter: 'P_FiscalYearPeriod', type : #PARAMETER, value: 'P_FiscalYearPeriod' },
             { targetParameter: 'P_FiscalYearVariant', type: #ELEMENT, value: 'FiscalYearVariant'},
             { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
             { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'P' } ]
     }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,

    // Previous Fiscal Year
    @Consumption.derivation: { lookupEntity: 'F_FiscalYearShift',
                               resultElement: 'ShiftedFiscalYear',
                               binding: [ { targetParameter: 'P_FiscalYear', type: #PARAMETER, value: 'P_FiscalYear' },
                                          { targetParameter: 'P_FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' },
                                          { targetParameter: 'P_FsclTimePeriodOffsetDuration',
                                            type: #CONSTANT,
                                            value: '-1' },
                                          { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type: #CONSTANT, value: 'Y' } ] }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    P_PreviousFiscalYear          : fis_gjahr_no_conv,
    
    // Same Period in Previous Fiscal Year'
    @Consumption.derivation: { lookupEntity: 'I_FiscalYearPeriod',
                               resultElement: 'FiscalYearPeriod',
                               binding: [ { targetElement: 'FiscalYear', type: #PARAMETER, value: 'P_PreviousFiscalYear' },
                                          { targetElement: 'FiscalPeriod', type: #PARAMETER, value: 'P_FiscalPeriod' },
                                          { targetElement: 'FiscalYearVariant',
                                            type: #ELEMENT,
                                            value: 'FiscalYearVariant' } ] }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriodPrevYear    : fis_jahrper_conv,

    // 'Fiscal Year'    
    @EndUserText.label:'Fiscal Year'    
    @Consumption.derivation: {
        lookupEntity: 'F_FISCALYEAR',
        resultElement: 'FiscalYear',
        binding: [
            { targetParameter: 'P_CalendarDate', type : #PARAMETER, value: 'P_ReportingDate' },
            { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    P_LedgerFiscalYear           : fis_gjahr_no_conv,
    
    // 'Previous Fiscal Year'
    @EndUserText.label: 'Previous Fiscal Year'
    @Consumption.derivation: {
    lookupEntity: 'F_FiscalYearShift',
    resultElement: 'ShiftedFiscalYear',
    binding : [
        { targetParameter : 'P_FiscalYear', type: #PARAMETER, value: 'P_LedgerFiscalYear' },
        { targetParameter : 'P_FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' },
        { targetParameter : 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT, value: '-1' },
        { targetParameter : 'P_FiscalTimePeriodOffsetUnit', type: #CONSTANT, value: 'Y' } ]
    }
    @Consumption.hidden :true
    @Semantics.fiscal.year: true
    P_PreviousLedgerFiscalYear : fis_gjahr_no_conv
    
  as projection on I_ProductMarginAnalysisCube 
                                  ( P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                                  )
                                  as I_ProductMarginAnalysisCube
 {
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true, defaultValue: 'GC  ' }
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
  
  @UI.textArrangement: #TEXT_LAST
  CurrencyRole,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,
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
  
  
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,
  
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
  cast( case when ( SemanticTag = 'RECO_COS' ) then FixedAmountInDspCrcy else null end  as abap.dec(23,2) ) as FxdCOGSAmtInDspCrcy,

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
  cast( case when ( SemanticTag = 'RECO_COS'  ) then AmountInDisplayCurrency else null end as abap.dec(23,2) )   as CostOfGoodsSoldAmtInDspCrcy,

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

  @EndUserText.label: 'Ratio Unit %'
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.textArrangement: #TEXT_LAST
  cast( '%' as abap.unit )                                                                                         as RatioUnit,

 //  ------ Fiscal Period Structure--------
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Reporting Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}] }
  @AnalyticsDetails.query.axis: #COLUMNS
  cast( case when
    (
    FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
    )  then 1
    else null end as abap.dec( 23, 2 ) )                                        as CurrentFYPeriodValue,

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Previous Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}] }
  @AnalyticsDetails.query.axis: #COLUMNS
  cast( case when
    (
    FiscalYearPeriod  = $parameters.P_PreviousFiscalYearPeriod
    )  then 1
    else null end as abap.dec( 23, 2 ) )                                        as PreviousFYPeriodValue,

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
  @Consumption.dynamicLabel: { label: 'RP &1 △ PP &2',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'},
                                         { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}] }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  cast( $projection.CurrentFYPeriodValue - $projection.PreviousFYPeriodValue as abap.dec( 23, 2 ) )       as DeltaCurPrevFYPeriodValue ,    
  

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label: '% RP &1 △ PP &2',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}, 
                                         { index: 2, parameter: 'P_PreviousFiscalYearPeriod'}] }
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals:2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=> abs( $projection.PreviousFYPeriodValue ) ) * 100          as DeltaCurPrevFYPeriodRatio,
  
  //  -------------------------------------------------------------------------
  //  -- Fiscal Period: current Year Period vs. previous Year Period ----
  //  -------------------------------------------------------------------------
  @AnalyticsDetails.query: { onCharacteristicStructure: true, axis: #COLUMNS }
  @Consumption.dynamicLabel: { label: 'Reporting Period Previous FY &1',
                               binding: [ { index: 1, parameter: 'P_FiscalYearPeriodPrevYear' } ] }
  @EndUserText.label: 'Reporting Period Previous FY'
  @UI.fieldGroup: [ { qualifier: 'PeriodComp', groupLabel: 'Period Comparison' } ] 
  cast(case when (FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear)  then 1 else null
    end                                                 as abap.dec(23,2))                  as PrevYearCurrentFYPeriodValue,

  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query: { onCharacteristicStructure: true, collisionHandling.formula: #THIS, axis: #COLUMNS }
  @Consumption.dynamicLabel: { label: 'Diff. RP &1 - RP in PY &2',
                               binding: [ { index: 1, parameter: 'P_FiscalYearPeriod'         },
                                          { index: 2, parameter: 'P_FiscalYearPeriodPrevYear' } ] }
  @EndUserText.label: 'Diff. RP - RP in PY'
  @UI.fieldGroup: [ { qualifier: 'PeriodComp', groupLabel: 'Period Comparison' } ] 
  $projection.CurrentFYPeriodValue - $projection.PrevYearCurrentFYPeriodValue               as DeltaCurFYPerPreFYPerValue,


  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query: { onCharacteristicStructure: true,
                             collisionHandling.formula: #THIS,
                             axis: #COLUMNS,
                             decimals: 2 }
  @Consumption.dynamicLabel: { label: '% Diff. RP &1 - RP in PY &2',
                               binding: [ { index: 1, parameter: 'P_FiscalYearPeriod'         },
                                          { index: 2, parameter: 'P_FiscalYearPeriodPrevYear' } ] }
  @EndUserText.label: '% Diff. RP - RP in PY'
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  @UI.fieldGroup: [ { qualifier: 'PeriodComp', groupLabel: 'Period Comparison' } ] 
  ratio_of(portion => $projection.DeltaCurFYPerPreFYPerValue,
           total   => abs( $projection.PrevYearCurrentFYPeriodValue) ) * 100                       as DeltaCurFYPerPreFYPerRatio,
           
  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,
  @UI.textArrangement: #TEXT_LAST
  ReferenceDocumentType,
  @UI.textArrangement: #TEXT_LAST
  InventoryValuationType,
  @UI.textArrangement: #TEXT_LAST
  Product,
  
  @UI.textArrangement: #TEXT_LAST
  SourceLedger,
  @UI.textArrangement: #TEXT_LAST
  AccountingDocument,
  @UI.textArrangement: #TEXT_LAST
  LedgerGLLineItem,
  @UI.textArrangement: #TEXT_LAST
  GLAccountHierarchy,
  _DocumentStore
}
where
    ( FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
   or FiscalYearPeriod  = $parameters.P_PreviousFiscalYearPeriod
   or FiscalYearPeriod  = $parameters.P_FiscalYearPeriodPrevYear )
and PostingDate        <= $parameters.P_ReportingDate
```
