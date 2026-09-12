---
name: I_ACCTGSERVICEDOCUMENTTYPEVH
description: "ACCTGService DocumentUMENTTYPEVH"
semantic_vi: "Chứa các loại tài liệu kế toán dịch vụ, được sử dụng để lọc hoặc truy xuất các tài liệu dịch vụ theo loại."
keywords:
  - "accounting"
  - "service document"
  - "document type"
  - "service document type"
  - "dịch vụ"
  - "tài liệu kế toán"
  - "loại tài liệu kế toán"
  - "co-pc"
  - "co-pc-obj"
  - "interface-view"
  - "value-help"
  - "service"
semantic_en: "Exposes accounting service document types, used to filter or retrieve service documents by their type."
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
  - value-help
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTTYPEVH

**ACCTGService DocumentUMENTTYPEVH**

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
@AbapCatalog.sqlViewName: 'IFIACSRVDOCTYPVH'
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocumentType']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Service Document Type'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentTypeVH 
  as select from P_AcctgServiceDocumentItem 
  
{
      @ObjectModel.text.element: ['ServiceDocumentTypeName']
      @UI.textArrangement: #TEXT_LAST
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentTypeName
}
group by ServiceDocumentType, ServiceDocumentTypeName
```
