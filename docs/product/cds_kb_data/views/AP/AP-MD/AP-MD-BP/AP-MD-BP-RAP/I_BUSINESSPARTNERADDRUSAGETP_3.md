---
name: I_BUSINESSPARTNERADDRUSAGETP_3
description: "Business PartnerADDRUSAGETP 3"
semantic_vi: "Chứa thông tin địa chỉ đối tác kinh doanh được sử dụng cho các mục đích cụ thể như giao hàng hoặc hóa đơn, cùng với các ngày hiệu lực và loại sử dụng."
keywords:
  - "business partner"
  - "address"
  - "usage"
  - "validity date"
  - "sap"
  - "ap-md-bp"
  - "rap"
  - "transactional processing"
  - "partner"
  - "đối tác kinh doanh"
  - "địa chỉ"
  - "sử dụng"
semantic_en: "Exposes business partner addresses used for specific purposes, such as shipping or billing, along with their validity dates and usage types."
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRUSAGETP_3

**Business PartnerADDRUSAGETP 3**

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
| `AddressUsage` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `AddressUsageForEditValue` |  | |  |  |  |  |
| `ValidityEndDateForEdit` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `StandardUsage` |  | |  |  |  |  |
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
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `BPAddressIsProtected` |  | |  |  |  |  |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_AddressType` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Address Usage'
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

define view entity I_BusinessPartnerAddrUsageTP_3
  as projection on I_BusinessPartnerAddrUsageTP_2
{
      @Search.defaultSearchElement: true
  key BusinessPartner,
  key AddressNumber,
      @ObjectModel.foreignKey.association: '_AddressType'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AddressUsage,
      @Semantics.businessDate.to: true
      @EndUserText.label: 'Valid To'
  key ValidityEndDate,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      AddressUsageForEditValue,
      @ObjectModel.editableFieldFor: 'ValidityEndDate'
      @Semantics.businessDate.to: true
      ValidityEndDateForEdit,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Valid From'
      ValidityStartDate,
      @Semantics.booleanIndicator
      StandardUsage,
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

      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      _BusinessPartner        : redirected to I_BusinessPartnerTP_3,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      _AddressType,
      BPAddressIsProtected
      //      _BPDataControllerUsage
}
```
