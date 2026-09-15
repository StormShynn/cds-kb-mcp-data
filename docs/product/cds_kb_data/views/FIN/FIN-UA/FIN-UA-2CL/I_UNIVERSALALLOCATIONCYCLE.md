---
name: I_UNIVERSALALLOCATIONCYCLE
description: "Universal Allocation Cycle"
app_component: FIN-UA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value
semantic_en: "Universal Allocation Cycle"
tags:
  - FIN
  - component:FIN-UA-2CL
  - FIN-UA
  - FIN-UA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_UNIVERSALALLOCATIONCYCLE

**Universal Allocation Cycle**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationType` |  | |  |  | `CHAR(30)` | Table Name |
| `AllocationCycle` |  | |  |  | `CHAR(10)` | Allocation Cycle |
| `AllocationCycleStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `AllocationCycleName` |  | |  |  | `CHAR(8)` | Allocation Cycle |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AllocationCycleCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `AllocationCycleEndDate` |  | |  |  | `DATS(8)` | End Date |
| `AllocationStatus` |  | |  |  | `CHAR(1)` | Status |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `AllocationCreateDate` |  | |  |  | `DATS(8)` | Entered On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Allocation Cycle Last Modification Time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `AllocCycleLastChangedBySource` |  | |  |  | `CHAR(30)` | Modification Source |
| `AllocationLastExecutedDate` |  | |  |  | `DATS(8)` | Date of the last execution |
| `AllocationLastExecutedByUser` |  | |  |  | `CHAR(12)` | Last Executed By |
| `AllocationLastExecutionTime` |  | |  |  | `TIMS(6)` | Time of Last Processing |
| `AllocationCycleSet` |  | |  |  | `CHAR(12)` | Set ID |
| `ScaleNegativeTracingFactor` |  | |  |  | `NUMC(1)` | Indicator: Scale Negative Tracing Factors |
| `AllocationPostingType` |  | |  |  | `CHAR(1)` | Type of Allocation |
| `AllocationActualPlanVariant` |  | |  |  | `CHAR(1)` | Actual/plan indicator |
| `AllocationJob` |  | |  |  | `CHAR(4)` | Undefined range (can be used for patch levels) |
| `AllocationIsCumulative` |  | |  |  | `CHAR(1)` | Indicator: Cumulative Allocation |
| `AllocIsCumulativeOptimized` |  | |  |  | `CHAR(1)` | Cumulative Processing Indicator (Optimized Version) |
| `AllocHasAggregatedProcess` |  | |  |  | `CHAR(1)` | Aggregated Processing Indicator (Only Tracing Factors) |
| `AllocationCycleRunGroup` |  | |  |  | `CHAR(4)` | Cycle Run Group |
| `AllocationSubstitutionName` |  | |  |  | `CHAR(7)` | Substitution Name |
| `AllocFundMgmtIsActive` |  | |  |  | `CHAR(1)` | Derive Fund and Functional Area as Receiver |
| `AllocationIsBalanceSheetActive` |  | |  |  | `CHAR(1)` | Indicator: Balance Balance Sheet Accounts |
| `AllocHasDerivdFundFrmRcpnt` |  | |  |  | `CHAR(1)` | Derive Funds from Recipient |
| `AllocIsDerivdFuncAreaFrmRcpnt` |  | |  |  | `CHAR(1)` | Derive Functional Area from Recipient |
| `AllocIsDerivdGrantFrmRcpnt` |  | |  |  | `CHAR(1)` | Derive Grant from Recipient |
| `AllocIsDerivdBudgedPerdRcpnt` |  | |  |  | `CHAR(1)` | Derive Budget Period from Receiver |
| `AllocationLedgerGroup` |  | |  |  | `CHAR(4)` | Ledger Group |
| `AllocationIsPeriodShiftActive` |  | |  |  | `CHAR(1)` | CO Allocations: Period Shift Active (Read Previous Period) |
| `AllocationPeriodDeltaSize` |  | |  |  | `NUMC(3)` | CO Allocations: Size of Period Delta |
| `AllocIsProdnMnthDerivd` |  | |  |  | `CHAR(1)` | Allocation: Derive Production Month |
| `AllocationIsVariableQuantity` |  | |  |  | `CHAR(1)` | KALC_VARIABEL |
| `AllocationValuationType` |  | |  |  | `CHAR(1)` | Valuation in Allocations |
| `CycleIsDeltaProcessEnabled` |  | |  |  | `CHAR(1)` | Defines whether a cycle is enabled for delta processing |
| `AllocationCycleIsIterative` |  | |  |  | `CHAR(1)` | Allocation Processing Indicator |
| `CycleIsParallelLedgerEnabled` |  | |  |  | `CHAR(1)` | Defines whether a cycle can be executed for any ledger |
| `CycleIsAttributedLineItmEnbld` |  | |  |  | `CHAR(1)` | Defines whether a cycle is enabled for attributed line item |
