---
name: I_COSTORIGINGROUPTEXT
description: "Costorigingrouptext"
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
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTORIGINGROUPTEXT

**Costorigingrouptext**

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
| `CostOriginGroup` | ✓ | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CostOriginType` | ✓ | |  | `koaty` | `CHAR(2)` | Origin Type |
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CostOriginGroupName` |  | |  | `hrktx` | `CHAR(40)` | Name |
| `_Language` | | ✓ | | | | |
| `_CostOriginType` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CostOriginType` | `I_CostOriginType` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Origin Group - Text'
@AbapCatalog.sqlViewName: 'IFICOSTORIGROUPT'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #EXTRACTION_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #LANGUAGE_DEPENDENT_TEXT
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING
  },
  representativeKey: 'CostOriginGroup'
}

@Metadata.ignorePropagatedAnnotations: true

define view I_CostOriginGroupText
  as select from tkkh2
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_CostOriginType  as _CostOriginType  on $projection.CostOriginType = _CostOriginType.CostOriginType
  association [0..1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
{
  key hrkft                                      as CostOriginGroup,
      @ObjectModel.foreignKey.association: '_CostOriginType'
  key koaty                                      as CostOriginType,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language' 
  key spras                                      as Language,
      @Semantics.text
      hrktx                                      as CostOriginGroupName,

      _Language,
      _ControllingArea,
      _CostOriginType
};
```
