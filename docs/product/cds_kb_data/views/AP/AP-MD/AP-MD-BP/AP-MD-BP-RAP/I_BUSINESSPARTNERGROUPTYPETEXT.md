---
name: I_BUSINESSPARTNERGROUPTYPETEXT
description: "Business PartnerGROUPTYPETEXT"
semantic_vi: "Chứa thông tin mô tả nhóm đối tác kinh doanh để sử dụng trong quản lý nhóm đối tác kinh doanh và các ứng dụng liên quan."
keywords:
  - "business partner"
  - "partner"
  - "group type"
  - "description"
  - "management"
  - "business partner group"
  - "group"
  - "type"
  - "partner group"
  - "sap"
  - "ap-md-bp-rap"
  - "ap-md-bp"
semantic_en: "Exposes business partner group type descriptions for use in business partner group type management and related applications."
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
# I_BUSINESSPARTNERGROUPTYPETEXT

**Business PartnerGROUPTYPETEXT**

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
| `BusinessPartnerGroupType` | ✓ | |  | `partgrptyp` | `CHAR(4)` | Group type |
| `BusPartGroupTypeShortDesc` |  | |  | `textshort` | `CHAR(15)` | Short name |
| `BusinessPartnerGroupTypeDesc` |  | |  | `textlong` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGRPTYPETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerGroupType',
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
@EndUserText.label: 'Business Partner Group Type - Text'
define view I_BusinessPartnerGroupTypeText
  as select from tb026
{
      @Semantics.language: true
  key spras      as Language,
  key partgrptyp as BusinessPartnerGroupType,      
      @Semantics.text: true
      @Search.defaultSearchElement: true      
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.filter.hidden: true
      textshort  as BusPartGroupTypeShortDesc,
      textlong   as BusinessPartnerGroupTypeDesc
}
```
