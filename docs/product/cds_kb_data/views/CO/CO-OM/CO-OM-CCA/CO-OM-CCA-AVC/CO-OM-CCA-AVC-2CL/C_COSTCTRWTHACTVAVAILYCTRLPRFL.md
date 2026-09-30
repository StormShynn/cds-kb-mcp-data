---
name: C_COSTCTRWTHACTVAVAILYCTRLPRFL
description: "CC with Budget AVC Profile Active"
app_component: CO-OM-CCA-AVC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCTRWTHACTVAVAILYCTRLPRFL')/$value
semantic_en: "CC with Budget AVC Profile Active"
semantic_vi: "CC with Budget AVC Profile Active — CDS view tiêu dùng (transactional data) dựa trên I_CostCenter."
keywords:
  - "with"
  - "budget"
  - "avc"
  - "profile"
  - "active"
  - "cost"
  - "center"
  - "carrying"
  - "availability"
  - "control"
  - "company"
  - "code"
  - "standard"
  - "hier"
  - "area"
tags:
  - CO
  - bo:companycode
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-AVC
  - CO-OM-CCA-AVC-2CL
  - component:CO-OM-CCA-AVC-2CL
  - consumption-view
  - lob:controlling
  - lob:cross_application components
---
# C_COSTCTRWTHACTVAVAILYCTRLPRFL

**CC with Budget AVC Profile Active**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-AVC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCTRWTHACTVAVAILYCTRLPRFL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostCenter` | ✓ | |  |  | `CHAR(10)` | Cost Center |
| `BudgetCarryingCostCenter` |  | |  |  | `CHAR(10)` | Budget-Carrying Cost Center |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control: Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenterStandardHierArea` |  | |  |  | `CHAR(12)` | Standard Hierarchy Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCtrResponsiblePersonName` |  | |  |  | `CHAR(20)` | Person Responsible |
| `CostCtrResponsibleUser` |  | |  |  | `CHAR(12)` | User Responsible |
| `CostCenterCategory` |  | |  |  | `CHAR(1)` | Cost Center Category |
| `FiscalYear` |  | |  | `cast( left( cast( $session.system_date as abap.char(8) ), 4 ) as abap.numc(4) )` | `NUMC(4)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCTRWTHACTVAVAILYCTRLPRFL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCTRWTHACTVAVAILYCTRLPRFL')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'CC with Budget AVC Profile Active'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE
                                       ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
                usageType:{
                            serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #TRANSACTIONAL
                           },
                semanticKey:  ['CostCenter'],
                uniqueIdField: 'CostCenter'
             }
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity C_CostCtrWthActvAvailyCtrlPrfl
  as select from I_CostCenter
{
      key I_CostCenter.CostCenter,

      I_CostCenter.BudgetCarryingCostCenter,
      I_CostCenter.AvailabilityControlProfile,
      I_CostCenter.CompanyCode,
      I_CostCenter.CostCenterStandardHierArea,
      I_CostCenter.ProfitCenter,
      I_CostCenter.CostCtrResponsiblePersonName,
      I_CostCenter.CostCtrResponsibleUser,
      I_CostCenter.CostCenterCategory,

      cast( left( cast( $session.system_date as abap.char(8) ), 4 ) as abap.numc(4) ) as FiscalYear
}
```
