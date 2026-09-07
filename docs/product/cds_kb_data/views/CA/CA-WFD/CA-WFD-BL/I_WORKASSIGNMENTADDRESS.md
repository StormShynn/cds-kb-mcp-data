---
name: I_WORKASSIGNMENTADDRESS
description: "Workassignmentaddress"
app_component: CA-WFD-BL
software_component: SAPSCORE
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
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - address
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTADDRESS

**Workassignmentaddress**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` | `CHAR(2)` | Workforce Country ISO Code |
| `AddressNumber` | ✓ | | `_EmploymentAddress` | `AddressID` | `CHAR(10)` | Address Number |
| `WorkforcePersonExternalID` |  | | `_AssignmentBP` | `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | | `_AssignmentBP` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `StartDate` |  | |  | `cast (tstmp_to_dats( _EmploymentAddress.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `cast (tstmp_to_dats( _EmploymentAddress.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` | `DATS(8)` | End Date |
| `Country` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `Region` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `SecondaryRegion` | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `SecondaryRegionName` | `CHAR(40)` | County |
| `TertiaryRegion` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `TertiaryRegion` | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `TertiaryRegionName` | `CHAR(40)` | Township |
| `CityName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `CityName` | `CHAR(40)` | City |
| `DistrictName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `DistrictName` | `CHAR(40)` | District |
| `StreetPrefixName1` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetPrefixName1` | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetPrefixName2` | `CHAR(40)` | Street 3 |
| `StreetName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `StreetSuffixName1` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetSuffixName1` | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `StreetSuffixName2` | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `HouseNumber` | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `HouseNumberSupplementText` | `CHAR(10)` | House number supplement |
| `Floor` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `Floor` | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `RoomNumber` | `CHAR(10)` | Room or Apartment Number |
| `CareOfName` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `CareOfName` | `CHAR(40)` | c/o name |
| `POBoxPostalCode` |  | | `_EmploymentAddress._AddressDefaultRepresentation` | `POBoxPostalCode` | `CHAR(10)` | PO Box Postal Code |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` | `CHAR(1)` | Blocked Indicator |
| `IsBusinessPurposeCompleted` |  | | `_BP` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | | `_BP` | `DataControllerSet` | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | | `_BP` | `DataController1` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | | `_BP` | `DataController2` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | | `_BP` | `DataController3` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | | `_BP` | `DataController4` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | | `_BP` | `DataController5` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | | `_BP` | `DataController6` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | | `_BP` | `DataController7` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | | `_BP` | `DataController8` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | | `_BP` | `DataController9` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | | `_BP` | `DataController10` | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `AuthorizationGroup` |  | | `_BP` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BPProtectedAddress` | | ✓ | | | | |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_BP` | `I_BusinessPartner` | [1..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Assignment Address Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkAssignmentAddress
  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WorkAssignmentBP         as _AssignmentBP      on _AssignmentBP.WorkAssignment = _Assignment.WorkAssignment
    inner join   I_BusPartAddress           as _EmploymentAddress on _EmploymentAddress.BusinessPartner = _AssignmentBP.WorkAssignmentBusinessPartner


  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                    and $projection.AddressNumber   = _BPProtectedAddress.AddressID
  association [0..1] to I_WorkAssignment_1   as _WorkAssignment     on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                    and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode
  association [1..1] to I_BusinessPartner    as _BP                 on  _BP.BusinessPartner = _EmploymentAddress.BusinessPartner

  association [1]    to I_WorkforcePerson_1  as _WorkforcePerson    on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key     _Assignment.WorkAssignmentExternalID,
  key     _Assignment.Country2DigitISOCode,
  key     _EmploymentAddress.AddressID                                                                   as AddressNumber,
          _AssignmentBP.WorkforcePersonExternalID,
          _AssignmentBP.BusinessPartner,
          cast (tstmp_to_dats( _EmploymentAddress.ValidityStartDate,
          abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
          cast (tstmp_to_dats( _EmploymentAddress.ValidityEndDate,
            abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
          _EmploymentAddress._AddressDefaultRepresentation.Country,
          _EmploymentAddress._AddressDefaultRepresentation.PostalCode,
          _EmploymentAddress._AddressDefaultRepresentation.Region,
          _EmploymentAddress._AddressDefaultRepresentation.SecondaryRegion,
          _EmploymentAddress._AddressDefaultRepresentation.SecondaryRegionName,
          _EmploymentAddress._AddressDefaultRepresentation.TertiaryRegion,
          _EmploymentAddress._AddressDefaultRepresentation.TertiaryRegionName,
          _EmploymentAddress._AddressDefaultRepresentation.CityName,
          _EmploymentAddress._AddressDefaultRepresentation.DistrictName,
          _EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName1,
          _EmploymentAddress._AddressDefaultRepresentation.StreetPrefixName2,
          _EmploymentAddress._AddressDefaultRepresentation.StreetName,
          _EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName1,
          _EmploymentAddress._AddressDefaultRepresentation.StreetSuffixName2,
          _EmploymentAddress._AddressDefaultRepresentation.HouseNumber,
          _EmploymentAddress._AddressDefaultRepresentation.HouseNumberSupplementText,
          _EmploymentAddress._AddressDefaultRepresentation.Floor,
          _EmploymentAddress._AddressDefaultRepresentation.RoomNumber,
          _EmploymentAddress._AddressDefaultRepresentation.CareOfName,
          _EmploymentAddress._AddressDefaultRepresentation.POBoxPostalCode,
          //          _EmploymentAddress._AddressDefaultRepresentation.DeliveryServiceTypeCode,
          //          _EmploymentAddress._AddressDefaultRepresentation.DeliveryServiceNumber,
          @Semantics.booleanIndicator: true
          @UI.hidden: true
          _Assignment.IsBlocked,
          @Semantics.booleanIndicator: true
          _BP.IsBusinessPurposeCompleted,
          _BP.DataControllerSet,
          _BP.DataController1,
          _BP.DataController2,
          _BP.DataController3,
          _BP.DataController4,
          _BP.DataController5,
          _BP.DataController6,
          _BP.DataController7,
          _BP.DataController8,
          _BP.DataController9,
          _BP.DataController10,
          _BP.AuthorizationGroup,

          /* Associations */
          _BPProtectedAddress,
          _WorkAssignment,
          _WorkforcePerson

}
```
