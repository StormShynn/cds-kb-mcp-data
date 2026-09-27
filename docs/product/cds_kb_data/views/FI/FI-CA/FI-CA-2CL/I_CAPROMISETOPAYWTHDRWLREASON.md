---
name: I_CAPROMISETOPAYWTHDRWLREASON
description: "Capromisetopaywthdrwlreason"
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
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROMISETOPAYWTHDRWLREASON

**Capromisetopaywthdrwlreason**

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
| `CAPromiseToPayWthdrwlReason` | ✓ | |  | `pprsw` | `CHAR(2)` | Reason for Withdrawal of Promise to Pay |
| `CAIntrstHndlgForWthdrwlPrms2P` |  | |  | `ppinw` | `CHAR(1)` | Handling of Interest for Withdrawal of Promise to Pay |
| `CAChrgHndlgForWthdrwlPrmsToPay` |  | |  | `ppchw` | `CHAR(1)` | Handling of Charge for Withdrawal of Promise to Pay |
| `CACreditWorthinessIsUpdated` |  | |  | `xupcw` | `CHAR(1)` | Update Creditworthiness |
| `CARsetRsnCanBeUsedInBillerDrct` |  | |  | `xebpp` | `CHAR(1)` | Reset Reason Can Be Used in Biller Direct |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPromiseToPayWthdrwlReasonT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICAP2PWTHDRWLRSN'

@EndUserText.label: 'Promise To Pay Withdrawal Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPromiseToPayWthdrwlReason',
                sapObjectNodeType.name: 'ContrAcctgPrmsToPayWthdrwlRsn',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPromiseToPayWthdrwlReason
  as select from tfkp2prw

  association [0..*] to I_CAPromiseToPayWthdrwlReasonT as _Text on $projection.CAPromiseToPayWthdrwlReason = _Text.CAPromiseToPayWthdrwlReason

{
      @ObjectModel.text.association: '_Text'  
  key pprsw as CAPromiseToPayWthdrwlReason,

      ppinw as CAIntrstHndlgForWthdrwlPrms2P,
      ppchw as CAChrgHndlgForWthdrwlPrmsToPay,
      xupcw as CACreditWorthinessIsUpdated,
      xebpp as CARsetRsnCanBeUsedInBillerDrct,

      _Text
}
```
