---
name: I_BUSINESSSOLUTIONORDER
description: "Businesssolutionorder"
semantic_vi: "CDS view Businesssolutionorder hiển thị dữ liệu đơn hàng giải pháp kinh doanh, được sử dụng để quản lý và theo dõi giải pháp kinh doanh trong hệ thống CRM."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "crm"
  - "sap"
  - "business solution"
  - "service document"
  - "service object type"
semantic_en: "The Businesssolutionorder CDS view exposes business solution order data, which is used to manage and track business solutions in the CRM system."
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
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` |  |  |
| `ServiceDocumentCharUUID` |  | |  | `cast( ServiceDocumentCharUUID as sysuuid_c preserving type )` |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  | `ServiceDocumentDescription` |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `BusSolnOrdNetAmount` |  | |  | `ServiceDocNetAmount` |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |  |  |
| `BusSolnOrdStatus` |  | |  | `ServiceDocumentStatus` |  |  |
| `BusSolnOrdIsReleased` |  | |  | `ServiceDocumentIsReleased` |  |  |
| `BusSolnOrdHasError` |  | |  | `ServiceDocumentHasError` |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `BusSolnOrdRejectionStatus` |  | |  | `SrvcDocRejectionStatus` |  |  |
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
