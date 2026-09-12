---
name: I_PRODUCTCOSTESTIMATEITEM
description: "Productcostestimateitem"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATEITEM

**Productcostestimateitem**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
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
| `CostingItem` | ✓ | |  |  | `NUMC(5)` | Unit Costing Line Item Number |
| `CostingItemCategory` |  | |  |  | `CHAR(1)` | Item Category |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `TotalPriceInInCtrlgAreaCrcy` |  | |  |  | `CURR(15)` | Total Price in Controlling Area Currency |
| `FixedPriceInCtrlgAreaCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Controlling Area Currency |
| `TotalAmountInCtrlgAreaCrcy` |  | |  |  | `CURR(15)` | Total Amount in Controlling Area Currency |
| `FixedAmountInCtrlgAreaCrcy` |  | |  |  | `CURR(15)` | Fixed Amount in Controlling Area Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TotalPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Total Price in Company Code Currency |
| `FixedPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Company Code Currency |
| `TotalAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Total Amount in Company Code Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Amount in Company Code Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity |
| `AssyScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Scrap Quantity |
| `CompScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Component Scrap Quantity |
| `CostingPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit of Prices in Controlling Area Currency |
| `CostingPriceQtyUnit` |  | |  |  | `UNIT(3)` | Price Quantity Unit |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Main Cost Component Split |
| `AuxiliaryCostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Auxiliary Cost Component Split |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `TransferCostEstimate` |  | |  |  | `NUMC(12)` | Transfer Cost Estimate |
| `TransferCostingType` |  | |  |  | `CHAR(2)` | Transfer Costing Type |
| `TransferCostingDate` |  | |  |  | `DATS(8)` | Transfer Costing Date |
| `TransferCostingVersion` |  | |  |  | `NUMC(2)` | Transfer Costing Version |
| `TransferValuationVariant` |  | |  |  | `CHAR(3)` | Transfer Valuation Variant |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostingObject` |  | |  |  | `NUMC(8)` | Object ID |
| `Operation` |  | |  |  | `CHAR(4)` | Operation or Phase Number |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingInfoRecordCategory` |  | |  |  | `CHAR(1)` | Purchasing info record category |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `CostingValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Material Component |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `BillOfMaterialItemNumber` |  | |  |  | `CHAR(4)` | Bill of Material Item Number |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixing Ratio |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `CostingItemIsAssembly` |  | |  |  | `CHAR(1)` | Assembly Indicator for Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `CostCompSplitIsExisting` |  | |  |  | `CHAR(1)` | Main Cost Component Split for KALKTAB Item Exists |
| `HasError` |  | |  |  | `CHAR(1)` | Error Indicator |
| `_CostEstimate` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_TransferCostingTypeText` | | ✓ | | | | |
| `_CostingVersion` | | ✓ | | | | |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingVersionText_2` | | ✓ | | | | |
| `_TransferCostingVersionText` | | ✓ | | | | |
| `_ValuationVariant` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_TransferValuationVarText` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_CostingUnitOfMeasure` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_CostOriginGroupText` | | ✓ | | | | |
| `_CostComponentText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostEstimate` | `I_ProductCostEstimate` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_TransferCostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_CostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_CostingVersionText_2` | `I_CostingVersionText` | [0..*] |
| `_TransferCostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_TransferValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_ControllingAreaCurrency` | `I_Currency` | [1..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CostingUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_CostOriginGroupText` | `I_CostOriginGroupText` | [0..*] |
| `_CostComponentText` | `I_CostComponentText` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_PlantText` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRODCOSTESI',
  compiler.compareFilter: true
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
}

@ObjectModel: {
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_FACT,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Product Cost Estimate Item'
@Metadata.ignorePropagatedAnnotations: true

define view I_ProductCostEstimateItem
  as select from P_CKIS
  association [1..1] to I_ProductCostEstimate     as _CostEstimate               on  $projection.CostingReferenceObject = _CostEstimate.CostingReferenceObject
                                                                                 and $projection.CostEstimate           = _CostEstimate.CostEstimate
                                                                                 and $projection.CostingType            = _CostEstimate.CostingType
                                                                                 and $projection.CostingDate            = _CostEstimate.CostingDate
                                                                                 and $projection.CostingVersion         = _CostEstimate.CostingVersion
                                                                                 and $projection.ValuationVariant       = _CostEstimate.ValuationVariant
                                                                                 and $projection.CostIsEnteredManually  = _CostEstimate.CostIsEnteredManually
  association [0..1] to I_Product                 as _Product                    on  $projection.Product = _Product.Product
  association [0..*] to I_ProductText             as _ProductText                on  $projection.Product = _ProductText.Product

  association [0..1] to I_CostingType             as _CostingType                on  $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingTypeText         as _CostingTypeText            on  $projection.CostingType = _CostingTypeText.CostingType
  association [0..*] to I_CostingTypeText         as _TransferCostingTypeText    on  $projection.TransferCostingType = _TransferCostingTypeText.CostingType

  association [0..1] to I_CostingVersion          as _CostingVersion             on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                 and $projection.CostingType      = _CostingVersion.CostingType
                                                                                 and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [0..*] to I_CostingVersionText      as _CostingVersionText         on  $projection.CostingVersion = _CostingVersionText.CostingVersion
  association [0..*] to I_CostingVersionText      as _CostingVersionText_2       on  $projection.CostingVersion   = _CostingVersionText_2.CostingVersion
                                                                                 and $projection.CostingType      = _CostingVersionText_2.CostingType
                                                                                 and $projection.ValuationVariant = _CostingVersionText_2.ValuationVariant
  association [0..*] to I_CostingVersionText      as _TransferCostingVersionText on  $projection.TransferCostingVersion   = _TransferCostingVersionText.CostingVersion
                                                                                 and $projection.TransferCostingType      = _TransferCostingVersionText.CostingType
                                                                                 and $projection.TransferValuationVariant = _TransferCostingVersionText.ValuationVariant

  association [1..1] to I_CostingValuationVariant as _ValuationVariant           on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..*] to I_CostingValuationVarText as _CostingValuationVarText    on  $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant
  association [0..*] to I_CostingValuationVarText as _TransferValuationVarText   on  $projection.TransferValuationVariant = _TransferValuationVarText.ValuationVariant

  association [1..1] to I_Currency                as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [1..1] to I_Currency                as _ControllingAreaCurrency    on  $projection.ControllingAreaCurrency = _ControllingAreaCurrency.Currency
  association [0..1] to I_UnitOfMeasure           as _BaseUnitOfMeasure          on  $projection.BaseUnit = _BaseUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _CostingUnitOfMeasure       on  $projection.CostingPriceQtyUnit = _CostingUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData     as _WBSElement                 on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..*] to I_CostOriginGroupText     as _CostOriginGroupText        on  $projection.CostOriginGroup = _CostOriginGroupText.CostOriginGroup
  association [0..*] to I_CostComponentText       as _CostComponentText          on  $projection.CostComponent = _CostComponentText.CostComponent
  association [0..*] to I_CostCenterText          as _CostCenterText             on  $projection.CostCenter = _CostCenterText.CostCenter
  association [0..*] to I_ProfitCenterText        as _ProfitCenterText           on  $projection.ProfitCenter = _ProfitCenterText.ProfitCenter
  association [0..*] to I_BusinessAreaText        as _BusinessAreaText           on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [1..1] to I_Plant                   as _PlantText                  on  $projection.Plant = _PlantText.Plant

{
  key   CostingReferenceObject,
  key   CostEstimate,
        @ObjectModel.text.association: '_CostingTypeText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key   CostingType,
        @Semantics.businessDate.at: true
  key   CostingDate,
        @ObjectModel.text.association: '_CostingVersionText'
  key   CostingVersion,
        @ObjectModel.text.association: '_CostingValuationVarText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key   ValuationVariant,
  key   CostIsEnteredManually,
  key   CostingItem,

        CostingItemCategory,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
        Plant,
        @ObjectModel.text.association: '_ProductText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
        Product,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_MaterialValuationTypeVH' , element: 'InventoryValuationType' }, useAsTemplate: true }]
        ValuationType,

        @Semantics.currencyCode: true
        @ObjectModel.foreignKey.association: '_ControllingAreaCurrency'
        ControllingAreaCurrency,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        TotalPriceInInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        FixedPriceInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        TotalAmountInCtrlgAreaCrcy,
        @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
        FixedAmountInCtrlgAreaCrcy,

        @Semantics.currencyCode: true
        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        CompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalAmountInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedAmountInCoCodeCrcy,

        @Semantics.unitOfMeasure: true
        @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
        BaseUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        QuantityInBaseUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        AssyScrapQuantityInValnQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        CompScrapQuantityInValnQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
        CostingPriceUnitQty,
        @Semantics.unitOfMeasure: true
        @ObjectModel.foreignKey.association: '_CostingUnitOfMeasure'
        CostingPriceQtyUnit,

        CostElement,
        @ObjectModel.text.association: '_CostOriginGroupText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostOriginGroupStdVH' , element: 'CostOriginGroup' }, useAsTemplate: true }]
        CostOriginGroup,
        @ObjectModel.text.association: '_CostComponentText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostComponentStdVH' , element: 'CostComponent' }, useAsTemplate: true }]
        CostComponent,
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostComponentStdVH' , element: 'CostComponent' }, useAsTemplate: true }]
        AuxiliaryCostComponent,
        Creditor,

        TransferCostEstimate,
        @ObjectModel.text.association: '_TransferCostingTypeText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
        TransferCostingType,
        TransferCostingDate,
        @ObjectModel.text.association: '_TransferCostingVersionText'
        TransferCostingVersion,
        @ObjectModel.text.association: '_TransferValuationVarText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
        TransferValuationVariant,

        @ObjectModel.text.association: '_CostCenterText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostCenterStdVH' , element: 'CostCenter' }, useAsTemplate: true }]
        CostCenter,
        @ObjectModel.text.association: '_ProfitCenterText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
        ProfitCenter,
        @ObjectModel.text.association: '_BusinessAreaText'
        @Consumption.valueHelpDefinition:[{entity: { name: 'I_BusinessAreaStdVH' , element: 'BusinessArea' }, useAsTemplate: true }]
        BusinessArea,
        CostCtrActivityType,
        CostingObject,
        Operation,
        PurchasingInfoRecord,
        PurchasingOrganization,
        PurchasingInfoRecordCategory,
        PurchasingDocument,
        PurchasingDocumentItem,
        CostingValuationStrategy,
        ProductValnPurgInfoRecdStrgy,
        BillOfMaterialItemNumber,
        CostEstIsMixedCosting,
        CostgMixingRatioValue,
        ProcmtAltvCostEstimate,
        CostingItemIsAssembly,

        @ObjectModel.foreignKey.association: '_WBSElement'
        WBSElementInternalID,
        CostCompSplitIsExisting,
        HasError,

        // associations
        _CostEstimate,
        _Product,
        _CostingType,
        _CostingVersion,
        _ValuationVariant,
        _CompanyCodeCurrency,
        _ControllingAreaCurrency,
        _BaseUnitOfMeasure,
        _CostingUnitOfMeasure,
        _WBSElement,
        _CostingTypeText,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor: '_CostingVersionText_2'
        _CostingVersionText,
        _CostingVersionText_2,
        _CostingValuationVarText,
        _CostOriginGroupText,
        _CostComponentText,
        _CostCenterText,
        _ProfitCenterText,
        _BusinessAreaText,
        _ProductText,
        _PlantText,
        _TransferCostingTypeText,
        _TransferCostingVersionText,
        _TransferValuationVarText
}

where
      ControllingLedger      = '00'
  and CostingReferenceObject = '0'
```
