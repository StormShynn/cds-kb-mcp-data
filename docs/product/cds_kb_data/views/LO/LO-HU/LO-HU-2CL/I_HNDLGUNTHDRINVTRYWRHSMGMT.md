---
name: I_HNDLGUNTHDRINVTRYWRHSMGMT
description: "This CDS view retrieves general information of the handing unit header for handling units in storage locations managed in Inventory Management or in Warehouse Management. This CDS view provides the data to answer the following business questions: What are the physical characteristics (weight, volume, dimensions) of each handling unit? To which reference document (for example, outbound delivery) are handling unit related? What packaging materials are being used for handling units? Who created or last modified a handling unit and when? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HNDLGUNTHDRINVTRYWRHSMGMT')/$value
semantic_en: "This CDS view retrieves general information of the handing unit header for handling units in storage locations managed in Inventory Management or in Warehouse Management. This CDS view provides the data to answer the following business questions: What are the physical characteristics (weight, volume, dimensions) of each handling unit? To which reference document (for example, outbound delivery) are handling unit related? What packaging materials are being used for handling units? Who created or last modified a handling unit and when? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - delivery
  - document
  - interface-view
  - inventory
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - material
  - metadata-only
---
# I_HNDLGUNTHDRINVTRYWRHSMGMT

**This CDS view retrieves general information of the handing unit header for handling units in storage locations managed in Inventory Management or in Warehouse Management. This CDS view provides the data to answer the following business questions: What are the physical characteristics (weight, volume, dimensions) of each handling unit? To which reference document (for example, outbound delivery) are handling unit related? What packaging materials are being used for handling units? Who created or last modified a handling unit and when? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HNDLGUNTHDRINVTRYWRHSMGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitExternalID` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `Warehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `HandlingUnitCharUUID` |  | |  |  | `CHAR(32)` | Character field, length 32 |
| `HandlingUnitExternalIdType` |  | |  |  | `CHAR(1)` | Type of External Handling Unit Identifier |
| `HndlgUnitExtIDCheckIsDisabled` |  | |  |  | `CHAR(1)` | Indicator if Handling Unit External ID Check is disabled |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `HandlingUnitInternalID` |  | |  |  | `CHAR(10)` | Internal Handling Unit Number |
| `HandlingUnitLowerLevelRefer` |  | |  |  | `CHAR(10)` | Higher-Level Handling Unit |
| `ParentHandlingUnitNumber` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `HighestLevelHandlingUnitNumber` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `PackagingMaterial` |  | |  |  | `CHAR(40)` | Packaging Material |
| `PackagingMaterialType` |  | |  |  | `CHAR(4)` | Packaging Material Type |
| `GrossWeight` |  | |  |  | `QUAN(15)` | Total Weight of Handling Unit |
| `NetWeight` |  | |  |  | `QUAN(15)` | Loading Weight of Handling Unit |
| `HandlingUnitMaxWeight` |  | |  |  | `QUAN(15)` | Allowed Loading Weight of a Handling Unit |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `HandlingUnitTareWeight` |  | |  |  | `QUAN(15)` | Tare Weight of Handling Unit |
| `HandlingUnitTareWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `GrossVolume` |  | |  |  | `QUAN(15)` | Total Volume of Handling Unit |
| `HandlingUnitNetVolume` |  | |  |  | `QUAN(15)` | Loading Volume of Handling Unit |
| `HandlingUnitMaxVolume` |  | |  |  | `QUAN(15)` | Allowed Loading Volume for Handling Unit |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitTareVolume` |  | |  |  | `QUAN(15)` | Tare Volume of Handling Unit |
| `HandlingUnitTareVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitLength` |  | |  |  | `QUAN(13)` | Length |
| `HandlingUnitWidth` |  | |  |  | `QUAN(13)` | Width |
| `HandlingUnitHeight` |  | |  |  | `QUAN(13)` | Height |
| `UnitOfMeasureDimension` |  | |  |  | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `HandlingUnitPackingObjectType` |  | |  |  | `CHAR(2)` | Packing Object |
| `HandlingUnitReferenceDocument` |  | |  |  | `CHAR(20)` |  |
| `HandlingUnitHasCrossRefDoc` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `HandlingUnitInternalStatus` |  | |  |  | `CHAR(4)` | Handling Unit Status |
| `HandlingUnitProcessStatus` |  | |  |  | `CHAR(1)` | Handling Unit Process Status |
| `SourceHandlingUnitUUID` |  | |  |  | `CHAR(22)` | Worldwide unique key for VEKP-VENUM |
| `PackingInstruction` |  | |  |  | `CHAR(22)` | Unique internal packing object number |
| `HandlingUnitSecondExternalId` |  | |  |  | `CHAR(20)` | Handling Unit's 2nd External Identification |
| `StorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `StorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `StorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `EWMResource` |  | |  |  | `CHAR(18)` | Resource (Means of Transportation or User) |
| `EWMConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `HandlingUnitIsClosed` |  | |  |  | `CHAR(1)` | Closed Packaging Material |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `EWMHUProcessStepIsCompleted` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `EWMHandlingUnitIsPlanned` |  | |  |  | `CHAR(1)` | Handling Unit Is Planned or Notified |
| `EWMHandlingUnitIsInStock` |  | |  |  | `CHAR(1)` | Handling Unit Is in Stock |
| `EWMHandlingUnitIsUnloaded` |  | |  |  | `CHAR(1)` | Handling Unit Is Unloaded |
| `EWMHandlingUnitIsLoaded` |  | |  |  | `CHAR(1)` | Handling Unit Is Loaded |
| `EWMTranspUnitIsAssigned` |  | |  |  | `CHAR(1)` | Handling Unit Is Assigned to Transportation Unit |
| `EWMHUContentChangeIsBlocked` |  | |  |  | `CHAR(1)` | Handling Unit Content Change Is Blocked |
| `EWMHUMovementChangeIsBlocked` |  | |  |  | `CHAR(1)` | Handling Unit Movement Is Blocked |
| `EWMHUAttributeChangeIsBlocked` |  | |  |  | `CHAR(1)` | Handling Unit Attribute Change Is Blocked |
| `EWMHUPostingChangeIsBlocked` |  | |  |  | `CHAR(1)` | Handling Unit Is Blocked for Posting Change |
| `EWMHUIsBlockedByCustoms` |  | |  |  | `CHAR(1)` | Handling Unit Is Blocked by Customs |
| `EWMHUIsPackedForShipping` |  | |  |  | `CHAR(1)` | Handling Unit Is Packed for Shipping |
| `EWMHandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `HandlingUnitMaxLength` |  | |  |  | `QUAN(15)` | Maximum Packing Length of a Packaging Material |
| `HandlingUnitMaxWidth` |  | |  |  | `QUAN(15)` | Maximum Allowed Packing Width of a Packaging Material |
| `HandlingUnitMaxHeight` |  | |  |  | `QUAN(15)` | Maximum Packing Height of a Packaging Material |
| `HandlingUnitMaxDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Maximum Packing Length/Width/Height |
