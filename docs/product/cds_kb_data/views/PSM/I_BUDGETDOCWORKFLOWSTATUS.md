---
name: I_BUDGETDOCWORKFLOWSTATUS
description: "Budgetdocworkflowstatus"
semantic_vi: "View Budgetdocworkflowstatus hiển thị trạng thái của các tài liệu ngân sách trong một luồng làm việc, cung cấp cách để theo dõi trạng thái hiện tại của các tài liệu ngân sách khi chúng di chuyển qua một luồng làm việc."
keywords:
  - "budget document"
  - "tài liệu ngân sách"
  - "workflow status"
  - "trạng thái luồng làm việc"
  - "psm"
  - "sap"
  - "budgetdocworkflowstatus"
semantic_en: "The Budgetdocworkflowstatus view exposes the status of budget documents in a workflow, providing a way to track the current state of budget documents as they move through a workflow."
app_component: PSM
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
  - PSM
  - interface-view
  - status
  - workflow
  - component:PSM
  - lob:Other
---
# I_BUDGETDOCWORKFLOWSTATUS

**Budgetdocworkflowstatus**

| Property | Value |
|---|---|
| App Component | `PSM` |
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
| `BudgetDocWorkFlowStatus` | ✓ | |  | `cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bdgt_doc_workflow_status )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBDGTDOCWFSTAT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Document Work Flow Status'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'BudgetDocWorkFlowStatus',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
     modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view I_BudgetDocWorkFlowStatus
  as select from dd07l
  composition [0..*] of I_BudgetDocWorkFlowStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bdgt_doc_workflow_status ) as BudgetDocWorkFlowStatus,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                                   as DomainValue,

      _Text

}
where domname    =  'BDGT_DOC_WORKFLOW_STATUS'
  and as4local   =  'A'
```
