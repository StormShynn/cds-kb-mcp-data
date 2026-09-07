---
name: I_FISCALDATEFUNCTIONVALUE
description: "Fiscaldatefunctionvalue"
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
# I_FISCALDATEFUNCTIONVALUE

**Fiscaldatefunctionvalue**

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
| `DateFunction` | ✓ | |  | `datefunction` | `CHAR(32)` | Relative Date Function ID |
| `FiscalYearVariant` | ✓ | |  | `datefunctionfiscalyearvariant` | `CHAR(2)` | Fiscal Year Variant |
| `DateFunctionValidityDate` | ✓ | |  | `valid_for_date` | `DATS(8)` | Validity date for date function |
| `DateFunctionStartDate` |  | |  | `datefunctionstartdate` | `DATS(8)` | Date Function Start Date |
| `DateFunctionEndDate` |  | |  | `datefunctionenddate` | `DATS(8)` | Date Function End Date |
| `FiscalWeekStart` |  | |  | `fiscalweekstart` | `NUMC(2)` | Fiscal Week |
| `FiscalYearWeekStart` |  | |  | `fiscalyearweekstart` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalWeekEnd` |  | |  | `fiscalweekend` | `NUMC(2)` | Fiscal Week |
| `FiscalYearWeekEnd` |  | |  | `fiscalyearweekend` | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalPeriodStart` |  | |  | `fiscalperiodstart` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriodStart` |  | |  | `fiscalyearperiodstart` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodEnd` |  | |  | `fiscalperiodend` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriodEnd` |  | |  | `fiscalyearperiodend` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalPeriodSingle` |  | |  | `fiscalperiodsingle` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriodSingle` |  | |  | `fiscalyearperiodsingle` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalQuarterStart` |  | |  | `fiscalquarterstart` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarterStart` |  | |  | `fiscalyearquarterstart` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarterEnd` |  | |  | `fiscalquarterend` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarterEnd` |  | |  | `fiscalyearquarterend` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearStart` |  | |  | `fiscalyearstart` | `NUMC(4)` | Fiscal Year |
| `FiscalYearEnd` |  | |  | `fiscalyearend` | `NUMC(4)` | Fiscal Year |
| `_DateFunction` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ValidityDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DateFunction` | `I_FiscalDateFunction` | [1..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_ValidityDate` | `I_CalendarDate` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFSCLDATEFUNCVAL'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fiscal Date Function values'
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality:  #A
@ObjectModel.usageType.sizeCategory:  #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@VDM.viewType: #BASIC
define view I_FiscalDateFunctionValue
  as select from fiscaldatefn_val

  association [1..1] to I_FiscalDateFunction as _DateFunction      on _DateFunction.DateFunction = $projection.DateFunction
  association [1..1] to I_FiscalYearVariant  as _FiscalYearVariant on _FiscalYearVariant.FiscalYearVariant = $projection.FiscalYearVariant
  association [1..1] to I_CalendarDate       as _ValidityDate      on _ValidityDate.CalendarDate = $projection.DateFunctionValidityDate

{
//      @ObjectModel.foreignKey.association: '_Datefunction'
  key datefunction                  as DateFunction,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  key datefunctionfiscalyearvariant as FiscalYearVariant,
      @Semantics.businessDate.at: true
      @ObjectModel.foreignKey.association: '_ValidityDate'
  key valid_for_date                as DateFunctionValidityDate,

      datefunctionstartdate         as DateFunctionStartDate,
      datefunctionenddate           as DateFunctionEndDate,
      
      fiscalweekstart               as FiscalWeekStart,
      fiscalyearweekstart           as FiscalYearWeekStart,
      fiscalweekend                 as FiscalWeekEnd,
      fiscalyearweekend             as FiscalYearWeekEnd,
      fiscalperiodstart             as FiscalPeriodStart,
      fiscalyearperiodstart         as FiscalYearPeriodStart,
      fiscalperiodend               as FiscalPeriodEnd,
      fiscalyearperiodend           as FiscalYearPeriodEnd,
      fiscalperiodsingle            as FiscalPeriodSingle,
      fiscalyearperiodsingle        as FiscalYearPeriodSingle,
      fiscalquarterstart            as FiscalQuarterStart,
      fiscalyearquarterstart        as FiscalYearQuarterStart,
      fiscalquarterend              as FiscalQuarterEnd,
      fiscalyearquarterend          as FiscalYearQuarterEnd,
      fiscalyearstart               as FiscalYearStart,
      fiscalyearend                 as FiscalYearEnd,
                    

      _DateFunction,
      _FiscalYearVariant,
      _ValidityDate
}
```
