---
name: I_SRVCDOCBYDOCUMENTTYPE
description: "Srvcdocbydocumenttype"
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCBYDOCUMENTTYPE

**Srvcdocbydocumenttype**

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
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `ServiceDocumentPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocumentCreationDate` |  | |  | `cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `ServiceDocumentChangedDate` |  | |  | `cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` | `DATS(8)` | Changed On |
| `ServiceDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `ServiceContractStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `ServiceContractStartDate` |  | |  | `cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `ServiceContractEndDate` |  | |  | `cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `RequestedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Request Due Date |
| `RequestedServiceStartDate` |  | |  | `cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `RequestedServiceEndDate` |  | |  | `cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` | `DATS(8)` | Changed On |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `BusinessActivityCategory` |  | |  |  | `CHAR(3)` | Activity Category (Communication Type) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `ServiceDocumentRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Reference Document Date |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ServiceDocumentIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `ServiceDefectSchema` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceDefectCategory` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceFirstResponseByDateTime` |  | |  |  | `DEC(15)` | First Response By |
| `ServiceDueByDateTime` |  | |  |  | `DEC(15)` | Date Transaction is Due |
| `RecommendedServicePriority` |  | |  |  | `NUMC(1)` | Recommended Priority |
| `ServiceDocumentUrgency` |  | |  |  | `NUMC(2)` | Urgency |
| `ServiceDocumentImpact` |  | |  |  | `NUMC(2)` | Impact |
| `ServiceDocumentProblemCategory` |  | |  |  | `CHAR(3)` | Problem Category |
| `ServiceReasonSchema` |  | |  |  | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceReasonCategory` |  | |  |  | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceConfirmationIsFinal` |  | |  |  | `CHAR(1)` | Final service confirmation for the related service order |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceRisk` |  | |  |  | `NUMC(3)` | Risk |
| `_ActivityCategory` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_ServiceRisk` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction by Transaction Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCSRCH',
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
   representativeKey: 'ServiceDocument',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION,
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   }
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocByDocumentType
  as select from I_ServiceDocument
  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder
{

      //I_ServiceDocument
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
  key ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID,
      ServiceDocumentDescription,
      PricingDocument,
      PricingProcedure,
      RefBusinessSolutionOrder,

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

      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,
      PostingDate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,
      ServiceOrganization,
      ResponsibleServiceOrganization,

      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractEndDate,

      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,

      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      BusinessActivityCategory,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
//      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'      
      SalesOrganizationOrgUnitID,
//      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'      
      SalesOfficeOrgUnitID,
//      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      Language,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceDocumentRejectionReason,
      CustomerPurchaseOrderDate,
      DistributionChannel,
      Division,
      ServiceDocumentIsReleased,
      ServiceDocumentIsRejected,
      ShipToParty,
      BillToParty,
      PayerParty,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      ServiceDefectSchema,
      ServiceDefectCategory,
      ServiceFirstResponseByDateTime,
      ServiceDueByDateTime,
      RecommendedServicePriority,
      ServiceDocumentUrgency,
      ServiceDocumentImpact,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      ServiceDocumentProblemCategory,
      ServiceReasonSchema,
      ServiceReasonCategory,
      ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      ServiceRisk,


      /* Associations */
      //I_ServiceDocument
      _ActivityCategory,
      _BillingBlockReason,
      _ContactPerson,
      _RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      _ServiceDocumentPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      _ServiceDocumentType,
      _ServiceEmployee,
      _ServiceObjType,
      _ServiceTeam,
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsRelForBillgSts,
      _TransactionCurrency,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _PaymentTerms,
      _FixedPrice,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
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
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _Region,
      _ServiceRisk,
      _SrvcDocumentRejectionReason,
      _ServiceDocProblemCategory
}
```
