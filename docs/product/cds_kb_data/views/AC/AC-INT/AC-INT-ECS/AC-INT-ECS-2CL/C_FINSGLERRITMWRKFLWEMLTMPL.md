---
name: C_FINSGLERRITMWRKFLWEMLTMPL
description: "Error Correction Workflow Email Template"
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSGLERRITMWRKFLWEMLTMPL')/$value
semantic_en: "Error Correction Workflow Email Template"
semantic_vi: "Error Correction Workflow Email Template — CDS view tiêu dùng dựa trên I_WorkflowTask."
keywords:
  - "error"
  - "correction"
  - "workflow"
  - "email"
  - "template"
  - "task"
  - "internal"
  - "status"
  - "wrkflw"
  - "creation"
  - "date"
  - "time"
  - "completion"
  - "level"
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - AC-INT-ECS-2CL
  - bo:companycode
  - component:AC-INT-ECS-2CL
  - consumption-view
---
# C_FINSGLERRITMWRKFLWEMLTMPL

**Error Correction Workflow Email Template**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSGLERRITMWRKFLWEMLTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `WorkflowTaskStatus` |  | |  |  | `CHAR(12)` | Processing Status of a Work Item |
| `WrkflwTskCreationUTCDateTime` |  | |  |  | `DEC(21)` | Workflow: Creation Time Stamp |
| `WrkflwTskCompletionUTCDateTime` |  | |  |  | `DEC(21)` | Workflow: Timestamp completion |
| `TopLevelWorkflowTask` |  | |  |  | `NUMC(12)` | Workflow: Unique ID of Top-Level Instance (6.1/get) |
| `WorkflowTaskCreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created the Work Item |
| `WorkflowTaskCurrentUser` |  | |  |  | `CHAR(12)` | Actual Agent of Work Item |
| `WorkflowTaskResultComment` |  | |  |  |  |  |
| `FinSGLPostedCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Posted Document |
| `FinSGLPostedDocument` |  | |  |  | `CHAR(10)` | Document Number of Posted (Suspense) Document |
| `FinSGLPostedFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Posted Document |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` |  |
| `FinSGLErrorDocument` |  | |  |  | `CHAR(10)` | ECS Internal Ref. for ECS Items in the Same FI Document |
| `FinSGLErrorFiscalYear` |  | |  |  | `NUMC(4)` | Year in which ECS item was entered (rel. for int. doc. no.) |
| `SAPClient` |  | |  | `$session.client` | `CLNT(3)` |  |
| `ABAPSourceSystem` |  | |  |  | `CHAR(10)` | Original System of Object |
| `_WorkflowTaskURL` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_WorkflowTaskURL` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSGLERRITMWRKFLWEMLTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINSGLERRITMWRKFLWEMLTMPL')/$value)*

```abap
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Error Correction Workflow Email Template'
@VDM.viewType : #CONSUMPTION
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations: true
define view entity C_FinSGLErrItmWrkflwEmlTmpl
  as select from           I_WorkflowTask              as WorkflowTask
    inner join             I_WorkflowTaskApplObject    as WorkflowTaskApplObject    on WorkflowTaskApplObject.WorkflowTaskInternalID = WorkflowTask.WorkflowTaskInternalID
                                                                                    and(
                                                                                      WorkflowTaskApplObject.WorkflowObjectRole      = '01'
                                                                                      or WorkflowTaskApplObject.WorkflowObjectRole   = '99'
                                                                                    )
    inner join             I_FinSGLErrorItem           as Erroritem                 on Erroritem.FinSGLConvertedUUID = WorkflowTaskApplObject.TechnicalWrkflwObject
    left outer to one join I_WorkflowTaskResultComment as WorkflowTaskResultComment on WorkflowTaskResultComment.WorkflowTaskInternalID = WorkflowTask.WorkflowTaskInternalID
    left outer to one join I_ABAPObjectDirectoryEntry  as Systeminfo                on  Systeminfo.ABAPObjectCategory = 'HEAD'
                                                                                    and Systeminfo.ABAPObjectType     = 'SYST'

  association [1..1] to I_WorkflowTaskURL as _WorkflowTaskURL on $projection.WorkflowTaskInternalID = _WorkflowTaskURL.WorkflowTaskInternalID

{
  key WorkflowTask.WorkflowTaskInternalID,
      WorkflowTask.WorkflowTaskStatus,
      WorkflowTask.WrkflwTskCreationUTCDateTime,
      WorkflowTask.WrkflwTskCompletionUTCDateTime,
      WorkflowTask.TopLevelWorkflowTask,
      WorkflowTask.WorkflowTaskCreatedByUser,
      WorkflowTask.WorkflowTaskCurrentUser,
      WorkflowTaskResultComment.WorkflowTaskResultComment,

      Erroritem.FinSGLPostedCompanyCode,
      Erroritem.FinSGLPostedDocument,
      Erroritem.FinSGLPostedFiscalYear,
      Erroritem.LedgerGLLineItem,
      Erroritem.FinSGLErrorDocument,
      Erroritem.FinSGLErrorFiscalYear,

      $session.client             as SAPClient,
      Systeminfo.ABAPSourceSystem as ABAPSourceSystem,

      _WorkflowTaskURL

}
```
