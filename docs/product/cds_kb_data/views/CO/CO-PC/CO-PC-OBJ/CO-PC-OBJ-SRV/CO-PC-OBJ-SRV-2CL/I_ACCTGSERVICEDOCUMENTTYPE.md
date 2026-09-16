---
name: I_ACCTGSERVICEDOCUMENTTYPE
description: "ACCTGService DocumentUMENTTYPE"
semantic_vi: "View I_ACCTGSERVICEDOCUMENTTYPE cung cấp thông tin về loại tài liệu dịch vụ được sử dụng trong quản lý, giúp quản lý và theo dõi tài liệu dịch vụ trong hệ thống SAP."
keywords:
  - "service document type"
  - "tài liệu dịch vụ"
  - "loại tài liệu dịch vụ"
  - "controlling"
  - "quản lý tài liệu dịch vụ"
  - "sap"
  - "co-pc-obj-srv-2cl"
  - "interface view"
  - "service document"
  - "component co-pc-obj-srv-2cl"
  - "lob controlling"
semantic_en: "The ACCTGService DocumentUMENTTYPE view provides information about service document types used in controlling, which is essential for managing and tracking service documents in SAP systems."
app_component: CO-PC-OBJ-SRV-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTTYPE

**ACCTGService DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
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
| `ServiceDocumentType` | ✓ | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Accounting Service Document Type'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.semanticKey: ['ServiceDocumentType']
@ObjectModel.supportedCapabilities: 
  [ #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #UI_PROVIDER_PROJECTION_SOURCE
  ]
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@Consumption.ranked: true

define view entity I_AcctgServiceDocumentType 
  as select from P_AcctgServiceDocumentItem
{
  @ObjectModel.text.element: ['ServiceDocumentTypeName']
  @UI.textArrangement: #TEXT_LAST
  @Search: { 
    defaultSearchElement: true, 
    ranking: #HIGH, 
    fuzzinessThreshold: 0.8 
  }
  key ServiceDocumentType,
 
  @Semantics.text: true
  @Search: { 
    defaultSearchElement: true, 
    ranking: #LOW, 
    fuzzinessThreshold: 0.8 
  }
  ServiceDocumentTypeName
}
group by
  ServiceDocumentType,
  ServiceDocumentTypeName
```
