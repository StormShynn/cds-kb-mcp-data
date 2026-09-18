---
name: I_PAYMENTPROPOSALITEM
description: "Paymentproposalitem"
app_component: FI-AP-AP-B-2CL
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
  - payment
  - item-level
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROPOSALITEM

**Paymentproposalitem**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
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
| `PaymentRunDate` | ✓ | |  |  | `DATS(8)` | Date on Which the Program Is to Be Run |
| `PaymentRunID` | ✓ | |  |  | `CHAR(6)` | Auto Payment Run ID |
| `PaymentRunIsProposal` | ✓ | |  |  | `CHAR(1)` | Auto Payment Is Proposal |
| `PayingCompanyCode` | ✓ | |  |  | `CHAR(4)` | Paying Company Code |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `PaymentRecipient` | ✓ | |  |  | `CHAR(16)` | Payment Recipient |
| `PaymentDocument` | ✓ | |  |  | `CHAR(10)` | Payment Document Number |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Branch Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `DueCalculationBaseDate` |  | |  |  | `DATS(8)` | Due Calculation Base Date |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `PaymentRunItemMessageNumber` |  | |  |  | `CHAR(3)` | Item Indicator |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `PaymentBlockingReason` |  | |  |  | `CHAR(1)` | Payment Blocking Reason |
| `AccountingDocExternalReference` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `DocumentReferenceID` |  | |  | `AccountingDocExternalReference` | `CHAR(16)` | Document Reference ID |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `AssetContract` |  | |  |  | `CHAR(13)` | Asset Contract |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | Message number |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Currency for Automatic Payment |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` |  |
| `CashDiscountAmtInTransacCrcy` |  | |  |  | `CURR(23)` |  |
| `WhldgTaxAmtInTransacCrcy` |  | |  |  | `CURR(23)` |  |
| `TotDeductionAmtInTransacCrcy` |  | |  |  | `CURR(23)` |  |
| `NetAmountInTransacCurrency` |  | |  |  | `CURR(23)` |  |
| `MaxCshDiscAmtInTransacCrcy` |  | |  |  | `CURR(23)` |  |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `WhldgTaxAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `TotDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `NetAmountInCoCodeCurrency` |  | |  |  | `CURR(23)` |  |
| `HeaderAmtInCoCodeCurrency` |  | |  |  | `CURR(23)` |  |
| `MaxCshDiscAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  | `cast( case FunctionalCurrency when CompanyCodeCurrency then HeaderAmtInCoCodeCurrency when AdditionalCurrency1 then AmountInAdditionalCurrency1 when AdditionalCurrency2 then AmountInAdditionalCurrency2 end as fins_vfccur12 preserving type )` | `CURR(23)` | Amount in Functional Currency |
| `CashDiscountAmountInFuncnlCrcy` |  | |  | `cast( case FunctionalCurrency when CompanyCodeCurrency then CashDiscountAmtInTransacCrcy when AdditionalCurrency1 then CashDiscountAmtInAddlCrcy1 when AdditionalCurrency2 then CashDiscountAmtInAddlCrcy2 end as farp_cash_disc_fcsl preserving type )` | `CURR(23)` | Cash Discount in Functional Currency |
| `CashDiscount1Days` |  | |  |  | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  |  | `DEC(3)` | Cash Discount Days 2 |
| `CashDiscount1Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  |  | `DEC(5)` | Cash Discount Percentage 2 |
| `StateCentralBankPaymentReason` |  | |  |  | `CHAR(3)` | State Central Bank Indicator |
| `SupplyingCountry` |  | |  |  | `CHAR(3)` | Supplying Country/Region |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `TradingPartner` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `BPBankAccountInternalID` |  | |  |  | `CHAR(4)` | Business Partner Bank Account Internal ID |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BankReconciliationAccount` |  | |  |  | `CHAR(10)` | Operational General Ledger Account |
| `PaymentBlockLevel` |  | |  |  | `CHAR(1)` | Level on Which a Payment Block has Taken Place |
| `ConsideredPaymentMethods` |  | |  |  | `CHAR(10)` | List of Respected Payment Methods |
| `Reference1IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 1 by Business Partner |
| `Reference2IDByBusinessPartner` |  | |  |  | `CHAR(12)` | ID of Reference 2 by Business Partner |
| `Reference3IDByBusinessPartner` |  | |  |  | `CHAR(20)` | ID of Reference 3 by Business Partner |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `BranchCode` |  | |  |  | `CHAR(5)` | Branch Code |
| `_PaymentProposalPayment` | | ✓ | | | | |
| `_PostingKeyWthSpclGLCodeTxt` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PayableToleranceDay` | | ✓ | | | | |
| `_PostingKeyWithSpecialGLCode` | | ✓ | | | | |
| `_PaytProposalRunMessage` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_PaymentReason` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_PaymentBlockLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..1] |
| `_PostingKeyWthSpclGLCodeTxt` | `I_PostingKeyWthSpclGLCodeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPRPSLITM',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Item'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'AccountingDocumentItem',
    usageType.serviceQuality: #D,
    usageType.dataClass: #MIXED,
    usageType.sizeCategory: #XXL,
    
    modelingPattern: #NONE,
    supportedCapabilities: [ //#ANALYTICAL_PROVIDER, 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE
                             //#EXTRACTION_DATA_SOURCE,
                             ]    
    }
@ClientHandling: {
    type: #INHERITED,
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #FACT,
    //dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true 
  }

define view I_PaymentProposalItem
  as select from R_PaymentProposalItem

  association [0..1] to I_PaymentProposalPayment as _PaymentProposalPayment on  $projection.PaymentRunID         = _PaymentProposalPayment.PaymentRunID
                                                                               and $projection.PaymentRunDate       = _PaymentProposalPayment.PaymentRunDate
                                                                               and $projection.PaymentDocument      = _PaymentProposalPayment.PaymentDocument
                                                                               and $projection.PaymentRunIsProposal = _PaymentProposalPayment.PaymentRunIsProposal
                                                                               and $projection.PayingCompanyCode    = _PaymentProposalPayment.PayingCompanyCode
                                                                               and $projection.Supplier             = _PaymentProposalPayment.Supplier
                                                                               and $projection.Customer             = _PaymentProposalPayment.Customer
                                                                               and $projection.PaymentRecipient     = _PaymentProposalPayment.PaymentRecipient

association [0..*] to I_PostingKeyWthSpclGLCodeTxt as _PostingKeyWthSpclGLCodeTxt       on  $projection.PostingKey    = _PostingKeyWthSpclGLCodeTxt.PostingKey 
                                                                  and $projection.SpecialGLCode = _PostingKeyWthSpclGLCodeTxt.SpecialGLCode 

{
  key PaymentRunDate,
  key PaymentRunID,
  key PaymentRunIsProposal,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key PayingCompanyCode,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
  key PaymentRecipient,
  key PaymentDocument,
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,
  key AccountingDocumentItem,
      BranchAccount,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      DocumentDate,
      DueCalculationBaseDate,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PostingKey'
      @ObjectModel.text.association: '_PostingKeyWthSpclGLCodeTxt'
      PostingKey,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
      PaymentRunItemMessageNumber,
      
      PaymentMethod,
      PaymentBlockingReason,
      AccountingDocExternalReference,
      AccountingDocExternalReference as DocumentReferenceID,
      PaymentReference,
      AssetContract,
      PostingDate,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
      GLAccount,
      AssignmentReference,
      TaxCode,
      @ObjectModel.text.association: '_PaytProposalRunMessage'
      SystemMessageNumber,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_PaymentCurrency'      
      PaymentCurrency,

      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      AmountInTransactionCurrency,   
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM     
      CashDiscountAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      WhldgTaxAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      TotDeductionAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      NetAmountInTransacCurrency,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      @Aggregation.default: #SUM  
      MaxCshDiscAmtInTransacCrcy,
      
      
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'      
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      CashDiscountAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      WhldgTaxAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      TotDeductionAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      NetAmountInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      HeaderAmtInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM  
      MaxCshDiscAmtInCoCodeCrcy,
      
      
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      FunctionalCurrency,
            
      @Semantics.amount.currencyCode: 'FunctionalCurrency'
      @Aggregation.default: #SUM
      cast(
        case FunctionalCurrency
          when CompanyCodeCurrency then HeaderAmtInCoCodeCurrency
          when AdditionalCurrency1 then AmountInAdditionalCurrency1
          when AdditionalCurrency2 then AmountInAdditionalCurrency2
        end as fins_vfccur12 preserving type )                                          as AmountInFunctionalCurrency,

      @Semantics.amount.currencyCode: 'FunctionalCurrency'
      @Aggregation.default: #SUM
      cast(
        case FunctionalCurrency
          when CompanyCodeCurrency then CashDiscountAmtInTransacCrcy
          when AdditionalCurrency1 then CashDiscountAmtInAddlCrcy1
          when AdditionalCurrency2 then CashDiscountAmtInAddlCrcy2
        end as farp_cash_disc_fcsl preserving type )                                          as CashDiscountAmountInFuncnlCrcy,  
      
      CashDiscount1Days,
      CashDiscount2Days,
      CashDiscount1Percent,
      CashDiscount2Percent,
      StateCentralBankPaymentReason,
      SupplyingCountry,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      BusinessPlace,
      TradingPartner,
      @ObjectModel.foreignKey.association: '_HouseBank'
      HouseBank,
      BPBankAccountInternalID,
      ProfitCenter,
      BankReconciliationAccount,
      @ObjectModel.foreignKey.association: '_PaymentBlockLevel'
      PaymentBlockLevel,
      ConsideredPaymentMethods,
      Reference1IDByBusinessPartner,
      Reference2IDByBusinessPartner,
      Reference3IDByBusinessPartner,
      @ObjectModel.foreignKey.association: '_PaymentReason'
      PaymentReason,
      BranchCode,

      _Supplier,
      _Customer,
      _PayableToleranceDay,
      _PostingKeyWithSpecialGLCode,
      _PaytProposalRunMessage,
      _CompanyCode,
      _PaymentCurrency,
      _CompanyCodeCurrency,
      _FunctionalCurrency,
      _PaymentProposalPayment, //  _PaymentProposalHeader
      _OperationalAcctgDocItem,
      _BusinessArea,
      _AccountingDocumentType,
      _PostingKey,
      _DebitCreditCode,
      _HouseBank,
      _PaymentReason,
      _FinancialAccountType,
      _SpecialGLCode,
      _GLAccountInCompanyCode,
      _PaymentBlockLevel,
      _PostingKeyWthSpclGLCodeTxt
}
```
