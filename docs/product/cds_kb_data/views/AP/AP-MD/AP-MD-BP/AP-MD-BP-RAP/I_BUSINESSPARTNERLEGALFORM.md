---
name: I_BUSINESSPARTNERLEGALFORM
description: "Business PartnerLEGALFORM"
semantic_vi: "View I_BUSINESSPARTNERLEGALFORM hiển thị các hình thức pháp lý của đối tác kinh doanh và được sử dụng khi truy xuất hoặc cập nhật thông tin hình thức pháp lý của đối tác kinh doanh."
keywords:
  - "business partner"
  - "legal form"
  - "partner"
  - "form"
  - "business partner legal form"
  - "đối tác kinh doanh"
  - "hình thức pháp lý"
  - "partner kinh doanh"
semantic_en: "The I_BUSINESSPARTNERLEGALFORM view exposes business partner legal forms and is used when retrieving or updating business partner legal form information."
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
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERLEGALFORM

**Business PartnerLEGALFORM**

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
| `LegalForm` | ✓ | |  | `legal_enty` | `CHAR(2)` | BP: Legal form of organization |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerLegalFormText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPLEGALFORM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Legal Form'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerLegalForm'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  representativeKey: 'LegalForm',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #ANALYTICAL_DIMENSION ,  
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                          #EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
}


define view I_BusinessPartnerLegalForm
  as select from tb019
  association [0..*] to I_BusinessPartnerLegalFormText as _Text on $projection.LegalForm = _Text.LegalForm
{
      @ObjectModel.text.association: '_Text'
  key legal_enty as LegalForm,
      _Text
}
```
