---
name: I_BUSSOLNORDFUPSRVCCONTRTP
description: "Bussolnordfupsrvccontrtp"
semantic_vi: "View Bussolnordfupsrvccontrtp hiển thị dữ liệu hợp đồng dịch vụ cho các giải pháp kinh doanh, cung cấp liên kết giữa các giải pháp kinh doanh và hợp đồng dịch vụ. Nó được sử dụng trong thành phần CRM-S4-SOL-SLO cho xử lý giao dịch."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "business solution"
  - "giải pháp kinh doanh"
  - "crm"
  - "transactional processing"
  - "xử lý giao dịch"
  - "s4-sol-slo"
  - "lob:other"
semantic_en: "The Bussolnordfupsrvccontrtp view exposes service contract data for business solutions, providing a link between business solutions and service contracts. It is used in CRM-S4-SOL-SLO component for transactional processing."
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
# I_BUSSOLNORDFUPSRVCCONTRTP

**Bussolnordfupsrvccontrtp**

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
| `ServiceContract` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |

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

@EndUserText.label: 'Business Solution Order Follow up Service Contract - TP'

define view entity I_BusSolnOrdFUPSrvcContrTP
  as projection on R_BusSolnOrdFUPSrvcContrTP
{
  key BusinessSolutionOrder,
  key ServiceContract,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
