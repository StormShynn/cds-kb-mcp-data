---
name: I_SERVICEDOCITEMCATEGORYTEXT
description: "Service DocumentITEMCATEGORYTEXT"
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
  - service
  - text
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMCATEGORYTEXT

**Service DocumentITEMCATEGORYTEXT**

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
| `ServiceDocItemCategory` | ✓ | |  | `itm_type` | `CHAR(4)` | Item Category |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key of Description |
| `ServiceDocItemCategoryName` |  | |  | `i_description` | `CHAR(40)` | Item Category Text |
| `SrvcDocItmCategoryShortName` |  | |  | `i_description_20` | `CHAR(20)` | Item Category Text(20 character) |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Category of Service Transac Item - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
  sqlViewName: 'ISERVDOCITMCATXT',
  compiler.compareFilter: true ,
  preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocItemCategory',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Analytics: {
//    dataCategory: #TEXT,
    dataExtraction: {
        enabled: true}
        }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true


define view I_ServiceDocItemCategoryText
  as select from crmc_item_type_t
  association [1..1] to I_ServiceDocItemCategory as _ServiceDocItemCategory on $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
  key itm_type         as ServiceDocItemCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,

      @Semantics.text: true
      i_description    as ServiceDocItemCategoryName,

      @Semantics.text: true
      i_description_20 as SrvcDocItmCategoryShortName,

      _ServiceDocItemCategory,
      _Language

}
```
