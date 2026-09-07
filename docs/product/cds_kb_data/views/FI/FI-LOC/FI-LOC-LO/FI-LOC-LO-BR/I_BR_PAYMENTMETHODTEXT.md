---
name: I_BR_PAYMENTMETHODTEXT
description: "BR Paymentmethodtext"
semantic_vi: "View I_BR_PAYMENTMETHODTEXT cung cấp mô tả phương thức thanh toán trong các ngôn ngữ khác nhau, hữu ích cho việc hiển thị các tùy chọn thanh toán cho khách hàng hoặc nhà cung cấp theo ngôn ngữ yêu cầu của họ."
keywords:
  - "payment method"
  - "mô tả phương thức thanh toán"
  - "language"
  - "ngôn ngữ"
  - "sap fi"
  - "fi loc"
  - "fi loc lo br"
  - "payment description"
  - "thanh toán"
  - "tài chính"
semantic_en: "The I_BR_PAYMENTMETHODTEXT view provides payment method descriptions in different languages, useful for displaying payment options to customers or vendors in their preferred language."
app_component: FI-LOC-LO-BR
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
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - payment
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PAYMENTMETHODTEXT

**BR Paymentmethodtext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentMethod` | ✓ | |  | `cast (t_pag as logbr_tpag preserving type)` |  |  |
| `PaymentMethodDescription` |  | |  | `cast(t_pagt as logbr_tpagdesc preserving type)` |  |  |
| `_BR_PaymentMethod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_PaymentMethod` | `I_BR_PaymentMethod` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Method - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRTPAGTEXT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentMethod'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true


define view I_BR_PaymentMethodText
  as select from j_1bpagt
  association [1..1] to I_BR_PaymentMethod as _BR_PaymentMethod on $projection.PaymentMethod = _BR_PaymentMethod.PaymentMethod
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key spras as Language,
  @ObjectModel.foreignKey.association: '_BR_PaymentMethod'
  key cast (t_pag as logbr_tpag preserving type) as PaymentMethod,
  @Semantics.text: true
  cast(t_pagt as logbr_tpagdesc preserving type) as PaymentMethodDescription,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_PaymentMethod,
  _Language
}
```
