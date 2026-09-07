---
name: I_BUSINESSTYPEVH
description: "Businesstypevh"
semantic_vi: "View BusinessType cung cấp danh sách các loại hình kinh doanh cho các giao dịch tài chính, có thể được sử dụng để lọc hoặc phân loại dữ liệu tài chính."
keywords:
  - "business type"
  - "loại hình kinh doanh"
  - "financial transaction"
  - "giao dịch tài chính"
  - "fi"
  - "finance"
  - "cds view"
  - "view"
  - "business"
  - "kinh doanh"
  - "tài chính"
semantic_en: "The BusinessType view provides a list of business types for financial transactions, which can be used to filter or categorize financial data."
app_component: FI-LOC-FI-KR
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
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - value-help
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_BUSINESSTYPEVH

**Businesstypevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
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
| `BusinessType` | ✓ | |  | `gestyp` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Type of Business'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'BusinessType',
  usageType: { dataClass: #MASTER,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@ObjectModel.supportedCapabilities: 
   [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ] 
define view entity I_BusinessTypeVH as select from bustype
{
  key bustype.gestyp as BusinessType
}
```
