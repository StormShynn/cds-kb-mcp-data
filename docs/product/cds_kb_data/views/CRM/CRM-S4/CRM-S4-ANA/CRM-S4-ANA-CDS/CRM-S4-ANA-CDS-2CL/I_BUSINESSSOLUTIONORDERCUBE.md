---
name: I_BUSINESSSOLUTIONORDERCUBE
description: "Businesssolutionordercube"
semantic_vi: "View Businesssolutionordercube hiển thị dữ liệu đơn hàng giải pháp kinh doanh, cung cấp thông tin về các kênh phân phối và bán hàng. Nó được sử dụng để phân tích đơn hàng giải pháp kinh doanh trên các tổ chức bán hàng và bộ phận khác nhau."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "sales organization"
  - "phân phối"
  - "bán hàng"
  - "cds view"
  - "view businesssolutionordercube"
  - "crm"
  - "s4hana"
  - "analytical view"
semantic_en: "The Businesssolutionordercube view exposes business solution order data, providing insights into sales and distribution channels. It is used to analyze business solution orders across different sales organizations and divisions."
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
# I_BUSINESSSOLUTIONORDERCUBE

**Businesssolutionordercube**

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
| `BusSolnOrdType` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `BusSolnOrdStatus` |  | |  |  |  |  |
| `NrOfOpenBusSolnOrders` |  | |  |  |  |  |
| `NrOfReldBusSolnOrders` |  | |  |  |  |  |
| `NrOfCmpltdBusSolnOrders` |  | |  |  |  |  |
| `NrOfCrtedBusSolnOrders` |  | |  |  |  |  |
| `ServiceDocumentCreationDate` |  | |  |  |  |  |
| `BusSolnOrdCreationQuarter` |  | |  |  |  |  |
| `BusSolnOrdCreationMonth` |  | |  |  |  |  |
| `BusSolnOrdCreationYear` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Period` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IBUSSOLNORDCUBE',
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
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessSolutionOrderCube
with parameters
  P_DisplayCurrency  : vdm_v_display_currency
  as select from P_BusSolnOrdHdrData
{
      @EndUserText.label: 'Transaction Category'
      @UI.hidden: true
      @AnalyticsDetails.query.hidden: true
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @EndUserText.label: 'Solution Order'
      @EndUserText.quickInfo: 'Solution Order'
      //    @ObjectModel.text.element: 'BusSolnOrdDescription'
  key BusinessSolutionOrder,
      @EndUserText.label: 'Solution Order Type'
      @UI.hidden: true
      @AnalyticsDetails.query.hidden: true
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      BusSolnOrdType,
      @EndUserText.label: 'Solution Order Description'
      BusSolnOrdDescription,
      //@EndUserText.label: 'Distribution Channel'
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      //      @EndUserText.label: 'Division'
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      //      @EndUserText.label: 'Sales Organization'
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @EndUserText.label: 'Solution Order Status'
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      BusSolnOrdStatus,

       @DefaultAggregation: #SUM
       NrOfOpenBusSolnOrders,
       @DefaultAggregation: #SUM
       NrOfReldBusSolnOrders,
       @DefaultAggregation: #SUM
       NrOfCmpltdBusSolnOrders,



      @DefaultAggregation: #SUM
      @EndUserText.label: 'No. of Solution Orders'
      NrOfCrtedBusSolnOrders,
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      BusSolnOrdCreationQuarter,
      @Semantics.calendar.month
      BusSolnOrdCreationMonth,
      @Semantics.calendar.year
      BusSolnOrdCreationYear,
      @EndUserText.label: 'Display Currency'
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency  as DisplayCurrency,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Net Value of Solution Orders'
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      PostingDate,
      
      /* Associations */
      _DistributionChannel,
      _Division,
      _Period,
      _SalesGroup,
      _SalesOffice,
      _SalesOrganization,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      _ServiceDocumentType,
      _ServiceObjType,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _TransactionCurrency

}
```
