---
name: I_BUSTRANSDOCITMTYPECODETEXT
description: "Bustransdocitmtypecodetext"
semantic_vi: "Chứa mã loại mục nhập giao dịch kinh doanh và tên mô tả tương ứng trong nhiều ngôn ngữ. View này hữu ích khi cần lấy và hiển thị mã loại mục nhập và mô tả trong ngôn ngữ cụ thể."
keywords:
  - "business transaction"
  - "document item type"
  - "language"
  - "text name"
  - "tm"
  - "2cl"
  - "sap"
  - "cds view"
  - "interface view"
  - "text view"
  - "lob other"
semantic_en: "Exposes business transaction document item type codes and their corresponding text names in multiple languages. This view is useful for retrieving and displaying item type codes and their descriptions in a specific language."
app_component: TM-2CL
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
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_BUSTRANSDOCITMTYPECODETEXT

**Bustransdocitmtypecodetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessTransacDocItmTypeCode` | ✓ | |  | `cast ( btditm_tco150 as njit_btd_item_type_code preserving type )` |  |  |
| `BizTransacDocumentItemTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_BusTransDocItemTypeCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BTD Item Type Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BusinessTransacDocItmTypeCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_BusTransDocItmTypeCodeText
  as select from /scmtms/c_btditt
  association        to parent I_BusTransDocItemTypeCode as _BusTransDocItemTypeCode on $projection.BusinessTransacDocItmTypeCode = _BusTransDocItemTypeCode.BusinessTransacDocItmTypeCode
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                             as Language,
      @ObjectModel.foreignKey.association: '_BusTransDocItemTypeCode'
      @ObjectModel.text.element: ['BizTransacDocumentItemTypeName']
  key cast ( btditm_tco150 as njit_btd_item_type_code preserving type ) as BusinessTransacDocItmTypeCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      description                                                       as BizTransacDocumentItemTypeName,
      _BusTransDocItemTypeCode,
      _Language
}
```
