---
name: I_CARETURNREASON
description: "Careturnreason"
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
# I_CARETURNREASON

**Careturnreason**

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
| `CAReturnReason` | ✓ | |  | `rlgrd` | `CHAR(3)` | Return Reason |
| `HouseBank` | ✓ | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `CAReturnType` |  | |  | `rltyp` | `NUMC(2)` | Returns Type |
| `CAReturnHistoryDays` |  | |  | `histt` | `NUMC(3)` | History days |
| `CACreditWorthinessRatingValue` |  | |  | `bonig` | `NUMC(2)` | Creditworthiness Number |
| `CAClarificationAccount` |  | |  | `klaeh` | `CHAR(10)` | Clarification Account |
| `CAChequeVoidingReason` |  | |  | `voidr` | `CHAR(2)` | Reason for Check Voiding |
| `_HouseBank` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HouseBank` | `I_Housebank` | [1..*] |
| `_Text` | `I_CAReturnReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Return Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAReturnReason',
                sapObjectNodeType.name: 'ContrAcctgReturnReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAReturnReason
  as select from tfk045a

  association [1..*] to I_Housebank          as _HouseBank on  $projection.HouseBank  = _HouseBank.HouseBank
                                                           and _HouseBank.CompanyCode is not initial
  association [0..*] to I_CAReturnReasonText as _Text      on  $projection.CAReturnReason = _Text.CAReturnReason
                                                           and $projection.HouseBank      = _Text.HouseBank

{
      @ObjectModel.text.association: '_Text'
  key rlgrd as CAReturnReason,
      @ObjectModel.foreignKey.association : '_HouseBank'
  key hbkid as HouseBank,

      rltyp as CAReturnType,
      histt as CAReturnHistoryDays,
      bonig as CACreditWorthinessRatingValue,
      klaeh as CAClarificationAccount,
      voidr as CAChequeVoidingReason,

      _HouseBank,
      _Text
}
```
