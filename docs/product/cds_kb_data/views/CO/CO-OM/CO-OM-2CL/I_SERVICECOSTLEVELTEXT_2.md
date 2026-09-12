---
name: I_SERVICECOSTLEVELTEXT_2
description: "Servicecostleveltext 2"
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
  - text
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTLEVELTEXT_2

**Servicecostleveltext 2**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ServiceCostLevelName` |  | |  | `name` | `CHAR(30)` | Description |
| `ServiceCostLevelShortName` |  | |  | `short_name` | `CHAR(10)` | Short Description |
| `ValidityStartDate` |  | |  | `start_date` | `DATS(8)` | Valid-From Date |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cost Level - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ServiceCostLevel'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
    }
  }

@Search.searchable: true

define view entity I_ServiceCostLevelText_2
  as select from fcoc_sc_levelt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key fcoc_sc_levelt.srv_cost_level as ServiceCostLevel,
  
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key fcoc_sc_levelt.langu          as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      fcoc_sc_levelt.name           as ServiceCostLevelName,
      fcoc_sc_levelt.short_name     as ServiceCostLevelShortName,
      
      fcoc_sc_levelt.start_date     as ValidityStartDate,

      _Language
}
```
