---
name: C_ENTPROJOVHDBDGTCMTMTQRY
description: "Overhead Project Budget Cmtmt - Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDBDGTCMTMTQRY')/$value
semantic_en: "Overhead Project Budget Cmtmt - Query"
semantic_vi: "Overhead Project Budget Cmtmt - Query — CDS view tiêu dùng dựa trên Overhead Project Budget Cmtmt - Query."
keywords:
  - "overhead"
  - "project"
  - "budget"
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
  - budget
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - project
---
# C_ENTPROJOVHDBDGTCMTMTQRY

**Overhead Project Budget Cmtmt - Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDBDGTCMTMTQRY')/$value) |

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
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  | `cast( StdProject as fis_rep_project preserving type )` | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ActualCostAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `ActualCostAmtInDspCrcy_H` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and AvailabilityControlIsActive = 'X' and ActualPlanCode = 'A' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency` |  | |  | `cast( case when Ledger = '0E' and IsCommitment = 'X' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CmtmtAmountInDisplayCurrency_H` |  | |  | `cast( case when Ledger = '0E' and IsCommitment = 'X' and AvailabilityControlIsActive = 'X' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  | `cast( case when PlanningCategory = $parameters.P_PlanningCategory1 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P' then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BdgtCtrldBdgtCostInDspCrcy` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BdgtCtrldBdgtCostInDspCrcy_H` |  | |  | `cast( case when AvailabilityControlIsActive = 'X' and ActualPlanCode = 'P' then BdgtCtrldBdgtCostInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `NonAccmltdAssgdValForBdgt` |  | |  | `( $projection.ActualCostAmtInDspCrcy_H + $projection.CmtmtAmountInDisplayCurrency_H )` | `DEC(24)` |  |
| `AvailableBdgtAmtInDspCrcy` |  | |  | `( $projection.BdgtCtrldBdgtCostInDspCrcy_H - $projection.ActualCostAmtInDspCrcy_H - $projection.CmtmtAmountInDisplayCurrency_H )` | `DEC(25)` |  |
| `VarianceAmount` |  | |  | `( $projection.PlannedCosAmtInDspCrcy - $projection.ActualCostAmtInDspCrcy )` | `DEC(24)` |  |
| `AvailyCtrlActlCostAmtInDspCrcy` |  | |  | `cast( case when Ledger = $parameters.P_Ledger and AvailabilityControlIsActive = 'X' and ActualPlanCode = 'A' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlCmtmtAmtInDspCrcy` |  | |  | `cast( case when Ledger = '0E' and IsCommitment = 'X' and AvailabilityControlIsActive = 'X' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlBdgtCostInDspCrcy` |  | |  | `cast( case when AvailabilityControlIsActive = 'X' and ActualPlanCode = 'P' then BdgtCtrldBdgtCostInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `AvailyCtrlUsdBdgtAmtInDspCrcy` |  | |  | `ratio_of( portion => cast ( $projection.NonAccmltdAssgdValForBdgt as abap.dec( 23, 2 ) ) , total => cast ( $projection.AvailyCtrlBdgtCostInDspCrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDBDGTCMTMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJOVHDBDGTCMTMTQRY')/$value)*

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
@EndUserText.label: 'Overhead Project Budget Cmtmt - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_OVPJBDGT_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_EntProjOvhdBdgtCmtmtQry
  provider contract analytical_query
  with parameters
    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FinancialStatementHierarchy',
     element: 'GLAccountHierarchy'
         }
    }]
    P_GLAccountHierarchy : fins_sem_tag_hryid,

    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @AnalyticsDetails.query.variableSequence: 10
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' } } ]
    P_Ledger             : fins_ledger,

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue: 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_PlanningCategory1  : fcom_category

  as projection on I_OvhdProjMargOvwCube(
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as OvhdProjMargOvwCube

{
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 95
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false}
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

  //  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.yearPeriod: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  @Consumption.filter :{ hidden: false, selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 100
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
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginProfitCenter,

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

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  SalesOrder,

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
  @Consumption.hidden: true
  PersonWorkAgreement,

  @UI.textArrangement: #TEXT_LAST
  ProcessingStatus,
  
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true }
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

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
      when Ledger = $parameters.P_Ledger and ActualPlanCode = 'A'
        then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as ActualCostAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.hidden: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'Actual Cost for AVC'
  cast(
    case
      when Ledger = $parameters.P_Ledger and AvailabilityControlIsActive = 'X' and ActualPlanCode = 'A'
        then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as ActualCostAmtInDspCrcy_H,

  @EndUserText.label: 'Commitment'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
      when Ledger = '0E' and IsCommitment = 'X'
       then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as CmtmtAmountInDisplayCurrency,

  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.hidden: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'Commitment for AVC'
  cast(
    case
      when Ledger = '0E' and IsCommitment = 'X' and AvailabilityControlIsActive = 'X'
       then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as CmtmtAmountInDisplayCurrency_H,

  @EndUserText.label: 'Planned cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast(
    case
      when PlanningCategory  = $parameters.P_PlanningCategory1 and Ledger = $parameters.P_Ledger and ActualPlanCode = 'P'
        then PlannedCosAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as PlannedCosAmtInDspCrcy,

  @EndUserText.label: 'Budget'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  BdgtCtrldBdgtCostInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.hidden: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'Budget for AVC'
  cast(
    case
      when AvailabilityControlIsActive = 'X' and ActualPlanCode = 'P'
        then BdgtCtrldBdgtCostInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as BdgtCtrldBdgtCostInDspCrcy_H,

  @EndUserText.label: 'AVC Assigned Values'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.ActualCostAmtInDspCrcy_H + $projection.CmtmtAmountInDisplayCurrency_H ) as NonAccmltdAssgdValForBdgt,

  @EndUserText.label: 'Available Budget (AVC Budget - AVC Assigned Values)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.BdgtCtrldBdgtCostInDspCrcy_H -
    $projection.ActualCostAmtInDspCrcy_H -
    $projection.CmtmtAmountInDisplayCurrency_H )                                    as AvailableBdgtAmtInDspCrcy,

  @EndUserText.label: 'Variance (Plan Cost - Actual Cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.PlannedCosAmtInDspCrcy - $projection.ActualCostAmtInDspCrcy )       as VarianceAmount,
  
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Actual Cost (AVC)'
  cast(
    case
      when Ledger = $parameters.P_Ledger and AvailabilityControlIsActive = 'X' and ActualPlanCode = 'A'
        then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as AvailyCtrlActlCostAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Commitment (AVC)'
  cast(
    case
      when Ledger = '0E' and IsCommitment = 'X' and AvailabilityControlIsActive = 'X'
       then ActualCostAmtInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as AvailyCtrlCmtmtAmtInDspCrcy,
  
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @EndUserText.label: 'Budget (AVC)'
  cast(
    case
      when AvailabilityControlIsActive = 'X' and ActualPlanCode = 'P'
        then BdgtCtrldBdgtCostInDspCrcy
      else null
    end
  as abap.dec( 23, 2 ) )                                                            as AvailyCtrlBdgtCostInDspCrcy,
  
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Used Budget (AVC) in Percent %'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  cast ( $projection.NonAccmltdAssgdValForBdgt as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.AvailyCtrlBdgtCostInDspCrcy as abap.dec( 23, 2 ) ) ) * 100
  as AvailyCtrlUsdBdgtAmtInDspCrcy,
    
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  CostCenter,
  
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,
  
  @EndUserText.label: 'Controlling Debit Credit Code'
  @UI.textArrangement: #TEXT_LAST
  ControllingDebitCreditCode,
  
  @Consumption.hidden: true
  FinancialPlanningReqTransSqnc,
  @Consumption.hidden: true
  FinancialPlanningDataPacket,
  @Consumption.hidden: true
  LineIsSemTagCalculated,
  @Consumption.hidden: true
  SourceLedger,
  @Consumption.hidden: true
  FinancialPlanningEntryItem,
  @Consumption.hidden: true
  Ledger,
  @Consumption.hidden: true
  SemanticTag,
  @Consumption.hidden: true
  AccountingDocument,
  @Consumption.hidden: true
  LedgerGLLineItem,
  
  _DocumentStore
}
//where
//  (
//       Ledger = $parameters.P_Ledger
//    or Ledger = '0E'
//    or Ledger = '0L'
//  )
//  and(
//       PlanningCategory   = $parameters.P_PlanningCategory1
//    or PlanningCategory   = 'ACT01'
//    or PlanningCategory   = 'BUDGET01'
//  )
```
