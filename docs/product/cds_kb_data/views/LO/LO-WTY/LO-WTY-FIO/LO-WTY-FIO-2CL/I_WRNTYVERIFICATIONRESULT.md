---
name: I_WRNTYVERIFICATIONRESULT
description: "Warranty Verification Header Basic"
app_component: LO-WTY-FIO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value
semantic_en: "Warranty Verification Header Basic"
tags:
  - LO
  - bo:companycode
  - component:LO-WTY-FIO-2CL
  - interface-view
  - LO-WTY
  - LO-WTY-FIO
  - LO-WTY-FIO-2CL
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_WRNTYVERIFICATIONRESULT

**Warranty Verification Header Basic**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WRNTYVERIFICATIONRESULT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyVerificationResultUUID` |  | |  |  | `RAW(16)` | Warranty Verification ID |
| `WrntyVerificationResultNumber` |  | |  |  | `CHAR(10)` | Warranty Verification Number |
| `WarrantyReferenceOrderCategory` |  | |  |  | `CHAR(10)` | Warranty Order Category |
| `WarrantyReferenceOrderNumber` |  | |  |  | `CHAR(10)` | Warranty Order Number |
| `WrntyVerificationRsltStatus` |  | |  |  | `CHAR(4)` | Warranty Lifecycle Status |
| `WrntyCoverageDecisionStatus` |  | |  |  | `CHAR(4)` | Warranty Coverage Decision |
| `WrntyProposedCoverageStatus` |  | |  |  | `CHAR(4)` | Warranty Coverage Proposal |
| `WarrantyStartDate` |  | |  |  | `DATS(8)` | Warranty Date |
| `WarrantyEndDate` |  | |  |  | `DATS(8)` | Warranty Date |
| `WarrantyVerificationConfidence` |  | |  |  | `CHAR(4)` | Warranty Confidence Score |
| `WarrantyCoverageType` |  | |  |  | `CHAR(10)` | Warranty Type |
| `ConfirmedDateTime` |  | |  |  | `DEC(15)` | Warranty Date and Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation Date Time |
| `LocalInstanceLastChangedByUser` |  | |  |  | `CHAR(12)` | Local Instance Last Changed By User |
| `LoclInstanceLastChangeDateTime` |  | |  |  | `DEC(21)` | Local Instance Last Change Date Time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
