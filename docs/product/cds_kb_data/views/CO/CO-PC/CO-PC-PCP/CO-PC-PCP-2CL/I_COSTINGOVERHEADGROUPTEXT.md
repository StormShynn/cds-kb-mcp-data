---
name: I_COSTINGOVERHEADGROUPTEXT
description: "Costingoverheadgrouptext"
app_component: CO-PC-PCP-2CL
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
  - CO-PC-PCP
  - interface-view
  - text-view
  - text
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGOVERHEADGROUPTEXT

**Costingoverheadgrouptext**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
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
| `ValuationArea` | ✓ | |  | `bwkey` | `CHAR(4)` | Valuation Area |
| `CostingOverheadGroup` | ✓ | |  | `kosgr` | `CHAR(10)` | Costing Overhead Group |
| `CostingOverheadGroupName` |  | |  | `txzschl` | `CHAR(25)` | Name of Overhead Group |
| `_Language` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ValuationArea` | `I_ValuationArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Cost Overhead Group - Text'

@Metadata.ignorePropagatedAnnotations: true

@VDM: { 
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }
  

@ObjectModel: { 
  dataCategory: #TEXT,
  representativeKey: 'CostingOverheadGroup',
  usageType: { 
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT }

@Search.searchable: true

define view entity I_CostingOverheadGroupText 
     as select from tck15 
     association [0..1] to I_Language           as _Language          on $projection.Language = _Language.Language
     association [0..1] to I_ValuationArea      as _ValuationArea     on $projection.ValuationArea = _ValuationArea.ValuationArea
     {
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language' 
      key spras     as Language, 
      @ObjectModel.foreignKey.association: '_ValuationArea'
      key bwkey     as ValuationArea,
      key kosgr     as CostingOverheadGroup,
          @Search.defaultSearchElement: true
          @Semantics.text: true
          txzschl   as CostingOverheadGroupName,
  
      _Language,
      _ValuationArea
}
```
