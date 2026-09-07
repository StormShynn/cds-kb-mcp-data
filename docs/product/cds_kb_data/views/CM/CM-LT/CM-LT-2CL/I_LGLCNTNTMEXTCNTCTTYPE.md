---
name: I_LGLCNTNTMEXTCNTCTTYPE
description: "Lglcntntmextcntcttype"
app_component: CM-LT-2CL
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
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLCNTNTMEXTCNTCTTYPE

**Lglcntntmextcntcttype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
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
| `LglCntntMExtCntctType` | ✓ | |  |  | `CHAR(4)` | External context type |
| `_LglCntntMExtCntctTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMExtCntctTypeText` | `I_LglCntntMExtCntctTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMEXTCONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMExtCntctType',
  sapObjectNodeType.name: 'LegalExternalContactType',
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

@EndUserText.label: 'External Contact Type'
define view I_LglCntntMExtCntctType
  as select from I_LCMExtContactType
  association [0..*] to I_LglCntntMExtCntctTypeText as _LglCntntMExtCntctTypeText on $projection.LglCntntMExtCntctType = _LglCntntMExtCntctTypeText.LglCntntMExtCntctType
{
      @ObjectModel.text.association: '_LglCntntMExtCntctTypeText'
  key LglCntntMExtCntctType,

      _LglCntntMExtCntctTypeText
}
```
