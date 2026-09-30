---
name: I_BUDGETCOSTCENTERRPTGCUBE
description: "Cost Center Review Booklet Budget - Cube"
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTERRPTGCUBE')/$value
semantic_en: "Cost Center Review Booklet Budget - Cube"
semantic_vi: "Cost Center Review Booklet Budget - Cube — CDS view giao diện dựa trên P_BudgetCostCenterRptgCmpst."
keywords:
  - "cost"
  - "center"
  - "review"
  - "booklet"
  - "budget"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
  - bo:project
---
# I_BUDGETCOSTCENTERRPTGCUBE

**Cost Center Review Booklet Budget - Cube**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTERRPTGCUBE')/$value) |

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
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `GLAccountHierNodeSemanticKey` |  | | `_BudgetGLAcctHierGroup` | `GLAccountHierNodeSemanticKey` | `CHAR(63)` | Budget G/L Account Hierarchy Semantic Key |
| `BudgetCarryingCostCenter` |  | | `_BudgetGLAcctHierGroup` | `BudgetCarryingCostCenter` | `CHAR(10)` | Budget-Carrying Cost Center |
| `AvailabilityControlProfile` |  | | `_BudgetGLAcctHierGroup` | `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control: Profile |
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
| `_BudgetCostCenter` | | ✓ | | | | |
| `_BudgetGLHierGroupT` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_BudgetGLAcctHierGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_BudgetCostCenter` | `I_BudgetCostCenter` | [0..1] |
| `_BudgetGLHierGroupT` | `I_BudgetGLAcctHierGroupT` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTERRPTGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTERRPTGCUBE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Cost Center Review Booklet Budget - Cube'
@Analytics.internalName:#LOCAL
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIBUDGETCOCREPOC'
@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
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
define view entity I_BudgetCostCenterRptgCube

  as select from P_BudgetCostCenterRptgCmpst as BCCRC

  association of exact one to exact one E_JournalEntryItem as _Extension_acdoca   on  BCCRC.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                  and BCCRC.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                  and BCCRC.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                  and BCCRC.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                  and BCCRC.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem

  association [1..1]       to E_FinancialPlanningEntryItem as _Extension_acdocp   on  BCCRC.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                  and BCCRC.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                  and BCCRC.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem

  association [0..1]       to I_BudgetCostCenter           as _BudgetCostCenter   on  _BudgetCostCenter.ControllingArea          = BCCRC.ControllingArea
                                                                                  and _BudgetCostCenter.BudgetCarryingCostCenter = $projection.BudgetCarryingCostCenter
                                                                                  and _BudgetCostCenter.ValidityEndDate          >= $session.system_date

  association [0..1]       to I_BudgetGLAcctHierGroupT     as _BudgetGLHierGroupT on  _BudgetGLHierGroupT.GLAccountHierNodeSemanticKey = $projection.GLAccountHierNodeSemanticKey
                                                                                  and _BudgetGLHierGroupT.Language                     = $session.system_language

{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key BCCRC.SourceLedger,                  //key
      @ObjectModel.foreignKey.association: '_Ledger'
  key BCCRC.Ledger,                        //key
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key BCCRC.CompanyCode,                   //key
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key BCCRC.FiscalYear,                    //key
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key BCCRC.AccountingDocument,            //key
  key BCCRC.FinancialPlanningReqTransSqnc, //key
  key BCCRC.FinancialPlanningDataPacket,   //key
  key BCCRC.ActualPlanJournalEntryItem, //key
      BCCRC.LedgerGLLineItem, //key
      BCCRC.FinancialPlanningEntryItem, //key

      @ObjectModel.foreignKey.association: '_ControllingArea'
      BCCRC.ControllingArea,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      BCCRC.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      BCCRC.GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      BCCRC.ChartOfAccounts,
      @Environment.sql.passValue: true
      BCCRC.ActualPlanCode,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      BCCRC.DebitCreditCode,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      BCCRC.ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      BCCRC.CostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      BCCRC.ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      BCCRC.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      BCCRC.PartnerProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      BCCRC.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      BCCRC.PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      BCCRC.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      BCCRC.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      BCCRC.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      BCCRC.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_Order'
      BCCRC.OrderID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      BCCRC.WorkPackage,
      BCCRC.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      BCCRC.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      BCCRC.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      BCCRC.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      BCCRC.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      BCCRC.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      BCCRC.PartnerCostCtrActivityType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      BCCRC.PartnerOrder                                  as PartnerOrder,

      @ObjectModel.text.association: '_BudgetGLHierGroupT'
      _BudgetGLAcctHierGroup.GLAccountHierNodeSemanticKey as GLAccountHierNodeSemanticKey,

      @ObjectModel.foreignKey.association: '_BudgetCostCenter'
      _BudgetGLAcctHierGroup.BudgetCarryingCostCenter     as BudgetCarryingCostCenter,

      _BudgetGLAcctHierGroup.AvailabilityControlProfile   as AvailabilityControlProfile,
      //      _CurrentCostCenter.AvailabilityControlProfile       as AvailabilityControlProfile,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      BCCRC.PostingDate,
      BCCRC.DocumentDate,
      @Semantics.fiscal.period: true
      BCCRC.FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      BCCRC.FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      BCCRC.FiscalYearVariant,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      BCCRC.PlanningCategory,
      BCCRC.ServicesRenderedDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      BCCRC.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      BCCRC.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BCCRC.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      BCCRC.FinancialTransactionType,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Customer'
      BCCRC.Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
      BCCRC.Supplier,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      BCCRC.IsStatisticalCostCenter,
      BCCRC.IsCommitment,

      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////
      BCCRC.TransactionCurrency,
      BCCRC.CompanyCodeCurrency,
      BCCRC.GlobalCurrency,
      BCCRC.FunctionalCurrency,
      BCCRC.FreeDefinedCurrency1,
      BCCRC.CostSourceUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.AmountInTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.AmountInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.AmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      BCCRC.AmountInFunctionalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      BCCRC.AmountInFreeDefinedCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.FixedAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      BCCRC.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      BCCRC.ValuationFixedQuantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BCCRC.BaseUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      BCCRC.Quantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      BCCRC.FixedQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.ActualAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.ActualAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.ActualAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      BCCRC.ActualAmountInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      BCCRC.ActualValuationQuantity,

      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      BCCRC.ActualQuantityInBaseUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.PlanAmountInTransactionCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.PlanAmountInCompanyCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.PlanAmountInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      BCCRC.PlanAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      BCCRC.PlanValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.PlanPriceInGlobalCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.PlanPriceInCompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.PlanPriceInTransactionCurrency,

      /////////////////////////////////////////////////////////////////////////////////////
      // Actual Plan Difference Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      BCCRC.ActlPlnDiffAmtInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      BCCRC.ActlPlnDiffAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      BCCRC.ActlPlnDiffAmtInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      BCCRC.ActlPlnDiffAmtInFreeDfndCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      BCCRC.ActlPanDiffValuationQuantity,

      BCCRC.CalendarYear                                  as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      BCCRC.CalendarQuarter                               as CalendarQuarter,
      BCCRC.YearQuarter                                   as YearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      BCCRC.CalendarMonth                                 as CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      BCCRC.YearMonth                                     as YearMonth,
      BCCRC.CalendarWeek                                  as CalendarWeek,
      BCCRC.YearWeek                                      as YearWeek,
      BCCRC.FiscalQuarter                                 as FiscalQuarter,
      BCCRC.FiscalWeek                                    as FiscalWeek,
      BCCRC.FiscalYearQuarter                             as FiscalYearQuarter,
      BCCRC.FiscalYearWeek                                as FiscalYearWeek,

      BCCRC._JournalEntry,
      BCCRC._SourceLedger,
      BCCRC._ControllingArea,
      BCCRC._Ledger,
      BCCRC._CompanyCode,
      BCCRC._GLAccountInChartOfAccounts,
      BCCRC._ChartOfAccounts,
      BCCRC._LedgerFiscalYearForVariant,
      BCCRC._FiscalYear,
      BCCRC._FiscalPeriodForVariant,
      BCCRC._FiscalYearPeriodForVariant,
      BCCRC._DebitCreditCode,
      BCCRC._CalendarDate,
      BCCRC._FiscalCalendarDate,
      BCCRC._ProfitCenter,
      BCCRC._CostCenter,
      BCCRC._AccountAssignmentType,
      BCCRC._ProjectExternalID,
      BCCRC._PartnerProjectBasicData,
      BCCRC._PartnerProjectExternalID,
      BCCRC._WBSElementExternalID,
      BCCRC._PartnerWBSElementExternalID,
      BCCRC._FunctionalArea,
      BCCRC._Segment,
      BCCRC._CostCtrActivityType,
      BCCRC._CostAnalysisResource,
      BCCRC._Order,
      BCCRC._WorkPackage,
      BCCRC._PartnerCompanyCode,
      BCCRC._PartnerProfitCenter,
      BCCRC._PartnerCostCenter,
      BCCRC._PartnerFunctionalArea,
      BCCRC._PartnerSegment,
      BCCRC._PartnerCostCtrActivityType,
      BCCRC._PartnerOrder_2,
      BCCRC._FiscalYearVariant,
      BCCRC._BusinessTransactionCategory,
      BCCRC._BusinessTransactionType,
      BCCRC._FinancialTransactionType,
      BCCRC._Customer,
      BCCRC._Supplier,
      BCCRC._TransactionCurrency,
      BCCRC._CompanyCodeCurrency,
      BCCRC._GlobalCurrency,
      BCCRC._FunctionalCurrency,
      BCCRC._FreeDefinedCurrency1,
      BCCRC._BaseUnit,
      BCCRC._CostSourceUnit,
      BCCRC._PlanningCategory,
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      BCCRC._CurrentCostCenter,
      BCCRC._CurrentProfitCenter,

      _BudgetGLHierGroupT,
      _BudgetCostCenter,
      _BudgetGLAcctHierGroup

      //      @Analytics.association.toDocumentStorage: true
      //      _DocumentStore

}
```
