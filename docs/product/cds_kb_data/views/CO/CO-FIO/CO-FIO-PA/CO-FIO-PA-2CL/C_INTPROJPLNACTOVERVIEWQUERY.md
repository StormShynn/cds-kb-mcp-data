---
name: C_INTPROJPLNACTOVERVIEWQUERY
description: "This CDS view is designed to provide an analytical query for an internal project overview, focusing on planned and actual costs, as well as variances for projects. It is intended to support financial analysis and project management by offering insights into project financials, including planned and actual costs, cost variances, and valuation quantities. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for internal projects within a specific fiscal year or period? How do the planned costs (both baseline and ongoing) compare to the actual costs for internal projects? What is the variance between planned and actual costs for internal projects, both for baseline and ongoing plans? What are the planned and actual valuation quantities for internal projects? How do financial metrics vary across different company codes, profit centers, and functional areas? What is the financial performance of projects managed by specific project managers or within certain project stages? How do costs and variances align with specific general ledger accounts and chart of accounts? What are the financial implications of projects based on different customer groups, sold products, and segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTPROJPLNACTOVERVIEWQUERY')/$value
semantic_en: "This CDS view is designed to provide an analytical query for an internal project overview, focusing on planned and actual costs, as well as variances for projects. It is intended to support financial analysis and project management by offering insights into project financials, including planned and actual costs, cost variances, and valuation quantities. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for internal projects within a specific fiscal year or period? How do the planned costs (both baseline and ongoing) compare to the actual costs for internal projects? What is the variance between planned and actual costs for internal projects, both for baseline and ongoing plans? What are the planned and actual valuation quantities for internal projects? How do financial metrics vary across different company codes, profit centers, and functional areas? What is the financial performance of projects managed by specific project managers or within certain project stages? How do costs and variances align with specific general ledger accounts and chart of accounts? What are the financial implications of projects based on different customer groups, sold products, and segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Internal Project Overview - Query — CDS view tiêu dùng dựa trên Internal Project Overview - Query."
keywords:
  - "Internal Project Overview - Query"
  - "internal"
  - "project"
  - "overview"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
tags:
  - CO
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
  - plan
  - product
  - project
  - bo:project
---
# C_INTPROJPLNACTOVERVIEWQUERY

**This CDS view is designed to provide an analytical query for an internal project overview, focusing on planned and actual costs, as well as variances for projects. It is intended to support financial analysis and project management by offering insights into project financials, including planned and actual costs, cost variances, and valuation quantities. This CDS view provides the data to answer the following business questions: What are the actual costs incurred for internal projects within a specific fiscal year or period? How do the planned costs (both baseline and ongoing) compare to the actual costs for internal projects? What is the variance between planned and actual costs for internal projects, both for baseline and ongoing plans? What are the planned and actual valuation quantities for internal projects? How do financial metrics vary across different company codes, profit centers, and functional areas? What is the financial performance of projects managed by specific project managers or within certain project stages? How do costs and variances align with specific general ledger accounts and chart of accounts? What are the financial implications of projects based on different customer groups, sold products, and segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTPROJPLNACTOVERVIEWQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `Quantity` |  | |  | `case when BaseUnit is not initial then Quantity else null end` | `QUAN(23)` | Quantity |
| `ActualCostAmtInDspCrcy` |  | |  | `cast( ActualCostAmtInDspCrcy as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `ActualValuationQuantity` |  | |  | `case when CostSourceUnit is not initial then ActualValuationQuantity else null end` | `QUAN(23)` | Valuation Quantity |
| `BaselinePlndCostAmt` |  | |  | `cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlndCostAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BaselineCostVarianceAmount` |  | |  | `( $projection.BaselinePlndCostAmt - $projection.ActualCostAmtInDspCrcy)` | `DEC(24)` |  |
| `OngoingCostVarianceAmount` |  | |  | `( $projection.OngoingPlndCostAmt - $projection.ActualCostAmtInDspCrcy)` | `DEC(24)` |  |
| `BaselinePlanValuationQuantity` |  | |  | `cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial ) then PlanValuationQuantity else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlanValuationQuantity` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial) then PlanValuationQuantity else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTPROJPLNACTOVERVIEWQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTPROJPLNACTOVERVIEWQUERY')/$value)*

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
@EndUserText.label: 'Internal Project Overview - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_INTPJPAOVW_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_IntProjPlnActOverviewQuery 
  provider contract analytical_query
  with parameters

    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FinancialStatementHierarchy',
     element: 'GLAccountHierarchy'
         }
    }]

    P_GLAccountHierarchy       : fins_sem_tag_hryid,

    @AnalyticsDetails.variable: { usageType: #FILTER,
                                  referenceElement: 'PlanningCategory',
                                  mandatory: true,
                                  selectionType: #SINGLE,
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory',
                                             type : #CONSTANT,
                                             value: 'PRO01' }
                               ]
    }
    @Consumption.hidden: true
    P_BaselinePlanningCategory        : fins_baseline_planningcategory,

    @AnalyticsDetails.variable: { usageType: #FILTER,
                                  referenceElement: 'PlanningCategory',
                                  mandatory: true,
                                  selectionType: #SINGLE,
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory',
                                             type : #CONSTANT,
                                             value: 'PRO02' }
                               ]
    }
    @Consumption.hidden: true
    P_OngoingPlanningCategory        : fins_ongoing_planningcategory

  as projection on I_EngmntPrjMargOvwCube(
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as EngmntPrjMargOvwCube

{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
                             resultElement: 'Ledger', 
                             binding: [ { targetElement : 'IsLeadingLedger' , 
                                          type : #CONSTANT, 
                                          value : 'X' } ]
  }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  Ledger,
  
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.variableSequence : 95
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false}
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
//  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
//                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
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

  //  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.yearPeriod: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  @Consumption.filter :{ hidden: true, selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'PR' }
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

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  Project,

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,

  @Semantics.text: true
  @EndUserText.label: 'Project Manager Name'
  ProjectManagerName,
  
   @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }

  @UI.textArrangement: #TEXT_LAST
  EngagementProjectStage,

  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query: {axis: #ROWS}
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @UI.textArrangement: #TEXT_LAST
  Currency,
  
  BaseUnit,
  CostSourceUnit,
  @Aggregation.default: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  case 
    when BaseUnit is not initial
      then Quantity
    else null
  end 
  as Quantity,
  
  @EndUserText.label: 'Actual Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  cast( ActualCostAmtInDspCrcy as abap.dec( 23, 2 ) ) as ActualCostAmtInDspCrcy,
  
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  case 
    when CostSourceUnit is not initial
      then ActualValuationQuantity
    else null
  end 
  as ActualValuationQuantity,
  
  @EndUserText.label: 'Planned Cost Baseline'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  //@AnalyticsDetails.query.reverseSign: true
  cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy else null
        end as abap.dec( 23, 2 ) )                                                                         as BaselinePlndCostAmt,

  @EndUserText.label: 'Planned Cost Ongoing '
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  //@AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) )                                                                         as OngoingPlndCostAmt,



//  @EndUserText.label: 'Variance (= Plan cost - actual cost)'
//  @Semantics.amount.currencyCode: 'Currency'
//  @AnalyticsDetails.query.axis: #COLUMNS
//  @Aggregation.default: #FORMULA
//  ( $projection.BaselinePlndCostAmt + $projection.OngoingPlndCostAmt - $projection.ActualCostAmtInDspCrcy) as CostVariance,

  @EndUserText.label: 'Baseline Variance (= Planned Cost Baseline - Actual Cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.BaselinePlndCostAmt - $projection.ActualCostAmtInDspCrcy) as BaselineCostVarianceAmount,
  
  @EndUserText.label: 'Ongoing Variance (= Planned Cost Ongoing - Actual Cost)'
  @Semantics.amount.currencyCode: 'Currency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  ( $projection.OngoingPlndCostAmt - $projection.ActualCostAmtInDspCrcy) as OngoingCostVarianceAmount,

  @EndUserText.label: 'Baseline Planned Valuation Quantity'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast( case 
          when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial )  
          then PlanValuationQuantity 
          else null
        end as abap.dec( 23, 2 ) )                                                                         as BaselinePlanValuationQuantity,


  @EndUserText.label: 'Ongoing Planned Valuation Quantity'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast( case 
          when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial)  
          then PlanValuationQuantity  
          else null
        end as abap.dec( 23, 2 ) )                                                                         as OngoingPlanValuationQuantity,
  
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
  AccountingDocument,
  @Consumption.hidden: true
  SemanticTag,
  @Consumption.hidden: true
  LedgerGLLineItem,
  
  _DocumentStore

}
where
//   Ledger = $parameters.P_Ledger
//  and 
      ProjectProfileCode    = 'P002'
  and AccountAssignmentType = 'PR'
```
