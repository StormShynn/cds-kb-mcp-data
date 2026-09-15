---
name: I_HNDLGUNTITMINVTRYWRHSMGMT
description: "This CDS view provides the items contained within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It exposes detailed information, for example, about materials, quantities, and storage locations for the items packed in a handling unit. This CDS view provides the data to answer the following business questions: What materials and quantities are contained in a specific handling unit, and where are they stored (plant and storage location)? Which sales orders or delivery documents are associated with the items in a handling unit, enabling traceability between physical packaging and order fulfillment? How many serial numbers are associated with items in a handling unit, and what is the serial number profile used for tracking? What is the batch number, expiration date, and goods receipt date for materials contained in handling units, supporting quality management and shelf-life monitoring? Are there any nested handling units or supplementary items within a handling unit?"
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HNDLGUNTITMINVTRYWRHSMGMT')/$value
semantic_en: "This CDS view provides the items contained within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It exposes detailed information, for example, about materials, quantities, and storage locations for the items packed in a handling unit. This CDS view provides the data to answer the following business questions: What materials and quantities are contained in a specific handling unit, and where are they stored (plant and storage location)? Which sales orders or delivery documents are associated with the items in a handling unit, enabling traceability between physical packaging and order fulfillment? How many serial numbers are associated with items in a handling unit, and what is the serial number profile used for tracking? What is the batch number, expiration date, and goods receipt date for materials contained in handling units, supporting quality management and shelf-life monitoring? Are there any nested handling units or supplementary items within a handling unit?"
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - delivery
  - document
  - goods-receipt
  - interface-view
  - inventory
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - material
  - order
  - plan
  - sales-order
  - metadata-only
---
# I_HNDLGUNTITMINVTRYWRHSMGMT

**This CDS view provides the items contained within handling units in storage locations that are managed in Inventory Management or in Warehouse Management. It exposes detailed information, for example, about materials, quantities, and storage locations for the items packed in a handling unit. This CDS view provides the data to answer the following business questions: What materials and quantities are contained in a specific handling unit, and where are they stored (plant and storage location)? Which sales orders or delivery documents are associated with the items in a handling unit, enabling traceability between physical packaging and order fulfillment? How many serial numbers are associated with items in a handling unit, and what is the serial number profile used for tracking? What is the batch number, expiration date, and goods receipt date for materials contained in handling units, supporting quality management and shelf-life monitoring? Are there any nested handling units or supplementary items within a handling unit?**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HNDLGUNTITMINVTRYWRHSMGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitExternalID` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `Warehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `StockItemUUID` |  | |  |  | `RAW(16)` | GUID Stock Item |
| `HandlingUnitItem` |  | |  |  | `NUMC(6)` | Handling Unit Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `HandlingUnitInternalID` |  | |  |  | `CHAR(10)` | Internal Handling Unit Number |
| `HandlingUnitTypeOfContent` |  | |  |  | `CHAR(1)` | Type of Handling-unit Item Content |
| `HandlingUnitNestedExternalID` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `HandlingUnitReferenceDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `HandlingUnitRefDocumentItem` |  | |  |  | `CHAR(10)` |  |
| `HandlingUnitQuantity` |  | |  |  | `QUAN(15)` | Base Quantity Packed in the Handling Unit Item |
| `HandlingUnitQuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure of the Quantity to be Packed (VEMNG) |
| `HandlingUnitAltUnitOfMeasure` |  | |  |  | `UNIT(3)` | Alternative unit of measure for stock unit of measure |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `HandlingUnitGoodsReceiptDate` |  | |  |  | `DATS(8)` | Date of Goods Receipt |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `HandlingUnitNrOfAuxPackgMat` |  | |  |  | `INT4(10)` | Number of Auxiliary Packaging Materials in the HU Item |
| `HandlingUnitNumberOfSerialNumb` |  | |  |  | `INT4(10)` | Number of serial numbers |
| `SerialNumberProfile` |  | |  |  | `CHAR(4)` | Serial Number Profile |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `SpecialStockNumber` |  | |  |  | `CHAR(16)` | Special Stock Number |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Sales order number of valuated sales order stock |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
