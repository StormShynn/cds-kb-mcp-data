---
name: I_SERVICEDOCBILLINGSTATUS
description: "Service DocumentBILLINGSTATUS"
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
  - billing
  - service
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCBILLINGSTATUS

**Service DocumentBILLINGSTATUS**

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
| `ServiceDocBillingStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_ServiceDocBillingStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocBillingStatusText` | `I_ServiceDocBillingStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Billing Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog:{
    sqlViewName: 'ISERVDOCBILLSTAT',
    compiler.compareFilter: true,
    preserveKey:true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'ServiceDocBillingStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   },
   sapObjectNodeType.name: 'ServiceDocBillingStatus',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
   #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
  }
@Search.searchable: true
@Analytics.dataCategory: #DIMENSION
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
    dataExtraction.enabled: true
  }

define view I_ServiceDocBillingStatus
  as select from dd07l
  association [1..*] to I_ServiceDocBillingStatusText as _ServiceDocBillingStatusText on $projection.ServiceDocBillingStatus = _ServiceDocBillingStatusText.ServiceDocBillingStatus
{

       @ObjectModel.text.association: '_ServiceDocBillingStatusText'
  key  domvalue_l       as ServiceDocBillingStatus,

       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07l.domvalue_l as DomainValue,

       _ServiceDocBillingStatusText
}
where
      domname  = 'CRMS4_STAT_BILLING'
  and as4local = 'A'
```
