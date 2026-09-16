---
name: I_COSTCOMPONENTVIEWTEXT
description: "Costcomponentviewtext"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTCOMPONENTVIEWTEXT

**Costcomponentviewtext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CostComponentView` | ✓ | |  | `sicht` | `NUMC(2)` | Cost Component View |
| `CostComponentViewName` |  | |  | `txsic` | `CHAR(40)` | Name of View for Display |
| `_Language` | | ✓ | | | | |
| `_CostComponentView` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CostComponentView` | `I_CostComponentView` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CostComponentView',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING 
  },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE, 
                           #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Component View - Text'

define view entity I_CostComponentViewText
  as select from tckh9
  association [1..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_CostComponentView as _CostComponentView on $projection.CostComponentView = _CostComponentView.CostComponentView
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_CostComponentView'
  key sicht as CostComponentView,
      
      @Semantics.text: true
      txsic as CostComponentViewName,
      
      _Language,
      _CostComponentView
}
```
