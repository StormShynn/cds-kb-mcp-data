---
name: C_ORIGNPRFTCTRONPROJQRY
description: "This CDS view is designed to provide an analytical query for analyzing financial data related to projects, specifically focusing on the origin profit center. It is intended for consumption in analytical applications and provides a comprehensive overview of project-related financial metrics, such as recognized revenue, costs, and margins. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for a specific project or set of projects? How does the margin percentage compare across different projects or fiscal periods? What are the billed revenues and work-in-progress amounts for projects? How do the financial metrics vary by company code, ledger, or fiscal year? What is the impact of cost of goods sold (COGS) adjustments on the recognized costs? How do different account assignment types affect the financial outcomes of projects? What are the financial details associated with specific profit centers or origin profit centers? How do the financial metrics align with specific project profiles or billing elements? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value
semantic_en: "This CDS view is designed to provide an analytical query for analyzing financial data related to projects, specifically focusing on the origin profit center. It is intended for consumption in analytical applications and provides a comprehensive overview of project-related financial metrics, such as recognized revenue, costs, and margins. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for a specific project or set of projects? How does the margin percentage compare across different projects or fiscal periods? What are the billed revenues and work-in-progress amounts for projects? How do the financial metrics vary by company code, ledger, or fiscal year? What is the impact of cost of goods sold (COGS) adjustments on the recognized costs? How do different account assignment types affect the financial outcomes of projects? What are the financial details associated with specific profit centers or origin profit centers? How do the financial metrics align with specific project profiles or billing elements? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Origin Profit Center on Project - Query — CDS view tiêu dùng dựa trên Origin Profit Center on Project - Query."
keywords:
  - "Origin Profit Center on Project - Query"
  - "origin"
  - "profit"
  - "center"
  - "project"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "assignment"
  - "type"
  - "currency"
  - "field"
  - "fiscal"
  - "year"
tags:
  - CO
  - account
  - billing
  - bo:billingdocument
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - project
  - bo:companycode
---
# C_ORIGNPRFTCTRONPROJQRY

**This CDS view is designed to provide an analytical query for analyzing financial data related to projects, specifically focusing on the origin profit center. It is intended for consumption in analytical applications and provides a comprehensive overview of project-related financial metrics, such as recognized revenue, costs, and margins. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for a specific project or set of projects? How does the margin percentage compare across different projects or fiscal periods? What are the billed revenues and work-in-progress amounts for projects? How do the financial metrics vary by company code, ledger, or fiscal year? What is the impact of cost of goods sold (COGS) adjustments on the recognized costs? How do different account assignment types affect the financial outcomes of projects? What are the financial details associated with specific profit centers or origin profit centers? How do the financial metrics align with specific project profiles or billing elements? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
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
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `RecognizedRevnAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedRevnAmtInDspCrcy else null end` | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCOGSAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedCOGSAmtInDspCrcy else null end` | `CURR(23)` | Recognized COS |
| `RecognizedMargAmtInDisplayCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedMargAmtInDisplayCrcy else null end` | `CURR(23)` | Recognized Margin |
| `WIPProjAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then WIPProjAmtInDspCrcy else null end` | `CURR(23)` | WIP - Project |
| `BilledRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then BilledRevenueAmtInDspCrcy else null end` | `CURR(23)` | Billed Revenue |
| `MarginInPct` |  | |  | `ratio_of( portion => cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) , total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |
| `ActualCostAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then ActualCostAmtInDspCrcy else null end` | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then COGSAdjustmentAmtInDspCrcy else null end` | `CURR(23)` | COS Adjustment |
| `RecognizedCostAmtInDspCrcy` |  | |  | `cast ( $projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ORIGNPRFTCTRONPROJQRY')/$value)*

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
@EndUserText.label: 'Origin Profit Center on Project - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_OPRFTCTRPJ_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_OrignPrftCtrOnProjQry
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

    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant  : fis_periv

  as projection on I_EngmntPrjMargOvwCube(
                   P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                   ) as EngmntPrjMargOvwCube
{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @UI.textArrangement: #TEXT_LAST
  Ledger,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false }
  CompanyCode,

  @Consumption.filter :{ hidden: false, selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                   additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
  @Consumption.derivation: {
     lookupEntity:  'F_FsclYrDteFuncSglVal',
     resultElement: 'FiscalYear',
     binding: [
          { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
          { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' }
          ]
  }
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

  @Semantics.fiscal.yearVariant: true
  @UI.textArrangement: #TEXT_LAST
  FiscalYearVariant,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.period: true
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                   additionalBinding: [
                                   { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                      { localElement: 'FiscalYear', element: 'FiscalYear' } ] }]
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

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
//  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_ProjectWithCodingMaskVH', element : 'Project' } }]
  @EndUserText.label: 'Project'
  @UI.textArrangement: #TEXT_LAST
  Project,

  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @EndUserText.label: 'Project Profile'
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @EndUserText.label: 'Billing Element'
  @UI.textArrangement: #TEXT_LAST
  BillingWBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  OriginProfitCenter,

  @Consumption.hidden: true
  SemanticTag,

  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @EndUserText.label: 'Product'
  @UI.textArrangement: #TEXT_LAST
  Material,

  @UI.textArrangement: #TEXT_LAST
  SalesDocument,

  @UI.textArrangement: #TEXT_ONLY
  Currency,

  @EndUserText.label: 'Recognized Revenue'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedRevnAmtInDspCrcy
    else null
  end 
  as RecognizedRevnAmtInDspCrcy,

  @EndUserText.label: 'Recognized COGS'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  @Consumption.hidden: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedCOGSAmtInDspCrcy
    else null
  end 
  as RecognizedCOGSAmtInDspCrcy,

  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Consumption.dynamicLabel: { label: 'Recongnized Margin'}
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedMargAmtInDisplayCrcy
    else null
  end 
  as RecognizedMargAmtInDisplayCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then WIPProjAmtInDspCrcy
    else null
  end 
  as WIPProjAmtInDspCrcy,

  //@AnalyticsDetails.query.hidden: false
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

  @AnalyticsDetails.query.hidden: false
  @Aggregation.default: #FORMULA
  //@Consumption.dynamicLabel: { label: 'Margin in Percent'}
  @EndUserText.label: 'Margin in Percent %'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2
  ratio_of( portion =>  cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100

  as MarginInPct,
  
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @EndUserText.label: 'Actual Cost'
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  @Consumption.hidden: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then ActualCostAmtInDspCrcy
    else null
  end 
  as ActualCostAmtInDspCrcy,
  
  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'COS Adjustment'
  @AnalyticsDetails.query.reverseSign: true
  @Consumption.hidden: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then COGSAdjustmentAmtInDspCrcy
    else null
  end 
  as COGSAdjustmentAmtInDspCrcy,
  
  @EndUserText.label: 'Recognized Cost'
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ( $projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy as abap.dec( 23, 2 ) ) as RecognizedCostAmtInDspCrcy,
  
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
  
  @EndUserText.label: 'Technical Completion Date'
  TechnicalCompletionDate,
  @UI.textArrangement: #TEXT_LAST
  PersonnelNumber,
  
  @EndUserText.label: 'Journal Entry Item Text'
  DocumentItemText,
  
  _DocumentStore

}
where
      ProjectProfileCode         = 'P001'
  and WBSElementIsBillingElement = 'X'
  and ActualPlanCode             = 'A'
```
