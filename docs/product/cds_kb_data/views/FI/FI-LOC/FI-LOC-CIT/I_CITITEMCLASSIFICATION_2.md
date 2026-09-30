---
name: I_CITITEMCLASSIFICATION_2
description: "CIT Item Classification"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: yes
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value
semantic_en: "CIT Item Classification"
semantic_vi: "CIT Item Classification — CDS view giao diện dựa trên ficitd_classify."
keywords:
  - "cit"
  - "item"
  - "classification"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_CITITEMCLASSIFICATION_2

**CIT Item Classification**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassificationUUID` | ✓ | |  | `uuid` | `RAW(16)` | Global Unique ID for table |
| `SourceLedger` |  | |  | `sourceledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  | `cast(gjahr as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `LedgerGLLineItem` |  | |  | `docln` | `CHAR(6)` | Six-Character General Ledger Line Item |
| `Ledger` |  | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CITReportingDate` |  | |  | `repdate` | `DATS(8)` | Reporting Date |
| `CorporateIncomeTaxHierarchy` |  | |  | `hryid` | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  | `clsfcode` | `CHAR(40)` | CIT Classification Code |
| `CITItemAmountInDisplayCurrency` |  | |  | `amount` | `CURR(23)` | CIT Amount |
| `Currency` |  | |  | `currency` | `CUKY(5)` | CIT Currency |
| `ReferenceDocument` |  | |  | `awref` | `CHAR(10)` | Reference Doc. Number |
| `BalanceCarryforwardStatus` |  | |  | `bcf` | `CHAR(1)` | Corporate Incom Tax Balance Carry Forward Item |
| `CreationDateTime` |  | |  | `cast(created_at as creation_date_time preserving type )` | `DEC(21)` | Date and Time of Creation |
| `CreatedByUserName` |  | |  | `cast (created_by as cruser preserving type )` | `CHAR(12)` | Created By |
| `ChangedDateTime` |  | |  | `cast (changed_at as last_changed_date_time preserving type )` | `DEC(21)` | Date and Time of Last Change |
| `LastChangedByUserName` |  | |  | `cast (changed_by as last_changed_by_user preserving type )` | `CHAR(12)` | User Who Last Changed the Business Document |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CITItemClassification` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATION_2')/$value)*

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'CIT Item Classification'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_Extension'],
  elementSuffix: 'CCL',
  quota: {
    maximumBytes: 16900,
    maximumFields: 400
  },
  allowNewCompositions: false
}
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'CITItemClassification'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view entity I_CITItemClassification_2
  as select from ficitd_classify
  
  association [1..1] to E_CITItemClassification as _Extension //do not expose this association in the projection list of the view
         on $projection.CITClassificationUUID = _Extension.CITClassificationUUID

{

  key uuid                                                         as CITClassificationUUID,
      sourceledger                                                 as SourceLedger,
      bukrs                                                        as CompanyCode,
      cast(gjahr as fis_gjahr_no_conv preserving type )            as FiscalYear,
      belnr                                                        as AccountingDocument,
      docln                                                        as LedgerGLLineItem,
      ledger                                                       as Ledger,
      repdate                                                      as CITReportingDate,
      hryid                                                        as CorporateIncomeTaxHierarchy,
      clsfcode                                                     as CITClassificationCode,
      @Semantics.amount.currencyCode: 'Currency'
      amount                                                       as CITItemAmountInDisplayCurrency,
      currency                                                     as Currency,
      awref                                                        as ReferenceDocument,
      bcf                                                          as BalanceCarryforwardStatus,
      @Semantics.systemDateTime.createdAt: true
      cast(created_at as creation_date_time preserving type )      as CreationDateTime,
      @Semantics.user.createdBy: true
      cast (created_by as cruser preserving type )                 as CreatedByUserName,
      @Semantics.systemDateTime.lastChangedAt: true
      cast (changed_at as last_changed_date_time preserving type ) as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      cast (changed_by as last_changed_by_user preserving type )   as LastChangedByUserName
}
```
