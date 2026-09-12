---
name: I_INVENTORYAMTBYFSCLPERD
description: "Inventoryamtbyfsclperd"
app_component: CO-PC-ML-2CL
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
  - CO
  - CO-PC
  - CO-PC-ML
  - interface-view
  - inventory
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Inventory
---
# I_INVENTORYAMTBYFSCLPERD

**Inventoryamtbyfsclperd**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
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
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate Number for Cost Est. w/o Qty Structure |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InvtryValnSpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document Number of Valuated Special Inventory |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item Number of Valuated Special Inventory |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier of Valuated Special Inventory |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `FiscalPeriod` |  | |  | `$parameters.P_FiscalPeriod` | `NUMC(3)` | Posting Period |
| `FiscalYear` |  | |  | `$parameters.P_FiscalYear` | `NUMC(4)` | Fiscal Year |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Currency Key |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Inventory Amount for Fiscal Period'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InventoryAmtByFsclPerd with parameters
  P_FiscalPeriod : poper, 
  P_FiscalYear : gjahr
//  as select from P_acdoca_m_extract_agg(P_poper :  $parameters.P_FiscalPeriod,
//                                    P_ryear :  $parameters.P_FiscalYear )
 as select from R_MatlValnEndgInvtryByFsclPerd( P_FiscalPeriod: $parameters.P_FiscalPeriod, P_FiscalYear: $parameters.P_FiscalYear )
{

  key  Ledger,
  key  CompanyCode,
  key  CostEstimate,
       Material,
       ValuationType,
       ValuationArea,
       InvtryValnSpecialStockType,
       SalesOrder,
       SalesOrderItem,
       Supplier,
       WBSElementInternalID,
       $parameters.P_FiscalPeriod as FiscalPeriod,
       $parameters.P_FiscalYear as FiscalYear,
       @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
       ValuationQuantity,
       UnitOfMeasure,
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AmountInCompanyCodeCurrency,
       CompanyCodeCurrency,
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AmountInGlobalCurrency,
       GlobalCurrency,
       @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
       AmountInFreeDefinedCurrency1,
       FreeDefinedCurrency1
}
```
