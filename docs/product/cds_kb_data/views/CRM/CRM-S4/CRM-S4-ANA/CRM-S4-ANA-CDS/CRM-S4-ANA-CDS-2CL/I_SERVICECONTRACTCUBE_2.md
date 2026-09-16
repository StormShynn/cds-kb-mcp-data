---
name: I_SERVICECONTRACTCUBE_2
description: "Servicecontractcube 2"
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
  - contract
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SERVICECONTRACTCUBE_2

**Servicecontractcube 2**

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
| `ServiceContract` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContractStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as currency)` | `CUKY(5)` | Currency Key |
| `ServiceDocNetAmount` |  | |  | `currency_conversion( amount => ServiceDocNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => cast( $session.system_date as abap.dats), error_handling => 'KEEP_UNCONVERTED' )` | `CURR(15)` |  |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ServiceContractStartDate` |  | |  |  | `DATS(8)` | Created On |
| `ServiceContractEndDate` |  | |  |  | `DATS(8)` | Changed On |
| `ServiceContractStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `FirstDayOfMonthDate` |  | |  |  | `DATS(8)` | First Day of Month Date |
| `LastDayOfMonthDate` |  | |  |  | `DATS(8)` |  |
| `StartOfMonthDateTime` |  | |  | `cast(cast(cast(concat(FirstDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EndOfMonthDateTime` |  | |  | `cast(cast(cast(concat(LastDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPersonBusinessPartnerId` |  | |  | `ContactPerson` | `CHAR(10)` | Customer Contact Person |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `NmbrOfExpiredSrvcContracts` |  | |  |  | `INT4(10)` |  |
| `NmbrOfExpiredSrvcContrCurWeek` |  | |  |  | `INT4(10)` |  |
| `NmbrOfExpiredSrvcContrNextWeek` |  | |  |  | `INT4(10)` |  |
| `NmbrOfExpiredSrvcContrIn2Weeks` |  | |  |  | `INT4(10)` |  |
| `NmbrOfExpiredSrvcContrIn3Weeks` |  | |  |  | `INT4(10)` |  |
| `IsExpired` |  | |  |  | `CHAR(4)` |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceContractStatus` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_CurrentDate` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCONTRCUBE2',
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
//   representativeKey: 'ServiceContract',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE   
}
@EndUserText.label: 'Service Contract - Cube'
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations: true
    }

define view I_ServiceContractCube_2
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from P_ServiceContractDataCube
  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceContract   = _ServiceDocumentExt.ServiceOrder

{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
  key ServiceContract,
      ServiceDocumentDescription,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      ServiceContractType,
      RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceContractStatus'
      ServiceContractStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      
      @EndUserText.label: 'External Reference'
      PurchaseOrderByCustomer,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as currency) as DisplayCurrency,

      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      @DefaultAggregation: #SUM
      currency_conversion(  amount =>  ServiceDocNetAmount,
                              source_currency =>  TransactionCurrency,
                              target_currency => $parameters.P_DisplayCurrency,
                              exchange_rate_type => 'M',
                              exchange_rate_date =>  cast( $session.system_date as abap.dats),
                              error_handling => 'KEEP_UNCONVERTED'
                             )             as ServiceDocNetAmount,

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
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      ServiceOrganization,

      ServiceContractStartDate,
      ServiceContractEndDate,
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      FirstDayOfMonthDate,
      LastDayOfMonthDate,
      
      cast(cast(cast(concat(FirstDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type) as StartOfMonthDateTime,
      cast(cast(cast(concat(LastDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type) as EndOfMonthDateTime,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      SoldToParty,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson                         as ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,

      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContracts,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrCurWeek,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrNextWeek,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrIn2Weeks,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrIn3Weeks,
      IsExpired,

      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceContractType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceContractStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _CurrentDate,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'       
      _SalesGroupOrgUnit,
      _SalesGroupOrgUnit_2,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _SalesOffice,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      _SalesOfficeOrgUnit_2,
      _SalesOrganization,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      _SalesOrganizationOrgUnit_2,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _TransactionCurrency

}
```
