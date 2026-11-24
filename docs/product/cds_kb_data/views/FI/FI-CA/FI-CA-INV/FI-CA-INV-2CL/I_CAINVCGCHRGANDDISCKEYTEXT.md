---
name: I_CAINVCGCHRGANDDISCKEYTEXT
description: "Cainvcgchrganddisckeytext"
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
# I_CAINVCGCHRGANDDISCKEYTEXT

**Cainvcgchrganddisckeytext**

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
| `Language` | ✓ | | `_tfk2617t` | `langu` | `LANG(1)` | Language Key |
| `CAApplicationArea` | ✓ | | `_tfk2617t` | `applk` | `CHAR(1)` | Application Area |
| `CAInvcgChargeAndDiscountKey` | ✓ | | `_tfk2617t` | `chgkey` | `CHAR(8)` | Charge and Discount Key |
| `CAInvcgChrgAndDiscKeyText` |  | | `_tfk2617t` | `text` | `CHAR(50)` | Name of Charge and Discount Key |
| `_ApplArea` | | ✓ | | | | |
| `_CAInvcgChrgAndDiscKey` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgChrgAndDiscKey` | `I_CAInvcgChrgAndDiscKey` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Zuschlags-/Rabattschl. für Rechn. - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgChargeAndDiscountKey',
  sapObjectNodeType.name: 'CAInvcgChrgAndDiscKeyText',
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

define view entity I_CAInvcgChrgAndDiscKeyText
  as select from tfk2617t as _tfk2617t

  association [1..1] to I_CAApplicationArea     as _ApplArea              on  $projection.CAApplicationArea = _ApplArea.CAApplicationArea
  association [1..1] to I_CAInvcgChrgAndDiscKey as _CAInvcgChrgAndDiscKey on  $projection.CAInvcgChargeAndDiscountKey = _CAInvcgChrgAndDiscKey.CAInvcgChargeAndDiscountKey
                                                                          and $projection.CAApplicationArea           = _CAInvcgChrgAndDiscKey.CAApplicationArea
  association [0..1] to I_Language              as _Language              on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _tfk2617t.langu  as Language,

      @ObjectModel.foreignKey.association: '_ApplArea'
  key _tfk2617t.applk  as CAApplicationArea,

      @ObjectModel.foreignKey.association: '_CAInvcgChrgAndDiscKey'
  key _tfk2617t.chgkey as CAInvcgChargeAndDiscountKey,

      @Semantics.text: true
      _tfk2617t.text   as CAInvcgChrgAndDiscKeyText,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] //compositional relationship to carrier view
      _CAInvcgChrgAndDiscKey,
      _ApplArea,
      _Language
}
```
