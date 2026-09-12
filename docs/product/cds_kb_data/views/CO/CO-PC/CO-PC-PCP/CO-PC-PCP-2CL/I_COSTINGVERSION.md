---
name: I_COSTINGVERSION
description: "Costingversion"
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
# I_COSTINGVERSION

**Costingversion**

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
| `CostingVersion` | ✓ | |  | `tvers` | `NUMC(2)` | Costing Version |
| `CostingType` | ✓ | |  | `kalka` | `CHAR(2)` | Costing Type |
| `ValuationVariant` | ✓ | |  | `bwvar` | `CHAR(3)` | Valuation Variant in Costing |
| `ExchangeRateType` |  | |  | `kurst` | `CHAR(4)` | Exchange Rate Type |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingValuationVariant` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingVersionText` | `I_CostingVersionText` | [0..*] |
| `_CostingType` | `I_CostingType` | [1..1] |
| `_CostingValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFICOSTINGVERS',
  compiler.compareFilter: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S },
  representativeKey: 'CostingVersion',
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Costing Version'

define view I_CostingVersion
  as select from tck32
  association [0..*] to I_CostingVersionText      as _CostingVersionText      on  $projection.CostingVersion   = _CostingVersionText.CostingVersion
                                                                              and $projection.CostingType      = _CostingVersionText.CostingType
                                                                              and $projection.ValuationVariant = _CostingVersionText.ValuationVariant

  association [1..1] to I_CostingType             as _CostingType             on  $projection.CostingType = _CostingType.CostingType
  association [1..1] to I_CostingValuationVariant as _CostingValuationVariant on  $projection.ValuationVariant = _CostingValuationVariant.ValuationVariant
  association [0..*] to I_CostingTypeText         as _CostingTypeText         on  $projection.CostingType = _CostingTypeText.CostingType
  association [0..*] to I_CostingValuationVarText as _CostingValuationVarText on  $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant
{
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_CostingVersionText'
  key tvers as CostingVersion,
      
      @ObjectModel: {
        foreignKey.association: '_CostingType',
        text.association: '_CostingTypeText'
      }
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key kalka as CostingType,
      
      @ObjectModel: {
        text.association: '_CostingValuationVarText',
        foreignKey.association: '_CostingValuationVariant'
      }
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key bwvar as ValuationVariant,
      
      kurst as ExchangeRateType,
      
      _CostingVersionText,
      _CostingType,
      _CostingValuationVariant,
      @Analytics.hidden: true
      _CostingTypeText,
      @Analytics.hidden: true
      _CostingValuationVarText
}
```
