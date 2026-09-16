---
name: I_BR_VEHICLERESTRICTIONTEXT
description: "BR Vehiclerestrictiontext"
semantic_vi: "View I_BR_VEHICLERESTRICTIONTEXT cung cấp các văn bản hạn chế phương tiện trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị thông tin hạn chế phương tiện cho người dùng. Nó thường được sử dụng trong thành phần FI-LOC-LO-BR cho các ứng dụng liên quan đến tài chính."
keywords:
  - "vehicle restriction"
  - "hạn chế phương tiện"
  - "text view"
  - "view"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "finance"
  - "tài chính"
  - "sap"
  - "cds view"
semantic_en: "The I_BR_VEHICLERESTRICTIONTEXT view provides vehicle restriction texts in different languages, which can be used to display vehicle restriction information to users. It is typically used in the FI-LOC-LO-BR component for finance-related applications."
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
# I_BR_VEHICLERESTRICTIONTEXT

**BR Vehiclerestrictiontext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `VehicleRestriction` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclerestriction preserving type )` |  |  |
| `VehicleRestrictionDesc` |  | |  | `cast( ddtext as logbr_vehiclerestrictiondesc preserving type )` |  |  |
| `_VehicleRestriction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleRestriction` | `I_BR_VehicleRestriction` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Vehicle Restriction - Text'
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRVEHRSTRCNT'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'VehicleRestriction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_VehicleRestrictionText
  as select from dd07t
  association [1..1] to I_BR_VehicleRestriction as _VehicleRestriction on $projection.VehicleRestriction = _VehicleRestriction.VehicleRestriction
  association [1..1] to I_Language              as _Language           on $projection.Language = _Language.Language
{
    @Semantics.language
    key cast( ddlanguage as spras ) as Language,
    @ObjectModel.foreignKey.association: '_VehicleRestriction'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_vehiclerestriction preserving type ) as VehicleRestriction,
    @Semantics.text
    cast( ddtext as logbr_vehiclerestrictiondesc preserving type ) as VehicleRestrictionDesc,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _VehicleRestriction, //Comment this association in order to hide it if this association causes issues in analytical consumption
    _Language //Comment this association in order to hide it if this association causes issues in analytical consumption
}
where domname  = 'J_1B_VEH_RESTRICTION'
  and as4local = 'A'
```
