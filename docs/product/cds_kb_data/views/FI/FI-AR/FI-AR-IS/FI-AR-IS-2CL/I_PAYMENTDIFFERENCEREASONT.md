---
name: I_PAYMENTDIFFERENCEREASONT
description: "Paymentdifferencereasont"
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
# I_PAYMENTDIFFERENCEREASONT

**Paymentdifferencereasont**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PaymentDifferenceReasonName` |  | |  | `txt20` | `CHAR(20)` | Reason Code Short Text |
| `PaymentDifferenceReasonDesc` |  | |  | `txt40` | `CHAR(40)` | Reason Code Long Text |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #M //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Payment Difference Reason - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYDIFFRSNT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentDifferenceReason'
@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentDifferenceReasonT
  as select from t053s
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast (bukrs as fis_bukrs)  as CompanyCode,
      @ObjectModel.text.element: 'PaymentDifferenceReasonDesc'
  key cast (rstgr as farp_rstgr) as PaymentDifferenceReason,
      @Semantics.language:true
  key spras                      as Language,
      @Semantics.text:true
      txt20                      as PaymentDifferenceReasonName,
      @Semantics.text:true
      txt40                      as PaymentDifferenceReasonDesc,
      _Language,
      _CompanyCode
};
```
