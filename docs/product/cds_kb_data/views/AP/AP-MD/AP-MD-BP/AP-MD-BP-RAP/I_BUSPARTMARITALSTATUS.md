---
name: I_BUSPARTMARITALSTATUS
description: "Business PartnerMARITALSTATUS"
semantic_vi: "View I_BUSPARTMARITALSTATUS cung cấp thông tin về tình trạng hôn nhân của đối tác kinh doanh, có ích khi quản lý dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "marital status"
  - "tình trạng hôn nhân"
  - "đối tác kinh doanh"
  - "cds view"
  - "view"
  - "sap"
  - "ap-md-bp-rap"
  - "lob other"
semantic_en: "The I_BUSPARTMARITALSTATUS view provides information about the marital status of business partners, which is useful when managing business partner data."
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
# I_BUSPARTMARITALSTATUS

**Business PartnerMARITALSTATUS**

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
| `MaritalStatus` | ✓ | |  | `marst` | `CHAR(1)` | Marital Status of Business Partner |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartMaritalStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPBMARITALST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'MaritalStatus',
  sapObjectNodeType.name: 'BusinessPartnerMaritalStatus',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'BUPA Marital Status'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusPartMaritalStatus as select from tb027
association [0..*] to I_BusPartMaritalStatusText as _Text on $projection.MaritalStatus = _Text.MaritalStatus


 {
 @ObjectModel.text.association: '_Text'
 key marst  as MaritalStatus,
//_MaritalStatus.MaritalStatusName, 
 _Text
}
```
