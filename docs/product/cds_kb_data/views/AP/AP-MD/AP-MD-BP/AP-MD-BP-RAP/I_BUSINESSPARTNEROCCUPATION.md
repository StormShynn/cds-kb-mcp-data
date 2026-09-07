---
name: I_BUSINESSPARTNEROCCUPATION
description: "Business PartnerOCCUPATION"
semantic_vi: "View Business Partner Occupation cung cấp thông tin về các nghề nghiệp của đối tác kinh doanh, có thể được sử dụng để phân loại và phân tích mối quan hệ kinh doanh."
keywords:
  - "business partner"
  - "occupation"
  - "công việc"
  - "đối tác kinh doanh"
  - "categorization"
  - "analysis"
  - "công ty"
  - "partner"
  - "ap-md-bp-rap"
  - "lob:other"
  - "bo:businesspartner"
semantic_en: "The Business Partner Occupation view provides information about the occupations of business partners, which can be used to categorize and analyze business relationships."
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
# I_BUSINESSPARTNEROCCUPATION

**Business PartnerOCCUPATION**

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
| `BusinessPartnerOccupation` | ✓ | |  | `jobgr` | `CHAR(4)` | Occupation/group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartOccupationText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPOCCUPATION'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Occupation'

@ObjectModel: {
  representativeKey: 'BusinessPartnerOccupation',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  resultSet.sizeCategory: #XS,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BusinessPartnerOccupation',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessPartnerOccupation as select  from tb028
association [0..*]to I_BusPartOccupationText as _Text on $projection.BusinessPartnerOccupation = _Text.BusinessPartnerOccupation
 {
 @ObjectModel.text.association: '_Text'
  key jobgr as BusinessPartnerOccupation,
  _Text
}
```
