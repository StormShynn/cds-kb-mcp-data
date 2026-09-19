---
name: I_ASSETREVALUATIONINDEX
description: "Assetrevaluationindex"
semantic_vi: "View Asset Revaluation Index cung cấp truy cập vào dữ liệu chỉ số tái giá trị tài sản, được sử dụng để quản lý và theo dõi việc tái giá trị tài sản trong hệ thống tài chính của công ty. Nó có thể được sử dụng bởi các nhà phát triển để trích xuất và thao tác dữ liệu này cho mục đích báo cáo và phân tích."
keywords:
  - "asset revaluation"
  - "tái giá trị tài sản"
  - "asset revaluation index"
  - "chỉ số tái giá trị tài sản"
  - "fi"
  - "fi-aa"
  - "fi-aa-aa"
  - "interface view"
  - "data extraction"
  - "financial system"
  - "tài chính"
  - "tài sản"
semantic_en: "The Asset Revaluation Index view provides access to asset revaluation index data, which is used to manage and track the revaluation of assets in a company's financial system. It can be used by developers to extract and manipulate this data for reporting and analytics purposes."
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
  - data-extraction
  - component:FI-AA-AA-H-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETREVALUATIONINDEX

**Assetrevaluationindex**

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
| `AssetRevaluationIndexName` |  | |  | `description` | `CHAR(50)` | Asset Revaluation: Index Description |
| `AssetRevalIndexLifecycleStatus` |  | |  | `lifecycle_status` | `CHAR(1)` | Asset Revaluation: Index Lifecycle Status |
| `AssetRevalIdxIsUsingHistCalc` |  | |  | `use_hist_calc` | `CHAR(1)` | Index Is Using Historical Calculation Method |
| `AssetRevaluationIndexType` |  | |  | `index_type` | `CHAR(2)` | Asset Revaluation: Index Type |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region Key |
| `Currency` |  | |  | `currency` | `CUKY(5)` | Currency Key |
| `AstRevalIdxValueUnitOfMeasure` |  | |  | `index_value_uom` | `CHAR(1)` | Unit of Measure for Asset Revaluation Index Value |
| `AssetRevalIdxDeactivationDate` |  | |  | `deactivation_date` | `DATS(8)` | Asset Revaluation: Index Deactivation Date |
| `CreatedByUser` |  | |  | `creation_user` | `CHAR(12)` | Created By User |
| `CreationDateTime` |  | |  | `creation_datetime` | `DEC(21)` | Creation Date Time |
| `LastChangedByUser` |  | |  | `lastchange_user` | `CHAR(12)` | Last Changed By User |
| `LastChangeDateTime` |  | |  | `lastchange_datetime` | `DEC(21)` | Last Change Date Time |
| `LocalLastChangeDateTime` |  | |  | `draft_lastchange_datetime` | `DEC(21)` | Local Instance Last Change Date Time |
| `_AssetRevaluationIndexItem` | | ✓ | | | | |
| `_AssetRevaluationIndexLfcycSts` | | ✓ | | | | |
| `_AssetRevaluationIndexType` | | ✓ | | | | |
| `_AstRevalIdxValUnitOfMeasure` | | ✓ | | | | |
| `_AssetRevalIndexWhereUsed` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssetRevaluationIndexItem` | `I_AssetRevaluationIndexItem` | [0..*] |
| `_AssetRevaluationIndexLfcycSts` | `I_AssetRevalIdxLifecycleStatus` | [0..1] |
| `_AssetRevaluationIndexType` | `I_AssetRevaluationIndexType` | [0..1] |
| `_AstRevalIdxValUnitOfMeasure` | `I_AstRevalIdxValUnitOfMeasure` | [0..1] |
| `_AssetRevalIndexWhereUsed` | `I_AssetRevalIndexWhereUsed` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Asset Revaluation Index'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AssetRevaluationIndex'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel:{
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE ]
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view entity I_AssetRevaluationIndex
  as select from faat_rv_indx
  association [0..*] to I_AssetRevaluationIndexItem    as _AssetRevaluationIndexItem     on $projection.AssetRevaluationIndex = _AssetRevaluationIndexItem.AssetRevaluationIndex
  association [0..1] to I_AssetRevalIdxLifecycleStatus as _AssetRevaluationIndexLfcycSts on $projection.AssetRevalIndexLifecycleStatus = _AssetRevaluationIndexLfcycSts.AssetRevalIndexLifecycleStatus
  association [0..1] to I_AssetRevaluationIndexType    as _AssetRevaluationIndexType     on $projection.AssetRevaluationIndexType = _AssetRevaluationIndexType.AssetRevaluationIndexType
  association [0..1] to I_AstRevalIdxValUnitOfMeasure  as _AstRevalIdxValUnitOfMeasure   on $projection.AstRevalIdxValueUnitOfMeasure = _AstRevalIdxValUnitOfMeasure.AstRevalIdxValueUnitOfMeasure
  association [0..*] to I_AssetRevalIndexWhereUsed     as _AssetRevalIndexWhereUsed      on $projection.AssetRevaluationIndex = _AssetRevalIndexWhereUsed.AssetRevaluationIndex
  association [0..1] to I_Country                      as _Country                       on $projection.Country = _Country.Country
  association [0..1] to I_Currency                     as _Currency                      on $projection.Currency = _Currency.Currency
{
      @ObjectModel.text.element: ['AssetRevaluationIndexName']
  key index_id                  as AssetRevaluationIndex,

      @Semantics.text: true
      description               as AssetRevaluationIndexName,

      @ObjectModel.foreignKey.association: '_AssetRevaluationIndexLfcycSts'
      lifecycle_status          as AssetRevalIndexLifecycleStatus,

      @Semantics.booleanIndicator: true
      use_hist_calc             as AssetRevalIdxIsUsingHistCalc,

      @ObjectModel.foreignKey.association: '_AssetRevaluationIndexType'
      index_type                as AssetRevaluationIndexType,

      @ObjectModel.foreignKey.association: '_Country'
      country                   as Country,

      @ObjectModel.foreignKey.association: '_Currency'
      currency                  as Currency,
      
      @ObjectModel.foreignKey.association: '_AstRevalIdxValUnitOfMeasure'
      index_value_uom           as AstRevalIdxValueUnitOfMeasure,

      deactivation_date         as AssetRevalIdxDeactivationDate,

      creation_user             as CreatedByUser,

      creation_datetime         as CreationDateTime,

      lastchange_user           as LastChangedByUser,

      lastchange_datetime       as LastChangeDateTime,

      draft_lastchange_datetime as LocalLastChangeDateTime,

      /* Associations */
      _AssetRevaluationIndexItem,
      _AssetRevaluationIndexLfcycSts,
      _AssetRevaluationIndexType,
      _AstRevalIdxValUnitOfMeasure,
      _Country,
      _Currency,
      _AssetRevalIndexWhereUsed
}
```
