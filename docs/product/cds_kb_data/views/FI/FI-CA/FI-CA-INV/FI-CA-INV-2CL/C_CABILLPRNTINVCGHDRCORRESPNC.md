---
name: C_CABILLPRNTINVCGHDRCORRESPNC
description: "Cabillprntinvcghdrcorrespnc"
semantic_vi: "View C_CABILLPRNTINVCGHDRCORRESPNC cung cấp truy cập vào các bản ghi tương ứng cho hóa đơn trong thành phần FI-CA-INV-2CL, cho phép các nhà phát triển truy cập và quản lý các bản ghi này."
keywords:
  - "invoice"
  - "đơn hàng"
  - "tương ứng"
  - "correspondence"
  - "fi-ca-inv-2cl"
  - "fi"
  - "fi-ca"
  - "fi-ca-inv"
  - "sap"
  - "finance"
  - "đơn mua hàng"
semantic_en: "The C_CABILLPRNTINVCGHDRCORRESPNC view provides access to correspondence records for invoices in the FI-CA-INV-2CL component, allowing developers to retrieve and manage these records."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - consumption-view
  - header-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# C_CABILLPRNTINVCGHDRCORRESPNC

**Cabillprntinvcghdrcorrespnc**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACorrespondenceType` | ✓ | |  |  | `CHAR(4)` | Correspondence Type |
| `CACorrespondence` | ✓ | |  |  | `CHAR(36)` | Correspondence Key |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Correspondence Recipient |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `OriglCorrespondenceRecipient` |  | |  |  | `CHAR(10)` | Original Correspondence Recipient |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Correspondence |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation (to the Second) |
| `CorrespondencePrintDate` |  | |  |  | `DATS(8)` | Print Date |
| `CorrespondenceIssueDate` |  | |  |  | `DATS(8)` | Issue Date |
| `CorrespondenceIssueTime` |  | |  |  | `TIMS(6)` | Issue Time to the Second |
| `Currency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CAAmountInLocalCurrency` |  | |  |  | `CURR(13)` | Amount in Local Currency with +/- Signs |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID for Creation Run |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Additional ID Characteristic for Creation Run |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `Correspondence1stEntityIdn` |  | |  |  | `CHAR(4)` | Correspondence data |
| `Correspondence1stEntityData` |  | |  |  | `CHAR(32)` | Correspondence Data Field |
| `Correspondence2ndEntityIdn` |  | |  |  | `CHAR(4)` | Correspondence data |
| `Correspondence2ndEntityData` |  | |  |  | `CHAR(32)` | Correspondence Data Field |
| `Correspondence3rdEntityIdn` |  | |  |  | `CHAR(4)` | Correspondence data |
| `Correspondence3rdEntityData` |  | |  |  | `CHAR(32)` | Correspondence Data Field |
| `Correspondence4thEntityIdn` |  | |  |  | `CHAR(4)` | Correspondence data |
| `Correspondence4thEntityData` |  | |  |  | `CHAR(32)` | Correspondence Data Field |
| `CACorrespncSenderAddressID` |  | |  |  | `CHAR(10)` | Address Number of Correspondence Sender |
| `CompanyCodeName` |  | | `_CACorrespondenceHeader._CompCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `SenderCityName` |  | | `_SenderAddress` | `CityName` | `CHAR(40)` | City |
| `SenderPostalCode` |  | | `_SenderAddress` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `SenderStreetName` |  | | `_SenderAddress` | `StreetName` | `CHAR(60)` | Street |
| `SenderHouseNumber` |  | | `_SenderAddress` | `HouseNumber` | `CHAR(10)` | House Number |
| `SenderCountry` |  | | `_SenderAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `BusinessPartnerName` |  | | `_CACorrespondenceHeader._BusinessPartner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `RecipientCityName` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `CityName` | `CHAR(40)` | City |
| `RecipientPostalCode` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `RecipientStreetName` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `RecipientHouseNumber` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `HouseNumber` | `CHAR(10)` | House Number |
| `RecipientCountry` |  | | `_CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
| `OriglCorrespncRecipientName` |  | | `_OriglCorrespncRcpnt._BusinessPartner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `CustomerCityName` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `CityName` | `CHAR(40)` | City |
| `CustomerPostalCode` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `CustomerStreetName` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `BusinessPartnerHouseNumber` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `HouseNumber` | `CHAR(10)` | House Number |
| `CustomerCountry` |  | | `_OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
| `CAInvcgDocumentReversalReason` |  | | `_CAInvcgDocHeader` | `CAInvcgDocumentReversalReason` | `CHAR(2)` | Reversal Reason of Invoicing Document |
| `CAInvcgDocIsLockedForPrinting` |  | | `_CAInvcgDocHeader` | `CAInvcgDocIsLockedForPrinting` | `CHAR(1)` | Invoicing Document Locked for Printing |
| `CAInvcgProcess` |  | | `_CAInvcgDocHeader` | `CAInvcgProcess` | `CHAR(2)` | Invoicing Process |
| `CAApplicationArea` |  | | `_CAInvcgDocHeader` | `CAApplicationArea` | `CHAR(1)` | Application Area |
| `CAInvcgCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgCategory` | `CHAR(4)` | Invoicing Category |
| `CAInvcgType` |  | | `_CAInvcgDocHeader` | `CAInvcgType` | `CHAR(2)` | Invoicing Type |
| `CAInvcgDocPeriodCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgDocPeriodCategory` | `CHAR(2)` | Category of Invoicing Period |
| `CAInvcgTargetProcess` |  | | `_CAInvcgDocHeader` | `CAInvcgTargetProcess` | `CHAR(4)` | Target Process That Invoices the Source Document |
| `CAInvcgCorrectionCategory` |  | | `_CAInvcgDocHeader` | `CAInvcgCorrectionCategory` | `CHAR(2)` | Category of Invoice Correction |
| `CAInvcgDocHasChargeOrDiscItems` |  | | `_CAInvcgDocHeader` | `CAInvcgDocHasChargeOrDiscItems` | `CHAR(1)` | Invoicing Document Contains Charge/Discount Items |
| `CAInvcgDocCreationMode` |  | | `_CAInvcgDocHeader` | `CAInvcgDocCreationMode` | `CHAR(1)` | Creation Mode of Invoicing Document |
| `CAInvcgMasterDataType` |  | | `_CAInvcgDocHeader` | `CAInvcgMasterDataType` | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `CAInvcgTechnicalDocumentType` |  | | `_CAInvcgDocHeader` | `CAInvcgTechnicalDocumentType` | `CHAR(1)` | Type of Technical Billing/Invoicing Document |
| `CAInvcgDocIsPartOfList` |  | | `_CAInvcgDocHeader` | `CAInvcgDocIsPartOfList` | `CHAR(1)` | Invoicing Document Is Single Document of Invoicing List |
| `CAInvcgBolloTaxPostStatus` |  | | `_CAInvcgDocHeader` | `CAInvcgBolloTaxPostStatus` | `CHAR(1)` | Stamp Tax Posted |
| `CAInvcgDocPeriodDate` |  | | `_CAInvcgDocHeader` | `CAInvcgDocPeriodDate` | `DATS(8)` | Invoicing Period |
| `DocumentDate` |  | | `_CAInvcgDocHeader` | `DocumentDate` | `DATS(8)` | Document Date in Document |
| `CAAmountInTransactionCurrency` |  | | `_CAInvcgDocHeader` | `CAAmountInTransactionCurrency` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `TransactionCurrency` |  | | `_CAInvcgDocHeader` | `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgDocReversalReasonText` | | ✓ | | | | |
| `_CAInvcgDocLockedForPrintText` | | ✓ | | | | |
| `_CAInvcgProcessText` | | ✓ | | | | |
| `_CAInvcgCategoryText` | | ✓ | | | | |
| `_CAInvcgTypeProcText` | | ✓ | | | | |
| `_CAInvcgPeriodCatText` | | ✓ | | | | |
| `_CAInvcgTargetProcText` | | ✓ | | | | |
| `_CAInvcgCorrectionCatText` | | ✓ | | | | |
| `_CAInvcgDocChrgDiscItemsText` | | ✓ | | | | |
| `_CAInvcgDocCreationModeText` | | ✓ | | | | |
| `_CAInvcgMasterDataTypeText` | | ✓ | | | | |
| `_CAInvcgDocTechDocTypeText` | | ✓ | | | | |
| `_CAInvcgDocPartOfListText` | | ✓ | | | | |
| `_CAInvcgBolloTaxPostStatText` | | ✓ | | | | |
| `_SenderAddress` | | ✓ | | | | |
| `_OriglCorrespncRcpnt` | | ✓ | | | | |
| `_CorrespncType` | | ✓ | | | | |
| `_CorrespncTypeT` | | ✓ | | | | |
| `_ContrAcc` | | ✓ | | | | |
| `_CAPartner` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader2` | [0..1] |
| `_CAInvcgDocReversalReasonText` | `I_CAInvcgDocReversalReasonText` | [0..1] |
| `_CAInvcgDocLockedForPrintText` | `I_CAInvcgDocLockedForPrintText` | [0..1] |
| `_CAInvcgProcessText` | `I_CAInvcgProcessText` | [1..1] |
| `_CAInvcgCategoryText` | `I_CAInvcgCategoryText` | [0..1] |
| `_CAInvcgTypeProcText` | `I_CAInvcgTypeProcText` | [0..1] |
| `_CAInvcgPeriodCatText` | `I_CAInvcgPeriodCatText` | [0..1] |
| `_CAInvcgTargetProcText` | `I_CAInvcgTargetProcText` | [0..1] |
| `_CAInvcgCorrectionCatText` | `I_CAInvcgCorrectionCatText` | [1..1] |
| `_CAInvcgDocChrgDiscItemsText` | `I_CAInvcgDocChrgDiscItemsText` | [1..1] |
| `_CAInvcgDocCreationModeText` | `I_CAInvcgDocCreationModeText` | [1..1] |
| `_CAInvcgMasterDataTypeText` | `I_CAInvcgMasterDataTypeText` | [1..1] |
| `_CAInvcgDocTechDocTypeText` | `I_CAInvcgDocTechDocTypeText` | [1..1] |
| `_CAInvcgDocPartOfListText` | `I_CAInvcgDocPartOfListText` | [1..1] |
| `_CAInvcgBolloTaxPostStatText` | `I_CAInvcgBolloTaxPostStatText` | [1..1] |
| `_SenderAddress` | `I_Address_2` | [0..*] |
| `_OriglCorrespncRcpnt` | `I_CAContractPartner` | [1..1] |
| `_Extension` | `E_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@VDM.viewType:#CONSUMPTION
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.beleg mit Korrespondenzauftrag'
@Metadata.ignorePropagatedAnnotations:true

@Consumption.dbHints: ['USE_HEX_PLAN','NO_SUBPLAN_SHARING']

define view entity C_CABillPrntInvcgHdrCorrespnc
  as select from I_CACorrespondenceHeader as _CACorrespondenceHeader
  association [0..1] to I_CAInvcgDocHeader2            as _CAInvcgDocHeader             on  $projection.Correspondence2ndEntityData = _CAInvcgDocHeader.CAInvoicingDocument
                                                                                        and $projection.Correspondence1stEntityData = _CAInvcgDocHeader.CAInvcgProcess
  association [0..1] to I_CAInvcgDocReversalReasonText as _CAInvcgDocReversalReasonText on  $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReasonText.CAInvcgDocumentReversalReason
                                                                                        and $projection.Language                      = _CAInvcgDocReversalReasonText.Language
  association [0..1] to I_CAInvcgDocLockedForPrintText as _CAInvcgDocLockedForPrintText on  $projection.CAInvcgDocIsLockedForPrinting = _CAInvcgDocLockedForPrintText.CAInvcgDocIsLockedForPrinting
                                                                                        and $projection.Language                      = _CAInvcgDocLockedForPrintText.Language
  association [1..1] to I_CAInvcgProcessText           as _CAInvcgProcessText           on  $projection.CAInvcgProcess    = _CAInvcgProcessText.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgProcessText.CAApplicationArea
                                                                                        and $projection.Language          = _CAInvcgProcessText.Language
  association [0..1] to I_CAInvcgCategoryText          as _CAInvcgCategoryText          on  $projection.CAInvcgCategory = _CAInvcgCategoryText.CAInvcgCategory
                                                                                        and $projection.Language        = _CAInvcgCategoryText.Language
  association [0..1] to I_CAInvcgTypeProcText          as _CAInvcgTypeProcText          on  $projection.CAInvcgType       = _CAInvcgTypeProcText.CAInvcgType
                                                                                        and $projection.CAInvcgProcess    = _CAInvcgTypeProcText.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgTypeProcText.CAApplicationArea
                                                                                        and $projection.Language          = _CAInvcgTypeProcText.Language

  association [0..1] to I_CAInvcgPeriodCatText         as _CAInvcgPeriodCatText         on  $projection.CAInvcgDocPeriodCategory = _CAInvcgPeriodCatText.CAInvcgPeriodCategory
                                                                                        and $projection.Language                 = _CAInvcgPeriodCatText.Language
  association [0..1] to I_CAInvcgTargetProcText        as _CAInvcgTargetProcText        on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProcText.CAInvcgTargetProcess
                                                                                        and $projection.Language             = _CAInvcgTargetProcText.Language
  association [1..1] to I_CAInvcgCorrectionCatText     as _CAInvcgCorrectionCatText     on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCatText.CAInvcgCorrectionCategory
                                                                                        and $projection.Language                  = _CAInvcgCorrectionCatText.Language
  association [1..1] to I_CAInvcgDocChrgDiscItemsText  as _CAInvcgDocChrgDiscItemsText  on  $projection.CAInvcgDocHasChargeOrDiscItems = _CAInvcgDocChrgDiscItemsText.CAInvcgDocHasChargeOrDiscItems
                                                                                        and $projection.Language                       = _CAInvcgDocChrgDiscItemsText.Language
  association [1..1] to I_CAInvcgDocCreationModeText   as _CAInvcgDocCreationModeText   on  $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationModeText.CAInvcgDocCreationMode
                                                                                        and $projection.Language               = _CAInvcgDocCreationModeText.Language
  association [1..1] to I_CAInvcgMasterDataTypeText    as _CAInvcgMasterDataTypeText    on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataTypeText.CAInvcgMasterDataType
                                                                                        and $projection.Language              = _CAInvcgMasterDataTypeText.Language
  association [1..1] to I_CAInvcgDocTechDocTypeText    as _CAInvcgDocTechDocTypeText    on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocTypeText.CAInvcgTechnicalDocumentType
                                                                                        and $projection.Language                     = _CAInvcgDocTechDocTypeText.Language
  association [1..1] to I_CAInvcgDocPartOfListText     as _CAInvcgDocPartOfListText     on  $projection.CAInvcgDocIsPartOfList = _CAInvcgDocPartOfListText.CAInvcgDocIsPartOfList
                                                                                        and $projection.Language               = _CAInvcgDocPartOfListText.Language
  association [1..1] to I_CAInvcgBolloTaxPostStatText  as _CAInvcgBolloTaxPostStatText  on  $projection.CAInvcgBolloTaxPostStatus = _CAInvcgBolloTaxPostStatText.CAInvcgBolloTaxPostStatus
                                                                                        and $projection.Language                  = _CAInvcgBolloTaxPostStatText.Language
  association [0..*] to I_Address_2                    as _SenderAddress                on  $projection.CACorrespncSenderAddressID = _SenderAddress.AddressID

  association [1..1] to I_CAContractPartner            as _OriglCorrespncRcpnt          on  $projection.OriglCorrespondenceRecipient = _OriglCorrespncRcpnt.BusinessPartner

  // extension
  association [0..1] to E_CAInvcgDocHeader             as _Extension                    on  $projection.Correspondence2ndEntityData = _Extension.CAInvoicingDocument

{
       //cotyp
  key  CACorrespondenceType,

       // cokey
  key  CACorrespondence,

       // vkont
       ContractAccount,

       // gpart
       BusinessPartner,

       // vtref
       CAContract,

       // org_gpart
       OriglCorrespondenceRecipient,

       // bukrs
       CompanyCode,

       // uname
       CreatedByUser,

       // cdate
       CreationDate,

       // ctime
       CreationTime,

       // copri
       CorrespondencePrintDate,

       // coidt
       CorrespondenceIssueDate,

       // coitm
       CorrespondenceIssueTime,

       // salwa
       //       @Semantics.amount.currencyCode: 'Currency'
       Currency,

       // salbe
       @Semantics.amount.currencyCode: 'Currency'
       CAAmountInLocalCurrency,

       // laufd
       CAMassRunDate,

       // laufi
       CAMassRunID,

       // spras
       Language,

       // entid1
       Correspondence1stEntityIdn,

       // data1
       Correspondence1stEntityData,

       // entid2
       Correspondence2ndEntityIdn,

       // data2
       Correspondence2ndEntityData,

       // entid3
       Correspondence3rdEntityIdn,

       // data3
       Correspondence3rdEntityData,

       // entid4
       Correspondence4thEntityIdn,

       // data4
       Correspondence4thEntityData,

       // aadrnr
       CACorrespncSenderAddressID,

       //       _CompCode._Address.CityName                                                                         as SenderCityName,
       //       //       _CompCode._Address.FullName                                                                         as SenderFullName,
       //       _CompCode._Address.PostalCode                                                                       as SenderPostalCode,
       //       _CompCode._Address.StreetName                                                                       as SenderStreetName,
       //       _CompCode._Address.HouseNumber                                                                      as SenderHouseNumber,
       //       _CompCode._Address.Country                                                                          as SenderCountry,
       _CACorrespondenceHeader._CompCode.CompanyCodeName                                                         as CompanyCodeName,

       _SenderAddress.CityName                                                                                   as SenderCityName,
       // _SenderAddress.FullName                                                                         as SenderFullName,
       _SenderAddress.PostalCode                                                                                 as SenderPostalCode,
       _SenderAddress.StreetName                                                                                 as SenderStreetName,
       _SenderAddress.HouseNumber                                                                                as SenderHouseNumber,
       _SenderAddress.Country                                                                                    as SenderCountry,

       _CACorrespondenceHeader._BusinessPartner.BusinessPartnerName                                              as BusinessPartnerName,

       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.CityName    as RecipientCityName,
       //       _BusinessPartner._CurrentDefaultAddress._Address.FullName                                           as RecipientFullName,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.PostalCode  as RecipientPostalCode,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.StreetName  as RecipientStreetName,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.HouseNumber as RecipientHouseNumber,
       _CACorrespondenceHeader._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.Country     as RecipientCountry,

       _OriglCorrespncRcpnt._BusinessPartner.BusinessPartnerName                                                 as OriglCorrespncRecipientName,

       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.CityName       as CustomerCityName,
       //       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._Address.FullName                      as CustomerFullName,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.PostalCode     as CustomerPostalCode,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.StreetName     as CustomerStreetName,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.HouseNumber    as BusinessPartnerHouseNumber,
       _OriglCorrespncRcpnt._BusinessPartner._CurrentDefaultAddress._AddressDefaultRepresentation.Country        as CustomerCountry,

       _CAInvcgDocHeader.CAInvcgDocumentReversalReason                                                           as CAInvcgDocumentReversalReason,
       _CAInvcgDocHeader.CAInvcgDocIsLockedForPrinting                                                           as CAInvcgDocIsLockedForPrinting,
       _CAInvcgDocHeader.CAInvcgProcess                                                                          as CAInvcgProcess,
       _CAInvcgDocHeader.CAApplicationArea                                                                       as CAApplicationArea,
       _CAInvcgDocHeader.CAInvcgCategory                                                                         as CAInvcgCategory,
       _CAInvcgDocHeader.CAInvcgType                                                                             as CAInvcgType,
       _CAInvcgDocHeader.CAInvcgDocPeriodCategory                                                                as CAInvcgDocPeriodCategory,
       _CAInvcgDocHeader.CAInvcgTargetProcess                                                                    as CAInvcgTargetProcess,
       _CAInvcgDocHeader.CAInvcgCorrectionCategory                                                               as CAInvcgCorrectionCategory,
       _CAInvcgDocHeader.CAInvcgDocHasChargeOrDiscItems                                                          as CAInvcgDocHasChargeOrDiscItems,
       _CAInvcgDocHeader.CAInvcgDocCreationMode                                                                  as CAInvcgDocCreationMode,
       _CAInvcgDocHeader.CAInvcgMasterDataType                                                                   as CAInvcgMasterDataType,
       _CAInvcgDocHeader.CAInvcgTechnicalDocumentType                                                            as CAInvcgTechnicalDocumentType,
       _CAInvcgDocHeader.CAInvcgDocIsPartOfList                                                                  as CAInvcgDocIsPartOfList,
       _CAInvcgDocHeader.CAInvcgBolloTaxPostStatus                                                               as CAInvcgBolloTaxPostStatus,

       _CAInvcgDocHeader.CAInvcgDocPeriodDate                                                                    as CAInvcgDocPeriodDate,
       _CAInvcgDocHeader.DocumentDate                                                                            as DocumentDate,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
       _CAInvcgDocHeader.CAAmountInTransactionCurrency                                                           as CAAmountInTransactionCurrency,

       _CAInvcgDocHeader.TransactionCurrency                                                                     as TransactionCurrency,

       //       _CAInvcgTypeProcText.CAInvcgDocumentTitleText                                                          as CAInvcgDocumentTitleText,

       // Make association public
       _CAInvcgDocHeader,
       _CAInvcgDocReversalReasonText,
       _CAInvcgProcessText,
       _CAInvcgDocLockedForPrintText,
       _CAInvcgCategoryText,
       _CAInvcgTypeProcText,
       _CAInvcgPeriodCatText,
       _CAInvcgTargetProcText,
       _CAInvcgCorrectionCatText,
       _CAInvcgDocChrgDiscItemsText,
       _CAInvcgDocCreationModeText,
       _CAInvcgMasterDataTypeText,
       _CAInvcgDocTechDocTypeText,
       _CAInvcgDocPartOfListText,
       _CAInvcgBolloTaxPostStatText,

       _CorrespncType,
       _CorrespncTypeT,
       _ContrAcc,
       _CAPartner,
       _BusinessPartner,
       _OriglCorrespncRcpnt,
       _CompCode,
       _SenderAddress
}
where
      Correspondence1stEntityIdn = 'IPRC'
  and Correspondence2ndEntityIdn = 'DOCN'



//@AbapCatalog.sqlViewName: 'CCAINVDOCH_COH'
//@AbapCatalog.compiler.compareFilter: true
//@VDM.viewType:#CONSUMPTION
////@VDM.viewType:#COMPOSITE
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@ObjectModel.usageType.serviceQuality: #D
//@ObjectModel.usageType.sizeCategory: #XL
//@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
//@ObjectModel.supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
//@AccessControl.personalData.blocking: #REQUIRED
//@AccessControl.authorizationCheck: #CHECK
////@AccessControl.authorizationCheck: #NOT_ALLOWED
//@EndUserText.label: 'Fakt.beleg mit Korrespondenzauftrag'
//@Metadata.ignorePropagatedAnnotations:true
//@Consumption.dbHints: ['USE_HEX_PLAN','NO_SUBPLAN_SHARING']
//
//define view C_CABillPrntInvcgHdrCorrespnc
//  as select from I_CABillPrntInvcgHdrCorrespnc as _CABillPrntInvcgHdrCorrespnc
//
//
//  association [0..1] to I_Address_2        as _RecipientAddress on  $projection.BusinessPartnerAddressID        = _RecipientAddress.AddressID
//                                                                and $projection.PersonNumber                    = _RecipientAddress.AddressPersonID
//                                                                and _RecipientAddress.AddressRepresentationCode = ''
//
//  association [0..1] to I_Address_2        as _CustomerAddress  on  $projection.CACustomerAddressID            = _CustomerAddress.AddressID
//                                                                and $projection.CACustomerPersonNumber         = _CustomerAddress.AddressPersonID
//                                                                and _CustomerAddress.AddressRepresentationCode = ''
//
//  // extension
//  association [0..1] to E_CAInvcgDocHeader as _Extension        on  $projection.Correspondence2ndEntityData = _Extension.CAInvoicingDocument
//{
//       //cotyp
//  key  CACorrespondenceType,
//
//       // cokey
//  key  CACorrespondence,
//
//       // adrnr
//       BusinessPartnerAddressID,
//
//       // persnumber
//       PersonNumber,
//
//       // addrnumber
//       CACustomerAddressID,
//
//       // persnumber
//       CACustomerPersonNumber,
//
//       // vkont
//       ContractAccount,
//
//       // gpart
//       BusinessPartner,
//
//       // vtref
//       CAContract,
//
//       // org_gpart
//       OriglCorrespondenceRecipient,
//
//       // bukrs
//       CompanyCode,
//
//       // uname
//       CreatedByUser,
//
//       // cdate
//       CreationDate,
//
//       // ctime
//       CreationTime,
//
//       // copri
//       CorrespondencePrintDate,
//
//       // coidt
//       CorrespondenceIssueDate,
//
//       // coitm
//       CorrespondenceIssueTime,
//
//       // salwa
//       @Semantics.currencyCode: true
//       //       @Semantics.amount.currencyCode: 'Currency'
//       Currency,
//
//       // salbe
//       @Semantics.amount.currencyCode: 'Currency'
//       CAAmountInLocalCurrency,
//
//       // laufd
//       CAMassRunDate,
//
//       // laufi
//       CAMassRunID,
//
//       // spras
//       Language,
//
//       // entid1
//       Correspondence1stEntityIdn,
//
//       // data1
//       Correspondence1stEntityData,
//
//       // entid2
//       Correspondence2ndEntityIdn,
//
//       // data2
//       Correspondence2ndEntityData,
//
//       // entid3
//       Correspondence3rdEntityIdn,
//
//       // data3
//       Correspondence3rdEntityData,
//
//       // entid4
//       Correspondence4thEntityIdn,
//
//       // data4
//       Correspondence4thEntityData,
//
//       // aadrnr
//       CACorrespncSenderAddressID,
//
//       SenderCityName,
//       SenderPostalCode,
//       SenderStreetName,
//       SenderHouseNumber,
//       SenderCountry,
//
//       CompanyCodeName,
//
//       _BusinessPartner.BusinessPartnerName                      as BusinessPartnerName,
//
//       _RecipientAddress.CityName                                as RecipientCityName,
//       _RecipientAddress.PostalCode                              as RecipientPostalCode,
//       _RecipientAddress.StreetName                              as RecipientStreetName,
//       _RecipientAddress.HouseNumber                             as RecipientHouseNumber,
//       _RecipientAddress.Country                                 as RecipientCountry,
//
//       _OriglCorrespncRcpnt._BusinessPartner.BusinessPartnerName as OriglCorrespncRecipientName,
//
//       _CustomerAddress.CityName                                 as CustomerCityName,
//       _CustomerAddress.PostalCode                               as CustomerPostalCode,
//       _CustomerAddress.StreetName                               as CustomerStreetName,
//       _CustomerAddress.HouseNumber                              as BusinessPartnerHouseNumber,
//       _CustomerAddress.Country                                  as CustomerCountry,
//
//       CAInvcgDocumentReversalReason,
//       CAInvcgDocIsLockedForPrinting,
//       CAInvcgProcess,
//       CAApplicationArea,
//       CAInvcgCategory,
//       CAInvcgType,
//       CAInvcgDocPeriodCategory,
//       CAInvcgTargetProcess,
//       CAInvcgCorrectionCategory,
//       CAInvcgDocHasChargeOrDiscItems,
//       CAInvcgDocCreationMode,
//       CAInvcgMasterDataType,
//       CAInvcgTechnicalDocumentType,
//       CAInvcgDocIsPartOfList,
//       CAInvcgBolloTaxPostStatus,
//       CAInvcgDocPeriodDate,
//       DocumentDate,
//
//       @Semantics.amount.currencyCode: 'TransactionCurrency'
//       CAAmountInTransactionCurrency,
//
//       @Semantics.currencyCode: true
//       TransactionCurrency,
//
//       // Make association public
//       _CorrespncType,
//       _CAPartner,
//       _CAInvcgCategoryText,
//       _CorrespncTypeT,
//       _CAInvcgTypeProcText,
//       _CompCode,
//       _SenderAddress,
//       _ContrAcc,
//       _BusinessPartner,
//       _RecipientAddress,
//       _CustomerAddress
//}
```
