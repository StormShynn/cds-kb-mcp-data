---
name: I_CABILLGSUBPROCESS
description: "Cabillgsubprocess"
semantic_vi: "View Cabillgsubprocess CDS hiển thị dữ liệu về các quá trình phụ của hóa đơn, có liên quan khi làm việc với quá trình xử lý hóa đơn trong thành phần FI-CA-INV-2CL."
keywords:
  - "invoice"
  - "invoice sub-process"
  - "fi-ca-inv-2cl"
  - "cds view"
  - "dữ liệu hóa đơn"
  - "quá trình phụ hóa đơn"
  - "thành phần fi-ca-inv-2cl"
semantic_en: "The Cabillgsubprocess CDS view exposes invoice sub-process data, which is relevant when working with invoice processing in the FI-CA-INV-2CL component."
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
# I_CABILLGSUBPROCESS

**Cabillgsubprocess**

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
| `CABillgSubprocess` | ✓ | | `_TFK8104` | `subprocess` | `CHAR(4)` | Subprocess of Billing |
| `_CABillgSubprocessText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgSubprocessText` | `I_CABillgSubProcessText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Teilprozess der Abrechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgSubprocess',
  sapObjectNodeType.name: 'ContrAcctgBillingSubProcess',
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
define view entity I_CABillgSubProcess
  as select from tfk8104 as _TFK8104
  association [0..*] to I_CABillgSubProcessText as _CABillgSubprocessText on $projection.CABillgSubprocess = _CABillgSubprocessText.CABillgSubprocess
{
      @ObjectModel.text.association: '_CABillgSubprocessText'
  key _TFK8104.subprocess as CABillgSubprocess,
      _CABillgSubprocessText
}
```
