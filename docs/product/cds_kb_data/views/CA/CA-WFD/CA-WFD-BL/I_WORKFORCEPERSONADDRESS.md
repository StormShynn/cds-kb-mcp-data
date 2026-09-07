---
name: I_WORKFORCEPERSONADDRESS
description: "Workforcepersonaddress"
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
# I_WORKFORCEPERSONADDRESS

**Workforcepersonaddress**

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
| `WorkforcePersonExternalID` | ✓ | |  |  | `CHAR(100)` | External Person ID |
| `AddressNumber` | ✓ | |  | `AddressID` | `CHAR(10)` | Address Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `StartDate` |  | |  | `cast (tstmp_to_dats( EmployeeAddress.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `cast (tstmp_to_dats( EmployeeAddress.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` | `DATS(8)` | End Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` |  | |  |  | `CHAR(8)` | County code for county |
| `SecondaryRegionName` |  | |  |  | `CHAR(40)` | County |
| `TertiaryRegion` |  | |  |  | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  |  | `CHAR(40)` | Township |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `DistrictName` |  | |  |  | `CHAR(40)` | District |
| `StreetPrefixName1` |  | |  |  | `CHAR(40)` | Street 2 |
| `StreetPrefixName2` |  | |  |  | `CHAR(40)` | Street 3 |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `StreetSuffixName1` |  | |  |  | `CHAR(40)` | Street 4 |
| `StreetSuffixName2` |  | |  |  | `CHAR(40)` | Street 5 |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `HouseNumberSupplementText` |  | |  |  | `CHAR(10)` | House number supplement |
| `Floor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `CareOfName` |  | |  |  | `CHAR(40)` | c/o name |
| `POBoxPostalCode` |  | |  |  | `CHAR(10)` | PO Box Postal Code |
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
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_BP` | `I_BusinessPartner` | [1..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person Address Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkforcePersonAddress
  as select distinct from I_WorkAssignmentKeyMapping as keymap    
    inner join   I_BusPartAddress                    as EmployeeAddress on EmployeeAddress.BusinessPartner = keymap.BusinessPartner
    inner join   I_Businesspartneraddressusage       as BPAddressUsage  on BPAddressUsage.BusinessPartner = EmployeeAddress.BusinessPartner
                                                                       and BPAddressUsage.AddressNumber   = EmployeeAddress.AddressID

  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                    and $projection.AddressNumber   = _BPProtectedAddress.AddressID
  association [1..1] to I_BusinessPartner    as _BP                 on  _BP.BusinessPartner = EmployeeAddress.BusinessPartner

  association [1]    to I_WorkforcePerson_1  as _WorkforcePerson    on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key     keymap.WorkforcePersonExternalID,
  key     EmployeeAddress.AddressID                                                                      as AddressNumber,
          keymap.BusinessPartner,
          cast (tstmp_to_dats( EmployeeAddress.ValidityStartDate,
          abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
          cast (tstmp_to_dats( EmployeeAddress.ValidityEndDate,
            abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
          EmployeeAddress._AddressDefaultRepresentation.Country,
          EmployeeAddress._AddressDefaultRepresentation.PostalCode,
          EmployeeAddress._AddressDefaultRepresentation.Region,
          EmployeeAddress._AddressDefaultRepresentation.SecondaryRegion,
          EmployeeAddress._AddressDefaultRepresentation.SecondaryRegionName,
          EmployeeAddress._AddressDefaultRepresentation.TertiaryRegion,
          EmployeeAddress._AddressDefaultRepresentation.TertiaryRegionName,
          EmployeeAddress._AddressDefaultRepresentation.CityName,
          EmployeeAddress._AddressDefaultRepresentation.DistrictName,
          EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName1,
          EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName2,
          EmployeeAddress._AddressDefaultRepresentation.StreetName,
          EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName1,
          EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName2,
          EmployeeAddress._AddressDefaultRepresentation.HouseNumber,
          EmployeeAddress._AddressDefaultRepresentation.HouseNumberSupplementText,
          EmployeeAddress._AddressDefaultRepresentation.Floor,
          EmployeeAddress._AddressDefaultRepresentation.RoomNumber,
          EmployeeAddress._AddressDefaultRepresentation.CareOfName,
          EmployeeAddress._AddressDefaultRepresentation.POBoxPostalCode,
          @Semantics.booleanIndicator: true
          _BP.IsBusinessPurposeCompleted,
          @Consumption.hidden:true
          @UI.hidden:true          
          _BP.DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true          
          _BP.DataController1,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController2,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController3,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController4,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController5,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController6,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController7,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController8,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController9,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController10,         
          _BP.AuthorizationGroup,

          /* Associations */
          _BPProtectedAddress,
          _WorkforcePerson

}
where
  BPAddressUsage.AddressUsage = 'XXDEFAULT'
```
