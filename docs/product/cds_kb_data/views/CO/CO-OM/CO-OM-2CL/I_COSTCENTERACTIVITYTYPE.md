---
name: I_COSTCENTERACTIVITYTYPE
description: "Cost CenterACTIVITYTYPE"
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
# I_COSTCENTERACTIVITYTYPE

**Cost CenterACTIVITYTYPE**

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
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `CostCtrActivityType` | ✓ | |  | `lstar` | `CHAR(6)` | Activity Type |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  | `datab` | `DATS(8)` | Valid-From Date |
| `CostCtrActivityTypeQtyUnit` |  | |  | `leinh` | `UNIT(3)` | Activity Unit |
| `CostCtrActivityTypeCategory` |  | |  | `latyp` | `CHAR(1)` | Activity Type Category |
| `AllocationCostElement` |  | |  | `vksta` | `CHAR(10)` | Allocation Cost Element |
| `CostCtrActivityTypeOutpQtyUnit` |  | |  | `auseh` | `UNIT(3)` | Output Unit |
| `CreationDate` |  | |  | `ersda` | `DATS(8)` | Entered On |
| `EnteredByUser` |  | |  | `usnam` | `CHAR(12)` | Entered By |
| `CostOriginGroup` |  | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `ActlPostgCostCenterActyTypeCat` |  | |  | `latypi` | `CHAR(1)` | Variant Activity Type Category for Actual Postings |
| `OutputQuantityFactor` |  | |  | `ausfk` | `DEC(5)` | Output factor |
| `ActivityTypeIsBlocked` |  | |  | `sprkz` | `CHAR(1)` | Lock Indicator |
| `FixedCostIsPredistributed` |  | |  | `fixvo` | `CHAR(1)` | Predistribution of fixed costs for acty type/bus. process |
| `PriceAllocationMethod` |  | |  | `tarkz` | `CHAR(3)` | Price Indicator: Calculate Allocation Price |
| `PeriodPriceIsAverage` |  | |  | `yrate` | `CHAR(1)` | Price Calculation with Period-Based Average Prices |
| `ActualPriceAllocationMethod` |  | |  | `tarkz_i` | `CHAR(3)` | Indicator: Actual Allocation Price |
| `ActualQuantityIsSetManually` |  | |  | `manist` | `CHAR(1)` | Indicator: Confirm quantity manually in actual |
| `PlanQuantityIsSetManually` |  | |  | `manplan` | `CHAR(1)` | Indicator: Plan quantity manually set. |
| `CostCtrActivityTypeValidCat` |  | |  | `kstty` | `CHAR(8)` | Valid Cost Center Categories |
| `CostCtrActyTypeIsCtrlgRlvtComp` |  | |  | `lark1` | `CHAR(1)` | Indicator for component relevancy CO |
| `CostCtrActyTypeIsHumRsceRlvt` |  | |  | `lark2` | `CHAR(1)` | Indicator: Component Relevance, HR |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenterCategory` | | ✓ | | | | |
| `_CostCtrActivityTypeCategory` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CostCtrActivityTypeHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_CostCenterActivityTypeText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CostCenterCategory` | `I_CostCtrActytypeCostCtrCat` | [0..*] |
| `_CostCtrActivityTypeCategory` | `I_CostCenterActivityTypeCat` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1] |
| `_CostCtrActivityTypeHierNode` | `I_CostCtrActivityTypeHierNode` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'CostCtrActivityType'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}

@ObjectModel.sapObjectNodeType.name: 'CostCenterActivityType'

@EndUserText.label: 'Cost Center Activity Type'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICCACTTYP'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_CostCenterActivityType
as select from csla

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
association [0..*] to I_CostCenterActivityTypeText   as _Text                on $projection.ControllingArea     = _Text.ControllingArea 
                                                                                   and $projection.CostCtrActivityType = _Text.CostCtrActivityType
                                                                                   and $projection.ValidityEndDate     = _Text.ValidityEndDate
association[1]     to I_ControllingArea              as _ControllingArea     on $projection.ControllingArea     = _ControllingArea.ControllingArea
association [0..*] to I_CostCtrActytypeCostCtrCat    as _CostCenterCategory  on  $projection.ControllingArea     = _CostCenterCategory.ControllingArea
                                                                                   and $projection.CostCtrActivityType = _CostCenterCategory.CostCtrActivityType
                                                                                   and $projection.ValidityEndDate     = _CostCenterCategory.ValidityEndDate
association[0..1]  to I_CostCenterActivityTypeCat    as _CostCtrActivityTypeCategory on $projection.CostCtrActivityTypeCategory = _CostCtrActivityTypeCategory.CostCtrActivityTypeCategory
association[1]     to I_UnitOfMeasure                as _UnitOfMeasure       on $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure
association [0..*] to I_CostCtrActivityTypeHierNode  as _CostCtrActivityTypeHierNode on $projection.ControllingArea = _CostCtrActivityTypeHierNode.ControllingArea
                                                                                   and $projection.CostCtrActivityType = _CostCtrActivityTypeHierNode.CostCtrActivityType 
{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Controlling Area'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
@ObjectModel.hierarchy.association: '_CostCtrActivityTypeHierNode'
@ObjectModel.text.association: '_Text'
  key lstar as CostCtrActivityType,
@Semantics.businessDate.to: true  
  key datbi as ValidityEndDate,
@Semantics.businessDate.from: true
      datab as ValidityStartDate,
@Semantics.unitOfMeasure:true
      leinh as CostCtrActivityTypeQtyUnit,
@ObjectModel.foreignKey.association: '_CostCtrActivityTypeCategory' //Inserted by VDM CDS Suite Plugin
      latyp as CostCtrActivityTypeCategory,
      vksta as AllocationCostElement,
      auseh as CostCtrActivityTypeOutpQtyUnit,
@Semantics.systemDate.createdAt: true      
      ersda as CreationDate,
      usnam as EnteredByUser,
      hrkft as CostOriginGroup,
      latypi  as ActlPostgCostCenterActyTypeCat,
@DefaultAggregation: #SUM
//@Semantics: { quantity : {unitOfMeasure: 'CostCtrActivityTypeQtyUnit'} } 
      ausfk   as OutputQuantityFactor,
      sprkz   as ActivityTypeIsBlocked,
      fixvo   as FixedCostIsPredistributed,
      tarkz   as PriceAllocationMethod,
      yrate   as PeriodPriceIsAverage,
      tarkz_i as ActualPriceAllocationMethod,
      manist  as ActualQuantityIsSetManually,
      manplan as PlanQuantityIsSetManually,
      kstty   as CostCtrActivityTypeValidCat,
      lark1   as CostCtrActyTypeIsCtrlgRlvtComp,
      lark2   as CostCtrActyTypeIsHumRsceRlvt,
  _Text,
  _ControllingArea,
  _CostCenterCategory,
  _CostCtrActivityTypeCategory,
  _CostCtrActivityTypeHierNode,
  _UnitOfMeasure,
 // _CostCtrActivityTypeHierNode,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


};
```
