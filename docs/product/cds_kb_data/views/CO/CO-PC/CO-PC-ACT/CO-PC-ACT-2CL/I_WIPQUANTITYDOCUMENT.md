---
name: I_WIPQUANTITYDOCUMENT
description: "Wipquantitydocument"
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
  - document
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_WIPQUANTITYDOCUMENT

**Wipquantitydocument**

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
| `ControllingDocument` | ✓ | |  |  | `CHAR(10)` | Document Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Posting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` |  | |  |  | `NUMC(4)` | Order Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProductionProcess` |  | |  |  | `NUMC(12)` | Production Process |
| `PostingPeriod` |  | |  |  | `NUMC(3)` | Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `ActualCostingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `ActualCostingObjectTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `InventorySpecialStockTypeName` |  | |  |  | `CHAR(20)` | Special Stock Type Name |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Valuation of Special Stock |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item number of the SD document |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Display |
| `WIPQuantity` |  | |  |  | `QUAN(15)` | WIP Quantity for Period Layer |
| `DeltaQuantity` |  | |  |  | `QUAN(15)` | WIP Quantity Changes |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
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
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@EndUserText.label: 'Work In Process Quantity Document'
define view entity I_WIPQuantityDocument
  with parameters
    P_FromFiscalYearPeriod :fml_fyearperiod_from,
    P_ToFiscalYearPeriod   :fml_fyearperiod_to
  as select from P_MLWIPQuantityDoc( P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
                                     P_ToFiscalYearPeriod   : $parameters.P_ToFiscalYearPeriod)

  association [1..1] to I_Product       as _Product      on $projection.Material = _Product.Product
  association [0..1] to I_Plant         as _Plant        on $projection.Plant = _Plant.Plant
  association [1..1] to I_UnitOfMeasure as _QuantityUnit on $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure

{
  key  ControllingDocument,
       @ObjectModel.foreignKey.association: '_Plant'
  key  Plant,
  key  CostEstimate,
       @Semantics.fiscal.year: true
  key  FiscalYear,
       @Semantics.fiscal.period: true
       @EndUserText.label: 'Document Period'
  key  FiscalPeriod,
       @Semantics.fiscal.yearPeriod: true
       FiscalYearPeriod,
       ObjectInternalID,
       OrderID,
       OrderItem,
       ControllingArea,
       ProductionProcess,
       @Semantics.fiscal.period: true
       @EndUserText.label: 'WIP Quantity Period'
       PostingPeriod,
       PostingDate,
       CreatedByUser,
       ActualCostingObjectType,
       @Semantics.text: true
       ActualCostingObjectTypeName,
       @ObjectModel.foreignKey.association: '_Product'
       Material,
       InventoryValuationType,
       InventorySpecialStockType,
       @Semantics.text: true
       InventorySpecialStockTypeName,
       InventorySpecialStockValnType,
       SalesOrder,
       SalesOrderItem,
       WBSElementExternalID,
       CostCenter,
       CostCtrActivityType,
       @ObjectModel.foreignKey.association: '_QuantityUnit'
       QuantityUnit,
       @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
       @EndUserText.label: 'Total WIP Quantity'
       WIPQuantity,
       @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
       @EndUserText.label: 'Delta WIP Quantity'
       DeltaQuantity,

       _Product,
       _Plant,
       _QuantityUnit
}
```
