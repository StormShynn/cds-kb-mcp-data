---
name: I_BSORDITMPRDCSSRSRVCCONTRTP
description: "Bsorditmprdcssrsrvccontrtp"
semantic_vi: "View này hiển thị dữ liệu hợp đồng dịch vụ cho đơn hàng giải pháp kinh doanh, được sử dụng để quản lý hợp đồng dịch vụ cho đơn hàng giải pháp kinh doanh. Nó thường được sử dụng trong bối cảnh thành phần CRM-S4-SOL-SLO."
keywords:
  - "business solution order"
  - "hợp đồng dịch vụ"
  - "crm"
  - "service contract"
  - "business solution order item"
  - "đơn hàng giải pháp kinh doanh"
  - "s4-sol-slo"
  - "transactional processing"
  - "interface view"
semantic_en: "This view exposes business solution order item service contract data, which is used to manage service contracts for business solution orders. It is typically used in the context of CRM-S4-SOL-SLO component."
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
# I_BSORDITMPRDCSSRSRVCCONTRTP

**Bsorditmprdcssrsrvccontrtp**

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
| `BusSolnOrdPrdcssrSrvcContr` | ✓ | |  |  |  |  |
| `BusSolnOrdPrdcssrSrvcContrItem` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

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

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Preceding Service Contract - TP'

define view entity I_BSOrdItmPrdcssrSrvcContrTP as projection on R_BSOrdItmPrdcssrSrvcContrTP  {

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key BusSolnOrdPrdcssrSrvcContr,
  key BusSolnOrdPrdcssrSrvcContrItem,
  
  // Associations
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP
  
}
```
