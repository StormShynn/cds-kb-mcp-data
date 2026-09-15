---
name: I_SRVCDOCITEMBYDOCUMENTTYPE
description: "Srvcdocitembydocumenttype"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - document
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMBYDOCUMENTTYPE

**Srvcdocitembydocumenttype**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceDocumentItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |
| `BillingDateTime` |  | |  |  | `DEC(15)` | Billing Date for Billing Index and Printout |
| `BillingDocCreationDateTime` |  | |  |  | `DEC(15)` | Billing Document Creation Date |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `ServiceDocumentItemPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Billing Release Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `ServiceDocItemCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `ServiceDocItemCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `ServiceDocumentItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `ServiceDocItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure of Product |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `SettlementPeriodRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Period Date |
| `BillingPlanBillingDateRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Next Billing Date |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ServiceDuration` |  | |  |  | `QUAN(13)` | Duration |
| `ServiceDocItemRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `ServiceDocumentItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `ActualServiceDuration` |  | |  |  | `QUAN(7)` | Confirmed Duration |
| `ActualServiceDurationUnit` |  | |  |  | `UNIT(3)` | Time Unit for Confirmed Duration |
| `ServiceDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Duration of Work |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Sector |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `_ServiceDocument` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Transaction Item by Transac Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCITMSRCH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocItemByDocumentType
  as select from I_ServiceDocumentItem

  association [0..1] to I_SrvcDocByDocumentType as _ServiceDocument   on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                      and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  association [0..1] to E_ServiceDocumentItem   as _ServiceDocItemExt on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                      and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                      and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

{

      //I_ServiceDocumentItem
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceDocument,
  key ServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID,
      ServiceDocumentDescription,
      ServiceDocumentItemUUID,
      ServiceDocumentItemObjectType,
      ParentServiceDocumentItemUUID,
      ServiceDocumentItemDescription,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,

      BillingDateTime,
      BillingDocCreationDateTime,

      PurchaseOrderByCustomer,
      ServiceDocumentItemPriority,
      PostingDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      //      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,

      //      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,

      //      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,

      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentItemIsOpen,

      ServiceOrganization,
      ResponsibleServiceOrganization,

      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,

      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,
      //      @Semantics.systemDate.createdAt: true
      //      cast( cast(substring( cast(ServiceDocItemCreationDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as ServiceDocItemCreationDate,
      //      @Semantics.systemDate.lastChangedAt: true
      //      cast( cast(substring( cast(ServiceDocItemChangedDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocItemChangedDate,

      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      OriginallyRequestedProduct,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SrvcDocItemBaseQuantityUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceDocItemCategory,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      BillableControl,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,

      ServiceContrItemStartDateTime,
      ServiceContrItemEndDateTime,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,

      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      DistributionChannel,
      Division,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      ServiceDocItemRejectionReason,
      ShipToParty,
      ServiceDocumentItemIsReleased,
      ServiceDocumentItemIsRejected,
      ResponseProfile,
      ServiceProfile,
      Language,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ActualServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_Industry'
      Industry,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemRnwlDurationUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemExtnDurationUnit,

      /* Associations */
      //I_ServiceDocumentItem
      _BillingBlockReason,
      _BillingRequestItem,
      _BillToParty,
      _ContactPerson,
      _PayerParty,
      _RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemBillingStatus,
      _ServiceDocItemCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemHasError,
      _ServiceDocItemPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
      _SrvcDocItmLifecycleStatus,
      _ServiceDocumentType,
      _ServiceEmployee,
      _ServiceDocument,
      _ServiceObjType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BaseUnit_2'
      _BaseUnit,
      _BaseUnit_2,
      _SalesUnit,
      _TransactionCurrency,
      _PaymentTerms,
      _ServiceProductList,
      _ServiceTeam,
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _FixedPrice,
      _StatusObjItemStatus,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyCountry,
      _SoldToPartyRegion,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,

      _SalesOrganizationOrgUnit_2,
      _SalesOfficeOrgUnit_2,
      _SalesGroupOrgUnit_2


}
```
