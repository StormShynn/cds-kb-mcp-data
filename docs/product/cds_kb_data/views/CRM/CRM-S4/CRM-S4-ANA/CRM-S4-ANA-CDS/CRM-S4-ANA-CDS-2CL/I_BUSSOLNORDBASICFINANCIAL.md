---
name: I_BUSSOLNORDBASICFINANCIAL
description: "Bussolnordbasicfinancial"
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
# I_BUSSOLNORDBASICFINANCIAL

**Bussolnordbasicfinancial**

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
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
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
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
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
| `_ServiceObjType` | | ✓ | | | | |

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
   representativeKey: 'BusinessSolutionOrder',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}

@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IBUSSOLORDFR'
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Solution Order for Financial Reporting'
define view entity I_BusSolnOrdBasicFinancial
  as select from I_ServiceDocumentEnhcd
{
      @ObjectModel.text.element: [ 'ServiceDocumentDescription']
  key ServiceDocument     as BusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,

      // Header Details
      ServiceDocumentUUID as BusinessSolutionOrderUUID,
      //ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription,
      Language,
      PostingDate,

      //BusinessActivityCategory,
      //ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,

      TransactionCurrency,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,

      // Organizational Unit Set
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

      // Header Details Assocations
      _ServiceDocumentType,

      // Partner Details Associations
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _RespEmployee,

      // Status Assocations
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,

      // Organization Unit Set Assocations
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
      _SalesGroup,
      _ServiceObjType
}
where
  ServiceObjectType = 'BUS2000172'
```
