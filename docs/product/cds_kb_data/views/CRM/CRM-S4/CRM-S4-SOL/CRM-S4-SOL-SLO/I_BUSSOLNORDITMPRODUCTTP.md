---
name: I_BUSSOLNORDITMPRODUCTTP
description: "Bussolnorditmproducttp"
semantic_vi: "Chứa thông tin sản phẩm liên quan đến đơn hàng giải pháp kinh doanh trong CRM. Sử dụng để truy cập chi tiết sản phẩm cho đơn hàng giải pháp kinh doanh."
keywords:
  - "crm"
  - "business solution order"
  - "product information"
  - "sản phẩm"
  - "đơn hàng giải pháp kinh doanh"
  - "s4-sol-slo"
  - "service product list"
  - "lob other"
semantic_en: "Exposes product information related to business solution orders in CRM. Used to access product details for business solution orders."
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
  - product
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMPRODUCTTP

**Bussolnorditmproducttp**

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
| `ServiceProductListItem` | ✓ | |  |  |  |  |
| `SrvcProductListProduct` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:  #CHECK,
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

@EndUserText.label: 'Business Solution Order Item Product - TP'

define view entity I_BusSolnOrdItmProductTP
  as projection on R_BusSolnOrdItmProductTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key ServiceProductListItem,
      @ObjectModel.text.association:'_Text'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProductStdVH' , element:'Product'}, useAsTemplate: true  }]
      SrvcProductListProduct,

      // Associations
      _BusinessSolutionOrder     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP,
      _Text

}
```
