---
name: I_PURREQNSUBCONTRACTINGCOMP
description: "This CDS view retrieves the details of the item category subcontracting. Subcontracting is a form of procurement where the required product is manufactured by a supplier (in this case the subcontractor) to whom certain components are provided. This CDS view provides the data to answer the following business questions: Which subcontracting components are assigned to a specific purchase requisition item? What is the required quantity versus the withdrawn quantity for a subcontracting component in a purchase requisition? Which components are flagged as bulk material or phantom items in a subcontracting purchase requisition? What are the requirement dates and lead time offsets for subcontracting components? Which components have fixed quantities or are finally issued for a reservation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PURREQNSUBCONTRACTINGCOMP')/$value
semantic_en: "This CDS view retrieves the details of the item category subcontracting. Subcontracting is a form of procurement where the required product is manufactured by a supplier (in this case the subcontractor) to whom certain components are provided. This CDS view provides the data to answer the following business questions: Which subcontracting components are assigned to a specific purchase requisition item? What is the required quantity versus the withdrawn quantity for a subcontracting component in a purchase requisition? Which components are flagged as bulk material or phantom items in a subcontracting purchase requisition? What are the requirement dates and lead time offsets for subcontracting components? Which components have fixed quantities or are finally issued for a reservation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-REQ-2CL
  - contract
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-PUR
  - MM-PUR-REQ
  - MM-PUR-REQ-2CL
  - product
  - supplier
  - metadata-only
---
# I_PURREQNSUBCONTRACTINGCOMP

**This CDS view retrieves the details of the item category subcontracting. Subcontracting is a form of procurement where the required product is manufactured by a supplier (in this case the subcontractor) to whom certain components are provided. This CDS view provides the data to answer the following business questions: Which subcontracting components are assigned to a specific purchase requisition item? What is the required quantity versus the withdrawn quantity for a subcontracting component in a purchase requisition? Which components are flagged as bulk material or phantom items in a subcontracting purchase requisition? What are the requirement dates and lead time offsets for subcontracting components? Which components have fixed quantities or are finally issued for a reservation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PURREQNSUBCONTRACTINGCOMP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition in Order |
| `ReservationItem` |  | |  |  | `NUMC(4)` | Reservation Item |
| `RecordType` |  | |  |  | `CHAR(1)` | Reservation Record Type |
| `Reservation` |  | |  |  | `NUMC(10)` | Number of reservation/dependent requirements |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `RequiredQuantity` |  | |  |  | `QUAN(13)` | Requirement Quantity |
| `WithdrawnQuantity` |  | |  |  | `QUAN(13)` | Withdrawn Quantity |
| `QuantityIsFixed` |  | |  |  | `CHAR(1)` | Quantity is fixed |
| `RequirementDate` |  | |  |  | `DATS(8)` | Material Component Requirement Date |
| `RequirementTime` |  | |  |  | `TIMS(6)` | Material Component Requirement Time |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `LatestRequirementDate` |  | |  |  | `DATS(8)` | Latest Requirement Date |
| `OrderLevelValue` |  | |  |  | `NUMC(2)` | Order level |
| `OrderPathValue` |  | |  |  | `NUMC(2)` | Order path |
| `BillOfMaterialItemNumber` |  | |  |  | `CHAR(4)` | Bill Of Material Item Number |
| `MatlCompFreeDefinedAttribute` |  | |  |  | `CHAR(10)` | Sort String |
| `BOMItemCategory` |  | |  |  | `CHAR(1)` | Bill of Material Item Category |
| `MaterialComponentIsPhantomItem` |  | |  |  | `CHAR(1)` | Phantom Item Indicator |
| `IsBulkMaterialComponent` |  | |  |  | `CHAR(1)` | Indicator: Bulk Material |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `ConsumptionPosting` |  | |  |  | `CHAR(1)` | Consumption Posting |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `MaterialProvisionType` |  | |  |  | `CHAR(1)` | Material Provision Type |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ReservationIsFinallyIssued` |  | |  |  | `CHAR(1)` | Final Issue for Reservation |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |
| `MaterialQtyToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Conversion to Base Units of Measure |
| `MaterialQtyToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for conversion to base units of measure |
| `ComponentScrapInPercent` |  | |  |  | `DEC(5)` | Component Scrap in Percent |
| `OperationScrapInPercent` |  | |  |  | `DEC(5)` | Operation Scrap |
| `IsNetScrap` |  | |  |  | `CHAR(1)` | Net Scrap Indicator |
| `LeadTimeOffset` |  | |  |  | `DEC(3)` | Lead-Time Offset |
| `QuantityDistributionKey` |  | |  |  | `CHAR(4)` | MRP Distribution Key |
| `MaterialRevisionLevel` |  | |  |  | `CHAR(2)` | Revision Level |
| `MaterialCompIsVariableSized` |  | |  |  | `CHAR(1)` | Variable-Sized Item Indicator |
| `VariableSizeItemUnit` |  | |  |  | `UNIT(3)` | Variable-Size Item Unit of Measure |
| `VariableSizeItemQuantity` |  | |  |  | `QUAN(13)` | Number of Variable-Size Components |
| `VariableSizeComponentUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Variable-Size Components |
| `VariableSizeComponentQuantity` |  | |  |  | `QUAN(13)` | Variable-Size Item Quantity per PC |
| `UnitOfMeasureForSize1To3` |  | |  |  | `UNIT(3)` | Unit of measure for sizes 1 to 3 |
| `Size1` |  | |  |  | `QUAN(13)` | Size 1 |
| `Size2` |  | |  |  | `QUAN(13)` | Size 2 |
| `Size3` |  | |  |  | `QUAN(13)` | Size 3 |
| `FormulaKey` |  | |  |  | `CHAR(2)` | Formula Key for Variable-Size Items |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ProductionSupplyArea` |  | |  |  | `CHAR(10)` | Production Supply Area |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `BOMItemDescription` |  | |  |  | `CHAR(40)` | BOM Item Text (Line 1) |
| `BOMItemText2` |  | |  |  | `CHAR(40)` | BOM Item Text (Line 2) |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
