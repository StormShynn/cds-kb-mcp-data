---
name: I_MAINTENANCEORDERCOST
description: "This CDS view provides access to cost and financial data for maintenance orders. It serves as a basic interface view in the Virtual Data Model (VDM) that enables analysis of maintenance order costs across different fiscal periods, value types, and controlling dimensions. The view structures cost information by controlling area currency and breaks down earned values across up to 16 fiscal periods, supporting both actual and planned cost tracking for maintenance activities. This CDS view provides the data to answer the following business questions: What are the actual and planned costs incurred for each maintenance order across different fiscal periods and how do they trend over time? How do maintenance order costs vary by controlling value type (actual, plan, commitment) and debit type within a specific fiscal year? Which maintenance orders have costs recorded in specific value categories and result categories for variance analysis and cost control purposes? How do maintenance order costs distribute across different planning versions and accounting indicators for budgeting and forecasting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERCOST')/$value
semantic_en: "This CDS view provides access to cost and financial data for maintenance orders. It serves as a basic interface view in the Virtual Data Model (VDM) that enables analysis of maintenance order costs across different fiscal periods, value types, and controlling dimensions. The view structures cost information by controlling area currency and breaks down earned values across up to 16 fiscal periods, supporting both actual and planned cost tracking for maintenance activities. This CDS view provides the data to answer the following business questions: What are the actual and planned costs incurred for each maintenance order across different fiscal periods and how do they trend over time? How do maintenance order costs vary by controlling value type (actual, plan, commitment) and debit type within a specific fiscal year? Which maintenance orders have costs recorded in specific value categories and result categories for variance analysis and cost control purposes? How do maintenance order costs distribute across different planning versions and accounting indicators for budgeting and forecasting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - account
  - bo:companycode
  - budget
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTENANCEORDERCOST

**This CDS view provides access to cost and financial data for maintenance orders. It serves as a basic interface view in the Virtual Data Model (VDM) that enables analysis of maintenance order costs across different fiscal periods, value types, and controlling dimensions. The view structures cost information by controlling area currency and breaks down earned values across up to 16 fiscal periods, supporting both actual and planned cost tracking for maintenance activities. This CDS view provides the data to answer the following business questions: What are the actual and planned costs incurred for each maintenance order across different fiscal periods and how do they trend over time? How do maintenance order costs vary by controlling value type (actual, plan, commitment) and debit type within a specific fiscal year? Which maintenance orders have costs recorded in specific value categories and result categories for variance analysis and cost control purposes? How do maintenance order costs distribute across different planning versions and accounting indicators for budgeting and forecasting purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERCOST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrderInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Debit type |
| `ControllingValueType` |  | |  |  | `CHAR(2)` | Value Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ValueCategory` |  | |  |  | `CHAR(14)` | Value category |
| `PlanningVersion` |  | |  |  | `CHAR(3)` | Planning/budgeting version |
| `HighestPeriodInRecord` |  | |  |  | `NUMC(3)` | Period Block |
| `BudgetType` |  | |  |  | `CHAR(4)` | Budget Type Budgeting/Planning |
| `AccountingIndicatorCode` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `ResultCategory` |  | |  |  | `NUMC(2)` | Variance and Results Analysis Category |
| `Period00EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period01EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period02EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period03EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period04EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period05EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period06EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period07EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period08EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period09EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period10EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period11EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period12EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period13EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period14EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period15EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
| `Period16EarnedValInCtrlgArCrcy` |  | |  |  | `CURR(15)` | Period value in ledger currency |
