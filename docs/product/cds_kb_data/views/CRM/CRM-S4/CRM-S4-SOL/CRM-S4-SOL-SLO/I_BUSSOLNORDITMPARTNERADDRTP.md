---
name: I_BUSSOLNORDITMPARTNERADDRTP
description: "Bussolnorditmpartneraddrtp"
semantic_vi: "View này hiển thị dữ liệu địa chỉ đối tác tạm thời cho các giải pháp kinh doanh, thường được sử dụng trong quá trình xử lý giao dịch trong thành phần CRM-S4-SOL-SLO."
keywords:
  - "crm"
  - "business solution"
  - "partner address"
  - "transactional processing"
  - "temporal data"
  - "crm-s4-sol-slo"
  - "lob-other"
  - "partner function"
  - "address object"
  - "correspondence language"
semantic_en: "This view exposes temporary partner address data for business solutions, typically used during transactional processing in CRM-S4-SOL-SLO component."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - partner
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMPARTNERADDRTP

**Bussolnorditmpartneraddrtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `AddresseeFullName` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |  |  |
| `FaxExtensionNumber` |  | |  |  |  |  |
| `FaxNumberCountry` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `MobileNumber` |  | |  |  |  |  |
| `MobilePhoneCountry` |  | |  |  |  |  |
| `OrganizationName1` |  | |  |  |  |  |
| `OrganizationName2` |  | |  |  |  |  |
| `OrganizationName3` |  | |  |  |  |  |
| `OrganizationName4` |  | |  |  |  |  |
| `PersonFamilyName` |  | |  |  |  |  |
| `PersonGivenName` |  | |  |  |  |  |
| `PhoneExtensionNumber` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `PhoneNumberCountry` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | | | |
| `_BusSolnOrdItmPartnerTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.usageType: {
  dataClass:      #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory:   #L
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Solution Order Item Partner Address - TP'

define view entity I_BusSolnOrdItmPartnerAddrTP
  as projection on R_BusSolnOrdItmPartnerAddrTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
      AddressID,
      AddressPersonID,
      AddressObjectType,
      AddresseeFullName,
      CityName,
      CorrespondenceLanguage,
      Country,
      DistrictName,
      EmailAddress,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      FaxNumberCountry,
      FormOfAddress,
      HouseNumber,
      MobileNumber,
      MobilePhoneCountry,
      OrganizationName1,
      OrganizationName2,
      OrganizationName3,
      OrganizationName4,
      PersonFamilyName,
      PersonGivenName,
      PhoneExtensionNumber,
      PhoneNumber,
      PhoneNumberCountry,
      POBox,
      POBoxPostalCode,
      PostalCode,
      Region,
      StreetName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      TaxJurisdiction,
      TransportZone,

      /* associations */
      _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP,
      _BusSolnOrdItmPartnerTP  : redirected to parent I_BusSolnOrdItmPartnerTP
}
```
