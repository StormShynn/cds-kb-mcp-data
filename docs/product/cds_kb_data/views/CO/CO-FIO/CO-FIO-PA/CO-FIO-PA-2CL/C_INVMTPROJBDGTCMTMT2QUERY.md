---
name: C_INVMTPROJBDGTCMTMT2QUERY
description: "Invmt Proj for Budget Commit - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value
semantic_en: "Invmt Proj for Budget Commit - Query"
semantic_vi: "Invmt Proj for Budget Commit - Query — CDS view tiêu dùng dựa trên Invmt Proj for Budget Commit - Query."
keywords:
  - "invmt"
  - "proj"
  - "for"
  - "budget"
  - "commit"
  - "query"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "ledger"
  - "period"
tags:
  - CO
  - bo:project
  - budget
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
---
# C_INVMTPROJBDGTCMTMT2QUERY

**Invmt Proj for Budget Commit - Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  | `cast( case when Ledger = '0E' and IsCommitment = 'X' and ActualPlanCode = 'A' and LineIsSemTagCalculated = '' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BdgtCtrldBdgtCostInDspCrcy` |  | |  | `cast( case when LineIsSemTagCalculated = '' and ActualPlanCode = 'P' then BdgtCtrldBdgtCostInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlActlCostAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' and AvailabilityControlIsActive = 'X' and LineIsSemTagCalculated = 'X' then AvailyCtrlActlCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlCmtmtAmtInDspCrcy` |  | |  | `cast( case when Ledger = '0E' and IsCommitment = 'X' and ActualPlanCode = 'A' and AvailabilityControlIsActive = 'X' and LineIsSemTagCalculated = 'X' then AvailyCtrlCmtmtAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlBdgtCostInDspCrcy` |  | |  | `cast( case when AvailabilityControlIsActive = 'X' and ActualPlanCode = 'P' and LineIsSemTagCalculated = 'X' then AvailyCtrlBdgtCostInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and SemanticTag = 'PRSLS_STCK' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlProjStkAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and AvailabilityControlIsActive = 'X' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AvailyCtrlProjStkAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `NonAccmltdAssgdValForBdgt` |  | |  | `( $projection.AvailyCtrlActlCostAmtInDspCrcy + $projection.AvailyCtrlCmtmtAmtInDspCrcy + $projection.AvailyCtrlProjStkAmtInDspCrcy )` | `DEC(25)` |  |
| `AvailableBdgtAmtInDspCrcy` |  | |  | `( $projection.AvailyCtrlBdgtCostInDspCrcy - $projection.AvailyCtrlActlCostAmtInDspCrcy - $projection.AvailyCtrlCmtmtAmtInDspCrcy - $projection.AvailyCtrlProjStkAmtInDspCrcy )` | `DEC(26)` |  |
| `AvailyCtrlUsdBdgtAmtInDspCrcy` |  | |  | `ratio_of( portion => cast ( $projection.NonAccmltdAssgdValForBdgt as abap.dec( 23, 2 ) ) , total => cast ( $projection.AvailyCtrlBdgtCostInDspCrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  | `cast( case when PlanningCategory = $parameters.P_PlanningCategory1 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P' and SemanticTag = 'ACT_COST' and LineIsSemTagCalculated = 'X' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CostVariance` |  | |  | `( $projection.PlannedCosAmtInDspCrcy - $projection.ActualCostAmtInDspCrcy)` | `DEC(24)` |  |
| `ComprnPlndCostInDspCrcy` |  | |  | `cast( case when PlanningCategory = $parameters.P_PlanningCategory2 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P' and SemanticTag = 'ACT_COST' and LineIsSemTagCalculated = 'X' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `ComprnCostVarcAmtInDspCrcy` |  | |  | `( $projection.ComprnPlndCostInDspCrcy - $projection.ActualCostAmtInDspCrcy)` | `DEC(24)` |  |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AvailabilityControlIsActive` |  | |  |  | `CHAR(1)` | Availability control indicator(AVC) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPROJBDGTCMTMT2QUERY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking:#REQUIRED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Invmt Proj for Budget Commit - Query'

define transient view entity C_InvmtProjBdgtCmtmt2Query
  provider contract analytical_query
  with parameters
    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FinancialStatementHierarchy',
     element: 'GLAccountHierarchy'
         }
    }]
    P_GLAccountHierarchy         : fins_sem_tag_hryid,

    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' } } ]
    P_Ledger                     : fins_ledger,

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue : 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_InputPlanningCategory      : fcom_category,

    @AnalyticsDetails.variable: { usageType: #FILTER,
                                  referenceElement: 'PlanningCategory',
                                  mandatory: true,
                                  selectionType: #SINGLE,
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory',
                                             type : #PARAMETER,
                                             value: 'P_InputPlanningCategory' }
                               ]
    }
    @Consumption.hidden: true
    P_PlanningCategory1          : fcom_category,

    @EndUserText.label: 'Planning Category (for Comparison)'
    @Consumption.defaultValue : 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_ComparisonPlanningCategory : fcom_category,

    @AnalyticsDetails.variable: { usageType: #FILTER,
                                  referenceElement: 'PlanningCategory',
                                  mandatory: true,
                                  selectionType: #SINGLE,
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory',
                                             type : #PARAMETER,
                                             value: 'P_ComparisonPlanningCategory' }
                               ]
    }
    @Consumption.hidden: true
    P_PlanningCategory2          : fcom_category

  as projection on I_InvmtProjBdgtCmtmtCube (
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as I_InvmtProjBdgtCmtmtCube
{
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 95
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  //@Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 100
  @Semantics.fiscal.period: true
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

  @Semantics.fiscal.yearPeriod: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, defaultValue: 'CCC ' }
  @AnalyticsDetails.query.variableSequence : 105
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,

  @Semantics.fiscal.yearVariant: true
  FiscalYearVariant,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @EndUserText.label: 'Project ID (Simplified)'
  @UI.textArrangement: #TEXT_LAST
  Project,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @EndUserText.label: 'Project'
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,

  @UI.textArrangement: #TEXT_LAST
  ProcessingStatus,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  CostCenter,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @EndUserText.label: 'Controlling Debit Credit Code'
  @UI.textArrangement: #TEXT_LAST
  ControllingDebitCreditCode,

  @UI.textArrangement: #TEXT_LAST
  DebitCreditCode,

  @UI.textArrangement: #TEXT_LAST
  Currency,

  @EndUserText.label: 'Actual cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
    when Ledger = $parameters.P_Ledger
     and ActualPlanCode = 'A'
     and LineIsSemTagCalculated = 'X'
       then ActualCostAmtInDspCrcy
    else null
    end
  as abap.dec( 23, 2 ) )                                                                           as ActualCostAmtInDspCrcy,

  @EndUserText.label: 'Commitment'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
    when Ledger = '0E'
     and IsCommitment = 'X'
     and ActualPlanCode = 'A'
     and LineIsSemTagCalculated = ''
      then AmountInDisplayCurrency
    else null
    end                                                 as abap.dec( 23, 2 ) )                     as CmtmtAmountInDisplayCurrency,

  @EndUserText.label: 'Budget'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
      when LineIsSemTagCalculated = ''
       and ActualPlanCode = 'P'
         then BdgtCtrldBdgtCostInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as BdgtCtrldBdgtCostInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Actual Cost (AVC)'
  cast(
  case
    when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' and AvailabilityControlIsActive = 'X'
     and LineIsSemTagCalculated = 'X'
      then AvailyCtrlActlCostAmtInDspCrcy
    else null
  end
  as abap.dec( 23, 2 ) )                                                                           as AvailyCtrlActlCostAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Commitment (AVC)'
  cast(
    case
      when Ledger = '0E'
       and IsCommitment = 'X'
       and ActualPlanCode = 'A'
       and AvailabilityControlIsActive = 'X'
       and LineIsSemTagCalculated = 'X'
       then AvailyCtrlCmtmtAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as AvailyCtrlCmtmtAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Budget (AVC)'
  cast(
    case
      when AvailabilityControlIsActive = 'X'
       and ActualPlanCode = 'P'
       and LineIsSemTagCalculated = 'X'
        then AvailyCtrlBdgtCostInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as AvailyCtrlBdgtCostInDspCrcy,

  @EndUserText.label: 'Project Stock'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #ROWS
  @Aggregation.default: #SUM
  cast(
    case
      when Ledger = $parameters.P_Ledger
       and ActualPlanCode = 'A'
       and LineIsSemTagCalculated = 'X'
       and SemanticTag = 'PRSLS_STCK'
        then AmountInDisplayCurrency
//        then ProjAndSlsOrdStkAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as ProjAndSlsOrdStkAmtInDspCrcy,

  @EndUserText.label: 'Project Stock (AVC)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #ROWS
  @Aggregation.default: #SUM
  cast(
    case
      when Ledger = $parameters.P_Ledger
       and AvailabilityControlIsActive = 'X'
       and ActualPlanCode = 'A'
       and LineIsSemTagCalculated = 'X'
        then AvailyCtrlProjStkAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as AvailyCtrlProjStkAmtInDspCrcy,

  @EndUserText.label: 'AVC Assigned Values'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.AvailyCtrlActlCostAmtInDspCrcy +
    $projection.AvailyCtrlCmtmtAmtInDspCrcy +
    $projection.AvailyCtrlProjStkAmtInDspCrcy )                                                    as NonAccmltdAssgdValForBdgt,

  @EndUserText.label: 'Available Budget (AVC Budget - AVC Assigned Values)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.AvailyCtrlBdgtCostInDspCrcy -
    $projection.AvailyCtrlActlCostAmtInDspCrcy -
    $projection.AvailyCtrlCmtmtAmtInDspCrcy -
    $projection.AvailyCtrlProjStkAmtInDspCrcy )                                                    as AvailableBdgtAmtInDspCrcy,

  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Used Budget (AVC) in Percent %'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  cast ( $projection.NonAccmltdAssgdValForBdgt as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.AvailyCtrlBdgtCostInDspCrcy as abap.dec( 23, 2 ) ) ) * 100 as AvailyCtrlUsdBdgtAmtInDspCrcy,

  @EndUserText.label: 'Planned cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
      when PlanningCategory  = $parameters.P_PlanningCategory1
       and Ledger = $parameters.P_Ledger
       and ActualPlanCode = 'P'
       and SemanticTag = 'ACT_COST'
       and LineIsSemTagCalculated = 'X'
        then AmountInDisplayCurrency
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as PlannedCosAmtInDspCrcy,

  @EndUserText.label: 'Variance (= Plan cost - actual cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.PlannedCosAmtInDspCrcy - $projection.ActualCostAmtInDspCrcy)                       as CostVariance,

  @EndUserText.label: 'Planned cost (for Comparison)'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  cast(
    case
      when PlanningCategory  = $parameters.P_PlanningCategory2
       and Ledger = $parameters.P_Ledger
       and ActualPlanCode = 'P'
       and SemanticTag = 'ACT_COST'
       and LineIsSemTagCalculated = 'X'
        then AmountInDisplayCurrency
      else null
    end
  as abap.dec( 23, 2 ) )                                                                           as ComprnPlndCostInDspCrcy,

  @EndUserText.label: 'Variance (= Plan cost (for Comparison) - actual cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  ( $projection.ComprnPlndCostInDspCrcy - $projection.ActualCostAmtInDspCrcy)                      as ComprnCostVarcAmtInDspCrcy,

  @UI.textArrangement: #TEXT_LAST
  Ledger,
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  LedgerGLLineItem,
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  FinancialPlanningEntryItem,
  @Consumption.hidden: true
  ControllingArea,
  @Consumption.hidden: true
  AvailabilityControlIsActive


}
```
