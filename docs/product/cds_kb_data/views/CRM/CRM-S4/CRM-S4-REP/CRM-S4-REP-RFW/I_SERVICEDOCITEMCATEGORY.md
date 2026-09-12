---
name: I_SERVICEDOCITEMCATEGORY
description: "Service DocumentITEMCATEGORY"
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
  - service
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMCATEGORY

**Service DocumentITEMCATEGORY**

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
| `ServiceObjectType` |  | |  | `object_type` | `CHAR(10)` | Service Item Object Type |
| `ItemIsBillingRelevant` |  | | `_ServiceDocItemTypeSlsSttg` | `ItemIsBillingRelevant` | `CHAR(1)` | Billing Relevance |
| `StatusProfile` |  | |  | `user_stat_proc` | `CHAR(8)` | Status Profile |
| `SrvcMgmtPrtnDetnProcedure` |  | |  | `part_determ_proc` | `CHAR(8)` | ID of a Partner Determination Procedure |
| `_ServiceDocItemCategoryText` | | ✓ | | | | |
| `_ServiceDocItemTypeSlsSttg` | | ✓ | | | | |
| `_SrvcMgmtPrtnDetnProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategoryText` | `I_ServiceDocItemCategoryText` | [1..*] |
| `_ServiceDocItemTypeSlsSttg` | `I_ServiceDocItemTypeSlsSttg` | [0..1] |
| `_SrvcMgmtPrtnDetnProcedure` | `I_SrvcMgmtPrtnDetnProcedure` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Category of Service Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
  sqlViewName: 'ISERVDOCITMCAT',
  compiler.compareFilter: true ,
  preserveKey: true
 }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}

@VDM.viewType: #BASIC


@ObjectModel:{
  usageType.dataClass: #CUSTOMIZING,
  usageType.serviceQuality: #A ,
  usageType.sizeCategory: #S ,
  representativeKey: 'ServiceDocItemCategory',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
}
@Search.searchable: true
@Consumption.ranked:true

@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}

//! Code list for the Service Item Category
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentItemCategory'

define view I_ServiceDocItemCategory
  as select from crmc_item_type
  association [1..*] to I_ServiceDocItemCategoryText as _ServiceDocItemCategoryText on $projection.ServiceDocItemCategory = _ServiceDocItemCategoryText.ServiceDocItemCategory
  association [0..1] to I_ServiceDocItemTypeSlsSttg  as _ServiceDocItemTypeSlsSttg  on $projection.ServiceDocItemCategory = _ServiceDocItemTypeSlsSttg.ServiceDocItemCategory
  association [1..1] to I_SrvcMgmtPrtnDetnProcedure  as _SrvcMgmtPrtnDetnProcedure  on $projection.SrvcMgmtPrtnDetnProcedure = _SrvcMgmtPrtnDetnProcedure.SrvcMgmtPrtnDetnProcedure
  
{
      @ObjectModel.text.association: '_ServiceDocItemCategoryText'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key itm_type          as ServiceDocItemCategory,
      object_type       as ServiceObjectType,
      _ServiceDocItemTypeSlsSttg.ItemIsBillingRelevant,
      user_stat_proc    as StatusProfile,
      @ObjectModel.foreignKey.association: '_SrvcMgmtPrtnDetnProcedure'
      part_determ_proc  as SrvcMgmtPrtnDetnProcedure,

      _ServiceDocItemCategoryText,
      _ServiceDocItemTypeSlsSttg,
      _SrvcMgmtPrtnDetnProcedure
}
```
