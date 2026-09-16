---
name: I_UNIVERSALALLOCATIONKEYFIELD
description: "Universal Allocation Key Field"
app_component: FIN-UA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONKEYFIELD')/$value
semantic_en: "Universal Allocation Key Field"
tags:
  - FIN
  - bo:companycode
  - component:FIN-UA-2CL
  - FIN-UA
  - FIN-UA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_UNIVERSALALLOCATIONKEYFIELD

**Universal Allocation Key Field**

| Property | Value |
|---|---|
| App Component | `FIN-UA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_UNIVERSALALLOCATIONKEYFIELD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationType` |  | |  |  | `CHAR(30)` | Table Name |
| `AllocationCycle` |  | |  |  | `CHAR(10)` | Allocation Cycle |
| `AllocationCycleStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `AllocationCycleSegment` |  | |  |  | `NUMC(4)` | Segment number within a cycle |
| `AllocationSetType` |  | |  |  | `CHAR(1)` | Type of Set |
| `AllocDocumentSequenceNumber` |  | |  |  | `NUMC(4)` | Sequence Number of Allocation Document |
| `AllocationFieldName` |  | |  |  | `CHAR(30)` | DB Field Name |
| `AllocationSetName` |  | |  |  | `CHAR(12)` | Set ID |
| `AllocationFieldMinimumValue` |  | |  |  | `CHAR(40)` | From Value |
| `AllocationFieldMaximumValue` |  | |  |  | `CHAR(40)` | To Value |
| `AllocationSetId` |  | |  |  | `CHAR(34)` | Identification of a Set |
