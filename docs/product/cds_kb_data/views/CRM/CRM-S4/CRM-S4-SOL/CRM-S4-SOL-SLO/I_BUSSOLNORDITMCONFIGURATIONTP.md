---
name: I_BUSSOLNORDITMCONFIGURATIONTP
description: "Bussolnorditmconfigurationtp"
semantic_vi: "View này hiển thị dữ liệu cấu hình đơn hàng giải pháp kinh doanh cho các mặt hàng Bussolnord, được sử dụng trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "bussolnord"
  - "crm-s4-sol-slo"
  - "variant configuration"
  - "cấu hình biến thể"
  - "business object key"
  - "chiave đối tượng kinh doanh"
semantic_en: "This view exposes business solution order item configuration data for Bussolnord items, used in CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDITMCONFIGURATIONTP

**Bussolnorditmconfigurationtp**

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
| `VarConfignInstceBusObjectKey` | ✓ | |  |  |  |  |
| `VarConfignInstceBusObjectType` | ✓ | |  |  |  |  |
| `VariantConfigurationInstance` | ✓ | |  |  |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `CharcValue` | ✓ | |  |  |  |  |
| `CharcFromNumericValue` | ✓ | |  |  |  |  |
| `CharcToNumericValue` | ✓ | |  |  |  |  |
| `CharcReferenceTable` |  | |  |  |  |  |
| `CharcReferenceTableField` |  | |  |  |  |  |
| `Characteristic` |  | |  |  |  |  |
| `VariantConfigurationDate` |  | |  |  |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #MANDATORY,
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

@EndUserText.label: 'Solution Order Item Configuration - TP'

define view entity I_BusSolnOrdItmConfigurationTP
  as projection on R_BusSolnOrdItmConfigurationTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key VarConfignInstceBusObjectKey,
  key VarConfignInstceBusObjectType,
  key VariantConfigurationInstance,
  key CharcInternalID,
  key CharcValue,
  key CharcFromNumericValue,
  key CharcToNumericValue,

      CharcReferenceTable,
      CharcReferenceTableField,
      Characteristic,
      VariantConfigurationDate,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
