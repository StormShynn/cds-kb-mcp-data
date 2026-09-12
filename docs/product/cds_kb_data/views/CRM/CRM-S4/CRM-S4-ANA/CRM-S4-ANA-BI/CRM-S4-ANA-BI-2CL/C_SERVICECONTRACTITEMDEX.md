---
name: C_SERVICECONTRACTITEMDEX
description: "Servicecontractitemdex"
semantic_vi: "View CDS Servicecontractitemdex hiển thị chi tiết về các hợp đồng dịch vụ, bao gồm các mục của tài liệu dịch vụ, số lượng và giá trị. Nó được sử dụng để trích xuất và phân tích dữ liệu hợp đồng dịch vụ để có cái nhìn sâu sắc về kinh doanh."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "service document"
  - "tài liệu dịch vụ"
  - "service document item"
  - "mục tài liệu dịch vụ"
  - "service contract item"
  - "mục hợp đồng dịch vụ"
  - "crm"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
semantic_en: "The Servicecontractitemdex CDS view exposes item-level details of service contracts, including service document items, quantities, and amounts. It is used to extract and analyze service contract data for business insights."
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
  - contract
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICECONTRACTITEMDEX

**Servicecontractitemdex**

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
| `RecommendedServicePriority` |  | |  |  | `NUMC(1)` | Recommended Priority |
| `ServiceDocumentItemPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `SrvcDocItmPostingDateTime` |  | |  | `cast(ServiceContractItem.SrvcDocItmPostingDateTime as crms4_order_date_time preserving type )` | `DEC(15)` | Posting Date |
| `SrvcDocItmValdtyStartDateTime` |  | |  |  | `DEC(15)` | Time Dependency: Validity Start Date |
| `SrvcDocItmValdtyEndDateTime` |  | |  |  | `DEC(15)` | Time Dependency: Validity End Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  | `CURR(19)` | Invoice Value |
| `SrvcDocItmRequestedQuantity` |  | |  |  | `QUAN(15)` | Ordered Quantity |
| `InvoiceQuantity` |  | |  |  | `QUAN(15)` | Invoiced Quantity |
| `SrvcDocItmDeliveredQuantity` |  | |  |  | `QUAN(15)` | Delivered Quantity |
| `SrvcDocItmReleasedQuantity` |  | |  |  | `QUAN(15)` | Released Quantity |
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
| `ServiceEmployee` |  | |  |  | `CHAR(10)` | Executing Service Employee |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `SEPAMandate` |  | |  |  | `CHAR(35)` | Unique Reference to Mandate per Payment Recipient |
| `SrvcSEPAMandateRelevance` |  | |  |  | `CHAR(1)` | Indicator for SEPA-Relevant Transactions |
| `BillingBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Billing Block Reason |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `ServiceDocItemRejectionReason` |  | |  |  | `CHAR(2)` | Cancellation Reason Code |
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
| `ServiceContrItemStartDateTime` |  | |  |  | `DEC(15)` | Contract Start date |
| `ServiceContrItemEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `SrvcContrItemRnwlDuration` |  | |  |  | `QUAN(13)` | Unit for Auto Renewal Period |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Auto Renewal Period |
| `SrvcContrItemExtensionDuration` |  | |  |  | `QUAN(13)` | Unit for Contract Extension |
| `SrvcContrItemExtnDurationUnit` |  | |  |  | `UNIT(3)` | UOM for Contract Extension |
| `ServiceDurationUnit` |  | |  |  | `UNIT(3)` | Unit for Duration of Work |
| `ServiceDuration` |  | |  |  | `QUAN(13)` | Duration |
| `ResponseProfile` |  | |  |  | `CHAR(10)` | Response Profile |
| `ServiceProfile` |  | |  |  | `CHAR(10)` | Service Profile |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `SrvcDocItmGoodsIssueStatus` |  | |  |  | `CHAR(1)` | Goods Issue Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  | `CHAR(1)` | Billing Release Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `SrvcMaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductHierarchy` |  | |  |  | `CHAR(20)` | Product Category |
| `BillingPlanIsFinalized` |  | |  |  | `CHAR(1)` | Billing Plan Is Finalized |
| `ServiceRefObjectSequenceNumber` |  | |  |  | `NUMC(8)` | Reference Object Counter |
| `ServiceReferenceObjectType` |  | |  |  | `CHAR(1)` | Object Type for Reference Object in Subject Set |
| `ServiceReferenceObjectUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ProductID` |  | |  |  | `CHAR(40)` | Material Number |
| `SrvcRefObjIsMainObject` |  | |  |  | `CHAR(1)` | Main Reference Object |
| `ProductUUID` |  | |  |  | `RAW(16)` | Internal Key for Product |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `SrvcQtanPredecessorUUID` |  | |  | `ServiceDocumentUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `SrvcQtanPrdcssrBusObjType` |  | |  | `ServiceObjectType` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocumentItmRelationUUID` |  | |  |  | `CHAR(22)` | Object Relationship Service : GUID binary link |
| `ServiceDocItmRltnSqncNumber` |  | |  |  | `NUMC(4)` | Sequential Number of Segment in IDoc Type |
| `SrvcQtanItmPrdcssrCharUUID` |  | |  | `ServiceDocItmPrdcssrCharUUID` | `CHAR(32)` | 32 Character CRM Object GUID |
| `SrvcQtanItmPrdcssrBusObjType` |  | |  | `ServiceDocItmPrdcssrBusObjType` | `CHAR(10)` | Object Type |
| `ServiceDocumentItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceDocumentItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `SrvcDocItmCanclnProcedure` |  | |  |  | `CHAR(4)` | Cancellation Procedure |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `RefBusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Item Number in Referenced Solution Order |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Contract'
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
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                },
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000112'}],
                    table: 'crmd_brelvonai', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
                   tableElement: ['relationid', 'posno']
                }
            ]
        }
    }
 }
@Analytics.technicalName: 'CSRVCCONTRITMDEX'
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
@ObjectModel.sapObjectNodeType.name: 'ServiceContractItem'
@Metadata.ignorePropagatedAnnotations: true

/*

  Service Contract Extractor
  Note:
    1. Service Contract Items along with some Header fields are projected
    2. BW extracts all projected fields and performance is not relevant
    3. Out of box predecessor UUID fields are projected which indicates Service Quotation only.
        For any other predecessor types you may have to join explicitly!

*/

define view entity C_ServiceContractItemDEX
  as select from           I_ServiceDocumentItemEnhcd   as ServiceContractItem
    left outer to one join I_ServiceDocumentEnhcd       as ServiceContract            on  ServiceContract.ServiceObjectType     = 'BUS2000112'
                                                                                      and ServiceContractItem.ServiceObjectType = 'BUS2000112'
                                                                                      and ServiceContractItem.ServiceDocument   = ServiceContract.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject   as ServiceContractItemRefObj  on  ServiceContractItemRefObj.ServiceObjectType      = 'BUS2000112'
                                                                                      and ServiceContractItemRefObj.ServiceDocument        = ServiceContractItem.ServiceDocument
                                                                                      and ServiceContractItemRefObj.ServiceDocumentItem    = ServiceContractItem.ServiceDocumentItem
                                                                                      and ServiceContractItemRefObj.SrvcRefObjIsMainObject = 'X'

    left outer to one join P_SrvcQtanItmFUPSrvcContrItm as ServiceDocumentItemPrdcssr on  ServiceContractItem.ServiceDocumentItemCharUUID   = ServiceDocumentItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                      and ServiceContractItem.ServiceDocumentItemObjectType = ServiceDocumentItemPrdcssr.ServiceDocumentItemObjectType


  association [0..1] to E_ServiceDocumentItem as _ServiceDocItemExt  on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                     and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                     and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

  association [0..1] to E_ServiceDocument     as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                     and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder


{
      /* Service Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceContractItem.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceContractItem.ServiceDocument,
  key ServiceContractItem.ServiceDocumentItem,

      /* Header Details */
      ServiceContract.ServiceDocumentUUID,
      @Semantics.uuid
      ServiceContract.ServiceDocumentCharUUID,
      ServiceContract.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContract.ServiceDocNetAmount,
      ServiceContract.PurchaseOrderByCustomer,
      ServiceContract.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsQuotation,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentHasError,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsRejected,
      ServiceContract.ServiceDocBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsOpen,
      ServiceContract.BusinessActivityCategory,
      ServiceContract.ServiceDocChangedDateTime,
      ServiceContract.ServiceDocCreationDateTime,
      ServiceContract.RecommendedServicePriority,

      /* Item Details */
      ServiceContractItem.ServiceDocumentItemPriority,
      ServiceContractItem.ServiceDocumentType,
      ServiceContractItem.ServiceDocumentItemUUID,
      @Semantics.uuid
      ServiceContractItem.ServiceDocumentItemCharUUID,
      ServiceContractItem.ServiceDocumentItemObjectType,
      ServiceContractItem.ParentServiceDocumentItemUUID,
      ServiceContractItem.PostingDate,
      @Semantics.dateTime:true
      cast(ServiceContractItem.SrvcDocItmPostingDateTime as crms4_order_date_time preserving type ) as SrvcDocItmPostingDateTime,
      ServiceContractItem.SrvcDocItmValdtyStartDateTime,
      ServiceContractItem.SrvcDocItmValdtyEndDateTime,
      ServiceContractItem.ProfitCenter,
      ServiceContractItem.ControllingArea,
      ServiceContractItem.ProfitCenterDeterminationDate,
      ServiceContractItem.ServiceDocItemCategory,
      ServiceContractItem.OriginallyRequestedProduct,
      ServiceContractItem.Product,

      /* Item - Cumulated Value */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.InvoiceAmountInInvoiceDocCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmRequestedQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.InvoiceQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmDeliveredQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.SrvcDocItmReldAmtInTransCrcy,

      /* Item - Schedule Line */
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.ServiceDocumentItemQuantity,

      /* Item - Product */
      ServiceContractItem.SrvcDocItmOrdToBaseQtyNmrtr,
      ServiceContractItem.SrvcDocItmOrdToBaseQtyDnmntr,
      ServiceContractItem.OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      ServiceContractItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      ServiceContractItem.SrvcDocItemBaseQuantityUnit,

      /* Partner  */
      ServiceContractItem.ServiceTeam,
      ServiceContractItem.SoldToParty,
      ServiceContractItem.SoldToPartyCountry,
      ServiceContractItem.SoldToPartyRegion,
      ServiceContractItem.ResponsibleEmployee,
      ServiceContractItem.ContactPerson,
      ServiceContractItem.ServiceEmployee,
      ServiceContractItem.ShipToParty,
      ServiceContractItem.BillToParty,
      ServiceContractItem.PayerParty,

      /* Pricing Parameter Set */
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceContractItem.TransactionCurrency,
      ServiceContractItem.StatisticsCurrency,
      ServiceContractItem.ExchangeRateType,
      ServiceContractItem.ExchangeRateDate,
      ServiceContractItem.AccountingExchangeRate,
      ServiceContractItem.CustomerGroup,
      ServiceContractItem.BillableControl,
      ServiceContractItem.PaymentTerms,
      ServiceContractItem.PaymentMethod,
      ServiceContractItem.WBSElementInternalID,
      ServiceContractItem.SEPAMandate,
      ServiceContractItem.SrvcSEPAMandateRelevance,
      
      /* Billing Set */
      ServiceContractItem.BillingBlockReason,

      /* Item - Sales Set */
      ServiceContractItem.AdditionalCustomerGroup1,
      ServiceContractItem.AdditionalCustomerGroup2,
      ServiceContractItem.AdditionalCustomerGroup3,
      ServiceContractItem.AdditionalCustomerGroup4,
      ServiceContractItem.AdditionalCustomerGroup5,
      ServiceContractItem.ServiceDocItemRejectionReason,

      /* Organization Unit Set */
      ServiceContractItem.SalesOrganizationOrgUnitID,
      ServiceContractItem.SalesOfficeOrgUnitID,
      ServiceContractItem.SalesGroupOrgUnitID,
      ServiceContractItem.DistributionChannel,
      ServiceContractItem.Division,
      ServiceContractItem.ServiceOrganization,
      ServiceContractItem.ResponsibleSalesOrganization,
      ServiceContractItem.ResponsibleServiceOrganization,

      /* Organizational units with the S/4 SD codes */
      ServiceContractItem.SalesOrganization,
      ServiceContractItem.SalesOffice,
      ServiceContractItem.SalesGroup,

      /* Date */
      @Semantics.dateTime:true
      ServiceContractItem.ServiceContrItemStartDateTime,
      @Semantics.dateTime:true
      ServiceContractItem.ServiceContrItemEndDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      ServiceContractItem.SrvcContrItemRnwlDuration,
      ServiceContractItem.SrvcContrItemRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      ServiceContractItem.SrvcContrItemExtensionDuration,
      ServiceContractItem.SrvcContrItemExtnDurationUnit,

      /* Item - Service */
      ServiceContractItem.ServiceDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'SrvcDocItemBaseQuantityUnit' 
      ServiceContractItem.ServiceDuration,
      ServiceContractItem.ResponseProfile,
      ServiceContractItem.ServiceProfile,

      /* Status */
      ServiceContractItem.ServiceDocumentItemStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemHasError,
      ServiceContractItem.SrvcDocItmDeliveryStatus,
      ServiceContractItem.SrvcDocItmGoodsIssueStatus,
      ServiceContractItem.ServiceDocItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItem.SrvcDocItmIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsOpen,
      // ServiceContractItem.QuotationIsAccepted, ...Not in Excel

      /* Item - Pricing */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.ServiceDocItemGrossAmount,

      /* Item Product */
      ServiceContractItem.SrvcMaterialPricingGroup,
      ServiceContractItem.ProductGroup1,
      ServiceContractItem.ProductGroup2,
      ServiceContractItem.ProductGroup3,
      ServiceContractItem.ProductGroup4,
      ServiceContractItem.ProductGroup5,
      ServiceContractItem.ProductHierarchy,
      
      /* Item Billing Plan */
      ServiceContractItem.BillingPlanIsFinalized,

      /* Reference Object Details */
      ServiceContractItemRefObj.ServiceRefObjectSequenceNumber,
      ServiceContractItemRefObj.ServiceReferenceObjectType,
      ServiceContractItemRefObj.ServiceReferenceObjectUUID,
      ServiceContractItemRefObj.ProductID,
      ServiceContractItemRefObj.SrvcRefObjIsMainObject,
      ServiceContractItemRefObj.ProductUUID,
      ServiceContractItemRefObj.SerialNumber,
      ServiceContractItemRefObj.Equipment,
      ServiceContractItemRefObj.FunctionalLocation,

      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceDocumentUUID as SrvcQtanPredecessorUUID,
      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceObjectType   as SrvcQtanPrdcssrBusObjType,

      ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID       as SrvcQtanItmPrdcssrCharUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType     as SrvcQtanItmPrdcssrBusObjType,

      /* Cancellation */
      ServiceContractItem.ServiceDocumentItemCanclnParty,
      ServiceContractItem.ServiceDocumentItmCanclnReason,
      ServiceContractItem.SrvcDocItmCanclnProcedure,

      /* Solution Order */
      ServiceContractItem.RefBusinessSolutionOrder,
      ServiceContractItem.RefBusinessSolutionOrderItem,

      /*  Associations  */
      /* Keys */
      ServiceContractItem._ServiceObjType,
      ServiceContractItem._ServiceDocument,

      /* Item - Product */
      ServiceContractItem._BaseUnit_2,
      ServiceContractItem._SalesUnit,

      /* Pricing Parameter Set */
      ServiceContractItem._TransactionCurrency
      
}
where
      ServiceContractItem.ServiceObjectType           = 'BUS2000112'
  and ServiceContractItem.ServiceDocumentTemplateType is initial
```
