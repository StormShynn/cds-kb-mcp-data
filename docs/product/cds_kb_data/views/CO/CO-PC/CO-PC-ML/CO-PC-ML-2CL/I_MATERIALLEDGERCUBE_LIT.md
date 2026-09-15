---
name: I_MATERIALLEDGERCUBE_LIT
description: "Materialledgercube Lit"
app_component: CO-PC-ML-2CL
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
  - CO-PC
  - CO-PC-ML
  - interface-view
  - material
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Material
---
# I_MATERIALLEDGERCUBE_LIT

**Materialledgercube Lit**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
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
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `MatlDocLatestPostgDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Time Stamp of Creation |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProductionOrder` |  | |  |  | `CHAR(12)` | Order ID |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `InventoryValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MaterialLedgerProcessType` |  | |  |  | `CHAR(4)` | Original Process Category |
| `MaterialLedgerCategory` |  | |  |  | `CHAR(2)` | Category in Material Update Structure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Value at Sales Price in Local Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `InventoryQty` |  | |  |  | `QUAN(23)` | Inventory Quantity |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics: {
  dataCategory: #CUBE
}
@Analytics.technicalName: 'IMLCUBELIT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [
    #ANALYTICAL_PROVIDER,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE ],
  usageType: {
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #MIXED
  }
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@Search.searchable: true
@EndUserText.label: 'Line Item for Material Ledger - Cube'
@AccessControl.auditFilter: #ENABLED


define view entity I_Materialledgercube_Lit
  as select from P_Materialledger_Cube_Lit

  association [1..1] to E_JournalEntryItem as _Extension     on  $projection.SourceLedger       = _Extension.SourceLedger
                                                             and $projection.CompanyCode        = _Extension.CompanyCode
                                                             and $projection.FiscalYear         = _Extension.FiscalYear
                                                             and $projection.AccountingDocument = _Extension.AccountingDocument
                                                             and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
  association [0..1] to I_MaterialGroup    as _MaterialGroup on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductPlant    as _ProductPlant on  $projection.Material = _ProductPlant.Product
                                                             and $projection.Plant    = _ProductPlant.Plant
{
      //      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @Semantics.fiscal.year: true
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Material'
      @Search.defaultSearchElement: true
  key Material,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      AccountingDocumentType,
      ValuationArea,
      InventoryValuationType,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      LedgerFiscalYear,
      PostingDate,
      MatlDocLatestPostgDate,
      ReferenceDocument,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      @ObjectModel.text.element: [ 'BusinessTransactionTypeName']
      BusinessTransactionType,
      @Semantics.text:true
      _BusinessTransactionType._Text[1:Language = $session.system_language].BusinessTransactionTypeName,
      DocumentDate,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      AccountingDocCreatedByUser,
      LastChangeDateTime,
      FiscalYearPeriod,
      ReferenceDocumentType,
      PurchasingDocument,
      ProductionOrder,
      TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @ObjectModel.text.element: [ 'MaterialGroupName']
      @Search.ranking: #HIGH
      MaterialGroup,
      @Semantics.text: true
      _MaterialGroup._Text[1:Language = $session.system_language].MaterialGroupName,
      MaterialValuationClass,
      InventoryValuationCategory,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      MaterialLedgerProcessType,
      MaterialLedgerCategory,

      //----------------------------------------
      //KEY FIGURES
      //----------------------------------------
      CompanyCodeCurrency,
      //  AdditionalCurrencyHName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      SlsPriceAmountInCoCodeCrcy,


      GroupCurrency,
      //  AdditionalCurrencyKName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      AmountInGroupCurrency,

      FreeDefinedCurrency1,
      //  AdditionalCurrencyOName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      FreeDefinedCurrency2,
      //  AdditionalCurrencyVName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      FreeDefinedCurrency3,
      //  AdditionalCurrencyBName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      FreeDefinedCurrency4,
      //  AdditionalCurrencyCName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      FreeDefinedCurrency5,
      //  AdditionalCurrencyDName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      FreeDefinedCurrency6,
      //  AdditionalCurrencyEName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      FreeDefinedCurrency7,
      //  AdditionalCurrencyFName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      FreeDefinedCurrency8,
      //  AdditionalCurrencyGName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,

      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      InventoryQty,

      //----------------------------------------
      //Associations
      //----------------------------------------
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _Segment,
      _Material,
      _CompanyCode,
      _Ledger,
      _ProfitCenter,
      _CostCenter,
      _CompanyCodeCurrency,
      _CostSourceUnit,
      _ControllingArea,
      _BusinessTransactionType,
      _Plant,
      _MaterialGroup,
      _ProductPlant

}
```
