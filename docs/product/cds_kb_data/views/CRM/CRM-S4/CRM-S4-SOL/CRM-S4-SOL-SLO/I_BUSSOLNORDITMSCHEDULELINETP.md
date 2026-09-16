---
name: I_BUSSOLNORDITMSCHEDULELINETP
description: "BUSSOLNORDITMSchedule LineTP"
semantic_vi: "View BUSSOLNORDITMSchedule LineTP hiển thị dữ liệu dòng lịch trình cho các giải pháp kinh doanh trong CRM, hữu ích khi quản lý và theo dõi lịch trình giao hàng cho đơn hàng."
keywords:
  - "schedule line"
  - "dòng lịch trình"
  - "business solution"
  - "giải pháp kinh doanh"
  - "crm"
  - "scheduling"
  - "lịch trình"
  - "delivery schedule"
  - "lịch trình giao hàng"
  - "order"
  - "đơn hàng"
  - "sap cds"
semantic_en: "The BUSSOLNORDITMSchedule LineTP view exposes schedule line data for business solutions in CRM, useful when managing and tracking delivery schedules for orders."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - schedule-line
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMSCHEDULELINETP

**BUSSOLNORDITMSchedule LineTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `RequestedDeliveryUTCDateTime` |  | |  |  |  |  |
| `ProductQuantity` |  | |  |  |  |  |
| `ConfirmedDeliveryDateTime` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Solution Order Item Schedule Lines - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdItmScheduleLineTP
as projection on R_BusSolnOrdItmScheduleLineTP 
{
    key BusinessSolutionOrder,
    key BusinessSolutionOrderItem,
    key ScheduleLine,
    
    @Semantics.quantity.unitOfMeasure:'QuantityUnit'
    Quantity,
    RequestedDeliveryUTCDateTime,
    
    @Semantics.quantity.unitOfMeasure:'QuantityUnit'
    ProductQuantity,
    ConfirmedDeliveryDateTime,
    QuantityUnit,
    /* Associations */
    _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
    _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP
  
}
```
