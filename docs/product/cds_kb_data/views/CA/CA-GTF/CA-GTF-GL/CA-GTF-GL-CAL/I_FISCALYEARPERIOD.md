---
name: I_FISCALYEARPERIOD
description: "Fiscalyearperiod"
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
# I_FISCALYEARPERIOD

**Fiscalyearperiod**

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
| `FiscalYear` | ✓ | |  | `fiscal_year` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  | `fiscal_period` | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodStartDate` |  | |  | `fiscal_period_start_date` | `DATS(8)` | Start Date of Fiscal Period |
| `FiscalPeriodEndDate` |  | |  | `fiscal_period_end_date` | `DATS(8)` | End Date of Fiscal Period |
| `IsSpecialPeriod` |  | |  | `is_special_period` | `CHAR(1)` | Indicator: Is Special Period |
| `FiscalYearStartDate` |  | |  | `fiscal_year_start_date` | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  | `fiscal_year_end_date` | `DATS(8)` | End Date of Fiscal Year |
| `FiscalYearPeriod` |  | |  | `fiscal_year_period` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodConsecutiveNumber` |  | | `_FiscalCalendarDate` | `FiscalPeriodConsecutiveNumber` | `INT4(10)` | Fiscal Year Period (Numbering) |
| `NextFiscalPeriod` |  | |  | `next_fiscal_period` | `NUMC(3)` | Next Fiscal Period |
| `NextFiscalPeriodFiscalYear` |  | |  | `next_fiscal_period_fiscal_year` | `NUMC(4)` | Fiscal Year of Next Fiscal Period |
| `NextFsclPeriodConsecutiveNmbr` |  | |  | `_FiscalCalendarDate.FiscalPeriodConsecutiveNumber + 1` | `INT4(10)` |  |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalPeriodStartDate` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalPeriodStartDate` | `I_CalendarDate` | [0..1] |
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year Period'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
//@ObjectModel.alternativeKey: [{id: 'FiscalYearPeriodKey',
//                               uniqueness: #UNIQUE,
//                               element: ['FiscalYearVariant', 'FiscalYearPeriod'] }]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalPeriod'
@Analytics.technicalName: 'IFIFYEARPERIOD'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalYearPeriod as select from P_FiscalYearPeriod 

association [0..1] to I_FiscalYearVariant    as _FiscalYearVariant     on  $projection.FiscalYearVariant     = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_CalendarDate         as _FiscalPeriodStartDate on  $projection.FiscalPeriodStartDate = _FiscalPeriodStartDate.CalendarDate
association [0..1] to I_FiscalYear           as _FiscalYear            on  $projection.FiscalYearVariant     = _FiscalYear.FiscalYearVariant
                                                                       and $projection.FiscalYear            = _FiscalYear.FiscalYear
association [0..*] to I_FiscalYearPeriodText as _Text                  on  $projection.FiscalYearVariant     = _Text.FiscalYearVariant
                                                                       and $projection.FiscalYear            = _Text.FiscalYear
                                                                       and $projection.FiscalPeriod          = _Text.FiscalPeriod
association [0..1] to I_FiscalCalendarDate   as _FiscalCalendarDate    on  $projection.FiscalYearVariant     = _FiscalCalendarDate.FiscalYearVariant
                                                                       and $projection.FiscalYear            = _FiscalCalendarDate.FiscalYear
                                                                       and $projection.FiscalPeriod          = _FiscalCalendarDate.FiscalPeriod
                                                                       and $projection.FiscalYearPeriod      = _FiscalCalendarDate.FiscalYearPeriod
                                                                       and $projection.FiscalPeriodStartDate = _FiscalCalendarDate.CalendarDate

{
 
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYearPeriod.fiscal_year_variant            as FiscalYearVariant,
@ObjectModel.foreignKey.association: '_FiscalYear'      
key P_FiscalYearPeriod.fiscal_year                    as FiscalYear,
@ObjectModel.text.association: '_Text'
key P_FiscalYearPeriod.fiscal_period                  as FiscalPeriod,

//@ObjectModel.foreignKey.association: '_FiscalPeriodStartDate'      
    P_FiscalYearPeriod.fiscal_period_start_date       as FiscalPeriodStartDate,
    P_FiscalYearPeriod.fiscal_period_end_date         as FiscalPeriodEndDate,
    
    P_FiscalYearPeriod.is_special_period              as IsSpecialPeriod,
    
    P_FiscalYearPeriod.fiscal_year_start_date         as FiscalYearStartDate,
    P_FiscalYearPeriod.fiscal_year_end_date           as FiscalYearEndDate,
       
    P_FiscalYearPeriod.fiscal_year_period             as FiscalYearPeriod,

    _FiscalCalendarDate.FiscalPeriodConsecutiveNumber,
    
    P_FiscalYearPeriod.next_fiscal_period             as NextFiscalPeriod,
    P_FiscalYearPeriod.next_fiscal_period_fiscal_year as NextFiscalPeriodFiscalYear,
    
    _FiscalCalendarDate.FiscalPeriodConsecutiveNumber + 1 as NextFsclPeriodConsecutiveNmbr,
    
    _FiscalYearVariant, 
    _FiscalPeriodStartDate,
    _FiscalYear,
    _Text 
           
}
```
