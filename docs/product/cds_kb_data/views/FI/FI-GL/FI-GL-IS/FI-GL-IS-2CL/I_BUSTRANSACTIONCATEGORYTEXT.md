---
name: I_BUSTRANSACTIONCATEGORYTEXT
description: "Bustransactioncategorytext"
semantic_vi: "Chứa tên danh mục giao dịch kinh doanh trong nhiều ngôn ngữ, được sử dụng để hiển thị tên danh mục trong môi trường đa ngôn ngữ."
keywords:
  - "business transaction category"
  - "danh mục giao dịch kinh doanh"
  - "language"
  - "ngôn ngữ"
  - "sap fi-gl-is"
  - "fi-gl-is-2cl"
  - "finance"
  - "finance interface"
  - "interface view"
  - "text view"
semantic_en: "Exposes business transaction category names in different languages, used to display category names in multi-language environments."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSTRANSACTIONCATEGORYTEXT

**Bustransactioncategorytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `Language` | ✓ | |  | `langu` |  |  |
| `BusinessTransactionCategory` | ✓ | |  | `cast(finsc_bttype_t.bttype as fis_bttype preserving type )` |  |  |
| `BusTransactionCategoryName` |  | |  | `cast(finsc_bttype_t.txt as fins_bttype_txt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIBUSTXCATT'
@ObjectModel.representativeKey: 'BusinessTransactionCategory'
@EndUserText.label: 'Business Transaction Category - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
//@Consumption.ranked: true

define view entity I_BusTransactionCategoryText
  as select from finsc_bttype_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key finsc_bttype_t.langu  as Language,
//      @Search.defaultSearchElement: true
//      @Search.fuzzinessThreshold: 0.8
//      @Search.ranking: #HIGH 
  key cast(finsc_bttype_t.bttype as fis_bttype preserving type ) as BusinessTransactionCategory,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW 
      cast(finsc_bttype_t.txt as fins_bttype_txt preserving type ) as BusTransactionCategoryName,
      _Language
}
```
