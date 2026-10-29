---
name: C_PRODCOSTBRKDWNCOMPRNQRY
description: "This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value
semantic_en: "This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Cost Breakdown Comparison - Qry — CDS view tiêu dùng dựa trên Product Cost Breakdown Comparison - Qry."
keywords:
  - "Product Cost Breakdown Comparison - Qry"
  - "product"
  - "cost"
  - "breakdown"
  - "comparison"
  - "qry"
  - "currency"
  - "field"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "ledger"
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
  - document
  - lob:controlling
  - lob:finance
  - product
  - bo:material
---
# C_PRODCOSTBRKDWNCOMPRNQRY

**This CDS view is designed to provide a detailed comparison of product cost breakdowns over different fiscal periods. It allows users to analyze and compare costs associated with products, taking into account various fiscal parameters and breakdown methods. This CDS view provides the data to answer the following business questions: What are the cost breakdowns for products in the current fiscal period compared to the previous fiscal period? How do the costs of goods sold (COGS) vary between variable and fixed components? What is the percentage change in cost breakdown components between the current and previous fiscal periods? How do the costs in the current fiscal year period compare to the same period in the previous fiscal year? What are the differences in reporting period costs between the current fiscal year and the previous fiscal year? How do the costs for specific products, customer groups, or sales documents compare across different fiscal periods? What is the impact of different cost breakdown methods on the overall product cost analysis? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value) |

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
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ComponentBreakdownMethod` |  | |  |  | `CHAR(4)` | Component Breakdown Method |
| `CostBreakdownStructure` |  | |  |  | `CHAR(2)` | Cost Breakdown Structure |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostBreakdownComponent` |  | |  |  | `CHAR(10)` |  |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `VarblCOGSAmtInDspCrcy` |  | |  | `$projection.amountindisplaycurrency - $projection.fixedamountindspcrcy` | `CURR(24)` |  |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` | `UNIT(3)` |  |
| `CurrentFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PreviousFYPeriodValue` |  | |  | `cast( case when ( FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodValue` |  | |  | `cast( $projection.CurrentFYPeriodValue - $projection.PreviousFYPeriodValue as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=> abs( $projection.PreviousFYPeriodValue ) ) * 100` | `DECF(34)` |  |
| `PrevYearCurrentFYPeriodValue` |  | |  | `cast(case when (FiscalYearPeriod = $parameters.P_FiscalYearPeriodPrevYear) then 1 else null end as abap.dec(23,2))` | `DEC(23)` |  |
| `DeltaCurFYPerPreFYPerValue` |  | |  | `$projection.CurrentFYPeriodValue - $projection.PrevYearCurrentFYPeriodValue` | `DEC(24)` |  |
| `DeltaCurFYPerPreFYPerRatio` |  | |  | `ratio_of(portion => $projection.DeltaCurFYPerPreFYPerValue, total => abs( $projection.PrevYearCurrentFYPeriodValue) ) * 100` | `DECF(34)` |  |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTBRKDWNCOMPRNQRY')/$value)*

```abap
@EndUserText.label: 'Product Cost Breakdown Comparison - Qry'
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

//@OData.publish: true  //Used for Joule AI , but Two-structure query cannot be used for an OData query.annot be used

define transient view entity C_ProdCostBrkDwnComprnQry
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

    @EndUserText.label: 'Cost Breakdown Method'
    @Consumption.defaultValue: 'CBPB'
//    @Consumption.valueHelpDefinition: [{
//        entity: {
//            name:    'I_CostBreakdownMethodVH',
//            element: 'ComponentBreakdownMethod'
//        }
//        }]
    P_ComponentBreakdownMethod : fucb_method,

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
    
  as projection on I_ProdMargCostBrkDwnCube
                                  ( 
                                    P_ComponentBreakdownMethod : 'CBPB',
                                    P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                                  )  as I_ProdMargCostBrkDwnCube

{
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true, defaultValue: 'GC  ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,
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
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,
  
  @UI.textArrangement: #TEXT_LAST
  @Consumption.dynamicLabel: { label: 'Sales Document Item'}
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  SalesDocumentItem,
  
  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,
  @UI.textArrangement: #TEXT_LAST
  BillToParty,
  @UI.textArrangement: #TEXT_LAST
  ShipToParty,
  @UI.textArrangement: #TEXT_LAST
  TradingPartner,
  @EndUserText.label: 'Cost Breakdown Method'
  @UI.textArrangement: #TEXT_LAST
  ComponentBreakdownMethod,
  @EndUserText.label: 'Cost Breakdown Structure'
  @UI.textArrangement: #TEXT_LAST
  CostBreakdownStructure,
  
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,
  
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,
  
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,
  @UI.textArrangement: #TEXT_LAST
  DistributionChannel,
  @UI.textArrangement: #TEXT_LAST
  OrganizationDivision,
  @UI.textArrangement: #TEXT_LAST
  Plant,
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,
  
  @AnalyticsDetails.query.axis: #ROWS
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.totals: #SHOW 
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  @EndUserText.label: 'Cost Breakdown Component'
  CostBreakdownComponent,

  Currency,

  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'COGS'
  @AnalyticsDetails.query.reverseSign: true
  AmountInDisplayCurrency,
  
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'COGS Variable'
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.reverseSign: true
  $projection.amountindisplaycurrency -   $projection.fixedamountindspcrcy   as VarblCOGSAmtInDspCrcy,
  
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'COGS Fixed'
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.reverseSign: true
  FixedAmountInDspCrcy,

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
  ratio_of( portion=>$projection.DeltaCurPrevFYPeriodValue, total=> abs( $projection.PreviousFYPeriodValue ) )  * 100          as DeltaCurPrevFYPeriodRatio,

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
           total   => abs( $projection.PrevYearCurrentFYPeriodValue)  ) * 100                       as DeltaCurFYPerPreFYPerRatio,
           
  @UI.textArrangement: #TEXT_LAST
  Product,
  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,
  @UI.textArrangement: #TEXT_LAST
  ReferenceDocumentType,
  @UI.textArrangement: #TEXT_LAST
  InventoryValuationType,
  
  @UI.textArrangement: #TEXT_LAST
  SourceLedger,
  @UI.textArrangement: #TEXT_LAST
  AccountingDocument,
  @UI.textArrangement: #TEXT_LAST
  LedgerGLLineItem,
  
  _DocumentStore
}

where
   ComponentBreakdownMethod = $parameters.P_ComponentBreakdownMethod and 
    ( LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
   or LedgerFiscalYear  = $parameters.P_PreviousLedgerFiscalYear )
and PostingDate        <= $parameters.P_ReportingDate
```
