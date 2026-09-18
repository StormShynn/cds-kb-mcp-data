---
name: I_PAYMENTREASONTEXT
description: "Paymentreasontext"
app_component: FI-AP-AP-B-2CL
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
  - FI-AP
  - FI-AP-AP
  - interface-view
  - text-view
  - payment
  - text
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTREASONTEXT

**Paymentreasontext**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
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
| `PaymentReason` | ✓ | |  | `payt_rsn` | `CHAR(4)` | Payment Reason |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PaymentReasonText` |  | |  | `descript` | `CHAR(130)` | Payment Reason Description |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'PaymentReason'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Payment Reason for Purpose Codes - Text'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_PaymentReasonText
  as select from farp_payt_rsn_tx
{
      @ObjectModel.text.element: ['PaymentReasonText']
  key payt_rsn as PaymentReason,
      @Semantics.language: true
  key spras    as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      descript as PaymentReasonText
}
```
