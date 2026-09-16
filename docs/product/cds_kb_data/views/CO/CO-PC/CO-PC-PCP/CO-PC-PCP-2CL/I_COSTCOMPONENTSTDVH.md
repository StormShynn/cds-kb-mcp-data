---
name: I_COSTCOMPONENTSTDVH
description: "Costcomponentstdvh"
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
# I_COSTCOMPONENTSTDVH

**Costcomponentstdvh**

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
| `CostComponentStructure` | ✓ | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `CostComponent` | ✓ | |  |  | `NUMC(3)` | Cost Component Number |
| `CostComponentName` |  | | `_CostComponentText` | `CostComponentName` | `CHAR(20)` | Cost Component Name |
| `_CostComponentText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostComponentText` | `I_CostComponentText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostComponent',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cost Component'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_CostComponentStdVH
  as select from I_CostComponent
  association [0..1] to I_CostComponentText as _CostComponentText on  _CostComponentText.CostComponentStructure = $projection.CostComponentStructure
                                                                  and _CostComponentText.CostComponent          = $projection.CostComponent
                                                                  and _CostComponentText.Language               = $session.system_language
{

  key CostComponentStructure,
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostComponent,
      @Search.defaultSearchElement: true
      _CostComponentText.CostComponentName,
      
      _CostComponentText     
}
```
