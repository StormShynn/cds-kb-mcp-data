---
name: C_HANDLINGUNITOMPARAMDETERMINE
description: "Handling Unit OM Parameter Determination"
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITOMPARAMDETERMINE')/$value
semantic_en: "Handling Unit OM Parameter Determination"
keywords:
  - "Handling Unit Parameter Determination"
tags:
  - LO
  - component:LO-HU-2CL
  - consumption-view
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - metadata-only
---
# C_HANDLINGUNITOMPARAMDETERMINE

**Handling Unit OM Parameter Determination**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITOMPARAMDETERMINE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Warehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `HandlingUnitNumber` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `HandlingUnitIndicator` |  | |  |  | `CHAR(1)` | Virtual Handling Unit |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `PackagingMaterialType` |  | |  |  | `CHAR(4)` | Packaging Material Type |
| `PackagingMaterial` |  | |  |  | `CHAR(40)` | Packaging Material |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `ProcessStepCompletedInd` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `HandlingUnitOpenTaskInd` |  | |  |  | `CHAR(1)` | Indicator: Handling Unit is Being Moved (Open HU WT) |
| `HandlingUnitPackingGroup` |  | |  |  | `CHAR(4)` | Packing Group |
| `HandlingUnitTopLevelInd` |  | |  |  | `CHAR(1)` |  |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `GrossWeight` |  | |  |  | `QUAN(15)` | Total Weight of Handling Unit |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Weight Unit |
| `GrossVolume` |  | |  |  | `QUAN(15)` | Total Volume of Handling Unit |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitGrossCapacity` |  | |  |  | `DEC(15)` | Total Capacity Key Figure |
| `WorkCenter` |  | |  |  | `CHAR(4)` | Work Center |
| `HandlingUnitProcessingStep` |  | |  |  | `CHAR(1)` | Handling Unit Processing Step |
| `EWMHandlingUnitProcessType` |  | |  |  | `CHAR(2)` | Process for Automatic Printing of HU Labels |
| `StockOwnerName` |  | |  |  | `CHAR(10)` | Owner |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Executing Resource (Means of Transport or User) |
| `StorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `StorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `OverallGoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (All Items) |
| `HandlingUnitIsComplete` |  | |  |  | `CHAR(1)` | Completed Indicator for Open Items |
| `HandlingUnitPackingObjectType` |  | |  |  | `CHAR(2)` | Packing Object |
