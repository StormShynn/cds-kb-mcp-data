---
name: C_SERVICECONFIRMATIONITEMDEX
description: "Serviceconfirmationitemdex"
semantic_vi: "View Service Confirmation Item Dex cung cấp dữ liệu chi tiết về các mặt hàng xác nhận dịch vụ, bao gồm các mặt hàng của tài liệu dịch vụ và chi tiết liên quan."
keywords:
  - "service confirmation"
  - "item-level data"
  - "service document"
  - "dịch vụ xác nhận"
  - "dữ liệu chi tiết"
  - "tài liệu dịch vụ"
  - "crm"
  - "sap"
  - "ekko"
  - "đơn xác nhận dịch vụ"
semantic_en: "The Service Confirmation Item Dex view provides item-level data for service confirmations, including service document items and their associated details. It is used to extract and analyze service confirmation data."
app_component: CRM-S4-ANA-BI-2CL
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
  - consumption-view
  - data-extraction
  - service
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICECONFIRMATIONITEMDEX

**Serviceconfirmationitemdex**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-BI-2CL` |
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
| `ServiceDocument` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceDocumentItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocumentUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceDocNetAmount` |  | |  |  | `CURR(15)` | Total Net Value of Document in Document Currency |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `ServiceDocumentStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `BusinessActivityCategory` |  | |  |  | `CHAR(3)` | Activity Category (Communication Type) |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `RequestedServiceStartDate` |  | |  |  | `DATS(8)` | Created On |
| `RequestedServiceEndDate` |  | |  |  | `DATS(8)` | Changed On |
| `ServiceDocumentItemPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ActualServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Actual Start Date |
| `ActualServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Actual End Date |
| `ActualServiceDuration` |  | |  |  | `QUAN(7)` | Confirmed Duration |
| `ActualServiceDurationUnit` |  | |  |  | `UNIT(3)` | Time Unit for Confirmed Duration |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  | `CURR(19)` | Invoice Value |
| `SrvcDocItmRequestedQuantity` |  | |  |  | `QUAN(15)` | Ordered Quantity |
| `InvoiceQuantity` |  | |  |  | `QUAN(15)` | Invoiced Quantity |
| `SrvcDocItmDeliveredQuantity` |  | |  |  | `QUAN(15)` | Delivered Quantity |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  | `INT4(10)` | Numerator (factor) for conversion trans. quantity in BME |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  | `INT4(10)` | Denominator (factor) for conversion trans. quantity in BME |
| `OrderToBaseQuantityExponent` |  | |  |  | `INT2(5)` | 10 Exponent for Quantity Conversion |
| `ServiceDocItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure of Product |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ResponsibleEmployee` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `ContactPerson` |  | |  |  | `CHAR(10)` | Customer Contact Person |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SalesOrganizationOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Organization ID |
| `SalesOfficeOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Office |
| `SalesGroupOrgUnitID` |  | |  |  | `CHAR(14)` | Sales Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ServiceOrganization` |  | |  |  | `CHAR(14)` | Service Organization |
| `ResponsibleSalesOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Sales) |
| `ResponsibleServiceOrganization` |  | |  |  | `CHAR(14)` | Organizational Unit (Service) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Billing Release Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `ProductGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `SrvcMaterialPricingGroup` |  | |  | `ProductGroup` | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductHierarchy` |  | |  |  | `CHAR(20)` | Product Category |
| `ServiceRefObjectSequenceNumber` |  | |  |  | `NUMC(8)` | Reference Object Counter |
| `ServiceReferenceObjectType` |  | |  |  | `CHAR(1)` | Object Type for Reference Object in Subject Set |
| `ServiceReferenceObjectUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ProductID` |  | |  |  | `CHAR(40)` | Material Number |
| `SrvcRefObjIsMainObject` |  | |  |  | `CHAR(1)` | Main Reference Object |
| `ProductUUID` |  | |  |  | `RAW(16)` | Internal Key for Product |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `ServiceDocumentRelationUUID` |  | |  |  | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocumentRelationUUID_2` |  | |  | `ServiceDocumentRelationUUID` | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocRltnSequenceNumber` |  | |  |  | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocRltnSequenceNumber_2` |  | |  | `ServiceDocRltnSequenceNumber` | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `SrvcOrdPredecessorUUID` |  | |  | `ServiceDocumentPredecessorUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `SrvcOrdPrdcssrBusObjType` |  | |  | `ServiceDocPrdcssrBusObjType` | `CHAR(10)` | Object Type |
| `ServiceDocumentItmRelationUUID` |  | |  |  | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `SrvcDocItmRelationUUID_2` |  | |  | `ServiceDocumentItmRelationUUID` | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocItmRltnSqncNumber` |  | |  |  | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocItmRltnSqncNumber_2` |  | |  | `ServiceDocItmRltnSqncNumber` | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `SrvcOrdItmPrdcssrCharUUID` |  | |  | `ServiceDocItmPrdcssrCharUUID` | `CHAR(32)` | 32 Character CRM Object GUID |
| `SrvcOrdItmPrdcssrBusObjType` |  | |  | `ServiceDocItmPrdcssrBusObjType` | `CHAR(10)` | Object Type |
| `SrvcOrdItmPrdcssrCharUUID_2` |  | |  | `ServiceDocItmPrdcssrCharUUID` | `CHAR(32)` | 32 Character CRM Object GUID |
| `SrvcOrdItmPrdcssrBusObjType_2` |  | |  | `ServiceDocItmPrdcssrBusObjType` | `CHAR(10)` | Object Type |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Confirmation'
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000117'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000117'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000117'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                }
//                {
//                    filter: [{operator: #EQ, tableElement: 'objtype_b_sel', value: 'BUS2000117'}],
//                    table: 'crmd_brelvonae', role: #LEFT_OUTER_TO_ONE_JOIN,
//                    viewElement: ['ServiceDocumentRelationUUID', 'ServiceDocRltnSequenceNumber'],
//                    tableElement: ['relationid', 'posno']
//                },
//                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000117'}],
//                    table: 'crmd_brelvonai', role: #LEFT_OUTER_TO_ONE_JOIN,
//                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
//                    tableElement: ['relationid', 'posno']
//                }
            ]
        }
    }
 }
@Analytics.technicalName: 'CSRVCCONFITMDEX'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
   modelingPattern: #NONE
}
@ObjectModel.sapObjectNodeType.name: 'ServiceConfirmationItem'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceConfirmationItemDEX
  as select from           I_ServiceDocumentItemEnhcd     as ServiceOrderItem
    left outer to one join I_ServiceDocumentEnhcd         as ServiceOrder               on  ServiceOrder.ServiceObjectType     = 'BUS2000117'
                                                                                        and ServiceOrderItem.ServiceObjectType = 'BUS2000117'
                                                                                        and ServiceOrderItem.ServiceDocument   = ServiceOrder.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject     as ServiceOrdItemRefObj       on  ServiceOrdItemRefObj.ServiceObjectType      = 'BUS2000117'
                                                                                        and ServiceOrdItemRefObj.ServiceDocument        = ServiceOrderItem.ServiceDocument
                                                                                        and ServiceOrdItemRefObj.ServiceDocumentItem    = ServiceOrderItem.ServiceDocumentItem
                                                                                        and ServiceOrdItemRefObj.SrvcRefObjIsMainObject = 'X'

    left outer to one join I_ServiceDocumentItemPrdcssr_2 as ServiceDocumentItemPrdcssr on  ServiceOrderItem.ServiceDocumentItemCharUUID   = ServiceDocumentItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                        and ServiceOrderItem.ServiceDocumentItemObjectType = ServiceDocumentItemPrdcssr.ServiceDocumentItemObjectType
                                                                                        and ServiceOrderItem.ServiceDocumentItemObjectType = 'BUS2000137'

    left outer to one join I_ServiceDocumentItemPrdcssr_2 as ServiceOrderItemPrdcssr    on  ServiceOrderItem.ServiceDocumentItemCharUUID          = ServiceOrderItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                        and ServiceOrderItem.ServiceDocumentItemObjectType        = ServiceOrderItemPrdcssr.ServiceDocumentItemObjectType
                                                                                        and ServiceOrderItemPrdcssr.ServiceDocumentItemObjectType = 'BUS2000137'

    left outer to one join I_ServiceDocumentPredecessor   as ServiceDocumentPredecessor on  ServiceOrder.ServiceDocumentUUID                       = ServiceDocumentPredecessor.ServiceDocumentUUID
                                                                                        and ServiceOrder.ServiceObjectType                         = ServiceDocumentPredecessor.ServiceObjectType
                                                                                        and ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType = 'BUS2000116'

  association [0..1] to E_ServiceDocumentItem as _ServiceDocItemExt  on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                     and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                     and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

  association [0..1] to E_ServiceDocument     as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                     and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder

{
      /* Service Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceOrderItem.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceOrderItem.ServiceDocument,
  key ServiceOrderItem.ServiceDocumentItem,

      /* Header Details */
      ServiceOrder.ServiceDocumentUUID,
      @Semantics.uuid
      ServiceOrder.ServiceDocumentCharUUID,
      ServiceOrder.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrder.ServiceDocNetAmount,
      ServiceOrder.PurchaseOrderByCustomer,
      ServiceOrder.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentHasError,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocIsReleasedForBilling,
      ServiceOrder.ServiceDocBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentIsOpen,
      ServiceOrder.BusinessActivityCategory,
      ServiceOrder.ServiceDocChangedDateTime,
      ServiceOrder.ServiceDocCreationDateTime,
      //      ServiceOrder.ServiceDocumentUrgency,
      //      ServiceOrder.ServiceDocumentImpact,
      //      ServiceOrder.ServiceDocumentProblemCategory,
      //      ServiceOrder.RecommendedServicePriority,
      //      ServiceOrder.ServiceEscalationLevel,
      //      ServiceOrder.ServiceRisk,
      ServiceOrder.RequestedServiceStartDate,
      ServiceOrder.RequestedServiceEndDate,

      /* Item Details */
      ServiceOrderItem.ServiceDocumentItemPriority,
      ServiceOrderItem.ServiceDocumentType,
      ServiceOrderItem.ServiceDocumentItemUUID,
      //      ServiceOrderItem.ServiceDocumentItemCharUUID,
      ServiceOrderItem.ServiceDocumentItemObjectType,
      ServiceOrderItem.ParentServiceDocumentItemUUID,
      ServiceOrderItem.PostingDate,
      ServiceOrderItem.ProfitCenter,
      ServiceOrderItem.ControllingArea,
      ServiceOrderItem.ProfitCenterDeterminationDate,
      ServiceOrderItem.ServiceDocItemCategory,
      ServiceOrderItem.OriginallyRequestedProduct,
      ServiceOrderItem.Product,
      ServiceOrderItem.ActualServiceStartDateTime,
      ServiceOrderItem.ActualServiceEndDateTime,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ServiceOrderItem.ActualServiceDuration,
      //      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      //      @Semantics.unitOfMeasure:true
      ServiceOrderItem.ActualServiceDurationUnit,
      //      ServiceOrderItem.ServiceWorkDuration,
      //      ServiceOrderItem.ServiceWorkDurationUnit,
      ServiceOrderItem.TimeSheetOvertimeCategory,

      /* Item - Cumulated Value */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrderItem.InvoiceAmountInInvoiceDocCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.SrvcDocItmRequestedQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.InvoiceQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.SrvcDocItmDeliveredQuantity,
      //      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      //      ServiceOrderItem.SrvcDocItmReleasedQuantity,
      //      @DefaultAggregation: #SUM
      //      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      //      ServiceOrderItem.SrvcDocItmReldAmtInTransCrcy,

      /* Item - Schedule Line */
      //      @DefaultAggregation: #SUM
      //      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      //      ServiceOrderItem.ServiceDocumentItemQuantity,

      /* Item - Product */
      ServiceOrderItem.SrvcDocItmOrdToBaseQtyNmrtr,
      ServiceOrderItem.SrvcDocItmOrdToBaseQtyDnmntr,
      ServiceOrderItem.OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      ServiceOrderItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      ServiceOrderItem.SrvcDocItemBaseQuantityUnit,

      /* Partner  */
      ServiceOrderItem.ServiceTeam,
      ServiceOrderItem.SoldToParty,
      ServiceOrderItem.SoldToPartyCountry,
      ServiceOrderItem.SoldToPartyRegion,
      ServiceOrderItem.ResponsibleEmployee,
      ServiceOrderItem.ContactPerson,

      /* Pricing Parameter Set */
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceOrderItem.TransactionCurrency,
      ServiceOrderItem.StatisticsCurrency,
      ServiceOrderItem.ExchangeRateType,
      ServiceOrderItem.ExchangeRateDate,
      ServiceOrderItem.AccountingExchangeRate,
      ServiceOrderItem.CustomerGroup,
      ServiceOrderItem.BillableControl,

      /* Billing Set */
      ServiceOrderItem.BillingBlockReason,

      /* Item - Sales Set */
      ServiceOrderItem.AdditionalCustomerGroup1,
      ServiceOrderItem.AdditionalCustomerGroup2,
      ServiceOrderItem.AdditionalCustomerGroup3,
      ServiceOrderItem.AdditionalCustomerGroup4,
      ServiceOrderItem.AdditionalCustomerGroup5,

      /* Organization Unit Set */
      ServiceOrderItem.SalesOrganizationOrgUnitID,
      ServiceOrderItem.SalesOfficeOrgUnitID,
      ServiceOrderItem.SalesGroupOrgUnitID,
      ServiceOrderItem.DistributionChannel,
      ServiceOrderItem.Division,
      ServiceOrderItem.ServiceOrganization,
      ServiceOrderItem.ResponsibleSalesOrganization,
      ServiceOrderItem.ResponsibleServiceOrganization,

      /* Organizational units with the S/4 SD codes */
      ServiceOrderItem.SalesOrganization,
      ServiceOrderItem.SalesOffice,
      ServiceOrderItem.SalesGroup,

      /* Item - Service */
      //      @DefaultAggregation: #SUM
      //      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      //      ServiceOrderItem.ServiceDuration,
      //      ServiceOrderItem.ServiceDurationUnit,

      /* Status */
      ServiceOrderItem.ServiceDocumentItemStatus,
      //      ServiceOrderItem.ServiceDocumentItemIsReleased,
      //      ServiceOrderItem.ServiceDocumentItemIsQuotation,
      @Semantics.booleanIndicator: true
      ServiceOrderItem.ServiceDocumentItemHasError,
      //      ServiceOrderItem.SrvcDocItmDeliveryStatus,
      //      ServiceOrderItem.SrvcDocItmGoodsIssueStatus,
      ServiceOrderItem.ServiceDocItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceOrderItem.SrvcDocItmIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceOrderItem.ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator: true
      ServiceOrderItem.ServiceDocumentItemIsOpen,
      //      ServiceOrderItem.QuotationIsAccepted,

      /* Item - Pricing */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrderItem.ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrderItem.ServiceDocItemGrossAmount,

      /* Item Product */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcMaterialPricingGroup'
      ServiceOrderItem.ProductGroup,
      ServiceOrderItem.ProductGroup                             as SrvcMaterialPricingGroup,
      ServiceOrderItem.ProductGroup1,
      ServiceOrderItem.ProductGroup2,
      ServiceOrderItem.ProductGroup3,
      ServiceOrderItem.ProductGroup4,
      ServiceOrderItem.ProductGroup5,
      ServiceOrderItem.ProductHierarchy,

      /* Service Subject */
      //      ServiceOrderItem.ServiceSchema1Category1UUID,
      //      ServiceOrderItem.ServiceSchema1Category2UUID,
      //      ServiceOrderItem.ServiceSchema1Category3UUID,
      //      ServiceOrderItem.ServiceSchema1Category4UUID,
      //      ServiceOrderItem.ServiceSchema1Category5UUID,
      //      ServiceOrderItem.ServiceSchema1Category6UUID,
      //      ServiceOrderItem.ServiceSchema1Category7UUID,
      //      ServiceOrderItem.ServiceSchema1Category8UUID,
      //      ServiceOrderItem.ServiceSchema1Category9UUID,
      //      ServiceOrderItem.ServiceSchema1Category10UUID,
      //      ServiceOrderItem.SrvcCatztnSchema1,
      //      ServiceOrderItem.SrvcCatztnSchemaCategory1,
      //
      //      ServiceOrderItem.ServiceSchema2Category1UUID,
      //      ServiceOrderItem.ServiceSchema2Category2UUID,
      //      ServiceOrderItem.ServiceSchema2Category3UUID,
      //      ServiceOrderItem.ServiceSchema2Category4UUID,
      //      ServiceOrderItem.ServiceSchema2Category5UUID,
      //      ServiceOrderItem.ServiceSchema2Category6UUID,
      //      ServiceOrderItem.ServiceSchema2Category7UUID,
      //      ServiceOrderItem.ServiceSchema2Category8UUID,
      //      ServiceOrderItem.ServiceSchema2Category9UUID,
      //      ServiceOrderItem.ServiceSchema2Category10UUID,
      //      ServiceOrderItem.SrvcCatztnSchema2,
      //      ServiceOrderItem.SrvcCatztnSchemaCategory2,

      /* Reference Object Details */
      ServiceOrdItemRefObj.ServiceRefObjectSequenceNumber,
      ServiceOrdItemRefObj.ServiceReferenceObjectType,
      ServiceOrdItemRefObj.ServiceReferenceObjectUUID,
      ServiceOrdItemRefObj.ProductID,
      ServiceOrdItemRefObj.SrvcRefObjIsMainObject,
      ServiceOrdItemRefObj.ProductUUID,
      ServiceOrdItemRefObj.SerialNumber,
      ServiceOrdItemRefObj.Equipment,
      ServiceOrdItemRefObj.FunctionalLocation,

      //      /* Predecessor fields */

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ServiceDocumentRelationUUID_2'
      ServiceDocumentPredecessor.ServiceDocumentRelationUUID,
      ServiceDocumentPredecessor.ServiceDocumentRelationUUID    as ServiceDocumentRelationUUID_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ServiceDocRltnSequenceNumber_2'
      ServiceDocumentPredecessor.ServiceDocRltnSequenceNumber,
      ServiceDocumentPredecessor.ServiceDocRltnSequenceNumber   as ServiceDocRltnSequenceNumber_2,
      ServiceDocumentPredecessor.ServiceDocumentPredecessorUUID as SrvcOrdPredecessorUUID,
      ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType    as SrvcOrdPrdcssrBusObjType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocItmRelationUUID_2'
      ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID,
      ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID as SrvcDocItmRelationUUID_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ServiceDocItmRltnSqncNumber_2'
      ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber,
      ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber    as ServiceDocItmRltnSqncNumber_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcOrdItmPrdcssrCharUUID_2'
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID   as SrvcOrdItmPrdcssrCharUUID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcOrdItmPrdcssrBusObjType_2'
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType as SrvcOrdItmPrdcssrBusObjType,
      ServiceOrderItemPrdcssr.ServiceDocItmPrdcssrCharUUID      as SrvcOrdItmPrdcssrCharUUID_2,
      ServiceOrderItemPrdcssr.ServiceDocItmPrdcssrBusObjType    as SrvcOrdItmPrdcssrBusObjType_2,


      /*  Associations  */
      /* Keys */
      ServiceOrderItem._ServiceObjType,
      ServiceOrderItem._ServiceDocument,

      /* Item - Product */
      ServiceOrderItem._BaseUnit_2,
      ServiceOrderItem._SalesUnit,

      /* Pricing Parameter Set */
      ServiceOrderItem._TransactionCurrency

}
where
  ServiceOrderItem.ServiceObjectType = 'BUS2000117'
```
