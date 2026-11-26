---
name: I_ASSETVALUATIONSCRAPAMOUNT
description: "Assetvaluationscrapamount"
semantic_vi: "View I_ASSETVALUATIONSCRAPAMOUNT CDS hiển thị số lượng rác cho tài sản định giá, cung cấp dữ liệu về tỷ lệ rác và số lượng rác trong đồng tiền của công ty. Nó được sử dụng để phân tích và tính toán giá trị rác cho tài sản."
keywords:
  - "asset valuation"
  - "scrap amount"
  - "fixed asset"
  - "company code currency"
  - "fi"
  - "fi-fio-aa-ana-2cl"
  - "tài sản định giá"
  - "số lượng rác"
  - "đồng tiền công ty"
semantic_en: "The I_ASSETVALUATIONSCRAPAMOUNT CDS view exposes asset valuation scrap amounts for fixed assets, providing data on scrap percentages and amounts in company code currency. It is used to analyze and calculate scrap values for assets."
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
# I_ASSETVALUATIONSCRAPAMOUNT

**Assetvaluationscrapamount**

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
| `AssetRealDepreciationArea` | ✓ | |  |  | `NUMC(2)` | Real depreciation area |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Date Validity Ends |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Date for Beginning of Validity |
| `AcqnProdnCostScrapPercent` |  | |  |  | `DEC(14)` | Scrap Value as Percentage of APC |
| `ScrapAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Scrap Value in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ScrapAmountInGlobCrcy` |  | |  |  | `CURR(23)` | Scrap Value in Global Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `ScrapAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 1 |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `ScrapAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 2 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `ScrapAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 3 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `ScrapAmountInFreeDefinedCrcy4` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 4 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `ScrapAmountInFreeDefinedCrcy5` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 5 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `ScrapAmountInFreeDefinedCrcy6` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 6 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `ScrapAmountInFreeDefinedCrcy7` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 7 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `ScrapAmountInFreeDefinedCrcy8` |  | |  |  | `CURR(23)` | Scrap Value in Freely Defined Currency 8 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetValuationForLedger` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_DepreciationArea` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_DepreciationArea` | `I_DepreciationAreaForLedger` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fixed Asset Valuation Scrap Values'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #S,
    usageType.dataClass: #MASTER,
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

define view entity I_AssetValuationScrapAmount
  as select from P_AssetValuationScrapAmount
  association [1..1] to I_CompanyCode               as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_MasterFixedAsset          as _MasterFixedAsset        on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [1..1] to I_FixedAsset                as _FixedAsset              on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [1..1] to I_AssetValuationForLedger   as _AssetValuationForLedger on  $projection.CompanyCode               = _AssetValuationForLedger.CompanyCode
                                                                                and $projection.MasterFixedAsset          = _AssetValuationForLedger.MasterFixedAsset
                                                                                and $projection.FixedAsset                = _AssetValuationForLedger.FixedAsset
                                                                                and $projection.Ledger                    = _AssetValuationForLedger.Ledger
                                                                                and $projection.AssetRealDepreciationArea = _AssetValuationForLedger.AssetRealDepreciationArea
                                                                                and $projection.ValidityEndDate           = _AssetValuationForLedger.ValidityEndDate
  association [1..1] to I_Ledger                    as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_DepreciationAreaForLedger as _DepreciationArea        on  $projection.CompanyCode               = _DepreciationArea.CompanyCode
                                                                                and $projection.Ledger                    = _DepreciationArea.Ledger
                                                                                and $projection.AssetRealDepreciationArea = _DepreciationArea.AssetDepreciationArea
  association [0..1] to I_Currency                  as _CompanyCodeCurrency     on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                  as _GlobalCurrency          on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency1    on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency2    on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency3    on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency4    on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency5    on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency6    on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency7    on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1] to I_Currency                  as _FreeDefinedCurrency8    on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key MasterFixedAsset              as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key FixedAsset                    as FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger                        as Ledger,
      @ObjectModel.foreignKey.association: '_DepreciationArea'
  key AssetRealDepreciationArea     as AssetRealDepreciationArea,
  key ValidityEndDate               as ValidityEndDate,
      ValidityStartDate             as ValidityStartDate,
      AcqnProdnCostScrapPercent     as AcqnProdnCostScrapPercent,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      ScrapAmountInCoCodeCrcy       as ScrapAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency           as CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ScrapAmountInGlobCrcy         as ScrapAmountInGlobCrcy,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      GlobalCurrency                as GlobalCurrency,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
      ScrapAmountInFreeDefinedCrcy1 as ScrapAmountInFreeDefinedCrcy1,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      FreeDefinedCurrency1          as FreeDefinedCurrency1,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
      ScrapAmountInFreeDefinedCrcy2 as ScrapAmountInFreeDefinedCrcy2,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      FreeDefinedCurrency2          as FreeDefinedCurrency2,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
      ScrapAmountInFreeDefinedCrcy3 as ScrapAmountInFreeDefinedCrcy3,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      FreeDefinedCurrency3          as FreeDefinedCurrency3,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
      ScrapAmountInFreeDefinedCrcy4 as ScrapAmountInFreeDefinedCrcy4,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      FreeDefinedCurrency4          as FreeDefinedCurrency4,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
      ScrapAmountInFreeDefinedCrcy5 as ScrapAmountInFreeDefinedCrcy5,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      FreeDefinedCurrency5          as FreeDefinedCurrency5,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
      ScrapAmountInFreeDefinedCrcy6 as ScrapAmountInFreeDefinedCrcy6,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      FreeDefinedCurrency6          as FreeDefinedCurrency6,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
      ScrapAmountInFreeDefinedCrcy7 as ScrapAmountInFreeDefinedCrcy7,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      FreeDefinedCurrency7          as FreeDefinedCurrency7,
      @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
      ScrapAmountInFreeDefinedCrcy8 as ScrapAmountInFreeDefinedCrcy8,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      FreeDefinedCurrency8          as FreeDefinedCurrency8,

      /* Associations */
      _CompanyCode,
      _MasterFixedAsset,
      _FixedAsset,
      _AssetValuationForLedger,
      _Ledger,
      _DepreciationArea,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8
}
```
