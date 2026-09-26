---
name: I_CAAUTHORIZATIONGROUPTEXT
description: "Caauthorizationgrouptext"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAAUTHORIZATIONGROUPTEXT

**Caauthorizationgrouptext**

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
| `CAAuthorizationGroupObject` | ✓ | |  | `bgobj` | `CHAR(10)` | Authorization Group Object |
| `CAAuthorizationGroup` | ✓ | |  | `begru` | `CHAR(4)` | Authorization Group |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CAAuthorizationGroupText` |  | |  | `text` | `CHAR(50)` | Description of Authorization Group |
| `_AuthznGroupObject` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AuthznGroupObject` | `I_CAAuthorizationGroupObject` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Authorization Group - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAAuthorizationGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationGroupText
  as select from tfk_begrut

  association [1..1] to I_CAAuthorizationGroupObject as _AuthznGroupObject on $projection.CAAuthorizationGroupObject = _AuthznGroupObject.CAAuthorizationGroupObject
  association [0..1] to I_Language                   as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_AuthznGroupObject'
  key bgobj as CAAuthorizationGroupObject,
  key begru as CAAuthorizationGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,

      @Semantics.text
      text  as CAAuthorizationGroupText,

      _AuthznGroupObject,
      _Language
}
```
