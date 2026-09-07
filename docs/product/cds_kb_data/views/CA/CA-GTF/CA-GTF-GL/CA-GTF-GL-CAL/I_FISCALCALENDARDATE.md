---
name: I_FISCALCALENDARDATE
description: "Fiscalcalendardate"
app_component: CA-GTF-GL-CAL
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
  - CA-GTF-GL
  - interface-view
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALCALENDARDATE

**Fiscalcalendardate**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
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
| `FiscalYearVariant` | ✓ | |  | `fiscal_year_variant` | `CHAR(2)` | Fiscal Year Variant |
| `CalendarDate` | ✓ | |  | `calendar_date` | `DATS(8)` | Calendar Date |
| `FiscalYear` |  | |  | `fiscal_year` | `NUMC(4)` | Fiscal Year |
| `FiscalYearStartDate` |  | |  | `fiscal_year_start_date` | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  | `fiscal_year_end_date` | `DATS(8)` | End Date of Fiscal Year |
| `FiscalPeriod` |  | |  | `fiscal_period` | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` |  | |  | `fiscal_period_start_date` | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  | `fiscal_period_end_date` | `DATS(8)` | End Date of Fiscal Period |
| `FiscalQuarter` |  | |  | `fiscal_quarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalQuarterStartDate` |  | |  | `fiscal_quarter_start_date` | `DATS(8)` | Start Date of Fiscal Quarter |
| `FiscalQuarterEndDate` |  | |  | `fiscal_quarter_end_date` | `DATS(8)` | End Date of Fiscal Quarter |
| `FiscalWeek` |  | |  | `fiscal_week` | `NUMC(2)` | Fiscal Week |
| `FiscalWeekStartDate` |  | |  | `fiscal_week_start_date` | `DATS(8)` | Start Date of Fiscal Week |
| `FiscalWeekEndDate` |  | |  | `fiscal_week_end_date` | `DATS(8)` | End Date of Fiscal Week |
| `FiscalYearPeriod` |  | |  | `fiscal_year_period` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYearQuarter` |  | |  | `fiscal_year_quarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  | `fiscal_year_week` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearConsecutiveNumber` |  | |  | `cast(P_FiscalCalendarDate.fiscal_year as fins_fiscalyear_i)` | `INT4(10)` | Fiscal Year (Integer) |
| `FiscalPeriodConsecutiveNumber` |  | |  | `fiscal_year_period_int` | `INT4(10)` | Fiscal Year Period (Numbering) |
| `FiscalQuarterConsecutiveNumber` |  | |  | `fiscal_year_quarter_int` | `INT4(10)` | Fiscal Year Quarter (Numbering) |
| `FiscalWeekConsecutiveNumber` |  | |  | `fiscal_year_week_int` | `INT4(10)` | Fiscal Year Week (Numbering) |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalQuarter` | | ✓ | | | | |
| `_FiscalWeek` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_FiscalYearQuarter` | | ✓ | | | | |
| `_FiscalYearWeek` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriod` | [0..1] |
| `_FiscalQuarter` | `I_FiscalYearQuarter` | [0..1] |
| `_FiscalWeek` | `I_FiscalWeek` | [0..1] |
| `_FiscalYearPeriod` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_FiscalYearQuarter` | `I_FiscalYearQuarterForVariant` | [0..1] |
| `_FiscalYearWeek` | `I_FiscalYearWeek` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: 
            [ { table: 'finsc_fisc_date', 
                role: #MAIN,
                viewElement: ['FiscalYearVariant', 'CalendarDate'],
                tableElement: ['fiscal_year_variant', 'calendar_date']
              }
            ]
        }
    }
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Calendar Date'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.representativeKey: 'CalendarDate'
@Analytics.technicalName: 'IFIFCALENDARDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

define view entity I_FiscalCalendarDate as select from P_FiscalCalendarDate 

association [0..1] to I_FiscalYearVariant           as _FiscalYearVariant on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_CalendarDate                as _CalendarDate      on  $projection.CalendarDate      = _CalendarDate.CalendarDate
association [0..*] to I_FiscalYearPeriodText        as _Text              on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _Text.FiscalYear
                                                                          and $projection.FiscalPeriod      = _Text.FiscalPeriod
                                                                   
association [0..1] to I_FiscalYear                  as _FiscalYear        on  $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalYear.FiscalYear
association [0..1] to I_FiscalYearPeriod            as _FiscalPeriod      on  $projection.FiscalYearVariant = _FiscalPeriod.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalPeriod.FiscalYear
                                                                          and $projection.FiscalPeriod      = _FiscalPeriod.FiscalPeriod
association [0..1] to I_FiscalYearQuarter           as _FiscalQuarter     on  $projection.FiscalYearVariant = _FiscalQuarter.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalQuarter.FiscalYear
                                                                          and $projection.FiscalQuarter     = _FiscalQuarter.FiscalQuarter
association [0..1] to I_FiscalWeek                  as _FiscalWeek        on  $projection.FiscalYearVariant = _FiscalWeek.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalWeek.FiscalYear
                                                                          and $projection.FiscalYearWeek    = _FiscalWeek.FiscalYearWeek                                                                  
                                                                          and $projection.FiscalWeek        = _FiscalWeek.FiscalWeek
association [0..1] to I_FiscalYearPeriodForVariant  as _FiscalYearPeriod  on  $projection.FiscalYearVariant = _FiscalYearPeriod.FiscalYearVariant
                                                                          and $projection.FiscalYearPeriod  = _FiscalYearPeriod.FiscalYearPeriod
                                                                   
association [0..1] to I_FiscalYearQuarterForVariant as _FiscalYearQuarter on  $projection.FiscalYearVariant = _FiscalYearQuarter.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalYearQuarter.FiscalYear
                                                                          and $projection.FiscalYearQuarter = _FiscalYearQuarter.FiscalYearQuarter
association [0..1] to I_FiscalYearWeek              as _FiscalYearWeek    on  $projection.FiscalYearVariant = _FiscalYearWeek.FiscalYearVariant 
                                                                          and $projection.FiscalYear        = _FiscalYearWeek.FiscalYear
                                                                          and $projection.FiscalYearWeek    = _FiscalYearWeek.FiscalYearWeek                                                                  

{
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
//@Semantics.fiscal.yearVariant: true     
key P_FiscalCalendarDate.fiscal_year_variant       as FiscalYearVariant,
//@ObjectModel.foreignKey.association: '_CalendarDate'      
key P_FiscalCalendarDate.calendar_date             as CalendarDate,

//@Semantics.fiscal.year: true  
@ObjectModel.foreignKey.association: '_FiscalYear'     
    P_FiscalCalendarDate.fiscal_year               as FiscalYear,
    P_FiscalCalendarDate.fiscal_year_start_date    as FiscalYearStartDate,
    P_FiscalCalendarDate.fiscal_year_end_date      as FiscalYearEndDate,
        
@ObjectModel.text.association: '_Text'
//@Semantics.fiscal.period: true     
@ObjectModel.foreignKey.association: '_FiscalPeriod'  
    P_FiscalCalendarDate.fiscal_period             as FiscalPeriod,
    P_FiscalCalendarDate.fiscal_period_start_date  as FiscalPeriodStartDate,
    P_FiscalCalendarDate.fiscal_period_end_date    as FiscalPeriodEndDate,

//@Semantics.fiscal.quarter: true    
@ObjectModel.foreignKey.association: '_FiscalQuarter'   
    P_FiscalCalendarDate.fiscal_quarter            as FiscalQuarter,
    P_FiscalCalendarDate.fiscal_quarter_start_date as FiscalQuarterStartDate,
    P_FiscalCalendarDate.fiscal_quarter_end_date   as FiscalQuarterEndDate,

//@Semantics.fiscal.week: true 
@ObjectModel.foreignKey.association: '_FiscalWeek'      
    P_FiscalCalendarDate.fiscal_week               as FiscalWeek,
    P_FiscalCalendarDate.fiscal_week_start_date    as FiscalWeekStartDate,
    P_FiscalCalendarDate.fiscal_week_end_date      as FiscalWeekEndDate,

//@Semantics.fiscal.yearPeriod: true     
@ObjectModel.foreignKey.association: '_FiscalYearPeriod'  
    P_FiscalCalendarDate.fiscal_year_period        as FiscalYearPeriod,
//@Semantics.fiscal.yearQuarter: true  
@ObjectModel.foreignKey.association: '_FiscalYearQuarter'     
    P_FiscalCalendarDate.fiscal_year_quarter       as FiscalYearQuarter,
//@Semantics.fiscal.yearWeek: true     
@ObjectModel.foreignKey.association: '_FiscalYearWeek'  
    P_FiscalCalendarDate.fiscal_year_week          as FiscalYearWeek,
    
    cast(P_FiscalCalendarDate.fiscal_year as fins_fiscalyear_i) as FiscalYearConsecutiveNumber,
    P_FiscalCalendarDate.fiscal_year_period_int    as FiscalPeriodConsecutiveNumber,
    P_FiscalCalendarDate.fiscal_year_quarter_int   as FiscalQuarterConsecutiveNumber,
    P_FiscalCalendarDate.fiscal_year_week_int      as FiscalWeekConsecutiveNumber,
    
    _FiscalYearVariant,
    _CalendarDate,
    _FiscalYear,
    _Text,
    _FiscalPeriod,
    _FiscalQuarter,
    _FiscalWeek,
    _FiscalYearPeriod,
    _FiscalYearQuarter,
    _FiscalYearWeek
             
}
```
