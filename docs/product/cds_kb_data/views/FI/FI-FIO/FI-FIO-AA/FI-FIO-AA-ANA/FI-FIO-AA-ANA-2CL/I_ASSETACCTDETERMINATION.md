---
name: I_ASSETACCTDETERMINATION
description: "Assetacctdetermination"
semantic_vi: "View Asset Account Determination cung cấp thông tin tài khoản tài sản cho phân tích và báo cáo tài chính. Nó được sử dụng để xác định tài khoản tài sản chính xác cho tài sản cụ thể."
keywords:
  - "asset account determination"
  - "tài khoản tài sản"
  - "financial analysis"
  - "phân tích tài chính"
  - "asset account"
  - "fi"
  - "fi-fio-aa-ana-2cl"
  - "finance"
  - "tài chính"
  - "asset"
  - "tài sản"
semantic_en: "The Asset Account Determination view provides asset account information for financial analysis and reporting. It is used to determine the correct asset account for a specific asset."
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
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETACCTDETERMINATION

**Assetacctdetermination**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetAcctDeterminationText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETACCTDET', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Account Determination'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountDetermination',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE] 
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetAcctDetermination
  as select from faac_acctdet0

  association [0..*] to I_AssetAcctDeterminationText as _Text on $projection.AssetAccountDetermination = _Text.AssetAccountDetermination

{
      @ObjectModel.text.association: '_Text'
  key gl_account_det as AssetAccountDetermination,
      _Text
}
```
