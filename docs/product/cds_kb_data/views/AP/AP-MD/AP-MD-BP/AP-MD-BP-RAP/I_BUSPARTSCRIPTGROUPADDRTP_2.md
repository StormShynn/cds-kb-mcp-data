---
name: I_BUSPARTSCRIPTGROUPADDRTP_2
description: "Business PartnerSCRIPTGROUPADDRTP 2"
semantic_vi: "Chứa thông tin địa chỉ nhóm kịch bản đối tác kinh doanh, được sử dụng trong quá trình xử lý giao dịch trong thành phần AP-MD-BP-RAP."
keywords:
  - "business partner"
  - "script group address"
  - "transactional processing"
  - "ap-md-bp-rap"
  - "address"
  - "partner"
  - "script"
  - "group"
  - "address representation code"
  - "correspondence language"
semantic_en: "Exposes business partner script group addresses, used for transactional processing in the AP-MD-BP-RAP component."
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
# I_BUSPARTSCRIPTGROUPADDRTP_2

**Business PartnerSCRIPTGROUPADDRTP 2**

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
| `FormattedAddress` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `BusinessPartnerName1` |  | |  |  |  |  |
| `BusinessPartnerName2` |  | |  |  |  |  |
| `SearchTerm1` |  | |  |  |  |  |
| `SearchTerm2` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `BPAddressIsProtected` |  | |  |  |  |  |
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
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_AddressRepresentation` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Scripted Group address'
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

define view entity I_BusPartScriptGroupAddrTP_2  
as projection on I_BusPartScriptedGroupAddrTP
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
      @EndUserText.label: 'Validity Start Date'
      ValidityStartDate,
      @EndUserText.label: 'Validity End Date'
      ValidityEndDate,
      @EndUserText.label: 'Business Partner Address'
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
       @EndUserText.label: 'Address'
      FormattedAddress,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
      FormOfAddress,
      BusinessPartnerName1,
      BusinessPartnerName2,
      SearchTerm1,
      SearchTerm2,
      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      _BPProtectedAddress,
      _AddressRepresentation,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      BPAddressIsProtected,
      
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
      
      _FormOfAddress,
      _AuthorizationGroup
      //_BPDataControllerUsage
}
```
