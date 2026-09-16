---
name: I_BR_VEHICLEOPERATIONTYPETEXT
description: "BR Vehicleoperationtypetext"
semantic_vi: "View I_BR_VEHICLEOPERATIONTYPETEXT cung cấp mô tả văn bản của các loại hoạt động xe, có thể được sử dụng khi hiển thị hoặc báo cáo hoạt động xe trong ngữ cảnh tài chính hoặc logistics."
keywords:
  - "vehicle operation"
  - "loại hoạt động xe"
  - "text view"
  - "view"
  - "finance"
  - "logistics"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
  - "text-view"
semantic_en: "The I_BR_VEHICLEOPERATIONTYPETEXT view provides text descriptions of vehicle operation types, which can be used when displaying or reporting on vehicle operations in a finance or logistics context."
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
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLEOPERATIONTYPETEXT

**BR Vehicleoperationtypetext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `VehicleOperationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype preserving type )` |  |  |
| `VehicleOperationTypeDesc` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as logbr_vehicleoperationtypedesc preserving type)` |  |  |
| `_VehicleOperationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleOperationType` | `I_BR_VehicleOperationType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Operation Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHOPERATION'
@ObjectModel.representativeKey: 'VehicleOperationType'
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

define view I_BR_VehicleOperationTypeText
  as select from dd07t
  association [1..1] to I_BR_VehicleOperationType as _VehicleOperationType on $projection.VehicleOperationType = _VehicleOperationType.VehicleOperationType
  association [0..1] to I_Language                as _Language             on $projection.Language = _Language.Language
{
    @Semantics.language
    key cast( ddlanguage as spras preserving type ) as Language,
    @ObjectModel.foreignKey.association: '_VehicleOperationType'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehicleoperationtype preserving type ) as VehicleOperationType,
    @Semantics.text
    cast ( substring ( ddtext, 1, 60 ) as logbr_vehicleoperationtypedesc preserving type) as VehicleOperationTypeDesc,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _VehicleOperationType, 
    _Language
}
where domname  = 'J_1B_OPERATION_TYPE'
  and as4local = 'A'
```
