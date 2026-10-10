---
name: C_SCHEDULINGACTIVITY
description: "This CDS view provides access to scheduling activity customizing data for consumption purposes. It retrieves scheduling activity information along with language-dependent text descriptions. This CDS view provides the data to answer the following business questions: What scheduling activities are configured in the system? What is the description of a specific scheduling activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-ATP-SCH-BPS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SCHEDULINGACTIVITY')/$value
semantic_en: "This CDS view provides access to scheduling activity customizing data for consumption purposes. It retrieves scheduling activity information along with language-dependent text descriptions. This CDS view provides the data to answer the following business questions: What scheduling activities are configured in the system? What is the description of a specific scheduling activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CA
  - bo:companycode
  - CA-ATP
  - CA-ATP-SCH
  - CA-ATP-SCH-BPS
  - CA-ATP-SCH-BPS-2CL
  - component:CA-ATP-SCH-BPS-2CL
  - consumption-view
  - lob:cross_application components
  - metadata-only
---
# C_SCHEDULINGACTIVITY

**This CDS view provides access to scheduling activity customizing data for consumption purposes. It retrieves scheduling activity information along with language-dependent text descriptions. This CDS view provides the data to answer the following business questions: What scheduling activities are configured in the system? What is the description of a specific scheduling activity? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-ATP-SCH-BPS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SCHEDULINGACTIVITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingActivity` |  | |  |  | `CHAR(20)` | BPS – Activity |
| `SchedulingActivityText` |  | |  |  | `CHAR(80)` | BPS – Activity description |
