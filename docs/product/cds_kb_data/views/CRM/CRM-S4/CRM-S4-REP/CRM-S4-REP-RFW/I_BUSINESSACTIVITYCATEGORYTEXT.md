---
name: I_BUSINESSACTIVITYCATEGORYTEXT
description: "Businessactivitycategorytext"
semantic_vi: "Chỉ ra các loại hoạt động kinh doanh với tên gọi trong các ngôn ngữ khác nhau, hữu ích cho việc hiển thị thông tin loại hoạt động trong các ứng dụng đa ngôn ngữ."
keywords:
  - "business activity category"
  - "loại hoạt động kinh doanh"
  - "category name"
  - "tên loại hoạt động"
  - "language"
  - "ngôn ngữ"
  - "crm"
  - "interface view"
  - "text view"
  - "sap crm"
  - "business activity"
  - "hoạt động kinh doanh"
semantic_en: "Exposes business activity categories with their names in different languages, useful for displaying category information in multi-language applications."
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
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSACTIVITYCATEGORYTEXT

**Businessactivitycategorytext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `BusinessActivityCategoryName` |  | |  | `description` |  |  |
| `_BusinessActivityCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessActivityCategory` | `I_BusinessActivityCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSACTVCATETEXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Activity Category - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BusinessActivityCategory'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessActivityCategoryText
  as select from crmc_act_cat_t
  association [1..1] to I_BusinessActivityCategory as _BusinessActivityCategory on $projection.BusinessActivityCategory = _BusinessActivityCategory.BusinessActivityCategory
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_BusinessActivityCategory'
  key category                                     as BusinessActivityCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                        as Language,
      @Semantics.text: true
      description                                  as BusinessActivityCategoryName,

      _BusinessActivityCategory,
      _Language

}
```
