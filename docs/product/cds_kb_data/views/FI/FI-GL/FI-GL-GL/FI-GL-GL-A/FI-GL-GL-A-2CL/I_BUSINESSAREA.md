---
name: I_BUSINESSAREA
description: "Businessarea"
semantic_vi: "View I_BUSINESSAREA CDS hiển thị dữ liệu về lĩnh vực kinh doanh, được sử dụng để phân loại và theo dõi các giao dịch tài chính trong một công ty. Nó thường được sử dụng trong kế toán và báo cáo tài chính."
keywords:
  - "business area"
  - "lĩnh vực kinh doanh"
  - "general ledger"
  - "kế toán tổng hợp"
  - "financial reporting"
  - "báo cáo tài chính"
  - "sap fi-gl"
  - "fi-gl"
  - "finance"
  - "tài chính"
semantic_en: "The I_BUSINESSAREA CDS view exposes business area data, which is used to categorize and track financial transactions in a company. It is typically used in general ledger accounting and financial reporting."
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
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_BUSINESSAREA

**Businessarea**

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
| `BusinessArea` | ✓ | |  | `gsber` |  |  |
| `_Text` | | ✓ | | | | |
| `_BusinessAreaHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessAreaText` | [0..*] |
| `_BusinessAreaHierNode` | `I_BusinessAreaHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Business Area'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBUSAREA'
@ObjectModel.representativeKey: 'BusinessArea'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name: 'BusinessArea'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view I_BusinessArea
  as select from tgsb
  association [0..*] to I_BusinessAreaText     as _Text                 on $projection.BusinessArea = _Text.BusinessArea
  association [0..*] to I_BusinessAreaHierNode as _BusinessAreaHierNode on $projection.BusinessArea = _BusinessAreaHierNode.BusinessArea
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      @ObjectModel.hierarchy.association: '_BusinessAreaHierNode'
  key gsber as BusinessArea,
      _Text,
      _BusinessAreaHierNode

};
```
