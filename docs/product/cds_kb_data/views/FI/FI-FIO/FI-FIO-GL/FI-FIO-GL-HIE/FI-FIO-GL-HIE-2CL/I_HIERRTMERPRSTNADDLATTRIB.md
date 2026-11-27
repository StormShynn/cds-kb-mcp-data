---
name: I_HIERRTMERPRSTNADDLATTRIB
description: "Hierrtmerprstnaddlattrib"
app_component: FI-FIO-GL-HIE-2CL
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
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRTMERPRSTNADDLATTRIB

**Hierrtmerprstnaddlattrib**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
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
| `RuntimeHierarchy` | ✓ | |  | `hryid` | `CHAR(40)` | Hierarchy ID |
| `ValidityEndDate` | ✓ | |  | `cast(hryvalto as fis_datbi preserving type )` | `DATS(8)` | Validity End Date |
| `HierarchyAttributeName` | ✓ | |  | `hryattrname` | `CHAR(30)` | Hierarchy Attribute Name |
| `HierAttributeRangeFromVal` | ✓ | |  | `hryattrvalue` | `CHAR(80)` | Hierarchy Attribute Value |
| `HierarchyType` |  | |  | `hrytyp` | `CHAR(4)` | Hierarchy Type |
| `HierAttributeRangeToVal` |  | |  | `hryattrhvalue` | `CHAR(80)` | Hierarchy Attribute High Value |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_HierRuntimeRepresentation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPADDLATTRDIR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Directory Attribute'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true


define view I_HierRtmeRprstnAddlAttrib
  as select from hrrp_attr_dir_n
  association [0..1] to I_HierRuntimeRepresentation as _Hierarchy on  $projection.RuntimeHierarchy = _Hierarchy.RuntimeHierarchy
                                                                  and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate
{
  key          hryid                                                 as RuntimeHierarchy,
               @Semantics.businessDate.to: true
  key          cast(hryvalto as fis_datbi preserving type )          as ValidityEndDate,
  key          hryattrname                                           as HierarchyAttributeName,
  key          hryattrvalue                                          as HierAttributeRangeFromVal,
               hrytyp                                                as HierarchyType,
               hryattrhvalue                                         as HierAttributeRangeToVal,

               _Hierarchy
}
```
