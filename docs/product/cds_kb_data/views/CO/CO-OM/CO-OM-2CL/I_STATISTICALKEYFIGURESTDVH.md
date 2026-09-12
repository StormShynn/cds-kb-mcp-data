---
name: I_STATISTICALKEYFIGURESTDVH
description: "Statisticalkeyfigurestdvh"
app_component: CO-OM-2CL
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
  - CO-OM
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_STATISTICALKEYFIGURESTDVH

**Statisticalkeyfigurestdvh**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `StatisticalKeyFigure` | ✓ | |  |  | `CHAR(6)` | Statistical Key Figure |
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `StstcKeyFigCategory` |  | |  | `cast(StstcKeyFigCategory as fis_ui_grtyp preserving type)` | `CHAR(1)` | Statistical Key Figure Category |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFISKF__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'StatisticalKeyFigure'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@EndUserText.label: 'Statistical Key Figure'
define view I_StatisticalKeyFigureStdVH as select from I_StatisticalKeyFigure {
  
  @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 0.9 }
  @ObjectModel.text.association: '_Text'
  key StatisticalKeyFigure,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,
  
  cast(StstcKeyFigCategory as fis_ui_grtyp preserving type) as StstcKeyFigCategory,
  
  @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  @Semantics.text
  _StatisticalKeyFigureCat._Text[1:Language = $session.system_language].StstcKeyFigCategoryDesc,
  
  _Text,

  @Consumption.hidden: true
  _ControllingArea
}
```
