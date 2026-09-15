---
name: I_COSTCOMPONENTVIEW
description: "Costcomponentview"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_COSTCOMPONENTVIEW

**Costcomponentview**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostComponentView` | ✓ | |  |  | `NUMC(2)` | Cost Component View |
| `CostCompIsForSalesAndAdminCost` |  | |  |  | `CHAR(1)` | Display Cost Components for Sales and Administration Costs |
| `CostCompIsForCOGM` |  | |  |  | `CHAR(1)` | Display Cost Components for Cost of Goods Manufactured |
| `CostCompIsForInvtryValuation` |  | |  |  | `CHAR(1)` | Display Cost Components for Inventory Valuation |
| `CostCompIsForInvtryOnCommlLaw` |  | |  |  | `CHAR(1)` | Display Cost Components for Inventory Based on Commerc. Law |
| `CostCompIsForInvtryOnTaxLaw` |  | |  |  | `CHAR(1)` | Display Cost Components for Inventory Based on Tax Law |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostComponentViewText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL 
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}

@ObjectModel: {
  representativeKey: 'CostComponentView',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING },
    supportedCapabilities: [
      #ANALYTICAL_DIMENSION,
      #CDS_MODELING_ASSOCIATION_TARGET,
      #SQL_DATA_SOURCE,
      #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_DIMENSION 
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Component View'

define view entity I_CostComponentView
  as select from P_CostComponentView
  association [0..*] to I_CostComponentViewText as _Text on $projection.CostComponentView = _Text.CostComponentView
{
      @ObjectModel.text.association: '_Text'
  key CostComponentView,
      CostCompIsForSalesAndAdminCost,
      CostCompIsForCOGM,
      CostCompIsForInvtryValuation,
      CostCompIsForInvtryOnCommlLaw,
      CostCompIsForInvtryOnTaxLaw,

      _Text
}
```
