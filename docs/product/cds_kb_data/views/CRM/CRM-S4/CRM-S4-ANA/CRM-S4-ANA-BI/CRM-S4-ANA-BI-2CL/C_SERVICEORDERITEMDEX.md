---
name: C_SERVICEORDERITEMDEX
description: "Service OrderITEMDEX"
semantic_vi: "View Service Order ITEMDEX cung cấp dữ liệu chi tiết về các đơn hàng dịch vụ, bao gồm các mục đơn hàng dịch vụ, số lượng và giá trị tiền tệ."
keywords:
  - "service order"
  - "đơn hàng dịch vụ"
  - "item-level data"
  - "service document"
  - "service order item"
  - "mục đơn hàng dịch vụ"
  - "service order analysis"
  - "thống kê đơn hàng dịch vụ"
  - "crm"
  - "ekko"
  - "purchase order"
semantic_en: "The Service Order ITEMDEX view provides item-level data for service orders, including service document items, quantities, and monetary values. It is used to analyze and report on service order items."
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
  - service-order
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICEORDERITEMDEX

**Service OrderITEMDEX**

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
| `ServiceDocumentIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentIsQuotation` |  | |  |  | `CHAR(1)` | Quotation Status |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Release Status for Cumulated Billing |
| `ServiceDocumentIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `BusinessActivityCategory` |  | |  |  | `CHAR(3)` | Activity Category (Communication Type) |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocumentUrgency` |  | |  |  | `NUMC(2)` | Urgency |
| `ServiceDocumentImpact` |  | |  |  | `NUMC(2)` | Impact |
| `ServiceDocumentProblemCategory` |  | |  |  | `CHAR(3)` | Problem Category |
| `RecommendedServicePriority` |  | |  |  | `NUMC(1)` | Recommended Priority |
| `ServiceEscalationLevel` |  | |  |  | `NUMC(1)` | Escalation |
| `ServiceRisk` |  | |  |  | `NUMC(3)` | Risk |
| `RequestedServiceStartDate` |  | |  |  | `DATS(8)` | Created On |
| `RequestedServiceEndDate` |  | |  |  | `DATS(8)` | Changed On |
| `ServiceDocumentItemPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PlannedServiceStartDateTime` |  | |  |  | `DEC(15)` | Service Planned From Date |
| `PlannedServiceEndDateTime` |  | |  |  | `DEC(15)` | Service Planned To Date |
| `SrvcOrderConfirmationRelevance` |  | |  |  | `CHAR(1)` | Relevant for Confirmation |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  | `CURR(19)` | Invoice Value |
| `SrvcDocItmRequestedQuantity` |  | |  |  | `QUAN(15)` | Ordered Quantity |
| `InvoiceQuantity` |  | |  |  | `QUAN(15)` | Invoiced Quantity |
| `SrvcDocItmDeliveredQuantity` |  | |  |  | `QUAN(15)` | Delivered Quantity |
| `SrvcDocItmReleasedQuantity` |  | |  |  | `QUAN(15)` | Released Quantity |
| `CumulativeConfirmedQuantity` |  | |  |  | `QUAN(13)` | CRM: Confirmed Quantity |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  |  | `CURR(19)` | Released Value |
| `ServiceDocumentItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
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
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
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
| `SrvcDocItemSLADueByDateTime` |  | |  |  | `DEC(15)` | Due By |
| `ServiceDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Duration of Work |
| `ServiceDuration` |  | |  |  | `QUAN(13)` | Duration |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentItemIsQuotation` |  | |  |  | `CHAR(1)` | Quotation Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `SrvcDocItmGoodsIssueStatus` |  | |  |  | `CHAR(1)` | Goods Issue Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Billing Release Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `QuotationIsAccepted` |  | |  |  | `CHAR(1)` | Acceptance Status |
| `SrvcDocItemIsUnplanned` |  | |  |  | `CHAR(1)` | Unplanned Item |
| `SrvcDocItemExecutionStatus` |  | |  |  | `CHAR(2)` | Execution Status |
| `SrvcDocItemCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Item |
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
| `ServiceDocItemRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
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
| `ServiceDocRltnSequenceNumber` |  | |  |  | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocumentPredecessorUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocPrdcssrBusObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `SrvcContrPredecessorUUID` |  | |  | `ServiceDocumentPredecessorUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `SrvcContrPrdcssrBusObjType` |  | |  | `ServiceDocPrdcssrBusObjType` | `CHAR(10)` | Object Type |
| `ServiceDocumentItmRelationUUID` |  | |  |  | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocItmRltnSqncNumber` |  | |  |  | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `ServiceDocItmPrdcssrCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID |
| `ServiceDocItmPrdcssrBusObjType` |  | |  |  | `CHAR(10)` | Object Type |
| `SrvcContrItmPrdcssrCharUUID` |  | |  | `ServiceDocItmPrdcssrCharUUID` | `CHAR(32)` | 32 Character CRM Object GUID |
| `SrvcContrItmPrdcssrBusObjType` |  | |  | `ServiceDocItmPrdcssrBusObjType` | `CHAR(10)` | Object Type |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Order'
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
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000116'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                },
                {
//                    filter: [{operator: #EQ, tableElement: 'objtype_b_sel', value: 'BUS2000116'}],
                    table: 'crmd_brelvonae', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceDocumentRelationUUID', 'ServiceDocRltnSequenceNumber'],
                    tableElement: ['relationid', 'posno']
                },
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000116'}],
                    table: 'crmd_brelvonai', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
                    tableElement: ['relationid', 'posno']
                }

/* Changes removed
//                {
////                    filter: [{operator: #EQ, tableElement: 'objtype_b_sel', value: 'BUS2000116'}],
//                    table: 'crmd_brelvonae', role: #LEFT_OUTER_TO_ONE_JOIN,
//                    viewElement: ['ServiceDocumentRelationUUID', 'ServiceDocRltnSequenceNumber'],
//                    tableElement: ['relationid', 'posno']
//                },
//                {
////                   filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000116'}],
//                    table: 'crmd_brelvonai', role: #LEFT_OUTER_TO_ONE_JOIN,
//                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
//                    tableElement: ['relationid', 'posno']
//                }
*/
            ]
        }
    }
 }
@Analytics.technicalName: 'CSRVCORDITMDEX'
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
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name: 'ServiceOrderItem'
@Metadata.ignorePropagatedAnnotations: true

/*
  Service Order Extractor
  Note:
    1. Following Service Orders are extracted [excluding Quotations]
       a. Service Order
       b. Service Order Template
    2. Service Order Items along with some Header fields are projected
    3. BW extracts all projected fields and performance is not relevant
    4. Out of box predecessor UUID fields are projected which indicates Service Contract only.
        For any other predecessor types you may have to join explicitly!

*/

define view entity C_ServiceOrderItemDEX
  as select from           I_ServiceDocumentItemEnhcd     as ServiceOrderItem
    left outer to one join I_ServiceDocumentEnhcd         as ServiceOrder               on  ServiceOrder.ServiceObjectType     = 'BUS2000116'
                                                                                        and ServiceOrderItem.ServiceObjectType = 'BUS2000116'
                                                                                        and ServiceOrderItem.ServiceDocument   = ServiceOrder.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject     as ServiceOrdItemRefObj       on  ServiceOrdItemRefObj.ServiceObjectType      = 'BUS2000116'
                                                                                        and ServiceOrdItemRefObj.ServiceDocument        = ServiceOrderItem.ServiceDocument
                                                                                        and ServiceOrdItemRefObj.ServiceDocumentItem    = ServiceOrderItem.ServiceDocumentItem
                                                                                        and ServiceOrdItemRefObj.SrvcRefObjIsMainObject = 'X'

    left outer to one join I_ServiceDocumentItemPrdcssr_2 as ServiceDocumentItemPrdcssr on  ServiceOrderItem.ServiceDocumentItemCharUUID   = ServiceDocumentItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                        and ServiceOrderItem.ServiceDocumentItemObjectType = ServiceDocumentItemPrdcssr.ServiceDocumentItemObjectType
                                                                                        and ServiceOrderItem.ServiceDocumentItemObjectType = 'BUS2000137'
  /* Changes removed
      left outer to one join I_ServiceDocumentItemPrdcssr_2 as ServiceContractItemPrdcssr on  ServiceOrderItem.ServiceDocumentItemCharUUID   = ServiceContractItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                          and ServiceOrderItem.ServiceDocumentItemObjectType = ServiceContractItemPrdcssr.ServiceDocumentItemObjectType
                                                                                          and ServiceOrderItem.ServiceDocumentItemObjectType = 'BUS2000137'

  */
    left outer to one join I_ServiceDocumentPredecessor   as ServiceDocumentPredecessor on  ServiceOrder.ServiceDocumentUUID                       = ServiceDocumentPredecessor.ServiceDocumentUUID
                                                                                        and ServiceOrder.ServiceObjectType                         = ServiceDocumentPredecessor.ServiceObjectType
                                                                                        and ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType = 'BUS2000112'

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
      ServiceOrder.ServiceDocumentCharUUID,
      ServiceOrder.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrder.ServiceDocNetAmount,
      ServiceOrder.PurchaseOrderByCustomer,
      ServiceOrder.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentIsQuotation,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentHasError,
      //      ServiceOrderItem.SrvcDocItmDeliveryStatus,
      //      ServiceOrderItem.SrvcDocItmGoodsIssueStatus,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceOrder.ServiceDocumentIsRejected,
      //      ServiceOrderItem.QuotationIsAccepted,
      ServiceOrder.ServiceDocBillingStatus,
      ServiceOrder.ServiceDocumentIsOpen,
      ServiceOrder.BusinessActivityCategory,
      ServiceOrder.ServiceDocChangedDateTime,
      ServiceOrder.ServiceDocCreationDateTime,
      ServiceOrder.ServiceDocumentUrgency,
      ServiceOrder.ServiceDocumentImpact,
      ServiceOrder.ServiceDocumentProblemCategory,
      ServiceOrder.RecommendedServicePriority,
      ServiceOrder.ServiceEscalationLevel,
      ServiceOrder.ServiceRisk,
      ServiceOrder.RequestedServiceStartDate,
      ServiceOrder.RequestedServiceEndDate,

      /* Item Details */
      ServiceOrderItem.ServiceDocumentItemPriority,
      ServiceOrderItem.ServiceDocumentType,
      ServiceOrderItem.ServiceDocumentItemUUID,
      ServiceOrderItem.ServiceDocumentItemCharUUID,
      ServiceOrderItem.ServiceDocumentItemObjectType,
      ServiceOrderItem.ParentServiceDocumentItemUUID,
      ServiceOrderItem.PostingDate,
      ServiceOrderItem.ProfitCenter,
      ServiceOrderItem.ControllingArea,
      ServiceOrderItem.ProfitCenterDeterminationDate,
      ServiceOrderItem.ServiceDocItemCategory,
      ServiceOrderItem.OriginallyRequestedProduct,
      ServiceOrderItem.Product,
      ServiceOrderItem.PlannedServiceStartDateTime,
      ServiceOrderItem.PlannedServiceEndDateTime,
      ServiceOrderItem.SrvcOrderConfirmationRelevance,

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
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.SrvcDocItmReleasedQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.CumulativeConfirmedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceOrderItem.SrvcDocItmReldAmtInTransCrcy,

      /* Item - Schedule Line */
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceOrderItem.ServiceDocumentItemQuantity,

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
      ServiceOrderItem.SrvcSEPAMandateRelevance,
      ServiceOrderItem.SEPAMandate,

      ServiceOrderItem.PaymentTerms,

      ServiceOrderItem.PaymentMethod,
      ServiceOrderItem.WBSElementInternalID,



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

      /* Date */
      ServiceOrderItem.SrvcDocItemSLADueByDateTime,

      /* Item - Service */
      ServiceOrderItem.ServiceDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'SRVCDOCITEMBASEQUANTITYUNIT'
      ServiceOrderItem.ServiceDuration,

      /* Status */
      ServiceOrderItem.ServiceDocumentItemStatus,
      ServiceOrderItem.ServiceDocumentItemIsReleased,
      ServiceOrderItem.ServiceDocumentItemIsQuotation,
      ServiceOrderItem.ServiceDocumentItemHasError,
      ServiceOrderItem.SrvcDocItmDeliveryStatus,
      ServiceOrderItem.SrvcDocItmGoodsIssueStatus,
      ServiceOrderItem.ServiceDocItemBillingStatus,
      ServiceOrderItem.SrvcDocItmIsReleasedForBilling,
      ServiceOrderItem.ServiceDocumentItemIsRejected,
      ServiceOrderItem.ServiceDocumentItemIsOpen,
      ServiceOrderItem.QuotationIsAccepted,
      ServiceOrderItem.SrvcDocItemIsUnplanned,
      ServiceOrderItem.SrvcDocItemExecutionStatus,

      /* Credit Status */
      ServiceOrderItem.SrvcDocItemCreditStatus,

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

      /* Item - Sales Set */

      ServiceOrderItem.ServiceDocItemRejectionReason,

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

      /* Predecessor fields */
      ServiceDocumentPredecessor.ServiceDocumentRelationUUID,
      ServiceDocumentPredecessor.ServiceDocRltnSequenceNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcContrPredecessorUUID'
      ServiceDocumentPredecessor.ServiceDocumentPredecessorUUID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcContrPrdcssrBusObjType'
      ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType,
      ServiceDocumentPredecessor.ServiceDocumentPredecessorUUID as SrvcContrPredecessorUUID,
      ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType    as SrvcContrPrdcssrBusObjType,
      ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcContrItmPrdcssrCharUUID'
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcContrItmPrdcssrBusObjType'
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID   as SrvcContrItmPrdcssrCharUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType as SrvcContrItmPrdcssrBusObjType,

      /* Changes removed
            @API.element.releaseState: #DEPRECATED
            ServiceDocumentPredecessor.ServiceDocumentRelationUUID,
            @API.element.releaseState: #DEPRECATED
            ServiceDocumentPredecessor.ServiceDocRltnSequenceNumber,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrPredecessorUUID'
            ServiceDocumentPredecessor.ServiceDocumentPredecessorUUID,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrPrdcssrBusObjType'
            ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType,
            ServiceDocumentPredecessor.ServiceDocumentPredecessorUUID as SrvcContrPredecessorUUID,
            ServiceDocumentPredecessor.ServiceDocPrdcssrBusObjType    as SrvcContrPrdcssrBusObjType,
            @API.element.releaseState: #DEPRECATED
            ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID,
            @API.element.releaseState: #DEPRECATED
            ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrItmPrdcssrCharUUID'
            ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrItmPrdcssrBusObjType'
            ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrItmPrdcssrCharUUID_2'
            ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID   as SrvcContrItmPrdcssrCharUUID,
            @API.element.releaseState: #DEPRECATED
            @API.element.successor: 'SrvcContrItmPrdcssrBusObjType_2'
            ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType as SrvcContrItmPrdcssrBusObjType,
            ServiceContractItemPrdcssr.ServiceDocItmPrdcssrCharUUID   as SrvcContrItmPrdcssrCharUUID_2,
            ServiceContractItemPrdcssr.ServiceDocItmPrdcssrBusObjType as SrvcContrItmPrdcssrBusObj_2,
      */

      /* Solution Order */
      ServiceOrderItem.RefBusinessSolutionOrder,
      ServiceOrderItem.RefBusinessSolutionOrderItem,

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
      ServiceOrderItem.ServiceObjectType              =  'BUS2000116'
  and ServiceOrderItem.ServiceDocumentItemIsQuotation != 'X'
  and ServiceOrder.ServiceDocumentIsQuotation         != 'X'
  and ServiceOrderItem.ServiceDocumentTemplateType    is initial
```
