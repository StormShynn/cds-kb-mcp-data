---
name: I_BANKSTATEMENTITEM
description: "Bankstatementitem"
semantic_vi: "View I_BANKSTATEMENTITEM hiển thị dữ liệu khoản mục trong bảng sao kê ngân hàng, được sử dụng để phân tích và xử lý từng giao dịch trong bảng sao kê."
keywords:
  - "bank statement"
  - "khoản mục"
  - "bank statement item"
  - "fi"
  - "fi-fio-ar-2cl"
  - "finance"
  - "banking"
  - "transaction"
  - "giao dịch"
  - "sao kê"
  - "bảng sao kê"
semantic_en: "The I_BANKSTATEMENTITEM view exposes bank statement item data, which is used to analyze and process individual transactions within a bank statement."
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
# I_BANKSTATEMENTITEM

**Bankstatementitem**

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
| `BankStatementShortID` | ✓ | |  | `StatementShortID` | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `BankStatementItem` | ✓ | |  | `StatementItem` | `NUMC(5)` | Memo Record Number (Line Item Number in Bank Statement) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankStatementPostingRule` |  | |  | `cast ( BankStmtItem.PostingRule as farp_vgint )` | `CHAR(4)` | Bank Statement Posting Rule |
| `PaymentTransaction` |  | |  | `cast ( BankStmtItem.PaymentTransaction as farp_vorgc )` | `CHAR(3)` | External Payment Transaction |
| `InterpretationAlgorithm` |  | |  |  | `NUMC(3)` | Interpretation Algorithm |
| `MemoLine` |  | | `_MemoLine` | `MemoLine` | `CHAR(1333)` | Memo Line |
| `ValueDate` |  | |  | `cast ( BankStmtItem.ValueDate as farp_valut )` | `DATS(8)` | Value Date |
| `BankPostingDate` |  | |  | `cast ( BankStmtItem.BankPostingDate as farp_bvdat)` | `DATS(8)` | Posting Date of Bank Statement |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ValueDateTime` |  | |  |  | `CHAR(6)` | Value Date Time |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Account Currency Key |
| `OriginalCurrency` |  | |  |  | `CUKY(5)` | Foreign Currency Key (Not Account Currency) |
| `AmountInTransactionCurrency` |  | |  | `cast ( case BankStmtItem.DebitCreditCode when 'D' then - abs(BankStmtItem.AmountInAccountCurrency) when 'S' then - abs(BankStmtItem.AmountInAccountCurrency) else BankStmtItem.AmountInAccountCurrency end as kwbtr_eb)` | `CURR(23)` | Amount in Account Currency |
| `AmountInOriginalCurrency` |  | |  | `cast ( case BankStmtItem.DebitCreditCode when 'D' then - abs(BankStmtItem.ForeignCurrencyAmount) when 'S' then - abs(BankStmtItem.ForeignCurrencyAmount) else BankStmtItem.ForeignCurrencyAmount end as farp_fwbtr )` | `CURR(23)` | Payment Amount |
| `ExchangeRate` |  | |  | `cast ( BankStmtItem.ExchangeRate as far_curr_rate )` | `CHAR(12)` | Exchange Rate: Foreign Currency to Account Currency |
| `FeeAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Fees in Account Currency |
| `FeeAmountInOriginalCrcy` |  | |  | `cast ( BankStmtItem.FeeAmountInOriginalCrcy as farp_spesf )` | `CURR(23)` | Fees in Payment Currency |
| `Supplier` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'K' then BankStmtItem.PaymentAdviceAccount else '' end as lifnr )` | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'D' then BankStmtItem.PaymentAdviceAccount else '' end as kunnr )` | `CHAR(10)` | Customer Number |
| `GLAccount` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'S' then BankStmtItem.PaymentAdviceAccount else '' end as farp_hkont )` | `CHAR(10)` | General Ledger Account |
| `BusinessPartnerName` |  | |  | `cast ( BankStmtItem.BusinessPartnerName as farp_partn )` | `CHAR(55)` | Business Partner |
| `PaymentManualTransacType` |  | |  | `cast ( BankStmtItem.PaymentManualTransacType as far_vgman )` | `CHAR(4)` | Manual Transaction |
| `PaymentExternalTransacType` |  | |  | `cast ( BankStmtItem.PaymentExternalTransacType as farp_vgext )` | `CHAR(27)` | External Transaction |
| `PaymentAdvice` |  | |  |  | `CHAR(16)` | Payment Advice Number |
| `Cheque` |  | |  | `case when BankStmtItem.CheckType = 'C' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = 'C' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end` | `CHAR(13)` | Check number |
| `PaymentMediumReference` |  | |  | `cast ( case when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end as far_chect )` | `CHAR(13)` | Payment Medium Reference |
| `CustomerReferenceNumber` |  | |  | `cast ( case when BankStmtItem.CheckType = '' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = '' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end as far_chect_orig )` | `CHAR(13)` | Customer Reference Number |
| `BankLedgerDocument` |  | |  | `cast ( BankStmtItem.BankLedgerDocument as farp_belnr_bank_ledger )` | `CHAR(10)` | Number of Bank Ledger Journal Entry |
| `SubledgerDocument` |  | |  | `cast ( BankStmtItem.SubledgerDocument as farp_nbbln )` | `CHAR(10)` | Number of Subledger Journal Entry |
| `BankLedgerOnAccountDocument` |  | |  | `cast ( BankStmtItem.BankLedgerOnAccountDocument as farp_ak1bl )` | `CHAR(10)` | Bank Ledger Journal Entry of On-Account Posting |
| `SubledgerOnAccountDocument` |  | |  | `cast ( BankStmtItem.SubledgerOnAccountDocument as farp_akbln )` | `CHAR(10)` | Subledger Journal Entry of the On-Account Posting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PartnerBankCountry` |  | |  | `cast ( BankStmtItem.PartnerBankCountry as farp_pabks )` | `CHAR(3)` | Partner Bank Account: Bank Country/Region Key |
| `PartnerBank` |  | |  | `cast ( BankStmtItem.PartnerBank as farp_pablz )` | `CHAR(15)` | Partner Bank Account: Bank Number |
| `PartnerBankSWIFTCode` |  | |  | `cast ( BankStmtItem.PartnerBankSWIFTCode as paswi_eb)` | `CHAR(11)` | SWIFT Code of Partner Bank |
| `PartnerBankAccount` |  | |  | `cast ( BankStmtItem.PartnerBankAccount as farp_pakto )` | `CHAR(18)` | Partner Bank Account: Account Number |
| `BankStatementItemDescription1` |  | |  | `ItemDescription1` | `CHAR(30)` | Additional Information 1 |
| `BankStatementItemDescription2` |  | |  | `ItemDescription2` | `CHAR(30)` | Additional Information 2 |
| `PartnerBankIBAN` |  | |  |  | `CHAR(34)` | Partner Bank Account: IBAN |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `BankReference` |  | |  | `cast ( BankStmtItem.BankReference as farp_vgref )` | `CHAR(35)` | Item Reference |
| `IsCompleted` |  | |  |  | `CHAR(1)` | Line Item Completed |
| `_Currency` | | ✓ | | | | |
| `_OriginalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MemoLine` | `I_Arbsitmemolinewithorig` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_OriginalCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Items of a bank statement'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'
define view entity I_BankStatementItem
  as select from P_Arbanktransactiondocitem_06 as BankStmtItem

  // get company code from febko
    inner join   P_Arbanktransactiondoc_02     as BankStmtHeader on BankStmtItem.StatementShortID = BankStmtHeader.StatementShortID

  association [0..1] to I_Arbsitmemolinewithorig as _MemoLine         on  $projection.BankStatementShortID = _MemoLine.BankStatementShortID
                                                                      and $projection.BankStatementItem    = _MemoLine.BankStatementItem

  association [0..1] to I_Currency               as _Currency         on  _Currency.Currency = $projection.TransactionCurrency

  association [0..1] to I_Currency               as _OriginalCurrency on  _OriginalCurrency.Currency = $projection.OriginalCurrency
{
  key  BankStmtItem.StatementShortID                                      as BankStatementShortID,
  key  BankStmtItem.StatementItem                                         as BankStatementItem,
       BankStmtHeader.CompanyCode                                         as CompanyCode,
       cast ( BankStmtItem.PostingRule as farp_vgint )                    as BankStatementPostingRule,
       cast ( BankStmtItem.PaymentTransaction as farp_vorgc )             as PaymentTransaction,
       BankStmtItem.InterpretationAlgorithm,
       _MemoLine.MemoLine                                                 as MemoLine,
       cast ( BankStmtItem.ValueDate as farp_valut )                      as ValueDate,
       cast ( BankStmtItem.BankPostingDate as farp_bvdat)                 as BankPostingDate,
       BankStmtItem.PostingDate,

       BankStmtItem.ValueDateTime,
       BankStmtItem.TransactionCurrency,
       BankStmtItem.OriginalCurrency,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
         cast ( case BankStmtItem.DebitCreditCode
               when 'D' then - abs(BankStmtItem.AmountInAccountCurrency)
               when 'S' then - abs(BankStmtItem.AmountInAccountCurrency)
               else BankStmtItem.AmountInAccountCurrency
               end   as kwbtr_eb)                                        as AmountInTransactionCurrency,

       @Semantics.amount.currencyCode: 'OriginalCurrency'
       cast ( case BankStmtItem.DebitCreditCode
           when 'D' then - abs(BankStmtItem.ForeignCurrencyAmount)
           when 'S' then - abs(BankStmtItem.ForeignCurrencyAmount)
           else BankStmtItem.ForeignCurrencyAmount
           end        as  farp_fwbtr )                                    as AmountInOriginalCurrency,

       cast ( BankStmtItem.ExchangeRate as far_curr_rate )                as ExchangeRate,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
       BankStmtItem.FeeAmountInTransactionCrcy,

       @Semantics.amount.currencyCode: 'OriginalCurrency'
       cast ( BankStmtItem.FeeAmountInOriginalCrcy as farp_spesf )        as FeeAmountInOriginalCrcy,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'K'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as lifnr   )                    as Supplier,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'D'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as kunnr   )                    as Customer,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'S'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as farp_hkont  )                as GLAccount,

       cast ( BankStmtItem.BusinessPartnerName as farp_partn )            as BusinessPartnerName,
       cast ( BankStmtItem.PaymentManualTransacType as far_vgman )        as PaymentManualTransacType,
       cast ( BankStmtItem.PaymentExternalTransacType as farp_vgext )     as PaymentExternalTransacType,
       BankStmtItem.PaymentAdvice,

       case when BankStmtItem.CheckType = 'C'         and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
            when BankStmtItem.CheckType = 'C'         and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
            else ''
            end                                                           as Cheque,

       cast (  case when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
                    when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
                    else ''
           end    as far_chect )                                          as PaymentMediumReference,

       cast ( case when BankStmtItem.CheckType = ''   and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
                   when BankStmtItem.CheckType = ''   and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
                   else ''
           end    as far_chect_orig )                                     as CustomerReferenceNumber,

       cast ( BankStmtItem.BankLedgerDocument as farp_belnr_bank_ledger ) as BankLedgerDocument,
       cast ( BankStmtItem.SubledgerDocument as farp_nbbln )              as SubledgerDocument,
       cast ( BankStmtItem.BankLedgerOnAccountDocument as farp_ak1bl )    as BankLedgerOnAccountDocument,
       cast ( BankStmtItem.SubledgerOnAccountDocument as farp_akbln )     as SubledgerOnAccountDocument,
       BankStmtItem.FiscalYear,
       cast ( BankStmtItem.PartnerBankCountry as farp_pabks )             as PartnerBankCountry,
       cast ( BankStmtItem.PartnerBank as farp_pablz )                    as PartnerBank,
       cast ( BankStmtItem.PartnerBankSWIFTCode as paswi_eb)              as PartnerBankSWIFTCode,
       cast ( BankStmtItem.PartnerBankAccount as farp_pakto )             as PartnerBankAccount,
       BankStmtItem.ItemDescription1                                      as BankStatementItemDescription1,
       BankStmtItem.ItemDescription2                                      as BankStatementItemDescription2,
       BankStmtItem.PartnerBankIBAN,
       BankStmtItem.DocumentItemText,
       cast ( BankStmtItem.BankReference as farp_vgref )                  as BankReference,
       BankStmtItem.IsCompleted,
       _Currency,
       _OriginalCurrency
}
```
