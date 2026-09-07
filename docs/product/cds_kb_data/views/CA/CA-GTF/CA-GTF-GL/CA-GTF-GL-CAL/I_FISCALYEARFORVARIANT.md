---
name: I_FISCALYEARFORVARIANT
description: "Fiscalyearforvariant"
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
# I_FISCALYEARFORVARIANT

**Fiscalyearforvariant**

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
| `FiscalYearStartDate` |  | |  | `fiscal_year_start_date` | `DATS(8)` | Start Date of Fiscal Year |
| `FiscalYearEndDate` |  | |  | `fiscal_year_end_date` | `DATS(8)` | End Date of Fiscal Year |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fiscal Year For Fiscal Year Variant'

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Analytics.dataExtraction.enabled:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYear'
@Analytics.technicalName: 'IFIFYEARFYV'

@Analytics: { dataCategory: #DIMENSION }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

define view entity I_FiscalYearForVariant as select distinct from P_FiscalYearPeriod 

association [0..1] to I_FiscalYearVariant    as _FiscalYearVariant     on  $projection.FiscalYearVariant     = _FiscalYearVariant.FiscalYearVariant
{
@ObjectModel.foreignKey.association: '_FiscalYearVariant' 
//@Semantics.fiscal.yearVariant: true   
key P_FiscalYearPeriod.fiscal_year_variant as FiscalYearVariant,
key P_FiscalYearPeriod.fiscal_year as FiscalYear,

    P_FiscalYearPeriod.fiscal_year_start_date as FiscalYearStartDate,
    P_FiscalYearPeriod.fiscal_year_end_date   as FiscalYearEndDate,
    
    _FiscalYearVariant
    
}
```
