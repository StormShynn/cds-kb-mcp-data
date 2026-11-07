---
name: C_ELECTRONICDOCUMENT
description: "Electronic Document"
app_component: CA-GTF-CSC-EDO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ELECTRONICDOCUMENT')/$value
semantic_en: "Electronic Document"
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-EDO
  - component:CA-GTF-CSC-EDO
  - consumption-view
  - document
  - lob:cross_application components
  - metadata-only
---
# C_ELECTRONICDOCUMENT

**Electronic Document**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ELECTRONICDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` |  | |  |  | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocSequenceNmbr` |  | |  |  | `NUMC(3)` | eDocument Sequence Number |
| `ElectronicDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ElectronicDocCountry` |  | |  |  | `CHAR(3)` | Company Country/Region |
| `ElectronicDocSourceType` |  | |  |  | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` |  | |  |  | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` |  | |  |  | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` |  | |  |  | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ElectronicDocLastChangedByUser` |  | |  |  | `CHAR(12)` | Changed by (User) |
| `ElectronicDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed on (Date) |
| `ElectronicDocLastChangeTime` |  | |  |  | `TIMS(6)` | Changed On (Time) |
| `ElectronicDocCreatedByUser` |  | |  |  | `CHAR(12)` | Created By (User) |
| `ElectronicDocCreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `ElectronicDocCreationTime` |  | |  |  | `TIMS(6)` | Created on (Time) |
| `ElectronicDocSrceCreatedByUser` |  | |  |  | `CHAR(12)` | Source Document Created By (User) |
| `ElectronicDocProcess` |  | |  |  | `CHAR(10)` | eDocument Process |
| `ElectronicDocLastProcStep` |  | |  |  | `CHAR(10)` | eDocument Last Process Step |
| `ElectronicDocLastProcStepVar` |  | |  |  | `CHAR(10)` | eDocument: Variant of the Last Process Step |
| `ElectronicDocHasError` |  | |  |  | `CHAR(1)` | Error Flag |
| `ElectronicDocProcessVersion` |  | |  |  | `NUMC(4)` | eDocument Process Version |
| `ElectronicDocRefSqncNmbr` |  | |  |  | `NUMC(5)` | eDocument document reference sequence number |
| `ElectronicDocStatus` |  | |  |  | `CHAR(40)` | eDocument Status Overview |
| `ElectronicDocPostingDate` |  | |  |  | `DATS(8)` | Posting Date of the Source Document |
| `ElectronicDocIsContingency` |  | |  |  | `CHAR(1)` | eDocument is Created in Contingency |
| `ElectronicDocReferenceProcess` |  | |  |  | `CHAR(10)` | eDocument Reference Process |
| `ElectronicDocClassName` |  | |  |  | `CHAR(30)` | eDocument Class Name |
| `ElectronicDocIsArchPrprocgDone` |  | |  |  | `CHAR(1)` | Preprocessing for Archiving Completed |
| `ElectronicDocInterfaceType` |  | |  |  | `CHAR(10)` | Interface Type |
| `ElectronicDocInterfaceUUID` |  | |  |  | `CHAR(32)` | Interface Message ID |
| `ElectronicDocFileUUID` |  | |  |  | `CHAR(32)` | File GUID |
| `ElectronicDocInterfaceID` |  | |  |  | `CHAR(30)` | Interface |
| `ElectronicDocInterfaceVersion` |  | |  |  | `NUMC(4)` | eDocument Interface Version |
| `ElectronicDocIsCntdInArchive` |  | |  |  | `CHAR(1)` | Included in Archive Counter |
| `ElectronicDocMetaStatus` |  | |  |  | `CHAR(4)` | eDocument Status |
| `ElectronicDocTaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `ElectronicDocProcessForStatus` |  | |  |  | `CHAR(10)` | eDocument Reference Process |
