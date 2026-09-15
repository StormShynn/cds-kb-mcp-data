---
name: I_EVENTBASEDPROCESSINGKEY
description: "Eventbasedprocessingkey"
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
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDPROCESSINGKEY

**Eventbasedprocessingkey**

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
| `EventBasedProcessingKey` | ✓ | |  | `ebw_key` | `CHAR(6)` | Event-Based Processing Key |
| `EventBasedWIPCalculationMethod` |  | |  | `ebw_method` | `CHAR(1)` | Event-Based Posting: WIP Calculation Method |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EventBasedProcessingKeyText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEVTBSDPROCGKEY'
@Analytics.technicalName: 'IEVTBSDPROCGKEY'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true
//@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
//@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Event-Based Posting Processing Key'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'EventBasedProcessingKey'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
define view entity I_EventBasedProcessingKey
  as select from fcoc_ebw_method
  association [0..*] to I_EventBasedProcessingKeyText as _Text on $projection.EventBasedProcessingKey = _Text.EventBasedProcessingKey
{
      @ObjectModel.text.association: '_Text'
  key ebw_key    as EventBasedProcessingKey,
      ebw_method as EventBasedWIPCalculationMethod,

      _Text
}
```
