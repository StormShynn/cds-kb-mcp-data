---
name: I_BUSSOLNORDAPPOINTMENTTP
description: "Bussolnordappointmenttp"
semantic_vi: "View Bussolnordappointmenttp hiển thị dữ liệu hẹn lịch cho đơn hàng dịch vụ, có liên quan đến xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "service document"
  - "appointment"
  - "transactional processing"
  - "crm-s4-sol-slo"
  - "business solution order"
  - "service document appointment type"
  - "service document appointment start date time"
  - "service document appointment end date time"
semantic_en: "The Bussolnordappointmenttp view exposes service document appointment data, which is relevant for transactional processing in the CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDAPPOINTMENTTP

**Bussolnordappointmenttp**

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
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_SrvcDocAppointmentTypeText` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #L
   },
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@EndUserText.label: 'Business Solution Order Appointment - TP'
define view entity I_BusSolnOrdAppointmentTP 
as projection on R_BusSolnOrdAppointmentTP
{
  key BusinessSolutionOrder,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocAppointmentType' , element:'SrvcDocAppointmentType'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
  key SrvcDocAppointmentType, 
    SrvcDocApptStartDateTime,
    SrvcDocApptEndDateTime,
    

    _SrvcDocAppointmentTypeText,
    
    _BusinessSolutionOrderTP : redirected to parent I_BusinessSolutionOrderTP
}
```
