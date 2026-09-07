---
name: I_TIMESHEETRECORDLONGTEXT
description: "Timesheetrecordlongtext"
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
# I_TIMESHEETRECORDLONGTEXT

**Timesheetrecordlongtext**

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
| `TimeSheetRecord` | ✓ | |  | `counter` | `CHAR(12)` | Counter for Records in Time Recording |
| `Language` | ✓ | | `_TextObjectPlainLongText` | `Language` | `LANG(1)` | Language Key |
| `PlainLongText` |  | | `_TextObjectPlainLongText` | `PlainLongText` |  |  |
| `_TextObjectPlainLongText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectPlainLongText` | `I_TextObjectPlainLongText` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTLONGTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_TextObjectPlainLongText']
@EndUserText.label: 'Note of a Timesheet Record - Text'
@ObjectModel.usageType.serviceQuality : #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey: 'TimeSheetRecord'
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_TimeSheetRecordLongText
  as select from catsdb
  association [0..*] to I_TextObjectPlainLongText as _TextObjectPlainLongText on  _TextObjectPlainLongText.TextObjectCategory = 'CATS'
                                                                              and _TextObjectPlainLongText.TextObjectType     = 'CATS'
                                                                              and _TextObjectPlainLongText.TextObjectKey      = $projection.TimeSheetRecord
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language 
{
  key catsdb.counter                         as TimeSheetRecord,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _TextObjectPlainLongText.Language      as Language,
      @Semantics.text: true
      _TextObjectPlainLongText.PlainLongText as PlainLongText,
      _TextObjectPlainLongText,
      _Language
}
```
