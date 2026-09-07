---
name: I_COSTCENTERCATEGORY
description: "Cost CenterCATEGORY"
app_component: CO-OM-2CL
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
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERCATEGORY

**Cost CenterCATEGORY**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `CostCenterCategory` | ✓ | |  | `kosar` | `CHAR(1)` | Cost Center Category |
| `IsBlkdForPrimaryCostsPosting` |  | |  | `bkzkp` | `CHAR(1)` | Lock Indicator for Actual Primary Postings |
| `IsBlkdForSecondaryCostsPosting` |  | |  | `bkzks` | `CHAR(1)` | Lock Indicator for Actual Secondary Costs |
| `IsBlockedForRevenuePosting` |  | |  | `bkzer` | `CHAR(1)` | Lock Indicator for Actual Revenue Postings |
| `IsBlockedForCommitmentPosting` |  | |  | `bkzob` | `CHAR(1)` | Lock Indicator for Commitment Update |
| `IsBlockedForPlanPrimaryCosts` |  | |  | `pkzkp` | `CHAR(1)` | Lock Indicator for Plan Primary Costs |
| `IsBlockedForPlanSecondaryCosts` |  | |  | `cast(pkzks as fis_pkzks)` | `CHAR(1)` | Lock Indicator for Plan Secondary Costs |
| `IsBlockedForPlanRevenues` |  | |  | `cast(pkzer as fis_pkzer)` | `CHAR(1)` | Lock Indicator for Planning Revenues |
| `CostCenterAllocationMethod` |  | |  | `cast(vmeth as fis_vmeth)` | `CHAR(2)` | Indicator for Allowed Allocation Methods |
| `ConsumptionQtyIsRecorded` |  | |  | `mgefl` | `CHAR(1)` | Indicator for Recording Consumption Quantities |
| `FunctionalArea` |  | |  | `func_area` | `CHAR(16)` | Functional Area |
| `_Text` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostCenterCategoryText` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCTRCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CostCenterCategory'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'CostCenterCategory'

define view I_CostCenterCategory
  as select from tka05
  association [0..*] to I_CostCenterCategoryText as _Text           on $projection.CostCenterCategory = _Text.CostCenterCategory
  association [0..1] to I_FunctionalArea         as _FunctionalArea on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
{
      @ObjectModel.text.association: '_Text'
  key kosar                    as CostCenterCategory,
      bkzkp                    as IsBlkdForPrimaryCostsPosting,
      bkzks                    as IsBlkdForSecondaryCostsPosting,
      bkzer                    as IsBlockedForRevenuePosting,
      bkzob                    as IsBlockedForCommitmentPosting,
      pkzkp                    as IsBlockedForPlanPrimaryCosts,
      cast(pkzks as fis_pkzks) as IsBlockedForPlanSecondaryCosts,
      cast(pkzer as fis_pkzer) as IsBlockedForPlanRevenues,
      cast(vmeth as fis_vmeth) as CostCenterAllocationMethod,
      mgefl                    as ConsumptionQtyIsRecorded,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      func_area                as FunctionalArea,

      _Text,
      _FunctionalArea

};
```
