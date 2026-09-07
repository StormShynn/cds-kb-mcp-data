---
name: I_LGLCNTNTMRNWLTERMNCLAUSET
description: "Lglcntntmrnwltermnclauset"
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
# I_LGLCNTNTMRNWLTERMNCLAUSET

**Lglcntntmrnwltermnclauset**

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
| `LglCntntMClauseID` | ✓ | |  | `lglcntntmclauseid` | `NUMC(4)` | Clause ID |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `LglCntntMRnwlTermnClauseName` |  | |  | `lglcntntmclausename` | `CHAR(40)` | Long Text |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMRNWLTCLAUSET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMClauseID',
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

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@Search.searchable: true

@EndUserText.label: 'Renewal Termination Clause - Text'

define view I_LglCntntMRnwlTermnClauseT
  as select from lcm_crnwtrmclst
{
  key lglcntntmclauseid as LglCntntMClauseID,
      @Semantics.language: true
  key language          as Language,
  
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  lglcntntmclausename as LglCntntMRnwlTermnClauseName

}
```
