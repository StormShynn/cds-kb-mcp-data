---
name: I_SALESORDERITEMCOSTESTIMATE
description: "Sales OrderITEMCOSTESTIMATE"
app_component: CO-PC-PCP-2CL
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
  - CO-PC-PCP
  - interface-view
  - sales-order
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
  - bo:SalesOrder
---
# I_SALESORDERITEMCOSTESTIMATE

**Sales OrderITEMCOSTESTIMATE**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
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
| `CostingReferenceObject` | ✓ | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` | ✓ | |  |  | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | ✓ | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `CostEstimateValidityEndDate` |  | |  |  | `DATS(8)` | Costing Date To |
| `ValuationDate` |  | |  |  | `DATS(8)` | Valuation Date of a Cost Estimate |
| `QuantityStructureDate` |  | |  |  | `DATS(8)` | Quantity Structure Date for Costing |
| `CostingLotSize` |  | |  |  | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `CostEstimateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Created |
| `CostEstimateStatus` |  | |  |  | `CHAR(2)` | Costing Status |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `ProductValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Raw Materials and Purchased Parts |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `ReferenceLedger` |  | |  |  | `CHAR(2)` | GL ledger to which a cost esatimate refers to |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Breakdown ID |
| `PostingPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `PostingFiscalYear` |  | |  |  | `NUMC(4)` | Posting Date YYYY |
| `CostingItemIsProductComp` |  | |  |  | `CHAR(1)` | Material Component |
| `CostEstimateTransferControl` |  | |  |  | `CHAR(4)` | Transfer Control |
| `SalesOrder` |  | |  | `cast( CostEst.SalesDocument as vdm_sales_order preserving type )` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  | `cast( CostEst.SalesDocumentItem as sales_order_item preserving type )` | `NUMC(6)` | Sales Order Item |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `ProductBOMUsage` |  | |  |  | `CHAR(1)` | BOM Usage |
| `AlternativeBillOfMaterial` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `SpecialProcurementType` |  | |  |  | `CHAR(2)` | Special Procurement Key for the Costing Object |
| `ProductProcurementType` |  | |  |  | `CHAR(1)` | Special procurement type |
| `SpecialProcurementPlant` |  | |  |  | `CHAR(4)` | Special Procurement Plant - Costing |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet for Calculating Overhead |
| `CostingOverheadGroup` |  | |  |  | `CHAR(10)` | Costing Overhead Group |
| `CostingOverhead` |  | |  |  | `CHAR(6)` | Overhead key |
| `ConfiguredProduct` |  | |  |  | `CHAR(40)` | Configured Material (Variant) |
| `CostEstimateCostingLevel` |  | |  |  | `NUMC(4)` | Costing Level |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `CostEstimateCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CostEstimateMarkedByUser` |  | |  |  | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostEstimateMarkingDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Marked |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  | `ControllingAreaCurrency` | `CUKY(5)` | Global Currency |
| `_SalesOrderItemCostEstItem` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingVersion` | | ✓ | | | | |
| `_CostingVariant` | | ✓ | | | | |
| `_ValuationVariant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderItemCostEstItem` | `I_SalesOrderItemCostEstItem` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_CostingType` | `I_CostingType` | [1..1] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVariant` | `I_CostingVariant` | [1..1] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
}

@EndUserText.label: ' Sales Order Item Cost Estimate'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderItemCostEstimate
  as select from                 P_KEKO          as CostEst
    left outer to exact one join I_ValuationArea as ValArea on ValArea.ValuationArea = CostEst.Plant
  association [0..*] to I_SalesOrderItemCostEstItem as _SalesOrderItemCostEstItem on  $projection.CostingReferenceObject = _SalesOrderItemCostEstItem.CostingReferenceObject
                                                                                  and $projection.CostEstimate           = _SalesOrderItemCostEstItem.CostEstimate
                                                                                  and $projection.CostingType            = _SalesOrderItemCostEstItem.CostingType
                                                                                  and $projection.CostingDate            = _SalesOrderItemCostEstItem.CostingDate
                                                                                  and $projection.CostingVersion         = _SalesOrderItemCostEstItem.CostingVersion
                                                                                  and $projection.ValuationVariant       = _SalesOrderItemCostEstItem.ValuationVariant
                                                                                  and $projection.CostIsEnteredManually  = _SalesOrderItemCostEstItem.CostIsEnteredManually
  association [1..1] to I_Product                   as _Product                   on  $projection.Product = _Product.Product
  association [0..1] to I_Currency                  as _GlobalCurrency            on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                  as _CompanyCodeCurrency       on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [1..1] to I_CostingType               as _CostingType               on  $projection.CostingType = _CostingType.CostingType
  association [0..1] to I_CostingVersion            as _CostingVersion            on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                  and $projection.CostingType      = _CostingVersion.CostingType
                                                                                  and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [1..1] to I_CostingVariant            as _CostingVariant            on  $projection.CostingVariant = _CostingVariant.CostingVariant
  association [1..1] to I_CostingValuationVariant   as _ValuationVariant          on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure             on  $projection.ValuationQuantityUnit = _UnitOfMeasure.UnitOfMeasure
{
  key  CostEst.CostingReferenceObject,
  key  CostEst.CostEstimate,
       @ObjectModel.foreignKey.association: '_CostingType'
  key  CostEst.CostingType,
       @Semantics.businessDate.at: true
  key  CostEst.CostingDate,
       @ObjectModel.foreignKey.association: '_CostingVersion'
  key  CostEst.CostingVersion,
       @ObjectModel.foreignKey.association: '_ValuationVariant'
  key  CostEst.ValuationVariant,
  key  CostEst.CostIsEnteredManually,
       @ObjectModel.foreignKey.association: '_Product'
       CostEst.Product,
       CostEst.ValuationType,
       @ObjectModel.foreignKey.association: '_CostingVariant'
       CostEst.CostingVariant,
       ValArea.CompanyCode,
       @ObjectModel.foreignKey.association: '_Plant'
       CostEst.Plant,
       CostEst.ControllingArea,
       CostEst.Ledger,
       CostEst.ProfitCenter,
       @Semantics.businessDate.from: true
       CostEst.CostEstimateValidityStartDate,
       @Semantics.businessDate.to: true
       CostEst.CostEstimateValidityEndDate,
       CostEst.ValuationDate,
       CostEst.QuantityStructureDate,
       @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
       CostEst.CostingLotSize,
       @ObjectModel.foreignKey.association: '_UnitOfMeasure'
       CostEst.ValuationQuantityUnit,
       CostEst.CostEstimateCreationDate,
       CostEst.CostEstimateStatus,
       CostEst.ProductionVersion,
       CostEst.ProductValuationStrategy,
       CostEst.ProductValnPurgInfoRecdStrgy,
       CostEst.ReferenceLedger,
       CostEst.ComponentBreakdown,

       CostEst.PostingPeriod,
       CostEst.PostingFiscalYear,
       CostEst.CostingItemIsProductComp,
       CostEst.CostEstimateTransferControl,
       cast( CostEst.SalesDocument as vdm_sales_order preserving type )      as SalesOrder,
       cast( CostEst.SalesDocumentItem as sales_order_item preserving type ) as SalesOrderItem,
       CostEst.BillOfMaterial,
       CostEst.ProductBOMUsage,
       CostEst.AlternativeBillOfMaterial,
       CostEst.TaskListGroup,
       CostEst.TaskListType,
       CostEst.TaskListGroupCounter,
       CostEst.SpecialProcurementType,
       CostEst.ProductProcurementType,
       CostEst.SpecialProcurementPlant,
       CostEst.CostingSheet,
       CostEst.CostingOverheadGroup,
       CostEst.CostingOverhead,
       CostEst.ConfiguredProduct,
       CostEst.CostEstimateCostingLevel,
       CostEst.CostComponentStructure,

       @Semantics.user.createdBy: true
       CostEst.CostEstimateCreatedByUser,
       CostEst.CostEstimateMarkedByUser,
       CostEst.CostEstimateMarkingDate,
       CostEst.ValuationArea,

       @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
       CostEst.CompanyCodeCurrency,
       @ObjectModel.foreignKey.association: '_GlobalCurrency'
       CostEst.ControllingAreaCurrency                                       as GlobalCurrency,

       _SalesOrderItemCostEstItem,
       _Product,
       _GlobalCurrency,
       _CompanyCodeCurrency,
       _CostingType,
       _CostingVersion,
       _CostingVariant,
       _ValuationVariant,
       _Plant,
       _UnitOfMeasure
}
where
  CostEst.CostingReferenceObject = 'B'
```
