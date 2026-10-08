---
name: I_SLOWORNONMOVINGMATLCUBE
description: "This CDS view provides an aggregated, analytical snapshot of warehouse stock for materials that show slow or no movement, combining stock quantities, stock values, and consumption data per material/plant/storage location/stock type combination. Only records with non-zero warehouse stock and at least one prior goods movement are included. This CDS view provides the data to answer the following business questions: Which materials have had no goods movements or consumption postings within a defined number of days? What is the current stock quantity and value (in company code currency and a user-selected display currency) for potentially slow-moving materials? How does the total consumption quantity compare to the current stock quantity (slow-moving indicator)? Is a slow-moving material still referenced in active Bills of Material (cross-plant and plant-specific)? What is the date of the last goods movement and the last consumption posting for a given stock record? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLOWORNONMOVINGMATLCUBE')/$value
semantic_en: "This CDS view provides an aggregated, analytical snapshot of warehouse stock for materials that show slow or no movement, combining stock quantities, stock values, and consumption data per material/plant/storage location/stock type combination. Only records with non-zero warehouse stock and at least one prior goods movement are included. This CDS view provides the data to answer the following business questions: Which materials have had no goods movements or consumption postings within a defined number of days? What is the current stock quantity and value (in company code currency and a user-selected display currency) for potentially slow-moving materials? How does the total consumption quantity compare to the current stock quantity (slow-moving indicator)? Is a slow-moving material still referenced in active Bills of Material (cross-plant and plant-specific)? What is the date of the last goods movement and the last consumption posting for a given stock record? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Slow or Non-Moving Materials - Cube"
  - "Slow or Non-Moving Materials - Cube"
  - "Slow or Non-Moving Materials - Cube"
tags:
  - MM
  - bo:companycode
  - component:MM-IM-GF-2CL
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-GF
  - MM-IM-GF-2CL
  - plan
  - stock
  - metadata-only
---
# I_SLOWORNONMOVINGMATLCUBE

**This CDS view provides an aggregated, analytical snapshot of warehouse stock for materials that show slow or no movement, combining stock quantities, stock values, and consumption data per material/plant/storage location/stock type combination. Only records with non-zero warehouse stock and at least one prior goods movement are included. This CDS view provides the data to answer the following business questions: Which materials have had no goods movements or consumption postings within a defined number of days? What is the current stock quantity and value (in company code currency and a user-selected display currency) for potentially slow-moving materials? How does the total consumption quantity compare to the current stock quantity (slow-moving indicator)? Is a slow-moving material still referenced in active Bills of Material (cross-plant and plant-specific)? What is the date of the last goods movement and the last consumption posting for a given stock record? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLOWORNONMOVINGMATLCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StockIdentifyingBatch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` |  | |  |  | `NUMC(8)` | WBS Element |
| `SpecialStockIdfgCustomer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(17)` | Stock Quantity in Base Unit of Measure |
| `StockValueInCCCrcy` |  | |  |  | `CURR(17)` | Stock Value in Company Code Currency |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `StockValueInDisplayCurrency` |  | |  |  | `CURR(17)` | Stock Value in Display Currency |
| `CnsmpnLatestPostgDate` |  | |  |  | `DATS(8)` | Date of Last Consumption Posting |
| `MatlDocLatestPostgDate` |  | |  |  | `DATS(8)` | Date of Last Posting |
| `NumberOfDaysSinceLastCnsmpn` |  | |  |  | `INT4(10)` | Number of Days Since Last Consumption Posting |
| `NumberOfDaysSinceLastMovement` |  | |  |  | `INT4(10)` | Number of Days Since Last Posting |
| `CnsmpnQtyInBaseUnitOnRefDate` |  | |  |  | `DEC(31)` | Consumption Quantity in Base Unit of Measure |
| `ConsumptionToStockRatio` |  | |  |  | `DEC(31)` | Normalized Ratio of Consumption Quantity and Stock Quantity |
| `NumberOfBOMUsingTheMaterial` |  | |  |  | `INT4(10)` | Number of BOMs a Material is used in as a Component |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Product Type |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
