---
name: I_FISCALYEAR
description: "Fiscalyear"
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
# I_FISCALYEAR

**Fiscalyear**

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
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Year |
| `FiscalYearConsecutiveNumber` |  | |  |  | `INT4(10)` | Fiscal Year (Integer) |
| `NextFiscalYear` |  | |  | `cast( P_FiscalYear.NextFiscalYear as fins_next_fiscalyear_no_conv preserving type )` | `NUMC(4)` | Next Fiscal Year |
| `NextFiscalYearStartDate` |  | |  | `cast( P_FiscalYear.NextFiscalYearStartDate as fins_next_fyear_startdate preserving type )` | `DATS(8)` | Start Date of Next Fiscal Year |
| `NextFiscalYearEndDate` |  | |  | `cast( P_FiscalYear.NextFiscalYearEndDate as fins_next_fyear_enddate preserving type )` | `DATS(8)` | End Date of Next Fiscal Year |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year with Next Fiscal Year'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics.technicalName: 'IFIFISCALYEAR'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view entity I_FiscalYear as select from P_FiscalYear 
  
{

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
key P_FiscalYear.FiscalYearVariant,

key P_FiscalYear.FiscalYear,

    P_FiscalYear.FiscalYearStartDate,
    P_FiscalYear.FiscalYearEndDate,
    P_FiscalYear.FiscalYearConsecutiveNumber,    
    cast( P_FiscalYear.NextFiscalYear as fins_next_fiscalyear_no_conv preserving type )       as NextFiscalYear,
    cast( P_FiscalYear.NextFiscalYearStartDate as fins_next_fyear_startdate preserving type ) as NextFiscalYearStartDate,
    cast( P_FiscalYear.NextFiscalYearEndDate as fins_next_fyear_enddate preserving type )     as NextFiscalYearEndDate,
    
    P_FiscalYear._FiscalYearVariant
    
}
```
