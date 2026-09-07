---
name: I_TIMESHEETOVERTIMECAT
description: "Timesheetovertimecat"
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
# I_TIMESHEETOVERTIMECAT

**Timesheetovertimecat**

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
| `TimeSheetOvertimeCategory` | ✓ | |  | `overtimecat` | `CHAR(4)` | Overtime Category |
| `_TimeSheetOvertimeCatText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetOvertimeCatText` | `I_TimeSheetOvertimeCatText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSOVTM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.usageType: { serviceQuality : #A, sizeCategory : #S, dataClass: #CUSTOMIZING }
@ObjectModel.representativeKey: 'TimeSheetOvertimeCategory'
@ObjectModel.semanticKey: 'TimeSheetOvertimeCategory'
@Search.searchable: true
@EndUserText.label: 'Overtime Category for Timesheet'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
define view I_TimeSheetOvertimeCat as select from tcats_ssc_ovtm as ovtmcat
association [0..*] to I_TimeSheetOvertimeCatText as _TimeSheetOvertimeCatText on  $projection.TimeSheetOvertimeCategory    = _TimeSheetOvertimeCatText.TimeSheetOvertimeCategory
 {
    //tcats_ssc_ovtm 
    @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
    @ObjectModel.text.association: '_TimeSheetOvertimeCatText'
    key ovtmcat.overtimecat as TimeSheetOvertimeCategory,
    
    _TimeSheetOvertimeCatText
}
```
