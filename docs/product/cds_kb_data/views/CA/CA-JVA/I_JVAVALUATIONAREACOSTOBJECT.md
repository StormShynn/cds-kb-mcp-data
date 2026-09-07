---
name: I_JVAVALUATIONAREACOSTOBJECT
description: "Jvavaluationareacostobject"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVALUATIONAREACOSTOBJECT

**Jvavaluationareacostobject**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `ValuationType` | ✓ | |  | `bwtar` | `CHAR(10)` | Valuation Type |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `WBSElementInternalID` |  | |  | `pspnr` | `NUMC(8)` | WBS Element |
| `OrderID` |  | |  | `aufnr` | `CHAR(12)` | Order Number |
| `JointVentureConditionKey` |  | |  | `condcod` | `CHAR(2)` | Joint Venture Indicator (Condition Key) |
| `_ValuationArea` | | ✓ | | | | |
| `_JVAValuationType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationArea` | `I_JVAValuationArea` | [0..1] |
| `_JVAValuationType` | `I_JVAValuationType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Object from Valuation Area or Type'
@AbapCatalog.sqlViewName: 'IT8JD'
@AbapCatalog.compiler.compareFilter: true

@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 2
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'ValuationArea'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_JVAValuationAreaCostObject

  as select from t8jd
  association [0..1] to I_JVAValuationArea as _ValuationArea    on $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_JVAValuationType as _JVAValuationType on $projection.ValuationType = _JVAValuationType.InventoryValuationType
  association [0..1] to I_InventoryValuationType as _InventoryValuationType on $projection.ValuationType = _InventoryValuationType.InventoryValuationType

{
      @ObjectModel.foreignKey.association: '_ValuationArea'
  key bwkey   as ValuationArea,
      @ObjectModel.foreignKey.association: '_JVAValuationType'
  key bwtar   as ValuationType,

      kostl   as CostCenter,
      pspnr   as WBSElementInternalID,
      aufnr   as OrderID,
      condcod as JointVentureConditionKey,

      _ValuationArea,
      _JVAValuationType,
      _InventoryValuationType

}
```
