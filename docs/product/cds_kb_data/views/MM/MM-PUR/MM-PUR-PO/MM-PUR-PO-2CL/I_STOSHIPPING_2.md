---
name: I_STOSHIPPING_2
description: "Shipping Data for Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value
semantic_en: "Shipping Data for Stock Transport Order"
semantic_vi: "Shipping Data for Stock Transport Order — CDS view cơ bản (transactional data) dựa trên R_StockTransportOrderShipping."
keywords:
  - "shipping"
  - "data"
  - "for"
  - "stock"
  - "transport"
  - "order"
  - "item"
  - "condition"
  - "point"
  - "route"
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
# I_STOSHIPPING_2

**Shipping Data for Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderItem` | ✓ | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `LoadingGroup` |  | |  |  | `CHAR(4)` | Loading Group |
| `TransportationGroup` |  | |  |  | `CHAR(4)` | Transportation Group |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `DeliveryCreationDate` |  | |  |  | `DATS(8)` | Delivery Creation Date |
| `PlannedDeliveryDuration` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_StockTransportOrderItem` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value)*

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #L
  },
  supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@EndUserText.label: 'Shipping Data for Stock Transport Order'

@Metadata.ignorePropagatedAnnotations:true

@Search.searchable: true

define view entity I_STOShipping_2
  as select from R_StockTransportOrderShipping
  association to parent I_StockTransportOrderItem_2 as _StockTransportOrderItem on  $projection.StockTransportOrder     = _StockTransportOrderItem.StockTransportOrder
                                                                                and $projection.StockTransportOrderItem = _StockTransportOrderItem.StockTransportOrderItem

  association to exact one I_StockTransportOrder_2  as _StockTransportOrder     on  $projection.StockTransportOrder = _StockTransportOrder.StockTransportOrder
 
{
      @Search.defaultSearchElement: true
  key StockTransportOrder,
  key StockTransportOrderItem,
      ShippingCondition,
      ShippingPoint,
      Route,
      LoadingGroup,
      TransportationGroup,
      DeliveryPriority,
      UnloadingPointName,
      DeliveryCreationDate,
      PlannedDeliveryDuration,
      ShippingType,
      ShipToParty,

      StockTransportOrderType,
      PurchasingOrganization,
      PurchasingGroup,
      Plant,




      /* Associations */
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _ShippingCondition,
      _ShippingPoint,
      _StockTransportOrder,
      _StockTransportOrderItem

      /* Text associations for CustomUI */
      //      I_PurchasingDocumentShipping._ShippingConditionText,
      //      I_PurchasingDocumentShipping._ShippingPointText,
      //      I_PurchasingDocumentShipping._RouteText,
      //      I_PurchasingDocumentShipping._LoadingGroupText,
      //      I_PurchasingDocumentShipping._TransportationGroupText,
      //      I_PurchasingDocumentShipping._DeliveryPriorityText
}
```
