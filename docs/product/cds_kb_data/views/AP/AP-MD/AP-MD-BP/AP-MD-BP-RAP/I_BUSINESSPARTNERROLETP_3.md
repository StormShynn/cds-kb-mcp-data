---
name: I_BUSINESSPARTNERROLETP_3
description: "Business PartnerROLETP 3"
semantic_vi: "Chứa thông tin về vai trò của đối tác kinh doanh và dữ liệu liên quan, được sử dụng để quản lý mối quan hệ và giao dịch đối tác kinh doanh."
keywords:
  - "business partner"
  - "partner"
  - "role"
  - "transactional processing"
  - "business partner role"
  - "ap-md-bp-rap"
  - "sap"
  - "lob other"
  - "bo business partner"
semantic_en: "Exposes business partner roles and their associated data, used for managing business partner relationships and transactions."
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
# I_BUSINESSPARTNERROLETP_3

**Business PartnerROLETP 3**

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
| `BusinessPartnerRole` | ✓ | |  |  |  |  |
| `ValidFrom` |  | |  |  |  |  |
| `ValidTo` |  | |  |  |  |  |
| `BusinessPartnerRoleForEdit` |  | |  |  |  |  |
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
| `_BusinessPartner` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |
| `_BusinessPartnerRoleVH` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Roles'
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

define view entity I_BusinessPartnerRoleTP_3 
as projection on I_BusinessPartnerRoleTP_2
{
  @Search.defaultSearchElement: true
  @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessPartnerVH',
                     element: 'BusinessPartner' }
        }]
   @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BusinessPartnerRoleVH'
  key BusinessPartnerRole,
      @EndUserText.label: 'ValidFrom'
      @Semantics.businessDate.from: true
      ValidFrom,
      @EndUserText.label: 'ValidTo'
      @Semantics.businessDate.to: true
      ValidTo,
      @ObjectModel.editableFieldFor: 'BusinessPartnerRole'
      BusinessPartnerRoleForEdit,
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
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3,
      _AuthorizationGroup,
      _BusinessPartnerRoleVH
//      _BPDataControllerUsage

}
```
