---
name: I_ACTPLNCOSTCENTERRPTGCUBE
description: "ACTPLNCost CenterRPTGCUBE"
semantic_vi: "View I_ACTPLNCOSTCENTERRPTGCUBE hiển thị dữ liệu trung tâm chi phí thực tế và kế hoạch cho báo cáo và phân tích, thường được sử dụng trong quy trình lập kế hoạch tài chính và kiểm soát."
keywords:
  - "cost center"
  - "trung tâm chi phí"
  - "financial planning"
  - "lập kế hoạch tài chính"
  - "controlling"
  - "kiểm soát"
  - "actual plan"
  - "dữ liệu thực tế"
  - "dữ liệu kế hoạch"
  - "reporting"
  - "báo cáo"
  - "analysis"
semantic_en: "The ACTPLNCost CenterRPTGCUBE view exposes actual and planned cost center data for reporting and analysis, typically used in financial planning and controlling processes."
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - CO-OM-CCA
  - interface-view
  - analytical
  - cost-center
  - component:CO-OM-CCA-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_ACTPLNCOSTCENTERRPTGCUBE

**ACTPLNCost CenterRPTGCUBE**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `FixedAmountInTransCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Transaction Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `ActualAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Transaction Currency |
| `ActualAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Company Code Currency |
| `ActualAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Actual Amount in Global Currency |
| `ActualAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Actual Amount in Freely Defined Currency 1 |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Valuation Quantity |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(23)` | Actual Quantity in Base Unit |
| `PlanAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Transaction Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Company Code Currency |
| `PlanAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Plan Amount in Global Currency |
| `PlanAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Plan Amount in Freely Defined Currency 1 |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `PlanPriceInGlobalCurrency` |  | |  |  | `CURR(23)` | Price in Global Currency |
| `PlanPriceInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Price in Company Code Currency |
| `PlanPriceInTransactionCurrency` |  | |  |  | `CURR(23)` | Price in Transaction Currency |
| `ActlPlnDiffAmtInTransCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in transaction currency |
| `ActlPlnDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in company code currency |
| `ActlPlnDiffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in global currency |
| `ActlPlnDiffAmtInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Actual plan difference in freely defined currency 1 |
| `ActlPanDiffValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Plan Difference Valuation Quantity |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Cost Center Review Booklet - Cube'
@Analytics.internalName:#LOCAL
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIACTPLNCOCREPOC'
@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN','NO_HEX_INDEX_JOIN' ]
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
@Analytics.intentBasedNavigation.filterMapper: 'CL_FCO_RB_CUBE_EXIT'
define view entity I_ActPlnCostCenterRptgCube

  as select from I_ActualPlanJournalEntryItem as APJEI

  association [1..1]       to I_CalendarMonth              as _CalendarMonth            on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1]       to I_CalendarQuarter            as _CalendarQuarter          on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1]       to I_YearMonth                  as _CalendarYearMonth        on  $projection.YearMonth = _CalendarYearMonth.YearMonth
  association of exact one to exact one E_JournalEntryItem as _Extension_acdoca         on  APJEI.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                        and APJEI.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                        and APJEI.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                        and APJEI.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                        and APJEI.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1]       to E_FinancialPlanningEntryItem as _Extension_acdocp         on  APJEI.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                        and APJEI.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                        and APJEI.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem

//  association [0..1]       to I_ActPlnCostCenterRptgDSt    as _DocumentStore            on  $projection.SourceLedger                  = _DocumentStore.tra_sourceledger
//                                                                                        and $projection.Ledger                        = _DocumentStore.tra_ledger
//                                                                                        and $projection.CompanyCode                   = _DocumentStore.tra_companycode
//                                                                                        and $projection.FiscalYear                    = _DocumentStore.tra_fiscalyear
//                                                                                        and $projection.AccountingDocument            = _DocumentStore.tra_00010
//                                                                                        and $projection.FinancialPlanningReqTransSqnc = _DocumentStore.tra_00039
//                                                                                        and $projection.FinancialPlanningDataPacket   = _DocumentStore.tra_00019
//                                                                                        and $projection.ActualPlanJournalEntryItem    = _DocumentStore.tra_00031


{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key APJEI.SourceLedger,                  //key
      @ObjectModel.foreignKey.association: '_Ledger'
  key APJEI.Ledger,                        //key
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key APJEI.CompanyCode,                   //key
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key APJEI.FiscalYear,                    //key
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key APJEI.AccountingDocument,            //key
  key APJEI.FinancialPlanningReqTransSqnc, //key
  key APJEI.FinancialPlanningDataPacket,   //key
      // field ActualPlanJournalEntryItem required for representative key definition LedgerGLLineItem|FinancialPlanningEntryItem
  key APJEI.ActualPlanJournalEntryItem, //key

      APJEI.LedgerGLLineItem, //key
      APJEI.FinancialPlanningEntryItem, //key
      @ObjectModel.foreignKey.association: '_ControllingArea'
      APJEI.ControllingArea,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      APJEI.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      APJEI.GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      APJEI.ChartOfAccounts,
      @Environment.sql.passValue: true
      APJEI.ActualPlanCode,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      APJEI.DebitCreditCode,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      APJEI.ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      APJEI.CostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      APJEI.ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      APJEI.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      APJEI.PartnerProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      APJEI.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      APJEI.PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      APJEI.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      APJEI.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      APJEI.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      APJEI.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_Order'
      APJEI.OrderID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      APJEI.WorkPackage,
      APJEI.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      APJEI.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      APJEI.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      APJEI.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      APJEI.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      APJEI.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      APJEI.PartnerCostCtrActivityType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      APJEI.PartnerOrder_2                        as PartnerOrder,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      APJEI.PostingDate,
      APJEI.DocumentDate,
      @Semantics.fiscal.period: true
      APJEI.FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      APJEI.FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      APJEI.FiscalYearVariant,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      APJEI.PlanningCategory,
      APJEI.ServicesRenderedDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      APJEI.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      APJEI.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      APJEI.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      APJEI.FinancialTransactionType,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Customer'
      APJEI.Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
      APJEI.Supplier,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      APJEI.IsStatisticalCostCenter,
      APJEI.IsCommitment,

      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////
      APJEI.TransactionCurrency,
      APJEI.CompanyCodeCurrency,
      APJEI.GlobalCurrency,
      APJEI.FunctionalCurrency,
      APJEI.FreeDefinedCurrency1,
      APJEI.CostSourceUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.AmountInTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.AmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      APJEI.AmountInFunctionalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.AmountInFreeDefinedCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.FixedAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationFixedQuantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BaseUnit'
      APJEI.BaseUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.Quantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.FixedQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActualAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActualAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActualAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActualAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActualValuationQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.ActualQuantityInBaseUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.PlanAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.PlanValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.PlanPriceInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.PlanPriceInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.PlanPriceInTransactionCurrency,

      /////////////////////////////////////////////////////////////////////////////////////
      // Actual Plan Difference Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      APJEI.ActlPlnDiffAmtInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      APJEI.ActlPlnDiffAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      APJEI.ActlPlnDiffAmtInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      APJEI.ActlPlnDiffAmtInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActlPanDiffValuationQuantity,

      APJEI._CalendarDate.CalendarYear            as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      APJEI._CalendarDate.CalendarQuarter         as CalendarQuarter,
      APJEI._CalendarDate.YearQuarter             as YearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      APJEI._CalendarDate.CalendarMonth           as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      APJEI._CalendarDate.YearMonth               as YearMonth,
      APJEI._CalendarDate.CalendarWeek            as CalendarWeek,
      APJEI._CalendarDate.YearWeek                as YearWeek,
      APJEI._FiscalCalendarDate.FiscalQuarter     as FiscalQuarter,
      APJEI._FiscalCalendarDate.FiscalWeek        as FiscalWeek,
      APJEI._FiscalCalendarDate.FiscalYearQuarter as FiscalYearQuarter,
      APJEI._FiscalCalendarDate.FiscalYearWeek    as FiscalYearWeek,

      APJEI._JournalEntry,
      APJEI._SourceLedger,
      APJEI._ControllingArea,
      APJEI._Ledger,
      APJEI._CompanyCode,
      APJEI._GLAccountInChartOfAccounts,
      APJEI._ChartOfAccounts,
      APJEI._LedgerFiscalYearForVariant,
      APJEI._FiscalYear,
      APJEI._FiscalPeriodForVariant,
      APJEI._FiscalYearPeriodForVariant,
      APJEI._DebitCreditCode,
      APJEI._CalendarDate,
      APJEI._FiscalCalendarDate,
      APJEI._ProfitCenter,
      APJEI._CostCenter,
      APJEI._AccountAssignmentType,
      APJEI._ProjectExternalID,
      APJEI._PartnerProjectBasicData,
      APJEI._PartnerProjectExternalID,
      APJEI._WBSElementExternalID,
      APJEI._PartnerWBSElementExternalID,
      APJEI._FunctionalArea,
      APJEI._Segment,
      APJEI._CostCtrActivityType,
      APJEI._CostAnalysisResource,
      APJEI._Order,
      APJEI._WorkPackage,
      APJEI._PartnerCompanyCode,
      APJEI._PartnerProfitCenter,
      APJEI._PartnerCostCenter,
      APJEI._PartnerFunctionalArea,
      APJEI._PartnerSegment,
      APJEI._PartnerCostCtrActivityType,
      APJEI._PartnerOrder_2,
      APJEI._FiscalYearVariant,
      APJEI._BusinessTransactionCategory,
      APJEI._BusinessTransactionType,
      APJEI._FinancialTransactionType,
      APJEI._Customer,
      APJEI._Supplier,
      APJEI._TransactionCurrency,
      APJEI._CompanyCodeCurrency,
      APJEI._GlobalCurrency,
      APJEI._FunctionalCurrency,
      APJEI._FreeDefinedCurrency1,
      APJEI._BaseUnit,
      APJEI._CostSourceUnit,
      APJEI._PlanningCategory,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      _CurrentCostCenter,
      _CurrentProfitCenter
//      @Analytics.association.toDocumentStorage: true
//      _DocumentStore

}
where
  (
    APJEI.FiscalPeriod > '000'
  )
```
