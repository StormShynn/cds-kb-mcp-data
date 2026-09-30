---
name: I_STOSCHEDULELINE_2
description: "Schedule Line for Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSCHEDULELINE_2')/$value
semantic_en: "Schedule Line for Stock Transport Order"
semantic_vi: "Schedule Line for Stock Transport Order — CDS view cơ bản (transactional data) dựa trên R_STOScheduleLine."
keywords:
  - "schedule"
  - "line"
  - "for"
  - "stock"
  - "transport"
  - "order"
  - "item"
  - "deliv"
  - "date"
  - "category"
  - "delivery"
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
# I_STOSCHEDULELINE_2

**Schedule Line for Stock Transport Order**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSCHEDULELINE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderItem` | ✓ | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `ScheduleLine` | ✓ | |  |  | `NUMC(4)` | Delivery Schedule Line Counter |
| `DelivDateCategory` |  | |  |  | `CHAR(1)` | Category of delivery date |
| `ScheduleLineDeliveryDate` |  | |  |  | `DATS(8)` | Item Delivery Date |
| `ScheduleLineDeliveryTime` |  | |  |  | `TIMS(6)` | Delivery Date Time-Spot |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `ScheduleLineOrderQuantity` |  | |  |  | `QUAN(13)` | Scheduled Quantity |
| `RoughGoodsReceiptQty` |  | |  |  | `QUAN(13)` | Quantity of Goods Received |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition |
| `ScheduleLineIsFixed` |  | |  |  | `CHAR(1)` | Schedule Line is "Fixed" |
| `ScheduleLineCommittedQuantity` |  | |  |  | `QUAN(13)` | Committed Quantity |
| `TransportationPlanningDate` |  | |  |  | `DATS(8)` | Transportation Planning Date |
| `TransportationPlanningTime` |  | |  |  | `TIMS(6)` | Transp. Planning Time (Local, Relating to a Shipping Point) |
| `LoadingDate` |  | |  |  | `DATS(8)` | Loading Date |
| `LoadingTime` |  | |  |  | `TIMS(6)` | Loading Time (Local Time Relating to a Shipping Point) |
| `GoodsIssueDate` |  | |  |  | `DATS(8)` | Goods Issue Date |
| `GoodsIssueTime` |  | |  |  | `TIMS(6)` | Time of Goods Issue (Local, Relating to a Plant) |
| `STOLatestPossibleGRDate` |  | |  |  | `DATS(8)` | Goods Receipt End Date |
| `STOLatestPossibleGRTime` |  | |  |  | `TIMS(6)` | Goods Receipt End Time (Local, Relating to a Plant) |
| `ProductAvailabilityTime` |  | |  |  | `TIMS(6)` | Material Staging Time (Local, Relating to a Plant) |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `StockTransferDeliveredQuantity` |  | |  |  | `QUAN(13)` | Quantity Delivered (Stock Transfer) |
| `Reservation` |  | |  |  | `NUMC(10)` | Number of reservation/dependent requirements |
| `SchedLineStscDeliveryDate` |  | |  |  | `DATS(8)` | Statistics-Relevant Delivery Date |
| `ScheduleLineIssuedQuantity` |  | |  |  | `QUAN(13)` | Issued Quantity |
| `SourceOfCreation` |  | |  |  | `CHAR(1)` | Creation indicator (purchase requisition/schedule lines) |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `_StockTransportOrder` | | ✓ | | | | |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_OrderQuantityUnitText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSCHEDULELINE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSCHEDULELINE_2')/$value)*

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
supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  representativeKey: 'ScheduleLine'
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@EndUserText.label: 'Schedule Line for Stock Transport Order'

@Metadata.ignorePropagatedAnnotations:true

@Search.searchable: true

define view entity I_STOScheduleLine_2
  as select from R_STOScheduleLine
  association to parent I_StockTransportOrderItem_2  as _StockTransportOrderItem on  $projection.StockTransportOrder     = _StockTransportOrderItem.StockTransportOrder
                                                                                 and $projection.StockTransportOrderItem = _StockTransportOrderItem.StockTransportOrderItem

  association to exact one I_StockTransportOrder_2   as _StockTransportOrder     on  $projection.StockTransportOrder = _StockTransportOrder.StockTransportOrder


{
       @ObjectModel.foreignKey.association: '_StockTransportOrder'
  key  StockTransportOrder,
       @ObjectModel.foreignKey.association: '_StockTransportOrderItem'
  key  StockTransportOrderItem,
       @Search.defaultSearchElement: true
  key  ScheduleLine as ScheduleLine,
       DelivDateCategory,
       ScheduleLineDeliveryDate,
       ScheduleLineDeliveryTime,

       @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
       OrderQuantityUnit,

       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       ScheduleLineOrderQuantity,

       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       RoughGoodsReceiptQty,

       @ObjectModel.foreignKey.association: '_PurchaseRequisition'
       PurchaseRequisition,
       @ObjectModel.foreignKey.association: '_PurchaseRequisitionItem'
       PurchaseRequisitionItem,

       ScheduleLineIsFixed,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       ScheduleLineCommittedQuantity,
       TransportationPlanningDate,
       TransportationPlanningTime,
       LoadingDate,
       LoadingTime,
       GoodsIssueDate,
       GoodsIssueTime,
       STOLatestPossibleGRDate,
       STOLatestPossibleGRTime,
       ProductAvailabilityTime,
       ProductAvailabilityDate,      
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       StockTransferDeliveredQuantity,
       Reservation,
       SchedLineStscDeliveryDate,
       @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
       ScheduleLineIssuedQuantity,
       SourceOfCreation,
       
       

       StockTransportOrderType,
       PurchasingOrganization,
       PurchasingGroup,
       Plant,

       // Associations
       _StockTransportOrder,
       _StockTransportOrderItem,
       _OrderQuantityUnit,
       _PurchaseRequisition,
       _PurchaseRequisitionItem,


       // Text associations for CustomUI
       _OrderQuantityUnitText

}
```
