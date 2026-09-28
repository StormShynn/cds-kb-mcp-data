---
name: I_CABUSINESSLOCKREASON
description: "Cabusinesslockreason"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSINESSLOCKREASON

**Cabusinesslockreason**

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
| `CABusinessProcess` | ✓ | |  |  | `CHAR(2)` | Process Code (Example: Dunning, Payment) |
| `CABusinessLockReason` | ✓ | |  | `CADunningLockReason` | `CHAR(1)` | Dunning Lock Reason |
| `CAAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `_BusProcess` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusProcess` | `I_CABusinessProcess` | [1..1] |
| `_Text` | `I_CABusinessLockReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Lock Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessLockReason',
                sapObjectNodeType.name: 'ContrAcctgBusinessLockReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #C,
                             sizeCategory: #S } }

@VDM.viewType: #COMPOSITE

define view entity I_CABusinessLockReason

  as select from I_CADunningLockReason as DunLockRsn
    join         I_CABusinessProcess   as BusProc on BusProc.CABusinessProcess = '01'
  association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
  association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                  and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
      @ObjectModel.foreignKey.association: '_BusProcess'
  key BusProc.CABusinessProcess,
      @ObjectModel.text.association: '_Text'
  key DunLockRsn.CADunningLockReason  as CABusinessLockReason,
      DunLockRsn.CAAuthorizationGroup as CAAuthorizationGroup,
      _BusProcess,
      _Text
}

union all select from I_CAPaymentLockReason as PaytLockRsn
  join                I_CABusinessProcess   as BusProc on BusProc.CABusinessProcess = '02'
                                                       or BusProc.CABusinessProcess = '03'
                                                       or BusProc.CABusinessProcess = '10'
association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
  key BusProc.CABusinessProcess,
  key PaytLockRsn.CAPaymentLockReason  as CABusinessLockReason,
      PaytLockRsn.CAAuthorizationGroup as CAAuthorizationGroup,
      _BusProcess,
      _Text
}

union all select from I_CAInterestLockReason as IntrstLockRsn
  join                I_CABusinessProcess    as BusProc on BusProc.CABusinessProcess = '04'
association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
  key BusProc.CABusinessProcess,
  key IntrstLockRsn.CAInterestLockReason as CABusinessLockReason,
      IntrstLockRsn.CAAuthorizationGroup as CAAuthorizationGroup,
      _BusProcess,
      _Text
}

union all select from I_CACorrespncDunLockReason as CorrespncDunLockRsn
  join                I_CABusinessProcess        as BusProc on BusProc.CABusinessProcess = '07'
association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
  key BusProc.CABusinessProcess,
  key CorrespncDunLockRsn.CACorrespncDunLockReason as CABusinessLockReason,
      CorrespncDunLockRsn.CAAuthorizationGroup     as CAAuthorizationGroup,
      _BusProcess,
      _Text
}

union all select from I_CAPostgAndClrgLockReason as PostgAndClrgLockRsn
  join                I_CABusinessProcess        as BusProc on BusProc.CABusinessProcess = '09'
association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
  key BusProc.CABusinessProcess,
  key PostgAndClrgLockRsn.CAPostgAndClrgLockReason as CABusinessLockReason,
      PostgAndClrgLockRsn.CAAuthorizationGroup     as CAAuthorizationGroup,
      _BusProcess,
      _Text
}

union all select from I_CAInvcgLockReason as InvocgLockRsn
  join                I_CABusinessProcess as BusProc on BusProc.CABusinessProcess = '05'
                                                     or BusProc.CABusinessProcess = '12'
association [1..1] to I_CABusinessProcess        as _BusProcess on  $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..*] to I_CABusinessLockReasonText as _Text       on  $projection.CABusinessProcess    = _Text.CABusinessProcess
                                                                and $projection.CABusinessLockReason = _Text.CABusinessLockReason
{
  key BusProc.CABusinessProcess,
  key InvocgLockRsn.CAInvcgLockReason    as CABusinessLockReason,
      InvocgLockRsn.CAAuthorizationGroup as CAAuthorizationGroup,
      _BusProcess,
      _Text
}
```
