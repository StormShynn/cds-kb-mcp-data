---
name: I_WORKASSIGNMENTDETAIL
description: "Workassignmentdetail"
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
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKASSIGNMENTDETAIL

**Workassignmentdetail**

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
| `WorkAssignmentExternalID` | ✓ | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | ✓ | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkAssignmentStartDate` | ✓ | |  |  | `DATS(8)` | Start Date |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `WorkAssignmentEndDate` |  | |  |  | `DATS(8)` | End Date |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `SupervisorWorkAssignmentExtID` |  | |  |  | `CHAR(100)` | Manager Workforce Assignment External ID |
| `WeeklyWorkingHours` |  | |  |  | `DEC(5)` | Working Hours in a Week |
| `WeeklyWorkingDays` |  | |  |  | `DEC(4)` | Working Days in a Week |
| `WorkAssignmentStatus` |  | |  |  | `CHAR(1)` | Employment Status |
| `EmploymentPercent` |  | |  |  | `DEC(5)` | Employment Percentage |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Work Assignment Details'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WorkAssignmentDetail
  as select from I_WorkAssignmentDetailsAll as WorkAssignmentDetails
    inner join   I_WorkAssignmentKeyMapping as WorkAssignmentKeymap on WorkAssignmentDetails.WorkAssignment = WorkAssignmentKeymap.WorkAssignment

  association [1]    to I_WorkAssignment_1  as _WorkAssignment  on  $projection.WorkAssignmentExternalID = _WorkAssignment.WorkAssignmentExternalID
                                                                and $projection.Country2DigitISOCode     = _WorkAssignment.Country2DigitISOCode
  association [0..1] to I_WorkforcePerson_1 as _WorkforcePerson on  $projection.WorkforcePersonExternalID = _WorkforcePerson.WorkforcePersonExternalID

{
  key WorkAssignmentKeymap.WorkAssignmentExternalID,
  key WorkAssignmentKeymap.Country2DigitISOCode,
  key WorkAssignmentDetails.WorkAssignmentStartDate,
      WorkAssignmentKeymap.WorkforcePersonExternalID,
      WorkAssignmentDetails.WorkAssignmentEndDate,
      WorkAssignmentDetails.CompanyCode,
      WorkAssignmentDetails.CostCenter,
      WorkAssignmentDetails.SupervisorWorkAssignmentExtID,
      WorkAssignmentDetails.WeeklyWorkingHours,
      WorkAssignmentDetails.WeeklyWorkingDays,
      @Semantics.booleanIndicator: true
      WorkAssignmentDetails.WorkAssignmentStatus,
      WorkAssignmentDetails.EmploymentPercent,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      WorkAssignmentKeymap.IsBlocked,

      // Associations //
      _WorkAssignment,
      _WorkforcePerson
}
where
  WorkAssignmentDetails.CompanyCode is not initial
```
