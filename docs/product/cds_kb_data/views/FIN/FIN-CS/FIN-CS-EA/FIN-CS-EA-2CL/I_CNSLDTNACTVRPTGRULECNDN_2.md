---
name: I_CNSLDTNACTVRPTGRULECNDN_2
description: "This CDS view provides access to the active version of the conditions defined for a consolidation reporting rule. The active reporting rule conditions are consumed within analytical applications for the calculation of the virtual consolidation reporting item dimension. This CDS view provides the data to answer the following business questions: Which active reporting rules exist? Which reporting items are assigned to the reporting rule? Which conditions are used for the reporting item calculation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECNDN_2')/$value
semantic_en: "This CDS view provides access to the active version of the conditions defined for a consolidation reporting rule. The active reporting rule conditions are consumed within analytical applications for the calculation of the virtual consolidation reporting item dimension. This CDS view provides the data to answer the following business questions: Which active reporting rules exist? Which reporting items are assigned to the reporting rule? Which conditions are used for the reporting item calculation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNACTVRPTGRULECNDN_2

**This CDS view provides access to the active version of the conditions defined for a consolidation reporting rule. The active reporting rule conditions are consumed within analytical applications for the calculation of the virtual consolidation reporting item dimension. This CDS view provides the data to answer the following business questions: Which active reporting rules exist? Which reporting items are assigned to the reporting rule? Which conditions are used for the reporting item calculation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNACTVRPTGRULECNDN_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` |  | |  |  | `CHAR(10)` | Reporting Item Hierarchy |
| `ConsolidationReportingRuleID` |  | |  |  | `CHAR(3)` | Reporting Rule |
| `ConsolidationReportingItem` |  | |  |  | `CHAR(10)` | Reporting Item |
| `FinancialSelection` |  | |  |  | `CHAR(32)` | Selection |
| `ConsolidationCharacteristic` |  | |  |  | `CHAR(30)` | Characteristic |
| `CnsldtnActiveRptgRuleSequence` |  | |  |  | `NUMC(9)` | Active Reporting Rule Sequence |
| `FromFiscalYearPeriod` |  | |  |  | `NUMC(7)` | From Fiscal Year Period |
| `ToFiscalYearPeriod` |  | |  |  | `NUMC(7)` | To Fiscal Year Period |
| `CnsldtnFSItemAttributeVersion` |  | |  |  | `CHAR(3)` | FS Item Attributes Version |
| `CnsldtnUnitAttributeVersion` |  | |  |  | `CHAR(3)` | Consolidation Unit Attribute Version |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CnsldtnCharacteristicValue` |  | |  |  | `CHAR(100)` | Characteristic Value |
| `SignIsInverted` |  | |  |  | `CHAR(1)` | Sign is Inverted |
| `CnsldtnCharcGlobalFieldName` |  | |  |  | `CHAR(30)` | Characteristic Global Field Name |
| `ActivatedByUser` |  | |  |  | `CHAR(12)` | Activated By |
| `ActivatedAtDate` |  | |  |  | `DATS(8)` | Activated On (Date) |
| `ActivatedAtTime` |  | |  |  | `TIMS(6)` | Activated At (Time) |
| `ActivatedAtDateTime` |  | |  |  | `DEC(15)` | Activated On |
