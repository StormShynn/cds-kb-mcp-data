---
name: I_PAYMENTDIFFERENCEREASON
description: "Paymentdifferencereason"
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
# I_PAYMENTDIFFERENCEREASON

**Paymentdifferencereason**

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
| `CompanyCode` | ✓ | |  | `cast (bukrs as fis_bukrs)` | `CHAR(4)` | Company Code |
| `PaymentDifferenceReason` | ✓ | |  | `cast (rstgr as farp_rstgr)` | `CHAR(3)` | Reason Code for Payment Differences |
| `IsDisputed` |  | |  | `xstrp` | `CHAR(1)` | Indicator: Disputed Item? |
| `PaytDiffIsChargedToSprtGLAcct` |  | |  | `xausb` | `CHAR(1)` | Indicator: Write Off Difference via Separate Account |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentDifferenceReasonT` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #M //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE ]
@EndUserText.label: 'Payment Difference Reason'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYDIFFREASON'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentDifferenceReason'
@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentDifferenceReason
  as select from t053r
  association [0..*] to I_PaymentDifferenceReasonT as _Text        on  $projection.CompanyCode             = _Text.CompanyCode
                                                                   and $projection.PaymentDifferenceReason = _Text.PaymentDifferenceReason
  association [1..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast (bukrs as fis_bukrs)  as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key cast (rstgr as farp_rstgr) as PaymentDifferenceReason,
      xstrp                      as IsDisputed,
      xausb                      as PaytDiffIsChargedToSprtGLAcct,
      _Text,
      _CompanyCode
};
```
