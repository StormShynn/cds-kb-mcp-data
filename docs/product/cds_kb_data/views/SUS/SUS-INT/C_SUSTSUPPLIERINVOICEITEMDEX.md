---
name: C_SUSTSUPPLIERINVOICEITEMDEX
description: "Supplier Invoice Item data extractor"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value
semantic_en: "Supplier Invoice Item data extractor"
semantic_vi: "Supplier Invoice Item data extractor — CDS view tiêu dùng dựa trên I_SuplrInvcItemPurOrdRefAPI01."
keywords:
  - "supplier"
  - "invoice"
  - "item"
  - "data"
  - "extractor"
  - "fiscal"
  - "year"
  - "document"
  - "date"
  - "invcg"
  - "party"
tags:
  - SUS
  - bo:billingdocument
  - component:SUS-INT
  - consumption-view
  - invoice
  - supplier
  - SUS-INT
---
# C_SUSTSUPPLIERINVOICEITEMDEX

**Supplier Invoice Item data extractor**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | | `_SuplrInvcItemPurOrdRefAPI01` | `SupplierInvoice` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` | ✓ | |  | `cast( _SuplrInvcItemPurOrdRefAPI01.FiscalYear as fis_stjah_no_conv )` | `NUMC(4)` | Reverse Document Fiscal Year |
| `SupplierInvoiceItem` | ✓ | | `_SuplrInvcItemPurOrdRefAPI01` | `SupplierInvoiceItem` | `NUMC(6)` | Document Item in Invoice Document |
| `DocumentDate` |  | | `_SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01` | `DocumentDate` | `DATS(8)` | Invoice Date in Document |
| `SupplierInvoiceIDByInvcgParty` |  | | `_SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01` | `SupplierInvoiceIDByInvcgParty` | `CHAR(16)` | Reference Document Number |
| `PurchaseOrder` |  | | `_PurchaseOrderItem` | `PurchaseOrder` | `CHAR(10)` | Purchasing Document Number |
| `PurchaseOrderItem` |  | | `_PurchaseOrderItem` | `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `ReverseDocument` |  | | `_SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01` | `ReverseDocument` | `CHAR(10)` | Reversal document number |
| `ReverseDocumentFiscalYear` |  | |  | `cast( _SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01.ReverseDocumentFiscalYear as fis_stjah_no_conv )` | `NUMC(4)` | Reverse Document Fiscal Year |
| `Plant` |  | | `_SuplrInvcItemPurOrdRefAPI01` | `Plant` | `CHAR(4)` | Plant |
| `PlantAddressID` |  | | `_PurchaseOrderItem._Plant` | `AddressID` | `CHAR(10)` | Address |
| `PlantCountry` |  | | `_PurchaseOrderItem._Plant._StandardOrganizationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | | `_PurchaseOrderItem._Plant._StandardOrganizationAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `StorageLocation` |  | | `_StorageLocationAddress` | `StorageLocation` | `CHAR(4)` | Storage Location |
| `StorageLocationAddressID` |  | | `_StorageLocationAddress` | `AddressID` | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | | `_StorageLocationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | | `_StorageLocationAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Supplier` |  | | `_PurchaseOrder` | `Supplier` | `CHAR(10)` | Supplier |
| `SupplierAddressID` |  | | `_PurchaseOrder._Supplier` | `AddressID` | `CHAR(10)` | Address |
| `SupplierCountry` |  | | `_PurchaseOrder._Supplier` | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` |  | | `_PurchaseOrder._Supplier` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Customer` |  | | `_PurchaseOrderItem._Customer` | `Customer` | `CHAR(10)` | Customer Number |
| `CustomerAddressID` |  | | `_PurchaseOrderItem._Customer` | `AddressID` | `CHAR(10)` | Address |
| `PurOrdReceivingCustomerCountry` |  | | `_PurchaseOrderItem._Customer._AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
| `PurOrdReceivingCustomerRegion` |  | | `_PurchaseOrderItem._Customer._AddressDefaultRepresentation` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ManualDeliveryAddressID` |  | | `_PurchaseOrderItem` | `ManualDeliveryAddressID` | `CHAR(10)` | Manual address number in purchasing document item |
| `ManualDeliveryAddressCountry` |  | | `_PurchaseOrderItem._ManualDeliveryAddress_2` | `Country` | `CHAR(3)` | Country/Region Key |
| `ManualDeliveryAddressRegion` |  | | `_PurchaseOrderItem._ManualDeliveryAddress_2` | `Region` | `CHAR(3)` | Region (State, Province, County) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrder` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value)*

```abap
@EndUserText.label: 'Supplier Invoice Item data extractor'

@AccessControl: {
     authorizationCheck:    #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
     ignorePropagatedAnnotations: true
}

@ObjectModel: {
      usageType: {
         sizeCategory:   #XXL,
         serviceQuality: #D,
         dataClass:      #MIXED
      },
      sapObjectNodeType.name: 'SupplierInvoiceItem',
      supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
      modelingPattern: #NONE
}

@VDM: {
      viewType: #CONSUMPTION
}

@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        technicalName: 'CSUSTSUPINVCITMDEX',
        dataExtraction: {
          enabled: true,
          delta.changeDataCapture:
            {
            mapping:[
                      { role: #MAIN, table: 'rseg', viewElement: ['SupplierInvoice', 'FiscalYear', 'SupplierInvoiceItem'], tableElement: ['belnr', 'gjahr', 'buzei']},
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'rbkp', viewElement: ['SupplierInvoice', 'FiscalYear'], tableElement: ['belnr', 'gjahr']},
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['StorageLocationAddressID'] },
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['PlantAddressID'] },
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['ManualDeliveryAddressID'] },
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['CustomerAddressID'] },
                      { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['SupplierAddressID'] }
                    ]
            }
        }
}
define view entity C_SustSupplierInvoiceItemDEX
  as select from           I_SuplrInvcItemPurOrdRefAPI01  as _SuplrInvcItemPurOrdRefAPI01


    left outer to one join I_PurchaseOrderItem            as _PurchaseOrderItem      on  _SuplrInvcItemPurOrdRefAPI01.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                                     and _SuplrInvcItemPurOrdRefAPI01.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem

    left outer to one join P_SustPurchaseOrderItemStorLoc as _PurchOrdIssuingStorLoc on  _SuplrInvcItemPurOrdRefAPI01.PurchaseOrderItem = _PurchOrdIssuingStorLoc.PurchaseOrderItem
                                                                                     and _SuplrInvcItemPurOrdRefAPI01.PurchaseOrder     = _PurchOrdIssuingStorLoc.PurchaseOrder

    left outer to one join P_SustStorLocAddrMinSqnc       as _StorageLocationAddress on  _PurchaseOrderItem.StorageLocation = _StorageLocationAddress.StorageLocation
                                                                                     and _SuplrInvcItemPurOrdRefAPI01.Plant = _StorageLocationAddress.Plant

  association [0..1] to I_PurchaseOrder as _PurchaseOrder on $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder

{
  key _SuplrInvcItemPurOrdRefAPI01.SupplierInvoice                                                              as SupplierInvoice,

  key cast( _SuplrInvcItemPurOrdRefAPI01.FiscalYear as fis_stjah_no_conv )                                      as FiscalYear,

  key _SuplrInvcItemPurOrdRefAPI01.SupplierInvoiceItem                                                          as SupplierInvoiceItem,

      @Semantics.businessDate.at: true
      _SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01.DocumentDate                                           as DocumentDate,

      _SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01.SupplierInvoiceIDByInvcgParty                          as SupplierInvoiceIDByInvcgParty,

      _PurchaseOrderItem.PurchaseOrder                                                                          as PurchaseOrder,

      _PurchaseOrderItem.PurchaseOrderItem                                                                      as PurchaseOrderItem,

      _SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01.ReverseDocument                                        as ReverseDocument,

      @Semantics.fiscal.year: true
      cast( _SuplrInvcItemPurOrdRefAPI01._SupplierInvoiceAPI01.ReverseDocumentFiscalYear as fis_stjah_no_conv ) as ReverseDocumentFiscalYear,

      _SuplrInvcItemPurOrdRefAPI01.Plant                                                                        as Plant,
      _PurchaseOrderItem._Plant.AddressID                                                                       as PlantAddressID,
      _PurchaseOrderItem._Plant._StandardOrganizationAddress.Country                                            as PlantCountry,
      _PurchaseOrderItem._Plant._StandardOrganizationAddress.Region                                             as PlantRegion,

      _StorageLocationAddress.StorageLocation                                                                   as StorageLocation,
      _StorageLocationAddress.AddressID                                                                         as StorageLocationAddressID,
      _StorageLocationAddress.Country                                                                           as StorageLocationCountry,
      _StorageLocationAddress.Region                                                                            as StorageLocationRegion,

      _PurchaseOrder.Supplier                                                                                   as Supplier,
      _PurchaseOrder._Supplier.AddressID                                                                        as SupplierAddressID,
      _PurchaseOrder._Supplier.Country                                                                          as SupplierCountry,
      _PurchaseOrder._Supplier.Region                                                                           as SupplierRegion,

      _PurchaseOrderItem._Customer.Customer                                                                     as Customer,
      _PurchaseOrderItem._Customer.AddressID                                                                    as CustomerAddressID,
      _PurchaseOrderItem._Customer._AddressDefaultRepresentation.Country                                        as PurOrdReceivingCustomerCountry,
      _PurchaseOrderItem._Customer._AddressDefaultRepresentation.Region                                         as PurOrdReceivingCustomerRegion,

      _PurchaseOrderItem.ManualDeliveryAddressID                                                                as ManualDeliveryAddressID,
      _PurchaseOrderItem._ManualDeliveryAddress_2.Country                                                       as ManualDeliveryAddressCountry,
      _PurchaseOrderItem._ManualDeliveryAddress_2.Region                                                        as ManualDeliveryAddressRegion
}
```
