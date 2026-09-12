---
name: I_SLSORDPROJVALUATIONSTRATEGY
description: "Slsordprojvaluationstrategy"
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
# I_SLSORDPROJVALUATIONSTRATEGY

**Slsordprojvaluationstrategy**

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
| `SlsOrdProjValnStrategy` | ✓ | |  | `cast( cast ( substring( domvalue_l, 1, 1) as abap.char( 1 ) ) as fpc_val_strat_sls_order )` | `CHAR(1)` | Valuation Strategy for Material in Valuated Special Stock |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsOrdProjValnStrategyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Strategy'
@VDM.viewType: #BASIC
@ObjectModel: {
  representativeKey: 'SlsOrdProjValnStrategy',
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: { serviceQuality: #A,
               sizeCategory: #S,
               dataClass: #MASTER
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.technicalName: 'ISORDPROVALSTRT'
define view entity I_SlsOrdProjValuationStrategy
  as select from dd07l
  association [0..*] to I_SlsOrdProjValnStrategyText as _Text on $projection.SlsOrdProjValnStrategy = _Text.SlsOrdProjValnStrategy
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( domvalue_l, 1, 1) as abap.char( 1 ) ) as fpc_val_strat_sls_order ) as SlsOrdProjValnStrategy,

      _Text
}

where
      domname  = 'FPC_VAL_STRAT_SLS_ORDER'
  and as4local = 'A';
```
