---
name: I_PRODUCTCOSTESTIMATE
description: "Productcostestimate"
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
  - product
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATE

**Productcostestimate**

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
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | | `_ValuationArea` | `CompanyCode` | `CHAR(4)` | Company Code |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `CostEstimateValidityEndDate` |  | |  |  | `DATS(8)` | Costing Date To |
| `ValuationDate` |  | |  |  | `DATS(8)` | Valuation Date of a Cost Estimate |
| `QuantityStructureDate` |  | |  |  | `DATS(8)` | Quantity Structure Date for Costing |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `ProductBOMUsage` |  | |  |  | `CHAR(1)` | BOM Usage |
| `AlternativeBillOfMaterial` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `CostingItemIsProductComp` |  | |  |  | `CHAR(1)` | Material Component |
| `CostEstIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator for Product Costing |
| `CostingLotSize` |  | |  |  | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `CostEstimateCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `AdditiveCostCreatedByUser` |  | |  |  | `CHAR(12)` | User ID of Person Who Created Additive Cost Estimate |
| `CostEstimateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Created |
| `CostEstimateMarkingDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Marked |
| `CostEstimateMarkingUser` |  | |  | `CostEstimateMarkedByUser` | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostEstimateMarkedByUser` |  | |  |  | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostEstimateReleaseDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Released in Material Master |
| `CostEstimateReleaseUser` |  | |  | `CostEstimateReleasedByUser` | `CHAR(12)` | User Who Released Cost Estimate in Material Master Record |
| `CostEstimateReleasedByUser` |  | |  |  | `CHAR(12)` | User Who Released Cost Estimate in Material Master Record |
| `CostEstimateStatus` |  | |  |  | `CHAR(2)` | Costing Status |
| `CostingErrorMessageType` |  | |  |  | `CHAR(1)` | Message Type |
| `CostEstimateIsReleased` |  | |  |  | `CHAR(1)` | Release of Standard Cost Estimate |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostEstimateIsForProcmtAltv` |  | |  |  | `CHAR(1)` | Cost Estimate for a Procurement Alternative |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `ProcessCategory` |  | |  |  | `CHAR(4)` | Process Category |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixed Costing: Mixing Ratio |
| `ProcmtAltvValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant of Procurement Alternative |
| `SpecialProcurementType` |  | |  |  | `CHAR(2)` | Special Procurement Key for the Costing Object |
| `ProductProcurementType` |  | |  |  | `CHAR(1)` | Special procurement type |
| `SpecialProcurementPlant` |  | |  |  | `CHAR(4)` | Special Procurement Plant - Costing |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet for Calculating Overhead |
| `CostingOverheadType` |  | |  |  | `CHAR(1)` | Overhead Type |
| `ProductValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Raw Materials and Purchased Parts |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ReferenceLedger` |  | |  |  | `CHAR(2)` | GL ledger to which a cost esatimate refers to |
| `CostingOverheadGroup` |  | |  |  | `CHAR(10)` | Costing Overhead Group |
| `CostingOverhead` |  | |  |  | `CHAR(6)` | Overhead key |
| `PostingPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `PostingFiscalYear` |  | |  |  | `NUMC(4)` | Posting Date YYYY |
| `CostingErrorLogID` |  | |  |  | `NUMC(12)` | Error Management Number |
| `CostEstimateTransferControl` |  | |  |  | `CHAR(4)` | Transfer Control |
| `LowLevelCode` |  | |  |  | `CHAR(3)` | Low-Level Code |
| `CostEstimateCostingLevel` |  | |  |  | `NUMC(4)` | Costing Level |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `AuxiliaryCostCompStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure for Auxiliary Cost Component Split |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Breakdown ID |
| `EstimatedCostCostingRun` |  | |  |  | `CHAR(8)` | Name of Costing Run |
| `EstimatedCostCostingRunDate` |  | |  |  | `DATS(8)` | Costing Run Date |
| `ConfiguredProduct` |  | |  |  | `CHAR(40)` | Configured Material (Variant) |
| `ProductIsCostedWithQtyStruc` |  | |  |  | `CHAR(1)` | Material Is Costed with Quantity Structure |
| `_ProductCostEstimateItem` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductValuation` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_CostingVersion` | | ✓ | | | | |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingVersionText_2` | | ✓ | | | | |
| `_CostingVariant` | | ✓ | | | | |
| `_CostingVariantText` | | ✓ | | | | |
| `_ValuationVariant` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_CostingOverheadGroupText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_ProfitCenterText_2` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCostEstimateItem` | `I_ProductCostEstimateItem` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_ProductPlant` | `I_ProductPlantBasic` | [1..1] |
| `_ProductValuation` | `I_ProductValuationBasic` | [0..1] |
| `_CostingType` | `I_CostingType` | [1..1] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_CostingVersionText_2` | `I_CostingVersionText` | [0..*] |
| `_CostingVariant` | `I_CostingVariant` | [1..1] |
| `_CostingVariantText` | `I_CostingVariantText` | [0..*] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CostingOverheadGroupText` | `I_CostingOverheadGroupText` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_ValuationArea` | `I_ValuationArea` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_ProfitCenterText_2` | `I_ProfitCenterText` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_CompanyCodeText` | `I_CompanyCode` | [1..1] |
| `_PlantText` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRODCOSTEST',
  compiler.compareFilter: true
}

@AccessControl.authorizationCheck: #MANDATORY

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#UI_PROVIDER_PROJECTION_SOURCE],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #L
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

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Product Cost Estimate'

define view I_ProductCostEstimate
  as select from P_KEKO
  association [0..*] to I_ProductCostEstimateItem  as _ProductCostEstimateItem  on  $projection.CostingReferenceObject = _ProductCostEstimateItem.CostingReferenceObject
                                                                                and $projection.CostEstimate           = _ProductCostEstimateItem.CostEstimate
                                                                                and $projection.CostingType            = _ProductCostEstimateItem.CostingType
                                                                                and $projection.CostingDate            = _ProductCostEstimateItem.CostingDate
                                                                                and $projection.CostingVersion         = _ProductCostEstimateItem.CostingVersion
                                                                                and $projection.ValuationVariant       = _ProductCostEstimateItem.ValuationVariant
                                                                                and $projection.CostIsEnteredManually  = _ProductCostEstimateItem.CostIsEnteredManually

  association [1..1] to I_Product                  as _Product                  on  $projection.Product = _Product.Product
  association [0..*] to I_ProductText              as _ProductText              on  $projection.Product = _ProductText.Product
  association [1..1] to I_ProductPlantBasic        as _ProductPlant             on  $projection.Product = _ProductPlant.Product
                                                                                and $projection.Plant   = _ProductPlant.Plant
  association [0..1] to I_ProductValuationBasic    as _ProductValuation         on  $projection.Plant         = _ProductValuation.ValuationArea
                                                                                and $projection.Product       = _ProductValuation.Product
                                                                                and $projection.ValuationType = _ProductValuation.ValuationType
  association [1..1] to I_CostingType              as _CostingType              on  $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingTypeText          as _CostingTypeText          on  $projection.CostingType = _CostingTypeText.CostingType

  association [0..1] to I_CostingVersion           as _CostingVersion           on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                and $projection.CostingType      = _CostingVersion.CostingType
                                                                                and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [0..*] to I_CostingVersionText       as _CostingVersionText       on  $projection.CostingVersion = _CostingVersionText.CostingVersion
  association [0..*] to I_CostingVersionText       as _CostingVersionText_2     on  $projection.CostingVersion   = _CostingVersionText_2.CostingVersion
                                                                                and $projection.CostingType      = _CostingVersionText_2.CostingType
                                                                                and $projection.ValuationVariant = _CostingVersionText_2.ValuationVariant

  association [1..1] to I_CostingVariant           as _CostingVariant           on  $projection.CostingVariant = _CostingVariant.CostingVariant
  association [0..*] to I_CostingVariantText       as _CostingVariantText       on  $projection.CostingVariant = _CostingVariantText.CostingVariant

  association [1..1] to I_CostingValuationVariant  as _ValuationVariant         on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..*] to I_CostingValuationVarText  as _CostingValuationVarText  on  $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant

  association [0..*] to I_CostingOverheadGroupText as _CostingOverheadGroupText on  $projection.CostingOverheadGroup = _CostingOverheadGroupText.CostingOverheadGroup

  association [0..1] to I_Plant                    as _Plant                    on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ValuationArea            as _ValuationArea            on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_ControllingArea          as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Currency                 as _ControllingAreaCurrency  on  $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_Currency                 as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure            as _UnitOfMeasure            on  $projection.ValuationQuantityUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..*] to I_LedgerText               as _LedgerText               on  $projection.Ledger = _LedgerText.Ledger

  association [0..*] to I_ProfitCenterText         as _ProfitCenterText         on  $projection.ProfitCenter = _ProfitCenterText.ProfitCenter
  // must use language as on condition because <= validity condition, which disallows usage of "localized"
  association [0..1] to I_ProfitCenterText         as _ProfitCenterText_2       on  $projection.ProfitCenter     =  _ProfitCenterText_2.ProfitCenter
                                                                                and $projection.ControllingArea  =  _ProfitCenterText_2.ControllingArea
                                                                                and $projection.ValuationDate    <= _ProfitCenterText_2.ValidityEndDate
                                                                                and $projection.ValuationDate    >= _ProfitCenterText_2.ValidityStartDate
                                                                                and _ProfitCenterText_2.Language = $session.system_language

  // texts only available in separate view
  association [1..1] to I_ControllingArea          as _ControllingAreaText      on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [1..1] to I_CompanyCode              as _CompanyCodeText          on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [1..1] to I_Plant                    as _PlantText                on  $projection.Plant = _PlantText.Plant

{
  key  CostingReferenceObject,
  key  CostEstimate,
       @ObjectModel.text.association: '_CostingTypeText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key  CostingType,
       @Semantics.businessDate.at: true
  key  CostingDate,
       @ObjectModel.text.association: '_CostingVersionText_2'
  key  CostingVersion,
       @ObjectModel.text.association: '_CostingValuationVarText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key  ValuationVariant,
  key  CostIsEnteredManually,
       
       @ObjectModel.text.association: '_ProductText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
       Product,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
       Plant,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductValuationAreaVH' , element: 'ValuationArea' }, useAsTemplate: true }]
       @ObjectModel.foreignKey.association: '_ValuationArea'
       ValuationArea,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_MaterialValuationTypeVH' , element: 'InventoryValuationType' }, useAsTemplate: true }]
       ValuationType,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ControllingAreaStdVH' , element: 'ControllingArea' }, useAsTemplate: true }]
       ControllingArea,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CompanyCodeStdVH' , element: 'CompanyCode' }, useAsTemplate: true }]
       _ValuationArea.CompanyCode as CompanyCode,
       @Semantics.businessDate.from: true
       CostEstimateValidityStartDate,
       @Semantics.businessDate.to: true
       CostEstimateValidityEndDate,
       ValuationDate,
       QuantityStructureDate,
       ProductionVersion,
       BillOfMaterial,
       ProductBOMUsage,
       AlternativeBillOfMaterial,
       TaskListGroup,
       TaskListType,
       TaskListGroupCounter,
       CostingItemIsProductComp,
       CostEstIsMarkedForDeletion,
       @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
       CostingLotSize,
       @Semantics.unitOfMeasure: true
       @ObjectModel.foreignKey.association: '_UnitOfMeasure'
       ValuationQuantityUnit,
       
       @Semantics.user.createdBy: true
       CostEstimateCreatedByUser,
       AdditiveCostCreatedByUser,
       CostEstimateCreationDate,
       CostEstimateMarkingDate,
       @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateMarkedByUser'
       }
       CostEstimateMarkedByUser   as CostEstimateMarkingUser,
       CostEstimateMarkedByUser,
       CostEstimateReleaseDate,
       @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateReleasedByUser'
       }
       CostEstimateReleasedByUser as CostEstimateReleaseUser,
       CostEstimateReleasedByUser,

       CostEstimateStatus,
       CostingErrorMessageType,
       CostEstimateIsReleased,
       CostEstIsMixedCosting,
       CostEstimateIsForProcmtAltv,
       ProcmtAltvCostEstimate,
       ProcessCategory,
       CostgMixingRatioValue,
       ProcmtAltvValuationVariant,
       SpecialProcurementType,
       ProductProcurementType,
       SpecialProcurementPlant,
       CostingSheet,
       CostingOverheadType,
       ProductValuationStrategy,
       ProductValnPurgInfoRecdStrgy,
       @ObjectModel.text.association: '_CostingVariantText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingVariantStdVH' , element: 'CostingVariant' }, useAsTemplate: true }]
       CostingVariant,
       @ObjectModel.text.association: '_LedgerText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }, useAsTemplate: true }]
       Ledger,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_LedgerStdVH' , element: 'Ledger' }, useAsTemplate: true }]
       ReferenceLedger,
       @ObjectModel.text.association: '_CostingOverheadGroupText'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingOverheadGroupVH' , element: 'CostingOverheadGroup' }, useAsTemplate: true }]
       CostingOverheadGroup,
       CostingOverhead,
       PostingPeriod,
       PostingFiscalYear,
       CostingErrorLogID,

       CostEstimateTransferControl,
       LowLevelCode,
       CostEstimateCostingLevel,
       CostComponentStructure,
       AuxiliaryCostCompStructure,
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_BusinessAreaStdVH' , element: 'BusinessArea' }, useAsTemplate: true }]
       BusinessArea,
       @ObjectModel.text.association: '_ProfitCenterText_2'
       @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
       ProfitCenter,
       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
       CompanyCodeCurrency,
       @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
       ControllingAreaCurrency,
       ExchangeRateType,
       ComponentBreakdown,
       EstimatedCostCostingRun,
       EstimatedCostCostingRunDate,
       ConfiguredProduct,
       ProductIsCostedWithQtyStruc,

       _ProductCostEstimateItem,
       _Product,
       _ProductPlant,
       _ProductValuation,
       _CostingType,
       _CostingTypeText,
       _CostingVersion,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_CostingVersionText_2'
       _CostingVersionText,
       _CostingVersionText_2,
       _CostingVariant,
       _CostingVariantText,
       _ValuationVariant,
       _CostingValuationVarText,
       _CostingOverheadGroupText,
       _ValuationArea,
       _ValuationArea._CompanyCode,
       _ControllingArea,
       _ControllingAreaCurrency,
       _CompanyCodeCurrency,
       _UnitOfMeasure,
       _ProductText,
       _Plant,
       _LedgerText,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_ProfitCenterText_2'
       _ProfitCenterText,
       _ProfitCenterText_2,
       _ControllingAreaText,
       _CompanyCodeText,
       _PlantText
}
where
  CostingReferenceObject = '0'
```
