---
name: I_SERVICECONTRACTITEMENHCD
description: "Servicecontractitemenhcd"
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
  - service
  - contract
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTITEMENHCD

**Servicecontractitemenhcd**

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
| `ServiceContract` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceContractItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ServiceContractItemDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `ServiceContractDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceContractItemCharUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ServiceContractUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocItemCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocItemCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ServiceContractItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `ServiceContrItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `BillingPlanTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Billing Plan Set |
| `BillingPriceSourceName` |  | |  |  | `CHAR(15)` | Source of price in service confirmation |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ContactPersonBusinessPartnerId` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceContractItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceContractItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContrItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceContractItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceContractItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcContrItemRenewalDateTime` |  | |  |  | `DEC(15)` | Start Date of Auto Renewal Period |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |
| `ServiceContractItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `ServiceContractItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocumentItemTaxAmount` |  | |  |  | `CURR(15)` | Tax amount in document currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SrvcDocItemTransferStatus` |  | |  |  | `CHAR(1)` | Transfer Status |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  | `CHAR(1)` | Overwrite Default Terms |
| `MidBillgCycExprtnIsAllowed` |  | |  |  | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `ServiceContractItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceContractItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcContrItmCanclnProcedure` |  | |  |  | `CHAR(4)` | Cancellation Procedure |
| `SettlementPeriodRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Period Date |
| `SettlementPeriodRule` |  | | `_SettlementPeriodRule` | `CustMgmtDateRuleName` | `CHAR(12)` | Date Rule |
| `BillingPlanBillingDateRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Next Billing Date |
| `SrvcMgmtBillgPlanBillgDateRule` |  | | `_BillingPlanBillingDateRule` | `CustMgmtDateRuleName` | `CHAR(12)` | Date Rule |
| `SrvcContrItemCanclnDateTime` |  | |  | `cast( case ServiceContractItemCanclnParty when '' then 0 else ServiceContrItemEndDateTime end as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `BillingPlanPriceDateRule` |  | |  |  | `CHAR(1)` | Rule for Determining the Pricing Date |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `PurchaseOrderByShipToParty` |  | |  |  | `CHAR(35)` | Ship-To Party's External Reference Number |
| `SrvcContrItemRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `BillingPlanIsFinalized` |  | |  |  | `CHAR(1)` | Billing Plan Is Finalized |
| `SrvcContrExternalReference` |  | | `_ExtRefServiceContract` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `SrvcContrItmExternalReference` |  | | `_ExtRefServiceContractItem` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `ServiceQtanExtReference` |  | | `_ExtRefServiceQtan` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `ServiceQtanItemExtReference` |  | | `_ExtRefServiceQtanItem` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SrvcContrRenewalDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrRenewalDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrExtensionDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `SrvcContrItemCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SrvcDocItmPartReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItemLongText` | | ✓ | | | | |
| `_ServiceContractItemRefObj` | | ✓ | | | | |
| `_SrvcContrItemPriceElement` | | ✓ | | | | |
| `_ServiceDocItmSuccssr_2` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceContractItemCategory` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ServiceContractItemHasError` | | ✓ | | | | |
| `_ServiceContrItemBillingStatus` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcContrItemRejectionReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_SrvcContrItemCreditStatus` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItemEnhcdExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceContract` | `I_ServiceContractEnhcd` | [1..1] |
| `_SettlementPeriodRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_BillingPlanBillingDateRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_ExtRefServiceContract` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceContractItem` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceQtan` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceQtanItem` | `I_CustMgmtExtRefID` | [0..1] |
| `_ServiceContractItemLongText` | `I_SrvcDocItemLongText` | [0..*] |
| `_ServiceContractItemRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_SrvcContrItemPriceElement` | `I_SrvcContrItemPriceElement` | [0..*] |
| `_ServiceDocItmSuccssr_2` | `I_ServiceDocumentItemSuccssr_2` | [0..*] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_BillingRequestItem` | `I_BillingRequestItem` | [0..*] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Enhanced'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_CustMgmtPartner', 
                              '_ServiceContractItemLongText', 
                              '_SrvcContrItemPriceElement', 
                              '_ServiceContractItemRefObj' ],
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType:{
        serviceQuality: #C,
        sizeCategory: #XXL,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ServiceContractItem',
    sapObjectNodeType.name: 'ServiceContractItem'
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ServiceContractItemEnhcd as select from I_ServiceContractItem
  association [0..1] to E_ServiceDocumentItem as _ServiceContractItemEnhcdExt          on $projection.ServiceObjectType   = _ServiceContractItemEnhcdExt.ServiceCategory
                                                                                      and $projection.ServiceContract     = _ServiceContractItemEnhcdExt.ServiceOrderItem
                                                                                      and $projection.ServiceContractItem = _ServiceContractItemEnhcdExt.ServiceLineExternalID
  
  association [1..1] to I_ServiceContractEnhcd        as _ServiceContract              on _ServiceContract.ServiceContract = $projection.ServiceContract
  
  association [0..1] to I_SrvcMgmtDateRule            as _SettlementPeriodRule         on  $projection.SettlementPeriodRuleUUID = _SettlementPeriodRule.CustMgmtDateRuleUUID

  association [0..1] to I_SrvcMgmtDateRule            as _BillingPlanBillingDateRule   on  $projection.BillingPlanBillingDateRuleUUID = _BillingPlanBillingDateRule.CustMgmtDateRuleUUID

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContract        on _ExtRefServiceContract.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceContract.CustMgmtDocument     = $projection.ServiceContract
                                                                                      and _ExtRefServiceContract.CustMgmtDocumentItem = '000000'
                                                                                      and _ExtRefServiceContract.CustMgmtExtRefIDType = '0003'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContractItem    on _ExtRefServiceContractItem.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceContractItem.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceContractItem.CustMgmtDocumentItem = $projection.ServiceContractItem 
                                                                                      and _ExtRefServiceContractItem.CustMgmtExtRefIDType = '0004'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceQtan            on  _ExtRefServiceQtan.CustMgmtObjectType  = 'BUS2000112'
                                                                                      and _ExtRefServiceQtan.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceQtan.CustMgmtExtRefIDType = '0009'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceQtanItem        on _ExtRefServiceQtanItem.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceQtanItem.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceQtanItem.CustMgmtDocumentItem = $projection.ServiceContractItem
                                                                                      and _ExtRefServiceQtanItem.CustMgmtExtRefIDType = '0010'
  
  association [0..*] to I_SrvcDocItemLongText         as _ServiceContractItemLongText  on _ServiceContractItemLongText.ServiceObjectType   = $projection.ServiceObjectType
                                                                                      and _ServiceContractItemLongText.ServiceDocument     = $projection.ServiceContract
                                                                                      and _ServiceContractItemLongText.ServiceDocumentItem = $projection.ServiceContractItem
                                                                                      and _ServiceContractItemLongText.Language            = $session.system_language

  association [0..*] to I_ServiceDocumentRefObject    as _ServiceContractItemRefObj    on _ServiceContractItemRefObj.ServiceObjectType = $projection.ServiceObjectType
                                                                                      and _ServiceContractItemRefObj.ServiceDocument   = $projection.ServiceContract
                                                                                      and _ServiceContractItemRefObj.ServiceDocumentItem = $projection.ServiceContractItem

  association [0..*] to I_SrvcContrItemPriceElement   as _SrvcContrItemPriceElement    on _SrvcContrItemPriceElement.ServiceContract = $projection.ServiceContract
                                                                                      and _SrvcContrItemPriceElement.ServiceContractItem = $projection.ServiceContractItem

  association [0..*] to I_ServiceDocumentItemSuccssr_2 as _ServiceDocItmSuccssr_2      on  $projection.ServiceContractItemCharUUID = _ServiceDocItmSuccssr_2.ServiceDocumentItemCharUUID


  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner              on _CustMgmtPartner.CustMgmtDocument     = $projection.ServiceContract
                                                                                      and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType 
                                                                                      and _CustMgmtPartner.CustMgmtDocumentItem = $projection.SrvcDocItmPartReferenceItem

  association [0..*] to I_BillingRequestItem          as _BillingRequestItem           on _BillingRequestItem.ServiceObjectType   = $projection.ServiceObjectType
                                                                                      and _BillingRequestItem.ServiceDocument     = $projection.ServiceContract
                                                                                      and _BillingRequestItem.ServiceDocumentItem = $projection.ServiceContractItem

  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData          on _WBSElementBasicData.WBSElementInternalID = $projection.WBSElementInternalID
{
      @ObjectModel.foreignKey.association: '_ServiceContract'
  key ServiceContract,
      @ObjectModel.text.element: [ 'ServiceContractItemDescription' ]
  key ServiceContractItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,       // Not a key field because the selection limits the values to 'BUS2000112'
      ServiceContractItemCategory,
      @Semantics.text: true
      ServiceContractItemDescription,
      ServiceContractDescription,
      ServiceDocumentType,
      ServiceContractItemUUID,
      ServiceContractItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceContractUUID,
      Language,
      PostingDate,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Product,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceContrItemQuantityUnit'} }
      ServiceContractItemQuantity,
      ServiceContrItemQuantityUnit,
      BillingPlanTimeZone,
      BillingPriceSourceName,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      ContactPersonBusinessPartnerId,
      RespEmployeeBusinessPartnerId,
      ServiceEmployee,
      PaymentTerms,
      PaymentMethod,
      SEPAMandate,
      SrvcSEPAMandateRelevance,
      BillableControl,
      
      // Status
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      @Semantics.booleanIndicator: true
      ServiceContractItemIsReleased,
      ServiceContractItemStatus,
      ServiceContrItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItemIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractItemHasError,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      ResponseProfile,
      ServiceProfile,
      ControllingArea,    // Needed for _ProfitCenter
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      TransactionCurrency,
      SrvcDocItemTransferStatus,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      //Cancellation
      ServiceContractItemCanclnParty,
      ServiceContractItmCanclnReason,
      SrvcContrItmCanclnProcedure,
      // Item - Billing Plan
      SettlementPeriodRuleUUID,
      _SettlementPeriodRule.CustMgmtDateRuleName                 as SettlementPeriodRule,
      BillingPlanBillingDateRuleUUID,
      _BillingPlanBillingDateRule.CustMgmtDateRuleName           as SrvcMgmtBillgPlanBillgDateRule,
      @Semantics.dateTime: true
      cast( case ServiceContractItemCanclnParty
            when '' then 0
            else ServiceContrItemEndDateTime
            end as timestamp preserving type )                   as SrvcContrItemCanclnDateTime,
      BillingPlanPriceDateRule,
      BillingBlockReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      SrvcContrItemRejectionReason,
      BillingPlanIsFinalized,
      // Reference Documents
      _ExtRefServiceContract.CustMgmtExtRefID                    as SrvcContrExternalReference,
      _ExtRefServiceContractItem.CustMgmtExtRefID                as SrvcContrItmExternalReference,

      _ExtRefServiceQtan.CustMgmtExtRefID                        as ServiceQtanExtReference,
      _ExtRefServiceQtanItem.CustMgmtExtRefID                    as ServiceQtanItemExtReference,

      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrRenewalDurationUnit'} }
      SrvcContrRenewalDuration,
      SrvcContrRenewalDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrExtensionDurationUnit'} }
      SrvcContrExtensionDuration,
      SrvcContrExtensionDurationUnit,
      SrvcContrItemCreditStatus,
      
      WBSElementInternalID,
      _WBSElementBasicData.WBSElementExternalID,
      
      SrvcDocItmPartReferenceItem,     
      
      _ServiceContractItemLongText,
      _ServiceContractItemRefObj,
      _SrvcContrItemPriceElement,
      _ServiceDocItmSuccssr_2,
      _CustMgmtPartner,
      _BillingRequestItem,
   
      _ServiceContract,
      _ServiceObjType,
      _ServiceContractItemCategory,
      _ServiceDocumentType,
      _PaymentMethod,
      _Product,
      
      _ProfitCenter,
      _SrvcDocItmLifecycleStatus,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _PayerParty,
      _BillToParty,
      _ShipToParty,
      _RespEmployee,
      _ServiceEmployee,
      _ContactPerson,
      _ServiceContractItemHasError,
      _ServiceContrItemBillingStatus,
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _BillingBlockReason,
      _SrvcContrItemRejectionReason,
      _DistributionChannel,
      _Division,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ResponseProfile,
      _ServiceProfile,
      _SrvcContrItemCreditStatus,
      _BillableControl
}
```
