---
name: I_COSTINGTYPE
description: "Costingtype"
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
# I_COSTINGTYPE

**Costingtype**

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
| `CostingType` | ✓ | |  | `kalka` | `CHAR(2)` | Costing Type |
| `ControllingValuationType` |  | |  | `valuation` | `NUMC(1)` | Valuation View (for Transfer Prices) |
| `CostingReferenceObject` |  | |  | `bzobj` | `CHAR(1)` | Reference Object |
| `Ledger` |  | |  | `rldnr` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `_CostingTypeText` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_ValuationViewText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingTypeText` | `I_CostingTypeText` | [0..*] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_ValuationViewText` | `I_ControllingValuationTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFICOSTINGTYPE'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Costing Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CostingType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_CostingType
  as select from tck01

  association [0..*] to I_CostingTypeText              as _CostingTypeText   on $projection.CostingType = _CostingTypeText.CostingType
  association [0..1] to I_Ledger                       as _Ledger            on $projection.Ledger = _Ledger.Ledger
  association [0..*] to I_LedgerText                   as _LedgerText        on $projection.Ledger = _LedgerText.Ledger
  association [0..*] to I_ControllingValuationTypeText as _ValuationViewText on $projection.ControllingValuationType = _ValuationViewText.ControllingValuationType

{
      @ObjectModel.text.association: '_CostingTypeText'
      @Search.defaultSearchElement: true
  key kalka             as CostingType,

      @ObjectModel.text.association: '_ValuationViewText'
      valuation         as ControllingValuationType,

      bzobj             as CostingReferenceObject,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' },
                                            useAsTemplate: true } ]
      @ObjectModel.text.association: '_LedgerText'
      rldnr             as Ledger,

      _CostingTypeText,
      _Ledger,
      _LedgerText,
      _ValuationViewText
}
```
