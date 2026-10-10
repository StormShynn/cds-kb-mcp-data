---
name: I_PRODUCTSALESDELIVERYTEXT
description: "Product Sales Delivery - Text"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSALESDELIVERYTEXT')/$value
semantic_en: "Product Sales Delivery - Text"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - delivery
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - product
  - metadata-only
---
# I_PRODUCTSALESDELIVERYTEXT

**Product Sales Delivery - Text**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSALESDELIVERYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductSalesOrg` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ProductDistributionChnl` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `TextObjectType` |  | |  |  | `CHAR(4)` | Text ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TextObjectCategory` |  | |  |  | `CHAR(10)` | Texts: application object |
| `TextObjectKey` |  | |  |  | `CHAR(70)` | Name |
| `ProductLongTextMimeType` |  | |  |  | `CHAR(127)` | MIME Type |
| `ProdLongTxtCreationDateTime` |  | |  |  | `DEC(15)` | Creation timestamp of Product Long texts |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `ProdLongTxtLastChangedDateTime` |  | |  |  | `DEC(15)` | Last Change timestamp of Product Long texts |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
