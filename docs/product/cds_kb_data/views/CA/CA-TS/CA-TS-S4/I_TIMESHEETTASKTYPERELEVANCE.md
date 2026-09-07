---
name: I_TIMESHEETTASKTYPERELEVANCE
description: "Timesheettasktyperelevance"
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
# I_TIMESHEETTASKTYPERELEVANCE

**Timesheettasktyperelevance**

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
| `TimeSheetTaskTypeRelevanceCode` | ✓ | |  | `cast(dd07l.domvalue_l as catsxt_tasktype_relevance)` | `CHAR(1)` | Task Type Relevance |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TimeSheetTaskTypeRlvnceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMSHTASKTYPRLV'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'TimeSheetTaskTypeRelevanceCode'
@ObjectModel.usageType: {dataClass: #META, serviceQuality: #A, sizeCategory: #S}
@EndUserText.label: 'Task Type Relevance for Timesheet'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.sapObjectNodeType.name :'TimeSheetTaskTypeRelevanceCode'                                     
define view I_TimeSheetTaskTypeRelevance
  as select from dd07l
  association [0..*] to I_TimeSheetTaskTypeRlvnceText as _Text on $projection.TimeSheetTaskTypeRelevanceCode = _Text.TimeSheetTaskTypeRelevanceCode
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as catsxt_tasktype_relevance) as TimeSheetTaskTypeRelevanceCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                    as DomainValue,
      
      _Text
}
where
      dd07l.domname  = 'CATSXT_TASKTYPE_RELEVANCE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
