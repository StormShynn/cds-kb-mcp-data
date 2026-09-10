---
name: I_BUSINESSSOLUTIONORDER
description: "Businesssolutionorder"
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSSOLUTIONORDER

**Businesssolutionorder**

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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` | `CHAR(10)` | Transaction ID |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentCharUUID` |  | |  | `cast( ServiceDocumentCharUUID as sysuuid_c preserving type )` | `CHAR(32)` | UUID in Character Format |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  | `ServiceDocumentDescription` | `CHAR(40)` | Transaction Description |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocumentCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocumentChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `ServiceDocGrossAmount` |  | |  |  | `CURR(15)` | Total Gross Value of Document in Document Currency |
| `BusSolnOrdNetAmount` |  | |  | `ServiceDocNetAmount` | `CURR(15)` | Total Net Value of Document in Document Currency |
| `ServiceDocTaxAmount` |  | |  |  | `CURR(15)` | Total Tax Amount in Document Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPersonBusinessPartnerId` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Reference Document Date |
| `ServiceDocumentRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
| `BusSolnOrdStatus` |  | |  | `ServiceDocumentStatus` | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdIsReleased` |  | |  | `ServiceDocumentIsReleased` | `CHAR(1)` | Release Status |
| `BusSolnOrdHasError` |  | |  | `ServiceDocumentHasError` | `CHAR(1)` | Error Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `BusSolnOrdRejectionStatus` |  | |  | `SrvcDocRejectionStatus` | `CHAR(1)` | Rejection Status |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SoldToPartyToCustomer` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'BusinessSolutionOrder',
    sapObjectNodeType.name: 'BusinessSolutionOrder',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType:{
        serviceQuality: #A,
        sizeCategory: #XXL,
        dataClass: #TRANSACTIONAL
    }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusinessSolutionOrder
  as select from I_ServiceDocument_2

  association to many I_BusinessSolutionOrderItem as _BusinessSolutionOrderItem on  _BusinessSolutionOrderItem.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to one E_ServiceDocument            as _BusinessSolutionOrderExt  on  _BusinessSolutionOrderExt.ServiceCategory = $projection.ServiceObjectType
                                                                                and _BusinessSolutionOrderExt.ServiceOrder    = $projection.BusinessSolutionOrder
{
      @ObjectModel.text.element: [ 'BusSolnOrdDescription' ]
  key ServiceDocument                                              as BusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID                                          as BusinessSolutionOrderUUID,
      cast( ServiceDocumentCharUUID as sysuuid_c preserving type ) as ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription                                   as BusSolnOrdDescription,
      Language,
      PostingDate,
      @Semantics.dateTime: true
      ServiceDocCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount                                          as BusSolnOrdNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      TransactionCurrency,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,
      PaymentTerms,
      PaymentMethod,
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      DistributionChannel,
      Division,
      Region,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      ServiceDocumentRejectionReason,
      ServiceDocumentStatus                                        as BusSolnOrdStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsReleased                                    as BusSolnOrdIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentHasError                                      as BusSolnOrdHasError,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      SrvcDocRejectionStatus                                       as BusSolnOrdRejectionStatus,

      _BusinessSolutionOrderItem,
      _ServiceObjType,
      _ServiceDocumentType,
      _SoldToParty,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SoldToPartyToCustomer,
      _PaymentTerms,
      _PaymentMethod,
      _TransactionCurrency,
      _SrvcDocumentRejectionReason,
      _Region,
      _SrvcDocLifecycleStatus,
      _ServiceDocHasError,
      _ServiceDocumentIsOpen,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel
}
where
  ServiceObjectType = 'BUS2000172'
```
