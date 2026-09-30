---
name: I_CAPAYMENTLOT
description: "This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value
semantic_en: "This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Contract Accounting Payment Lot — CDS view giao diện (transactional data) dựa trên dfkkzk."
keywords:
  - "contract"
  - "accounting"
  - "payment"
  - "lot"
  - "search"
  - "term"
  - "created"
  - "user"
  - "creation"
  - "date"
  - "time"
tags:
  - FI
  - account
  - bo:bank
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
---
# I_CAPAYMENTLOT

**This CDS view represents the header data of a payment lot in Contract Accounting. This CDS view provides the data to answer the following business questions: Which house bank and house bank account is assigned to the payment lot? What is the posting date and value date of the payment lot? Which company code does the payment lot belong to? What is the currency of the payment lot? Which bank clearing account is assigned to the payment lot? How many items are contained in the payment lot? Which bank statement is the payment lot associated with? Is the payment lot a cheque lot? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPaymentLot` | ✓ | |  | `keyz1` | `CHAR(12)` | Payment Lot |
| `CAPaymentLotSearchTerm` | ✓ | |  | `keyz2` | `CHAR(40)` | Search Term for Payment Lot |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `ertim` | `TIMS(6)` | Time at which the object was created |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  | `aetim` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `BusinessPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `ValueDate` |  | |  | `valut` | `DATS(8)` | Value Date |
| `CAClearingReason` |  | |  | `augrd` | `CHAR(2)` | Clearing Reason |
| `CADocumentType` |  | |  | `blart` | `CHAR(2)` | Document Type |
| `CADocumentOriginCode` |  | |  | `herkf` | `CHAR(2)` | Document Origin Key |
| `CAReconciliationKey` |  | |  | `fikey` | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CABankClearingAccount` |  | |  | `bvrko` | `CHAR(10)` | Bank clearing account |
| `CAIsChequeLot` |  | |  | `xschs` | `CHAR(1)` | Check Lot |
| `CAIsSeparateLineItemInGL` |  | |  | `xeiph` | `CHAR(1)` | Create Line Item in General Ledger |
| `CAPaymentLotStatus` |  | |  | `stazs` | `CHAR(1)` | Status of the payment lot |
| `CAPaymentCategory` |  | |  | `paytp` | `CHAR(2)` | Category of Payment/Payment Lot |
| `HouseBank` |  | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CAExchangeRate` |  | |  | `cast( abs( kursf ) as fis_absolute_exchangerate preserving type )` | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  | `cast( case when kursf < 0 then 'X' else ' ' end as fis_indirect_quotation preserving type )` | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `CANumberOfPaymentLotItems` |  | |  | `anzpo` | `NUMC(6)` | Number of items |
| `TotalDebitAmount` |  | |  | `summs` | `CURR(15)` | Total debit postings |
| `TotalCreditAmount` |  | |  | `summh` | `CURR(15)` | Total credit postings |
| `TotalAmountCurrency` |  | |  | `sumwa` | `CUKY(5)` | Currency Key for the Totals |
| `CAOriginOfAutomlyCrtedRetsLot` |  | |  | `xrtps` | `CHAR(1)` | Origin of Automatically Generated Returns Lots |
| `BankStatementShortID` |  | |  | `kukey` | `NUMC(8)` | Short Key of Account Statement |
| `_BusinessArea` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CABankClearingAccount` | | ✓ | | | | |
| `_CAClearingReason` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CAPaymentLotStatus` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_TotalAmountCurrency` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CABankClearingAccount` | `I_CABankClearingAccount` | [1..1] |
| `_CAClearingReason` | `I_CAClearingReason` | [0..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_CADocumentType` | `I_CADocumentType` | [1..1] |
| `_CAPaymentLotStatus` | `I_CAPaymentLotStatus` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_TotalAmountCurrency` | `I_Currency` | [1..1] |
| `_HouseBank` | `I_Housebank` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPAYMENTLOT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Contract Accounting Payment Lot'

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgPaymentLot',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_CAPaymentLot
  as select from dfkkzk

  association [0..1] to I_BusinessArea          as _BusinessArea          on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_CAApplicationArea     as _CAApplicationArea     on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [1..1] to I_CABankClearingAccount as _CABankClearingAccount on  $projection.CompanyCode           = _CABankClearingAccount.CompanyCode
                                                                          and $projection.CABankClearingAccount = _CABankClearingAccount.CABankClearingAccount
  association [0..1] to I_CAClearingReason      as _CAClearingReason      on  $projection.CAClearingReason = _CAClearingReason.CAClearingReason
  association [1..1] to I_CADocumentOriginCode  as _CADocumentOriginCode  on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode
  association [1..1] to I_CADocumentType        as _CADocumentType        on  $projection.CADocumentType    = _CADocumentType.CADocumentType
                                                                          and $projection.CAApplicationArea = _CADocumentType.CAApplicationArea
  association [0..1] to I_CAPaymentLotStatus    as _CAPaymentLotStatus    on  $projection.CAPaymentLotStatus = _CAPaymentLotStatus.CAPaymentLotStatus
  association [1..1] to I_CompanyCode           as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Currency              as _Currency              on  $projection.Currency = _Currency.Currency
  association [1..1] to I_Currency              as _TotalAmountCurrency   on  $projection.TotalAmountCurrency = _TotalAmountCurrency.Currency
  association [1..1] to I_Housebank             as _HouseBank             on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                          and $projection.HouseBank   = _HouseBank.HouseBank

{
  key keyz1                                                             as CAPaymentLot,

      keyz2                                                             as CAPaymentLotSearchTerm,

      ernam                                                             as CreatedByUser,
      erdat                                                             as CreationDate,
      ertim                                                             as CreationTime,
      aenam                                                             as LastChangedByUser,
      aedat                                                             as LastChangeDate,
      aetim                                                             as LastChangeTime,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                             as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                             as BusinessArea,
      prctr                                                             as ProfitCenter,
      bupla                                                             as BusinessPlace,

      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                             as CAApplicationArea,
      bldat                                                             as DocumentDate,
      budat                                                             as CAPostingDate,
      valut                                                             as ValueDate,
      @ObjectModel.foreignKey.association: '_CAClearingReason'
      augrd                                                             as CAClearingReason,
      @ObjectModel.foreignKey.association: '_CADocumentType'
      blart                                                             as CADocumentType,
      @ObjectModel.foreignKey.association: '_CADocumentOriginCode'
      herkf                                                             as CADocumentOriginCode,

      fikey                                                             as CAReconciliationKey,
      @ObjectModel.foreignKey.association: '_CABankClearingAccount'
      bvrko                                                             as CABankClearingAccount,
      xschs                                                             as CAIsChequeLot,
      xeiph                                                             as CAIsSeparateLineItemInGL,
      @ObjectModel.foreignKey.association: '_CAPaymentLotStatus'
      stazs                                                             as CAPaymentLotStatus,
      paytp                                                             as CAPaymentCategory,
      @ObjectModel.foreignKey.association: '_HouseBank'
      hbkid                                                             as HouseBank,
      hktid                                                             as HouseBankAccount,

      @ObjectModel.foreignKey.association: '_Currency'
      waers                                                             as Currency,

      cast( abs( kursf ) as fis_absolute_exchangerate preserving type ) as CAExchangeRate,
      cast( case when kursf < 0 then 'X'
                 else ' '
        end as fis_indirect_quotation preserving type )                 as ExchRateIsIndirectQuotation,

      anzpo                                                             as CANumberOfPaymentLotItems,
      @Semantics.amount.currencyCode: 'TotalAmountCurrency'
      summs                                                             as TotalDebitAmount,
      @Semantics.amount.currencyCode: 'TotalAmountCurrency'
      summh                                                             as TotalCreditAmount,
      @ObjectModel.foreignKey.association: '_TotalAmountCurrency'
      sumwa                                                             as TotalAmountCurrency,

      xrtps                                                             as CAOriginOfAutomlyCrtedRetsLot,
      kukey                                                             as BankStatementShortID,

      /* associations */
      _BusinessArea,
      _CAApplicationArea,
      _CABankClearingAccount,
      _CAClearingReason,
      _Currency,
      _CADocumentOriginCode,
      _CADocumentType,
      _CAPaymentLotStatus,
      _CompanyCode,
      _HouseBank,
      _TotalAmountCurrency
}
```
