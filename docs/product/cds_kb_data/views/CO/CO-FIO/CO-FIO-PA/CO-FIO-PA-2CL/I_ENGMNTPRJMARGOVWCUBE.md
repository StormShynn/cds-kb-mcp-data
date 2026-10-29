---
name: I_ENGMNTPRJMARGOVWCUBE
description: "Engagement Project Margin - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPRJMARGOVWCUBE')/$value
semantic_en: "Engagement Project Margin - Cube"
semantic_vi: "Engagement Project Margin - Cube — CDS view giao diện dựa trên P_EngagementProjectMargin."
keywords:
  - "Engagement Project Margin - Cube"
  - "engagement"
  - "project"
  - "margin"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - project
---
# I_ENGMNTPRJMARGOVWCUBE

**Engagement Project Margin - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPRJMARGOVWCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | ✓ | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `LineIsSemTagCalculated` | ✓ | |  |  | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` |  | |  |  | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementIsBillingElement` |  | |  |  | `CHAR(1)` | Indicator: Billing element |
| `BillingWBSElementInternalID` |  | |  |  | `NUMC(8)` |  |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | | `_BillingWBSElement` | `ResultAnalysisInternalID` | `CHAR(6)` | Results Analysis Key |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` | Full Name |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Project Partner |
| `BusinessPartnerFullName` |  | |  |  | `CHAR(80)` | Project Partner Name |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Billed Revenue |
| `ActualSalesDdctdInDspCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `ActualCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `ActlFixedCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `FxdCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Cost of Goods Sold - Fixed |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Display Currency |
| `AdminOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Sales Overhead |
| `MarketingOvhdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInDspCrcy` |  | |  |  | `CURR(23)` | Research and Development Overhead |
| `PlannedCosAmtInDspCrcy` |  | |  |  | `CURR(23)` | Inverted Amount in Company Code Currency |
| `PlannedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Inverted Amount in Company Code Currency |
| `UnbilledRevnInDspCrcy` |  | |  |  | `CURR(23)` | Unbilled Revenue |
| `MnlContrAccrBalShtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Balance Sheet in Display Currency |
| `WIPProjAmtInDspCrcy` |  | |  |  | `CURR(23)` | WIP - Project |
| `MatlStkAmtInDspCrcy` |  | |  |  | `CURR(23)` | Material Stock |
| `WIPProdnAmtInDspCrcy` |  | |  |  | `CURR(23)` | WIP - Production |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `TimeConfirmationAmtInDspCrcy` |  | |  |  | `CURR(23)` | Time Confirmation Amount in Display Currency |
| `ConfirmedHoursQuantity` |  | |  |  | `QUAN(23)` | Confirmed Hours Quantity |
| `BilledHoursQuantity` |  | |  |  | `QUAN(23)` | Billed Hours Quantity |
| `WrittenOffHoursQuantity` |  | |  |  | `QUAN(23)` | Written off Hours Quantity |
| `WrittenOffAmtInDspCrcy` |  | |  |  | `CURR(23)` | Written off Hours Amount in Display Currency |
| `NonBillableHoursQuantity` |  | |  |  | `QUAN(23)` | Non Billable Hours Quantity |
| `NonBillableAmtInDspCrcy` |  | |  |  | `CURR(23)` | Non Billable Hours Amount in Display Currency |
| `WIPHoursQuantity` |  | |  |  | `QUAN(23)` | WIP Hours Quantity |
| `WIPAmtInDisplayCurrency` |  | |  |  | `CURR(23)` | WIP Amount in Display Currency |
| `CapAmountInDspCrcy` |  | |  |  | `CURR(23)` | Cap Amount in Display Currency |
| `CompletedWorkQuantity` |  | |  |  | `QUAN(23)` | Completed Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `TechnicalCompletionDate` |  | |  |  | `DATS(8)` | Technically complete date |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `_CurrencyField` | | ✓ | | | | |
| `_CurrencyField1` | | ✓ | | | | |
| `_RAKeyValueHelp` | | ✓ | | | | |
| `_ProjectManagerBP` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ObjectType` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_ServiceDocumentTypeNew` | | ✓ | | | | |
| `_ServiceDocumentNew` | | ✓ | | | | |
| `_ServiceDocumentItemNew` | | ✓ | | | | |
| `_ServiceContractNew` | | ✓ | | | | |
| `_ServiceContractItemNew` | | ✓ | | | | |
| `_ServiceContractTypeNew` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_BillingWBSElement` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_BillingWBSElementExternalID` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ProjectManager` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyField` | `I_MargAnlysRptCurrencyField` | [0..1] |
| `_CurrencyField1` | `I_PrjMargAnlysRptCrcyFld` | [0..1] |
| `_RAKeyValueHelp` | `I_Rakeyvaluehelp` | [0..1] |
| `_ProjectManagerBP` | `I_BusinessPartner` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_DocumentStore` | `I_EngmntPrjMargOvwDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPRJMARGOVWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPRJMARGOVWCUBE')/$value)*

```abap
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck:  #MANDATORY
@Analytics.dataCategory: #CUBE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: ['USE_HEX_PLAN']
@EndUserText.label: 'Engagement Project Margin - Cube'
define view entity I_EngmntPrjMargOvwCube
  with parameters
    @Consumption.defaultValue: 'YPS2'
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from P_EngagementProjectMargin(
                 P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                 ) as EngagementProjectMargin

  association [0..1] to I_MargAnlysRptCurrencyField  as _CurrencyField    on  $projection.CurrencyField = _CurrencyField.CurrencyField
  association [0..1] to I_PrjMargAnlysRptCrcyFld     as _CurrencyField1   on  $projection.CurrencyField = _CurrencyField1.CurrencyField
  association [0..1] to I_Rakeyvaluehelp             as _RAKeyValueHelp   on  $projection.resultanalysisinternalid = _RAKeyValueHelp.ResultAnalysisInternalID
  association [0..1] to I_BusinessPartner            as _ProjectManagerBP on  $projection.ProjectManager = _ProjectManagerBP.BusinessPartner
  association [0..1] to I_PlanningCategory           as _PlanningCategory on  $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [1..1] to E_JournalEntryItem           as _Extension_acdoca on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                          and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                          and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                          and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                          and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem as _Extension_acdocp on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                          and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                          and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
  //document store association
  association [0..1] to I_EngmntPrjMargOvwDSt        as _DocumentStore    on  _DocumentStore.tra_ledger        = $projection.Ledger
                                                                          and _DocumentStore.tra_sourceledger  = $projection.SourceLedger
                                                                          and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                          and _DocumentStore.tra_fiscalyear    = $projection.FiscalYear
                                                                          and _DocumentStore.tra_00008         = $projection.AccountingDocument
                                                                          and _DocumentStore.tra_00030         = $projection.LedgerGLLineItem
                                                                          and _DocumentStore.tra_00018         = $projection.FinancialPlanningReqTransSqnc
                                                                          and _DocumentStore.tra_00003         = $projection.FinancialPlanningDataPacket
                                                                          and _DocumentStore.tra_00015         = $projection.FinancialPlanningEntryItem
                                                                          and _DocumentStore.tra_semantictag   = $projection.SemanticTag
                                                                          and _DocumentStore.tra_currencyfield = $projection.CurrencyField
                                                                          and _DocumentStore.tra_00025         = $projection.LineIsSemTagCalculated

{
      @ObjectModel.foreignKey.association: '_Ledger'
      @Environment.sql.passValue: true
  key Ledger,

      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Environment.sql.passValue: true
  key CompanyCode,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      @Environment.sql.passValue: true
  key FiscalYear,

  key AccountingDocument,

  key LedgerGLLineItem,

  key FinancialPlanningReqTransSqnc,

  key FinancialPlanningDataPacket,

  key FinancialPlanningEntryItem,

      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,

      @ObjectModel.foreignKey.association: '_CurrencyField1'
      @Environment.sql.passValue: true
  key CurrencyField,

  key LineIsSemTagCalculated,

      ActualPlanCode,
      
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      PlanningCategory,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'
      //@Semantics.fiscal.year: true
      LedgerFiscalYear,

      @Semantics.fiscal.period: true
      FiscalPeriod,

      PostingDate,

      EvtBsdRevnRecgnLastEvalDate,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      OriginProfitCenter,

      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,

      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,

      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,

      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,

      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,

      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      CustomerSupplierIndustry,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,

      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,

      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      BusinessTransactionType,

      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,

      OrganizationDivision,

      Segment,

      //      WBSElement,

      WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,

      @Semantics.booleanIndicator:true
      WBSElementIsBillingElement,
      
      @EndUserText.label: 'Billing Element'
      BillingWBSElementInternalID,

      @ObjectModel.foreignKey.association: '_BillingWBSElementExternalID'
      BillingWBSElementExternalID,

      //      @ObjectModel.foreignKey.association: '_RAKeyValueHelp'
      _BillingWBSElement.ResultAnalysisInternalID,

      @ObjectModel.foreignKey.association: '_ProjectManager'
      @EndUserText.label: 'Project Manager'
      ProjectManagerWorkAgreement,
      ProjectManagerName,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FiscalYearVariant,

      @ObjectModel.foreignKey.association: '_ServiceContractNew'
      ServiceContract,

      @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
      ServiceContractItem,

      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,

      BusinessSolutionOrderItem,

      ProviderContract,

      ProviderContractItem,

      @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
      ServiceContractType,

      @ObjectModel.foreignKey.association: '_ObjectType'
      AccountAssignmentType,

      @ObjectModel.foreignKey.association: '_ServiceDocumentNew'
      ServiceDocument,

      @ObjectModel.foreignKey.association: '_ServiceDocumentItemNew'
      ServiceDocumentItem,

      @ObjectModel.foreignKey.association: '_ServiceDocumentTypeNew'
      ServiceDocumentType,

      @ObjectModel.foreignKey.association: '_Project'
      Project,

      ProjectInternalID,

      @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query: {axis: #FREE}
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,

      @ObjectModel.foreignKey.association: '_ProjectProfileCode'
      ProjectProfileCode as ProjectProfileCode,

      BusinessPartner,

      BusinessPartnerFullName,

      OrderID,

      Supplier,

      AccountingDocumentType,

      FinancialAccountType,

      CostCenter,

      AssetClass,

      ValuationArea,

      BillableControl,

      Material,

      ServicesRenderedDate,

      WorkPackage,

      WorkItem,
      
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      CostAnalysisResource,

      TimeSheetOvertimeCategory,

      PersonnelNumber,

      @ObjectModel.foreignKey.association: '_EngagementProjectStage'
      EngagementProjectStage,

      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      OriginCostCtrActivityType,

      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,

      IsCommitment,

      Currency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      @OData.v2.amount.noDecimalShift: true
      @EndUserText.label: 'Amount in Display Currency'
      AmountInDisplayCurrency,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      BilledRevenueAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ActualSalesDdctdInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ActualCostAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ActlFixedCostInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedRevnAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedCOGSAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RevenueAdjustmentAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      COGSAdjustmentAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DeferredRevenueAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DeferredCOGSAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      AccruedRevenueAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      AccruedCOGSAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      Reserves,

      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      ProjAndSlsOrdStkAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedMargAmtInDisplayCrcy,

      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      CostOfGoodsSoldAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      FxdCOGSAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      InptPrVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      OutpPrVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      InptQtyVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RsceUsgeVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      LotSizeVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      InptRmngVarcAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      AdminOverheadAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      SalesOverheadAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      MarketingOvhdAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RnDOverheadAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      PlannedCosAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      PlannedRevenueAmtInDspCrcy,

      //      @Aggregation.default: #SUM
      //      @Semantics.amount.currencyCode: 'Currency'
      //      MnlContrAccrPnLItmAmtInDspCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      UnbilledRevnInDspCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      MnlContrAccrBalShtAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      WIPProjAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      MatlStkAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      WIPProdnAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DownPaymentAmountInDspCrcy,

      // WIP Hours
      BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      Quantity,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      TimeConfirmationAmtInDspCrcy,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      ConfirmedHoursQuantity,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      BilledHoursQuantity,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      WrittenOffHoursQuantity,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      WrittenOffAmtInDspCrcy,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      NonBillableHoursQuantity,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      NonBillableAmtInDspCrcy,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      WIPHoursQuantity,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      WIPAmtInDisplayCurrency,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      CapAmountInDspCrcy,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      CompletedWorkQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      CostSourceUnit,
      @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
      @Aggregation.default: #SUM
      ActualValuationQuantity,
      @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
      @Aggregation.default: #SUM
      PlanValuationQuantity,
      
      @ObjectModel.foreignKey.association: '_ProjectManagerBP'
      ProjectManager,
      
      TechnicalCompletionDate,
      
      DocumentItemText,
      
      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////
      _Order,
      _Supplier,
      _AccountingDocumentType,
      _CurrentProfitCenter,
      _OriginProfitCenter,
      _CurrentCostCenter,
      _ServiceDocument,
      _Project,
      _ProjectExternalID,
      _ProjectBasicData,
      _ProjectProfileCode,
      _Ledger,
      _SourceLedger,
      _CompanyCode,
      //      _JournalEntry,
      _SemanticTag,
      _CustomerSupplierCountry,
      _CustomerSupplierIndustry,
      _FiscalYear,
      _Customer,
      _CustomerGroup,
      _SoldProduct,
      _SoldProductGroup,
      _ProfitCenter,
      _ControllingArea,
      _SalesDocument,
      _SalesOrder,
      _SalesOrderItem,
      _DistributionChannel,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _FunctionalArea,
      _Plant,
      _SalesOrganization,
      _SalesDistrict,
      _ShipToParty,
      _BillToParty,
      _FiscalYearVariant,
      _CurrencyField,
      _CurrencyField1,
      _ObjectType,
      _SolutionOrder,
      _ServiceDocumentTypeNew,
      _ServiceDocumentNew,
      _ServiceDocumentItemNew,
      _ServiceContractNew,
      _ServiceContractItemNew,
      _ServiceContractTypeNew,
      _LedgerFiscalYearForVariant, //Don't use this association
      _WBSElementBasicData,
      _BillingWBSElement,
      _WBSElementExternalID,
      _BillingWBSElementExternalID,
      _Material,
      _WorkPackage,
      _WorkPackageWorkItem,
      _CostAnalysisResource,
      _Employment,
      _EngagementProjectStage,
      _BaseUnit,
      _ProjectManager,
      _SubLedgerAccLineItemType,
      _RAKeyValueHelp,
      _OriginCostCtrActivityType,
      _PartnerCostCtrActivityType,
      _CostSourceUnit,
      _LedgerFiscalYearForLedger,
      _ProjectManagerBP,
      _PlanningCategory,
      
      @Analytics.association.toDocumentStorage: true
      _DocumentStore
      //      _ExtensionAcdoca

}
```
