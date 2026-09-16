---
name: I_BSORDITMSUBSCRPNPRICEAGRMTTP
description: "Bsorditmsubscrpnpriceagrmttp"
semantic_vi: "View I_BSORDITMSUBSCRPNPRICEAGRMTTP hiển thị dữ liệu thỏa thuận giá thuê bao cho đơn hàng giải pháp kinh doanh, cho phép bạn truy xuất và xử lý thông tin giá thuê bao."
keywords:
  - "subscription pricing"
  - "thỏa thuận giá thuê bao"
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "crm"
  - "s4hana"
  - "sap"
  - "pricing agreement"
  - "đơn giá thuê bao"
semantic_en: "The I_BSORDITMSUBSCRPNPRICEAGRMTTP view exposes subscription pricing agreement data for business solution orders, allowing you to retrieve and process subscription pricing information."
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
# I_BSORDITMSUBSCRPNPRICEAGRMTTP

**Bsorditmsubscrpnpriceagrmttp**

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
| `SubscriptionRateElement` | ✓ | |  |  |  |  |
| `SubscriptionRateSubElement` | ✓ | |  |  |  |  |
| `SubscrpnBillgPrcElmntSpec` | ✓ | |  |  |  |  |
| `SubscrpnBillgPricingField` | ✓ | |  |  |  |  |
| `SubscrpnBillgPrcAgreementLine` | ✓ | |  |  |  |  |
| `SubscrpnBillgPricingScaleType` |  | |  |  |  |  |
| `SubscrpnBillgCndnCalcType` |  | |  |  |  |  |
| `ConditionScaleAmount` |  | |  |  |  |  |
| `ConditionScaleQuantity` |  | |  |  |  |  |
| `ConditionScaleQuantityUnit` |  | |  |  |  |  |
| `ConditionScaleAmountCurrency` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `SbscrBilgCndnScaleLineIsUnlmtd` |  | |  |  |  |  |
| `_SubscriptionBillingItem` | | ✓ | | | | |
| `_SubscrpnBillgCndnCalcTypeTxt` | | ✓ | | | | |
| `_SubscrpnBillgPrcgScTypeText` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
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

@EndUserText.label: 'Soln Ord Item Subscrpn Price Agrmnt - TP'

define view entity I_BSOrdItmSubscrpnPriceAgrmtTP 
    as projection on R_BSOrdItmSubscrpnPriceAgrmtTP {
    
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key SubscriptionRateElement, 
  key SubscriptionRateSubElement, 
  key SubscrpnBillgPrcElmntSpec, 
  key SubscrpnBillgPricingField,  
  key SubscrpnBillgPrcAgreementLine,
  
  @ObjectModel.text.association: '_SubscrpnBillgPrcgScTypeText'
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SubscrpnBillgPrcgScaleType' , element:'SubscrpnBillgPricingScaleType'}, useAsTemplate: true  }]
      SubscrpnBillgPricingScaleType,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SubscrpnBillgCndnCalcType' , element:'SubscrpnBillgCndnCalcType'}, useAsTemplate: true  }]
  @ObjectModel.text.association:'_SubscrpnBillgCndnCalcTypeTxt'
      SubscrpnBillgCndnCalcType,     
     
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'     
      ConditionScaleAmount,    
      
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity, 
      
      ConditionScaleQuantityUnit,      
       
      ConditionScaleAmountCurrency,
      
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency' 
      ConditionRateValue,
      
      ConditionCurrency, 
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
     
      ConditionQuantityUnit,
      ConditionRateRatio,
      @Semantics.booleanIndicator: true
      SbscrBilgCndnScaleLineIsUnlmtd,    
      _SubscriptionBillingItem,
      _SubscrpnBillgCndnCalcTypeTxt,
      _SubscrpnBillgPrcgScTypeText,
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP    
  
}
```
