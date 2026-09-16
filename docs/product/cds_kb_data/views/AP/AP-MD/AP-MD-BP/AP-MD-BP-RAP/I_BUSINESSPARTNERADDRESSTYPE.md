---
name: I_BUSINESSPARTNERADDRESSTYPE
description: "Business PartnerADDRESSTYPE"
semantic_vi: "View Business Partner Address Type cung cấp thông tin về các loại địa chỉ liên quan đến đối tác kinh doanh, chẳng hạn như địa chỉ hóa đơn hoặc địa chỉ giao hàng."
keywords:
  - "business partner"
  - "address type"
  - "address"
  - "partner"
  - "sap"
  - "ap-md-bp-rap"
  - "address type view"
  - "đối tác kinh doanh"
  - "địa chỉ"
  - "loại địa chỉ"
semantic_en: "The Business Partner Address Type view provides information about the types of addresses associated with business partners, such as billing or shipping addresses."
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
# I_BUSINESSPARTNERADDRESSTYPE

**Business PartnerADDRESSTYPE**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerAddressTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Address Types'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  representativeKey: 'AddressType',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ,
                           #EXTRACTION_DATA_SOURCE ],
  sapObjectNodeType.name: 'BPAddressUsageCode'
}
                                     
define view I_BusinessPartnerAddressType
  as select from tb009
  association [0..*] to I_BusinessPartnerAddressTypeT as _Text on $projection.AddressType = _Text.AddressType   
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key adr_kind as AddressType,
      //      xmult
  _Text
}
```
