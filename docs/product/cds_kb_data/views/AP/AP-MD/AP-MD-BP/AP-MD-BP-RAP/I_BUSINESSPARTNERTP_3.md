---
name: I_BUSINESSPARTNERTP_3
description: "Business PartnerTP 3"
semantic_vi: "View Business Partner TP 3 hiển thị dữ liệu đối tác kinh doanh cho xử lý giao dịch, bao gồm các trường khóa chính như ID đối tác kinh doanh và tên, và được sử dụng trong thành phần AP-MD-BP-RAP."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "ap-md-bp-rap"
  - "transactional processing"
  - "xử lý giao dịch"
  - "business partner id"
  - "id đối tác kinh doanh"
  - "business partner name"
  - "tên đối tác kinh doanh"
semantic_en: "The Business Partner TP 3 view exposes business partner data for transactional processing, including key fields such as business partner ID and name, and is used in the AP-MD-BP-RAP component."
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
# I_BUSINESSPARTNERTP_3

**Business PartnerTP 3**

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
| `BusinessPartnerUUID` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `BusinessPartnerForEdit` |  | |  |  |  |  |
| `BusinessPartnerGrouping` |  | |  |  |  |  |
| `BusinessPartnerCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `FormOfAddressPerson` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `LastName` |  | |  |  |  |  |
| `AdditionalLastName` |  | |  |  |  |  |
| `BusinessPartnerBirthName` |  | |  |  |  |  |
| `MiddleName` |  | |  |  |  |  |
| `AcademicTitle` |  | |  |  |  |  |
| `AcademicTitle2` |  | |  |  |  |  |
| `BusinessPartnerSupplementName` |  | |  |  |  |  |
| `LastNamePrefix` |  | |  |  |  |  |
| `LastNameSecondPrefix` |  | |  |  |  |  |
| `PersonFullName` |  | |  |  |  |  |
| `BusinessPartnerNicknameLabel` |  | |  |  |  |  |
| `Initials` |  | |  |  |  |  |
| `IsNaturalPerson` |  | |  | `cast( IsNaturalPerson as boole_d preserving type )` |  |  |
| `Language` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `BirthDate` |  | |  |  |  |  |
| `BusinessPartnerBirthplaceName` |  | |  |  |  |  |
| `BusinessPartnerBirthDateStatus` |  | |  |  |  |  |
| `BusinessPartnerDeathDate` |  | |  |  |  |  |
| `BusinessPartnerOccupation` |  | |  |  |  |  |
| `BusPartNationality` |  | |  |  |  |  |
| `BusPartMaritalStatus` |  | |  |  |  |  |
| `IsMale` |  | |  |  |  |  |
| `IsFemale` |  | |  |  |  |  |
| `IsSexUnknown` |  | |  |  |  |  |
| `GenderCodeName` |  | |  |  |  |  |
| `AdditionalName` |  | |  |  |  |  |
| `BusinessPartnerIDByExtSystem` |  | |  |  |  |  |
| `NonResidentCompanyOriginCntry` |  | |  |  |  |  |
| `NaturalPersonEmployerName` |  | |  |  |  |  |
| `BusinessPartnerSalutation` |  | |  |  |  |  |
| `FormOfAddressOrganization` |  | |  |  |  |  |
| `OrganizationBPName1` |  | |  |  |  |  |
| `OrganizationBPName2` |  | |  |  |  |  |
| `OrganizationBPName3` |  | |  |  |  |  |
| `OrganizationBPName4` |  | |  |  |  |  |
| `LegalForm` |  | |  |  |  |  |
| `LegalEntityOfOrganization` |  | |  |  |  |  |
| `OrganizationFoundationDate` |  | |  |  |  |  |
| `OrganizationLiquidationDate` |  | |  |  |  |  |
| `InternationalLocationNumber1` |  | |  |  |  |  |
| `InternationalLocationNumber2` |  | |  |  |  |  |
| `InternationalLocationNumber3` |  | |  |  |  |  |
| `ETag` |  | |  |  |  |  |
| `FormOfAddressGroup` |  | |  |  |  |  |
| `GroupBusinessPartnerName1` |  | |  |  |  |  |
| `GroupBusinessPartnerName2` |  | |  |  |  |  |
| `BusinessPartnerGroupType` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `BusinessPartnerKind` |  | |  | `BusinessPartnerType` |  |  |
| `BusinessPartnerPrintFormat` |  | |  |  |  |  |
| `BusinessPartnerDataOriginType` |  | |  |  |  |  |
| `BusinessPartnerIsBlocked` |  | |  |  |  |  |
| `IsMarkedForArchiving` |  | |  |  |  |  |
| `BusinessPartnerIsNotReleased` |  | |  |  |  |  |
| `ContactPermission` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SearchTerm1` |  | |  |  |  |  |
| `SearchTerm2` |  | |  |  |  |  |
| `BPFirstNameSearchHelp` |  | |  |  |  |  |
| `BPLastNameSearchHelp` |  | |  |  |  |  |
| `NameFormat` |  | |  |  |  |  |
| `NameCountry` |  | |  |  |  |  |
| `BusPartPersonDataIsHidden` |  | |  |  |  |  |
| `BusPartOrgDataIsHidden` |  | |  |  |  |  |
| `BusPartGroupDataIsHidden` |  | |  |  |  |  |
| `BusPartAddrLanguageIsHidden` |  | |  |  |  |  |
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
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_BusinessPartnerGrouping` | | ✓ | | | | |
| `_BusinessPartnerCategory` | | ✓ | | | | |
| `_AcademicTitleValueHelp` | | ✓ | | | | |
| `_BusinessPartnerLegalForm` | | ✓ | | | | |
| `_BusinessPartnerLegalEntity` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |
| `_BusinessPartnerType` | | ✓ | | | | |
| `_PrintFormat` | | ✓ | | | | |
| `_DataOriginType` | | ✓ | | | | |
| `_ContactPermission` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_BusinessPartnerTaxNumber` | | ✓ | | | | |
| `_BusinessPartnerIdentification` | | ✓ | | | | |
| `_BusinessPartnerIndustry` | | ✓ | | | | |
| `_BusinessPartnerBank` | | ✓ | | | | |
| `_BPAddrIndependentPhone` | | ✓ | | | | |
| `_BPAddrIndependentMobile` | | ✓ | | | | |
| `_BPAddrIndependentEmail` | | ✓ | | | | |
| `_BPAddIndependentWebsite` | | ✓ | | | | |
| `_BPAddIndependentFax` | | ✓ | | | | |
| `_BPDataController` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Business Partner'

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
@ObjectModel.representativeKey: 'BusinessPartner'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartner'
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_LASTCHANGEDBYUSER' ]
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ] 

define root view entity I_BusinessPartnerTP_3
  provider contract transactional_interface
  as projection on I_BusinessPartnerTP_2
{
  key     BusinessPartner,
          BusinessPartnerUUID,
          @Semantics.text:true
          @EndUserText.label: 'Full Name'
          FullName,
          @ObjectModel: { text.element: ['FullName'] }
          @ObjectModel.editableFieldFor: 'BusinessPartner'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          @Search.ranking: #HIGH
          BusinessPartnerForEdit,
          @ObjectModel.foreignKey.association: '_BusinessPartnerGrouping'
          BusinessPartnerGrouping,
          @ObjectModel.foreignKey.association: '_BusinessPartnerCategory'
          BusinessPartnerCategory,

          /* Administrative Data */
          @Semantics.user.createdBy: true
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          CreatedByUser,
          @Semantics.text:true
          CreationDate,
          CreationTime,
          @Semantics.user.lastChangedBy: true
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
          LastChangedByUser,
          @Semantics.text:true
          LastChangeDate,
          LastChangeTime,
          FormOfAddress,

          /* Person Data */
          FormOfAddressPerson,
          FirstName,
          LastName,
          AdditionalLastName,
          BusinessPartnerBirthName,
          MiddleName,
          @ObjectModel: {
                foreignKey.association: '_AcademicTitleValueHelp'
          }
          AcademicTitle,
          AcademicTitle2,
          BusinessPartnerSupplementName,
          LastNamePrefix,
          @Semantics.text:true
          LastNameSecondPrefix,
          PersonFullName,
          BusinessPartnerNicknameLabel,
          Initials,
          cast( IsNaturalPerson as boole_d preserving type ) as IsNaturalPerson,
          Language,
          CorrespondenceLanguage,
          BirthDate,
          BusinessPartnerBirthplaceName,
          BusinessPartnerBirthDateStatus,
          BusinessPartnerDeathDate,
          BusinessPartnerOccupation,
          BusPartNationality,
          BusPartMaritalStatus,
          IsMale,
          IsFemale,
          IsSexUnknown,
          GenderCodeName,
          @EndUserText.label: 'Additional Name'
          AdditionalName,
          BusinessPartnerIDByExtSystem,
          NonResidentCompanyOriginCntry,
          NaturalPersonEmployerName,
          BusinessPartnerSalutation,

          /* Organization Data */
          FormOfAddressOrganization,
          OrganizationBPName1,
          OrganizationBPName2,
          OrganizationBPName3,
          OrganizationBPName4,
          @ObjectModel.foreignKey.association: '_BusinessPartnerLegalForm'
          LegalForm,
          @ObjectModel.foreignKey.association: '_BusinessPartnerLegalEntity'
          LegalEntityOfOrganization,
          OrganizationFoundationDate,
          OrganizationLiquidationDate,
          InternationalLocationNumber1,
          InternationalLocationNumber2,
          InternationalLocationNumber3,
          @EndUserText.label: 'Etag'
          ETag,

          /* Group Data */
          FormOfAddressGroup,
          GroupBusinessPartnerName1,
          GroupBusinessPartnerName2,
          BusinessPartnerGroupType,
          @ObjectModel.foreignKey.association: '_AuthorizationGroup'
          AuthorizationGroup,
          @ObjectModel.foreignKey.association: '_BusinessPartnerType'
          BusinessPartnerType                                as BusinessPartnerKind,
          @ObjectModel.foreignKey.association: '_PrintFormat'
          BusinessPartnerPrintFormat,
          @ObjectModel.foreignKey.association: '_DataOriginType'
          BusinessPartnerDataOriginType,

          BusinessPartnerIsBlocked,
          IsMarkedForArchiving,
          BusinessPartnerIsNotReleased,
          @ObjectModel.foreignKey.association: '_ContactPermission'
          ContactPermission,
          @Semantics.booleanIndicator
          IsBusinessPurposeCompleted,
          SearchTerm1,
          SearchTerm2,
          BPFirstNameSearchHelp,
          BPLastNameSearchHelp,
          NameFormat,
          NameCountry,
          BusPartPersonDataIsHidden,
          BusPartOrgDataIsHidden,
          BusPartGroupDataIsHidden,
          BusPartAddrLanguageIsHidden,

          _CreatedByUser,
          _LastChangedByUser,
          _BusinessPartnerGrouping,
          _BusinessPartnerCategory,
          _AcademicTitleValueHelp,
          _BusinessPartnerLegalForm,
          _BusinessPartnerLegalEntity,
          _AuthorizationGroup,
          _BusinessPartnerType,
          _PrintFormat,
          _DataOriginType,
          _ContactPermission,

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

          _BusinessPartnerAddress        : redirected to composition child I_BusinessPartnerAddressTP_3,
          _BusinessPartnerRole           : redirected to composition child I_BusinessPartnerRoleTP_3,
          _BusinessPartnerTaxNumber      : redirected to composition child I_BusinessPartnerTaxNumberTP_3,
          _BusinessPartnerIdentification : redirected to composition child I_BusPartIdentificationTP_3,
          _BusinessPartnerIndustry       : redirected to composition child I_BusinessPartnerIndustryTP_3,
          _BusinessPartnerBank           : redirected to composition child I_BusinessPartnerBankTP_3,
          _BPAddrIndependentPhone        : redirected to composition child I_BPAddrIndependentPhoneTP_3,
          _BPAddrIndependentMobile       : redirected to composition child I_BPAddrIndependentMobileTP_3,
          _BPAddrIndependentEmail        : redirected to composition child I_BPAddrIndependentEmailTP_3,
          _BPAddIndependentWebsite       : redirected to composition child I_BPAddIndependentWebsiteTP_2,
          _BPAddIndependentFax           : redirected to composition child I_BPAddIndependentFaxTP_2,
          _BPDataController              : redirected to composition child I_BPDataControllerTP_3
          //         _BPDataControllerUsage

}
```
