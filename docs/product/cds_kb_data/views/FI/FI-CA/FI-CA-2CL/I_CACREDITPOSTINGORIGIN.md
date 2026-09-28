---
name: I_CACREDITPOSTINGORIGIN
description: "Cacreditpostingorigin"
semantic_vi: "View Cacreditpostingorigin hiển thị dữ liệu nguồn gốc đăng ký tín dụng, có liên quan khi phân tích hoặc xử lý giao dịch tín dụng trong thành phần FI-CA-2CL."
keywords:
  - "credit"
  - "posting"
  - "origin"
  - "fi-ca-2cl"
  - "fi"
  - "finance"
  - "tín dụng"
  - "đăng ký"
  - "giao dịch"
  - "dữ liệu nguồn gốc"
semantic_en: "The Cacreditpostingorigin view exposes credit posting origin data, which is relevant when analyzing or processing credit transactions in the FI-CA-2CL component."
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
  - credit
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITPOSTINGORIGIN

**Cacreditpostingorigin**

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
| `OriginalSourceOfCredit` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as orig_credit_kk preserving type )` | `CHAR(1)` | Origin of Credit Memo Posting |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACreditPostingOriginText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Credit Posting Origin'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'OriginalSourceOfCredit',
                sapObjectNodeType.name: 'ContrAcctgCreditPostingOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACreditPostingOrigin
  as select from dd07l

  association [1..*] to I_CACreditPostingOriginText as _Text on $projection.OriginalSourceOfCredit = _Text.OriginalSourceOfCredit

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as orig_credit_kk preserving type ) as OriginalSourceOfCredit,

      _Text
}
where
      domname  = 'ORIG_CREDIT_KK'
  and as4local = 'A'
```
