---
name: I_BUSSOLNORDFUPENTPROJECTTP
description: "Bussolnordfupentprojecttp"
semantic_vi: "Chứa dữ liệu dự án giải pháp kinh doanh, hữu ích cho quản lý dự án CRM và xử lý giao dịch."
keywords:
  - "crm"
  - "project"
  - "business solution order"
  - "dự án giải pháp kinh doanh"
  - "transactional processing"
  - "xử lý giao dịch"
  - "sap crm"
  - "dự án"
  - "project management"
semantic_en: "Exposes business solution order project data, useful for CRM-related project management and transactional processing."
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
  - project
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:Project
---
# I_BUSSOLNORDFUPENTPROJECTTP

**Bussolnordfupentprojecttp**

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
| `Project` | ✓ | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #CHECK,
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
@EndUserText.label: 'Business Solution Order Follow up Enterprise Project - TP'

define view entity I_BusSolnOrdFUPEntProjectTP
  as projection on R_BusSolnOrdFUPEntProjectTP
{
      //      @Semantics.uuid: true
      //  key ServiceDocumentRelationUUID,
      //  key ServiceDocRltnSequenceNumber,
      //      @Semantics.uuid: true
      //      BusinessSolutionOrderUUID,
  key BusinessSolutionOrder,
      //      @Semantics.uuid: true
      //      ProjectUUID,
  key Project,

      // Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
