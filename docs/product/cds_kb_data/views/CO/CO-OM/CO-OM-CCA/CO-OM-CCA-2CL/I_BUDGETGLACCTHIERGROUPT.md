---
name: I_BUDGETGLACCTHIERGROUPT
description: "Budget GL Account Hierarchy Group - Text"
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value
semantic_en: "Budget GL Account Hierarchy Group - Text"
semantic_vi: "Budget GL Account Hierarchy Group - Text — CDS view giao diện dựa trên Budget GL Account Hierarchy Group - Text."
keywords:
  - "budget"
  - "account"
  - "hierarchy"
  - "group"
  - "text"
  - "hier"
  - "node"
  - "semantic"
  - "language"
tags:
  - CO
  - account
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
---
# I_BUDGETGLACCTHIERGROUPT

**Budget GL Account Hierarchy Group - Text**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierNodeSemanticKey` | ✓ | |  | `cast ( concat( concat( substring(GLAccountHierarchyNode.HierarchyNode, 2, 39), '~' ), substring(_SemTag.HierarchyNode, 2, 23) ) as fco_budget_semantic_key preserving type )` | `CHAR(63)` | Budget G/L Account Hierarchy Semantic Key |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `GLAccountHierarchy` |  | | `_SemTag` | `GLAccountHierarchy` | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` |  | | `_SemTag` | `HierarchyNode` | `CHAR(50)` | Hierarchy node |
| `HierarchyNodeText` |  | |  | `_NodeText[1:Language=$session.system_language].HierarchyNodeText` | `CHAR(50)` | Hierarchy node description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_NodeText` | `I_GLAccountHierarchyNodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Budget GL Account Hierarchy Group - Text'
@ObjectModel.representativeKey: 'GLAccountHierNodeSemanticKey'
@ObjectModel.semanticKey:  [ 'GLAccountHierNodeSemanticKey']
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C

define view entity I_BudgetGLAcctHierGroupT
  as select distinct from I_AvailyCtrlProfileSemanticTag as _SemTag
    inner join            I_GLAccountHierarchyNode       as GLAccountHierarchyNode on  GLAccountHierarchyNode.GLAccountHierarchy = _SemTag.GLAccountHierarchy
                                                                                   and GLAccountHierarchyNode.NodeType           = 'R'

  association [0..1] to I_Language                as _Language on  _Language.Language = $projection.Language

  association [0..*] to I_GLAccountHierarchyNodeT as _NodeText on  _NodeText.GLAccountHierarchy = _SemTag.GLAccountHierarchy
                                                               and _NodeText.HierarchyNode      = _SemTag.HierarchyNode
{
                @ObjectModel.text.element:[ 'HierarchyNodeText' ]
                @AnalyticsDetails.query.display: #TEXT
                @EndUserText.label: 'GL Account Group'
  key           cast ( concat( concat( substring(GLAccountHierarchyNode.HierarchyNode, 2, 39), '~' ), substring(_SemTag.HierarchyNode, 2, 23) ) as fco_budget_semantic_key preserving type ) as GLAccountHierNodeSemanticKey,
                @Semantics.language: true
  key           GLAccountHierarchyNode._Text.Language                                                                                                                                        as Language,
                _SemTag.GLAccountHierarchy                                                                                                                                                   as GLAccountHierarchy,
                _SemTag.HierarchyNode                                                                                                                                                        as HierarchyNode,
                @Semantics.text: true
                _NodeText[1:Language=$session.system_language].HierarchyNodeText                                                                                                             as HierarchyNodeText,
                _Language
}
where
      _SemTag.GLAccountHierarchy <> ''
  and _SemTag.HierarchyNode      <> '';
```
