---
name: I_MFGORDEREVTBSDWIPVARIANCE
description: "Mfgorderevtbsdwipvariance"
app_component: CO-PC-OBJ-ORD-2CL
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
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_MFGORDEREVTBSDWIPVARIANCE

**Mfgorderevtbsdwipvariance**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
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
| `OrderItem` | ✓ | |  |  | `NUMC(4)` | Order Item |
| `OrderType` | ✓ | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` | ✓ | |  |  | `NUMC(2)` | Order Category |
| `ResultAnalysisInternalID` | ✓ | |  |  | `CHAR(6)` | Event-Based Processing Key |
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `ProducedProduct` | ✓ | |  |  | `CHAR(40)` | Material Number for Order |
| `OriginProduct` | ✓ | |  |  | `CHAR(40)` | Origin Product |
| `OriginCostCenter` | ✓ | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | ✓ | |  |  | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` |  | |  | `cast(WBSElementInternalID as fco_ebpr_wbs_element_int_id preserving type )` | `NUMC(8)` | WBS Element |
| `ControllingArea` |  | | `_Order` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `OrderDescription` |  | | `_Order` | `OrderDescription` | `CHAR(40)` | Order Description |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSDescription` |  | | `_WBSElement` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance |
| `RmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance in Display Currency |
| `CostVarianceInDspCrcy` |  | |  |  | `CURR(23)` | Total Cost Variance in Display Currency |
| `WIPCostInDspCrcy` |  | |  |  | `CURR(23)` | Work In Process |
| `UnrlzdCostRsrvAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `TotalWIPAmountInDspCrcy` |  | |  |  | `CURR(23)` | Total Work in Process Amount in Display Currency |
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
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenterActivityType` | | ✓ | | | | |
| `_EventBasedProcessingKey` | | ✓ | | | | |
| `_EventBasedProcessingKeyText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_OrderTypeText` | | ✓ | | | | |
| `_OrderCategoryText` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_GLAccountText` | | ✓ | | | | |
| `_ProducedProductText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_OriginCostCenterText` | | ✓ | | | | |
| `_CostCenterActivityTypeText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

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
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCenterActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_EventBasedProcessingKey` | `I_EventBasedProcessingKey` | [0..1] |
| `_EventBasedProcessingKeyText` | `I_EventBasedProcessingKeyText` | [0..*] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_OrderTypeText` | `I_OrderTypeText` | [0..*] |
| `_OrderCategoryText` | `I_OrderCategoryText` | [0..*] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_GLAccountText` | `I_GLAccountText` | [0..*] |
| `_ProducedProductText` | `I_ProductText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_OriginCostCenterText` | `I_CostCenterText` | [0..*] |
| `_CostCenterActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDEBWIPVRC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE] }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Event-Based WIP and Variance of Manufacturing Order'
define view I_MfgOrderEvtBsdWIPVariance
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
  as select from P_MfgOrderEvtBsdWIPVarc4( P_Ledger               : :P_Ledger,
                                           P_FromFiscalYearPeriod : :P_FromFiscalYearPeriod,
                                           P_ToFiscalYearPeriod   : :P_ToFiscalYearPeriod,
                                           P_CurrencyRole         : :P_CurrencyRole )
  association [0..1] to I_Ledger                      as _Ledger                      on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Order                       as _Order                       on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_OrderType                   as _OrderType                   on  $projection.OrderType = _OrderType.OrderType
  association [0..1] to I_OrderCategory               as _OrderCategory               on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts  as _GLAccountInChartOfAccounts  on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Product                     as _Product                     on  $projection.ProducedProduct = _Product.Product
  association [0..1] to I_Currency                    as _Currency                    on  $projection.DisplayCurrency = _Currency.Currency
  association [0..1] to I_SalesOrder                  as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem              as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                      and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData         as _WBSElement                  on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..*] to I_CostCenter                  as _CostCenter                  on  $projection.ControllingArea   = _CostCenter.ControllingArea
                                                                                      and $projection.OriginCostCenter  = _CostCenter.CostCenter
                                                                                    //and _CostCenter.ValidityStartDate <= $session.system_date
                                                                                    //and _CostCenter.ValidityEndDate   >= $session.system_date
                                                                                    //and '99991231'                   = _CostCenter.ValidityEndDate
  association [0..*] to I_CostCenterActivityType      as _CostCenterActivityType      on  $projection.ControllingArea               = _CostCenterActivityType.ControllingArea
                                                                                      and $projection.OriginCostCtrActivityType     = _CostCenterActivityType.CostCtrActivityType
                                                                                    //and _CostCenterActivityType.ValidityStartDate <= $session.system_date
                                                                                    //and _CostCenterActivityType.ValidityEndDate   >= $session.system_date
                                                                                    //and '99991231'                                = _CostCenterActivityType.ValidityEndDate
  association [0..1] to I_EventBasedProcessingKey     as _EventBasedProcessingKey     on  $projection.ResultAnalysisInternalID = _EventBasedProcessingKey.EventBasedProcessingKey
  association [0..*] to I_EventBasedProcessingKeyText as _EventBasedProcessingKeyText on  $projection.ResultAnalysisInternalID = _EventBasedProcessingKeyText.EventBasedProcessingKey
  association [0..*] to I_LedgerText                  as _LedgerText                  on  $projection.Ledger = _LedgerText.Ledger
  association [0..*] to I_OrderTypeText               as _OrderTypeText               on  $projection.OrderType = _OrderTypeText.OrderType
  association [0..*] to I_OrderCategoryText           as _OrderCategoryText           on  $projection.OrderCategory = _OrderCategoryText.OrderCategory
  association [0..*] to I_ChartOfAccountsText         as _ChartOfAccountsText         on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..*] to I_GLAccountText               as _GLAccountText               on  $projection.ChartOfAccounts = _GLAccountText.ChartOfAccounts
                                                                                      and $projection.GLAccount = _GLAccountText.GLAccount
  association [0..*] to I_ProductText                 as _ProducedProductText         on  $projection.ProducedProduct = _ProducedProductText.Product
  association [0..*] to I_ProductText                 as _ProductText                 on  $projection.OriginProduct = _ProductText.Product
  association [0..*] to I_CostCenterText              as _OriginCostCenterText        on  $projection.ControllingArea  = _OriginCostCenterText.ControllingArea
                                                                                      and $projection.OriginCostCenter = _OriginCostCenterText.CostCenter
  association [0..*] to I_CostCenterActivityTypeText  as _CostCenterActivityTypeText  on  $projection.ControllingArea           = _CostCenterActivityTypeText.ControllingArea
                                                                                      and $projection.OriginCostCtrActivityType = _CostCenterActivityTypeText.CostCtrActivityType
  association [0..*] to I_CurrencyText                as _CurrencyText                on  $projection.DisplayCurrency = _CurrencyText.Currency
  association [0..1] to I_ControllingArea             as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea
{
      @ObjectModel.foreignKey.association: '_Ledger'
      @ObjectModel.text.association: '_LedgerText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' }, useAsTemplate: true } ]
  key Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.element: ['CompanyCodeName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true } ]
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Order'
      @ObjectModel.text.element: ['OrderDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' }, useAsTemplate: true } ]
  key OrderID,
  key OrderItem,
      @ObjectModel.foreignKey.association: '_OrderType'
      @ObjectModel.text.association: '_OrderTypeText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderTypeVH', element: 'OrderType' }, useAsTemplate: true } ]
  key OrderType,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      @ObjectModel.text.association: '_OrderCategoryText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderCategory', element: 'OrderCategory' }, useAsTemplate: true } ]
  key OrderCategory,
      @ObjectModel.text.association: '_EventBasedProcessingKeyText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EventBasedProcessingKeyStdVH', element: 'EventBasedProcessingKey' }, useAsTemplate: true } ]
  key ResultAnalysisInternalID,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChartOfAccountsStdVH', element: 'ChartOfAccounts' }, useAsTemplate: true } ]
  key ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      @ObjectModel.text.association: '_GLAccountText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' },
                                            additionalBinding: [{ element: 'CompanyCode', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key GLAccount,
      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.text.element: ['PlantName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
  key Plant,
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProducedProductText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
  key ProducedProduct,
      @ObjectModel.text.association: '_ProductText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
  key OriginProduct,
      @ObjectModel.text.association: '_OriginCostCenterText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' },
                                            //additionalBinding: [{ element: 'ControllingArea', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key OriginCostCenter,
      @ObjectModel.text.association: '_CostCenterActivityTypeText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterActivityTypeStdVH', element: 'CostCtrActivityType' },
                                            //additionalBinding: [{ element: 'ControllingArea', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key OriginCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' }, useAsTemplate: true } ]
  key SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      @ObjectModel.text.element: ['SalesOrderItemText']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' },
                                            additionalBinding: [{ element: 'SalesOrder', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key SalesOrderItem,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @ObjectModel.text.element: ['WBSDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' }, useAsTemplate: true } ]
      cast(WBSElementInternalID as fco_ebpr_wbs_element_int_id preserving type ) as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      //@ObjectModel.text.element: ['ControllingAreaName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' }, useAsTemplate: true } ]
      _Order.ControllingArea                                                     as ControllingArea,
      
      @Consumption.hidden:true
      @Semantics.text: true
      _CompanyCode.CompanyCodeName,
      @Consumption.hidden:true
      @Semantics.text: true
      _Order.OrderDescription,
      @Consumption.hidden:true
      @Semantics.text: true
      _Plant.PlantName,
      @Consumption.hidden:true
      @Semantics.text: true
      _SalesOrderItem.SalesOrderItemText,
      @Consumption.hidden:true
      @Semantics.text: true
      _WBSElement.WBSDescription,
      //@Semantics.text: true
      //_ControllingArea.ControllingAreaName,


      @Semantics.currencyCode:true
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true } ]
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
      LotSizeVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RmngVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CostVarianceInDspCrcy,

      /////////////////////////////////////////////////////////////////////////////////////
      // WIP/Reserve
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      WIPCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      UnrlzdCostRsrvAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalWIPAmountInDspCrcy,

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
      _Currency,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElement,
      @Consumption.hidden:true
      _CostCenter,
      @Consumption.hidden:true
      _CostCenterActivityType,
      @Consumption.hidden:true
      _EventBasedProcessingKey,
      @Consumption.hidden:true
      _EventBasedProcessingKeyText,
      @Consumption.hidden:true
      _LedgerText,
      @Consumption.hidden:true
      _OrderTypeText,
      @Consumption.hidden:true
      _OrderCategoryText,
      @Consumption.hidden:true
      _ChartOfAccountsText,
      @Consumption.hidden:true
      _GLAccountText,
      @Consumption.hidden:true
      _ProducedProductText,
      @Consumption.hidden:true
      _ProductText,
      @Consumption.hidden:true
      _OriginCostCenterText,
      @Consumption.hidden:true
      _CostCenterActivityTypeText,
      @Consumption.hidden:true
      _CurrencyText,
      @Consumption.hidden:true
      _ControllingArea
}
```
