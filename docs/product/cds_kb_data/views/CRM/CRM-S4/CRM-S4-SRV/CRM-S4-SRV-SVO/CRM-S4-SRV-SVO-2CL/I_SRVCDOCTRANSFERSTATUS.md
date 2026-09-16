---
name: I_SRVCDOCTRANSFERSTATUS
description: "Srvcdoctransferstatus"
app_component: CRM-S4-SRV-SVO-2CL
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
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCTRANSFERSTATUS

**Srvcdoctransferstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
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
| `SrvcDocTransferStatus` | ✓ | |  | `cast ( domvalue_l as crms4_stat_transfer )` | `CHAR(1)` | Transfer Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_ServiceDocTransferStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocTransferStatusText` | `I_SrvcDocTransferStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Transfer Status of Service Transaction'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ISERVTRANSFSTAT'
@Analytics.internalName:#LOCAL
@ObjectModel: {
   representativeKey: 'SrvcDocTransferStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true


define view entity I_SrvcDocTransferStatus
  as select from dd07l
  association [1..*] to I_SrvcDocTransferStatusText as _ServiceDocTransferStatusText on $projection.SrvcDocTransferStatus = _ServiceDocTransferStatusText.SrvcDocTransferStatus

{
      @ObjectModel.text.association: '_ServiceDocTransferStatusText'

  key cast ( domvalue_l as crms4_stat_transfer ) as SrvcDocTransferStatus,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                           as DomainValue,

      _ServiceDocTransferStatusText
}
where
      domname  = 'CRMS4_STAT_TRANSFER'
  and as4local = 'A'
```
