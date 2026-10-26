---
name: C_PROJECTWIPHOURSQUERY
description: "This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value
semantic_en: "This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "WIP Hours on Project - Query — CDS view tiêu dùng dựa trên WIP Hours on Project - Query."
keywords:
  - "WIP Hours on Project - Query"
  - "wip"
  - "hours"
  - "project"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "currency"
  - "field"
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
  - project
  - transaction
  - bo:project
---
# C_PROJECTWIPHOURSQUERY

**This CDS view is designed to provide analytical insights into work-in-progress (WIP) hours associated with projects. It aggregates and projects data related to confirmed hours, billed hours, written-off hours, non-billable hours, and WIP hours, along with their respective amounts in display currency. The view is tailored for consumption in analytical queries, allowing users to filter and analyze project-related financial and operational data. This CDS view provides the data to answer the following business questions: What are the confirmed hours and their associated amounts for a given project? How many hours have been billed, and what is the billed revenue amount for a project? What are the quantities and amounts of written-off hours for a project? How many hours are non-billable, and what is the non-billable amount for a project? What are the work-in-progress (WIP) hours and their associated amounts for a project? How does the hour balance quantity reflect the overall project hours status? What is the technical completion date for a project? What are the details of the journal entry items related to project transactions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
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
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
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
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TimeConfirmationAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then TimeConfirmationAmtInDspCrcy else null end` | `CURR(23)` | Time Confirmation Amount in Display Currency |
| `ConfirmedHoursQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial then ConfirmedHoursQuantity else null end` | `QUAN(23)` | Confirmed Hours Quantity |
| `BilledRevenueAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then BilledRevenueAmtInDspCrcy else null end` | `CURR(23)` | Billed Revenue |
| `BilledHoursQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial then BilledHoursQuantity else null end` | `QUAN(23)` | Billed Hours Quantity |
| `WrittenOffHoursQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial then WrittenOffHoursQuantity else null end` | `QUAN(23)` | Written off Hours Quantity |
| `WrittenOffAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' then WrittenOffAmtInDspCrcy else null end` | `CURR(23)` | Written off Hours Amount in Display Currency |
| `NonBillableHoursQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial then NonBillableHoursQuantity else null end` | `QUAN(23)` | Non Billable Hours Quantity |
| `NonBillableAmtInDspCrcy` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' then NonBillableAmtInDspCrcy else null end` | `CURR(23)` | Non Billable Hours Amount in Display Currency |
| `WIPHoursQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial then WIPHoursQuantity else null end` | `QUAN(23)` | WIP Hours Quantity |
| `WIPAmtInDisplayCurrency` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' then WIPAmtInDisplayCurrency else null end` | `CURR(23)` | WIP Amount in Display Currency |
| `CompletedWorkQuantity` |  | |  | `case when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial then CompletedWorkQuantity else null end` | `QUAN(23)` | Completed Quantity |
| `HourBalanceQuantity` |  | |  | `cast ( $projection.ConfirmedHoursQuantity + $projection.BilledHoursQuantity - $projection.WrittenOffHoursQuantity - $projection.WIPHoursQuantity - $projection.NonBillableHoursQuantity - $projection.CompletedWorkQuantity as fis_quantity_control )` | `QUAN(23)` | hour balance |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `LineIsSemTagCalculated` |  | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `_DocumentStore` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTWIPHOURSQUERY')/$value)*

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
@EndUserText.label: 'WIP Hours on Project - Query'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINS_MA_PJWIPHORS_RB_EXIT'
@Analytics.variableCheck.implementedBy: 'ABAP:CL_FINS_MA_CDS_CHECK_VAR'
@Analytics.document.defaultAssociationToStorage: '_DocumentStore'
@OData.publish: true
define transient view entity C_ProjectWIPHoursQuery
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
    //@Consumption.defaultValue: 'K4'
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

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query: {axis: #ROWS}
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

  @Consumption.hidden: true
  SemanticTag,

  @EndUserText.label: 'Project Profile'
  @UI.textArrangement: #TEXT_ONLY
  ProjectProfileCode,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
//  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_ProjectWithCodingMaskVH', element : 'Project' } }]
  @EndUserText.label: 'Project'
  @UI.textArrangement: #TEXT_LAST
  Project,

  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @EndUserText.label: 'Billing Element'
  @AnalyticsDetails.query: {axis: #ROWS}
  BillingWBSElementExternalID,

  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

  @EndUserText.label: 'Revenue Recognition Key'
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false, defaultValue: 'SPTMWP' }
  ResultAnalysisInternalID,

  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @Consumption.hidden: true
  ProjectManagerWorkAgreement,

  @Semantics.text: true
  @EndUserText.label: 'Project Manager Name'
  ProjectManagerName,

  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

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
  BusinessTransactionType,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
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

  TimeSheetOvertimeCategory,

  @UI.textArrangement: #TEXT_LAST
  PersonnelNumber,

  @UI.textArrangement: #TEXT_LAST
  EngagementProjectStage,

  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  Currency,

  // WIP Hours
//  @Consumption.filter :{ hidden: false, selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @Consumption.defaultValue: 'H'
  BaseUnit,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then TimeConfirmationAmtInDspCrcy
    else null
  end 
  as TimeConfirmationAmtInDspCrcy,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial
      then ConfirmedHoursQuantity
    else null
  end 
  as ConfirmedHoursQuantity,

  @EndUserText.label: 'Billed Revenue Amt'
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

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @EndUserText.label: 'Billed Hours'
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.reverseSign: true
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial
      then BilledHoursQuantity
    else null
  end 
  as BilledHoursQuantity,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial
      then WrittenOffHoursQuantity
    else null
  end 
  as WrittenOffHoursQuantity,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = ''
      then WrittenOffAmtInDspCrcy
    else null
  end 
  as WrittenOffAmtInDspCrcy,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial
      then NonBillableHoursQuantity
    else null
  end 
  as NonBillableHoursQuantity,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = ''
      then NonBillableAmtInDspCrcy
    else null
  end 
  as NonBillableAmtInDspCrcy,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.axis: #COLUMNS
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X' and BaseUnit is not initial
      then WIPHoursQuantity
    else null
  end 
  as WIPHoursQuantity,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = 'X'
      then WIPAmtInDisplayCurrency
    else null
  end 
  as WIPAmtInDisplayCurrency,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @Aggregation.default: #SUM
  case 
    when ActualPlanCode = 'A' and LineIsSemTagCalculated = '' and BaseUnit is not initial
      then CompletedWorkQuantity
    else null
  end 
  as CompletedWorkQuantity,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.axis: #ROWS
  @Aggregation.default: #FORMULA
  @OData.v2.amount.noDecimalShift: true
  cast ( $projection.ConfirmedHoursQuantity + $projection.BilledHoursQuantity -
         $projection.WrittenOffHoursQuantity - $projection.WIPHoursQuantity -
         $projection.NonBillableHoursQuantity - $projection.CompletedWorkQuantity
         as fis_quantity_control ) as HourBalanceQuantity,
  
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Manager'
  @UI.textArrangement: #TEXT_LAST
  ProjectManager,
  
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
  
  @EndUserText.label: 'Journal Entry Item Text'
  DocumentItemText,
  
  _DocumentStore

}
where
      ProjectProfileCode         = 'P001'
  and WBSElementIsBillingElement = 'X'
  and ActualPlanCode             = 'A'
  and AccountAssignmentType      = 'PR'
```
