---
name: I_CAINVCGTYPE
description: "Cainvcgtype"
app_component: FI-CA-INV-2CL
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
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGTYPE

**Cainvcgtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvcgType` | ✓ | | `_tfk2603a` | `inv_type` | `CHAR(2)` | Invoicing Type |
| `CAApplicationArea` | ✓ | | `_tfk2603a` | `applk` | `CHAR(1)` | Application Area |
| `_CAInvcgTypeText` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgTypeText` | `I_CAInvcgTypeText` | [0..*] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturierungsart'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgType',
  sapObjectNodeType.name: 'ContrAcctgInvoicingType',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgType
  as select distinct from tfk2603a as _tfk2603a
  association [0..*] to I_CAInvcgTypeText   as _CAInvcgTypeText   on  $projection.CAInvcgType       = _CAInvcgTypeText.CAInvcgType
                                                                  and $projection.CAApplicationArea = _CAInvcgTypeText.CAApplicationArea
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

{
      @ObjectModel.text.association: '_CAInvcgTypeText'
  key _tfk2603a.inv_type as CAInvcgType,
      _CAInvcgTypeText,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2603a.applk    as CAApplicationArea,
      _CAApplicationArea
}
```
