---
name: I_BUDGETCOSTCENTER
description: "Budget Carrying Cost Center"
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value
semantic_en: "Budget Carrying Cost Center"
semantic_vi: "Budget Carrying Cost Center — CDS view giao diện dựa trên I_CostCenter."
keywords:
  - "budget"
  - "carrying"
  - "cost"
  - "center"
  - "controlling"
  - "area"
  - "validity"
  - "date"
  - "start"
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
---
# I_BUDGETCOSTCENTER

**Budget Carrying Cost Center**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `BudgetCarryingCostCenter` | ✓ | |  | `CostCenter` | `CHAR(10)` | Cost Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_Text` | `I_CostCenterText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Budget Carrying Cost Center'
@ObjectModel.representativeKey: 'BudgetCarryingCostCenter'
@ObjectModel.semanticKey: [ 'BudgetCarryingCostCenter' ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true
//@AccessControl.privilegedAssociations: ['_Text']
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL
define view entity I_BudgetCostCenter

  as select from I_CostCenter as CostCenter

  association [1]    to I_ControllingArea as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CostCenterText  as _Text            on  $projection.ControllingArea          =  _Text.ControllingArea
                                                              and $projection.BudgetCarryingCostCenter =  _Text.CostCenter
                                                              and $projection.ValidityStartDate        <= _Text.ValidityEndDate
                                                              and $projection.ValidityEndDate          >= _Text.ValidityStartDate
{

         @ObjectModel.foreignKey.association: '_ControllingArea'
  key    CostCenter.ControllingArea   as ControllingArea,

         @ObjectModel.text.element:[ 'CostCenterName' ]
         @EndUserText: { label: 'Budget Carrying Cost Center' }
         @AnalyticsDetails.query.display: #TEXT_KEY
  key    CostCenter.CostCenter        as BudgetCarryingCostCenter,

         @Semantics.businessDate.to: true
  key    CostCenter.ValidityEndDate   as ValidityEndDate,

         @Semantics.businessDate.from: true
         CostCenter.ValidityStartDate as ValidityStartDate,

         @Semantics.text: true
         _Text[1:Language=$session.system_language].CostCenterName,
         _Text,
         _ControllingArea
}
where
  (
       CostCenter.CostCenter                 =  CostCenter.BudgetCarryingCostCenter
    or CostCenter.BudgetCarryingCostCenter   =  ''
  )
  and  CostCenter.AvailabilityControlProfile <> ''
```
