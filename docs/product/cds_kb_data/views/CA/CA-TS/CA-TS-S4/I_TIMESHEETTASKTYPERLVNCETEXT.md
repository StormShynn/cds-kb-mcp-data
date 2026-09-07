---
name: I_TIMESHEETTASKTYPERLVNCETEXT
description: "Timesheettasktyperlvncetext"
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
# I_TIMESHEETTASKTYPERLVNCETEXT

**Timesheettasktyperlvncetext**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TimeSheetTaskTypeRelevanceCode` | ✓ | |  | `cast(dd07t.domvalue_l as catsxt_tasktype_relevance)` | `CHAR(1)` | Task Type Relevance |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TimeSheetTaskTypeRelevanceText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_TimeSheetTaskTypeRelevance` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetTaskTypeRelevance` | `I_TimeSheetTaskTypeRelevance` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMSHTSKTYPRLVT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TimeSheetTaskTypeRelevanceCode'
@ObjectModel.usageType: {dataClass: #META, serviceQuality: #A, sizeCategory: #S}
@EndUserText.label: 'Task Type Relevance for Timesheet - Text'
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
                                     
define view I_TimeSheetTaskTypeRlvnceText
  as select from dd07t
  association [0..1] to I_TimeSheetTaskTypeRelevance as _TimeSheetTaskTypeRelevance on $projection.TimeSheetTaskTypeRelevanceCode = _TimeSheetTaskTypeRelevance.TimeSheetTaskTypeRelevanceCode
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                    as Language,

      @ObjectModel.foreignKey.association: '_TimeSheetTaskTypeRelevance'
  key cast(dd07t.domvalue_l as catsxt_tasktype_relevance) as TimeSheetTaskTypeRelevanceCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                    as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Semantics.text: true
      dd07t.ddtext                                        as TimeSheetTaskTypeRelevanceText,

      _TimeSheetTaskTypeRelevance,
      _Language
}
where
      dd07t.domname  = 'CATSXT_TASKTYPE_RELEVANCE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
