---
name: I_BUSINESSPARTNERVH
description: "Business PartnerVH"
semantic_vi: "View Business PartnerVH cung cấp danh sách các đối tác kinh doanh cùng địa chỉ và tên liên quan, hữu ích cho việc hiển thị danh sách các đối tác trong chức năng giúp đỡ giá trị hoặc chức năng tìm kiếm."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "value help"
  - "giúp đỡ giá trị"
  - "search function"
  - "chức năng tìm kiếm"
  - "sap"
  - "ap-md-bp"
  - "business partner category"
  - "loại đối tác kinh doanh"
semantic_en: "The Business PartnerVH view provides a list of business partners with their associated addresses and names, useful for displaying a list of partners in a value help or search function."
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - value-help
  - business-partner
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERVH

**Business PartnerVH**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `FormOfAddressName` |  | | `_FormOfAddressText` | `FormOfAddressName` | `CHAR(30)` | Title text |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerIDByExtSystem` |  | |  |  | `CHAR(20)` | Business Partner Number in External System |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `OrganizationBPName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `GroupBusinessPartnerName1` |  | |  |  | `CHAR(40)` | Name 1 (group) |
| `BirthDate` |  | |  |  | `DATS(8)` | Date of Birth of Business Partner |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `_FormOfAddressText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FormOfAddressText` | `I_FormOfAddressText` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BusinessPartner' 

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.authorizationCheck: #CHECK
//<TODO> Please double-check personal data blocking
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Business Partner'
@Consumption.ranked: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerVH as select from I_BusinessPartner as BusinessPartner 
   association[1..1] to I_FormOfAddressText as _FormOfAddressText on $projection.FormOfAddress = _FormOfAddressText.FormOfAddress and
                                                                          _FormOfAddressText.Language = $session.system_language                                                                        
{  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'BusinessPartnerName' ]
      @UI.lineItem.importance: #HIGH
  key BusinessPartner.BusinessPartner,          
      @UI.hidden: true       
      BusinessPartner.FormOfAddress,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Title'
      @EndUserText.quickInfo: 'Title'
      @UI.lineItem.importance: #HIGH      
      _FormOfAddressText.FormOfAddressName,
      //@Search.defaultSearchElement: true
     // @Search.fuzzinessThreshold: 0.8
      //@Search.ranking: #LOW
      @EndUserText.label: 'Business Partner Name'
      @Consumption.filter.hidden: true
      @UI.lineItem.importance: #HIGH     
      BusinessPartner.BusinessPartnerName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Business Partner Category'
      @UI.lineItem.importance: #HIGH     
      BusinessPartner.BusinessPartnerCategory,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI.lineItem.importance: #HIGH
      BusinessPartner.BusinessPartnerIDByExtSystem,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'First Name'
      @UI.lineItem.importance: #HIGH
      BusinessPartner.FirstName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Last Name'
      @UI.lineItem.importance: #HIGH
      BusinessPartner.LastName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Organization Name 1'
      @UI.lineItem.importance: #HIGH
      BusinessPartner.OrganizationBPName1,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Group Name 1'
      @UI.lineItem.importance: #HIGH
      BusinessPartner.GroupBusinessPartnerName1,
      @UI.lineItem.importance: #HIGH
      BusinessPartner.BirthDate,
      
      @UI.hidden: true
      BusinessPartner.AuthorizationGroup,
      @UI.hidden: true
      BusinessPartner.IsBusinessPurposeCompleted,
      @UI.hidden: true
      BusinessPartner.DataControllerSet                           as DataControllerSet,
      @UI.hidden: true
      BusinessPartner.DataController1                             as DataController1,
      @UI.hidden: true
      BusinessPartner.DataController2                             as DataController2,
      @UI.hidden: true
      BusinessPartner.DataController3                             as DataController3,
      @UI.hidden: true
      BusinessPartner.DataController4                             as DataController4,
      @UI.hidden: true
      BusinessPartner.DataController5                             as DataController5,
      @UI.hidden: true
      BusinessPartner.DataController6                             as DataController6,
      @UI.hidden: true
      BusinessPartner.DataController7                             as DataController7,
      @UI.hidden: true
      BusinessPartner.DataController8                             as DataController8,
      @UI.hidden: true
      BusinessPartner.DataController9                             as DataController9,
      @UI.hidden: true
      BusinessPartner.DataController10                            as DataController10,
       @Consumption.filter.hidden: true
      _FormOfAddressText
      
      
}
```
