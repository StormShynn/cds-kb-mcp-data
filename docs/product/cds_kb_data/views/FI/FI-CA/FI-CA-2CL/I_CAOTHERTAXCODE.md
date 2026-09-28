---
name: I_CAOTHERTAXCODE
description: "Caothertaxcode"
app_component: FI-CA-2CL
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
  - interface-view
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOTHERTAXCODE

**Caothertaxcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `Country` | ✓ | |  | `land` | `CHAR(3)` | Company Country/Region |
| `CAOtherTaxCode` | ✓ | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `CAOtherTaxPercentage` |  | |  | `pertax` | `DEC(8)` | Tax Percentage |
| `CACategoriesAreUsedForOtherTax` |  | |  | `xkschl` | `CHAR(1)` | Categories Used for Tax Items |
| `CAIsValidForUSTelcomTaxCode` |  | |  | `xustc` | `CHAR(1)` | Tax Code for Telecommunications Tax (U.S.A.) |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Text` | `I_CAOtherTaxCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Other Tax Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAOtherTaxCode',
                sapObjectNodeType.name: 'ContrAcctgOtherTaxCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOtherTaxCode
  as select from tfk007f

  association [0..1] to I_Country            as _Country on  $projection.Country = _Country.Country
  association [0..*] to I_CAOtherTaxCodeText as _Text    on  $projection.Country        = _Text.Country
                                                         and $projection.CAOtherTaxCode = _Text.CAOtherTaxCode
{
      @ObjectModel.foreignKey.association: '_Country'
  key land   as Country,
      @ObjectModel.text.association: '_Text'
  key strkz  as CAOtherTaxCode,

      pertax as CAOtherTaxPercentage,
      xkschl as CACategoriesAreUsedForOtherTax,
      xustc  as CAIsValidForUSTelcomTaxCode,
      //    xspgl,

      _Country,
      _Text
}
```
