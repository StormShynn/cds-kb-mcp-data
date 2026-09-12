---
name: I_CUSTMGMTITMBUSOBJTYPE
description: "Custmgmtitmbusobjtype"
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
# I_CUSTMGMTITMBUSOBJTYPE

**Custmgmtitmbusobjtype**

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
| `BusinessObjectType` | ✓ | |  | `subobj_category` | `CHAR(10)` | Service Item Object Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustMgmtItmBusObjTypeText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Bus Obj Type of Srvc Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICUSTMGTITMBOTYP',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'BusinessObjectType',
   sapObjectNodeType.name: 'CustMgmtItmBusObjType',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      internalName:#LOCAL,
      dataExtraction.enabled: true
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_CustMgmtItmBusObjType
  as select from crmc_subob_cat_i
  association [1..*] to I_CustMgmtItmBusObjTypeText as _Text on $projection.BusinessObjectType = _Text.BusinessObjectType
{
      @ObjectModel.text.association: '_Text'
  key subobj_category as BusinessObjectType,

      _Text
}
```
