---
name: I_COSTBREAKDOWNCOMPONENT
description: "Costbreakdowncomponent"
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
# I_COSTBREAKDOWNCOMPONENT

**Costbreakdowncomponent**

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
| `CostBreakdownStructure` | ✓ | |  |  | `CHAR(2)` | Cost Breakdown Structure |
| `CostBreakdownComponent` | ✓ | |  |  | `CHAR(10)` | Cost Breakdown Component |
| `CostBreakdownComponentSequence` |  | |  |  | `NUMC(4)` | Cost Breakdown Component Sequence |
| `IncludeInInventory` |  | |  |  | `CHAR(1)` | Include in Inventory |
| `IncludeInCOGS` |  | |  |  | `CHAR(1)` | Include in Cost of Goods Sold |
| `_Structure` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostBreakdownStructureText` | | ✓ | | | | |
| `_CostComponentHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Structure` | `I_CostBreakdownStructure` | [1..1] |
| `_Text` | `I_CostBreakdownComponentText` | [0..*] |
| `_CostBreakdownStructureText` | `I_CostBreakdownStructureText` | [0..*] |
| `_CostComponentHierarchyNode` | `I_CostComponentHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Breakdown Component'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    modelingPattern: #NONE,
    representativeKey: 'CostBreakdownComponent',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
    },
    supportedCapabilities: [
        #ANALYTICAL_DIMENSION,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #CDS_MODELING_DATA_SOURCE,
        #SQL_DATA_SOURCE ]
}

@VDM.viewType: #BASIC

define view entity I_CostBreakdownComponent
  as select from P_FUCBC_COST_COMP

  association [1..1] to I_CostBreakdownStructure     as _Structure                  on  $projection.CostBreakdownStructure = _Structure.CostBreakdownStructure
  association [0..*] to I_CostBreakdownComponentText as _Text                       on  $projection.CostBreakdownStructure = _Text.CostBreakdownStructure
                                                                                    and $projection.CostBreakdownComponent = _Text.CostBreakdownComponent
  association [0..*] to I_CostBreakdownStructureText as _CostBreakdownStructureText on  $projection.CostBreakdownStructure = _CostBreakdownStructureText.CostBreakdownStructure
  association [0..*] to I_CostComponentHierarchyNode as _CostComponentHierarchyNode on  $projection.CostBreakdownStructure = _CostComponentHierarchyNode.CostBreakdownStructure
                                                                                    and $projection.CostBreakdownComponent = _CostComponentHierarchyNode.CostBreakdownComponent

{
      @ObjectModel.foreignKey.association: '_Structure'
      @ObjectModel.text.association: '_CostBreakdownStructureText'
  key CostBreakdownStructure,
      @ObjectModel.hierarchy.association: '_CostComponentHierarchyNode'
      @ObjectModel.text.association: '_Text'
  key CostBreakdownComponent,

      CostBreakdownComponentSequence,

      IncludeInInventory,
      IncludeInCOGS,

      _Structure,
      _Text,
      _CostBreakdownStructureText,
      _CostComponentHierarchyNode
}
```
