---
name: I_BUSEVTLOGBUSEVENTPAYLOAD
description: "Busevtlogbuseventpayload"
semantic_vi: "Chứa dữ liệu nhật ký sự kiện kinh doanh, bao gồm thay đổi trường và giá trị của chúng, cho mục đích kiểm toán và phân tích."
keywords:
  - "business event"
  - "log data"
  - "audit"
  - "analysis"
  - "sap object"
  - "field change"
  - "event log"
  - "busevtlog"
  - "ca-gtf-bel"
  - "cross-application components"
semantic_en: "Exposes business event log data, including field changes and their values, for auditing and analysis purposes."
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
# I_BUSEVTLOGBUSEVENTPAYLOAD

**Busevtlogbuseventpayload**

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
| `BusEvtLogFieldName` | ✓ | |  |  | `CHAR(30)` | Field Identifier for SAP Object |
| `BusEvtLogOldFieldValue` |  | |  |  | `CHAR(256)` | Previous Value of an Attribute |
| `BusEvtLogOldFieldUnit` |  | |  |  | `UNIT(3)` | Previous Unit of Measure |
| `BusEvtLogNewFieldValue` |  | |  |  | `CHAR(256)` | Updated Value of an Attribute |
| `BusEvtLogNewFieldUnit` |  | |  |  | `UNIT(3)` | Updated Unit of Measure |
| `BusEvtLogOldFieldCurrency` |  | |  |  | `CUKY(5)` | Previous Currency Key |
| `BusEvtLogNewFieldCurrency` |  | |  |  | `CUKY(5)` | Updated Currency Key |
| `BusEvtLogFieldHasOldValue` |  | |  |  | `CHAR(1)` | Field has an Old Value |
| `BusEvtLogFieldIsQualifier` |  | |  |  | `CHAR(1)` | Specifies if the Attribute is a Qualifier |
| `BusEvtLogLastChangedDateTime` |  | |  |  | `DEC(15)` | Timestamp of Last Change |
| `BusEvtLogGlobalFieldName` |  | |  |  | `CHAR(30)` | Field Name |
| `BuEvLgGlobalFieldNameUpperCase` |  | |  |  | `CHAR(30)` | Property Name of the Object |
| `ChangeDocumentDatabaseTable` |  | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocDatabaseTableField` |  | |  |  | `CHAR(30)` | Field Name |

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
@EndUserText.label: 'Business Event Payload'

define view entity I_BusEvtLogBusEventPayload as select from I_BusEvtLogPayload {
  key BusinessEventUUID,
  key SAPObjectType,
  key BusEvtLogFieldName,
      BusEvtLogOldFieldValue,
      BusEvtLogOldFieldUnit,
      BusEvtLogNewFieldValue,
      BusEvtLogNewFieldUnit,
      BusEvtLogOldFieldCurrency,
      BusEvtLogNewFieldCurrency,
      BusEvtLogFieldHasOldValue,
      BusEvtLogFieldIsQualifier,
      BusEvtLogLastChangedDateTime,
      BusEvtLogGlobalFieldName,
      BuEvLgGlobalFieldNameUpperCase,
      ChangeDocumentDatabaseTable,
      ChangeDocDatabaseTableField
 
}
```
