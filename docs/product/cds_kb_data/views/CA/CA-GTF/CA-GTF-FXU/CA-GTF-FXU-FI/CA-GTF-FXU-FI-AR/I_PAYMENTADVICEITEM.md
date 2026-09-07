---
name: I_PAYMENTADVICEITEM
description: "Paymentadviceitem"
app_component: CA-GTF-FXU-FI-AR
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
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - payment
  - item-level
  - component:CA-GTF-FXU-FI-AR
  - lob:Cross-Application Components
---
# I_PAYMENTADVICEITEM

**Paymentadviceitem**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
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
| `PaymentAdviceAccountType` | ✓ | |  | `koart` | `CHAR(1)` | Payment Advice Account Type |
| `PaymentAdviceAccount` | ✓ | |  | `konto` | `CHAR(10)` | Account Number |
| `PaymentAdvice` | ✓ | |  | `cast(avsid as farp_pa_avsid preserving type)` | `CHAR(16)` | Payment Advice Number |
| `PaymentAdviceItem` | ✓ | |  | `avspo` | `NUMC(5)` | Payment Advice Item |
| `PaymentAdviceAltvAccount` |  | |  | `abwko` | `CHAR(10)` | Alternative Account (Payment Advice Management) |
| `AlternativeCompanyCode` |  | |  | `cast(abwbu as farp_abwbu_av preserving type)` | `CHAR(4)` | Alternative Company Code (Payment Advice Management) |
| `AccountingDocument` |  | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `DocumentReferenceID` |  | |  | `cast(xblnr as far_pa_xblnr1 preserving type)` | `CHAR(16)` | Reference Document |
| `LockboxInvoiceReference` |  | |  | `lbinvref` | `CHAR(20)` | Lockbox Invoice Reference |
| `BillingDocument` |  | |  | `vbeln` | `CHAR(10)` | Billing Document |
| `BranchAccount` |  | |  | `cast(filkd as farp_filkd preserving type)` | `CHAR(10)` | Account Number of the Branch |
| `AccountingDocumentCreationDate` |  | |  | `cast(cpudt as farp_cpudt preserving type)` | `DATS(8)` | Accounting Document Entry Date |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `AssignmentReference` |  | |  | `cast(zuonr as farp_dzuonr preserving type)` | `CHAR(18)` | Assignment Number |
| `PaytDifferenceReasonExtCode` |  | |  | `restg` | `CHAR(3)` | External Reason Code for Payment Differences |
| `DocumentItemText` |  | |  | `cast(sgtxt as farp_sgtxt preserving type)` | `CHAR(50)` | Item Text |
| `TaxAmountInCoCodeCrcy` |  | |  | `cast(mwsts as farp_mwsts preserving type)` | `CURR(23)` | Tax Amount in Local Currency |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `GrossAmountInPaymentCurrency` |  | |  | `wrbtr` | `CURR(23)` | Gross Amount |
| `NetPaymentAmountInPaytCurrency` |  | |  | `nebtr` | `CURR(23)` | Net Payment Amount with +/- Sign |
| `CashDiscountAmountInPaytCrcy` |  | |  | `cast(wskto as far_pa_wskto_av preserving type )` | `CURR(23)` | Cash Discount Amount with +/- Sign |
| `FiscalYear` |  | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  | `cast(buzei as farp_buzei preserving type)` | `NUMC(3)` | Posting View Item |
| `PaymentAdviceAltvAccountType` |  | |  | `cast(abwka as farp_abwka_av preserving type)` | `CHAR(1)` | Account Type |
| `CashDiscountPercent` |  | |  | `zbdxp` | `DEC(5)` | Selected Cash Discount Percentage Rate |
| `CashDiscountDays` |  | |  | `zbdxt` | `DEC(3)` | Selected Cash Discount Days |
| `DifferenceAmountInCoCodeCrcy` |  | |  | `cast(difhw as farp_difhw preserving type)` | `CURR(23)` | Amount Difference in Local Currency |
| `DifferenceAmount` |  | |  | `cast(diffw as farp_diffw preserving type)` | `CURR(23)` | Amount Difference in Foreign Currency |
| `DiffAmtInAdditionalCurrency1` |  | |  | `cast(difh2 as farp_difh2 preserving type)` | `CURR(23)` | Amount Difference in Second Local Currency |
| `DiffAmtInAdditionalCurrency2` |  | |  | `cast(difh3 as farp_difh3 preserving type)` | `CURR(23)` | Amount Difference in Third Local Currency |
| `ItemIsActivated` |  | |  | `cast(xaktp as farp_xaktp preserving type)` | `CHAR(1)` | Indicator: Items Activated? |
| `CashDiscountIsActivated` |  | |  | `cast(xakts as far_pa_xakts preserving type)` | `CHAR(1)` | Flag whether Cash Discount is Active |
| `IsPartialPayment` |  | |  | `cast(xppmt as farp_xppmt preserving type)` | `CHAR(1)` | Indicator: Partial Payments |
| `PaytDiffRsdlBalIsCarriedFwd` |  | |  | `cast(xvort as farp_xvort preserving type)` | `CHAR(1)` | Indicator: Carryforward Residual Bal. for Payt Difference? |
| `PaymentDifferenceReason` |  | |  | `rstgn` | `CHAR(3)` | Reason Code for Payments |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `Reference1IDByBusinessPartner` |  | |  | `cast(xref1 as farp_xref1 preserving type)` | `CHAR(12)` | Business Partner Reference Key 1 |
| `Reference2IDByBusinessPartner` |  | |  | `cast(xref2 as farp_xref2 preserving type)` | `CHAR(12)` | Business Partner Reference Key 2 |
| `DeliveryDocument` |  | |  | `liefn` | `CHAR(10)` | Delivery |
| `InvoiceDate` |  | |  | `cast(redat as farp_pa_redat preserving type)` | `DATS(8)` | Document Date |
| `PurchasingDocReferenceByCust` |  | |  | `bstnk` | `CHAR(20)` | Customer Reference |
| `IsPostedOnAccount` |  | |  | `xacon` | `CHAR(1)` | Indicator: Posting on Account |
| `PaymentAdviceStatus` |  | |  | `cast(astat as farp_astat_avik preserving type)` | `CHAR(1)` | Payment Advice Status |
| `DeductionAmountInPaytCurrency` |  | |  | `cast(abbtr as far_pa_abbtr_av preserving type)` | `CURR(23)` | Deduction Amount |
| `PaymentReference` |  | |  | `cast(kidno as farp_kidno preserving type)` | `CHAR(30)` | Payment Reference |
| `PaymentAdviceSelectionField` |  | |  | `sfeld` | `CHAR(30)` | Name of Selection Field |
| `PaymentAdviceSelectionValue` |  | |  | `swert` | `CHAR(30)` | Selection Value (Payment Advice Management) |
| `PaytAdvcExternalSelectionField` |  | |  | `cast(afeld as farp_afeld_av preserving type)` | `CHAR(30)` | Name of External Selection Field Specified |
| `CASelectionValue` |  | |  | `fica_selw1` | `CHAR(35)` | Field value to be selected |
| `CASelectionCategory` |  | |  | `fica_selt1` | `CHAR(1)` | Selection Category |
| `CADocumentNumber` |  | |  | `fica_opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CAAssignedAmountInPaytCrcy` |  | |  | `fica_betrw_ac` | `CURR(13)` | Assigned Amount |
| `TaxCalculationProcedure` |  | |  | `cast(_CompanyCode._Country.TaxCalculationProcedure as farp_kalsm_d preserving type )` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `AdditionalCurrency1` |  | | `_OperationalAcctgDocItem` | `AdditionalCurrency1` | `CUKY(5)` | Additional Currency 1 |
| `AdditionalCurrency2` |  | | `_OperationalAcctgDocItem` | `AdditionalCurrency2` | `CUKY(5)` | Additional Currency 2 |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_AlternativeCompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_PaymentDifferenceReason` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PaymentAdviceSubItem` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AlternativeCompanyCode` | `I_CompanyCode` | [1..1] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_TaxCode` | `I_TaxCode` | [1..1] |
| `_PaymentDifferenceReason` | `I_PaymentDifferenceReason` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PaymentAdviceSubItem` | `I_PaymentAdviceSubItem` | [1..*] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [1..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTADVCITM'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Payment Advice Item'

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentAdviceItem
  as select from avip

  association [1..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_CompanyCode             as _AlternativeCompanyCode  on  $projection.AlternativeCompanyCode = _AlternativeCompanyCode.CompanyCode

  association [1..1] to I_BusinessArea            as _BusinessArea            on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [1..1] to I_TaxCode                 as _TaxCode                 on  $projection.TaxCode                 = _TaxCode.TaxCode
                                                                              and $projection.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure

  association [1..1] to I_PaymentDifferenceReason as _PaymentDifferenceReason on  $projection.CompanyCode             = _PaymentDifferenceReason.CompanyCode
                                                                              and $projection.PaymentDifferenceReason = _PaymentDifferenceReason.PaymentDifferenceReason

  association [0..1] to I_Currency                as _Currency                on  $projection.Currency = _Currency.Currency

  association [1..*] to I_PaymentAdviceSubItem    as _PaymentAdviceSubItem    on  $projection.CompanyCode              = _PaymentAdviceSubItem.CompanyCode
                                                                              and $projection.PaymentAdviceAccountType = _PaymentAdviceSubItem.PaymentAdviceAccountType
                                                                              and $projection.PaymentAdviceAccount     = _PaymentAdviceSubItem.PaymentAdviceAccount
                                                                              and $projection.PaymentAdvice            = _PaymentAdviceSubItem.PaymentAdvice
                                                                              and $projection.PaymentAdviceItem        = _PaymentAdviceSubItem.PaymentAdviceItem

  association [1..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure

  association [0..1] to I_OperationalAcctgDocItem as _OperationalAcctgDocItem on  $projection.AccountingDocument     = _OperationalAcctgDocItem.AccountingDocument
                                                                              and $projection.AccountingDocumentItem = _OperationalAcctgDocItem.AccountingDocumentItem
                                                                              and $projection.FiscalYear             = _OperationalAcctgDocItem.FiscalYear
                                                                              and $projection.CompanyCode            = _OperationalAcctgDocItem.CompanyCode

  association [0..1] to I_Customer                as _Customer                on  $projection.PaymentAdviceAccount = _Customer.Customer

  association [1..1] to I_CustomerCompany         as _CustomerCompany         on  $projection.PaymentAdviceAccount = _CustomerCompany.Customer
                                                                              and $projection.CompanyCode          = _CustomerCompany.CompanyCode

  association [0..1] to I_Supplier                as _Supplier                on  $projection.PaymentAdviceAccount = _Supplier.Supplier

  association [1..1] to I_SupplierCompany         as _SupplierCompany         on  $projection.PaymentAdviceAccount = _SupplierCompany.Supplier
                                                                              and $projection.CompanyCode          = _SupplierCompany.CompanyCode
                                                                              
  association [0..1] to I_BusinessPartner          as _BusinessPartner        on  $projection.PaymentAdviceAccount = _BusinessPartner.BusinessPartner
                                                                              and  $projection.PaymentAdviceAccountType = 'G'                                                                            

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
  key bukrs                                                                                as CompanyCode,
  key koart                                                                                as PaymentAdviceAccountType,
  key konto                                                                                as PaymentAdviceAccount,
  key cast(avsid as farp_pa_avsid preserving type)                                         as PaymentAdvice,
  key avspo                                                                                as PaymentAdviceItem,
      abwko                                                                                as PaymentAdviceAltvAccount,
      @ObjectModel.foreignKey.association: '_AlternativeCompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
      cast(abwbu as farp_abwbu_av preserving type)                                         as AlternativeCompanyCode,
      belnr                                                                                as AccountingDocument,
      cast(xblnr as far_pa_xblnr1 preserving type)                                         as DocumentReferenceID,
      lbinvref                                                                             as LockboxInvoiceReference,
      vbeln                                                                                as BillingDocument,
      cast(filkd as farp_filkd preserving type)                                            as BranchAccount,
      cast(cpudt as farp_cpudt preserving type)                                            as AccountingDocumentCreationDate,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_BusinessAreaStdVH', element : 'BusinessArea' } }]
      gsber                                                                                as BusinessArea,
      cast(zuonr as farp_dzuonr preserving type)                                           as AssignmentReference,
      restg                                                                                as PaytDifferenceReasonExtCode,
      cast(sgtxt as farp_sgtxt preserving type)                                            as DocumentItemText,
      @Semantics.amount.currencyCode: 'Currency'
      cast(mwsts as farp_mwsts preserving type)                                            as TaxAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_TaxCode'
      mwskz                                                                                as TaxCode,
      @Semantics.amount.currencyCode: 'Currency'
      wrbtr                                                                                as GrossAmountInPaymentCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      nebtr                                                                                as NetPaymentAmountInPaytCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      cast(wskto as far_pa_wskto_av preserving type )                                      as CashDiscountAmountInPaytCrcy,
      gjahr                                                                                as FiscalYear,
      cast(buzei as farp_buzei preserving type)                                            as AccountingDocumentItem,
      cast(abwka as farp_abwka_av preserving type)                                         as PaymentAdviceAltvAccountType,
      zbdxp                                                                                as CashDiscountPercent,
      zbdxt                                                                                as CashDiscountDays,
      @Semantics.amount.currencyCode: 'Currency'
      cast(difhw as farp_difhw preserving type)                                            as DifferenceAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(diffw as farp_diffw preserving type)                                            as DifferenceAmount,
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      cast(difh2 as farp_difh2 preserving type)                                            as DiffAmtInAdditionalCurrency1,
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      cast(difh3 as farp_difh3 preserving type)                                            as DiffAmtInAdditionalCurrency2,
      cast(xaktp as farp_xaktp preserving type)                                            as ItemIsActivated,
      cast(xakts as far_pa_xakts preserving type)                                          as CashDiscountIsActivated,
      cast(xppmt as farp_xppmt preserving type)                                            as IsPartialPayment,
      cast(xvort as farp_xvort preserving type)                                            as PaytDiffRsdlBalIsCarriedFwd,
      @ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
      rstgn                                                                                as PaymentDifferenceReason,
      @ObjectModel.foreignKey.association: '_CURRENCY'
      @Semantics.currencyCode: true
      waers                                                                                as Currency,
      cast(xref1 as farp_xref1 preserving type)                                            as Reference1IDByBusinessPartner,
      cast(xref2 as farp_xref2 preserving type)                                            as Reference2IDByBusinessPartner,
      liefn                                                                                as DeliveryDocument,
      cast(redat as farp_pa_redat preserving type)                                         as InvoiceDate,
      bstnk                                                                                as PurchasingDocReferenceByCust,
      xacon                                                                                as IsPostedOnAccount,
      cast(astat as farp_astat_avik preserving type)                                       as PaymentAdviceStatus,
      @Semantics.amount.currencyCode: 'Currency'
      cast(abbtr as far_pa_abbtr_av preserving type)                                       as DeductionAmountInPaytCurrency,
      cast(kidno as farp_kidno preserving type)                                            as PaymentReference,
      sfeld                                                                                as PaymentAdviceSelectionField,
      swert                                                                                as PaymentAdviceSelectionValue,
      cast(afeld as farp_afeld_av preserving type)                                         as PaytAdvcExternalSelectionField,
      fica_selw1                                                                           as CASelectionValue,
      fica_selt1                                                                           as CASelectionCategory,
      fica_opbel                                                                           as CADocumentNumber,
      @Semantics.amount.currencyCode: 'Currency'
      fica_betrw_ac                                                                        as CAAssignedAmountInPaytCrcy,      
      
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
      cast(_CompanyCode._Country.TaxCalculationProcedure as farp_kalsm_d preserving type ) as TaxCalculationProcedure,
      @Semantics.currencyCode: true
      _OperationalAcctgDocItem.AdditionalCurrency1,
      @Semantics.currencyCode: true
      _OperationalAcctgDocItem.AdditionalCurrency2,
      @Semantics.currencyCode: true
      _CompanyCode.Currency as CompanyCodeCurrency,

      _CompanyCode,
      _AlternativeCompanyCode,
      _BusinessArea,
      _TaxCode,
      _PaymentDifferenceReason,
      _Currency,
      _PaymentAdviceSubItem,
      _TaxCalculationProcedure,
      _OperationalAcctgDocItem,
      _Customer,
      _CustomerCompany,
      _Supplier,
      _SupplierCompany,
      _BusinessPartner
}
```
