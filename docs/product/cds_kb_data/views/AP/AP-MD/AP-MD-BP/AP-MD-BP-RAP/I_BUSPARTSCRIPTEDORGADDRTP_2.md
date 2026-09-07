---
name: I_BUSPARTSCRIPTEDORGADDRTP_2
description: "Business PartnerSCRIPTEDORGADDRTP 2"
semantic_vi: "Chứa dữ liệu địa chỉ tổ chức được lập trình cho đối tác kinh doanh, hữu ích cho các giao dịch liên quan đến địa chỉ đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "address"
  - "địa chỉ"
  - "scripted organization"
  - "tổ chức được lập trình"
  - "transactional processing"
  - "xử lý giao dịch"
  - "sap"
  - "ap-md-bp-rap"
semantic_en: "Exposes business partner scripted organization address data, useful for transactions involving business partner addresses."
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
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTSCRIPTEDORGADDRTP_2

**Business PartnerSCRIPTEDORGADDRTP 2**

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
| `AddressRepresentationCode` | ✓ | |  |  |  |  |
| `AddrRepCodeForEditValue` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `BusinessPartnerAddressUUID` |  | |  |  |  |  |
| `CareOfName` |  | |  |  |  |  |
| `AdditionalStreetSuffixName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `PrfrdCommMediumType` |  | |  |  |  |  |
| `POBoxLobbyName` |  | |  |  |  |  |
| `AddressTimeZone` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `District` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `HomeCityName` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName` |  | |  |  |  |  |
| `AdditionalStreetPrefixName` |  | |  |  |  |  |
| `StreetSuffixName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `Building` |  | |  |  |  |  |
| `Floor` |  | |  |  |  |  |
| `RoomNumber` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `BPCountyText` |  | |  |  |  |  |
| `FormattedAddress` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `BusinessPartnerName1` |  | |  |  |  |  |
| `BusinessPartnerName2` |  | |  |  |  |  |
| `BusinessPartnerName3` |  | |  |  |  |  |
| `BusinessPartnerName4` |  | |  |  |  |  |
| `SearchTerm1` |  | |  |  |  |  |
| `SearchTerm2` |  | |  |  |  |  |
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
| `BPAddressIsProtected` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_AddressRepresentation` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'BP Scripted Org address'
@AccessControl.authorizationCheck: #MANDATORY
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

define view entity I_BusPartScriptedOrgAddrTP_2 
    as projection on I_BusPartScriptedOrgAddressTP
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BusinessPartner,
      @Search.defaultSearchElement: true
  key AddressNumber,
      @ObjectModel.foreignKey.association: '_AddressRepresentation'
  key AddressRepresentationCode,
      AddrRepCodeForEditValue,
      @EndUserText.label: 'Valid From'
      ValidityStartDate,
      @EndUserText.label: 'Valid To'
      ValidityEndDate,
      @EndUserText.label: 'Address GUID'
      BusinessPartnerAddressUUID,
      CareOfName,
      AdditionalStreetSuffixName,
      CorrespondenceLanguage,
      PrfrdCommMediumType,
      POBoxLobbyName,
      AddressTimeZone,
      FullName,
      CityName,
      @API.element: { releaseState: #DEPRECATED, successor: 'DistrictName' }
      District,
      DistrictName,
      //      CityCode,
      HomeCityName,
      StreetName,
      StreetPrefixName,
      AdditionalStreetPrefixName,
      StreetSuffixName,
      HouseNumber,
      HouseNumberSupplementText,
      Building,
      Floor,
      RoomNumber,
      @API.element: { releaseState: #DEPRECATED, successor: 'BPCountyText' }
      County,
      BPCountyText,
      //      CountyCode,
      @EndUserText.label: 'Formatted Address'
      FormattedAddress,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      FormOfAddress,
      BusinessPartnerName1,
      BusinessPartnerName2,
      BusinessPartnerName3,
      BusinessPartnerName4,
      SearchTerm1,
      SearchTerm2,
      
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

      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      _BPProtectedAddress,
      _AddressRepresentation,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      BPAddressIsProtected,
      
      _FormOfAddress,
      _AuthorizationGroup
      //_BPDataControllerUsage
}
```
