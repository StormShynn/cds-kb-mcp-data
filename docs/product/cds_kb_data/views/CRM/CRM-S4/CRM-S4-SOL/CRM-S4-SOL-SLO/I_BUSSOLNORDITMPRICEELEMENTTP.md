---
name: I_BUSSOLNORDITMPRICEELEMENTTP
description: "Bussolnorditmpriceelementtp"
semantic_vi: "View Bussolnorditmpriceelementtp CDS hiển thị các yếu tố giá cho đơn hàng giải pháp kinh doanh trong CRM, được sử dụng cho xử lý giao dịch."
keywords:
  - "crm"
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "giá"
  - "xử lý giao dịch"
  - "transactional processing"
  - "pricing procedure"
  - "thủ tục giá"
  - "condition type"
  - "loại điều kiện"
semantic_en: "The Bussolnorditmpriceelementtp CDS view exposes pricing elements for business solution orders in CRM, used for transactional processing."
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
# I_BUSSOLNORDITMPRICEELEMENTTP

**Bussolnorditmpriceelementtp**

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
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |

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

@EndUserText.label: 'Business Solution Order Item Price Element - TP'

define view entity I_BusSolnOrdItmPriceElementTP 

as projection on R_BusSolnOrdItmPriceElementTP {
  
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
  ConditionType,
  ConditionRateValue,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  
  ConditionQuantity,
  
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
 // @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
 @ObjectModel.text.association: '_UnitOfMeasureText'
  ConditionQuantityUnit,
 // ConditionAmount,
 @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
 @ObjectModel.text.association: '_CurrencyText'
  ConditionCurrency,
  PricingDocument,
  
  /* Associations */
  _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP,
  _BusinessSolutionOrder : redirected to I_BusinessSolutionOrderTP,
  _UnitOfMeasureText,
  _CurrencyText  
  
}
```
