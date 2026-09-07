---
name: I_FISCALQUARTERTEXT
description: "Fiscalquartertext"
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
  - text-view
  - text
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALQUARTERTEXT

**Fiscalquartertext**

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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `FiscalQuarter` | ✓ | |  | `cast ( dd07t.domvalue_l as fis_fiscal_quarter )` | `NUMC(1)` | Fiscal Quarter |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FiscalQuarterName` |  | |  | `cast( dd07t.ddtext as fis_fiscal_quarter_name )` | `CHAR(30)` | Fiscal Quarter Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Quarter - Text'
@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFSCLQRTRTXT' 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.representativeKey: 'FiscalQuarter'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@Analytics.internalName: #LOCAL

define view entity I_FiscalQuarterText as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.text.element: ['FiscalQuarterName']
  key cast ( dd07t.domvalue_l as fis_fiscal_quarter ) as FiscalQuarter,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Semantics.text: true
      cast( dd07t.ddtext as fis_fiscal_quarter_name ) as FiscalQuarterName,
      _Language
}
where dd07t.domname  = 'FIS_FISCAL_QUARTER' 
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
