---
name: I_ASSETREVALUATIONINDEXITEM
description: "Assetrevaluationindexitem"
semantic_vi: "View I_ASSETREVALUATIONINDEXITEM hiển thị dữ liệu chỉ số tái đánh giá tài sản, được sử dụng để theo dõi thay đổi giá trị tài sản theo thời gian."
keywords:
  - "asset revaluation"
  - "tái đánh giá tài sản"
  - "index item"
  - "đối tượng chỉ số"
  - "fi-aa"
  - "fi-aa-aa"
  - "fi"
  - "finance"
  - "asset"
  - "tài sản"
semantic_en: "The Asset Revaluation Index Item view exposes asset revaluation index data, which is used to track changes in asset values over time."
app_component: FI-AA-AA-H-2CL
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
  - FI-AA
  - FI-AA-AA
  - interface-view
  - item-level
  - component:FI-AA-AA-H-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETREVALUATIONINDEXITEM

**Assetrevaluationindexitem**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-H-2CL` |
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
| `AssetRevaluationIndex` | ✓ | |  | `index_id` | `CHAR(10)` | Asset Revaluation: Index ID |
| `ValidityEndDate` | ✓ | |  | `valid_to_date` | `DATS(8)` | Date Validity Ends |
| `ValidityStartDate` |  | |  | `valid_from_date` | `DATS(8)` | Date for Beginning of Validity |
| `AssetRevaluationIndexValue` |  | |  | `index_point` | `DEC(16)` | Asset Revaluation: Index Value |
| `_AssetRevaluationIndex` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssetRevaluationIndex` | `I_AssetRevaluationIndex` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Asset Revaluation Index Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ]
}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view entity I_AssetRevaluationIndexItem
  as select from faat_rv_indx_itm
  association [1..1] to I_AssetRevaluationIndex as _AssetRevaluationIndex on $projection.AssetRevaluationIndex = _AssetRevaluationIndex.AssetRevaluationIndex
{
      @ObjectModel.foreignKey.association: '_AssetRevaluationIndex'
  key index_id        as AssetRevaluationIndex,
  
      @Semantics.businessDate.to: true
  key valid_to_date   as ValidityEndDate,
  
      @Semantics.businessDate.from: true
      valid_from_date as ValidityStartDate,
      
      index_point     as AssetRevaluationIndexValue,
      
      /* Associations */
      _AssetRevaluationIndex
}
```
