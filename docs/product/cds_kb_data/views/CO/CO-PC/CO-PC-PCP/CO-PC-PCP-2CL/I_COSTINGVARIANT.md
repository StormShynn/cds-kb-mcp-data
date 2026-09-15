---
name: I_COSTINGVARIANT
description: "Costingvariant"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
# I_COSTINGVARIANT

**Costingvariant**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingVariant` | ✓ | |  | `klvar` | `CHAR(4)` | Costing Variant |
| `ValuationVariant` |  | |  | `bwvar` | `CHAR(3)` | Valuation Variant in Costing |
| `CostEstimateReferenceVariant` |  | |  | `refid` | `NUMC(2)` | Reference Variant |
| `CostingType` |  | |  | `kalka` | `CHAR(2)` | Costing Type |
| `CostEstimateTransferControl` |  | |  | `uebid` | `CHAR(4)` | Transfer Control |
| `CostEstTransfCtrlIsChangeable` |  | |  | `voraend` | `CHAR(1)` | Defaults Can Be Changed |
| `CostingReferenceObject` |  | |  | `bzobj` | `CHAR(1)` | Reference Object |
| `_Text` | | ✓ | | | | |
| `_CostingValuationVariant` | | ✓ | | | | |
| `_CostingType` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostingVariantText` | [0..*] |
| `_CostingValuationVariant` | `I_CostingValuationVariant` | [0..1] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingValuationVarText` | `I_CostingValuationVarText` | [0..*] |
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IFICOSTGVARIANT',
  compiler.compareFilter: true }
@ClientHandling: {
  type: #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE }
@Analytics: {
  dataCategory: #DIMENSION,
   internalName: #LOCAL }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
@ObjectModel: {
  representativeKey: 'CostingVariant',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    supportedCapabilities: [
      #ANALYTICAL_DIMENSION,
      #CDS_MODELING_ASSOCIATION_TARGET,
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Costing Variant'

define view I_CostingVariant
  as select from tck03
  association [0..*] to I_CostingVariantText      as _Text                    on $projection.CostingVariant = _Text.CostingVariant
  association [0..1] to I_CostingValuationVariant as _CostingValuationVariant on $projection.ValuationVariant = _CostingValuationVariant.ValuationVariant
  association [0..1] to I_CostingType             as _CostingType             on $projection.CostingType = _CostingType.CostingType
  association [0..*] to I_CostingValuationVarText as _CostingValuationVarText on $projection.ValuationVariant = _CostingValuationVarText.ValuationVariant
  association [0..*] to I_CostingTypeText         as _CostingTypeText         on $projection.CostingType = _CostingTypeText.CostingType
{
      @ObjectModel.text.association: '_Text'
  key klvar   as CostingVariant,
      @ObjectModel.text.association: '_CostingValuationVarText'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      bwvar   as ValuationVariant,
      refid   as CostEstimateReferenceVariant,
      @ObjectModel.text.association: '_CostingTypeText'
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH ' , element: 'CostingType' }, useAsTemplate: true }]
      kalka   as CostingType,
      uebid   as CostEstimateTransferControl,
      voraend as CostEstTransfCtrlIsChangeable,
      bzobj   as CostingReferenceObject,

      _Text,
      _CostingValuationVariant,
      _CostingType,
      _CostingValuationVarText,
      _CostingTypeText

}
```
