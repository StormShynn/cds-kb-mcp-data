---
name: I_SERVICECONTRACTENHCD
description: "Servicecontractenhcd"
app_component: CRM-S4-REP-RFW
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
  - service
  - contract
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTENHCD

**Servicecontractenhcd**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `ServiceContract` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceContractUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceContractCharUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `ServiceContractNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceContractGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPersonBusinessPartnerId` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ServiceContractStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContractEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcContrEarliestStartDateTime` |  | |  |  | `DEC(15)` | Earliest Start Date for Service Contract |
| `SrvcContrLatestEndDateTime` |  | |  |  | `DEC(15)` | Latest End Date for Service Contract |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Reference Document Date |
| `ServiceContractRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ServiceContractStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContractIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceContractHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcContrBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceContractIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceContractIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceContractCanclnSts` |  | |  |  | `CHAR(1)` | Contract Cancellation Status |
| `SrvcContrRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `ServiceContractCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceContrCancellationReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcContrCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Header |
| `SrvcContrCancellationDateTime` |  | |  | `cast( case ServiceContractCanclnParty when '' then 0 else ServiceContractEndDateTime end as timestamp preserving type )` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `SrvcContrExternalReference` |  | | `_ExtRefServiceContract` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `ServiceQtanExtReference` |  | | `_ExtRefServiceContractQuot` | `CustMgmtExtRefID` | `CHAR(80)` | External Reference Number |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `_ServiceContractItem` | | ✓ | | | | |
| `_SrvcDocHeaderLongText` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_ServiceDocPredecessor` | | ✓ | | | | |
| `_ServiceDocSuccessor` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceContractCanclnSts` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcDocCreditStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItem` | `I_ServiceContractItemEnhcd` | [1..*] |
| `_SrvcDocHeaderLongText` | `I_SrvcDocHeaderLongText` | [0..*] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_ExtRefServiceContract` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceContractQuot` | `I_CustMgmtExtRefID` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ServiceDocPredecessor` | `I_ServiceDocumentPredecessor` | [1] |
| `_ServiceDocSuccessor` | `I_ServiceDocumentSuccessor` | [0..*] |
| `_ServiceContractEnhcdExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Enhanced'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_CustMgmtPartner' ],
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'ServiceContract',
    sapObjectNodeType.name: 'ServiceContract',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType: {
        dataClass:      #MIXED,
        serviceQuality: #C,
        sizeCategory:   #XXL
    }
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ServiceContractEnhcd
  as select from I_ServiceContract

  association [1..*] to I_ServiceContractItemEnhcd    as _ServiceContractItem on _ServiceContractItem.ServiceContract = $projection.ServiceContract

  association [0..*] to I_SrvcDocHeaderLongText       as _SrvcDocHeaderLongText  on _SrvcDocHeaderLongText.ServiceObjectType = $projection.ServiceObjectType 
                                                                                and _SrvcDocHeaderLongText.ServiceDocument   = $projection.ServiceContract
                                                                                and _SrvcDocHeaderLongText.Language          = $session.system_language

  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner  on _CustMgmtPartner.CustMgmtDocument     = $projection.ServiceContract 
                                                                          and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                          and _CustMgmtPartner.CustMgmtDocumentItem = '000000'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContract  on _ExtRefServiceContract.CustMgmtObjectType   = 'BUS2000112'
                                                                                and _ExtRefServiceContract.CustMgmtDocument     = $projection.ServiceContract
                                                                                and _ExtRefServiceContract.CustMgmtDocumentItem = '000000'
                                                                                and _ExtRefServiceContract.CustMgmtExtRefIDType = '0003'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContractQuot  on _ExtRefServiceContractQuot.CustMgmtObjectType   = 'BUS2000112'
                                                                                    and _ExtRefServiceContractQuot.CustMgmtDocument     = $projection.ServiceContract 
                                                                                    and _ExtRefServiceContractQuot.CustMgmtDocumentItem = '000000' 
                                                                                    and _ExtRefServiceContractQuot.CustMgmtExtRefIDType = '0009'

  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData on _WBSElementBasicData.WBSElementInternalID = $projection.WBSElementInternalID
  
  association [1]    to I_ServiceDocumentPredecessor  as _ServiceDocPredecessor    on  _ServiceDocPredecessor.ServiceDocumentUUID = $projection.ServiceContractUUID
                                                                                   and _ServiceDocPredecessor.ServiceObjectType   = $projection.ServiceObjectType 

  association [0..*] to I_ServiceDocumentSuccessor    as _ServiceDocSuccessor      on _ServiceDocSuccessor.ServiceDocumentUUID = $projection.ServiceContractUUID
                                                                                  and _ServiceDocSuccessor.ServiceObjectType   = $projection.ServiceObjectType 

  association [0..1] to E_ServiceDocument             as _ServiceContractEnhcdExt  on _ServiceContractEnhcdExt.ServiceCategory = $projection.ServiceObjectType 
                                                                                  and _ServiceContractEnhcdExt.ServiceOrder    = $projection.ServiceContract 
{
      // Header Keys
  key ServiceContract,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,

      ServiceContractUUID,
      ServiceContractCharUUID,

      // Header Details
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceContractDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      PricingDocument,
      RefBusinessSolutionOrder,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      SoldToParty,
      SoldToPartyRegion,
      SoldToPartyCountry,

      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,

      ShipToParty,
      BillToParty,
      PayerParty,
      
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      SrvcContrEarliestStartDateTime,
      SrvcContrLatestEndDateTime,
      PaymentTerms,
      PaymentMethod,
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      WBSElementInternalID,
      TransactionCurrency,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      ServiceContractRejectionReason,
      Region,
      ServiceContractStatus,
      @Semantics.booleanIndicator: true
      ServiceContractIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContractHasError,
      SrvcContrBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractIsOpen,
      ServiceContractCanclnSts,
      SrvcContrRejectionStatus,
      
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      BillingBlockReason,
      ServiceContractCanclnParty,
      ServiceContrCancellationReason,
      SrvcContrCreditStatus,

      cast( case ServiceContractCanclnParty
            when '' then 0
            else ServiceContractEndDateTime end as timestamp preserving type )    as SrvcContrCancellationDateTime,
      _ExtRefServiceContract.CustMgmtExtRefID                                     as SrvcContrExternalReference,
      _ExtRefServiceContractQuot.CustMgmtExtRefID                                 as ServiceQtanExtReference,
      _WBSElementBasicData.WBSElementExternalID,
      
      _ServiceContractItem,
      _ServiceDocPredecessor,
      _ServiceDocSuccessor,
      _SrvcDocHeaderLongText,
      _CustMgmtPartner,
      
      _ServiceDocumentType,
      _ServiceObjType,
      _SoldToParty,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      _TransactionCurrency,
      _SrvcDocumentRejectionReason,
      _Region,
      _SrvcDocLifecycleStatus,
      _ServiceDocHasError,
      _ServiceDocBillingStatus,
      _ServiceDocumentIsOpen,
      _ServiceContractCanclnSts,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _BillingBlockReason,
      _SrvcDocCreditStatus
}
```
