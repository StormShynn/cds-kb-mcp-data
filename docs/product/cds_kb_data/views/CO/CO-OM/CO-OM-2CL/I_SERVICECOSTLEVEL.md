---
name: I_SERVICECOSTLEVEL
description: "Servicecostlevel"
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
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTLEVEL

**Servicecostlevel**

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
| `ServiceCostLevel` | ✓ | |  | `srv_cost_level` | `NUMC(4)` | Service Cost Level |
| `ValidityStartDate` | ✓ | |  | `start_date` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `end_date` | `DATS(8)` | Valid To Date |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ServiceCostLevelText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRV_COST_LVL'
//@ClientDependent: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Service Cost Level'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE]

define view I_ServiceCostLevel
  as select from fcoc_sc_level as ServiceCostLevel
  association [0..*] to I_ServiceCostLevelText as _Text on $projection.ServiceCostLevel = _Text.ServiceCostLevel
{
      @ObjectModel.text.association: '_Text'
  key srv_cost_level      as ServiceCostLevel,
  key start_date          as ValidityStartDate,

      end_date            as ValidityEndDate,

      _Text
}
```
