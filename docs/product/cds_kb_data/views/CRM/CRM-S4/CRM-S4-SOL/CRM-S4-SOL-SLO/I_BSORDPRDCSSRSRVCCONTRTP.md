---
name: I_BSORDPRDCSSRSRVCCONTRTP
description: "Bsordprdcssrsrvccontrtp"
semantic_vi: "Chứa dữ liệu hợp đồng dịch vụ sản phẩm cho giải pháp kinh doanh, được sử dụng để quản lý và theo dõi hợp đồng dịch vụ cho giải pháp kinh doanh."
keywords:
  - "business solution"
  - "order"
  - "product service contract"
  - "service contract"
  - "crm"
  - "s4hana"
  - "sap"
  - "solution"
  - "order management"
  - "hợp đồng dịch vụ"
  - "giải pháp kinh doanh"
  - "đơn hàng"
semantic_en: "Exposes business solution order product service contract data, used to manage and track service contracts for business solutions."
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
# I_BSORDPRDCSSRSRVCCONTRTP

**Bsordprdcssrsrvccontrtp**

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
| `BusSolnOrdPrdcssrSrvcContr` | ✓ | |  |  |  |  |
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

@EndUserText.label: 'Business Solution Order Preceding Service Contract - TP'
define view entity I_BSOrdPrdcssrSrvcContrTP
  as projection on R_BSOrdPrdcssrSrvcContrTP
{

  key BusinessSolutionOrder,
  key BusSolnOrdPrdcssrSrvcContr,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
