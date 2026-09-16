---
name: C_CMPLRQRSLTMARKETABILITYDEX
description: "Compliance Assessment for Products"
app_component: EHS-SUS-PMA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value
semantic_en: "Compliance Assessment for Products"
tags:
  - EHS
  - bo:material
  - component:EHS-SUS-PMA
  - consumption-view
  - EHS-SUS
  - EHS-SUS-PMA
  - product
  - metadata-only
---
# C_CMPLRQRSLTMARKETABILITYDEX

**Compliance Assessment for Products**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-PMA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLRQRSLTMARKETABILITYDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqRsltUUID` |  | |  |  | `RAW(16)` | Compliance Assessment UUID |
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `SubstanceUUID` |  | |  |  | `RAW(16)` | Substance |
| `ChmlSuplrMatlUUID` |  | |  |  | `RAW(16)` | Supplier Raw Material |
| `ChemicalCustomerMaterialUUID` |  | |  |  | `RAW(16)` | Chemical Customer Material UUID |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqVers` |  | |  |  | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqPattern` |  | |  |  | `CHAR(30)` |  |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `CmplRqRsltProcessingStatus` |  | |  |  | `CHAR(2)` | Processing Status |
| `ValidityStartDateTime` |  | |  |  | `DEC(15)` | Valid-From Date Time Stamp |
| `ValidityEndDateTime` |  | |  |  | `DEC(15)` | Valid-To Date Time Stamp |
| `CmplRqRsltReldCmplncSts` |  | |  |  | `CHAR(2)` | Released Compliance Status |
| `CmplRqRsltCalculatedStatus` |  | |  |  | `CHAR(2)` | Calculated Compliance Status |
| `CmplRqRsltManualStatus` |  | |  |  | `CHAR(2)` | Manually Set Status of a Compliance Requirement |
| `CmplRqRsltPrelimCmplncSts` |  | |  |  | `CHAR(2)` | Preliminary Compliance Status |
| `CmplRqRsltStatusRemark` |  | |  |  | `STRI(999999)` | Remarks on Status of Compliance Requirement |
| `ChmlCompositionType` |  | |  |  | `CHAR(10)` | Legal Area |
| `MaterialIsSold` |  | |  |  | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | |  |  | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | |  |  | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | |  |  | `CHAR(1)` | Product is Produced |
| `CmplRqRsltReferencedObjectUUID` |  | |  |  | `RAW(16)` | Asessment (CRR) Reference / Host UUID |
| `CmplRqRsltReferencedObjectType` |  | |  |  | `CHAR(3)` | Asessment Reference / Host Type |
| `CmplRqRsltReferencedObjectId` |  | |  |  | `CHAR(255)` | Object Type of Compliance Assessment Reference |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
