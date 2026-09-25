---
name: I_CACREDITWORTHINESSORIGINTEXT
description: "Cacreditworthinessorigintext"
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
  - text-view
  - text
  - credit
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESSORIGINTEXT

**Cacreditworthinessorigintext**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CACreditWorthinessOrigin` | ✓ | |  | `herkf` | `CHAR(2)` | Origin of entry related to creditworthiness |
| `CACreditWorthinessOriginText` |  | |  | `htext` | `CHAR(20)` | Text (20 Characters) |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'ICACRWORTHORIGT'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Creditworthiness Origin - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CACreditWorthinessOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACreditWorthinessOriginText
  as select from tfk046bt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
  key herkf as CACreditWorthinessOrigin,

      @Semantics.text
      htext as CACreditWorthinessOriginText,

      _Language
}
```
