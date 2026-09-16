---
name: I_BUSPARTWEBSITETP_3
description: "Business PartnerWEBSITETP 3"
semantic_vi: "View Business Partner WEBSITETP 3 hiển thị thông tin trang web đối tác kinh doanh, có liên quan khi quản lý dữ liệu đối tác kinh doanh trong thành phần AP-MD-BP-RAP."
keywords:
  - "business partner"
  - "website"
  - "ap-md-bp-rap"
  - "transactional processing"
  - "interface view"
  - "lob other"
  - "data controller"
  - "address number"
  - "person"
  - "ordinal number"
  - "default url address"
  - "search url address"
semantic_en: "The Business Partner WEBSITETP 3 view exposes business partner website information, which is relevant when managing business partner data in the AP-MD-BP-RAP component."
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
# I_BUSPARTWEBSITETP_3

**Business PartnerWEBSITETP 3**

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
| `IsDefaultURLAddress` |  | |  |  |  |  |
| `SearchURLAddress` |  | |  |  |  |  |
| `URLFieldLength` |  | |  |  |  |  |
| `WebsiteURL` |  | |  |  |  |  |
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
| `_BPProtectedAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'WebsiteURL'
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
@AbapCatalog.viewEnhancementCategory: [ #NONE ]
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusPartWebsiteTP_3 
as projection on I_BusPartWebsiteURLTP_2
{
  key     BusinessPartner,
  key     AddressNumber,
  key     Person,
  key     OrdinalNumber,
          IsDefaultURLAddress,
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #HIGH
          SearchURLAddress,
          @EndUserText.label: 'Website URL Length'
          URLFieldLength,
          @EndUserText.label: 'Website URL'
          WebsiteURL,
          
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
          _BusinessPartner : redirected to I_BusinessPartnerTP_3,
          _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
          @ObjectModel.foreignKey.association: '_AuthorizationGroup'
          AuthorizationGroup,
          @Semantics.booleanIndicator
          IsBusinessPurposeCompleted,
          
          _AuthorizationGroup
//          _BPDataControllerUsage
}
```
