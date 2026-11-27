---
name: I_CAINVCGPROCESSTEXT
description: "Cainvcgprocesstext"
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
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGPROCESSTEXT

**Cainvcgprocesstext**

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
| `CAInvcgProcess` | ✓ | | `_tfk2602t` | `inv_process` | `CHAR(2)` | Invoicing Process |
| `CAApplicationArea` | ✓ | | `_tfk2602t` | `applk` | `CHAR(1)` | Application Area |
| `Language` | ✓ | | `_tfk2602t` | `langu` | `LANG(1)` | Language Key |
| `CAInvcgProcessText` |  | | `_tfk2602t` | `text` | `CHAR(50)` | Name of Invoicing Process |
| `_CAInvcgProcess` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgProcess` | `I_CAInvcgProcess` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Fakturierungsprozesse (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgProcess',
  sapObjectNodeType.name: 'ContrAcctgInvoicingProcessText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgProcessText
  as select from tfk2602t as _tfk2602t
  association [0..1] to I_CAInvcgProcess    as _CAInvcgProcess    on  $projection.CAInvcgProcess    = _CAInvcgProcess.CAInvcgProcess
                                                                  and $projection.CAApplicationArea = _CAInvcgProcess.CAApplicationArea
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgProcess'
  key _tfk2602t.inv_process as CAInvcgProcess,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key _tfk2602t.applk       as CAApplicationArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2602t.langu       as Language,
      @Semantics.text: true
      _tfk2602t.text        as CAInvcgProcessText,

      _CAApplicationArea,
      _CAInvcgProcess,
      _Language
}
```
