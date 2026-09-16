---
name: I_BUSINESSAREATEXT
description: "Businessareatext"
semantic_vi: "View Businessareatext cung cấp mô tả văn bản cho các khu vực kinh doanh trong bối cảnh tài chính, hữu ích cho việc hiển thị tên khu vực kinh doanh trong một ngôn ngữ cụ thể."
keywords:
  - "business area"
  - "khu vực kinh doanh"
  - "financial context"
  - "mô tả văn bản"
  - "tên khu vực kinh doanh"
  - "language"
  - "ngôn ngữ"
  - "fi-gl-gl"
  - "finance"
  - "tài chính"
semantic_en: "The Businessareatext view provides text descriptions for business areas in a financial context, useful for displaying business area names in a specific language."
app_component: FI-GL-GL-A-2CL
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
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_BUSINESSAREATEXT

**Businessareatext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `BusinessArea` | ✓ | |  | `gsber` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessAreaName` |  | |  | `cast( gtext as fis_gtext_vdm preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Area - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBUSAREAT'
@ObjectModel.representativeKey: 'BusinessArea'
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey:true
@Search.searchable: true

@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]


define view I_BusinessAreaText
  as select from tgsbt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key gsber                                      as BusinessArea,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      cast( gtext as fis_gtext_vdm preserving type) as BusinessAreaName,
      _Language

}
```
