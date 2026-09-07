---
name: I_BUEVLGBUSEVTFULLPYLDJSON
description: "Buevlgbusevtfullpyldjson"
semantic_vi: "View này hiển thị dữ liệu nhật ký sự kiện kinh doanh, bao gồm thông tin payload và thời gian thay đổi, có thể được sử dụng để phân tích và theo dõi sự kiện kinh doanh theo thời gian thực."
keywords:
  - "business event"
  - "event log"
  - "payload"
  - "timestamp"
  - "sap object type"
  - "business event uuid"
  - "bus evt log payload json string"
  - "bus evt log last changed datetime"
  - "ca-gtf-bel"
  - "cross-application components"
  - "interface view"
semantic_en: "This view exposes business event log data, including payload information and timestamps, which can be used to analyze and track business events in real-time."
app_component: CA-GTF-BEL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - interface-view
  - component:CA-GTF-BEL
  - lob:Cross-Application Components
---
# I_BUEVLGBUSEVTFULLPYLDJSON

**Buevlgbusevtfullpyldjson**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessEventUUID` | ✓ | |  |  | `CHAR(32)` | Event GUID |
| `SAPObjectType` | ✓ | |  |  | `CHAR(30)` | RAP SOT: SAP Object Type |
| `BusEvtLogPayloadJSONString` |  | |  |  |  |  |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel: {
   sapObjectNodeType:{name: 'BusEvtLogEventPayload'},
   representativeKey: 'BusinessEventUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
}
@EndUserText.label: 'Business Event Data'


define view entity I_BuEvLgBusEvtFullPyldJSON as select from I_BusEvtLogEvtPayload
{
  key BusinessEventUUID,
  key SAPObjectType,
      BusEvtLogPayloadJSONString,
      BusEvtLogLastChangedDateTime
      
}
```
