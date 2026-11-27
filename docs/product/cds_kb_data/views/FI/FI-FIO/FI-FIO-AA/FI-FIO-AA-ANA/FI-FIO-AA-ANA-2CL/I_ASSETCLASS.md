---
name: I_ASSETCLASS
description: "Assetclass"
semantic_vi: "View I_ASSETCLASS hiển thị dữ liệu loại tài sản, được sử dụng để phân loại và quản lý tài sản trong bối cảnh tài chính. Nó thường được sử dụng trong quá trình quản lý tài sản và kế toán."
keywords:
  - "asset class"
  - "loại tài sản"
  - "asset management"
  - "quản lý tài sản"
  - "financial accounting"
  - "kế toán tài chính"
  - "fi"
  - "fi-fio-aa-ana-2cl"
  - "fixed asset"
  - "tài sản cố định"
semantic_en: "The I_ASSETCLASS view exposes asset class data, which is used to categorize and manage assets in a financial context. It is typically used in asset management and accounting processes."
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
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETCLASS

**Assetclass**

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
| `AssetAccountDetermination` |  | |  | `gl_account_det` | `CHAR(8)` | Account Determination |
| `BusinessArea` |  | |  | `cast('' as gsber)` | `CHAR(4)` | Business Area |
| `Plant` |  | |  | `cast('' as werks_d)` | `CHAR(4)` | Plant |
| `CostCenter` |  | |  | `cast('' as kostl)` | `CHAR(10)` | Cost Center |
| `FixedAssetFinDataCmpltns` |  | |  | `cast('' as aneqs)` | `NUMC(1)` | Completeness indicator for the asset |
| `AssetCountryOfOrigin` |  | |  | `cast('' as am_land1)` | `CHAR(3)` | Asset's Country/Region of Origin |
| `Supplier` |  | |  | `cast('' as am_lifnr)` | `CHAR(10)` | Account Number of Supplier (Other Key Word) |
| `FixedAssetGroup` |  | |  | `cast('' as anlue)` | `CHAR(12)` | Asset Super Number |
| `FixedAssetPropertyType` |  | |  | `cast('' as eigkz)` | `CHAR(1)` | Property Indicator |
| `PropertyClass` |  | |  | `cast('' as vmgli)` | `CHAR(4)` | Property Classification Key |
| `InvestmentSupportMeasure` |  | |  | `cast('' as invsl)` | `CHAR(2)` | Investment Support Key |
| `Group1AssetEvaluationKey` |  | |  | `cast('' as ord41)` | `CHAR(4)` | Evaluation Group 1 |
| `Group2AssetEvaluationKey` |  | |  | `cast('' as ord42)` | `CHAR(4)` | Evaluation Group 2 |
| `Group3AssetEvaluationKey` |  | |  | `cast('' as ord43)` | `CHAR(4)` | Evaluation Group 3 |
| `Group4AssetEvaluationKey` |  | |  | `cast('' as ord44)` | `CHAR(4)` | Evaluation Group 4 |
| `InvestmentReason` |  | |  | `cast('' as izwek)` | `CHAR(2)` | Reason for Investment |
| `AssetAuthorizationContext` |  | |  | `cast('NEW' as faa_authcntxt)` | `CHAR(10)` | Asset Authorization Context |
| `_Text` | | ✓ | | | | |
| `_AssetAcctDetermination` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_FixedAssetFinDataCmpltns` | | ✓ | | | | |
| `_FixedAssetPropertyType` | | ✓ | | | | |
| `_PropertyClass` | | ✓ | | | | |
| `_Group1AssetEvaluationKey` | | ✓ | | | | |
| `_Group2AssetEvaluationKey` | | ✓ | | | | |
| `_Group3AssetEvaluationKey` | | ✓ | | | | |
| `_Group4AssetEvaluationKey` | | ✓ | | | | |
| `_InvestmentReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetClassText` | [0..*] |
| `_AssetAcctDetermination` | `I_AssetAcctDetermination` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_FixedAssetFinDataCmpltns` | `I_FixedAssetFinDataCmpltns` | [0..1] |
| `_FixedAssetPropertyType` | `I_FixedAssetPropertyType` | [0..1] |
| `_PropertyClass` | `I_PropertyClass` | [0..1] |
| `_Group1AssetEvaluationKey` | `I_Group1AssetEvaluationKey` | [0..1] |
| `_Group2AssetEvaluationKey` | `I_Group2AssetEvaluationKey` | [0..1] |
| `_Group3AssetEvaluationKey` | `I_Group3AssetEvaluationKey` | [0..1] |
| `_Group4AssetEvaluationKey` | `I_Group4AssetEvaluationKey` | [0..1] |
| `_InvestmentReason` | `I_InvestmentReason` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETCL', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Class'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { sapObjectNodeType.name: 'FixedAssetClass',
                representativeKey: 'AssetClass',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view I_AssetClass
  as select from faac_acls0

  association [0..*] to I_AssetClassText           as _Text                     on $projection.AssetClass = _Text.AssetClass
  association [0..1] to I_AssetAcctDetermination   as _AssetAcctDetermination   on $projection.AssetAccountDetermination = _AssetAcctDetermination.AssetAccountDetermination
  association [0..1] to I_BusinessArea             as _BusinessArea             on $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Plant                    as _Plant                    on $projection.Plant = _Plant.Plant
  association [0..1] to I_Country                  as _Country                  on $projection.AssetCountryOfOrigin = _Country.Country
  association [0..1] to I_Supplier                 as _Supplier                 on $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_FixedAssetFinDataCmpltns as _FixedAssetFinDataCmpltns on $projection.FixedAssetFinDataCmpltns = _FixedAssetFinDataCmpltns.FixedAssetFinDataCmpltns
  association [0..1] to I_FixedAssetPropertyType   as _FixedAssetPropertyType   on $projection.FixedAssetPropertyType = _FixedAssetPropertyType.FixedAssetPropertyType
  association [0..1] to I_PropertyClass            as _PropertyClass            on $projection.PropertyClass = _PropertyClass.PropertyClass
  association [0..1] to I_Group1AssetEvaluationKey as _Group1AssetEvaluationKey on $projection.Group1AssetEvaluationKey = _Group1AssetEvaluationKey.Group1AssetEvaluationKey
  association [0..1] to I_Group2AssetEvaluationKey as _Group2AssetEvaluationKey on $projection.Group2AssetEvaluationKey = _Group2AssetEvaluationKey.Group2AssetEvaluationKey
  association [0..1] to I_Group3AssetEvaluationKey as _Group3AssetEvaluationKey on $projection.Group3AssetEvaluationKey = _Group3AssetEvaluationKey.Group3AssetEvaluationKey
  association [0..1] to I_Group4AssetEvaluationKey as _Group4AssetEvaluationKey on $projection.Group4AssetEvaluationKey = _Group4AssetEvaluationKey.Group4AssetEvaluationKey
  association [0..1] to I_InvestmentReason         as _InvestmentReason         on $projection.InvestmentReason = _InvestmentReason.InvestmentReason
{
      @ObjectModel.text.association: '_Text'
  key asset_class                  as AssetClass,

      @ObjectModel.foreignKey.association: '_AssetAcctDetermination'
      gl_account_det               as AssetAccountDetermination,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      cast('' as gsber)            as BusinessArea,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Plant'
      cast('' as werks_d)          as Plant,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as kostl)            as CostCenter,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_FixedAssetFinDataCmpltns'
      cast('' as aneqs)            as FixedAssetFinDataCmpltns,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Country'
      cast('' as am_land1)         as AssetCountryOfOrigin,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      cast('' as am_lifnr)         as Supplier,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as anlue)            as FixedAssetGroup,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_FixedAssetPropertyType'
      cast('' as eigkz)            as FixedAssetPropertyType,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_PropertyClass'
      cast('' as vmgli)            as PropertyClass,
      @VDM.lifecycle.status: #DEPRECATED
      cast('' as invsl)            as InvestmentSupportMeasure,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Group1AssetEvaluationKey'
      cast('' as ord41)            as Group1AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Group2AssetEvaluationKey'
      cast('' as ord42)            as Group2AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Group3AssetEvaluationKey'
      cast('' as ord43)            as Group3AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_Group4AssetEvaluationKey'
      cast('' as ord44)            as Group4AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      @ObjectModel.foreignKey.association: '_InvestmentReason'
      cast('' as izwek)            as InvestmentReason,

      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast('NEW' as faa_authcntxt) as AssetAuthorizationContext, //Needed for DCL

      //* Asscociations *//
      _Text,
      _AssetAcctDetermination,
      @VDM.lifecycle.status: #DEPRECATED
      _BusinessArea,
      @VDM.lifecycle.status: #DEPRECATED
      _Plant,
      @VDM.lifecycle.status: #DEPRECATED
      _Country,
      @VDM.lifecycle.status: #DEPRECATED
      _Supplier,
      @VDM.lifecycle.status: #DEPRECATED
      _FixedAssetFinDataCmpltns,
      @VDM.lifecycle.status: #DEPRECATED
      _FixedAssetPropertyType,
      @VDM.lifecycle.status: #DEPRECATED
      _PropertyClass,
      @VDM.lifecycle.status: #DEPRECATED
      _Group1AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      _Group2AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      _Group3AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      _Group4AssetEvaluationKey,
      @VDM.lifecycle.status: #DEPRECATED
      _InvestmentReason
}
```
