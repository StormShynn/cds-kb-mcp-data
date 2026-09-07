---
name: I_BUSSOLNORDITEMRELATIONSHIPTP
description: "Bussolnorditemrelationshiptp"
semantic_vi: "Chứa thông tin mối quan hệ giữa các vật tư dịch vụ trong một đơn hàng giải pháp kinh doanh, được sử dụng cho xử lý giao dịch và quản lý vật tư tại cấp chi tiết."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "service item"
  - "vật tư dịch vụ"
  - "transactional processing"
  - "xử lý giao dịch"
  - "item-level management"
  - "quản lý vật tư tại cấp chi tiết"
  - "crm"
  - "s4-sol-slo"
semantic_en: "Exposes relationships between service items in a business solution order, used for transactional processing and item-level management."
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
  - item-level
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITEMRELATIONSHIPTP

**Bussolnorditemrelationshiptp**

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
| `SrvcItemRelshpFromItemNumber` | ✓ | |  |  |  |  |
| `SrvcItemRelshpType` | ✓ | |  |  |  |  |
| `SrvcItemRelshpToItemNumber` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_ItemRelationshipTypeText` | | ✓ | | | | |

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

@EndUserText.label: 'Business Solution Order Item Relationships  - TP'

define view entity I_BusSolnOrdItemRelationshipTP
  as projection on R_BusSolnOrdItemRelationshipTP
{
  key BusinessSolutionOrder,
  key SrvcItemRelshpFromItemNumber,
  
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcItemRelationshipType' , element:'SrvcItemRelshpType'}, useAsTemplate: true  }]
      @ObjectModel.sapObjectNodeTypeReference: 'SrvcItemRelationshipType'
      @ObjectModel.text.association: '_ItemRelationshipTypeText'
  key SrvcItemRelshpType,
  key SrvcItemRelshpToItemNumber,


      // Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP,
      _ItemRelationshipTypeText
}
```
