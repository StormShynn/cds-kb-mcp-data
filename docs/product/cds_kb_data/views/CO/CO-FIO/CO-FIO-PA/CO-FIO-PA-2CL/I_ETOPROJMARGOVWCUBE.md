---
name: I_ETOPROJMARGOVWCUBE
description: "ETO Project Margin - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value
semantic_en: "ETO Project Margin - Cube"
semantic_vi: "ETO Project Margin - Cube — CDS view giao diện dựa trên P_ETOProjectMargin."
keywords:
  - "eto"
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
# I_ETOPROJMARGOVWCUBE

**ETO Project Margin - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value) |

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
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `BillingWBSElementInternalID` |  | |  |  | `NUMC(8)` |  |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectManagerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PersonWorkAgreement` |  | | `_PrjManagerNum` | `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
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
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
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
| `MnlContrAccrIncStatAmtInDC` |  | |  |  | `CURR(23)` | Manual Contract Accruals (I/S) |
| `ImminentLossRsrvAdjAmtInDC` |  | |  |  | `CURR(23)` | Imminent Loss Reserves Adj. |
| `ImmntLossRsrvBalShtAmtInDC` |  | |  |  | `CURR(23)` | Imminent Loss Reserves (B/S) |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `_PrjManager` | | ✓ | | | | |
| `_ProjectManagerBP` | | ✓ | | | | |
| `_CurrencyField` | | ✓ | | | | |
| `_BillingWBSElementBasicData` | | ✓ | | | | |
| `_BillingWBSElementExternalID` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_ProjectNew` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
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
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ProcessingStatus` | | ✓ | | | | |
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
| `_CostAnalysisResource` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrjManagerNum` | `I_PersonWorkAgreement_1` | [0..1] |
| `_PrjManager` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ProjectManagerBP` | `I_BusinessPartner` | [0..1] |
| `_CurrencyField` | `I_PrjMargAnlysRptCrcyFld` | [0..1] |
| `_BillingWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_BillingWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_ProjectNew` | `I_ProjectUnformattedID` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_DocumentStore` | `I_ETOProjMargOvwDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value)*

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
@Consumption.dbHints: ['USE_HEX_PLAN','JOIN_THRU_FILTER']
@EndUserText.label: 'ETO Project Margin - Cube'
define view entity I_ETOProjMargOvwCube
  with parameters
    @Consumption.defaultValue: 'YPS2'
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from P_ETOProjectMargin(
                 P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                 ) as ProjectMargin
  association [0..1] to I_PersonWorkAgreement_1      as _PrjManagerNum               on  $projection.ProjectManager = _PrjManagerNum.Person
  association [0..1] to I_PersonWorkAgreement_1      as _PrjManager                  on  $projection.personworkagreement = _PrjManager.PersonWorkAgreement
association [0..1] to I_BusinessPartner              as _ProjectManagerBP            on  $projection.ProjectManager = _ProjectManagerBP.BusinessPartner
  association [0..1] to I_PrjMargAnlysRptCrcyFld     as _CurrencyField               on  $projection.CurrencyField = _CurrencyField.CurrencyField
  association [0..1] to I_WBSElementBasicData        as _BillingWBSElementBasicData  on  $projection.BillingWBSElementInternalID = _BillingWBSElementBasicData.WBSElementInternalID
  association [0..1] to I_WBSElementByExternalID     as _BillingWBSElementExternalID on  $projection.BillingWBSElementExternalID = _BillingWBSElementExternalID.WBSElementExternalID
  //association [0..1] to I_ProjectByExternalID         as _ProjectExternalID          on  $projection.Project = _ProjectExternalID.ProjectExternalID
  association [1..1] to I_EnterpriseProject          as _EnterpriseProject           on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [1..1] to E_JournalEntryItem           as _Extension_acdoca            on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                     and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                     and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                     and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                     and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem as _Extension_acdocp            on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                     and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                     and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
  association [0..1] to I_ProjectUnformattedID        as _ProjectNew                 on  $projection.Project = _ProjectNew.ProjectExternalID

association [0..1] to I_ControllingDebitCreditCode as _ControllingDebitCreditCode  on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_ETOProjMargOvwDSt       as _DocumentStore                   on  _DocumentStore.tra_ledger   = $projection.Ledger
                                                                                       and _DocumentStore.tra_sourceledger       = $projection.SourceLedger
                                                                                       and _DocumentStore.tra_companycode        = $projection.CompanyCode
                                                                                       and _DocumentStore.tra_fiscalyear         = $projection.FiscalYear
                                                                                       and _DocumentStore.tra_00010 = $projection.AccountingDocument
                                                                                       and _DocumentStore.tra_00038   = $projection.LedgerGLLineItem
                                                                                       and _DocumentStore.tra_00033   = $projection.FinancialPlanningReqTransSqnc
                                                                                       and _DocumentStore.tra_00004     = $projection.FinancialPlanningDataPacket
                                                                                       and _DocumentStore.tra_00043      = $projection.FinancialPlanningEntryItem
                                                                                       and _DocumentStore.tra_semantictag      = $projection.SemanticTag
                                                                                       and _DocumentStore.tra_currencyfield      = $projection.CurrencyField
                                                                                       and _DocumentStore.tra_00035      = $projection.LineIsSemTagCalculated
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
      @ObjectModel.foreignKey.association: '_CurrencyField'
      @Environment.sql.passValue: true
  key CurrencyField,
  key LineIsSemTagCalculated,
      ActualPlanCode,
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
    //  @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
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
    //  @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,

      OrganizationDivision,

      Segment,

      //      WBSElement,
      @ObjectModel.foreignKey.association: '_ProcessingStatus'
      ProcessingStatus,

      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_BillingWBSElementBasicData'
     // @EndUserText.label: 'Billing Element'
      BillingWBSElementInternalID,
      @ObjectModel.foreignKey.association: '_BillingWBSElementExternalID'
      BillingWBSElementExternalID,

      ProjectManagerUUID,
      @ObjectModel.foreignKey.association: '_ProjectManagerBP'
      ProjectManager,
      @ObjectModel.foreignKey.association: '_PrjManager'
      _PrjManagerNum.PersonWorkAgreement,
      _PrjManager,

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

      @ObjectModel.foreignKey.association: '_ProjectNew'
      Project,

      ProjectInternalID,

     // @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,

      @ObjectModel.foreignKey.association: '_ProjectProfileCode'
      ProjectProfileCode as ProjectProfileCode,

      @ObjectModel.foreignKey.association: '_Order'
      OrderID,

      Supplier,
      AccountingDocumentType,
      FinancialAccountType,
      CostCenter,
      AssetClass,
      ValuationArea,
      BillableControl,
     // Material,
     
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      ServicesRenderedDate,
     // WorkPackage,
    //  WorkItem,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'    
      CostAnalysisResource,
      TimeSheetOvertimeCategory,
      PersonnelNumber,

      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      OriginCostCtrActivityType,

      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,

      IsCommitment,

      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      Currency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      @OData.v2.amount.noDecimalShift: true
      //@EndUserText.label: 'Amount in Display Currency'
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

      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      InptPrVarcAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      OutpPrVarcAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      InptQtyVarcAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      RsceUsgeVarcAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      LotSizeVarcAmtInDspCrcy,
      //      @Semantics.amount.currencyCode: 'Currency'
      //      @Aggregation.default: #SUM
      //      InptRmngVarcAmtInDspCrcy,

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

      //EBRR CURRENCY FIELD
      //'Mnl Con Accr (I/S)'
      //      @Aggregation.default: #SUM
      //      @Semantics.amount.currencyCode: 'Currency'
      //      MnlContrAccrPnLItmAmtInDspCrcy,

      //'Unbilled Revenue'
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      UnbilledRevnInDspCrcy,

      //'Man Con Accr (B/S)'
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

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      MnlContrAccrIncStatAmtInDC,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ImminentLossRsrvAdjAmtInDC,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ImmntLossRsrvBalShtAmtInDC,
      
//      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      ProjectMargin.PurchasingDocument,
          
      @ObjectModel.foreignKey.association: '_EnterpriseProject'
      ProjectUUID,
          
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
      _SemanticTag,
      _CustomerSupplierCountry,
     // _CustomerSupplierIndustry,
      _FiscalYear,
      _Customer,
      _CustomerGroup,
//      _PurchasingDocument,
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
      _Product,
      _Plant,
      _SalesOrganization,
      _SalesDistrict,
      _ShipToParty,
      _BillToParty,
      _WBSElementExternalID,
      _BillingWBSElementBasicData,
      _BillingWBSElementExternalID,
      _ProcessingStatus,
      _FiscalYearVariant,
      _CurrencyField,
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
      _CostAnalysisResource,     
      _OriginCostCtrActivityType,
      _PartnerCostCtrActivityType,
      _LedgerFiscalYearForLedger,
      _ProjectManagerBP,
      _EnterpriseProject,
      _ProjectNew,
      @Analytics.association.toDocumentStorage: true   
      _DocumentStore,
      _ControllingDebitCreditCode
      //_ProjectExternalID

}
```
