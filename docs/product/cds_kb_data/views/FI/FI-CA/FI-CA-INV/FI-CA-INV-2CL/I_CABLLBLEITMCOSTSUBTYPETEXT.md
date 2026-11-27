---
name: I_CABLLBLEITMCOSTSUBTYPETEXT
description: "Cabllbleitmcostsubtypetext"
app_component: FI-CA-INV-2CL
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
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMCOSTSUBTYPETEXT

**Cabllbleitmcostsubtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABllbleItmCostType` | ✓ | |  | `cast( co_type as co_type_gfn_kk preserving type )` | `CHAR(8)` | Billable Item Cost Type |
| `CABllbleItmCostSubType` | ✓ | |  | `cast( co_subtype as co_subtype_gfn_kk preserving type )` | `CHAR(8)` | Billable Item Cost Subtype |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CABllbleItmCostSubtypeText` |  | |  | `cast( text as co_subtype_txt_gfn_kk preserving type )` | `CHAR(50)` | Billable Item Cost Subtype Text |
| `_CABllbleItmCostType` | | ✓ | | | | |
| `_CABllbleItmCostSubtype` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmCostType` | `I_CABllbleItmCostType` | [0..1] |
| `_CABllbleItmCostSubtype` | `I_CABllbleItmCostSubtype` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Kostenart der abr Pos - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABllbleItmCostSubtype',
  sapObjectNodeType.name: 'CABllbleItmCostSubtypeTxt',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABllbleItmCostSubtypeText
  as select from tfk8260st as _tfk8260t
  association [0..1] to I_CABllbleItmCostType    as _CABllbleItmCostType    on  $projection.CABllbleItmCostType = _CABllbleItmCostType.CABllbleItmCostType
  association [1..1] to I_CABllbleItmCostSubtype as _CABllbleItmCostSubtype on  $projection.CABllbleItmCostType    = _CABllbleItmCostSubtype.CABllbleItmCostType
                                                                            and $projection.CABllbleItmCostSubType = _CABllbleItmCostSubtype.CABllbleItmCostSubType
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABllbleItmCostType'
  key cast( co_type as co_type_gfn_kk preserving type )       as CABllbleItmCostType,

      @ObjectModel.foreignKey.association: '_CABllbleItmCostSubtype'
  key cast( co_subtype as co_subtype_gfn_kk preserving type ) as CABllbleItmCostSubType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                   as Language,

      @Semantics.text: true
      cast( text as co_subtype_txt_gfn_kk preserving type )   as CABllbleItmCostSubtypeText,

      _CABllbleItmCostType,
      _CABllbleItmCostSubtype,
      _Language
}
```
