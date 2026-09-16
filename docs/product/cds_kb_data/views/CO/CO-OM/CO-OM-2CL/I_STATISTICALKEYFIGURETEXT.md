---
name: I_STATISTICALKEYFIGURETEXT
description: "Statisticalkeyfiguretext"
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
  - text-view
  - text
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_STATISTICALKEYFIGURETEXT

**Statisticalkeyfiguretext**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ControllingArea` | ✓ | |  | `cast(kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `StatisticalKeyFigure` | ✓ | |  | `cast(stagr as fis_stagr preserving type )` | `CHAR(6)` | Statistical Key Figure |
| `StatisticalKeyFigureName` |  | |  | `cast(bezei as fis_ui_stagr_text preserving type )` | `CHAR(40)` | Statistical Key Figure Name |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'StatisticalKeyFigure'
@EndUserText.label: 'Statistical Key Figure - Text'
@Analytics.dataExtraction.enabled: true
@AbapCatalog.sqlViewName: 'IFISTSTCKEYFIGT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]


define view I_StatisticalKeyFigureText as select from tkt03 
association[1] to I_ControllingArea as _ControllingArea 
    on $projection.ControllingArea  = _ControllingArea.ControllingArea

association[0..1] to I_Language as _Language 
    on $projection.Language         = _Language.Language
{
    @Semantics.language
@ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
    key spras as Language,
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
    key cast(kokrs as fis_kokrs preserving type ) as ControllingArea,
    key cast(stagr as fis_stagr preserving type ) as StatisticalKeyFigure,
    @Semantics.text
    cast(bezei as fis_ui_stagr_text preserving type ) as StatisticalKeyFigureName,
    
    _ControllingArea,
    _Language
}
```
