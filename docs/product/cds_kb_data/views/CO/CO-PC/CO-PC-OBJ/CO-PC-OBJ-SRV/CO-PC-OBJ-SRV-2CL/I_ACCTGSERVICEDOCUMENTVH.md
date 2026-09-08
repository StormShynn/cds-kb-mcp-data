---
name: I_ACCTGSERVICEDOCUMENTVH
description: "ACCTGService DocumentUMENTVH"
semantic_vi: "View ACCTGService DocumentUMENTVH cung cấp truy cập dữ liệu về tài liệu dịch vụ, bao gồm loại tài liệu dịch vụ, mô tả và mã công ty và trung tâm lợi nhuận liên quan. Nó được sử dụng để lấy thông tin về tài liệu dịch vụ trong thành phần Controlling."
keywords:
  - "service document"
  - "tài liệu dịch vụ"
  - "controlling"
  - "service document type"
  - "loại tài liệu dịch vụ"
  - "company code"
  - "mã công ty"
  - "profit center"
  - "trung tâm lợi nhuận"
  - "sap controlling"
  - "cds view"
semantic_en: "The ACCTGService DocumentUMENTVH view provides access to service document data, including service document types, descriptions, and associated company codes and profit centers. It is used to retrieve information about service documents in the Controlling component."
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
# I_ACCTGSERVICEDOCUMENTVH

**ACCTGService DocumentUMENTVH**

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
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` | ✓ | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Service Document Description |
| `ServiceDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACSRVDOCVH'
@ObjectModel.representativeKey: 'ServiceDocument'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocument', 'ServiceDocumentType']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Service Document ID'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentVH
  as select from P_AcctgServiceDocumentItem 

{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocument,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentDescription,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocumentTypeName,
      CompanyCode,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ProfitCenter
}
group by ServiceDocumentType, ServiceDocument, ServiceDocumentDescription, ServiceDocumentTypeName, CompanyCode, ProfitCenter
```
