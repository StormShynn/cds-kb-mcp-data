---
name: I_BUSINESSTRANSACTIONTYPEVH
description: "Businesstransactiontypevh"
semantic_vi: "View Business Transaction Type cung cấp danh sách các loại giao dịch kinh doanh cho kế toán tài chính, có thể được sử dụng để lọc hoặc phân loại giao dịch trong thành phần FI-GL-IS-2CL."
keywords:
  - "business transaction type"
  - "transaction type"
  - "financial accounting"
  - "fi-gl-is-2cl"
  - "giao dịch kinh doanh"
  - "loại giao dịch"
  - "kế toán tài chính"
semantic_en: "The Business Transaction Type View provides a list of business transaction types for financial accounting, which can be used to filter or categorize transactions in FI-GL-IS-2CL component."
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BUSINESSTRANSACTIONTYPEVH

**Businesstransactiontypevh**

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
@EndUserText.label: 'Business Transaction Type'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BusinessTransactionType',
                usageType.sizeCategory: #M,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_BusinessTransactionTypeVH as select from I_BusinessTransactionType {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_BusinessTransactionType.BusinessTransactionType,
  
  _Text
}
```
