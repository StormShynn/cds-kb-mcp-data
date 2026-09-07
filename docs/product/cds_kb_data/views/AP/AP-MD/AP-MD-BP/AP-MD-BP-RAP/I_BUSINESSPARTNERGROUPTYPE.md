---
name: I_BUSINESSPARTNERGROUPTYPE
description: "Business PartnerGROUPTYPE"
semantic_vi: "View Business Partner Group Type cung cấp thông tin về loại nhóm đối tác kinh doanh, được sử dụng để phân loại đối tác kinh doanh trong một công ty. View này có thể được sử dụng để truy xuất và quản lý loại nhóm đối tác kinh doanh trong hệ thống SAP."
keywords:
  - "business partner"
  - "partner"
  - "group type"
  - "đối tác kinh doanh"
  - "loại nhóm"
  - "sap"
  - "ap-md-bp-rap"
  - "business partner group type"
semantic_en: "The Business Partner Group Type view provides information about business partner group types, which are used to categorize business partners in a company. This view can be used to retrieve and manage business partner group types in a SAP system."
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
# I_BUSINESSPARTNERGROUPTYPE

**Business PartnerGROUPTYPE**

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
| `BusinessPartnerGroupType` | ✓ | |  | `partgrptyp` | `CHAR(4)` | Group type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerGroupTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name:'BusinessPartnerGroupType'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Basic view for Business Partner Group Types'
define view I_BusinessPartnerGroupType
  as select from tb025
  association [0..*] to I_BusinessPartnerGroupTypeText as _Text on  $projection.BusinessPartnerGroupType = _Text.BusinessPartnerGroupType
{
      @ObjectModel.text.association: '_Text'
  key partgrptyp as BusinessPartnerGroupType,
      _Text
}
```
