---
name: I_SERVICECANCELLATIONPARTY
description: "Servicecancellationparty"
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECANCELLATIONPARTY

**Servicecancellationparty**

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
| `ServiceContractCanclnParty` | ✓ | |  | `canc_party` | `CHAR(4)` | Cancelling Party |
| `_ServiceCancellationPartyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCancellationPartyText` | `I_ServiceCancellationPartyText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Party'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCPARTY',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel: {
   representativeKey: 'ServiceContractCanclnParty',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
}
@Consumption.ranked: true
@Search.searchable: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}

//! Code list for the Service Contract Cancellation Party
@ObjectModel.sapObjectNodeType.name: 'ServiceContractCanclnType'

define view I_ServiceCancellationParty
  as select from crmc_party

  association [1..*] to I_ServiceCancellationPartyText as _ServiceCancellationPartyText on $projection.ServiceContractCanclnParty = _ServiceCancellationPartyText.ServiceContractCanclnParty

{

      @ObjectModel.text.association: '_ServiceCancellationPartyText'
      @Search: { ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Search.defaultSearchElement: true
  key canc_party as ServiceContractCanclnParty,

      _ServiceCancellationPartyText

}
```
