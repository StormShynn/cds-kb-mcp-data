---
name: I_BUSINESSPARTNERSTANDARDUSAGE
description: "Business PartnerSTANDARDUSAGE"
semantic_vi: "Chỉ ra thông tin sử dụng tiêu chuẩn cho đối tác kinh doanh, có thể được sử dụng để xác định các vai trò hoặc chức năng điển hình của đối tác kinh doanh trong tổ chức."
keywords:
  - "business partner"
  - "standard usage"
  - "đối tác kinh doanh"
  - "sử dụng tiêu chuẩn"
  - "ap-md-bp"
  - "interface view"
  - "lob other"
  - "bo business partner"
semantic_en: "Exposes standard usage information for business partners, which can be used to determine the typical roles or functions of a business partner within an organization."
app_component: AP-MD-BP
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
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERSTANDARDUSAGE

**Business PartnerSTANDARDUSAGE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
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
| `BusinessPartnerStandardUsage` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartStandardUsageText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSTDUSAGE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerStandardUsage'
@ObjectModel.representativeKey: 'BusinessPartnerStandardUsage'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Basic View for BP Standard Usage'
define view I_Businesspartnerstandardusage 
as select from dd07l 
association [0..*] to I_BusPartStandardUsageText as _Text on $projection.BusinessPartnerStandardUsage = _Text.BusinessPartnerStandardUsage
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH     
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Birth Date Status'
      key domvalue_l           as BusinessPartnerStandardUsage,
      _Text  
}
where
  domname = 'XFELD'
  and domvalue_l  <> ' ' 
  and  domvalue_l  <> ''
```
