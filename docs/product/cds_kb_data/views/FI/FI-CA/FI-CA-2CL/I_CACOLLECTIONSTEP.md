---
name: I_CACOLLECTIONSTEP
description: "Cacollectionstep"
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
  - collection
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACOLLECTIONSTEP

**Cacollectionstep**

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
| `CACollectionStep` | ✓ | |  | `step` | `CHAR(4)` | Collection Step |
| `CACollectionStepLevel` |  | |  | `steplevel` | `NUMC(2)` | Collection Level |
| `CACollectionStepType` |  | |  | `steptype` | `CHAR(2)` | Collection Step Category |
| `CAAltvCollectionStep` |  | |  | `altst` | `CHAR(4)` | Alternative Collection Step |
| `CADaysToNextDunning` |  | |  | `intrv` | `NUMC(3)` | Interval to Next Dunning |
| `CAFactoryCalendarIsUsedForDun` |  | |  | `xmfac` | `CHAR(1)` | Days in arrears+dunning freq. by factory calendar |
| `FactoryCalendar` |  | |  | `cast( mfcid as fabkl preserving type )` | `CHAR(2)` | Factory calendar key |
| `CAItemGroupIsClosed` |  | |  | `closegroup` | `CHAR(1)` | Close Item Group |
| `CADaysToPaymentDeadline` |  | |  | `frist` | `NUMC(3)` | Payment Deadline in Days |
| `CACreditWorthinessRatingValue` |  | |  | `bonig` | `NUMC(2)` | Creditworthiness Number |
| `CAInterestCode` |  | |  | `ikey` | `CHAR(2)` | Interest Key |
| `CAPostingCodeForDunInterest` |  | |  | `ipost` | `CHAR(1)` | Posting Key for Dunning Interest |
| `CAInterestIsCalculated` |  | |  | `icalc` | `CHAR(1)` | Determine Interest |
| `CAIntrstIsCalculatedBfrCharges` |  | |  | `intfirst` | `CHAR(1)` | Calculation of Interest before Charges in Dunning Program |
| `CADunningChargesSchema` |  | |  | `chgid` | `CHAR(2)` | Charges Schedule |
| `CAIntrstAndChargeIsAddedToHist` |  | |  | `newdc` | `CHAR(1)` | Dun New Documents Immediately |
| `CADunningSuccessCanBeEvaluated` |  | |  | `xdsuc` | `CHAR(1)` | Subsequent Success Valuation of Dunning |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACollectionStepText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Collection Step'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACollectionStep',
                sapObjectNodeType.name: 'ContrAcctgCollectionStep',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACollectionStep
  as select from tfk047u

  association [0..*] to I_CACollectionStepText as _Text on $projection.CACollectionStep = _Text.CACollectionStep

{
      @ObjectModel.text.association: '_Text'
  key step                                   as CACollectionStep,

      steplevel                              as CACollectionStepLevel,
      steptype                               as CACollectionStepType,
      altst                                  as CAAltvCollectionStep,
      intrv                                  as CADaysToNextDunning,
      xmfac                                  as CAFactoryCalendarIsUsedForDun,
      cast( mfcid as fabkl preserving type ) as FactoryCalendar,
      closegroup                             as CAItemGroupIsClosed,
      frist                                  as CADaysToPaymentDeadline,
      bonig                                  as CACreditWorthinessRatingValue,
      ikey                                   as CAInterestCode,
      ipost                                  as CAPostingCodeForDunInterest,
      icalc                                  as CAInterestIsCalculated,
      intfirst                               as CAIntrstIsCalculatedBfrCharges,
      chgid                                  as CADunningChargesSchema,
      newdc                                  as CAIntrstAndChargeIsAddedToHist,
      xdsuc                                  as CADunningSuccessCanBeEvaluated,

      _Text
}
```
