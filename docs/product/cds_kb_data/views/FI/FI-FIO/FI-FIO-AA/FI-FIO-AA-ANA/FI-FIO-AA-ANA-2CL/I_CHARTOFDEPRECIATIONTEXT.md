---
name: I_CHARTOFDEPRECIATIONTEXT
description: "Chartofdepreciationtext"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
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
  - FI
  - interface-view
  - text-view
  - text
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
---
# I_CHARTOFDEPRECIATIONTEXT

**Chartofdepreciationtext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ChartOfDepreciationName` |  | |  | `ktext` | `CHAR(50)` | Description: Company code group for dep. calculation |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'ICHARTOFDEPRT', preserveKey: true}
@EndUserText.label: 'Chart of Depreciation - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //No DCL needed! Even if there is the authorization object A_C_AFAPL, which is for customizing only.
@ObjectModel: { representativeKey: 'ChartOfDepreciation',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ChartOfDepreciationText
  as select from t096t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key afapl as ChartOfDepreciation,
      @Semantics.language
  key spras as Language,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ktext as ChartOfDepreciationName,

      _Language
}
```
