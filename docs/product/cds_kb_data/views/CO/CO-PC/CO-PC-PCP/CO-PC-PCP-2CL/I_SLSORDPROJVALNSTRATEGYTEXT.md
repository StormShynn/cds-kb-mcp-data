---
name: I_SLSORDPROJVALNSTRATEGYTEXT
description: "Slsordprojvalnstrategytext"
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
# I_SLSORDPROJVALNSTRATEGYTEXT

**Slsordprojvalnstrategytext**

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
| `SlsOrdProjValnStrategy` | ✓ | |  | `cast( domvalue_l as fpc_val_strat_sls_order )` | `CHAR(1)` | Valuation Strategy for Material in Valuated Special Stock |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `SlsOrdProjValnStrgyName` |  | |  | `cast( ddtext as fpc_val_strat_sls_ord_name preserving type )` | `CHAR(60)` | Name of Val. Strategy for Material in Valuated Spec. Stock |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'SlsOrdProjValnStrategy'
@EndUserText.label: 'Valuation Strategy - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #LANGUAGE_DEPENDENT_TEXT
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SlsOrdProjValnStrategyText
  as select from dd07t
  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.text.element: ['SlsOrdProjValnStrgyName']
  key cast( domvalue_l as fpc_val_strat_sls_order )                as SlsOrdProjValnStrategy,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as fpc_val_strat_sls_ord_name preserving type ) as SlsOrdProjValnStrgyName,

      _Language
}
where
      dd07t.domname  = 'FPC_VAL_STRAT_SLS_ORDER'
  and dd07t.as4local = 'A'
```
