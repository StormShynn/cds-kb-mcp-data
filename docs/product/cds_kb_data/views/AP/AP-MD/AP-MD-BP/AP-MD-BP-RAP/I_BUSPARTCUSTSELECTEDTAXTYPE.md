---
name: I_BUSPARTCUSTSELECTEDTAXTYPE
description: "Business PartnerCUSTSELECTEDTAXTYPE"
semantic_vi: "View Business Partner CUSTSELECTEDTAXTYPE hiển thị loại thuế được chọn cho đối tác kinh doanh, có liên quan khi xử lý các giao dịch liên quan đến đối tác kinh doanh cụ thể."
keywords:
  - "business partner"
  - "tax type"
  - "đối tác kinh doanh"
  - "loại thuế"
  - "custselectedtaxtype"
  - "ap-md-bp-rap"
  - "sap"
  - "business partner tax type"
semantic_en: "The Business Partner CUSTSELECTEDTAXTYPE view exposes the selected tax type for a business partner, which is relevant when processing transactions involving a specific business partner."
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
  - tax
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTCUSTSELECTEDTAXTYPE

**Business PartnerCUSTSELECTEDTAXTYPE**

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
| `BPTaxType` | ✓ | |  | `taxtype` | `CHAR(4)` | Tax Number Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCUSTTAXTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Tax Number Categories'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BPTaxType',
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'BusinessPartnerTaxType',
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}

@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartCustSelectedTaxType
  as select from tfktaxnumtype_c
  association [0..*] to I_BusPartTaxTypeText as _Text on $projection.BPTaxType = _Text.BPTaxType
{
      @ObjectModel.text.association: '_Text'
  key taxtype as BPTaxType,
      _Text
}
```
