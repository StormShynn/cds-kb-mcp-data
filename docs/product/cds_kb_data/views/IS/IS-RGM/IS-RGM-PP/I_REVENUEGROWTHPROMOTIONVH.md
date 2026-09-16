---
name: I_REVENUEGROWTHPROMOTIONVH
description: "Revenue Growth Management Promotion"
app_component: IS-RGM-PP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value
semantic_en: "Revenue Growth Management Promotion"
tags:
  - IS
  - component:IS-RGM-PP
  - interface-view
  - IS-RGM
  - IS-RGM-PP
  - metadata-only
---
# I_REVENUEGROWTHPROMOTIONVH

**Revenue Growth Management Promotion**

| Property | Value |
|---|---|
| App Component | `IS-RGM-PP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REVENUEGROWTHPROMOTIONVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RevnGrowthMgmtPromotionUUID` |  | |  |  | `RAW(16)` | Promotion UUID |
| `RevnGrowthMgmtPromotionID` |  | |  |  | `CHAR(16)` | Promotion ID |
| `RevnGrowthMgmtPromotionName` |  | |  |  | `CHAR(255)` | Promotion Name |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `StartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `EndDate` |  | |  |  | `DATS(8)` | Valid To Date |
