---
name: C_RECRRGSUPLRINVCTMPL
description: "Recrrgsuplrinvctmpl"
semantic_vi: "View CDS Recrrgsuplrinvctmpl hiển thị các mẫu hóa đơn nhà cung cấp và dữ liệu kế toán liên quan, hữu ích cho các giao dịch và báo cáo tài chính."
keywords:
  - "supplier invoice template"
  - "mẫu hóa đơn nhà cung cấp"
  - "accounting data"
  - "data tài chính"
  - "financial transactions"
  - "giao dịch tài chính"
  - "fi"
  - "fi-fio-ap-2cl"
  - "ekko"
  - "đơn mua hàng"
  - "hóa đơn nhà cung cấp"
semantic_en: "The Recrrgsuplrinvctmpl CDS view exposes supplier invoice templates and related accounting data, useful for financial transactions and reporting."
app_component: FI-FIO-AP-2CL
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
  - consumption-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPL

**Recrrgsuplrinvctmpl**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
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
| `RecrrgSuplrInvcTmplUUID` | ✓ | | `_Tmpl` | `RecrrgSuplrInvcTmplUUID` | `RAW(16)` | GUID of Recurring Supplier Invoice Template |
| `RecrrgSupplierInvoiceTemplate` |  | | `_Tmpl` | `RecrrgSupplierInvoiceTemplate` | `CHAR(10)` | Document Number of a Recurring Supplier Invoice Template |
| `AccountingDocumentType` |  | | `_Tmpl` | `AccountingDocumentType` | `CHAR(2)` | Document Type |
| `CompanyCode` |  | | `_Tmpl` | `CompanyCode` | `CHAR(4)` | Company Code |
| `DocumentReferenceID` |  | | `_Tmpl` | `DocumentReferenceID` | `CHAR(16)` | Reference Document Number |
| `AccountingDocumentHeaderText` |  | | `_Tmpl` | `AccountingDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `TotalAmountInTransactionCrcy` |  | | `_Tmpl` | `TotalAmountInTransactionCrcy` | `CURR(23)` | Gross Invoice Amount in Document Currency |
| `InvoicingParty` |  | | `_Tmpl` | `InvoicingParty` | `CHAR(10)` | Different Invoicing Party |
| `ExchangeRate` |  | | `_Tmpl` | `ExchangeRate` | `DEC(9)` | Exchange Rate |
| `TotalAmountInLocalCurrency` |  | | `_Tmpl` | `TotalAmountInLocalCurrency` | `CURR(23)` | Signed Amount in Local Currency (Long) |
| `TransactionCurrency` |  | | `_Tmpl` | `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `LocalCurrency` |  | | `_Tmpl` | `LocalCurrency` | `CUKY(5)` | Local Currency |
| `AssignmentReference` |  | | `_Tmpl` | `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `SupplierBankType` |  | | `_Tmpl` | `SupplierBankType` | `CHAR(4)` | Partner bank type |
| `IBAN` |  | | `_Tmpl` | `IBAN` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SWIFTCode` |  | | `_Tmpl` | `SWIFTCode` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `PaymentSystem` |  | |  | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end` | `CHAR(15)` | Payment System ID |
| `AliasType` |  | |  | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.AliasType end` | `CHAR(15)` | Bank Account Alias Type ID |
| `BPBankAccountAliasName` |  | |  | `case when _Tmpl.SupplierBankType is initial then '' else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end` | `CHAR(255)` | BP: Bank Account Alias |
| `ReportingCountry` |  | | `_Tmpl` | `ReportingCountry` | `CHAR(3)` | Reporting Country/Region |
| `CompanyCodeCountry` |  | | `_Tmpl` | `CompanyCodeCountry` | `CHAR(3)` | Company Code Country/Region |
| `SupplierVATRegistration` |  | | `_Tmpl` | `SupplierVATRegistration` | `CHAR(20)` | VAT Registration Number |
| `IsEUTriangularDeal` |  | | `_Tmpl` | `IsEUTriangularDeal` | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `DocumentItemText` |  | | `_Tmpl` | `DocumentItemText` | `CHAR(50)` | Item Text |
| `CreatedByUser` |  | | `_Tmpl` | `CreatedByUser` | `CHAR(12)` | Name of the Processor Who Entered the Object |
| `CreatedByUserName` |  | | `_Tmpl` | `CreatedByUserName` | `CHAR(80)` | Full Name of Person |
| `CreationDate` |  | | `_Tmpl` | `CreationDate` | `DATS(8)` | Creation Date |
| `StateCentralBankPaymentReason` |  | | `_Tmpl` | `StateCentralBankPaymentReason` | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | | `_Tmpl` | `SupplyingCountry` | `CHAR(3)` | Supplying Country/Region |
| `PaymentTerms` |  | | `_Tmpl` | `PaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | | `_Tmpl` | `PaymentMethod` | `CHAR(1)` | Payment Method |
| `PaymentReference` |  | | `_Tmpl` | `PaymentReference` | `CHAR(30)` | Payment Reference |
| `CashDiscount1Days` |  | | `_Tmpl` | `CashDiscount1Days` | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount1Percent` |  | | `_Tmpl` | `CashDiscount1Percent` | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Days` |  | | `_Tmpl` | `CashDiscount2Days` | `DEC(3)` | Cash Discount Days 2 |
| `CashDiscount2Percent` |  | | `_Tmpl` | `CashDiscount2Percent` | `DEC(5)` | Cash Discount Percentage 2 |
| `NetPaymentDays` |  | | `_Tmpl` | `NetPaymentDays` | `DEC(3)` | Net Payment Terms Period |
| `HouseBank` |  | | `_Tmpl` | `HouseBank` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | | `_Tmpl` | `HouseBankAccount` | `CHAR(5)` | ID for Account Details |
| `ManualCashDiscountAmount` |  | | `_Tmpl` | `ManualCashDiscountAmount` | `CURR(23)` | Cash Discount Amount |
| `PaymentMethodSupplement` |  | | `_Tmpl` | `PaymentMethodSupplement` | `CHAR(2)` | Payment method supplement |
| `SuplrInvcPaymentBlockingReason` |  | | `_Tmpl` | `SuplrInvcPaymentBlockingReason` | `CHAR(1)` | Payment Block Key |
| `PaytSlipWthRefCheckDigit` |  | | `_Tmpl` | `PaytSlipWthRefCheckDigit` | `CHAR(2)` | POR Check Digit |
| `PaytSlipWthRefReference` |  | | `_Tmpl` | `PaytSlipWthRefReference` | `CHAR(27)` | POR Reference Number |
| `PaytSlipWthRefSubscriber` |  | | `_Tmpl` | `PaytSlipWthRefSubscriber` | `CHAR(11)` | POR Subscriber Number |
| `TaxCode` |  | | `_Tmpl` | `TaxCode` | `CHAR(2)` | Tax code |
| `FixedCashDiscount` |  | | `_Tmpl` | `FixedCashDiscount` | `CHAR(1)` | Fixed Payment Terms |
| `TaxBaseAmountInTransCrcy` |  | | `_Tmpl` | `TaxBaseAmountInTransCrcy` | `CURR(13)` | Tax Amount in Document Currency with +/- Sign |
| `TaxDeterminationDate` |  | | `_Tmpl` | `TaxDeterminationDate` | `DATS(8)` | Date for Determining Tax Rates |
| `TaxJurisdiction` |  | | `_Tmpl` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `TaxCountry` |  | | `_Tmpl` | `TaxCountry` | `CHAR(3)` | Tax Reporting Country/Region |
| `WithholdingTaxIsEnabled` |  | | `_Tmpl` | `WithholdingTaxIsEnabled` | `CHAR(1)` | recurring supplier invoice withholding tax enable indicator |
| `GLAccount` |  | | `_Tmpl` | `GLAccount` | `CHAR(10)` | General Ledger Account |
| `SettlmtCoCodeTaxCountry` |  | | `_Tmpl` | `SettlmtCoCodeTaxCountry` | `CHAR(3)` | Tax Country/Region Company Code |
| `RecurrenceStartDate` |  | | `_Tmpl` | `RecurrenceStartDate` | `DATS(8)` | Recurrence Start Date |
| `FirstOccurrenceDate` |  | | `_Tmpl` | `FirstOccurrenceDate` | `DATS(8)` | First Occurrence Date |
| `NextOccurrenceDate` |  | | `_Tmpl` | `NextOccurrenceDate` | `DATS(8)` | Next Calculation Date of the Recurring Entry |
| `NextOccurrenceAmountInTC` |  | | `_Tmpl` | `NextOccurrenceAmountInTC` | `CURR(23)` | Next Posting Amount |
| `RecurrencePattern` |  | | `_Tmpl` | `RecurrencePattern` | `CHAR(1)` | Recurrence Type |
| `RecurrencePatternName` |  | |  | `cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName as fap_rsiv_recurr_pattern preserving type )` | `CHAR(60)` | Recurrence Pattern Name |
| `RecurrenceIntervalInDays` |  | | `_Tmpl` | `RecurrenceIntervalInDays` | `INT2(5)` | Interval In Days |
| `RecurrenceIntervalInWeeks` |  | | `_Tmpl` | `RecurrenceIntervalInWeeks` | `INT2(5)` | Interval In Weeks |
| `RecurrenceIntervalInMonths` |  | | `_Tmpl` | `RecurrenceIntervalInMonths` | `INT2(5)` | Interval In Months |
| `RecurrenceDayOfMonth` |  | | `_Tmpl` | `RecurrenceDayOfMonth` | `NUMC(2)` | Occurrence Day in a Month |
| `RecurrenceDayOfWeek` |  | | `_Tmpl` | `RecurrenceDayOfWeek` | `NUMC(1)` | Occurrence Day in a Week |
| `RecurrenceEndType` |  | | `_Tmpl` | `RecurrenceEndType` | `CHAR(1)` | End Recurrence By |
| `RecurrenceEndTypeName` |  | |  | `cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName as fap_rsiv_recurr_end_type preserving type )` | `CHAR(60)` | Recurrence End Type Name |
| `NumberOfOccurrences` |  | | `_Tmpl` | `NumberOfOccurrences` | `INT2(5)` | Number of Occurrences |
| `NumberOfPostedInvoices` |  | | `_Tmpl` | `NumberOfPostedInvoices` | `INT2(5)` | Number of Posted Occurrences |
| `NumberOfNotPostedInvoices` |  | | `_Tmpl` | `NumberOfNotPostedInvoices` | `INT2(5)` | Number of Unposted Occurrences |
| `LastOccurrenceDate` |  | | `_Tmpl` | `LastOccurrenceDate` | `DATS(8)` | Recurrence End Date |
| `ForeignCrcyAmtCnvrsnRule` |  | | `_Tmpl` | `ForeignCrcyAmtCnvrsnRule` | `CHAR(1)` | Conversion Rule for Foreign Currency Amounts |
| `BusinessPlace` |  | | `_Tmpl` | `BusinessPlace` | `CHAR(4)` | Business Place |
| `BusinessSectionCode` |  | | `_Tmpl` | `BusinessSectionCode` | `CHAR(4)` | Section Code |
| `IN_GSTPartner` |  | | `_Tmpl` | `IN_GSTPartner` | `CHAR(10)` | GST Partner |
| `IN_GSTPlaceOfSupply` |  | | `_Tmpl` | `IN_GSTPlaceOfSupply` | `CHAR(3)` | Place of Supply |
| `IN_InvoiceReferenceNumber` |  | | `_Tmpl` | `IN_InvoiceReferenceNumber` | `CHAR(64)` | Invoice Reference Number |
| `QuickResponseIBAN` |  | | `_Tmpl` | `QuickResponseIBAN` | `CHAR(34)` | QR-IBAN International Bank Account Number |
| `OneTimeAcctCntrySpecificRef1` |  | | `_Tmpl` | `OneTimeAcctCntrySpecificRef1` | `CHAR(140)` | Ctry/Reg. Specific Reference in the One Time Account Data |
| `ReferenceAccountForIBAN` |  | | `_Tmpl` | `ReferenceAccountForIBAN` | `CHAR(10)` | Reference Account for IBAN |
| `_RecrrgSuplrInvcTmplItem` | | ✓ | | | | |
| `_RecrrgSuplrInvcTmplInstce` | | ✓ | | | | |
| `_RecrrgSuplrInvcTmplWhgdTax` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RecrrgSuplrInvcTmplItem` | `C_RecrrgSuplrInvcTmplItem` | [0..*] |
| `_RecrrgSuplrInvcTmplInstce` | `C_RecrrgSuplrInvcTmplInstce` | [0..*] |
| `_RecrrgSuplrInvcTmplWhgdTax` | `C_RecrrgSuplrInvcTmplWhgdTax` | [0..*] |
| `_RecurrencePatternText` | `I_RecurrencePattern` | [0..1] |
| `_RecurrenceEndTypeText` | `I_RecurrencePatternEndType` | [0..1] |
| `_BPBankAlias` | `I_SupplierBankDetails` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Recurring Supplier Invoice Template'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecurringSupplierInvoiceTmpl'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}


define root view entity C_RecrrgSuplrInvcTmpl
  as select from I_RecrrgSuplrInvcTmpl as _Tmpl

  association [0..*] to C_RecrrgSuplrInvcTmplItem    as _RecrrgSuplrInvcTmplItem    on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplItem.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplInstce  as _RecrrgSuplrInvcTmplInstce  on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplInstce.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplWhgdTax as _RecrrgSuplrInvcTmplWhgdTax on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplWhgdTax.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_RecurrencePattern          as _RecurrencePatternText      on  $projection.RecurrencePattern = _RecurrencePatternText.RecurrenceType

  association [0..1] to I_RecurrencePatternEndType   as _RecurrenceEndTypeText      on  $projection.RecurrenceEndType = _RecurrenceEndTypeText.RecurrenceEndType

  association [0..1] to I_SupplierBankDetails        as _BPBankAlias                on  $projection.SupplierBankType        = _BPBankAlias.BPBankAccountInternalID
                                                                                    and $projection.ReferenceAccountForIBAN = _BPBankAlias.Supplier

{
  key _Tmpl.RecrrgSuplrInvcTmplUUID                                                                                                                 as RecrrgSuplrInvcTmplUUID,

      @Search.defaultSearchElement: true
      _Tmpl.RecrrgSupplierInvoiceTemplate                                                                                                           as RecrrgSupplierInvoiceTemplate,

      _Tmpl.AccountingDocumentType                                                                                                                  as AccountingDocumentType,

      _Tmpl.CompanyCode                                                                                                                             as CompanyCode,

      _Tmpl.DocumentReferenceID                                                                                                                     as DocumentReferenceID,

      _Tmpl.AccountingDocumentHeaderText                                                                                                            as AccountingDocumentHeaderText,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TotalAmountInTransactionCrcy                                                                                                            as TotalAmountInTransactionCrcy,

      _Tmpl.InvoicingParty                                                                                                                          as InvoicingParty,

      _Tmpl.ExchangeRate                                                                                                                            as ExchangeRate,

      @Semantics.amount.currencyCode: 'LocalCurrency'
      _Tmpl.TotalAmountInLocalCurrency                                                                                                              as TotalAmountInLocalCurrency,

      _Tmpl.TransactionCurrency                                                                                                                     as TransactionCurrency,

      _Tmpl.LocalCurrency                                                                                                                           as LocalCurrency,

      _Tmpl.AssignmentReference                                                                                                                     as AssignmentReference,

      _Tmpl.SupplierBankType                                                                                                                        as SupplierBankType,

      _Tmpl.IBAN                                                                                                                                    as IBAN,

      _Tmpl.SWIFTCode                                                                                                                               as SWIFTCode,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end                                                                                 as PaymentSystem,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.AliasType end                                                                                     as AliasType,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end                                                                        as BPBankAccountAliasName,

      _Tmpl.ReportingCountry                                                                                                                        as ReportingCountry,

      _Tmpl.CompanyCodeCountry                                                                                                                      as CompanyCodeCountry,

      _Tmpl.SupplierVATRegistration                                                                                                                 as SupplierVATRegistration,

      _Tmpl.IsEUTriangularDeal                                                                                                                      as IsEUTriangularDeal,

      _Tmpl.DocumentItemText                                                                                                                        as DocumentItemText,

      _Tmpl.CreatedByUser                                                                                                                           as CreatedByUser,

      _Tmpl.CreatedByUserName                                                                                                                       as CreatedByUserName,

      _Tmpl.CreationDate                                                                                                                            as CreationDate,

      _Tmpl.StateCentralBankPaymentReason                                                                                                           as StateCentralBankPaymentReason,

      _Tmpl.SupplyingCountry                                                                                                                        as SupplyingCountry,

      _Tmpl.PaymentTerms                                                                                                                            as PaymentTerms,

      _Tmpl.PaymentMethod                                                                                                                           as PaymentMethod,

      _Tmpl.PaymentReference                                                                                                                        as PaymentReference,

      _Tmpl.CashDiscount1Days                                                                                                                       as CashDiscount1Days,

      _Tmpl.CashDiscount1Percent                                                                                                                    as CashDiscount1Percent,

      _Tmpl.CashDiscount2Days                                                                                                                       as CashDiscount2Days,

      _Tmpl.CashDiscount2Percent                                                                                                                    as CashDiscount2Percent,

      _Tmpl.NetPaymentDays                                                                                                                          as NetPaymentDays,

      _Tmpl.HouseBank                                                                                                                               as HouseBank,

      _Tmpl.HouseBankAccount                                                                                                                        as HouseBankAccount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.ManualCashDiscountAmount                                                                                                                as ManualCashDiscountAmount,

      _Tmpl.PaymentMethodSupplement                                                                                                                 as PaymentMethodSupplement,

      _Tmpl.SuplrInvcPaymentBlockingReason                                                                                                          as SuplrInvcPaymentBlockingReason,

      _Tmpl.PaytSlipWthRefCheckDigit                                                                                                                as PaytSlipWthRefCheckDigit,

      _Tmpl.PaytSlipWthRefReference                                                                                                                 as PaytSlipWthRefReference,

      _Tmpl.PaytSlipWthRefSubscriber                                                                                                                as PaytSlipWthRefSubscriber,

      _Tmpl.TaxCode                                                                                                                                 as TaxCode,

      _Tmpl.FixedCashDiscount                                                                                                                       as FixedCashDiscount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TaxBaseAmountInTransCrcy                                                                                                                as TaxBaseAmountInTransCrcy,

      _Tmpl.TaxDeterminationDate                                                                                                                    as TaxDeterminationDate,

      _Tmpl.TaxJurisdiction                                                                                                                         as TaxJurisdiction,

      _Tmpl.TaxCountry                                                                                                                              as TaxCountry,

      _Tmpl.WithholdingTaxIsEnabled                                                                                                                 as WithholdingTaxIsEnabled,

      _Tmpl.GLAccount                                                                                                                               as GLAccount,

      _Tmpl.SettlmtCoCodeTaxCountry                                                                                                                 as SettlmtCoCodeTaxCountry,

      _Tmpl.RecurrenceStartDate                                                                                                                     as RecurrenceStartDate,

      _Tmpl.FirstOccurrenceDate                                                                                                                     as FirstOccurrenceDate,

      _Tmpl.NextOccurrenceDate                                                                                                                      as NextOccurrenceDate,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.NextOccurrenceAmountInTC                                                                                                                as NextOccurrenceAmountInTC,

      _Tmpl.RecurrencePattern                                                                                                                       as RecurrencePattern,

      cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName as fap_rsiv_recurr_pattern preserving type )     as RecurrencePatternName,

      _Tmpl.RecurrenceIntervalInDays                                                                                                                as RecurrenceIntervalInDays,

      _Tmpl.RecurrenceIntervalInWeeks                                                                                                               as RecurrenceIntervalInWeeks,

      _Tmpl.RecurrenceIntervalInMonths                                                                                                              as RecurrenceIntervalInMonths,

      _Tmpl.RecurrenceDayOfMonth                                                                                                                    as RecurrenceDayOfMonth,

      _Tmpl.RecurrenceDayOfWeek                                                                                                                     as RecurrenceDayOfWeek,

      _Tmpl.RecurrenceEndType                                                                                                                       as RecurrenceEndType,

      cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName as fap_rsiv_recurr_end_type preserving type ) as RecurrenceEndTypeName,

      _Tmpl.NumberOfOccurrences                                                                                                                     as NumberOfOccurrences,

      _Tmpl.NumberOfPostedInvoices                                                                                                                  as NumberOfPostedInvoices,

      _Tmpl.NumberOfNotPostedInvoices                                                                                                               as NumberOfNotPostedInvoices,

      _Tmpl.LastOccurrenceDate                                                                                                                      as LastOccurrenceDate,

      _Tmpl.ForeignCrcyAmtCnvrsnRule                                                                                                                as ForeignCrcyAmtCnvrsnRule,

      _Tmpl.BusinessPlace                                                                                                                           as BusinessPlace,

      _Tmpl.BusinessSectionCode                                                                                                                     as BusinessSectionCode,

      _Tmpl.IN_GSTPartner                                                                                                                           as IN_GSTPartner,

      _Tmpl.IN_GSTPlaceOfSupply                                                                                                                     as IN_GSTPlaceOfSupply,

      _Tmpl.IN_InvoiceReferenceNumber                                                                                                               as IN_InvoiceReferenceNumber,

      _Tmpl.QuickResponseIBAN                                                                                                                       as QuickResponseIBAN,

      _Tmpl.OneTimeAcctCntrySpecificRef1                                                                                                            as OneTimeAcctCntrySpecificRef1,

      _Tmpl.ReferenceAccountForIBAN                                                                                                                 as ReferenceAccountForIBAN,

      _RecrrgSuplrInvcTmplItem,
      _RecrrgSuplrInvcTmplInstce,
      _RecrrgSuplrInvcTmplWhgdTax
}
```
