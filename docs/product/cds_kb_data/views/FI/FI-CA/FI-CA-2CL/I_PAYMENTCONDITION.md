---
name: I_PAYMENTCONDITION
description: "Paymentcondition"
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
  - pricing-condition
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PAYMENTCONDITION

**Paymentcondition**

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
| `PaymentCondition` | ✓ | |  | `zahlkond` | `CHAR(4)` | Payment Condition |
| `PaymentTerms` |  | |  | `cast( zterm as farp_dzterm preserving type)` | `CHAR(4)` | Terms of Payment Key |
| `FactoryCalendar` |  | |  | `cast( fcalid as cr_wfcid preserving type)` | `CHAR(2)` | Factory Calendar ID |
| `CreditMemoPaymentTerms` |  | |  | `cast( gterm as guzte preserving type)` | `CHAR(4)` | Payment Terms Key for Credit Memos |
| `_Text` | | ✓ | | | | |
| `_FactoryCal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentConditionText` | [0..*] |
| `_FactoryCal` | `I_FactoryCalendar` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Payment Condition'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'PaymentCondition',
                sapObjectNodeType.name: 'PaymentCondition',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_PaymentCondition
  as select from te052

  association [0..*] to I_PaymentConditionText as _Text       on $projection.PaymentCondition = _Text.PaymentCondition
  association [0..1] to I_FactoryCalendar      as _FactoryCal on $projection.FactoryCalendar = _FactoryCal.FactoryCalendar

{
      @ObjectModel.text.association: '_Text'
  key zahlkond                                    as PaymentCondition,

      cast( zterm as farp_dzterm preserving type) as PaymentTerms,
      @ObjectModel.foreignKey.association: '_FactoryCal'
      cast( fcalid as cr_wfcid preserving type)   as FactoryCalendar,
      cast( gterm as guzte preserving type)       as CreditMemoPaymentTerms,

      //corr_opt
      //g_corr_opt

      _Text,
      _FactoryCal
}
```
