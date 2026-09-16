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
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value
semantic_en: "Universal Allocation Segment"
tags:
  - FIN
  - component:FIN-UA-2CL
  - FIN-UA
  - FIN-UA-2CL
  - interface-view
  - lob:finance
  - metadata-only
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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONSEGMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationType` |  | |  |  | `CHAR(30)` | Table Name |
| `AllocationCycle` |  | |  |  | `CHAR(10)` | Allocation Cycle |
| `AllocationCycleStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `AllocationCycleSegment` |  | |  |  | `NUMC(4)` | Segment Number Within a Cycle |
| `SegmentName` |  | |  |  | `CHAR(10)` | Segment Name |
| `AllocationSegmentPosition` |  | |  |  | `NUMC(4)` | Item of Segment in Cycle |
| `AllocationSenderRule` |  | |  |  | `CHAR(1)` | Sender rule |
| `AllocationReceiverRule` |  | |  |  | `CHAR(1)` | Receiver Rule |
| `AllocationSegmentIsLocked` |  | |  |  | `CHAR(1)` | Segment Status |
| `AllocScNgtvTracingFctr` |  | |  |  | `NUMC(1)` | Indicator: Scale Negative Tracing Factors |
| `SenderTracingFieldGroup` |  | |  |  | `CHAR(12)` | Set ID |
| `SenderFieldGroup` |  | |  |  | `CHAR(12)` | Set ID |
| `ReceiverFieldGroup` |  | |  |  | `CHAR(12)` | Set ID |
| `ReceiverTracingFieldGroup` |  | |  |  | `CHAR(12)` | Set ID |
| `AllocSegmentShareInPercent` |  | |  |  | `DEC(5)` | Sender Share in % |
| `AllocationSenderFixedField1` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField2` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField3` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField4` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField5` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField6` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField7` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField8` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField9` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationSenderFixedField10` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationCurrency` |  | |  |  | `CUKY(5)` | Currency Key Allocations |
| `AllocationReceiverFixedField1` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField2` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField3` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField4` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField5` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField6` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField7` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField8` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField9` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationReceiverFixedField10` |  | |  |  | `CHAR(30)` | Fixed Amount Field |
| `AllocationFieldGroup` |  | |  |  | `CHAR(30)` | Variable Portion Type |
| `AssessmentCostElement` |  | |  |  | `CHAR(10)` | Overhead Allocation Account |
| `AllocationFixedCostCenterCost` |  | |  |  | `CHAR(30)` | Value field name for fixed cost center costs |
| `AllocationVariableCostCtrCost` |  | |  |  | `CHAR(30)` | Value field for variable cost-center costs |
| `AllocationAccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment Field |
| `AllocationSegmentSortField` |  | |  |  | `CHAR(10)` | Segment Sort Field |
| `AllocIsSndrExclAsRcvr` |  | |  |  | `CHAR(1)` | Exclude Sender as Receiver |
| `ManipulationRuleForCyclicMaint` |  | |  |  | `CHAR(4)` | Manipulation Rule |
| `AllocationStructure` |  | |  |  | `CHAR(6)` | Allocation Structure for Settlement/Assessment |
| `AllocationTransferStructure` |  | |  |  | `CHAR(2)` | PA Transfer Structure |
| `AllocSndrFctrPercent` |  | |  |  | `NUMC(7)` | Decimal Places Factor for Sender Weighting Factors |
| `AllocRcvrFctrPercent` |  | |  |  | `NUMC(7)` | Decimal Places Factor of the Receiver Weighting Factors |
