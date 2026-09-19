---
name: I_DUNNINGAREA
description: "Dunningarea"
app_component: FI-AR-AR-C-2CL
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
  - FI-AR
  - FI-AR-AR
  - interface-view
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGAREA

**Dunningarea**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
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
| `CompanyCode` | ✓ | |  | `cast(bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `DunningArea` | ✓ | |  | `cast(maber as farp_maber preserving type)` | `CHAR(2)` | Dunning Area |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Text` | `I_DunningAreaText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK  //authority check is wrong, for compatibility reasons DCL remains but is always true
@EndUserText.label: 'Dunning Area'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFIDUNAREA'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.representativeKey: 'DunningArea'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view I_DunningArea
  as select from t047m
  association [1..1] to I_CompanyCode     as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_DunningAreaText as _Text        on  $projection.CompanyCode = _Text.CompanyCode
                                                          and $projection.DunningArea = _Text.DunningArea
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type)  as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key cast(maber as farp_maber preserving type) as DunningArea,
      _CompanyCode,
      _Text

};
```
