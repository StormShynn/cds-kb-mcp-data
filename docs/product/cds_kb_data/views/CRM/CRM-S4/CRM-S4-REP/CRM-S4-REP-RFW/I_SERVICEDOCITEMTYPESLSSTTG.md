---
name: I_SERVICEDOCITEMTYPESLSSTTG
description: "Service DocumentITEMTYPESLSSTTG"
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
# I_SERVICEDOCITEMTYPESLSSTTG

**Service DocumentITEMTYPESLSSTTG**

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
| `ItemIsBillingRelevant` |  | |  | `billing_relevant` | `CHAR(1)` | Billing Relevance |
| `SrvcDocItemCategoryIsQuotation` |  | |  | `case is_quotation when '0' then ' ' when '2' then 'X' when '3' then ' ' else ' ' end` | `CHAR(1)` |  |
| `SrvcDocQuotationItemIsCopied` |  | |  | `copy_quote` | `CHAR(1)` | Subsequent Processing for Quotation |
| `_ServiceDocItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Setting for Srvc Trans Item Cat'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISERVDOCITMSLSTG',
  compiler.compareFilter: true ,
  preserveKey: true
}

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'ServiceDocItemCategory',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true



define view I_ServiceDocItemTypeSlsSttg
  as select from crmc_sales_item
  association [1..1] to I_ServiceDocItemCategory as _ServiceDocItemCategory on $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
{

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
  key itm_type             as ServiceDocItemCategory,
      billing_relevant     as ItemIsBillingRelevant,
      @Semantics.booleanIndicator 
       case is_quotation
         when '0' then ' '
         when '2' then 'X'
         when '3' then ' '
                  else ' '
       end                  as SrvcDocItemCategoryIsQuotation,
       @Semantics.booleanIndicator 
       copy_quote           as SrvcDocQuotationItemIsCopied,      

      _ServiceDocItemCategory

}
```
