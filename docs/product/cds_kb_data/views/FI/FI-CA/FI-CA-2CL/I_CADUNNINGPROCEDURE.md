---
name: I_CADUNNINGPROCEDURE
description: "Cadunningprocedure"
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
# I_CADUNNINGPROCEDURE

**Cadunningprocedure**

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
| `CADunningProcedure` | ✓ | |  | `mahnv` | `CHAR(2)` | Dunning Procedure |
| `CADunningProcedureCategory` |  | |  | `cast(mvtyp as mvtyp_gfn_kk preserving type)` | `CHAR(2)` | Dunning Procedure Category |
| `CAAltvDunProcedForInstallments` |  | |  | `cast(altmv as altmv_gfn_kk preserving type)` | `CHAR(2)` | Alternative Dunning Procedure For Installments |
| `CAAltvDunProcedForReturns` |  | |  | `cast(altmv2 as altmv2_gfn_kk preserving type)` | `CHAR(2)` | Alternative Dunning Procedure For Returns |
| `CAProcessControlAtLastDunLevel` |  | |  | `vlmst` | `NUMC(1)` | Behaviour at Last Dunning Level |
| `CAFactoryCalendarIsUsedForDun` |  | |  | `xmfac` | `CHAR(1)` | Days in arrears+dunning freq. by factory calendar |
| `FactoryCalendar` |  | |  | `cast(mfcid as fabkl preserving type)` | `CHAR(2)` | Factory calendar key |
| `CADunningLevelMustNotBeReduced` |  | |  | `not_lower_dl` | `CHAR(1)` | Do Not Reduce Dunning Levels |
| `CAProcessControlForCredits` |  | |  | `vbgut` | `NUMC(1)` | Behavior if Credit Exists |
| `_Text` | | ✓ | | | | |
| `_DunProcedInstallments` | | ✓ | | | | |
| `_DunProcedReturns` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningProcedureText` | [0..*] |
| `_DunProcedInstallments` | `I_CADunningProcedure` | [0..1] |
| `_DunProcedReturns` | `I_CADunningProcedure` | [0..1] |
| `_Category` | `I_CADunningProcedureCategory` | [1..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Dunning Procedure'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CADunningProcedure',
                sapObjectNodeType.name: 'ContrAcctgDunningProcedure',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningProcedure
  as select from tfk047a

  association [0..*] to I_CADunningProcedureText     as _Text                  on $projection.CADunningProcedure = _Text.CADunningProcedure
  association [0..1] to I_CADunningProcedure         as _DunProcedInstallments on $projection.CAAltvDunProcedForInstallments = _DunProcedInstallments.CADunningProcedure
  association [0..1] to I_CADunningProcedure         as _DunProcedReturns      on $projection.CAAltvDunProcedForReturns = _DunProcedReturns.CADunningProcedure
  association [1..1] to I_CADunningProcedureCategory as _Category              on $projection.CADunningProcedureCategory = _Category.CADunningProcedureCategory
  association [0..1] to I_FactoryCalendar            as _FactoryCalendar       on $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar

{
      @ObjectModel.text.association: '_Text'
  key mahnv                                         as CADunningProcedure,
      
      @ObjectModel.foreignKey.association: '_Category'
      cast(mvtyp as mvtyp_gfn_kk preserving type)   as CADunningProcedureCategory,
      @ObjectModel.foreignKey.association: '_DunProcedInstallments'
      cast(altmv as altmv_gfn_kk preserving type)   as CAAltvDunProcedForInstallments,
      @ObjectModel.foreignKey.association: '_DunProcedReturns'
      cast(altmv2 as altmv2_gfn_kk preserving type) as CAAltvDunProcedForReturns,
      vlmst                                         as CAProcessControlAtLastDunLevel,
      @EndUserText.label: 'Days in Arrears and Dunning Cycle'
      xmfac                                         as CAFactoryCalendarIsUsedForDun,
      @UI.hidden: true
      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      cast(mfcid as fabkl preserving type)          as FactoryCalendar,
      not_lower_dl                                  as CADunningLevelMustNotBeReduced,
      vbgut                                         as CAProcessControlForCredits,

      _Text,
      _DunProcedInstallments,
      _DunProcedReturns,
      _Category,
      _FactoryCalendar
}
```
