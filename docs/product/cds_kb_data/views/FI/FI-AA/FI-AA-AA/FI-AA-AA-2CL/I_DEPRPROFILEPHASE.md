---
name: I_DEPRPROFILEPHASE
description: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value
semantic_en: "This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Depreciation Profile Phase Settings — CDS view giao diện dựa trên faac_depr_prf1p."
keywords:
  - "depreciation"
  - "profile"
  - "phase"
  - "settings"
  - "type"
  - "calc"
  - "base"
  - "value"
  - "depr"
  - "fixed"
  - "percent"
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
# I_DEPRPROFILEPHASE

**This CDS view provides the depreciation phase settings that are maintained for a depreciation profile. It contains information about the depreciation type and the depreciation phase. This CDS view provides the data to answer the following business questions: How is the depreciation phase configured? Which depreciation method is used in the depreciation phase? What is the depreciation percentage rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` | ✓ | |  | `depr_profile` | `CHAR(12)` | Depreciation Profile |
| `DepreciationType` | ✓ | |  | `depr_type` | `CHAR(1)` | Depreciation Type |
| `DepreciationPhase` | ✓ | |  | `depr_phase` | `CHAR(1)` | Depreciation Phase |
| `DepreciationCalcBaseValueKey` |  | |  | `base_value_key` | `CHAR(2)` | Base Value Key for Depreciation Calculation |
| `DeprCalcFixedPercent` |  | |  | `depr_fixed_percent` | `DEC(7)` | Depreciation Percentage Rate |
| `DeprCalcBaseValReducnPercent` |  | |  | `base_value_reduction_percent` | `DEC(7)` | Reduction of Base Value by an Entered Percentage Rate |
| `DeprCalcPctIsFromRmngUsflLife` |  | |  | `is_percent_based_on_rem_ulife` | `CHAR(1)` | Calculate Percentage from Remaining Useful Life |
| `DepreciationCalcMethod` |  | |  | `depr_method` | `CHAR(1)` | Depreciation Calculation Method |
| `DeprCalcUsefulLifeEndsAtFYEnd` |  | |  | `ulife_adjustment_control` | `CHAR(1)` | Reduce Useful Life to the End of Fiscal Year |
| `DeprIsCalculatedAfterUsflLife` |  | |  | `calc_depr_after_ulife` | `CHAR(1)` | Calculate Depreciation After End of Useful Life |
| `DeprIsCalculatedBelowZero` |  | |  | `calc_depr_below_zero` | `CHAR(1)` | Calculation of Depreciation Below Net Book Value of Zero |
| `DeprIsCalculatedWithCurb` |  | |  | `calc_depr_with_curb` | `CHAR(1)` | Depreciation with Curb |
| `DeprCalcDecliningBalFactor` |  | |  | `decl_balance_factor` | `DEC(3)` | Declining-Balance Multiplication Factor |
| `DeprCalcDecliningBalMaxPercent` |  | |  | `decl_balance_max_percent` | `DEC(7)` | Maximum Percentage Rate |
| `DeprCalcDecliningBalMinPercent` |  | |  | `decl_balance_min_percent` | `DEC(7)` | Minimum Percentage Rate |
| `DeprPeriodCtrlAcqnInCapznYr` |  | |  | `prd_ctrl_acq_in_cap_year` | `CHAR(2)` | Period Control: Acquisition |
| `Asset1stAcqnDateIsUsdInCapznYr` |  | |  | `use_first_acq_date_in_cap_year` | `CHAR(1)` | For Subsequent Acq.: Use Date of First Acq. for Depr. Calc. |
| `DeprPeriodCtrlAcqnAftCapznYr` |  | |  | `prd_ctrl_acq_after_cap_year` | `CHAR(2)` | Period Control: Acquisition in Following Years |
| `DeprPeriodCtrlRetirement` |  | |  | `prd_ctrl_retirement` | `CHAR(2)` | Period Control: Retirement |
| `DeprPeriodCtrlTransfer` |  | |  | `prd_ctrl_transfer` | `CHAR(2)` | Period Control: Transfer |
| `DeprPeriodCtrlRevaluation` |  | |  | `prd_ctrl_revaluation` | `CHAR(2)` | Period Control for Revaluation |
| `DeprPeriodCtrlInvestmentSupp` |  | |  | `prd_ctrl_invest_support` | `CHAR(2)` | Period Control for Investment Support |
| `DeprPeriodCtrlUnplannedDepr` |  | |  | `prd_ctrl_depr_unplanned` | `CHAR(2)` | Period Control for Unplanned Depreciation |
| `DeprPeriodCtrlWriteUps` |  | |  | `prd_ctrl_write_up` | `CHAR(2)` | Period Control for Write-Ups to Reserves |
| `DeprCalcChangeoverMethod` |  | |  | `changeover_method` | `CHAR(1)` | Changeover Method |
| `DeprCalcChangeoverPercent` |  | |  | `changeover_on_apc_percent` | `DEC(3)` | Net Book Value Percentage Rate for Depreciation Changeover |
| `DeprCalcMultipleShiftControl` |  | |  | `multiple_shift_control` | `CHAR(1)` | Multiple Shift Control |
| `DeprCalcShutdownControl` |  | |  | `shutdown_control` | `CHAR(1)` | Shutdown Control |
| `DeprCalcScrapValueControl` |  | |  | `scrap_value_control` | `NUMC(1)` | Scrap Value Control: Effect of Scrap Value on Base Value |
| `DeprCalcMultiLevelStartBasis` |  | |  | `multi_level_start_basis` | `CHAR(1)` | Validity Start of Multi-Level Depreciation |
| `_DepreciationProfile` | | ✓ | | | | |
| `_DeprProfilePhaseLevel` | | ✓ | | | | |
| `_DepreciationProfileName` | | ✓ | | | | |
| `_AssetDepreciationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DepreciationProfile` | `I_DepreciationProfile` | [0..1] |
| `_DeprProfilePhaseLevel` | `I_DeprProfilePhaseLevel` | [0..*] |
| `_DepreciationProfileName` | `I_DepreciationProfileText` | [1..*] |
| `_AssetDepreciationType` | `I_AssetDepreciationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRPROFILEPHASE')/$value)*

```abap
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Depreciation Profile Phase Settings'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'DepreciationPhase',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_DeprProfilePhase
  as select from faac_depr_prf1p
  association [0..1] to I_DepreciationProfile     as _DepreciationProfile     on  $projection.DepreciationProfile = _DepreciationProfile.DepreciationProfile
  association [0..*] to I_DeprProfilePhaseLevel   as _DeprProfilePhaseLevel   on  $projection.DepreciationProfile = _DeprProfilePhaseLevel.DepreciationProfile
                                                                              and $projection.DepreciationType    = _DeprProfilePhaseLevel.DepreciationType
                                                                              and $projection.DepreciationPhase   = _DeprProfilePhaseLevel.DepreciationPhase
  association [1..*] to I_DepreciationProfileText as _DepreciationProfileName on  $projection.DepreciationProfile = _DepreciationProfileName.DepreciationProfile
  association [0..1] to I_AssetDepreciationType   as _AssetDepreciationType   on  $projection.DepreciationType = _AssetDepreciationType.DepreciationType

{
      @ObjectModel.foreignKey.association: '_DepreciationProfile'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key depr_profile                   as DepreciationProfile,
      @ObjectModel.foreignKey.association: '_AssetDepreciationType'
  key depr_type                      as DepreciationType,
  key depr_phase                     as DepreciationPhase,

      base_value_key                 as DepreciationCalcBaseValueKey,
      depr_fixed_percent             as DeprCalcFixedPercent,
      base_value_reduction_percent   as DeprCalcBaseValReducnPercent,
      is_percent_based_on_rem_ulife  as DeprCalcPctIsFromRmngUsflLife,
      depr_method                    as DepreciationCalcMethod,
      ulife_adjustment_control       as DeprCalcUsefulLifeEndsAtFYEnd,
      calc_depr_after_ulife          as DeprIsCalculatedAfterUsflLife,
      calc_depr_below_zero           as DeprIsCalculatedBelowZero,
      calc_depr_with_curb            as DeprIsCalculatedWithCurb,
      decl_balance_factor            as DeprCalcDecliningBalFactor,
      decl_balance_max_percent       as DeprCalcDecliningBalMaxPercent,
      decl_balance_min_percent       as DeprCalcDecliningBalMinPercent,
      prd_ctrl_acq_in_cap_year       as DeprPeriodCtrlAcqnInCapznYr,
      use_first_acq_date_in_cap_year as Asset1stAcqnDateIsUsdInCapznYr,
      prd_ctrl_acq_after_cap_year    as DeprPeriodCtrlAcqnAftCapznYr,
      prd_ctrl_retirement            as DeprPeriodCtrlRetirement,
      prd_ctrl_transfer              as DeprPeriodCtrlTransfer,
      prd_ctrl_revaluation           as DeprPeriodCtrlRevaluation,
      prd_ctrl_invest_support        as DeprPeriodCtrlInvestmentSupp,
      prd_ctrl_depr_unplanned        as DeprPeriodCtrlUnplannedDepr,
      prd_ctrl_write_up              as DeprPeriodCtrlWriteUps,
      changeover_method              as DeprCalcChangeoverMethod,
      changeover_on_apc_percent      as DeprCalcChangeoverPercent,
      multiple_shift_control         as DeprCalcMultipleShiftControl,
      shutdown_control               as DeprCalcShutdownControl,
      scrap_value_control            as DeprCalcScrapValueControl,
      multi_level_start_basis        as DeprCalcMultiLevelStartBasis,

      // Associations
      _DeprProfilePhaseLevel,
      _DepreciationProfileName,
      _AssetDepreciationType,
      _DepreciationProfile
}
where
  depr_type <> 'Z'
```
