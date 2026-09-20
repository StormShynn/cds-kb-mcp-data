---
name: I_JOURNALENTRYITEMONETIMEDATA
description: "Journal EntryITEMONETIMEDATA"
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - journal-entry
  - item-level
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_JOURNALENTRYITEMONETIMEDATA

**Journal EntryITEMONETIMEDATA**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `AccountingDocument` | ✓ | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` | ✓ | |  | `cast( bsec.gjahr as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` | ✓ | |  | `buzei` | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `BusinessPartnerName1` |  | |  | `cast(bsec.name1 as ad_name1)` | `CHAR(40)` | Name 1 |
| `BusinessPartnerName2` |  | |  | `cast(bsec.name2 as ad_name2)` | `CHAR(40)` | Name 2 |
| `BusinessPartnerName3` |  | |  | `cast(bsec.name3 as ad_name3)` | `CHAR(40)` | Name 3 |
| `BusinessPartnerName4` |  | |  | `cast(bsec.name4 as ad_name4)` | `CHAR(40)` | Name 4 |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `CityName` |  | |  | `cast(bsec.ort01 as ad_city1)` | `CHAR(40)` | City |
| `POBox` |  | |  | `pfach` | `CHAR(10)` | PO Box |
| `POBoxPostalCode` |  | |  | `pstl2` | `CHAR(10)` | PO Box Postal Code |
| `PostalCode` |  | |  | `pstlz` | `CHAR(10)` | Postal Code |
| `IsVATLiable` |  | |  | `stkzu` | `CHAR(1)` | Liable for VAT |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `TaxID1` |  | |  | `stcd1` | `CHAR(16)` | Tax Number 1 |
| `TaxID2` |  | |  | `stcd2` | `CHAR(11)` | Tax Number 2 |
| `TaxID3` |  | |  | `stcd3` | `CHAR(18)` | Tax Number 3 |
| `TaxID4` |  | |  | `stcd4` | `CHAR(18)` | Tax Number 4 |
| `TaxID5` |  | |  | `stcd5` | `CHAR(60)` | Tax Number 5 |
| `StreetAddressName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `ResponsibleType` |  | |  | `fityp` | `CHAR(2)` | Tax Type |
| `TaxNumberType` |  | |  | `stcdt` | `CHAR(2)` | Tax Number Type |
| `BusinessType` |  | |  | `j_1kftbus` | `CHAR(30)` | Type of Business |
| `IndustryType` |  | |  | `j_1kftind` | `CHAR(30)` | Type of Industry |
| `OneTimeAccountBPSalutationText` |  | |  | `anred` | `CHAR(15)` | Title |
| `AddressID` |  | |  | `adrnr` | `CHAR(10)` | Address |
| `AccountingClerkInternetAddress` |  | |  | `intad` | `CHAR(130)` | Internet address of partner company clerk |
| `BankAccount` |  | |  | `bankn` | `CHAR(18)` | Bank Account Number |
| `BankNumber` |  | |  | `bankl` | `CHAR(15)` | Bank Keys |
| `BankCountry` |  | |  | `banks` | `CHAR(3)` | Bank Country/Region Key |
| `PostOfficeBankAccount` |  | |  | `pskto` | `CHAR(16)` | PO Bank Current Acct No. or Building Society Ref. No. |
| `PaymentSystem` |  | |  | `payment_system` | `CHAR(15)` | Payee Payment System |
| `AliasType` |  | |  | `alias_type` | `CHAR(15)` | Payee Alias Type |
| `BPBankAccountAliasName` |  | |  | `bank_alias` | `CHAR(255)` | Payee Alias |
| `IsNaturalPerson` |  | |  | `cast(bsec.stkzn as bu_natural_person)` | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `IsOneTimeAccount` |  | |  | `xcpdk` | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `BankControlKey` |  | |  | `bkont` | `CHAR(2)` | Bank Control Key |
| `OneTimeAcctCntrySpecificRef1` |  | |  | `glo_re1_ot` | `CHAR(140)` | Ctry/Reg. Specific Reference in the One Time Account Data |
| `DataExchangeInstructionKey` |  | |  | `cast(bsec.dtaws as farp_dtaws preserving type)` | `CHAR(2)` | Data Exchange Instruction |
| `DataMediumExchangeControl` |  | |  | `dtams` | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_IBAN` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingDocument` | `I_JournalEntry` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_IBAN` | `I_Iban` | [0..1] |
| `_Bank` | `I_Bank_2` | [0..1] |

## Source Code

```abap
@EndUserText:    { label:                       'One-Time Data for Journal Entry Item' }
@VDM:            { viewType:                    #BASIC }
@Search:         { searchable:                  false }
@AccessControl:  { authorizationCheck: #PRIVILEGED_ONLY,
                   privilegedAssociations: ['_Address'],
                   personalData.blocking: #REQUIRED}
@ObjectModel:    {
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #TRANSACTIONAL,
                   representativeKey: 'AccountingDocumentItem',
                   modelingPattern: #ANALYTICAL_DIMENSION,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
                   sapObjectNodeType.name: 'JournalEntryItemOneTimeData'
                   }
@Analytics:      { internalName: #LOCAL,
                   technicalName: 'IJEONETIMEDATA',
                   dataCategory: #DIMENSION,
                    dataExtraction: {
                      enabled: true,
                      delta.changeDataCapture: {
                        mapping: 
                          [
                            { 
                              table: 'BSEC',
                              role: #MAIN,
                              viewElement: ['CompanyCode', 'AccountingDocument', 'FiscalYear', 'AccountingDocumentItem'],
                              tableElement: ['bukrs', 'belnr', 'gjahr', 'buzei']
                            }
                          ] 
                       }
                    }
                   }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }

define view entity I_JournalEntryItemOneTimeData
  as select from bsec

  association [1..1] to I_CompanyCode              as _CompanyCode        on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_JournalEntry             as _AccountingDocument on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
                                                                          and $projection.AccountingDocument = _AccountingDocument.AccountingDocument
                                                                          and $projection.FiscalYear         = _AccountingDocument.FiscalYear

  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear         on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                          and $projection.CompanyCode = _FiscalYear.CompanyCode

  association [0..1] to I_Address                  as _Address            on  $projection.AddressID = _Address.AddressID

  association [0..1] to I_Iban                     as _IBAN               on  $projection.BankCountry    = _IBAN.BankCountry
                                                                          and $projection.BankNumber     = _IBAN.Bank
                                                                          and $projection.BankAccount    = _IBAN.BankAccount
                                                                          and $projection.BankControlKey = _IBAN.BankControlKey

  association [0..1] to I_Bank_2                   as _Bank               on  $projection.BankCountry = _Bank.BankCountry
                                                                          and $projection.BankNumber  = _Bank.BankInternalID

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bsec.bukrs                                              as CompanyCode,
      @ObjectModel.foreignKey.association: '_AccountingDocument'
  key bsec.belnr                                              as AccountingDocument,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast( bsec.gjahr as fis_gjahr_no_conv preserving type ) as FiscalYear,
  key bsec.buzei                                              as AccountingDocumentItem,
      cast(bsec.name1 as ad_name1)                            as BusinessPartnerName1,
      cast(bsec.name2 as ad_name2)                            as BusinessPartnerName2,
      cast(bsec.name3 as ad_name3)                            as BusinessPartnerName3,
      cast(bsec.name4 as ad_name4)                            as BusinessPartnerName4,
      bsec.land1                                              as Country,
      cast(bsec.ort01 as ad_city1)                            as CityName,
      bsec.pfach                                              as POBox,
      bsec.pstl2                                              as POBoxPostalCode,
      bsec.pstlz                                              as PostalCode,
      bsec.stkzu                                              as IsVATLiable,
      bsec.regio                                              as Region,
      bsec.stcd1                                              as TaxID1,
      bsec.stcd2                                              as TaxID2,
      bsec.stcd3                                              as TaxID3,
      bsec.stcd4                                              as TaxID4,
      bsec.stcd5                                              as TaxID5,
      bsec.stras                                              as StreetAddressName,
      bsec.fityp                                              as ResponsibleType,
      bsec.stcdt                                              as TaxNumberType,
      bsec.j_1kftbus                                          as BusinessType,
      bsec.j_1kftind                                          as IndustryType,
      bsec.anred                                              as OneTimeAccountBPSalutationText,
      bsec.adrnr                                              as AddressID,
      bsec.intad                                              as AccountingClerkInternetAddress,
      bsec.bankn                                              as BankAccount,
      bsec.bankl                                              as BankNumber,
      bsec.banks                                              as BankCountry,
      bsec.pskto                                              as PostOfficeBankAccount,
      bsec.payment_system                                     as PaymentSystem,
      bsec.alias_type                                         as AliasType,
      bsec.bank_alias                                         as BPBankAccountAliasName,
      @Semantics.booleanIndicator: true
      cast(bsec.stkzn as bu_natural_person)                   as IsNaturalPerson,
      bsec.xcpdk                                              as IsOneTimeAccount,
      bkont                                                   as BankControlKey,
      glo_re1_ot                                              as OneTimeAcctCntrySpecificRef1,
      cast(bsec.dtaws as farp_dtaws preserving type)          as DataExchangeInstructionKey,
      bsec.dtams                                              as DataMediumExchangeControl,

      _CompanyCode,
      _AccountingDocument,
      _FiscalYear,
      _Address,
      _IBAN,
      _Bank
}
```
