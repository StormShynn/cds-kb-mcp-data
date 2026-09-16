---
name: I_BR_VEHICLEFUELTYPETEXT_2
description: "BR Vehiclefueltypetext 2"
semantic_vi: "View I_BR_VEHICLEFUELTYPETEXT_2 cung cấp mô tả văn bản cho các loại nhiên liệu xe hơi trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị thông tin loại nhiên liệu trong các ứng dụng đa ngôn ngữ."
keywords:
  - "vehicle fuel type"
  - "nhiên liệu xe hơi"
  - "text description"
  - "mô tả văn bản"
  - "language"
  - "ngôn ngữ"
  - "sap cds view"
  - "view"
  - "fi-loc-lo-br"
  - "finance"
semantic_en: "The I_BR_VEHICLEFUELTYPETEXT_2 view provides text descriptions for vehicle fuel types in different languages, which can be used to display fuel type information in multilingual applications."
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_VEHICLEFUELTYPETEXT_2

**BR Vehiclefueltypetext 2**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `VehicleFuelType` | ✓ | |  | `cast ( tpcomb as logbr_vehiclefueltype preserving type )` |  |  |
| `VehicleFuelTypeDesc` |  | |  | `cast( tpcombt as logbr_vehiclefueldescription preserving type )` |  |  |
| `_VehicleFuelType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleFuelType` | `I_BR_VehicleFuelType_2` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil NF Vehicle Fuel Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHFUELTYPET2'
@ObjectModel.representativeKey: 'VehicleFuelType'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AbapCatalog.preserveKey: true

define view I_BR_VehicleFuelTypeText_2 as select from j_1bfueltypet
  association [1..1] to I_BR_VehicleFuelType_2 as _VehicleFuelType on $projection.VehicleFuelType = _VehicleFuelType.VehicleFuelType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key spras as Language,
  @ObjectModel.foreignKey.association: '_VehicleFuelType'
  key cast ( tpcomb as logbr_vehiclefueltype preserving type ) as VehicleFuelType,  
  @Semantics.text
  cast( tpcombt as logbr_vehiclefueldescription preserving type ) as VehicleFuelTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _VehicleFuelType, 
  _Language 
}
```
