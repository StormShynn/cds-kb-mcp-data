---
name: C_CABILLGREQWRKFLWEMLTMPL
description: "Cabillgreqwrkflwemltmpl"
semantic_vi: "View này hiển thị dữ liệu luồng công việc yêu cầu hóa đơn hàng hóa, bao gồm chi tiết nhiệm vụ và thông tin liên quan đến tài liệu. Nó được sử dụng để truy cập và quản lý yêu cầu hóa đơn hàng hóa trong thành phần FI-CA-INV-2CL."
keywords:
  - "bill of goods request"
  - "yêu cầu hóa đơn hàng hóa"
  - "workflow"
  - "fi-ca-inv-2cl"
  - "fi"
  - "fi-ca"
  - "fi-ca-inv"
  - "consumption-view"
  - "workflow-task"
  - "document-information"
semantic_en: "This view exposes bill of goods request workflow data, including task details and related document information. It is used to access and manage bill of goods requests within the FI-CA-INV-2CL component."
app_component: FI-CA-INV-2CL
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
  - FI
  - FI-CA
  - FI-CA-INV
  - consumption-view
  - workflow
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# C_CABILLGREQWRKFLWEMLTMPL

**Cabillgreqwrkflwemltmpl**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `CABillgReqDocument` |  | | `_CABillgReq` | `CABillgReqDocument` | `NUMC(12)` | Billing Request Number |
| `CABillgReqTotalAmountCurrency` |  | | `_CABillgReq` | `CABillgReqTotalAmountCurrency` | `CUKY(5)` | Transaction Currency |
| `CABillgReqType` |  | | `_CABillgReq` | `CABillgReqType` | `CHAR(2)` | Billing Request Type |
| `CABillgReqReason` |  | | `_CABillgReq` | `CABillgReqReason` | `CHAR(4)` | Reason for Billing Request |
| `CABillgReqCreationDate` |  | | `_CABillgReq` | `CABillgReqCreationDate` | `DATS(8)` | Creation Date of Billing Request |
| `CABillgReqDescription` |  | | `_CABillgReq` | `CABillgReqDescription` | `CHAR(60)` | Billing Request Description |
| `WorkflowTaskURL` |  | | `_WorkflowTaskURL` | `WorkflowTaskURL` | `SSTR(1333)` | Workflow: Workflow Task URL |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_CAWorkflowTaskURL` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'CA Billing request Workflow Email Templ'
@ObjectModel: {
  usageType : {
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
    },
  modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER,
  supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
}

@VDM.viewType : #CONSUMPTION

define view entity C_CABillgReqWrkflwEmlTmpl
  as select from           I_WorkflowTask           as Workflowtask
    left outer to one join I_WorkflowTaskApplObject as _WorkflowTaskApplObject on Workflowtask.WorkflowTaskInternalID = _WorkflowTaskApplObject.WorkflowTaskInternalID
    left outer to one join I_CABillgRequest    as _CABillgReq             on _CABillgReq.CABillgReqDocument = _WorkflowTaskApplObject.TechnicalWrkflwObject
  association [0..1] to I_CAWorkflowTaskURL as _WorkflowTaskURL on _WorkflowTaskURL.WorkflowTaskInternalID = Workflowtask.WorkflowTaskInternalID
{
  key Workflowtask.WorkflowTaskInternalID,
      _CABillgReq.CABillgReqDocument,
      _CABillgReq.CABillgReqTotalAmountCurrency,
      _CABillgReq.CABillgReqType,
      _CABillgReq.CABillgReqReason,
      _CABillgReq.CABillgReqCreationDate,
      _CABillgReq.CABillgReqDescription,
      _WorkflowTaskURL.WorkflowTaskURL
}

where
  (
       _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
    or _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
  )
  and  _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'ContrAcctgBillingRequest'
  and  _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
```
