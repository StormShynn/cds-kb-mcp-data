---
name: I_PAYMENTTERMSINSTALLMENTITEM
description: "Paymenttermsinstallmentitem"
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - payment
  - item-level
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSINSTALLMENTITEM

**Paymenttermsinstallmentitem**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `PaymentTerms` | ✓ | |  | `zterm` | `CHAR(4)` | Key for Terms of Payment |
| `PaymentTermsInstallmentItem` | ✓ | |  | `cast ( ratnr as farp_ratnr preserving type )` | `NUMC(2)` | Sequential Number of Installment to Be Paid |
| `InstallmentItemPercent` |  | |  | `ratpz` | `DEC(5)` | Percentage Rate of the Holdback/Retainage |
| `InstallmentItemPaymentTerms` |  | |  | `cast ( ratzt as farp_ratzt preserving type )` | `CHAR(4)` | Terms of Payment for the Holdback/Retainage |
| `_PaymentTerms` | | ✓ | | | | |
| `_InstallmentItemPaymentTerms` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_InstallmentItemPaymentTerms` | `I_PaymentTerms` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Installment Items for Terms of Payment'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #M,
  usageType.dataClass: #CUSTOMIZING
}

@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC    
    }

define view entity I_PaymentTermsInstallmentItem as select from t052s

  association [0..1] to I_PaymentTerms as _PaymentTerms on $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [0..1] to I_PaymentTerms as _InstallmentItemPaymentTerms on $projection.InstallmentItemPaymentTerms = _InstallmentItemPaymentTerms.PaymentTerms

{
  key zterm as PaymentTerms, 
  key cast ( ratnr as farp_ratnr preserving type ) as PaymentTermsInstallmentItem,
  ratpz as InstallmentItemPercent,
  cast ( ratzt as farp_ratzt preserving type ) as InstallmentItemPaymentTerms,
   
  _PaymentTerms,
  _InstallmentItemPaymentTerms
}
```
