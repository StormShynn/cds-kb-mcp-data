---
name: I_BUSINESSPARTNERADDRESSTYPET
description: "Business PartnerADDRESSTYPET"
semantic_vi: "Chứa thông tin loại địa chỉ đối tác kinh doanh và ngôn ngữ, tên sử dụng liên quan. View này được sử dụng để lấy thông tin loại địa chỉ đối tác kinh doanh."
keywords:
  - "business partner"
  - "address type"
  - "address usage name"
  - "language"
  - "sap"
  - "ap-md-bp-rap"
  - "address"
  - "partner"
  - "lob other"
  - "bo business partner"
semantic_en: "Exposes business partner address types and their associated languages and usage names. This view is used to retrieve address type information for business partners."
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
  - address
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSTYPET

**Business PartnerADDRESSTYPET**

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
| `AddressType` | ✓ | |  | `adr_kind` | `CHAR(10)` | Address Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AddressUsageName` |  | |  | `textlong` | `CHAR(40)` | Name of Address Type |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRTYPETXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Business Partner Address Types Text'
@ObjectModel: {
  representativeKey: 'AddressType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusinessPartnerAddressTypeT
  as select from tb010
{
      @semanticKey: true
  key adr_kind  as AddressType,
      @Semantics.language:true
  key spras     as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      textlong as AddressUsageName
}
```
