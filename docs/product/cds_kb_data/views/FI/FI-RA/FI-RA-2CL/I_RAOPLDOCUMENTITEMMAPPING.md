---
name: I_RAOPLDOCUMENTITEMMAPPING
description: "RA Operational Document Item Mapping"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPLDOCUMENTITEMMAPPING')/$value
semantic_en: "RA Operational Document Item Mapping"
tags:
  - FI
  - component:FI-RA-2CL
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_RAOPLDOCUMENTITEMMAPPING

**RA Operational Document Item Mapping**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPLDOCUMENTITEMMAPPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevnAcctgSenderComponent` |  | |  |  | `CHAR(3)` | Sender Component of Source Item |
| `RASndgCompDocumentItemType` |  | |  |  | `CHAR(4)` | Source Document Item Type |
| `RASndgCompDocumentItem` |  | |  |  | `CHAR(35)` | Source Item ID |
| `PerformanceObligation` |  | |  |  | `CHAR(16)` | Performance Obligation |
| `RevnAcctgOperationalDocument` |  | |  |  | `CHAR(20)` | Header ID of Source Document for Revenue Accounting Item |
| `RAOperationalDocumentItem` |  | |  |  | `CHAR(15)` | Item ID of Source Document for Revenue Accounting Item |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
