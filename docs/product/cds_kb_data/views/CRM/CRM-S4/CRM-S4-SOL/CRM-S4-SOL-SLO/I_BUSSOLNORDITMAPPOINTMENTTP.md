---
name: I_BUSSOLNORDITMAPPOINTMENTTP
description: "Bussolnorditmappointmenttp"
semantic_vi: "View này hiển thị dữ liệu hẹn lịch dịch vụ cho giải pháp kinh doanh, bao gồm thông tin đơn hàng và mục hàng, loại hẹn lịch và ngày giờ bắt đầu và kết thúc. Nó được sử dụng trong xử lý giao dịch cho thành phần CRM-S4-SOL-SLO."
keywords:
  - "service appointment"
  - "hẹn lịch dịch vụ"
  - "business solution"
  - "giải pháp kinh doanh"
  - "transactional processing"
  - "xử lý giao dịch"
  - "crm"
  - "crm-s4-sol-slo"
  - "s4hana"
  - "sap"
semantic_en: "This view exposes service appointment data for business solutions, including order and item information, appointment types, and start and end dates. It is used in transactional processing for CRM-S4-SOL-SLO component."
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
# I_BUSSOLNORDITMAPPOINTMENTTP

**Bussolnorditmappointmenttp**

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
| `SrvcDocAppointmentType` | ✓ | |  |  |  |  |
| `SrvcDocApptStartDateTime` |  | |  |  |  |  |
| `SrvcDocApptEndDateTime` |  | |  |  |  |  |
| `_SrvcDocAppointmentTypeText` | | ✓ | | | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | | | |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Business Solution Order Item Appointment - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//  representativeKey: 'BusinessSolutionOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BusSolnOrdItmAppointmentTP 
as projection on R_BusSolnOrdItmAppointmentTP
{
 key BusinessSolutionOrder,
 key BusinessSolutionOrderItem,
 @ObjectModel.text.association: '_SrvcDocAppointmentTypeText'
 @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocAppointmentType' , element:'SrvcDocAppointmentType'}, useAsTemplate: true  }]
 key SrvcDocAppointmentType,
 SrvcDocApptStartDateTime,
 SrvcDocApptEndDateTime,
 /* Associations */
 _SrvcDocAppointmentTypeText,
 _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
 _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP
 
}
```
