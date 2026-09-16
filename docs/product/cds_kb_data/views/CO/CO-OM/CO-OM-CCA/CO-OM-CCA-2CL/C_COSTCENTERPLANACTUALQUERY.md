---
name: C_COSTCENTERPLANACTUALQUERY
description: "Cost CenterPLANACTUALQUERY"
semantic_vi: "View C_COSTCENTERPLANACTUALQUERY hiển thị dữ liệu kế hoạch thực tế của trung tâm chi phí, có thể được sử dụng để phân tích và báo cáo về hiệu suất và chi phí thực tế của trung tâm chi phí. Nó thường được sử dụng cho báo cáo tài chính và phân tích."
keywords:
  - "cost center"
  - "trung tâm chi phí"
  - "financial reporting"
  - "báo cáo tài chính"
  - "actual costs"
  - "chi phí thực tế"
  - "cost center plan"
  - "kế hoạch trung tâm chi phí"
  - "co-om"
  - "cca"
  - "controlling"
  - "cost accounting"
semantic_en: "The C_COSTCENTERPLANACTUALQUERY view exposes actual cost center plan data, which can be used to analyze and report on cost center performance and actual costs. It is typically used for financial reporting and analysis."
app_component: CO-OM-CCA-2CL
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
  - CO-OM-CCA
  - consumption-view
  - analytical
  - cost-center
  - component:CO-OM-CCA-2CL
  - lob:Controlling
  - bo:CostCenter
---
# C_COSTCENTERPLANACTUALQUERY

**Cost CenterPLANACTUALQUERY**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
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
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Quantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `RatioUnit` |  | |  | `cast( '%' as abap.unit )` | `UNIT(3)` |  |
| `CurrentFYYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' and LedgerFiscalYear = $parameters.P_LedgerFiscalYear and PostingDate <= $parameters.P_ReportingDate ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PreviousFYYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' and LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear and PostingDate <= $parameters.P_ComparisonReportingDate ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlanFYYearToDateValue` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and LedgerFiscalYear = $parameters.P_LedgerFiscalYear and PostingDate <= $parameters.P_ReportingDate ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActPlanFYYearToDateValue` |  | |  | `cast( $projection.CurrentFYYearToDateValue - $projection.PlanFYYearToDateValue as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActPlanFYYearToDateRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActPlanFYYearToDateValue, total=>$projection.PlanFYYearToDateValue ) * 100` | `DECF(34)` |  |
| `CurrentFYPeriodValue` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' and FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PreviousFYPeriodValue` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' and FiscalYearPeriod = $parameters.P_PreviousFiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CurrentFYPeriodPlanValue` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and FiscalYearPeriod = $parameters.P_FiscalYearPeriod ) then 1 end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActPlanFYPeriodValue` |  | |  | `cast( $projection.CurrentFYPeriodValue - $projection.CurrentFYPeriodPlanValue as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActPlanFYPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.CurrentFYPeriodPlanValue ) * 100` | `DECF(34)` |  |

## Source Code

```abap
@AccessControl.authorizationCheck     : #NOT_ALLOWED
@AccessControl.personalData.blocking  : #REQUIRED
@EndUserText.label                    : 'Cost Center Plan and Actual Values - Query'
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel.usageType                : { serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED }
@VDM.viewType                         : #CONSUMPTION
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FCO_RB_CC_CHECK_VAR'
@ObjectModel.modelingPattern          : #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities    : [#ANALYTICAL_QUERY]
@UI.textArrangement                   : #TEXT_FIRST
define transient view entity C_CostCenterPlanActualQuery
  provider contract analytical_query
  with parameters

    @Consumption.derivation: {  lookupEntity : 'I_Ledger',
                                resultElement: 'Ledger',
                                binding      : [{ targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X' }]
                             }
    @AnalyticsDetails.query.variableSequence : 10
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_LedgerStdVH', element: 'Ledger' }}]
    P_Ledger                     : fins_ledger,

    @AnalyticsDetails.query.variableSequence : 11
    @AnalyticsDetails.variable               : { usageType: #FILTER, mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @EndUserText.label                       : 'Company Code'
    //    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_JournalEntryCompanyCodeVH', element: 'CompanyCode' } }]
    P_CompanyCode                : bukrs,

    @AnalyticsDetails.query.variableSequence: 11
    @EndUserText.label                      : 'Reporting Date'
    @Semantics.businessDate.at              : true
    @Environment.systemField                : #SYSTEM_DATE
    P_ReportingDate              : vdm_v_key_date,

    @Consumption.derivation: {  lookupEntity     : 'F_LdgrCoCodeFsclYrVariant',
                                resultElement    : 'FiscalYearVariant',
                                resultAggregation:  #MAX,
                                binding          :  [{ targetElement: 'Ledger',      type: #PARAMETER, value: 'P_Ledger' },
                                                     { targetElement: 'CompanyCode', type: #PARAMETER, value: 'P_CompanyCode' }]
                             }
    @AnalyticsDetails.query.variableSequence : 12
    @Consumption.hidden                      : true
    P_FiscalYearVariant          : fis_periv,

    //  'Cost Center Hierarchy'
    @AnalyticsDetails.query.variableSequence : 20
    @Consumption.derivation: {  lookupEntity : 'I_ControllingArea',
                                resultElement: 'CostCenterStandardHierarchy',
                                binding      : [{ targetElement: 'ControllingArea', type: #CONSTANT, value: 'A000' }]
                             }
    @Consumption.hidden         : true
    P_CostCenterHierarchyShortID : fis_ksthi,

    @AnalyticsDetails.query.variableSequence : 22
    @EndUserText.label                       : 'Cost Center Hierarchy'
    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_CostCenterHierarchyVH', element: 'CostCenterHierarchy' }}]
    @Consumption.derivation: {  lookupEntity : 'I_CostCenterHierarchy',
                                resultElement: 'CostCenterHierarchy',
                                binding      : [{ targetElement: 'HierarchyShortID', type: #PARAMETER, value: 'P_CostCenterHierarchyShortID' }]
                             }
    P_CostCenterHierarchy        : fis_hryid_cctr,

    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable               : { mandatory: true }
    @EndUserText.label                       : 'G/L Account Hierarchy'
    @Consumption.valueHelpDefinition         : [{ entity: { name: 'I_GLAccountHierarchyStdVH', element: 'GLAccountHierarchy' }}]
    P_GLAccountHierarchy         : fis_hryid_glacc,


    @AnalyticsDetails.query.variableSequence         : 35
    @AnalyticsDetails.variable: {  usageType         : #FILTER,
                                   referenceElement  : 'CostCenter',
                                   mandatory         : false,
                                   selectionType     : #HIERARCHY_NODE,
                                   multipleSelections: true,
                                   hierarchyBinding  : [{type: #CONSTANT,value: 'A000' }, {type: #PARAMETER, value: 'P_CostCenterHierarchy' }]
                                }
    @EndUserText.label        : 'Cost Center (Node)'
    P_CostCenter                 : kostl,

    //  -------- Specific to plan data: -------------------
    @EndUserText.label                      : 'Plan Category'
    @Consumption.defaultValue               : 'PLN'
    @AnalyticsDetails.query.variableSequence: 45
    P_PlanningCategory           : fcom_category,

    //  -------- Calculated Period values:

    // 'Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 51
    @Consumption.derivation: {  lookupEntity : 'I_FiscalCalendarDate',
                                resultElement: 'FiscalYear',
                                binding      : [{ targetElement: 'CalendarDate',      type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden    : true
    @Semantics.fiscal.year : true
    P_LedgerFiscalYear           : fis_gjahr_no_conv,

    // 'Fiscal Period'
    @AnalyticsDetails.query.variableSequence : 52
    @Consumption.derivation: {  lookupEntity : 'I_FiscalCalendarDate',
                                resultElement: 'FiscalPeriod',
                                binding      : [{ targetElement: 'CalendarDate',      type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden     : true
    @Semantics.fiscal.period: true
    P_FiscalPeriod               : fins_fiscalperiod,

    //  'Previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence :  53
    @Consumption.derivation: {  lookupEntity : 'F_FiscalYearShift',
                                resultElement: 'ShiftedFiscalYear',
                                binding      : [{ targetParameter: 'P_FiscalYear',                   type: #PARAMETER, value: 'P_LedgerFiscalYear' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER, value: 'P_FiscalYearVariant' },
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,  value: '-1' },
                                                { targetParameter: 'P_FiscalTimePeriodOffsetUnit',   type: #CONSTANT,  value: 'Y' }]
                             }
    @Consumption.hidden   : true
    @Semantics.fiscal.year: true
    P_ComparisonLedgerFiscalYear : fis_gjahr_no_conv,

    // 'Key Date in previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 54
    @Consumption.derivation: {  lookupEntity : 'F_FiscalCalendarDayShift',
                                resultElement: 'ShiftedCalendarDate',
                                binding      : [{ targetParameter: 'P_CalendarDate',                 type: #PARAMETER, value: 'P_ReportingDate' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER, value: 'P_FiscalYearVariant' },
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,  value: '-365' } ]
                             }
    @Consumption.hidden      : true
    P_ComparisonReportingDate    : vdm_v_key_date,

    @AnalyticsDetails.query.variableSequence: 55
    @Consumption.derivation: { lookupEntity : 'F_FsclYearPeriodByFsclPeriod',
                               resultElement: 'FiscalYearPeriod',
                               binding      : [ { targetParameter: 'P_FiscalYear',        type: #PARAMETER, value: 'P_LedgerFiscalYear' },
                                                { targetParameter: 'P_FiscalPeriod',      type: #PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetParameter: 'P_FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod           : fis_jahrper_conv,

    // 'Previous Period'
    @AnalyticsDetails.query.variableSequence : 56
    @Consumption.derivation: {  lookupEntity : 'F_FiscalYearPeriodShift',
                                resultElement: 'ShiftedFiscalYearPeriod',
                                binding      : [{ targetParameter: 'P_FiscalYearPeriod',             type: #PARAMETER,  value: 'P_FiscalYearPeriod' },
                                                { targetParameter: 'P_FiscalYearVariant',            type: #PARAMETER,  value: 'P_FiscalYearVariant'},
                                                { targetParameter: 'P_FsclTimePeriodOffsetDuration', type: #CONSTANT,   value: '-1' },
                                                { targetParameter: 'P_FiscalTimePeriodOffsetUnit',   type: #CONSTANT,   value: 'P' }]
                              }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,

    // 'Same Period in Previous Fiscal Year'
    @AnalyticsDetails.query.variableSequence : 57
    @Consumption.derivation: {  lookupEntity : 'I_FiscalYearPeriod',
                                resultElement: 'FiscalYearPeriod',
                                binding      : [{ targetElement: 'FiscalYear',        type: #PARAMETER, value: 'P_ComparisonLedgerFiscalYear' },
                                                { targetElement: 'FiscalPeriod',      type: #PARAMETER, value: 'P_FiscalPeriod' },
                                                { targetElement: 'FiscalYearVariant', type: #PARAMETER, value: 'P_FiscalYearVariant' }]
                             }
    @Consumption.hidden         : true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriodPrevYear   : fis_jahrper_conv

  as projection on I_ActPlnCostCenterRptgCube
{

  @UI.textArrangement:#TEXT_FIRST
  Ledger,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: '#' }
  IsStatisticalCostCenter,

  @AnalyticsDetails.query: {  variableSequence     : 70,
                              axis                 : #FREE,
                              displayHierarchy     : #FILTER_ONLY,
                              hierarchyBinding     : [{type :#CONSTANT, value :'A000' }, {type :#PARAMETER,value :'P_CostCenterHierarchy' }],
                              hierarchyInitialLevel: 2,
                              keyDisplay           : #NOT_COMPOUND
                           }
  @UI.textArrangement:#TEXT_ONLY
  CostCenter,

  @Consumption.filter: {  selectionType     : #HIERARCHY_NODE,
                          multipleSelections: true,
                          hierarchyBinding  : [{type :#PARAMETER,value :'P_GLAccountHierarchy' }],
                          mandatory         : false
                       }
  @AnalyticsDetails.query: {  variableSequence     : 71,
                              axis                 : #FREE,
                              displayHierarchy     : #FILTER_ONLY,
                              hierarchyInitialLevel: 2,
                              keyDisplay           : #NOT_COMPOUND
                            }
  @UI.textArrangement:#TEXT_FIRST
  GLAccount,

  CostCtrActivityType,

  @Consumption.filter :{  selectionType     : #SINGLE,
                          multipleSelections: true,
                          mandatory         : false
                       }
  @UI.textArrangement:#TEXT_FIRST
  BusinessTransactionType,

  @UI.textArrangement:#TEXT_FIRST
  CompanyCode,

  @UI.textArrangement:#TEXT_ONLY
  DebitCreditCode,

  //  @Consumption.hidden: true
  //  ActualPlanCode,

  // Fields added for Document Store
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  ActualPlanJournalEntryItem,
  // **********************************************************

  FiscalYear,
  FiscalPeriod,
  FiscalQuarter,
  FiscalYearPeriod,
  FiscalYearQuarter,
  LedgerFiscalYear,
  GlobalCurrency,
  CompanyCodeCurrency,
  AccountAssignmentType,

  @UI.textArrangement:#TEXT_ONLY
  PartnerAccountAssignmentType,

  FunctionalArea,
  PartnerCostCtrActivityType,

  @UI.textArrangement:#TEXT_ONLY
  PartnerCostCenter,

  @Analytics.internalName  : #LOCAL
  @API.element.releaseState: #DEPRECATED
  @API.element.successor   : 'PartnerProjectExternalID'
  @EndUserText.label       : 'Partner Project Internal ID (Deprecated)'
  PartnerProjectInternalID,
  PartnerProjectExternalID,

  PartnerWBSElementExternalID,
  PartnerFunctionalArea,
  ProfitCenter,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AmountInCompanyCodeCurrency,

  @Semantics.amount.currencyCode: 'GlobalCurrency'
  AmountInGlobalCurrency,

  BaseUnit,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  Quantity,

  //  CostSourceUnit,
  //  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  //  ValuationFixedQuantity,

  //  ------ Structures ---------

  //  ------ Year-to-date: current year vs. previous year -----

  @EndUserText.label: 'Ratio Unit %'
  cast( '%' as abap.unit )                                                                                       as RatioUnit,

  @EndUserText.label                               : 'Reporting Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: {  label  : 'Reporting Year-to-Date &1',
                                binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYYearToDateValue,

  @EndUserText.label                               : 'Previous Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Previous Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_ComparisonLedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and LedgerFiscalYear    =  $parameters.P_ComparisonLedgerFiscalYear
                    and PostingDate        <= $parameters.P_ComparisonReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PreviousFYYearToDateValue,

  @EndUserText.label                               : 'Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( case when (     PlanningCategory  = $parameters.P_PlanningCategory
                    and LedgerFiscalYear  = $parameters.P_LedgerFiscalYear
                    and PostingDate      <= $parameters.P_ReportingDate
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PlanFYYearToDateValue,

  @EndUserText.label                               : 'Diff. Actual - Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling        : {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Diff. Actual - Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @Aggregation.default        : #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  cast( $projection.CurrentFYYearToDateValue - $projection.PlanFYYearToDateValue as abap.dec( 23, 2 ) )          as DeltaActPlanFYYearToDateValue,

  @EndUserText.label                               : '% Diff. Actual - Plan Year-to-Date'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Aggregation.default                             : #FORMULA
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label: '% Diff. Actual - Plan Year-to-Date &1',
                               binding: [{ index: 1, parameter: 'P_LedgerFiscalYear'}]
                             }
  @AnalyticsDetails.query.axis     : #COLUMNS
  @UI.fieldGroup                   : [{ qualifier: 'YTDComp', groupLabel: 'Year-to-Date Comparison' }]
  @AnalyticsDetails.query.decimals :2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaActPlanFYYearToDateValue, total=>$projection.PlanFYYearToDateValue ) * 100 as DeltaActPlanFYYearToDateRatio,

  // Fiscal Period

  @EndUserText.label                               : 'Actual Reporting Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label  : 'Actual Reporting Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYPeriodValue,

  @EndUserText.label                               : 'Actual Previous Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Actual Previous Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_PreviousFiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (
                      PlanningCategory  = 'ACT01'
  //                        ActualPlanCode = 'A'
                    and FiscalYearPeriod  = $parameters.P_PreviousFiscalYearPeriod
                  ) then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as PreviousFYPeriodValue,

  @EndUserText.label                               : 'Plan Reporting Fiscal Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @Consumption.dynamicLabel: { label: 'Plan Reporting Fiscal Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( case when (     PlanningCategory  = $parameters.P_PlanningCategory
                    and FiscalYearPeriod  = $parameters.P_FiscalYearPeriod
                  )  then 1
        end as abap.dec( 23, 2 )
      )                                                                                                          as CurrentFYPeriodPlanValue,

  @EndUserText.label                               : 'Diff. Actual - Plan Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling        : {formula:#THIS}
  @Consumption.dynamicLabel: { label  : 'Diff. Actual - Plan Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @Aggregation.default        : #FORMULA
  @AnalyticsDetails.query.axis: #COLUMNS
  @UI.fieldGroup: [{ qualifier: 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  cast( $projection.CurrentFYPeriodValue - $projection.CurrentFYPeriodPlanValue as abap.dec( 23, 2 ) )           as DeltaActPlanFYPeriodValue,

  @EndUserText.label                               : '% Diff. Actual - Plan Reporting Period'
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @Consumption.dynamicLabel: { label  : '% Diff. Actual - Plan Reporting Period &1',
                               binding: [{ index: 1, parameter: 'P_FiscalYearPeriod'}]
                             }
  @Aggregation.default             : #FORMULA
  @AnalyticsDetails.query.axis     : #COLUMNS
  @UI.fieldGroup: [{ qualifier     : 'PeriodComp', groupLabel: 'by Fiscal Period' }]
  @AnalyticsDetails.query.decimals :2
  @Semantics.quantity.unitOfMeasure: 'RatioUnit'
  ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.CurrentFYPeriodPlanValue ) * 100  as DeltaActPlanFYPeriodRatio

  //  _DocumentStore
}
where
       Ledger           = $parameters.P_Ledger
  and  CompanyCode      = $parameters.P_CompanyCode
  and  CostCenter       = $parameters.P_CostCenter
  and  CostCenter       <> ''
  and(
       PlanningCategory =  'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  )
  and(
       LedgerFiscalYear = $parameters.P_LedgerFiscalYear
    or LedgerFiscalYear = $parameters.P_ComparisonLedgerFiscalYear
  )
```
