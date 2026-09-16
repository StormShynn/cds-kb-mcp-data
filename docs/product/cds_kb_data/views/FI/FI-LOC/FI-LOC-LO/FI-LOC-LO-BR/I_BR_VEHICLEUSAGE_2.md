---
name: I_BR_VEHICLEUSAGE_2
description: "BR Vehicleusage 2"
semantic_vi: "View BR Vehicleusage 2 cung cấp truy cập dữ liệu sử dụng xe, có ích khi phân tích các mẫu phân bổ và sử dụng xe trong tổ chức."
keywords:
  - "vehicle usage"
  - "dữ liệu sử dụng xe"
  - "vehicle allocation"
  - "phân bổ xe"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
  - "component:fi-loc-lo-br"
  - "lob:finance"
semantic_en: "The BR Vehicleusage 2 view provides access to vehicle usage data, which is useful when analyzing vehicle allocation and usage patterns within an organization."
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLEUSAGE_2

**BR Vehicleusage 2**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `VehicleUsage` | ✓ | |  | `cast ( espveic as logbr_vehicleusage preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleUsageText_2` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Usage'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHICLEUSAGE2'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'VehicleUsage'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_VehicleUsage_2 as select from j_1bvehicleusage
  association [0..*] to I_BR_VehicleUsageText_2 as _Text on $projection.VehicleUsage = _Text.VehicleUsage
{
  @ObjectModel.text.association: '_Text'
  key cast ( espveic as logbr_vehicleusage preserving type ) as VehicleUsage,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
