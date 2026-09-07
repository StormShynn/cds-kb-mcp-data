---
name: I_BUSSOLUTIONORDERITEMENHCD
description: "Bussolutionorderitemenhcd"
semantic_vi: "Chứa dữ liệu chi tiết đơn hàng giải pháp kinh doanh, bao gồm mô tả và thông tin ngôn ngữ, cho mục đích báo cáo và giao diện CRM."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "crm reporting"
  - "interface view"
  - "service document"
  - "service document item"
  - "bus soln ord item description"
  - "language"
  - "bus soln ord description"
semantic_en: "Exposes business solution order item data, including descriptions and language information, for use in CRM reporting and interface views."
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
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `BusinessSolutionOrderItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `BusSolnOrdItmDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  |  |  |  |
| `BusSolnOrdItmCategory` |  | |  |  |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `BusSolnOrderItemCharUUID` |  | |  |  |  |  |
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
| `Quantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
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
| `ReferenceCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `BusSolnOrdItmRjcnReason` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `BusSolnOrdItmStatus` |  | |  |  |  |  |
| `BusSolnOrdItmIsReleased` |  | |  |  |  |  |
| `BusSolnOrdItemHasError` |  | |  |  |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |  |  |
| `BusSolnOrdItmIsRejected` |  | |  |  |  |  |
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
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  |  |  |
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
| `CompanyCode` |  | |  | `cast( _SalesOrganization.CompanyCode as vkbuk preserving type )` |  |  |
| `ReferenceServiceContract` |  | | `_PrecedingContractItem._ServiceDocItm` | `ServiceDocument` |  |  |
| `ReferenceServiceContractItem` |  | | `_PrecedingContractItem._ServiceDocItm` | `ServiceDocumentItem` |  |  |
| `BusSolnOrdExtReference` |  | | `_ExtRefHeader` | `CustMgmtExtRefID` |  |  |
| `BusSolnOrdItmExtReference` |  | | `_ExtRefItem` | `CustMgmtExtRefID` |  |  |
| `SrvcMgmtBillgPlanBillgDateRule` |  | | `_BillPlanDateRule` | `CustMgmtDateRuleName` |  |  |
| `SettlementPeriodRule` |  | | `_SettlementDateRule` | `CustMgmtDateRuleName` |  |  |
| `ProjectUUID` |  | | `_EntProjBusSolutionOrderLink` | `ProjectUUID` |  |  |
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
