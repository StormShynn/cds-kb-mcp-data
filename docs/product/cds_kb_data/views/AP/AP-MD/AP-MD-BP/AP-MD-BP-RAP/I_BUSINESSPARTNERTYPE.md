---
name: I_BUSINESSPARTNERTYPE
description: "Business PartnerTYPE"
semantic_vi: "View Business Partner TYPE cung cấp truy cập dữ liệu loại đối tác kinh doanh, được sử dụng để phân loại đối tác kinh doanh trong một công ty. Nó thường được sử dụng trong quản lý đối tác kinh doanh và các quy trình liên quan."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "partner type"
  - "loại đối tác kinh doanh"
  - "business partner management"
  - "quản lý đối tác kinh doanh"
  - "sap"
  - "ap-md-bp-rap"
  - "business partner type"
semantic_en: "The Business Partner TYPE view provides access to business partner type data, which is used to categorize business partners in a company. It is typically used in business partner management and related processes."
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
# I_BUSINESSPARTNERTYPE

**Business PartnerTYPE**

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
| `BusinessPartnerType` | ✓ | |  | `bpkind` | `CHAR(4)` | Business Partner Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_TYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BusinessPartnerType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Analytics: {
  dataExtraction.enabled: true,
  dataCategory: #DIMENSION,
  internalName: #LOCAL
} 
@EndUserText.label: 'Business Partner Types'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerType'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerType
  as select from tb004
  association [0..*] to I_BusinessPartnerTypeText as _Text on $projection.BusinessPartnerType = _Text.BusinessPartnerType
{
      @ObjectModel.text.association: '_Text'
  key bpkind as BusinessPartnerType,
      _Text
}
```
