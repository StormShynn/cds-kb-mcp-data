---
name: I_BUSPARTIDENTIFICATIONTP_3
description: "Business PartnerIDENTIFICATIONTP 3"
semantic_vi: "Chứa thông tin xác định đối tác kinh doanh, bao gồm loại, số, tổ chức cấp và ngày hiệu lực, cho việc quản lý đối tác kinh doanh và xử lý giao dịch."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "identification"
  - "xác định"
  - "transactional processing"
  - "xử lý giao dịch"
  - "sap"
  - "ap-md-bp-rap"
semantic_en: "Exposes business partner identification information, including type, number, issuing institute, and validity dates, for use in business partner management and transactional processing."
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
# I_BUSPARTIDENTIFICATIONTP_3

**Business PartnerIDENTIFICATIONTP 3**

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
| `BPIdentificationType` | ✓ | |  |  |  |  |
| `BPIdentificationNumber` | ✓ | |  |  |  |  |
| `BPIdnNmbrIssuingInstitute` |  | |  |  |  |  |
| `BPIdentificationEntryDate` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `BusinessPartnerCategory` |  | |  |  |  |  |
| `BPIdnTypeForEditValue` |  | |  |  |  |  |
| `BPIdnNumberForEditValue` |  | |  |  |  |  |
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
| `_BuPaIdentificationType` | | ✓ | | | | |
| `_BusinessPartnerCategory` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Identification'
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

define view entity I_BusPartIdentificationTP_3  
as projection on I_BusPartIdentificationTP_2
{
      @Search.defaultSearchElement: true
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
  key BPIdentificationType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key BPIdentificationNumber,
      BPIdnNmbrIssuingInstitute,
      BPIdentificationEntryDate,
      Country,
      Region,
      ValidityStartDate,
      ValidityEndDate,
      AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_BusinessPartnerCategory'
      BusinessPartnerCategory,
      @ObjectModel.editableFieldFor: 'BPIdentificationType'
      @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
      BPIdnTypeForEditValue,
      @ObjectModel.editableFieldFor: 'BPIdentificationNumber'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BPIdnNumberForEditValue,
      
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
      
      _BuPaIdentificationType,
      _BusinessPartnerCategory,
      
      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3
//      _BPDataControllerUsage

}
```
