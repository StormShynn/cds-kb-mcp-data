---
name: I_SLSDOCITEMITEMCATEGORYDETN
description: "Item Cat Determination for Sls Doc Item"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value
semantic_en: "Item Cat Determination for Sls Doc Item"
tags:
  - SD
  - bo:salesorganization
  - component:SD-SLS-GF-2CL
  - interface-view
  - lob:sales & distribution
  - SD-SLS
  - SD-SLS-GF
  - SD-SLS-GF-2CL
  - metadata-only
---
# I_SLSDOCITEMITEMCATEGORYDETN

**Item Cat Determination for Sls Doc Item**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SLSDOCITEMITEMCATEGORYDETN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `ItemCategoryGroup` |  | |  |  | `CHAR(4)` | Item Category Group from Material Master |
| `SDDocumentItemUsage` |  | |  |  | `CHAR(4)` | Item Usage |
| `HigherLevelItemCategory` |  | |  |  | `CHAR(4)` | Item Category of the Higher-Level Item |
| `SalesDocumentItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `AdditionalSlsDocItemCategory1` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory2` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory3` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory4` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory5` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory6` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory7` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory8` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory9` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory10` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `AdditionalSlsDocItemCategory11` |  | |  |  | `CHAR(4)` | Alternative Item Category |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
