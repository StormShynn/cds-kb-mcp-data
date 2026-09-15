---
name: I_COSTCENTERCATEGORYTEXT
description: "Cost CenterCATEGORYTEXT"
app_component: CO-OM-2CL
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
  - CO
  - CO-OM
  - interface-view
  - text-view
  - cost-center
  - text
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERCATEGORYTEXT

**Cost CenterCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CostCenterCategory` | ✓ | |  | `kosar` | `CHAR(1)` | Cost Center Category |
| `CostCenterCategoryName` |  | |  | `cast(ktext as fis_kosar_name)` | `CHAR(20)` | Cost Center Category Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CostCenterCategory'
@EndUserText.label: 'Cost Center Category - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFICOSTCTRCATT'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_CostCenterCategoryText
  as select from tkt05
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                         as Language,
  key kosar                         as CostCenterCategory,
      @Semantics.text: true
      cast(ktext as fis_kosar_name) as CostCenterCategoryName,

      _Language

};
```
