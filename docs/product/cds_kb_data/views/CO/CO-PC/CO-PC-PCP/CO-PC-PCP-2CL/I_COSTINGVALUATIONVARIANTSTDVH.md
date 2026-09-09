---
name: I_COSTINGVALUATIONVARIANTSTDVH
description: "Costingvaluationvariantstdvh"
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
# I_COSTINGVALUATIONVARIANTSTDVH

**Costingvaluationvariantstdvh**

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
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `ValuationVariantName` |  | | `_CostingValuationVarText` | `ValuationVariantName` | `CHAR(25)` | Valuation Variant Name |
| `OverheadCostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet for Calculating Overhead |
| `OverheadCostingSheetDesc` |  | |  | `cast(_CostingSheetText.CostingSheetProcedureDesc as fpc_costing_sheet_description preserving type)` | `CHAR(30)` | Description of Costing Sheet |
| `ExtProcuredMatlOvhdCostingSht` |  | |  |  | `CHAR(6)` | Costing Sheet for Externally Procured Materials |
| `ExtProcMatlOvhdCostgShtDesc` |  | |  | `cast(_CostingSheetExtText.CostingSheetProcedureDesc as fpc_costing_sheet_ext_desc preserving type)` | `CHAR(30)` | Description of Costing Sheet for Ext. Procured Materials |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_CostingSheetText` | | ✓ | | | | |
| `_CostingSheetExtText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'ValuationVariant',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #C,
               sizeCategory: #S
  }
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.technicalName: 'ICSTVALVARVH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Variant'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_CostingValuationVariantStdVH
  as select from I_CostingValuationVariant
  association [0..1] to I_CostingValuationVarText as _CostingValuationVarText on  _CostingValuationVarText.ValuationVariant = $projection.ValuationVariant
                                                                              and _CostingValuationVarText.Language         = $session.system_language

{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key ValuationVariant,
      @Search.defaultSearchElement: true
      _CostingValuationVarText.ValuationVariantName,
      
      @ObjectModel.text.element: [ 'OverheadCostingSheetDesc' ]
      OverheadCostingSheet,
      @Semantics.text: true
      cast(_CostingSheetText.CostingSheetProcedureDesc as fpc_costing_sheet_description preserving type) as OverheadCostingSheetDesc,
      
      @ObjectModel.text.element: [ 'ExtProcMatlOvhdCostgShtDesc' ]
      ExtProcuredMatlOvhdCostingSht,
      @Semantics.text: true
      cast(_CostingSheetExtText.CostingSheetProcedureDesc as fpc_costing_sheet_ext_desc preserving type) as ExtProcMatlOvhdCostgShtDesc,
      
      _CostingValuationVarText,
      _CostingSheetText,
      _CostingSheetExtText

}
```
