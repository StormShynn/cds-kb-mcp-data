---
name: I_BRAND
description: "Brand"
semantic_vi: "View I_BRAND CDS hiển thị dữ liệu nhãn hiệu, có liên quan khi làm việc với thông tin sản phẩm trong logistics."
keywords:
  - "brand"
  - "nhãn hiệu"
  - "logistics"
  - "lo"
  - "lo-md"
  - "lo-md-mm"
  - "product information"
  - "thông tin sản phẩm"
  - "ekko"
semantic_en: "The I_BRAND CDS view exposes brand data, which is relevant when working with product information in logistics."
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_BRAND

**Brand**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BrandText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IBRAND',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
}
@VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductBrand'
 }}
@EndUserText.label: 'Brand'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION

@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'Brand',
    sapObjectNodeType.name: 'ProductBrand',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #M,
      dataClass: #CUSTOMIZING
   },
   dataCategory: #VALUE_HELP
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,                                     
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled:true

define view I_Brand
  as select from wrf_brands
  association [0..*] to I_BrandText as _Text on $projection.Brand = _Text.Brand
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
      @ObjectModel.text.association: '_Text'
  key brand_id as Brand,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]     
      _Text
}
```
