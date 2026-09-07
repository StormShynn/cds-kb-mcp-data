---
name: I_TIMEOVERVIEWBYWRKAGRMTANDDTE
description: "Timeoverviewbywrkagrmtanddte"
app_component: CA-TS-S4
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
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMEOVERVIEWBYWRKAGRMTANDDTE

**Timeoverviewbywrkagrmtanddte**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
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
| `PersonWorkAgreement` | ✓ | |  | `employeenumber` | `NUMC(8)` | Personnel Number |
| `CalendarDate` | ✓ | |  | `validitydate` | `DATS(8)` | Validity Date |
| `Origin` |  | |  | `extapplication` | `CHAR(5)` | External Application |
| `PlannedWorkingHours` |  | |  | `regularhours` | `DEC(5)` | Normal working hours of an employee on one day |
| `PlannedStartTime` |  | |  | `regularbegin` | `TIMS(6)` | Normal start of employee's working time |
| `PlannedEndTime` |  | |  | `regularend` | `TIMS(6)` | Normal End of an Employee's Working Time |
| `PublicHolidayClass` |  | |  | `holidayclass` | `CHAR(1)` | Holiday class |
| `IsNonWorkingDay` |  | |  | `nonworking` | `CHAR(1)` | Indicator: Employee does not need to work |
| `AbsenceInHours` |  | |  | `absencehours` | `DEC(5)` | Absence hours of an employee on one day |
| `AttendanceHours` |  | |  | `attendancehours` | `DEC(5)` | Attendance hours of an employee on one day |
| `OvertimeInHours` |  | |  | `overtimehours` | `DEC(5)` | Overtime hours of an employee on one day |
| `AvailabilityInHours` |  | |  | `( pTime.regularhours + pTime.overtimehours - pTime.absencehours - pTime.attendancehours )` | `DEC(8)` |  |
| `PersonWorkAgrmtAuthznGrpg` |  | | `_PersonWorkAgrmtStatus` | `PersonWorkAgrmtAuthznGrpg` | `CHAR(14)` | Organizational Key |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKAGRTMOV'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #FACT, dataExtraction: {enabled: true } }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Availability of a Person Work Agreement'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name :'WorkforceAvailability'
define view I_TimeOverviewByWrkAgrmtAndDte
  as select from    ptimeov1        as pTime
  inner join I_PersonWorkAgrmtStatus as _PersonWorkAgrmtStatus on pTime.employeenumber = _PersonWorkAgrmtStatus.PersonWorkAgreement and
                                                                  pTime.validitydate between _PersonWorkAgrmtStatus.StartDate and _PersonWorkAgrmtStatus.EndDate
  
// inner join pa0001 as PA0001 on pTime.employeenumber = pa0001.pernr
//                and pTime.validitydate between pa0001.begda and pa0001.endda
//                and pa0001.sprps <> 'X'
{
  key pTime.employeenumber                  as PersonWorkAgreement,
  key pTime.validitydate                    as CalendarDate,
      pTime.extapplication                  as Origin,
      pTime.regularhours                    as PlannedWorkingHours,
      pTime.regularbegin                    as PlannedStartTime,
      pTime.regularend                      as PlannedEndTime,
      pTime.holidayclass                    as PublicHolidayClass,
      pTime.nonworking                      as IsNonWorkingDay,
      pTime.absencehours                    as AbsenceInHours,
      pTime.attendancehours                 as AttendanceHours,
      pTime.overtimehours                   as OvertimeInHours,
      //pa0001.vdsk1                          as PersonWorkAgrmtAuthznGrpg //for dcl
      ( pTime.regularhours + pTime.overtimehours - pTime.absencehours - pTime.attendancehours ) as AvailabilityInHours,
      _PersonWorkAgrmtStatus.PersonWorkAgrmtAuthznGrpg
}
```
