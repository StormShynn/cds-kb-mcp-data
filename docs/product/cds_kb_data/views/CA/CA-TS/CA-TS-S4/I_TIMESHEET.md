---
name: I_TIMESHEET
description: "Timesheet"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: yes
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEET

**Timesheet**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetRecordUUID` | ✓ | |  |  | `RAW(16)` | Globally Unique Identifier |
| `TimeSheetRecord` |  | |  |  | `CHAR(12)` | Counter for Records in Time Recording |
| `WorkAssignment` |  | |  |  | `NUMC(8)` | Personnel Number |
| `TimeSheetDate` |  | |  |  | `DATS(8)` | Date |
| `RecordedHours` |  | |  |  | `QUAN(4)` | Hours |
| `HoursUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure for Display |
| `TimeSheetRecordLongText` |  | |  |  | `CHAR(1000)` | Timesheet long text |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `BillableControl` |  | |  |  | `CHAR(2)` | Accounting Indicator |
| `TimeSheetStatus` |  | |  |  | `CHAR(2)` | Processing Status |
| `TimeSheetPredecessorRecord` |  | |  |  | `CHAR(12)` | Reference Counter for Record to be Changed |
| `TimeSheetAccountingDocument` |  | |  |  | `CHAR(10)` | Document Number |
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Creating Record |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `TimeSheetApprovedByUser` |  | |  |  | `CHAR(12)` | Name of person who approved data |
| `TimeSheetApprovedDate` |  | |  |  | `DATS(8)` | Date of Approval |
| `TimeSheetCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `TimeSheetEntryTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
| `TimeSheetLastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `TimeSheetLastChangedTime` |  | |  |  | `TIMS(6)` | Time of Last Change |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetExtension` | `E_TimeSheetRecord` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Time Sheet'
@VDM.viewType: #BASIC
@ObjectModel: {
   sapObjectNodeType:{name: 'TimeSheet' },
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
 }


 @AbapCatalog.extensibility : {
                              extensible    : true,
                              allowNewDatasources: false,
                              elementSuffix : 'TIM',
                              quota.maximumFields: 350,
                              quota.maximumBytes  : 35000,                      
                              dataSources : [ '_TimeSheetExtension' ] 
                             }


@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {enabled: true , delta.changeDataCapture: { mapping:[
                {
                    table: 'CATSDBEXT', role: #MAIN,
                    viewElement: ['timesheetrecorduuid'],
                    tableElement: ['TimeSheetRecordUUID']
                },

                 {  table: 'CATSDB', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['TimeSheetRecord'],
                    tableElement: ['COUNTER']
                 }
               ]
             }
           }
         }
         
define view entity I_TimeSheet
  as select from R_TimeSheet
  association [1..1] to E_TimeSheetRecord as _TimeSheetExtension on $projection.TimeSheetRecord = _TimeSheetExtension.TimeSheetRecord
{
      // Key fields
  key TimeSheetRecordUUID,
      TimeSheetRecord,

      // Basic Info for timesheet
      WorkAssignment,
      TimeSheetDate,
      @Semantics.quantity.unitOfMeasure: 'HoursUnitOfMeasure'
      RecordedHours,
      HoursUnitOfMeasure,
      TimeSheetRecordLongText,

      // Acc. Obj -> Project
      WBSElementInternalID,
      ActivityType,
      WorkItem,
      BillableControl,

      /************      Future enhancement    ***************/

      //      // Acc. Obj -> Project
      //      TimeSheetOvertimeCategory,
      //      TimeSheetWrkLocCode,

      //      // Acc. Obj -> StatKeyFig --Non-Project related tasks
      //      TimeSheetTaskType,

      //      // Acc. Obj -> Cost Center
      //      SenderCostCenter,
      //      ReceiverCostCenter,

      //      // Acc. Obj -> Purchase Order
      //      PurchaseOrder,
      //      PurchaseOrderItem,
      //
      //      // Acc. Obj -> Service Mgmt.
      //      ServiceDocumentType,
      //      ServiceDocument,
      //      ServiceDocumentItem,
      //
      //      // Acc. Obj -> PSM
      //      SenderPubSecFund,
      //      SendingPubSecFunctionalArea,
      //      SenderPubSecGrant,
      //      SenderPubSecBudgetPeriod,
      //      ReceiverPubSecFund,
      //      ReceiverPubSecFuncnlArea,
      //      ReceiverPubSecGrant,
      //      ReceiverPubSecBudgetPeriod,
      //
      //      // Administrative and change log fields
      //      TimeSheetLastChangedDate,
      //      TimeSheetLastChangedTime

      // TimeSheet Derived attributes
      TimeSheetStatus,
      //TimeSheetRejectionReason,
      TimeSheetPredecessorRecord,
      TimeSheetAccountingDocument,
      WorkflowTaskInternalID,

      // Administrative and change log fields
      CreatedByUser,
      LastChangedByUser,
      TimeSheetApprovedByUser,
      TimeSheetApprovedDate,
      TimeSheetCreationDate,
      TimeSheetEntryTime,
      LastChangeDateTime,
      TimeSheetLastChangedDate,
      TimeSheetLastChangedTime
}
```
