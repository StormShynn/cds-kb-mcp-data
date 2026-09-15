---
name: I_COSTINGVARIANTSTDVH
description: "Costingvariantstdvh"
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
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGVARIANTSTDVH

**Costingvariantstdvh**

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
| `CostingVariant` | ✓ | |  |  | `CHAR(4)` | Costing Variant |
| `CostingVariantName` |  | | `_CostingVariantText` | `CostingVariantName` | `CHAR(25)` | Name for Costing Variant |
| `ValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `ValuationVariantName` |  | | `_CostingValuationVarText` | `ValuationVariantName` | `CHAR(25)` | Valuation Variant Name |
| `CostingType` |  | |  |  | `CHAR(2)` | Costing Type |
| `CostingReferenceObject` |  | |  |  | `CHAR(1)` | Reference Object |
| `_CostingVariantText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingVariantText` | `I_CostingVariantText` | [0..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostingVariant',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Costing Variant'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_CostingVariantStdVH
  as select from I_CostingVariant
  association [0..1] to I_CostingVariantText      as _CostingVariantText      on  _CostingVariantText.CostingVariant = $projection.CostingVariant
                                                                              and _CostingVariantText.Language       = $session.system_language
  association [0..1] to I_CostingValuationVarText as _CostingValuationVarText on  _CostingValuationVarText.ValuationVariant = $projection.ValuationVariant
                                                                              and _CostingValuationVarText.Language         = $session.system_language

{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostingVariant,
      @Search.defaultSearchElement: true
      _CostingVariantText.CostingVariantName as CostingVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      ValuationVariant,
      _CostingValuationVarText.ValuationVariantName as ValuationVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
      CostingType,
      CostingReferenceObject,

      _CostingVariantText

}
```
