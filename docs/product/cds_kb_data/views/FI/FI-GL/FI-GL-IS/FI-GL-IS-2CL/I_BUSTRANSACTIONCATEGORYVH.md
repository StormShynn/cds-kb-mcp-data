---
name: I_BUSTRANSACTIONCATEGORYVH
description: "Bustransactioncategoryvh"
semantic_vi: "View I_BUSTRANSACTIONCATEGORYVH cung cấp danh sách các loại giao dịch kinh doanh, được sử dụng để phân loại giao dịch tài chính trong FI-GL-IS-2CL của SAP. Nó được sử dụng để lấy giúp giá trị cho loại giao dịch kinh doanh."
keywords:
  - "business transaction category"
  - "giao dịch kinh doanh"
  - "fi-gl-is-2cl"
  - "value help"
  - "sap fi"
  - "finance"
  - "transaction classification"
  - "loại giao dịch"
  - "giúp giá trị"
semantic_en: "The I_BUSTRANSACTIONCATEGORYVH view provides a list of business transaction categories, which are used to classify financial transactions in SAP FI-GL-IS-2CL. It is used to retrieve a value help for business transaction categories."
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
# I_BUSTRANSACTIONCATEGORYVH

**Bustransactioncategoryvh**

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
| `BusinessTransactionCategory` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Business Transaction Category'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'BusinessTransactionCategory',
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

define view entity I_BusTransactionCategoryVH as select from I_BusinessTransactionCategory {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_BusinessTransactionCategory.BusinessTransactionCategory,
  
  _Text
}
```
