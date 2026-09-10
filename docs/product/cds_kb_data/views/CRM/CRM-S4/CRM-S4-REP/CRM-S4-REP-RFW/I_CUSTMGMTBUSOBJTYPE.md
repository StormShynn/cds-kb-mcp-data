---
name: I_CUSTMGMTBUSOBJTYPE
description: "Custmgmtbusobjtype"
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
# I_CUSTMGMTBUSOBJTYPE

**Custmgmtbusobjtype**

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
| `BusinessObjectType` | ✓ | |  | `subobj_category` | `CHAR(10)` | Business Transaction Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustMgmtBusObjTypeText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Bus Object Type of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICUSTMGMTBOTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'BusinessObjectType',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CustMgmtBusObjType'

@Search: {
  searchable: true
}

define view I_CustMgmtBusObjType
  as select from crmc_subob_cat

  association [1..*] to I_CustMgmtBusObjTypeText as _Text on $projection.BusinessObjectType = _Text.BusinessObjectType


{
      @ObjectModel.text.association: '_Text'
      @Search:{ defaultSearchElement: true }
  key subobj_category as BusinessObjectType,
      @Search:{ defaultSearchElement: true }
      _Text
}
```
