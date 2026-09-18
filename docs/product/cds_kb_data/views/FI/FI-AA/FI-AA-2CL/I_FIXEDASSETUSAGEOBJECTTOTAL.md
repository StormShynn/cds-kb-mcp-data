---
name: I_FIXEDASSETUSAGEOBJECTTOTAL
description: "Fixed AssetUSAGEOBJECTTOTAL"
app_component: FI-AA-2CL
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
  - interface-view
  - fixed-asset
  - component:FI-AA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETUSAGEOBJECTTOTAL

**Fixed AssetUSAGEOBJECTTOTAL**

| Property | Value |
|---|---|
| App Component | `FI-AA-2CL` |
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
| `FixedAssetUsageObject` | ✓ | |  | `usage_object` | `NUMC(12)` | Usage Object |
| `FixedAssetUsageObjectDeprArea` | ✓ | |  | `depr_area` | `CHAR(2)` | Depreciation Area (incl. Generic Entry) |
| `ValidityEndDate` | ✓ | |  | `valid_to_date` | `DATS(8)` | Date Validity Ends |
| `ValidityStartDate` |  | |  | `valid_from_date` | `DATS(8)` | Date for Beginning of Validity |
| `CapacityInProductionUnit` |  | |  | `total_units` | `QUAN(18)` | Total Number of Units |
| `BaseUnit` |  | | `_UsageObject` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `_UsageObject` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UsageObject` | `I_FixedAssetUsageObject` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIXASSETUOTOTAL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Total Units of Fixed Asset Usage Object'

@VDM.viewType: #BASIC
@ObjectModel.usageType: {
        serviceQuality: #A,
        sizeCategory: #XL,
        dataClass: #MASTER
}

@ObjectModel:{
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view I_FixedAssetUsageObjectTotal
  as select from faat_uo_total as UsageObjectTotal
  association [1..1] to I_FixedAssetUsageObject as _UsageObject on  $projection.CompanyCode           = _UsageObject.CompanyCode
                                                                and $projection.FixedAssetUsageObject = _UsageObject.FixedAssetUsageObject

  association [0..1] to I_CompanyCode           as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode


{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key comp_code       as CompanyCode,

      @ObjectModel.foreignKey.association: '_UsageObject'
  key usage_object    as FixedAssetUsageObject,

      @EndUserText.label: 'Depreciation Area'
  key depr_area       as FixedAssetUsageObjectDeprArea,

  key valid_to_date   as ValidityEndDate,

      valid_from_date as ValidityStartDate,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @EndUserText.label: 'Total Units Expected as of This Period'
      total_units     as CapacityInProductionUnit,

      @Semantics.unitOfMeasure: true
      _UsageObject.BaseUnit,

      _CompanyCode,

      _UsageObject._UnitOfMeasure,

      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
      _UsageObject
}
```
