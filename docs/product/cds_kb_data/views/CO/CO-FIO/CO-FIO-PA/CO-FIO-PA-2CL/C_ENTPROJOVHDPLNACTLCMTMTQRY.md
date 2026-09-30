---
name: C_ENTPROJOVHDPLNACTLCMTMTQRY
description: "OH Ststcl Proj Actl Cmtmt Ovw - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDPLNACTLCMTMTQRY')/$value
semantic_en: "OH Ststcl Proj Actl Cmtmt Ovw - Query"
semantic_vi: "OH Ststcl Proj Actl Cmtmt Ovw - Query — CDS view tiêu dùng dựa trên OH Ststcl Proj Actl Cmtmt Ovw - Query."
keywords:
  - "ststcl"
  - "proj"
  - "actl"
  - "cmtmt"
  - "ovw"
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
# C_ENTPROJOVHDPLNACTLCMTMTQRY

**OH Ststcl Proj Actl Cmtmt Ovw - Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDPLNACTLCMTMTQRY')/$value) |

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
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  | `cast( StdProject as fis_rep_project preserving type )` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  | `cast( case when ( Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' ) then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  | `cast( case when ( Ledger = '0E' and IsCommitment = 'X' and ActualPlanCode = 'A' ) then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlanCostInDspCrcy` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory1 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P' ) then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CostVariance` |  | |  | `( $projection.PlanCostInDspCrcy - $projection.ActualCostAmtInDspCrcy)` | `DEC(24)` |  |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDPLNACTLCMTMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDPLNACTLCMTMTQRY')/$value)*

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
@EndUserText.label: 'OH Ststcl Proj Actl Cmtmt Ovw - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_OVPJPLACTL_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_EntProjOvhdPlnActlCmtmtQry
  provider contract analytical_query
  with parameters

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
    P_Ledger            : fins_ledger,

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue: 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_PlanningCategory1 : fcom_category

  as projection on I_EntPrjMarginItemCube as I_EntPrjMarginItemCube
{
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 95
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  //@Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 100
  @Semantics.fiscal.period: true
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                   additionalBinding: [
                                   { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                      { localElement: 'FiscalYear', element: 'FiscalYear' } ] }]
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

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @UI.textArrangement: #TEXT_LAST
  SalesDocument,

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
  cast( StdProject as fis_rep_project preserving type ) as Project,

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

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true }
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  CostCenter,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @UI.textArrangement: #TEXT_LAST
  Currency,

  @EndUserText.label: 'Actual cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
    when
    (
          Ledger = $parameters.P_Ledger and ActualPlanCode = 'A'
    )  then AmountInDisplayCurrency
    else null
    end                                                 as abap.dec( 23, 2 ) ) as ActualCostAmtInDspCrcy,

  @EndUserText.label: 'Commitment'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
    when
    (
          Ledger = '0E' and IsCommitment = 'X' and ActualPlanCode = 'A'
    )  then AmountInDisplayCurrency
    else null
    end                                                 as abap.dec( 23, 2 ) ) as CmtmtAmountInDisplayCurrency,

  @EndUserText.label: 'Planned cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
    when
    (
          PlanningCategory  = $parameters.P_PlanningCategory1 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P'
    )  then AmountInDisplayCurrency
    else null
    end                                                 as abap.dec( 23, 2 ) ) as PlanCostInDspCrcy,

  @EndUserText.label: 'Variance (= Plan cost - actual cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.PlanCostInDspCrcy - $projection.ActualCostAmtInDspCrcy)        as CostVariance,
  
  @EndUserText.label: 'Controlling Debit Credit Code'
  @UI.textArrangement: #TEXT_LAST
  ControllingDebitCreditCode,
  
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  Ledger,
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  ActualPlanJournalEntryItem,
  
  _DocumentStore

}
where
  (
       Ledger             = $parameters.P_Ledger
    or Ledger             = '0E'
  )
  and(
       PlanningCategory   = $parameters.P_PlanningCategory1
    or PlanningCategory   = 'ACT01'
  )
  and(
       ProjectProfileCode = 'YP03'
    or ProjectProfileCode = 'YP04'
  )
```
