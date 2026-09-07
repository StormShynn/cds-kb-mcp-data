---
name: I_BUSPARTMARITALSTATUSTEXT
description: "Business PartnerMARITALSTATUSTEXT"
semantic_vi: "View I_BUSPARTMARITALSTATUSTEXT cung cấp mô tả văn bản cho trạng thái hôn nhân đối tác kinh doanh, có thể được sử dụng khi hiển thị hoặc báo cáo thông tin đối tác kinh doanh."
keywords:
  - "business partner"
  - "marital status"
  - "text view"
  - "status"
  - "language"
  - "description"
  - "sap"
  - "cds view"
  - "ap-md-bp-rap"
  - "lob other"
semantic_en: "The I_BUSPARTMARITALSTATUSTEXT view provides text descriptions for business partner marital status, which can be used when displaying or reporting on business partner information."
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
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTMARITALSTATUSTEXT

**Business PartnerMARITALSTATUSTEXT**

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
| `MaritalStatus` | ✓ | |  | `marst` | `CHAR(1)` | Marital Status of Business Partner |
| `MaritalStatusName` |  | |  | `bez20` | `CHAR(20)` | Short name |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPBMARITALSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'BUPA Marital Status - Text'
@ObjectModel: {
  representativeKey: 'MaritalStatus',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusPartMaritalStatusText as select from tb027t {
  @Semantics.language: true
key spras as Language ,
key marst as MaritalStatus,
  @Semantics.text: true
  @EndUserText.label: 'Description'  
bez20  as MaritalStatusName
}
```
