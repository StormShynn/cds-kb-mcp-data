---
name: I_LGLTRANSWRKFLWSTARTEDTASKDET
description: "Lgltranswrkflwstartedtaskdet"
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
# I_LGLTRANSWRKFLWSTARTEDTASKDET

**Lgltranswrkflwstartedtaskdet**

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
| `LegalTransactionTask` | ✓ | |  |  | `NUMC(12)` | Work Item ID |
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglTransTskCrtnUTCDteTme` |  | |  |  | `DEC(21)` | Workflow: Creation Time Stamp |
| `LglCntntMTaskCompltnUTCDteTme` |  | |  |  | `DEC(21)` | Workflow: Timestamp completion |
| `LegalTransactionTaskStatus` |  | |  |  | `CHAR(12)` | Processing Status of a Work Item |
| `LegalTransactionTaskStatusName` |  | |  |  | `CHAR(20)` | Workflow: Work Item Status |
| `LegalTransactionTaskCurUsr` |  | |  |  | `CHAR(12)` | Actual Agent of Work Item |
| `LegalTransactionTaskCurUsrName` |  | | `_User` | `UserDescription` | `CHAR(80)` | User Description |
| `WorkflowTaskResult` |  | |  |  | `CHAR(255)` | Workflow: Returncode flexible workflow |
| `WorkflowStepResultText` |  | |  | `_WorkflowTaskStepResult[1:Language=$session.system_language].WorkflowStepResultText` | `CHAR(80)` | Language-dependent text of a workflow definition |
| `WorkflowTaskResultComment` |  | |  |  |  |  |
| `_LegalTransaction` | | ✓ | | | | |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@AbapCatalog.sqlViewName: 'ILGLTRANSWFTDET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass:  #MIXED,
  modelingPattern: #NONE
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Legal Transaction Workflow Task Details'
define view I_LglTransWrkflwStartedTaskDet
  as select from P_LglCntntMWorkflowTaskDetail
{
  key LegalTransactionTask,
  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      LglTransTskCrtnUTCDteTme,
      LglCntntMTaskCompltnUTCDteTme,
      LegalTransactionTaskStatus,
      LegalTransactionTaskStatusName,
      LegalTransactionTaskCurUsr,
      _User.UserDescription                                                               as LegalTransactionTaskCurUsrName,
      WorkflowTaskResult,
      _WorkflowTaskStepResult[1:Language=$session.system_language].WorkflowStepResultText as WorkflowStepResultText,

      WorkflowTaskResultComment,

      //Associations
      _LegalTransaction
}
```
