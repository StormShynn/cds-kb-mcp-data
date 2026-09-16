---
name: I_BR_VEHICLEFUELTYPE_2
description: "BR Vehiclefueltype 2"
semantic_vi: "View I_BR_VEHICLEFUELTYPE_2 hiển thị các loại nhiên liệu xe, có liên quan đến các yêu cầu kinh doanh liên quan đến tiêu thụ nhiên liệu và quản lý."
keywords:
  - "vehicle fuel type"
  - "loại nhiên liệu xe"
  - "fuel consumption"
  - "tiêu thụ nhiên liệu"
  - "fuel management"
  - "quản lý nhiên liệu"
  - "sap cds view"
  - "view"
  - "fi-loc-lo-br"
  - "finance"
  - "finance component"
semantic_en: "The I_BR_VEHICLEFUELTYPE_2 CDS view exposes vehicle fuel types, which are relevant for business requirements related to fuel consumption and management."
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
# I_BR_VEHICLEFUELTYPE_2

**BR Vehiclefueltype 2**

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
| `VehicleFuelType` | ✓ | |  | `cast ( tpcomb as logbr_vehiclefueltype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleFuelTypeText_2` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Vehicle Fuel Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHFUELTYPE2'
@ObjectModel.representativeKey: 'VehicleFuelType'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@AbapCatalog.preserveKey: true

define view I_BR_VehicleFuelType_2 as select from j_1bfueltype 
association [0..*] to I_BR_VehicleFuelTypeText_2 as _Text on $projection.VehicleFuelType = _Text.VehicleFuelType
{
  @ObjectModel.text.association: '_Text'
  key cast ( tpcomb as logbr_vehiclefueltype preserving type ) as VehicleFuelType,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
