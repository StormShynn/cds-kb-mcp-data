---
name: I_BRANDTEXT
description: "Brandtext"
semantic_vi: "View I_BRANDTEXT cung cấp tên thương hiệu trong các ngôn ngữ khác nhau, cho phép các nhà phát triển truy cập và sử dụng thông tin này trong các ứng dụng của họ. Nó hữu ích khi làm việc với dữ liệu thương hiệu trong các ứng dụng logistics tổng thể."
keywords:
  - "brand"
  - "brand name"
  - "language"
  - "logistics general"
  - "sap cds view"
  - "i_brandtext"
  - "lo-md-mm-2cl"
  - "text view"
  - "interface view"
semantic_en: "The I_BRANDTEXT view provides brand names in different languages, enabling developers to access and utilize this information in their applications. It is useful when working with brand-related data in logistics general applications."
app_component: LO-MD-MM-2CL
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_BRANDTEXT

**Brandtext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `Brand` | ✓ | |  | `brand_id` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `BrandName` |  | |  | `brand_descr` |  |  |
| `_Brand` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Brand` | `I_Brand` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IBRANDTEXT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
 }
@EndUserText.label: 'Brand - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductBrandText'
 }}
 
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'Brand',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #M,
      dataClass: #CUSTOMIZING
   }
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE                                  
]
@Analytics.dataExtraction.enabled:true

define view I_BrandText
  as select from wrf_brands_t
  association [1..1] to I_Brand    as _Brand    on $projection.Brand = _Brand.Brand
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Brand'
  key brand_id    as Brand,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      
      brand_descr as BrandName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Brand,
      _Language
}
```
