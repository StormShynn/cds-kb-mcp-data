---
name: I_BUSPARTMOBILEPHONENUMBERTP_3
description: "Business PartnerMOBILEPHONENUMBERTP 3"
semantic_vi: "Chứa thông tin số điện thoại di động của đối tác kinh doanh, được sử dụng khi quản lý dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "mobile phone number"
  - "số điện thoại di động"
  - "sap cds view"
  - "cds view"
  - "ap-md-bp-rap"
  - "transactional processing"
semantic_en: "Exposes mobile phone numbers for business partners, used when managing business partner data."
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
  - phone
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTMOBILEPHONENUMBERTP_3

**Business PartnerMOBILEPHONENUMBERTP 3**

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
| `AddressNumber` | ✓ | |  |  |  |  |
| `Person` | ✓ | |  |  |  |  |
| `OrdinalNumber` | ✓ | |  |  |  |  |
| `OrdinalNumberForEdit` |  | |  |  |  |  |
| `MobilePhoneCountry` |  | |  |  |  |  |
| `IsDefaultPhoneNumber` |  | |  |  |  |  |
| `MobilePhoneNumber` |  | |  |  |  |  |
| `CompleteTelephoneNumber` |  | |  |  |  |  |
| `PhoneNumberType` |  | |  |  |  |  |
| `TelephoneCountryPrefix` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
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
| `_PhoneNumberCountry` | | ✓ | | | | |
| `_PhoneNumberType` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_TelCountryPrefix` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Mobile Number'
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

define view entity I_BusPartMobilePhoneNumberTP_3   as projection on I_BusPartMobilePhoneNumberTP_2
{ 
  key BusinessPartner,
      @Search.defaultSearchElement: true
  key AddressNumber,
  key Person,
  key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      @ObjectModel.foreignKey.association: '_PhoneNumberCountry'
      MobilePhoneCountry,
      IsDefaultPhoneNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      MobilePhoneNumber,
      CompleteTelephoneNumber,
      @ObjectModel.foreignKey.association: '_PhoneNumberType'
      PhoneNumberType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      TelephoneCountryPrefix,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Valid From'
      ValidityStartDate,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Valid To'
      ValidityEndDate,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      
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
//      _BPDataControllerUsage,

      _PhoneNumberCountry,
      _PhoneNumberType,
      _AuthorizationGroup,
      
      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _TelCountryPrefix,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3
      
}
```
