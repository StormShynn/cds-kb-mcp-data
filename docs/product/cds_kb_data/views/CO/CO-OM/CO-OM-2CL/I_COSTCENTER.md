---
name: I_COSTCENTER
description: "Cost Center"
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
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTER

**Cost Center**

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
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `CostCenter` | ✓ | |  | `kostl` | `CHAR(10)` | Cost Center |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  | `datab` | `DATS(8)` | Valid-From Date |
| `IsBlkdForPrimaryCostsPosting` |  | |  | `bkzkp` | `CHAR(1)` | Lock Indicator for Actual Primary Postings |
| `IsBlockedForPlanPrimaryCosts` |  | |  | `pkzkp` | `CHAR(1)` | Lock Indicator for Plan Primary Costs |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `CostCenterCategory` |  | |  | `kosar` | `CHAR(1)` | Cost Center Category |
| `CostCtrResponsiblePersonName` |  | |  | `verak` | `CHAR(20)` | Person Responsible |
| `CostCtrResponsibleUser` |  | |  | `verak_user` | `CHAR(12)` | User Responsible |
| `CostCenterCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CostingSheet` |  | |  | `kalsm` | `CHAR(6)` | Costing Sheet |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `LogicalSystem` |  | |  | `logsystem` | `CHAR(10)` | Logical System |
| `CostCenterCreationDate` |  | |  | `ersda` | `DATS(8)` | Entered On |
| `CostCenterCreatedByUser` |  | |  | `usnam` | `CHAR(12)` | Entered By |
| `IsBlkdForSecondaryCostsPosting` |  | |  | `bkzks` | `CHAR(1)` | Lock Indicator for Actual Secondary Costs |
| `IsBlockedForRevenuePosting` |  | |  | `bkzer` | `CHAR(1)` | Lock Indicator for Actual Revenue Postings |
| `IsBlockedForCommitmentPosting` |  | |  | `bkzob` | `CHAR(1)` | Lock Indicator for Commitment Update |
| `IsBlockedForPlanSecondaryCosts` |  | |  | `cast(pkzks as fis_pkzks preserving type)` | `CHAR(1)` | Lock Indicator for Plan Secondary Costs |
| `IsBlockedForPlanRevenues` |  | |  | `cast(pkzer as fis_pkzer preserving type)` | `CHAR(1)` | Lock Indicator for Planning Revenues |
| `CostCenterAllocationMethod` |  | |  | `vmeth` | `CHAR(2)` | Indicator for Allowed Allocation Methods |
| `ConsumptionQtyIsRecorded` |  | |  | `mgefl` | `CHAR(1)` | Indicator for Recording Consumption Quantities |
| `Department` |  | |  | `abtei` | `CHAR(12)` | Department |
| `SubsequentCostCenter` |  | |  | `nkost` | `CHAR(10)` | Subsequent Cost Center |
| `ConditionUsage` |  | |  | `kvewe` | `CHAR(1)` | Usage of the condition table |
| `ConditionApplication` |  | |  | `kappl` | `CHAR(2)` | Application |
| `CostCenterAccountingOverhead` |  | |  | `koszschl` | `CHAR(6)` | CO-CCA Overhead Key |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `FormOfAddress` |  | |  | `anred` | `CHAR(15)` | Title |
| `AddressName` |  | |  | `name1` | `CHAR(35)` | Name |
| `AddressAdditionalName` |  | |  | `name2` | `CHAR(35)` | Name 2 |
| `CostCenterAddrName3` |  | |  | `name3` | `CHAR(35)` | Name 3 |
| `CostCenterAddrName4` |  | |  | `name4` | `CHAR(35)` | Name 4 |
| `CityName` |  | |  | `ort01` | `CHAR(35)` | City |
| `District` |  | |  | `ort02` | `CHAR(35)` | District |
| `StreetAddressName` |  | |  | `stras` | `CHAR(35)` | Street and House Number |
| `POBox` |  | |  | `pfach` | `CHAR(10)` | PO Box |
| `PostalCode` |  | |  | `pstlz` | `CHAR(10)` | Postal Code |
| `POBoxPostalCode` |  | |  | `pstl2` | `CHAR(10)` | PO Box Postal Code |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `Language` |  | |  | `spras` | `LANG(1)` | Language Key |
| `TeleboxNumber` |  | |  | `telbx` | `CHAR(15)` | Telebox Number |
| `PhoneNumber1` |  | |  | `telf1` | `CHAR(16)` | First telephone number |
| `PhoneNumber2` |  | |  | `telf2` | `CHAR(16)` | Second telephone number |
| `FaxNumber` |  | |  | `telfx` | `CHAR(31)` | Fax Number |
| `TeletexNumber` |  | |  | `teltx` | `CHAR(30)` | Teletex Number |
| `TelexNumber` |  | |  | `telx1` | `CHAR(30)` | Telex Number |
| `DataCommunicationPhoneNumber` |  | |  | `datlt` | `CHAR(14)` | Data communication line no. |
| `CostCenterPrinterDestination` |  | |  | `drnam` | `CHAR(4)` | Printer Destination for CCtr Report |
| `CostCenterStandardHierArea` |  | |  | `khinr` | `CHAR(12)` | Standard Hierarchy Area |
| `CostCollector` |  | |  | `cckey` | `CHAR(23)` | Cost Collector Key |
| `CostCenterIsComplete` |  | |  | `kompl` | `CHAR(1)` | Completion Flag for the Cost Center Master Record |
| `IsStatisticalCostCenter` |  | |  | `cast(stakz as fins_xkostl_stat preserving type)` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `ObjectInternalID` |  | |  | `objnr` | `CHAR(22)` | Object Number |
| `CostCenterFunction` |  | |  | `funkt` | `CHAR(3)` | Function of Cost Center |
| `CostCenterAlternativeFunction` |  | |  | `afunk` | `CHAR(3)` | Alternative Function of Cost Center |
| `FunctionalArea` |  | |  | `func_area` | `CHAR(16)` | Functional Area |
| `ActyIndepFormulaPlanningTmpl` |  | |  | `cpi_templ` | `CHAR(10)` | Template for Activity-Independent Formula Planning |
| `ActyDepdntFormulaPlanningTmpl` |  | |  | `cpd_templ` | `CHAR(10)` | Template for Activity-Dependent Formula Planning |
| `ActyIndependentAllocationTmpl` |  | |  | `sci_templ` | `CHAR(10)` | Template: Activity-Independent Allocation to Cost Center |
| `ActyDependentAllocationTmpl` |  | |  | `scd_templ` | `CHAR(10)` | Template: Activity-Dependent Allocation to Cost Center |
| `ActlIndepStatisticalKeyFigures` |  | |  | `ski_templ` | `CHAR(10)` | CCA_TEMPL_SKI |
| `ActlDepStatisticalKeyFigures` |  | |  | `skd_templ` | `CHAR(10)` | Template: Act. Stat. Key Figure - Cost Center/Activity Type |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  | `jv_otype` | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  | `jv_jibcl` | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  | `jv_jibsa` | `CHAR(5)` | JIB/JIBE Subclass A |
| `BudgetCarryingCostCenter` |  | |  | `budget_carrying_cost_ctr` | `CHAR(10)` | Budget-Carrying Cost Center |
| `AvailabilityControlProfile` |  | |  | `avc_profile` | `CHAR(6)` | Budget Availability Control: Profile |
| `AvailabilityControlIsActive` |  | |  | `avc_active` | `CHAR(1)` | Budget Availability Control for Cost Centers is Active |
| `Fund` |  | |  | `fund` | `CHAR(10)` | Fund |
| `GrantID` |  | |  | `grant_id` | `CHAR(20)` | Grant |
| `FundIsFixAssigned` |  | |  | `fund_fix_assigned` | `CHAR(1)` | Indicator for Fund with Fixed Assignment |
| `GrantIDIsFixAssigned` |  | |  | `grant_fix_assigned` | `CHAR(1)` | Indicator for Grant with Fixed Assignment |
| `FunctionalAreaIsFixAssigned` |  | |  | `func_area_fix_assigned` | `CHAR(1)` | Indicator for Functional Area with Fixed Assignment |
| `CostCenterCreationTime` |  | |  | `created_at` | `TIMS(6)` | Created At |
| `CostCenterLastChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Last Changed By |
| `CostCenterLastChangedOnDate` |  | |  | `last_changed_on` | `DATS(8)` | Last Changed On |
| `CostCenterLastChangedAtTime` |  | |  | `last_changed_at` | `TIMS(6)` | Last Changed At |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostCenterHierarchyNode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_CostCenterCategory` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CostingSheetProcedure` | | ✓ | | | | |
| `_UserRespContactCard` | | ✓ | | | | |
| `_UserCrtedContactCard` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_AvailabilityCtrlProfile` | | ✓ | | | | |
| `_ActivityBasedCostingTmplCpi` | | ✓ | | | | |
| `_ActivityBasedCostingTmplCpd` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSci` | | ✓ | | | | |
| `_ActivityBasedCostingTmplScd` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSki` | | ✓ | | | | |
| `_ActivityBasedCostingTmplSkd` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_JointVentureRecovery` | | ✓ | | | | |
| `_JointVentureEquityType` | | ✓ | | | | |
| `_JointVentureObjectType` | | ✓ | | | | |
| `_JointVentureClass` | | ✓ | | | | |
| `_JointVentureSubClass` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_BudgetCarryingCostCenter` | | ✓ | | | | |
| `_BudgetCostCenterHier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_Text` | `I_CostCenterText` | [0..*] |
| `_CostCenterHierarchyNode` | `I_CostCenterHierarchyNode` | [0..*] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_CostCenterCategory` | `I_CostCenterCategory` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CostingSheetProcedure` | `I_CostingSheetProcedure` | [0..1] |
| `_UserRespContactCard` | `I_UserContactCard` | [0..1] |
| `_UserCrtedContactCard` | `I_UserContactCard` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_AvailabilityCtrlProfile` | `I_AvailabilityCtrlProfile` | [0..1] |
| `_Extension` | `E_CostCenter` | [1..1] |
| `_ActivityBasedCostingTmplCpi` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplCpd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSci` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplScd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSki` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_ActivityBasedCostingTmplSkd` | `I_ActivityBasedCostingTmpl` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_JointVenture` | `I_JointVenture` | [0..1] |
| `_JointVentureRecovery` | `I_JointVentureRecovery` | [0..1] |
| `_JointVentureEquityType` | `I_JointVentureEquityType` | [0..1] |
| `_JointVentureObjectType` | `I_JntVntrCostCtrType` | [0..1] |
| `_JointVentureClass` | `I_JntIntrstBillgClass` | [0..1] |
| `_JointVentureSubClass` | `I_JntIntrstBillgSubclass` | [0..1] |
| `_Fund` | `I_Fund` | [0..*] |
| `_Grant` | `I_Grant` | [0..1] |
| `_BudgetCarryingCostCenter` | `I_CostCenter` | [0..*] |
| `_BudgetCostCenterHier` | `I_BudgetCostCenterHierarchy` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICOSTCENTER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@ObjectModel.representativeKey: 'CostCenter'
@ObjectModel.sapObjectNodeType.name: 'CostCenter'

@AccessControl.authorizationCheck: #CHECK
//@AccessControl.personalData.blocking: #REQUIRED -> Not needed for user in ADRP because no XBLCK field like in BUT000 or KNA1/LFA1
@AccessControl.privilegedAssociations: [ '_UserRespContactCard', '_UserCrtedContactCard', '_LastChangedByUserContactCard' ]

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Cost Center'
@VDM.viewType: #BASIC

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #L
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Consumption.filter.businessDate.at: true
define view I_CostCenter
  as select from csks

  association [1]    to I_ControllingArea           as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_CostCenterText            as _Text                         on  $projection.ControllingArea = _Text.ControllingArea
                                                                                     and $projection.CostCenter      = _Text.CostCenter
                                                                                     and $projection.ValidityEndDate = _Text.ValidityEndDate
  association [0..*] to I_CostCenterHierarchyNode   as _CostCenterHierarchyNode      on  $projection.ControllingArea = _CostCenterHierarchyNode.ControllingArea
                                                                                     and $projection.CostCenter      = _CostCenterHierarchyNode.CostCenter
  association [0..1] to I_Currency                  as _Currency                     on  $projection.CostCenterCurrency = _Currency.Currency
  association [0..1] to I_CompanyCode               as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea              as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter              as _ProfitCenter                 on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                     and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [0..1] to I_FunctionalArea            as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_CostCenterCategory        as _CostCenterCategory           on  $projection.CostCenterCategory = _CostCenterCategory.CostCenterCategory
  association [0..1] to I_Country                   as _Country                      on  $projection.Country = _Country.Country
  association [0..1] to I_Region                    as _Region                       on  $projection.Region  = _Region.Region
                                                                                     and $projection.Country = _Region.Country
  association [0..1] to I_CostingSheetProcedure     as _CostingSheetProcedure        on  _CostingSheetProcedure.ConditionUsage        = 'A'
                                                                                     and _CostingSheetProcedure.ConditionApplication  = 'KA'
                                                                                     and _CostingSheetProcedure.CostingSheetProcedure = $projection.CostingSheet
  association [0..1] to I_UserContactCard           as _UserRespContactCard          on  $projection.CostCtrResponsibleUser = _UserRespContactCard.ContactCardID
  association [0..1] to I_UserContactCard           as _UserCrtedContactCard         on  $projection.CostCenterCreatedByUser = _UserCrtedContactCard.ContactCardID

  association [0..1] to I_Language                  as _Language                     on  $projection.Language = _Language.Language
  association [0..1] to I_AvailabilityCtrlProfile   as _AvailabilityCtrlProfile      on  $projection.AvailabilityControlProfile = _AvailabilityCtrlProfile.AvailabilityControlProfile
  association [1..1] to E_CostCenter                as _Extension                    on  $projection.ControllingArea = _Extension.ControllingArea
                                                                                     and $projection.CostCenter      = _Extension.CostCenter
                                                                                     and $projection.ValidityEndDate = _Extension.ValidityEndDate

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplCpi  on  _ActivityBasedCostingTmplCpi.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplCpi.ActivityBasedCostingEnvrmt   = 'CPI'
                                                                                     and _ActivityBasedCostingTmplCpi.ActivityBasedCostingTemplate = $projection.ActyIndepFormulaPlanningTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplCpd  on  _ActivityBasedCostingTmplCpd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplCpd.ActivityBasedCostingEnvrmt   = 'CPD'
                                                                                     and _ActivityBasedCostingTmplCpd.ActivityBasedCostingTemplate = $projection.ActyDepdntFormulaPlanningTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSci  on  _ActivityBasedCostingTmplSci.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSci.ActivityBasedCostingEnvrmt   = 'SCI'
                                                                                     and _ActivityBasedCostingTmplSci.ActivityBasedCostingTemplate = $projection.ActyIndependentAllocationTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplScd  on  _ActivityBasedCostingTmplScd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplScd.ActivityBasedCostingEnvrmt   = 'SCD'
                                                                                     and _ActivityBasedCostingTmplScd.ActivityBasedCostingTemplate = $projection.ActyDependentAllocationTmpl

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSki  on  _ActivityBasedCostingTmplSki.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSki.ActivityBasedCostingEnvrmt   = 'SKI'
                                                                                     and _ActivityBasedCostingTmplSki.ActivityBasedCostingTemplate = $projection.ActlIndepStatisticalKeyFigures

  association [0..1] to I_ActivityBasedCostingTmpl  as _ActivityBasedCostingTmplSkd  on  _ActivityBasedCostingTmplSkd.ControllingArea              = $projection.ControllingArea
                                                                                     and _ActivityBasedCostingTmplSkd.ActivityBasedCostingEnvrmt   = 'SKD'
                                                                                     and _ActivityBasedCostingTmplSkd.ActivityBasedCostingTemplate = $projection.ActlDepStatisticalKeyFigures

  association [0..1] to I_UserContactCard           as _LastChangedByUserContactCard on  $projection.CostCenterLastChangedByUser = _LastChangedByUserContactCard.ContactCardID

  association [0..1] to I_JointVenture              as _JointVenture                 on  $projection.CompanyCode  = _JointVenture.CompanyCode
                                                                                     and $projection.JointVenture = _JointVenture.JointVenture

  association [0..1] to I_JointVentureRecovery      as _JointVentureRecovery         on  $projection.CompanyCode              = _JointVentureRecovery.CompanyCode
                                                                                     and $projection.JointVentureRecoveryCode = _JointVentureRecovery.JointVentureRecoveryCode

  association [0..1] to I_JointVentureEquityType    as _JointVentureEquityType       on  $projection.CompanyCode            = _JointVentureEquityType.CompanyCode
                                                                                     and $projection.JointVentureEquityType = _JointVentureEquityType.JointVentureEquityType

  association [0..1] to I_JntVntrCostCtrType        as _JointVentureObjectType       on  $projection.CompanyCode            = _JointVentureObjectType.CompanyCode
                                                                                     and $projection.JointVentureObjectType = _JointVentureObjectType.JntVntrCostCtrType

  association [0..1] to I_JntIntrstBillgClass       as _JointVentureClass            on  $projection.CompanyCode       = _JointVentureClass.CompanyCode
                                                                                     and $projection.JointVentureClass = _JointVentureClass.JntIntrstBillgClass

  association [0..1] to I_JntIntrstBillgSubclass    as _JointVentureSubClass         on  $projection.CompanyCode          = _JointVentureSubClass.CompanyCode
                                                                                     and $projection.JointVentureClass    = _JointVentureSubClass.JntIntrstBillgClass
                                                                                     and $projection.JointVentureSubClass = _JointVentureSubClass.JntIntrstBillgSubClass

  association [0..*] to I_Fund                      as _Fund                         on  $projection.Fund = _Fund.Fund

  association [0..1] to I_Grant                     as _Grant                        on  $projection.GrantID = _Grant.GrantID

  association [0..*] to I_CostCenter                as _BudgetCarryingCostCenter     on  _BudgetCarryingCostCenter.ControllingArea   = $projection.ControllingArea
                                                                                     and _BudgetCarryingCostCenter.CostCenter        = $projection.BudgetCarryingCostCenter
//                                                                                     and _BudgetCarryingCostCenter.ValidityStartDate <= $session.system_date
//                                                                                     and _BudgetCarryingCostCenter.ValidityEndDate   >= $session.system_date

  association [0..*] to I_BudgetCostCenterHierarchy as _BudgetCostCenterHier         on  _BudgetCostCenterHier.ControllingArea   = $projection.ControllingArea
                                                                                     and _BudgetCostCenterHier.CostCenter        = $projection.CostCenter
//                                                                                     and _BudgetCostCenterHier.ValidityStartDate <= $session.system_date
//                                                                                     and _BudgetCostCenterHier.ValidityEndDate   >= $session.system_date
{
      @ObjectModel.foreignKey.association: '_ControllingArea'
      //key cast( kokrs as fis_kokrs )  as ControllingArea,
  key kokrs                                           as ControllingArea,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CostCenterHierarchyNode'
  key kostl                                           as CostCenter,
      @Semantics.businessDate.to: true
  key datbi                                           as ValidityEndDate,
      @Semantics.businessDate.from: true
      datab                                           as ValidityStartDate,
      bkzkp                                           as IsBlkdForPrimaryCostsPosting,
      pkzkp                                           as IsBlockedForPlanPrimaryCosts,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                           as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                           as BusinessArea,
      @ObjectModel.foreignKey.association: '_CostCenterCategory'
      kosar                                           as CostCenterCategory,
      verak                                           as CostCtrResponsiblePersonName,
      @ObjectModel.foreignKey.association: '_UserRespContactCard'
      verak_user                                      as CostCtrResponsibleUser,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                           as CostCenterCurrency,
      @ObjectModel.foreignKey.association: '_CostingSheetProcedure'
      kalsm                                           as CostingSheet,
      txjcd                                           as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                           as ProfitCenter,
      werks                                           as Plant,
      logsystem                                       as LogicalSystem,
      @Semantics.systemDate.createdAt: true
      ersda                                           as CostCenterCreationDate,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association: '_UserCrtedContactCard'
      usnam                                           as CostCenterCreatedByUser,
      bkzks                                           as IsBlkdForSecondaryCostsPosting,
      bkzer                                           as IsBlockedForRevenuePosting,
      bkzob                                           as IsBlockedForCommitmentPosting,
      cast(pkzks as fis_pkzks preserving type)        as IsBlockedForPlanSecondaryCosts,
      cast(pkzer as fis_pkzer preserving type)        as IsBlockedForPlanRevenues,
      vmeth                                           as CostCenterAllocationMethod,
      mgefl                                           as ConsumptionQtyIsRecorded,
      abtei                                           as Department,
      nkost                                           as SubsequentCostCenter,
      kvewe                                           as ConditionUsage,
      kappl                                           as ConditionApplication,
      koszschl                                        as CostCenterAccountingOverhead,
      @ObjectModel.foreignKey.association: '_Country'
      land1                                           as Country,
      anred                                           as FormOfAddress,
      name1                                           as AddressName,
      name2                                           as AddressAdditionalName,
      name3                                           as CostCenterAddrName3,
      name4                                           as CostCenterAddrName4,
      ort01                                           as CityName,
      ort02                                           as District,
      stras                                           as StreetAddressName,
      pfach                                           as POBox,
      pstlz                                           as PostalCode,
      pstl2                                           as POBoxPostalCode,
      @ObjectModel.foreignKey.association: '_Region'
      regio                                           as Region,
      @ObjectModel.foreignKey.association: '_Language'
      spras                                           as Language,
      telbx                                           as TeleboxNumber,
      telf1                                           as PhoneNumber1,
      telf2                                           as PhoneNumber2,
      telfx                                           as FaxNumber,
      teltx                                           as TeletexNumber,
      telx1                                           as TelexNumber,
      datlt                                           as DataCommunicationPhoneNumber,
      drnam                                           as CostCenterPrinterDestination,
      khinr                                           as CostCenterStandardHierArea,
      cckey                                           as CostCollector,
      kompl                                           as CostCenterIsComplete,
      cast(stakz as fins_xkostl_stat preserving type) as IsStatisticalCostCenter,
      objnr                                           as ObjectInternalID,
      funkt                                           as CostCenterFunction,
      afunk                                           as CostCenterAlternativeFunction,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      func_area                                       as FunctionalArea,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplCpi'
      cpi_templ                                       as ActyIndepFormulaPlanningTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplCpd'
      cpd_templ                                       as ActyDepdntFormulaPlanningTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSci'
      sci_templ                                       as ActyIndependentAllocationTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplScd'
      scd_templ                                       as ActyDependentAllocationTmpl,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSki'
      ski_templ                                       as ActlIndepStatisticalKeyFigures,
      @ObjectModel.foreignKey.association: '_ActivityBasedCostingTmplSkd'
      skd_templ                                       as ActlDepStatisticalKeyFigures,
      vname                                           as JointVenture,
      recid                                           as JointVentureRecoveryCode,
      etype                                           as JointVentureEquityType,
      jv_otype                                        as JointVentureObjectType,
      jv_jibcl                                        as JointVentureClass,
      jv_jibsa                                        as JointVentureSubClass,
      budget_carrying_cost_ctr                        as BudgetCarryingCostCenter,
      avc_profile                                     as AvailabilityControlProfile,
      avc_active                                      as AvailabilityControlIsActive,

      fund                                            as Fund,
      grant_id                                        as GrantID,
      fund_fix_assigned                               as FundIsFixAssigned,
      grant_fix_assigned                              as GrantIDIsFixAssigned,
      func_area_fix_assigned                          as FunctionalAreaIsFixAssigned,

      @Semantics.systemTime.createdAt: true
      created_at                                      as CostCenterCreationTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
      @Semantics.user.lastChangedBy
      last_changed_by                                 as CostCenterLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      last_changed_on                                 as CostCenterLastChangedOnDate,
      @Semantics.systemTime.lastChangedAt: true
      last_changed_at                                 as CostCenterLastChangedAtTime,

      _ControllingArea,
      _Text,
      _CostCenterHierarchyNode,
      _Currency,
      _CompanyCode,
      _BusinessArea,
      @Consumption.filter.businessDate.at: true
      _ProfitCenter,
      _FunctionalArea,
      _CostCenterCategory,
      _Country,
      _Region,
      _CostingSheetProcedure,
      _Language,
      _AvailabilityCtrlProfile,
      _UserRespContactCard,
      _UserCrtedContactCard,
      _ActivityBasedCostingTmplCpi,
      _ActivityBasedCostingTmplCpd,
      _ActivityBasedCostingTmplSci,
      _ActivityBasedCostingTmplScd,
      _ActivityBasedCostingTmplSki,
      _ActivityBasedCostingTmplSkd,
      _LastChangedByUserContactCard,
      _JointVenture,
      _JointVentureRecovery,
      _JointVentureEquityType,
      _JointVentureObjectType,
      _JointVentureClass,
      _JointVentureSubClass,
      _Fund,
      _Grant,
      @ObjectModel.association.toHierarchy: true
      _BudgetCostCenterHier,
      _BudgetCarryingCostCenter
}
```
