---
name: I_BUSSOLNORDITMFINANCIALCUBE
description: "Bussolnorditmfinancialcube"
semantic_vi: "View Bussolnorditmfinancialcube cung cấp dữ liệu tài chính cho các đơn hàng giải pháp kinh doanh và các mục của chúng, hữu ích cho việc phân tích hiệu suất bán hàng và chỉ số tài chính."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "financial data"
  - "sự phân tích hiệu suất bán hàng"
  - "cds view"
  - "view dữ liệu tài chính"
  - "s4hana"
  - "crm"
  - "sales performance"
  - "đơn vị kinh doanh"
  - "sales organization"
  - "sales office"
semantic_en: "The Bussolnorditmfinancialcube view provides financial data for business solution orders and their items, useful for analyzing sales performance and financial metrics."
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
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BUSSOLNORDITMFINANCIALCUBE

**Bussolnorditmfinancialcube**

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
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `BusSolnOrdType` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  |  |  |  |
| `BusSolnOrdItmDescription` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `BusSolnOrdItmStatus` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TotBusSolnOrdItmNetAmtPerPerd` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `CostAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  |  |  |
| `BusSolnOrdStatus` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | | `_Product` | `ProductGroup` |  |  |
| `PostingDate` |  | |  |  |  |  |
| `SlsItmNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000131' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `ServiceContractItemNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000137' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `ExpnItmNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000159' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `SbscrBilgItmNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000189' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `SrvcPrtItmNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000146' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `SrvcItmNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000140' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `EnterpriseProjectItemNetAmount` |  | |  | `case when ServiceDocumentItemObjectType = 'BUS2000193' then TotBusSolnOrdItmNetAmtPerPerd end` |  |  |
| `NrOfOpenBusSolnOrders` |  | |  |  |  |  |
| `NrOfReldBusSolnOrders` |  | |  |  |  |  |
| `NrOfCmpltdBusSolnOrders` |  | |  |  |  |  |
| `BusSolnOrdCreationQuarter` |  | | `_Period` | `CalendarQuarter` |  |  |
| `BusSolnOrdCreationMonth` |  | | `_Period` | `CalendarMonth` |  |  |
| `BusSolnOrdCreationYear` |  | | `_Period` | `CalendarYear` |  |  |
| `ServiceDocItemCreationDate` |  | |  |  |  |  |
| `ServiceDocumentCreationDate` |  | |  |  |  |  |
| `_Period` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Period` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Solution Order Item Financials - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IBSOLNITNFINCUBE',
  compiler.compareFilter: true,
  preserveKey: true,
  dbHints: [{hint: 'OPTIMIZATION_LEVEL(RULE_BASED)'}]
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
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
//@OData.publish: true
define view I_BusSolnOrdItmFinancialCube
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from P_BusSolnOrdItmFinData
  association [0..1] to I_CalendarDate as _Period on $projection.ServiceDocItemCreationDate = _Period.CalendarDate
//  association [0..1] to I_ServiceDocument as _SolutionOrder            on  $projection.BusinessSolutionOrder        = _SolutionOrder.ServiceDocument
//                                                                         and _SolutionOrder.ServiceObjectType = 'BUS2000172'

{
//       @EndUserText.label: 'Transaction Category'
       @UI.hidden: true
       @AnalyticsDetails.query.hidden: true
       @ObjectModel.foreignKey.association: '_ServiceObjType'
  key  ServiceObjectType,
       @ObjectModel.text.element: 'BusSolnOrdDescription'
//       @EndUserText.label: 'Solution Order'
       @EndUserText.quickInfo: 'Solution Order'
//       @ObjectModel.foreignKey.association: '_SolutionOrder'
  key  BusinessSolutionOrder,
       //      @ObjectModel.text.element: 'ServiceDocumentItemDescription'
//       @EndUserText.label: 'Solution Order Item'
  key  BusinessSolutionOrderItem,
//       @EndUserText.label: 'Solution Order Type'
       @UI.hidden: true
       @AnalyticsDetails.query.hidden: true
       @ObjectModel.foreignKey.association: '_ServiceDocumentType'
       BusSolnOrdType,
//       @EndUserText.label: 'Solution Order Description'
       @EndUserText.quickInfo: 'Solution Order Description'
       @Semantics.text: true
       BusSolnOrdDescription,
       BusSolnOrdItmDescription,
       @ObjectModel.foreignKey.association: '_DistributionChannel'
       DistributionChannel,
       @ObjectModel.foreignKey.association: '_Division'
       Division,
       @ObjectModel.foreignKey.association: '_SalesOrganization'
       SalesOrganization,
       @ObjectModel.foreignKey.association: '_SalesOffice'
       SalesOffice,
       @ObjectModel.foreignKey.association: '_SalesGroup'
       SalesGroup,
       @ObjectModel.foreignKey.association: '_SoldToParty'
       SoldToParty,
       @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
       Country,
       @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
       Region,
       @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
       @EndUserText.label: 'Item Life Cycle Status'
       BusSolnOrdItmStatus,
       @Semantics.currencyCode: true
       $parameters.P_DisplayCurrency      as DisplayCurrency,
       @ObjectModel.foreignKey.association: '_TransactionCurrency'
       @Semantics.currencyCode:true
       TransactionCurrency,
       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Net Value of Incoming Solution Orders'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       TotBusSolnOrdItmNetAmtPerPerd,

       ServiceDocumentItemObjectType,
       @Semantics.currencyCode:true
       CompanyCodeCurrency,
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
//       @EndUserText.label: 'Recognized Revenue'
       @DefaultAggregation: #SUM
       RevenueAmountInCompanyCodeCrcy,
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
//       @EndUserText.label: 'Recognized Cost'
       @DefaultAggregation: #SUM
       CostAmountInCompanyCodeCrcy,
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
//       @EndUserText.label: 'Recognized Margin'
       @DefaultAggregation: #SUM
       RecognizedMarginAmtInCCCrcy,
       @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
       @EndUserText.label: 'Solution Order Status'
       BusSolnOrdStatus,
       @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
       ServiceDocItemCategory,
       @ObjectModel.foreignKey.association: '_Product'
       Product,
       //      @ObjectModel.foreignKey.association: '_ProductGroup_2'
       //      @ObjectModel.text.association: '_ProductGroupText_2'
       _Product.ProductGroup              as ProductGroup,
       @EndUserText.label: 'Posting Date'
       PostingDate,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Sales Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000131' then
       TotBusSolnOrdItmNetAmtPerPerd end as SlsItmNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Service Contract Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000137' then
       TotBusSolnOrdItmNetAmtPerPerd  end as ServiceContractItemNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Service Expense Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000159' then
       TotBusSolnOrdItmNetAmtPerPerd  end as ExpnItmNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Subscription Billing Item '
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000189' then
       TotBusSolnOrdItmNetAmtPerPerd  end as SbscrBilgItmNetAmount,


       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Service Part Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000146' then
       TotBusSolnOrdItmNetAmtPerPerd  end as SrvcPrtItmNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Service Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000140' then
       TotBusSolnOrdItmNetAmtPerPerd  end as SrvcItmNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'Project Item'
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case when ServiceDocumentItemObjectType = 'BUS2000193' then
       TotBusSolnOrdItmNetAmtPerPerd end as EnterpriseProjectItemNetAmount,

       @DefaultAggregation: #SUM
//       @EndUserText.label: 'No. of Solution Orders in Execution'
       NrOfOpenBusSolnOrders,
       @DefaultAggregation: #SUM
//       @EndUserText.label: 'No. of Released Solution Orders'
       NrOfReldBusSolnOrders,
       @DefaultAggregation: #SUM
       NrOfCmpltdBusSolnOrders,
       

       @Semantics.calendar.quarter
       _Period.CalendarQuarter            as BusSolnOrdCreationQuarter,
       @Semantics.calendar.month
       _Period.CalendarMonth              as BusSolnOrdCreationMonth,
       @Semantics.calendar.year
       _Period.CalendarYear               as BusSolnOrdCreationYear,
       ServiceDocItemCreationDate,
       ServiceDocumentCreationDate,
       //       @Semantics.calendar.quarter
       //       BusSolnOrdCreationQuarter,
       //       @Semantics.calendar.month
       //       BusSolnOrdCreationMonth,
       //       @Semantics.calendar.year
       //       BusSolnOrdCreationYear,




       _Period,
       _ServiceObjType,
       _ServiceDocumentType,
       _DistributionChannel,
       _Division,
       _SalesOrganization,
       _SalesOffice,
       _SalesGroup,
       _SoldToParty,
       _SoldToPartyCountry,
       _SoldToPartyRegion,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_SrvcDocItmLifecycleStatus'
       _ServiceDocItemStatus,
       _SrvcDocItmLifecycleStatus,
       _TransactionCurrency,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_SrvcDocLifecycleStatus'
       _ServiceDocumentStatus,
       _SrvcDocLifecycleStatus,
       _ServiceDocItemCategory,
       _Product
       
//       _SolutionOrder

}
```
