---
name: I_ACCTGSRVCDOCUMENTITEMBASIC
description: "Acctgsrvcdocumentitembasic"
semantic_vi: "Chỉ ra dữ liệu cơ bản của các mục trong tài liệu dịch vụ, bao gồm loại tài liệu dịch vụ, tài liệu và chi tiết mục, thường được sử dụng cho mục đích quản lý và quản lý dịch vụ."
keywords:
  - "service document item"
  - "tài liệu dịch vụ"
  - "đối tượng dịch vụ"
  - "đơn dịch vụ"
  - "đối tượng tài liệu"
  - "đối tượng mục"
  - "quản lý dịch vụ"
  - "quản lý tài liệu"
  - "co-pc"
  - "co-pc-obj"
  - "lob: controlling"
semantic_en: "Exposes basic data of service document items, including service document type, document, and item details, typically used for controlling and service management purposes."
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
  - document
  - item-level
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSRVCDOCUMENTITEMBASIC

**Acctgsrvcdocumentitembasic**

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
| `ServiceDocumentType` | ✓ | | `_AcctgServiceDocument` | `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | ✓ | | `_AcctgServiceDocument` | `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | ✓ | | `_AcctgServiceDocument` | `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `ControllingObject` |  | | `_AcctgServiceDocument` | `ControllingObject` | `CHAR(22)` | Object Number |
| `BusinessSolutionOrder` |  | | `_AcctgServiceDocument` | `BusinessSolutionOrder` | `CHAR(10)` | Solution Order ID |
| `CompanyCode` |  | | `_AcctgServiceDocument` | `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | | `_AcctgServiceDocument` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | | `_AcctgServiceDocument` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | | `_AcctgServiceDocument` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | | `_AcctgServiceDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | | `_AcctgServiceDocument` | `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` |  | | `_AcctgServiceDocument` | `Division` | `CHAR(2)` | Division |
| `ResultAnalysisInternalID` |  | | `_AcctgServiceDocument` | `ResultAnalysisInternalID` | `CHAR(6)` | Results Analysis Key |
| `Currency` |  | | `_AcctgServiceDocument` | `Currency` | `CUKY(5)` | Currency Key |
| `CostingSheet` |  | | `_AcctgServiceDocument` | `CostingSheet` | `CHAR(6)` | Costing Sheet |
| `ServiceObjectType` |  | | `_AcctgServiceDocument` | `ServiceObjectType` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentItemDescription` |  | |  | `cast( case _AcctgServiceDocument.ServiceDocumentItemDescription when '' then _ServiceDocumentItem.ServiceDocumentItemDescription else coalesce( _AcctgServiceDocument.ServiceDocumentItemDescription, _ServiceDocumentItem.ServiceDocumentItemDescription ) end as fco_srvdoc_item_description preserving type )` | `CHAR(40)` | Service Document Item Description |
| `ServiceDocumentUUID` |  | | `_ServiceDocumentItem` | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentDescription` |  | | `_ServiceDocumentItem` | `ServiceDocumentDescription` | `CHAR(40)` | Transaction Description |
| `ServiceDocumentItemUUID` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemObjectType` | `CHAR(10)` | CRM Item Object Type |
| `ParentServiceDocumentItemUUID` |  | | `_ServiceDocumentItem` | `ParentServiceDocumentItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `RefBusinessSolutionOrder` |  | | `_ServiceDocumentItem` | `RefBusinessSolutionOrder` | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | | `_ServiceDocumentItem` | `RefBusinessSolutionOrderItem` | `NUMC(6)` | Item Number in Referenced Solution Order |
| `BillingDateTime` |  | | `_ServiceDocumentItem` | `BillingDateTime` | `DEC(15)` | Billing Date for Billing Index and Printout |
| `BillingDocCreationDateTime` |  | | `_ServiceDocumentItem` | `BillingDocCreationDateTime` | `DEC(15)` | Billing Document Creation Date |
| `PurchaseOrderByCustomer` |  | | `_ServiceDocumentItem` | `PurchaseOrderByCustomer` | `CHAR(35)` | Sold-To Party's External Reference Number |
| `ServiceDocumentItemPriority` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemPriority` | `NUMC(1)` | Activity Priority |
| `PostingDate` |  | | `_ServiceDocumentItem` | `PostingDate` | `DATS(8)` | Posting Date for a Business Transaction |
| `TransactionCurrency` |  | | `_ServiceDocumentItem` | `TransactionCurrency` | `CUKY(5)` | Currency |
| `SalesOrganizationOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesOrganizationOrgUnitID` | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesOfficeOrgUnitID` | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | | `_ServiceDocumentItem` | `SalesGroupOrgUnitID` | `CHAR(14)` | Sales Group |
| `SoldToPartyCountry` |  | | `_ServiceDocumentItem` | `SoldToPartyCountry` | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | | `_ServiceDocumentItem` | `SoldToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | | `_ServiceDocumentItem` | `SoldToParty` | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | | `_ServiceDocumentItem` | `ServiceTeam` | `CHAR(10)` | Service Team |
| `ResponsibleEmployee` |  | |  | `cast( _ServiceDocument.ResponsibleEmployee as resp_empl)` | `NUMC(8)` | Employee Responsible |
| `ServiceEmployee` |  | | `_ServiceDocumentItem` | `ServiceEmployee` | `CHAR(10)` | Executing Service Employee |
| `ContactPerson` |  | |  | `cast( _ServiceDocument.ContactPerson as parnr )` | `NUMC(10)` | Number of Contact Person |
| `PayerParty` |  | | `_ServiceDocumentItem` | `PayerParty` | `CHAR(10)` | Payer |
| `BillToParty` |  | | `_ServiceDocumentItem` | `BillToParty` | `CHAR(10)` | Bill-To Party |
| `PaymentTerms` |  | | `_ServiceDocumentItem` | `PaymentTerms` | `CHAR(4)` | Terms of Payment |
| `ServiceDocumentItemStatus` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemStatus` | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemHasError` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemHasError` | `CHAR(1)` | Error Status |
| `SrvcDocItmIsReleasedForBilling` |  | | `_ServiceDocumentItem` | `SrvcDocItmIsReleasedForBilling` | `CHAR(1)` | Billing Release Status |
| `ServiceDocItemBillingStatus` |  | | `_ServiceDocumentItem` | `ServiceDocItemBillingStatus` | `CHAR(1)` | Billing Status |
| `ServiceDocumentItemIsOpen` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsOpen` | `CHAR(1)` | Status "Open" |
| `ServiceOrganization` |  | | `_ServiceDocumentItem` | `ServiceOrganization` | `CHAR(14)` | Service Organization |
| `ResponsibleServiceOrganization` |  | | `_ServiceDocumentItem` | `ResponsibleServiceOrganization` | `CHAR(14)` | Organizational Unit (Service) |
| `ServiceDocItemCreationDateTime` |  | | `_ServiceDocumentItem` | `ServiceDocItemCreationDateTime` | `DEC(15)` | Created At |
| `ServiceDocItemChangedDateTime` |  | | `_ServiceDocumentItem` | `ServiceDocItemChangedDateTime` | `DEC(15)` | Changed At |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` | `DATS(8)` | Created On |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` | `DATS(8)` | Changed On |
| `ServiceDocItemCreatedByUser` |  | | `_ServiceDocumentItem` | `ServiceDocItemCreatedByUser` | `CHAR(12)` | User that Created the Transaction |
| `ServiceDocItemChangedByUser` |  | | `_ServiceDocumentItem` | `ServiceDocItemChangedByUser` | `CHAR(12)` | Transaction Last Changed By |
| `OriginallyRequestedProduct` |  | | `_ServiceDocumentItem` | `OriginallyRequestedProduct` | `CHAR(54)` | Product Name Entered |
| `ServiceDocumentItemQuantity` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemQuantity` | `QUAN(13)` | CRM: Order Quantity |
| `ServiceDocItemQuantityUnit` |  | | `_ServiceDocumentItem` | `ServiceDocItemQuantityUnit` | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | | `_ServiceDocumentItem` | `SrvcDocItemBaseQuantityUnit` | `UNIT(3)` | Base Unit of Measure of Product |
| `ServiceDocItemCategory` |  | | `_ServiceDocumentItem` | `ServiceDocItemCategory` | `CHAR(4)` | Item Category |
| `ServiceDocumentItemNetAmount` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemNetAmount` | `CURR(15)` | Net Value |
| `BillableControl` |  | | `_ServiceDocumentItem` | `BillableControl` | `CHAR(2)` | Accounting Indicator |
| `BillingBlockReason` |  | | `_ServiceDocumentItem` | `BillingBlockReason` | `CHAR(2)` | Business Partner: Billing Block Reason |
| `RequestedServiceStartDateTime` |  | | `_ServiceDocumentItem` | `RequestedServiceStartDateTime` | `DEC(15)` | Service Request Start Date |
| `RequestedServiceEndDateTime` |  | | `_ServiceDocumentItem` | `RequestedServiceEndDateTime` | `DEC(15)` | Service Request Due Date |
| `ServiceContrItemStartDateTime` |  | | `_ServiceDocumentItem` | `ServiceContrItemStartDateTime` | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | | `_ServiceDocumentItem` | `ServiceContrItemEndDateTime` | `DEC(15)` | Contract End Date |
| `ServiceDocItemGrossAmount` |  | | `_ServiceDocumentItem` | `ServiceDocItemGrossAmount` | `CURR(15)` | Gross Order Value in PO Currency |
| `SettlementPeriodRuleUUID` |  | | `_ServiceDocumentItem` | `SettlementPeriodRuleUUID` | `RAW(16)` | Rule for Determining the Period Date |
| `BillingPlanBillingDateRuleUUID` |  | | `_ServiceDocumentItem` | `BillingPlanBillingDateRuleUUID` | `RAW(16)` | Rule for Determining the Next Billing Date |
| `SalesOffice` |  | | `_ServiceDocumentItem` | `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | | `_ServiceDocumentItem` | `SalesGroup` | `CHAR(3)` | Sales Group |
| `ServiceDuration` |  | | `_ServiceDocumentItem` | `ServiceDuration` | `QUAN(13)` | Duration |
| `ServiceDocItemRejectionReason` |  | | `_ServiceDocumentItem` | `ServiceDocItemRejectionReason` | `CHAR(2)` | Cancellation Reason Code |
| `ShipToParty` |  | | `_ServiceDocumentItem` | `ShipToParty` | `CHAR(10)` | Ship-To Party |
| `ServiceDocumentItemIsReleased` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsReleased` | `CHAR(1)` | Release Status |
| `ServiceDocumentItemIsRejected` |  | | `_ServiceDocumentItem` | `ServiceDocumentItemIsRejected` | `CHAR(1)` | Cancellation Status |
| `ResponseProfile` |  | | `_ServiceDocumentItem` | `ResponseProfile` | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | | `_ServiceDocumentItem` | `ServiceProfile` | `CHAR(10)` | Service Profile |
| `Language` |  | | `_ServiceDocumentItem` | `Language` | `LANG(1)` | Short Text Language for an Item |
| `ActualServiceDuration` |  | | `_ServiceDocumentItem` | `ActualServiceDuration` | `QUAN(7)` | Confirmed Duration |
| `ActualServiceDurationUnit` |  | | `_ServiceDocumentItem` | `ActualServiceDurationUnit` | `UNIT(3)` | Time Unit for Confirmed Duration |
| `ServiceDurationUnit` |  | | `_ServiceDocumentItem` | `ServiceDurationUnit` | `UNIT(3)` | Unit for Duration of Work |
| `TimeSheetOvertimeCategory` |  | | `_ServiceDocumentItem` | `TimeSheetOvertimeCategory` | `CHAR(4)` | Overtime Category |
| `Industry` |  | | `_ServiceDocumentItem` | `Industry` | `CHAR(4)` | Industry Sector |
| `SrvcContrItemRnwlDuration` |  | | `_ServiceDocumentItem` | `SrvcContrItemRnwlDuration` | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | | `_ServiceDocumentItem` | `SrvcContrItemRnwlDurationUnit` | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | | `_ServiceDocumentItem` | `SrvcContrItemExtensionDuration` | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | | `_ServiceDocumentItem` | `SrvcContrItemExtnDurationUnit` | `UNIT(3)` | UOM for Contract Extension |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_AcctgServiceDocumentType` | [1..1] |
| `_ServiceDocument` | `I_AccountingServiceDocument` | [1..1] |
| `_ServiceDocumentItem` | `I_ServiceDocumentItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  sizeCategory: #L,
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.representativeKey: 'ServiceDocumentItem'
@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #VALUE_HELP_PROVIDER
  ]
@EndUserText.label: 'Accounting Service Document Item'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_AcctgSrvcDocumentItemBasic 
  as select from I_AcctgServiceDocumentItem as _AcctgServiceDocument
//  as select from P_AcctgServiceDocument as _AcctgServiceDocument
//    left outer to one join I_AcctgServiceDocumentItem as _ServiceObjType on _AcctgServiceDocument.ServiceDocumentType  = _ServiceObjType.ServiceDocumentType
//                                                                         and _AcctgServiceDocument.ServiceDocument     = _ServiceObjType.ServiceDocument
//                                                                         and _AcctgServiceDocument.ServiceDocumentItem = _ServiceObjType.ServiceDocumentItem


  association [1..1] to I_AcctgServiceDocumentType  as _ServiceDocumentType on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  
  association [1..1] to I_AccountingServiceDocument as _ServiceDocument     on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                            and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument
                                                                            
  association [1..1] to I_ServiceDocumentItem       as _ServiceDocumentItem on  $projection.ServiceObjectType = _ServiceDocumentItem.ServiceObjectType
                                                                            and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                            and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
                                                                                                                                                   
{
  @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key _AcctgServiceDocument.ServiceDocumentType,
  @ObjectModel.foreignKey.association: '_ServiceDocument'
  key _AcctgServiceDocument.ServiceDocument,
  @ObjectModel.text.element: ['ServiceDocumentItemDescription']
  key _AcctgServiceDocument.ServiceDocumentItem,
      _AcctgServiceDocument.ControllingObject,
      _AcctgServiceDocument.BusinessSolutionOrder,
      _AcctgServiceDocument.CompanyCode,
      _AcctgServiceDocument.ControllingArea,
      _AcctgServiceDocument.ProfitCenter,
      _AcctgServiceDocument.FunctionalArea,
      _AcctgServiceDocument.SalesOrganization,
      _AcctgServiceDocument.DistributionChannel,
      _AcctgServiceDocument.Division,
      _AcctgServiceDocument.ResultAnalysisInternalID,
      _AcctgServiceDocument.Currency,
      _AcctgServiceDocument.CostingSheet,
      
//      _ServiceObjType.ServiceObjectType as ServiceObjectType,
      _AcctgServiceDocument.ServiceObjectType,
      
      @Semantics.text: true
      cast( case _AcctgServiceDocument.ServiceDocumentItemDescription
              when '' then _ServiceDocumentItem.ServiceDocumentItemDescription 
              else coalesce( _AcctgServiceDocument.ServiceDocumentItemDescription, _ServiceDocumentItem.ServiceDocumentItemDescription  )
            end 
          as fco_srvdoc_item_description preserving type ) as ServiceDocumentItemDescription,
      
      
      _ServiceDocumentItem.ServiceDocumentUUID,
      _ServiceDocumentItem.ServiceDocumentDescription,
      _ServiceDocumentItem.ServiceDocumentItemUUID,
      _ServiceDocumentItem.ServiceDocumentItemObjectType,
      _ServiceDocumentItem.ParentServiceDocumentItemUUID,
      _ServiceDocumentItem.RefBusinessSolutionOrder,
      _ServiceDocumentItem.RefBusinessSolutionOrderItem,

      _ServiceDocumentItem.BillingDateTime,
      _ServiceDocumentItem.BillingDocCreationDateTime,

      _ServiceDocumentItem.PurchaseOrderByCustomer,
      _ServiceDocumentItem.ServiceDocumentItemPriority,
      _ServiceDocumentItem.PostingDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _ServiceDocumentItem.TransactionCurrency,

      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      _ServiceDocumentItem.SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      _ServiceDocumentItem.SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      _ServiceDocumentItem.SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      _ServiceDocumentItem.SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      _ServiceDocumentItem.SoldToPartyRegion,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      _ServiceDocumentItem.SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      _ServiceDocumentItem.ServiceTeam,
//      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( _ServiceDocument.ResponsibleEmployee as resp_empl) as ResponsibleEmployee,
//      _ServiceDocument.ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      _ServiceDocumentItem.ServiceEmployee,
//      @ObjectModel.foreignKey.association: '_ContactPerson'
     cast( _ServiceDocument.ContactPerson as parnr ) as ContactPerson,
//      _ServiceDocument.ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      _ServiceDocumentItem.PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      _ServiceDocumentItem.BillToParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _ServiceDocumentItem.PaymentTerms,

      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      _ServiceDocumentItem.ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      _ServiceDocumentItem.ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsOpen,

      _ServiceDocumentItem.ServiceOrganization,
      _ServiceDocumentItem.ResponsibleServiceOrganization,

      _ServiceDocumentItem.ServiceDocItemCreationDateTime,
      _ServiceDocumentItem.ServiceDocItemChangedDateTime,

      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,

      _ServiceDocumentItem.ServiceDocItemCreatedByUser,
      _ServiceDocumentItem.ServiceDocItemChangedByUser,
      _ServiceDocumentItem.OriginallyRequestedProduct,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      _ServiceDocumentItem.ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      _ServiceDocumentItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      _ServiceDocumentItem.SrvcDocItemBaseQuantityUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      _ServiceDocumentItem.ServiceDocItemCategory,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocumentItemNetAmount,
      _ServiceDocumentItem.BillableControl,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _ServiceDocumentItem.BillingBlockReason,
      _ServiceDocumentItem.RequestedServiceStartDateTime,
      _ServiceDocumentItem.RequestedServiceEndDateTime,

      _ServiceDocumentItem.ServiceContrItemStartDateTime,
      _ServiceDocumentItem.ServiceContrItemEndDateTime,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocItemGrossAmount,

      _ServiceDocumentItem.SettlementPeriodRuleUUID,
      _ServiceDocumentItem.BillingPlanBillingDateRuleUUID,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      _ServiceDocumentItem.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _ServiceDocumentItem.SalesGroup,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      _ServiceDocumentItem.ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      _ServiceDocumentItem.ServiceDocItemRejectionReason,
      _ServiceDocumentItem.ShipToParty,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsRejected,
      _ServiceDocumentItem.ResponseProfile,
      _ServiceDocumentItem.ServiceProfile,
      _ServiceDocumentItem.Language,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      _ServiceDocumentItem.ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      _ServiceDocumentItem.ActualServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      _ServiceDocumentItem.ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      _ServiceDocumentItem.TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_Industry'
      _ServiceDocumentItem.Industry,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      _ServiceDocumentItem.SrvcContrItemRnwlDurationUnit,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      _ServiceDocumentItem.SrvcContrItemExtnDurationUnit,

//      /* Associations */
//      //I_ServiceDocumentItem
      _ServiceDocumentItem._BillingBlockReason,
//      _ServiceDocumentItem._BillingRequestItem,
      _ServiceDocumentItem._BillToParty,
//      _ServiceDocumentItem._ContactPerson,
      _ServiceDocumentItem._PayerParty,
//      _ServiceDocumentItem._RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemBillingStatus,
      _ServiceDocumentItem._ServiceDocItemCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemHasError,
//      _ServiceDocumentItem._ServiceDocItemPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItmLifecycleStatus,
      _ServiceDocumentItem._ServiceEmployee,
//      _ServiceDocument,
//      _ServiceObjType,
      _ServiceDocumentItem._BaseUnit_2,
      _ServiceDocumentItem._SalesUnit,
      _ServiceDocumentItem._TransactionCurrency,
      _ServiceDocumentItem._PaymentTerms,
//      _ServiceProductList,
      _ServiceDocumentItem._ServiceTeam,
      _ServiceDocumentItem._SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocumentIsOpen,
//      _FixedPrice,
//      _StatusObjItemStatus,
//      _SalesOrganization,
      _ServiceDocumentItem._SalesOffice,
      _ServiceDocumentItem._SalesGroup,
      _ServiceDocumentItem._ActualServiceDurationUnit,
      _ServiceDocumentItem._ServiceDurationUnit,
      _ServiceDocumentItem._SrvcContrItemRnwlDurationUnit,
      _ServiceDocumentItem._SrvcContrItemExtnDurationUnit,
      _ServiceDocumentItem._ServiceDocOvertimeCat,
      _ServiceDocumentItem._Industry,
      _ServiceDocumentItem._ServiceDocItemRejectionReason,
      _ServiceDocumentItem._SoldToPartyCountry,
      _ServiceDocumentItem._SoldToPartyRegion,
//
//
      _ServiceDocumentItem._SalesOrganizationOrgUnit_2,
      _ServiceDocumentItem._SalesOfficeOrgUnit_2,
      _ServiceDocumentItem._SalesGroupOrgUnit_2,      
      
      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem
      
}
```
