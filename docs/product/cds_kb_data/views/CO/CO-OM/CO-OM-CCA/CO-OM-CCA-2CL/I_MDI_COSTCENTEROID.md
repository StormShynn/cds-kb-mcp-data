---
name: I_MDI_COSTCENTEROID
description: "This CDS view provides access to the global object IDs of cost centers in the context of SAP Master Data Integration (MDI). You can use these object IDs to map cost centers for replication between external systems and SAP S/4HANA Cloud Public Edition using the integration scenarios in MDI. This prevents duplicate cost center records and master data inconsistencies. This CDS view provides the data to answer the following business questions: How do I ensure that cost centers from external systems map correctly to cost centers in the SAP S/4HANA Cloud Public Edition system during master data integration? How do I avoid creating duplicate records in external systems when replicating data from SAP S/4HANA Cloud Public Edition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDI_COSTCENTEROID')/$value
semantic_en: "This CDS view provides access to the global object IDs of cost centers in the context of SAP Master Data Integration (MDI). You can use these object IDs to map cost centers for replication between external systems and SAP S/4HANA Cloud Public Edition using the integration scenarios in MDI. This prevents duplicate cost center records and master data inconsistencies. This CDS view provides the data to answer the following business questions: How do I ensure that cost centers from external systems map correctly to cost centers in the SAP S/4HANA Cloud Public Edition system during master data integration? How do I avoid creating duplicate records in external systems when replicating data from SAP S/4HANA Cloud Public Edition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:businesspartner
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
  - master-data
  - metadata-only
---
# I_MDI_COSTCENTEROID

**This CDS view provides access to the global object IDs of cost centers in the context of SAP Master Data Integration (MDI). You can use these object IDs to map cost centers for replication between external systems and SAP S/4HANA Cloud Public Edition using the integration scenarios in MDI. This prevents duplicate cost center records and master data inconsistencies. This CDS view provides the data to answer the following business questions: How do I ensure that cost centers from external systems map correctly to cost centers in the SAP S/4HANA Cloud Public Edition system during master data integration? How do I avoid creating duplicate records in external systems when replicating data from SAP S/4HANA Cloud Public Edition? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDI_COSTCENTEROID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MDI_CostCenterOID` |  | |  |  | `CHAR(36)` | Cost Center: Global Unique ID (SCP) |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
