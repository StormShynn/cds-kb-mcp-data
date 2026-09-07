---
name: I_BSORDITMRATEELEMENTTP
description: "Bsorditmrateelementtp"
semantic_vi: "Chứa dữ liệu về yếu tố giá cả đăng ký cho một mục đơn hàng giải pháp kinh doanh, bao gồm cả các mức giá, số tiền và thuế."
keywords:
  - "subscription rate element"
  - "business solution order item"
  - "crm-s4-sol-slo"
  - "transactional processing"
  - "đơn hàng giải pháp kinh doanh"
  - "yếu tố giá cả đăng ký"
  - "số tiền"
  - "thuế"
semantic_en: "Exposes subscription rate element data for a business solution order item, including rates, amounts, and taxes. Used in CRM-S4-SOL-SLO component for transactional processing."
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
# I_BSORDITMRATEELEMENTTP

**Bsorditmrateelementtp**

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
| `SubscriptionRateElementNumber` | ✓ | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `SubscriptionRateElement` |  | |  |  |  |  |
| `SubscriptionRateElementType` |  | |  |  |  |  |
| `SubscrpnRateElementNetAmount` |  | |  |  |  |  |
| `SubscrpnRateElementGrossAmount` |  | |  |  |  |  |
| `SubscrpnRateElementTaxAmount` |  | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_SubscriptionBilling` | | ✓ | | | | |
| `_SubscriptionBillingItem` | | ✓ | | | | |
| `_SubscrpnRateElementTypeText` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

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

@EndUserText.label: 'Business Solution Order Item Rate Element - TP'

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BSOrdItmRateElementTP
  as projection on R_BSOrdItmRateElementTP
{
      @ObjectModel.foreignKey.association: '_SubscriptionBilling'
  key BusinessSolutionOrder,
      @ObjectModel.foreignKey.association: '_SubscriptionBillingItem'
  key BusinessSolutionOrderItem,
  key SubscriptionRateElementNumber,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      Currency,

      SubscriptionRateElement,
      @ObjectModel.text.association: '_SubscrpnRateElementTypeText'
      @ObjectModel.sapObjectNodeTypeReference: 'SrvcSubscrpnRateElmntType'
      SubscriptionRateElementType,
      //SubscrpnRateElementTypeText,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementNetAmount,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementGrossAmount,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementTaxAmount,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
      _SubscriptionBilling,
      _SubscriptionBillingItem,
      _SubscrpnRateElementTypeText,
      _TransactionCurrency
}
```
