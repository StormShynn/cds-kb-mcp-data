---
name: I_FISCALQUARTERFORVARIANT
description: "Fiscalquarterforvariant"
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
# I_FISCALQUARTERFORVARIANT

**Fiscalquarterforvariant**

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
| `FiscalQuarter` | ✓ | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `FiscalQuarterStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Quarter |
| `FiscalQuarterEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Quarter |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarterConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year Quarter (Numbering) |
| `NextFiscalQuarter` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarter as fins_next_fiscalquarter preserving type )` | `NUMC(1)` | Next Fiscal Quarter |
| `NextFiscalYear` |  | |  | `cast( cast( substring(P_FiscalYearQuarter.NextFiscalYearQuarter,1,4) as abap.numc(4) ) as fins_next_fiscalyear_no_conv preserving type )` | `NUMC(4)` | Next Fiscal Year |
| `NextFiscalYearQuarter` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalYearQuarter as fins_next_fyearquarter preserving type )` | `NUMC(5)` | Next Fiscal Quarter with Fiscal Year |
| `NextFiscalQuarterStartDate` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarterStartDate as fins_next_fquarter_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Quarter |
| `NextFiscalQuarterEndDate` |  | |  | `cast( P_FiscalYearQuarter.NextFiscalQuarterEndDate as fins_next_fquarter_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Quarter |
| `NextFsclQuarterConsecutiveNmbr` |  | |  | `cast( P_FiscalYearQuarter.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i preserving type )` | `INT4(10)` | Next Fiscal Year Quarter (Numbering) |
| `_FiscalYear` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYear` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Quarter with Next Fiscal Quarter'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalQuarter'
@Analytics.technicalName: 'IFIFISCQU4VAR'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalQuarterForVariant as select from P_FiscalYearQuarter 

association [0..1] to I_FiscalYear as _FiscalYear on  $projection.FiscalYearVariant     = _FiscalYear.FiscalYearVariant
                                                  and $projection.FiscalYear            = _FiscalYear.FiscalYear
{
  
@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYearQuarter.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalYear'      
key P_FiscalYearQuarter.FiscalYear,

key P_FiscalYearQuarter.FiscalQuarter, 

    P_FiscalYearQuarter.FiscalYearStartDate,
    P_FiscalYearQuarter.FiscalYearEndDate,
        
    P_FiscalYearQuarter.FiscalQuarterStartDate,
    P_FiscalYearQuarter.FiscalQuarterEndDate,

    P_FiscalYearQuarter.FiscalYearQuarter, 

    P_FiscalYearQuarter.FiscalQuarterConsecutiveNumber,
      
    cast( P_FiscalYearQuarter.NextFiscalQuarter as fins_next_fiscalquarter preserving type )                                                  as NextFiscalQuarter,
    cast( cast( substring(P_FiscalYearQuarter.NextFiscalYearQuarter,1,4) as abap.numc(4) ) as fins_next_fiscalyear_no_conv preserving type )  as NextFiscalYear,

    cast( P_FiscalYearQuarter.NextFiscalYearQuarter as fins_next_fyearquarter preserving type )                                               as NextFiscalYearQuarter,
    cast( P_FiscalYearQuarter.NextFiscalQuarterStartDate as fins_next_fquarter_startdate preserving type )                                    as NextFiscalQuarterStartDate,
    cast( P_FiscalYearQuarter.NextFiscalQuarterEndDate as fins_next_fquarter_enddate preserving type )                                        as NextFiscalQuarterEndDate,

    cast( P_FiscalYearQuarter.NextFsclQuarterConsecutiveNmbr as fins_next_fyearquarter_i preserving type )                                    as NextFsclQuarterConsecutiveNmbr,

    P_FiscalYearQuarter._FiscalYearVariant,
    _FiscalYear
    
}
```
