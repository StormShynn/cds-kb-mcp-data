---
name: I_SERVICEORDERCUBE_2
description: "Service OrderCUBE 2"
app_component: CRM-S4-ANA-CDS-2CL
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
  - service
  - service-order
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SERVICEORDERCUBE_2

**Service OrderCUBE 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
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
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceOrderDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceOrderStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceOrderStatusName` |  | |  | `_SrvcDocLifecycleStatus._ServiceDocumentStatusText [1: Language=$session.system_language].ServiceDocumentStatusName` | `CHAR(60)` | Lifecycle Status Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPersonBusinessPartnerId` |  | |  | `ContactPerson` | `CHAR(10)` | Customer Contact Person |
| `RequestedServiceEndDate` |  | |  |  | `DATS(8)` | Changed On |
| `ServiceDocumentCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `SrvcOrdCreationQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcOrdCreationMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcOrdCreationYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ServiceDocumentPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `NumberOfIncomingServiceOrders` |  | |  |  | `INT4(10)` |  |
| `NumberOfOpenServiceOrders` |  | |  |  | `INT4(10)` |  |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `NmbrOfIncompleteServiceOrders` |  | |  |  | `INT4(10)` |  |
| `NumberOfOverdueServiceOrders` |  | |  |  | `INT4(10)` |  |
| `SrvcOrdHasConfdItem` |  | |  |  | `CHAR(1)` |  |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceReferenceObjectType` |  | |  |  | `CHAR(1)` | Object Type for Reference Object in Subject Set |
| `SrvcRefObjIsMainObject` |  | |  |  | `CHAR(1)` | Main Reference Object |
| `ProductID` |  | |  |  | `CHAR(40)` | Material Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `RespyMgmtServiceTeam` |  | |  |  | `NUMC(8)` | Service Team (Responsibility Management) |
| `RespyMgmtServiceTeamDesc` |  | |  |  | `CHAR(79)` | Line With Length 79 for Infotype 1002 |
| `TeamName` |  | |  |  | `CHAR(40)` | Name |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_SrvcOrdConfStatus` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_Period` | | ✓ | | | | |
| `_ServiceDocRefObj` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVORDCUBE2',
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
 //  representativeKey: 'ServiceOrder',
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

define view I_ServiceOrderCube_2
  as select from P_ServiceOrderDataCube

  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceOrder      = _ServiceDocumentExt.ServiceOrder
{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
  key ServiceOrder,
      ServiceOrderDescription,
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceOrderStatus,
      _SrvcDocLifecycleStatus._ServiceDocumentStatusText
      [1: Language=$session.system_language].ServiceDocumentStatusName as ServiceOrderStatusName,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson               as ContactPersonBusinessPartnerId,

      RequestedServiceEndDate,
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      SrvcOrdCreationQuarter,
      @Semantics.calendar.month
      SrvcOrdCreationMonth,
      @Semantics.calendar.year
      SrvcOrdCreationYear,
     
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,

      @EndUserText.label: 'Service Document Net Amount'
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,

      @DefaultAggregation: #SUM
      NumberOfIncomingServiceOrders,

      @EndUserText.label: 'Number of open Service Orders'
      @DefaultAggregation: #SUM
      NumberOfOpenServiceOrders,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      @EndUserText.label: 'External Reference'
      PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      ServiceOrganization,

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

      @DefaultAggregation: #SUM
      NmbrOfIncompleteServiceOrders,
      NumberOfOverdueServiceOrders,
      SrvcOrdHasConfdItem,

      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,

      ServiceReferenceObjectType,
      SrvcRefObjIsMainObject,
      ProductID,
      SerialNumber,
      Equipment,
      FunctionalLocation,
      RespyMgmtServiceTeam,
      
      RespyMgmtServiceTeamDesc,
      
      TeamName,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _ServiceObjType,
      
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      
      _ServiceDocumentType,
      _ServiceDocumentPriority,
      _SoldToParty,
      _RespEmployee,
      _ContactPerson,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      _SrvcOrdConfStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      _SalesGroupOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _DistributionChannel,
      _Division,
      _TransactionCurrency,
      _Period,
      _ServiceDocRefObj,
      _ServiceTeamHeader
      //      _CloudSystem

}
```
