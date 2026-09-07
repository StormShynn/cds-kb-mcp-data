---
name: I_BUSINESSPARTNERADDRESSTP_3
description: "Business PartnerADDRESSTP 3"
semantic_vi: "Chứa thông tin địa chỉ đối tác kinh doanh cho xử lý giao dịch, bao gồm các trường khóa chính và xác thực."
keywords:
  - "business partner"
  - "address"
  - "transactional processing"
  - "partner"
  - "address id"
  - "business partner address"
  - "sap"
  - "ap-md-bp-rap"
  - "business partner address uuid"
  - "validity start date"
  - "validity end date"
semantic_en: "Exposes business partner addresses for transactional processing, including key fields for identification and validation."
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
  - address
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSTP_3

**Business PartnerADDRESSTP 3**

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
| `AddressIDForEdit` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `CareOfName` |  | |  |  |  |  |
| `StreetPrefixName` |  | |  |  |  |  |
| `AdditionalStreetPrefixName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `StreetSuffixName` |  | |  |  |  |  |
| `AdditionalStreetSuffixName` |  | |  |  |  |  |
| `HomeCityName` |  | |  |  |  |  |
| `District` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `CompanyPostalCode` |  | |  |  |  |  |
| `DeliveryServiceTypeCode` |  | |  |  |  |  |
| `DeliveryServiceNumber` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxIsWithoutNumber` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `POBoxLobbyName` |  | |  |  |  |  |
| `POBoxDeviatingCityName` |  | |  |  |  |  |
| `POBoxDeviatingRegion` |  | |  |  |  |  |
| `POBoxDeviatingCountry` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `AddressLine1Text` |  | |  |  |  |  |
| `FormattedAddress` |  | |  |  |  |  |
| `CompleteAddress` |  | |  |  |  |  |
| `BPAddressIsProtected` |  | |  |  |  |  |
| `StandardUsage` |  | |  |  |  |  |
| `AddressNonDeliverableReason` |  | |  |  |  |  |
| `PostBoxNonDeliverableReason` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `BPCountyText` |  | |  |  |  |  |
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
| `_BPProtectedAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddressUsage` | | ✓ | | | | |
| `_BusinessPartnerPhoneNumber` | | ✓ | | | | |
| `_BusPartMobileNumber` | | ✓ | | | | |
| `_BusPartFaxNumber` | | ✓ | | | | |
| `_BusinessPartnerEmailAddress` | | ✓ | | | | |
| `_BusPartWebsiteURL` | | ✓ | | | | |
| `_BusPartScriptedOrgAddress` | | ✓ | | | | |
| `_BusPartScriptedPersonAddress` | | ✓ | | | | |
| `_BusPartScriptedGroupAddress` | | ✓ | | | | |
| `_StandardPhoneNumber` | | ✓ | | | | |
| `_StandardMobileNumber` | | ✓ | | | | |
| `_StandardFaxNumber` | | ✓ | | | | |
| `_StandardEmailAddress` | | ✓ | | | | |
| `_StandardWebsiteURL` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Address'
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

define view entity I_BusinessPartnerAddressTP_3
  as projection on I_BusinessPartnerAddressTP_2 
  {
   @Search.defaultSearchElement: true
   key BusinessPartner,
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH 
   key AddressNumber,
   @ObjectModel.editableFieldFor: 'AddressNumber'
   AddressIDForEdit,
   BusinessPartnerAddressUUID,
   @EndUserText.label: 'ValidityStartDate'
   @Semantics.businessDate.from: true
   ValidityStartDate,
   @EndUserText.label: 'ValidityEndDate'
   @Semantics.businessDate.to: true
   ValidityEndDate,
   CareOfName,
   StreetPrefixName,
   AdditionalStreetPrefixName,
   HouseNumber,
   StreetName,
   HouseNumberSupplementText,
   StreetSuffixName,
   AdditionalStreetSuffixName,
   HomeCityName,
   @API.element: { releaseState: #DEPRECATED, successor: 'DistrictName' }
   District,
   DistrictName,
   PostalCode,
   CityName,
   Country,
   Region,
   AddressTimeZone,
   TransportZone,
   TaxJurisdiction,
   CompanyPostalCode,
   DeliveryServiceTypeCode,
   DeliveryServiceNumber,
   POBox,
   POBoxIsWithoutNumber,
   POBoxPostalCode,
   POBoxLobbyName,
   POBoxDeviatingCityName,
   POBoxDeviatingRegion,
   POBoxDeviatingCountry,
   CorrespondenceLanguage,
   PrfrdCommMediumType,
   @EndUserText.label: 'AddressLine1Text'
   AddressLine1Text,
   @EndUserText.label: 'FormattedAddress'
   FormattedAddress,
   @EndUserText.label: 'CompleteAddress'
   CompleteAddress,
   BPAddressIsProtected, 
   StandardUsage,
   AddressNonDeliverableReason,
   PostBoxNonDeliverableReason,
   Building,
   Floor,
   RoomNumber,
   @API.element: { releaseState: #DEPRECATED, successor: 'BPCountyText' }
   County, 
   BPCountyText,
   
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
   _BPProtectedAddress,
   _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
   _BusinessPartnerAddressUsage : redirected to composition child I_BusinessPartnerAddrUsageTP_3,
   _BusinessPartnerPhoneNumber : redirected to composition child I_BusPartTelephoneNumberTP_3,
   _BusPartMobileNumber : redirected to composition child I_BusPartMobilePhoneNumberTP_3, 
   _BusPartFaxNumber : redirected to composition child I_BusPartFaxNumberTP_3,
   _BusinessPartnerEmailAddress : redirected to composition child I_BusPartEmailAddressTP_3,
   _BusPartWebsiteURL : redirected to composition child I_BusPartWebsiteTP_3,
   _BusPartScriptedOrgAddress : redirected to composition child I_BusPartScriptedOrgAddrTP_2,
   _BusPartScriptedPersonAddress : redirected to composition child I_BusPartScriptPersonAddrTP_2,
   _BusPartScriptedGroupAddress : redirected to composition child I_BusPartScriptGroupAddrTP_2,
   _StandardPhoneNumber : redirected to I_BusPartTelephoneNumberTP_3, 
   _StandardMobileNumber : redirected to I_BusPartMobilePhoneNumberTP_3, 
   _StandardFaxNumber : redirected to I_BusPartFaxNumberTP_3, 
   _StandardEmailAddress : redirected to I_BusPartEmailAddressTP_3, 
   _StandardWebsiteURL : redirected to I_BusPartWebsiteTP_3, 
   _CountryText
//   _BPDataControllerUsage
}
```
