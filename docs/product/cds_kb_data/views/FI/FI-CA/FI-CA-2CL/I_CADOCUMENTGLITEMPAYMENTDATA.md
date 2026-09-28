---
name: I_CADOCUMENTGLITEMPAYMENTDATA
description: "Cadocumentglitempaymentdata"
app_component: FI-CA-2CL
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
  - interface-view
  - payment
  - document
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTGLITEMPAYMENTDATA

**Cadocumentglitempaymentdata**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CAGLItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `PaymentCardType` |  | |  | `ccins` | `CHAR(4)` | Payment Card Type |
| `PaytCardByDigitalPaymentSrvc` |  | |  | `ccnum` | `CHAR(25)` | Payment cards: Card number |
| `PaymentCardSequenceNumber` |  | |  | `ccfol` | `CHAR(10)` | Payment cards: Payment card suffix |
| `PaymentCardValidityStartDate` |  | |  | `datab` | `DATS(8)` | Payment cards: Valid from |
| `PaymentCardValidityEndDate` |  | |  | `datbi` | `DATS(8)` | Payment Cards: Valid To |
| `PaymentCardHolderName` |  | |  | `ccname` | `CHAR(40)` | Payment Cards: Name of Cardholder |
| `CAAuthznByDigitalPaytSrvc` |  | |  | `aunum` | `CHAR(25)` | Payment cards: Authorization number |
| `CAAuthorizationByAcquirer` |  | |  | `autra` | `CHAR(25)` | Payment Cards: Authorization Reference Number |
| `AuthorizationDate` |  | |  | `audat` | `DATS(8)` | Payment cards: Authorization date |
| `AuthorizationTime` |  | |  | `autim` | `TIMS(6)` | Payment cards: Authorization time |
| `CAAuthorizationType` |  | |  | `auart` | `CHAR(1)` | Payment cards: Authorization type |
| `AuthorizedAmountInAuthznCrcy` |  | |  | `autwr` | `CURR(15)` | Payment cards: Authorized amount |
| `AuthorizationCurrency` |  | |  | `ccwae` | `CUKY(5)` | Currency Key |
| `CAPaytServiceProviderMerchant` |  | |  | `merch` | `CHAR(15)` | Agent ID in Payment Card Processing |
| `AuthorizationExpirationDate` |  | |  | `expdt` | `DATS(8)` | Payment Cards: Authorization Expiry Date |
| `AuthorizationExpirationTime` |  | |  | `exptm` | `TIMS(6)` | Payment Cards: Authorization Expiration Time |
| `CAPaymentIDAuthznWithBilling` |  | |  | `aucid` | `CHAR(40)` | Payment Cards: Payment ID (Authorization with Settlement) |
| `CASettlementPaymentAdviceRef` |  | |  | `avref` | `CHAR(40)` | Payment Card: Payment Advice Note Reference with Settlement |
| `PaymentCardAuthznRelationID` |  | |  | `dp_auth_rel_id` | `CHAR(44)` | Unique identifier of a previous successful authorization |
| `DigitalPaymentFraudRisk` |  | |  | `dp_fraud_risk` | `CHAR(15)` | Code of Fraud Risk |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `ValueDate` |  | |  | `valut` | `DATS(8)` | Value Date |
| `CAPaymentBillingStatus` |  | |  | `xsett` | `CHAR(1)` | Settlement Status |
| `CASettlementMassRunID` |  | |  | `laufi` | `CHAR(16)` | Payment Cards/PSP: Run ID of Settlement Run |
| `CASettlementDocument` |  | |  | `stdoc` | `CHAR(12)` | Document Number of Billing Document |
| `CAPaytCardSupplementIsResent` |  | |  | `resend` | `CHAR(1)` | Payment Card Supplement Was Resent |
| `CAReturnLot` | ✓ | |  | `keyr1` | `CHAR(12)` | Returns Lot for a Non-Billable Payment |
| `CAReturnReason` |  | |  | `rlgrd` | `CHAR(3)` | Returns Reason for Non-Billable Payments |
| `CASettlmtChrgAmtInSettlmtCrcy` |  | |  | `ccfam` | `CURR(13)` | Charge for Billed Payments in Billing Currency |
| `CAPaymentCardSettlementID` |  | |  | `srqid` | `CHAR(32)` | Payment Card Billing ID |
| `CASettlmtAmountInSettlmtCrcy` |  | |  | `setam` | `CURR(13)` | Payment Cards: Settled Amount |
| `SettlementCurrency` |  | |  | `setcu` | `CUKY(5)` | Payment Cards: Settlement Currency |
| `DgtlPaytDisbursementReference` |  | |  | `dsbid` | `CHAR(18)` | Payment Reference when Billing Payment Cards |
| `CreationDate` |  | |  | `crdat` | `DATS(8)` | Created On |
| `CreationTime` |  | |  | `crtms` | `TIMS(6)` | Time of Data Entry |
| `CreatedByUser` |  | |  | `crnam` | `CHAR(12)` | Name of Person Who Created Object |
| `PaymentCardUUID` |  | |  | `cguid` | `RAW(16)` | GUID of a Payment Card |
| `EncryptionType` |  | |  | `enctp` | `CHAR(1)` | Type of Encryption |
| `CAKeyForPaymentCardSupplement` |  | |  | `xguid` | `RAW(16)` | Key for Payment Card Supplement |
| `PaymentServiceProvider` |  | |  | `pays_prov` | `CHAR(4)` | Payment Service Providers |
| `PaymentRefByPaytSrvcProvider` |  | |  | `pays_tran` | `CHAR(35)` | Payment Reference of Payment Service Provider |
| `OriglPaytRefByPaytSrvcProvider` |  | |  | `orig_pays_tran` | `CHAR(35)` | Payment Reference of Payment Service Provider |
| `OriginalSourceOfCredit` |  | |  | `orig_credit` | `CHAR(1)` | Origin of Credit Memo Posting |
| `PaymentCardMaskedNumber` |  | |  | `masked_id` | `CHAR(25)` | Masked Payment Card Number ( Digital Payment ) |
| `DigitalPaymentType` |  | |  | `dp_payment_type` | `CHAR(2)` | Digital Payments Payment Type |
| `PaymentByDigitalPaymentService` |  | |  | `dp_trans_id` | `CHAR(44)` | Transaction/Payment ID of SAP Digital Payments |
| `MerchantByClearingHouse` |  | |  | `merch` | `CHAR(15)` | Agent ID in Payment Card Processing |
| `_CAAuthorizationType` | | ✓ | | | | |
| `_CACreditPostingOrigin` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAPaymentBillingStatus` | | ✓ | | | | |
| `_CAReturnReason` | | ✓ | | | | |
| `_AuthorizationCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SettlementCurrency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAAuthorizationType` | `I_CAAuthorizationType` | [0..1] |
| `_CACreditPostingOrigin` | `I_CACreditPostingOrigin` | [0..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CAPaymentBillingStatus` | `I_CAPaymentBillingStatus` | [0..1] |
| `_CAReturnReason` | `I_CAReturnReason` | [0..*] |
| `_AuthorizationCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_SettlementCurrency` | `I_Currency` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document G/L Item Payment Data'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgDocGenLdgrItmPaytDta',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_CADocumentGLItemPaymentData
  as select from dfkkopkc
  
  association [0..1] to I_CAAuthorizationType    as _CAAuthorizationType    on $projection.CAAuthorizationType = _CAAuthorizationType.CAAuthorizationType
  association [0..1] to I_CACreditPostingOrigin  as _CACreditPostingOrigin  on $projection.OriginalSourceOfCredit = _CACreditPostingOrigin.OriginalSourceOfCredit
  association [1..1] to I_CADocument             as _CADocument             on $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CAPaymentBillingStatus as _CAPaymentBillingStatus on $projection.CAPaymentBillingStatus = _CAPaymentBillingStatus.CAPaymentBillingStatus
  association [0..*] to I_CAReturnReason         as _CAReturnReason         on $projection.CAReturnReason = _CAReturnReason.CAReturnReason                      
                                                                            and _CAReturnReason.HouseBank is not initial
  association [1..1] to I_Currency               as _AuthorizationCurrency  on $projection.AuthorizationCurrency = _AuthorizationCurrency.Currency
  association [1..1] to I_Currency               as _TransactionCurrency    on $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Currency               as _SettlementCurrency     on $projection.SettlementCurrency = _SettlementCurrency.Currency
  association [1..1] to I_CompanyCode            as _CompanyCode            on $projection.CompanyCode = _CompanyCode.CompanyCode
  
  // not c1 released and therefore cannot be used here:
  //association [1..1] to I_PaytServiceProviderIdn as _PaymentServiceProvider on $projection.PaymentServiceProvider = _PaymentServiceProvider.PaymentServiceProvider

{
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel           as CADocumentNumber,
  key opupk           as CAGLItemNumber,

      ccins           as PaymentCardType,
      ccnum           as PaytCardByDigitalPaymentSrvc,
      ccfol           as PaymentCardSequenceNumber,
      datab           as PaymentCardValidityStartDate,
      datbi           as PaymentCardValidityEndDate,
      ccname          as PaymentCardHolderName,
      aunum           as CAAuthznByDigitalPaytSrvc,
      autra           as CAAuthorizationByAcquirer,
      audat           as AuthorizationDate,
      autim           as AuthorizationTime,
      @ObjectModel.foreignKey.association: '_CAAuthorizationType'
      auart           as CAAuthorizationType,
      @Semantics.amount.currencyCode: 'AuthorizationCurrency'
      autwr           as AuthorizedAmountInAuthznCrcy,
      @ObjectModel.foreignKey.association: '_AuthorizationCurrency'
      ccwae           as AuthorizationCurrency,
      merch           as CAPaytServiceProviderMerchant,
      expdt           as AuthorizationExpirationDate,
      exptm           as AuthorizationExpirationTime,
      //extmp,
      //autmp,
      aucid           as CAPaymentIDAuthznWithBilling,
      avref           as CASettlementPaymentAdviceRef,
      dp_auth_rel_id  as PaymentCardAuthznRelationID,
      dp_fraud_risk   as DigitalPaymentFraudRisk,
      budat           as CAPostingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw           as CAAmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers           as TransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs           as CompanyCode,
      valut           as ValueDate,
      @ObjectModel.foreignKey.association: '_CAPaymentBillingStatus'
      xsett           as CAPaymentBillingStatus,
      laufi           as CASettlementMassRunID,
      stdoc           as CASettlementDocument,
      resend          as CAPaytCardSupplementIsResent,
      keyr1           as CAReturnLot,
      @ObjectModel.foreignKey.association: '_CAReturnReason'
      rlgrd           as CAReturnReason,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ccfam           as CASettlmtChrgAmtInSettlmtCrcy,
      srqid           as CAPaymentCardSettlementID,
      @Semantics.amount.currencyCode: 'SettlementCurrency'
      setam           as CASettlmtAmountInSettlmtCrcy,
      @ObjectModel.foreignKey.association: '_SettlementCurrency'
      setcu           as SettlementCurrency,
      //laufi_info
      //mwskz
      //taxam      
      dsbid           as DgtlPaytDisbursementReference,
      //laufd_pyp,
      //laufi_pyp,
      //orign_pyp,
      //anzrate,
      crdat           as CreationDate,
      crtms           as CreationTime,
      crnam           as CreatedByUser,
      //cvval,
      //cvvct,
      //cvvst,
      cguid           as PaymentCardUUID,
      enctp           as EncryptionType,
      xguid           as CAKeyForPaymentCardSupplement,
      //keypp
      //encvl
      //xtrid
      //@ObjectModel.foreignKey.association: '_PaymentServiceProvider'
      pays_prov       as PaymentServiceProvider,
      pays_tran       as PaymentRefByPaytSrvcProvider,
      orig_pays_tran  as OriglPaytRefByPaytSrvcProvider,
      @ObjectModel.foreignKey.association: '_CACreditPostingOrigin'
      orig_credit     as OriginalSourceOfCredit,
      //_dataaging,
      masked_id       as PaymentCardMaskedNumber,
      //iban         as SEPAMandateSenderIBAN,
      //swift        as SEPAMandateSenderBankSWIFTCode,
      //koinh_ip,
      //txtvw,
      //meref_ip,
      //bkref_ip,
      //pyref_ip,
      dp_payment_type as DigitalPaymentType,
      dp_trans_id     as PaymentByDigitalPaymentService,

      // Associations
      _AuthorizationCurrency,
      _CAAuthorizationType,
      _CACreditPostingOrigin,
      _CADocument,
      _CAPaymentBillingStatus,
      _CAReturnReason,
      _CompanyCode,
      //_PaymentServiceProvider,
      _SettlementCurrency,
      _TransactionCurrency,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAPaytServiceProviderMerchant'
      merch           as MerchantByClearingHouse
}
```
