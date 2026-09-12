---
name: I_SLSORDPROJVALNSTRATEGYSTDVH
description: "Slsordprojvalnstrategystdvh"
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
# I_SLSORDPROJVALNSTRATEGYSTDVH

**Slsordprojvalnstrategystdvh**

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
| `SlsOrdProjValnStrategy` | ✓ | |  |  | `CHAR(1)` | Valuation Strategy for Material in Valuated Special Stock |
| `SlsOrdProjValnStrgyName` |  | | `_SlsOrdProjValnStrategyText` | `SlsOrdProjValnStrgyName` | `CHAR(60)` | Name of Val. Strategy for Material in Valuated Spec. Stock |
| `_SlsOrdProjValnStrategyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsOrdProjValnStrategyText` | `I_SlsOrdProjValnStrategyText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'SlsOrdProjValnStrategy',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  },
  resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.technicalName: 'ISORDPROVALSTRTVH'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuationn Strategy'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_SlsOrdProjValnStrategyStdVH
  as select from I_SlsOrdProjValuationStrategy
  association [0..1] to I_SlsOrdProjValnStrategyText as _SlsOrdProjValnStrategyText on  _SlsOrdProjValnStrategyText.SlsOrdProjValnStrategy = $projection.SlsOrdProjValnStrategy
                                                                                    and _SlsOrdProjValnStrategyText.Language               = $session.system_language
{
      @ObjectModel.text.element: [ 'SlsOrdProjValnStrgyName' ]
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key SlsOrdProjValnStrategy,
      @Search.defaultSearchElement: true
      _SlsOrdProjValnStrategyText.SlsOrdProjValnStrgyName,

      _SlsOrdProjValnStrategyText
}
```
