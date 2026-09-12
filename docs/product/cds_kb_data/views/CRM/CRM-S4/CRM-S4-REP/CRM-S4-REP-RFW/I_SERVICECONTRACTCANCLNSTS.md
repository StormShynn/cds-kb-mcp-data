---
name: I_SERVICECONTRACTCANCLNSTS
description: "Servicecontractcanclnsts"
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
  - contract
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTCANCLNSTS

**Servicecontractcanclnsts**

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
| `ServiceContractCanclnSts` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_ServiceContractCanclnStsTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractCanclnStsTxt` | `I_ServiceContractCanclnStsTxt` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRVCCNTCANCSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    representativeKey: 'ServiceContractCanclnSts',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                            #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SQL_DATA_SOURCE, 
                            #CDS_MODELING_DATA_SOURCE]
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Service Contract Cancellation Status'
define view I_ServiceContractCanclnSts
  as select from dd07l
  association [1..*] to I_ServiceContractCanclnStsTxt as _ServiceContractCanclnStsTxt on $projection.ServiceContractCanclnSts = _ServiceContractCanclnStsTxt.ServiceContractCanclnSts
{

      @ObjectModel.text.association: '_ServiceContractCanclnStsTxt'
  key domvalue_l as ServiceContractCanclnSts,

      _ServiceContractCanclnStsTxt
}
where
      domname  = 'CRMS4_STAT_CONTRACT_CANCELLED'
  and as4local = 'A'
```
