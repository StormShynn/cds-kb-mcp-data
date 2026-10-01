---
name: C_BKPOAPAYMENTWORKFLOWEDP
description: "POA Payment Email Data Provider"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPAYMENTWORKFLOWEDP')/$value
semantic_en: "POA Payment Email Data Provider"
semantic_vi: "POA Payment Email Data Provider — CDS view tiêu dùng dựa trên I_PayFnBkMsgReqForSignature."
keywords:
  - "poa"
  - "payment"
  - "email"
  - "data"
  - "provider"
  - "workflow"
  - "task"
  - "internal"
  - "total"
  - "amount"
  - "currency"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - payment
---
# C_BKPOAPAYMENTWORKFLOWEDP

**POA Payment Email Data Provider**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPAYMENTWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `TotalPaymentAmount` |  | |  |  | `CURR(23)` | Total Payment Amount |
| `Currency` |  | |  |  | `CUKY(5)` | Currency of Total Payment Amount |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPAYMENTWORKFLOWEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKPOAPAYMENTWORKFLOWEDP')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'POA Payment Email Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern:           #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_EMAIL_DATA_PROVIDER   ]
@VDM.viewType:#CONSUMPTION

define view entity C_BkPOAPaymentWorkflowEDP
 as select from I_PayFnBkMsgReqForSignature  as PaymentSet
    inner join             I_WorkflowTaskApplObject as ApplicationObject on ApplicationObject.SAPBusinessObjectNodeKey1 = bintohex(
      PaymentSet.PayFnSetUUID
    )
    inner join             I_WorkflowTask           as Task              on Task.WorkflowTaskInternalID = ApplicationObject.WorkflowTaskInternalID
    left outer to one join I_WorkflowTaskURL        as URL               on Task.WorkflowTaskInternalID = URL.WorkflowTaskInternalID
  //  not unique in case of forwarding/substitution:
  //  left outer to many join I_WorkflowTaskRecipient as Recipient on Task.WorkflowTaskInternalID = Recipient.WorkflowTaskInternalID
  //  In case User names are required, I_User.UserDescription would be preferrable to I_BusinessUserBasic.PersonFullName for DPP reasons
{
  key Task.WorkflowTaskInternalID,
  @Semantics.amount.currencyCode: 'Currency'
      PaymentSet.TotalPaymentAmount,
      PaymentSet.Currency,
      URL.WorkflowTaskURL
}
where
  ApplicationObject.SAPObjectNodeRepresentation = 'PayFnBankMsgSignatureRequest'
//  and ApplicationObject.WorkflowObjectRole  = // View is used for different use cases, WF and step related -> do not restrict
```
