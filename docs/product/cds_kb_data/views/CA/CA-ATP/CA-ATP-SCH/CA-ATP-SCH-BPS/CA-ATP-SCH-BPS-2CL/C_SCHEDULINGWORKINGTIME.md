---
name: C_SCHEDULINGWORKINGTIME
description: "This CDS view provides access to scheduling working time configuration data, including working time types, their identifiers, associated calendars along with language-dependent text descriptions used for resource planning and scheduling operations. This CDS view provides the data to answer the following business questions: What working time types are configured for scheduling purposes? Which factory calendars are associated with specific working time configurations? How can I retrieve working time descriptions in my preferred language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-ATP-SCH-BPS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SCHEDULINGWORKINGTIME')/$value
semantic_en: "This CDS view provides access to scheduling working time configuration data, including working time types, their identifiers, associated calendars along with language-dependent text descriptions used for resource planning and scheduling operations. This CDS view provides the data to answer the following business questions: What working time types are configured for scheduling purposes? Which factory calendars are associated with specific working time configurations? How can I retrieve working time descriptions in my preferred language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
  - plan
  - metadata-only
---
# C_SCHEDULINGWORKINGTIME

**This CDS view provides access to scheduling working time configuration data, including working time types, their identifiers, associated calendars along with language-dependent text descriptions used for resource planning and scheduling operations. This CDS view provides the data to answer the following business questions: What working time types are configured for scheduling purposes? Which factory calendars are associated with specific working time configurations? How can I retrieve working time descriptions in my preferred language? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SCHEDULINGWORKINGTIME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingWorkingTimeType` |  | |  |  | `CHAR(2)` | Time stream: Type |
| `SchedulingWorkingTimeID` |  | |  |  | `CHAR(10)` | BPS - Working Time |
| `SchedulingCalendar` |  | |  |  | `CHAR(2)` | BPS - Factory Calendar |
| `SchedgWorkingTimeDescription` |  | |  |  | `CHAR(40)` | Time stream: Text of length 40 |
| `SchedulingCalendarDescription` |  | |  |  | `CHAR(60)` | Factory Calendar Text |
