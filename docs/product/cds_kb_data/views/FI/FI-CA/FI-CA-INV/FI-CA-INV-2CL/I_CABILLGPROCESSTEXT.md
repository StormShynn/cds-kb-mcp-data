---
name: I_CABILLGPROCESSTEXT
description: "Cabillgprocesstext"
semantic_vi: "View I_CABILLGPROCESSTEXT hiển thị dữ liệu văn bản cho quy trình hóa đơn trong SAP FI-CA, được sử dụng để lấy thông tin mô tả quy trình trong các ngôn ngữ khác nhau."
keywords:
  - "sap"
  - "fi-ca"
  - "billing process"
  - "quy trình hóa đơn"
  - "text view"
  - "view"
  - "language"
  - "ngôn ngữ"
  - "process description"
  - "mô tả quy trình"
semantic_en: "The I_CABILLGPROCESSTEXT view exposes text data for billing processes in SAP FI-CA, used to retrieve process descriptions in different languages."
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
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPROCESSTEXT

**Cabillgprocesstext**

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
| `CABillgProcess` | ✓ | | `_tfk8110t` | `bill_process` | `CHAR(4)` | Billing Process |
| `Language` | ✓ | | `_tfk8110t` | `langu` | `LANG(1)` | Language Key |
| `CABillgProcessText` |  | |  | `cast( _tfk8110t.text as bill_process_txt_gfn_kk preserving type )` | `CHAR(50)` | Text for Billing Process |
| `_CABillgProcess` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgProcess` | `I_CABillgProcess` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Abrechnungsprozesse (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgProcess',
  sapObjectNodeType.name: 'ContrAcctgBillingProcessText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgProcessText
  as select from tfk8110t as _tfk8110t
  association [0..1] to I_CABillgProcess as _CABillgProcess on $projection.CABillgProcess = _CABillgProcess.CABillgProcess
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgProcess'
  key _tfk8110t.bill_process                                            as CABillgProcess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8110t.langu                                                   as Language,
      @Semantics.text: true
      cast( _tfk8110t.text as bill_process_txt_gfn_kk preserving type ) as CABillgProcessText,

      _CABillgProcess,
      _Language
}
```
