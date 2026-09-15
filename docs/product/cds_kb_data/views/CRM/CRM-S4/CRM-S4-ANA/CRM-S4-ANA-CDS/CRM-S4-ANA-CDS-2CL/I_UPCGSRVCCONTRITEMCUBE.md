---
name: I_UPCGSRVCCONTRITEMCUBE
description: "Upcgsrvccontritemcube"
app_component: CRM-S4-ANA-CDS-2CL
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
  - analytical
  - item-level
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_UPCGSRVCCONTRITEMCUBE

**Upcgsrvccontritemcube**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
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
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceContract` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceContractItemProduct` |  | |  |  | `CHAR(40)` | Product |
| `ServiceContractItemStartDate` |  | |  |  | `DATS(8)` |  |
| `ServiceContractItemEndDate` |  | |  |  | `DATS(8)` |  |
| `SrvcContrStartMonth` |  | | `_StartingPeriod` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `SrvcContrStartQuarter` |  | | `_StartingPeriod` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `SrvcContrStartYear` |  | | `_StartingPeriod` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `SrvcContrEndMonth` |  | | `_ExpiringPeriod` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `SrvcContrEndQuarter` |  | | `_ExpiringPeriod` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `SrvcContrEndYear` |  | | `_ExpiringPeriod` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `ServiceDocItemCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceContractItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContractItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceContractItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ServiceContractItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `NmbrOfServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `ExprdSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ExprgSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `NrOfExprgServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `CancldSrvcContrItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `NrOfCancldServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `SrvcContrItemLostNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ReldServiceContractNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `NrOfReldServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `_StartingCalendarMonth` |  | | `_StartingPeriod` | `_CalendarMonth` |  |  |
| `_ExpiringCalendarMonth` |  | | `_ExpiringPeriod` | `_CalendarMonth` |  |  |
| `_StartingPeriod` | | ✓ | | | | |
| `_ExpiringPeriod` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_CancelParty` | | ✓ | | | | |
| `_CancelReason` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StartingPeriod` | `I_CalendarDate` | [0..1] |
| `_ExpiringPeriod` | `I_CalendarDate` | [0..1] |
| `_ServiceContract` | `I_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Upcoming Service Contract Item - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IUPCGSCITEMCUBE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
   dataCategory: #CUBE,
   internalName: #LOCAL
   }
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE
}

@Aggregation.allowPrecisionLoss:true
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_UpcgSrvcContrItemCube
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from P_UpcgSrvcContrItemDetails

  association [0..1] to I_CalendarDate    as _StartingPeriod  on  $projection.ServiceContractItemStartDate = _StartingPeriod.CalendarDate
  association [0..1] to I_CalendarDate    as _ExpiringPeriod  on  $projection.ServiceContractItemEndDate = _ExpiringPeriod.CalendarDate
  association [0..1] to I_ServiceDocument as _ServiceContract on  $projection.ServiceContract        = _ServiceContract.ServiceDocument
                                                              and _ServiceContract.ServiceObjectType = 'BUS2000112'

{
               @UI.hidden: true
               @AnalyticsDetails.query.hidden: true
               @ObjectModel.foreignKey.association: '_ServiceObjType'
               @EndUserText.label: 'Transaction Category'
  key          ServiceObjectType,
               @ObjectModel.text.element: 'ServiceContractDescription'
               @ObjectModel.foreignKey.association: '_ServiceContract'
  key          ServiceContract,
  key          ServiceContractItem,

               //       @EndUserText.label: 'Service Document'
               @ObjectModel.text.element: 'ServiceContractDescription'
               ServiceDocument,


               @ObjectModel.foreignKey.association: '_ServiceDocumentType'
               ServiceContractType,

               @Semantics.text: true
               @EndUserText.label: 'Service Contract Description'
               ServiceContractDescription,

               @ObjectModel.foreignKey.association: '_Product'
               ServiceContractItemProduct,

               ServiceContractItemStartDate,
               ServiceContractItemEndDate,

               @ObjectModel.foreignKey.association: '_StartingCalendarMonth'
               _StartingPeriod.CalendarMonth   as SrvcContrStartMonth,
               @Semantics.calendar.quarter
               _StartingPeriod.CalendarQuarter as SrvcContrStartQuarter,
               @Semantics.calendar.year
               _StartingPeriod.CalendarYear    as SrvcContrStartYear,

               @ObjectModel.foreignKey.association: '_ExpiringCalendarMonth'
               _ExpiringPeriod.CalendarMonth   as SrvcContrEndMonth,
               @Semantics.calendar.quarter
               _ExpiringPeriod.CalendarQuarter as SrvcContrEndQuarter,
               @Semantics.calendar.year
               _ExpiringPeriod.CalendarYear    as SrvcContrEndYear,
               ServiceDocItemCreationDate,

               @EndUserText.label:'Booking Date'
               PostingDate,

               @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
               ServiceContractItemStatus,

               @ObjectModel.foreignKey.association: '_CancelParty'
               ServiceContractItemCanclnParty,
               @ObjectModel.foreignKey.association: '_CancelReason'
               ServiceContractItmCanclnReason,

               @ObjectModel.foreignKey.association: '_ProfitCenter'
               ProfitCenter,
               @ObjectModel.foreignKey.association: '_ControllingArea'
               ControllingArea,

               @EndUserText.label: 'External Reference ID'
               PurchaseOrderByCustomer,

               @ObjectModel.foreignKey.association: '_SoldToParty'
               SoldToParty,

               @ObjectModel.foreignKey.association: '_RespEmployee'
               RespEmployeeBusinessPartnerId,

               RefBusinessSolutionOrder,

               @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
               SoldToPartyCountry,

               @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
               SoldToPartyRegion,

               @ObjectModel.foreignKey.association: '_SalesOrganization'
               SalesOrganization,

               @ObjectModel.foreignKey.association: '_DistributionChannel'
               DistributionChannel,

               @ObjectModel.foreignKey.association: '_Division'
               Division,

               @ObjectModel.foreignKey.association: '_SalesOffice'
               SalesOffice,

               @ObjectModel.foreignKey.association: '_SalesGroup'
               SalesGroup,

               @Semantics.currencyCode: true
               $parameters.P_DisplayCurrency   as DisplayCurrency,

               @ObjectModel.foreignKey.association: '_TransactionCurrency'
               @Semantics.currencyCode:true
               TransactionCurrency,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ServiceContractItemNetAmount,

               @DefaultAggregation: #SUM
               NmbrOfServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ExprdSrvcContrItemNetAmount,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ExprgSrvcContrItemNetAmount,

               @DefaultAggregation: #SUM
               NrOfExprgServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               CancldSrvcContrItemNetAmount,


               @DefaultAggregation: #SUM
               NrOfCancldServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               SrvcContrItemLostNetAmount,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ReldServiceContractNetAmount,

               @DefaultAggregation: #SUM
               NrOfReldServiceContractItems,



               //    Associations
               _ServiceDocument,
               _ServiceObjType,
               _ServiceContract,
               _ServiceDocumentType,
               _Product,
               @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
               @API.element.releaseState: #DEPRECATED
               @API.element.successor: '_SrvcDocItmLifecycleStatus'
               _ServiceDocItemStatus,
               _SrvcDocItmLifecycleStatus,
               _CancelParty,
               _CancelReason,
               _ProfitCenter,
               _ControllingArea,
               _SoldToParty,
               _RespEmployee,
               _SoldToPartyCountry,
               _SoldToPartyRegion,
               _SalesOrganization,
               _DistributionChannel,
               _Division,
               _SalesOffice,
               _SalesGroup,
               _StartingPeriod,
               _StartingPeriod._CalendarMonth  as _StartingCalendarMonth,
               _ExpiringPeriod,
               _ExpiringPeriod._CalendarMonth  as _ExpiringCalendarMonth,
               _TransactionCurrency

}
```
