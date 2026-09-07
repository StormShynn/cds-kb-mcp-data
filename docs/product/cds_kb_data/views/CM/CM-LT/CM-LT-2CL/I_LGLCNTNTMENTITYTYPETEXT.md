---
name: I_LGLCNTNTMENTITYTYPETEXT
description: "Lglcntntmentitytypetext"
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
  - text-view
  - text
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLCNTNTMENTITYTYPETEXT

**Lglcntntmentitytypetext**

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
| `LglCntntMEntityType` | ✓ | |  |  | `CHAR(4)` | Entity Type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `LglCntntMEntityTypeName` |  | |  |  | `CHAR(40)` | Long Text |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMENTITYTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMEntityType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass:  #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Entity Type - Text'

define view I_LglCntntMEntityTypeText
  as select from I_LCMEntityTypeText
{
  key LglCntntMEntityType,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      LglCntntMEntityTypeName
}
```
