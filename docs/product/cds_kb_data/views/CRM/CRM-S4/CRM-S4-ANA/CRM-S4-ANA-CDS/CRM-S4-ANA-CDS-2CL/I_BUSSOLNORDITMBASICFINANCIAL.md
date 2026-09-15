---
name: I_BUSSOLNORDITMBASICFINANCIAL
description: "Bussolnorditmbasicfinancial"
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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  | `ServiceDocumentItem` | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `BusinessSolutionOrderItemUUID` |  | |  | `ServiceDocumentItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocumentItemTaxAmount` |  | |  |  | `CURR(15)` | Tax amount in document currency |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ServiceDocumentItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `ServiceDocItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
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
