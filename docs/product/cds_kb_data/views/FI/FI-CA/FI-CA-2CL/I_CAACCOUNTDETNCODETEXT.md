---
name: I_CAACCOUNTDETNCODETEXT
description: "Caaccountdetncodetext"
semantic_vi: "View I_CAACCOUNTDETNCODETEXT cung cấp tên và mô tả mã xác định tài khoản trong nhiều ngôn ngữ, hữu ích cho việc hiển thị chi tiết xác định tài khoản."
keywords:
  - "account determination"
  - "mã xác định tài khoản"
  - "code name"
  - "description"
  - "language"
  - "fi-ca"
  - "fi"
  - "finance"
  - "sap"
semantic_en: "The I_CAACCOUNTDETNCODETEXT view provides account determination code names and descriptions in multiple languages, useful for displaying account determination details."
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
# I_CAACCOUNTDETNCODETEXT

**Caaccountdetncodetext**

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
| `CAAccountDeterminationCode` | ✓ | |  | `cast( kofiz as kofiz_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAAccountDeterminationCodeName` |  | |  | `text50` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Determination Code - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAAccountDeterminationCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAccountDetnCodeText
  as select from te097at

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( kofiz as kofiz_kk preserving type ) as CAAccountDeterminationCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                     as Language,

      @Semantics.text
      text50                                    as CAAccountDeterminationCodeName,

      _Language
}
```
