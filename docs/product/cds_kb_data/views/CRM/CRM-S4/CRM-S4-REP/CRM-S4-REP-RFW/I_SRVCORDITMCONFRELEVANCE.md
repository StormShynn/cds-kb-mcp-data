---
name: I_SRVCORDITMCONFRELEVANCE
description: "Srvcorditmconfrelevance"
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
# I_SRVCORDITMCONFRELEVANCE

**Srvcorditmconfrelevance**

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
| `SrvcOrderConfirmationRelevance` | ✓ | |  | `cast (domvalue_l as abap.char(1) )` | `CHAR(1)` |  |
| `_SrvcOrdItmConfRelevanceText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcOrdItmConfRelevanceText` | `I_SrvcOrdItmConfRelevanceText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Conf Relevance for Related Service Order'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVCONFRELSTS',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataExtraction.enabled: true,
    dataCategory: #DIMENSION
   }
@ObjectModel: {
   representativeKey: 'SrvcOrderConfirmationRelevance',
   sapObjectNodeType.name: 'SrvcOrdItmConfRelevance',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
   #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@Analytics.internalName:#LOCAL 
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcOrdItmConfRelevance
  as select from dd07l
  association [1..*] to I_SrvcOrdItmConfRelevanceText as _SrvcOrdItmConfRelevanceText on $projection.SrvcOrderConfirmationRelevance = _SrvcOrdItmConfRelevanceText.SrvcOrderConfirmationRelevance

{
      @ObjectModel.text.association: '_SrvcOrdItmConfRelevanceText'
      //      @EndUserText.label: 'Life Cycle Status'
      //      @Search.defaultSearchElement: true
  key cast (domvalue_l as abap.char(1) ) as SrvcOrderConfirmationRelevance,

      _SrvcOrdItmConfRelevanceText
}
where
      domname  = 'CRMS4_CONFIRM_RELEVANT'
  and as4local = 'A'
```
