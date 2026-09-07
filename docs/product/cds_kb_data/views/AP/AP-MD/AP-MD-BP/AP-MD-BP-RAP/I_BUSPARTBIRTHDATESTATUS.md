---
name: I_BUSPARTBIRTHDATESTATUS
description: "Business PartnerBIRTHDATESTATUS"
semantic_vi: "View Business Partner BIRTHDATESTATUS hiển thị trạng thái ngày sinh của đối tác kinh doanh, có thể được sử dụng để xác thực hoặc cập nhật thông tin đối tác kinh doanh."
keywords:
  - "business partner"
  - "birth date status"
  - "đối tác kinh doanh"
  - "ngày sinh"
  - "trạng thái"
  - "validate"
  - "update"
  - "sap"
  - "cds view"
  - "ap-md-bp-rap"
semantic_en: "The Business Partner BIRTHDATESTATUS view exposes the status of a business partner's birthdate, which can be used to validate or update a business partner's information."
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
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTBIRTHDATESTATUS

**Business PartnerBIRTHDATESTATUS**

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
| `BusinessPartnerBirthDateStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartBirthDateStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPBIRTHSTATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #META,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BusinessPartnerBirthDateStatus',
  sapObjectNodeType.name: 'BusinessPartnerBirthDateStatus',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Business Partner Birth Date status'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartBirthDateStatus
  as select  from dd07l
  association [0..*] to I_BusPartBirthDateStatusText as _Text on $projection.BusinessPartnerBirthDateStatus = _Text.BusinessPartnerBirthDateStatus
{     @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH     
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Birth Date Status'
      key domvalue_l           as BusinessPartnerBirthDateStatus,
      _Text
}
where
  domname = 'BU_BIRTHDT_STATUS'
  and domvalue_l  <> ' ' 
  and  domvalue_l  <> ''
```
