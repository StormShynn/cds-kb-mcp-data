---
name: I_BUSINESSACTIVITYCATEGORY
description: "Businessactivitycategory"
semantic_vi: "View I_BUSINESSACTIVITYCATEGORY cung cấp truy cập vào các loại và lớp hoạt động kinh doanh, được sử dụng để phân loại hoạt động kinh doanh trong ứng dụng CRM."
keywords:
  - "business activity"
  - "loại hoạt động kinh doanh"
  - "lớp hoạt động kinh doanh"
  - "categorize"
  - "crm"
  - "activity category"
  - "loại hoạt động"
  - "loại và lớp hoạt động kinh doanh"
semantic_en: "The I_BUSINESSACTIVITYCATEGORY view provides access to business activity categories and classes, which are used to categorize business activities in CRM applications."
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSACTIVITYCATEGORY

**Businessactivitycategory**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `BusinessActivityCategory` | ✓ | |  | `category` |  |  |
| `BusinessActivityClass` |  | |  | `class` |  |  |
| `_BusinessActivityCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessActivityCategoryText` | `I_BusinessActivityCategoryText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSACTVCATEGORY'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Activity Category'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BusinessActivityCategory'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}
@ObjectModel.sapObjectNodeType.name: 'BusinessActivityCategory'

define view I_BusinessActivityCategory
  as select from crmc_act_categor
  association [1..*] to I_BusinessActivityCategoryText as _BusinessActivityCategoryText on $projection.BusinessActivityCategory = _BusinessActivityCategoryText.BusinessActivityCategory
{

      @ObjectModel.text.association: '_BusinessActivityCategoryText'
  key category                     as BusinessActivityCategory,
      class                        as BusinessActivityClass,

      _BusinessActivityCategoryText
}
```
