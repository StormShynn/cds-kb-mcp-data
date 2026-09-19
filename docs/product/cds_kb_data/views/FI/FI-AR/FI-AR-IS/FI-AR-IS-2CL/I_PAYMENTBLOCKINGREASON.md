---
name: I_PAYMENTBLOCKINGREASON
description: "Paymentblockingreason"
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
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTBLOCKINGREASON

**Paymentblockingreason**

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
| `PaymentBlockingReason` | ✓ | |  | `cast (zahls as farp_dzlspr)` | `CHAR(1)` | Payment Block on Item |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentBlockingReasonText` | [0..*] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #S   //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE ]
@EndUserText.label: 'Payment Blocking Reason'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYBLOCKREAS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentBlockingReason'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true

define view I_PaymentBlockingReason
  as select from t008
  association [0..*] to I_PaymentBlockingReasonText as _Text on $projection.PaymentBlockingReason = _Text.PaymentBlockingReason
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key cast (zahls as farp_dzlspr) as PaymentBlockingReason,
      _Text
};
```
