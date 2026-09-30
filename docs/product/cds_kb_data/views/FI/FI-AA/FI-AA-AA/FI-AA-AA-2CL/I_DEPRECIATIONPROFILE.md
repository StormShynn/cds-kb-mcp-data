---
name: I_DEPRECIATIONPROFILE
description: "This CDS view provides all available depreciation profiles. For each depreciation profile, the respective status is provided: Active, Draft, or Blocked. This CDS view provides the data to answer the following business questions: Which depreciation profiles are available in the system? What is the status of the depreciation profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONPROFILE')/$value
semantic_en: "This CDS view provides all available depreciation profiles. For each depreciation profile, the respective status is provided: Active, Draft, or Blocked. This CDS view provides the data to answer the following business questions: Which depreciation profiles are available in the system? What is the status of the depreciation profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Depreciation Profile — CDS view giao diện dựa trên faac_depr_prf0."
keywords:
  - "depreciation"
  - "profile"
  - "calc"
  - "exact"
  - "date"
  - "depr"
  - "cutoff"
  - "percent"
  - "multiple"
  - "shift"
  - "control"
  - "shutdown"
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
# I_DEPRECIATIONPROFILE

**This CDS view provides all available depreciation profiles. For each depreciation profile, the respective status is provided: Active, Draft, or Blocked. This CDS view provides the data to answer the following business questions: Which depreciation profiles are available in the system? What is the status of the depreciation profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepreciationProfile` | ✓ | |  | `depr_profile` | `CHAR(12)` | Depreciation Profile |
| `DepreciationCalcIsToExactDate` |  | |  | `calc_depr_to_the_day` | `CHAR(1)` | Depreciation Calculation to Exact Day |
| `DeprCalcCutoffPercent` |  | |  | `cutoff_percent` | `DEC(5)` | Cutoff Percentage Rate |
| `DeprCalcMultipleShiftControl` |  | |  | `multiple_shift_control` | `CHAR(1)` | Multiple Shift Control |
| `DeprCalcShutdownControl` |  | |  | `shutdown_control` | `CHAR(1)` | Shutdown Control |
| `DeprCalcScrapValueControl` |  | |  | `scrap_value_control` | `NUMC(1)` | Scrap Value Control: Effect of Scrap Value on Base Value |
| `AssetAcqnIsOnlyInCapznYr` |  | |  | `no_acq_after_cap_year` | `CHAR(1)` | Acquisitions Only Allowed in Fiscal Year of Capitalization |
| `DeprOrdnryIsSkippedIfDeprSpcl` |  | |  | `no_odepr_if_sdepr` | `CHAR(1)` | No Ord. Depreciation with Special Depreciation |
| `DeprCalcShortenedFYControl` |  | |  | `no_depr_reduct_in_short_fy` | `CHAR(1)` | Do not reduce depreciation in shortened fiscal year |
| `DeprPercentRoundedToNrOfDcmls` |  | |  | `depr_percent_decimals` | `NUMC(1)` | Number of Places That Percentage Rate Is Rounded To |
| `DepreciationProfileStatus` |  | |  | `depr_profile_status` | `CHAR(1)` | Depreciation Profile Status |
| `_AccountingPrincipleAssignment` | | ✓ | | | | |
| `_DepreciationProfilePhase` | | ✓ | | | | |
| `_AmountMethod` | | ✓ | | | | |
| `_DepreciationProfileName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingPrincipleAssignment` | `I_DeprProfileAcctgPrncpAssgmt` | [0..*] |
| `_DepreciationProfilePhase` | `I_DeprProfilePhase` | [1..*] |
| `_AmountMethod` | `I_DeprProfileAmtMethodAssgmt` | [0..*] |
| `_DepreciationProfileName` | `I_DepreciationProfileText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONPROFILE')/$value)*

```abap
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Depreciation Profile'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { representativeKey: 'DepreciationProfile',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
              }
@VDM.viewType: #BASIC
@Search.searchable: true
define view entity I_DepreciationProfile
  as select from faac_depr_prf0 as DepreciationProfile
  association [0..*] to I_DeprProfileAcctgPrncpAssgmt as _AccountingPrincipleAssignment on $projection.DepreciationProfile = _AccountingPrincipleAssignment.DepreciationProfile
  association [1..*] to I_DeprProfilePhase            as _DepreciationProfilePhase      on $projection.DepreciationProfile = _DepreciationProfilePhase.DepreciationProfile
  association [0..*] to I_DeprProfileAmtMethodAssgmt  as _AmountMethod                  on $projection.DepreciationProfile = _AmountMethod.DepreciationProfile
  association [1..*] to I_DepreciationProfileText     as _DepreciationProfileName       on $projection.DepreciationProfile = _DepreciationProfileName.DepreciationProfile
{
      @ObjectModel.text.association: '_DepreciationProfileName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key DepreciationProfile.depr_profile               as DepreciationProfile,
      DepreciationProfile.calc_depr_to_the_day       as DepreciationCalcIsToExactDate,
      DepreciationProfile.cutoff_percent             as DeprCalcCutoffPercent,
      DepreciationProfile.multiple_shift_control     as DeprCalcMultipleShiftControl,
      DepreciationProfile.shutdown_control           as DeprCalcShutdownControl,
      DepreciationProfile.scrap_value_control        as DeprCalcScrapValueControl,
      DepreciationProfile.no_acq_after_cap_year      as AssetAcqnIsOnlyInCapznYr,
      DepreciationProfile.no_odepr_if_sdepr          as DeprOrdnryIsSkippedIfDeprSpcl,
      DepreciationProfile.no_depr_reduct_in_short_fy as DeprCalcShortenedFYControl,
      DepreciationProfile.depr_percent_decimals      as DeprPercentRoundedToNrOfDcmls,
      DepreciationProfile.depr_profile_status        as DepreciationProfileStatus,

      // Associations
      _AccountingPrincipleAssignment,
      _DepreciationProfilePhase,
      _AmountMethod,
      _DepreciationProfileName
}
```
