---
name: I_LGLCNTNTMACCESSLVLAPI01
description: "Lglcntntmaccesslvlapi 01"
app_component: CM-GF-2CL
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
  - CM
  - CM-GF
  - interface-view
  - component:CM-GF-2CL
  - lob:Other
---
# I_LGLCNTNTMACCESSLVLAPI01

**Lglcntntmaccesslvlapi 01**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
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
| `LglCntntMAccessLvl` | ✓ | |  |  | `CHAR(4)` | Access Level |
| `_LglCntntMAccessLvlTextAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMAccessLvlTextAPI01` | `I_LglCntntMAccessLvlTextAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMACCLVL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'LglCntntMAccessLvl',
  sapObjectNodeType.name: 'LegalAccessLevel',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass:  #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@ObjectModel.modelingPattern: #NONE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Access Level'

define view I_LglCntntMAccessLvlAPI01
  as select from I_LglCntntMAccessLvl
  association [0..*] to I_LglCntntMAccessLvlTextAPI01 as _LglCntntMAccessLvlTextAPI01 on $projection.LglCntntMAccessLvl = _LglCntntMAccessLvlTextAPI01.LglCntntMAccessLvl
{
      @ObjectModel.text.association: '_LglCntntMAccessLvlTextAPI01'
  key LglCntntMAccessLvl,

      _LglCntntMAccessLvlTextAPI01
}
```
