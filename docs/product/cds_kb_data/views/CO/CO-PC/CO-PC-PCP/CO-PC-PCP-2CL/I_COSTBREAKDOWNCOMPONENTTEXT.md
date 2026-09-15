---
name: I_COSTBREAKDOWNCOMPONENTTEXT
description: "Costbreakdowncomponenttext"
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
# I_COSTBREAKDOWNCOMPONENTTEXT

**Costbreakdowncomponenttext**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CostBreakdownStructure` | ✓ | |  | `cost_comp_struc` | `CHAR(2)` | Cost Breakdown Structure |
| `CostBreakdownComponent` | ✓ | |  | `cost_component` | `CHAR(10)` | Cost Breakdown Component |
| `CostBreakdownComponentName` |  | |  | `name` | `CHAR(30)` | Cost Breakdown Component Name |
| `_Structure` | | ✓ | | | | |
| `_Component` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Structure` | `I_CostBreakdownStructure` | [1..1] |
| `_Component` | `I_CostBreakdownComponent` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Breakdown Component - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownComponent',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [
        #CDS_MODELING_ASSOCIATION_TARGET,
        #LANGUAGE_DEPENDENT_TEXT ]
}

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CostBreakdownComponentText
  as select from fucbc_cost_compt

  association [1..1] to I_CostBreakdownStructure as _Structure on  $projection.CostBreakdownStructure = _Structure.CostBreakdownStructure
  association [1..1] to I_CostBreakdownComponent as _Component on  $projection.CostBreakdownStructure = _Component.CostBreakdownStructure
                                                               and $projection.CostBreakdownComponent = _Component.CostBreakdownComponent
  association [0..1] to I_Language               as _Language  on  $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu           as Language,
      @ObjectModel.foreignKey.association: '_Structure'
  key cost_comp_struc as CostBreakdownStructure,
      @ObjectModel.foreignKey.association: '_Component'
      @ObjectModel.text.element:['CostBreakdownComponentName']
      @Search.defaultSearchElement: true
      @Search.ranking:#LOW
  key cost_component  as CostBreakdownComponent,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#HIGH
      @Semantics.text: true
      name            as CostBreakdownComponentName,

      _Structure,
      _Component,
      _Language
}
```
