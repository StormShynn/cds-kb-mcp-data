---
name: I_BUSINESSSOLUTIONORDERITEMTP
description: "Businesssolutionorderitemtp"
semantic_vi: "Chứa dữ liệu về mặt hàng giải pháp kinh doanh, hữu ích cho các giao dịch liên quan đến tài liệu dịch vụ và giải pháp kinh doanh."
keywords:
  - "business solution"
  - "service document"
  - "order item"
  - "đơn giải pháp kinh doanh"
  - "tài liệu dịch vụ"
  - "mặt hàng"
  - "transactional processing"
  - "crm"
  - "sap"
  - "ekko"
semantic_en: "Exposes business solution order item data, useful for transactions involving service documents and business solutions."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSINESSSOLUTIONORDERITEMTP

**Businesssolutionorderitemtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `ParentBusSolnOrdItem` |  | |  |  |  |  |
| `BusSolnOrdItmCategory` |  | |  |  |  |  |
| `BusinessSolutionOrderItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemCharUUID` |  | |  |  |  |  |
| `BusSolnOrdItmDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PlannedServiceStartDateTime` |  | |  |  |  |  |
| `PlannedServiceEndDateTime` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `RequestedDeliveryUTCDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `BusSolnOrdExtReference` |  | |  |  |  |  |
| `BusSolnOrdItmExtReference` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `SrvcDocItemCumulatedNetAmount` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ProjectManager` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `BusSolnOrdItmIsNew` |  | |  |  |  |  |
| `BusSolnOrdItmIsInProcess` |  | |  |  |  |  |
| `BusSolnOrdItmIsReleased` |  | |  |  |  |  |
| `BusSolnOrdItmIsCompleted` |  | |  |  |  |  |
| `BusSolnOrdItmStatus` |  | |  |  |  |  |
| `BusSolnOrdItmIsRejected` |  | |  |  |  |  |
| `ServiceDocItemBillingStatus` |  | |  |  |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |  |  |
| `SrvcDocItemTransferStatus` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `EnterpriseProjectServiceOrg` |  | |  |  |  |  |
| `ReferenceServiceContract` |  | |  |  |  |  |
| `ReferenceServiceContractItem` |  | |  |  |  |  |
| `SrvcContrDetnIsSpprsd` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `BusSolnOrdItmRjcnReason` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `SrvcMgmtBillgPlanBillgDateRule` |  | |  |  |  |  |
| `SettlementPeriodRule` |  | |  |  |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  |  |  |
| `MidBillgCycExprtnIsAllowed` |  | |  |  |  |  |
| `SubscrpnContrAutoRnwlIsActv` |  | |  |  |  |  |
| `SubscriptionBillingCycle` |  | |  |  |  |  |
| `SubscrpnOrdIsPending` |  | |  |  |  |  |
| `NrOfBillgCyclesBilledTogether` |  | |  |  |  |  |
| `SubscrpnBillgRatePlanUUID` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `IncotermsPart1` |  | |  |  |  |  |
| `IncotermsPart2` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ContractAccount` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SrvcDocItmApptRefObjectUUID` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusSolnOrdItmRefObjectTP` | | ✓ | | | | |
| `_BusSolnOrdItmPriceElementTP` | | ✓ | | | | |
| `_BusSolnOrdItmProductTP` | | ✓ | | | | |
| `_BusSolnOrdItmUserStatusTP` | | ✓ | | | | |
| `_BusSolnOrdItmPartnerTP` | | ✓ | | | | |
| `_BSOrdItmRateElementTP` | | ✓ | | | | |
| `_BSOrdItmSubscrpnParameterTP` | | ✓ | | | | |
| `_BSOrdItmSubscrpnParameter2TP` | | ✓ | | | | |
| `_BSOrdItmSubscrpnPriceParamTP` | | ✓ | | | | |
| `_BusSolnOrdItmFUPSalesOrderTP` | | ✓ | | | | |
| `_BusSolnOrdItmFUPSrvcOrdTP` | | ✓ | | | | |
| `_BusSolnOrdItmFUPSrvcContrTP` | | ✓ | | | | |
| `_BusSolnOrdItmFUPSubscrpnTP` | | ✓ | | | | |
| `_BusSolnOrdItmFUPEntProjectTP` | | ✓ | | | | |
| `_BusSolnOrdItmAppointmentTP` | | ✓ | | | | |
| `_BusSolnOrdItmDurationTP` | | ✓ | | | | |
| `_BSOrdItmPrdcssrSrvcContrTP` | | ✓ | | | | |
| `_BusSolnOrdItmScheduleLineTP` | | ✓ | | | | |
| `_BSOrdItmSubscrpnPriceAgrmtTP` | | ✓ | | | | |
| `_BusSolnOrdItmConfigurationTP` | | ✓ | | | | |
| `_BusSolnOrdItemLongTextTP` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_BusSolnOrdItemStatus` | | ✓ | | | | |
| `_RejectionReasonText` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SettlementPeriodRuleText` | | ✓ | | | | |
| `_SrvcMgmtDateRuleText` | | ✓ | | | | |
| `_SubscriptionBillingCycleText` | | ✓ | | | | |
| `_SrvcDocLifecycleStatusText` | | ✓ | | | | |
| `_ServiceDocBillingStatusText` | | ✓ | | | | |
| `_SrvcDocDeliveryStatusText` | | ✓ | | | | |
| `_SrvcDocTransferStatusText` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |
| `_DistributionChannelText` | | ✓ | | | | |
| `_DivisionText` | | ✓ | | | | |
| `_SalesOfficeText` | | ✓ | | | | |
| `_SalesGroupText` | | ✓ | | | | |
| `_BillingBlockReasonText` | | ✓ | | | | |
| `_SalesDocumentRjcnReasonText` | | ✓ | | | | |
| `_PaymentTermsText` | | ✓ | | | | |
| `_DeliveryBlockReasonText` | | ✓ | | | | |
| `_ResponseProfileText` | | ✓ | | | | |
| `_ServiceProfileText` | | ✓ | | | | |
| `_ServiceDocumentTypeText` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_ServiceDocItemCategoryText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  semanticKey: ['BusinessSolutionOrderItem'],
  sapObjectNodeType.name: 'BusinessSolutionOrderItem',
  representativeKey: 'BusinessSolutionOrderItem',
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Business Solution Order Item - TP'

define view entity I_BusinessSolutionOrderItemTP
  as projection on R_BusinessSolutionOrderItemTP as _BusinessSolutionOrderItemTP
{
      // Administrative
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
      ParentBusSolnOrdItem,
      @ObjectModel.text.association: '_ServiceDocItemCategoryText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocItemCategory' , element:'ServiceDocItemCategory'}, useAsTemplate: true  }]
      BusSolnOrdItmCategory,
      BusinessSolutionOrderItemUUID,

      @Semantics.uuid: true
      ServiceDocumentItemCharUUID,
      BusSolnOrdItmDescription,
      Language,
      PostingDate,


      PlannedServiceStartDateTime,
      PlannedServiceEndDateTime,
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      RequestedDeliveryUTCDateTime,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      BusSolnOrdExtReference,
      BusSolnOrdItmExtReference,

      // Item
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProductStdVH' , element:'Product'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SrvcDocItemCumulatedNetAmount,

      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      QuantityUnit,

      // Partners
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,

      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,

      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,

      ProjectManager,
      ServicePerformer,

      // Status
      BusSolnOrdItmIsNew,
      BusSolnOrdItmIsInProcess,
      BusSolnOrdItmIsReleased,
      BusSolnOrdItmIsCompleted,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocLifecycleStatus' , element:'ServiceDocumentStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcDocLifecycleStatusText'
      BusSolnOrdItmStatus,

      @Semantics.booleanIndicator
      BusSolnOrdItmIsRejected,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocBillingStatus' , element:'ServiceDocBillingStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceDocBillingStatusText'
      ServiceDocItemBillingStatus,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocDeliveryStatus' , element:'SrvcDocItmDeliveryStatus'}, useAsTemplate: true  }]
      @ObjectModel.sapObjectNodeTypeReference: 'SrvcDocDeliveryStatus'
      @ObjectModel.text.association: '_SrvcDocDeliveryStatusText'
      SrvcDocItmDeliveryStatus,
      
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocTransferStatus' , element:'SrvcDocTransferStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcDocTransferStatusText'
      SrvcDocItemTransferStatus,

      // Organization
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SalesOrganizationStdVH' , element:'SalesOrganization'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SalesOrganizationText'
      SalesOrganization,
      @ObjectModel.text.association: '_DistributionChannelText'
      DistributionChannel,
      @ObjectModel.text.association: '_DivisionText'
      Division,
      @ObjectModel.text.association: '_SalesOfficeText'
      SalesOffice,
      @ObjectModel.text.association: '_SalesGroupText'
      SalesGroup,
      ResponsibleCostCenter,
      EnterpriseProjectServiceOrg,

      // Reference Documents
      ReferenceServiceContract,
      ReferenceServiceContractItem,
      SrvcContrDetnIsSpprsd,

      // Other
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BillingBlockReason' , element:'BillingBlockReason'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_BillingBlockReasonText'
      BillingBlockReason,
      @ObjectModel.text.association: '_SalesDocumentRjcnReasonText'
      BusSolnOrdItmRjcnReason,
      MaterialPricingGroup,
      PartialDeliveryIsAllowed,
      
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcMgmtPaymentTermsVH' , element:'PaymentTerms'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_PaymentTermsText'
      PaymentTerms,
      

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProfitCenterVH' , element:'ProfitCenter'}, useAsTemplate: true  }]
      ProfitCenter,
      PurchaseOrderByCustomer,
      TimeSheetOvertimeCategory,

      // Service Contract Related
      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'
      SrvcContrItemRnwlDuration,
      
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      SrvcContrItemRnwlDurationUnit,

      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'
      SrvcContrItemExtensionDuration,
      
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      SrvcContrItemExtnDurationUnit,
      @ObjectModel.text.association: '_SrvcMgmtDateRuleText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CustMgmtDateRule' , element:'CustMgmtDateRuleName'}, useAsTemplate: true  }]
      SrvcMgmtBillgPlanBillgDateRule,
      @ObjectModel.text.association: '_SettlementPeriodRuleText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CustMgmtDateRule' , element:'CustMgmtDateRuleName'}, useAsTemplate: true  }]
      SettlementPeriodRule,

      // Subscription Related
      @Semantics.booleanIndicator
      SubscrpnContrTrmsAreSpecified,

      @Semantics.booleanIndicator
      MidBillgCycExprtnIsAllowed,

      @Semantics.booleanIndicator
      SubscrpnContrAutoRnwlIsActv,
      @ObjectModel.text.association: '_SubscriptionBillingCycleText'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SubscriptionBillingCycle' , element:'SubscriptionBillingCycle'}, useAsTemplate: true  }]
      SubscriptionBillingCycle,
      @Semantics.booleanIndicator: true
      SubscrpnOrdIsPending,
      NrOfBillgCyclesBilledTogether,
      @Semantics.uuid: true
      SubscrpnBillgRatePlanUUID,

      // Pricing
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_CurrencyText'
      TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemNetAmount,

      // Shipping
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasure' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      ItemVolumeUnit,
      ItemWeightUnit,
      @ObjectModel.text.association: '_DeliveryBlockReasonText'
      DeliveryBlockReason,
      ItemOrderProbabilityInPercent,

      IncotermsPart1,
      IncotermsPart2,
      OrderCombinationIsAllowed,
      DeliveryGroup,
      DeliveryPriority,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_PlantStdVH' , element:'Plant'}, useAsTemplate: true  }]
      Plant,

      // Contract Account
      ContractAccount,

      // SLA
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ResponseProfile' , element:'ResponseProfile'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ResponseProfileText'
      ResponseProfile,

      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceProfile' , element:'ServiceProfile'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceProfileText'
      ServiceProfile,

      // For Authorization
      SalesOfficeOrgUnitID,
      SalesGroupOrgUnitID,
      ServiceOrganization,

      @ObjectModel.sapObjectNodeTypeReference: 'ServiceDocumentType'
//      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocumentType' , element:'ServiceDocumentType'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceDocumentTypeText'
      ServiceDocumentType,
      ServiceObjectType,
      SalesOrganizationOrgUnitID,

      //Inheritance of Complex set RAP
      SrvcDocItmApptRefObjectUUID,

      // Compositions
      _BusinessSolutionOrder        : redirected to parent I_BusinessSolutionOrderTP,
      _BusSolnOrdItmRefObjectTP     : redirected to composition child I_BusSolnOrdItmRefObjectTP,
      _BusSolnOrdItmPriceElementTP  : redirected to composition child I_BusSolnOrdItmPriceElementTP,
      _BusSolnOrdItmProductTP       : redirected to composition child I_BusSolnOrdItmProductTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmUserStatusTP    : redirected to composition child I_BusSolnOrdItmUserStatusTP,
      _BusSolnOrdItmPartnerTP       : redirected to composition child I_BusSolnOrdItmPartnerTP,
      _BSOrdItmRateElementTP        : redirected to composition child I_BSOrdItmRateElementTP,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BSOrdItmSubscrpnParameter2TP'
      _BSOrdItmSubscrpnParameterTP  : redirected to composition child I_BSOrdItmSubscrpnParameterTP,
      _BSOrdItmSubscrpnParameter2TP : redirected to composition child I_BSOrdItmSubscrpnParamTP_2,
      _BSOrdItmSubscrpnPriceParamTP : redirected to composition child I_BSOrdItmSubscrpnPriceParamTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmFUPSalesOrderTP : redirected to composition child I_BusSolnOrdItmFUPSalesOrderTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmFUPSrvcOrdTP    : redirected to composition child I_BusSolnOrdItmFUPSrvcOrdTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmFUPSrvcContrTP  : redirected to composition child I_BusSolnOrdItmFUPSrvcContrTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmFUPSubscrpnTP   : redirected to composition child I_BusSolnOrdItmFUPSubscrpnTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdItmFUPEntProjectTP : redirected to composition child I_BusSolnOrdItmFUPEntProjectTP,
      _BusSolnOrdItmAppointmentTP   : redirected to composition child I_BusSolnOrdItmAppointmentTP,
      _BusSolnOrdItmDurationTP      : redirected to composition child I_BusSolnOrdItmDurationTP,
      @Semantics.valueRange.maximum: '1'
      _BSOrdItmPrdcssrSrvcContrTP   : redirected to composition child I_BSOrdItmPrdcssrSrvcContrTP,
      _BusSolnOrdItmScheduleLineTP  : redirected to composition child I_BusSolnOrdItmScheduleLineTP,
      _BSOrdItmSubscrpnPriceAgrmtTP : redirected to composition child I_BSOrdItmSubscrpnPriceAgrmtTP,
      _BusSolnOrdItmConfigurationTP : redirected to composition child I_BusSolnOrdItmConfigurationTP,
      _BusSolnOrdItemLongTextTP     : redirected to composition child I_BusSolnOrdItemLongTextTP,


      // Associations
      _SoldToParty,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _ContactPerson,
      _RespEmployee,
      _BusSolnOrdItemStatus,
      _RejectionReasonText,
      _ServiceDocument,
      _Product,
      _TransactionCurrency,
      _ServiceDocItemRejectionReason,
      _ServiceObjType,
      _SettlementPeriodRuleText,
      _SrvcMgmtDateRuleText,
      _SubscriptionBillingCycleText,
      _SrvcDocLifecycleStatusText,
      _ServiceDocBillingStatusText,
      _SrvcDocDeliveryStatusText,
      _SrvcDocTransferStatusText,
      _SalesOrganizationText,
      _DistributionChannelText,
      _DivisionText,
      _SalesOfficeText,
      _SalesGroupText,
      _BillingBlockReasonText,
      _SalesDocumentRjcnReasonText,
      _PaymentTermsText,

      _DeliveryBlockReasonText,
      _ResponseProfileText,
      _ServiceProfileText,
      _ServiceDocumentTypeText,
      _UnitOfMeasureText,
      _CurrencyText,
      _ServiceDocItemCategoryText
}
```
