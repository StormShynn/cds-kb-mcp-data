---
name: I_PAYMENTPROPOSALPAYMENT
description: "Paymentproposalpayment"
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
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROPOSALPAYMENT

**Paymentproposalpayment**

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
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SendingCompanyCode` |  | |  |  | `CHAR(4)` | Sending Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PaymentReason` |  | |  |  | `CHAR(4)` | Payment Reason |
| `BranchCode` |  | |  |  | `CHAR(5)` | Branch Code |
| `DirectDebitType` |  | |  |  | `CHAR(4)` | Local Instrument Code |
| `PaymentDueDate` |  | |  |  | `DATS(8)` | Due Date |
| `PaymentRequestPaymentGroup` |  | |  |  | `CHAR(20)` | Grouping Field for Automatic Payments |
| `NumberOfTextLines` |  | |  |  | `DEC(5)` | Number of Text Lines for Items Paid |
| `NumberOfPaidItems` |  | |  |  | `DEC(5)` | Item Included |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method for This Payment |
| `PaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment Method Supplement |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date of Payment Document |
| `PaymentOrder` |  | |  |  | `CHAR(10)` | Payment Order |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `PaymentsGroupingCriterion` |  | |  |  | `INT4(10)` | Grouping Criterion for Payments |
| `PaymentOrigin` |  | |  |  | `CHAR(8)` | Payment Media Origin |
| `SWIFTTransactionReferenceUUID` |  | |  |  | `CHAR(36)` | Unique Transaction Reference (UETR) |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `AccountByShipper` |  | |  |  | `CHAR(12)` | Shipper Account |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `StreetAddressName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `POBox` |  | |  |  | `CHAR(10)` | PO Box |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
| `POBoxDeviatingCityName` |  | |  |  | `CHAR(35)` | City of payee's PO box |
| `OrganizationBPName1` |  | |  |  | `CHAR(35)` | Name |
| `OrganizationBPName2` |  | |  |  | `CHAR(35)` | Name 2 |
| `OrganizationBPName3` |  | |  |  | `CHAR(35)` | Name 3 |
| `OrganizationBPName4` |  | |  |  | `CHAR(35)` | Name 4 |
| `BankControlKey` |  | |  |  | `CHAR(2)` | Bank control key at our bank |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank number of our bank |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Key of Our Bank |
| `BankAccount` |  | |  |  | `CHAR(18)` | Our account number at the bank |
| `BankAccountLongID` |  | |  |  | `CHAR(35)` | Bank Account Number |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN at Our House Bank |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
| `PayeeTitle` |  | |  |  | `CHAR(15)` | Title of the payee |
| `PayeeLanguage` |  | |  |  | `LANG(1)` | Language key of the payee |
| `PayeeName` |  | |  |  | `CHAR(35)` | Name of the payee |
| `PayeeAdditionalName` |  | |  |  | `CHAR(35)` | Name of the payee |
| `PayeeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PayeeRegion` |  | |  |  | `CHAR(3)` | Regional code of the payee |
| `PayeeCityName` |  | |  |  | `CHAR(35)` | City of the payee |
| `PayeeDistrictName` |  | |  |  | `CHAR(35)` | Location from payee's address |
| `PayeeStreet` |  | |  |  | `CHAR(35)` | Street and house number of the payee |
| `PayeePostalCode` |  | |  |  | `CHAR(10)` | Postal Code of the Payee |
| `PayeePOBox` |  | |  |  | `CHAR(10)` | P.O. box of the payee |
| `PayeePOBoxPostalCode` |  | |  |  | `CHAR(10)` | P.O. box postal code of the payee |
| `PayeeBankControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key of the Payee's Bank |
| `PayeeBankCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PayeeBank` |  | |  |  | `CHAR(15)` | Bank Number of the Payee's Bank |
| `PayeeBankKey` |  | |  |  | `CHAR(15)` | Bank key of the payee's bank |
| `PayeeBankAccount` |  | |  |  | `CHAR(18)` | Bank account number of the payee |
| `PayeeBankAccountLongID` |  | |  |  | `CHAR(35)` | Payee's Bank Account Number |
| `PayeeSEPASequenceType` |  | |  |  | `CHAR(4)` | Mandate: Sequence Type |
| `PayeeSEPAMandateUUID` |  | |  |  | `RAW(16)` | Mandate: GUID of Mandate |
| `PayeeIBAN` |  | |  |  | `CHAR(34)` | IBAN of the Payee |
| `PayeeSWIFTCode` |  | |  |  | `CHAR(11)` | SWIFT/BIC for International Payments |
| `PayeeBankDetailReference` |  | |  |  | `CHAR(20)` | Reference Details for Bank Details |
| `PayeeBankAccountHolderName` |  | |  |  | `CHAR(60)` | Account Holder Name |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Currency for Automatic Payment |
| `CashDiscountAmountInPaytCrcy` |  | |  |  | `CURR(23)` | Cash Discounts in Foreign Currency |
| `PaymentAmountInPaytCurrency` |  | |  |  | `CURR(23)` | Amount Paid in Foreign Currency |
| `LostCashDiscountInPaytCrcy` |  | |  |  | `CURR(23)` | Lost Cash Discounts in Foreign Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CashDiscountAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Cash Discounts in Local Currency |
| `PaytAmountInCoCodeCurrency` |  | |  |  | `CURR(23)` | Amount Paid in Local Currency |
| `LostCashDiscountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Lost Cash Discounts in Local Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `PaymentAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Payment Amount in Functional Currency |
| `CashDiscountAmountInFuncnlCrcy` |  | |  |  | `CURR(23)` | Cash Discount in Functional Currency |
| `AdditionalCurrency1` |  | |  |  | `CUKY(5)` | Additional Currency 1 |
| `PaymentAmountInAdditionalCrcy1` |  | |  |  | `CURR(23)` | Payment Amount in Additional Currency 1 |
| `CashDiscountAmtInAddlCrcy1` |  | |  |  | `CURR(23)` | Payment Transaction Discount Amount in Additional Currency 1 |
| `AdditionalCurrency2` |  | |  |  | `CUKY(5)` | Additional Currency 2 |
| `PaymentAmountInAdditionalCrcy2` |  | |  |  | `CURR(23)` | Payment Amount in Additional Currency 2 |
| `CashDiscountAmtInAddlCrcy2` |  | |  |  | `CURR(23)` | Payment Transaction Discount Amount in Additional Currency 2 |
| `EDIPaymentOrderStatus` |  | |  |  | `CHAR(1)` | EDI Payment Order Status |
| `EDIPaymentAdviceStatus` |  | |  |  | `CHAR(1)` | EDI Payment Advice Status |
| `DataExchangeInstructionKey` |  | |  |  | `CHAR(2)` | Instruction Key for Data Medium Exchange |
| `DataExchangeInstruction1` |  | |  |  | `NUMC(2)` | Instruction Key 1 |
| `DataExchangeInstruction2` |  | |  |  | `NUMC(2)` | Instruction Key 2 |
| `DataExchangeInstruction3` |  | |  |  | `NUMC(2)` | Instruction key 3 |
| `DataExchangeInstruction4` |  | |  |  | `NUMC(2)` | Instruction key 4 |
| `BillOfExchangeIssueDate` |  | |  |  | `DATS(8)` | Bill of Exchange Issue Date |
| `BillOfExchangeDueDate` |  | |  |  | `DATS(8)` | Bill of Exchange Due Date |
| `BankChainBank1Type` |  | |  |  | `CHAR(1)` | Type of Bank 1 in a Bank Chain (Correspondent, Intermediary) |
| `BankChainBank1Country` |  | |  |  | `CHAR(3)` | Country/Region Key of Bank 1 in a Bank Chain |
| `BankChainBank1` |  | |  |  | `CHAR(15)` | Bank Key of Bank 1 in a Bank Chain |
| `BankChainBank1BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number of Bank 1 in a Bank Chain |
| `BankChainBank1ControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key of Bank 1 in a Bank Chain |
| `BankChainBank1DetailReference` |  | |  |  | `CHAR(20)` | Reference Specifications for Bank Details of Bank 1 |
| `BankChainBank1IBAN` |  | |  |  | `CHAR(34)` | International Bank Account Number of Bank 1 in a Bank Chain |
| `BankChainBank2Type` |  | |  |  | `CHAR(1)` | Type of Bank 2 in a Bank Chain (Correspondent, Intermediary) |
| `BankChainBank2Country` |  | |  |  | `CHAR(3)` | Country/Region Key of Bank 2 in a Bank Chain |
| `BankChainBank2` |  | |  |  | `CHAR(15)` | Bank Key of Bank 2 in a Bank Chain |
| `BankChainBank2BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number of Bank 2 in a Bank Chain |
| `BankChainBank2ControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key of Bank 2 in a Bank Chain |
| `BankChainBank2DetailReference` |  | |  |  | `CHAR(20)` | Reference Specifications for Bank Details of Bank 2 |
| `BankChainBank2IBAN` |  | |  |  | `CHAR(34)` | International Bank Account Number of Bank 2 in a Bank Chain |
| `BankChainBank3Type` |  | |  |  | `CHAR(1)` | Type of Bank 3 in a Bank Chain (Correspondent, Intermediary) |
| `BankChainBank3Country` |  | |  |  | `CHAR(3)` | Country/Region Key of Bank 3 in a Bank Chain |
| `BankChainBank3` |  | |  |  | `CHAR(15)` | Bank Key of Bank 3 in a Bank Chain |
| `BankChainBank3BankAccount` |  | |  |  | `CHAR(18)` | Bank Account Number of Bank 3 in a Bank Chain |
| `BankChainBank3ControlKey` |  | |  |  | `CHAR(2)` | Bank Control Key of Bank 3 in a Bank Chain |
| `BankChainBank3DetailReference` |  | |  |  | `CHAR(20)` | Reference Specifications for Bank Details of Bank 3 |
| `BankChainBank3IBAN` |  | |  |  | `CHAR(34)` | International Bank Account Number of Bank 3 in a Bank Chain |
| `PayeePaymentSystem` |  | |  |  | `CHAR(15)` | Payee Payment System |
| `PayeeAliasType` |  | |  |  | `CHAR(15)` | Payee Alias Type |
| `PayeeAliasName` |  | |  |  | `CHAR(255)` | Payee Alias |
| `_PaymentProposalItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CompanyCodeCountry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_PaymentmethodSupplement` | | ✓ | | | | |
| `_PayableToleranceDay` | | ✓ | | | | |
| `_PaymentReason` | | ✓ | | | | |
| `_SendingCompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_DataExchangeInstructionKeys` | | ✓ | | | | |
| `_PayeeCountry` | | ✓ | | | | |
| `_PayeeBankCountry` | | ✓ | | | | |
| `_PayeeBank` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_PayeePaymentSystem` | | ✓ | | | | |
| `_PayeeAliasType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalItem` | `I_PaymentProposalItem` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPRPSLPAYT',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Payment'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'PaymentDocument',
    usageType.serviceQuality: #D,
    usageType.dataClass: #MIXED,
    usageType.sizeCategory: #XL,
    
    modelingPattern: #NONE,
    supportedCapabilities: [ 
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


define view I_PaymentProposalPayment
  as select from R_PaymentProposalPayment
  association [0..*] to I_PaymentProposalItem as _PaymentProposalItem on  $projection.PaymentRunID         = _PaymentProposalItem.PaymentRunID
                                                                      and $projection.PaymentRunDate       = _PaymentProposalItem.PaymentRunDate
                                                                      and $projection.PaymentDocument      = _PaymentProposalItem.PaymentDocument
                                                                      and $projection.PaymentRunIsProposal = _PaymentProposalItem.PaymentRunIsProposal
                                                                      and $projection.PayingCompanyCode    = _PaymentProposalItem.PayingCompanyCode
                                                                      and $projection.Supplier             = _PaymentProposalItem.Supplier
                                                                      and $projection.Customer             = _PaymentProposalItem.Customer
                                                                      and $projection.PaymentRecipient     = _PaymentProposalItem.PaymentRecipient

{
  key   PaymentRunDate,
  key   PaymentRunID,
  key   PaymentRunIsProposal,
        @ObjectModel.foreignKey.association: '_CompanyCode'
  key   PayingCompanyCode,
        @ObjectModel.foreignKey.association: '_Supplier'
  key   Supplier,
        @ObjectModel.foreignKey.association: '_Customer'
  key   Customer,
  key   PaymentRecipient,
  key   PaymentDocument,

        FinancialAccountType,

        @ObjectModel.foreignKey.association: '_SendingCompanyCode'
        SendingCompanyCode,
        BusinessArea,
        @ObjectModel.foreignKey.association: '_PaymentReason'
        PaymentReason,
        BranchCode,
        DirectDebitType,
        PaymentDueDate, //PaidItemDueDate,
        PaymentRequestPaymentGroup,
        NumberOfTextLines,
        NumberOfPaidItems,
        @ObjectModel.foreignKey.association: '_CompanyCodeCountry'
        CompanyCodeCountry,
        @ObjectModel.foreignKey.association: '_PaymentMethod'
        PaymentMethod,
        @ObjectModel.foreignKey.association: '_PaymentMethodSupplement'
        PaymentMethodSupplement,
        PaymentReference,
        PersonnelNumber,
        PostingDate,
        PaymentOrder,
        ValueDate,
        ExchangeRate,
        PaymentsGroupingCriterion, //PaymentOrigin,
        PaymentOrigin, //BankPaymentGroupingOrigin,
        SWIFTTransactionReferenceUUID,
        BusinessPlace,

        AccountingClerk,
        AccountByShipper, //SupplierClerkIDBySupplier,
        AddressID,
        @ObjectModel.foreignKey.association: '_Country'
        Country, //SupplierCountry,
        Region,
        CityName, //SupplierCityName,
        StreetAddressName,
        PostalCode,
        POBox,
        POBoxPostalCode,
        POBoxDeviatingCityName,
        OrganizationBPName1,
        OrganizationBPName2,
        OrganizationBPName3,
        OrganizationBPName4,

        BankControlKey,
        @ObjectModel.foreignKey.association: '_BankCountry'
        BankCountry,
        Bank,
        @ObjectModel.foreignKey.association: '_Bank'
        BankInternalID,
        BankAccount,
        BankAccountLongID,
        IBAN,
        @ObjectModel.foreignKey.association: '_HouseBank'
        HouseBank,
        @ObjectModel.foreignKey.association: '_HouseBankAccount'
        HouseBankAccount,

        PayeeTitle,
        PayeeLanguage,
        PayeeName,
        PayeeAdditionalName,
        @ObjectModel.foreignKey.association: '_PayeeCountry'
        PayeeCountry,
        PayeeRegion, //SupplierRegion,
        PayeeCityName,
        PayeeDistrictName,
        PayeeStreet,
        PayeePostalCode,
        PayeePOBox,
        PayeePOBoxPostalCode,
        PayeeBankControlKey,
        @ObjectModel.foreignKey.association: '_PayeeBankCountry'
        PayeeBankCountry,
        PayeeBank,
        @ObjectModel.foreignKey.association: '_PayeeBank'
        PayeeBankKey,
        PayeeBankAccount,
        PayeeBankAccountLongID,
        PayeeSEPASequenceType, //SEPASequenceType,
        PayeeSEPAMandateUUID, //SEPAMandateUUID,
        PayeeIBAN,
        PayeeSWIFTCode, //SWIFTCode,
        PayeeBankDetailReference, //BankAccountReferenceText,
        PayeeBankAccountHolderName, //BankAccountHolderName

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_PaymentCurrency'
        PaymentCurrency,

        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmountInPaytCrcy, //CashDiscountAmtInTransacCrcy,
        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        PaymentAmountInPaytCurrency, //PaidAmountInPaytCurrency,
        @Semantics.amount.currencyCode: 'PaymentCurrency'
        @Aggregation.default: #SUM
        LostCashDiscountInPaytCrcy, //LostCashDiscountInTransacCrcy,

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        CompanyCodeCurrency,

        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmtInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        PaytAmountInCoCodeCurrency, //AmountInCompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        @Aggregation.default: #SUM
        LostCashDiscountInCoCodeCrcy,

        @Semantics.currencyCode:true
        @ObjectModel.foreignKey.association: '_FunctionalCurrency'
        FunctionalCurrency,

        @Semantics.amount.currencyCode: 'FunctionalCurrency'
        PaymentAmountInFunctionalCrcy,
        @Semantics.amount.currencyCode: 'FunctionalCurrency'
        @Aggregation.default: #SUM
        CashDiscountAmountInFuncnlCrcy,
        
        @Semantics.currencyCode:true
        AdditionalCurrency1,

        @Semantics.amount.currencyCode: 'AdditionalCurrency1'
        @Aggregation.default: #SUM
        PaymentAmountInAdditionalCrcy1,
        @Semantics.amount.currencyCode: 'AdditionalCurrency1'
        @Aggregation.default: #SUM
        CashDiscountAmtInAddlCrcy1,   
        
        @Semantics.currencyCode:true
        AdditionalCurrency2,

        @Semantics.amount.currencyCode: 'AdditionalCurrency2'
        @Aggregation.default: #SUM
        PaymentAmountInAdditionalCrcy2,
        @Semantics.amount.currencyCode: 'AdditionalCurrency2'
        @Aggregation.default: #SUM
        CashDiscountAmtInAddlCrcy2,               

        EDIPaymentOrderStatus,
        EDIPaymentAdviceStatus,
        @ObjectModel.foreignKey.association: '_DataExchangeInstructionKeys'
        DataExchangeInstructionKey,
        DataExchangeInstruction1,
        DataExchangeInstruction2,
        DataExchangeInstruction3,
        DataExchangeInstruction4,
        BillOfExchangeIssueDate,
        BillOfExchangeDueDate,

        BankChainBank1Type,
        BankChainBank1Country,
        BankChainBank1,
        BankChainBank1BankAccount,
        BankChainBank1ControlKey,
        BankChainBank1DetailReference,
        BankChainBank1IBAN,
        BankChainBank2Type,
        BankChainBank2Country,
        BankChainBank2,
        BankChainBank2BankAccount,
        BankChainBank2ControlKey,
        BankChainBank2DetailReference,
        BankChainBank2IBAN,
        BankChainBank3Type,
        BankChainBank3Country,
        BankChainBank3,
        BankChainBank3BankAccount,
        BankChainBank3ControlKey,
        BankChainBank3DetailReference,
        BankChainBank3IBAN,
        
        PayeePaymentSystem,
        PayeeAliasType,
        PayeeAliasName,

        _PaymentProposalItem,


        _CompanyCode,
        _CompanyCodeCountry,
        _CompanyCodeCurrency,
        _Supplier,
        _Customer,
        _PaymentCurrency,
        _PaymentMethod,
        //_PaymentMethodText,
        _PaymentmethodSupplement,
        //_PaymentmethodSupplementtext,
        _PayableToleranceDay,
        _PaymentReason,
        _SendingCompanyCode,
        _Country,
        _BankCountry,
        _Bank,
        _HouseBank,
        _HouseBankAccount,
        //_HouseBankAccountText,
        _DataExchangeInstructionKeys,
        _PayeeCountry,
        _PayeeBankCountry,
        _PayeeBank,
        _FunctionalCurrency,
        _PayeePaymentSystem,
        _PayeeAliasType
}
```
