---
name: I_CNTRLSUPLRCONFITEMBASIC
description: "This CDS view provides access to central supplier confirmation item data in a basic format. It represents individual line items within a supplier confirmation document, including pricing information, reference data, and item-level status indicators. This CDS view provides the data to answer the following business questions: What is the confirmed net price for a specific supplier confirmation item? Which supplier confirmation items have been rejected by the supplier? What are the external reference details for a given confirmation item? Which purchase order items are referenced by supplier confirmation items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CSC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFITEMBASIC')/$value
semantic_en: "This CDS view provides access to central supplier confirmation item data in a basic format. It represents individual line items within a supplier confirmation document, including pricing information, reference data, and item-level status indicators. This CDS view provides the data to answer the following business questions: What is the confirmed net price for a specific supplier confirmation item? Which supplier confirmation items have been rejected by the supplier? What are the external reference details for a given confirmation item? Which purchase order items are referenced by supplier confirmation items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CSC-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CSC
  - MM-PUR-HUB-CSC-2CL
  - order
  - pricing
  - purchase-order
  - supplier
  - metadata-only
---
# I_CNTRLSUPLRCONFITEMBASIC

**This CDS view provides access to central supplier confirmation item data in a basic format. It represents individual line items within a supplier confirmation document, including pricing information, reference data, and item-level status indicators. This CDS view provides the data to answer the following business questions: What is the confirmed net price for a specific supplier confirmation item? Which supplier confirmation items have been rejected by the supplier? What are the external reference details for a given confirmation item? Which purchase order items are referenced by supplier confirmation items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFITEMBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierConfirmation` |  | |  |  | `CHAR(10)` | Central supplier Confirmation Number |
| `CentralSupplierConfirmationItm` |  | |  |  | `NUMC(5)` | Central Supplier Confirmation Item |
| `CntrlSuplrConfItemUniqueID` |  | |  |  | `CHAR(15)` | Central Supplier Confirmation Item Unique ID |
| `CntrlSuplrConfRefPrmtHbRpldPO` |  | |  |  | `CHAR(10)` | Reference Purchase Order |
| `CntrlSuplrConfRefPrmtHbPOItm` |  | |  |  | `NUMC(5)` | Reference Purchase Order Item |
| `SupplierConfirmedNetPrice` |  | |  |  | `CURR(11)` | Supplier Confirmed Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Change Time Stamp |
| `SuplrConfItemExternalReference` |  | |  |  | `CHAR(70)` | Supplier External Reference ID |
| `CSupConfExtRefLastChgdDteTme` |  | |  |  | `DEC(21)` | External Change Time Stamp |
| `ItemIsRejectedBySupplier` |  | |  |  | `CHAR(1)` | Rejection Indicator |
| `CntrlSuplrConfAcknNumber` |  | |  |  | `CHAR(20)` | Order Acknowledgment Number |
| `ProcurementHubSourceSystem` |  | |  |  | `CHAR(10)` | Connected System ID |
