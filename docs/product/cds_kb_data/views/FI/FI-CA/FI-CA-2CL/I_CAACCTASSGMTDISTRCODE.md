---
name: I_CAACCTASSGMTDISTRCODE
description: "Caacctassgmtdistrcode"
semantic_vi: "CDS view I_CAACCTASSGMTDISTRCODE cung cấp truy cập vào mã phân bổ phân phối tài khoản, được sử dụng để phân bổ chi phí giữa các tài khoản khác nhau trong hệ thống tài chính. Nó được sử dụng bởi các nhà phát triển để truy xuất và thao tác các mã này cho các giao dịch tài chính khác nhau."
keywords:
  - "account assignment"
  - "distribution code"
  - "financial transaction"
  - "fi-ca"
  - "fi"
  - "sap cds view"
  - "mã phân bổ"
  - "phân bổ tài khoản"
  - "giao dịch tài chính"
  - "tài khoản kế toán"
semantic_en: "The I_CAACCTASSGMTDISTRCODE CDS view provides access to account assignment distribution codes, which are used to distribute costs among different accounts in a financial system. It is used by developers to retrieve and manipulate these codes for various financial transactions."
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
# I_CAACCTASSGMTDISTRCODE

**Caacctassgmtdistrcode**

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
| `CACtrlFieldForAcctAssgmtDistr` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as aasta_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAcctAssgmtDistrCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Assignment Distribution Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACtrlFieldForAcctAssgmtDistr',
                sapObjectNodeType.name: 'ContrAcctgAcctAssgmtDistrCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAcctAssgmtDistrCode
  as select from dd07l

  association [1..*] to I_CAAcctAssgmtDistrCodeText as _Text on $projection.CACtrlFieldForAcctAssgmtDistr = _Text.CACtrlFieldForAcctAssgmtDistr

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as aasta_kk preserving type ) as CACtrlFieldForAcctAssgmtDistr,

      _Text
}
where
      domname  = 'AASTA_KK'
  and as4local = 'A'
```
