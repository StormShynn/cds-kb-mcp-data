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
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value
semantic_en: "Universal Allocation Cycle"
semantic_vi: "Universal Allocation Cycle — CDS view cơ bản dựa trên t811c."
keywords:
  - "universal"
  - "allocation"
  - "cycle"
  - "type"
  - "start"
  - "date"
  - "name"
  - "ledger"
tags:
  - FIN
  - component:FIN-UA-2CL
  - FIN-UA
  - FIN-UA-2CL
  - interface-view
  - lob:finance
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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationType` | ✓ | |  | `tab` | `CHAR(30)` | Table Name |
| `AllocationCycle` | ✓ | |  | `cycle` | `CHAR(10)` | Allocation Cycle |
| `AllocationCycleStartDate` | ✓ | |  | `sdate` | `DATS(8)` | Start Date |
| `AllocationCycleName` |  | |  | `cyclename` | `CHAR(8)` | Allocation Cycle |
| `Ledger` |  | |  | `rldnr` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  | `rbukrs` | `CHAR(4)` | Company Code |
| `AllocationCycleCategory` |  | |  | `category` | `CHAR(10)` | Plan Category |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `OperatingConcern` |  | |  | `erkrs` | `CHAR(4)` | Operating Concern |
| `AllocationCycleEndDate` |  | |  | `edate` | `DATS(8)` | End Date |
| `AllocationStatus` |  | |  | `rstatus` | `CHAR(1)` | Status |
| `AllocationFrequency` |  | |  | `freq` | `CHAR(1)` | Frequency |
| `AllocationCreateDate` |  | |  | `crdate` | `DATS(8)` | Entered On |
| `CreatedByUser` |  | |  | `puser` | `CHAR(12)` | Entered By |
| `LastChangeDate` |  | |  | `moddate` | `DATS(8)` | Date of Last Change |
| `LastChangeTime` |  | |  | `modtime` | `TIMS(6)` | Allocation Cycle Last Modification Time |
| `LastChangedByUser` |  | |  | `moduser` | `CHAR(12)` | Last Changed By |
| `AllocCycleLastChangedBySource` |  | |  | `modsource` | `CHAR(30)` | Modification Source |
| `AllocationLastExecutedDate` |  | |  | `lastexec` | `DATS(8)` | Date of the last execution |
| `AllocationLastExecutedByUser` |  | |  | `lexecby` | `CHAR(12)` | Last Executed By |
| `AllocationLastExecutionTime` |  | |  | `timeexec` | `TIMS(6)` | Time of Last Processing |
| `AllocationCycleSet` |  | |  | `cycleset` | `CHAR(12)` | Set ID |
| `ScaleNegativeTracingFactor` |  | |  | `negtest` | `NUMC(1)` | Indicator: Scale Negative Tracing Factors |
| `AllocationPostingType` |  | |  | `alart` | `CHAR(1)` | Type of Allocation |
| `AllocationActualPlanVariant` |  | |  | `ipknz` | `CHAR(1)` | Actual/plan indicator |
| `AllocationJob` |  | |  | `job` | `CHAR(4)` | Undefined range (can be used for patch levels) |
| `AllocationIsCumulative` |  | |  | `kumuflag` | `CHAR(1)` | Indicator: Cumulative Allocation |
| `AllocIsCumulativeOptimized` |  | |  | `xxkumuflag` | `CHAR(1)` | Cumulative Processing Indicator (Optimized Version) |
| `AllocHasAggregatedProcess` |  | |  | `rckumuflag` | `CHAR(1)` | Aggregated Processing Indicator (Only Tracing Factors) |
| `AllocationCycleRunGroup` |  | |  | `proc_group` | `CHAR(4)` | Cycle Run Group |
| `AllocationSubstitutionName` |  | |  | `substid` | `CHAR(7)` | Substitution Name |
| `AllocFundMgmtIsActive` |  | |  | `fm_derive` | `CHAR(1)` | Derive Fund and Functional Area as Receiver |
| `AllocationIsBalanceSheetActive` |  | |  | `gl_xbilk` | `CHAR(1)` | Indicator: Balance Balance Sheet Accounts |
| `AllocHasDerivdFundFrmRcpnt` |  | |  | `fm_derive_fonds` | `CHAR(1)` | Derive Funds from Recipient |
| `AllocIsDerivdFuncAreaFrmRcpnt` |  | |  | `fm_derive_fkber` | `CHAR(1)` | Derive Functional Area from Recipient |
| `AllocIsDerivdGrantFrmRcpnt` |  | |  | `fm_derive_grant` | `CHAR(1)` | Derive Grant from Recipient |
| `AllocIsDerivdBudgedPerdRcpnt` |  | |  | `fm_derive_budpd` | `CHAR(1)` | Derive Budget Period from Receiver |
| `AllocationLedgerGroup` |  | |  | `gl_ldgrp` | `CHAR(4)` | Ledger Group |
| `AllocationIsPeriodShiftActive` |  | |  | `period_lag` | `CHAR(1)` | CO Allocations: Period Shift Active (Read Previous Period) |
| `AllocationPeriodDeltaSize` |  | |  | `period_delta` | `NUMC(3)` | CO Allocations: Size of Period Delta |
| `AllocIsProdnMnthDerivd` |  | |  | `kalc_prodper` | `CHAR(1)` | Allocation: Derive Production Month |
| `AllocationIsVariableQuantity` |  | |  | `variabel` | `CHAR(1)` | KALC_VARIABEL |
| `AllocationValuationType` |  | |  | `valutyp_alloc` | `CHAR(1)` | Valuation in Allocations |
| `CycleIsDeltaProcessEnabled` |  | |  | `enable_delta_process` | `CHAR(1)` | Defines whether a cycle is enabled for delta processing |
| `AllocationCycleIsIterative` |  | |  | `iterflag` | `CHAR(1)` | Allocation Processing Indicator |
| `CycleIsParallelLedgerEnabled` |  | |  | `can_exec_for_other_ledger` | `CHAR(1)` | Defines whether a cycle can be executed for any ledger |
| `CycleIsAttributedLineItmEnbld` |  | |  | `enable_attributed_line_items` | `CHAR(1)` | Defines whether a cycle is enabled for attributed line item |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONCYCLE')/$value)*

```abap
@EndUserText.label: 'Universal Allocation Cycle'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #M }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
define view entity I_UniversalAllocationCycle
  as select from t811c
{
  key tab                          as AllocationType,
  key cycle                        as AllocationCycle,
  key sdate                        as AllocationCycleStartDate,
      cyclename                    as AllocationCycleName,
      rldnr                        as Ledger,
      rbukrs                       as CompanyCode,
      category                     as AllocationCycleCategory,
      kokrs                        as ControllingArea,
      erkrs                        as OperatingConcern,
      edate                        as AllocationCycleEndDate,
      rstatus                      as AllocationStatus,
      freq                         as AllocationFrequency,
      crdate                       as AllocationCreateDate,
      puser                        as CreatedByUser,
      moddate                      as LastChangeDate,
      modtime                      as LastChangeTime,
      moduser                      as LastChangedByUser,
      modsource                    as AllocCycleLastChangedBySource,
      lastexec                     as AllocationLastExecutedDate,
      lexecby                      as AllocationLastExecutedByUser,
      timeexec                     as AllocationLastExecutionTime,
      cycleset                     as AllocationCycleSet,
      negtest                      as ScaleNegativeTracingFactor,
      alart                        as AllocationPostingType,
      ipknz                        as AllocationActualPlanVariant,
      job                          as AllocationJob, //job???
      kumuflag                     as AllocationIsCumulative,
      xxkumuflag                   as AllocIsCumulativeOptimized,
      rckumuflag                   as AllocHasAggregatedProcess,
      proc_group                   as AllocationCycleRunGroup,
      substid                      as AllocationSubstitutionName,
      fm_derive                    as AllocFundMgmtIsActive,
      gl_xbilk                     as AllocationIsBalanceSheetActive,
      fm_derive_fonds              as AllocHasDerivdFundFrmRcpnt,
      fm_derive_fkber              as AllocIsDerivdFuncAreaFrmRcpnt,
      fm_derive_grant              as AllocIsDerivdGrantFrmRcpnt,
      fm_derive_budpd              as AllocIsDerivdBudgedPerdRcpnt,
      gl_ldgrp                     as AllocationLedgerGroup,
      period_lag                   as AllocationIsPeriodShiftActive,
      period_delta                 as AllocationPeriodDeltaSize,
      kalc_prodper                 as AllocIsProdnMnthDerivd,
      variabel                     as AllocationIsVariableQuantity,
      valutyp_alloc                as AllocationValuationType,
      enable_delta_process         as CycleIsDeltaProcessEnabled,
      iterflag                     as AllocationCycleIsIterative,
      can_exec_for_other_ledger    as CycleIsParallelLedgerEnabled,
      enable_attributed_line_items as CycleIsAttributedLineItmEnbld
}
where
     tab = 'ACDOC_CC'
  or tab = 'ACDOC_PC'
  or tab = 'ACDOC_PA'
```
