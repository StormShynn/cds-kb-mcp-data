---
name: I_ACTPLNJRNLENTRITEMCUBE_2
description: "Actual Plan of Journal Entry Item - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTPLNJRNLENTRITEMCUBE_2')/$value
semantic_en: "Actual Plan of Journal Entry Item - Cube"
semantic_vi: "Actual Plan of Journal Entry Item - Cube — CDS view giao diện dựa trên P_ActPlnJrnlEntrItmMultiCrcy."
keywords:
  - "Actual Plan of Journal Entry Item - Cube"
  - "actual"
  - "plan"
  - "journal"
  - "entry"
  - "item"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - plan
---
# I_ACTPLNJRNLENTRITEMCUBE_2

**Actual Plan of Journal Entry Item - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTPLNJRNLENTRITEMCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role Field |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  |  | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ControllingDebitCreditCode` |  | |  | `cast(APJEI.ControllingDebitCreditCode as co_belkz)` | `CHAR(1)` | CO Debit/Credit Indicator |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  | `cast (APJEI.REServiceChargeKey as rescsckey)` | `CHAR(4)` | Service Charge Key |
| `RESettlementUnitID` |  | |  | `cast (APJEI.RESettlementUnitID as rescsuid)` | `CHAR(5)` | Settlement Unit |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `AmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ActualAmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Valuation Quantity |
| `PlanAmountInDisplayCurrency` |  | |  |  | `DEC(23)` |  |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `_SubLedgerAcctLineItemType` |  | |  | `_SubLedgerAccLineItemType` |  |  |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CurrencyField` | | ✓ | | | | |
| `_LedgerFiscalYearForCalendar` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CurrencyField` | `I_MktSgmtRepCrcyFld` | [0..1] |
| `_LedgerFiscalYearForCalendar` | `I_CalendarYear` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_DocumentStore` | `I_ActPlnJrnlEntrItemDSt_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTPLNJRNLENTRITEMCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTPLNJRNLENTRITEMCUBE_2')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Actual Plan of Journal Entry Item - Cube'
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL
            }
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN','NO_HEX_INDEX_JOIN' ]
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
define view entity I_ActPlnJrnlEntrItemCube_2
  with parameters
  P_Ledger           : fins_ledger
  
  as select from P_ActPlnJrnlEntrItmMultiCrcy as APJEI

  association [1..1] to I_CalendarMonth              as _CalendarMonth     on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter   on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
//  association [1..1] to I_YearMonth                  as _CalendarYearMonth on  $projection.YearMonth = _CalendarYearMonth.YearMonth
  association [0..1] to I_MktSgmtRepCrcyFld          as _CurrencyField     on  $projection.CurrencyField = _CurrencyField.CurrencyField
  
//  association [0..1] to I_FiscalYearForLedger        as _LedgerFiscalYearForLedger  on  $projection.LedgerFiscalYear = _LedgerFiscalYearForLedger.FiscalYear
//                                                                                    and $projection.CompanyCode      = _LedgerFiscalYearForLedger.CompanyCode
//                                                                                    and $projection.Ledger           = _LedgerFiscalYearForLedger.Ledger
  
  association [0..1] to I_CalendarYear as _LedgerFiscalYearForCalendar on $projection.LedgerFiscalYear = _LedgerFiscalYearForCalendar.CalendarYear
  
  association of exact one to exact one E_JournalEntryItem as _Extension_acdoca  on  APJEI.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                 and APJEI.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                 and APJEI.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                 and APJEI.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                 and APJEI.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association of exact one to exact one E_FinancialPlanningEntryItem as _Extension_acdocp  on  APJEI.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                           and APJEI.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                           and APJEI.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
  association [0..1] to I_ControllingDebitCreditCode as _ControllingDebitCreditCode  on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode

  //document store association
  association [0..1] to I_ActPlnJrnlEntrItemDSt_2    as _DocumentStore    on  _DocumentStore.tra_sourceledger        = $projection.SourceLedger
                                                                          and _DocumentStore.tra_ledger  = $projection.Ledger
                                                                          and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                          and _DocumentStore.tra_fiscalyear    = $projection.FiscalYear
                                                                          and _DocumentStore.tra_00006         = $projection.AccountingDocument
                                                                          and _DocumentStore.tra_00056         = $projection.FinancialPlanningReqTransSqnc
                                                                          and _DocumentStore.tra_00005         = $projection.FinancialPlanningDataPacket
                                                                          and _DocumentStore.tra_00045         = $projection.ActualPlanJournalEntryItem
                                                                          and _DocumentStore.tra_currencyfield = $projection.CurrencyField


{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key APJEI.SourceLedger,                  //key
      @ObjectModel.foreignKey.association: '_Ledger'
  key APJEI.Ledger,                        //key
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key APJEI.CompanyCode,                   //key
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key APJEI.FiscalYear,                    //key
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key APJEI.AccountingDocument,            //key
  key APJEI.FinancialPlanningReqTransSqnc, //key
  key APJEI.FinancialPlanningDataPacket,   //key
      // field ActualPlanJournalEntryItem required for representative key definition LedgerGLLineItem|FinancialPlanningEntryItem
  key APJEI.ActualPlanJournalEntryItem, //key
      @ObjectModel.foreignKey.association: '_CurrencyField'
      @Environment.sql.passValue: true
  key APJEI.CurrencyField,
      APJEI.LedgerGLLineItem, //key

      APJEI.FinancialPlanningEntryItem, //key
      @ObjectModel.foreignKey.association: '_ControllingArea'
      APJEI.ControllingArea,
//      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'


      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForCalendar'
//      @Semantics.fiscal.year: true
      APJEI.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      APJEI.ChartOfAccounts,

      APJEI.ActualPlanCode,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BusinessArea'
      APJEI.BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      APJEI.ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      APJEI.CostCenter,
      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      APJEI.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      APJEI.ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      APJEI.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      APJEI.PartnerProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      APJEI.WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      APJEI.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      APJEI.PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      APJEI.PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      APJEI.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      APJEI.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      APJEI.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      APJEI.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_Order'
      APJEI.OrderID,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      APJEI.WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      APJEI.WorkItem,

      APJEI.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      APJEI.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      APJEI.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      APJEI.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      APJEI.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      APJEI.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      APJEI.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      APJEI.PartnerCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
//      APJEI.PartnerOrder_2 as PartnerOrder,
      APJEI.PartnerOrder,
      APJEI.PartnerSalesDocument,
      APJEI.PartnerProjectNetwork,
      APJEI.PartnerProjectNetworkActivity,
      APJEI.PartnerBusinessProcess,
      APJEI.PartnerCostObject,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      APJEI.PartnerCompany,
      APJEI.OriginCostCenter,
      APJEI.OriginProfitCenter,
      APJEI.OriginCostCtrActivityType,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_00 Universal Journal Entry: Transaction
      ////////////////////////////////////////////////////////////////////////////////////

      APJEI.ReferenceDocumentType,
      APJEI.ReferenceDocumentContext,
      APJEI.ReferenceDocument,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      APJEI.PostingDate,
      APJEI.DocumentDate,
      @Semantics.fiscal.period: true
      APJEI.FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      APJEI.FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      APJEI.FiscalYearVariant,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      APJEI.PlanningCategory,
      APJEI.ServicesRenderedDate,
      @Analytics.internalName: #GLOBAL
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      cast(APJEI.ControllingDebitCreditCode as co_belkz) as ControllingDebitCreditCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      APJEI.AccountAssignmentType,
      APJEI.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_BillableControl'
      APJEI.BillableControl,

      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      APJEI.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      APJEI.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      APJEI.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      APJEI.AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      APJEI.FinancialAccountType,
      APJEI.AssignmentReference,

      APJEI.ControllingObjectClass,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////
      APJEI.DocumentItemText,

      @ObjectModel.foreignKey.association: '_Plant'
      APJEI.Plant,
      @ObjectModel.foreignKey.association: '_Product'
      APJEI.Product,
      @ObjectModel.foreignKey.association: '_Customer'
      APJEI.Customer,
      @ObjectModel.foreignKey.association: '_Supplier'
      APJEI.Supplier,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      APJEI.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      APJEI.SalesDocumentItem,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceDocumentType,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceDocument,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceDocumentItem,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceContractType,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceContract,
      @Analytics.internalName: #LOCAL
      APJEI.ServiceContractItem,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      APJEI.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      APJEI.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      APJEI.DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      APJEI.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      APJEI.SoldProduct,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SoldProductGroup_2'
      APJEI.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      APJEI.CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      APJEI.CustomerSupplierCountry,
      APJEI.CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      APJEI.SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      APJEI.BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      APJEI.ShipToParty,

      APJEI.CustomerSupplierCorporateGroup,
      APJEI.IsStatisticalOrder,
      APJEI.IsStatisticalCostCenter,
      APJEI.IsStatisticalSalesDocument,
      APJEI.WBSIsStatisticalWBSElement,
      APJEI.WorkCenterInternalID,
      APJEI.OrderOperation,
      APJEI.OrderItem,
      APJEI.SourceReferenceDocumentType,
      APJEI.SourceLogicalSystem,
      APJEI.SourceReferenceDocumentCntxt,
      APJEI.SourceReferenceDocument,
      APJEI.SourceReferenceDocumentItem,
      APJEI.SourceReferenceDocSubitem,
      APJEI.IsCommitment,

      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      APJEI.CashLedgerCompanyCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      APJEI.CashLedgerAccount,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      APJEI.FinancialManagementArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundsCenter'
      APJEI.FundsCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundedProgram'
      APJEI.FundedProgram,
      @ObjectModel.foreignKey.association: '_Fund'
      APJEI.Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      APJEI.GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      APJEI.BudgetPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerFund'
      APJEI.PartnerFund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      APJEI.PartnerGrant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      APJEI.PartnerBudgetPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      APJEI.PubSecBudgetAccount,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      APJEI.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      APJEI.PubSecBudgetCnsmpnDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      APJEI.PubSecBudgetCnsmpnFsclPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      APJEI.PubSecBudgetCnsmpnFsclYear,
      @Analytics.internalName: #LOCAL
      APJEI.PubSecBudgetIsRelevant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      APJEI.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      APJEI.PubSecBudgetCnsmpnAmtType,
      @Analytics.internalName: #LOCAL
      APJEI.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      APJEI.SponsoredClass,
      @Analytics.internalName: #LOCAL
      APJEI.GteeMBudgetValidityNumber,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetProcess'
      APJEI.BudgetProcess,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetingType'
      APJEI.BudgetingType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SubLedgerAcctLineItemType'
      APJEI.SubLedgerAcctLineItemType,
      APJEI.AssetDepreciationArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      APJEI.MasterFixedAsset,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FixedAsset'
      APJEI.FixedAsset,
      APJEI.AssetAcctTransClassfctn,
      APJEI.AssetClass,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      APJEI.JointVenture,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureEquityGroup,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureCostRecoveryCode,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureProductionDate,
      @Analytics.internalName: #LOCAL
      APJEI.JointVentureAccountingActivity,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOCP_SI_RE   ACDOCP: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      APJEI.REBusinessEntity,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateBuilding,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateProperty,
      @Analytics.internalName: #LOCAL
      APJEI.RERentalObject,
      @Analytics.internalName: #LOCAL
      APJEI.RealEstateContract,
      @Analytics.internalName: #LOCAL
      cast (APJEI.REServiceChargeKey as rescsckey) as REServiceChargeKey,
      @Analytics.internalName: #LOCAL
      cast (APJEI.RESettlementUnitID as rescsuid) as RESettlementUnitID,
      @Analytics.internalName: #LOCAL
      APJEI.SettlementReferenceDate,


      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      APJEI.Currency,
      APJEI.CostSourceUnit,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      APJEI.AmountInDisplayCurrency,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ValuationQuantity,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BaseUnit'
      APJEI.BaseUnit,
      @Analytics.internalName: #LOCAL
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      APJEI.Quantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      APJEI.ActualAmountInDisplayCurrency,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.ActualValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      APJEI.PlanAmountInDisplayCurrency,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      APJEI.PlanValuationQuantity,
      
      APJEI._CalendarDate.CalendarYear                                                                                                                                                                                                           as CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      APJEI._CalendarDate.CalendarQuarter                                                                                                                                                                                                        as CalendarQuarter,
//      APJEI._CalendarDate.YearQuarter                                                                                                                                                                                                            as YearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      APJEI._CalendarDate.CalendarMonth                                                                                                                                                                                                          as CalendarMonth,
//      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
//      APJEI._CalendarDate.YearMonth                                                                                                                                                                                                              as YearMonth,
      APJEI._CalendarDate.CalendarWeek                                                                                                                                                                                                           as CalendarWeek,
//      APJEI._CalendarDate.YearWeek                                                                                                                                                                                                               as YearWeek,
      APJEI._FiscalCalendarDate.FiscalQuarter                                                                                                                                                                                                    as FiscalQuarter,
      APJEI._FiscalCalendarDate.FiscalWeek                                                                                                                                                                                                       as FiscalWeek,
      APJEI._FiscalCalendarDate.FiscalYearQuarter                                                                                                                                                                                                as FiscalYearQuarter,
      APJEI._FiscalCalendarDate.FiscalYearWeek                                                                                                                                                                                                   as FiscalYearWeek,

      APJEI._JournalEntry,
      APJEI._SourceLedger,
      APJEI._ControllingArea,
      APJEI._Ledger,
      APJEI._CompanyCode,
      APJEI._GLAccountInCompanyCode,
      APJEI._GLAccountInChartOfAccounts,
      APJEI._ChartOfAccounts,
      APJEI._FiscalYear,
      APJEI._FiscalPeriodForVariant,
      APJEI._FiscalYearPeriodForVariant,
      APJEI._CalendarDate,
      APJEI._FiscalCalendarDate,
      APJEI._BusinessArea,
      APJEI._ProfitCenter,
      APJEI._CurrentProfitCenter,
      APJEI._CostCenter,
      APJEI._CurrentCostCenter,
      APJEI._AccountAssignmentType,
      APJEI._ProjectBasicData,
      APJEI._ProjectExternalID,
      APJEI._PartnerProjectBasicData,
      APJEI._PartnerProjectExternalID,
      APJEI._WBSElementBasicData,
      APJEI._WBSElementExternalID,
      APJEI._PartnerWBSElementBasicData,
      APJEI._PartnerWBSElementExternalID,
      APJEI._FunctionalArea,
      APJEI._Segment,
      APJEI._CostCtrActivityType,
      APJEI._CostAnalysisResource,
      APJEI._InternalOrder,
      APJEI._Order,
      APJEI._WorkPackageWorkItem,
      APJEI._WorkPackage,
      APJEI._PartnerCompanyCode,
      APJEI._PartnerBusinessArea,
      APJEI._PartnerProfitCenter,
      APJEI._PartnerCostCenter,
      APJEI._PartnerFunctionalArea,
      APJEI._PartnerSegment,
      APJEI._PartnerCostCtrActivityType,
      APJEI._PartnerOrder_2,
      APJEI._PartnerCompany,
      APJEI._OriginProfitCenter,
      APJEI._OriginCostCenter,
      APJEI._OriginCostCtrActivityType,
      APJEI._FiscalYearVariant,
      APJEI._PersonWorkAgreement_1,
      APJEI._BusinessTransactionCategory,
      APJEI._BusinessTransactionType,
      APJEI._FinancialTransactionType,
      APJEI._AccountingDocumentType,
      APJEI._FinancialAccountType,
      APJEI._Plant,
      APJEI._Product,
      APJEI._Customer,
      APJEI._CustomerCompany,
      APJEI._Supplier,
      APJEI._SupplierCompany,
      APJEI._SalesDocument,
      APJEI._SalesDocumentItem,
      APJEI._ServiceDocumentType,
      APJEI._ServiceDocument,
      APJEI._ServiceDocumentItem,
      APJEI._ServiceContract,
      APJEI._ServiceContractItem,
      APJEI._ServiceContractType,
      APJEI._BillingDocumentType,
      APJEI._SalesOrganization,
      APJEI._DistributionChannel,
      APJEI._OrganizationDivision,
      APJEI._SoldProduct,
      APJEI._SoldProductGroup_2,
      APJEI._CustomerGroup,
      APJEI._BaseUnit,
      APJEI._CostSourceUnit,
      APJEI._CustomerSupplierCountry,
      APJEI._CustomerSupplierIndustryText,
      APJEI._SalesDistrict,
      APJEI._BillToParty,
      APJEI._ShipToParty,
      APJEI._WorkCenter,
      APJEI._PlanningCategory,
      _CalendarMonth,
      _CalendarQuarter,
//      _CalendarYearMonth,
      APJEI._BillableControl,
      APJEI._FinancialManagementArea,
      APJEI._Fund,
      APJEI._Grant,
      APJEI._BudgetPeriod,

      APJEI._CashLedgerCompanyCode,
      APJEI._CashLedgerAccount,
      APJEI._FundsCenter,
      APJEI._FundedProgram,
      APJEI._PartnerFund,
      APJEI._PartnerGrant,
      APJEI._PartnerBudgetPeriod,
      APJEI._PubSecBudgetAccountCoCode,
      APJEI._PubSecBudgetAccount,
      APJEI._PubSecBudgetCnsmpnDate,
      APJEI._PubSecBudgetCnsmpnFsclPeriod,
      APJEI._PubSecBudgetCnsmpnFsclYear,
      APJEI._PubSecBudgetCnsmpnType,
      APJEI._PubSecBudgetCnsmpnAmtType,

      APJEI._BudgetProcess,
      APJEI._BudgetingType,

      APJEI._MasterFixedAsset,
      APJEI._FixedAsset,
      APJEI._SubLedgerAccLineItemType as _SubLedgerAcctLineItemType,
      _ControllingDebitCreditCode,
      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
//      @API.element.releaseState: #DEPRECATED
//      @VDM.lifecycle.status:    #DEPRECATED
//      APJEI.GLAccountAuthorizationGroup,
//      @API.element.releaseState: #DEPRECATED
//      @VDM.lifecycle.status:    #DEPRECATED
//      APJEI.SupplierBasicAuthorizationGrp,
//      @API.element.releaseState: #DEPRECATED
//      @VDM.lifecycle.status:    #DEPRECATED
//      APJEI.CustomerBasicAuthorizationGrp,
//      @API.element.releaseState: #DEPRECATED
//      @VDM.lifecycle.status:    #DEPRECATED
//      APJEI.AcctgDocTypeAuthorizationGroup,
      APJEI.ValuationArea,
      @Analytics.association.toDocumentStorage: true
      _DocumentStore,
//      _LedgerFiscalYearForLedger,
      _LedgerFiscalYearForCalendar,
      _CurrencyField
}
where
       Ledger           = $parameters.P_Ledger
```
