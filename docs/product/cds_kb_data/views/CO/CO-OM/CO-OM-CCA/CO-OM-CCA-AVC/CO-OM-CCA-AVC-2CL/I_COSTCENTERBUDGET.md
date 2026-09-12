---
name: I_COSTCENTERBUDGET
description: "Cost CenterBUDGET"
app_component: CO-OM-CCA-AVC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
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
  - cost-center
  - component:CO-OM-CCA-AVC-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERBUDGET

**Cost CenterBUDGET**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-AVC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KeyDate` |  | |  |  | `DATS(8)` |  |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `BudgetCarryingCostCenter` |  | |  |  | `CHAR(10)` | Budget-Carrying Cost Center |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `GLAccountHierNodeSemanticKey` |  | |  |  | `CHAR(63)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Ledger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PredictionLedger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetCarryingCostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `HierarchyNodeText` |  | |  |  | `CHAR(50)` | Hierarchy node description |
| `GLAccountHierarchyName` |  | |  |  | `CHAR(50)` | Hierarchy description |
| `PlanningCategoryName` |  | |  |  | `CHAR(40)` | Planning Category |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureName` |  | |  |  | `CHAR(35)` | Joint Venture Name |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureEquityGroupName` |  | |  |  | `CHAR(35)` | Equity Group Description |
| `JointVentureRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureRecoveryCodeName` |  | |  |  | `CHAR(35)` | Recovery Indicator Description |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BudgetAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ActualCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CmtmtCostInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `TotAssgdAmtInCoCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AvailableBdgtAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `PlanAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BudgetInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ActualCostInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CmtmtCostInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `TotAssgdAmtInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AvailableBudgetInGlobalCrcy` |  | |  |  | `CURR(23)` |  |
| `_GlobalCurrency` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_GLAccountHierarchyNode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GlobalCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center Budget Report'
@AbapCatalog.sqlViewName: 'ICSTCNTRBDGT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:#MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
   
define view I_CostCenterBudget
  with parameters
    P_KeyDate                : vdm_v_key_date,
    P_BudgetPlanningCategory : fcom_category,
    P_InputPlanningCategory  : fcom_category,
    P_LeadingLedger          : fins_ledger,
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language               : spras

  as select from P_CostCenterBudget ( P_KeyDate                : :P_KeyDate,
                                      P_BudgetPlanningCategory : :P_BudgetPlanningCategory,
                                      P_InputPlanningCategory  : :P_InputPlanningCategory,
                                      P_Language               : :P_Language,
                                      P_LeadingLedger          : :P_LeadingLedger )

  association [0..1] to I_Currency as _GlobalCurrency on $projection.GlobalCurrency = _GlobalCurrency.Currency

{
  KeyDate,
  ControllingArea,
  FiscalYear,
  FiscalPeriod,
  BudgetCarryingCostCenter,
  GLAccountHierarchy,
  HierarchyNode,

  GLAccountHierNodeSemanticKey,
  CompanyCode,
  ChartOfAccounts,

  // for DCL (authority check):
  @ObjectModel.foreignKey.association: null
  OrderID,
  @ObjectModel.foreignKey.association: null
  AccountingDocumentType,
  @ObjectModel.foreignKey.association: null
  Customer,
  @ObjectModel.foreignKey.association: null
  Segment,
  @ObjectModel.foreignKey.association: null
  BusinessArea,
  @ObjectModel.foreignKey.association: null
  ProfitCenter,
  @ObjectModel.foreignKey.association: null
  Supplier,
  @ObjectModel.foreignKey.association: null
  SalesOrganization,
  @ObjectModel.foreignKey.association: null
  Plant,
  @ObjectModel.foreignKey.association: null
  ServiceDocumentType,
  @ObjectModel.foreignKey.association: null
  ValuationArea,
  @ObjectModel.foreignKey.association: null
  SalesDocument,
  @ObjectModel.foreignKey.association: null
  CostCenter,
  @ObjectModel.foreignKey.association: null
  GLAccount,
  @ObjectModel.foreignKey.association: null
  Ledger,
  @ObjectModel.foreignKey.association: null
  DistributionChannel,
  @ObjectModel.foreignKey.association: null
  PlanningCategory,
  @ObjectModel.foreignKey.association: null
  OrganizationDivision,
  @ObjectModel.foreignKey.association: null
  ServiceDocument,
  @ObjectModel.foreignKey.association: null
  FinancialAccountType,
  @ObjectModel.foreignKey.association: null
  AssetClass,
  @Semantics.currencyCode: true
  GlobalCurrency,
  @Semantics.currencyCode: true
  CompanyCodeCurrency,
  LedgerFiscalYear,
  FiscalYearVariant,
  PredictionLedger,
  PostingDate,
  FunctionalArea,
  BudgetCarryingCostCenterName,
  CostCenterName,
  GLAccountName,
  HierarchyNodeText,
  GLAccountHierarchyName,          //added 
  PlanningCategoryName,            //added 
  
  
  JointVenture,                    //added  JVA
  JointVentureName,                //added  JVA
  JointVentureEquityGroup,         //added  JVA
  JointVentureEquityGroupName,     //added  JVA
  JointVentureRecoveryCode,        //added  JVA
  JointVentureRecoveryCodeName,    //added  JVA
   
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  PlanAmountInCompanyCodeCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  BudgetAmountInCompanyCodeCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  ActualCostAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  CmtmtCostInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  TotAssgdAmtInCoCodeCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AvailableBdgtAmtInCoCodeCrcy,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  PlanAmountInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  BudgetInGlobalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  ActualCostInGlobalCrcy,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  CmtmtCostInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  TotAssgdAmtInGlobalCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  AvailableBudgetInGlobalCrcy,

  _ControllingArea,
  _GlobalCurrency,
  _FiscalYear,
  _CompanyCode,
  _FiscalPeriodForVariant,
  _LedgerFiscalYearForVariant,
  _FiscalYearVariant,
  _GLAccountHierarchyNode,

  // associations for DCL (authority check)
  _Ledger,
  _Order,
  _AccountingDocumentType,
  _Customer,
  _CurrentProfitCenter,
  _CurrentCostCenter,
  _Supplier,
  _GLAccountInCompanyCode,
  _SalesDocument,
  _ServiceDocument

}

where
  BudgetCarryingCostCenter <> ''
```
