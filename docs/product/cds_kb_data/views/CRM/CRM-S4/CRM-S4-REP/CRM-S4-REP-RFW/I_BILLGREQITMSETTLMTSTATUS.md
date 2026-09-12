---
name: I_BILLGREQITMSETTLMTSTATUS
description: "Billgreqitmsettlmtstatus"
semantic_vi: "View I_BILLGREQITMSETTLMTSTATUS hiển thị trạng thái thanh toán yêu cầu hóa đơn cho các mặt hàng. Nó được sử dụng để lấy trạng thái hiện tại của yêu cầu hóa đơn cho các mặt hàng."
keywords:
  - "billgreqitmsettlmtstatus"
  - "settlement status"
  - "billing request"
  - "item status"
  - "crm"
  - "sap"
  - "c4c"
  - "rfw"
  - "domain value"
  - "billgreqitembillingstatus"
semantic_en: "The Billgreqitmsettlmtstatus CDS view exposes the settlement status of billing requests for items. It is used to retrieve the current status of billing requests for items."
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
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BILLGREQITMSETTLMTSTATUS

**Billgreqitmsettlmtstatus**

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
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_BillgReqItmSettlmtStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgReqItmSettlmtStatusText` | `I_BillgReqItmSettlmtStatusText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILLREQISTLSTAT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Billing Request Item Settlement Status'

@VDM.viewType: #BASIC


@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BillgReqItemBillingStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true

/* Enhancement Solution Order */
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER ]

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BillgReqItmSettlmtStatus'

define view I_BillgReqItmSettlmtStatus
  as select from dd07l
  association [1..*] to I_BillgReqItmSettlmtStatusText as _BillgReqItmSettlmtStatusText on $projection.BillgReqItemBillingStatus = _BillgReqItmSettlmtStatusText.BillgReqItemBillingStatus

{
      @ObjectModel.text.association: '_BillgReqItmSettlmtStatusText'
  key domvalue_l as BillgReqItemBillingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,

      _BillgReqItmSettlmtStatusText
}
where
      domname  = 'CRM_BILLING_SETTLEMENT_STATUS'
  and as4local = 'A'
```
