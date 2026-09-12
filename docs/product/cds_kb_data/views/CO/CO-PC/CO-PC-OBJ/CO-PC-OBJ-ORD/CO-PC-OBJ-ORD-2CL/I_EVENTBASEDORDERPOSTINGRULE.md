---
name: I_EVENTBASEDORDERPOSTINGRULE
description: "Eventbasedorderpostingrule"
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
# I_EVENTBASEDORDERPOSTINGRULE

**Eventbasedorderpostingrule**

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
| `EventBasedDistrPostingRuleUUID` | ✓ | |  |  | `RAW(16)` | Event-Based Distribution Rule UUID |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `EventBasedDistributionRuleSqnc` |  | |  |  | `NUMC(7)` | Sequence Number of Distribution Rule |
| `CompanyCode` |  | | `_ManufacturingOrder` | `CompanyCode` | `CHAR(4)` | Company Code |
| `ProductionPlant` |  | | `_ManufacturingOrder` | `ProductionPlant` | `CHAR(4)` | Production Plant |
| `EventBasedDistributionType` |  | |  |  | `CHAR(3)` | Event-Based Production Cost Posting Type |
| `EvtBsdDistrSourceStructure` |  | |  |  | `CHAR(2)` | Source Structure |
| `EvtBsdDistrSourceAssignment` |  | |  |  | `CHAR(3)` | Source Assignment |
| `EventBasedDistrRateInPercent` |  | |  |  | `DEC(5)` | Event-Based Production Cost Posting Percentage Rate |
| `EvtBsdDistrEquivalenceFactor` |  | |  |  | `DEC(10)` | Equivalent Number for Event-Based Production Cost Posting |
| `EventBasedDistributionDfltRule` |  | |  |  | `CHAR(3)` | Default Rule |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Sales Order |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerControllingObjectType` |  | |  |  | `CHAR(2)` | Event-Based Production Cost Posting Receiver Type |
| `EvtBsdPostingRuleReceiver` |  | |  |  | `CHAR(40)` | Event-Based Posting Rule Receiver |
| `EvtBsdPostingRuleReceiverText` |  | |  |  | `CHAR(40)` | Event-Based Posting Rule Receiver Text |
| `EvtBsdDistrTracingFctrDetnMeth` |  | |  |  | `NUMC(3)` | Event-Based Distribution Rule Indicator |
| `MfgOrdNonMatlRcvrAcctDetnMeth` |  | |  |  | `CHAR(2)` | Account Determination Method |
| `EnteredByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time of Event-Based Posting Rule |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `RecentlyChangedDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `MfgOrderHasMultipleItems` |  | | `_ManufacturingOrder` | `MfgOrderHasMultipleItems` | `CHAR(1)` | Order Has Multiple Items |
| `ManufacturingOrderText` |  | | `_ManufacturingOrder` | `ManufacturingOrderText` | `CHAR(40)` | Manufacturing Order Text |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSDescription` |  | | `_WBSElementBasicData` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `MfgOrdNonMatlRcvrDetnMethName` |  | | `_MfgOrdNonMatRcvrAcctDetnMeth` | `MfgOrdNonMatlRcvrDetnMethName` | `CHAR(60)` | Account Determination Method Text |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_ManufacturingOrderItem` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_OrderCategoryText` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_EnteredByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_MfgOrdNonMatRcvrAcctDetnMeth` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ManufacturingOrderItem` | `I_ManufacturingOrderItem` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [1..1] |
| `_OrderCategoryText` | `I_OrderCategoryText` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_EnteredByUser` | `I_User` | [1..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_MfgOrdNonMatRcvrAcctDetnMeth` | `I_MfgOrdNonMatRcvrAcctDetnMeth` | [0..1] |

## Source Code

```abap
//@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_EnteredByUser', '_LastChangedByUser']
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Event-Based Mfg Order Posting Rule'

@Metadata.ignorePropagatedAnnotations: true
@VDM: {
   viewType: #COMPOSITE,
   lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  sapObjectNodeType.name:'EventBasedOrderPostingRule',
  representativeKey: 'EventBasedDistrPostingRuleUUID',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY],
  semanticKey: [ 'OrderID', 'OrderItem', 'EventBasedDistributionRuleSqnc' ],
  usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
     }
}
@Metadata.allowExtensions: true
@Search.searchable: true
@Analytics.dataExtraction.enabled:true
@Analytics.dataCategory:#DIMENSION
@Analytics.internalName: #LOCAL

define view entity I_EventBasedOrderPostingRule
  as select from P_EventBasedOrderPostingRule
  //association [1..1] to I_ControllingObject      as _ControllingObject      on  $projection.controllingobject = _ControllingObject.ControllingObject
  association [1..1] to I_ManufacturingOrder     as _ManufacturingOrder     on  $projection.OrderID = _ManufacturingOrder.ManufacturingOrder
  association [0..1] to I_ManufacturingOrderItem as _ManufacturingOrderItem on  $projection.OrderID                   = _ManufacturingOrderItem.ManufacturingOrder
                                                                            and (
                                                                               (
                                                                                     $projection.mfgorderhasmultipleitems = 'X'
                                                                                 and $projection.OrderItem                = _ManufacturingOrderItem.ManufacturingOrderItem
                                                                               )
                                                                               or(
                                                                                     $projection.mfgorderhasmultipleitems = ''
                                                                                 and $projection.OrderItem                = '0000'
                                                                               )
                                                                             )
  association [1..1] to I_OrderCategory          as _OrderCategory          on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..1] to I_OrderCategoryText      as _OrderCategoryText      on  $projection.OrderCategory = _OrderCategoryText.OrderCategory
                                                                            and _OrderCategoryText.Language = $session.system_language
  association [0..1] to I_SalesOrder             as _SalesOrder             on  $projection.SalesOrder     = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderItem         as _SalesOrderItem         on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                            and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_WBSElementBasicData    as _WBSElementBasicData    on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  //association [0..1] to I_WBSElementBasicData    as _WBSElementBasicData    on  $projection.WBSElementExternalID = _WBSElementBasicData.WBSElementExternalID
  association [1..1] to I_User                   as _EnteredByUser          on  $projection.EnteredByUser = _EnteredByUser.UserID
  association [0..1] to I_User                   as _LastChangedByUser      on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_MfgOrdNonMatRcvrAcctDetnMeth as _MfgOrdNonMatRcvrAcctDetnMeth on  $projection.MfgOrdNonMatlRcvrAcctDetnMeth = _MfgOrdNonMatRcvrAcctDetnMeth.MfgOrdNonMatlRcvrAcctDetnMeth
{
      @Consumption.hidden: true
  key EventBasedDistrPostingRuleUUID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.text.element: ['ManufacturingOrderText']
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      OrderID,
      @ObjectModel.foreignKey.association: '_ManufacturingOrderItem'
      OrderItem,
      EventBasedDistributionRuleSqnc,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.text.association: '_ManufacturingOrder._CompanyCodeText'
      @ObjectModel.foreignKey.association: '_CompanyCodeText'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _ManufacturingOrder.CompanyCode     as CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.text.association: '_ManufacturingOrder._ProductionPlantText'
      @ObjectModel.foreignKey.association: '_ProductionPlantText'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _ManufacturingOrder.ProductionPlant as ProductionPlant,
      //SAPObjectNodeType,
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingObjectStdVH', element: 'ControllingObject' } } ]
      //@ObjectModel.foreignKey.association: '_ControllingObject'
      //@Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      //ControllingObject,
      //@Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      //ControllingObjectType,
      EventBasedDistributionType,
      EvtBsdDistrSourceStructure,
      EvtBsdDistrSourceAssignment,
      EventBasedDistrRateInPercent,
      EvtBsdDistrEquivalenceFactor,
      EventBasedDistributionDfltRule,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_OrderCategory', element: 'OrderCategory' } } ]
      @ObjectModel.text.association: '_OrderCategoryText'
      @ObjectModel.foreignKey.association: '_OrderCategory'
      OrderCategory,
      //@Semantics.booleanIndicator:true
      //@EndUserText.label: 'Is Settled'
      //IsSettled,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' },
                                            additionalBinding: [{ element: 'SalesOrder', usage: #FILTER_AND_RESULT }] } ]
      //@ObjectModel.foreignKey.association: '_SalesOrderItem'
      @ObjectModel.text.element: ['SalesOrderItemText']
      SalesOrderItem,
      @Consumption.valueHelpDefinition: [ { 
        entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' }, 
        additionalBinding: [ {
            usage: #FILTER_AND_RESULT,
            localElement: 'WBSElementExternalID',
            element: 'WBSElementExternalID'
      } ] } ]
      @ObjectModel.text.element: ['WBSDescription']
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { 
        entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementExternalID' }, 
        additionalBinding: [ {
            usage: #FILTER_AND_RESULT,
            localElement: 'WBSElementInternalID',
            element: 'WBSElementInternalID'
      } ] } ]
      @ObjectModel.text.element: ['WBSDescription']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      _WBSElementBasicData.WBSElementExternalID,
      //ReceiverOrder,
      //PartnerOrderItem,
      //ProducedProduct,
      //ReceiverCostCenter,
      //ReceiverWBSElementInternalID,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      PartnerControllingObjectType,
      @ObjectModel.text.element: ['EvtBsdPostingRuleReceiverText']
      EvtBsdPostingRuleReceiver,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      EvtBsdPostingRuleReceiverText,
      EvtBsdDistrTracingFctrDetnMeth,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrdNonMatRcvrAcctDetnMeth', element: 'MfgOrdNonMatlRcvrAcctDetnMeth' } } ]
      @ObjectModel.text.element: ['MfgOrdNonMatlRcvrDetnMethName']
      //@ObjectModel.foreignKey.association: '_MfgOrdNonMatRcvrAcctDetnMeth'
      MfgOrdNonMatlRcvrAcctDetnMeth,
      @Semantics.user.createdBy: true
      EnteredByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemDateTime.lastChangedAt: true
      RecentlyChangedDateTime,
      
      @Consumption.hidden: true
      @Semantics.booleanIndicator:true
      _ManufacturingOrder.MfgOrderHasMultipleItems,
      @Semantics.text:true
      _ManufacturingOrder.ManufacturingOrderText,
      @Semantics.text:true
      _SalesOrderItem.SalesOrderItemText,
      @Semantics.text:true
      _WBSElementBasicData.WBSDescription,
      @Semantics.text:true
      _MfgOrdNonMatRcvrAcctDetnMeth.MfgOrdNonMatlRcvrDetnMethName,

      _ManufacturingOrder._CompanyCodeText,
      _ManufacturingOrder._ProductionPlantText,
      //_ControllingObject,
      _ManufacturingOrder,
      _ManufacturingOrderItem,
      _OrderCategory,
      _OrderCategoryText,
      _SalesOrder,
      _SalesOrderItem,
      _WBSElementBasicData,
      _EnteredByUser,
      _LastChangedByUser,
      _MfgOrdNonMatRcvrAcctDetnMeth
}
```
