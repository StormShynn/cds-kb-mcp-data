---
name: I_LGLTRANSWRKFLWEMLDEADLINE
description: "Lgltranswrkflwemldeadline"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - workflow
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLTRANSWRKFLWEMLDEADLINE

**Lgltranswrkflwemldeadline**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionWrkflwSqnc` |  | |  |  | `INT2(5)` | Task Group |
| `LglTransWrkFlwModInstce` |  | |  |  | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `LegalTransaction` |  | | `_LegalTransactionBase` | `LegalTransaction` | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | | `_LegalTransactionBase` | `LegalTransactionTitle` | `CHAR(128)` | Legal Transaction Name |
| `LegalTransactionHealth` |  | | `_LegalTransactionBase` | `LegalTransactionHealth` | `CHAR(4)` | Legal Transaction Status |
| `LegalTransactionTaskName` |  | |  | `cast( _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as sww_witext )` | `CHAR(120)` | Work item text |
| `LegalTransactionTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` | `CHAR(1)` | Work Item Type |
| `WorkflowTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` | `CHAR(1)` | Work Item Type |
| `LegalTransactionTaskTypeName` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` | `CHAR(20)` | Work Item Type |
| `WorkflowTaskTypeDesc` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` | `CHAR(20)` | Work Item Type |
| `WorkflowTaskStepType` |  | | `_WorkflowTask` | `WorkflowTaskStepType` | `CHAR(40)` | Workflow: Step Id |
| `WorkflowStepTypeSubject` |  | |  | `_WorkflowTask._WorkflowStepType._WorkflowTaskStepTypeText[1:Language=$session.system_language].WorkflowStepTypeSubject` | `CHAR(255)` | Text, 255 Characters |
| `LegalTransactionTaskStatus` |  | | `_WorkflowTask` | `WorkflowTaskStatus` | `CHAR(12)` | Processing Status of a Work Item |
| `LegalTransactionTaskStatusName` |  | |  | `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` | `CHAR(20)` | Workflow: Work Item Status |
| `LegalTransactionTaskCrtedByUsr` |  | | `_WorkflowTask` | `WorkflowTaskCreatedByUser` | `CHAR(12)` | User Who Created the Work Item |
| `LglTransTskCrtnUTCDteTme` |  | | `_WorkflowTask` | `WrkflwTskCreationUTCDateTime` | `DEC(21)` | Workflow: Creation Time Stamp |
| `LegalTransactionTaskCurUsr` |  | | `_WorkflowTask` | `WorkflowTaskCurrentUser` | `CHAR(12)` | Actual Agent of Work Item |
| `FullName` |  | | `_User` | `UserDescription` | `CHAR(80)` | User Description |
| `WorkflowTaskDefinition` |  | | `_WorkflowTask` | `WorkflowTaskDefinition` | `CHAR(14)` | Task ID |
| `WorkflowTaskDueUTCDateTime` |  | | `_TaskDueDate` | `WorkflowTaskDueUTCDateTime` | `DEC(21)` | Latest End Time for Work Item |
| `_LegalTransactionBase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransactionBase` | `I_LegalTransactionBase` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'ILTWFEMLDL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #COMPOSITE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Email Template for Workflow Deadline'
define view I_LglTransWrkflwEmlDeadLine
  as select from    I_WorkflowTask             as _WorkflowTask
    left outer join I_WorkflowTaskApplObject   as _WorkflowTaskApplObject   on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                            and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
    //                                                                            SAP node type after 2008
                                                                            and (
                                                                               _WorkflowTaskApplObject.SAPObjectNodeRepresentation    = 'LegalTransactionApproval'
                                                                               // SAP node type before 2008
                                                                               or _WorkflowTaskApplObject.SAPObjectNodeRepresentation = 'LegalTransaction'
                                                                             )
                                                                            and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer join I_LegalTransactionWorkflow as _LegalTransactionWorkflow on  _LegalTransactionWorkflow.LglTransWrkFlwModInstce = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                            and _WorkflowTaskApplObject.WorkflowTaskInternalID    is not null
    left outer join I_User                     as _User                     on _WorkflowTask.WorkflowTaskCurrentUser = _User.UserID
  association [1..1] to I_LegalTransactionBase as _LegalTransactionBase on _LegalTransactionWorkflow.LegalTransactionUUID = _LegalTransactionBase.LegalTransactionUUID
  //  association [1..1] to I_LglTransWorkflowTaskTitle as _LglTransWorkflowTaskTitle on $projection.WorkflowTaskInternalID = _LglTransWorkflowTaskTitle.WorkflowTaskInternalID

{

  key  _WorkflowTask.WorkflowTaskInternalID                                                                                   as WorkflowTaskInternalID,

       LegalTransactionUUID,

       LegalTransactionWrkflwSqnc,

       LglTransWrkFlwModInstce,
       _LegalTransactionBase.LegalTransaction,
       _LegalTransactionBase.LegalTransactionTitle,
       _LegalTransactionBase.LegalTransactionHealth,


       cast( _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as sww_witext )                   as LegalTransactionTaskName,
       //       _LglTransWorkflowTaskTitle.WorkflowTaskName                                                 as LegalTransactionTaskName,

       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'WorkflowTaskType'
       _WorkflowTask.WorkflowTaskType                                                                                         as LegalTransactionTaskType,
       _WorkflowTask.WorkflowTaskType                                                                                         as WorkflowTaskType,

       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'WorkflowTaskTypeDesc'
       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc                                as LegalTransactionTaskTypeName,
       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc                                as WorkflowTaskTypeDesc,

       _WorkflowTask.WorkflowTaskStepType                                                                                     as WorkflowTaskStepType,

       _WorkflowTask._WorkflowStepType._WorkflowTaskStepTypeText[1:Language=$session.system_language].WorkflowStepTypeSubject as WorkflowStepTypeSubject,

       _WorkflowTask.WorkflowTaskStatus                                                                                       as LegalTransactionTaskStatus,

       _WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc                            as LegalTransactionTaskStatusName,

       _WorkflowTask.WorkflowTaskCreatedByUser                                                                                as LegalTransactionTaskCrtedByUsr,

       _WorkflowTask.WrkflwTskCreationUTCDateTime                                                                             as LglTransTskCrtnUTCDteTme,

       _WorkflowTask.WorkflowTaskCurrentUser                                                                                  as LegalTransactionTaskCurUsr,

       _User.UserDescription                                                                                                  as FullName,

       _WorkflowTask.WorkflowTaskDefinition,

       _TaskDueDate.WorkflowTaskDueUTCDateTime,

       _LegalTransactionBase
}
```
