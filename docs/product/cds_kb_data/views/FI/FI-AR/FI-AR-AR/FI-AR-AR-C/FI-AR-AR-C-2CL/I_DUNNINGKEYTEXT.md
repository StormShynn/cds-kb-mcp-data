---
name: I_DUNNINGKEYTEXT
description: "Dunningkeytext"
app_component: FI-AR-AR-C-2CL
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
  - FI-AR
  - FI-AR-AR
  - interface-view
  - text-view
  - text
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGKEYTEXT

**Dunningkeytext**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
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
| `DunningKey` | ✓ | |  | `cast( mschl as farp_mschl )` | `CHAR(1)` | Dunning Key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MaximumDunningLevelDescription` |  | |  | `cast( text1 as farp_text1_040a )` | `CHAR(50)` | Dunning Key Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Dunning Key - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDUNKEYT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DunningKey'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_DunningKeyText
  as select from t040a
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast( mschl as farp_mschl )      as DunningKey,
      @Semantics.language: true
  key spras                            as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true       
      cast( text1 as farp_text1_040a ) as MaximumDunningLevelDescription,
      _Language
}
```
