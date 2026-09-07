---
name: I_PAYMENTADVICE
description: "Paymentadvice"
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
  - component:CA-GTF-FXU-FI-AR
  - lob:Cross-Application Components
---
# I_PAYMENTADVICE

**Paymentadvice**

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
| `IsOutgoingPayment` |  | |  | `xausg` | `CHAR(1)` | Indicator: Outgoing Payment Using Payment Advice? |
| `PaymentDocument` |  | |  | `cast(vblnr as farp_pa_vblnr preserving type)` | `CHAR(10)` | Payment Document Number |
| `AccountByShipper` |  | |  | `cast(eikto as farp_pa_eikto preserving type)` | `CHAR(12)` | Payee's Account at the Customer |
| `PaymentCurrency` |  | |  | `cast(waers as farp_fwaer preserving type)` | `CUKY(5)` | Payment Currency Key |
| `PaymentDate` |  | |  | `cast(zaldt as farp_payment_date preserving type)` | `DATS(8)` | Payment Date |
| `PaidAmountInPaytCurrency` |  | |  | `rwbtr` | `CURR(23)` | Payment Amount from the Payment Advice Header |
| `CashDiscountAmountInPaytCrcy` |  | |  | `cast(rwskt as fis_wskto)` | `CURR(23)` | Cash Discount Amount |
| `BillOfExchangeDueDate` |  | |  | `wefae` | `DATS(8)` | Bill of Exchange Due Date |
| `PaymentMethod` |  | |  | `rzawe` | `CHAR(1)` | Payment Method for This Payment |
| `PartnerBank` |  | |  | `cast(zbnkl as farp_pa_dzbnkl preserving type)` | `CHAR(15)` | Bank Number of the Payee |
| `PartnerBankAccount` |  | |  | `cast(zbnkn as farp_pa_dzbnkn preserving type)` | `CHAR(18)` | Bank Account Number of the Payee |
| `PartnerBankCountry` |  | |  | `zbnks` | `CHAR(3)` | Country/Region Key of Partner Bank |
| `PartnerBankSWIFTCode` |  | |  | `zbswi` | `CHAR(11)` | SWIFT Code of Partner Bank |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `PaymentAdviceHeaderText` |  | |  | `cast(avtxt as farp_avtxt_avik preserving type)` | `CHAR(25)` | Payment Advice Header Text |
| `PaymentAdviceType` |  | |  | `avsrt` | `CHAR(2)` | Payment Advice Type |
| `CreationTime` |  | |  | `cputm` | `TIMS(6)` | Time of Entry |
| `PaymentAdviceStatus` |  | |  | `astat` | `CHAR(1)` | Payment Advice Status |
| `PaymentAdviceIsHeld` |  | |  | `xkeep` | `CHAR(1)` | Indicator: Hold Payment Advice in the System? |
| `PaymentAdviceHasSingleAccount` |  | |  | `xuniq` | `CHAR(1)` | Indicator: Specific Account/Company Code in Payment Advice? |
| `PaytAdvcDiffDeterminationRule` |  | |  | `cast(vrsdg as farp_vrsdg preserving type)` | `CHAR(3)` | Reason Code Conversion Version |
| `PaymentAdviceSelectionRule` |  | |  | `sregl` | `CHAR(3)` | Selection Rule for Payment Advices |
| `OriginalReferenceDocument` |  | |  | `xbenr` | `CHAR(20)` | Object Key |
| `ReferenceDocumentType` |  | |  | `xbtyp` | `CHAR(5)` | Reference Transaction |
| `BankReference` |  | |  | `vgref` | `CHAR(35)` | Bank Reference Number |
| `BankPostingDate` |  | |  | `bvdat` | `DATS(8)` | Posting Date at the Bank |
| `ValueDateTime` |  | |  | `butim` | `CHAR(6)` | Value Date Time |
| `FeeAmountInTransactionCrcy` |  | |  | `spesk` | `CURR(23)` | Fees in Account Currency |
| `PaymentTransaction` |  | |  | `vorgc` | `CHAR(3)` | Business Transaction Code |
| `ExchangeRate` |  | |  | `cast(kursf as farp_kursf)` | `CHAR(12)` | Accounting Exchange Rate |
| `BillOfExchangeFailureDate` |  | |  | `jpdat` | `DATS(8)` | Date of Failed Bills of Exchange in Japan |
| `Cheque` |  | |  | `chect` | `CHAR(13)` | Check number |
| `ValueDate` |  | |  | `valut` | `DATS(8)` | Value Date |
| `BusinessPartnerName` |  | |  | `zbprn` | `CHAR(55)` | Business Partner |
| `CAPaymentDocument` |  | |  | `fica_apbel` | `CHAR(12)` | Number of Usage Document |
| `ContractAccount` |  | |  | `fica_vkont` | `CHAR(12)` | Contract Account Number |
| `CAPaymentAdvice` |  | |  | `fica_avkey` | `CHAR(20)` | Payment Advice Note |
| `_UserContactCard` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PaytAdvcDiffDeterminationRule` | | ✓ | | | | |
| `_PaytAdviceSelRules` | | ✓ | | | | |
| `_PaymentAdviceType` | | ✓ | | | | |
| `_PaymentAdviceItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserContactCard` | `I_UserContactCard` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PaytAdvcDiffDeterminationRule` | `I_ReasonCodeConversionVers` | [1..1] |
| `_PaytAdviceSelRules` | `I_PaytAdviceSelRules` | [1..1] |
| `_PaymentAdviceType` | `I_PaymentAdviceType` | [1..1] |
| `_PaymentAdviceItem` | `I_PaymentAdviceItem` | [1..*] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYTADVC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_UserContactCard' ]

@EndUserText.label: 'Payment Advice Header'

@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentAdvice
  as select from avik

  association [0..1] to I_UserContactCard          as _UserContactCard               on  $projection.CreatedByUser = _UserContactCard.ContactCardID

  association [1..1] to I_CompanyCode              as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Currency                 as _Currency                      on  $projection.PaymentCurrency = _Currency.Currency

  association [1..1] to I_ReasonCodeConversionVers as _PaytAdvcDiffDeterminationRule on  $projection.PaytAdvcDiffDeterminationRule = _PaytAdvcDiffDeterminationRule.PaytAdvcDiffDeterminationRule

  association [1..1] to I_PaytAdviceSelRules       as _PaytAdviceSelRules            on  $projection.PaymentAdviceSelectionRule = _PaytAdviceSelRules.PaymentAdviceSelectionRule

  association [1..1] to I_PaymentAdviceType        as _PaymentAdviceType             on  $projection.PaymentAdviceType = _PaymentAdviceType.PaymentAdviceType

  association [1..*] to I_PaymentAdviceItem        as _PaymentAdviceItem             on  $projection.CompanyCode              = _PaymentAdviceItem.CompanyCode
                                                                                     and $projection.PaymentAdviceAccountType = _PaymentAdviceItem.PaymentAdviceAccountType
                                                                                     and $projection.PaymentAdviceAccount     = _PaymentAdviceItem.PaymentAdviceAccount
                                                                                     and $projection.PaymentAdvice            = _PaymentAdviceItem.PaymentAdvice

  association [0..1] to I_Customer                 as _Customer                      on  $projection.PaymentAdviceAccount = _Customer.Customer

  association [1..1] to I_CustomerCompany          as _CustomerCompany               on  $projection.PaymentAdviceAccount = _CustomerCompany.Customer
                                                                                     and $projection.CompanyCode          = _CustomerCompany.CompanyCode

  association [0..1] to I_Supplier                 as _Supplier                      on  $projection.PaymentAdviceAccount = _Supplier.Supplier

  association [1..1] to I_SupplierCompany          as _SupplierCompany               on  $projection.PaymentAdviceAccount = _SupplierCompany.Supplier
                                                                                     and $projection.CompanyCode          = _SupplierCompany.CompanyCode
                                                                                     
  association [0..1] to I_BusinessPartner          as _BusinessPartner               on  $projection.PaymentAdviceAccount = _BusinessPartner.BusinessPartner
                                                                                     and  $projection.PaymentAdviceAccountType = 'G'                                                                                    

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PaytAdviceCompanyCodeVH', element : 'CompanyCode' } }]
  key bukrs                                             as CompanyCode,
  key koart                                             as PaymentAdviceAccountType,
  key konto                                             as PaymentAdviceAccount,
  key cast(avsid as farp_pa_avsid preserving type)      as PaymentAdvice,
      xausg                                             as IsOutgoingPayment,
      cast(vblnr as farp_pa_vblnr preserving type)      as PaymentDocument,
      cast(eikto as farp_pa_eikto preserving type)      as AccountByShipper,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      cast(waers as farp_fwaer preserving type)         as PaymentCurrency,
      cast(zaldt as farp_payment_date preserving type)  as PaymentDate,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      rwbtr                                             as PaidAmountInPaytCurrency,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      cast(rwskt as fis_wskto)                          as CashDiscountAmountInPaytCrcy,
      wefae                                             as BillOfExchangeDueDate,
      rzawe                                             as PaymentMethod,
      cast(zbnkl as farp_pa_dzbnkl preserving type)     as PartnerBank,
      cast(zbnkn as farp_pa_dzbnkn preserving type)     as PartnerBankAccount,
      zbnks                                             as PartnerBankCountry,
      zbswi                                             as PartnerBankSWIFTCode,
      @ObjectModel.foreignKey.association: '_UserContactCard'
      ernam                                             as CreatedByUser,
      erdat                                             as CreationDate,
      aedat                                             as LastChangeDate,
      lastchangedatetime                                as LastChangeDateTime,
      aenam                                             as LastChangedByUser,
      cast(avtxt as farp_avtxt_avik preserving type)    as PaymentAdviceHeaderText,
      @ObjectModel.foreignKey.association: '_PaymentAdviceType'
      avsrt                                             as PaymentAdviceType,
      cputm                                             as CreationTime,
      astat                                             as PaymentAdviceStatus,
      xkeep                                             as PaymentAdviceIsHeld,
      xuniq                                             as PaymentAdviceHasSingleAccount,
      @ObjectModel.foreignKey.association: '_PaytAdvcDiffDeterminationRule'
      cast(vrsdg as farp_vrsdg preserving type)         as PaytAdvcDiffDeterminationRule,
      @ObjectModel.foreignKey.association: '_PaytAdviceSelRules'
      sregl                                             as PaymentAdviceSelectionRule,
      xbenr                                             as OriginalReferenceDocument,
      xbtyp                                             as ReferenceDocumentType,
      vgref                                             as BankReference,
      bvdat                                             as BankPostingDate,
      butim                                             as ValueDateTime,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      spesk                                             as FeeAmountInTransactionCrcy,
      vorgc                                             as PaymentTransaction,
      cast(kursf as farp_kursf)                         as ExchangeRate,
      jpdat                                             as BillOfExchangeFailureDate,
      chect                                             as Cheque,
      valut                                             as ValueDate,
      zbprn                                             as BusinessPartnerName,
      fica_apbel                                        as CAPaymentDocument,
      fica_vkont                                        as ContractAccount,
      fica_avkey                                        as CAPaymentAdvice,
//      paymentadviceattachmentkey                        as PaymentAdviceAttachmentKey,

      _PaymentAdviceItem,
      _CompanyCode,
      _Currency,
      _PaytAdvcDiffDeterminationRule,
      _PaytAdviceSelRules,
      _UserContactCard,
      _PaymentAdviceType,
      _Customer,
      _CustomerCompany,
      _Supplier,
      _SupplierCompany,
      _BusinessPartner
}
```
