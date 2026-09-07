---
name: I_BUDGETDOCWORKFLOWSTATUSTEXT
description: "Budgetdocworkflowstatustext"
semantic_vi: "View I_BUDGETDOCWORKFLOWSTATUSTEXT cung cấp dữ liệu văn bản trạng thái luồng công việc tài chính ngân sách, có thể được sử dụng để hiển thị thông tin trạng thái trong thành phần PSM."
keywords:
  - "budget document"
  - "workflow status"
  - "text view"
  - "psm component"
  - "status text"
  - "budgetdocworkflowstatustext"
  - "tài chính ngân sách"
  - "trạng thái luồng công việc"
  - "trạng thái văn bản"
semantic_en: "The I_BUDGETDOCWORKFLOWSTATUSTEXT view provides budget document workflow status text data, which can be used to display status information in the PSM component."
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
  - text-view
  - text
  - status
  - workflow
  - component:PSM
  - lob:Other
---
# I_BUDGETDOCWORKFLOWSTATUSTEXT

**Budgetdocworkflowstatustext**

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
| `BudgetDocWorkFlowStatus` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bdgt_doc_workflow_status )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `BudgetDocWorkFlowStatusText` |  | |  | `cast ( dd07t.ddtext as bdgt_doc_workflow_status_text preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_BudgetDocWorkFlowStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBDGTDOCWFSTATT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Document Work Flow Status - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
     dataCategory: #TEXT,
     representativeKey: 'BudgetDocWorkFlowStatus',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BudgetDocWorkFlowStatusText
  as select from dd07t
  association        to parent I_BudgetDocWorkFlowStatus as _BudgetDocWorkFlowStatus on $projection.BudgetDocWorkFlowStatus = _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus
  association [0..1] to I_Language                       as _Language                on $projection.Language                = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
      @ObjectModel.text.element: ['BudgetDocWorkFlowStatusText']
  key cast( cast ( substring( dd07t.domvalue_l, 1, 1 )
                   as abap.char( 1 ) ) as bdgt_doc_workflow_status )          as BudgetDocWorkFlowStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                       as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast ( dd07t.ddtext as bdgt_doc_workflow_status_text preserving type )  as BudgetDocWorkFlowStatusText,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                        as DomainValue,

      _BudgetDocWorkFlowStatus,
      _Language

}
where domname    =  'BDGT_DOC_WORKFLOW_STATUS'
  and as4local   =  'A'
```
