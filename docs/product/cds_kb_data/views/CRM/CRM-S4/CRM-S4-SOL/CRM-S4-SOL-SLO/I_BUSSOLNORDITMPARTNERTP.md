---
name: I_BUSSOLNORDITMPARTNERTP
description: "Bussolnorditmpartnertp"
semantic_vi: "Chỉ ra các mục đơn hàng giải pháp kinh doanh và các đối tác liên quan cho mục đích tạm thời trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "business solution order"
  - "partner"
  - "temporary use"
  - "crm-s4-sol-slo"
  - "business partner"
  - "partner function"
  - "business solution order item"
semantic_en: "Exposes business solution order items and their associated partners for temporary use in CRM-S4-SOL-SLO component."
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
  - partner
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMPARTNERTP

**Bussolnorditmpartnertp**

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
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartFunctionCategory` |  | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_BusSolnOrdItmPartnerAddrTP` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_CustMgmtPartnerFuncText` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_PartnerFunctionText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
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

@EndUserText.label: 'Business Solution Order Item Partner - TP'

define view entity I_BusSolnOrdItmPartnerTP
  as projection on R_BusSolnOrdItmPartnerTP
{
  key  BusinessSolutionOrder,
  key  BusinessSolutionOrderItem,

       @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_SrvcMgmtPartnerFunction',
          element:'CustMgmtPartnerFunction'
          }, useAsTemplate: true
       }]
       @ObjectModel.text.association:'_PartnerFunctionText'
  key  CustMgmtPartnerFunction,

       @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_BusinessPartnerVH',
          element:'BusinessPartner'
          }, useAsTemplate: true
       }]
  key  CustMgmtBusinessPartner,

       CustMgmtPartFunctionCategory,
       CustMgmtPartnerIsMainPartner,

       // associations
       _BusSolnOrdItmPartnerAddrTP  : redirected to composition child I_BusSolnOrdItmPartnerAddrTP,
       _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
       _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
       _CustMgmtPartnerFuncText,
       _BusinessPartner,
       _PartnerFunctionText
}
```
