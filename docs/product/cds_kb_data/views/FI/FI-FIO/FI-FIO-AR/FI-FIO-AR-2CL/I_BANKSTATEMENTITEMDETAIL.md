---
name: I_BANKSTATEMENTITEMDETAIL
description: "Bankstatementitemdetail"
semantic_vi: "View I_BANKSTATEMENTITEMDETAIL hiển thị chi tiết các mục trong bảng sao kê ngân hàng, bao gồm thông tin giao dịch và dữ liệu thanh toán, có thể được sử dụng để phân tích và đối chiếu bảng sao kê ngân hàng."
keywords:
  - "bank statement"
  - "bảng sao kê ngân hàng"
  - "bank statement item"
  - "mục bảng sao kê ngân hàng"
  - "transaction detail"
  - "chi tiết giao dịch"
  - "payment data"
  - "dữ liệu thanh toán"
  - "fi"
  - "finance"
  - "sap"
semantic_en: "The I_BANKSTATEMENTITEMDETAIL view exposes bank statement item details, including transaction information and payment data, which can be used to analyze and reconcile bank statements."
app_component: FI-FIO-AR-2CL
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
  - interface-view
  - bank
  - item-level
  - component:FI-FIO-AR-2CL
  - lob:Finance
  - bo:Bank
---
# I_BANKSTATEMENTITEMDETAIL

**Bankstatementitemdetail**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
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
| `BankStatementShortID` | ✓ | |  |  | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `BankStatementItem` | ✓ | |  |  | `NUMC(5)` | Memo Record Number (Line Item Number in Bank Statement) |
| `BkStmntItemTransactionDetailID` | ✓ | |  |  | `INT4(10)` | Subitem Record Number |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Account Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `PaymentTransactionText` |  | |  |  | `CHAR(27)` | External Business Transaction |
| `PaymentFileMsgIdentification` |  | |  |  | `CHAR(35)` | Message Identification |
| `AccountServicerReference` |  | |  |  | `CHAR(35)` | Unique reference assigned by account servicing institution |
| `PaytInformationIdentification` |  | |  |  | `CHAR(35)` | Payment Information Identification |
| `PaytInstructionIdentification` |  | |  |  | `CHAR(35)` | Instruction Identification |
| `PaymentEndToEndIdentification` |  | |  |  | `CHAR(35)` | End To End Identification |
| `SWIFTTransactionReferenceUUID` |  | |  |  | `CHAR(36)` | Unique Transaction Reference (UETR) |
| `PaytTransactionIdentification` |  | |  |  | `CHAR(35)` | Transaction ID |
| `BankStatementSEPAMandate` |  | |  |  | `CHAR(35)` | Mandate Identification |
| `BankStatementCheque` |  | |  |  | `CHAR(35)` | Cheque Number |
| `PaytProcessingIdentification` |  | |  |  | `CHAR(35)` | Processing Identification |
| `PaymentProprietaryType` |  | |  |  | `CHAR(35)` | Proprietary Type |
| `PaymentProprietaryReference` |  | |  |  | `CHAR(35)` | Proprietary Reference |
| `PaymentAdditionalInfoString` |  | |  |  | `CHAR(500)` | Additional Information |
| `_Item` | | ✓ | | | | |
| `_BankStatement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_BankStatementItem` | [1..1] |
| `_BankStatement` | `I_BankStatement` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Details of a Bank Statement Item'
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.semanticKey: ['BankStatementShortID', 'BankStatementItem', 'BkStmntItemTransactionDetailID']
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'

define view entity I_BankStatementItemDetail
  as select from I_ARBankStmntItmSpcfcDataBasic

  association [1..1] to I_BankStatementItem as _Item          on  $projection.BankStatementShortID = _Item.BankStatementShortID
                                                                  and $projection.BankStatementItem    = _Item.BankStatementItem

  association [1..1] to I_BankStatement     as _BankStatement on  $projection.BankStatementShortID = _BankStatement.BankStatementShortID

{      
  key BankStatementShortID,
  key BankStatementItem,
  key BkStmntItemTransactionDetailID,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      AmountInTransactionCurrency,
      TransactionCurrency,
      DebitCreditCode,
      PaymentTransactionText,
      PaymentFileMsgIdentification,
      AccountServicerReference,
      PaytInformationIdentification,
      PaytInstructionIdentification,
      PaymentEndToEndIdentification,
      SWIFTTransactionReferenceUUID,
      PaytTransactionIdentification,
      BankStatementSEPAMandate,
      BankStatementCheque,
      PaytProcessingIdentification,
      PaymentProprietaryType,
      PaymentProprietaryReference,
      PaymentAdditionalInfoString,
      _BankStatement,
      _Item
}
```
