---
name: I_COSTINGOVERHEADGROUP
description: "Costingoverheadgroup"
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
# I_COSTINGOVERHEADGROUP

**Costingoverheadgroup**

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
| `ValuationArea` | ✓ | |  | `bwkey` | `CHAR(4)` | Valuation Area |
| `CostingOverheadGroup` | ✓ | |  | `kosgr` | `CHAR(10)` | Costing Overhead Group |
| `OverheadCode` |  | |  | `zschl` | `CHAR(6)` | Overhead key |
| `_ValuationArea` | | ✓ | | | | |
| `_CostingOverheadGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationArea` | `I_ValuationArea` | [0..1] |
| `_CostingOverheadGroupText` | `I_CostingOverheadGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@EndUserText.label: 'Costing Overhead Group'

@AccessControl.authorizationCheck: #MANDATORY

@VDM:{
  viewType: #BASIC ,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
     }

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL }

@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    dataCategory: #VALUE_HELP,
    representativeKey: 'CostingOverheadGroup',
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  modelingPattern: #ANALYTICAL_DIMENSION
}

@Search.searchable: true

define view entity I_CostingOverheadGroup
  as select from tck14
  association [0..1] to I_ValuationArea            as _ValuationArea            on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..*] to I_CostingOverheadGroupText as _CostingOverheadGroupText on  $projection.ValuationArea        = _CostingOverheadGroupText.ValuationArea
                                                                                and $projection.CostingOverheadGroup = _CostingOverheadGroupText.CostingOverheadGroup

{
      @ObjectModel.foreignKey.association: '_ValuationArea'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductValuationAreaVH' , element: 'ValuationArea' }, useAsTemplate: true }]
  key bwkey as ValuationArea,
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_CostingOverheadGroupText'
  key kosgr as CostingOverheadGroup,
      zschl as OverheadCode,
      _CostingOverheadGroupText,
      _ValuationArea
}
```
