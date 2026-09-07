---
name: I_BUSINESSPARTNERGROUPING
description: "Business PartnerGROUPING"
semantic_vi: "View I_BUSINESSPARTNERGROUPING hiển thị dữ liệu nhóm đối tác kinh doanh, được sử dụng để phân loại và quản lý đối tác kinh doanh trong một công ty."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "partner grouping"
  - "categorization"
  - "management"
  - "sap"
  - "ap-md-bp-rap"
  - "business partner grouping"
semantic_en: "The I_BUSINESSPARTNERGROUPING view exposes business partner grouping data, which is used to categorize and manage business partners in a company."
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERGROUPING

**Business PartnerGROUPING**

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
| `BusinessPartnerGrouping` | ✓ | |  | `bu_group` | `CHAR(4)` | Business Partner Grouping |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerGroupingText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPING'
@Search.searchable: true
@EndUserText.label: 'Business Partner Grouping'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@ObjectModel: {
  representativeKey: 'BusinessPartnerGrouping',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  resultSet.sizeCategory: #XS,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BusinessPartnerGrouping',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessPartnerGrouping 
  as select distinct from tb001
  association [0..*] to I_BusinessPartnerGroupingText as _Text on $projection.BusinessPartnerGrouping = _Text.BusinessPartnerGrouping 
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.filter.hidden: true
  key bu_group as BusinessPartnerGrouping,
      _Text    
} where tb001.xsuppress <> 'X'
```
