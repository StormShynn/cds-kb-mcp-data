---
name: I_FIXEDASSETFORLEDGER
description: "Fixed AssetFORLEDGER"
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
  - fixed-asset
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETFORLEDGER

**Fixed AssetFORLEDGER**

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
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  | `asset_no` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  | `asset_subno` | `CHAR(4)` | Asset Subnumber |
| `Ledger` | ✓ | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetCapitalizationDate` |  | |  | `capitalization_date` | `DATS(8)` | Asset Capitalization Date |
| `AssetDeactivationDate` |  | |  | `deactivation_date` | `DATS(8)` | Deactivation Date |
| `AcquisitionValueDate` |  | |  | `acquisition_date` | `DATS(8)` | Asset Value Date of the First Posting |
| `FirstAcquisitionFiscalYear` |  | |  | `acquisition_year` | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | |  | `acquisition_period` | `NUMC(3)` | Period in Which First Acquisition Was Posted |
| `LastRevaluationDate` |  | |  | `last_reval_date` | `DATS(8)` | Date of Last Revaluation |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_AssetValuationForLedger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETFORLDGR', preserveKey: true}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fixed Asset for Ledger'
@VDM.viewType: #BASIC
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MASTER,
                modelingPattern: #NONE,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_FixedAssetForLedger
  as select from faat_md_ld

  association [1..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_MasterFixedAsset        as _MasterFixedAsset        on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                              and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [1..1] to I_FixedAsset              as _FixedAsset              on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                              and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                              and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [1..1] to I_Ledger                  as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [0..*] to I_AssetValuationForLedger as _AssetValuationForLedger on  $projection.CompanyCode      = _AssetValuationForLedger.CompanyCode
                                                                              and $projection.MasterFixedAsset = _AssetValuationForLedger.MasterFixedAsset
                                                                              and $projection.FixedAsset       = _AssetValuationForLedger.FixedAsset
                                                                              and $projection.Ledger           = _AssetValuationForLedger.Ledger
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key comp_code           as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key asset_no            as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key asset_subno         as FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key ledger              as Ledger,

      capitalization_date as AssetCapitalizationDate,
      deactivation_date   as AssetDeactivationDate,
      acquisition_date    as AcquisitionValueDate,
      acquisition_year    as FirstAcquisitionFiscalYear,
      acquisition_period  as FirstAcquisitionFiscalPeriod,
      last_reval_date     as LastRevaluationDate,

      /* Associations */
      _CompanyCode,
      _MasterFixedAsset,
      _FixedAsset,
      _Ledger,
      _AssetValuationForLedger
}
```
