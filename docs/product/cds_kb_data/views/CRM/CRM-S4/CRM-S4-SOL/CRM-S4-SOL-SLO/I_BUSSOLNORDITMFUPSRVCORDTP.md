---
name: I_BUSSOLNORDITMFUPSRVCORDTP
description: "Bussolnorditmfupsrvcordtp"
semantic_vi: "View Bussolnorditmfupsrvcordtp hiển thị dữ liệu đơn hàng giải pháp kinh doanh và đơn hàng dịch vụ, thường được sử dụng trong xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "business solution order"
  - "service order"
  - "crm"
  - "transactional processing"
  - "crm-s4-sol-slo"
  - "lob other"
  - "interface view"
  - "sap cds view"
semantic_en: "The Bussolnorditmfupsrvcordtp view exposes business solution order and service order data, typically used in transactional processing within the CRM-S4-SOL-SLO component."
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
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMFUPSRVCORDTP

**Bussolnorditmfupsrvcordtp**

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
| `ServiceOrder` | ✓ | |  |  |  |  |
| `ServiceOrderItem` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {

  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Follow up Service Order - TP'

define view entity I_BusSolnOrdItmFUPSrvcOrdTP
  as projection on R_BusSolnOrdItmFUPSrvcOrdTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key ServiceOrder,
  key ServiceOrderItem,

      // Associations
      _BusinessSolutionOrder     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP
}
```
