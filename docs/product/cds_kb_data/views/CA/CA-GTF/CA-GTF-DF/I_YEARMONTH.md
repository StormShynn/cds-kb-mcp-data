---
name: I_YEARMONTH
description: "Yearmonth"
app_component: CA-GTF-DF
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
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_YEARMONTH

**Yearmonth**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
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
| `YearMonth` | ✓ | |  | `yearmonth` | `NUMC(6)` | Year Month |
| `CalendarMonth` |  | |  | `calendarmonth` | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  | `calendaryear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  | `calendarquarter` | `NUMC(1)` | Calendar Quarter |
| `IsLeapYear` |  | |  | `isleapyear` | `CHAR(1)` | Is Leap Year |
| `NumberOfDays` |  | |  | `numberofdays` | `INT4(10)` | Number of Days in Year or Month |
| `FirstDayOfMonthDate` |  | |  | `firstdayofmonthdate` | `DATS(8)` | First Day of Month Date |
| `LastDayOfMonthDate` |  | |  | `lastdayofmonthdate` | `DATS(8)` | Last Day of Month Date |
| `HalfYear` |  | |  | `halfyear` | `NUMC(1)` | Half Year |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'YearMonth'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@AbapCatalog.sqlViewName: 'IYEARMONTH'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Year Month'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_YearMonth
  as select from scal_tt_month as month
    inner join   scal_tt_year  as year on month.calendaryear = year.calendaryear
  association [0..1] to I_CalendarMonth   as _CalendarMonth   on $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter as _CalendarQuarter on $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
{
      @Search.defaultSearchElement : true
  key month.yearmonth           as YearMonth,
      @ObjectModel.foreignKey.association:  '_CalendarMonth'
      month.calendarmonth       as CalendarMonth,

      month.calendaryear        as CalendarYear,
      @ObjectModel.foreignKey.association:  '_CalendarQuarter'
      month.calendarquarter     as CalendarQuarter,
      year.isleapyear           as IsLeapYear,
      month.numberofdays        as NumberOfDays,
      month.firstdayofmonthdate as FirstDayOfMonthDate,
      month.lastdayofmonthdate  as LastDayOfMonthDate,
      month.halfyear            as HalfYear,
      _CalendarMonth,
      _CalendarQuarter
}
```
