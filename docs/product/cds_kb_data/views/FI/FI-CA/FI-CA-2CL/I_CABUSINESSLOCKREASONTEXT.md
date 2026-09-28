---
name: I_CABUSINESSLOCKREASONTEXT
description: "Cabusinesslockreasontext"
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
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSINESSLOCKREASONTEXT

**Cabusinesslockreasontext**

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
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `CABusinessLockReasonName` |  | |  | `CADunningLockReasonName` | `CHAR(50)` | Name of Dunning Lock Reason |
| `_BusProcess` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusProcess` | `I_CABusinessProcess` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Lock Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CABusinessLockReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #C,
                             sizeCategory: #S } }

@VDM.viewType: #COMPOSITE

define view entity I_CABusinessLockReasonText

  as select from I_CADunningLockReasonText as DunLockRsnTxt
    join         I_CABusinessProcess       as BusProc on BusProc.CABusinessProcess = '01'
  association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
  association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BusProcess'
  key BusProc.CABusinessProcess,
  key DunLockRsnTxt.CADunningLockReason     as CABusinessLockReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key DunLockRsnTxt.Language,
      @Semantics.text: true
      DunLockRsnTxt.CADunningLockReasonName as CABusinessLockReasonName,
      _BusProcess,
      _Language
}

union all select from I_CAPaymentLockReasonText as PaytLockRsnTxt
  join                I_CABusinessProcess       as BusProc on BusProc.CABusinessProcess = '02'
                                                           or BusProc.CABusinessProcess = '03'
                                                           or BusProc.CABusinessProcess = '10'
association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
  key BusProc.CABusinessProcess,
  key PaytLockRsnTxt.CAPaymentLockReason     as CABusinessLockReason,
  key PaytLockRsnTxt.Language,
      PaytLockRsnTxt.CAPaymentLockReasonName as CABusinessLockReasonName,
      _BusProcess,
      _Language
}

union all select from I_CAInterestLockReasonText as IntrstLockRsnTxt
  join                I_CABusinessProcess        as BusProc on BusProc.CABusinessProcess = '04'
association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
  key BusProc.CABusinessProcess,
  key IntrstLockRsnTxt.CAInterestLockReason     as CABusinessLockReason,
  key IntrstLockRsnTxt.Language,
      IntrstLockRsnTxt.CAInterestLockReasonText as CABusinessLockReasonName,
      _BusProcess,
      _Language
}

union all select from I_CACorrespncDunLockRsnText as CorrespncDunLockRsnTxt
  join                I_CABusinessProcess         as BusProc on BusProc.CABusinessProcess = '07'
association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
  key BusProc.CABusinessProcess,
  key CorrespncDunLockRsnTxt.CACorrespncDunLockReason     as CABusinessLockReason,
  key CorrespncDunLockRsnTxt.Language,
      CorrespncDunLockRsnTxt.CACorrespncDunLockReasonText as CABusinessLockReasonName,
      _BusProcess,
      _Language
}

union all select from I_CAPostgAndClrgLockRsnText as PostgAndClrgLockRsnTxt
  join                I_CABusinessProcess         as BusProc on BusProc.CABusinessProcess = '09'
association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
  key BusProc.CABusinessProcess,
  key PostgAndClrgLockRsnTxt.CAPostgAndClrgLockReason     as CABusinessLockReason,
  key PostgAndClrgLockRsnTxt.Language,
      PostgAndClrgLockRsnTxt.CAPostgAndClrgLockReasonName as CABusinessLockReasonName,
      _BusProcess,
      _Language
}

union all select from I_CAInvcgLockReasonText as InvocgLockRsnTxt
  join                I_CABusinessProcess     as BusProc on BusProc.CABusinessProcess = '05'
                                                         or BusProc.CABusinessProcess = '12'
association [1..1] to I_CABusinessProcess as _BusProcess on $projection.CABusinessProcess = _BusProcess.CABusinessProcess
association [0..1] to I_Language          as _Language   on $projection.Language = _Language.Language
{
  key BusProc.CABusinessProcess,
  key InvocgLockRsnTxt.CAInvcgLockReason     as CABusinessLockReason,
  key InvocgLockRsnTxt.Language,
      InvocgLockRsnTxt.CAInvcgLockReasonName as CABusinessLockReasonName,
      _BusProcess,
      _Language
}
```
