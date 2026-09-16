---
name: I_ACCTGSERVICEDOCUMENTITEMVH
description: "ACCTGService DocumentUMENTITEMVH"
semantic_vi: "View ACCTGService Document Item cung cấp truy cập dữ liệu chi tiết về các mục của tài liệu dịch vụ, bao gồm loại tài liệu dịch vụ, mục và thông tin mã công ty."
keywords:
  - "service document"
  - "tài liệu dịch vụ"
  - "service document item"
  - "mục tài liệu dịch vụ"
  - "company code"
  - "mã công ty"
  - "sap cds view"
  - "view"
  - "service document type"
  - "loại tài liệu dịch vụ"
  - "service document item data"
  - "dữ liệu mục tài liệu dịch vụ"
semantic_en: "The ACCTGService Document Item View provides access to service document item data, including service document type, item, and company code information. It is used to retrieve detailed information about service document items."
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
  - item-level
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSERVICEDOCUMENTITEMVH

**ACCTGService DocumentUMENTITEMVH**

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
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | ✓ | |  |  | `NUMC(6)` | Service Document Item ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ServiceDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Service Document Description |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ServiceDocItemCategoryName` |  | |  | `cast( ServiceDocItemCategoryName as fco_srvdoc_item_type_desc preserving type )` | `CHAR(40)` | Service Document Item Category Description |
| `ServiceDocumentItemDescription` |  | |  |  | `CHAR(40)` | Service Document Item Description |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `ProductName` |  | |  | `_ProductText[1: Language = $session.system_language].ProductName` | `CHAR(40)` | Product Description |
| `PostingDate` |  | |  |  | `DATS(8)` | Service Document Date |
| `SrvcOrderConfirmationRelevance` |  | |  |  | `CHAR(1)` | Relevant for Confirmation |
| `_AcctgServiceDocumentTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AcctgServiceDocumentTypeVH` | `I_AcctgServiceDocumentTypeVH` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACSRVDOCITMVH'
@ObjectModel.representativeKey: 'ServiceDocumentItem'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.semanticKey: ['ServiceDocumentType', 'ServiceDocument', 'ServiceDocumentItem']
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Service Document Item ID'

@Metadata.ignorePropagatedAnnotations: true

define view I_AcctgServiceDocumentItemVH 
  as select from P_AcctgServiceDocumentItem as _AcctgServiceDocumentItem
  association [1..1] to I_AcctgServiceDocumentTypeVH as _AcctgServiceDocumentTypeVH on $projection.ServiceDocumentType = _AcctgServiceDocumentTypeVH.ServiceDocumentType
 
{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelp: '_AcctgServiceDocumentTypeVH'
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocumentType,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocument,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
  key ServiceDocumentItem,
      //ControllingObject,
      @UI.lineItem: [{importance: #HIGH}]
      CompanyCode,
      //ControllingArea,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ProfitCenter,
      //FunctionalArea,
      //ResultAnalysisInternalID,
      //Currency
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentTypeName,
      //ProfitCenterName,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentDescription,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      ServiceDocItemCategory,
      cast( ServiceDocItemCategoryName as fco_srvdoc_item_type_desc preserving type ) as ServiceDocItemCategoryName,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @UI.lineItem: [{importance: #HIGH}]
      ServiceDocumentItemDescription,
      @UI.lineItem: [{importance: #HIGH}]
      OriginallyRequestedProduct,
      _ProductText[1: Language = $session.system_language].ProductName  as ProductName,
      PostingDate,
      
      @Consumption.hidden: true
      SrvcOrderConfirmationRelevance,
      @Consumption.hidden: true
      _AcctgServiceDocumentTypeVH     
}
```
