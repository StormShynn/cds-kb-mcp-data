---
name: I_COSTCENTERACTIVITYTYPESTDVH
description: "Cost CenterACTIVITYTYPESTDVH"
app_component: CO-OM-2CL
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
  - CO-OM
  - interface-view
  - value-help
  - standard-value-help
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERACTIVITYTYPESTDVH

**Cost CenterACTIVITYTYPESTDVH**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `CostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Activity Type |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFICCAT__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CostCtrActivityType'

@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Center Activity Type'
define view I_CostCenterActivityTypeStdVH as select from I_CostCenterActivityType {
  @ObjectModel.foreignKey.association: '_ControllingArea'
  @Search: { defaultSearchElement: true,
             fuzzinessThreshold:  0.8,
             ranking: #LOW }
  @UI.lineItem: [{importance: #HIGH, position: 20}]
  key ControllingArea,
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @UI.lineItem: [{importance: #HIGH, position: 10}]
  key CostCtrActivityType,
  @Semantics.businessDate.to: true
  key ValidityEndDate,
  @Semantics.businessDate.from: true
  ValidityStartDate,

  _Text,

  @Consumption.hidden: true
  _ControllingArea
}
```
