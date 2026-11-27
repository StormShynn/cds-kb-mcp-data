---
name: I_CAINVCGCHRGANDDISCKEY
description: "Cainvcgchrganddisckey"
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
# I_CAINVCGCHRGANDDISCKEY

**Cainvcgchrganddisckey**

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
| `CAApplicationArea` | ✓ | | `_tfk2617` | `applk` | `CHAR(1)` | Application Area |
| `CAInvcgChargeAndDiscountKey` | ✓ | | `_tfk2617` | `chgkey` | `CHAR(8)` | Charge and Discount Key |
| `CAInvcgChrgAndDiscIsIndividual` |  | | `_tfk2617` | `chgindiv` | `CHAR(1)` | Charge/Discount Is Individual |
| `_ApplArea` | | ✓ | | | | |
| `_CAInvcgChrgAndDiscKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgChrgAndDiscKeyText` | `I_CAInvcgChrgAndDiscKeyText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName:#LOCAL
}

@EndUserText.label: 'Zuschlags-/Rabattschlüssel für Rechn.'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgChargeAndDiscountKey',
  sapObjectNodeType.name: 'ContrAcctgInvcgChrgAndDiscKey',
  compositionRoot: true,
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
define view entity I_CAInvcgChrgAndDiscKey
  as select from tfk2617             as _tfk2617
    inner join   I_CAApplicationArea as ApplArea on _tfk2617.applk = ApplArea.CAApplicationArea
  association [1..1] to I_CAApplicationArea         as _ApplArea                  on  $projection.CAApplicationArea = _ApplArea.CAApplicationArea
  association [1..*] to I_CAInvcgChrgAndDiscKeyText as _CAInvcgChrgAndDiscKeyText on  $projection.CAInvcgChargeAndDiscountKey = _CAInvcgChrgAndDiscKeyText.CAInvcgChargeAndDiscountKey
                                                                                  and $projection.CAApplicationArea           = _CAInvcgChrgAndDiscKeyText.CAApplicationArea
{
      @ObjectModel.foreignKey.association: '_ApplArea'
  key _tfk2617.applk   as CAApplicationArea,

      @ObjectModel.text.association: '_CAInvcgChrgAndDiscKeyText'
  key _tfk2617.chgkey  as CAInvcgChargeAndDiscountKey,

      _ApplArea,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] //compositional relationship to text view
      _CAInvcgChrgAndDiscKeyText,

      _tfk2617.chgindiv as CAInvcgChrgAndDiscIsIndividual
}
where
  ApplArea.CAApplicationAreaIsActive = 'X'
```
