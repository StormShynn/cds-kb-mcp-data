---
name: I_EVENTBASEDPROCESSINGKEYSTDVH
description: "Eventbasedprocessingkeystdvh"
app_component: CO-PC-OBJ-ORD-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDPROCESSINGKEYSTDVH

**Eventbasedprocessingkeystdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
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
| `EventBasedProcessingKey` | ✓ | |  |  | `CHAR(6)` | Event-Based Processing Key |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEVTBSDPROCGKVH'
@Analytics.technicalName: 'IEVTBSDPROCGKVH'
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
//@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'EventBasedProcessingKey'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Event-Based Posting Processing Key'
define view entity I_EventBasedProcessingKeyStdVH as select from I_EventBasedProcessingKey
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key EventBasedProcessingKey,
      
      _Text
}
```
