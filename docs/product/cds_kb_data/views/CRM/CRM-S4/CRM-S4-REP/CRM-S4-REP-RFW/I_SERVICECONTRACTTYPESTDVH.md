---
name: I_SERVICECONTRACTTYPESTDVH
description: "Servicecontracttypestdvh"
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
  - value-help
  - standard-value-help
  - service
  - contract
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTTYPESTDVH

**Servicecontracttypestdvh**

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
| `ServiceDocumentType` | ✓ | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Leading Business Transaction Category |
| `_ServiceDocumentTypeText` | | ✓ | | | | |
| `_ServiceObjectTypeText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISERVCONTRTYPEVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ServiceDocumentType'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #XL, dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Service Contract Type'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked:true

define view I_ServiceContractTypeStdVH
  as select from I_ServiceDocumentType
{

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key ServiceDocumentType,

      @Search.defaultSearchElement: true  
      @Search.ranking: #LOW
      ServiceObjectType,

      _ServiceDocumentTypeText,
      _ServiceObjectTypeText
}
where
  ServiceObjectType = 'BUS2000112'
```
