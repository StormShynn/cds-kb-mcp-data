---
name: I_BUSINESSPARTNERLEGALFORMTEXT
description: "Business PartnerLEGALFORMTEXT"
semantic_vi: "View I_BUSINESSPARTNERLEGALFORMTEXT cung cấp dữ liệu văn bản về hình thức pháp lý của đối tác kinh doanh, có thể được sử dụng để hiển thị hoặc xử lý thông tin đối tác kinh doanh."
keywords:
  - "business partner"
  - "legal form"
  - "text view"
  - "partner"
  - "business partner legal form"
  - "sap cds view"
  - "ap-md-bp-rap"
  - "lob other"
  - "bo businesspartner"
semantic_en: "The I_BUSINESSPARTNERLEGALFORMTEXT view provides legal form text data for business partners, which can be used to display or process business partner information."
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
# I_BUSINESSPARTNERLEGALFORMTEXT

**Business PartnerLEGALFORMTEXT**

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
| `LegalForm` | ✓ | |  | `legal_enty` | `CHAR(2)` | BP: Legal form of organization |
| `LegalFormShortName` |  | |  | `textshort` | `CHAR(15)` | Short name |
| `LegalFormDescription` |  | |  | `textlong` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPLEGALFORMTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'LegalForm',
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
@EndUserText.label: 'Business Partner Legal Form - Text'
define view I_BusinessPartnerLegalFormText
  as select from tb020
{
      @Semantics.language: true
  key spras      as Language,
  key legal_enty as LegalForm,
      @Semantics.text: true
      @Search.defaultSearchElement: true  
      textshort  as LegalFormShortName,
      textlong   as LegalFormDescription
}
```
