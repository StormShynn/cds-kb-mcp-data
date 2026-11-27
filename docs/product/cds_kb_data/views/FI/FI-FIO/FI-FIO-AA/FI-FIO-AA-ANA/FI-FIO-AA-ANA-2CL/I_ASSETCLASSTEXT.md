---
name: I_ASSETCLASSTEXT
description: "Assetclasstext"
semantic_vi: "View I_ASSETCLASSTEXT cung cấp dữ liệu văn bản về lớp tài sản, bao gồm tên và mô tả, có thể được sử dụng để hiển thị thông tin lớp tài sản trong các ứng dụng khác nhau."
keywords:
  - "asset class"
  - "tài sản lớp"
  - "fi"
  - "fi-fio-aa-ana-2cl"
  - "asset class text"
  - "văn bản lớp tài sản"
  - "sap cds"
  - "cds view"
semantic_en: "The I_ASSETCLASSTEXT view provides asset class text data, including names and descriptions, which can be used to display asset class information in various applications."
app_component: FI-FIO-AA-ANA-2CL
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
  - interface-view
  - text-view
  - text
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETCLASSTEXT

**Assetclasstext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
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
| `AssetClass` | ✓ | |  | `asset_class` | `CHAR(8)` | Asset Class |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `AssetClassName` |  | |  | `cast(description_short as faa_asset_class_name )` | `CHAR(20)` | Asset Class, Name |
| `AssetClassDescription` |  | |  | `description_long` | `CHAR(50)` | Asset class description |
| `AssetAuthorizationContext` |  | |  | `cast('NEW' as faa_authcntxt)` | `CHAR(10)` | Asset Authorization Context |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETCLASST', preserveKey: true}
@EndUserText.label: 'Asset Class - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetClass',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AssetClassText
  as select from faac_acls0_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key asset_class                  as AssetClass,
      @Semantics.language: true
  key language                     as Language,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(description_short as faa_asset_class_name ) as AssetClassName,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      description_long             as AssetClassDescription,

      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast('NEW' as faa_authcntxt) as AssetAuthorizationContext, //Needed for DCL

      _Language
}
```
