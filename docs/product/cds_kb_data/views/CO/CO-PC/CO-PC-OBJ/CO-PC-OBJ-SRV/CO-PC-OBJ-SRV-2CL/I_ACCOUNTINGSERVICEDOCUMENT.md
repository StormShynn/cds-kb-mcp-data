---
name: I_ACCOUNTINGSERVICEDOCUMENT
description: "ACCOUNTINGService DocumentUMENT"
semantic_vi: "View I_ACCOUNTINGSERVICEDOCUMENT hiển thị dữ liệu tài khoản dịch vụ tài liệu, có liên quan khi làm việc với tài liệu dịch vụ trong Controlling."
keywords:
  - "accounting"
  - "service document"
  - "controlling"
  - "dịch vụ tài liệu"
  - "tài khoản"
  - "dịch vụ"
  - "tài liệu"
  - "service"
  - "document"
  - "ekko"
  - "đơn dịch vụ"
semantic_en: "The I_ACCOUNTINGSERVICEDOCUMENT view exposes accounting service document data, which is relevant when working with service documents in Controlling."
app_component: CO-PC-OBJ-SRV-2CL
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
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCOUNTINGSERVICEDOCUMENT

**ACCOUNTINGService DocumentUMENT**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
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
| `ServiceDocumentType` | ✓ | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Service Document Description |
| `ServiceDocumentTypeName` |  | |  |  | `CHAR(40)` | Description |
| `ServiceObjectType` |  | | `_ServiceDocument` | `ServiceObjectType` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentUUID` |  | | `_ServiceDocument` | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `PricingDocument` |  | | `_ServiceDocument` | `PricingDocument` | `CHAR(10)` | Number of the Document Condition |
| `PricingProcedure` |  | | `_ServiceDocument` | `PricingProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `RefBusinessSolutionOrder` |  | | `_ServiceDocument` | `RefBusinessSolutionOrder` | `CHAR(10)` | Reference Solution Order ID |
| `SoldToParty` |  | | `_ServiceDocument` | `SoldToParty` | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | | `_ServiceDocument` | `ServiceTeam` | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  | `cast( _ServiceDocument.ResponsibleEmployee as fco_srvdoc_resp_empl_deprec)` | `NUMC(8)` | Employee Responsible (Deprecated) |
| `RespEmployeeBusinessPartnerId` |  | | `_ServiceDocument` | `ResponsibleEmployee` | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | | `_ServiceDocument` | `ServiceEmployee` | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  | `cast( _ServiceDocument.ContactPerson as parnr )` | `NUMC(10)` | Number of Contact Person |
| `ServiceDocumentPriority` |  | | `_ServiceDocument` | `ServiceDocumentPriority` | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | | `_ServiceDocument` | `PostingDate` | `DATS(8)` | Posting Date for a Business Transaction |
| `PaymentTerms` |  | | `_ServiceDocument` | `PaymentTerms` | `CHAR(4)` | Terms of Payment |
| `TransactionCurrency` |  | | `_ServiceDocument` | `TransactionCurrency` | `CUKY(5)` | Currency |
| `ServiceDocNetAmount` |  | | `_ServiceDocument` | `ServiceDocNetAmount` | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocGrossAmount` |  | | `_ServiceDocument` | `ServiceDocGrossAmount` | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `SoldToPartyCountry` |  | | `_ServiceDocument` | `SoldToPartyCountry` | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | | `_ServiceDocument` | `SoldToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderByCustomer` |  | | `_ServiceDocument` | `PurchaseOrderByCustomer` | `CHAR(35)` | Sold-To Party's External Reference Number |
| `ServiceDocumentStatus` |  | | `_ServiceDocument` | `ServiceDocumentStatus` | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentHasError` |  | | `_ServiceDocument` | `ServiceDocumentHasError` | `CHAR(1)` | Error Status |
| `ServiceDocBillingStatus` |  | | `_ServiceDocument` | `ServiceDocBillingStatus` | `CHAR(1)` | Billing Status |
| `ServiceDocIsReleasedForBilling` |  | | `_ServiceDocument` | `ServiceDocIsReleasedForBilling` | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocumentIsOpen` |  | | `_ServiceDocument` | `ServiceDocumentIsOpen` | `CHAR(1)` | Status "Open" |
| `ServiceOrganization` |  | | `_ServiceDocument` | `ServiceOrganization` | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | | `_ServiceDocument` | `ResponsibleServiceOrganization` | `CHAR(14)` | Organizational Unit (Service) |
| `ServiceDocCreationDateTime` |  | | `_ServiceDocument` | `ServiceDocCreationDateTime` | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | | `_ServiceDocument` | `ServiceDocChangedDateTime` | `DEC(15)` | Changed At |
| `ServiceDocumentCreationDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.ServiceDocCreationDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `ServiceDocumentChangedDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.ServiceDocChangedDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` | `DATS(8)` | Changed On |
| `ServiceDocumentCreatedByUser` |  | | `_ServiceDocument` | `ServiceDocumentCreatedByUser` | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | | `_ServiceDocument` | `ServiceDocumentChangedByUser` | `CHAR(12)` | Transaction Last Changed By |
| `ServiceContractStartDateTime` |  | | `_ServiceDocument` | `ServiceContractStartDateTime` | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | | `_ServiceDocument` | `ServiceContractEndDateTime` | `DEC(15)` | Contract End Date |
| `ServiceContractStartDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.ServiceContractStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `ServiceContractEndDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.ServiceContractEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `RequestedServiceStartDateTime` |  | | `_ServiceDocument` | `RequestedServiceStartDateTime` | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | | `_ServiceDocument` | `RequestedServiceEndDateTime` | `DEC(15)` | Service Request Due Date |
| `RequestedServiceStartDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.RequestedServiceStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` | `DATS(8)` | Created On |
| `RequestedServiceEndDate` |  | |  | `cast( cast(substring( cast(_ServiceDocument.RequestedServiceEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` | `DATS(8)` | Changed On |
| `BillingBlockReason` |  | | `_ServiceDocument` | `BillingBlockReason` | `CHAR(2)` | Business Partner: Billing Block Reason |
| `BusinessActivityCategory` |  | | `_ServiceDocument` | `BusinessActivityCategory` | `CHAR(3)` | Activity Category (Communication Type) |
| `SalesOrganization` |  | | `_ServiceDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | | `_ServiceDocument` | `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | | `_ServiceDocument` | `SalesGroup` | `CHAR(3)` | Sales Group |
| `SalesOrganizationOrgUnitID` |  | | `_ServiceDocument` | `SalesOrganizationOrgUnitID` | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | | `_ServiceDocument` | `SalesOfficeOrgUnitID` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | | `_ServiceDocument` | `SalesGroupOrgUnitID` | `CHAR(14)` | Sales Group |
| `Language` |  | | `_ServiceDocument` | `Language` | `LANG(1)` | Language Key of Description |
| `ServiceDocumentRejectionReason` |  | | `_ServiceDocument` | `ServiceDocumentRejectionReason` | `CHAR(2)` | Cancellation Reason Code |
| `CustomerPurchaseOrderDate` |  | | `_ServiceDocument` | `CustomerPurchaseOrderDate` | `DATS(8)` | Reference Document Date |
| `DistributionChannel` |  | | `_ServiceDocument` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | | `_ServiceDocument` | `Division` | `CHAR(2)` | Division |
| `ServiceDocumentIsReleased` |  | | `_ServiceDocument` | `ServiceDocumentIsReleased` | `CHAR(1)` | Release Status |
| `ServiceDocumentIsRejected` |  | | `_ServiceDocument` | `ServiceDocumentIsRejected` | `CHAR(1)` | Cancellation Status |
| `ShipToParty` |  | | `_ServiceDocument` | `ShipToParty` | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | | `_ServiceDocument` | `BillToParty` | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | | `_ServiceDocument` | `PayerParty` | `CHAR(10)` | Payer |
| `ServiceDocTaxAmount` |  | | `_ServiceDocument` | `ServiceDocTaxAmount` | `CURR(15)` | Total Tax Amount in Document Currency |
| `ServiceDefectSchema` |  | | `_ServiceDocument` | `ServiceDefectSchema` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceDefectCategory` |  | | `_ServiceDocument` | `ServiceDefectCategory` | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceFirstResponseByDateTime` |  | | `_ServiceDocument` | `ServiceFirstResponseByDateTime` | `DEC(15)` | First Response By |
| `ServiceDueByDateTime` |  | | `_ServiceDocument` | `ServiceDueByDateTime` | `DEC(15)` | Date Transaction is Due |
| `RecommendedServicePriority` |  | | `_ServiceDocument` | `RecommendedServicePriority` | `NUMC(1)` | Recommended Priority |
| `ServiceDocumentUrgency` |  | | `_ServiceDocument` | `ServiceDocumentUrgency` | `NUMC(2)` | Urgency |
| `ServiceDocumentImpact` |  | | `_ServiceDocument` | `ServiceDocumentImpact` | `NUMC(2)` | Impact |
| `ServiceDocumentProblemCategory` |  | | `_ServiceDocument` | `ServiceDocumentProblemCategory` | `CHAR(3)` | Problem Category |
| `ServiceReasonSchema` |  | | `_ServiceDocument` | `ServiceReasonSchema` | `CHAR(40)` | Coherent Cat. - Aspect ID |
| `ServiceReasonCategory` |  | | `_ServiceDocument` | `ServiceReasonCategory` | `CHAR(40)` | Coherent Cat. - Category ID |
| `ServiceConfirmationIsFinal` |  | | `_ServiceDocument` | `ServiceConfirmationIsFinal` | `CHAR(1)` | Final service confirmation for the related service order |
| `Region` |  | | `_ServiceDocument` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ServiceRisk` |  | | `_ServiceDocument` | `ServiceRisk` | `NUMC(3)` | Risk |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_AcctgServiceDocumentType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Accounting Service Document'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'ServiceDocument'
@ObjectModel.semanticKey: ['ServiceDocument', 'ServiceDocumentType']
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:
  [ #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ]
@VDM.viewType: #COMPOSITE
@Search.searchable: true

define view entity I_AccountingServiceDocument
  as select from P_AcctgServiceDocumentItem
  association [0..1] to I_AcctgServiceDocumentType as _ServiceDocumentType on $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
{
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
      @ObjectModel.text.element: ['ServiceDocumentDescription']
  key ServiceDocument,

      @Semantics.text: true
      ServiceDocumentDescription,

      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      ServiceDocumentTypeName,



      @ObjectModel.foreignKey.association: '_ServiceObjType'
      _ServiceDocument.ServiceObjectType,
      _ServiceDocument.ServiceDocumentUUID,
      _ServiceDocument.PricingDocument,
      _ServiceDocument.PricingProcedure,
      _ServiceDocument.RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      _ServiceDocument.SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      _ServiceDocument.ServiceTeam,
//      @ObjectModel.foreignKey.association: '_ServiceDocument._RespEmployee'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'RespEmployeeBusinessPartnerId'
//      cast( _ServiceDocument.ResponsibleEmployee as resp_empl) as ResponsibleEmployee,
      cast( _ServiceDocument.ResponsibleEmployee as fco_srvdoc_resp_empl_deprec) as ResponsibleEmployee,
      _ServiceDocument.ResponsibleEmployee as RespEmployeeBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      _ServiceDocument.ServiceEmployee,
//      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast( _ServiceDocument.ContactPerson as parnr ) as ContactPerson,
//      _ServiceDocument.ContactPerson,

      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      _ServiceDocument.ServiceDocumentPriority,
      _ServiceDocument.PostingDate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _ServiceDocument.PaymentTerms,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _ServiceDocument.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocGrossAmount,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      _ServiceDocument.SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      _ServiceDocument.SoldToPartyRegion,
      _ServiceDocument.PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      _ServiceDocument.ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      _ServiceDocument.ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsOpen,
      _ServiceDocument.ServiceOrganization,
      _ServiceDocument.ResponsibleServiceOrganization,

      _ServiceDocument.ServiceDocCreationDateTime,
      _ServiceDocument.ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( cast(substring( cast(_ServiceDocument.ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( cast(substring( cast(_ServiceDocument.ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      _ServiceDocument.ServiceDocumentCreatedByUser,
      _ServiceDocument.ServiceDocumentChangedByUser,

      _ServiceDocument.ServiceContractStartDateTime,
      _ServiceDocument.ServiceContractEndDateTime,
      cast( cast(substring( cast(_ServiceDocument.ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      cast( cast(substring( cast(_ServiceDocument.ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractEndDate,

      _ServiceDocument.RequestedServiceStartDateTime,
      _ServiceDocument.RequestedServiceEndDateTime,
      cast( cast(substring( cast(_ServiceDocument.RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      cast( cast(substring( cast(_ServiceDocument.RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,

      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _ServiceDocument.BillingBlockReason,
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      _ServiceDocument.BusinessActivityCategory,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      _ServiceDocument.SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      _ServiceDocument.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _ServiceDocument.SalesGroup,
      //      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      _ServiceDocument.SalesOrganizationOrgUnitID,
      //      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      _ServiceDocument.SalesOfficeOrgUnitID,
      //      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      _ServiceDocument.SalesGroupOrgUnitID,

      _ServiceDocument.Language,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      _ServiceDocument.ServiceDocumentRejectionReason,
      _ServiceDocument.CustomerPurchaseOrderDate,
      _ServiceDocument.DistributionChannel,
      _ServiceDocument.Division,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsRejected,
      _ServiceDocument.ShipToParty,
      _ServiceDocument.BillToParty,
      _ServiceDocument.PayerParty,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocTaxAmount,
      _ServiceDocument.ServiceDefectSchema,
      _ServiceDocument.ServiceDefectCategory,
      _ServiceDocument.ServiceFirstResponseByDateTime,
      _ServiceDocument.ServiceDueByDateTime,
      _ServiceDocument.RecommendedServicePriority,
      _ServiceDocument.ServiceDocumentUrgency,
      _ServiceDocument.ServiceDocumentImpact,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      _ServiceDocument.ServiceDocumentProblemCategory,
      _ServiceDocument.ServiceReasonSchema,
      _ServiceDocument.ServiceReasonCategory,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_Region'
      _ServiceDocument.Region,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      _ServiceDocument.ServiceRisk,

      _ServiceDocument,
      _ServiceDocumentType,
      _ServiceDocument._ActivityCategory,
      _ServiceDocument._BillingBlockReason,
//      _ServiceDocument._ContactPerson,
//      _ServiceDocument._RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocHasError,
      _ServiceDocument._ServiceDocumentPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocument._ServiceDocumentStatus,
      _ServiceDocument._SrvcDocLifecycleStatus,
      _ServiceDocument._ServiceEmployee,
      _ServiceDocument._ServiceObjType,
      _ServiceDocument._ServiceTeam,
      _ServiceDocument._SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._SrvcDocIsRelForBillgSts,
      _ServiceDocument._TransactionCurrency,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocumentIsOpen,
      _ServiceDocument._PaymentTerms,
//      _ServiceDocument._FixedPrice,
      _ServiceDocument._SalesOrganization,
      _ServiceDocument._SalesOffice,
      _ServiceDocument._SalesGroup,
      _ServiceDocument._SalesOrganizationOrgUnit_2,
      _ServiceDocument._SalesOfficeOrgUnit_2,
      _ServiceDocument._SalesGroupOrgUnit_2,      
      _ServiceDocument._SoldToPartyCountry,
      _ServiceDocument._SoldToPartyRegion,
      _ServiceDocument._Region,
      _ServiceDocument._ServiceRisk,
      _ServiceDocument._SrvcDocumentRejectionReason,
      _ServiceDocument._ServiceDocProblemCategory     
}
group by
  ServiceDocumentType,
  ServiceDocument,
  ServiceDocumentDescription,
  ServiceDocumentTypeName,
  
  _ServiceDocument.ServiceObjectType,
  _ServiceDocument.ServiceDocumentUUID,
  _ServiceDocument.PricingDocument,
  _ServiceDocument.PricingProcedure,
  _ServiceDocument.RefBusinessSolutionOrder,
  _ServiceDocument.SoldToParty,
  _ServiceDocument.ServiceTeam,
  _ServiceDocument.ResponsibleEmployee,
  _ServiceDocument.ServiceEmployee,
  _ServiceDocument.ContactPerson,
  _ServiceDocument.ServiceDocumentPriority,
  _ServiceDocument.PostingDate,
  _ServiceDocument.PaymentTerms,
  _ServiceDocument.TransactionCurrency,
  _ServiceDocument.ServiceDocNetAmount,
  _ServiceDocument.ServiceDocGrossAmount,
  _ServiceDocument.SoldToPartyCountry,
  _ServiceDocument.SoldToPartyRegion,
  _ServiceDocument.PurchaseOrderByCustomer,
  _ServiceDocument.ServiceDocumentStatus,
  _ServiceDocument.ServiceDocumentHasError,
  _ServiceDocument.ServiceDocBillingStatus,
  _ServiceDocument.ServiceDocIsReleasedForBilling,
  _ServiceDocument.ServiceDocumentIsOpen,
  _ServiceDocument.ServiceOrganization,
  _ServiceDocument.ResponsibleServiceOrganization,
  _ServiceDocument.ServiceDocCreationDateTime,
  _ServiceDocument.ServiceDocChangedDateTime,
  _ServiceDocument.ServiceDocumentCreatedByUser,
  _ServiceDocument.ServiceDocumentChangedByUser,
  _ServiceDocument.ServiceContractStartDateTime,
  _ServiceDocument.ServiceContractEndDateTime,
  _ServiceDocument.RequestedServiceStartDateTime,
  _ServiceDocument.RequestedServiceEndDateTime,
  _ServiceDocument.BillingBlockReason,
  _ServiceDocument.BusinessActivityCategory,
  _ServiceDocument.SalesOrganization,
  _ServiceDocument.SalesOffice,
  _ServiceDocument.SalesGroup,
  _ServiceDocument.SalesOrganizationOrgUnitID,
  _ServiceDocument.SalesOfficeOrgUnitID,
  _ServiceDocument.SalesGroupOrgUnitID,
  _ServiceDocument.Language,
  _ServiceDocument.ServiceDocumentRejectionReason,
  _ServiceDocument.CustomerPurchaseOrderDate,
  _ServiceDocument.DistributionChannel,
  _ServiceDocument.Division,
  _ServiceDocument.ServiceDocumentIsReleased,
  _ServiceDocument.ServiceDocumentIsRejected,
  _ServiceDocument.ShipToParty,
  _ServiceDocument.BillToParty,
  _ServiceDocument.PayerParty,
  _ServiceDocument.ServiceDocTaxAmount,
  _ServiceDocument.ServiceDefectSchema,
  _ServiceDocument.ServiceDefectCategory,
  _ServiceDocument.ServiceFirstResponseByDateTime,
  _ServiceDocument.ServiceDueByDateTime,
  _ServiceDocument.RecommendedServicePriority,
  _ServiceDocument.ServiceDocumentUrgency,
  _ServiceDocument.ServiceDocumentImpact,
  _ServiceDocument.ServiceDocumentProblemCategory,
  _ServiceDocument.ServiceReasonSchema,
  _ServiceDocument.ServiceReasonCategory,
  _ServiceDocument.ServiceConfirmationIsFinal,
  _ServiceDocument.Region,
  _ServiceDocument.ServiceRisk
```
