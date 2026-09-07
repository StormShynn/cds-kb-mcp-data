---
name: I_BUSINESSPARTNERTAXNUMBERTP_3
description: "Business PartnerTAXNUMBERTP 3"
semantic_vi: "View Business Partner TAX NUMBER TP 3 hiển thị dữ liệu số thuế đối tác kinh doanh để sử dụng trong xử lý giao dịch và chỉnh sửa dữ liệu."
keywords:
  - "business partner"
  - "tax number"
  - "transactional processing"
  - "data editing"
  - "ap-md-bp-rap"
  - "lob other"
  - "bo businesspartner"
  - "partner tax"
  - "sap cds view"
semantic_en: "The Business Partner TAX NUMBER TP 3 view exposes business partner tax number data for use in transactional processing and data editing."
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
  - tax
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTAXNUMBERTP_3

**Business PartnerTAXNUMBERTP 3**

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
| `BPTaxType` | ✓ | |  |  |  |  |
| `BPTaxNumber` |  | |  |  |  |  |
| `BPTaxLongNumber` |  | |  |  |  |  |
| `BPTaxNumberForEditValue` |  | |  |  |  |  |
| `BPTaxTypeForEditValue` |  | |  |  |  |  |
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
| `_BusinessPartnerTaxType` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner Tax Number'
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

define view entity I_BusinessPartnerTaxNumberTP_3 
as projection on I_BusinessPartnerTaxNumberTP_2
{ 
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_BusinessPartnerTaxType'
      @Search.defaultSearchElement: true
  key BPTaxType,
      @EndUserText.label: 'Tax Category Description'
      BPTaxNumber,
      BPTaxLongNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      BPTaxNumberForEditValue,
      @ObjectModel.editableFieldFor: 'BPTaxType'
      BPTaxTypeForEditValue,
      
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
      
      _BusinessPartnerTaxType,

      _BusinessPartner : redirected to parent I_BusinessPartnerTP_3
//      _BPDataControllerUsage
      
}
```
