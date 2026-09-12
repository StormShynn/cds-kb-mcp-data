---
name: I_MATERIALVALUATIONTYPEVH
description: "Materialvaluationtypevh"
app_component: CO-PC-ML-2CL
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
  - CO-PC
  - CO-PC-ML
  - interface-view
  - value-help
  - material
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Material
---
# I_MATERIALVALUATIONTYPEVH

**Materialvaluationtypevh**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
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
| `InventoryValuationType` | ✓ | |  | `BWTAR` | `CHAR(10)` | Valuation Type |
| `Plant` | ✓ | |  | `BWKEY` | `CHAR(4)` | Valuation Area |
| `InventoryValuationCategory` |  | |  | `BWTTY` | `CHAR(1)` | Valuation Category |
| `InventoryValuationCategoryName` |  | | `_InventoryValCategoryText` | `InventoryValuationCategoryName` | `CHAR(15)` | Inventory Valuation Category Name |
| `ValuationArea` |  | |  | `BWKEY` | `CHAR(4)` | Valuation Area |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_InventoryValCategoryText` | `P_T149T` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATLVALNTYPEVH'
@ObjectModel.representativeKey: 'InventoryValuationType'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: {
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #M
  }
@ObjectModel.sapObjectNodeType.name: 'MaterialValuation'  
@EndUserText.label: 'Inventory Valuation Type'
@Search.searchable: true
define view I_MaterialValuationTypeVH
  as select from P_T149B as vb

  association [0..1] to I_Plant as _Plant                    on  $projection.Plant = _Plant.Plant
  association [0..1] to P_T149T as _InventoryValCategoryText on  $projection.InventoryValuationCategory = _InventoryValCategoryText.InventoryValuationCategory
                                                             and _InventoryValCategoryText.Language     = $session.system_language
{
           @Search.defaultSearchElement: true
  key      vb.BWTAR                                                 as InventoryValuationType,
           @ObjectModel.foreignKey.association: '_Plant'
           @Search.defaultSearchElement: true
  key      vb.BWKEY                                                 as Plant,

           @ObjectModel.text.element: ['InventoryValuationCategoryName']
           vb.BWTTY                                                 as InventoryValuationCategory,
           _InventoryValCategoryText.InventoryValuationCategoryName as InventoryValuationCategoryName,
           @UI.hidden: true
           vb.BWKEY                                                 as ValuationArea,
           _Plant

}

group by
  vb.BWTAR,
  vb.BWTTY,
  vb.BWKEY,
  _InventoryValCategoryText.InventoryValuationCategoryName
```
