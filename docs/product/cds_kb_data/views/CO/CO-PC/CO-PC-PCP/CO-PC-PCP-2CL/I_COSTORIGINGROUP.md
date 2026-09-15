---
name: I_COSTORIGINGROUP
description: "Costorigingroup"
app_component: CO-PC-PCP-2CL
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
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTORIGINGROUP

**Costorigingroup**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
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
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `CostOriginType` | ✓ | |  | `koaty` | `CHAR(2)` | Origin Type |
| `CostOriginGroup` | ✓ | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostOriginType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostOriginGroupText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostOriginType` | `I_CostOriginType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Origin Group'
@AbapCatalog.sqlViewName: 'IFICOSTORIGROUP'
@VDM.viewType: #BASIC
@Analytics: { 
  dataCategory: #DIMENSION, 
  dataExtraction.enabled: true 
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'CostOriginGroup',
  sapObjectNodeType.name: 'CostOriginGroup',
  supportedCapabilities: [ 
    #EXTRACTION_DATA_SOURCE, 
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE 
  ],
  modelingPattern: #ANALYTICAL_DIMENSION,
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S 
  }
}

@Search.searchable: true

@Metadata: { 
  allowExtensions: true,
  ignorePropagatedAnnotations: true 
}

define view I_CostOriginGroup
  as select from tkkh1

  association [0..*] to I_CostOriginGroupText as _Text            on  $projection.ControllingArea = _Text.ControllingArea
                                                                  and $projection.CostOriginGroup = _Text.CostOriginGroup
                                                                  and $projection.CostOriginType  = _Text.CostOriginType

  association [0..1] to I_ControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CostOriginType      as _CostOriginType  on  $projection.CostOriginType = _CostOriginType.CostOriginType


{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_CostOriginType'
  key koaty                                      as CostOriginType,
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key hrkft                                      as CostOriginGroup,

      _Text,
      _ControllingArea,
      _CostOriginType
};
```
