---
name: I_TIMESHEETRECORD
description: "Timesheetrecord"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
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
# I_TIMESHEETRECORD

**Timesheetrecord**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetRecord` | ✓ | |  | `counter` | `CHAR(12)` | Counter for Records in Time Recording |
| `PersonWorkAgreement` |  | |  | `pernr` | `NUMC(8)` | Personnel Number |
| `TimeSheetDate` |  | |  | `workdate` | `DATS(8)` | Date |
| `WBSElementInternalID` |  | |  | `cast(catsdb.rproj as ps_s4_pspnr preserving type)` | `NUMC(8)` | WBS Element |
| `ActivityType` |  | |  | `lstar` | `CHAR(6)` | Activity Type |
| `WorkItem` |  | |  | `work_item_id` | `CHAR(10)` | Work Item ID |
| `RecordedHours` |  | |  | `catshours` | `QUAN(4)` | Hours |
| `HoursUnitOfMeasure` |  | |  | `meinh` | `UNIT(3)` | Unit of Measure for Display |
| `PurchaseOrder` |  | |  | `sebeln` | `CHAR(10)` | Sending purchase order |
| `PurchaseOrderItem` |  | |  | `sebelp` | `NUMC(5)` | Sending purchase order item |
| `RecordedAmount` |  | |  | `catsamount` | `CURR(13)` | CATS Amount |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `RecordedQuantity` |  | |  | `catsquantity` | `QUAN(15)` | Time Sheet: Number (Unit of Measure) |
| `UnitOfMeasure` |  | |  | `unit` | `UNIT(3)` | Unit of Measurement |
| `ReceiverCostCenter` |  | |  | `rkostl` | `CHAR(10)` | Receiver Cost Center |
| `SenderCostCenter` |  | |  | `skostl` | `CHAR(10)` | Sender Cost Center |
| `InternalOrder` |  | |  | `raufnr` | `CHAR(12)` | Receiver Order |
| `ServiceDocumentType` |  | |  | `service_doc_type` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  | `service_doc_id` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` | `NUMC(6)` | Service Document Item ID |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `TimeSheetTaskType` |  | |  | `tasktype` | `CHAR(4)` | Task Type |
| `TimeSheetTaskLevel` |  | |  | `tasklevel` | `CHAR(8)` | Task Level |
| `TimeSheetTaskComponent` |  | |  | `taskcomponent` | `CHAR(8)` | Task component |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `TimeSheetNote` |  | |  | `ltxa1` | `CHAR(40)` | Short Text |
| `TimeSheetStatus` |  | |  | `status` | `CHAR(2)` | Processing Status |
| `RejectionReason` |  | |  | `reason` | `CHAR(4)` | Reason for rejection |
| `TimeSheetPredecessorRecord` |  | |  | `refcounter` | `CHAR(12)` | Reference Counter for Record to be Changed |
| `TimeSheetCreationDate` |  | |  | `ersda` | `DATS(8)` | Created On |
| `TimeSheetEntryTime` |  | |  | `erstm` | `TIMS(6)` | Time of Entry |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | User Creating Record |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `TimeSheetApprovedByUser` |  | |  | `apnam` | `CHAR(12)` | Name of person who approved data |
| `TimeSheetApprovedDate` |  | |  | `apdat` | `DATS(8)` | Date of Approval |
| `TimeSheetLastChangedDate` |  | |  | `laeda` | `DATS(8)` | Date of Last Change |
| `TimeSheetLastChangedTime` |  | |  | `laetm` | `TIMS(6)` | Time of Last Change |
| `AccountingIndicatorCode` |  | |  | `bemot` | `CHAR(2)` | Accounting Indicator |
| `WorkflowTaskInternalID` |  | |  | `workitemid` | `NUMC(12)` | Work item ID |
| `TimeSheetWrkLocCode` |  | |  | `wtart` | `CHAR(4)` | Tax area work center |
| `TimeSheetOvertimeCategory` |  | |  | `overtimecat` | `CHAR(4)` | Overtime Category |
| `TimeSheetHasLongText` |  | |  | `longtext` | `CHAR(1)` | Long Text |
| `TimeSheetAccountingDocument` |  | |  | `belnr` | `CHAR(10)` | Document Number |
| `SenderPubSecFund` |  | |  | `s_fund` | `CHAR(10)` | Sender fund |
| `SendingPubSecFunctionalArea` |  | |  | `s_func_area` | `CHAR(16)` | Sending Functional Area |
| `SenderPubSecGrant` |  | |  | `s_grant_nbr` | `CHAR(20)` | Sender Grant |
| `SenderPubSecBudgetPeriod` |  | |  | `sbudget_pd` | `CHAR(10)` | FM: Sender  Budget Period |
| `ReceiverPubSecFund` |  | |  | `fund` | `CHAR(10)` | Receiver Fund |
| `ReceiverPubSecFuncnlArea` |  | |  | `func_area` | `CHAR(16)` | Receiving Functional Area |
| `ReceiverPubSecGrant` |  | |  | `grant_nbr` | `CHAR(20)` | Receiver Grant |
| `ReceiverPubSecBudgetPeriod` |  | |  | `budget_pd` | `CHAR(10)` | FM: Receiver Budget Period |
| `_TimeSheetRejReasonText` | | ✓ | | | | |
| `_TimeSheetStatusText` | | ✓ | | | | |
| `_TimeSheetWrkLoc` | | ✓ | | | | |
| `_TimeSheetTaskTypeText` | | ✓ | | | | |
| `_TimeSheetOvertimeCatText` | | ✓ | | | | |
| `_TimeSheetRecordLongText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetRejReasonText` | `I_TimeSheetRejectionReasonText` | [0..1] |
| `_TimeSheetStatusText` | `I_TimeSheetStatusText` | [0..1] |
| `_TimeSheetWrkLoc` | `I_TimeSheetWrkLoc` | [0..1] |
| `_TimeSheetTaskTypeText` | `I_TimeSheetTaskTypeText` | [0..1] |
| `_TimeSheetOvertimeCatText` | `I_TimeSheetOvertimeCatText` | [0..1] |
| `_TimeSheetRecordLongText` | `I_TimeSheetRecordLongText` | [0..1] |
| `_TimeSheetRecordExtention` | `E_TimeSheetRecord` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMESHEETRECORD'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_TimeSheetRecordLongText','_TIMESHEETTASKTYPETEXT']
@Analytics: { dataCategory: #FACT, dataExtraction: {enabled: true , delta.changeDataCapture.automatic: true}}
@ObjectModel.representativeKey: 'TimeSheetRecord'
@ObjectModel.usageType.serviceQuality : #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@EndUserText.label: 'Time Recording Data'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,  #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name :'TimeSheet'
define view I_TimeSheetRecord
  as select from catsdb
  association [0..1] to I_TimeSheetRejectionReasonText as _TimeSheetRejReasonText   on  $projection.RejectionReason      = _TimeSheetRejReasonText.TimeSheetRejectionReason
                                                                                    and _TimeSheetRejReasonText.Language = $session.system_language

  association [0..1] to I_TimeSheetStatusText          as _TimeSheetStatusText      on  $projection.TimeSheetStatus   = _TimeSheetStatusText.TimeSheetStatus
                                                                                    and _TimeSheetStatusText.Language = $session.system_language

  association [0..1] to I_TimeSheetWrkLoc              as _TimeSheetWrkLoc          on  $projection.TimeSheetWrkLocCode =       _TimeSheetWrkLoc.TimeSheetWrkLocCode
                                                                                    and $projection.TimeSheetDate       between _TimeSheetWrkLoc.TimeSheetWrkLocStartDate and _TimeSheetWrkLoc.TimeSheetWrkLocEndDate

  association [0..1] to I_TimeSheetTaskTypeText        as _TimeSheetTaskTypeText    on  $projection.TimeSheetTaskType   = _TimeSheetTaskTypeText.TimeSheetTaskType
                                                                                    and _TimeSheetTaskTypeText.Language = $session.system_language

  association [0..1] to I_TimeSheetOvertimeCatText     as _TimeSheetOvertimeCatText on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCatText.TimeSheetOvertimeCategory
                                                                                    and _TimeSheetOvertimeCatText.Language    = $session.system_language

  association [0..1] to I_TimeSheetRecordLongText      as _TimeSheetRecordLongText  on  $projection.TimeSheetRecord       = _TimeSheetRecordLongText.TimeSheetRecord
                                                                                    and _TimeSheetRecordLongText.Language is not null
  ----Extension Association
  association [1..1] to E_TimeSheetRecord              as _TimeSheetRecordExtention on  $projection.TimeSheetRecord = _TimeSheetRecordExtention.TimeSheetRecord
{

  key  catsdb.counter                                    as TimeSheetRecord,
       catsdb.pernr                                      as PersonWorkAgreement,
       catsdb.workdate                                   as TimeSheetDate,
       cast(catsdb.rproj as ps_s4_pspnr preserving type) as WBSElementInternalID,
       catsdb.lstar                                      as ActivityType,
       catsdb.work_item_id                               as WorkItem,
       catsdb.catshours                                  as RecordedHours,
       catsdb.meinh                                      as HoursUnitOfMeasure,
       catsdb.sebeln                                     as PurchaseOrder,
       catsdb.sebelp                                     as PurchaseOrderItem,
       @Semantics.amount.currencyCode: 'Currency'
       catsdb.catsamount                                 as RecordedAmount, 
       @Semantics.currencyCode: true
       catsdb.waers                                      as Currency,
       @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
       catsdb.catsquantity                               as RecordedQuantity,
       @Semantics.unitOfMeasure: true
       catsdb.unit                                       as UnitOfMeasure,
       catsdb.rkostl                                     as ReceiverCostCenter,
       catsdb.skostl                                     as SenderCostCenter,
       catsdb.raufnr                                     as InternalOrder,
       catsdb.service_doc_type                           as ServiceDocumentType,
       catsdb.service_doc_id                             as ServiceDocument,
       catsdb.service_doc_item_id                        as ServiceDocumentItem,
       catsdb.kokrs                                      as ControllingArea,
       catsdb.tasktype                                   as TimeSheetTaskType,
       catsdb.tasklevel                                  as TimeSheetTaskLevel,
       catsdb.taskcomponent                              as TimeSheetTaskComponent,
       catsdb.bukrs                                      as CompanyCode,
       catsdb.ltxa1                                      as TimeSheetNote,
       catsdb.status                                     as TimeSheetStatus,
       catsdb.reason                                     as RejectionReason,
       catsdb.refcounter                                 as TimeSheetPredecessorRecord,
       catsdb.ersda                                      as TimeSheetCreationDate,
       catsdb.erstm                                      as TimeSheetEntryTime,
       catsdb.ernam                                      as CreatedByUser,
       catsdb.aenam                                      as LastChangedByUser,
       catsdb.apnam                                      as TimeSheetApprovedByUser,
       catsdb.apdat                                      as TimeSheetApprovedDate,
       catsdb.laeda                                      as TimeSheetLastChangedDate,
       catsdb.laetm                                      as TimeSheetLastChangedTime,
       catsdb.bemot                                      as AccountingIndicatorCode,
       catsdb.workitemid                                 as WorkflowTaskInternalID,
       catsdb.wtart                                      as TimeSheetWrkLocCode,
       catsdb.overtimecat                                as TimeSheetOvertimeCategory,
       catsdb.longtext                                   as TimeSheetHasLongText,
       catsdb.belnr                                      as TimeSheetAccountingDocument, // added in CE2002
       catsdb.s_fund                                     as SenderPubSecFund,                  //added in CE2111
       catsdb.s_func_area                                as SendingPubSecFunctionalArea,      //added in CE2111
       catsdb.s_grant_nbr                                as SenderPubSecGrant,               //added in CE2111
       catsdb.sbudget_pd                                 as SenderPubSecBudgetPeriod,       //added in CE2111
       catsdb.fund                                       as ReceiverPubSecFund,            //added in CE2111
       catsdb.func_area                                  as ReceiverPubSecFuncnlArea,     //added in CE2111
       catsdb.grant_nbr                                  as ReceiverPubSecGrant,         //added in CE2111
       catsdb.budget_pd                                  as ReceiverPubSecBudgetPeriod, //added in CE2111
       _TimeSheetRejReasonText,
       _TimeSheetStatusText,
       _TimeSheetWrkLoc,
       _TimeSheetTaskTypeText,
       _TimeSheetOvertimeCatText,
       _TimeSheetRecordLongText
}
```
