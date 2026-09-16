---
name: I_PCCEVTBSDWIPVARIANCECUBE
description: "Pccevtbsdwipvariancecube"
app_component: CO-PC-OBJ-PER-2CL
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
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - analytical
  - component:CO-PC-OBJ-PER-2CL
  - lob:Controlling
---
# I_PCCEVTBSDWIPVARIANCECUBE

**Pccevtbsdwipvariancecube**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
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
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `OrderType` | ✓ | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` | ✓ | |  |  | `NUMC(2)` | Order Category |
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `ProducedProduct` | ✓ | |  |  | `CHAR(40)` | Material Number for Order |
| `OriginProduct` | ✓ | |  |  | `CHAR(40)` | Origin Product |
| `OriginCostCenter` | ✓ | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance |
| `RmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance in Display Currency |
| `CostVarianceInDspCrcy` |  | |  |  | `CURR(23)` | Total Cost Variance in Display Currency |
| `WIPCostInDspCrcy` |  | |  |  | `CURR(23)` | Work In Process |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_OrderType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_OrderType` | `I_OrderType` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE],
                modelingPattern:#ANALYTICAL_CUBE}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'WIP and Variance for Event-Based PCC - Cube'

define view entity I_PCCEvtBsdWIPVarianceCube 
  with parameters
    @Consumption.valueHelpDefinition: [{entity: {name: 'I_Ledger', element: 'Ledger'}}]
    P_Ledger               : fins_ledger,
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_FiscalYearPeriod', element :'FiscalYearPeriod'} }]
    @Semantics.fiscal.yearPeriod: true
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_FiscalYearPeriod', element :'FiscalYearPeriod'} }]
    @Semantics.fiscal.yearPeriod: true
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_CurrencyRole', element :'CurrencyRole'} }]
    P_CurrencyRole         : fac_crcyrole
    as select from P_PCCEvtBsdWIPVarc(   P_Ledger               : $parameters.P_Ledger,
                                         P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
                                         P_ToFiscalYearPeriod   : $parameters.P_ToFiscalYearPeriod,
                                         P_CurrencyRole         : $parameters.P_CurrencyRole )
                                                                                                           
    association [0..1] to I_Ledger                     as _Ledger                     on  $projection.Ledger = _Ledger.Ledger
    association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
    association [0..1] to I_Order                      as _Order                      on  $projection.OrderID = _Order.OrderID
    association [0..1] to I_OrderType                  as _OrderType                  on  $projection.OrderType = _OrderType.OrderType
    association [0..1] to I_OrderCategory              as _OrderCategory              on  $projection.OrderCategory = _OrderCategory.OrderCategory
    association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
    association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
    association [0..1] to I_Plant                      as _Plant                      on  $projection.Plant = _Plant.Plant
    association [0..1] to I_Product                    as _Product                    on  $projection.ProducedProduct = _Product.Product
    association [0..1] to I_Currency                   as _Currency                   on  $projection.DisplayCurrency = _Currency.Currency
{
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Order'
  key OrderID,
      @ObjectModel.foreignKey.association: '_OrderType'
  key OrderType,
      @ObjectModel.foreignKey.association: '_OrderCategory'
  key OrderCategory,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_Product'
  key ProducedProduct,
  key OriginProduct,
  key OriginCostCenter,
  key OriginCostCtrActivityType,

      DisplayCurrency,
      
      /////////////////////////////////////////////////////////////////////////////////////
      // Variances
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InptPrVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InptQtyVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RsceUsgeVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      OutpPrVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RmngVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CostVarianceInDspCrcy,

      /////////////////////////////////////////////////////////////////////////////////////
      // WIP
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      WIPCostInDspCrcy,
      /////////////////////////////////////////////////////////////////////////////////////
      // Associations
      /////////////////////////////////////////////////////////////////////////////////////
      _Ledger,                    
      _CompanyCode,               
      _Order,                     
      _OrderType,                 
      _OrderCategory,             
      _ChartOfAccounts,           
      _GLAccountInChartOfAccounts,
      _Plant,                     
      _Product,                   
      _Currency               
}
```
