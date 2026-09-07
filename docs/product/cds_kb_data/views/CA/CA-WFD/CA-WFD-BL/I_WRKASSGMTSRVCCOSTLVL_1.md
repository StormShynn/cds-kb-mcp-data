---
name: I_WRKASSGMTSRVCCOSTLVL_1
description: "Wrkassgmtsrvccostlvl 1"
app_component: CA-WFD-BL
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
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WRKASSGMTSRVCCOSTLVL_1

**Wrkassgmtsrvccostlvl 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
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
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` | `CHAR(2)` | Workforce Country ISO Code |
| `StartDate` | ✓ | | `_SrvcCostLvl` | `StartDate` | `DATS(8)` | Start Date |
| `WorkforcePersonExternalID` |  | | `_Assignment` | `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `EndDate` |  | | `_SrvcCostLvl` | `EndDate` | `DATS(8)` | End Date |
| `ServiceCostLevel` |  | | `_SrvcCostLvl` | `ServiceCostLevel` | `NUMC(4)` | Service Cost Level |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person Service Cost Level'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WrkAssgmtSrvcCostLvl_1

  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WrkAssgmtSrvcCostLvl_2   as _SrvcCostLvl on _Assignment.WorkAssignment = _SrvcCostLvl.WorkforceAssignment


  association [0..1] to I_WorkAssignment_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode

  association [1]    to I_WorkforcePerson_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID

{
  key _Assignment.WorkAssignmentExternalID,
  key _Assignment.Country2DigitISOCode,
  key _SrvcCostLvl.StartDate,
      _Assignment.WorkforcePersonExternalID,
      _SrvcCostLvl.EndDate,
      _SrvcCostLvl.ServiceCostLevel,
      @Semantics.booleanIndicator: true
      @UI.hidden: true
      _Assignment.IsBlocked,


      /*Association */
      _WorkAssignment,
      _WorkforcePerson
}
```
