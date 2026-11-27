---
name: I_CAINVCGDOCCHRGANDDISCHISTORY
description: "Cainvcgdocchrganddischistory"
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
# I_CAINVCGDOCCHRGANDDISCHISTORY

**Cainvcgdocchrganddischistory**

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
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASequenceNumber` | ✓ | |  | `consno` | `NUMC(6)` | Sequence Number |
| `CADocumentNumberSrce` |  | |  | `opbel_src` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumberSrce` |  | |  | `opupw_src` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABusinessPartnerItemNmbrSrce` |  | |  | `opupk_src` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubstituteDocumentNumberSrce` |  | |  | `abwbl_src` | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CAAmountInTransactionCrcySrce` |  | |  | `betrw_src` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Transaction Currency |
| `CAInvcgChrgAndDiscAmount` |  | |  | `chgamt` | `CURR(13)` | Charge/Discount Amount |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CADocumentSrce` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CADocument` | `I_CADocument` | [0..1] |
| `_CADocumentSrce` | `I_CADocument` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.bel. Historie Zu-/Abschläge'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'CAInvcgDocChrgAndDiscHistory',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Analytics.technicalName: 'ICAInvcDChDstH'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocChrgAndDiscHistory
  as select from dfkkinvdoc_ch

  association [1..1] to I_CAInvcgDocHeader as _CAInvcgDocHeader    on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CADocument       as _CADocument          on $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CADocument       as _CADocumentSrce      on $projection.CADocumentNumberSrce = _CADocumentSrce.CADocumentNumber
  association [0..1] to I_Currency         as _TransactionCurrency on $projection.TransactionCurrency = _TransactionCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno  as CAInvoicingDocument,
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel     as CADocumentNumber,
  key opupk     as CABPItemNumber,
  key consno    as CASequenceNumber,
      @ObjectModel.foreignKey.association: '_CADocumentSrce'
      opbel_src as CADocumentNumberSrce,
      opupw_src as CARepetitionItemNumberSrce,
      opupk_src as CABusinessPartnerItemNmbrSrce,
      abwbl_src as CASubstituteDocumentNumberSrce,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw_src as CAAmountInTransactionCrcySrce,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers     as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      chgamt    as CAInvcgChrgAndDiscAmount,

      // associations
      _CAInvcgDocHeader,
      _CADocument,
      _CADocumentSrce,
      _TransactionCurrency
}
```
