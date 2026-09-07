---
name: I_BUSINESSUSERBASIC
description: "Businessuserbasic"
semantic_vi: "View Businessuserbasic cung cấp thông tin cơ bản về người dùng kinh doanh, bao gồm tên, địa chỉ và thông tin liên hệ. Nó được sử dụng để lấy và hiển thị dữ liệu người dùng trong các ứng dụng kinh doanh khác nhau."
keywords:
  - "business user"
  - "business partner"
  - "business user basic"
  - "business partner basic"
  - "sap cds view"
  - "interface view"
  - "basis components"
  - "lob basis components"
  - "business user data"
  - "thông tin người dùng kinh doanh"
semantic_en: "The Businessuserbasic view provides basic information about business users, including their names, addresses, and contact details. It is used to retrieve and display user data in various business applications."
app_component: BC-SRV-BUM
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
  - BC
  - BC-SRV
  - BC-SRV-BUM
  - interface-view
  - component:BC-SRV-BUM
  - lob:Basis Components
---
# I_BUSINESSUSERBASIC

**Businessuserbasic**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
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
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `partner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerUUID` |  | | `_BusinessPartner` | `partner_guid` | `RAW(16)` | Business Partner GUID |
| `LastName` |  | | `_BusinessPartner` | `name_last` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FirstName` |  | | `_BusinessPartner` | `name_first` | `CHAR(40)` | First Name of Business Partner (Person) |
| `PersonFullName` |  | |  | `cast( usr21.techdesc as vdm_userdescription preserving type )` | `CHAR(80)` | User Description |
| `FormOfAddress` |  | | `_BusinessPartner` | `title` | `CHAR(4)` | Form-of-Address Key |
| `AcademicTitle` |  | | `_BusinessPartner` | `title_aca1` | `CHAR(4)` | Academic Title: Key |
| `AcademicSecondTitle` |  | | `_BusinessPartner` | `title_aca2` | `CHAR(4)` | Second academic title (key) |
| `CorrespondenceLanguage` |  | | `_BusinessPartner` | `langu_corr` | `LANG(1)` | Business Partner: Correspondence Language |
| `MiddleName` |  | | `_BusinessPartner` | `namemiddle` | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `AdditionalLastName` |  | | `_BusinessPartner` | `name_lst2` | `CHAR(40)` | Other Last Name of a Person |
| `BirthName` |  | | `_BusinessPartner` | `name_last2` | `CHAR(40)` | Name at birth of business partner |
| `NickName` |  | | `_BusinessPartner` | `nickname` | `CHAR(40)` | Nickname of Business Partner (Person) |
| `Initials` |  | | `_BusinessPartner` | `initials` | `CHAR(10)` | "Middle Initial" or personal initials |
| `LastNamePrefix` |  | | `_BusinessPartner` | `prefix1` | `CHAR(4)` | Name Prefix (Key) |
| `LastNameSecondPrefix` |  | | `_BusinessPartner` | `prefix2` | `CHAR(4)` | 2nd name prefix (key) |
| `NameSupplement` |  | | `_BusinessPartner` | `title_royl` | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `UserID` |  | |  | `cast( usr21.bname as vdm_userid preserving type )` | `CHAR(12)` | User ID |
| `IsMarkedForArchiving` |  | | `_BusinessPartner` | `xdele` | `CHAR(1)` | Central Archiving Flag |
| `BusinessPartnerIsBlocked` |  | | `_BusinessPartner` | `xblck` | `CHAR(1)` | Central Block for Business Partner |
| `CreatedByUser` |  | | `_BusinessPartner` | `crusr` | `CHAR(12)` | User who created the object |
| `CreationDate` |  | | `_BusinessPartner` | `crdat` | `DATS(8)` | Date on which the object was created |
| `CreationTime` |  | | `_BusinessPartner` | `crtim` | `TIMS(6)` | Time at which the object was created |
| `LastChangedByUser` |  | | `_BusinessPartner` | `chusr` | `CHAR(12)` | Last user to change object |
| `LastChangeDate` |  | | `_BusinessPartner` | `chdat` | `DATS(8)` | Date when object was last changed |
| `LastChangeTime` |  | | `_BusinessPartner` | `chtim` | `TIMS(6)` | Time at which object was last changed |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartner` | `xpcpt` | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `augrp` | `CHAR(4)` | Authorization Group |
| `DataControllerSet` |  | | `_BusinessPartner` | `xdcset` | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | | `_BusinessPartner` | `data_ctrlr1` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | | `_BusinessPartner` | `data_ctrlr2` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | | `_BusinessPartner` | `data_ctrlr3` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | | `_BusinessPartner` | `data_ctrlr4` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | | `_BusinessPartner` | `data_ctrlr5` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | | `_BusinessPartner` | `data_ctrlr6` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | | `_BusinessPartner` | `data_ctrlr7` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | | `_BusinessPartner` | `data_ctrlr8` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | | `_BusinessPartner` | `data_ctrlr9` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | | `_BusinessPartner` | `data_ctrlr10` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `_User` | | ✓ | | | | |
| `_WorkplaceAddress` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_BusinessPartnerExternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [0..1] |
| `_WorkplaceAddress` | `I_WorkplaceAddress` | [0..1] |
| `_BusinessPartnerRole` | `I_BPUsrRole` | [0..*] |
| `_BusinessPartnerExternalID` | `I_BPUsrExternalID` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User Basic'
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations: ['_User']
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
//@ObjectModel.alternativeKey: [ { id : 'BusinessPartnerUUID', uniqueness: #UNIQUE, element: ['BusinessPartnerUUID'] },
//                               { id : 'UserID', uniqueness: #UNIQUE, element: ['UserID'] } ]
@AbapCatalog.entityBuffer.definitionAllowed: true
@Metadata.ignorePropagatedAnnotations:true
define view entity I_BusinessUserBasic
  as select from but000 as _BusinessPartner
    inner join   usr21 on _BusinessPartner.partner_guid = usr21.bpperson
                       and(
                         usr21.idadtype                 = '02'
                         or usr21.idadtype              = '04'
                       )
  association [0..1] to I_User             as _User                      on $projection.UserID = _User.UserID
  association [0..1] to I_WorkplaceAddress as _WorkplaceAddress          on $projection.BusinessPartnerUUID = _WorkplaceAddress.BusinessPartnerUUID
  association [0..*] to I_BPUsrRole        as _BusinessPartnerRole       on $projection.BusinessPartner = _BusinessPartnerRole.BusinessPartner
  association [0..*] to I_BPUsrExternalID  as _BusinessPartnerExternalID on $projection.BusinessPartner = _BusinessPartnerExternalID.BusinessPartner
{
      @ObjectModel.text.element: ['PersonFullName']
  key _BusinessPartner.partner                          as BusinessPartner,
      _BusinessPartner.partner_guid                     as BusinessPartnerUUID,
      _BusinessPartner.name_last                        as LastName,
      _BusinessPartner.name_first                       as FirstName,
      @Semantics.text: true
      cast( usr21.techdesc as vdm_userdescription preserving type ) as PersonFullName,
      _BusinessPartner.title                            as FormOfAddress,
      _BusinessPartner.title_aca1                       as AcademicTitle,
      _BusinessPartner.title_aca2                       as AcademicSecondTitle,
      _BusinessPartner.langu_corr                       as CorrespondenceLanguage,
      _BusinessPartner.namemiddle                       as MiddleName,
      _BusinessPartner.name_lst2                        as AdditionalLastName,
      _BusinessPartner.name_last2                       as BirthName,
      _BusinessPartner.nickname                         as NickName,
      _BusinessPartner.initials                         as Initials,
      _BusinessPartner.prefix1                          as LastNamePrefix,
      _BusinessPartner.prefix2                          as LastNameSecondPrefix,
      _BusinessPartner.title_royl                       as NameSupplement,
      @ObjectModel.text.element: ['PersonFullName']
      cast( usr21.bname as vdm_userid preserving type ) as UserID,
      _BusinessPartner.xdele                            as IsMarkedForArchiving,
      _BusinessPartner.xblck                            as BusinessPartnerIsBlocked,
      _BusinessPartner.crusr                            as CreatedByUser,
      _BusinessPartner.crdat                            as CreationDate,
      _BusinessPartner.crtim                            as CreationTime,
      _BusinessPartner.chusr                            as LastChangedByUser,
      _BusinessPartner.chdat                            as LastChangeDate,
      _BusinessPartner.chtim                            as LastChangeTime,
      _BusinessPartner.xpcpt                            as IsBusinessPurposeCompleted,
      _BusinessPartner.augrp                            as AuthorizationGroup,
      @Consumption.hidden:true
      _BusinessPartner.xdcset                           as DataControllerSet,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr1                      as DataController1,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr2                      as DataController2,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr3                      as DataController3,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr4                      as DataController4,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr5                      as DataController5,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr6                      as DataController6,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr7                      as DataController7,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr8                      as DataController8,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr9                      as DataController9,
      @Consumption.hidden:true
      _BusinessPartner.data_ctrlr10                     as DataController10,
      _User,
      _WorkplaceAddress,
      _BusinessPartnerRole,
      _BusinessPartnerExternalID
}
where
  _BusinessPartner.type = '1' // 1 - PERSON
```
