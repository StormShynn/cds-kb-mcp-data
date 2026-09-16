---
name: I_ESTIMATEDCOSTCOSTINGRUNSTDVH
description: "Estimatedcostcostingrunstdvh"
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
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_ESTIMATEDCOSTCOSTINGRUNSTDVH

**Estimatedcostcostingrunstdvh**

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
| `EstimatedCostCostingRun` | ✓ | |  |  | `CHAR(8)` | Name of Costing Run |
| `EstimatedCostCostingRunDate` | ✓ | |  |  | `DATS(8)` | Costing Run Date |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `EstimatedCostCostingRunDesc` |  | |  | `cast(EstimatedCostCostingRunDesc as fpc_costing_run_description preserving type)` | `CHAR(50)` | Description of Costing Run |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics.technicalName: 'IFIESTDCOSTRUNVH'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities:[ #VALUE_HELP_PROVIDER ],
  representativeKey: 'EstimatedCostCostingRun',
  usageType: { dataClass: #MASTER,
               serviceQuality: #C,
               sizeCategory: #M
  }
}
@Metadata.ignorePropagatedAnnotations
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Estimated Cost Costing Run'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_EstimatedCostCostingRunStdVH
  as select from I_EstimatedCostCostingRun
{

      @ObjectModel.text.element: ['EstimatedCostCostingRunDesc']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8 
  key EstimatedCostCostingRun,
  key EstimatedCostCostingRunDate,
  key CostingVersion,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #LOW }
      @Search.fuzzinessThreshold: 0.8
      cast(EstimatedCostCostingRunDesc as fpc_costing_run_description preserving type) as EstimatedCostCostingRunDesc
}
```
