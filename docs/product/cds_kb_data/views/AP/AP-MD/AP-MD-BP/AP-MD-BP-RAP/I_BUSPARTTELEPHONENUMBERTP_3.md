---
name: I_BUSPARTTELEPHONENUMBERTP_3
description: "Business PartnerTELEPHONENUMBERTP 3"
semantic_vi: "Chứa thông tin số điện thoại đối tác kinh doanh cho một địa chỉ và người cụ thể, được sử dụng khi quản lý dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "telephone number"
  - "số điện thoại"
  - "address"
  - "địa chỉ"
  - "person"
  - "người"
  - "sap"
  - "cds view"
  - "view"
  - "ap-md-bp-rap"
semantic_en: "Exposes business partner telephone numbers for a specific address and person, used when managing business partner data."
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
# I_BUSPARTTELEPHONENUMBERTP_3

**Business PartnerTELEPHONENUMBERTP 3**

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
| `DestinationLocationCountry` |  | |  |  |  |  |
| `TelephoneCountryPrefix` |  | |  |  |  |  |
| `IsDefaultPhoneNumber` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `PhoneNumberExtension` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `PhoneNumberType` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
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
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_TelCountryPrefix` | | ✓ | | | | |
| `_PhoneNumberCountry` | | ✓ | | | | |
| `_PhoneNumberType` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Telephone Number'
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

define view entity I_BusPartTelephoneNumberTP_3 as projection on I_BusPartTelephoneNumberTP_2
{
  key BusinessPartner,
      @Search.defaultSearchElement: true
  key AddressNumber,
  key Person,
  key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      @ObjectModel.foreignKey.association: '_PhoneNumberCountry'
      DestinationLocationCountry,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      TelephoneCountryPrefix,
      IsDefaultPhoneNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      PhoneNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      PhoneNumberExtension,
      InternationalPhoneNumber,
      @ObjectModel.foreignKey.association: '_PhoneNumberType'
      PhoneNumberType,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Validity Start Date'
      ValidityStartDate,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Validity End Date'
      ValidityEndDate, 
      
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

      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _TelCountryPrefix,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      
      _PhoneNumberCountry,
      _PhoneNumberType,
      _AuthorizationGroup
        //-- Data controller association        
      //_BPDataControllerUsage
}
```
