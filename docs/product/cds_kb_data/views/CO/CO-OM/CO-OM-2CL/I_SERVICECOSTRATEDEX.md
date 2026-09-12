---
name: I_SERVICECOSTRATEDEX
description: "Servicecostratedex"
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
  - data-extraction
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTRATEDEX

**Servicecostratedex**

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
| `AccountingCostRateUUID` | ✓ | |  |  | `RAW(16)` | Cost Rate UUID |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency and Valuation Type |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `IsIntercompanyRate` |  | |  |  | `CHAR(1)` | Intercompany Cost Rate Indicator |
| `ReceivingCompanyCode` |  | |  |  | `CHAR(4)` | Receiving Company Code |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | From Fiscal Year |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | From Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | To Fiscal Year |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | To Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostRateTotalAmount` |  | |  |  | `CURR(23)` | Total Rate |
| `CostRateFixedAmount` |  | |  |  | `CURR(23)` | Fixed Rate |
| `CostRateVarblAmount` |  | |  |  | `CURR(23)` | Variable Rate |
| `CostRateScaleFactor` |  | |  |  | `DEC(5)` | Per |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `ComponentBreakdown` |  | |  |  | `CHAR(16)` | Breakdown ID |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Data Extraction for Service Cost Rate'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #A,
        dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [
        #EXTRACTION_DATA_SOURCE
    ]
}

@ObjectModel.sapObjectNodeType.name: 'ServiceCostRate'

@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}

@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_ServiceCostRateDEX
  as select from P_ServiceCostRateDEX
{
  key AccountingCostRateUUID,
      CurrencyRole,
      Ledger,
      CompanyCode,
      CostCenter,
      ActivityType,
      IsIntercompanyRate,
      ReceivingCompanyCode,
      ServiceCostLevel,
      PersonnelNumber,
      WBSElementInternalID,
      WBSElementExternalID,
      WorkItem,
      TimeSheetOvertimeCategory,
      ValidityStartFiscalYear,
      ValidityStartFiscalPeriod,
      ValidityStartDate,
      ValidityEndFiscalYear,
      ValidityEndFiscalPeriod,
      ValidityEndDate,
      ControllingArea,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateTotalAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateFixedAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateVarblAmount,
      CostRateScaleFactor,
      PlanningCategory,
      BusinessTransactionType,
      ComponentBreakdown
}
```
