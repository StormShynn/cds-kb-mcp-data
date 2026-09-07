---
name: I_BUSPARTOCCUPATIONTEXT
description: "Business PartnerOCCUPATIONTEXT"
semantic_vi: "View Business Partner Occupation Text cung cấp mô tả công việc cho đối tác kinh doanh trong các ngôn ngữ khác nhau. Nó có thể được sử dụng để lấy và hiển thị thông tin công việc cho đối tác kinh doanh trong các ngôn ngữ khác nhau."
keywords:
  - "business partner"
  - "occupation"
  - "description"
  - "language"
  - "sap"
  - "cds view"
  - "abap"
  - "cloud"
  - "ap-md-bp-rap"
  - "lob other"
semantic_en: "The Business Partner Occupation Text view provides occupation descriptions for business partners in different languages. It can be used to retrieve and display occupation information for business partners in various languages."
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
# I_BUSPARTOCCUPATIONTEXT

**Business PartnerOCCUPATIONTEXT**

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
| `BusinessPartnerOccupation` | ✓ | |  | `jobgr` | `CHAR(4)` | Occupation/group |
| `OccupationDescription` |  | |  | `bez30` | `CHAR(70)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPOCCTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  representativeKey: 'BusinessPartnerOccupation',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Occupation - Text'
define view I_BusPartOccupationText as select from tb028t {
  @Semantics.language: true
  key spras  as Language,
  key jobgr  as BusinessPartnerOccupation,
    @Semantics.text: true
  bez30      as OccupationDescription
}
```
