---
name: I_BANKSTATEMENT
description: "Bankstatement"
semantic_vi: "View I_BANKSTATEMENT CDS hiển thị dữ liệu bảng sao kê ngân hàng, bao gồm thông tin tài khoản và chi tiết giao dịch, có thể được sử dụng để phân tích và quản lý bảng sao kê ngân hàng."
keywords:
  - "bank statement"
  - "bảng sao kê ngân hàng"
  - "fi"
  - "finance"
  - "sap cds"
  - "cds view"
  - "bank account"
  - "transaction details"
  - "account information"
semantic_en: "The I_BANKSTATEMENT CDS view exposes bank statement data, including account information and transaction details, which can be used to analyze and manage bank statements."
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
  - component:FI-FIO-AR-2CL
  - lob:Finance
  - bo:Bank
---
# I_BANKSTATEMENT

**Bankstatement**

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
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  | `cast ( HouseBankAccount as farp_hktid)` | `CHAR(5)` | House Bank Account ID |
| `BankStatement` |  | |  | `cast ( StatementNumber as farp_aznum )` | `NUMC(18)` | Bank Statement Number |
| `BankStatementDate` |  | |  | `cast ( StatementDate as farp_azdat )` | `DATS(8)` | Bank Statement Date |
| `BankStatementStatus` |  | |  | `StatementStatus` | `CHAR(1)` | Statement Status |
| `BankStatementPageNumber` |  | |  | `StatementPageNumber` | `NUMC(5)` | Page Number of Statement (5 Digits) |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OpeningBalanceIsInterim` |  | |  | `cast ( OpeningBalanceIsInterim as farp_opening_bal_interim_ind )` | `CHAR(1)` | Indicator that the Opening Balance is interim |
| `ClosingBalanceIsInterim` |  | |  | `cast ( ClosingBalanceIsInterim as farp_closing_bal_interim_ind )` | `CHAR(1)` | Indicator That the Closing Balance is Interim |
| `OpeningBalanceAmtInTransCrcy` |  | |  |  | `CURR(23)` | Opening Balance Amount |
| `ClosingBalanceAmtInTransCrcy` |  | |  |  | `CURR(23)` | Ending Balance Amount |
| `InterimOpenBalAmtInTransCrcy` |  | |  |  | `CURR(23)` | Interim Opening Balance Amount |
| `InterimClsgBalAmtInTransCrcy` |  | |  |  | `CURR(23)` | Interim Closing Balance Amount |
| `PaymentTransactionTypeGroup` |  | |  |  | `CHAR(8)` | Transaction Type |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Fills the Bank Data Buffer |
| `BankStatementIsManuallyCreated` |  | |  | `cast ( IsManuallyCreated as farp_bsmanuallycreated )` | `CHAR(1)` | Indicates if a bank statement was created manually |
| `BankStatementFormat` |  | |  | `cast ( StatementInputFormat as farp_input_format )` | `CHAR(2)` | Bank Statement Format |
| `BankStatementImportDate` |  | |  | `cast ( BankStatementImportDate as farp_edate )` | `DATS(8)` | Bank Statement Import Date into System |
| `BankStatementImportTime` |  | |  | `cast ( BankStatementImportTime as farp_etime )` | `TIMS(6)` | Bank Statement Import Time into System |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED //only company data
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Header of a bank statement'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'
define view entity I_BankStatement
  as select from P_Arbanktransactiondoc

  association [0..1] to I_Currency as _Currency on _Currency.Currency = $projection.Currency
{
  key StatementShortID                                                 as BankStatementShortID,

      CompanyCode,
      HouseBank,
      cast ( HouseBankAccount as farp_hktid)                           as HouseBankAccount,
      cast ( StatementNumber as farp_aznum )                           as BankStatement,
      cast ( StatementDate as farp_azdat )                             as BankStatementDate,
      StatementStatus                                                  as BankStatementStatus,
      StatementPageNumber                                              as BankStatementPageNumber,

//      @Semantics.currencyCode: true

      Currency,

      @Semantics.booleanIndicator 
      cast ( OpeningBalanceIsInterim as farp_opening_bal_interim_ind ) as OpeningBalanceIsInterim,
      @Semantics.booleanIndicator 
      cast ( ClosingBalanceIsInterim as farp_closing_bal_interim_ind ) as ClosingBalanceIsInterim,

      @Semantics.amount.currencyCode: 'Currency'
      OpeningBalanceAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      ClosingBalanceAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      InterimOpenBalAmtInTransCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      InterimClsgBalAmtInTransCrcy,

      PaymentTransactionTypeGroup,
      CreatedByUser,
      @Semantics.booleanIndicator
      cast ( IsManuallyCreated   as farp_bsmanuallycreated )           as BankStatementIsManuallyCreated,
      cast ( StatementInputFormat as farp_input_format )               as BankStatementFormat,
      cast ( BankStatementImportDate as farp_edate )                   as BankStatementImportDate,
      cast ( BankStatementImportTime as farp_etime )                   as BankStatementImportTime,

      _Currency
}
where
     BankDataStorageApplication = '0001'
  or BankDataStorageApplication = '0004'
```
