---
name: I_INVENTORYPRICEBYKEYDATE_2
description: "Inventorypricebykeydate 2"
app_component: CO-PC-ML-2CL
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
  - CO-PC
  - CO-PC-ML
  - interface-view
  - inventory
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Inventory
---
# I_INVENTORYPRICEBYKEYDATE_2

**Inventorypricebykeydate 2**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
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
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` | ✓ | |  |  | `CHAR(2)` | External Currency Type and Valuation View |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item number of the SD document |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `MaterialPriceControl` |  | |  |  | `CHAR(1)` | Price Control Indicator |
| `MaterialPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InventoryPrice` |  | |  |  | `CURR(11)` | Inventory Price |
| `StandardPrice` |  | |  |  | `CURR(11)` | Standard Price |
| `ActualPrice` |  | |  |  | `CURR(11)` | Actual Price (for materials as calculated by Actual Costing) |
| `LedgerName` |  | |  |  | `CHAR(60)` | Ledger Name |
| `CurrencyRoleName` |  | |  |  | `CHAR(60)` | Currency Type Description |
| `LegalCurrencyRole` |  | |  |  | `CHAR(2)` | Currency Type (Reference in Legal Valuation Ledger) for ML |
| `LegalCurrencyRoleName` |  | |  |  | `CHAR(60)` | Legal Currency Type Description |
| `AccountingValuationView` |  | |  |  | `NUMC(1)` | Valuation View (for Transfer Prices) |
| `AcctgValnVwSubviewCombinedName` |  | |  |  | `CHAR(60)` | Accounting Valuation View Name |
| `LedgerValnCrcyRoleIsUsedInLogs` |  | |  |  | `CHAR(1)` | Indicator: currency type is used in logistic reporting |
| `_CurrencyRole` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IINVPRKEYDATE2'
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Inventory Price By KeyDate'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel: { modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ] }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view entity I_InventoryPriceByKeyDate_2
  with parameters
    P_CalendarDate : calendardate



  as select from R_InventoryPriceByKeyDate(P_CalendarDate : $parameters.P_CalendarDate) as it
  association [0..1] to I_CurrencyRole as _CurrencyRole on $projection.CurrencyRole = _CurrencyRole.CurrencyRole
  association [0..1] to I_Ledger       as _Ledger       on $projection.Ledger = _Ledger.Ledger

{

  key   CostEstimate,
        @Analytics.internalName: #LOCAL
        @ObjectModel.foreignKey.association: '_Ledger'
  key   Ledger,
        @Analytics.internalName: #LOCAL
        @ObjectModel.foreignKey.association: '_CurrencyRole'
  key   CurrencyRole,
        FiscalPeriod,
        FiscalYear,
        FiscalYearPeriod,
        Material,
        ValuationArea,
        InventoryValuationType,
        SalesOrder,
        SalesOrderItem,
        Supplier,
        WBSElementInternalID,
        CompanyCode,
        ValuationQuantityUnit,
        BaseUnit,
        InventorySpecialStockType,
        MaterialPriceControl,
        @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
        MaterialPriceUnitQty,
        Currency,
        @Semantics.amount.currencyCode:'Currency'
        InventoryPrice,
        @Semantics.amount.currencyCode:'Currency'
        StandardPrice,
        @Semantics.amount.currencyCode:'Currency'
        ActualPrice,        
        LedgerName,
        CurrencyRoleName,
        LegalCurrencyRole,
        LegalCurrencyRoleName,
        AccountingValuationView,        
        AcctgValnVwSubviewCombinedName,
        @Semantics.booleanIndicator: true
        LedgerValnCrcyRoleIsUsedInLogs,

        @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
        _Ledger,
        _CurrencyRole
}
```
