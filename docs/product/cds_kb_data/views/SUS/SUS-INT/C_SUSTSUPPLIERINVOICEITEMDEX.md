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
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value
semantic_en: "Supplier Invoice Item data extractor"
tags:
  - SUS
  - bo:billingdocument
  - component:SUS-INT
  - consumption-view
  - invoice
  - supplier
  - SUS-INT
  - metadata-only
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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTSUPPLIERINVOICEITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Reverse Document Fiscal Year |
| `SupplierInvoiceItem` |  | |  |  | `NUMC(6)` | Document Item in Invoice Document |
| `DocumentDate` |  | |  |  | `DATS(8)` | Invoice Date in Document |
| `SupplierInvoiceIDByInvcgParty` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reversal document number |
| `ReverseDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Reverse Document Fiscal Year |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantAddressID` |  | |  |  | `CHAR(10)` | Address |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierAddressID` |  | |  |  | `CHAR(10)` | Address |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerAddressID` |  | |  |  | `CHAR(10)` | Address |
| `PurOrdReceivingCustomerCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PurOrdReceivingCustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ManualDeliveryAddressID` |  | |  |  | `CHAR(10)` | Manual address number in purchasing document item |
| `ManualDeliveryAddressCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ManualDeliveryAddressRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
