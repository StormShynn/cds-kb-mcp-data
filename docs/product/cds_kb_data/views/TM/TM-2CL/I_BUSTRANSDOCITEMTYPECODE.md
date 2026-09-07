---
name: I_BUSTRANSDOCITEMTYPECODE
description: "Bustransdocitemtypecode"
semantic_vi: "View Bustransdocitemtypecode cung cấp thông tin về loại tài liệu giao dịch kinh doanh của mục hàng hóa, được sử dụng để phân loại mục hàng hóa trong tài liệu giao dịch. Nó được sử dụng để truy cập và quản lý các loại mục hàng hóa này."
keywords:
  - "business transaction"
  - "document item type"
  - "bustransdocitemtypecode"
  - "transaction document"
  - "tài liệu giao dịch"
  - "loại mục hàng hóa"
  - "tm-2cl"
  - "sap cds"
  - "interface view"
  - "item-level"
semantic_en: "The Bustransdocitemtypecode view provides information about business transaction document item types, which are used to categorize items within a transaction document. It is used to access and manage these item types."
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
  - item-level
  - component:TM-2CL
  - lob:Other
---
# I_BUSTRANSDOCITEMTYPECODE

**Bustransdocitemtypecode**

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
| `BusinessTransacDocItmTypeCode` | ✓ | |  | `cast (btditm_tco150 as njit_btd_item_type_code preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'BTD Item Type Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BusinessTransacDocItmTypeCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TranspBizTransacDocItmTypeCode'
define root view entity I_BusTransDocItemTypeCode
  as select from /scmtms/c_btdit

  composition [0..*] of I_BusTransDocItmTypeCodeText as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast (btditm_tco150 as njit_btd_item_type_code preserving type ) as BusinessTransacDocItmTypeCode,
      _Text
}
```
