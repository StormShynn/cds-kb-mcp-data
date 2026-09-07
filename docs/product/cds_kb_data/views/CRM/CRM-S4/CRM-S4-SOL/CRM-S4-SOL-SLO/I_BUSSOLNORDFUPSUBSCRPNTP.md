---
name: I_BUSSOLNORDFUPSUBSCRPNTP
description: "Bussolnordfupsubscrpntp"
semantic_vi: "View Bussolnordfupsubscrpntp hiển thị dữ liệu đăng ký giải pháp kinh doanh, được sử dụng trong xử lý giao dịch cho thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "business solution order"
  - "subscription"
  - "transactional processing"
  - "crm-s4-sol-slo"
  - "bussolnordfupsubscrpntp"
  - "giải pháp kinh doanh"
  - "đăng ký"
  - "xử lý giao dịch"
semantic_en: "The Bussolnordfupsubscrpntp view exposes business solution order subscription data, used in transactional processing for CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDFUPSUBSCRPNTP

**Bussolnordfupsubscrpntp**

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
| `SubscrpnBillgSubscription` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
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

@EndUserText.label: 'Business Solution Order Follow up Subscription - TP'

define view entity I_BusSolnOrdFUPSubscrpnTP
  as projection on R_BusSolnOrdFUPSubscrpnTP
{
  key BusinessSolutionOrder,
  key SubscrpnBillgSubscription,

      @Semantics.uuid: true
      BusinessSolutionOrderUUID,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
