---
name: I_SERVICECONTRACTITEM
description: "Servicecontractitem"
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTITEM

**Servicecontractitem**

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
| `ServiceContract` | ✓ | |  | `ServiceDocument` | `CHAR(10)` | Transaction ID |
| `ServiceContractItem` | ✓ | |  | `ServiceDocumentItem` | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceContractItemCategory` |  | |  | `ServiceDocItemCategory` | `CHAR(4)` | Item Category |
| `ServiceContractDescription` |  | |  | `ServiceDocumentDescription` | `CHAR(40)` | Transaction Description |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceContractItemUUID` |  | |  | `ServiceDocumentItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceContractItemCharUUID` |  | |  | `cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )` | `CHAR(32)` | UUID in Character Format |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ServiceContractUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceContractItemDescription` |  | |  | `ServiceDocumentItemDescription` | `CHAR(40)` | Product Description |
| `Language` |  | |  |  | `LANG(1)` | Short Text Language for an Item |
| `ServiceDocItemCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocItemCreatedByUser` |  | |  |  | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | |  |  | `CHAR(12)` | Transaction Last Changed By |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |
| `ServiceContractItemQuantity` |  | |  | `ServiceDocumentItemQuantity` | `QUAN(13)` | CRM: Order Quantity |
| `ServiceContrItemQuantityUnit` |  | |  | `ServiceDocItemQuantityUnit` | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `BillingPlanTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Billing Plan Set |
| `BillingPriceSourceName` |  | |  |  | `CHAR(15)` | Source of price in service confirmation |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RespEmployeeBusinessPartnerId` |  | |  | `cast( ResponsibleEmployee as crmt_person_resp preserving type )` | `CHAR(10)` | Employee Responsible |
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ContactPersonBusinessPartnerId` |  | |  | `cast( ContactPerson as crmt_contact_person preserving type )` | `CHAR(10)` | Customer Contact Person |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `ServiceContractItemStatus` |  | |  | `ServiceDocumentItemStatus` | `CHAR(4)` | Life Cycle Status |
| `ServiceContractItemHasError` |  | |  | `ServiceDocumentItemHasError` | `CHAR(1)` | Error Status |
| `ServiceContrItemBillingStatus` |  | |  | `ServiceDocItemBillingStatus` | `CHAR(1)` | Billing Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceContractItemIsReleased` |  | |  | `ServiceDocumentItemIsReleased` | `CHAR(1)` | Release Status |
| `ServiceContractItemIsRejected` |  | |  | `ServiceDocumentItemIsRejected` | `CHAR(1)` | Cancellation Status |
| `SrvcDocItemTransferStatus` |  | |  |  | `CHAR(1)` | Transfer Status |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `ServiceContractItemNetAmount` |  | |  | `ServiceDocumentItemNetAmount` | `CURR(15)` | Net Value |
| `ServiceDocumentItemTaxAmount` |  | |  |  | `CURR(15)` | Tax amount in document currency |
| `ServiceContractItemGrossAmount` |  | |  | `ServiceDocItemGrossAmount` | `CURR(15)` | Gross Order Value in PO Currency |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `PurchaseOrderByShipToParty` |  | |  |  | `CHAR(35)` | Ship-To Party's External Reference Number |
| `SrvcContrItemRejectionReason` |  | |  | `ServiceDocItemRejectionReason` | `CHAR(2)` | Cancellation Reason Code |
| `SettlementPeriodRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Period Date |
| `BillingPlanBillingDateRuleUUID` |  | |  |  | `RAW(16)` | Rule for Determining the Next Billing Date |
| `BillingPlanPriceDateRule` |  | |  |  | `CHAR(1)` | Rule for Determining the Pricing Date |
| `BillingPlanIsFinalized` |  | |  |  | `CHAR(1)` | Billing Plan Is Finalized |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcContrItemRenewalDateTime` |  | |  |  | `DEC(15)` | Start Date of Auto Renewal Period |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  | `CHAR(1)` | Overwrite Default Terms |
| `MidBillgCycExprtnIsAllowed` |  | |  |  | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `ServiceContractItemCanclnParty` |  | |  | `ServiceDocumentItemCanclnParty` | `CHAR(4)` | Cancelling Party |
| `ServiceContractItmCanclnReason` |  | |  | `ServiceDocumentItmCanclnReason` | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcContrItmCanclnProcedure` |  | |  | `SrvcDocItmCanclnProcedure` | `CHAR(4)` | Cancellation Procedure |
| `SrvcContrRenewalDuration` |  | |  | `ServiceDocumentRnwlDuration` | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrRenewalDurationUnit` |  | |  | `ServiceDocRnwlDurationUnit` | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrExtensionDuration` |  | |  | `ServiceDocExtensionDuration` | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrExtensionDurationUnit` |  | |  | `ServiceDocExtnDurationUnit` | `UNIT(3)` | UOM for Contract Extension |
| `SrvcContrItemCreditStatus` |  | |  | `SrvcDocItemCreditStatus` | `CHAR(1)` | Credit Status of Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `SrvcDocItmPartReferenceItem` |  | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `_ServiceContractItemCategory` |  | |  | `_ServiceDocItemCategory` |  |  |
| `_ServiceContractItemHasError` |  | |  | `_ServiceDocItemHasError` |  |  |
| `_ServiceContrItemBillingStatus` |  | |  | `_ServiceDocItemBillingStatus` |  |  |
| `_SrvcContrItemRejectionReason` |  | |  | `_ServiceDocItemRejectionReason` |  |  |
| `_SrvcContrItemCreditStatus` |  | |  | `_SrvcDocItemCreditStatus` |  |  |
| `_ServiceContract` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceContract` | `I_ServiceContract` | [1..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType:{
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XXL
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ServiceContractItem',
    sapObjectNodeType.name: 'ServiceContractItem'
}

@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}  

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  }*/
define view entity I_ServiceContractItem as select from I_ServiceDocumentItem

  association [0..1] to E_ServiceDocumentItem   as _ServiceContractItemExt  on $projection.ServiceObjectType   = _ServiceContractItemExt.ServiceCategory
                                                                           and $projection.ServiceContract     = _ServiceContractItemExt.ServiceOrderItem
                                                                           and $projection.ServiceContractItem = _ServiceContractItemExt.ServiceLineExternalID

  association [1..1] to I_ServiceContract       as _ServiceContract         on $projection.ServiceContract     = _ServiceContract.ServiceContract

  association [0..1] to I_SrvcDocPaymentMethod  as _PaymentMethod           on _PaymentMethod.PaymentMethod             = $projection.PaymentMethod 
                                                                           and _PaymentMethod.SalesOrganization         = $projection.SalesOrganization
                                                                           and _PaymentMethod.OrgUnitTypeIDConcatenated = ''
                                                                           
  association [0..1] to I_BusinessPartner       as _RespEmployee            on _RespEmployee.BusinessPartner = $projection.RespEmployeeBusinessPartnerId
  
  association [0..1] to I_BusinessPartner       as _ContactPerson           on _ContactPerson.BusinessPartner = $projection.ContactPersonBusinessPartnerId 
{
      @ObjectModel.foreignKey.association: '_ServiceContract'
  key ServiceDocument                                                   as ServiceContract,
      @ObjectModel.text.element: [ 'ServiceContractItemDescription' ]
  key ServiceDocumentItem                                               as ServiceContractItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,       // Not a key field because the selection limits the values to 'BUS2000112'
      @ObjectModel.foreignKey.association: '_ServiceContractItemCategory'
      ServiceDocItemCategory                                            as ServiceContractItemCategory,
      ServiceDocumentDescription                                        as ServiceContractDescription,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      PostingDate,
      ServiceDocumentItemUUID                                           as ServiceContractItemUUID,
      cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )  as ServiceContractItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceDocumentUUID                                               as ServiceContractUUID,
      @Semantics.text: true
      ServiceDocumentItemDescription                                    as ServiceContractItemDescription,
      Language,
      @Semantics.dateTime: true
      ServiceDocItemCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Product,
      ControllingArea,    // Needed for foreign key relation for profit center
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceContrItemQuantityUnit'} }
      ServiceDocumentItemQuantity                                       as ServiceContractItemQuantity,
      ServiceDocItemQuantityUnit                                        as ServiceContrItemQuantityUnit,
      BillingPlanTimeZone,
      BillingPriceSourceName,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( ResponsibleEmployee as crmt_person_resp preserving type )   as RespEmployeeBusinessPartnerId,
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast( ContactPerson as crmt_contact_person preserving type )      as ContactPersonBusinessPartnerId,
      PayerParty,
      BillToParty,
      ShipToParty,
      ServiceDocumentItemStatus                                         as ServiceContractItemStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemHasError                                       as ServiceContractItemHasError,
      ServiceDocItemBillingStatus                                       as ServiceContrItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsReleased                                     as ServiceContractItemIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsRejected                                     as ServiceContractItemIsRejected,
      SrvcDocItemTransferStatus,
      TransactionCurrency,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      BillableControl,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount                                      as ServiceContractItemNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount                                         as ServiceContractItemGrossAmount,
      BillingBlockReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      ServiceDocItemRejectionReason                                     as SrvcContrItemRejectionReason,
      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,
      BillingPlanPriceDateRule,
      BillingPlanIsFinalized,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      ResponseProfile,
      ServiceProfile,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      ServiceDocumentItemCanclnParty                                    as ServiceContractItemCanclnParty,
      ServiceDocumentItmCanclnReason                                    as ServiceContractItmCanclnReason,
      SrvcDocItmCanclnProcedure                                         as SrvcContrItmCanclnProcedure,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrRenewalDurationUnit'} }
      ServiceDocumentRnwlDuration                                       as SrvcContrRenewalDuration,
      ServiceDocRnwlDurationUnit                                        as SrvcContrRenewalDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrExtensionDurationUnit'} }
      ServiceDocExtensionDuration                                       as SrvcContrExtensionDuration,
      ServiceDocExtnDurationUnit                                        as SrvcContrExtensionDurationUnit,
      SrvcDocItemCreditStatus                                           as SrvcContrItemCreditStatus,
      WBSElementInternalID,
      SrvcDocItmPartReferenceItem,    // A RAP data field, but needed for link to I_CustMgmtPartner

      // Associations      
      _ServiceContract,
      _PaymentMethod,

      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceDocItemCategory                                           as _ServiceContractItemCategory,
      _Product,
      _ProfitCenter,
      _SrvcDocItmLifecycleStatus,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _PayerParty,
      _BillToParty,
      _ShipToParty,
      _RespEmployee,
      _ServiceEmployee,
      _ContactPerson,
      _ServiceDocItemHasError                                           as _ServiceContractItemHasError,
      _ServiceDocItemBillingStatus                                      as _ServiceContrItemBillingStatus,
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _BillingBlockReason,
      _ServiceDocItemRejectionReason                                    as _SrvcContrItemRejectionReason,
      _DistributionChannel,
      _Division,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ResponseProfile,
      _ServiceProfile,
      _SrvcDocItemCreditStatus                                          as _SrvcContrItemCreditStatus,
      _BillableControl
}
where ServiceObjectType = 'BUS2000112'        // Only Service Contracts
  and ServiceDocumentTemplateType is initial  // No templates
  and ServiceDocumentItemIsQuotation = ' '    // No quotation items
```
