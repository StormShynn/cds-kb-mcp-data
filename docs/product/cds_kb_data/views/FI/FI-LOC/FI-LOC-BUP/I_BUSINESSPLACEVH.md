---
name: I_BUSINESSPLACEVH
description: "Businessplacevh"
semantic_vi: "View Businessplacevh CDS cung cấp dữ liệu mã công ty, địa điểm kinh doanh và mô tả địa điểm kinh doanh, có ích cho các truy vấn liên quan đến địa điểm tài chính và địa điểm kinh doanh."
keywords:
  - "business place"
  - "địa điểm kinh doanh"
  - "company code"
  - "mã công ty"
  - "financial location"
  - "địa điểm tài chính"
  - "sap fi"
  - "fi loc"
  - "fi loc bup"
  - "interface view"
  - "value help"
semantic_en: "The Businessplacevh CDS view provides company code, business place, and business place description data, which is useful for financial location and business place-related queries."
app_component: FI-LOC-BUP
software_component: SAPSCORE
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
  - FI
  - FI-LOC
  - FI-LOC-BUP
  - interface-view
  - value-help
  - component:FI-LOC-BUP
  - lob:Finance
---
# I_BUSINESSPLACEVH

**Businessplacevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `BusinessPlace` | ✓ | |  |  |  |  |
| `BusinessPlaceDescription` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked:true
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'BusinessPlace',
                dataCategory: #VALUE_HELP,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #ORGANIZATIONAL }
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Value for Business Place'
define view entity I_BusinessPlaceVH as select from I_BusinessPlace  {
    @Search.defaultSearchElement:true
    @Search.fuzzinessThreshold:0.7
    @Search.ranking:#LOW
key CompanyCode,
    @Search.defaultSearchElement:true
    @Search.fuzzinessThreshold:0.8
    @Search.ranking:#HIGH
    @ObjectModel.text.element:['BusinessPlaceDescription']
key BusinessPlace,
//    @Search.defaultSearchElement:true
    @Semantics.text:true
    BusinessPlaceDescription
  
}
where BusinessPlaceStartDate <= $session.system_date
  and BusinessPlaceEndDate >= $session.system_date
```
