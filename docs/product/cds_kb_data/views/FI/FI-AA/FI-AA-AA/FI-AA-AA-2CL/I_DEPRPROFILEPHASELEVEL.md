---
name: I_DEPRPROFILEPHASELEVEL
description: "This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value
semantic_en: "This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Depreciation Profile Phase Level — CDS view giao diện dựa trên faac_depr_prf2pl."
keywords:
  - "depreciation"
  - "profile"
  - "phase"
  - "level"
  - "type"
  - "asset"
  - "capitalization"
  - "year"
  - "depr"
  - "calc"
  - "value"
tags:
  - FI
  - bo:asset
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_DEPRPROFILEPHASELEVEL

**This CDS view provides the depreciation phase levels with the information about the depreciation phase and the corresponding valid fiscal year. This CDS view provides the data to answer the following business questions: What are the depreciation levels in the depreciation phase? In which fiscal year is my depreciation phase valid? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` | ✓ | |  | `depr_profile` | `CHAR(12)` | Depreciation Profile |
| `DepreciationType` | ✓ | |  | `depr_type` | `CHAR(1)` | Depreciation Type |
| `DepreciationPhase` | ✓ | |  | `depr_phase` | `CHAR(1)` | Depreciation Phase |
| `AssetCapitalizationToYear` | ✓ | |  | `capitalization_year_to` | `NUMC(4)` | Valid to Vintage Year |
| `DeprCalcPhaseLevelValue` | ✓ | |  | `depr_phase_level` | `NUMC(2)` | Level for Depreciation Percentage Rate |
| `DeprPhaseLevelDurationInYears` |  | |  | `level_in_years` | `NUMC(3)` | Validity of a Level in Years |
| `DeprPhaseLevelDurationInMonths` |  | |  | `level_in_months` | `NUMC(3)` | Validity of a Level in Months |
| `DepreciationCalcBaseValueKey` |  | |  | `base_value_key` | `CHAR(2)` | Base Value Key for Depreciation Calculation |
| `DeprCalcFixedPercent` |  | |  | `depr_fixed_percent` | `DEC(7)` | Depreciation Percentage Rate |
| `DeprCalcBaseValReducnPercent` |  | |  | `base_value_reduction_percent` | `DEC(7)` | Reduction of Base Value by an Entered Percentage Rate |
| `DeprCalcPctIsFromRmngUsflLife` |  | |  | `is_percent_based_on_rem_ulife` | `CHAR(1)` | Calculate Percentage from Remaining Useful Life |
| `_DepreciationProfile` | | ✓ | | | | |
| `_DepreciationProfileName` | | ✓ | | | | |
| `_AssetDepreciationType` | | ✓ | | | | |
| `_AssetDepreciationPhase` | | ✓ | | | | |
| `_AssetCapitalizationToYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DepreciationProfile` | `I_DepreciationProfile` | [0..1] |
| `_DepreciationProfileName` | `I_DepreciationProfileText` | [1..*] |
| `_AssetDepreciationType` | `I_AssetDepreciationType` | [0..1] |
| `_AssetDepreciationPhase` | `I_AssetDepreciationPhase` | [0..1] |
| `_AssetCapitalizationToYear` | `I_FiscalYearForVariant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASELEVEL')/$value)*

```abap
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Depreciation Profile Phase Level'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'DeprCalcPhaseLevelValue',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_DeprProfilePhaseLevel
  as select from faac_depr_prf2pl
  association [0..1] to I_DepreciationProfile          as _DepreciationProfile          on $projection.DepreciationProfile = _DepreciationProfile.DepreciationProfile
  association [1..*] to I_DepreciationProfileText      as _DepreciationProfileName      on $projection.DepreciationProfile = _DepreciationProfileName.DepreciationProfile
  association [0..1] to I_AssetDepreciationType        as _AssetDepreciationType        on $projection.DepreciationType = _AssetDepreciationType.DepreciationType
  association [0..1] to I_AssetDepreciationPhase       as _AssetDepreciationPhase       on $projection.DepreciationPhase = _AssetDepreciationPhase.DepreciationPhase
  association [0..1] to I_FiscalYearForVariant         as _AssetCapitalizationToYear    on $projection.AssetCapitalizationToYear = _AssetCapitalizationToYear.FiscalYear
                                                                                        and _AssetCapitalizationToYear.FiscalYearVariant = 'K4'

{
      @ObjectModel.foreignKey.association: '_DepreciationProfile'
      @ObjectModel.text.association: '_DepreciationProfileName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key depr_profile                  as DepreciationProfile,
      @ObjectModel.foreignKey.association: '_AssetDepreciationType'
  key depr_type                     as DepreciationType,
      @ObjectModel.foreignKey.association: '_AssetDepreciationPhase'
  key depr_phase                    as DepreciationPhase,
      @Semantics.fiscal.year: true
      @ObjectModel.foreignKey.association: '_AssetCapitalizationToYear'
  key capitalization_year_to        as AssetCapitalizationToYear,
  key depr_phase_level              as DeprCalcPhaseLevelValue,
      level_in_years                as DeprPhaseLevelDurationInYears,
      level_in_months               as DeprPhaseLevelDurationInMonths,
      base_value_key                as DepreciationCalcBaseValueKey,
      depr_fixed_percent            as DeprCalcFixedPercent,
      base_value_reduction_percent  as DeprCalcBaseValReducnPercent,
      is_percent_based_on_rem_ulife as DeprCalcPctIsFromRmngUsflLife,
      // Associations
      _DepreciationProfile,
      _DepreciationProfileName,
      _AssetDepreciationPhase,
      _AssetDepreciationType,
      _AssetCapitalizationToYear
}
where
  depr_type <> 'Z'
```
