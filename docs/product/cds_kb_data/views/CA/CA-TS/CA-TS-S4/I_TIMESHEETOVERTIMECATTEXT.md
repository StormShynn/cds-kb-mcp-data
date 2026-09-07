---
name: I_TIMESHEETOVERTIMECATTEXT
description: "Timesheetovertimecattext"
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
# I_TIMESHEETOVERTIMECATTEXT

**Timesheetovertimecattext**

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
| `TimeSheetOvertimeCategory` | ✓ | |  | `overtimecat` | `CHAR(4)` | Overtime Category |
| `TimeSheetOvertimeCategoryText` |  | |  | `text` | `CHAR(50)` | Overtime Category Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSOVTMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #S, dataClass: #CUSTOMIZING }
@ObjectModel.representativeKey: 'TimeSheetOvertimeCategory'
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Overtime Category for Timesheet - Text'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
define view I_TimeSheetOvertimeCatText
  as select from tcats_ssc_ovtmt
{
      //tcats_ssc_ovtmt
      @Semantics.language: true
  key langu       as Language,
      @ObjectModel.text.element:  [ 'TimeSheetOvertimeCategoryText' ]
  key overtimecat as TimeSheetOvertimeCategory,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Semantics.text: true
      text        as TimeSheetOvertimeCategoryText
}
```
