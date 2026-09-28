---
name: I_CASCRTYDEPDOCBPITEMSTATUS
description: "Cascrtydepdocbpitemstatus"
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - status
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASCRTYDEPDOCBPITEMSTATUS

**Cascrtydepdocbpitemstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAScrtyDepDocBPItemStatus` | ✓ | |  | `cast( left( domvalue_l,1) as secdep_doci_status_kk )` | `NUMC(1)` | Payment Status of a Contract Accounting Document |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAScrtyDepDocBPItemStatusT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Security Deposit Document BP Item Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAScrtyDepDocBPItemStatus',
                sapObjectNodeType.name: 'ContrAcctgScrtyDepDocBPItmSts',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAScrtyDepDocBPItemStatus
  as select from dd07l

  association [0..*] to I_CAScrtyDepDocBPItemStatusT as _Text on $projection.CAScrtyDepDocBPItemStatus = _Text.CAScrtyDepDocBPItemStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l,1) as secdep_doci_status_kk ) as CAScrtyDepDocBPItemStatus,

      _Text
}
where
      dd07l.domname  = 'SECDEP_DOCI_STATUS_KK'
  and dd07l.as4local = 'A'
```
