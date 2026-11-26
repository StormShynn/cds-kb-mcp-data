---
name: I_MASTERFIXEDASSET
description: "MASTERFixed Asset"
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
# I_MASTERFIXEDASSET

**MASTERFixed Asset**

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
| `MasterFixedAssetDescription` |  | |  | `cast(main.description as anlhtxt)` | `CHAR(50)` | Asset Main Number Text |
| `AssetAuthorizationContext` |  | |  | `cast('NEW' as faa_authcntxt)` | `CHAR(10)` | Asset Authorization Context |
| `_CompanyCode` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FixedAsset` | `I_FixedAsset` | [1..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIMASTFIXASSET', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Master Fixed Asset'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { representativeKey: 'MasterFixedAsset',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #XL,
                usageType.dataClass: #MASTER,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view I_MasterFixedAsset
  as select from           faat_md_root as root
    left outer to one join faat_md      as main on  main.comp_code   = root.comp_code
                                                and main.asset_no    = root.asset_no
                                                and main.asset_subno = root.asset_subno

  association [1..1] to I_CompanyCode as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..*] to I_FixedAsset  as _FixedAsset  on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                      and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
  key root.comp_code                    as CompanyCode,
      @ObjectModel.text.element:  [ 'MasterFixedAssetDescription' ]
  key root.asset_no                     as MasterFixedAsset,

      @Semantics.text: true
      cast(main.description as anlhtxt) as MasterFixedAssetDescription,

      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast('NEW' as  faa_authcntxt)     as AssetAuthorizationContext, //Needed for DCL

      _CompanyCode,
      _FixedAsset
}
where
      root.is_main_asset    =  'X'
  and root.lifecycle_status <> '2'
  and root.lifecycle_status <> '8'
```
