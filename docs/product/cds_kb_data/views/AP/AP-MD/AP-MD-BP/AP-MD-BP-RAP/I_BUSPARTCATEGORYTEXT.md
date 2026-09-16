---
name: I_BUSPARTCATEGORYTEXT
description: "Business PartnerCATEGORYTEXT"
semantic_vi: "View I_BUSPARTCATEGORYTEXT cung cấp mô tả văn bản cho các loại đối tác kinh doanh trong các ngôn ngữ khác nhau. Nó được sử dụng để lấy và hiển thị văn bản loại đối tác kinh doanh."
keywords:
  - "business partner"
  - "category text"
  - "language"
  - "sap"
  - "abap"
  - "cloud"
  - "cds view"
  - "ap-md-bp-rap"
  - "lob other"
  - "domain value"
semantic_en: "The I_BUSPARTCATEGORYTEXT view provides text descriptions for business partner categories in various languages. It is used to retrieve and display category text for business partners."
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTCATEGORYTEXT

**Business PartnerCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerCategory` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type )` | `CHAR(1)` | Business Partner Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerCategoryText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_CategoryValueHelp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CategoryValueHelp` | `I_BusPartCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCATEGORYTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerCategory',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #L,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Business Partner Category - Text'
@Search.searchable: true
define view I_BusPartCategoryText 
  as select from dd07t
  association [0..1] to I_BusPartCategory as _CategoryValueHelp on $projection.BusinessPartnerCategory = _CategoryValueHelp.BusinessPartnerCategory
{
      @ObjectModel.foreignKey.association: '_CategoryValueHelp'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_type )    as BusinessPartnerCategory,
       @Semantics.language: true
  key ddlanguage    as Language,
      @Semantics.text: true
      @EndUserText.label: 'Business Partner Category Description'
      ddtext  as BusinessPartnerCategoryText,
      @Search.defaultSearchElement: true
      @Consumption.hidden: true
      domvalue_l as DomainValue,
      
      _CategoryValueHelp   
}
where
  domname = 'BU_TYPE'
```
