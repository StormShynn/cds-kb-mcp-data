---
name: I_CUSTMGMTITMBUSOBJTYPETEXT
description: "Custmgmtitmbusobjtypetext"
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
# I_CUSTMGMTITMBUSOBJTYPETEXT

**Custmgmtitmbusobjtypetext**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key of Description |
| `BusinessObjectTypeName` |  | |  | `s_description_20` | `CHAR(20)` | Description (20 Characters) |
| `BusinessObjectTypeDescription` |  | |  | `s_description` | `CHAR(40)` | Description |
| `_Language` | | ✓ | | | | |
| `_BusinessObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BusinessObjectType` | `I_CustMgmtItmBusObjType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Bus Obj Type of Srvc Trans Item - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICSMGITMBOTYPTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  dataCategory: #TEXT,
  representativeKey: 'BusinessObjectType',
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true


define view I_CustMgmtItmBusObjTypeText
  as select from crmc_subob_c_i_t
  association [0..1] to I_Language              as _Language           on $projection.Language = _Language.Language
  association [1..1] to I_CustMgmtItmBusObjType as _BusinessObjectType on $projection.BusinessObjectType = _BusinessObjectType.BusinessObjectType
{
      @ObjectModel.foreignKey.association: '_BusinessObjectType'
  key subobj_category     as BusinessObjectType,

      @Semantics.language: true
  key langu               as Language,
      @Semantics.text: true
      s_description_20    as BusinessObjectTypeName,
      @Semantics.text: true
      s_description       as BusinessObjectTypeDescription,

      _BusinessObjectType,
      _Language
}
```
