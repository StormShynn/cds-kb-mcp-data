---
name: I_BILLINGREQUESTITEM
description: "Billingrequestitem"
semantic_vi: "View I_BILLINGREQUESTITEM hiển thị dữ liệu yêu cầu hóa đơn chi tiết, có liên quan khi làm việc với yêu cầu hóa đơn trong CRM."
keywords:
  - "billing request"
  - "yêu cầu hóa đơn"
  - "crm"
  - "service document"
  - "đơn dịch vụ"
  - "item level"
  - "chi tiết"
  - "sap cds"
  - "cds view"
semantic_en: "The I_BILLINGREQUESTITEM view exposes billing request item data, which is relevant when working with billing requests in CRM."
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
  - billing
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BILLINGREQUESTITEM

**Billingrequestitem**

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
| `ServiceObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocument` | ✓ | |  | `object_id` | `CHAR(10)` | Transaction ID |
| `ServiceDocumentItem` | ✓ | |  | `number_int` | `NUMC(6)` | Shortened Item Number in Document |
| `BillingRequestItem` | ✓ | |  | `record_no` | `NUMC(6)` | Billing Request Item No |
| `BillgReqItemBillingDateTime` |  | |  | `bill_date` | `DEC(15)` | Billing Date for Billing Index and Printout |
| `BillgReqItemBillingStatus` |  | |  | `bill_settl_stat` | `CHAR(1)` | Settlement Status of Billing Request Line |
| `SettlementStartDateTime` |  | |  | `settl_from` | `DEC(15)` | Start of Settlement for Period |
| `SettlementEndDateTime` |  | |  | `settl_to` | `DEC(15)` | End of Settlement for Period |
| `BillingPlanTimeZone` |  | | `_ServiceDocItem` | `BillingPlanTimeZone` | `CHAR(6)` | Time Zone of Billing Plan Set |
| `TransactionCurrency` |  | | `_ServiceDocItem` | `TransactionCurrency` | `CUKY(5)` | Currency |
| `BillgReqItemNetAmount` |  | |  | `net_value` | `CURR(15)` | Net Value |
| `BillingBlockReason` |  | |  | `billing_block` | `CHAR(2)` | Business Partner: Billing Block Reason |
| `BillgReqItemDescription` |  | |  | `description` | `CHAR(40)` | Description |
| `ServicesRenderedDateTime` |  | |  | `servicesrendereddatetime` | `DEC(15)` | Services Rendered Date as Timestamp |
| `BillgReqItemPricingDate` |  | |  | `price_date` | `DATS(8)` | Pricing Date |
| `BillgReqItemTaxAmount` |  | |  | `tax_amount` | `CURR(15)` | Tax amount in document currency |
| `BillgReqItemGrossAmount` |  | |  | `gross_value` | `CURR(15)` | Gross Order Value in PO Currency |
| `BillgReqItemIsCreditItem` |  | |  | `credit_indicator` | `CHAR(1)` | Credit Debit Indicator |
| `BillgReqItemUsageType` |  | |  | `billreq_i_usage_type` | `CHAR(4)` | Usage Type of Billing Request Lines |
| `BillgReqItemDeletionStatus` |  | |  | `bill_del_stat` | `CHAR(1)` | Deletion Status of Billing Request Line |
| `_ServiceDocItem` | | ✓ | | | | |
| `_BillgReqItmSettlmtStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItem` | `I_ServiceDocumentItem` | [1] |
| `_BillgReqItmSettlmtStatus` | `I_BillgReqItmSettlmtStatus` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Billg Request Line for Srvc Transaction'

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/* Enhancement Solution Order */
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'crms4d_billreq_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem', 'BillingRequestItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int', 'record_no']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'IBILLGREQITEM',
  preserveKey:true,
  compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ]
}

/* Enhancement Solution Order */
//! Business Object SONT for the Service Doc Item BillingRequestItem
@ObjectModel.sapObjectNodeType.name: 'SrvcDocItemBillingRequestItem'
@Metadata.ignorePropagatedAnnotations: true
//@Metadata.allowExtensions:true
//@Analytics.dataCategory: #DIMENSION

define view I_BillingRequestItem
  as select from crms4d_billreq_i
  association [1]    to I_ServiceDocumentItem      as _ServiceDocItem           on  $projection.ServiceObjectType   = _ServiceDocItem.ServiceObjectType
                                                                                and $projection.ServiceDocument     = _ServiceDocItem.ServiceDocument
                                                                                and $projection.ServiceDocumentItem = _ServiceDocItem.ServiceDocumentItem

  association [0..1] to I_BillgReqItmSettlmtStatus as _BillgReqItmSettlmtStatus on  $projection.BillgReqItemBillingStatus = _BillgReqItmSettlmtStatus.BillgReqItemBillingStatus

  association [0..1] to I_Currency                 as _TransactionCurrency      on  $projection.transactioncurrency = _TransactionCurrency.Currency
  association [1]    to I_BillingBlockReason       as _BillingBlockReason       on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
{

  key objtype_h                as ServiceObjectType,
  key object_id                as ServiceDocument,
  key number_int               as ServiceDocumentItem,
  key record_no                as BillingRequestItem,

      bill_date                as BillgReqItemBillingDateTime,
      bill_settl_stat          as BillgReqItemBillingStatus,
      settl_from               as SettlementStartDateTime,
      settl_to                 as SettlementEndDateTime,

      _ServiceDocItem.BillingPlanTimeZone,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      _ServiceDocItem.TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value                as BillgReqItemNetAmount,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block            as BillingBlockReason,

      description              as BillgReqItemDescription,
      servicesrendereddatetime as ServicesRenderedDateTime,
      price_date               as BillgReqItemPricingDate,
      /* Enhancement Solution Order */
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      tax_amount               as BillgReqItemTaxAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      gross_value              as BillgReqItemGrossAmount,
      @Semantics.booleanIndicator: true
      credit_indicator         as BillgReqItemIsCreditItem,
      billreq_i_usage_type     as BillgReqItemUsageType,
      bill_del_stat            as BillgReqItemDeletionStatus,
      
      _ServiceDocItem,
      _BillgReqItmSettlmtStatus,
      _TransactionCurrency,
      _BillingBlockReason
}
```
