---
name: I_BUSPARTADDRDEPDNTTAXTYPEVH
description: "Business PartnerADDRDEPDNTTAXTYPEVH"
semantic_vi: "View ADDRDEPDNTTAXTYPEVH của Đối tác Kinh doanh cung cấp hỗ trợ giá trị cho loại thuế liên quan đến đối tác kinh doanh, thường được sử dụng khi tạo hoặc cập nhật dữ liệu cơ bản của đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "tax type"
  - "loại thuế"
  - "value help"
  - "hỗ trợ giá trị"
  - "sap"
  - "ca-gtf-csc"
  - "cross-application components"
semantic_en: "The Business Partner ADDRDEPDNTTAXTYPEVH view provides a value help for tax types associated with business partners, typically used when creating or maintaining business partner master data."
app_component: CA-GTF-CSC
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - business-partner
  - tax
  - component:CA-GTF-CSC
  - lob:Cross-Application Components
---
# I_BUSPARTADDRDEPDNTTAXTYPEVH

**Business PartnerADDRDEPDNTTAXTYPEVH**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC` |
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
| `BPTaxTypeName` |  | |  | `text` | `CHAR(40)` | Name: Business Partner Tax Number Categories |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADTAXTYPEVH'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.dataCategory: #VALUE_HELP
//@ObjectModel.representativeKey: 'BPTaxType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Search.searchable: true
@VDM.viewType: #BASIC

@EndUserText.label: 'BP Address Dependent Tax Category'

define view I_BusPartAddrDepdntTaxTypeVH
  as select from bptaxtypeadr_f4h
{
      @Search.defaultSearchElement: true
  key taxtype as BPTaxType,
      @EndUserText.label: 'Tax Category Description'
      @UI.identification.label: 'Tax Category Description'
      text as BPTaxTypeName
}
where spras = $session.system_language
```
