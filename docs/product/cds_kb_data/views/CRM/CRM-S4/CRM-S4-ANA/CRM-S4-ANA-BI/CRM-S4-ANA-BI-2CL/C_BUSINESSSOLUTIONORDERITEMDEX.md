---
name: C_BUSINESSSOLUTIONORDERITEMDEX
description: "Businesssolutionorderitemdex"
semantic_vi: "Chứa dữ liệu chi tiết đơn hàng giải pháp kinh doanh, thường được sử dụng cho mục đích phân tích và báo cáo trong ứng dụng CRM."
keywords:
  - "business solution order"
  - "đơn hàng giải pháp kinh doanh"
  - "crm"
  - "analytics"
  - "reporting"
  - "service document"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "service document item"
semantic_en: "Exposes business solution order item data, typically used for analytics and reporting purposes in CRM applications."
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
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_BUSINESSSOLUTIONORDERITEMDEX

**Businesssolutionorderitemdex**

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
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocumentIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocChangedDateTime` |  | |  |  | `DEC(15)` | Changed At |
| `ServiceDocCreationDateTime` |  | |  |  | `DEC(15)` | Created At |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceDocumentItemObjectType` |  | |  |  | `CHAR(10)` | CRM Item Object Type |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocumentItemCharUUID` |  | |  |  | `CHAR(32)` | 32 Character CRM Object GUID (Converted) |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenterDeterminationDate` |  | |  |  | `DATS(8)` | Date |
| `ParentServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `ServiceDocItemCategory` |  | |  |  | `CHAR(4)` | Item Category |
| `OriginallyRequestedProduct` |  | |  |  | `CHAR(54)` | Product Name Entered |
| `ProductID` |  | |  | `Product` | `CHAR(40)` | Product |
| `ServiceDocumentItemQuantity` |  | |  |  | `QUAN(13)` | CRM: Order Quantity |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  | `INT4(10)` | Numerator (factor) for conversion trans. quantity in BME |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  | `INT4(10)` | Denominator (factor) for conversion trans. quantity in BME |
| `OrderToBaseQuantityExponent` |  | |  |  | `INT2(5)` | 10 Exponent for Quantity Conversion |
| `ServiceDocItemQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure in Which the Product Is Sold |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure of Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `IncotermsPart1` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsPart2` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Delivery Control (Item) |
| `OrderCombinationIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Order Combination |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Business Partner: Delivery Block Reason |
| `RequestedDeliveryUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `ServiceTeam` |  | |  |  | `CHAR(10)` | Service Team |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ResponsibleEmployee` |  | |  | `cast( SolutionOrderItem.ResponsibleEmployee as resp_empl )` | `NUMC(8)` | Employee Responsible |
| `ContactPerson` |  | |  | `cast( SolutionOrderItem.ContactPerson as parnr )` | `NUMC(10)` | Number of Contact Person |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-To Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-To Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `ProjectManager` |  | |  | `CustMgmtBusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ReferenceCurrency` |  | |  | `StatisticsCurrency` | `CUKY(5)` | Reference Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `AccountingExchangeRate` |  | |  | `cast( SolutionOrderItem.AccountingExchangeRate as fis_exchange_rate preserving type )` | `DEC(9)` | Exchange Rate |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
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
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code of the sales organization |
| `ServiceDocumentItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentItemIsReleased` |  | |  |  | `CHAR(1)` | Release Status |
| `ServiceDocumentItemHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `SrvcDocItmDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status |
| `ServiceDocItemBillingStatus` |  | |  |  | `CHAR(1)` | Billing Status |
| `ServiceDocumentItemIsRejected` |  | |  |  | `CHAR(1)` | Cancellation Status |
| `ServiceDocumentItemIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `SrvcDocItemCreditStatus` |  | |  |  | `CHAR(1)` | Credit Status of Item |
| `ServiceDocumentItemNetAmount` |  | |  |  | `CURR(15)` | Net Value |
| `ServiceDocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Order Value in PO Currency |
| `SrvcMaterialPricingGroup` |  | |  |  | `CHAR(2)` | Material Price Group |
| `ProductGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `ProductGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `ProductGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `ProductGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `ProductGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductHierarchy` |  | |  | `cast( SolutionOrderItem.ProductHierarchy as prodh_d )` | `CHAR(18)` | Product Hierarchy |
| `SrvcRefObjIsMainObject` |  | |  |  | `CHAR(1)` | Main Reference Object |
| `ProductUUID` |  | |  |  | `RAW(16)` | Internal Key for Product |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `ServiceRefObjectSequenceNumber` |  | |  |  | `NUMC(8)` | Reference Object Counter |
| `ServiceReferenceObjectType` |  | |  |  | `CHAR(1)` | Object Type for Reference Object in Subject Set |
| `ServiceReferenceObjectUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `FunctionalLocation` |  | |  | `cast( SolutionOrdItemRefObj.FunctionalLocation as vdm_eam_tplnr )` | `CHAR(30)` | Functional Location |
| `ProjectStartDate` |  | |  | `tstmp_to_dats( SolutionDocumentProjStart.SrvcDocApptStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ProjectEndDate` |  | |  | `tstmp_to_dats( SolutionDocumentProjEnd.SrvcDocApptStartDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` | `DATS(8)` |  |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `EnterpriseProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization (Project) |
| `ServiceContrItemStartDateTime` |  | |  | `cast( SolutionOrderItem.ServiceContrItemStartDateTime as sc_tstfro )` | `DEC(15)` | Time Stamp (UTC) of Start Time of Appointment |
| `ServiceContrItemEndDateTime` |  | |  | `cast( SolutionOrderItem.ServiceContrItemEndDateTime as sc_tstto )` | `DEC(15)` | Time stamp of end of appointment |
| `SubscrpnBillgItmPrcgDateTime` |  | |  | `SrvcDocApptStartDateTime` | `DEC(15)` | Time Stamp (UTC) of Start Time of Appointment |
| `SubscrpnWithdrawalPeriod` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `SubscriptionFixedTerm` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `SubscriptionTermOfNotice` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `SubscriptionMinimumTerm` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `SubscriptionRenewalPeriod` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `SubscriptionExpectedTerm` |  | |  | `SrvcDocDurationValue` | `DEC(13)` | Numerical Value of Duration |
| `MidBillgCycExprtnIsAllowed` |  | |  |  | `CHAR(1)` | Allow Mid-Bill-Cycle Expiration |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  | `CHAR(1)` | Overwrite Default Terms |
| `SubscriptionBillingCycle` |  | |  |  | `CHAR(4)` | Billing Cycle |
| `SubscrpnBillgRatePlanCharUUID` |  | |  |  | `CHAR(32)` | Rate Plan ID |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Project UUID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SolutionDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_SolutionDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Bussiness Solution Order'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'CBSOLORDITMDEX',
  compiler.compareFilter: true,
  preserveKey: true
}
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
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000172'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
   modelingPattern: #NONE
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@Metadata.ignorePropagatedAnnotations: true

/*

  Business Solution Order Extractor
  Note:
    1. Solution Order Items along with some Header fields are projected
    2. BW extracts all projected fields and performance is not relevant


*/

define view C_BusinessSolutionOrderItemDEX
  as select from           I_ServiceDocumentItemEnhcd    as SolutionOrderItem
    left outer to one join I_ServiceDocumentEnhcd        as SolutionOrder              on  SolutionOrder.ServiceObjectType     = 'BUS2000172'
                                                                                       and SolutionOrderItem.ServiceObjectType = 'BUS2000172'
                                                                                       and SolutionOrderItem.ServiceDocument   = SolutionOrder.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject    as SolutionOrdItemRefObj      on  SolutionOrdItemRefObj.ServiceObjectType      = 'BUS2000172'
                                                                                       and SolutionOrdItemRefObj.ServiceDocument        = SolutionOrderItem.ServiceDocument
                                                                                       and SolutionOrdItemRefObj.ServiceDocumentItem    = SolutionOrderItem.ServiceDocumentItem
                                                                                       and SolutionOrdItemRefObj.SrvcRefObjIsMainObject = 'X'
  
    left outer to one join I_CustMgmtPartner             as SolutionCustmMgmtPartner   on  SolutionOrderItem.ServiceDocument                     = SolutionCustmMgmtPartner.CustMgmtDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem                 = SolutionCustmMgmtPartner.CustMgmtDocumentItem
                                                                                       and SolutionCustmMgmtPartner.CustMgmtObjectType           = 'BUS2000172'
                                                                                       and SolutionCustmMgmtPartner.CustMgmtPartFunctionCategory = '0093'

    left outer to one join I_SrvcDocAppointment          as SolutionDocumentProjStart  on  SolutionOrderItem.ServiceDocumentItemUUID        = SolutionDocumentProjStart.SrvcMgmtObjectUUID
                                                                                       and SolutionDocumentProjStart.SrvcDocAppointmentType = 'PROJSTART'

    left outer to one join I_SrvcDocAppointment          as SolutionDocumentProjEnd    on  SolutionOrderItem.ServiceDocumentItemUUID      = SolutionDocumentProjEnd.SrvcMgmtObjectUUID
                                                                                       and SolutionDocumentProjEnd.SrvcDocAppointmentType = 'PROJEND'

    left outer to one join I_SrvcDocAppointment          as SolutionSubsPrcgDate       on  SolutionOrderItem.ServiceDocumentItemUUID   = SolutionSubsPrcgDate.SrvcMgmtObjectUUID
                                                                                       and SolutionSubsPrcgDate.SrvcDocAppointmentType = 'SUBS_PRIC_DT'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsWitPer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsWitPer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsWitPer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsWitPer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsWitPer.SrvcDocDurationType = 'SUBS_WIT_PER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsFixTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsFixTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsFixTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsFixTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsFixTer.SrvcDocDurationType = 'SUBS_FIX_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsTerNot on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsTerNot.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsTerNot.ServiceDocumentItem
                                                                                       and SolutionDurationSubsTerNot.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsTerNot.SrvcDocDurationType = 'SUBS_TER_NOT'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsMinTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsMinTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsMinTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsMinTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsMinTer.SrvcDocDurationType = 'SUBS_MIN_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsRenTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsRenTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsRenTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsRenTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsRenTer.SrvcDocDurationType = 'SUBS_REN_TER'

    left outer to one join I_ServiceDocumentDuration     as SolutionDurationSubsDefTer on  SolutionOrderItem.ServiceDocument              = SolutionDurationSubsDefTer.ServiceDocument
                                                                                       and SolutionOrderItem.ServiceDocumentItem          = SolutionDurationSubsDefTer.ServiceDocumentItem
                                                                                       and SolutionDurationSubsDefTer.ServiceObjectType   = 'BUS2000172'
                                                                                       and SolutionDurationSubsDefTer.SrvcDocDurationType = 'SUBS_DEF_TER'

    left outer to one join I_SalesOrganization           as SolutionSalesOrganization  on SolutionOrderItem.SalesOrganization = SolutionSalesOrganization.SalesOrganization



  /* Enhancement Solution Order */
    left outer to one join I_EntProjBusSolutionOrderLink as SolutionOrderProjLink      on  SolutionOrderProjLink.BusinessSolutionOrder     = SolutionOrderItem.ServiceDocument
                                                                                       and SolutionOrderProjLink.BusinessSolutionOrderItem = SolutionOrderItem.ServiceDocumentItem




  association [0..1] to E_ServiceDocumentItem as _SolutionDocItemExt  on  $projection.ServiceObjectType   = _SolutionDocItemExt.ServiceCategory
                                                                      and $projection.ServiceDocument     = _SolutionDocItemExt.ServiceOrderItem
                                                                      and $projection.ServiceDocumentItem = _SolutionDocItemExt.ServiceLineExternalID

  association [0..1] to E_ServiceDocument     as _SolutionDocumentExt on  $projection.ServiceObjectType = _SolutionDocumentExt.ServiceCategory
                                                                      and $projection.ServiceDocument   = _SolutionDocumentExt.ServiceOrder

{

      /* Solution Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key SolutionOrderItem.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key SolutionOrderItem.ServiceDocument,

  key SolutionOrderItem.ServiceDocumentItem,


      /* Header Details */
      SolutionOrder.ServiceDocumentUUID,
      @Semantics.uuid
      SolutionOrder.ServiceDocumentCharUUID,
      SolutionOrder.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrder.ServiceDocNetAmount,
      SolutionOrder.PurchaseOrderByCustomer,
      SolutionOrder.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentHasError,
      @Semantics.booleanIndicator: true
      SolutionOrder.ServiceDocumentIsRejected,
      SolutionOrder.ServiceDocChangedDateTime,
      SolutionOrder.ServiceDocCreationDateTime,

      /* Item Details */
      SolutionOrderItem.ServiceDocumentType,
      SolutionOrderItem.ServiceDocumentItemObjectType,
      SolutionOrderItem.ServiceDocumentItemUUID,
      @Semantics.uuid
      SolutionOrderItem.ServiceDocumentItemCharUUID,
      SolutionOrderItem.PostingDate,
      SolutionOrderItem.ProfitCenter,
      SolutionOrderItem.ControllingArea,
      SolutionOrderItem.ProfitCenterDeterminationDate,
      SolutionOrderItem.ParentServiceDocumentItemUUID,
      SolutionOrderItem.ServiceDocItemCategory,
      SolutionOrderItem.OriginallyRequestedProduct,
      SolutionOrderItem.Product                                                             as ProductID,

      /* Item - Schedule Line */
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      SolutionOrderItem.ServiceDocumentItemQuantity,

      /* Item - Product */
      SolutionOrderItem.SrvcDocItmOrdToBaseQtyNmrtr,
      SolutionOrderItem.SrvcDocItmOrdToBaseQtyDnmntr,
      SolutionOrderItem.OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      SolutionOrderItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SolutionOrderItem.SrvcDocItemBaseQuantityUnit,
      SolutionOrderItem.Plant,
      SolutionOrderItem.IncotermsPart1,
      SolutionOrderItem.IncotermsPart2,
      SolutionOrderItem.DeliveryPriority,
      SolutionOrderItem.PartialDeliveryIsAllowed,
      SolutionOrderItem.OrderCombinationIsAllowed,
      SolutionOrderItem.DeliveryBlockReason,
      SolutionOrderItem.RequestedDeliveryUTCDateTime,

      /* Partner  */
      SolutionOrderItem.SoldToParty,
      SolutionOrderItem.ServiceTeam,
      SolutionOrderItem.SoldToPartyCountry,
      SolutionOrderItem.SoldToPartyRegion,
      cast( SolutionOrderItem.ResponsibleEmployee as resp_empl )                            as ResponsibleEmployee,
      cast( SolutionOrderItem.ContactPerson as parnr )                                      as ContactPerson,
      SolutionOrderItem.ShipToParty,
      SolutionOrderItem.BillToParty,
      SolutionOrderItem.PayerParty,
      SolutionCustmMgmtPartner.CustMgmtBusinessPartner                                      as ProjectManager,

      /* Pricing Parameter Set */
      SolutionOrderItem.BillableControl,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      SolutionOrderItem.TransactionCurrency,
      @Semantics.currencyCode:true
      SolutionOrderItem.StatisticsCurrency                                                  as ReferenceCurrency,
      SolutionOrderItem.ExchangeRateType,
      SolutionOrderItem.ExchangeRateDate,
      cast( SolutionOrderItem.AccountingExchangeRate as fis_exchange_rate preserving type ) as AccountingExchangeRate,
      SolutionOrderItem.CustomerGroup,
      SolutionOrderItem.PaymentTerms,

      /* Billing Set */
      SolutionOrderItem.BillingBlockReason,

      /* Item - Sales Set */
      SolutionOrderItem.AdditionalCustomerGroup1,
      SolutionOrderItem.AdditionalCustomerGroup2,
      SolutionOrderItem.AdditionalCustomerGroup3,
      SolutionOrderItem.AdditionalCustomerGroup4,
      SolutionOrderItem.AdditionalCustomerGroup5,
      SolutionOrderItem.ServiceDocItemRejectionReason,

      /* Organization Unit Set */
      SolutionOrderItem.SalesOrganizationOrgUnitID,
      SolutionOrderItem.SalesOfficeOrgUnitID,
      SolutionOrderItem.SalesGroupOrgUnitID,
      SolutionOrderItem.DistributionChannel,
      SolutionOrderItem.Division,
      SolutionOrderItem.ServiceOrganization,

      /* Organizational units with the S/4 SD codes */
      SolutionOrderItem.SalesOrganization,
      SolutionOrderItem.SalesOffice,
      SolutionOrderItem.SalesGroup,

      /* Sales Organization */
      SolutionSalesOrganization.CompanyCode                                                 as CompanyCode,

      /* Status */
      SolutionOrderItem.ServiceDocumentItemStatus,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemHasError,
      SolutionOrderItem.SrvcDocItmDeliveryStatus,
      SolutionOrderItem.ServiceDocItemBillingStatus,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.ServiceDocumentItemIsOpen,
      SolutionOrderItem.SrvcDocItemCreditStatus,

      /* Item - Pricing */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrderItem.ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      SolutionOrderItem.ServiceDocItemGrossAmount,

      /* Item Product */
      SolutionOrderItem.SrvcMaterialPricingGroup,
      SolutionOrderItem.ProductGroup1,
      SolutionOrderItem.ProductGroup2,
      SolutionOrderItem.ProductGroup3,
      SolutionOrderItem.ProductGroup4,
      SolutionOrderItem.ProductGroup5,
      @EndUserText.label: 'Product Hierarchy'
      cast( SolutionOrderItem.ProductHierarchy as prodh_d )                                 as ProductHierarchy,

      /* Reference Object Details */
      SolutionOrdItemRefObj.SrvcRefObjIsMainObject,
      SolutionOrdItemRefObj.ProductUUID,
      SolutionOrdItemRefObj.SerialNumber,
      SolutionOrdItemRefObj.Equipment,
      SolutionOrdItemRefObj.ServiceRefObjectSequenceNumber,
      SolutionOrdItemRefObj.ServiceReferenceObjectType,
      SolutionOrdItemRefObj.ServiceReferenceObjectUUID,
      @EndUserText.label: 'Functional Location'
      cast( SolutionOrdItemRefObj.FunctionalLocation as vdm_eam_tplnr )                     as FunctionalLocation,

      /* Project Specific Fields */
      @EndUserText.label: 'Project Start Date'
      tstmp_to_dats( SolutionDocumentProjStart.SrvcDocApptStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                                               as ProjectStartDate,
      @EndUserText.label: 'Project End Date'
      tstmp_to_dats( SolutionDocumentProjEnd.SrvcDocApptStartDateTime,
                     abap_system_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )                                                               as ProjectEndDate,
      SolutionOrderItem.ResponsibleCostCenter,
      SolutionOrderItem.EnterpriseProjectServiceOrg,

      /* Subscription Billing Specific Fields */
      cast( SolutionOrderItem.ServiceContrItemStartDateTime as sc_tstfro )                  as ServiceContrItemStartDateTime,
      cast( SolutionOrderItem.ServiceContrItemEndDateTime as sc_tstto )                     as ServiceContrItemEndDateTime,
      SolutionSubsPrcgDate.SrvcDocApptStartDateTime                                         as SubscrpnBillgItmPrcgDateTime,
      SolutionDurationSubsWitPer.SrvcDocDurationValue                                       as SubscrpnWithdrawalPeriod,
      SolutionDurationSubsFixTer.SrvcDocDurationValue                                       as SubscriptionFixedTerm,
      SolutionDurationSubsTerNot.SrvcDocDurationValue                                       as SubscriptionTermOfNotice,
      SolutionDurationSubsMinTer.SrvcDocDurationValue                                       as SubscriptionMinimumTerm,
      SolutionDurationSubsRenTer.SrvcDocDurationValue                                       as SubscriptionRenewalPeriod,
      SolutionDurationSubsDefTer.SrvcDocDurationValue                                       as SubscriptionExpectedTerm,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.MidBillgCycExprtnIsAllowed,
      @Semantics.booleanIndicator:true
      SolutionOrderItem.SubscrpnContrTrmsAreSpecified,
      SolutionOrderItem.SubscriptionBillingCycle,
      /* Enhancement Solution Order */
      @Semantics.uuid
      SolutionOrderItem.SubscrpnBillgRatePlanCharUUID,

      /* Enhancement Solution Order */
      /* Project Details related to Solution Order */
      SolutionOrderProjLink.ProjectUUID,
      SolutionOrderProjLink._EnterpriseProject.ProjectInternalID,




      /*  Associations  */
      /* Keys */
      _ServiceObjType,
      _ServiceDocument,

      /* Item - Product */
      _BaseUnit_2,
      _SalesUnit,

      /* Pricing Parameter Set */
      _TransactionCurrency
}
where
      SolutionOrderItem.ServiceObjectType           = 'BUS2000172'
  and SolutionOrderItem.ServiceDocumentTemplateType is initial
```
