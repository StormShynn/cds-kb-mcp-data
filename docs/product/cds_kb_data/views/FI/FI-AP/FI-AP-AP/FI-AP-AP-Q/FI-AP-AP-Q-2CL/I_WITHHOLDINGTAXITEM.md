---
name: I_WITHHOLDINGTAXITEM
description: "Withholdingtaxitem"
app_component: FI-AP-AP-Q-2CL
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
  - FI-AP
  - FI-AP-AP
  - interface-view
  - tax
  - item-level
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXITEM

**Withholdingtaxitem**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-Q-2CL` |
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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` | ✓ | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` | ✓ | |  | `buzei` | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `WithholdingTaxType` | ✓ | |  | `witht` | `CHAR(2)` | Indicator for Withholding Tax Type |
| `WithholdingTaxCode` |  | |  | `wt_withcd` | `CHAR(2)` | Withholding Tax Code |
| `WhldgTaxBaseAmtInCoCodeCrcy` |  | |  | `wt_qsshh` | `CURR(23)` | Withholding Tax Base Amount (Local Currency) |
| `WhldgTaxBaseAmtInTransacCrcy` |  | |  | `wt_qsshb` | `CURR(23)` | Withholding Tax Base Amount in Document Currency |
| `WhldgTaxBaseAmtInAddlCrcy2` |  | |  | `wt_qssh2` | `CURR(23)` | Withholding Tax Base Amount in Second Local Currency |
| `WhldgTaxBaseAmtInAddlCrcy3` |  | |  | `wt_qssh3` | `CURR(23)` | Withholding Tax Base Amount in Third Local Currency |
| `WhldgTaxBaseIsEnteredManually` |  | |  | `wt_basman` | `CHAR(1)` | Indicator: Withholding Tax Base Amount Entered Manually |
| `WhldgTaxAmtInCoCodeCrcy` |  | |  | `wt_qbshh` | `CURR(23)` | Withholding Tax Amount in Local Currency |
| `WhldgTaxAmtInTransacCrcy` |  | |  | `wt_qbshb` | `CURR(23)` | Withholding Tax Amount in Document Currency |
| `WhldgTaxAmtInAddlCrcy2` |  | |  | `wt_qbsh2` | `CURR(23)` | Withholding Tax Amount in Second Local Currency |
| `WhldgTaxAmtInAddlCrcy3` |  | |  | `wt_qbsh3` | `CURR(23)` | Withholding Tax Amount in Third Local Currency |
| `WhldgTaxIsEnteredManually` |  | |  | `wt_amnman` | `CHAR(1)` | Indicator: Withholding Tax Amount Entered Manually |
| `WhldgTaxItemStatus` |  | |  | `wt_stat` | `CHAR(1)` | Line Item Status |
| `WhldgTaxExmptAmtInCoCodeCrcy` |  | |  | `wt_qsfhh` | `CURR(23)` | Amount Exempt from Withholding Tax in Local Currency |
| `WhldgTaxExmptAmtInTransacCrcy` |  | |  | `wt_qsfhb` | `CURR(23)` | Amount Exempt from Withholding Tax in Document Currency |
| `WhldgTaxExmptAmtInAddlCrcy2` |  | |  | `wt_qsfh2` | `CURR(23)` | Amount Exempt from Withholding Tax in 2nd Local Currency |
| `WhldgTaxExmptAmtInAddlCrcy3` |  | |  | `wt_qsfh3` | `CURR(23)` | Amount Exempt from Withholding Tax in 3rd Local Currency |
| `MnllyEnteredWHTAmtInTransCrcy` |  | |  | `wt_qbuihb` | `CURR(23)` | Withholding Tax Amount Entered Manually in Document Currency |
| `MnllyEnteredWHTAmtInCoCodeCrcy` |  | |  | `wt_qbuihh` | `CURR(23)` | Withholding Tax Amount Entered Manually in Local Currency |
| `WhldgTaxExmptCertificate` |  | |  | `wt_wtexmn` | `CHAR(25)` | Exemption Certificate Number |
| `FinancialAccountType` |  | |  | `koart` | `CHAR(1)` | Account Type |
| `CustomerSupplierAccount` |  | |  | `wt_acco` | `CHAR(10)` | Vendor/Customer Account Number |
| `GLAccount` |  | |  | `hkont` | `CHAR(10)` | General Ledger Account |
| `SupplierRecipientType` |  | |  | `qsrec` | `CHAR(2)` | Recipient Type |
| `ClearingAccountingDocument` |  | |  | `augbl` | `CHAR(10)` | Document Number of the Clearing Document |
| `ClearingDate` |  | |  | `augdt` | `DATS(8)` | Clearing Date |
| `WithholdingTaxExmptPercent` |  | |  | `wt_qszrt` | `DEC(5)` | Exemption Rate |
| `WithholdingTaxPercent` |  | |  | `qsatz` | `DEC(7)` | Withholding Tax Rate |
| `IsSelfWhldgTax` |  | |  | `wt_slfwtpd` | `CHAR(1)` | Indicator: Entry Posted as Self-Withholding Tax |
| `IsGrossingUp` |  | |  | `wt_gruwtpd` | `CHAR(1)` | Indicator: Entry Posted as "Grossing Up" |
| `WithholdingTaxCertificate` |  | |  | `ctnumber` | `CHAR(10)` | Withholding Tax Certificate Number |
| `WhldgTaxCertDate` |  | |  | `ctissuedate` | `DATS(8)` | Issue or Print Date of Withholding Tax Certificate |
| `IN_ClrgWithholdingTaxDocument` |  | |  | `j_1iintchln` | `CHAR(12)` | Challan Number |
| `IN_ClrgWithholdingTaxDate` |  | |  | `j_1iintchdt` | `DATS(8)` | Challan Date |
| `IN_ReferenceDocumentNumber` |  | |  | `j_1irebzg` | `CHAR(10)` | Document No. of the Invoice to Which the Transaction Belongs |
| `DownPaymentIsCleared` |  | |  | `wt_downc` | `CHAR(1)` | Indicator: Entry Belongs to a Down Payment Clearing Item |
| `DocumentIsPartialExempted` |  | |  | `fiwtin_par_exem` | `CHAR(1)` | Partial Exemption |
| `IN_WhldgTaxRecordTypeTrans` |  | |  | `j_1iewtrec` | `CHAR(1)` | Record type for EWT transactions-India |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `DocumentCurrency` |  | | `_AccountingDocument` | `Currency` | `CUKY(5)` | Currency Key |
| `AdditionalCurrency1` |  | | `_AccountingDocument` | `AdditionalCurrency1` | `CUKY(5)` | Additional Currency 1 |
| `AdditionalCurrency2` |  | | `_AccountingDocument` | `AdditionalCurrency2` | `CUKY(5)` | Additional Currency 2 |
| `RptgWhldgTxBaseAmtInCoCodeCrcy` |  | |  | `j_1af_wt_repbs` | `CURR(23)` | Withholding tax base amount in local currency for  reporting |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_WithholdingTaxCode` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_WithholdingTaxCode` | `I_Extendedwhldgtaxcode` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Withholding Tax Item'
@AbapCatalog.sqlViewName: 'IFIWTAXITEM'
@ClientHandling.algorithm: #SESSION_VARIABLE
//@VDM.businessObject: 'Withholding Tax Item'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #FACT, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities:
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'WithholdingTaxItem'
@Metadata.ignorePropagatedAnnotations:true

//@VDM.dclSourceNotRequired:true
define view I_Withholdingtaxitem
  as select from with_item
  association [0..1] to I_CompanyCode          as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_AccountingDocument   as _AccountingDocument  on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
                                                                       and $projection.AccountingDocument = _AccountingDocument.AccountingDocument
                                                                       and $projection.FiscalYear         = _AccountingDocument.FiscalYear
  association [0..1] to I_GLAccount            as _GLAccount           on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                       and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_Extendedwhldgtaxcode as _WithholdingTaxCode  on  $projection.Country            = _WithholdingTaxCode.Country
                                                                       and $projection.WithholdingTaxType = _WithholdingTaxCode.WithholdingTaxType
                                                                       and $projection.WithholdingTaxCode = _WithholdingTaxCode.WithholdingTaxCode
  association [0..1] to I_Currency             as _CompanyCodeCurrency on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency             as _DocumentCurrency    on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [0..1] to I_Currency             as _AdditionalCurrency1 on  $projection.AdditionalCurrency1 = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency             as _AdditionalCurrency2 on  $projection.AdditionalCurrency2 = _AdditionalCurrency2.Currency

{
  key bukrs                                   as CompanyCode,
  key belnr                                   as AccountingDocument,
  key gjahr                                   as FiscalYear,
  key buzei                                   as AccountingDocumentItem,
  key witht                                   as WithholdingTaxType,
      wt_withcd                               as WithholdingTaxCode,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qsshh                                as WhldgTaxBaseAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qsshb                                as WhldgTaxBaseAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qssh2                                as WhldgTaxBaseAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qssh3                                as WhldgTaxBaseAmtInAddlCrcy3,
      wt_basman                               as WhldgTaxBaseIsEnteredManually,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qbshh                                as WhldgTaxAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qbshb                                as WhldgTaxAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qbsh2                                as WhldgTaxAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qbsh3                                as WhldgTaxAmtInAddlCrcy3,
      wt_amnman                               as WhldgTaxIsEnteredManually,
      wt_stat                                 as WhldgTaxItemStatus,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' //Company Code Currency
      wt_qsfhh                                as WhldgTaxExmptAmtInCoCodeCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency'    //Accounting Document Currency
      wt_qsfhb                                as WhldgTaxExmptAmtInTransacCrcy,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      wt_qsfh2                                as WhldgTaxExmptAmtInAddlCrcy2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      wt_qsfh3                                as WhldgTaxExmptAmtInAddlCrcy3,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DocumentCurrency' // Accounting Document Currency
      wt_qbuihb as MnllyEnteredWHTAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // Company Code Currency
      wt_qbuihh as MnllyEnteredWHTAmtInCoCodeCrcy,   
      wt_wtexmn                               as WhldgTaxExmptCertificate,
      koart                                   as FinancialAccountType,
      wt_acco                                 as CustomerSupplierAccount,
      hkont                                   as GLAccount,
      qsrec                                   as SupplierRecipientType,
      augbl                                   as ClearingAccountingDocument,
      augdt                                   as ClearingDate,
      wt_qszrt                                as WithholdingTaxExmptPercent,
      qsatz                                   as WithholdingTaxPercent,
      wt_slfwtpd                              as IsSelfWhldgTax,
      wt_gruwtpd                              as IsGrossingUp,
      ctnumber                                as WithholdingTaxCertificate,
      ctissuedate                             as WhldgTaxCertDate,
      // fields for India
      j_1iintchln                             as IN_ClrgWithholdingTaxDocument,
      j_1iintchdt                             as IN_ClrgWithholdingTaxDate,
      j_1irebzg                               as IN_ReferenceDocumentNumber,
       @Semantics.booleanIndicator: true
      wt_downc                                as DownPaymentIsCleared,
      @Semantics.booleanIndicator: true
      fiwtin_par_exem                         as DocumentIsPartialExempted,
      j_1iewtrec                              as IN_WhldgTaxRecordTypeTrans,
      _CompanyCode,
      _AccountingDocument,
      _GLAccount,
      _WithholdingTaxCode,
      _CompanyCode.Country                    as Country,
      @Semantics.currencyCode:true
      _CompanyCode.Currency                   as CompanyCodeCurrency,
      @Semantics.currencyCode:true
      _AccountingDocument.Currency            as DocumentCurrency,
      @Semantics.currencyCode:true
      _AccountingDocument.AdditionalCurrency1 as AdditionalCurrency1,
      @Semantics.currencyCode:true
      _AccountingDocument.AdditionalCurrency2 as AdditionalCurrency2,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      j_1af_wt_repbs                          as RptgWhldgTxBaseAmtInCoCodeCrcy,
      _CompanyCodeCurrency,
      _DocumentCurrency,
      _AdditionalCurrency1,
      _AdditionalCurrency2
}
where
  wt_withcd != ''
```
