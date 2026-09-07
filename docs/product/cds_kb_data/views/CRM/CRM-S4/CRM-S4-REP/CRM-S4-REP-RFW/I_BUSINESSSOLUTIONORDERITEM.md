---
name: I_BUSINESSSOLUTIONORDERITEM
description: "Businesssolutionorderitem"
semantic_vi: "View Businesssolutionorderitem hiển thị dữ liệu về mặt hàng giải pháp kinh doanh, có liên quan khi làm việc với giải pháp kinh doanh CRM và các mặt hàng liên quan."
keywords:
  - "business solution"
  - "crm"
  - "business solution order"
  - "order item"
  - "service object"
  - "service document"
  - "business solution order item"
  - "sap crm"
  - "ekko"
  - "đơn giải pháp kinh doanh"
semantic_en: "The Businesssolutionorderitem view exposes business solution order item data, which is relevant when working with CRM business solutions and their associated items."
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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  | `ServiceDocumentItem` |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `BusinessSolutionOrderItemUUID` |  | |  | `ServiceDocumentItemUUID` |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `BusSolnOrdItmDescription` |  | |  | `ServiceDocumentItemDescription` |  |  |
| `Language` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  | `ServiceDocumentDescription` |  |  |
| `BusSolnOrdItmCategory` |  | |  | `ServiceDocItemCategory` |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `BusSolnOrderItemCharUUID` |  | |  | `cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )` |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitCenterDeterminationDate` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `OriginallyRequestedProduct` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `BusSolnOrdItemBundleProduct` |  | |  |  |  |  |
| `BusSolnOrdItemBundleItem` |  | |  |  |  |  |
| `Quantity` |  | |  | `ServiceDocumentItemQuantity` |  |  |
| `QuantityUnit` |  | |  | `ServiceDocItemQuantityUnit` |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ReferenceCurrency` |  | |  | `StatisticsCurrency` |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  | `cast( AccountingExchangeRate as fis_exchange_rate preserving type )` |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `BusSolnOrdItmRjcnReason` |  | |  | `ServiceDocItemRejectionReason` |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `BusSolnOrdItmStatus` |  | |  | `ServiceDocumentItemStatus` |  |  |
| `BusSolnOrdItmIsReleased` |  | |  | `ServiceDocumentItemIsReleased` |  |  |
| `BusSolnOrdItemHasError` |  | |  | `ServiceDocumentItemHasError` |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |  |  |
| `BusSolnOrdItmIsRejected` |  | |  | `ServiceDocumentItemIsRejected` |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `ProductGroup1` |  | |  |  |  |  |
| `ProductGroup2` |  | |  |  |  |  |
| `ProductGroup3` |  | |  |  |  |  |
| `ProductGroup4` |  | |  |  |  |  |
| `ProductGroup5` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `EnterpriseProjectServiceOrg` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `MidBillgCycExprtnIsAllowed` |  | |  |  |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  |  |  |
| `SubscriptionBillingCycle` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `SubscrpnBillgRatePlanCharUUID` |  | |  | `cast( SubscrpnBillgRatePlanCharUUID as sysuuid_c preserving type )` |  |  |
| `PlannedServiceStartDateTime` |  | |  |  |  |  |
| `PlannedServiceEndDateTime` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `SettlementPeriodRuleUUID` |  | |  |  |  |  |
| `SrvcDocItmPartReferenceItem` |  | |  |  |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  |  |  |  |
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
