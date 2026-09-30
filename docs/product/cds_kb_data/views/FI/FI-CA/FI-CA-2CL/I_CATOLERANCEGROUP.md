---
name: I_CATOLERANCEGROUP
description: "Catolerancegroup"
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
# I_CATOLERANCEGROUP

**Catolerancegroup**

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
| `CAToleranceGroup` | ✓ | |  | `togru` | `CHAR(4)` | Tolerance Group |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CAMaxPaytDiffForExpense` |  | |  | `difbh` | `CURR(7)` | Maximum payment difference for expense |
| `CAMaxPaytDiffForRevenue` |  | |  | `difbs` | `CURR(7)` | Maximum payment difference for revenue |
| `CAMaxPaytDiffForExpenseInPct` |  | |  | `difph` | `DEC(3)` | Maximum expense permitted from payment differences |
| `CAMaxPaytDiffForRevenueInPct` |  | |  | `difps` | `DEC(3)` | Maximum allowable revenues from payment differences |
| `CAPaytNtcIsCreatedForUndrpayt` |  | |  | `xundp` | `CHAR(1)` | Create payment notice for underpayment |
| `CAPaytNtcIsCreatedForOvrpayt` |  | |  | `xovrp` | `CHAR(1)` | Generate payment notice in event of overpayment |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAToleranceGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Tolerance Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAToleranceGroup',
                sapObjectNodeType.name: 'ContrAcctgToleranceGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAToleranceGroup
  as select from tfk043
  
  association [0..*] to I_CAToleranceGroupText as _Text on $projection.CAToleranceGroup = _Text.CAToleranceGroup

{
      @ObjectModel.text.association: '_Text'
  key togru as CAToleranceGroup,
  
      waers as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      difbh as CAMaxPaytDiffForExpense,
      @Semantics.amount.currencyCode: 'Currency'
      difbs as CAMaxPaytDiffForRevenue,
      difph as CAMaxPaytDiffForExpenseInPct,
      difps as CAMaxPaytDiffForRevenueInPct,
      xundp as CAPaytNtcIsCreatedForUndrpayt,
      xovrp as CAPaytNtcIsCreatedForOvrpayt,

      _Text
}
```
