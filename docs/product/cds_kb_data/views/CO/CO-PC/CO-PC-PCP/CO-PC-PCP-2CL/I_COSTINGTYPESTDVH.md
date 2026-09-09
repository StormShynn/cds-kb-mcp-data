---
name: I_COSTINGTYPESTDVH
description: "Costingtypestdvh"
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
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTINGTYPESTDVH

**Costingtypestdvh**

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
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingTypeName` |  | | `_CostingTypeText` | `CostingTypeName` | `CHAR(25)` | Name of Costing Type |
| `_CostingTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostingTypeText` | `I_CostingTypeText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostingType',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  },
  resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Costing Type'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_CostingTypeStdVH
  as select from I_CostingType
  association [0..1] to I_CostingTypeText as _CostingTypeText on  _CostingTypeText.CostingType = $projection.CostingType
                                                              and _CostingTypeText.Language    = $session.system_language
{
      @ObjectModel.text.element: [ 'CostingTypeName' ]
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostingType,
      @Search.defaultSearchElement: true
      _CostingTypeText.CostingTypeName,

      _CostingTypeText      
}
```
