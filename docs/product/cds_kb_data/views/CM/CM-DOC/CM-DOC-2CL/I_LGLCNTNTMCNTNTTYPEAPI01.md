---
name: I_LGLCNTNTMCNTNTTYPEAPI01
description: "Lglcntntmcntnttypeapi 01"
app_component: CM-DOC-2CL
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
  - CM-DOC
  - interface-view
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LGLCNTNTMCNTNTTYPEAPI01

**Lglcntntmcntnttypeapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
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
| `LglCntntMDocContentType` | ✓ | |  |  | `CHAR(4)` | Document Content Type |
| `_LglCntntMCntntTypeTxtAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMCntntTypeTxtAPI01` | `I_LglCntntMCntntTypeTxtAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMCNTTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'LglCntntMDocContentType',
  sapObjectNodeType.name: 'LegalContentType',
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
@EndUserText.label: 'Document Content Type'

define view I_LglCntntMCntntTypeAPI01
  as select from I_LglCntntMDocContentType
  association [0..*] to I_LglCntntMCntntTypeTxtAPI01 as _LglCntntMCntntTypeTxtAPI01 on $projection.LglCntntMDocContentType = _LglCntntMCntntTypeTxtAPI01.LglCntntMDocContentType
{
      @ObjectModel.text.association: '_LglCntntMCntntTypeTxtAPI01'
  key LglCntntMDocContentType,

      _LglCntntMCntntTypeTxtAPI01
}
```
