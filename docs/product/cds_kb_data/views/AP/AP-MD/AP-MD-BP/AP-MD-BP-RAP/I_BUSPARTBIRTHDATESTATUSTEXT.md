---
name: I_BUSPARTBIRTHDATESTATUSTEXT
description: "Business PartnerBIRTHDATESTATUSTEXT"
semantic_vi: "View Business Partner Birth Date Status Text cung cấp bản thể hiện văn bản của trạng thái ngày sinh đối tác kinh doanh, có thể được sử dụng để hiển thị hoặc xác minh trạng thái trong các ứng dụng kinh doanh khác nhau."
keywords:
  - "business partner"
  - "birth date status"
  - "text view"
  - "sap cds"
  - "ap-md-bp-rap"
  - "business partner birth date status text"
  - "lob other"
  - "language"
  - "business partner birth date status"
  - "buspart birth date status text"
semantic_en: "The Business Partner Birth Date Status Text view provides the text representation of the birth date status of a business partner, which can be used to display or validate the status in various business applications."
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
# I_BUSPARTBIRTHDATESTATUSTEXT

**Business PartnerBIRTHDATESTATUSTEXT**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerBirthDateStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `BusPartBirthDateStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPBIRTHSTATETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Birth Date Status - Text'
@ObjectModel: {
  representativeKey: 'BusinessPartnerBirthDateStatus',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartBirthDateStatusText
  as select from dd07t
{
      @Semantics.language: true
  key ddlanguage as Language,
      //      @Search.defaultSearchElement: true
  key domvalue_l as BusinessPartnerBirthDateStatus,
      @Semantics.text: true
      ddtext     as BusPartBirthDateStatusText

}
where
  domname = 'BU_BIRTHDT_STATUS'
```
