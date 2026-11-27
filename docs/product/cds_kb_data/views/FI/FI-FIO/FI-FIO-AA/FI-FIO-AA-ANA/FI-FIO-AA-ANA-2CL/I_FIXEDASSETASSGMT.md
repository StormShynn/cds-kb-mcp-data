---
name: I_FIXEDASSETASSGMT
description: "Fixed AssetASSGMT"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - fixed-asset
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETASSGMT

**Fixed AssetASSGMT**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  | `asset_no` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  | `asset_subno` | `CHAR(4)` | Asset Subnumber |
| `ValidityEndDate` | ✓ | |  | `valid_to_date` | `DATS(8)` | Date Validity Ends |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `ValidityStartDate` |  | |  | `valid_from_date` | `DATS(8)` | Date for Beginning of Validity |
| `VehicleLicensePlateNumber` |  | |  | `car_license_plate` | `CHAR(15)` | License Plate No. of Vehicle |
| `CostCenter` |  | |  | `cost_center` | `CHAR(10)` | Cost Center |
| `Plant` |  | |  | `plant` | `CHAR(4)` | Plant |
| `BusinessArea` |  | |  | `business_area` | `CHAR(4)` | Business Area |
| `AssetLocation` |  | |  | `location` | `CHAR(10)` | Asset location |
| `Room` |  | |  | `room` | `CHAR(8)` | Room |
| `CostCtrActivityType` |  | |  | `activity_type` | `CHAR(6)` | Activity Type |
| `InternalOrder` |  | |  | `internal_order` | `CHAR(12)` | Internal Order |
| `IsShutDown` |  | |  | `cast( '' as xstil )` | `CHAR(1)` | Asset Shutdown |
| `ResponsibleCostCenter` |  | |  | `responsible_cost_center` | `CHAR(10)` | Cost Center Responsible for Asset |
| `PersonnelNumber` |  | |  | `personnel_number` | `NUMC(8)` | Personnel Number |
| `MaintenanceOrder` |  | |  | `cast( '' as iaufn )` | `CHAR(12)` | Maintenance Order |
| `TaxJurisdiction` |  | |  | `tax_jurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `Fund` |  | |  | `fund` | `CHAR(10)` | Fund |
| `WBSElementInternalID_2` |  | |  | `wbs_element` | `NUMC(8)` | WBS Element |
| `WBSElementInternalID` |  | |  | `cast( faat_md_tdd.wbs_element as am_ipsnr preserving type )` | `NUMC(8)` | WBS Element - Maintenance Project |
| `REInternalFinNumber` |  | |  | `cast( faat_md_tdd.real_estate_key as recaimkeyfi preserving type )` | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  | `cast( faat_md_tdd.real_estate_key as faa_deprecated_real_estate_obj preserving type )` | `CHAR(8)` | Internal Key of Real Estate Object (Deprecated) |
| `ProfitCenter` |  | |  | `profit_center` | `CHAR(10)` | Profit Center |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `FunctionalArea` |  | |  | `functional_area` | `CHAR(16)` | Functional Area |
| `ShiftOperationFactor` |  | |  | `cast( '0' as msfak )` | `DEC(3)` | Multiple-Shift Factor for Multiple Shift Operation |
| `GrantID` |  | |  | `grant_id` | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  | `budget_period` | `CHAR(10)` | Budget Period |
| `FundsCenter` |  | |  | `funds_center` | `CHAR(16)` | Funds Center |
| `FunctionalLocation` |  | |  | `cast( '' as tplnr )` | `CHAR(30)` | Functional Location |
| `BusinessPlace` |  | |  | `business_place` | `CHAR(4)` | Business Place |
| `AssetAuthorizationContext` |  | |  | `cast( 'NEW' as faa_authcntxt )` | `CHAR(10)` | Asset Authorization Context |
| `ReferenceDocumentType` |  | |  | `awtyp` | `CHAR(5)` | Reference Transaction |
| `LogicalSystem` |  | |  | `awsys` | `CHAR(10)` | Logical System of Source Document |
| `ReferenceDocumentContext` |  | |  | `aworg` | `CHAR(10)` | Reference Organizational Units |
| `ReferenceDocument` |  | |  | `awref` | `CHAR(10)` | Reference Doc. Number |
| `_FixedAsset` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ResponsibleCostCenter` | | ✓ | | | | |
| `_CostCenterActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_AssetLocation` | | ✓ | | | | |
| `_RealEstateObject` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixedAsset` | `I_FixedAsset` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ResponsibleCostCenter` | `I_CostCenter` | [0..*] |
| `_CostCenterActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_AssetLocation` | `I_Location` | [0..1] |
| `_RealEstateObject` | `I_REObjectByIntFinNumber` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_Extension` | `E_FixedAssetAssgmt` | [1..1] |

## Source Code

```abap
@Analytics: { technicalName: 'IFASSETASSGMT',
              dataCategory: #DIMENSION }
@EndUserText.label: 'Fixed Asset Time Dependent Data'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { representativeKey: 'FixedAsset',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE]
              }
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions: true}

define view entity I_FixedAssetAssgmt
  as select from           faat_md_tdd
    left outer to one join tka02 on  tka02.bukrs = faat_md_tdd.comp_code
                                 and tka02.gsber = ''

  //Association with Asset Master Reference
  association [1..1] to I_FixedAsset             as _FixedAsset             on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                            and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                            and $projection.FixedAsset       = _FixedAsset.FixedAsset

  association [0..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_MasterFixedAsset       as _MasterFixedAsset       on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                            and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..*] to I_CostCenter             as _CostCenter             on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                            and $projection.ControllingArea = _CostCenter.ControllingArea
  association [0..*] to I_CostCenter             as _ResponsibleCostCenter  on  $projection.ResponsibleCostCenter = _ResponsibleCostCenter.CostCenter
                                                                            and $projection.ControllingArea       = _ResponsibleCostCenter.ControllingArea
  association [0..*] to I_CostCenterActivityType as _CostCenterActivityType on  $projection.CostCtrActivityType = _CostCenterActivityType.CostCtrActivityType
                                                                            and $projection.ControllingArea     = _CostCenterActivityType.ControllingArea
  association [0..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant
  association [0..1] to I_BusinessArea           as _BusinessArea           on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_WBSElementBasicData    as _WBSElement             on  $projection.WBSElementInternalID_2 = _WBSElement.WBSElementInternalID
  association [0..1] to I_InternalOrder          as _InternalOrder          on  $projection.InternalOrder = _InternalOrder.InternalOrder
  association [0..1] to I_MaintenanceOrder       as _MaintenanceOrder       on  $projection.MaintenanceOrder = _MaintenanceOrder.MaintenanceOrder
  association [0..*] to I_ProfitCenter           as _ProfitCenter           on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                            and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..1] to I_Segment                as _Segment                on  $projection.Segment = _Segment.Segment
  association [0..1] to I_FunctionalArea         as _FunctionalArea         on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_ControllingArea        as _ControllingArea        on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FunctionalLocation     as _FunctionalLocation     on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_Location               as _AssetLocation          on  $projection.AssetLocation = _AssetLocation.Location
                                                                            and $projection.Plant         = _AssetLocation.Plant
  association [0..1] to I_REObjectByIntFinNumber as _RealEstateObject       on  $projection.REInternalFinNumber = _RealEstateObject.REInternalFinNumber
  association [0..1] to I_Employment             as _Employment             on  $projection.PersonnelNumber = _Employment.EmploymentInternalID

  // Association to Extension View
  association [1..1] to E_FixedAssetAssgmt       as _Extension              on  $projection.CompanyCode      = _Extension.CompanyCode
                                                                            and $projection.MasterFixedAsset = _Extension.MasterFixedAsset
                                                                            and $projection.FixedAsset       = _Extension.FixedAsset
                                                                            and $projection.ValidityEndDate  = _Extension.ValidityEndDate
{
      //Key Fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key faat_md_tdd.comp_code                                                                 as CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key faat_md_tdd.asset_no                                                                  as MasterFixedAsset,

  key faat_md_tdd.asset_subno                                                               as FixedAsset,
      @Semantics.businessDate.to: true
  key faat_md_tdd.valid_to_date                                                             as ValidityEndDate,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      tka02.kokrs                                                                           as ControllingArea,

      //Relevant Fields
      @Semantics.businessDate.from: true
      faat_md_tdd.valid_from_date                                                           as ValidityStartDate,
      faat_md_tdd.car_license_plate                                                         as VehicleLicensePlateNumber,
      @ObjectModel.foreignKey.association: '_CostCenter'
      faat_md_tdd.cost_center                                                               as CostCenter,
      @ObjectModel.foreignKey.association: '_Plant'
      faat_md_tdd.plant                                                                     as Plant,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @VDM.lifecycle: {status: #DEPRECATED}
      faat_md_tdd.business_area                                                             as BusinessArea,
      @ObjectModel.foreignKey.association: '_AssetLocation'
      faat_md_tdd.location                                                                  as AssetLocation,
      faat_md_tdd.room                                                                      as Room,
      @ObjectModel.foreignKey.association: '_CostCenterActivityType'
      faat_md_tdd.activity_type                                                             as CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_InternalOrder'
      faat_md_tdd.internal_order                                                            as InternalOrder,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as xstil )                                                                   as IsShutDown, //Moved to I_AssetTimeBasedValuation.IsShutDown
      @ObjectModel.foreignKey.association: '_ResponsibleCostCenter'
      faat_md_tdd.responsible_cost_center                                                   as ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_Employment'
      faat_md_tdd.personnel_number                                                          as PersonnelNumber,
      @ObjectModel.foreignKey.association: '_MaintenanceOrder'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as iaufn )                                                                   as MaintenanceOrder,
      faat_md_tdd.tax_jurisdiction                                                          as TaxJurisdiction,
      faat_md_tdd.fund                                                                      as Fund,
      @ObjectModel.foreignKey.association: '_WBSElement'
      faat_md_tdd.wbs_element                                                               as WBSElementInternalID_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'WBSElementInternalID_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID_2'
      cast( faat_md_tdd.wbs_element as am_ipsnr preserving type )                           as WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_RealEstateObject'
      cast( faat_md_tdd.real_estate_key  as recaimkeyfi preserving type )                   as REInternalFinNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'REInternalFinNumber'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'REInternalFinNumber'
      cast( faat_md_tdd.real_estate_key as faa_deprecated_real_estate_obj preserving type ) as RealEstateObject,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      faat_md_tdd.profit_center                                                             as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Segment'
      faat_md_tdd.segment                                                                   as Segment,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      faat_md_tdd.functional_area                                                           as FunctionalArea,
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '0' as msfak )                                                                  as ShiftOperationFactor, //Moved to I_AssetTimeBasedValuation.ShiftOperationFactor
      faat_md_tdd.grant_id                                                                  as GrantID,
      faat_md_tdd.budget_period                                                             as BudgetPeriod,
      faat_md_tdd.funds_center                                                              as FundsCenter,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast( '' as tplnr )                                                                   as FunctionalLocation, //Works in OP only, hence deprecated in cloud with CE1911, no longer available
      faat_md_tdd.business_place                                                            as BusinessPlace,
      @Consumption.hidden: true
      @VDM.lifecycle.status: #DEPRECATED
      cast( 'NEW' as faa_authcntxt )                                                        as AssetAuthorizationContext, //Needed for DCL
      faat_md_tdd.awtyp                                                                     as ReferenceDocumentType,
      faat_md_tdd.awsys                                                                     as LogicalSystem,
      faat_md_tdd.aworg                                                                     as ReferenceDocumentContext,
      faat_md_tdd.awref                                                                     as ReferenceDocument,

      // Define association to parent
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _FixedAsset,
      _CompanyCode,
      _MasterFixedAsset,
      _CostCenter,
      _ResponsibleCostCenter,
      _CostCenterActivityType,
      _Plant,
      _BusinessArea,
      _WBSElement,
      _InternalOrder,
      @VDM.lifecycle: {status: #DEPRECATED}
      _MaintenanceOrder,
      _ProfitCenter,
      _Segment,
      _FunctionalArea,
      _ControllingArea,
      _FunctionalLocation,
      _AssetLocation,
      _RealEstateObject,
      _Employment
}
```
