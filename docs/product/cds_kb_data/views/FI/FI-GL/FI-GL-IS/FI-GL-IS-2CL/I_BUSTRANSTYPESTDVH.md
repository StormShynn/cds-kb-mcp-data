---
name: I_BUSTRANSTYPESTDVH
description: "Bustranstypestdvh"
semantic_vi: "View Bustranstypestdvh CDS cung cấp danh sách các loại giao dịch kinh doanh tiêu chuẩn, được sử dụng để phân loại giao dịch tài chính trong thành phần FI-GL-IS-2CL của SAP. View này hữu ích cho các nhà phát triển cần truy cập và sử dụng các loại giao dịch này trong ứng dụng của họ."
keywords:
  - "business transaction type"
  - "loại giao dịch kinh doanh"
  - "fi-gl-is-2cl"
  - "sap fi-gl-is-2cl"
  - "financial transaction"
  - "giao dịch tài chính"
  - "standard value help"
  - "trợ giúp giá trị tiêu chuẩn"
  - "interface view"
  - "view giao diện"
  - "value help"
  - "trợ giúp giá trị"
semantic_en: "The Bustranstypestdvh CDS view provides a list of standard business transaction types, which are used to categorize financial transactions in SAP FI-GL-IS-2CL component. This view is useful for developers who need to access and utilize these transaction types in their applications."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSTRANSTYPESTDVH

**Bustranstypestdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `BusinessTransactionType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BusinessTransactionType',
                usageType: { sizeCategory: #M,
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#VALUE_HELP_PROVIDER],
                modelingPattern: #VALUE_HELP_PROVIDER }

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Business Transaction Type'
define view entity I_BusTransTypeStdVH as select from I_BusinessTransactionType {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_BusinessTransactionType.BusinessTransactionType,

  _Text
}
```
