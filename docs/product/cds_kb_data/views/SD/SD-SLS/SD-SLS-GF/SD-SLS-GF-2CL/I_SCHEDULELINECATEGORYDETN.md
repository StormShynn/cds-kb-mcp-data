---
name: I_SCHEDULELINECATEGORYDETN
description: "Schedule Line Cat Detn for SalesDoc Item"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCHEDULELINECATEGORYDETN')/$value
semantic_en: "Schedule Line Cat Detn for SalesDoc Item"
semantic_vi: "Schedule Line Cat Detn for SalesDoc Item — CDS view giao diện dựa trên tvepz."
keywords:
  - "schedule"
  - "line"
  - "cat"
  - "detn"
  - "for"
  - "salesdoc"
  - "item"
  - "sales"
  - "document"
  - "category"
  - "type"
  - "addl"
  - "sched"
  - "category1"
  - "category2"
tags:
  - SD
  - bo:salesorganization
  - component:SD-SLS-GF-2CL
  - interface-view
  - lob:sales & distribution
  - SD-SLS
  - SD-SLS-GF
  - SD-SLS-GF-2CL
---
# I_SCHEDULELINECATEGORYDETN

**Schedule Line Cat Detn for SalesDoc Item**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCHEDULELINECATEGORYDETN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentItemCategory` | ✓ | |  | `pstyv` | `CHAR(4)` | Sales Document Item Category |
| `MRPType` | ✓ | |  | `dismm` | `CHAR(2)` | MRP Type |
| `ScheduleLineCategory` |  | |  | `cast(tvepz.ettyp as vdm_sd_schedule_line_cat preserving type )` | `CHAR(2)` | Schedule Line Category |
| `AddlSalesDocSchedLineCategory1` |  | |  | `cast(tvepz.etty1 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory2` |  | |  | `cast(tvepz.etty2 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory3` |  | |  | `cast(tvepz.etty3 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory4` |  | |  | `cast(tvepz.etty4 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory5` |  | |  | `cast(tvepz.etty5 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory6` |  | |  | `cast(tvepz.etty6 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory7` |  | |  | `cast(tvepz.etty7 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory8` |  | |  | `cast(tvepz.etty8 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `AddlSalesDocSchedLineCategory9` |  | |  | `cast(tvepz.etty9 as vdm_sd_alternative_schdln_cat preserving type )` | `CHAR(2)` | Alternative Schedule Line Category |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CustomerRequirementType` |  | |  | `cast(tvepz.bedae as vdm_bedku preserving type )` | `CHAR(4)` | Customer Requirement Type |
| `_ItemCategory` | | ✓ | | | | |
| `_MRPType` | | ✓ | | | | |
| `_ScheduleLineCategory` | | ✓ | | | | |
| `_CustomerRequirementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_MRPType` | `I_MRPType` | [0..1] |
| `_ScheduleLineCategory` | `I_ScheduleLineCategory` | [0..1] |
| `_CustomerRequirementType` | `I_IndependentRequirementType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCHEDULELINECATEGORYDETN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCHEDULELINECATEGORYDETN')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
  sqlViewName: 'ISLINEITMCATDETN',
  compiler.compareFilter: true,
  buffering: {
    type: #FULL,
    status: #ACTIVE
  }
}

@VDM.viewType: #BASIC

@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Schedule Line Cat Detn for SalesDoc Item'

define view I_ScheduleLineCategoryDetn
  as select from tvepz

  association [0..1] to I_SalesDocumentItemCategory  as _ItemCategory               on $projection.SalesDocumentItemCategory  = _ItemCategory.SalesDocumentItemCategory
  association [0..1] to I_MRPType                    as _MRPType                    on $projection.MRPType                    = _MRPType.MRPType
  association [0..1] to I_ScheduleLineCategory       as _ScheduleLineCategory       on $projection.ScheduleLineCategory       = _ScheduleLineCategory.ScheduleLineCategory
  association [0..1] to I_IndependentRequirementType as _CustomerRequirementType    on $projection.CustomerRequirementType    = _CustomerRequirementType.IndependentRequirementType

{
      @ObjectModel.foreignKey.association: '_ItemCategory'
  key tvepz.pstyv                                                         as SalesDocumentItemCategory,
  
      @ObjectModel.foreignKey.association: '_MRPType'
  key tvepz.dismm                                                         as MRPType,
  
      @ObjectModel.foreignKey.association: '_ScheduleLineCategory'
      cast(tvepz.ettyp as vdm_sd_schedule_line_cat preserving type )      as ScheduleLineCategory,

      cast(tvepz.etty1 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory1,
      
      cast(tvepz.etty2 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory2,

      cast(tvepz.etty3 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory3,

      cast(tvepz.etty4 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory4,

      cast(tvepz.etty5 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory5,

      cast(tvepz.etty6 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory6,

      cast(tvepz.etty7 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory7,

      cast(tvepz.etty8 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory8,

      cast(tvepz.etty9 as vdm_sd_alternative_schdln_cat preserving type ) as AddlSalesDocSchedLineCategory9,

      tvepz.ernam                                                         as CreatedByUser,
      
      @ObjectModel.foreignKey.association: '_CustomerRequirementType'
      cast(tvepz.bedae as vdm_bedku preserving type )                     as CustomerRequirementType,
      
      _ItemCategory,
      _MRPType,
      _ScheduleLineCategory,
      _CustomerRequirementType
}
```
