---
name: C_COMPANYMARGINQUERY_2
description: "Company Margin Template Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value
semantic_en: "Company Margin Template Query"
semantic_vi: "Company Margin Template Query — CDS view tiêu dùng dựa trên Company Margin Template Query."
keywords:
  - "Company Margin Template Query"
  - "company"
  - "margin"
  - "template"
  - "query"
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
# C_COMPANYMARGINQUERY_2

**Company Margin Template Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value) |

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
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
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
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
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
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `NetRevenueAmountInDspCrcy` |  | |  | `cast( $projection.RevenueAmountInDisplayCrcy + $projection.SalesDeductionAmountInDspCrcy as fcopa_net_revenue_dspcrcy )` | `CURR(23)` | Net Revenue in Display Currency |
| `RevenueAmountInDisplayCrcy` |  | |  | `cast( $projection.BilledRevenueAmtInDspCrcy + $projection.RevenueAdjustmentAmtInDspCrcy as fis_revenue_amount_dsp_crcy )` | `CURR(23)` | Revenue Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'BILL_REV' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_trr_actrevn preserving type )` | `CURR(23)` | Actual Revenue |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'ADJ_REV' ) then ( InvertedAmountInDisplayCrcy ) else null end as fcopa_rev_adjustment_dspcrcy preserving type )` | `CURR(23)` | Net Revenue in Display Currency |
| `SalesDeductionAmountInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'SALES_DED' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_sales_deduction preserving type )` | `CURR(23)` | Sales Deduction |
| `VarblCOGSAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmountInDspCrcy ) else null end as fins_cogs preserving type )` | `CURR(23)` | Cost of Goods Sold - Total |
| `ContrbnMargin1AmtInDspCrcy` |  | |  | `cast ( $projection.NetRevenueAmountInDspCrcy + $projection.VarblCOGSAmtInDspCrcy as fins_contribution_margin_i )` | `CURR(23)` | Contribution Margin I |
| `VarblMaterialCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmountInDspCrcy ) else null end as fcopa_varmaterialcost_dspcrcy preserving type )` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblActivityCostInDspCrcy` |  | |  | `cast( $projection.VarblPersonnelTmeCostInDspCrcy + $projection.VarblMachineTimeCostInDspCrcy as fcopa_varmaterialcost_dspcrcy )` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblPersonnelTmeCostInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'COGS_PERT' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmountInDspCrcy ) else null end as fcopa_varperstimecost_dspcrcy )` | `CURR(23)` | Variable Personnel Time Cost in Display Currency |
| `VarblMachineTimeCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmountInDspCrcy ) else null end as fcopa_varmchntimecost_dspcrcy )` | `CURR(23)` | Variable Machine Time Cost in Company Code Currency |
| `VarblOverheadCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedVarblAmountInDspCrcy ) else null end as fcopa_varoverheadcost_dspcrcy )` | `CURR(23)` | Variable Overhead Cost in Display Currency |
| `TravelCostAmountInDspCurrency` |  | |  | `cast( case when ( SemanticTag = 'TRAVELCST' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_trav_cost_dspcrcy preserving type )` | `CURR(23)` | Travel Cost Amount in Display Currency |
| `PurchasedMaterialCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'LIC_COST' or SemanticTag = 'SERVICECST' or SemanticTag = 'HRD_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedAmountInDisplayCrcy ) else null end as fcopa_purchasedmatcost_dspcrcy preserving type )` | `CURR(23)` | Purchased Material Cost in Display Currency |
| `VarblOtherCostInDspCrcy` |  | |  | `cast ( $projection.VarblCOGSAmtInDspCrcy - $projection.VarblMaterialCostInDspCrcy - $projection.VarblActivityCostInDspCrcy - $projection.VarblOverheadCostInDspCrcy - $projection.TravelCostAmountInDspCurrency - $projection.PurchasedMaterialCostInDspCrcy as fcopa_varothercost_dspcrcy )` | `CURR(23)` | Variable Other Cost in Display Currency |
| `FxdCOGSAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'RECO_COS' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInDspCrcy ) else null end as fins_cogs_fixed_dsprcy preserving type )` | `CURR(23)` | COGS - Fixed Amount in Display Currency |
| `FixedMaterialCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInDspCrcy ) else null end as fcopa_fxdmaterialcost_dspcrcy preserving type )` | `CURR(23)` | Fixed Material Cost In Display Currency |
| `FixedActivityCostInDspCrcy` |  | |  | `cast( $projection.FxdPersCostsAmtInDspCurrency + $projection.FxdMchnTmeAmtInDisplayCurrency as fcopa_fxdactivitycost_dspcrcy )` | `CURR(23)` | Fixed Activity Cost in Display Currency |
| `FxdPersCostsAmtInDspCurrency` |  | |  | `cast( case when ( SemanticTag = 'COGS_PERT' and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInDspCrcy ) else null end as fcopa_fxdperstimecost_dspcrcy preserving type )` | `CURR(23)` | Fixed Personnel Time Cost in Display Currency |
| `FxdMchnTmeAmtInDisplayCurrency` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInDspCrcy ) else null end as fcopa_fxdmchntimecost_dspcrcy preserving type )` | `CURR(23)` | Fixed Machine Time Cost in Display Currency |
| `FixedOverheadCostInDspCrcy` |  | |  | `cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' ) and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' ) and BillableControl = ' ' ) then ( InvertedFixedAmtInDspCrcy ) else null end as fcopa_fxdoverheadcost_dspcrcy preserving type )` | `CURR(23)` | Fixed Overhead Cost in Display Currency |
| `FixedOtherCostInDspCrcy` |  | |  | `cast ( $projection.FxdCOGSAmtInDspCrcy - $projection.FixedMaterialCostInDspCrcy - $projection.FixedActivityCostInDspCrcy - $projection.FixedOverheadCostInDspCrcy as fcopa_fixedothercost_dspcrcy )` | `CURR(23)` | Fixed Other Cost In Display Currency |
| `PriceDiffAmtInDisplayCrcy` |  | |  | `cast( $projection.InptPrVarcAmtInDspCrcy + $projection.InptQtyVarcAmtInDspCrcy + $projection.RsceUsgeVarcAmtInDspCrcy + $projection.LotSizeVarcAmtInDspCrcy + $projection.OutpPrVarcAmtInDspCrcy + $projection.InptRmngVarcAmtInDspCrcy as fins_price_differences_dspcrcy )` | `CURR(23)` | COGS - Price Differences Amount in Display Currency |
| `InptPrVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09130' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_inptprvarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09131' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_inptqtyvarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09132' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_rsceusgevarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Resource Usage Variance |
| `LotSizeVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09139' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_lotsizevarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Lot Size Variance |
| `OutpPrVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09138' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_outpprvarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Output Price Variance |
| `InptRmngVarcAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and SubLedgerAcctLineItemType = '09140' ) then ( InvertedAmountInDisplayCrcy ) else null end as fis_inptrmngvarcamt_in_dspcrcy preserving type )` | `CURR(23)` | Remaining Input Variance |
| `WarrantyCostInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and BillableControl <> ' ' ) then ( InvertedAmountInDisplayCrcy ) else null end as fcopa_warrantycost_dspcrcy preserving type )` | `CURR(23)` | Warranty Cost in Display Currency |
| `ContrbnMargin2AmtInDspCrcy` |  | |  | `cast ( $projection.ContrbnMargin1AmtInDspCrcy + $projection.FxdCOGSAmtInDspCrcy + $projection.PriceDiffAmtInDisplayCrcy + $projection.WarrantyCostInDspCrcy as fins_contribution_margin_ii )` | `CURR(23)` | Contribution Margin II |
| `PeriodicCostAmtInDspCrcy` |  | |  | `cast( $projection.MarketingOvhdAmtInDspCrcy + $projection.SalesOverheadAmtInDspCrcy + $projection.AdminOverheadAmtInDspCrcy + $projection.RnDOverheadAmtInDspCrcy as fcopa_periodiccost_dspcrcy )` | `CURR(23)` | Periodic Cost in Display Currency |
| `MarketingOvhdAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB35' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_marketing_overhead preserving type )` | `CURR(23)` | Marketing Overhead |
| `SalesOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB30' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_sales_overhead preserving type )` | `CURR(23)` | Sales Overhead |
| `AdminOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB40' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_administration_overhead preserving type )` | `CURR(23)` | Administration Overhead |
| `RnDOverheadAmtInDspCrcy` |  | |  | `cast( case when ( SemanticTag = 'PL_RESULT' and FunctionalArea = 'YB50' ) then ( InvertedAmountInDisplayCrcy ) else null end as fins_rnd_overhead_dspcrcy preserving type )` | `CURR(23)` | COGS - Research and Dev Overhead Amount |
| `ContrbnMargin3AmtInDspCrcy` |  | |  | `cast ( $projection.ContrbnMargin2AmtInDspCrcy + $projection.PeriodicCostAmtInDspCrcy as fins_contribution_margin_iii )` | `CURR(23)` | Contribution Margin III |
| `BilledValnQtyInCostSourceUnit` |  | |  | `cast( case when SemanticTag = 'BILL_REV' then ValuationQuantity else null end as abap.dec(23,2) )` | `DEC(23)` |  |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value)*

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
@EndUserText.label: 'Company Margin Template Query'

define transient view entity C_CompanyMarginQuery_2
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
    
//    @AnalyticsDetails.variable.defaultValue: 'CCC'
//    @AnalyticsDetails.variable : { usageType: #FILTER, selectionType: #SINGLE, multipleSelections: true, mandatory: true }    
//    @Consumption.valueHelpDefinition: [{
//    entity: {
//     name:    'I_CompanyMarginCurrencyField',
//     element: 'CurrencyField'
//         },
//    useForValidation: true
//    }]
//    @EndUserText.label:'Currency Field' 
//    P_CurrencyField : fis_crcy_role_field,
    
    @Consumption.derivation: { lookupEntity: 'F_LeadingLedger', resultElement: 'Ledger' }
    @AnalyticsDetails.variable : { usageType: #FILTER, selectionType: #SINGLE, multipleSelections: false, mandatory: true }
    @EndUserText.label:'Ledger'    
    P_Ledger    : fis_rldnr,
    
    @AnalyticsDetails.variable : { usageType: #FILTER, selectionType: #SINGLE, multipleSelections: true, mandatory: true }
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

  as projection on I_CompanyMarginCube_2 as I_CompanyMarginCube
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
  @UI.textArrangement: #TEXT_ONLY
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
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label:'Reference Document Type'
  @UI.textArrangement: #TEXT_LAST
  ReferenceDocumentType,
  
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
  @EndUserText.label:'Company Code'
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
  
  @Consumption.hidden: true
  CostSourceUnit,
  
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
  @AnalyticsDetails.query.axis:  #COLUMNS
  @EndUserText.label : 'Currency Field'
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,
  
//  CurrencyRole,
  @AnalyticsDetails.query.axis:  #COLUMNS
  @EndUserText.label : 'Currency'
//  @UI.textArrangement: #TEXT_ONLY
  Currency,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Net Revenue'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.RevenueAmountInDisplayCrcy
        + $projection.SalesDeductionAmountInDspCrcy as fcopa_net_revenue_dspcrcy )                as NetRevenueAmountInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'NetRevenueAmountInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Revenue'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.BilledRevenueAmtInDspCrcy
        + $projection.RevenueAdjustmentAmtInDspCrcy as fis_revenue_amount_dsp_crcy )              as RevenueAmountInDisplayCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Billed Revenue'
  @UI.textArrangement: #TEXT_LAST  
    cast( case when ( SemanticTag = 'BILL_REV' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fins_trr_actrevn preserving type )                            as BilledRevenueAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'RevenueAmountInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Revenue Adjustment'
  @UI.textArrangement: #TEXT_LAST  
    cast( case when ( SemanticTag = 'ADJ_REV' )
      then ( InvertedAmountInDisplayCrcy )
      else null end as fcopa_rev_adjustment_dspcrcy preserving type )                          as RevenueAdjustmentAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'NetRevenueAmountInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Sales Deduction'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'SALES_DED' )
      then ( InvertedAmountInDisplayCrcy )
      else null end as fins_sales_deduction preserving type )                         as SalesDeductionAmountInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin1AmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Cost of Goods Sold - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'RECO_COS'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
               then ( InvertedVarblAmountInDspCrcy )
               else null end as fins_cogs preserving type )                          as VarblCOGSAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @EndUserText.label : 'Contribution Margin I'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.NetRevenueAmountInDspCrcy
         + $projection.VarblCOGSAmtInDspCrcy as fins_contribution_margin_i )          as ContrbnMargin1AmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Variable Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedVarblAmountInDspCrcy )
             else null end as fcopa_varmaterialcost_dspcrcy preserving type )           as VarblMaterialCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Activity Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.VarblPersonnelTmeCostInDspCrcy
        + $projection.VarblMachineTimeCostInDspCrcy as fcopa_varmaterialcost_dspcrcy ) as VarblActivityCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblActivityCostInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Personnel Time Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'COGS_PERT'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' )
                and BillableControl = ' ' )
             then ( InvertedVarblAmountInDspCrcy )
       else null end as fcopa_varperstimecost_dspcrcy )                               as VarblPersonnelTmeCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblActivityCostInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Machine Time Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedVarblAmountInDspCrcy )
       else null end as fcopa_varmchntimecost_dspcrcy )                               as VarblMachineTimeCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Overhead Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast(  case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' )
                 and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                   and BillableControl = ' ' )
                then ( InvertedVarblAmountInDspCrcy )
       else null end as fcopa_varoverheadcost_dspcrcy )                               as VarblOverheadCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Travel Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'TRAVELCST'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedAmountInDisplayCrcy )
       else null end as fins_trav_cost_dspcrcy preserving type  )                     as TravelCostAmountInDspCurrency,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy' 
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Purchased Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'LIC_COST' or SemanticTag = 'SERVICECST' or SemanticTag = 'HRD_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18' )
                  and BillableControl = ' ' )
               then ( InvertedAmountInDisplayCrcy )
        else null end as fcopa_purchasedmatcost_dspcrcy preserving type )             as PurchasedMaterialCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'VarblCOGSAmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Other Cost - Variable'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.VarblCOGSAmtInDspCrcy
          - $projection.VarblMaterialCostInDspCrcy
          - $projection.VarblActivityCostInDspCrcy
          - $projection.VarblOverheadCostInDspCrcy
          - $projection.TravelCostAmountInDspCurrency
          - $projection.PurchasedMaterialCostInDspCrcy as fcopa_varothercost_dspcrcy ) as VarblOtherCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Cost of Goods Sold - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'RECO_COS'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedFixedAmtInDspCrcy )
             else null end as fins_cogs_fixed_dsprcy preserving type )                as FxdCOGSAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Fixed Material Cost'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'MATCST' or SemanticTag = 'COGS_3PAR' or SemanticTag = 'ICO_COST' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedFixedAmtInDspCrcy )
             else null end as fcopa_fxdmaterialcost_dspcrcy preserving type )           as FixedMaterialCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Activity Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.FxdPersCostsAmtInDspCurrency
        + $projection.FxdMchnTmeAmtInDisplayCurrency as fcopa_fxdactivitycost_dspcrcy )   as FixedActivityCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FixedActivityCostInDspCrcy' 
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Personnel Time Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'COGS_PERT'
              and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                and BillableControl = ' ' )
             then ( InvertedFixedAmtInDspCrcy )
       else null end as fcopa_fxdperstimecost_dspcrcy preserving type )               as FxdPersCostsAmtInDspCurrency,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FixedActivityCostInDspCrcy' 
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Machine Time Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_SUTI' or SemanticTag = 'COGS_MATI' )
                and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                  and BillableControl = ' ' )
               then ( InvertedFixedAmtInDspCrcy )
       else null end as fcopa_fxdmchntimecost_dspcrcy preserving type )               as FxdMchnTmeAmtInDisplayCurrency,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Overhead Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( ( SemanticTag = 'COGS_OMAT' or SemanticTag = 'COGS_OPRO' or SemanticTag = 'OVH_CSTADM' )
                 and ( FunctionalArea = 'YB25' or FunctionalArea = 'YB18'  )
                   and BillableControl = ' ' )
                then ( InvertedFixedAmtInDspCrcy  )
        else null end as fcopa_fxdoverheadcost_dspcrcy preserving type )            as FixedOverheadCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'FxdCOGSAmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Other Cost - Fixed'
  @UI.textArrangement: #TEXT_LAST  
  cast ( $projection.FxdCOGSAmtInDspCrcy
         - $projection.FixedMaterialCostInDspCrcy
         - $projection.FixedActivityCostInDspCrcy
         - $projection.FixedOverheadCostInDspCrcy as  fcopa_fixedothercost_dspcrcy )   as FixedOtherCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Cost of Goods Sold - Price Differences'
  @UI.textArrangement: #TEXT_LAST  
  cast( $projection.InptPrVarcAmtInDspCrcy
      + $projection.InptQtyVarcAmtInDspCrcy
      + $projection.RsceUsgeVarcAmtInDspCrcy
      + $projection.LotSizeVarcAmtInDspCrcy
      + $projection.OutpPrVarcAmtInDspCrcy
      + $projection.InptRmngVarcAmtInDspCrcy as fins_price_differences_dspcrcy )            as PriceDiffAmtInDisplayCrcy,
      
  @AnalyticsDetails.query.axis:  #ROWS        
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Input Price Variance'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09130' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fis_inptprvarcamt_in_dspcrcy preserving type )                 as InptPrVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Input Quantity Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
              and SubLedgerAcctLineItemType = '09131' )
     then ( InvertedAmountInDisplayCrcy )
     else null end as fis_inptqtyvarcamt_in_dspcrcy preserving type )                as InptQtyVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Resource Usage Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09132' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fis_rsceusgevarcamt_in_dspcrcy preserving type )               as RsceUsgeVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Lot Size Variance'
  @UI.textArrangement: #TEXT_LAST
    cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09139' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fis_lotsizevarcamt_in_dspcrcy preserving type )                as LotSizeVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Output Price Variance'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09138' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fis_outpprvarcamt_in_dspcrcy preserving type )                 as OutpPrVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PriceDiffAmtInDisplayCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Input Remaining Variance'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and SubLedgerAcctLineItemType = '09140' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fis_inptrmngvarcamt_in_dspcrcy preserving type )               as InptRmngVarcAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin2AmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Warranty Cost'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and BillableControl <> ' ' )
               then ( InvertedAmountInDisplayCrcy )
       else null end as fcopa_warrantycost_dspcrcy preserving type )                  as WarrantyCostInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInDspCrcy'
  @EndUserText.label : 'Contribution Margin II'
  @UI.textArrangement: #TEXT_LAST
  cast ( $projection.ContrbnMargin1AmtInDspCrcy
         + $projection.FxdCOGSAmtInDspCrcy
         + $projection.PriceDiffAmtInDisplayCrcy
         + $projection.WarrantyCostInDspCrcy as fins_contribution_margin_ii )     as ContrbnMargin2AmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'ContrbnMargin3AmtInDspCrcy'
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Periodic Cost'  
  @UI.textArrangement: #TEXT_LAST
  cast( $projection.MarketingOvhdAmtInDspCrcy
        + $projection.SalesOverheadAmtInDspCrcy
        + $projection.AdminOverheadAmtInDspCrcy
        + $projection.RnDOverheadAmtInDspCrcy as fcopa_periodiccost_dspcrcy )          as PeriodicCostAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Marketing Overhead'
  @UI.textArrangement: #TEXT_LAST  
  cast( case when ( SemanticTag = 'PL_RESULT'
                and FunctionalArea = 'YB35' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fins_marketing_overhead preserving type )                    as MarketingOvhdAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Sales Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT'
                and FunctionalArea = 'YB30' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fins_sales_overhead preserving type )                        as SalesOverheadAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Administration Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT' 
                and FunctionalArea = 'YB40' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fins_administration_overhead preserving type )               as AdminOverheadAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.elementHierarchy.parent: 'PeriodicCostAmtInDspCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Research and Development Overhead'
  @UI.textArrangement: #TEXT_LAST
  cast( case when ( SemanticTag = 'PL_RESULT' 
                and FunctionalArea = 'YB50' )
       then ( InvertedAmountInDisplayCrcy )
       else null end as fins_rnd_overhead_dspcrcy preserving type )             as RnDOverheadAmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label : 'Contribution Margin III'  
  @UI.textArrangement: #TEXT_LAST
  cast ( $projection.ContrbnMargin2AmtInDspCrcy
         + $projection.PeriodicCostAmtInDspCrcy as fins_contribution_margin_iii )    as ContrbnMargin3AmtInDspCrcy,

  @AnalyticsDetails.query.axis:  #ROWS
  @AnalyticsDetails.query.hidden: false
  @EndUserText.label: 'Billed Quantity'
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @AnalyticsDetails.query.reverseSign: true
  cast( case when SemanticTag = 'BILL_REV' then ValuationQuantity else null end   as abap.dec(23,2) )    as BilledValnQtyInCostSourceUnit,
         
  _DocumentStore         

}
where
      GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  and LedgerFiscalYear   = $parameters.P_LedgerFiscalYear
  and Ledger             = $parameters.P_Ledger
  and CompanyCode        = $parameters.P_CompanyCode
//  and CurrencyField      = $parameters.P_CurrencyField
```
