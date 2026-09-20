---
name: I_ONETIMEACCOUNTCUSTOMER
description: "Onetimeaccountcustomer"
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
  - customer
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:Customer
---
# I_ONETIMEACCOUNTCUSTOMER

**Onetimeaccountcustomer**

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
| `FiscalYear` | ✓ | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
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
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `TaxID1` |  | |  | `stcd1` | `CHAR(16)` | Tax Number 1 |
| `TaxID2` |  | |  | `stcd2` | `CHAR(11)` | Tax Number 2 |
| `TaxID3` |  | |  | `stcd3` | `CHAR(18)` | Tax Number 3 |
| `TaxID4` |  | |  | `stcd4` | `CHAR(18)` | Tax Number 4 |
| `TaxID5` |  | |  | `stcd5` | `CHAR(60)` | Tax Number 5 |
| `StreetAddressName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `TaxNumberType` |  | |  | `stcdt` | `CHAR(2)` | Tax Number Type |
| `AddressID` |  | |  | `adrnr` | `CHAR(10)` | Address |
| `AccountingClerkInternetAddress` |  | |  | `intad` | `CHAR(130)` | Internet address of partner company clerk |
| `IsNaturalPerson` |  | |  | `cast(bsec.stkzn as bu_natural_person)` | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `AuthorizationGroup` |  | |  | `begru` | `CHAR(4)` | Authorization Group |
| `PayerIsAlternativePayer` |  | |  | `case bsec.xcpdk when 'X' then cast('' as farp_isalternativepayer) else cast ('X' as farp_isalternativepayer) end` | `CHAR(1)` | Is Alternative Payer |
| `Customer` |  | | `_OperationalAcctgDocItem` | `Customer` | `CHAR(10)` | Customer Number |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_OperationalAcctgDocItem` | `I_OperationalAcctgDocItem` | [1..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'One-Time Account Data for Customer Items'
@Analytics: { dataCategory:#DIMENSION}
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IONETIMECUSTOMER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.buffering.type: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality:#C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:#MIXED
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations: ['_Address']

define view I_OneTimeAccountCustomer

  as select from bsec

  association [1..1] to I_CompanyCode              as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JournalEntry             as _JournalEntry            on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                               and $projection.AccountingDocument = _JournalEntry.AccountingDocument
                                                                               and $projection.FiscalYear         = _JournalEntry.FiscalYear

  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear              on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                               and $projection.CompanyCode = _FiscalYear.CompanyCode

  association [0..1] to I_Address                  as _Address                 on  $projection.AddressID = _Address.AddressID

  association [1..1] to I_OperationalAcctgDocItem  as _OperationalAcctgDocItem on  _OperationalAcctgDocItem.CompanyCode            = $projection.CompanyCode
                                                                               and _OperationalAcctgDocItem.AccountingDocument     = $projection.AccountingDocument
                                                                               and _OperationalAcctgDocItem.FiscalYear             = $projection.FiscalYear
                                                                               and _OperationalAcctgDocItem.AccountingDocumentItem = $projection.AccountingDocumentItem

  association [1..1] to I_CustomerCompany          as _CustomerCompany         on  _CustomerCompany.CompanyCode = $projection.CompanyCode
                                                                               and _CustomerCompany.Customer    = $projection.Customer
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bsec.bukrs                            as CompanyCode,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key bsec.belnr                            as AccountingDocument,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key bsec.gjahr                            as FiscalYear,
  key bsec.buzei                            as AccountingDocumentItem,
      cast(bsec.name1 as ad_name1)          as BusinessPartnerName1,
      cast(bsec.name2 as ad_name2)          as BusinessPartnerName2,
      cast(bsec.name3 as ad_name3)          as BusinessPartnerName3,
      cast(bsec.name4 as ad_name4)          as BusinessPartnerName4,
      bsec.land1                            as Country,
      cast(bsec.ort01 as ad_city1)          as CityName,
      bsec.pfach                            as POBox,
      bsec.pstl2                            as POBoxPostalCode,
      bsec.pstlz                            as PostalCode,
      bsec.regio                            as Region,
      bsec.stcd1                            as TaxID1,
      bsec.stcd2                            as TaxID2,
      bsec.stcd3                            as TaxID3,
      bsec.stcd4                            as TaxID4,
      bsec.stcd5                            as TaxID5,
      bsec.stras                            as StreetAddressName,
      bsec.stcdt                            as TaxNumberType,
      bsec.adrnr                            as AddressID,
      bsec.intad                            as AccountingClerkInternetAddress,
      cast(bsec.stkzn as bu_natural_person) as IsNaturalPerson,
      bsec.begru                            as AuthorizationGroup,
      case bsec.xcpdk when 'X' then cast('' as farp_isalternativepayer) else cast ('X' as farp_isalternativepayer)
      end                                   as PayerIsAlternativePayer,

      _OperationalAcctgDocItem.Customer     as Customer,

      _CompanyCode,
      _JournalEntry,
      _FiscalYear,
      _Address,

      _OperationalAcctgDocItem,
      _CustomerCompany
}
where
  _OperationalAcctgDocItem.FinancialAccountType = 'D'
```
