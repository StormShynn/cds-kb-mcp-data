---
name: I_RESPONSEPROFILE
description: "Responseprofile"
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
# I_RESPONSEPROFILE

**Responseprofile**

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
| `ResponseProfile` | ✓ | |  | `srv_escal` | `CHAR(10)` | Response Profile |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ResponseProfileText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Response Profile'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IRSPPRFL',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  dataCategory: #VALUE_HELP,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'ResponseProfile',
  modelingPattern: #ANALYTICAL_DIMENSION,
  sapObjectNodeType.name: 'ServiceResponseProfile',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER,
                          #EXTRACTION_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
  }  
@Consumption.ranked: true  
@Search.searchable: true     

define view I_ResponseProfile
  as select from crmd_escal
  association [1..*] to I_ResponseProfileText as _Text on $projection.ResponseProfile = _Text.ResponseProfile
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key srv_escal as ResponseProfile,
      _Text

}
```
