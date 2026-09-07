---
name: I_BUSSOLNORDITMBASICFINANCIAL
description: "Bussolnorditmbasicfinancial"
semantic_vi: "Chứa dữ liệu tài chính cơ bản cho các giải pháp kinh doanh, bao gồm đơn hàng và mục đơn hàng, tài liệu dịch vụ và ngày ghi nhận. Sử dụng view này để truy cập thông tin tài chính cho các giải pháp kinh doanh trong CRM."
keywords:
  - "business solution"
  - "financial data"
  - "crm"
  - "service document"
  - "posting date"
  - "business solution order"
  - "business solution order item"
  - "service object type"
  - "service document description"
  - "service document type"
semantic_en: "Exposes basic financial data for business solutions, including orders and order items, service documents, and posting dates. Use this view to access financial information for business solutions in CRM."
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
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BUSSOLNORDITMBASICFINANCIAL

**Bussolnorditmbasicfinancial**

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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  | `ServiceDocumentItem` |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `BusinessSolutionOrderItemUUID` |  | |  | `ServiceDocumentItemUUID` |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `OriginallyRequestedProduct` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocumentItemQuantity` |  | |  |  |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |

## Source Code

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'BusinessSolutionOrderItem',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IBUSSOLORDITMFR'
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Solution Order Item for Fin Reporting'
define view entity I_BusSolnOrdItmBasicFinancial
  as select from I_ServiceDocumentItemEnhcd
{
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceDocument         as BusinessSolutionOrder,
      @ObjectModel.text.element: [ 'ServiceDocumentItemDescription']
  key ServiceDocumentItem     as BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,

      // Header Details
      ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      // ServiceDocumentItemPriority,
      PostingDate,

      // Item Details
      ServiceDocumentItemUUID as BusinessSolutionOrderItemUUID,
      //ServiceDocumentItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceDocumentUUID     as BusinessSolutionOrderUUID,
      ParentServiceDocumentItemUUID,
      @Semantics.text: true
      ServiceDocumentItemDescription,
      Language,

      OriginallyRequestedProduct,

      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      // Item - Cumulated Value
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,

      TransactionCurrency,

      // Item - Schedule Line
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceDocumentItemQuantity,

      // Item - Product
      @ObjectModel.foreignKey.association: '_SalesUnit'
      ServiceDocItemQuantityUnit,

      // Date
      @Semantics.dateTime: true
      RequestedServiceStartDateTime,
      @Semantics.dateTime: true
      RequestedServiceEndDateTime,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceDocumentItemStatus,

      // Organization Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Header Details

      _ServiceDocument,
      _ServiceObjType,
      _ServiceDocumentType,

      // Item - Product
      _SalesUnit,

      // Item Details
      _ServiceDocItemCategory,
      _ProfitCenter,
      _ControllingArea,

      // Partner
      _SoldToParty,
      _RespEmployee,

      _SoldToPartyCountry,
      _SoldToPartyRegion,

      // Status
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
      _SrvcDocItmLifecycleStatus,

      // Organization Unit Set
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'       
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,
      _DistributionChannel,
      _Division,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'      
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'       
      _RespSrvcOrganizationOrgUnit,   
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _RespSrvcOrganizationOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup
}
where
  ServiceObjectType = 'BUS2000172'
```
