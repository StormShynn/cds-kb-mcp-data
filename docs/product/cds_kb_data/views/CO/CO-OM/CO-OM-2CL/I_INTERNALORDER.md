---
name: I_INTERNALORDER
description: "Internalorder"
app_component: CO-OM-2CL
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
  - CO
  - CO-OM
  - interface-view
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_INTERNALORDER

**Internalorder**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `InternalOrder` | ✓ | |  | `cast( aufnr as fins_int_aufnr preserving type )` | `CHAR(12)` | Internal Order |
| `InternalOrderDescription` |  | |  | `cast(ktext as fis_internalorder_text)` | `CHAR(40)` | Internal Order Description |
| `OrderCategory` |  | |  | `autyp` | `NUMC(2)` | Order Category |
| `BusinessArea` |  | |  | `cast(gsber as fis_rbusa)` | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  | `cast(kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Order Currency |
| `IsStatisticalOrder` |  | |  | `cast (astkz as fins_co_xaufnr_stat preserving type )` | `CHAR(1)` | Indicates If the Int. Order Has a Stats. Account Assignment |
| `ReferenceOrder` |  | |  | `cast(refnr as fis_aufrefnr preserving type )` | `CHAR(12)` | Reference Order Number |
| `SalesOrder` |  | |  | `kdauf` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  | `kdpos` | `NUMC(6)` | Item Number in Sales Order |
| `WBSElement` |  | |  | `pspel` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  | `cast ( pspel as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `RequestingCostCenter` |  | |  | `akstl` | `CHAR(10)` | Requesting cost center |
| `RequestingCompanyCode` |  | |  | `abukr` | `CHAR(4)` | Requesting company code |
| `RequestingOrder` |  | |  | `anfaufnr` | `CHAR(12)` | Requesting order |
| `InternalOrderLocation` |  | |  | `cast( stort as fco_io_aufstort preserving type )` | `CHAR(10)` | Plant location for internal order |
| `LocationPlant` |  | |  | `sowrk` | `CHAR(4)` | Location Plant |
| `ExternalOrder` |  | |  | `aufex` | `CHAR(20)` | External order number |
| `ActualPostedCostCenter` |  | |  | `cast( cycle as fins_st_kostl preserving type )` | `CHAR(10)` | Cost Center for Actual Costs Posting |
| `PlanningWithLineItemsIsActive` |  | |  | `plgkz` | `CHAR(1)` | Identifier for Planning with Line Items |
| `CostCenter` |  | |  | `cast(kostl as fis_kostl preserving type )` | `CHAR(10)` | Cost Center |
| `LogicalSystem` |  | |  | `logsystem` | `CHAR(10)` | Logical System |
| `OrdIsUsedInIntegratedPlanning` |  | |  | `cast(plint as fco_plint preserving type )` | `CHAR(1)` | Indicates If the Internal Order Is Plan Integrated |
| `TaxJurisdiction` |  | |  | `cast ( txjcd as fis_txjcd preserving type )` | `CHAR(15)` | Tax Jurisdiction |
| `ResultAnalysisInternalID` |  | |  | `cast(abgsl as fco_abgr_schl preserving type )` | `CHAR(6)` | Results Analysis Key |
| `ConditionUsage` |  | |  | `kvewe` | `CHAR(1)` | Usage of the condition table |
| `ConditionApplication` |  | |  | `kappl` | `CHAR(2)` | Application |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `OverheadCode` |  | |  | `cast(zschl as fco_aufzschl preserving type )` | `CHAR(6)` | Overhead Key |
| `OrderInterestCalcProfile` |  | |  | `cast(zschm as fco_io_ps_zschm preserving type )` | `CHAR(7)` | Interest Profile for Order Interest Calculation |
| `IntOrderSettlementCostElement` |  | |  | `cast(kstar as fco_aufkstar preserving type )` | `CHAR(10)` | Settlement Cost Element |
| `BasicSettlementGLAccount` |  | |  | `saknr` | `CHAR(10)` | G/L Account for Basic Settlement |
| `IntOrderIndividualField1Value` |  | |  | `user0` | `CHAR(20)` | Applicant |
| `IntOrderIndividualField2Value` |  | |  | `user1` | `CHAR(20)` | Applicant's telephone number |
| `IntOrderIndividualField3Value` |  | |  | `user2` | `CHAR(20)` | Person Responsible |
| `IntOrderIndividualField4Value` |  | |  | `user3` | `CHAR(20)` | Telephone number of person in charge |
| `IntOrderIndividualField5Amount` |  | |  | `user4` | `CURR(11)` | Estimated total costs of order |
| `IntOrderIndividualField6Date` |  | |  | `user5` | `DATS(8)` | Application date |
| `IntOrderIndividualField7Value` |  | |  | `user6` | `CHAR(15)` | Department |
| `IntOrderIndividualField8Date` |  | |  | `user7` | `DATS(8)` | Work Start |
| `IntOrderIndividualField9Date` |  | |  | `user8` | `DATS(8)` | End of Work |
| `IntOrderIndividualField10Value` |  | |  | `user9` | `CHAR(1)` | Identifier for work permit issued |
| `OrderProcessingGroup` |  | |  | `cast(abkrs as fco_aufabkrs preserving type )` | `NUMC(2)` | Processing Group |
| `InvestmentProfile` |  | |  | `cast(ivpro as fco_im_profil preserving type )` | `CHAR(6)` | Investment Measure Profile |
| `InvestmentScale` |  | |  | `cast(sizecl as fco_im_sizecl preserving type )` | `CHAR(2)` | Scale of investment objects |
| `InvestmentReason` |  | |  | `izwek` | `CHAR(2)` | Reason for Investment |
| `EnvironmentalInvestmentReason` |  | |  | `umwkz` | `CHAR(5)` | Reason for Environmental Investment |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureOriginalCostObject` |  | |  | `jv_oco` | `CHAR(1)` | JV original cost object |
| `JointVentureObjectType` |  | |  | `otype` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  | `jv_jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  | `jv_jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `IsDeleted` |  | |  | `loekz` | `CHAR(1)` | Deletion Flag |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Created On |
| `CreationTime` |  | |  | `erfzeit` | `TIMS(6)` | Time created |
| `CreatedByUser` |  | |  | `cast(ernam as fin_usnam preserving type )` | `CHAR(12)` | Created By |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Last Changed By |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Change Date for Order Master |
| `LastChangeTime` |  | |  | `aezeit` | `TIMS(6)` | Changed At |
| `ControllingObject` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `CompanyCode` |  | |  | `cast(bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `ProfitCenter` |  | |  | `cast(prctr as fis_prctr)` | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  | `cast(func_area as fm_farea)` | `CHAR(16)` | Functional Area |
| `ControllingObjectClass` |  | |  | `cast(scope as fis_scope_cv_conv)` | `CHAR(2)` | Object Class |
| `OrderType` |  | |  | `auart` | `CHAR(4)` | Order Type |
| `ResponsibleCostCenter` |  | |  | `cast( kostv as fin_io_aufkostv preserving type )` | `CHAR(10)` | Responsible cost center in internal order |
| `InternalOrderResponsibleUser` |  | |  | `cast( veraa_user as fco_veraa_user preserving type )` | `CHAR(12)` | Responsible user for Internal Order |
| `IntOrderPlannedReleaseDate` |  | |  | `pdat1` | `DATS(8)` | Planned release date |
| `IntOrderPlannedCompletionDate` |  | |  | `pdat2` | `DATS(8)` | Planned completion date |
| `IntOrderPlannedClosingDate` |  | |  | `pdat3` | `DATS(8)` | Planned closing date |
| `InternalOrderReleaseDate` |  | |  | `idat1` | `DATS(8)` | Release Date |
| `InternalOrderCompletionDate` |  | |  | `idat2` | `DATS(8)` | Technical Completion Date |
| `InternalOrderClosingDate` |  | |  | `idat3` | `DATS(8)` | Close Date |
| `CostCollector` |  | |  | `cckey` | `CHAR(23)` | Cost Collector Key |
| `_ControllingAreaText` | | ✓ | | | | |
| `_InternalOrderTypeText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_InternalOrderType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_SystemStatus` | | ✓ | | | | |
| `_CurProfitCenterText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_CurRespCostCenterText` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_RequestingCostCenter` | | ✓ | | | | |
| `_CurRequestingCostCenterText` | | ✓ | | | | |
| `_RequestingCompanyCode` | | ✓ | | | | |
| `_RequestingOrder` | | ✓ | | | | |
| `_Location` | | ✓ | | | | |
| `_LocationPlant` | | ✓ | | | | |
| `_ActualPostedCostCenter` | | ✓ | | | | |
| `_CurActualPostedCostCenterText` | | ✓ | | | | |
| `_CostCenterData` | | ✓ | | | | |
| `_CurCostCenterDataText` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_ConditionUsage` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_CostingSheetProcedure` | | ✓ | | | | |
| `_IntOrderSettlementCostElement` | | ✓ | | | | |
| `_BasicSettlementGLAccount` | | ✓ | | | | |
| `_OrderProcessingGroup` | | ✓ | | | | |
| `_InvestmentProfile` | | ✓ | | | | |
| `_InvestmentReason` | | ✓ | | | | |
| `_EnvrnmtlInvestmentReason` | | ✓ | | | | |
| `_JointVentureMaster` | | ✓ | | | | |
| `_JointVentureRecovery` | | ✓ | | | | |
| `_JntVntrEquityTypeMaster` | | ✓ | | | | |
| `_JntVntrCostCtrType` | | ✓ | | | | |
| `_JntIntrstBillgClass` | | ✓ | | | | |
| `_JntIntrstBillgSubclass` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ResultsAnalysisKey` | | ✓ | | | | |
| `_InvestmentObjectScale` | | ✓ | | | | |
| `_IntOrderActiveSystemStatus` | | ✓ | | | | |
| `_IntOrderActiveUserStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_InternalOrderTypeText` | `I_InternalOrderTypeText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_InternalOrderType` | `I_InternalOrderType` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_SystemStatus` | `I_InternalOrderSystemStatus` | [0..*] |
| `_Extension` | `E_LogisticsOrder` | [1..1] |
| `_CurProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_CurRespCostCenterText` | `I_CostCenterText` | [0..*] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_RequestingCostCenter` | `I_CostCenter` | [0..*] |
| `_CurRequestingCostCenterText` | `I_CostCenterText` | [0..*] |
| `_RequestingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_RequestingOrder` | `I_Order` | [0..1] |
| `_Location` | `I_Location` | [0..1] |
| `_LocationPlant` | `I_Plant` | [0..1] |
| `_ActualPostedCostCenter` | `I_CostCenter` | [0..*] |
| `_CurActualPostedCostCenterText` | `I_CostCenterText` | [0..*] |
| `_CostCenterData` | `I_CostCenter` | [0..*] |
| `_CurCostCenterDataText` | `I_CostCenterText` | [0..*] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_ConditionUsage` | `I_ConditionUsage` | [0..1] |
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |
| `_CostingSheetProcedure` | `I_CostingSheetProcedure` | [0..1] |
| `_IntOrderSettlementCostElement` | `I_CostElementOnControllingArea` | [0..*] |
| `_BasicSettlementGLAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_OrderProcessingGroup` | `I_OrderProcessingGroup` | [0..1] |
| `_InvestmentProfile` | `I_InvestmentProfile` | [0..1] |
| `_InvestmentReason` | `I_InvestmentReason` | [0..1] |
| `_EnvrnmtlInvestmentReason` | `I_EnvrnmtlInvestmentReason` | [0..1] |
| `_JointVentureMaster` | `I_JointVentureMaster` | [0..1] |
| `_JointVentureRecovery` | `I_JointVentureRecovery` | [0..1] |
| `_JntVntrEquityTypeMaster` | `I_JntVntrEquityTypeMaster` | [0..1] |
| `_JntVntrCostCtrType` | `I_JntVntrCostCtrType` | [0..1] |
| `_JntIntrstBillgClass` | `I_JntIntrstBillgClass` | [0..1] |
| `_JntIntrstBillgSubclass` | `I_JntIntrstBillgSubclass` | [0..1] |
| `_ResponsibleUser` | `I_UserContactCard` | [0..1] |
| `_CreatedByUser` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_ResultsAnalysisKey` | `I_ResultsAnalysisKey` | [0..1] |
| `_InvestmentObjectScale` | `I_InvestmentObjectScale` | [0..1] |
| `_IntOrderActiveSystemStatus` | `I_IntOrderActiveSystemStatus` | [0..*] |
| `_IntOrderActiveUserStatus` | `I_IntOrderActiveUserStatus` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Internal Order'

@AbapCatalog.sqlViewName: 'IFIINTERNALORDER'
@AbapCatalog.buffering: {type: #NONE, numberOfKeyFields: 0, status: #NOT_ALLOWED}

@VDM.viewType: #BASIC

@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction:{ enabled: true } 
            }

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.representativeKey: 'InternalOrder'
@ObjectModel.sapObjectNodeType.name: 'InternalOrder'

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

//--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
@AccessControl.privilegedAssociations: ['_ControllingAreaText','_InternalOrderTypeText', '_ResponsibleUser', '_LastChangedByUser','_CreatedByUser']
// ]--GENERATED
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]

define view I_InternalOrder
  as select from aufk

  //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
  association [0..1] to I_ControllingArea              as _ControllingAreaText           on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_InternalOrderTypeText        as _InternalOrderTypeText         on  $projection.OrderType = _InternalOrderTypeText.OrderType
  // ]--GENERATED
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..*] to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_ControllingObjectClass       as _ControllingObjectClass        on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass

  association [0..1] to I_InternalOrderType            as _InternalOrderType             on  $projection.OrderType = _InternalOrderType.OrderType

  association [0..*] to I_CostCenter                   as _CostCenter                    on  $projection.ControllingArea       = _CostCenter.ControllingArea
                                                                                         and $projection.ResponsibleCostCenter = _CostCenter.CostCenter

  association [0..*] to I_InternalOrderSystemStatus    as _SystemStatus                  on  $projection.ControllingObject = _SystemStatus.ControllingObject

  association [1..1] to E_LogisticsOrder               as _Extension                     on  $projection.InternalOrder = _Extension.OrderID

  association [0..*] to I_ProfitCenterText             as _CurProfitCenterText           on  $projection.ControllingArea            = _CurProfitCenterText.ControllingArea
                                                                                         and $projection.ProfitCenter               = _CurProfitCenterText.ProfitCenter
                                                                                         and _CurProfitCenterText.ValidityStartDate <= $session.system_date
                                                                                         and _CurProfitCenterText.ValidityEndDate   >= $session.system_date

  association [0..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant

  association [0..1] to I_User                         as _User                          on  $projection.InternalOrderResponsibleUser = _User.UserID

  association [0..1] to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_Currency                     as _Currency                      on  $projection.Currency = _Currency.Currency

  association [0..1] to I_OrderCategory                as _OrderCategory                 on  $projection.OrderCategory = _OrderCategory.OrderCategory

  association [0..*] to I_CostCenterText               as _CurRespCostCenterText         on  $projection.ControllingArea              = _CurRespCostCenterText.ControllingArea
                                                                                         and $projection.ResponsibleCostCenter        = _CurRespCostCenterText.CostCenter
                                                                                         and _CurRespCostCenterText.ValidityStartDate <= $session.system_date
                                                                                         and _CurRespCostCenterText.ValidityEndDate   >= $session.system_date

  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [0..*] to I_CostCenter                   as _RequestingCostCenter          on  $projection.RequestingCostCenter = _RequestingCostCenter.CostCenter
                                                                                         and $projection.ControllingArea      = _RequestingCostCenter.ControllingArea

  association [0..*] to I_CostCenterText               as _CurRequestingCostCenterText   on  $projection.ControllingArea                    = _CurRequestingCostCenterText.ControllingArea
                                                                                         and $projection.RequestingCostCenter               = _CurRequestingCostCenterText.CostCenter
                                                                                         and _CurRequestingCostCenterText.ValidityStartDate <= $session.system_date
                                                                                         and _CurRequestingCostCenterText.ValidityEndDate   >= $session.system_date

  association [0..1] to I_CompanyCode                  as _RequestingCompanyCode         on  $projection.RequestingCompanyCode = _RequestingCompanyCode.CompanyCode

  association [0..1] to I_Order                        as _RequestingOrder               on  $projection.RequestingOrder = _RequestingOrder.OrderID

  association [0..1] to I_Location                     as _Location                      on  $projection.InternalOrderLocation = _Location.Location
                                                                                         and $projection.LocationPlant         = _Location.Plant

  association [0..1] to I_Plant                        as _LocationPlant                 on  $projection.LocationPlant = _LocationPlant.Plant

  association [0..*] to I_CostCenter                   as _ActualPostedCostCenter        on  $projection.ControllingArea        = _ActualPostedCostCenter.ControllingArea
                                                                                         and $projection.ActualPostedCostCenter = _ActualPostedCostCenter.CostCenter

  association [0..*] to I_CostCenterText               as _CurActualPostedCostCenterText on  $projection.ControllingArea                      = _CurActualPostedCostCenterText.ControllingArea
                                                                                         and $projection.ActualPostedCostCenter               = _CurActualPostedCostCenterText.CostCenter
                                                                                         and _CurActualPostedCostCenterText.ValidityStartDate <= $session.system_date
                                                                                         and _CurActualPostedCostCenterText.ValidityEndDate   >= $session.system_date

  association [0..*] to I_CostCenter                   as _CostCenterData                on  $projection.ControllingArea = _CostCenterData.ControllingArea
                                                                                         and $projection.CostCenter      = _CostCenterData.CostCenter

  association [0..*] to I_CostCenterText               as _CurCostCenterDataText         on  $projection.ControllingArea              = _CurCostCenterDataText.ControllingArea
                                                                                         and $projection.CostCenter                   = _CurCostCenterDataText.CostCenter
                                                                                         and _CurCostCenterDataText.ValidityStartDate <= $session.system_date
                                                                                         and _CurCostCenterDataText.ValidityEndDate   >= $session.system_date

  association [0..1] to I_LogicalSystem                as _LogicalSystem                 on  $projection.LogicalSystem = _LogicalSystem.LogicalSystem

  association [0..1] to I_ConditionUsage               as _ConditionUsage                on  $projection.ConditionUsage = _ConditionUsage.ConditionUsage

  association [0..1] to I_ConditionApplication         as _ConditionApplication          on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication

  association [0..1] to I_CostingSheetProcedure        as _CostingSheetProcedure         on  $projection.ConditionUsage       = _CostingSheetProcedure.ConditionUsage
                                                                                         and $projection.ConditionApplication = _CostingSheetProcedure.ConditionApplication
                                                                                         and $projection.CostingSheet         = _CostingSheetProcedure.CostingSheetProcedure

  association [0..*] to I_CostElementOnControllingArea as _IntOrderSettlementCostElement on  $projection.ControllingArea               = _IntOrderSettlementCostElement.ControllingArea
                                                                                         and $projection.IntOrderSettlementCostElement = _IntOrderSettlementCostElement.CostElement

  association [0..1] to I_GLAccountInCompanyCode       as _BasicSettlementGLAccount      on  $projection.CompanyCode              = _BasicSettlementGLAccount.CompanyCode
                                                                                         and $projection.BasicSettlementGLAccount = _BasicSettlementGLAccount.GLAccount

  association [0..1] to I_OrderProcessingGroup         as _OrderProcessingGroup          on  $projection.ControllingArea      = _OrderProcessingGroup.ControllingArea
                                                                                         and $projection.OrderProcessingGroup = _OrderProcessingGroup.OrderProcessingGroup

  association [0..1] to I_InvestmentProfile            as _InvestmentProfile             on  $projection.InvestmentProfile = _InvestmentProfile.InvestmentProfile

  association [0..1] to I_InvestmentReason             as _InvestmentReason              on  $projection.InvestmentReason = _InvestmentReason.InvestmentReason

  association [0..1] to I_EnvrnmtlInvestmentReason     as _EnvrnmtlInvestmentReason      on  $projection.EnvironmentalInvestmentReason = _EnvrnmtlInvestmentReason.EnvrnmtlInvestmentReason

  association [0..1] to I_JointVentureMaster           as _JointVentureMaster            on  $projection.CompanyCode  = _JointVentureMaster.CompanyCode
                                                                                         and $projection.JointVenture = _JointVentureMaster.JointVenture

  association [0..1] to I_JointVentureRecovery         as _JointVentureRecovery          on  $projection.JointVentureRecoveryCode = _JointVentureRecovery.JointVentureRecoveryCode
                                                                                         and $projection.CompanyCode              = _JointVentureRecovery.CompanyCode

  association [0..1] to I_JntVntrEquityTypeMaster      as _JntVntrEquityTypeMaster       on  $projection.JointVentureEquityType = _JntVntrEquityTypeMaster.JointVentureEquityType
                                                                                         and $projection.CompanyCode            = _JntVntrEquityTypeMaster.CompanyCode

  association [0..1] to I_JntVntrCostCtrType           as _JntVntrCostCtrType            on  $projection.JointVentureObjectType = _JntVntrCostCtrType.JntVntrCostCtrType
                                                                                         and $projection.CompanyCode            = _JntVntrCostCtrType.CompanyCode

  association [0..1] to I_JntIntrstBillgClass          as _JntIntrstBillgClass           on  $projection.JointVentureClass = _JntIntrstBillgClass.JntIntrstBillgClass
                                                                                         and $projection.CompanyCode       = _JntIntrstBillgClass.CompanyCode

  association [0..1] to I_JntIntrstBillgSubclass       as _JntIntrstBillgSubclass        on  $projection.CompanyCode          = _JntIntrstBillgSubclass.CompanyCode
                                                                                         and $projection.JointVentureClass    = _JntIntrstBillgSubclass.JntIntrstBillgClass
                                                                                         and $projection.JointVentureSubClass = _JntIntrstBillgSubclass.JntIntrstBillgSubClass

  association [0..1] to I_UserContactCard              as _ResponsibleUser               on  $projection.InternalOrderResponsibleUser = _ResponsibleUser.ContactCardID

  association [0..1] to I_UserContactCard              as _CreatedByUser                 on  $projection.CreatedByUser = _CreatedByUser.ContactCardID

  association [0..1] to I_UserContactCard              as _LastChangedByUser             on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID


  association [0..1] to I_ResultsAnalysisKey           as _ResultsAnalysisKey            on  $projection.ResultAnalysisInternalID = _ResultsAnalysisKey.ResultAnalysisInternalID
  association [0..1] to I_InvestmentObjectScale        as _InvestmentObjectScale         on  $projection.InvestmentScale = _InvestmentObjectScale.InvestmentScale

  association [0..*] to I_IntOrderActiveSystemStatus   as _IntOrderActiveSystemStatus    on  $projection.ControllingObject = _IntOrderActiveSystemStatus.StatusObject

  association [0..*] to I_IntOrderActiveUserStatus     as _IntOrderActiveUserStatus      on  $projection.ControllingObject = _IntOrderActiveUserStatus.StatusObject

{
      @ObjectModel.text.element: ['InternalOrderDescription']
  key cast( aufnr as fins_int_aufnr preserving type )      as InternalOrder,

      @Semantics.text: true
      cast(ktext as fis_internalorder_text)                as InternalOrderDescription,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      autyp                                                as OrderCategory,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      cast(gsber as fis_rbusa)                             as BusinessArea,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      cast(kokrs as fis_kokrs preserving type )            as ControllingArea,
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                                as Plant,
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                                as Currency,
      cast (astkz as fins_co_xaufnr_stat preserving type ) as IsStatisticalOrder,
      cast(refnr as fis_aufrefnr preserving type )         as ReferenceOrder,
      kdauf                                                as SalesOrder,
      kdpos                                                as SalesOrderItem,
      pspel                                                as WBSElement,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast ( pspel as ps_s4_pspnr preserving type )        as WBSElementInternalID,
      akstl                                                as RequestingCostCenter,
      @ObjectModel.foreignKey.association: '_RequestingCompanyCode'
      abukr                                                as RequestingCompanyCode,
      @ObjectModel.foreignKey.association: '_RequestingOrder'
      anfaufnr                                             as RequestingOrder,
      @ObjectModel.foreignKey.association: '_Location'
      cast( stort as fco_io_aufstort preserving type )     as InternalOrderLocation,
      @ObjectModel.foreignKey.association: '_LocationPlant'
      sowrk                                                as LocationPlant,
      aufex                                                as ExternalOrder,
      cast( cycle as fins_st_kostl preserving type )       as ActualPostedCostCenter,
      plgkz                                                as PlanningWithLineItemsIsActive,
      cast(kostl as fis_kostl preserving type )            as CostCenter,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      logsystem                                            as LogicalSystem,
      cast(plint as fco_plint preserving type )            as OrdIsUsedInIntegratedPlanning,
      cast ( txjcd as fis_txjcd preserving type )          as TaxJurisdiction,
      cast(abgsl as fco_abgr_schl preserving type )        as ResultAnalysisInternalID,
      @ObjectModel.foreignKey.association: '_ConditionUsage'
      kvewe                                                as ConditionUsage,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      kappl                                                as ConditionApplication,
      @ObjectModel.foreignKey.association: '_CostingSheetProcedure'
      kalsm                                                as CostingSheet,
      cast(zschl as fco_aufzschl preserving type )         as OverheadCode,
      // TODO - Define basic view for TPI01
      cast(zschm as fco_io_ps_zschm preserving type )      as OrderInterestCalcProfile,
      cast(kstar as fco_aufkstar preserving type )         as IntOrderSettlementCostElement,
      @ObjectModel.foreignKey.association: '_BasicSettlementGLAccount'
      saknr                                                as BasicSettlementGLAccount,

      user0                                                as IntOrderIndividualField1Value,
      user1                                                as IntOrderIndividualField2Value,
      user2                                                as IntOrderIndividualField3Value,
      user3                                                as IntOrderIndividualField4Value,
      @Semantics.amount.currencyCode: 'Currency'
      user4                                                as IntOrderIndividualField5Amount,
      user5                                                as IntOrderIndividualField6Date,
      user6                                                as IntOrderIndividualField7Value,
      user7                                                as IntOrderIndividualField8Date,
      user8                                                as IntOrderIndividualField9Date,
      user9                                                as IntOrderIndividualField10Value,

      @ObjectModel.foreignKey.association: '_OrderProcessingGroup'
      cast(abkrs as fco_aufabkrs preserving type )         as OrderProcessingGroup,
      cast(ivpro as fco_im_profil preserving type )        as InvestmentProfile,
      cast(sizecl as fco_im_sizecl preserving type )       as InvestmentScale,
      izwek                                                as InvestmentReason,
      @ObjectModel.foreignKey.association: '_EnvrnmtlInvestmentReason'
      umwkz                                                as EnvironmentalInvestmentReason,
      vname                                                as JointVenture,
      @ObjectModel.foreignKey.association: '_JointVentureRecovery'
      recid                                                as JointVentureRecoveryCode,
      @ObjectModel.foreignKey.association: '_JntVntrEquityTypeMaster'
      etype                                                as JointVentureEquityType,
      //TODO - Domain Fixed values
      jv_oco                                               as JointVentureOriginalCostObject,
      otype                                                as JointVentureObjectType,
      @ObjectModel.foreignKey.association: '_JntIntrstBillgClass'
      jv_jibcl                                             as JointVentureClass,
      @ObjectModel.foreignKey.association: '_JntIntrstBillgSubclass'
      jv_jibsa                                             as JointVentureSubClass,

      //  abkrs as ProcessingGroup,
      loekz                                                as IsDeleted,
      erdat                                                as CreationDate,
      erfzeit                                              as CreationTime,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      cast(ernam as fin_usnam preserving type )            as CreatedByUser,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      aenam                                                as LastChangedByUser,
      aedat                                                as LastChangeDate,
      aezeit                                               as LastChangeTime,
      objnr                                                as ControllingObject,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode' //Inserted by VDM CDS Suite Plugin
      cast(bukrs as fis_bukrs preserving type )            as CompanyCode,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ProfitCenter' //Inserted by VDM CDS Suite Plugin
      cast(prctr as fis_prctr)                             as ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea' //Inserted by VDM CDS Suite Plugin
      cast(func_area as fm_farea)                          as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass' //Inserted by VDM CDS Suite Plugin
      cast(scope as fis_scope_cv_conv)                     as ControllingObjectClass,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_InternalOrderTypeStdVH',
                     element: 'OrderType' }
        }]
      @ObjectModel.text.association: '_InternalOrderTypeText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InternalOrderType'
      auart                                                as OrderType,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      cast( kostv as fin_io_aufkostv preserving type )     as ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ResponsibleUser'
      cast( veraa_user as fco_veraa_user preserving type ) as InternalOrderResponsibleUser,

      pdat1                                                as IntOrderPlannedReleaseDate,
      pdat2                                                as IntOrderPlannedCompletionDate,
      pdat3                                                as IntOrderPlannedClosingDate,
      idat1                                                as InternalOrderReleaseDate,
      idat2                                                as InternalOrderCompletionDate,
      idat3                                                as InternalOrderClosingDate,
      cckey                                                as CostCollector,

      _ControllingArea,
      _CompanyCode,
      _ProfitCenter,
      _FunctionalArea,
      _ControllingObjectClass,
      _InternalOrderType,
      _CostCenter,
      _User,
      _WBSElementBasicData,
      _RequestingCostCenter,
      _RequestingCompanyCode,
      _RequestingOrder,
      _Location,
      _LocationPlant,
      _ActualPostedCostCenter,
      _CostCenterData,
      _LogicalSystem,
      _ConditionUsage,
      _ConditionApplication,
      _CostingSheetProcedure,
      _IntOrderSettlementCostElement,
      _BasicSettlementGLAccount,
      _OrderProcessingGroup,
      _InvestmentProfile,
      _InvestmentReason,
      _EnvrnmtlInvestmentReason,
      _JointVentureMaster,
      _JointVentureRecovery,
      _JntVntrEquityTypeMaster,
      _JntVntrCostCtrType,
      _JntIntrstBillgClass,
      _JntIntrstBillgSubclass,
      _ResponsibleUser,
      _CreatedByUser,
      _LastChangedByUser,
      _CurRespCostCenterText,
      _CurRequestingCostCenterText,
      _CurCostCenterDataText,
      _SystemStatus,
      _ResultsAnalysisKey,
      _InvestmentObjectScale,
      _Currency,
      _OrderCategory,
      _BusinessArea,
      _Plant,
      _CurProfitCenterText,
      _CurActualPostedCostCenterText,
      _IntOrderActiveSystemStatus,
      _IntOrderActiveUserStatus,
      //--[ GENERATED:012:GFBfhxvv7jY4pHq{eVxSQ0
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _InternalOrderTypeText
      // ]--GENERATED
}
where
     autyp = '01'
  or autyp = '02'
  or autyp = '03';
```
