---
name: I_BUSINESSSOLUTIONORDERITEM
description: "Businesssolutionorderitem"
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
# I_BUSINESSSOLUTIONORDERITEM

**Businesssolutionorderitem**

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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  | `ServiceDocumentItem` | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessSolutionOrderItemUUID` |  | |  | `ServiceDocumentItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `BusSolnOrdItmDescription` |  | |  | `ServiceDocumentItemDescription` | `CHAR(40)` | Product Description |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `BusSolnOrdDescription` |  | |  | `ServiceDocumentDescription` | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmCategory` |  | |  | `ServiceDocItemCategory` | `CHAR(4)` | Item Category |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `BusSolnOrderItemCharUUID` |  | |  | `cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )` | `CHAR(32)` | UUID in Character Format |
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
| `Quantity` |  | |  | `ServiceDocumentItemQuantity` | `QUAN(13)` | CRM: Order Quantity |
| `QuantityUnit` |  | |  | `ServiceDocItemQuantityUnit` | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
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
| `ReferenceCurrency` |  | |  | `StatisticsCurrency` | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  | `cast( AccountingExchangeRate as fis_exchange_rate preserving type )` | `DEC(9)` | Exchange Rate |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `BusSolnOrdItmRjcnReason` |  | |  | `ServiceDocItemRejectionReason` | `CHAR(2)` | Cancellation Reason Code |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `BusSolnOrdItmStatus` |  | |  | `ServiceDocumentItemStatus` | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdItmIsReleased` |  | |  | `ServiceDocumentItemIsReleased` | `CHAR(1)` | Release Status |
| `BusSolnOrdItemHasError` |  | |  | `ServiceDocumentItemHasError` | `CHAR(1)` | Error Status |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `BusSolnOrdItmIsRejected` |  | |  | `ServiceDocumentItemIsRejected` | `CHAR(1)` | Cancellation Status |
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
| `SubscrpnBillgRatePlanCharUUID` |  | |  | `cast( SubscrpnBillgRatePlanCharUUID as sysuuid_c preserving type )` | `CHAR(32)` | UUID in Character Format |
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
| `_BusSolnOrdItmCategory` |  | |  | `_ServiceDocItemCategory` |  |  |
| `_BusSolnOrdItmHasError` |  | |  | `_ServiceDocItemHasError` |  |  |
| `_BusSolnOrdItmRjcnReason` |  | |  | `_ServiceDocItemRejectionReason` |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_BillPlanDateRule` | | ✓ | | | | |
| `_SettlementDateRule` | | ✓ | | | | |
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
| `_ServiceProductList` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order Item'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_StatusObjItemStatus',
                              '_BillPlanDateRule',
                              '_SettlementDateRule' ],
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
    usageType: {
        serviceQuality: #A,
        sizeCategory: #XXL,
        dataClass: #TRANSACTIONAL
    }
}

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusinessSolutionOrderItem
  as select from I_ServiceDocumentItem_2

  association to exact one I_BusinessSolutionOrder as _BusinessSolutionOrder        on  _BusinessSolutionOrder.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to one E_ServiceDocumentItem         as _BusinessSolutionOrderItemExt on  _BusinessSolutionOrderItemExt.ServiceCategory       = $projection.ServiceObjectType
                                                                                    and _BusinessSolutionOrderItemExt.ServiceOrderItem      = $projection.BusinessSolutionOrder
                                                                                    and _BusinessSolutionOrderItemExt.ServiceLineExternalID = $projection.BusinessSolutionOrderItem
{
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrder'
  key ServiceDocument                                                     as BusinessSolutionOrder,
      @ObjectModel.text.element: [ 'BusSolnOrdItmDescription' ]
  key ServiceDocumentItem                                                 as BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType, // Not a key field because the selection limits the values to 'BUS2000172'
      ServiceDocumentUUID                                                 as BusinessSolutionOrderUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      ServiceDocumentItemUUID                                             as BusinessSolutionOrderItemUUID,
      ServiceDocumentItemObjectType,
      @Semantics.text: true
      ServiceDocumentItemDescription                                      as BusSolnOrdItmDescription,
      Language,
      ServiceDocumentDescription                                          as BusSolnOrdDescription,
      @ObjectModel.foreignKey.association: '_BusSolnOrdItmCategory'
      ServiceDocItemCategory                                              as BusSolnOrdItmCategory,
      ParentServiceDocumentItemUUID,
      cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )    as BusSolnOrderItemCharUUID,
      PostingDate,
      @Semantics.dateTime: true
      ServiceDocItemCreationDateTime,
      @Semantics.dateTime: true
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
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ServiceDocumentItemQuantity                                         as Quantity,
      ServiceDocItemQuantityUnit                                          as QuantityUnit,
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
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemNetAmount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemTaxAmount,
      TransactionCurrency,
      StatisticsCurrency                                                  as ReferenceCurrency,
      ExchangeRateType,
      ExchangeRateDate,
      cast( AccountingExchangeRate as fis_exchange_rate preserving type ) as AccountingExchangeRate,
      CustomerGroup,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,
      ServiceDocItemRejectionReason                                       as BusSolnOrdItmRjcnReason,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      BillableControl,
      BillingBlockReason,
      ServiceDocumentItemStatus                                           as BusSolnOrdItmStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsReleased                                       as BusSolnOrdItmIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemHasError                                         as BusSolnOrdItemHasError,
      SrvcDocItmDeliveryStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsRejected                                       as BusSolnOrdItmIsRejected,
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
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      SubscriptionBillingCycle,
      @Semantics.dateTime: true
      RequestedServiceStartDateTime,
      @Semantics.dateTime: true
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
      cast( SubscrpnBillgRatePlanCharUUID as sysuuid_c preserving type )  as SubscrpnBillgRatePlanCharUUID,
      @Semantics.dateTime: true
      PlannedServiceStartDateTime,
      @Semantics.dateTime: true
      PlannedServiceEndDateTime,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      ItemVolumeUnit,
      CustomerPriceGroup,
      PurchaseOrderByCustomer,
      SettlementPeriodRuleUUID,
      SrvcDocItmPartReferenceItem,
      BillingPlanBillingDateRuleUUID,

      _BusinessSolutionOrder,
      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceDocItemCategory                                             as _BusSolnOrdItmCategory,
      _Product,
      _ProfitCenter,
      _ControllingArea,
      _SrvcDocItmLifecycleStatus,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _PayerParty,
      _BillToParty,
      _ShipToParty,
      _RespEmployee,
      _ContactPerson,
      _PaymentTerms,
      _PaymentMethod,
      _SalesOrganization,
      _ServiceDocItemHasError                                             as _BusSolnOrdItmHasError,
      _ServiceDocumentIsOpen,
      _TransactionCurrency,
      _BillingBlockReason,
      _DeliveryBlockReason,
      _SalesUnit,
      _VolumeUnit,
      _WeightUnit,
      _ServiceDocItemRejectionReason                                      as _BusSolnOrdItmRjcnReason,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _StatusObjItemStatus,
      _ResponseProfile,
      _ServiceProfile,
      _BillableControl,
      _BillPlanDateRule,
      _SettlementDateRule,
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
      _ServiceProductList
}
where
  ServiceObjectType = 'BUS2000172'
```
