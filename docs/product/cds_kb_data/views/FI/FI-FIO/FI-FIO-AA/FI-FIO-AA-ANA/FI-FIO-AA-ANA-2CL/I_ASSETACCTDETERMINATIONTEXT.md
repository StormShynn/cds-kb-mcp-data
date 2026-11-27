---
name: I_ASSETACCTDETERMINATIONTEXT
description: "Assetacctdeterminationtext"
semantic_vi: "View Asset Account Determination Text cung cấp mô tả quyết định tài khoản tài sản trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị chi tiết quyết định tài khoản tài sản trong các ngôn ngữ khác nhau."
keywords:
  - "asset account determination"
  - "tài khoản tài sản"
  - "description"
  - "mô tả"
  - "language"
  - "ngôn ngữ"
  - "fi"
  - "finance"
  - "sap"
  - "asset"
  - "cds view"
semantic_en: "The Asset Account Determination Text view provides asset account determination descriptions in different languages, which can be used to display asset account determination details in various languages."
app_component: FI-FIO-AA-ANA-2CL
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
  - interface-view
  - text-view
  - text
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETACCTDETERMINATIONTEXT

**Assetacctdeterminationtext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
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
| `AssetAccountDetermination` | ✓ | |  | `gl_account_det` | `CHAR(8)` | Account Determination |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `AssetAccountDeterminationDesc` |  | |  | `description_short` | `CHAR(50)` | Name of Account Determination |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETACCTDETT', preserveKey: true}
@EndUserText.label: 'Asset Account Determination - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountDetermination',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetAcctDeterminationText
  as select from faac_acctdet0_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key gl_account_det as AssetAccountDetermination,
      @Semantics.language:true
  key language as Language,
      @Semantics.text: true
      description_short as AssetAccountDeterminationDesc,

      _Language
}
```
