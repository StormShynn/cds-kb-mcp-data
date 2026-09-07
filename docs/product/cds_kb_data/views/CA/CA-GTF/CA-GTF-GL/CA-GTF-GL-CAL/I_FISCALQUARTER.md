---
name: I_FISCALQUARTER
description: "Fiscalquarter"
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
# I_FISCALQUARTER

**Fiscalquarter**

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
| `FiscalQuarter` | ✓ | |  | `cast ( dd07l.domvalue_l as fis_fiscal_quarter )` | `NUMC(1)` | Fiscal Quarter |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FiscalQuarterText` | [0..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Quarter'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.representativeKey: 'FiscalQuarter'
@Analytics.technicalName: 'IFSCLQRTR'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@Analytics.internalName: #LOCAL

define view entity I_FiscalQuarter as select from dd07l

association [0..*] to I_FiscalQuarterText as _Text on $projection.DomainValue = _Text.DomainValue
{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as fis_fiscal_quarter ) as FiscalQuarter,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l as DomainValue,
      _Text
}
where dd07l.domname  = 'FIS_FISCAL_QUARTER' 
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
