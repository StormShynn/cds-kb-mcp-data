---
name: I_BUSSOLNORDITMDURATIONTP
description: "Bussolnorditmdurationtp"
semantic_vi: "Phân tích dữ liệu thời gian của tài liệu dịch vụ cho các giải pháp kinh doanh, được sử dụng trong xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "service document"
  - "business solution"
  - "transactional processing"
  - "duration data"
  - "crm-s4-sol-slo"
  - "dữ liệu thời gian"
  - "tài liệu dịch vụ"
  - "giải pháp kinh doanh"
semantic_en: "Exposes service document duration data for business solutions, used in transactional processing within CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDITMDURATIONTP

**Bussolnorditmdurationtp**

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
| `SrvcDocDurationType` | ✓ | |  |  |  |  |
| `SrvcDocDurationValue` |  | |  |  |  |  |
| `SrvcDocDurationUnit` |  | |  |  |  |  |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_DurationText` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Business Solution Order Item Duration - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdItmDurationTP
as projection on R_BusSolnOrdItmDurationTP 
{
    key BusinessSolutionOrder,
    key BusinessSolutionOrderItem,
    @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocDurationType' , element:'SrvcDocDurationType'}, useAsTemplate: true  }]
    @ObjectModel.text.association:'_DurationText'
    key SrvcDocDurationType,
    SrvcDocDurationValue,
    @ObjectModel.text.association: '_UnitOfMeasureText'
    SrvcDocDurationUnit,
    /* Associations */
    _UnitOfMeasureText,
    _DurationText,
    _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
    _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP
  
}
```
