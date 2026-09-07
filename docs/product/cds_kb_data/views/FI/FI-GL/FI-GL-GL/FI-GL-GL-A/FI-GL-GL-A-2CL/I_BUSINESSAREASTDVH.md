---
name: I_BUSINESSAREASTDVH
description: "Businessareastdvh"
semantic_vi: "View Businessareastdvh cung cấp danh sách các khu vực kinh doanh, được sử dụng để phân loại và tổ chức dữ liệu tài chính trong hệ thống kế toán và sổ cái chung. Nó được sử dụng để lấy danh sách các khu vực kinh doanh có sẵn cho mục đích chọn lọc hoặc lọc."
keywords:
  - "business area"
  - "khu vực kinh doanh"
  - "accounting"
  - "sổ cái chung"
  - "financial data"
  - "dữ liệu tài chính"
  - "fi"
  - "fi-gl"
  - "fi-gl-gl"
  - "value help"
  - "standard value help"
semantic_en: "The Businessareastdvh view provides a list of business areas, which are used to categorize and organize financial data in accounting and general ledger systems. It is used to retrieve a list of available business areas for selection or filtering purposes."
app_component: FI-GL-GL-A-2CL
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
  - FI-GL-GL
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_BUSINESSAREASTDVH

**Businessareastdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `BusinessArea` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIBA__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BusinessArea'

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Business Area'
@Search.searchable: true

@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@Consumption.ranked: true

define view I_BusinessAreaStdVH as select from I_BusinessArea {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement:true
  @Search.fuzzinessThreshold:0.8
  @Search.ranking:#HIGH   
  key BusinessArea,

  _Text
}
```
