---
name: I_BUSPARTSTANDARDUSAGETEXT
description: "Business PartnerSTANDARDUSAGETEXT"
semantic_vi: "Chỉ ra văn bản sử dụng tiêu chuẩn cho đối tác kinh doanh, được sử dụng để hiển thị thông tin mô tả về việc sử dụng tiêu chuẩn của đối tác kinh doanh."
keywords:
  - "business partner"
  - "standard usage"
  - "text view"
  - "interface view"
  - "ap-md-bp"
  - "business partner standard usage"
  - "lob other"
  - "sap md bp"
semantic_en: "Exposes standard usage text for business partners, used to display descriptive information about a business partner's standard usage."
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
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP
  - lob:Other
---
# I_BUSPARTSTANDARDUSAGETEXT

**Business PartnerSTANDARDUSAGETEXT**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerStandardUsage` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `BusPartStandardUsageText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSTDUSAGETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BusinessPartnerStandardUsage'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Texts for I_Businesspartnerstandardusage'
define view I_BusPartStandardUsageText as select from dd07t 
{
 @Semantics.language: true
  key ddlanguage as Language,
      //      @Search.defaultSearchElement: true
  key domvalue_l as BusinessPartnerStandardUsage,
      @Semantics.text: true
      ddtext     as BusPartStandardUsageText  
}
where
  domname = 'XFELD'
```
