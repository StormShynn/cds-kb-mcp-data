---
name: I_BR_VEHICLEOPERATIONTYPE
description: "BR Vehicleoperationtype"
semantic_vi: "View I_BR_VEHICLEOPERATIONTYPE hiển thị các loại hoạt động xe được sử dụng trong thành phần FI-LOC-LO-BR, cung cấp danh sách các hoạt động xe có thể xảy ra."
keywords:
  - "vehicle operation type"
  - "loại hoạt động xe"
  - "fi-loc-lo-br"
  - "finance"
  - "vehicle operation"
  - "hoạt động xe"
  - "sap"
  - "cds view"
semantic_en: "The I_BR_VEHICLEOPERATIONTYPE view exposes vehicle operation types used in the FI-LOC-LO-BR component, providing a list of possible vehicle operations."
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
# I_BR_VEHICLEOPERATIONTYPE

**BR Vehicleoperationtype**

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
| `VehicleOperationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_VehicleOperationTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Operation Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHOPERATIONT'
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'VehicleOperationType'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_VehicleOperationType
  as select from dd07l as _Tab
  association [0..*] to I_BR_VehicleOperationTypeText as _Text on $projection.VehicleOperationType = _Text.VehicleOperationType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype ) as VehicleOperationType,
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname  = 'J_1B_OPERATION_TYPE'
  and as4local = 'A'
```
