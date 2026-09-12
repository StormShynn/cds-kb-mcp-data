---
name: I_BILLGREQITMSETTLMTSTATUSTEXT
description: "Billgreqitmsettlmtstatustext"
semantic_vi: "View Billgreqitmsettlmtstatustext cung cấp mô tả văn bản của trạng thái thanh toán yêu cầu hóa đơn cho từng mục hàng hóa trong nhiều ngôn ngữ. Nó có thể được sử dụng để hiển thị thông tin trạng thái cho người dùng theo ngôn ngữ mà họ chọn."
keywords:
  - "billing request"
  - "settlement status"
  - "language"
  - "text view"
  - "crm"
  - "sap"
  - "billgreqitmsettlmtstatustext"
  - "trạng thái thanh toán"
  - "ngôn ngữ"
  - "trạng thái hóa đơn"
semantic_en: "The Billgreqitmsettlmtstatustext view provides text descriptions of billing request item settlement status in different languages. It can be used to display status information to users in their preferred language."
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - text-view
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BILLGREQITMSETTLMTSTATUSTEXT

**Billgreqitmsettlmtstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `BillgReqItemBillingStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BillgReqItemBillingStatusName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BillgReqItmSettlmtStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgReqItmSettlmtStatus` | `I_BillgReqItmSettlmtStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILREQISTLSTATX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Billing Request Item Settlement Status - Text'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE

/* Enhancement Solution Order */
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BillgReqItemBillingStatus'

/* Enhancement Solution Order */
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ] 

@Metadata.ignorePropagatedAnnotations: true

define view I_BillgReqItmSettlmtStatusText
  as select from dd07t
  association [1..1] to I_BillgReqItmSettlmtStatus as _BillgReqItmSettlmtStatus on $projection.BillgReqItemBillingStatus = _BillgReqItmSettlmtStatus.BillgReqItemBillingStatus
  association [0..1] to I_Language                 as _Language                 on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_BillgReqItmSettlmtStatus'
  key domvalue_l as BillgReqItemBillingStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as BillgReqItemBillingStatusName,

      _BillgReqItmSettlmtStatus,
      _Language
}
where
      domname  = 'CRM_BILLING_SETTLEMENT_STATUS'
  and as4local = 'A'
```
