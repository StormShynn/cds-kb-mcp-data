---
name: I_BUSINESSPARTNERGROUPINGTEXT
description: "Business PartnerGROUPINGTEXT"
semantic_vi: "View I_BUSINESSPARTNERGROUPINGTEXT hiển thị dữ liệu văn bản nhóm đối tác kinh doanh, được sử dụng để phân loại và mô tả đối tác kinh doanh trong một công ty. Nó có thể được sử dụng để lấy và hiển thị văn bản nhóm đối tác cho một đối tác kinh doanh cụ thể hoặc ngôn ngữ."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "grouping text"
  - "văn bản nhóm"
  - "business partner grouping"
  - "người dùng"
  - "ap-md-bp-rap"
  - "sap"
  - "cds view"
semantic_en: "The I_BUSINESSPARTNERGROUPINGTEXT view exposes business partner grouping text data, which is used to categorize and describe business partners in a company. It can be used to retrieve and display the grouping text for a specific business partner or language."
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERGROUPINGTEXT

**Business PartnerGROUPINGTEXT**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusinessPartnerGrouping` | ✓ | |  | `bu_group` | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerGroupingText` |  | |  | `txt40` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPINGTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerGrouping',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'Business Partner Grouping - Text'
define view I_BusinessPartnerGroupingText
  as select from tb002 
{
      @Semantics.language: true
  key spras    as Language,
  key bu_group as BusinessPartnerGrouping,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @EndUserText.label: 'Grouping Description'
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      txt40    as BusinessPartnerGroupingText
}
```
