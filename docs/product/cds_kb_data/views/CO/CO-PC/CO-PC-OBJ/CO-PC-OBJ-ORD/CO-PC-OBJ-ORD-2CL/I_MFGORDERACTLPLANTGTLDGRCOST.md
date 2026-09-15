---
name: I_MFGORDERACTLPLANTGTLDGRCOST
description: "Mfgorderactlplantgtldgrcost"
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
  - plant
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
  - bo:Plant
---
# I_MFGORDERACTLPLANTGTLDGRCOST

**Mfgorderactlplantgtldgrcost**

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
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` | ✓ | |  |  | `NUMC(4)` | Number of Order Item |
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` | ✓ | |  |  | `CHAR(4)` | Operation or Phase Number |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | ✓ | |  |  | `CHAR(10)` | Partner Cost Center |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Product` | ✓ | |  |  | `CHAR(40)` | Product |
| `UnitOfMeasure` | ✓ | |  |  | `UNIT(3)` | Cost Source Unit |
| `CurPlanProjSlsOrdValnStrategy` | ✓ | |  |  | `CHAR(1)` | Val. Strat. for Current Plan Price, Sales Order/Proj. Stock |
| `Ledger` |  | |  | `cast( :P_Ledger as fins_ledger )` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Product |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | | `_WBSElement` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WorkCenter` |  | | `_WorkCenter` | `WorkCenter` | `CHAR(8)` | Work Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OrderDescription` |  | | `_Order` | `OrderDescription` | `CHAR(40)` | Order Description |
| `MfgOrderOperationText` |  | | `_ManufacturingOrderOperation` | `MfgOrderOperationText` | `CHAR(40)` | Manufacturing Order Operation Text |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `ControllingAreaName` |  | | `_ControllingArea` | `ControllingAreaName` | `CHAR(25)` | Controlling Area Name |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSDescription` |  | | `_WBSElement` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `CreditActlCostInDspCrcy` |  | |  | `cast(CreditActlCostInDisplayCrcy as fis_cr_actlcost_in_dspcrcy)` | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` |  | |  | `cast(DebitActlCostInDisplayCrcy as fis_dr_actlcost_in_dspcrcy)` | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` |  | |  | `cast(CrdtActlFixedCostInDspCrcy as fis_cr_actlfxdcost_in_dspcrcy)` | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` |  | |  | `cast(DebitActlFixedCostInDspCrcy as fis_dr_actlfxdcost_in_dspcrcy)` | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` |  | |  | `cast(ActualQtyInCostSourceUnit as fis_actlqty_in_costsrceunit)` | `QUAN(23)` | Actual Quantity |
| `CreditPlanCostInDspCrcy` |  | |  | `cast(CreditPlanCostInDisplayCrcy as fis_cr_plancost_in_dspcrcy)` | `CURR(23)` | Plan Cost Credit |
| `DebitPlanCostInDspCrcy` |  | |  | `cast(DebitPlanCostInDisplayCrcy as fis_dr_plancost_in_dspcrcy)` | `CURR(23)` | Plan Cost Debit |
| `CrdtPlnFxdCostInDspCrcy` |  | |  | `cast(CrdtPlanFixedCostInDspCrcy as fis_cr_plnfxdcost_in_dspcrcy)` | `CURR(23)` | Plan Fixed Cost Credit |
| `DebitPlnFxdCostInDspCrcy` |  | |  | `cast(DebitPlanFixedCostInDspCrcy as fis_dr_plnfxdcost_in_dspcrcy)` | `CURR(23)` | Plan Fixed Cost Debit |
| `PlanQtyInCostSourceUnit` |  | |  | `cast(PlanQtyInCostSourceUnit as fis_planqty_in_costsrceunit)` | `QUAN(23)` | Plan Quantity |
| `CrdtTargetCostInDspCrcy` |  | |  | `cast(CreditTgtCostInDisplayCrcy as fis_cr_tgtcost_in_dspcrcy)` | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` |  | |  | `cast(DebitTgtCostInDisplayCrcy as fis_dr_tgtcost_in_dspcrcy)` | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` |  | |  | `cast(TargetQtyInCostSourceUnit as fis_tgtqty_in_costsrceunit)` | `QUAN(23)` | Target Quantity |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProducedProduct` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_OrderItem` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_ManufacturingOrderOperation` | | ✓ | | | | |
| `_PartnerCostCenterText` | | ✓ | | | | |
| `_WorkCenterText` | | ✓ | | | | |
| `_GLAccountText` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProducedProductText` | | ✓ | | | | |
| `_CostCenterActivityTypeText` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_OrderTypeText` | | ✓ | | | | |
| `_OrderCategoryText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_SlsOrdProjValnStrategyText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProducedProduct` | `I_Product` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_OrderItem` | `I_OrderItem` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_ManufacturingOrderOperation` | `I_ManufacturingOrderOperation` | [0..1] |
| `_PartnerCostCenterText` | `I_CostCenterText` | [0..*] |
| `_WorkCenterText` | `I_WorkCenterText` | [0..*] |
| `_GLAccountText` | `I_GLAccountText` | [0..*] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_ProducedProductText` | `I_ProductText` | [0..*] |
| `_CostCenterActivityTypeText` | `I_CostCenterActivityTypeText` | [0..*] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_OrderTypeText` | `I_OrderTypeText` | [0..*] |
| `_OrderCategoryText` | `I_OrderCategoryText` | [0..*] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_SlsOrdProjValnStrategyText` | `I_SlsOrdProjValnStrategyText` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFIORDAPTLCOST'
@VDM.viewType: #COMPOSITE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Manufacturing Order Actual Plan Target Ledger Specific Cost'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define view I_MfgOrderActlPlanTgtLdgrCost
  with parameters
    @EndUserText.label: 'Fiscal Year Period From'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'Fiscal Year Period To'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption: {
       valueHelpDefinition: [{ entity:{name: 'I_Ledger', element :'Ledger'} }],
       derivation: {
           lookupEntity: 'I_Ledger',
           resultElement: 'Ledger',
             binding: [ { targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'  } ]
                   }
                 }
    P_Ledger               : fins_ledger,
    @Consumption.defaultValue: '10'
//    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_CurrencyRole', element :'CurrencyRole'} }]
    P_CurrencyRole         : fac_crcyrole,
    @Consumption.defaultValue: '000'
    P_TargetCostVariant    : fis_awvrs
  as select from P_MfgOrderActlPlanTgtCostV2(
                 P_FromFiscalYearPeriod    : $parameters.P_FromFiscalYearPeriod,
                 P_ToFiscalYearPeriod      : $parameters.P_ToFiscalYearPeriod,
                 P_Ledger                  : $parameters.P_Ledger,
                 P_CurrencyRole            : $parameters.P_CurrencyRole,
                 P_TargetCostVariant       : $parameters.P_TargetCostVariant )
  association [0..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Product                     as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_Product                     as _ProducedProduct             on  $projection.ProducedProduct = _ProducedProduct.Product
  association [0..1] to I_Order                       as _Order                       on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_OrderItem                   as _OrderItem                   on  $projection.OrderID   = _OrderItem.OrderID
                                                                                      and $projection.OrderItem = _OrderItem.OrderItem
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                    on  $projection.UnitOfMeasure = _BaseUnit.UnitOfMeasure
  association [0..*] to I_CostCenter                  as _PartnerCostCenter           on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                      and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*] to I_CostCenterActivityType      as _PartnerCostCtrActivityType  on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                      and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts  as _GLAccountInChartOfAccounts  on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_SalesOrder                  as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem              as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                      and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_ControllingArea             as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_WorkCenter                  as _WorkCenter                  on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                      and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_WBSElementBasicData         as _WBSElement                  on  _WBSElement.WBSElementInternalID = $projection.WBSElementInternalID
  //association [0..1] to I_OrderType                   as _OrderType                   on  $projection.OrderType = _OrderType.OrderType
  //association [0..1] to I_OrderCategory               as _OrderCategory               on  $projection.OrderCategory = _OrderCategory.OrderCategory
  //association [0..1] to I_Currency                    as _Currency                    on  $projection.DisplayCurrency = _Currency.Currency
  //association [0..1] to I_Ledger                      as _Ledger                      on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_ManufacturingOrderOperation as _ManufacturingOrderOperation on  $projection.OrderID        = _ManufacturingOrderOperation.ManufacturingOrder
                                                                                      and $projection.OrderOperation = _ManufacturingOrderOperation.ManufacturingOrderOperation
  association [0..*] to I_CostCenterText              as _PartnerCostCenterText       on  $projection.ControllingArea   = _PartnerCostCenterText.ControllingArea
                                                                                      and $projection.PartnerCostCenter = _PartnerCostCenterText.CostCenter
  association [0..*] to I_WorkCenterText              as _WorkCenterText              on  $projection.WorkCenterInternalID   = _WorkCenterText.WorkCenterInternalID
                                                                                      and _WorkCenterText.WorkCenterTypeCode = 'A'
  association [0..*] to I_GLAccountText               as _GLAccountText               on  $projection.ChartOfAccounts = _GLAccountText.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountText.GLAccount
  association [0..*] to I_ChartOfAccountsText         as _ChartOfAccountsText         on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..*] to I_ProductText                 as _ProductText                 on  $projection.Product = _ProductText.Product
  association [0..*] to I_ProductText                 as _ProducedProductText         on  $projection.ProducedProduct = _ProducedProductText.Product
  association [0..*] to I_CostCenterActivityTypeText  as _CostCenterActivityTypeText  on  $projection.ControllingArea                   = _CostCenterActivityTypeText.ControllingArea
                                                                                      and $projection.PartnerCostCtrActivityType        = _CostCenterActivityTypeText.CostCtrActivityType
                                                                                      and _CostCenterActivityTypeText.ValidityStartDate <= $session.system_date
                                                                                      and _CostCenterActivityTypeText.ValidityEndDate   >= $session.system_date
  association [0..*] to I_UnitOfMeasureText           as _UnitOfMeasureText           on  $projection.UnitOfMeasure = _UnitOfMeasureText.UnitOfMeasure
  association [0..*] to I_LedgerText                  as _LedgerText                  on  $projection.Ledger = _LedgerText.Ledger
  association [0..*] to I_OrderTypeText               as _OrderTypeText               on  $projection.OrderType = _OrderTypeText.OrderType
  association [0..*] to I_OrderCategoryText           as _OrderCategoryText           on  $projection.OrderCategory = _OrderCategoryText.OrderCategory
  association [0..*] to I_CurrencyText                as _CurrencyText                on  $projection.DisplayCurrency = _CurrencyText.Currency
  association [0..1] to I_SlsOrdProjValnStrategyText  as _SlsOrdProjValnStrategyText  on  _SlsOrdProjValnStrategyText.SlsOrdProjValnStrategy = $projection.CurPlanProjSlsOrdValnStrategy
                                                                                      and _SlsOrdProjValnStrategyText.Language               = $session.system_language
{
      @ObjectModel.foreignKey.association: '_Order'
      @ObjectModel.text.element: ['OrderDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' }, useAsTemplate: true } ]
  key OrderID,

  key OrderItem,

      @ObjectModel.text.association: '_WorkCenterText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenterInternalID' }, useAsTemplate: true } ]
  key WorkCenterInternalID,
      @ObjectModel.text.element: ['MfgOrderOperationText']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderOperationVH', element: 'ManufacturingOrderOperation' },
                                            additionalBinding: [{ localElement: 'OrderID', element: 'ManufacturingOrder', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key OrderOperation,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      @ObjectModel.text.association: '_GLAccountText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' },
                                            additionalBinding: [{ element: 'CompanyCode', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key GLAccount,

      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      @ObjectModel.text.association: '_CostCenterActivityTypeText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterActivityTypeStdVH', element: 'CostCtrActivityType' },
                                            additionalBinding: [{ element: 'ControllingArea', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key PartnerCostCtrActivityType,

      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      @ObjectModel.text.association: '_PartnerCostCenterText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' },
                                            additionalBinding: [{ element: 'ControllingArea', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
  key PartnerCostCenter,

      @ObjectModel.foreignKey.association: '_Plant'
      @ObjectModel.text.element: ['PlantName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
  key Plant,

      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
  key Product,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true } ]
  key UnitOfMeasure,

      @ObjectModel.text.association: '_SlsOrdProjValnStrategyText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SlsOrdProjValnStrategyStdVH', element: 'SlsOrdProjValnStrategy' }, useAsTemplate: true } ]
  key CurPlanProjSlsOrdValnStrategy,

      @ObjectModel.text.association: '_LedgerText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' }, useAsTemplate: true } ]
      cast( :P_Ledger as fins_ledger )                                   as Ledger,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @ObjectModel.text.element: ['ControllingAreaName']
      ControllingArea,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.element: ['CompanyCodeName']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true } ]
      CompanyCode,

      @ObjectModel.foreignKey.association: '_ProducedProduct'
      @ObjectModel.text.association: '_ProducedProductText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      ProducedProduct,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' }, useAsTemplate: true } ]
      SalesOrder,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      @ObjectModel.text.element: ['SalesOrderItemText']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' },
                                            additionalBinding: [{ element: 'SalesOrder', usage: #FILTER_AND_RESULT }],
                                            useAsTemplate: true } ]
      SalesOrderItem,

      @ObjectModel.foreignKey.association: '_WBSElement'
      @ObjectModel.text.element: ['WBSDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' }, useAsTemplate: true } ]
      WBSElementInternalID,

      @ObjectModel.text.element: ['WBSDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementExternalID' }, useAsTemplate: true } ]
      _WBSElement.WBSElementExternalID,

      //@ObjectModel.text.association: '_WorkCenterText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkCenterStdVH', element: 'WorkCenter' }, useAsTemplate: true } ]
      _WorkCenter.WorkCenter,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ChartOfAccountsStdVH', element: 'ChartOfAccounts' }, useAsTemplate: true } ]
      ChartOfAccounts,

      @ObjectModel.text.association: '_OrderTypeText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderTypeVH', element: 'OrderType' }, useAsTemplate: true } ]
      OrderType,

      @ObjectModel.text.association: '_OrderCategoryText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderCategory', element: 'OrderCategory' }, useAsTemplate: true } ]
      OrderCategory,

      @Semantics.currencyCode:true
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true } ]
      DisplayCurrency,

      @Consumption.hidden:true
      @Semantics.text: true
      _Order.OrderDescription,
      @Consumption.hidden:true
      @Semantics.text: true
      _ManufacturingOrderOperation.MfgOrderOperationText,
      @Consumption.hidden:true
      @Semantics.text: true
      _Plant.PlantName,
      @Consumption.hidden:true
      @Semantics.text: true
      _ControllingArea.ControllingAreaName,
      @Consumption.hidden:true
      @Semantics.text: true
      _CompanyCode.CompanyCodeName,
      @Consumption.hidden:true
      @Semantics.text: true
      _SalesOrderItem.SalesOrderItemText,
      @Consumption.hidden:true
      @Semantics.text: true
      _WBSElement.WBSDescription,


      /////////////////////////////////////////////////////////////////
      //Key figures for Actual Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(CreditActlCostInDisplayCrcy as fis_cr_actlcost_in_dspcrcy)    as CreditActlCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(DebitActlCostInDisplayCrcy  as fis_dr_actlcost_in_dspcrcy)    as DebitActlCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(CrdtActlFixedCostInDspCrcy  as fis_cr_actlfxdcost_in_dspcrcy) as CrdtActlFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(DebitActlFixedCostInDspCrcy as fis_dr_actlfxdcost_in_dspcrcy) as DebitActlFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      cast(ActualQtyInCostSourceUnit   as fis_actlqty_in_costsrceunit)   as ActualQtyInCostSourceUnit,


      /////////////////////////////////////////////////////////////////
      //Key figures for Plant Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(CreditPlanCostInDisplayCrcy as fis_cr_plancost_in_dspcrcy)    as CreditPlanCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(DebitPlanCostInDisplayCrcy  as fis_dr_plancost_in_dspcrcy)    as DebitPlanCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(CrdtPlanFixedCostInDspCrcy  as fis_cr_plnfxdcost_in_dspcrcy)  as CrdtPlnFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(DebitPlanFixedCostInDspCrcy as fis_dr_plnfxdcost_in_dspcrcy)  as DebitPlnFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      cast(PlanQtyInCostSourceUnit     as fis_planqty_in_costsrceunit)   as PlanQtyInCostSourceUnit,


      /////////////////////////////////////////////////////////////////
      //Key figures for Target Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(CreditTgtCostInDisplayCrcy as fis_cr_tgtcost_in_dspcrcy)      as CrdtTargetCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(DebitTgtCostInDisplayCrcy  as fis_dr_tgtcost_in_dspcrcy)      as DebitTargetCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      cast(TargetQtyInCostSourceUnit as fis_tgtqty_in_costsrceunit)      as TargetQtyInCostSourceUnit,

      _Order,
      _OrderItem,
      _ControllingArea,
      _CompanyCode,
      _Plant,
      _Product,
      _ProducedProduct,
      _PartnerCostCtrActivityType,
      _PartnerCostCenter,
      _WorkCenter,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _BaseUnit,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElement,
      @Consumption.hidden:true
      _ManufacturingOrderOperation,
      @Consumption.hidden:true
      _PartnerCostCenterText,
      @Consumption.hidden:true
      _WorkCenterText,
      @Consumption.hidden:true
      _GLAccountText,
      @Consumption.hidden:true
      _ChartOfAccountsText,
      @Consumption.hidden:true
      _ProductText,
      @Consumption.hidden:true
      _ProducedProductText,
      @Consumption.hidden:true
      _CostCenterActivityTypeText,
      @Consumption.hidden:true
      _UnitOfMeasureText,
      @Consumption.hidden:true
      _LedgerText,
      @Consumption.hidden:true
      _OrderTypeText,
      @Consumption.hidden:true
      _OrderCategoryText,
      @Consumption.hidden:true
      _CurrencyText,
      @Consumption.hidden:true
      _SlsOrdProjValnStrategyText

}
```
