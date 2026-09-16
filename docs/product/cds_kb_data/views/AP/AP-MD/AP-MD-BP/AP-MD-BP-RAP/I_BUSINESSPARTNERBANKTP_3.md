---
name: I_BUSINESSPARTNERBANKTP_3
description: "Business PartnerBANKTP 3"
semantic_vi: "Chỉ ra chi tiết ngân hàng đối tác kinh doanh, bao gồm thông tin nhận dạng, tên và thông tin tài khoản, cho việc quản lý đối tác kinh doanh và xử lý giao dịch."
keywords:
  - "business partner"
  - "bank"
  - "partner"
  - "bank details"
  - "bank account"
  - "transactional processing"
  - "business partner management"
  - "đối tác kinh doanh"
  - "ngân hàng"
  - "thông tin ngân hàng"
  - "thông tin tài khoản"
semantic_en: "Exposes business partner bank details, including identification, name, and account information, for use in business partner management and transactional processing."
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - transactional-processing
  - business-partner
  - bank
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
  - bo:Bank
---
# I_BUSINESSPARTNERBANKTP_3

**Business PartnerBANKTP 3**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `BankIdentification` | ✓ | |  |  |  |  |
| `BankIdnForEditValue` |  | |  |  |  |  |
| `BankCountryKey` |  | |  |  |  |  |
| `BankName` |  | |  |  |  |  |
| `BankNumber` |  | |  |  |  |  |
| `SWIFTCode` |  | |  |  |  |  |
| `BankControlKey` |  | |  |  |  |  |
| `BankAccountHolderName` |  | |  |  |  |  |
| `BankAccountName` |  | |  |  |  |  |
| `BankValidityStartDate` |  | |  |  |  |  |
| `BankValidityEndDate` |  | |  |  |  |  |
| `IBAN` |  | |  |  |  |  |
| `IBANValidityStartDate` |  | |  |  |  |  |
| `BankAccount` |  | |  |  |  |  |
| `BankAccountReferenceText` |  | |  |  |  |  |
| `CollectionAuthInd` |  | |  |  |  |  |
| `BusinessPartnerExternalBankID` |  | |  |  |  |  |
| `BPBankDetailsChangeDate` |  | |  |  |  |  |
| `BPBankDetailsChangeTargetID` |  | |  |  |  |  |
| `BPBankIsProtected` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `_Bank` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_IBAN` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Bank details'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #D,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER], 
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusinessPartnerBankTP_3 
 as projection on I_BusinessPartnerBankTP_2
{
  @Search.defaultSearchElement: true
  key BusinessPartner,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BankIdentification,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BankIdnForEditValue,
      BankCountryKey,
      @Semantics.text: true
      BankName,
      BankNumber,
      SWIFTCode,
      BankControlKey,
      BankAccountHolderName,
      BankAccountName,
      @EndUserText.label: 'BankValidityStartDate'
      @Semantics.businessDate.from: true
      BankValidityStartDate,
      @EndUserText.label: 'BankValidityEndDate'
      @Semantics.businessDate.to: true
      BankValidityEndDate,
      IBAN,
      IBANValidityStartDate,
      BankAccount,
      BankAccountReferenceText,
      CollectionAuthInd,
      BusinessPartnerExternalBankID,
      BPBankDetailsChangeDate,
      BPBankDetailsChangeTargetID,
      BPBankIsProtected,
      CityName,
      AuthorizationGroup,
      
      ////////////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////
          @UI.hidden:true
          @Consumption.hidden:true
          DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController1,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController2,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController3,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController4,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController5,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController6,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController7,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController8,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController9,
          @Consumption.hidden:true
          @UI.hidden:true
          DataController10,

          ////////////// End of Datacontroller 10+1 fields//////////

      /* Associations */
      _Bank,
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
      _IBAN
//      _BPDataControllerUsage
}
```
