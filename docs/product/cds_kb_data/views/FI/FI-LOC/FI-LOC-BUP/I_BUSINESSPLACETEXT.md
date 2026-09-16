---
name: I_BUSINESSPLACETEXT
description: "Businessplacetext"
semantic_vi: "View Businessplacetext cung cấp mô tả văn bản cho các địa điểm kinh doanh trong một công ty, cho phép bạn truy xuất tên và mô tả của địa điểm kinh doanh trong các ngôn ngữ khác nhau. Nó được sử dụng khi bạn cần hiển thị hoặc xử lý thông tin địa điểm kinh doanh trong ứng dụng của mình."
keywords:
  - "business place"
  - "địa điểm kinh doanh"
  - "company code"
  - "language"
  - "text view"
  - "view"
  - "fi-loc-bup"
  - "fi"
  - "fi-loc"
  - "finance"
  - "text description"
semantic_en: "The Businessplacetext view provides text descriptions for business places in a company, allowing you to retrieve the names and descriptions of business places in different languages. It is used when you need to display or process business place information in your application."
app_component: FI-LOC-BUP
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
  - FI-LOC
  - FI-LOC-BUP
  - interface-view
  - text-view
  - text
  - component:FI-LOC-BUP
  - lob:Finance
---
# I_BUSINESSPLACETEXT

**Businessplacetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BUP` |
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
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `BusinessPlace` | ✓ | |  | `branch` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `BusinessPlaceDescription` |  | |  | `name` |  |  |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Place - Text'
@ObjectModel: { dataCategory: #TEXT, 
                usageType: { sizeCategory: #S,
                             dataClass:  #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }   
@ObjectModel.representativeKey: 'BusinessPlace'  
@Analytics.dataExtraction.enabled:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'BusinessPlaceText'

define view entity I_BusinessPlaceText as select from j_1bbrancht
  association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode   as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
  key branch as BusinessPlace,
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key language as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  name as BusinessPlaceDescription,
  
  _Language,
  _CompanyCode
  
}
where
  bupla_type = ''
```
