---
name: I_SALESORDERITEMCOSTESTITEM
description: "Sales OrderITEMCOSTESTITEM"
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
# I_SALESORDERITEMCOSTESTITEM

**Sales OrderITEMCOSTESTITEM**

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
| `CostingItem` | ✓ | |  |  | `NUMC(5)` | Unit Costing Line Item Number |
| `CostingItemCategory` |  | |  |  | `CHAR(1)` | Item Category |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `GlobalCurrency` |  | | `_SalesOrderItemCostEstimate` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `TotalPriceInGlobalCurrency` |  | |  | `cast(TotalPriceInInCtrlgAreaCrcy as fpc_total_price_global_crcy preserving type)` | `CURR(15)` | Total Price in Global Currency |
| `FixedPriceInGlobalCurrency` |  | |  | `cast(FixedPriceInCtrlgAreaCrcy as fpc_fixed_price_global_crcy preserving type)` | `CURR(15)` | Fixed Price in Global Currency |
| `TotalAmountInGlobalCurrency` |  | |  | `cast(TotalAmountInCtrlgAreaCrcy as fis_ksl)` | `CURR(23)` | Amount in Global Currency |
| `FixedAmountInGlobalCrcy` |  | |  | `cast(FixedAmountInCtrlgAreaCrcy as fis_kfsl)` | `CURR(23)` | Fixed Amount in Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TotalPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Total Price in Company Code Currency |
| `FixedPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Company Code Currency |
| `TotalAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Total Amount in Company Code Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Amount in Company Code Currency |
| `UnitOfMeasure` |  | |  | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `QuantityInBaseUnit` | `QUAN(15)` | Quantity |
| `CostingPriceQtyUnit` |  | |  |  | `UNIT(3)` | Price Quantity Unit |
| `CostingPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit of Prices in Controlling Area Currency |
| `CostingValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Material Component |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `BillOfMaterialItemNumber` |  | |  |  | `CHAR(4)` | Bill of Material Item Number |
| `CostingItemIsAssembly` |  | |  |  | `CHAR(1)` | Assembly Indicator for Item |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Operation` |  | |  |  | `CHAR(4)` | Operation or Phase Number |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingInfoRecordCategory` |  | |  |  | `CHAR(1)` | Purchasing info record category |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Lot-Size-Independent Indicator |
| `HasError` |  | |  |  | `CHAR(1)` | Error Indicator |
| `TransferCostEstimate` |  | |  |  | `NUMC(12)` | Transfer Cost Estimate |
| `TransferCostingType` |  | |  |  | `CHAR(2)` | Transfer Costing Type |
| `TransferCostingDate` |  | |  |  | `DATS(8)` | Transfer Costing Date |
| `TransferCostingVersion` |  | |  |  | `NUMC(2)` | Transfer Costing Version |
| `TransferValuationVariant` |  | |  |  | `CHAR(3)` | Transfer Valuation Variant |
| `_SalesOrderItemCostEstimate` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingVersion` | | ✓ | | | | |
| `_ValuationVariant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CostingUnitOfMeasure` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderItemCostEstimate` | `I_SalesOrderItemCostEstimate` | [1..1] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [1..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_CostingUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #ANALYTICAL_FACT,
  usageType:{
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
  }

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order Item Cost Estimate Item'

define view entity I_SalesOrderItemCostEstItem
  as select from P_CKIS
  association [1..1] to I_SalesOrderItemCostEstimate as _SalesOrderItemCostEstimate on  $projection.CostingReferenceObject = _SalesOrderItemCostEstimate.CostingReferenceObject
                                                                                    and $projection.CostEstimate           = _SalesOrderItemCostEstimate.CostEstimate
                                                                                    and $projection.CostingType            = _SalesOrderItemCostEstimate.CostingType
                                                                                    and $projection.CostingDate            = _SalesOrderItemCostEstimate.CostingDate
                                                                                    and $projection.CostingVersion         = _SalesOrderItemCostEstimate.CostingVersion
                                                                                    and $projection.ValuationVariant       = _SalesOrderItemCostEstimate.ValuationVariant
                                                                                    and $projection.CostIsEnteredManually  = _SalesOrderItemCostEstimate.CostIsEnteredManually
  association [0..1] to I_CostingType                as _CostingType                on  $projection.CostingType = _CostingType.CostingType
  association [0..1] to I_CostingVersion             as _CostingVersion             on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                    and $projection.CostingType      = _CostingVersion.CostingType
                                                                                    and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [1..1] to I_CostingValuationVariant    as _ValuationVariant           on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..1] to I_Product                    as _Product                    on  $projection.Product = _Product.Product
  association [1..1] to I_Currency                   as _GlobalCurrency             on  $projection.globalcurrency = _GlobalCurrency.Currency
  association [1..1] to I_Currency                   as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure              as _CostingUnitOfMeasure       on  $projection.CostingPriceQtyUnit = _CostingUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure              on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

{
  key   CostingReferenceObject,
  key   CostEstimate,
        @ObjectModel.foreignKey.association: '_CostingType'
  key   CostingType,
        @Semantics.businessDate.at: true
  key   CostingDate,
        @ObjectModel.foreignKey.association: '_CostingVersion'
  key   CostingVersion,
        @ObjectModel.foreignKey.association: '_ValuationVariant'
  key   ValuationVariant,
  key   CostIsEnteredManually,
  key   CostingItem,

        CostingItemCategory,
        CostElement,
        CostOriginGroup,
        Plant,
        @ObjectModel.foreignKey.association: '_Product'
        Product,
        ValuationType,
        Creditor,

        @ObjectModel.foreignKey.association: '_GlobalCurrency'
        _SalesOrderItemCostEstimate.GlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(TotalPriceInInCtrlgAreaCrcy  as fpc_total_price_global_crcy preserving type) as TotalPriceInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(FixedPriceInCtrlgAreaCrcy as  fpc_fixed_price_global_crcy preserving type)   as FixedPriceInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(TotalAmountInCtrlgAreaCrcy as fis_ksl)                                       as TotalAmountInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(FixedAmountInCtrlgAreaCrcy as fis_kfsl)                                      as FixedAmountInGlobalCrcy,

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

        @ObjectModel.foreignKey.association: '_UnitOfMeasure'
        BaseUnit                                                                          as UnitOfMeasure,
        @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
        QuantityInBaseUnit                                                                as Quantity,
        @ObjectModel.foreignKey.association: '_CostingUnitOfMeasure'
        CostingPriceQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
        CostingPriceUnitQty,

        CostingValuationStrategy,
        ProductValnPurgInfoRecdStrgy,
        BillOfMaterialItemNumber,
        CostingItemIsAssembly,
        CostCtrActivityType,
        CostCenter,
        ProfitCenter,
        Operation,
        PurchasingInfoRecord,
        PurchasingOrganization,
        PurchasingInfoRecordCategory,
        PurchasingDocument,
        PurchasingDocumentItem,

        @Semantics.booleanIndicator
        IsLotSizeIndependent,
        HasError,

        TransferCostEstimate,
        TransferCostingType,
        TransferCostingDate,
        TransferCostingVersion,
        TransferValuationVariant,

        _SalesOrderItemCostEstimate,
        _Product,
        _CostingType,
        _CostingVersion,
        _ValuationVariant,
        _GlobalCurrency,
        _CompanyCodeCurrency,
        _CostingUnitOfMeasure,
        _UnitOfMeasure

}
where
//Semantically 'ControllingLedger' is not needed (Field is always filled with '00') but it helps the SQL optimizer to optimize the execution.
      ControllingLedger      = '00'
  and CostingReferenceObject = 'B'
```
