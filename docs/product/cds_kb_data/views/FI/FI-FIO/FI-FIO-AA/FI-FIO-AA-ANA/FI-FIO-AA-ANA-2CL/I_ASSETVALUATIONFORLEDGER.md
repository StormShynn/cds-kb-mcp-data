---
name: I_ASSETVALUATIONFORLEDGER
description: "Assetvaluationforledger"
semantic_vi: "View I_ASSETVALUATIONFORLEDGER hiển thị dữ liệu đánh giá tài sản cho các tài khoản sổ cái, cung cấp thông tin về tài sản cố định, khấu hao và ngày đánh giá. Nó được sử dụng để phân tích và báo cáo về giá trị tài sản và khấu hao trên các sổ cái và các khoảng thời gian khác nhau."
keywords:
  - "asset valuation"
  - "tài sản đánh giá"
  - "ledger account"
  - "tài khoản sổ cái"
  - "fixed asset"
  - "tài sản cố định"
  - "depreciation"
  - "khấu hao"
  - "sap fi"
  - "fi-fio-aa-ana-2cl"
  - "finance"
  - "finance lob"
semantic_en: "The I_ASSETVALUATIONFORLEDGER CDS view exposes asset valuation data for ledger accounts, providing information on fixed assets, depreciation, and valuation dates. It is used to analyze and report on asset values and depreciation across different ledgers and time periods."
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
# I_ASSETVALUATIONFORLEDGER

**Assetvaluationforledger**

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
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  |  | `CHAR(4)` | Asset Subnumber |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetRealDepreciationArea` | ✓ | |  | `cast(I_AssetTimeBasedValuation.AssetDepreciationArea as afabe_d)` | `NUMC(2)` | Real depreciation area |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Date Validity Ends |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Date for Beginning of Validity |
| `DepreciationStartDate` |  | |  |  | `DATS(8)` | Depreciation Calculation Start Date |
| `SpecialDeprStartDate` |  | |  |  | `DATS(8)` | Start Date for Special Depreciation |
| `DeprKeyChangeoverYear` |  | |  | `cast(I_AssetValuation.DeprKeyChangeoverYear as fis_umjar)` | `NUMC(4)` | Changeover Year of Depreciation Key |
| `DeprKeyChangeoverPeriod` |  | |  |  | `NUMC(3)` | Changeover Period of Depreciation Key |
| `DepreciationKey` |  | |  |  | `CHAR(4)` | Depreciation Key |
| `InvestmentSupportMeasure` |  | |  | `cast('' as faa_invsl)` | `CHAR(2)` | Investment Support Key |
| `PlannedUsefulLifeInPeriods` |  | |  | `cast(I_AssetTimeBasedValuation.PlannedUsefulLifeInPeriods as fis_ndper)` | `NUMC(3)` | Planned Useful Life in Periods |
| `PlannedUsefulLifeInYears` |  | |  | `cast(I_AssetTimeBasedValuation.PlannedUsefulLifeInYears as fis_ndjar)` | `NUMC(3)` | Planned Useful Life in Years |
| `VintageYear` |  | |  | `cast('0000' as fis_vyear)` | `NUMC(4)` | Acquisition Year |
| `VintageMonth` |  | |  | `cast('000' as fis_vmnth)` | `NUMC(3)` | Acquisition Month |
| `OriglAstUsefulLifeInPerds` |  | |  | `cast('000' as fis_ndurp)` | `NUMC(3)` | Original Useful Life in Periods |
| `OriglAstUsefulLifeInYears` |  | |  | `cast('000' as ndurj)` | `NUMC(3)` | Original Useful Life in Years |
| `ReplacementValueIndexSers` |  | |  |  | `CHAR(5)` | Index Series for Replacement Values |
| `RplcmtValueAgingIndexSers` |  | |  | `cast(I_AssetValuation.RplcmtValueAgingIndexSers as fis_alind)` | `CHAR(5)` | Age-Dependent Index Series |
| `AcqnProdnCostScrapPercent` |  | |  |  | `DEC(14)` | Scrap Value as Percentage of APC |
| `VariableDeprPercent` |  | |  |  | `DEC(7)` | Variable Depreciation Portion |
| `ShiftOperationFactor` |  | |  |  | `DEC(3)` | Multiple-Shift Factor for Multiple Shift Operation |
| `IsShutDown` |  | |  |  | `CHAR(1)` | Asset Shutdown |
| `DeprCalcBaseValuePercent` |  | |  |  | `DEC(16)` | Base Value Percentage |
| `LastRetirementValueDate` |  | |  |  | `DATS(8)` | Value date of last retirement for the depreciation area |
| `DepreciationAreaType` |  | |  |  | `CHAR(1)` | Calculation View Type |
| `ScrapAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Scrap Value in Company Code Currency |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `AssetOpgReadinessDate` |  | |  |  | `DATS(8)` | Asset Accounting:  Date of Operating Readiness |
| `FixedAssetUsageObject` |  | |  |  | `NUMC(12)` | Usage Object |
| `AssetRevaluationIndex` |  | |  |  | `CHAR(10)` | Asset Revaluation: Index ID |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_DepreciationArea` | | ✓ | | | | |
| `_ReplacementValueIndexSers` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FixedAssetUsageObject` | | ✓ | | | | |
| `_AssetRevaluationIndex` | | ✓ | | | | |
| `_ScrapAmount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_DepreciationArea` | `I_DepreciationAreaForLedger` | [0..1] |
| `_ReplacementValueIndexSers` | `I_ReplacementValueIndexSers` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_FixedAssetUsageObject` | `I_FixedAssetUsageObject` | [0..1] |
| `_AssetRevaluationIndex` | `I_AssetRevaluationIndex` | [0..1] |
| `_ScrapAmount` | `I_AssetValuationScrapAmount` | [1..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASTVALFORLDGR', preserveKey: true, compiler.compareFilter: true}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fixed Asset Valuation for Ledger'
@VDM.viewType: #COMPOSITE
@ObjectModel: { usageType.serviceQuality: #C,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MASTER,
                modelingPattern: #NONE,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetValuationForLedger
  as select from I_AssetTimeBasedValuation
    inner join   I_AssetValuation on  I_AssetValuation.CompanyCode           = I_AssetTimeBasedValuation.CompanyCode
                                  and I_AssetValuation.MasterFixedAsset      = I_AssetTimeBasedValuation.MasterFixedAsset
                                  and I_AssetValuation.FixedAsset            = I_AssetTimeBasedValuation.FixedAsset
                                  and I_AssetValuation.Ledger                = I_AssetTimeBasedValuation.Ledger
                                  and I_AssetValuation.AssetDepreciationArea = I_AssetTimeBasedValuation.AssetDepreciationArea

  association [1..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_MasterFixedAsset          as _MasterFixedAsset          on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                  and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [1..1] to I_FixedAsset                as _FixedAsset                on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                  and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                  and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [1..1] to I_Ledger                    as _Ledger                    on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_DepreciationAreaForLedger as _DepreciationArea          on  $projection.CompanyCode               = _DepreciationArea.CompanyCode
                                                                                  and $projection.Ledger                    = _DepreciationArea.Ledger
                                                                                  and $projection.AssetRealDepreciationArea = _DepreciationArea.AssetDepreciationArea
  association [0..1] to I_ReplacementValueIndexSers as _ReplacementValueIndexSers on  $projection.ReplacementValueIndexSers = _ReplacementValueIndexSers.ReplacementValueIndexSers
  association [0..1] to I_Currency                  as _CompanyCodeCurrency       on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_FixedAssetUsageObject     as _FixedAssetUsageObject     on  $projection.CompanyCode           = _FixedAssetUsageObject.CompanyCode
                                                                                  and $projection.FixedAssetUsageObject = _FixedAssetUsageObject.FixedAssetUsageObject
  association [0..1] to I_AssetRevaluationIndex     as _AssetRevaluationIndex     on  $projection.AssetRevaluationIndex = _AssetRevaluationIndex.AssetRevaluationIndex
  association [1..1] to I_AssetValuationScrapAmount as _ScrapAmount               on  $projection.CompanyCode               = _ScrapAmount.CompanyCode
                                                                                  and $projection.MasterFixedAsset          = _ScrapAmount.MasterFixedAsset
                                                                                  and $projection.FixedAsset                = _ScrapAmount.FixedAsset
                                                                                  and $projection.Ledger                    = _ScrapAmount.Ledger
                                                                                  and $projection.AssetRealDepreciationArea = _ScrapAmount.AssetRealDepreciationArea
                                                                                  and $projection.ValidityEndDate           = _ScrapAmount.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_AssetTimeBasedValuation.CompanyCode                                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key I_AssetTimeBasedValuation.MasterFixedAsset                              as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key I_AssetTimeBasedValuation.FixedAsset                                    as FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key I_AssetTimeBasedValuation.Ledger                                        as Ledger,
      @ObjectModel.foreignKey.association: '_DepreciationArea'
  key cast(I_AssetTimeBasedValuation.AssetDepreciationArea as afabe_d)        as AssetRealDepreciationArea,
  key I_AssetTimeBasedValuation.ValidityEndDate                               as ValidityEndDate,

      I_AssetTimeBasedValuation.ValidityStartDate                             as ValidityStartDate,
      I_AssetValuation.DepreciationStartDate                                  as DepreciationStartDate,
      I_AssetValuation.SpecialDeprStartDate                                   as SpecialDeprStartDate,
      cast(I_AssetValuation.DeprKeyChangeoverYear as fis_umjar)               as DeprKeyChangeoverYear,
      I_AssetValuation.DeprKeyChangeoverPeriod                                as DeprKeyChangeoverPeriod,
      I_AssetTimeBasedValuation.DepreciationKey                               as DepreciationKey,
      cast('' as faa_invsl)                                                   as InvestmentSupportMeasure, //Not supported with active BF
      cast(I_AssetTimeBasedValuation.PlannedUsefulLifeInPeriods as fis_ndper) as PlannedUsefulLifeInPeriods,
      cast(I_AssetTimeBasedValuation.PlannedUsefulLifeInYears as fis_ndjar)   as PlannedUsefulLifeInYears,
      cast('0000' as fis_vyear)                                               as VintageYear, //Not supported with active BF
      cast('000' as fis_vmnth)                                                as VintageMonth, //Not supported with active BF
      cast('000' as fis_ndurp)                                                as OriglAstUsefulLifeInPerds, //Not supported with active BF
      cast('000' as ndurj)                                                    as OriglAstUsefulLifeInYears, //Not supported with active BF
      @ObjectModel.foreignKey.association: '_ReplacementValueIndexSers'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'AssetRevaluationIndex'
      @VDM.lifecycle: {status: #DEPRECATED}
      @VDM.lifecycle.successor: 'AssetRevaluationIndex'
      I_AssetValuation.ReplacementValueIndexSers                              as ReplacementValueIndexSers,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'AssetRevaluationIndex'
      @VDM.lifecycle: {status: #DEPRECATED}
      @VDM.lifecycle.successor: 'AssetRevaluationIndex'
      cast(I_AssetValuation.RplcmtValueAgingIndexSers as fis_alind)           as RplcmtValueAgingIndexSers,
      I_AssetTimeBasedValuation.AcqnProdnCostScrapPercent                     as AcqnProdnCostScrapPercent,
      I_AssetTimeBasedValuation.VariableDeprPercent                           as VariableDeprPercent,
      I_AssetTimeBasedValuation.ShiftOperationFactor                          as ShiftOperationFactor,
      I_AssetTimeBasedValuation.IsShutDown                                    as IsShutDown,
      I_AssetTimeBasedValuation.DeprCalcBaseValuePercent                      as DeprCalcBaseValuePercent,
      I_AssetValuation.LastRetirementValueDate                                as LastRetirementValueDate,
      I_AssetValuation.DepreciationAreaType                                   as DepreciationAreaType,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      I_AssetTimeBasedValuation.ScrapAmountInCoCodeCrcy                       as ScrapAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                   as CompanyCodeCurrency,
      I_AssetValuation.AssetOpgReadinessDate                                  as AssetOpgReadinessDate,
      @ObjectModel.foreignKey.association: '_FixedAssetUsageObject'
      I_AssetTimeBasedValuation.FixedAssetUsageObject                         as FixedAssetUsageObject,
      @ObjectModel.foreignKey.association: '_AssetRevaluationIndex'
      I_AssetTimeBasedValuation.AssetRevaluationIndex                         as AssetRevaluationIndex,

      /* Associations */
      _CompanyCode,
      _MasterFixedAsset,
      _FixedAsset,
      _Ledger,
      _DepreciationArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_AssetRevaluationIndex'      
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_FixedAssetRevaluationIndex'
      _ReplacementValueIndexSers,
      _CompanyCodeCurrency,
      _FixedAssetUsageObject,
      _AssetRevaluationIndex,
      _ScrapAmount
}
```
