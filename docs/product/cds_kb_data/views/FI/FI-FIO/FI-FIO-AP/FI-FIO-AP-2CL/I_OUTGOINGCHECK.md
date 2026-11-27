---
name: I_OUTGOINGCHECK
description: "Outgoingcheck"
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
# I_OUTGOINGCHECK

**Outgoingcheck**

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
| `PaymentMethod` | ✓ | |  |  | `CHAR(1)` | Payment Method |
| `OutgoingCheque` | ✓ | |  |  | `CHAR(13)` | Check number |
| `IsIntercompanyPayment` |  | |  |  | `CHAR(1)` | X - Intercompany Payment |
| `ChequeIsManuallyIssued` |  | |  |  | `CHAR(1)` | X - Manual check |
| `ChequebookFirstCheque` |  | |  |  | `CHAR(13)` | Check Number From |
| `PaymentDocument` |  | |  |  | `CHAR(10)` | Document Number of the Payment Document |
| `ChequePaymentDate` |  | |  |  | `DATS(8)` | Probable Payment Date (Cash Discount 1 Due) |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PaidAmountInPaytCurrency` |  | |  |  | `CURR(23)` |  |
| `Supplier` |  | |  |  | `CHAR(10)` | Customer Number |
| `PaymentDocPrintDate` |  | |  |  | `DATS(8)` | Print Date |
| `PaymentDocPrintTime` |  | |  |  | `TIMS(6)` | Print Time |
| `ChequePrintDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PaymentDocPrintedByUser` |  | |  |  | `CHAR(12)` | Print User |
| `ChequeEncashmentDate` |  | |  |  | `DATS(8)` | Check encashment date |
| `ChequeLastExtractDate` |  | |  |  | `DATS(8)` | Date of Extract Creation |
| `ChequeLastExtractDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PayeeTitle` |  | |  |  | `CHAR(15)` | Title of the payee |
| `PayeeName` |  | |  |  | `CHAR(35)` | Name of the payee |
| `PayeeAdditionalName` |  | |  |  | `CHAR(35)` | Name of the payee |
| `PayeePostalCode` |  | |  |  | `CHAR(10)` | Postal Code of the Payee |
| `PayeeCityName` |  | |  |  | `CHAR(35)` | City of the payee |
| `PayeeStreet` |  | |  |  | `CHAR(35)` | Street and house number of the payee |
| `PayeePOBox` |  | |  |  | `CHAR(10)` | P.O. box of the payee |
| `PayeePOBoxPostalCode` |  | |  |  | `CHAR(10)` | P.O. box postal code of the payee |
| `PayeePOBoxCityName` |  | |  |  | `CHAR(35)` | City of payee's PO box |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Regional code of the payee |
| `ChequeVoidReason` |  | |  |  | `NUMC(2)` | Check void reason code |
| `ChequeVoidedDate` |  | |  |  | `DATS(8)` | Voided Check Date |
| `ChequeVoidedByUser` |  | |  |  | `CHAR(12)` | Voided check user |
| `ChequeIsCashed` |  | |  |  | `CHAR(1)` | X - Paid Check |
| `CashDiscountAmount` |  | |  |  | `CURR(23)` | Total Cash Discount for the Pmnt Transactn in Pmnt Currency |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ChequeType` |  | |  |  | `CHAR(2)` | Type of Check for China Specific |
| `VoidedChequeUsage` |  | |  |  | `CHAR(2)` |  |
| `ChequeStatus` |  | |  |  | `CHAR(2)` | Status of Check Document |
| `ChequeIssuingType` |  | |  |  | `CHAR(2)` | Outgoing Check Output Field |
| `BankName` |  | | `_HouseBank._Bank` | `BankName` | `CHAR(60)` | Name of Financial Institution |
| `CompanyCodeCountry` |  | | `_Company` | `Country` | `CHAR(3)` | Country/Region Key |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `_Company` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_VoidReason` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_CompanyCode` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_VoidReason` | `I_APVoidReasonText` | [1..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Outgoing Cheque'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IOUTGOINGCHECK'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_OutgoingCheck
as select from P_OutgoingCheck
association [0..1] to I_CompanyCode as _Company on _Company.CompanyCode = $projection.PaymentCompanyCode
association [0..1] to I_Housebank as _HouseBank on _HouseBank.CompanyCode = $projection.PaymentCompanyCode and 
                                                          _HouseBank.HouseBank = $projection.HouseBank                                               
association [1..*] to I_APVoidReasonText as _VoidReason on _VoidReason.ChequeVoidReason = $projection.ChequeVoidReason 
association [0..1] to I_Country as _Country on  _Country.Country =  $projection.Country
association [0..1] to I_Supplier as _Supplier  on  $projection.Supplier = _Supplier.Supplier
{
  key PaymentCompanyCode,
  key HouseBank,
  key HouseBankAccount,
  key PaymentMethod, 
  key OutgoingCheque,
  IsIntercompanyPayment,
  ChequeIsManuallyIssued,
  ChequebookFirstCheque,
  PaymentDocument,
  ChequePaymentDate,
  PaymentCurrency,
  @Semantics.amount.currencyCode: 'PaymentCurrency'
  PaidAmountInPaytCurrency,
  Supplier,
  PaymentDocPrintDate,
  PaymentDocPrintTime,
  ChequePrintDateTime,
  PaymentDocPrintedByUser,
  ChequeEncashmentDate,
  ChequeLastExtractDate,
  ChequeLastExtractDateTime,
  PayeeTitle,
  PayeeName,
  PayeeAdditionalName,
  PayeePostalCode,
  PayeeCityName,
  PayeeStreet,
  PayeePOBox,
  PayeePOBoxPostalCode,
  PayeePOBoxCityName,
  Country,
  Region,
  ChequeVoidReason,
  ChequeVoidedDate,
  ChequeVoidedByUser,
  ChequeIsCashed,
  @Semantics.amount.currencyCode: 'PaymentCurrency'
  CashDiscountAmount,
  FiscalYear,
  ChequeType,
  VoidedChequeUsage,
  ChequeStatus ,
  ChequeIssuingType,
  _HouseBank._Bank.BankName,
  _Company.Country as CompanyCodeCountry,
  _Company.CompanyCodeName,
  _Country,
  _Company,
  _Supplier,
  _VoidReason,
  _HouseBank
}
```
