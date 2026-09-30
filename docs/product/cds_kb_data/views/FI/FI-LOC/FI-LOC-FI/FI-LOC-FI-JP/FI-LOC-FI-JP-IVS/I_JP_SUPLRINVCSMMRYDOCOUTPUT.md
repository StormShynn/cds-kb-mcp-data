---
name: I_JP_SUPLRINVCSMMRYDOCOUTPUT
description: "Supplier Invoice Summary Doc for Output"
app_component: FI-LOC-FI-JP-IVS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value
semantic_en: "Supplier Invoice Summary Doc for Output"
semantic_vi: "Supplier Invoice Summary Doc for Output — CDS view giao diện dựa trên I_JP_SuplrInvcSmmryDocument."
keywords:
  - "supplier"
  - "invoice"
  - "summary"
  - "doc"
  - "for"
  - "output"
  - "company"
  - "code"
  - "number"
  - "suplr"
  - "invc"
  - "smmry"
  - "document"
  - "grouping"
  - "unit"
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-FI-JP-IVS
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-JP
  - FI-LOC-FI-JP-IVS
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
  - supplier
---
# I_JP_SUPLRINVCSMMRYDOCOUTPUT

**Supplier Invoice Summary Doc for Output**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP-IVS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `SupplierInvoiceSummaryNumber` | ✓ | |  |  | `CHAR(10)` | Supplier Invoice Summary Number |
| `SuplrInvcSmmryDocumentUUID` |  | |  |  | `RAW(16)` | Supplier Invoice Summary Header UUID |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SuplrInvcSmmryGroupingUnit` |  | |  |  | `CHAR(20)` | Grouping Unit |
| `SuplrInvoiceSummaryClosingDate` |  | |  |  | `DATS(8)` | Closing Date |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `SuplrInvcSmmryDueDate` |  | |  |  | `DATS(8)` | Due Date for Net Payment |
| `SuplrInvcSmmryNetAmount` |  | |  |  | `CURR(23)` | Invoiced Net Amount |
| `SuplrInvcSmmryTaxAmount` |  | |  |  | `CURR(23)` | Invoiced Tax Amount |
| `SuplrInvoiceSummaryIsCancelled` |  | |  |  | `CHAR(1)` | Cancelled |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Supplier Invoice Summary Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Supplier Invoice Summary Created At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Supplier Invoice Summary Changed By |
| `ChangedDateTime` |  | |  |  | `DEC(15)` | Supplier Invoice Summary Changed At |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JP_SUPLRINVCSMMRYDOCOUTPUT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Supplier Invoice Summary Doc for Output'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
}
//@Analytics.dataExtraction.enabled:true
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey:'SupplierInvoiceSummaryNumber'
@ObjectModel.supportedCapabilities: [
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@Metadata.allowExtensions: true

define view entity I_JP_SuplrInvcSmmryDocOutput
  as select from I_JP_SuplrInvcSmmryDocument
{

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  key SupplierInvoiceSummaryNumber,
      SuplrInvcSmmryDocumentUUID,
      Supplier,
      SuplrInvcSmmryGroupingUnit,
      SuplrInvoiceSummaryClosingDate,
      TransactionCurrency,
      SuplrInvcSmmryDueDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SuplrInvcSmmryNetAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SuplrInvcSmmryTaxAmount,
      @Semantics.booleanIndicator:true
      SuplrInvoiceSummaryIsCancelled,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      ChangedDateTime,
      /* Associations */
      _CompanyCode,
      _Currency,
      _Supplier
}
```
