---
name: I_SERVICECOSTRATE_2
description: "Servicecostrate 2"
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
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTRATE_2

**Servicecostrate 2**

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
| `AccountingCostRateUUID` | ✓ | |  |  | `RAW(16)` | Cost Rate UUID |
| `Ledger` |  | | `_Rate` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency and Valuation Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `IsIntercompanyRate` |  | |  |  | `CHAR(1)` | Intercompany Cost Rate Indicator |
| `ReceivingCompanyCode` |  | |  |  | `CHAR(4)` | Receiving Company Code |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `WBSElementInternalID` |  | |  | `WBSElementInternalID_2` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `WBSElementExternalID_2` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | From Fiscal Year |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | From Period |
| `ValidityStartFiscalYearPeriod` |  | |  | `cast((concat( ValidityStartFiscalYear, ValidityStartFiscalPeriod )) as fins_fyearperiod)` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | To Fiscal Year |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | To Period |
| `ValidityEndFiscalYearPeriod` |  | |  | `cast((concat( ValidityEndFiscalYear, ValidityEndFiscalPeriod )) as fins_fyearperiod)` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `CostCtrActivityTypeQtyUnit` |  | |  |  | `UNIT(3)` | Activity Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostRateVarblAmount` |  | |  | `cast(CostRateTotalAmount - CostRateFixedAmount as fco_rate_varbl_amount)` | `CURR(23)` | Variable Rate |
| `CostRateScaleFactor` |  | |  |  | `DEC(5)` | Per |
| `LedgerForAuthorization` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `_CompanyCode` | | ✓ | | | | |
| `_ReceivingCompanyCode` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_CurrentCostCtrActyType` | | ✓ | | | | |
| `_WorkItem` | | ✓ | | | | |
| `_ServiceCostLevel` | | ✓ | | | | |
| `_CurrentServiceCostLevel` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ReceivingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_CurrentCostCtrActyType` | `I_CostCenterActivityType` | [0..1] |
| `_WorkItem` | `I_WorkItem` | [0..1] |
| `_ServiceCostLevel` | `I_ServiceCostLevel` | [0..*] |
| `_CurrentServiceCostLevel` | `I_ServiceCostLevel` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement_1` | [1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_AccountingCostRate` | [1..1] |

## Source Code

```abap
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Service Cost Rate'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #B,
        dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [
        #SQL_DATA_SOURCE,
        #CDS_MODELING_DATA_SOURCE,
        #CDS_MODELING_ASSOCIATION_TARGET,
        #EXTRACTION_DATA_SOURCE
    ]
}
@VDM.viewType: #BASIC

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.sapObjectNodeType.name: 'AccountingCostRate'


define view entity I_ServiceCostRate_2 
  as select from P_AccountingCostRate as _Rate
  
  association [0..1] to I_CompanyCode             as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode             as _ReceivingCompanyCode    on  $projection.ReceivingCompanyCode = _ReceivingCompanyCode.CompanyCode
  association [0..1] to I_Currency                as _Currency                on  $projection.Currency = _Currency.Currency
  association [0..*] to I_CostCenter              as _CostCenter              on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                              and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter              as _CurrentCostCenter       on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                              and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                              and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                              and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenterActivityType  as _CostCtrActivityType     on  $projection.ControllingArea = _CostCtrActivityType.ControllingArea
                                                                              and $projection.ActivityType    = _CostCtrActivityType.CostCtrActivityType
  association [0..1] to I_CostCenterActivityType  as _CurrentCostCtrActyType  on  $projection.ControllingArea               = _CurrentCostCtrActyType.ControllingArea
                                                                              and $projection.ActivityType                  = _CurrentCostCtrActyType.CostCtrActivityType
                                                                              and _CurrentCostCtrActyType.ValidityStartDate <= $session.system_date
                                                                              and _CurrentCostCtrActyType.ValidityEndDate   >= $session.system_date
  association [0..1] to I_WorkItem                as _WorkItem                on  $projection.WorkItem = _WorkItem.WorkItem
  association [0..*] to I_ServiceCostLevel        as _ServiceCostLevel        on  $projection.ServiceCostLevel = _ServiceCostLevel.ServiceCostLevel
  association [0..1] to I_ServiceCostLevel        as _CurrentServiceCostLevel on  $projection.ServiceCostLevel               = _CurrentServiceCostLevel.ServiceCostLevel
                                                                              and _CurrentServiceCostLevel.ValidityStartDate <= $session.system_date
                                                                              and _CurrentServiceCostLevel.ValidityEndDate   >= $session.system_date
  association [0..1] to I_Employment              as _Employment              on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
                                                                              and _Employment.StartDate       <= $session.system_date
                                                                              and _Employment.EndDate         >= $session.system_date
  association [1]    to I_PersonWorkAgreement_1   as _PersonWorkAgreement     on  $projection.PersonnelNumber = _PersonWorkAgreement.PersonWorkAgreement                                                                            
  association [0..1] to I_WBSElement              as _WBSElement              on  $projection.WBSElementExternalID = _WBSElement.WBSElement
  association [0..1] to I_WBSElementByInternalKey as _WBSElementInternalID    on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID
  association [0..1] to I_UnitOfMeasure           as _UnitOfMeasure           on  $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to E_AccountingCostRate      as _Extension               on  $projection.AccountingCostRateUUID = _Extension.AccountingCostRateUUID
  
  
{

  key AccountingCostRateUUID,

      _Rate.Ledger,
      CurrencyRole,
      CompanyCode,
      ControllingArea,

      CostCenter,
      ActivityType,
      IsIntercompanyRate,
      ReceivingCompanyCode,
      ServiceCostLevel,
      PersonnelNumber,
      WBSElementInternalID_2 as WBSElementInternalID,
      WBSElementExternalID_2 as WBSElementExternalID,
      WorkItem,
      TimeSheetOvertimeCategory,
      @Semantics.fiscal.year: true
      ValidityStartFiscalYear,
      @Semantics.fiscal.period: true
      ValidityStartFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      cast((concat( ValidityStartFiscalYear, ValidityStartFiscalPeriod )) as fins_fyearperiod) as ValidityStartFiscalYearPeriod,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.fiscal.year: true
      ValidityEndFiscalYear,
      @Semantics.fiscal.period: true
      ValidityEndFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      cast((concat( ValidityEndFiscalYear, ValidityEndFiscalPeriod )) as fins_fyearperiod)     as ValidityEndFiscalYearPeriod,
      @Semantics.businessDate.to: true
      ValidityEndDate,

//      @Semantics.unitOfMeasure:true
      CostCtrActivityTypeQtyUnit,
//      @Semantics.currencyCode: true
      Currency,

      @Semantics.amount.currencyCode: 'Currency'
      cast(CostRateTotalAmount - CostRateFixedAmount as fco_rate_varbl_amount)                 as CostRateVarblAmount,
      CostRateScaleFactor,
      LedgerForAuthorization,

      _CompanyCode,
      _ReceivingCompanyCode,
      _CostCenter,
      _CurrentCostCenter,
      _CostCtrActivityType,
      _CurrentCostCtrActyType,
      _ServiceCostLevel,
      _CurrentServiceCostLevel,
      _Employment,
      _PersonWorkAgreement,
      _WorkItem,
      _WBSElement,
      _WBSElementInternalID,
      _Currency,
      _UnitOfMeasure
}
where
      CostRateIsDeleted       = ''
  and BusinessTransactionType = 'MSCR'
  and PlanningCategory        = 'PLN'
  and CurrencyRole            = '00'
```
