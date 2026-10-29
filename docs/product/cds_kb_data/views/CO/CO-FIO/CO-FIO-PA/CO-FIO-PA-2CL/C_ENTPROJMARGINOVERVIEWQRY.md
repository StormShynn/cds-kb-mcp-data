---
name: C_ENTPROJMARGINOVERVIEWQRY
description: "This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value
semantic_en: "This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Enterprise Project Margin Overview Query — CDS view tiêu dùng dựa trên Enterprise Project Margin Overview Query."
keywords:
  - "Enterprise Project Margin Overview Query"
  - "enterprise"
  - "project"
  - "margin"
  - "overview"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "assignment"
  - "type"
  - "fiscal"
  - "year"
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - plan
  - project
  - stock
  - bo:project
---
# C_ENTPROJMARGINOVERVIEWQRY

**This CDS view is designed to provide an overview of enterprise project margins, focusing on both recognized and planned financial metrics. It aggregates and presents data related to revenues, costs, margins, and other financial indicators associated with enterprise projects. The view is intended for analytical purposes, allowing users to filter and analyze project financial data based on various parameters such as fiscal year, company code, and planning category. This CDS view provides the data to answer the following business questions: What is the recognized revenue and cost for enterprise projects within a specific fiscal year or company code? How does the recognized margin compare to the planned margin for enterprise projects? What is the margin percentage for enterprise projects, and how does it vary across different projects or fiscal periods? What are the adjustments made to revenue and cost, and how do they impact the overall project margin? How does the project stock value contribute to the financial overview of enterprise projects? What are the planned revenue and cost figures for enterprise projects, and how do they align with actual figures? How can project managers and stakeholders use this financial data to make informed decisions about project performance and future planning? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `RecognizedRevnAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedRevnAmtInDspCrcy else null end` | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then BilledRevenueAmtInDspCrcy else null end` | `CURR(23)` | Billed Revenue |
| `ActualSalesDdctdInDspCrcy` |  | |  | `cast( case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then ActualSalesDdctdInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RevenueAdjustmentAmtInDspCrcy else null end` | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` |  | |  | `cast ($projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy as abap.dec( 23, 2 ) )as RecognizedCOGSAmtInDspCrcy` | `DEC(23)` |  |
| `ActualCostAmtInDspCrcy` |  | |  | `cast( case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then ActualCostAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `COGSAdjustmentAmtInDspCrcy` |  | |  | `cast( case when SemanticTag = 'ADJ_COS' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `RecognizedMargAmtInDisplayCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then RecognizedMargAmtInDisplayCrcy else null end` | `CURR(23)` | Recognized Margin |
| `MarginInPct` |  | |  | `ratio_of( portion => cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) , total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100` | `DECF(34)` |  |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  | `cast( case when SemanticTag = 'PRSLS_STCK' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then AmountInDisplayCurrency else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlannedRevenueAmtInDspCrcy` |  | |  | `cast( case when (PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' ) then PlannedRevenueAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlannedCosAmtInDspCrcy` |  | |  | `cast( case when (PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' ) then PlannedCosAmtInDspCrcy else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `_LedgerText` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJMARGINOVERVIEWQRY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking:#REQUIRED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY   
@Analytics.settings.maxProcessingEffort: #HIGH 
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Enterprise Project Margin Overview Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_ENTPMGNOV_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
define transient view entity C_EntProjMarginOverviewQry

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
    P_FiscalYearVariant          : fis_periv,

    @EndUserText.label: 'Planning Category'
    @Consumption.defaultValue : 'PLN'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_ProjMargPlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    P_InputPlanningCategory : fcom_category,

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
    P_PlanningCategory      : fcom_category
    
as projection on  I_ETOProjMargOvwCube(
//I_EntProjMargOvwCube(
                 P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                 ) as I_ProjectMarginCube

  association [0..*] to I_LedgerText                as _LedgerText                on  $projection.Ledger = _LedgerText.Ledger
{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.variableSequence : 90
  @UI.textArrangement: #TEXT_LAST
  @ObjectModel.text.association: '_LedgerText'
  Ledger,
  
  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false }
  CompanyCode,

//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false } 
  @AnalyticsDetails.query.variableSequence : 110
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,
  
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                       additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] 
  }]
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
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

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
  
  @Consumption.hidden: true
  SemanticTag,

  @UI.textArrangement: #TEXT_LAST
  SubLedgerAcctLineItemType,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Profile'
  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  ProjectProfileCode,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  //@Consumption.valueHelpDefinition: [{ entity: { name : 'I_PROJECTSTRUCTURE', element : 'Project' } }]//  @UI.textArrangement: #TEXT_LAST
  Project,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
  @EndUserText.label: 'Project Definition'
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,
  
  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_WBSElementBasicDataStdVH', element : 'WBSElementExternalID' } }]
  WBSElementExternalID,  


  
//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,//PersonWorkAgreement,  

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Status'
  @UI.textArrangement: #TEXT_LAST
  ProcessingStatus,  
  
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @UI.textArrangement: #TEXT_LAST
  Plant,   
  
  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,
  
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,
  
  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,
  
  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,
  
  @UI.textArrangement: #TEXT_LAST
  ShipToParty,
  
  @UI.textArrangement: #TEXT_LAST
  BillToParty,
  
  @UI.textArrangement: #TEXT_LAST
  Segment,

  
  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  Currency,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true, defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,  

  @UI.textArrangement: #TEXT_LAST
  @EndUserText.label: 'Original Planning Category'
  PlanningCategory,  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// - Revenues - //////

  //'Recognized Revenue'
  @Consumption.dynamicLabel.label: 'Recognized Revenue'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.reverseSign: true  
  case
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedRevnAmtInDspCrcy
    else null
  end                                                                                                                       as RecognizedRevnAmtInDspCrcy,

  @EndUserText.label: 'Billed Revenue'
  @Consumption.dynamicLabel: { label: 'Billed Revenue' }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics: { amount : {currencyCode: 'Currency'} }  
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'  
  @AnalyticsDetails.query.reverseSign: true  
    case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then BilledRevenueAmtInDspCrcy
    else null
  end 
  as BilledRevenueAmtInDspCrcy,


  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.dynamicLabel: { label: 'Sales Deduction'}
  @OData.v2.amount.noDecimalShift: true 
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'   
  @AnalyticsDetails.query.reverseSign: true   
cast(
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then ActualSalesDdctdInDspCrcy 
    else null
  end as abap.dec( 23, 2 ) )  
  as ActualSalesDdctdInDspCrcy,


  @EndUserText.label: 'Revenue Adjustment'  
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'Currency'
  @Consumption.dynamicLabel: { label: 'Revenue Adjustment'} 
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @OData.v2.amount.noDecimalShift: true
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedRevnAmtInDspCrcy'   
  @AnalyticsDetails.query.reverseSign: true 
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RevenueAdjustmentAmtInDspCrcy
    else null
  end   
  as RevenueAdjustmentAmtInDspCrcy,

  @Aggregation.default: #FORMULA 
  @EndUserText.label: 'Recognized Cost'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @AnalyticsDetails.query.collisionHandling.formula: #THIS   
//  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast ($projection.ActualCostAmtInDspCrcy + $projection.COGSAdjustmentAmtInDspCrcy
  as abap.dec( 23, 2 ) )as RecognizedCOGSAmtInDspCrcy,
//  case
//    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
//      then RecognizedCOGSAmtInDspCrcy
//    else null
//  end                                                                                                                       as RecognizedCOGSAmtInDspCrcy,
  
 //  @Aggregation.default: #FORMULA
  @EndUserText.label: 'Actual Cost'
  @AnalyticsDetails.query.collisionHandling.formula: #THIS 
  @AnalyticsDetails.query.elementHierarchy.initiallyCollapsed: false
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedCOGSAmtInDspCrcy'   
  @AnalyticsDetails.query.reverseSign: true  
  cast(
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then ActualCostAmtInDspCrcy
    else null
  end as abap.dec( 23, 2 ) )  
  as ActualCostAmtInDspCrcy,    
  

  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'Currency'
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.dynamicLabel: { label: 'Cost Adjustment'} 
  @OData.v2.amount.noDecimalShift: true  
//  @AnalyticsDetails.query.elementHierarchy.parent: 'RecognizedCOGSAmtInDspCrcy'     
  @AnalyticsDetails.query.reverseSign: true  
  cast( case when SemanticTag = 'ADJ_COS' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' 
  then AmountInDisplayCurrency 
  else null
  end as abap.dec( 23, 2 ) ) 
  as COGSAdjustmentAmtInDspCrcy,  

 @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Consumption.dynamicLabel: { label: 'Recognized Margin'}
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #ROWS
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  case
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then RecognizedMargAmtInDisplayCrcy
    else null
  end  as RecognizedMargAmtInDisplayCrcy,


  @AnalyticsDetails.query.hidden: false
  @Aggregation.default: #FORMULA
  @Consumption.dynamicLabel: { label: 'Margin in Percent %'}
  @EndUserText.label: 'Margin in Percent'
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.decimals: 2  
  ratio_of( portion =>  cast ( $projection.RecognizedMargAmtInDisplayCrcy as abap.dec( 23, 2 ) ) ,
            total => cast ( $projection.RecognizedRevnAmtInDspCrcy as abap.dec( 23, 2 ) ) ) * 100
  as MarginInPct,


 @EndUserText.label: 'Project Stock'
 @Consumption.dynamicLabel: { label: 'Project Stock'  }
 @AnalyticsDetails.query.axis: #ROWS
 @AnalyticsDetails.query.hidden: false
 @Semantics: { amount : {currencyCode: 'Currency'} }
 @Aggregation.default: #SUM
 @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when SemanticTag = 'PRSLS_STCK' and ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' 
  then AmountInDisplayCurrency 
  else null
  end as abap.dec( 23, 2 ) ) 
  as ProjAndSlsOrdStkAmtInDspCrcy,


  @EndUserText.label: 'Planned Revenue'
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when (PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' )  then PlannedRevenueAmtInDspCrcy else null
        end as abap.dec( 23, 2 ) )                                                                       as PlannedRevenueAmtInDspCrcy,

  @EndUserText.label: 'Planned Cost'
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics: { amount : {currencyCode: 'Currency'} }
  @Aggregation.default: #SUM
  @OData.v2.amount.noDecimalShift: true
  @AnalyticsDetails.query.reverseSign: true
  cast( case when (PlanningCategory = $parameters.P_PlanningCategory and ActualPlanCode = 'P' )  then PlannedCosAmtInDspCrcy else null
        end as abap.dec( 23, 2 ) )                                                                       as PlannedCosAmtInDspCrcy,

  
  _LedgerText,
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
  LedgerGLLineItem,
  _DocumentStore,
  @EndUserText.label: 'CO Debit/Credit Indicator'
  @UI.textArrangement: #TEXT_LAST  
  ControllingDebitCreditCode  
}
where ProjectProfileCode = 'YP05'
  and AccountAssignmentType = 'PR'
```
