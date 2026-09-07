---
name: I_BUSSOLNORDITMREFOBJECTTP
description: "Bussolnorditmrefobjecttp"
semantic_vi: "Chứa dữ liệu đối tượng tham chiếu dịch vụ cho đơn hàng giải pháp kinh doanh, được sử dụng để quản lý đối tượng tham chiếu dịch vụ trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "service reference"
  - "business solution order"
  - "crm-s4-sol-slo"
  - "đối tượng tham chiếu dịch vụ"
  - "đơn hàng giải pháp kinh doanh"
  - "thành phần crm-s4-sol-slo"
  - "sản phẩm dịch vụ"
  - "dịch vụ"
  - "giải pháp kinh doanh"
semantic_en: "Exposes service reference object data for business solution orders, used to manage service references in CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDITMREFOBJECTTP

**Bussolnorditmrefobjecttp**

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
| `ServiceRefObjectSequenceNumber` | ✓ | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `ServiceReferenceEquipment` |  | |  |  |  |  |
| `ServiceRefFunctionalLocation` |  | |  |  |  |  |
| `ServiceReferenceProduct` |  | |  |  |  |  |
| `SrvcRefObjIsMainObject` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |

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

@EndUserText.label: 'Business Solution Order Item Reference Object - TP'

define view entity I_BusSolnOrdItmRefObjectTP
  as projection on R_BusSolnOrdItmRefObjectTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key ServiceRefObjectSequenceNumber,

      SerialNumber,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_EquipmentStdVH' , element:'Equipment'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_EquipmentText'
      ServiceReferenceEquipment,
//      @Consumption.valueHelpDefinition: [
//         { entity:  { name:    'I_FunctionalLocation',
//                      element: 'FunctionalLocation' }, useAsTemplate: true
//         }]
      @ObjectModel.text.association: '_FunctionalLocationText'
      ServiceRefFunctionalLocation,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProductStdVH' , element:'Product'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ProductText'
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,

      // Associations
      _BusinessSolutionOrder     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP,
      _EquipmentText,
      _FunctionalLocationText,
      _ProductText
}
```
