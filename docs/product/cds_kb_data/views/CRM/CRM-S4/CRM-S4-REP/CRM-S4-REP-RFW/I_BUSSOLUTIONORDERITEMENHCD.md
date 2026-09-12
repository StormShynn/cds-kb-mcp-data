---
name: I_BUSSOLUTIONORDERITEMENHCD
description: "Bussolutionorderitemenhcd"
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSSOLUTIONORDERITEMENHCD

**Bussolutionorderitemenhcd**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrderUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessSolutionOrderItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `BusSolnOrderItemCharUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocItemCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocItemCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPersonBusinessPartnerId` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `BusSolnOrdItemBundleProduct` |  | |  |  | `CHAR(40)` | Product ID of Bundle Item |
| `BusSolnOrdItemBundleItem` |  | |  |  | `NUMC(6)` | Bundle Item Number in Document |
| `Quantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `IncotermsPart1` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `DeliveryGroup` |  | |  |  | `NUMC(3)` | Delivery Group (Items are Delivered Together) |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Delivery Control (Item) |
| `OrderCombinationIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Order Combination |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Delivery Block Reason |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `ServiceDocumentItemTaxAmount` |  | |  |  | `CURR(15)` | Tax amount in document currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ReferenceCurrency` |  | |  |  | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `BusSolnOrdItmRjcnReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdItmIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `BusSolnOrdItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `BusSolnOrdItmIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `MaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `EnterpriseProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization (Project) |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `MidBillgCycExprtnIsAllowed` |  | |  |  | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  | `CHAR(1)` | Overwrite Default Terms |
| `SubscriptionBillingCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `PlannedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Planned From Date |
| `PlannedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Planned To Date |
| `ItemGrossWeight` |  | |  |  | `QUAN(15)` | Gross Weight |
| `ItemNetWeight` |  | |  |  | `QUAN(15)` | Net Weight |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume Occupied by the Product per Volume Unit |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Unit for the Volume of a Product |
| `CustomerPriceGroup` |  | |  |  | `CHAR(2)` | Customer Price Group |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `SettlementPeriodRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Period Date |
| `SrvcDocItmPartReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `BillingPlanBillingDateRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Next Billing Date |
| `CompanyCode` |  | |  | `cast( _SalesOrganization.CompanyCode as vkbuk preserving type )` | `CHAR(4)` | Company code of the sales organization |
| `ReferenceServiceContract` |  | | `_PrecedingContractItem._ServiceDocItm` | `ServiceDocument` | `CHAR(10)` | Transaction ID |
| `ReferenceServiceContractItem` |  | | `_PrecedingContractItem._ServiceDocItm` | `ServiceDocumentItem` | `NUMC(6)` | Shortened Item Number in Document |
| `BusSolnOrdExtReference` |  | | `_ExtRefHeader` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `BusSolnOrdItmExtReference` |  | | `_ExtRefItem` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `SrvcMgmtBillgPlanBillgDateRule` |  | | `_BillPlanDateRule` | `CustMgmtDateRuleName` | `CHAR(12)` | Date Rule |
| `SettlementPeriodRule` |  | | `_SettlementDateRule` | `CustMgmtDateRuleName` | `CHAR(12)` | Date Rule |
| `ProjectUUID` |  | | `_EntProjBusSolutionOrderLink` | `ProjectUUID` | `RAW(16)` | Project UUID |
| `_BillableControl` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BusSolnOrdItmCategory` | | ✓ | | | | |
| `_BusSolnOrdItmHasError` | | ✓ | | | | |
| `_BusSolnOrdItmRjcnReason` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_MaterialPricingGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_BusSolnOrdItemPriceElement` | | ✓ | | | | |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_BusSolutionOrderItemLongText` | | ✓ | | | | |
| `_SolutionOrdItemRefObj` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order Item Enhanced'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_StatusObjItemStatus',
                              '_SolutionOrdItemRefObj',
                              '_BusSolutionOrderItemLongText',
                              '_BusSolnOrdItemPriceElement',
                              '_CustMgmtPartner' ],
    personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'BusinessSolutionOrderItem',
    sapObjectNodeType.name: 'BusinessSolutionOrderItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    usageType:{
        serviceQuality: #C,
        sizeCategory: #XXL,
        dataClass: #MIXED
    }
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_BusSolutionOrderItemEnhcd
  as select from I_BusinessSolutionOrderItem

  association to exact one I_BusinessSolutionOrderEnhcd as _BusinessSolutionOrder        on  _BusinessSolutionOrder.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to many I_ServiceDocumentRefObject        as _SolutionOrdItemRefObj        on  _SolutionOrdItemRefObj.ServiceObjectType   = $projection.ServiceObjectType
                                                                                         and _SolutionOrdItemRefObj.ServiceDocument     = $projection.BusinessSolutionOrder
                                                                                         and _SolutionOrdItemRefObj.ServiceDocumentItem = $projection.BusinessSolutionOrderItem

  association to many I_CustMgmtPartner                 as _CustMgmtPartner              on  _CustMgmtPartner.CustMgmtDocument     = $projection.BusinessSolutionOrder
                                                                                         and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                                         and _CustMgmtPartner.CustMgmtDocumentItem = $projection.SrvcDocItmPartReferenceItem

  association to many I_SrvcDocItemLongText             as _BusSolutionOrderItemLongText on  _BusSolutionOrderItemLongText.ServiceObjectType   = $projection.ServiceObjectType
                                                                                         and _BusSolutionOrderItemLongText.ServiceDocument     = $projection.BusinessSolutionOrder
                                                                                         and _BusSolutionOrderItemLongText.ServiceDocumentItem = $projection.BusinessSolutionOrderItem
                                                                                         and _BusSolutionOrderItemLongText.Language            = $session.system_language

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association to one I_CustMgmtExtRefID                 as _ExtRefHeader                 on  _ExtRefHeader.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                                         and _ExtRefHeader.CustMgmtDocument     = $projection.BusinessSolutionOrder
                                                                                         and _ExtRefHeader.CustMgmtDocumentItem = '000000'
                                                                                         and _ExtRefHeader.CustMgmtExtRefIDType = '0012'

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association to one I_CustMgmtExtRefID                 as _ExtRefItem                   on  _ExtRefItem.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                                         and _ExtRefItem.CustMgmtDocument     = $projection.BusinessSolutionOrder
                                                                                         and _ExtRefItem.CustMgmtDocumentItem = $projection.BusinessSolutionOrderItem
                                                                                         and _ExtRefItem.CustMgmtExtRefIDType = '0013'

  association to many I_BusSolnOrdItemPriceElement      as _BusSolnOrdItemPriceElement   on  _BusSolnOrdItemPriceElement.BusinessSolutionOrder     = $projection.BusinessSolutionOrder
                                                                                         and _BusSolnOrdItemPriceElement.BusinessSolutionOrderItem = $projection.BusinessSolutionOrderItem

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association to one I_EntProjBusSolutionOrderLink      as _EntProjBusSolutionOrderLink  on  _EntProjBusSolutionOrderLink.BusinessSolutionOrder     = $projection.BusinessSolutionOrder
                                                                                         and _EntProjBusSolutionOrderLink.BusinessSolutionOrderItem = $projection.BusinessSolutionOrderItem

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association to one I_ServiceDocumentItemPrdcssr_3     as _PrecedingContractItem        on  _PrecedingContractItem.ServiceDocumentItemCharUUID    = $projection.BusSolnOrderItemCharUUID
                                                                                         and _PrecedingContractItem.ServiceDocItmPrdcssrBusObjType = 'BUS2000137'

  association to one E_ServiceDocumentItem              as _BusSolutionOrderItemEnhcdExt on  _BusSolutionOrderItemEnhcdExt.ServiceCategory       = $projection.ServiceObjectType
                                                                                         and _BusSolutionOrderItemEnhcdExt.ServiceOrderItem      = $projection.BusinessSolutionOrder
                                                                                         and _BusSolutionOrderItemEnhcdExt.ServiceLineExternalID = $projection.BusinessSolutionOrderItem
{
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrder'
  key BusinessSolutionOrder,
      @ObjectModel.text.element: [ 'BusSolnOrdItmDescription' ]
  key BusinessSolutionOrderItem,
      ServiceObjectType,
      BusinessSolutionOrderUUID,
      ServiceDocumentType,
      BusinessSolutionOrderItemUUID,
      ServiceDocumentItemObjectType,
      @Semantics.text: true
      BusSolnOrdItmDescription,
      Language,
      BusSolnOrdDescription,
      BusSolnOrdItmCategory,
      ParentServiceDocumentItemUUID,
      BusSolnOrderItemCharUUID,
      PostingDate,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Plant,
      ControllingArea,
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,
      OriginallyRequestedProduct,
      Product,
      BusSolnOrdItemBundleProduct,
      BusSolnOrdItemBundleItem,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      QuantityUnit,
      IncotermsPart1,
      IncotermsPart2,
      DeliveryPriority,
      DeliveryGroup,
      PartialDeliveryIsAllowed,
      OrderCombinationIsAllowed,
      DeliveryBlockReason,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemNetAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocItemGrossAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemTaxAmount,
      TransactionCurrency,
      ReferenceCurrency,
      ExchangeRateType,
      ExchangeRateDate,
      AccountingExchangeRate,
      CustomerGroup,
      PaymentTerms,
      PaymentMethod,
      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,
      BusSolnOrdItmRjcnReason,
      DistributionChannel,
      Division,
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      BillableControl,
      BillingBlockReason,
      BusSolnOrdItmStatus,
      @Semantics.booleanIndicator: true
      BusSolnOrdItmIsReleased,
      @Semantics.booleanIndicator: true
      BusSolnOrdItemHasError,
      SrvcDocItmDeliveryStatus,
      @Semantics.booleanIndicator: true
      BusSolnOrdItmIsRejected,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      MaterialPricingGroup,
      ProductGroup1,
      ProductGroup2,
      ProductGroup3,
      ProductGroup4,
      ProductGroup5,
      ResponsibleCostCenter,
      EnterpriseProjectServiceOrg,
      ServiceContrItemStartDateTime,
      ServiceContrItemEndDateTime,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      SubscriptionBillingCycle,
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ResponseProfile,
      ServiceProfile,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemExtnDurationUnit'
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      SubscrpnBillgRatePlanCharUUID,
      PlannedServiceStartDateTime,
      PlannedServiceEndDateTime,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      ItemWeightUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      ItemVolumeUnit,
      CustomerPriceGroup,
      PurchaseOrderByCustomer,
      SettlementPeriodRuleUUID,
      SrvcDocItmPartReferenceItem,
      BillingPlanBillingDateRuleUUID,

      cast( _SalesOrganization.CompanyCode as vkbuk preserving type ) as CompanyCode,
      _PrecedingContractItem._ServiceDocItm.ServiceDocument           as ReferenceServiceContract,
      _PrecedingContractItem._ServiceDocItm.ServiceDocumentItem       as ReferenceServiceContractItem,
      _ExtRefHeader.CustMgmtExtRefID                                  as BusSolnOrdExtReference,
      _ExtRefItem.CustMgmtExtRefID                                    as BusSolnOrdItmExtReference,
      _BillPlanDateRule.CustMgmtDateRuleName                          as SrvcMgmtBillgPlanBillgDateRule,
      _SettlementDateRule.CustMgmtDateRuleName                        as SettlementPeriodRule,

      // Needed to be able to expose _EnterpriseProject
      _EntProjBusSolutionOrderLink.ProjectUUID,

      _BillableControl,
      _BillingBlockReason,
      _BillToParty,
      _BusSolnOrdItmCategory,
      _BusSolnOrdItmHasError,
      _BusSolnOrdItmRjcnReason,
      _ContactPerson,
      _ControllingArea,
      _DeliveryBlockReason,
      _DistributionChannel,
      _Division,
      _PayerParty,
      _PaymentMethod,
      _PaymentTerms,
      _Product,
      _ProfitCenter,
      _RespEmployee,
      _ResponseProfile,
      _SalesGroup,
      _SalesOffice,
      _SalesOrganization,
      _SalesUnit,
      _ServiceDocumentIsOpen,
      _ServiceDocumentType,
      _ServiceObjType,
      _ServiceProductList,
      _ServiceProfile,
      _ShipToParty,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _SrvcContrItemExtnDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcDocItmLifecycleStatus,
      _StatusObjItemStatus,
      _TransactionCurrency,
      _VolumeUnit,
      _WeightUnit,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,

      _BusSolnOrdItemPriceElement,
      _BusinessSolutionOrder,
      _CustMgmtPartner,
      _EntProjBusSolutionOrderLink._EnterpriseProject,
      _BusSolutionOrderItemLongText,
      _SolutionOrdItemRefObj
}
```
