---
name: I_BUSPARTFAXNUMBERTP_3
description: "Business PartnerFAXNUMBERTP 3"
semantic_vi: "View Business Partner FAX NUMBER TP 3 hiển thị thông tin số fax cho đối tác kinh doanh, có thể sử dụng khi cập nhật hoặc xác thực dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "fax number"
  - "đối tác kinh doanh"
  - "số fax"
  - "cập nhật dữ liệu"
  - "xác thực dữ liệu"
  - "sap"
  - "ap-md-bp-rap"
  - "lob:other"
semantic_en: "The Business Partner FAX NUMBER TP 3 view exposes fax number information for business partners, which can be used when updating or validating business partner data."
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
# I_BUSPARTFAXNUMBERTP_3

**Business PartnerFAXNUMBERTP 3**

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
| `IsDefaultFaxNumber` |  | |  |  |  |  |
| `FaxCountry` |  | |  |  |  |  |
| `FaxNumber` |  | |  |  |  |  |
| `FaxNumberExtension` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
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
| `_BPProtectedAddress` | | ✓ | | | | |
| `_FaxCountryPrefix` | | ✓ | | | | |
| `_FaxNumberCountry` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Fax Number'
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

define view entity I_BusPartFaxNumberTP_3   as projection on I_BusPartFaxNumberTP_2
{
  key BusinessPartner,
  @Search.defaultSearchElement: true
  key AddressNumber,
  key Person,
  key OrdinalNumber,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      IsDefaultFaxNumber,
      @ObjectModel.foreignKey.association: '_FaxNumberCountry'
      FaxCountry,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      FaxNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      FaxNumberExtension,
      InternationalFaxNumber,
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
      /* Associations */
      _BPProtectedAddress,
      _FaxCountryPrefix,
      _FaxNumberCountry,
      _AuthorizationGroup,
     // _BPDataControllerUsage,

      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3
    
}
```
