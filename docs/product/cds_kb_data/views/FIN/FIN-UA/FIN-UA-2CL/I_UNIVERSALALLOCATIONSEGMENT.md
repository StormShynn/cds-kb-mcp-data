---
name: I_UNIVERSALALLOCATIONSEGMENT
description: "Universal Allocation Segment"
app_component: FIN-UA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value
semantic_en: "Universal Allocation Segment"
semantic_vi: "Universal Allocation Segment — CDS view cơ bản dựa trên t811s."
keywords:
  - "universal"
  - "allocation"
  - "segment"
  - "type"
  - "cycle"
  - "start"
  - "date"
  - "name"
tags:
  - FIN
  - component:FIN-UA-2CL
  - FIN-UA
  - FIN-UA-2CL
  - interface-view
  - lob:finance
---
# I_UNIVERSALALLOCATIONSEGMENT

**Universal Allocation Segment**

| Property | Value |
|---|---|
| App Component | `FIN-UA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationType` | ✓ | |  | `tab` | `CHAR(30)` | Table Name |
| `AllocationCycle` | ✓ | |  | `cycle` | `CHAR(10)` | Allocation Cycle |
| `AllocationCycleStartDate` | ✓ | |  | `sdate` | `DATS(8)` | Start Date |
| `AllocationCycleSegment` | ✓ | |  | `cast(seqnr as fco_alloc_segment_number preserving type )` | `NUMC(4)` | Segment Number Within a Cycle |
| `SegmentName` |  | |  | `cast(name as fco_segment_name preserving type )` | `CHAR(10)` | Segment Name |
| `AllocationSegmentPosition` |  | |  | `seqpos` | `NUMC(4)` | Item of Segment in Cycle |
| `AllocationSenderRule` |  | |  | `cast(srule as fco_alloc_sender_rule preserving type )` | `CHAR(1)` | Sender rule |
| `AllocationReceiverRule` |  | |  | `cast(rrule as fco_alloc_receiver_rule preserving type )` | `CHAR(1)` | Receiver Rule |
| `AllocationSegmentIsLocked` |  | |  | `cast( active as fcoua_segment_status preserving type )` | `CHAR(1)` | Segment Status |
| `AllocScNgtvTracingFctr` |  | |  | `negtest` | `NUMC(1)` | Indicator: Scale Negative Tracing Factors |
| `SenderTracingFieldGroup` |  | |  | `scset` | `CHAR(12)` | Set ID |
| `SenderFieldGroup` |  | |  | `sset` | `CHAR(12)` | Set ID |
| `ReceiverFieldGroup` |  | |  | `rset` | `CHAR(12)` | Set ID |
| `ReceiverTracingFieldGroup` |  | |  | `rcset` | `CHAR(12)` | Set ID |
| `AllocSegmentShareInPercent` |  | |  | `cast(spercent as fco_alloc_sender_share_percent preserving type )` | `DEC(5)` | Sender Share in % |
| `AllocationSenderFixedField1` |  | |  | `sffeld1` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField2` |  | |  | `sffeld2` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField3` |  | |  | `sffeld3` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField4` |  | |  | `sffeld4` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField5` |  | |  | `sffeld5` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField6` |  | |  | `sffeld6` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField7` |  | |  | `sffeld7` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField8` |  | |  | `sffeld8` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField9` |  | |  | `sffeld9` | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField10` |  | |  | `sffeld10` | `CHAR(30)` | Fixed Amount Field |
| `AllocationCurrency` |  | |  | `facurr` | `CUKY(5)` | Currency Key Allocations |
| `AllocationReceiverFixedField1` |  | |  | `rffeld1` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField2` |  | |  | `rffeld2` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField3` |  | |  | `rffeld3` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField4` |  | |  | `rffeld4` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField5` |  | |  | `rffeld5` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField6` |  | |  | `rffeld6` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField7` |  | |  | `rffeld7` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField8` |  | |  | `rffeld8` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField9` |  | |  | `rffeld9` | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField10` |  | |  | `rffeld10` | `CHAR(30)` | Fixed Amount Field |
| `AllocationFieldGroup` |  | |  | `cast( rcdata as fco_alloc_var_portion_type preserving type)` | `CHAR(30)` | Variable Portion Type |
| `AssessmentCostElement` |  | |  | `cast( asacc as fco_alloc_asacc preserving type )` | `CHAR(10)` | Overhead Allocation Account |
| `AllocationFixedCostCenterCost` |  | |  | `pafldf` | `CHAR(30)` | Value field name for fixed cost center costs |
| `AllocationVariableCostCtrCost` |  | |  | `pafldg` | `CHAR(30)` | Value field for variable cost-center costs |
| `AllocationAccountAssignment` |  | |  | `rrfeld1` | `CHAR(30)` | Account Assignment Field |
| `AllocationSegmentSortField` |  | |  | `sortfield` | `CHAR(10)` | Segment Sort Field |
| `AllocIsSndrExclAsRcvr` |  | |  | `sender_not` | `CHAR(1)` | Exclude Sender as Receiver |
| `ManipulationRuleForCyclicMaint` |  | |  | `cast(mrule as fco_alloc_manipulation_rule preserving type )` | `CHAR(4)` | Manipulation Rule |
| `AllocationStructure` |  | |  | `cast(absch as fco_allocation_structure preserving type )` | `CHAR(6)` | Allocation Structure for Settlement/Assessment |
| `AllocationTransferStructure` |  | |  | `ersch` | `CHAR(2)` | PA Transfer Structure |
| `AllocSndrFctrPercent` |  | |  | `sweight_fact` | `NUMC(7)` | Decimal Places Factor for Sender Weighting Factors |
| `AllocRcvrFctrPercent` |  | |  | `rweight_fact` | `NUMC(7)` | Decimal Places Factor of the Receiver Weighting Factors |
| `_ReceiverRule` | | ✓ | | | | |
| `_SenderRule` | | ✓ | | | | |
| `_SegmentStatus` | | ✓ | | | | |
| `_AllocationFieldGroupText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReceiverRule` | `I_AllocationReceiverRule` | [1..1] |
| `_SenderRule` | `I_AllocationSenderRule` | [1..1] |
| `_SegmentStatus` | `I_UnivAllocationSegmentStatus` | [1..1] |
| `_AllocationFieldGroupText` | `I_AllocationFieldGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value)*

```abap
@EndUserText.label: 'Universal Allocation Segment'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory: #L }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
define view entity I_UniversalAllocationSegment
  as select from t811s

  association [1..1] to I_AllocationReceiverRule    as _ReceiverRule  on  $projection.AllocationReceiverRule = _ReceiverRule.AllocationReceiverRule
  association [1..1] to I_AllocationSenderRule      as _SenderRule    on  $projection.AllocationSenderRule = _SenderRule.AllocationSenderRule
  association [1..1] to I_UnivAllocationSegmentStatus as _SegmentStatus on  $projection.AllocationSegmentIsLocked = _SegmentStatus.AllocationStatus
  association [0..*] to I_AllocationFieldGroupText as _AllocationFieldGroupText on $projection.AllocationFieldGroup = _AllocationFieldGroupText.AllocationFieldGroup
                                                                                and $projection.AllocationType = _AllocationFieldGroupText.AllocationType
{
  key tab                                                               as AllocationType,
  key cycle                                                             as AllocationCycle,
  key sdate                                                             as AllocationCycleStartDate,
  key cast(seqnr as fco_alloc_segment_number preserving type )          as AllocationCycleSegment,
      cast(name as fco_segment_name preserving type )                   as SegmentName,
      seqpos                                                            as AllocationSegmentPosition,
      cast(srule as fco_alloc_sender_rule preserving type )             as AllocationSenderRule,
      cast(rrule as fco_alloc_receiver_rule preserving type )           as AllocationReceiverRule,
      cast( active as fcoua_segment_status    preserving type )         as AllocationSegmentIsLocked,
      negtest                                                           as AllocScNgtvTracingFctr,
      scset                                                             as SenderTracingFieldGroup,
      sset                                                              as SenderFieldGroup,
      rset                                                              as ReceiverFieldGroup,
      rcset                                                             as ReceiverTracingFieldGroup,
      cast(spercent as fco_alloc_sender_share_percent preserving type ) as AllocSegmentShareInPercent,
      sffeld1                                                           as AllocationSenderFixedField1,
      sffeld2                                                           as AllocationSenderFixedField2,
      sffeld3                                                           as AllocationSenderFixedField3,
      sffeld4                                                           as AllocationSenderFixedField4,
      sffeld5                                                           as AllocationSenderFixedField5,
      sffeld6                                                           as AllocationSenderFixedField6,
      sffeld7                                                           as AllocationSenderFixedField7,
      sffeld8                                                           as AllocationSenderFixedField8,
      sffeld9                                                           as AllocationSenderFixedField9,
      sffeld10                                                          as AllocationSenderFixedField10,
      facurr                                                            as AllocationCurrency,
      rffeld1                                                           as AllocationReceiverFixedField1,
      rffeld2                                                           as AllocationReceiverFixedField2,
      rffeld3                                                           as AllocationReceiverFixedField3,
      rffeld4                                                           as AllocationReceiverFixedField4,
      rffeld5                                                           as AllocationReceiverFixedField5,
      rffeld6                                                           as AllocationReceiverFixedField6,
      rffeld7                                                           as AllocationReceiverFixedField7,
      rffeld8                                                           as AllocationReceiverFixedField8,
      rffeld9                                                           as AllocationReceiverFixedField9,
      rffeld10                                                          as AllocationReceiverFixedField10,
      cast( rcdata as fco_alloc_var_portion_type preserving type)        as AllocationFieldGroup,
      cast( asacc as fco_alloc_asacc preserving type )                  as AssessmentCostElement,
      pafldf                                                            as AllocationFixedCostCenterCost,
      pafldg                                                            as AllocationVariableCostCtrCost,
      rrfeld1                                                           as AllocationAccountAssignment,
      sortfield                                                         as AllocationSegmentSortField,
      sender_not                                                        as AllocIsSndrExclAsRcvr,
      cast(mrule as fco_alloc_manipulation_rule preserving type )       as ManipulationRuleForCyclicMaint,
      cast(absch as fco_allocation_structure preserving type )          as AllocationStructure,
      ersch                                                             as AllocationTransferStructure,
      sweight_fact                                                      as AllocSndrFctrPercent,
      rweight_fact                                                      as AllocRcvrFctrPercent,

      _ReceiverRule,
      _SenderRule,
      _SegmentStatus,
      _AllocationFieldGroupText
}
where
     tab = 'ACDOC_CC'
  or tab = 'ACDOC_PC'
  or tab = 'ACDOC_PA'
```
