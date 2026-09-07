---
name: I_BR_VEHICLECONDITION
description: "BR Vehiclecondition"
semantic_vi: "View I_BR_VEHICLECONDITION hiển thị dữ liệu tình trạng xe, có liên quan khi định giá hoặc đánh giá tình trạng xe trong bối cảnh kinh doanh."
keywords:
  - "vehicle condition"
  - "tình trạng xe"
  - "pricing condition"
  - "cơ sở dữ liệu tài chính"
  - "finance database"
  - "fi-loc-lo-br"
  - "sap cds view"
semantic_en: "The I_BR_VEHICLECONDITION view exposes vehicle condition data, which is relevant when pricing or evaluating the condition of vehicles in a business context."
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
  - pricing-condition
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLECONDITION

**BR Vehiclecondition**

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
| `VehicleCondition` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclecondition )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleConditionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Condition'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHCONDITION'
@ObjectModel.representativeKey: 'VehicleCondition'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_VehicleCondition as select from dd07l
  association [0..*] to I_BR_VehicleConditionText as _Text on $projection.VehicleCondition = _Text.VehicleCondition
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclecondition ) as VehicleCondition,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1B_VEHICLE_COND' and as4local = 'A'
```
