---
name: C_COMPANYMARGINQUERY
description: "Company Margin Query Template"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY')/$value
semantic_en: "Company Margin Query Template"
semantic_vi: "Company Margin Query Template — CDS view tiêu dùng dựa trên Company Margin Query Template."
keywords:
  - "Company Margin Query Template"
  - "company"
  - "margin"
  - "query"
  - "template"
  - "ledger"
  - "source"
  - "fiscal"
  - "year"
  - "period"
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
---
# C_COMPANYMARGINQUERY

**Company Margin Query Template**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `NetRevenueAmountInCoCodeCrcy` |  | |  | `cast( $projection.RevenueAmountInCompanyCodeCrcy + $projection.SalesDeductionAmtInCoCodeCrcy as fcopa_net_revenue_cccrcy )` | `CURR(23)` | Net Revenue in Company Code Currency |
| `RevenueAmountInCompanyCodeCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInCoCodeCrcy + $projection.RevenueAdjustmentAmtInCCCrcy as fcopa_revenue_cccrcy )` | `CURR(23)` | Net Revenue in Company Code Currency |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'BILL_REV' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trr_actrevn preserving type )` | `CURR(23)` | Actual Revenue |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'ADJ_REV' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fcopa_rev_adjustment_cccrcy preserving type )` | `CURR(23)` | Net Revenue in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'SALES_DED' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_sales_deduction preserving type )` | `CURR(23)` | Sales Deduction |
| `VarblCOGSAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmtInCoCodeCrcy ) else null end as fins_cogs preserving type )` | `CURR(23)` | Cost of Goods Sold - Total |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  | `cast ( $projection.NetRevenueAmountInCoCodeCrcy + $projection.VarblCOGSAmtInCCCrcy as fins_contribution_margin_i )` | `CURR(23)` | Contribution Margin I |
| `VarblMaterialCostInCoCodeCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmtInCoCodeCrcy ) else null end as fcopa_varmaterialcost_cccrcy preserving type )` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblActivityCostInCoCodeCrcy` |  | |  | `cast( $projection.VarblPersonnelTimeCostInCCCrcy + $projection.VarblMachineTimeCostInCCCrcy as fcopa_varactivitycost_cccrcy )` | `CURR(23)` | Variable Activity Cost in Company Code Currency |
| `VarblPersonnelTimeCostInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'COGS_PERT' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmtInCoCodeCrcy ) else null end as fcopa_varperstimecost_cccrcy )` | `CURR(23)` | Variable Personnel Time Cost in Company Code Currency |
| `VarblMachineTimeCostInCCCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmtInCoCodeCrcy ) else null end as fcopa_varmchntimecost_cccrcy )` | `CURR(23)` | Variable Machine Time Cost in Company Code Currency |
| `VarblOverheadCostInCCCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmtInCoCodeCrcy ) else null end as fcopa_varoverheadcost_cccrcy )` | `CURR(23)` | Variable Overhead Cost in Company Code Currency |
| `TravelCostInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'TRAVELCST' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_trav_cost_cocode preserving type )` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `PurchasedMaterialCostInCCCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'LIC_COST' or SemanticTag = 'SERVICECST' or SemanticTag = 'HRD_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fcopa_purchasedmatcost_cccrcy preserving type )` | `CURR(23)` | Purchased Material Cost in Company Code Currency |
| `VarblOtherCostInCoCodeCrcy` |  | |  | `cast ( $projection.VarblCOGSAmtInCCCrcy - $projection.VarblMaterialCostInCoCodeCrcy - $projection.VarblActivityCostInCoCodeCrcy - $projection.VarblOverheadCostInCCCrcy - $projection.TravelCostInCoCodeCrcy - $projection.PurchasedMaterialCostInCCCrcy as fcopa_varothercost_cccrcy )` | `CURR(23)` | Variable Other Cost in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInCoCodeCrcy ) else null end as fins_cogs_fixed_ccrcy preserving type )` | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `FixedMaterialCostInCoCodeCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInCoCodeCrcy ) else null end as fcopa_fxdmaterialcost_cccrcy preserving type )` | `CURR(23)` | Fixed Material Cost In Company Code Currency |
| `FixedActivityCostInCoCodeCrcy` |  | |  | `cast( $projection.FxdPersonnelTimeCostInCCCrcy + $projection.FxdMachineTimeCostInCCCrcy as fcopa_fxdactivitycost_cccrcy )` | `CURR(23)` | Fixed Activity Cost in Company Code Currency |
| `FxdPersonnelTimeCostInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'COGS_PERT' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInCoCodeCrcy ) else null end as fcopa_fxdperstimecost_cccrcy preserving type )` | `CURR(23)` | Fixed Personnel Time Cost in Company Code Currency |
| `FxdMachineTimeCostInCCCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInCoCodeCrcy ) else null end as fcopa_fxdmchntimecost_cccrcy preserving type )` | `CURR(23)` | Fixed Machine Time Cost in Company Code Currency |
| `FixedOverheadCostInCCCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInCoCodeCrcy ) else null end as fcopa_fixedoverheadcost_cccrcy preserving type )` | `CURR(23)` | Fixed Overhead Cost in Company Code Currency |
| `FixedOtherCostInCoCodeCrcy` |  | |  | `cast ( $projection.FxdCOGSAmtInCCCrcy - $projection.FixedMaterialCostInCoCodeCrcy - $projection.FixedActivityCostInCoCodeCrcy - $projection.FixedOverheadCostInCCCrcy as fcopa_fixedothercost_cccrcy )` | `CURR(23)` | Fixed Other Cost In Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` |  | |  | `cast( $projection.InptPriceVarcAmtInCoCodeCrcy + $projection.InptQtyVarcAmtInCoCodeCrcy + $projection.RsceUsgeVarcAmtInCoCodeCrcy + $projection.LotSizeVarcAmtInCoCodeCrcy + $projection.OutpPrVarcAmtInCoCodeCrcy + $projection.InputRmngVarcAmtInCoCodeCrcy as fins_price_differences_cccrcy )` | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09130' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_inptprvarcamt_in_cccrcy preserving type )` | `CURR(23)` | Input Price Variance Amount In Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09131' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_inptqtyvarcamt_in_cccrcy preserving type )` | `CURR(23)` | Input Quantity Variance Amount In Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09132' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_rsceusgevarcamt_in_cccrcy preserving type )` | `CURR(23)` | Resource Usage Variance Amount In Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09139' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_lotsizevarcamt_in_cccrcy preserving type )` | `CURR(23)` | Lot Size  Variance Amount In Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09138' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_outpprvarcamt_in_cccrcy preserving type )` | `CURR(23)` | Output Price  Variance Amount In Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09140' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fis_inptrmngvarcamt_in_cccrcy preserving type )` | `CURR(23)` | Input Remaining  Variance Amount In Company Code Currency |
| `WarrantyCostInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and BillableControl <> ' ' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fcopa_warrantycost_cccrcy preserving type )` | `CURR(23)` | Warranty Cost in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  | `cast ( $projection.ContrbnMargin1AmtInCoCodeCrcy + $projection.FxdCOGSAmtInCCCrcy + $projection.PriceDifferenceAmtInCCCrcy + $projection.WarrantyCostInCoCodeCrcy as fins_contribution_margin_ii )` | `CURR(23)` | Contribution Margin II |
| `PeriodicCostInCoCodeCrcy` |  | |  | `cast( $projection.MarketingOvhdAmtInCoCodeCrcy + $projection.SalesOverheadAmtInCoCodeCrcy + $projection.AdminOverheadAmtInCoCodeCrcy + $projection.RnDOverheadAmtInCCCrcy as fcopa_periodiccost_cccrcy )` | `CURR(23)` | Periodic Cost in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB35' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_marketing_overhead preserving type )` | `CURR(23)` | Marketing Overhead |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB30' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_sales_overhead preserving type )` | `CURR(23)` | Sales Overhead |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB40' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_administration_overhead preserving type )` | `CURR(23)` | Administration Overhead |
| `RnDOverheadAmtInCCCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB50' ) then ( InvertedAmtInCoCodeCurrency ) else null end as fins_resear_dev_overhead_ccrcy preserving type )` | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  | `cast ( $projection.ContrbnMargin2AmtInCoCodeCrcy + $projection.PeriodicCostInCoCodeCrcy as fins_contribution_margin_iii )` | `CURR(23)` | Contribution Margin III |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY, #KEY_USER_COPYING_TEMPLATE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
@Metadata.ignorePropagatedAnnotations: true //Not Supported
@EndUserText.label: 'Company Margin Query Template'



define transient view entity C_CompanyMarginQuery
  provider contract analytical_query
  with parameters
//    @Consumption.defaultValue: 'YPS2' //Not Supported
    @AnalyticsDetails.variable.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FINANCIALSTATEMENTHIERARCHY',
     element: 'GLAccountHierarchy'
         },
    useForValidation: true
    }]
    @EndUserText.label:'Financial Statement Version' 
    P_GLAccountHierarchy : fins_sem_tag_hryid,
    
    @Consumption.derivation: { lookupEntity: 'F_LeadingLedger', resultElement: 'Ledger' }
    @AnalyticsDetails.variable : { usageType: #FILTER, selectionType: #SINGLE, multipleSelections: false, mandatory: true }
    @EndUserText.label:'Ledger'    
    P_Ledger    : fis_rldnr,
    
    @AnalyticsDetails.variable : { usageType: #FILTER, selectionType: #SINGLE, multipleSelections: false, mandatory: true }
    @EndUserText.label:'Company Code'
    P_CompanyCode : fis_bukrs,

    @Consumption.derivation: {
      lookupEntity     : 'F_LdgrCoCodeFsclYrVariant',
      resultElement    : 'FiscalYearVariant',
      resultAggregation:  #MAX,
      binding          :  [
        { targetElement: 'Ledger',      type: #PARAMETER, value: 'P_Ledger' },
        { targetElement: 'CompanyCode', type: #PARAMETER, value: 'P_CompanyCode' }] 
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    @EndUserText.label:'Fiscal Year Variant' 
    P_FiscalYearVariant  : fis_periv,
   
    @Consumption.derivation: { lookupEntity: 'F_USERLOCALDATE',
                               resultElement: 'UserLocalDate' }
    @Semantics.businessDate.at: true
    @EndUserText.label:'Reporting Date'    
    P_KeyDate            : vdm_v_key_date,
    
    @Consumption.derivation: {
        lookupEntity: 'F_FISCALYEAR',
        resultElement: 'FiscalYear',
        binding: [
            { targetParameter: 'P_CalendarDate', type : #PARAMETER, value: 'P_KeyDate' },
            { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    @EndUserText.label:'Fiscal Year'    
    P_LedgerFiscalYear           : fis_gjahr_no_conv

  as projection on I_CompanyMarginCube as I_CompanyMarginCube
{

  //////////////////
  // Technical fields
  //////////////////

  @UI.textArrangement: #TEXT_LAST 
  Ledger,
  
  @Consumption.filter.hidden: true
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true}
  @Consumption.derivation: { lookupEntity: 'F_SourceLedger',
        resultElement: 'SourceLedger' , binding: [ { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' } ] }
  @AnalyticsDetails.query.axis:  #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @EndUserText.label:'Source Ledger'    
  @UI.textArrangement: #TEXT_LAST
  SourceLedger,

  @Semantics.fiscal.year: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @EndUserText.label:'Fiscal Year'
  @UI.textArrangement: #TEXT_LAST
  LedgerFiscalYear,

  @Semantics.fiscal.period: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Fiscal Period'
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod, 
  
  @Semantics.fiscal.yearPeriod: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Fiscal Year Period'
  @UI.textArrangement: #TEXT_LAST
  FiscalYearPeriod,

  @Semantics.fiscal.quarter: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Fiscal Quarter'
  @UI.textArrangement: #TEXT_LAST
  FiscalQuarter,

  @Semantics.fiscal.yearQuarter: true
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Fiscal Year Quarter'
  @UI.textArrangement: #TEXT_LAST
  FiscalYearQuarter,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  @EndUserText.label:'GL Account'
  @UI.textArrangement: #TEXT_LAST
  GLAccount,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Business Transaction Type'
  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Account Assignment Type'
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,  
  
  @EndUserText.label:'Billable Control'
  @UI.textArrangement: #TEXT_LAST
  BillableControl,  
  
  @Consumption.hidden: true
  @EndUserText.label:'Semantic Tag'
  @UI.textArrangement: #TEXT_LAST
  SemanticTag,
    

  //////////////////
  // Characteristics
  //////////////////

  @UI.textArrangement: #TEXT_LAST 
  CompanyCode,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Customer'
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Customer Group'
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Country/Region'
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Customer Supplier Industry'
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Sold Product'
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Sold Product Group'
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Subledger Account Line Item Type'
  @UI.textArrangement: #TEXT_LAST
  SubLedgerAcctLineItemType,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label:'Product'
  @UI.textArrangement: #TEXT_LAST
  Product,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label:'Partner Cost Center Activity Type'
  @UI.textArrangement: #TEXT_LAST
  PartnerCostCtrActivityType,  
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label:'Company ID of Trading Partner'
  @UI.textArrangement: #TEXT_LAST
  PartnerCompany,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label:'Partner Company Code'
  @UI.textArrangement: #TEXT_LAST
  PartnerCompanyCode,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Project External Identifier'
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'WBS Element External Identifier'
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  @EndUserText.label:'Profit Center'
  @UI.textArrangement: #TEXT_LAST
  ProfitCenter,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  @EndUserText.label:'Cost Center'
  @UI.textArrangement: #TEXT_LAST
  CostCenter,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Functional Area'
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Sales Organization'
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Sales Order'
  @UI.textArrangement: #TEXT_LAST
  SalesOrder,
  
  @EndUserText.label:'Sales Order Item'
  @UI.textArrangement: #TEXT_LAST
  SalesOrderItem,

  @Consumption.hidden: true
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Provider Contract Category'
  @UI.textArrangement: #TEXT_LAST
  ProviderContract,

  @Consumption.hidden: true
  @EndUserText.label:'Provider Contract Item'
  @UI.textArrangement: #TEXT_LAST
  ProviderContractItem,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Business Solution Order'
  @UI.textArrangement: #TEXT_LAST
  BusinessSolutionOrder,

  @EndUserText.label:'Business Solution Order Item'
  @UI.textArrangement: #TEXT_LAST
  BusinessSolutionOrderItem,
   
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Plant'
  @UI.textArrangement: #TEXT_LAST
  Plant,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Service Document Type'
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentType,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Service Document'
  @UI.textArrangement: #TEXT_LAST
  ServiceDocument,
  
  @EndUserText.label:'Service Document Item'
  @UI.textArrangement: #TEXT_LAST
  ServiceDocumentItem,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Distribution Channel'
  @UI.textArrangement: #TEXT_LAST
  DistributionChannel,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Division'
  @UI.textArrangement: #TEXT_LAST
  OrganizationDivision,
   
   

  //////////////////
  // Key figures
  //////////////////

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, defaultValue: 'CCC' }
  @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_CompanyMarginCurrencyField',
     element: 'CurrencyField'
         },
    useForValidation: true
    }]
  @EndUserText.label:'Currency Field' 
  CurrencyField,
  
  @EndUserText.label : 'Local Currency'
  @UI.textArrangement: #TEXT_LAST
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInCoCodeCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Net Revenue'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.RevenueAmountInCompanyCodeCrcy
        + $projection.SalesDeductionAmtInCoCodeCrcy as fcopa_net_revenue_cccrcy )                as NetRevenueAmountInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'NetRevenueAmountInCoCodeCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Revenue'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.BilledRevenueAmtInCoCodeCrcy
        + $projection.RevenueAdjustmentAmtInCCCrcy as fcopa_revenue_cccrcy )              as RevenueAmountInCompanyCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInCompanyCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Billed Revenue'
  @UI.textArrangement: #TEXT_LAST  
    cast( case when ( SemanticTag = 'BILL_REV' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_trr_actrevn preserving type )                            as BilledRevenueAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInCompanyCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Revenue Adjustment'
  @UI.textArrangement: #TEXT_LAST  
    cast( case when ( SemanticTag = 'ADJ_REV' )
      then ( InvertedAmtInCoCodeCurrency )
      else null end as fcopa_rev_adjustment_cccrcy preserving type )                          as RevenueAdjustmentAmtInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'NetRevenueAmountInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Sales Deduction'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'SALES_DED' )
      then ( InvertedAmtInCoCodeCurrency )
      else null end as fins_sales_deduction preserving type )                         as SalesDeductionAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Cost of Goods Sold - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'RECO_COS'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
               then ( InvertedVarblAmtInCoCodeCrcy )
               else null end as fins_cogs preserving type )                          as VarblCOGSAmtInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInCoCodeCrcy'
  @EndUserText.label : 'Contribution Margin I'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.NetRevenueAmountInCoCodeCrcy
         + $projection.VarblCOGSAmtInCCCrcy as fins_contribution_margin_i )          as ContrbnMargin1AmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Variable Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedVarblAmtInCoCodeCrcy )
             else null end as fcopa_varmaterialcost_cccrcy preserving type )           as VarblMaterialCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Activity Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.VarblPersonnelTimeCostInCCCrcy
        + $projection.VarblMachineTimeCostInCCCrcy as fcopa_varactivitycost_cccrcy ) as VarblActivityCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblActivityCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Personnel Time Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'COGS_PERT'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' )
                and BillableControl = ' ' )
             then ( InvertedVarblAmtInCoCodeCrcy )
       else null end as fcopa_varperstimecost_cccrcy )                               as VarblPersonnelTimeCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblActivityCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Machine Time Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedVarblAmtInCoCodeCrcy )
       else null end as fcopa_varmchntimecost_cccrcy )                               as VarblMachineTimeCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Overhead Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast(  case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' )
                 and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                   and BillableControl = ' ' )
                then ( InvertedVarblAmtInCoCodeCrcy )
       else null end as fcopa_varoverheadcost_cccrcy )                               as VarblOverheadCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Travel Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'TRAVELCST'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_trav_cost_cocode preserving type  )                     as TravelCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy' 
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Purchased Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'LIC_COST' or SemanticTag = 'SERVICECST' or SemanticTag = 'HRD_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' )
                  and BillableControl = ' ' )
               then ( InvertedAmtInCoCodeCurrency )
        else null end as fcopa_purchasedmatcost_cccrcy preserving type )             as PurchasedMaterialCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInCCCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Other Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.VarblCOGSAmtInCCCrcy
          - $projection.VarblMaterialCostInCoCodeCrcy
          - $projection.VarblActivityCostInCoCodeCrcy
          - $projection.VarblOverheadCostInCCCrcy
          - $projection.TravelCostInCoCodeCrcy
          - $projection.PurchasedMaterialCostInCCCrcy as fcopa_varothercost_cccrcy ) as VarblOtherCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Cost of Goods Sold - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'RECO_COS'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedFixedAmtInCoCodeCrcy )
             else null end as fins_cogs_fixed_ccrcy preserving type )                as FxdCOGSAmtInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Fixed Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedFixedAmtInCoCodeCrcy )
             else null end as fcopa_fxdmaterialcost_cccrcy preserving type )           as FixedMaterialCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInCCCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Activity Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.FxdPersonnelTimeCostInCCCrcy
        + $projection.FxdMachineTimeCostInCCCrcy as fcopa_fxdactivitycost_cccrcy )   as FixedActivityCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FixedActivityCostInCoCodeCrcy' 
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Personnel Time Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'COGS_PERT'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedFixedAmtInCoCodeCrcy )
       else null end as fcopa_fxdperstimecost_cccrcy preserving type )               as FxdPersonnelTimeCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FixedActivityCostInCoCodeCrcy' 
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Machine Time Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedFixedAmtInCoCodeCrcy )
       else null end as fcopa_fxdmchntimecost_cccrcy preserving type )               as FxdMachineTimeCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Overhead Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' )
                 and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                   and BillableControl = ' ' )
                then ( InvertedFixedAmtInCoCodeCrcy  )
        else null end as fcopa_fixedoverheadcost_cccrcy preserving type )            as FixedOverheadCostInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInCCCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Other Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.FxdCOGSAmtInCCCrcy
         - $projection.FixedMaterialCostInCoCodeCrcy
         - $projection.FixedActivityCostInCoCodeCrcy
         - $projection.FixedOverheadCostInCCCrcy as  fcopa_fixedothercost_cccrcy )   as FixedOtherCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Cost of Goods Sold - Price Differences'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.InptPriceVarcAmtInCoCodeCrcy
      + $projection.InptQtyVarcAmtInCoCodeCrcy
      + $projection.RsceUsgeVarcAmtInCoCodeCrcy
      + $projection.LotSizeVarcAmtInCoCodeCrcy
      + $projection.OutpPrVarcAmtInCoCodeCrcy
      + $projection.InputRmngVarcAmtInCoCodeCrcy as fins_price_differences_cccrcy )            as PriceDifferenceAmtInCCCrcy,
      
  @AnalyticsDetails.query.axis:  #ROWS        
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Input Price Variance'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09130' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fis_inptprvarcamt_in_cccrcy preserving type )                 as InptPriceVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Input Quantity Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
              and SubLedgerAcctLineItemType = '09131' )
     then ( InvertedAmtInCoCodeCurrency )
     else null end as fis_inptqtyvarcamt_in_cccrcy preserving type )                as InptQtyVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Resource Usage Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09132' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fis_rsceusgevarcamt_in_cccrcy preserving type )               as RsceUsgeVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Lot Size Variance'
  @UI.textArrangement: #TEXT_LAST
    cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09139' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fis_lotsizevarcamt_in_cccrcy preserving type )                as LotSizeVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Output Price Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09138' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fis_outpprvarcamt_in_cccrcy preserving type )                 as OutpPrVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDifferenceAmtInCCCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Input Remaining Variance'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09140' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fis_inptrmngvarcamt_in_cccrcy preserving type )               as InputRmngVarcAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Warranty Cost'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and BillableControl <> ' ' )
               then ( InvertedAmtInCoCodeCurrency )
       else null end as fcopa_warrantycost_cccrcy preserving type )                  as WarrantyCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInCoCodeCrcy'
  @EndUserText.label : 'Contribution Margin II'
  @UI.textArrangement: #TEXT_LAST
  cast ( $projection.ContrbnMargin1AmtInCoCodeCrcy
         + $projection.FxdCOGSAmtInCCCrcy
         + $projection.PriceDifferenceAmtInCCCrcy
         + $projection.WarrantyCostInCoCodeCrcy as fins_contribution_margin_ii )     as ContrbnMargin2AmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInCoCodeCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Periodic Cost'  
  @UI.textArrangement: #TEXT_LAST
  cast( $projection.MarketingOvhdAmtInCoCodeCrcy
        + $projection.SalesOverheadAmtInCoCodeCrcy
        + $projection.AdminOverheadAmtInCoCodeCrcy
        + $projection.RnDOverheadAmtInCCCrcy as fcopa_periodiccost_cccrcy )          as PeriodicCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Marketing Overhead'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and FunctionalArea = 'YB35' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_marketing_overhead preserving type )                    as MarketingOvhdAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Sales Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and FunctionalArea = 'YB30' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_sales_overhead preserving type )                        as SalesOverheadAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Administration Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT' 
                and FunctionalArea = 'YB40' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_administration_overhead preserving type )               as AdminOverheadAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostInCoCodeCrcy'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Research and Development Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT' 
                and FunctionalArea = 'YB50' )
       then ( InvertedAmtInCoCodeCurrency )
       else null end as fins_resear_dev_overhead_ccrcy preserving type )             as RnDOverheadAmtInCCCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label : 'Contribution Margin III'  
  @UI.textArrangement: #TEXT_LAST
  cast ( $projection.ContrbnMargin2AmtInCoCodeCrcy
         + $projection.PeriodicCostInCoCodeCrcy as fins_contribution_margin_iii )    as ContrbnMargin3AmtInCoCodeCrcy
         
  //_DocumentStore         

}
where
      GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  and LedgerFiscalYear   = $parameters.P_LedgerFiscalYear
  and Ledger             = $parameters.P_Ledger
  and CompanyCode        = $parameters.P_CompanyCode
```
