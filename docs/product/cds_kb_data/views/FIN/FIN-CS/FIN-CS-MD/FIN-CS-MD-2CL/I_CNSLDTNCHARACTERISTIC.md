---
name: I_CNSLDTNCHARACTERISTIC
description: "Consolidation Characteristic"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCHARACTERISTIC')/$value
semantic_en: "Consolidation Characteristic"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNCHARACTERISTIC

**Consolidation Characteristic**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNCHARACTERISTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationCharacteristic` |  | |  |  | `CHAR(30)` | Characteristic |
| `CnsldtnCharcGlobalFieldName` |  | |  |  | `CHAR(30)` | Characteristic Global Field Name |
| `CnsldtnCharcDataElement` |  | |  |  | `CHAR(30)` | Characteristic Data Element |
| `CnsldtnCharacteristicIsInUse` |  | |  |  | `CHAR(1)` | Characteristic is in Use |
| `CnsldtnMasterDataMaintIsActive` |  | |  |  | `CHAR(1)` | Master Data Maintenance is Active |
| `CnsldtnHierarchyMaintIsActive` |  | |  |  | `CHAR(1)` | Hierarchy Maintenance is Active |
| `CnsldtnCompoundCharacteristic` |  | |  |  | `CHAR(30)` | Compound Characteristic |
| `CnsldtnCompndCharcGlobFldName` |  | |  |  | `CHAR(30)` | Compound Characteristic Global Field Name |
| `CnsldtnReferenceCharacteristic` |  | |  |  | `CHAR(30)` | Reference Characteristic |
| `CnsldtnRefCharcGlobalFieldName` |  | |  |  | `CHAR(30)` | Reference Characteristic Global Field Name |
| `CnsldtnHierarchicalElimIsInUse` |  | |  |  | `CHAR(1)` | Hierarchical Elimination is in Use |
