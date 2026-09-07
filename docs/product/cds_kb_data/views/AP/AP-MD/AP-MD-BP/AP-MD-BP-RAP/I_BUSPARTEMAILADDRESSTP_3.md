---
name: I_BUSPARTEMAILADDRESSTP_3
description: "Business PartnerEMAILADDRESSTP 3"
semantic_vi: "View EMAILADDRESSTP 3 của Đối tác Kinh doanh hiển thị địa chỉ email liên quan đến đối tác kinh doanh, bao gồm ngày bắt đầu và kết thúc có hiệu lực. Nó được sử dụng để quản lý và xác minh địa chỉ email cho đối tác kinh doanh trong quá trình xử lý giao dịch."
keywords:
  - "business partner"
  - "email address"
  - "transactional processing"
  - "validity date"
  - "đối tác kinh doanh"
  - "địa chỉ email"
  - "quá trình giao dịch"
  - "ngày có hiệu lực"
semantic_en: "The Business Partner EMAILADDRESSTP 3 view exposes email addresses associated with business partners, including their validity start and end dates. It is used to manage and validate email addresses for business partners in transactional processing."
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
  - workflow
  - business-partner
  - address
  - email
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTEMAILADDRESSTP_3

**Business PartnerEMAILADDRESSTP 3**

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
| `OrdinalNumber` | ✓ | |  |  |  |  |
| `Person` | ✓ | |  |  |  |  |
| `OrdinalNumberForEdit` |  | |  |  |  |  |
| `IsDefaultEmailAddress` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `IsHomeEmailAddress` |  | |  |  |  |  |
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
| `_BPProtectedAddress` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'BP Email Address'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XXL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER], 
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BusPartEmailAddressTP_3 as projection on I_BusPartEmailAddressTP_2
{
  key BusinessPartner,
  key AddressNumber,
  key OrdinalNumber,
  key Person,
      @ObjectModel.editableFieldFor: 'OrdinalNumber'
      OrdinalNumberForEdit,
      IsDefaultEmailAddress,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      EmailAddress,
      IsHomeEmailAddress,
      @Semantics.businessDate.from: true
      @EndUserText.label: 'Valid From'
      ValidityStartDate,
      @Semantics.businessDate.to: true
      @EndUserText.label: 'Valid To'
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

      /* Associations */
      _BPProtectedAddress,
//      _BPDataControllerUsage,
      _BusinessPartner : redirected to I_BusinessPartnerTP_3,
      _BusinessPartnerAddress : redirected to parent I_BusinessPartnerAddressTP_3,
      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
       AuthorizationGroup,
      @Semantics.booleanIndicator
      IsBusinessPurposeCompleted,
      
      _AuthorizationGroup
}
```
