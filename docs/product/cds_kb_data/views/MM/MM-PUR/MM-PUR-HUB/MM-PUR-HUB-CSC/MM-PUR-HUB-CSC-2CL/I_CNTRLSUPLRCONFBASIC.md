---
name: I_CNTRLSUPLRCONFBASIC
description: "This CDS view provides access to central supplier confirmation header data in SAP S/4HANA Public Cloud. It serves as the root view for managing supplier confirmations related to procurement processes, including confirmation status, supplier information, and external system references. This CDS view provides the data to answer the following business questions: What is the current processing status of supplier confirmations? Which supplier confirmations are blocked for end of purpose? How many supplier confirmations were created by a specific user or purchasing organization? What are the external references associated with supplier confirmations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-PUR-HUB-CSC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFBASIC')/$value
semantic_en: "This CDS view provides access to central supplier confirmation header data in SAP S/4HANA Public Cloud. It serves as the root view for managing supplier confirmations related to procurement processes, including confirmation status, supplier information, and external system references. This CDS view provides the data to answer the following business questions: What is the current processing status of supplier confirmations? Which supplier confirmations are blocked for end of purpose? How many supplier confirmations were created by a specific user or purchasing organization? What are the external references associated with supplier confirmations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-HUB-CSC-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-HUB
  - MM-PUR-HUB-CSC
  - MM-PUR-HUB-CSC-2CL
  - supplier
  - metadata-only
---
# I_CNTRLSUPLRCONFBASIC

**This CDS view provides access to central supplier confirmation header data in SAP S/4HANA Public Cloud. It serves as the root view for managing supplier confirmations related to procurement processes, including confirmation status, supplier information, and external system references. This CDS view provides the data to answer the following business questions: What is the current processing status of supplier confirmations? Which supplier confirmations are blocked for end of purpose? How many supplier confirmations were created by a specific user or purchasing organization? What are the external references associated with supplier confirmations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNTRLSUPLRCONFBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierConfirmation` |  | |  |  | `CHAR(10)` | Central supplier Confirmation Number |
| `CntrlSuplrConfRefPrmtHbRpldPO` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `ProcurementHubSourceSystem` |  | |  |  | `CHAR(10)` | Connected System ID |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Change Time Stamp |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `PurchasingDocumentType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `IsEndOfPurposeBlocked` |  | |  |  | `CHAR(1)` | Business Purpose Completed |
| `CntrlSuplrConfProcessingStatus` |  | |  |  | `CHAR(2)` | Supplier Confirmation Processing State |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SuplrConfExternalReference` |  | |  |  | `CHAR(70)` | Supplier External Reference ID |
| `CntrlSuplrConfCreationType` |  | |  |  | `CHAR(1)` | Creation Type |
| `CSupConfExtRefLastChgdDteTme` |  | |  |  | `DEC(21)` | External Change Time Stamp |
| `CntrlSuplrConfExternalSystemID` |  | |  |  | `CHAR(60)` | ID of External Reference System |
