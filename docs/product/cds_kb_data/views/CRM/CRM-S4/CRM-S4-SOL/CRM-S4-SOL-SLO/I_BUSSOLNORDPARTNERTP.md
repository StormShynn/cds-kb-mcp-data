---
name: I_BUSSOLNORDPARTNERTP
description: "Bussolnordpartnertp"
semantic_vi: "Chứa thông tin đối tác kinh doanh cho một đơn hàng giải pháp kinh doanh cụ thể trong CRM, được sử dụng để quản lý mối quan hệ đối tác."
keywords:
  - "crm"
  - "business partner"
  - "business solution order"
  - "partner relationship"
  - "đối tác kinh doanh"
  - "đơn hàng giải pháp kinh doanh"
  - "quản lý mối quan hệ đối tác"
  - "sap crm"
semantic_en: "Exposes business partner information for a specific business solution order in CRM, used to manage partner relationships."
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
# I_BUSSOLNORDPARTNERTP

**Bussolnordpartnertp**

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
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartFunctionCategory` |  | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_BusSolnOrdPartnerAddressTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_SrvcMgmtPartnerFunctionText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Partner - TP'

define view entity I_BusSolnOrdPartnerTP
  as projection on R_BusSolnOrdPartnerTP
{

  key BusinessSolutionOrder,
      @ObjectModel.text.association: '_SrvcMgmtPartnerFunctionText'
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,

      CustMgmtPartFunctionCategory,
      CustMgmtPartnerIsMainPartner,

      // associations
      _BusSolnOrdPartnerAddressTP : redirected to composition child I_BusSolnOrdPartnerAddressTP,
      _BusinessSolutionOrderTP    : redirected to parent I_BusinessSolutionOrderTP,
      _BusinessPartner,
      _PartnerFunction,
      _SrvcMgmtPartnerFunctionText
}
```
