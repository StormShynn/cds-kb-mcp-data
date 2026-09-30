---
name: C_INVMTPRJPLNACTLCMTMTQ
description: "Invmt Proj for Actl Pln Cmtmt - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPRJPLNACTLCMTMTQ')/$value
semantic_en: "Invmt Proj for Actl Pln Cmtmt - Query"
semantic_vi: "Invmt Proj for Actl Pln Cmtmt - Query — CDS view tiêu dùng dựa trên Invmt Proj for Actl Pln Cmtmt - Query."
keywords:
  - "invmt"
  - "proj"
  - "for"
  - "actl"
  - "pln"
  - "cmtmt"
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
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
---
# C_INVMTPRJPLNACTLCMTMTQ

**Invmt Proj for Actl Pln Cmtmt - Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPRJPLNACTLCMTMTQ')/$value) |

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
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  | `cast( StandardProjectWithCodingMask as fis_rep_project preserving type )` | `CHAR(24)` | Project (external ID) |
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
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and SemanticTag = 'PRSLS_STCK' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPRJPLNACTLCMTMTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INVMTPRJPLNACTLCMTMTQ')/$value)*

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
@EndUserText.label: 'Invmt Proj for Actl Pln Cmtmt - Query'
define transient view entity C_InvmtPrjPlnActlCmtmtQ
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

  as projection on I_InvmtPrjPlnActlCmtmtCube (
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as I_InvmtPrjPlnActlCmtmtCube
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
  //  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
  //                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  //@Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 100
  @Semantics.fiscal.period: true
  //  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
  //                                   additionalBinding: [
  //                                   { localElement: 'CompanyCode', element: 'CompanyCode' },
  //                                                      { localElement: 'FiscalYear', element: 'FiscalYear' } ] }]
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
  BusinessTransactionType,

  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  cast( StandardProjectWithCodingMask as fis_rep_project preserving type )    as Project,
  //Project,

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
  as abap.dec( 23, 2 ) )                                                      as ActualCostAmtInDspCrcy,


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
    end
  as abap.dec( 23, 2 ) )                                                      as CmtmtAmountInDisplayCurrency,

  @EndUserText.label: 'Project Stock'
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast(
    case
      when Ledger = $parameters.P_Ledger
       and SemanticTag = 'PRSLS_STCK'
       and ActualPlanCode = 'A'
       and LineIsSemTagCalculated = 'X'
        then AmountInDisplayCurrency
      else null
    end
  as abap.dec( 23, 2 ) )                                                      as ProjAndSlsOrdStkAmtInDspCrcy,

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
  as abap.dec( 23, 2 ) )                                                      as PlannedCosAmtInDspCrcy,

  @EndUserText.label: 'Variance (= Plan cost - actual cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.PlannedCosAmtInDspCrcy - $projection.ActualCostAmtInDspCrcy)  as CostVariance,

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
  as abap.dec( 23, 2 ) )                                                      as ComprnPlndCostInDspCrcy,

  @EndUserText.label: 'Variance (= Plan cost (for Comparison) - actual cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  ( $projection.ComprnPlndCostInDspCrcy - $projection.ActualCostAmtInDspCrcy) as ComprnCostVarcAmtInDspCrcy,

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
  ControllingArea


}
```
