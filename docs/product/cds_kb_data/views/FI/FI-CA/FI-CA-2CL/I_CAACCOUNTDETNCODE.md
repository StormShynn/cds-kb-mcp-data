---
name: I_CAACCOUNTDETNCODE
description: "Caaccountdetncode"
semantic_vi: "View I_CAACCOUNTDETNCODE hiển thị mã xác định tài khoản được sử dụng trong thành phần FI-CA-2CL, cung cấp thông tin về cách xác định tài khoản cho các giao dịch tài chính."
keywords:
  - "account determination"
  - "fi-ca-2cl"
  - "financial transactions"
  - "tài khoản xác định"
  - "giao dịch tài chính"
  - "fi"
  - "fi-ca"
  - "tài chính"
semantic_en: "The I_CAACCOUNTDETNCODE view exposes account determination codes used in the FI-CA-2CL component, providing information on how accounts are determined for financial transactions."
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAACCOUNTDETNCODE

**Caaccountdetncode**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAccountDetnCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Determination Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE, 
                representativeKey: 'CAAccountDeterminationCode',
                sapObjectNodeType.name: 'ContrAcctgAccountDetnCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC


define view entity I_CAAccountDetnCode
  as select from te097a

  association [0..*] to I_CAAccountDetnCodeText as _Text on $projection.CAAccountDeterminationCode = _Text.CAAccountDeterminationCode

{
      @ObjectModel.text.association: '_Text'
  key cast( kofiz as kofiz_kk preserving type ) as CAAccountDeterminationCode,

      _Text
}
```
