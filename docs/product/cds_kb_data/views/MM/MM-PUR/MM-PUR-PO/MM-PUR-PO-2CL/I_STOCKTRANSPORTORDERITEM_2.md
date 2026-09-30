---
name: I_STOCKTRANSPORTORDERITEM_2
description: "Item in Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value
semantic_en: "Item in Stock Transport Order"
semantic_vi: "Item in Stock Transport Order — CDS view cơ bản (transactional data) dựa trên R_StockTransportOrderItem."
keywords:
  - "Item in Stock Transport Order"
  - "item"
  - "stock"
  - "transport"
  - "order"
  - "unique"
  - "text"
  - "document"
  - "currency"
tags:
  - MM
  - bo:inventory
  - component:MM-PUR-PO-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-PO
  - MM-PUR-PO-2CL
  - order
  - stock
---
# I_STOCKTRANSPORTORDERITEM_2

**Item in Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderItem` | ✓ | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `STOItemUniqueID` |  | |  |  | `CHAR(15)` | Unique Item ID of Stock Transport Order |
| `StockTransportOrderItemText` |  | |  |  | `CHAR(40)` | Item Text of Stock Transport Order |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchasingDocumentDeletionCode` |  | |  |  | `CHAR(1)` | Deletion Indicator in Purchasing Document |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductTypeCode` |  | |  |  | `CHAR(2)` | Product Type Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `ManufacturerMaterial` |  | |  |  | `CHAR(40)` | Material number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `OrderQuantity` |  | |  |  | `QUAN(13)` | Purchase Order Quantity |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `IsFinallyInvoiced` |  | |  |  | `CHAR(1)` | Final Invoice Indicator |
| `GoodsReceiptIsExpected` |  | |  |  | `CHAR(1)` | Goods Receipt Indicator |
| `OutwardDeliveryIsComplete` |  | |  |  | `CHAR(1)` | "Outward Delivery Completed" Indicator |
| `InvoiceIsExpected` |  | |  |  | `CHAR(1)` | Invoice Receipt Indicator |
| `InvoiceIsGoodsReceiptBased` |  | |  |  | `CHAR(1)` | Indicator: GR-Based Invoice Verification |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  | `CHAR(1)` | Evaluated Receipt Settlement (ERS) |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Unlimited Overdelivery Allowed |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Overdelivery Tolerance |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Underdelivery Tolerance |
| `GoodsReceiptIsNonValuated` |  | |  |  | `CHAR(1)` | Goods Receipt, Non-Valuated |
| `RequisitionerName` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `STOItemCategory` |  | |  |  | `CHAR(1)` | Item category in purchasing document |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `PricingDateControl` |  | |  |  | `CHAR(1)` | Price Determination (Pricing) Date Control |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type for Returns to Supplier |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `IsStatisticalItem` |  | |  |  | `CHAR(1)` | Item is statistical |
| `PurchasingParentItem` |  | |  |  | `NUMC(5)` | Higher-Level Item in Purchasing Documents |
| `IsReturnsItem` |  | |  |  | `CHAR(1)` | Returns Item |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `NetAmount` |  | |  |  | `CURR(13)` | Net Order Value in PO Currency |
| `EffectiveAmount` |  | |  |  | `CURR(13)` | Effective value of item |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `ItemVolume` |  | |  |  | `QUAN(13)` | Volume |
| `ItemNetWeight` |  | |  |  | `QUAN(13)` | Net Weight |
| `ItemGrossWeight` |  | |  |  | `QUAN(13)` | Gross Weight |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  | `cast (OrderPriceUnitToOrderUnitNmrtr as vdm_ordprcunittoorderunitnmrtr preserving type )` | `DEC(5)` | Quantity Conversion Numerator |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  | `DEC(5)` | Denominator for Conv. of Order Price Unit into Order Unit |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determining Tax Rates |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Partial Delivery at Item Level (Stock Transfer) |
| `PlannedDeliveryDurationInDays` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `GoodsReceiptDurationInDays` |  | |  |  | `DEC(3)` | Goods receipt processing time in days |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `PartialInvoiceDistribution` |  | |  |  | `CHAR(1)` | Partial invoice indicator |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
| `InventoryUsabilityCode` |  | |  |  | `CHAR(1)` | Stock Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `PurchasingOrderReason` |  | |  |  | `CHAR(3)` | Reason for Ordering |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SupplierConfirmationControlKey` |  | |  |  | `CHAR(4)` | Confirmation Control Key |
| `Subcontractor` |  | |  |  | `CHAR(10)` | Supplier to be Supplied/Who is to Receive Delivery |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `_DocumentCurrency` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_OrderPriceUnit` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Subcontractor` | | ✓ | | | | |
| `_ManufacturerMaterial` | | ✓ | | | | |
| `_STOShipping` | | ✓ | | | | |
| `_STOScheduleLine` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_STOItemExtension` | `E_PurchasingDocumentItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value)*

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}

@ObjectModel: {
  sapObjectNodeType:{
      name: 'StockTransportOrderItem'
  },
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory:   #L
  },
  supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  representativeKey: 'StockTransportOrderItem',
  uniqueIdField: 'STOItemUniqueID'
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@EndUserText.label: 'Item in Stock Transport Order'

@Metadata.ignorePropagatedAnnotations:true

@Search.searchable: true

define view entity I_StockTransportOrderItem_2
  as select from R_StockTransportOrderItem
  association        to parent I_StockTransportOrder_2 as _StockTransportOrder on  $projection.StockTransportOrder = _StockTransportOrder.StockTransportOrder

  composition [0..1] of I_STOShipping_2                as _STOShipping
  composition [1..*] of I_STOScheduleLine_2            as _STOScheduleLine
  association [0..1] to I_Currency                     as _DocumentCurrency    on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [1..1] to E_PurchasingDocumentItem       as _STOItemExtension    on  $projection.StockTransportOrder     = _STOItemExtension.PurchasingDocument
                                                                               and $projection.StockTransportOrderItem = _STOItemExtension.PurchasingDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_StockTransportOrder'
  key StockTransportOrder,
      @Search.defaultSearchElement: true
  key StockTransportOrderItem,
      STOItemUniqueID,
      StockTransportOrderItemText,
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      DocumentCurrency,
      PurchasingDocumentDeletionCode,

      //Product
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      ProductTypeCode,
      ProductType,

      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      ManufacturerMaterial,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,


      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit, 

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,

      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      NetPriceQuantity,

      IsCompletelyDelivered,

      IsFinallyInvoiced,

      GoodsReceiptIsExpected,

      OutwardDeliveryIsComplete,

      InvoiceIsExpected,

      InvoiceIsGoodsReceiptBased,
      
      EvaldRcptSettlmtIsAllowed,
      
      UnlimitedOverdeliveryIsAllowed,

      OverdelivTolrtdLmtRatioInPct,

      UnderdelivTolrtdLmtRatioInPct,

      GoodsReceiptIsNonValuated,

      RequisitionerName,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,

      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
      STOItemCategory,

      @ObjectModel.foreignKey.association: '_OrderPriceUnit'
      OrderPriceUnit,
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      ItemVolumeUnit,
      @ObjectModel.foreignKey.association: '_WeightUnit'
      ItemWeightUnit,

      PricingDateControl,

      DeliveryDocumentType,

      IssuingStorageLocation,

      IsStatisticalItem,

      PurchasingParentItem,

      IsReturnsItem,

      AccountAssignmentCategory,

      PurchasingInfoRecord,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      EffectiveAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,

      cast (OrderPriceUnitToOrderUnitNmrtr as vdm_ordprcunittoorderunitnmrtr preserving type ) as OrderPriceUnitToOrderUnitNmrtr,

      OrdPriceUnitToOrderUnitDnmntr,

      TaxCode,

      TaxJurisdiction,

      TaxCountry,

      TaxDeterminationDate,

      PartialDeliveryIsAllowed,
      
      PlannedDeliveryDurationInDays,

      GoodsReceiptDurationInDays,

      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,

      IncotermsTransferLocation,

      IncotermsLocation1,

      IncotermsLocation2,

      PartialInvoiceDistribution,

      ShippingInstruction,

      InventoryUsabilityCode,

      InventorySpecialStockType,

      PurchasingOrderReason,

      StockTransportOrderType,
      PurchasingOrganization,
      PurchasingGroup,

      SupplierConfirmationControlKey,
      Subcontractor,
      Customer,

      //Association
      _StockTransportOrder,
      _ProductGroup,
      _Product,
      _CompanyCode,
      _Plant,
      _StorageLocation,
      _PurgDocumentItemCategory,
      _BaseUnit,
      _OrderPriceUnit,
      _OrderQuantityUnit,
      _WeightUnit,
      _VolumeUnit,
      _IncotermsClassification,
      _Customer,
      _Subcontractor,
      _ManufacturerMaterial,
      _STOShipping,
      _STOScheduleLine,
      _DocumentCurrency

      // Text associations for CustomUI
      //      _DocumentCurrencyText,
      //      _ProductGroupText,
      //      _ProductText,
      //      _ProductTypeCodeText,
      //      _OrderQuantityUnitText,
      //      _BaseUnitText,
      //      _PurgDocumentItemCategoryText as _STOItemCategoryText,
      //      _ItemVolumeUnitText,
      //      _ItemWeightUnitText,
      //      _AcctAssignmentCategoryText,
      //      _SupplierConfControlKeyText
}
```
