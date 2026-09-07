---
name: I_SYSTEMSTATUS
description: "Systemstatus"
app_component: CA-GTF-VDM
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
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_SYSTEMSTATUS

**Systemstatus**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
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
| `SystemStatus` | ✓ | |  | `istat` | `CHAR(5)` | System status |
| `StatusIsHidden` |  | |  | `nodis` | `CHAR(1)` | 'Do not display status' flag |
| `_SystemStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SystemStatusText` | `I_SystemStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'SystemStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ISYSSTATUS'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'System Status'
@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}
@VDM.viewType: #BASIC 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_SystemStatus as select from tj02 

association[0..*] to I_SystemStatusText as _SystemStatusText on $projection.SystemStatus = _SystemStatusText.SystemStatus
{ 
  @ObjectModel.text.association: '_SystemStatusText'
  key tj02.istat as SystemStatus,
  tj02.nodis as StatusIsHidden,
  
  _SystemStatusText 
}
```
