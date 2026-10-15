---
name: ZR_APG_POINT.DDLS
description: "Point Header"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/greltel/abap-point-gate/blob/65b298011b9b083fe643acaeaa5796b4bbfb03ba/src/zr_apg_point.ddls.asddls
semantic_en: "Point Header — CDS view based on zapg_point."
semantic_vi: "Point Header — CDS view dựa trên zapg_point."
keywords:
  - "point"
  - "header"
  - "description"
  - "module"
  - "name"
  - "active"
  - "main"
  - "prog"
tags:
  - AP
  - bo:purchaseorder
  - component:AP
---
# ZR_APG_POINT.DDLS

**Point Header**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/greltel/abap-point-gate/blob/65b298011b9b083fe643acaeaa5796b4bbfb03ba/src/zr_apg_point.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointId` | ✓ | |  | `point_id` |  |  |
| `Description` |  | |  | `description` |  |  |
| `ModuleName` |  | |  | `module_name` |  |  |
| `Active` |  | |  | `active` |  |  |
| `SrcMainProg` |  | |  | `src_main_prog` |  |  |
| `SrcInclude` |  | |  | `src_include` |  |  |
| `SrcLine` |  | |  | `src_line` |  |  |
| `PointTypeCode` |  | |  | `point_type` |  |  |
| `ActivationClass` |  | |  | `activation_class` |  |  |
| `ActiveCriticality` |  | |  | `case active when 'X' then 3 when 'C' then 2 else 1 end` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `CreatedAt` |  | |  | `created_at` |  |  |
| `LastChangedBy` |  | |  | `last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |
| `_Gates` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/greltel/abap-point-gate/blob/65b298011b9b083fe643acaeaa5796b4bbfb03ba/src/zr_apg_point.ddls.asddls](https://github.com/greltel/abap-point-gate/blob/65b298011b9b083fe643acaeaa5796b4bbfb03ba/src/zr_apg_point.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Point Header'
@Search.searchable: true
define root view entity ZR_APG_Point
  as select from zapg_point
  composition [0..*] of ZR_APG_GateHandle as _Gates
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key point_id              as PointId,

      description           as Description,
      module_name           as ModuleName,
      active                as Active,
      src_main_prog         as SrcMainProg,
      src_include           as SrcInclude,
      src_line              as SrcLine,
      point_type            as PointTypeCode,
      activation_class      as ActivationClass,

      // Criticality: 3 = active (green), 2 = custom toggle (yellow), 1 = inactive (red)
      case active
        when 'X' then 3
        when 'C' then 2
        else 1
      end                   as ActiveCriticality,

      @Semantics.user.createdBy: true
      created_by            as CreatedBy,

      @Semantics.systemDateTime.createdAt: true
      created_at            as CreatedAt,

      @Semantics.user.lastChangedBy: true
      last_changed_by       as LastChangedBy,

      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at       as LastChangedAt,

      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at as LocalLastChangedAt,

      _Gates
}
```