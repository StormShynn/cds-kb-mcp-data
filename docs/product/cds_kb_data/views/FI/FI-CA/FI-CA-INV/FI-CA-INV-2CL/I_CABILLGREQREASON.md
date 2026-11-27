---
name: I_CABILLGREQREASON
description: "Cabillgreqreason"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGREQREASON

**Cabillgreqreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CABillgReqReason` | ✓ | |  | `billreqrsn` | `CHAR(4)` | Reason for Billing Request |
| `CABillgReqType` |  | |  | `billreqtype` | `CHAR(2)` | Billing Request Type |
| `_CABillgReqType` | | ✓ | | | | |
| `_CABillgReqReasonText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqType` | `I_CABillgReqType` | [0..1] |
| `_CABillgReqReasonText` | `I_CABillgReqReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abrechnungsauftragsgrund'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgReqReason',
  sapObjectNodeType.name: 'ContrAcctgBillingRequestReason',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgReqReason
  as select from tfk8205r
  association [0..1] to I_CABillgReqType       as _CABillgReqType       on $projection.CABillgReqType = _CABillgReqType.CABillgReqType
  association [0..*] to I_CABillgReqReasonText as _CABillgReqReasonText on $projection.CABillgReqReason = _CABillgReqReasonText.CABillgReqReason
{
      @ObjectModel.text.association: '_CABillgReqReasonText'
  key billreqrsn  as CABillgReqReason,
      @ObjectModel.foreignKey.association: '_CABillgReqType'
      billreqtype as CABillgReqType,
      _CABillgReqReasonText,
      _CABillgReqType
}
```
