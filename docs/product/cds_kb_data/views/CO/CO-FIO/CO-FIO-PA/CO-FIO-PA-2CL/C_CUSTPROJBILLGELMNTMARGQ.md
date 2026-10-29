---
name: C_CUSTPROJBILLGELMNTMARGQ
description: "Customer Proj with Billing Element Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJBILLGELMNTMARGQ')/$value
semantic_en: "Customer Proj with Billing Element Query"
semantic_vi: "Customer Proj with Billing Element Query — CDS view tiêu dùng dựa trên Customer Proj with Billing Element Query."
keywords:
  - "Customer Proj with Billing Element Query"
  - "customer"
  - "proj"
  - "with"
  - "billing"
  - "element"
  - "query"
  - "company"
  - "code"
  - "currency"
  - "field"
  - "fiscal"
  - "year"
  - "ledger"
  - "variant"
tags:
  - CO
  - billing
  - bo:billingdocument
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - customer
  - lob:controlling
  - lob:finance
---
# C_CUSTPROJBILLGELMNTMARGQ

**Customer Proj with Billing Element Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJBILLGELMNTMARGQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` |  | |  |  | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Project Partner |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(80)` | Project Partner Name |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then BilledRevenueAmtInDspCrcy else null end` | `CURR(23)` | Billed Revenue |
| `RecognizedRevnAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedRevnAmtInDspCrcy else null end` | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCostAmtInDspCrcy` |  | |  | `cast ( $projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `RecognizedMargAmtInDisplayCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedMargAmtInDisplayCrcy else null end` | `CURR(23)` | Recognized Margin |
| `MarginInPct` |  | |  | `ratio_of( portion => cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) , total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |
| `ActualCostAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then ActualCostAmtInDspCrcy else null end` | `CURR(23)` | Actual Cost |
| `CapAmountInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' then CapAmountInDspCrcy else null end` | `CURR(23)` | Cap Amount in Display Currency |
| `MnlContrAccrBalShtAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then MnlContrAccrBalShtAmtInDspCrcy else null end` | `CURR(23)` | Manual Contract Accruals Balance Sheet in Display Currency |
| `DownPaymentAmountInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then DownPaymentAmountInDspCrcy else null end` | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RevenueAdjustmentAmtInDspCrcy else null end` | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then COGSAdjustmentAmtInDspCrcy else null end` | `CURR(23)` | COS Adjustment |
| `DeferredRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then DeferredRevenueAmtInDspCrcy else null end` | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then DeferredCOGSAmtInDspCrcy else null end` | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AccruedRevenueAmtInDspCrcy else null end` | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AccruedCOGSAmtInDspCrcy else null end` | `CURR(23)` | Accrued COS |
| `BaselinePlndRevnAmt` |  | |  | `cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BaselinePlndCostAmt` |  | |  | `cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BaselinePlannedMarginAmt` |  | |  | `cast ( $projection.BaselinePlndRevnAmt + $projection.BaselinePlndCostAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlndRevnAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlndCostAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlannedMarginAmt` |  | |  | `cast ( $projection.OngoingPlndRevnAmt + $projection.OngoingPlndCostAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `RevnRecgnCostAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_RevnRecgnPlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `RevnRecgnRevnAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_RevnRecgnPlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `EBRRPlannedMarginAmt` |  | |  | `cast ( $projection.RevnRecgnRevnAmt + $projection.RevnRecgnCostAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `EstAtCompltnPlndCostAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `EstAtCompltnPlndRevnAmt` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `EstAtCompltnPlndMargAmt` |  | |  | `cast ( $projection.EstAtCompltnPlndRevnAmt + $projection.EstAtCompltnPlndCostAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlannedRevenueAmtInDspCrcy` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlndMarginAmt` |  | |  | `cast ( $projection.PlannedRevenueAmtInDspCrcy + $projection.PlannedCosAmtInDspCrcy as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `BaselinePlanValuationQuantity` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial ) then PlanValuationQuantity else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `OngoingPlanValuationQuantity` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial ) then PlanValuationQuantity else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `EstAtCompltnPlndValnQuantity` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial ) then PlanValuationQuantity else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `BaselinePlndMarginPct` |  | |  | `ratio_of( portion => $projection.BaselinePlannedMarginAmt , total => $projection.BaselinePlndRevnAmt ) * 100` | `DECF(34)` |  |
| `OngoingPlndMarginInPct` |  | |  | `ratio_of( portion => $projection.OngoingPlannedMarginAmt, total => $projection.OngoingPlndRevnAmt ) * 100` | `DECF(34)` |  |
| `EstAtCompltnPlndMarginInPct` |  | |  | `ratio_of( portion => $projection.EstAtCompltnPlndMargAmt, total => $projection.EstAtCompltnPlndRevnAmt ) * 100` | `DECF(34)` |  |
| `DiffRecgdAndBslnPlndMargAmt` |  | |  | `cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) - $projection.BaselinePlannedMarginAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DiffRecgdAndOngPlndMargAmt` |  | |  | `cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) - $projection.OngoingPlannedMarginAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DiffRecgdAndEsAtCplPlndMargAmt` |  | |  | `cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) - $projection.EstAtCompltnPlndMargAmt as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DiffRecgdAndBslnPlndMargInPct` |  | |  | `ratio_of( portion => $projection.DiffRecgdAndBslnPlndMargAmt, total => $projection.BaselinePlannedMarginAmt ) * 100` | `DECF(34)` |  |
| `DiffRecgdAndOngPlndMargInPct` |  | |  | `ratio_of( portion => $projection.DiffRecgdAndOngPlndMargAmt, total => $projection.OngoingPlannedMarginAmt ) * 100` | `DECF(34)` |  |
| `DiffRecgdAndEsAtCplPlndMargPct` |  | |  | `ratio_of( portion => $projection.DiffRecgdAndEsAtCplPlndMargAmt, total => $projection.EstAtCompltnPlndMargAmt ) * 100` | `DECF(34)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `case when ( ActualPlanCode = 'A' and CostSourceUnit is not initial ) then Quantity else null end` | `QUAN(23)` | Quantity |
| `ActualValuationQuantity` |  | |  | `case when ( ActualPlanCode = 'A' and CostSourceUnit is not initial ) then ActualValuationQuantity else null end` | `QUAN(23)` | Valuation Quantity |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJBILLGELMNTMARGQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTPROJBILLGELMNTMARGQ')/$value)*

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
@EndUserText.label: 'Customer Proj with Billing Element Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_CSTPBILELMT_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_CustProjBillgElmntMargQ 
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
  
    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FinancialStatementHierarchy',
     element: 'GLAccountHierarchy'
         }
    }]
    P_GLAccountHierarchy        : fins_sem_tag_hryid,

    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }
    //@Consumption.defaultValue: 'K4'
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant         : fis_periv,

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
    P_BaselinePlanningCategory  : fins_baseline_planningcategory,

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
    P_OngoingPlanningCategory   : fins_ongoing_planningcategory,

    @AnalyticsDetails.variable: { usageType: #FILTER, 
                                  referenceElement: 'PlanningCategory', 
                                  mandatory: true, 
                                  selectionType: #SINGLE, 
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory', 
                                             type : #CONSTANT, 
                                             value: 'REVREC01' }
                               ]
    }
    @Consumption.hidden: true
    P_RevnRecgnPlanningCategory : fins_ebrr_planningcategory,

    @AnalyticsDetails.variable: { usageType: #FILTER, 
                                  referenceElement: 'PlanningCategory', 
                                  mandatory: true, 
                                  selectionType: #SINGLE, 
                                  multipleSelections: true }
    @Consumption.derivation: { lookupEntity: 'I_PlanningCatSourcePlanningCat',
                               resultElement: 'SourcePlanningCategory',
                               binding : [ { targetElement : 'PlanningCategory', 
                                             type : #CONSTANT, 
                                             value: 'PRO03' }
                               ]
    }
    @Consumption.hidden: true
    P_EstAtCompltnPlanningCategory : fins_eac_planningcategory,

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue : 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_InputPlanningCategory  : fcom_category,

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
    P_PlanningCategory         : fcom_category

  as projection on I_EngmntPrjMargOvwCube(
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as EngmntPrjMargOvwCube
{
//  @Consumption.derivation: { lookupEntity: 'I_Ledger',
//                             resultElement: 'Ledger', 
//                             binding: [ { targetElement : 'IsLeadingLedger' , 
//                                          type : #CONSTANT, 
//                                          value : 'X' } ]
//  }
//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
//  @UI.textArrangement: #TEXT_LAST
//  Ledger,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, 
                         multipleSelections: true, 
                         mandatory: true, 
                         defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
//  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
//                                       additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] 
//  }]
  @Consumption.derivation: { lookupEntity:  'F_FsclYrDteFuncSglVal',
                             resultElement: 'FiscalYear',
                             binding: [ { targetParameter: 'P_DateFunction', 
                                          type : #CONSTANT, 
                                          value: 'CURRENTFISCALYEAR' },
                                        { targetParameter: 'P_FiscalYearVariant', 
                                          type : #PARAMETER, 
                                          value: 'P_FiscalYearVariant' }
                             ]
  }
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', 
                                                element: 'FiscalYear' } ,
                                       additionalBinding: [{ localElement: 'CompanyCode', 
                                                             element: 'CompanyCode' }] 
  }]
  //@Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Semantics.fiscal.yearVariant: true
  @UI.textArrangement: #TEXT_LAST
  FiscalYearVariant,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.period: true
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                       additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                            { localElement: 'FiscalYear', element: 'FiscalYear' } 
                                       ] 
  }]
  
  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

  @UI.textArrangement: #TEXT_LAST
  @Semantics.fiscal.yearPeriod: true
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYearPeriod,

  @UI.textArrangement: #TEXT_LAST
  AccountingDocument,

  @UI.textArrangement: #TEXT_LAST
  LedgerGLLineItem,
  
  @UI.textArrangement: #TEXT_LAST
  PostingDate,
  
  @UI.textArrangement: #TEXT_LAST
  EvtBsdRevnRecgnLastEvalDate,
  
  @UI.textArrangement: #TEXT_LAST
  ServicesRenderedDate,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginProfitCenter,

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
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @EndUserText.label: 'Project Profile'
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
//  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_ProjectWithCodingMaskVH', element : 'Project' } }]
  @EndUserText.label: 'Project'
  @UI.textArrangement: #TEXT_LAST
  Project,

  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @EndUserText.label: 'Billing Element'
  @UI.textArrangement: #TEXT_LAST
  BillingWBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

//  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_Rakeyvaluehelp', element : 'ResultAnalysisInternalID' } }]
  @EndUserText.label: 'Revenue Recognition Key'
  ResultAnalysisInternalID,

  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,

  @Semantics.text: true
  @EndUserText.label: 'Project Manager Name'
  ProjectManagerName,

  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,

  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,

  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,

  @UI.textArrangement: #TEXT_LAST
  ShipToParty,

  @UI.textArrangement: #TEXT_LAST
  BillToParty,

  @UI.textArrangement: #TEXT_LAST
  BusinessTransactionType,

  @UI.textArrangement: #TEXT_LAST
  SubLedgerAcctLineItemType,

  @UI.textArrangement: #TEXT_LAST
  Segment,

  @EndUserText.label: 'Project Partner'
  @UI.textArrangement: #TEXT_LAST
  BusinessPartner,
  
  @EndUserText.label: 'Project Partner Name'
  @Semantics.text: true
  @UI.textArrangement: #TEXT_LAST
  BusinessPartnerFullName,

  @EndUserText.label: 'Billable Control'
  @UI.textArrangement: #TEXT_LAST
  BillableControl,

  @EndUserText.label: 'Product'
  @UI.textArrangement: #TEXT_LAST
  Material,

  @UI.textArrangement: #TEXT_LAST
  WorkItem,
  
  @UI.textArrangement: #TEXT_LAST
  CostAnalysisResource,
  
   @UI.textArrangement: #TEXT_LAST
  TimeSheetOvertimeCategory,
  
  @UI.textArrangement: #TEXT_LAST
  PersonnelNumber,
  
  @UI.textArrangement: #TEXT_LAST
  EngagementProjectStage,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginCostCtrActivityType,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  PartnerCostCtrActivityType,

  @UI.textArrangement: #TEXT_LAST
  @EndUserText.label: 'Original Planning Category'
  PlanningCategory,

  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  Currency,

  //'Billed Revenue'
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Billed Revenue'
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then BilledRevenueAmtInDspCrcy
    else null
  end 
  as BilledRevenueAmtInDspCrcy,

  //'Recognized Revenue'
  @EndUserText.label: 'Recognized Revenue'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #ROWS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedRevnAmtInDspCrcy
    else null
  end 
  as RecognizedRevnAmtInDspCrcy,

//  @EndUserText.label: 'Recognized COGS'
//  @AnalyticsDetails.query.axis: #ROWS
//  @Semantics: { amount : {currencyCode: 'Currency'} }
//  @Aggregation.default: #SUM
//  @OData.v2.amount.noDecimalShift: true
//  @AnalyticsDetails.query.reverseSign: true
//  @Consumption.hidden: true
//  case 
//    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
//      then RecognizedCOGSAmtInDspCrcy
//    else null
//  end 
//  as RecognizedCOGSAmtInDspCrcy,
  
  @EndUserText.label: 'Recognized Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy as abap.dec( 23, 2 ) ) as RecognizedCostAmtInDspCrcy,

  @Semantics: { amount : {currencyCode: 'Currency'} }
  @EndUserText.label: 'Recognized Margin'
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedMargAmtInDisplayCrcy
    else null
  end 
  as RecognizedMargAmtInDisplayCrcy,

  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Margin in Percent %'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100
  as MarginInPct,

  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Actual Cost'
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then ActualCostAmtInDspCrcy
    else null
  end 
  as ActualCostAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = ''
      then CapAmountInDspCrcy
    else null
  end 
  as CapAmountInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then MnlContrAccrBalShtAmtInDspCrcy
    else null
  end 
  as MnlContrAccrBalShtAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then DownPaymentAmountInDspCrcy
    else null
  end 
  as DownPaymentAmountInDspCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'Revenue Adjustment'
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RevenueAdjustmentAmtInDspCrcy
    else null
  end 
  as RevenueAdjustmentAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'COS Adjustment'
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then COGSAdjustmentAmtInDspCrcy
    else null
  end 
  as COGSAdjustmentAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then DeferredRevenueAmtInDspCrcy
    else null
  end 
  as DeferredRevenueAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then DeferredCOGSAmtInDspCrcy
    else null
  end 
  as DeferredCOGSAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then AccruedRevenueAmtInDspCrcy
    else null
  end 
  as AccruedRevenueAmtInDspCrcy,
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then AccruedCOGSAmtInDspCrcy
    else null
  end 
  as AccruedCOGSAmtInDspCrcy,

  @EndUserText.label: 'Planned Revenue Baseline'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy else null
        end as abap.dec( 23, 2 ) ) as BaselinePlndRevnAmt,
        
  @EndUserText.label: 'Planned Cost Baseline'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when (PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy else null
        end as abap.dec( 23, 2 ) ) as BaselinePlndCostAmt,
        
  @EndUserText.label: 'Planned Margin Baseline'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.BaselinePlndRevnAmt + $projection.BaselinePlndCostAmt as abap.dec( 23, 2 ) ) as BaselinePlannedMarginAmt,
  
  @EndUserText.label: 'Planned Revenue Ongoing'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as OngoingPlndRevnAmt,

  @EndUserText.label: 'Planned Cost Ongoing'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as OngoingPlndCostAmt,
        
  @EndUserText.label: 'Planned Margin Ongoing'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.OngoingPlndRevnAmt + $projection.OngoingPlndCostAmt as abap.dec( 23, 2 ) ) as OngoingPlannedMarginAmt,
        
  @EndUserText.label: 'Planned Cost EBRR'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_RevnRecgnPlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as RevnRecgnCostAmt,

  @EndUserText.label: 'Planned Revenue EBRR'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_RevnRecgnPlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as RevnRecgnRevnAmt,

        
  @EndUserText.label: 'Planned Margin EBRR'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.RevnRecgnRevnAmt + $projection.RevnRecgnCostAmt as abap.dec( 23, 2 ) ) as EBRRPlannedMarginAmt,
        
  @EndUserText.label: 'Planned Cost EAC'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as EstAtCompltnPlndCostAmt,

  @EndUserText.label: 'Planned Revenue EAC'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as EstAtCompltnPlndRevnAmt,
        
  @EndUserText.label: 'Planned Margin EAC'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.EstAtCompltnPlndRevnAmt + $projection.EstAtCompltnPlndCostAmt as abap.dec( 23, 2 ) ) as EstAtCompltnPlndMargAmt,
        
  @EndUserText.label: 'Planned Cost Manual'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as PlannedCosAmtInDspCrcy,

  @EndUserText.label: 'Planned Revenue Manual'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when ( PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy  else null
        end as abap.dec( 23, 2 ) ) as PlannedRevenueAmtInDspCrcy,
        
  @EndUserText.label: 'Planned Margin Manual'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.PlannedRevenueAmtInDspCrcy + $projection.PlannedCosAmtInDspCrcy as abap.dec( 23, 2 ) ) as PlndMarginAmt,
  
  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  CostSourceUnit,
  
  @EndUserText.label: 'Baseline Planned Valuation Quantity'
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast( case when ( PlanningCategory = $parameters.P_BaselinePlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial )  
          then PlanValuationQuantity else null
        end as abap.dec( 23, 2 ) ) as BaselinePlanValuationQuantity,
        
  @EndUserText.label: 'Ongoing Planned Valuation Quantity'
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast( case when ( PlanningCategory = $parameters.P_OngoingPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial )  
          then PlanValuationQuantity else null
        end as abap.dec( 23, 2 ) ) as OngoingPlanValuationQuantity,
    
  @EndUserText.label: 'EAC Planned Valuation Quantity '
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  cast( case when ( PlanningCategory = $parameters.P_EstAtCompltnPlanningCategory and ActualPlanCode = 'P' and CostSourceUnit is not initial )  
          then PlanValuationQuantity else null
        end as abap.dec( 23, 2 ) ) as EstAtCompltnPlndValnQuantity,
        
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Margin in Percent % (Baseline)'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.BaselinePlannedMarginAmt ,
            total => $projection.BaselinePlndRevnAmt ) * 100
  as BaselinePlndMarginPct,
        
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Margin in Percent % (Ongoing)'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.OngoingPlannedMarginAmt,
            total => $projection.OngoingPlndRevnAmt ) * 100
  as OngoingPlndMarginInPct,
  
  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Margin in Percent % (EAC)'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.EstAtCompltnPlndMargAmt,
            total => $projection.EstAtCompltnPlndRevnAmt ) * 100
  as EstAtCompltnPlndMarginInPct,
  
  @EndUserText.label: 'Recognized Margin Δ Planned Margin Baseline'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) - $projection.BaselinePlannedMarginAmt as abap.dec( 23, 2 ) ) as DiffRecgdAndBslnPlndMargAmt,
        
  @EndUserText.label: 'Recognized Margin Δ Planned Margin Ongoing'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) )  - $projection.OngoingPlannedMarginAmt as abap.dec( 23, 2 ) ) as DiffRecgdAndOngPlndMargAmt,
  
  @EndUserText.label: 'Recognized Margin Δ Planned Margin EAC'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) )  - $projection.EstAtCompltnPlndMargAmt as abap.dec( 23, 2 ) ) as DiffRecgdAndEsAtCplPlndMargAmt,
  
  @Aggregation.default: #FORMULA
  @EndUserText.label: '%Recognized Margin Δ Planned Margin Baseline'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.DiffRecgdAndBslnPlndMargAmt,
            total => $projection.BaselinePlannedMarginAmt ) * 100
  as DiffRecgdAndBslnPlndMargInPct,
        
  @Aggregation.default: #FORMULA
  @EndUserText.label: '%Recognized Margin Δ Planned Margin Ongoing'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.DiffRecgdAndOngPlndMargAmt,
            total => $projection.OngoingPlannedMarginAmt ) * 100
  as DiffRecgdAndOngPlndMargInPct,
  
  @Aggregation.default: #FORMULA
  @EndUserText.label: '%Recognized Margin Δ Planned Margin EAC'
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  $projection.DiffRecgdAndEsAtCplPlndMargAmt,
            total => $projection.EstAtCompltnPlndMargAmt ) * 100
  as  DiffRecgdAndEsAtCplPlndMargPct,
  
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
  
  @EndUserText.label: 'Technical Completion Date'
  TechnicalCompletionDate,
  
  @UI.textArrangement: #TEXT_ONLY
  BaseUnit,
  
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @Aggregation.default: #SUM
  case 
    when ( ActualPlanCode = 'A' and CostSourceUnit is not initial )  
      then Quantity 
    else null 
  end as Quantity,

  
  @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
  @Aggregation.default: #SUM
  case 
    when ( ActualPlanCode = 'A' and CostSourceUnit is not initial )  
      then ActualValuationQuantity 
    else null 
  end as ActualValuationQuantity,
  
  @EndUserText.label: 'Journal Entry Item Text'
  DocumentItemText,
  
  _DocumentStore
        
}
where
      ProjectProfileCode         = 'P001'
  and WBSElementIsBillingElement = 'X'
  and AccountAssignmentType      = 'PR'
  and Ledger = $parameters.P_Ledger
```
