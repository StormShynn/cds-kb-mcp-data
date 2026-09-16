---
name: I_BUSSOLNORDFUPSRVCORDTP
description: "Bussolnordfupsrvcordtp"
semantic_vi: "Chứa dữ liệu về đơn hàng giải pháp kinh doanh và đơn hàng dịch vụ cho thành phần CRM-S4-SOL-SLO, được sử dụng trong xử lý giao dịch."
keywords:
  - "crm"
  - "service order"
  - "business solution order"
  - "transactional processing"
  - "crm-s4-sol-slo"
  - "interface-view"
  - "lob-other"
  - "solution order"
  - "dịch vụ"
  - "đơn hàng giải pháp kinh doanh"
semantic_en: "Exposes business solution order and service order data for CRM-S4-SOL-SLO component, used in transactional processing."
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
# I_BUSSOLNORDFUPSRVCORDTP

**Bussolnordfupsrvcordtp**

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
| `ServiceOrder` | ✓ | |  |  |  |  |
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

@EndUserText.label: 'Business Solution Order Follow up Service Order - TP'

define view entity I_BusSolnOrdFUPSrvcOrdTP
  as projection on R_BusSolnOrdFUPSrvcOrdTP
{
  key BusinessSolutionOrder,
  key ServiceOrder,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
