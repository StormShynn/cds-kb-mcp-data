---
name: I_ACTUALCOSTINGRUNRESULT
description: "Actualcostingrunresult"
semantic_vi: "View Actual Costing Run Result cung cấp truy cập vào kết quả của các lần chạy thực tế tính toán, được sử dụng để xác định chi phí thực tế của vật liệu và hàng hóa. Nó được sử dụng để phân tích và báo cáo về chi phí thực tế của sản xuất và đánh giá tồn kho."
keywords:
  - "actual costing"
  - "costing run"
  - "material cost"
  - "inventory valuation"
  - "production cost"
  - "actual cost"
  - "chi phí thực tế"
  - "đánh giá tồn kho"
  - "tính toán thực tế"
  - "sản xuất chi phí"
  - "costing run result"
  - "kết quả tính toán thực tế"
semantic_en: "The Actual Costing Run Result view provides access to the results of actual costing runs, which are used to determine the actual costs of materials and goods. It is used to analyze and report on the actual costs of production and inventory valuation."
app_component: CO-PC-ACT-2CL
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
  - CO-PC-ACT
  - interface-view
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_ACTUALCOSTINGRUNRESULT

**Actualcostingrunresult**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
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
| `CurrencyRole` | ✓ | |  |  | `CHAR(2)` | External Currency Type and Valuation View |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `MaterialLedgerCategory` | ✓ | |  |  | `CHAR(2)` | Material Ledger Category |
| `ProcessCategory` | ✓ | |  |  | `CHAR(4)` | Process Category |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item number of the SD document |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `MaterialLedgerCategoryText` |  | |  |  | `CHAR(60)` | Material Ledger Category Text |
| `ProcessCategoryName` |  | |  |  | `CHAR(40)` | Process Category Text |
| `InventorySpecialStockTypeName` |  | |  |  | `CHAR(20)` | Special Stock Type Name |
| `TotalVltdStockQuantity` |  | |  |  | `QUAN(23)` | Transaction Quantity in Valuation Quantity Unit of Mesure |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Quantity Unit for Valuation |
| `InventoryAmtInDspCrcy` |  | |  |  | `CURR(15)` | Actual Value |
| `InvtryTransacAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Preliminary Value |
| `PriceDiffAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Price Difference |
| `ExchRateDiffAmtInDspCurrency` |  | |  |  | `CURR(23)` | Exchange Rate Difference |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingValuationType` |  | |  |  | `NUMC(1)` | Valuation View (for Transfer Prices) |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
                  authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED
                }
@ObjectModel: {
                usageType: {
                             serviceQuality: #D,
                             sizeCategory: #XXL,
                             dataClass: #MIXED
                           },
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@EndUserText.label: 'Actual Costing Run Results'
define view entity I_ActualCostingRunResult
  with parameters
    P_CostingRunType :ckml_run_type,
    P_FiscalPeriod   :fins_fiscalperiod,
    P_FiscalYear     :fis_gjahr_no_conv
  as select from P_ActlCostgRunRsltAggrgnWthTxt(P_CostingRunType : $parameters.P_CostingRunType,
                                                P_FiscalPeriod: $parameters.P_FiscalPeriod,
                                                P_FiscalYear: $parameters.P_FiscalYear)

  association [1..1] to I_Product       as _Product      on $projection.Material = _Product.Product
  association [0..1] to I_Plant         as _Plant        on $projection.ValuationArea = _Plant.Plant
  association [1..1] to I_Ledger        as _Ledger       on $projection.Ledger = _Ledger.Ledger
  association [1..1] to I_Currency      as _Currency     on $projection.Currency = _Currency.Currency
  association [1..1] to I_UnitOfMeasure as _QuantityUnit on $projection.ValuationQuantityUnit = _QuantityUnit.UnitOfMeasure
{
  key CostEstimate,
  key CurrencyRole,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.text.element: ['MaterialLedgerCategoryText']
  key MaterialLedgerCategory,
      @ObjectModel.text.element: ['ProcessCategoryName']
  key ProcessCategory,
      @ObjectModel.foreignKey.association: '_Plant'
      ValuationArea,
      @ObjectModel.foreignKey.association: '_Product'
      Material,
      InventoryValuationType,
      SalesOrder,
      SalesOrderItem,
      @ObjectModel.text.element: ['InventorySpecialStockTypeName']
      InventorySpecialStockType,
      Supplier,
      WBSElementExternalID,
      @Semantics.text: true
      MaterialLedgerCategoryText,
      @Semantics.text: true
      ProcessCategoryName,
      @Semantics.text: true
      InventorySpecialStockTypeName,
      @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
      TotalVltdStockQuantity,
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      ValuationQuantityUnit,
      @Semantics.amount.currencyCode: 'Currency'
      InventoryAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      InvtryTransacAmtInDisplayCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      PriceDiffAmtInDisplayCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ExchRateDiffAmtInDspCurrency,
      @ObjectModel.foreignKey.association: '_Currency'
      Currency,

      @Consumption.hidden: true
      ControllingArea,
      @Consumption.hidden: true
      ControllingValuationType,

      _Product,
      _Plant,
      _Ledger,
      _Currency,
      _QuantityUnit
}
```
