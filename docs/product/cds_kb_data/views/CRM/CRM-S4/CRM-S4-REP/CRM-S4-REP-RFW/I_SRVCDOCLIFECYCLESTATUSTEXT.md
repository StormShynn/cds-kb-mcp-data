---
name: I_SRVCDOCLIFECYCLESTATUSTEXT
description: "Srvcdoclifecyclestatustext"
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
  - text-view
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCLIFECYCLESTATUSTEXT

**Srvcdoclifecyclestatustext**

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
| `ServiceDocumentStatus` | ✓ | |  | `cast(CustMgmtLifecycleUserStatus as crms4_stat_lifecycle preserving type )` | `CHAR(4)` | Life Cycle Status |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key of Description |
| `ServiceDocumentStatusName` |  | |  | `cast(CustMgmtLifecycleUserStsName as crms4_stat_lifecycle_desc )` | `CHAR(60)` | Lifecycle Status Description |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentStatus` | `I_SrvcDocLifecycleStatus` | [1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Transaction Life Cycle Status - Txt'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVDOCLFCSTTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocumentStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #M
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, 
                            #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/

define view I_SrvcDocLifecycleStatusText
  as select from I_CustMgmtLifecycleUserStsText

  association [1] to I_SrvcDocLifecycleStatus as _ServiceDocumentStatus on $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus

{
      @ObjectModel.foreignKey.association: '_ServiceDocumentStatus'
  key cast(CustMgmtLifecycleUserStatus as crms4_stat_lifecycle preserving type ) as ServiceDocumentStatus,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      cast(CustMgmtLifecycleUserStsName as crms4_stat_lifecycle_desc )           as ServiceDocumentStatusName,

      _Language,
      _ServiceDocumentStatus
}

union select from I_SrvcLifeCycleSystemStatusT

association [1] to I_SrvcDocLifecycleStatus as _ServiceDocumentStatus on $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus

{
       $session.client                                                          as mandt,
       @ObjectModel.foreignKey.association: '_ServiceDocumentStatus'
  key  cast(SrvcLifeCycleSystemStatus as crms4_stat_lifecycle preserving type ) as ServiceDocumentStatus,
       @Semantics.language:true
       @ObjectModel.foreignKey.association: '_Language'
  key  Language,
       @Semantics.text: true
       cast (SrvcLifeCycleSystemStatusName as crms4_stat_lifecycle_desc )       as ServiceDocumentStatusName,

       _Language,
       _ServiceDocumentStatus
}
```
