---
name: I_FISCALWEEK
description: "Fiscalweek"
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
# I_FISCALWEEK

**Fiscalweek**

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
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearWeek` | ✓ | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalWeek` | ✓ | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `FiscalWeekStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Week |
| `FiscalWeekEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Week |
| `FiscalWeekConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Week (Numbering) |
| `NextFiscalYearWeek` |  | |  |  | `NUMC(6)` |  |
| `NextFiscalWeek` |  | |  |  | `NUMC(2)` |  |
| `NextFiscalWeekStartDate` |  | |  |  | `DATS(8)` |  |
| `NextFiscalWeekEndDate` |  | |  |  | `DATS(8)` |  |
| `NextFsclWeekConsecutiveNmbr` |  | |  |  | `INT4(10)` |  |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearWeek` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_FiscalYearWeek` | `I_FiscalYearWeek` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Week'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalWeek'
@Analytics.technicalName: 'IFIFISCALWEEK'
@Analytics: { dataCategory: #DIMENSION }

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalWeek as select from P_FiscalYearWeek 

association [0..1] to I_FiscalYear      as _FiscalYear        on  $projection.FiscalYearVariant             = _FiscalYear.FiscalYearVariant
                                                              and $projection.FiscalYear                    = _FiscalYear.FiscalYear
association [0..1] to I_FiscalYearWeek  as _FiscalYearWeek    on  $projection.FiscalYearVariant             = _FiscalYearWeek.FiscalYearVariant 
                                                              and $projection.FiscalYear        = _FiscalYearWeek.FiscalYear
                                                              and $projection.FiscalYearWeek    = _FiscalYearWeek.FiscalYearWeek                                                                  
{
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYearWeek.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalYear'      
key P_FiscalYearWeek.FiscalYear,

@ObjectModel.foreignKey.association: '_FiscalYearWeek'      
key P_FiscalYearWeek.FiscalYearWeek, 

key P_FiscalYearWeek.FiscalWeek, 

    P_FiscalYearWeek.FiscalYearStartDate,
    P_FiscalYearWeek.FiscalYearEndDate,
        
//    FiscalYearWeek, 
    P_FiscalYearWeek.FiscalWeekStartDate,
    P_FiscalYearWeek.FiscalWeekEndDate,

    P_FiscalYearWeek.FiscalWeekConsecutiveNumber,
    
    P_FiscalYearWeek.NextFiscalYearWeek,
    P_FiscalYearWeek.NextFiscalWeek,
    P_FiscalYearWeek.NextFiscalWeekStartDate,
    P_FiscalYearWeek.NextFiscalWeekEndDate,
    
    P_FiscalYearWeek.NextFsclWeekConsecutiveNmbr,

    P_FiscalYearWeek._FiscalYearVariant,
    _FiscalYear,
    _FiscalYearWeek
    
}
```
