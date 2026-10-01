---
name: C_PUBSECFINACCTGITEMQRY
description: "Budgetary Accounting Items Query"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY')/$value
semantic_en: "Budgetary Accounting Items Query"
semantic_vi: "Budgetary Accounting Items Query — CDS view tiêu dùng dựa trên Budgetary Accounting Items Query."
keywords:
  - "budgetary"
  - "accounting"
  - "items"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "fund"
  - "fiscal"
  - "year"
tags:
  - PSM
  - account
  - bo:companycode
  - budget
  - component:PSM-FM-IS
  - consumption-view
  - PSM-FM
  - PSM-FM-IS
---
# C_PUBSECFINACCTGITEMQRY

**Budgetary Accounting Items Query**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount( Cube.AmountInCompanyCodeCurrency )` | `DECF(34)` |  |
| `AmountInTransactionCurrency` |  | |  | `curr_to_decfloat_amount( Cube.AmountInTransactionCurrency )` | `DECF(34)` |  |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount( Cube.AmountInGlobalCurrency )` | `DECF(34)` |  |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECFINACCTGITEMQRY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Budgetary Accounting Items Query'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     internalName: #LOCAL,     
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]     
}
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY

define transient view entity C_PubSecFinAcctgItemQry 
provider contract analytical_query 
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @AnalyticsDetails.query.variableSequence : 30
    P_KeyDate: vdm_v_key_date
  as projection on  I_PubSecFinAcctgItemCube as Cube
{

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true}
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
        resultElement: 'Ledger', binding: [
        { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
       }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.Ledger,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 10
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'CompanyCode'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.CompanyCode,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 50
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'GLAccount'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.GLAccount,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 100
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'Fund'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.Fund,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
  @AnalyticsDetails.query.variableSequence: 60
  @AnalyticsDetails.query.axis: #FREE
 @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.LedgerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FiscalYear,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 70
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PostingDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'AccountingDocument'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.AccountingDocument,

  // PSM: Additional detail
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.IsCommitment,

  ///////////////////////////////////////////////////////////////////////
  // Measures - Amounts
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  Cube.CompanyCodeCurrency,
  @AnalyticsDetails.query.axis: #FREE
  Cube.TransactionCurrency,
  @AnalyticsDetails.query.axis: #FREE
  Cube.GlobalCurrency,
  
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( Cube.AmountInCompanyCodeCurrency ) as  AmountInCompanyCodeCurrency,
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.hidden : true
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( Cube.AmountInTransactionCurrency ) as AmountInTransactionCurrency,
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #SUM
  curr_to_decfloat_amount( Cube.AmountInGlobalCurrency ) as AmountInGlobalCurrency,
  
  ///////////////////////////////////////////////////////////////////////
  // Dimensions
  ///////////////////////////////////////////////////////////////////////

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.ChartOfAccounts,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FinancialManagementArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FiscalYearVariant,  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.DebitCreditCode,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.AccountingDocumentType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PostingKey,

  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 140
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.CostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.AccountingDocumentItem,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.DocumentDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.LedgerGLLineItem,
//  @AnalyticsDetails.query.axis: #FREE
//  Cube.CreationDate,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.DocumentItemText,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.MasterFixedAsset,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FixedAsset,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 150
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.WBSElementExternalID,  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 130
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @Consumption.semanticObject: 'FunctionalArea'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FunctionalArea,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 110
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'BudgetPeriod'
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.BudgetPeriod,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 160
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.GrantID,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.BusinessProcess,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.BusinessTransactionType,
  
  // New Cash Ledger Fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.CashLedgerCompanyCode,
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  @AnalyticsDetails.query.axis: #FREE
  Cube.CashLedgerAccount,
  // New Public Sector fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
    @UI.textArrangement: #TEXT_LAST
  Cube.PubSecBudgetAccountCoCode,
  @AnalyticsDetails.query.axis: #FREE
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetAccount,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetCnsmpnDate,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetCnsmpnFsclPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetCnsmpnFsclYear,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetCnsmpnType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetCnsmpnAmtType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBudgetIsRelevant,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PubSecBdgtAcctRevnExpnCode,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.FundType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.SponsoredClass,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.SponsoredProgram,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'PurchaseOrder'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PurchaseOrder,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'PurchaseRequisition'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PurchaseRequisition,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.semanticObject: 'EarmarkedFundsDocument'
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.EarmarkedFundsDocument,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.OriginCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerBudgetPeriod,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerCostCenter,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerFunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerFund,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerGrant,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.keyDisplay : #NOT_COMPOUND
  Cube.PartnerWBSElementExternalID
  
}
```
