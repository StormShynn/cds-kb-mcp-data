---
name: I_APCHECKBOOK
description: "Apcheckbook"
semantic_vi: "View I_APCHECKBOOK hiển thị thông tin về cuốn sổ chiết khấu, bao gồm chi tiết về cuốn sổ, trạng thái và các séc được gán."
keywords:
  - "chequebook"
  - "sổ chiết khấu"
  - "fi"
  - "fio-ap-2cl"
  - "finance"
  - "accounting"
  - "sap"
  - "cds"
  - "view"
  - "payment"
  - "company code"
  - "house bank"
semantic_en: "The I_APCHECKBOOK view exposes chequebook information, including details about chequebooks, their status, and assigned cheques. It is used to manage chequebook data in the FI-FIO-AP-2CL component."
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
  - interface-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# I_APCHECKBOOK

**Apcheckbook**

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
| `PaymentCompanyCode` | ✓ | |  |  | `CHAR(4)` | Paying Company Code |
| `HouseBank` | ✓ | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` | ✓ | |  |  | `CHAR(5)` | ID for Account Details |
| `Chequebook` | ✓ | |  |  | `NUMC(4)` | Lot Number |
| `ChequebookFirstCheque` |  | |  |  | `CHAR(13)` | Check Number From |
| `ChequebookLastCheque` |  | |  |  | `CHAR(13)` | Check number |
| `NextChequebook` |  | |  |  | `NUMC(4)` | Next Lot |
| `LastAssignedCheque` |  | |  |  | `CHAR(13)` | Last Check Number Assigned |
| `ChequebookName` |  | |  |  | `CHAR(30)` | Short Information on the Lot |
| `ChequebookIsNonSequential` |  | |  |  | `CHAR(1)` | Indicator: Non-Sequential Check Number Management |
| `ChequebookPurchaseDate` |  | |  | `case cb.ChequebookPurchaseDate when '' then cast ( ' ' as abap.dats ) else cast ( cb.ChequebookPurchaseDate as abap.dats ) end` | `DATS(8)` |  |
| `ChequebookPaymentMethodList` |  | |  |  | `CHAR(10)` | List of Pmnt Methods Permitted for This Check Lot |
| `ChequebookMinimalChequeCount` |  | |  |  | `NUMC(13)` | Minimal Alert Number |
| `ChequebookPurchaser` |  | |  |  | `CHAR(12)` | Purchase By |
| `ChequebookCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `ChequebookCreationDate` |  | |  |  | `DATS(8)` | Date |
| `ChequebookCreationTime` |  | |  |  | `TIMS(6)` | Time |
| `ChequeType` |  | |  |  | `CHAR(2)` | Type of Check for China Specific |
| `ChequebookStatus` |  | |  | `cast( ' ' as abap.char(10))` | `CHAR(10)` |  |
| `BankAccountName` |  | | `_HouseBankAccount` | `HouseBankAccountDescription` | `CHAR(60)` | Account Description |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HouseBankAccount` | `I_HouseBankAccountText` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cheque book'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IAPCHECKBOOK'
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_APCheckbook
  as select from P_APCheckbook as cb

 // association [0..1] to I_CompanyCode      as _Company          on  _Company.CompanyCode = $projection.PaymentCompanyCode
 // association [0..1] to I_HouseBankAccount as _HouseBankAccount on  _HouseBankAccount.CompanyCode      = $projection.PaymentCompanyCode
                                                               // and _HouseBankAccount.HouseBank        = $projection.HouseBank
                                                                //and _HouseBankAccount.HouseBankAccount = $projection.HouseBankAccount
association [0..1] to I_HouseBankAccountText as _HouseBankAccount on _HouseBankAccount.CompanyCode = $projection.PaymentCompanyCode
                                                               and _HouseBankAccount.HouseBank = $projection.HouseBank
                                                               and _HouseBankAccount.HouseBankAccount = $projection.HouseBankAccount
                                                               and _HouseBankAccount.Language = $session.system_language
{
  key cb.PaymentCompanyCode,
  key cb.HouseBank,
  key cb.HouseBankAccount,
  key cb.Chequebook,
      cb.ChequebookFirstCheque,
      cb.ChequebookLastCheque,
      cb.NextChequebook,
      cb.LastAssignedCheque,
      cb.ChequebookName,
      cb.ChequebookIsNonSequential,
      case cb.ChequebookPurchaseDate
        when '' then cast ( ' ' as abap.dats )
        else cast ( cb.ChequebookPurchaseDate as abap.dats )
      end                                         as ChequebookPurchaseDate,
      cb.ChequebookPaymentMethodList,
      cb.ChequebookMinimalChequeCount,
      cb.ChequebookPurchaser,
      cb.ChequebookCreatedByUser,
      cb.ChequebookCreationDate,
      cb.ChequebookCreationTime,
      cb.ChequeType,
      //_Company.CompanyCodeName                    as CompanyName,
      //_Company.Country                            as Country,
      //_HouseBankAccount._HouseBank._Bank.BankName as HouseBankName,
      //_HouseBankAccount.BankAccount               as BankAccount,
      cast( '          ' as abap.char(10))        as ChequebookStatus ,
      _HouseBankAccount.HouseBankAccountDescription as BankAccountName
}
```
