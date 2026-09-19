---
name: I_STATECENTRALBANKPAYTRSN
description: "Statecentralbankpaytrsn"
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
  - bank
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:Bank
---
# I_STATECENTRALBANKPAYTRSN

**Statecentralbankpaytrsn**

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
| `StateCentralBankPaymentReason` | ✓ | |  | `cast( lzbkz as fac_lzbkz )` | `CHAR(3)` | State Central Bank Payment Reason |
| `StateCentralBankDocumentType` |  | |  | `blart` | `NUMC(1)` | Document type for the report record |
| `StateCentralBankServiceSpec` |  | |  | `lvawv` | `NUMC(3)` | Indicator According to Service Specifications |
| `StateCentralBankPaytRsnDesc` |  | |  | `cast( concat( zwck1, zwck2 ) as farp_scbpaytrsndesc )` | `CHAR(150)` | State Central Bank Payment Reason Description |

## Source Code

```abap
@EndUserText.label: 'State Central Bank Payment Reason'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ISCNTRLBKPAYTRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'StateCentralBankPaymentReason'
@ObjectModel.sapObjectNodeType.name: 'StateCentralBankPaymentReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName:#LOCAL
define view I_StateCentralBankPaytRsn
  as select from t015l
{
      @ObjectModel.text.element:['StateCentralBankPaytRsnDesc']
  key cast( lzbkz as fac_lzbkz )                            as StateCentralBankPaymentReason,
      blart                                                 as StateCentralBankDocumentType,
      lvawv                                                 as StateCentralBankServiceSpec,
      @Semantics.text
      cast( concat( zwck1, zwck2 ) as farp_scbpaytrsndesc ) as StateCentralBankPaytRsnDesc
};
```
