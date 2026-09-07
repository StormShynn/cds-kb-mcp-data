---
name: I_PERSONWORKAGRMTPLNDWRKGTIME
description: "Personworkagrmtplndwrkgtime"
app_component: CA-WFD
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
  - interface-view
  - component:CA-WFD
  - lob:Cross-Application Components
---
# I_PERSONWORKAGRMTPLNDWRKGTIME

**Personworkagrmtplndwrkgtime**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
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
| `PersonWorkAgreement` | ✓ | |  | `cast(workforce_assgmt_id as persno preserving type)` | `NUMC(8)` | Personnel Number |
| `StartDate` | ✓ | |  | `cast(start_date as begda preserving type)` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `cast(end_date as endda preserving type)` | `DATS(8)` | End Date |
| `WorkingTimePercentage` |  | |  | `cast(employment_percent as empct preserving type)` | `DEC(5)` | Employment percentage |
| `WeeklyWorkingHours` |  | |  | `cast(weekly_working_hours as wostd preserving type)` | `DEC(5)` | Hours per week |
| `WeeklyWorkdays` |  | |  | `cast(weekly_working_days as warst preserving type)` | `DEC(4)` | Weekly Workdays |
| `PersonWorkAgrmtAuthznGrpg` |  | |  | `cast('' as vdsk1)` | `CHAR(14)` | Organizational Key |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRPLWTIME'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.sapObjectNodeType.name:'WorkAssignmentDetails'
@EndUserText.label: 'Work Agreement Planned Working time'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtPlndWrkgTime
  as select from wfd_d_assgmtdets 
{
  key cast(workforce_assgmt_id as persno preserving type) as PersonWorkAgreement,
      @Semantics.businessDate.from
  key cast(start_date as begda preserving type)           as StartDate,
      @Semantics.businessDate.to
  key cast(end_date   as endda preserving type)           as EndDate,
  
      cast(employment_percent   as empct preserving type) as WorkingTimePercentage,
      cast(weekly_working_hours as wostd preserving type) as WeeklyWorkingHours,
      cast(weekly_working_days  as warst preserving type) as WeeklyWorkdays,
      //for dcl purpose
      cast('' as vdsk1) as PersonWorkAgrmtAuthznGrpg
} 
where block_ind = ''
/*  as select from WFD_TF_PersonWorkAgrmtPlndTime( p_client : $session.client )
//  as select from P_PersonWorkAgrmtPlndWrkgTime                         
{
  key PersonWorkAgreement,
      @Semantics.businessDate.from
  key StartDate,
      @Semantics.businessDate.to
  key EndDate,
  
      WorkingTimePercentage,
      WeeklyWorkingHours,
      WeeklyWorkdays,
      //for dcl purpose
      PersonWorkAgrmtAuthznGrpg
} */


//as select from pa0007 as PA0007
// inner join pa0001 as PA0001 on pa0007.pernr = pa0001.pernr
//                and pa0007.endda between pa0001.begda and pa0001.endda
//                and pa0001.sprps <> 'X'
//  {
// key pa0007.pernr as PersonWorkAgreement,
//    @Semantics.businessDate.from
// key pa0007.begda as StartDate,
//    @Semantics.businessDate.to
// key pa0007.endda as EndDate,
// pa0007.empct as WorkingTimePercentage,
// pa0007.wostd as WeeklyWorkingHours,
// pa0007.wkwdy as WeeklyWorkdays,
// //for dcl purpose
// pa0001.vdsk1 as PersonWorkAgrmtAuthznGrpg
//}
//where
//pa0007.sprps <> 'X'
```
