---
name: I_IN_SUBCONTRGDOCDET_2
description: "India Subcontracting Document Detail"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value
semantic_en: "India Subcontracting Document Detail"
tags:
  - FI
  - component:FI-LOC-LO-IN
  - contract
  - document
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_IN_SUBCONTRGDOCDET_2

**India Subcontracting Document Detail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgOrgCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Item in Material Document |
| `IN_SequenceNumber` |  | |  |  | `NUMC(4)` | Sequence number |
| `IN_SubcontrgDocNmbr` |  | |  |  | `CHAR(10)` | Challan Number or Invoice Number for Subcontracting |
| `IN_SubcontractingDocumentItem` |  | |  |  | `NUMC(6)` | Challan Item or Invoice Item for Subcontracting |
| `IN_NewSequenceNumber` |  | |  |  | `NUMC(20)` | New Sequence Number |
| `MaterialDocPostgDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `IN_GRItemRemainingQuantity` |  | |  |  | `QUAN(13)` | GR Remaining Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(13)` | Quantity |
| `IN_ChallanItemOpenQuantity` |  | |  |  | `QUAN(13)` | Challan Quantity Open for Reconciliation |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ActiveSupplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `IN_SubcontrgItmRcnldQty` |  | |  |  | `QUAN(13)` | Challan Reconciled Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `IN_ChallanItemStatus` |  | |  |  | `CHAR(1)` | Subcontracting Status |
| `IssgOrRcvgStkIdfgSpclStkType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
