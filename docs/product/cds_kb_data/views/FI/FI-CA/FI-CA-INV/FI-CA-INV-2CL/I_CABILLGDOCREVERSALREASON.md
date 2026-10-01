---
name: I_CABILLGDOCREVERSALREASON
description: "Cabillgdocreversalreason"
semantic_vi: "View I_CABILLGDOCREVERSALREASON CDS hiển thị lý do đảo ngược cho tài liệu hàng hóa trong thành phần FI-CA-INV-2CL, được sử dụng để hiểu nguyên nhân đảo ngược tài liệu trong thanh toán và thu hồi"
keywords:
  - "reversal reason"
  - "goods document"
  - "fi-ca-inv-2cl"
  - "accounts payable"
  - "accounts receivable"
  - "đảo ngược lý do"
  - "tài liệu hàng hóa"
  - "thanh toán"
  - "thu hồi"
semantic_en: "The I_CABILLGDOCREVERSALREASON CDS view exposes reversal reasons for goods documents in the FI-CA-INV-2CL component, used to understand the cause of document reversals in accounts payable and accounts receivable."
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
# I_CABILLGDOCREVERSALREASON

**Cabillgdocreversalreason**

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
| `CABillgDocumentReversalReason` | ✓ | | `_tfk2646` | `bill_revreason` | `CHAR(2)` | Reversal Reason for Billing Document |
| `_CABillgDocReversalReasonText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocReversalReasonText` | `I_CABillgDocReversalReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Storn.grund für Abr. belege'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocumentReversalReason',
  sapObjectNodeType.name: 'ContrAcctgBillgDocRvslRsn',
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
define view entity I_CABillgDocReversalReason
  as select from tfk2646 as _tfk2646
  association [0..*] to I_CABillgDocReversalReasonText as _CABillgDocReversalReasonText on $projection.CABillgDocumentReversalReason = _CABillgDocReversalReasonText.CABillgDocumentReversalReason

{
      @ObjectModel.text.association: '_CABillgDocReversalReasonText'
  key _tfk2646.bill_revreason as CABillgDocumentReversalReason,
      _CABillgDocReversalReasonText
}
```
