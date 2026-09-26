---
name: I_CADFLTCLEARINGRSTRCNCODE
description: "Cadfltclearingrstrcncode"
semantic_vi: "View Cadfltclearingrstrcncode hiển thị mã hạn chế thanh toán cho tài khoản tiền mặt, được sử dụng để xác định loại thanh toán được phép cho tài khoản tiền mặt trong thành phần FI-CA-2CL."
keywords:
  - "cash account"
  - "tài khoản tiền mặt"
  - "clearing restriction code"
  - "mã hạn chế thanh toán"
  - "fi-ca-2cl"
  - "fi"
  - "finance"
  - "sap"
  - "cds view"
  - "view"
semantic_en: "The Cadfltclearingrstrcncode view exposes clearing restriction codes for cash accounts, used to determine the allowed clearing types for cash accounts in the FI-CA-2CL component."
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
# I_CADFLTCLEARINGRSTRCNCODE

**Cadfltclearingrstrcncode**

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
| `CADefaultClearingRstrcnCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as augrs_def_kk preserving type )` | `CHAR(1)` | Clearing Restriction |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADfltClearingRstrcnCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Default Clearing Restriction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADefaultClearingRstrcnCode',
                sapObjectNodeType.name: 'ContrAcctgDfltClrgRstrcnCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
 
@VDM.viewType: #BASIC

define view entity I_CADfltClearingRstrcnCode
  as select from dd07l

  association [1..*] to I_CADfltClearingRstrcnCodeT as _Text on $projection.CADefaultClearingRstrcnCode = _Text.CADefaultClearingRstrcnCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as augrs_def_kk preserving type ) as CADefaultClearingRstrcnCode,

      _Text
}
where
      domname  = 'AUGRS_DEF_KK'
  and as4local = 'A'
```
