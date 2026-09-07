---
name: I_BSORDITMSUBSCRPNPARAMTP_2
description: "Bsorditmsubscrpnparamtp 2"
semantic_vi: "Chỉ ra các tham số đăng ký cho các mục đơn hàng giải pháp kinh doanh, được sử dụng trong xử lý giao dịch CRM."
keywords:
  - "crm"
  - "subscription"
  - "parameter"
  - "business solution order"
  - "transactional processing"
  - "đăng ký"
  - "tham số"
  - "đơn hàng giải pháp kinh doanh"
  - "xử lý giao dịch"
semantic_en: "Exposes subscription parameters for business solution order items, used in CRM transactional processing."
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
# I_BSORDITMSUBSCRPNPARAMTP_2

**Bsorditmsubscrpnparamtp 2**

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
| `SubscrpnBillgParamSqncNumber` | ✓ | |  |  |  |  |
| `SubscriptionParameter` |  | |  |  |  |  |
| `SubscrpnParameterIntegerValue` |  | |  |  |  |  |
| `_SubscriptionBillingItem` | | ✓ | | | | |
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

@EndUserText.label: 'Solution Order Item Subs Param - TP'
define view entity I_BSOrdItmSubscrpnParamTP_2 
  as projection on R_BSOrdItmSubscrpnParamTP_2
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key SubscrpnBillgParamSqncNumber,
  
      SubscriptionParameter,
      SubscrpnParameterIntegerValue,

      //Authorization
      _SubscriptionBillingItem,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
