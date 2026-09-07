---
name: I_TIMESHEETTASKTYPE
description: "Timesheettasktype"
app_component: CA-TS-S4
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
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETTASKTYPE

**Timesheettasktype**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
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
| `TimeSheetTaskType` | ✓ | |  | `tasktype` | `CHAR(4)` | Task Type |
| `TimeSheetTaskTypeRelevanceCode` |  | |  | `tasktype_relevance` | `CHAR(1)` | Task Type Relevance |
| `_TimeSheetTaskTypeText` | | ✓ | | | | |
| `_TimeSheetTaskTypeRelevance` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetTaskTypeText` | `I_TimeSheetTaskTypeText` | [0..*] |
| `_TimeSheetTaskTypeRelevance` | `I_TimeSheetTaskTypeRelevance` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ITIMSHTTASKTYP', compiler.compareFilter: true, preserveKey: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Task Type for Timesheet'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #S, dataClass: #CUSTOMIZING }
@ObjectModel: { representativeKey: 'TimeSheetTaskType', semanticKey: 'TimeSheetTaskType' }
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]

define view I_TimeSheetTaskType
  as select from tcatx_tasktypes
  association [0..*] to I_TimeSheetTaskTypeText      as _TimeSheetTaskTypeText      on $projection.TimeSheetTaskType = _TimeSheetTaskTypeText.TimeSheetTaskType
  association [0..1] to I_TimeSheetTaskTypeRelevance as _TimeSheetTaskTypeRelevance on $projection.TimeSheetTaskTypeRelevanceCode = _TimeSheetTaskTypeRelevance.TimeSheetTaskTypeRelevanceCode
{
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @ObjectModel.text.association: '_TimeSheetTaskTypeText'
  key tasktype           as TimeSheetTaskType,
  
      @ObjectModel.foreignKey.association: '_TimeSheetTaskTypeRelevance'
      tasktype_relevance as TimeSheetTaskTypeRelevanceCode,
      
      _TimeSheetTaskTypeText,
      _TimeSheetTaskTypeRelevance
}
where
  datab = '00010101'
```
