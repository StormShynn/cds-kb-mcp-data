---
name: I_TIMESHEETTASKTYPETEXT
description: "Timesheettasktypetext"
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
  - text-view
  - text
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETTASKTYPETEXT

**Timesheettasktypetext**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TimeSheetTaskType` | ✓ | |  | `tasktype` | `CHAR(4)` | Task Type |
| `TimeSheetTaskTypeText` |  | |  | `text` | `CHAR(25)` | Description |
| `_TimeSheetTaskType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetTaskType` | `I_TimeSheetTaskType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMSHTTSKTYP'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
//@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 2 }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Task Type for Timesheet - Text'
@ObjectModel.representativeKey: 'TimeSheetTaskType'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]

define view I_TimeSheetTaskTypeText
  as select from tcatx_tasktypest
  association [1..1] to I_TimeSheetTaskType as _TimeSheetTaskType on $projection.TimeSheetTaskType = _TimeSheetTaskType.TimeSheetTaskType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu    as Language,
  
      @ObjectModel.text.element:  [ 'TimeSheetTaskTypeText' ]
      @ObjectModel.foreignKey.association: '_TimeSheetTaskType'
  key tasktype as TimeSheetTaskType,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Semantics.text: true
      text     as TimeSheetTaskTypeText,

      _TimeSheetTaskType,
      _Language
}
```
