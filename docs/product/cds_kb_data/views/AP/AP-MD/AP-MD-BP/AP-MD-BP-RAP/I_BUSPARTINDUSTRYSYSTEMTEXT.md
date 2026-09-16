---
name: I_BUSPARTINDUSTRYSYSTEMTEXT
description: "Business PartnerINDUSTRYSYSTEMTEXT"
semantic_vi: "Chứa dữ liệu văn bản hệ thống ngành cho đối tác kinh doanh, cung cấp cách thức để lấy văn bản mô tả hệ thống ngành trong các ngôn ngữ khác nhau."
keywords:
  - "business partner"
  - "industry system"
  - "text view"
  - "sap cds"
  - "ap-md-bp-rap"
  - "lob other"
  - "language"
  - "industry system type"
  - "industry system name"
semantic_en: "Exposes industry system text data for business partners, providing a way to retrieve text descriptions for industry systems in different languages."
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
# I_BUSPARTINDUSTRYSYSTEMTEXT

**Business PartnerINDUSTRYSYSTEMTEXT**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `IndustrySystemType` | ✓ | |  | `istype` | `CHAR(4)` | Industry System |
| `IndustrySystemName` |  | |  | `bez30` | `CHAR(30)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDSYSTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Industry System - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'IndustrySystemType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartIndustrySystemText
  as select from tb038t
{
      @Semantics.language: true
  key langu as Language,
  key istype as IndustrySystemType,
      @Semantics.text: true
      bez30 as IndustrySystemName
}
```
