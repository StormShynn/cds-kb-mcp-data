---
name: I_SERVICEDOCUMENTTYPE
description: "Service DocumentUMENTTYPE"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTTYPE

**Service DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  | `process_type` | `CHAR(4)` | Business Transaction Type |
| `ServiceObjectType` |  | |  | `object_type` | `CHAR(10)` | Leading Business Transaction Category |
| `CustMgmtServiceTeamProfile` |  | |  | `service_team_profile` | `CHAR(12)` | Service Team Profile |
| `SrvcProcessStepOverviewProfile` |  | |  | `proc_stp_ovw_prfl` | `CHAR(8)` | Profile for Process Step Overview |
| `ServiceDocumentTemplateType` |  | |  | `template_type` | `CHAR(1)` | Service Transaction: Template Type |
| `SrvcDocTypeBlockingStatus` |  | |  | `process_blocked` | `CHAR(1)` | Active Indicator: Transaction |
| `StatusProfile` |  | |  | `user_stat_proc` | `CHAR(8)` | Status Profile |
| `SrvcRejectionReasonProfile` |  | |  | `rejprofile` | `CHAR(8)` | Rejection Profile Name |
| `SrvcMgmtPrtnDetnProcedure` |  | |  | `part_determ_proc` | `CHAR(8)` | ID of a Partner Determination Procedure |
| `_ServiceDocumentTypeText` | | ✓ | | | | |
| `_ServiceObjectTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentTypeText` | `I_ServiceDocumentTypeText` | [1..*] |
| `_ServiceObjectTypeText` | `I_BusinessObjTypeText` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCTYPE',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Service Transaction Type'
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable
@Metadata.allowExtensions:true
//! Code list for the Service Transaction Type
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentType'

define view I_ServiceDocumentType
  as select from crmc_proc_type
  association [1..*] to I_ServiceDocumentTypeText as _ServiceDocumentTypeText on $projection.ServiceDocumentType = _ServiceDocumentTypeText.ServiceDocumentType

  association [1..*] to I_BusinessObjTypeText     as _ServiceObjectTypeText   on $projection.ServiceObjectType = _ServiceObjectTypeText.BusinessObjectType
{


      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @ObjectModel.text.association: '_ServiceDocumentTypeText'
  key process_type         as ServiceDocumentType,
      @ObjectModel.text.association: '_ServiceObjectTypeText'
      object_type          as ServiceObjectType,
      service_team_profile as CustMgmtServiceTeamProfile,
      proc_stp_ovw_prfl    as SrvcProcessStepOverviewProfile,
      template_type        as ServiceDocumentTemplateType,
      process_blocked      as SrvcDocTypeBlockingStatus,
      user_stat_proc       as StatusProfile,
      rejprofile           as SrvcRejectionReasonProfile,
      part_determ_proc     as SrvcMgmtPrtnDetnProcedure,
      _ServiceDocumentTypeText,
      _ServiceObjectTypeText
}
```
