---
name: I_RAOPENREVENUEPERPERIODCUBE_4
description: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_4')/$value
semantic_en: "This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?"
semantic_vi: "Waterfall Report New Version - Cube — CDS view giao diện dựa trên R_RAOpenRevenuePerPeriod."
keywords:
  - "Waterfall Report New Version - Cube"
  - "waterfall"
  - "report"
  - "new"
  - "version"
  - "cube"
  - "performance"
  - "obligation"
  - "fiscal"
  - "year"
  - "period"
  - "revn"
  - "acctg"
  - "condition"
  - "category"
  - "ledger"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - plan
  - bo:purchaseorder
---
# I_RAOPENREVENUEPERPERIODCUBE_4

**This CDS views provides an explanation of when the entity expects to recognize revenue of the remaining performance obligations. This CDS view provides the prerequisites for answering the following business questions: What is the to-be recognized revenue in document currency with time bands, such as, by fiscal year, fiscal quarter, or fiscal period? What is the to-be recognized revenue for each account assignment, for example, by profit centre? What is the to-be recognized revenue for each performance obligation type?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` | ✓ | |  |  | `CHAR(16)` | Performance Obligation |
| `FiscalYearPeriod` | ✓ | |  |  | `NUMC(7)` | Fiscal Year Period |
| `RevnAcctgConditionCategory` | ✓ | |  |  | `CHAR(1)` | Price or Cost Condition |
| `Ledger` | ✓ | | `_LedgerCompanyCodeCrcyRoles` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `BandFiscalYearPeriodText` |  | |  |  | `SSTR(15)` | FiscalYearPeriod for reporting Disclosure 120 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `RARecognizedRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` |  |
| `RecgdCatchUpAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` |  |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `PerfOblgnEventType` |  | |  |  | `CHAR(2)` | Event Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Is Blocked |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order ID |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item ID |
| `RAContractIsUniversal` |  | | `_I_RevenueAccountingContract` | `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |
| `_E_RAPerformanceObligation` | `E_RAPerformanceObligation` | [1..1] |
| `_E_RevenueAccountingContract` | `E_RevenueAccountingContract` | [1..1] |
| `_I_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_4')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAOPENREVENUEPERPERIODCUBE_4')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Analytics.dataCategory: #CUBE
@Analytics.technicalName: 'IRAOPNRVNPRDCB4'
@Analytics.internalName: #LOCAL


@EndUserText.label: 'Waterfall Report New Version - Cube'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { sizeCategory: #XXL, serviceQuality: #D, dataClass: #MIXED }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_RAOpenRevenuePerPeriodCube_4   with parameters
    P_FromFiscalYearPeriod  : fins_fyearperiod,
    P_ToFiscalYearPeriod    : fins_fyearperiod

  as select from R_RAOpenRevenuePerPeriod (
                   P_FromFiscalYearPeriod   : $parameters.P_FromFiscalYearPeriod,
                   P_ToFiscalYearPeriod     : $parameters.P_ToFiscalYearPeriod) as PeriodicOpenRevenue
    inner join I_LedgerCompanyCodeCrcyRoles as _LedgerCompanyCodeCrcyRoles on
    PeriodicOpenRevenue.CompanyCode = _LedgerCompanyCodeCrcyRoles.CompanyCode and
    PeriodicOpenRevenue.AccountingPrinciple = _LedgerCompanyCodeCrcyRoles.AccountingPrinciple
  inner join I_Ledger as _Ledger on
    _Ledger.Ledger = _LedgerCompanyCodeCrcyRoles.Ledger and
    _Ledger.LedgerType = ''   

  association [1..1] to I_CompanyCode               as _CompanyCode
    on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_AccountingPrinciple       as _AccountingPrinciple
    on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple

  association [1..1] to E_RAPerformanceObligation   as _E_RAPerformanceObligation
    on $projection.PerformanceObligation = _E_RAPerformanceObligation.PerformanceObligation

  association [1..1] to E_RevenueAccountingContract as _E_RevenueAccountingContract
    on PeriodicOpenRevenue.RevenueAccountingContract = _E_RevenueAccountingContract.RevenueAccountingContract

  association [1..1] to I_RevenueAccountingContract as _I_RevenueAccountingContract
    on PeriodicOpenRevenue.RevenueAccountingContract = _I_RevenueAccountingContract.RevenueAccountingContract
    
{
      /**** Dimensions ****/

      @ObjectModel.text.element: [ 'PerformanceObligationClass' ]
  key PeriodicOpenRevenue.PerformanceObligation,

  key PeriodicOpenRevenue.FiscalYearPeriod,

  key PeriodicOpenRevenue.RevnAcctgConditionCategory,
  
  @ObjectModel.foreignKey.association: '_Ledger'
  key _LedgerCompanyCodeCrcyRoles.Ledger as Ledger,  
  
      PeriodicOpenRevenue.BandFiscalYearPeriodText,
  
      @ObjectModel.foreignKey.association: '_CompanyCode'
      PeriodicOpenRevenue.CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      PeriodicOpenRevenue.AccountingPrinciple,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      PeriodicOpenRevenue.RARecognizedRevnInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      PeriodicOpenRevenue.RecgdCatchUpAmtInSlsDocCrcy,

      /**** To Be Recognized Revenue ****/

      PeriodicOpenRevenue.SalesDocumentCurrency,

      PeriodicOpenRevenue.RevenueAccountingContract,

      PeriodicOpenRevenue._RevenueAccountingContract.RevnAcctgContractCreationDate,

      @Semantics.text: true
      PeriodicOpenRevenue.PerformanceObligationClass,

      @ObjectModel.foreignKey.association: '_Customer'
      PeriodicOpenRevenue.Customer,

      PeriodicOpenRevenue.PerfOblgnFulfillmentType,
      
      PeriodicOpenRevenue.PerfOblgnEventType,
      
      PeriodicOpenRevenue.RevnAcctgSalesOrganization,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      PeriodicOpenRevenue.FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      PeriodicOpenRevenue.BusinessArea,

      @ObjectModel.foreignKey.association: '_Segment'
      PeriodicOpenRevenue.Segment,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      PeriodicOpenRevenue.ProfitCenter,

      @ObjectModel.foreignKey.association: '_CostCenter'
      PeriodicOpenRevenue.CostCenter,

      @ObjectModel.foreignKey.association: '_WBSElement'
      PeriodicOpenRevenue.WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      PeriodicOpenRevenue.ControllingArea,

      PeriodicOpenRevenue.RAPerformanceObligationType,   

      PeriodicOpenRevenue._RAPerformanceObligation._RevenueAccountingContract.IsBusinessPurposeCompleted,
      
      PeriodicOpenRevenue.BusinessSolutionOrder,
      
      PeriodicOpenRevenue.BusinessSolutionOrderItem,
      
      _I_RevenueAccountingContract.RAContractIsUniversal,
 
      /* Association */
      _CompanyCode,
      _AccountingPrinciple,
      _LedgerCompanyCodeCrcyRoles._Ledger,
      PeriodicOpenRevenue._RAPerformanceObligation,
      PeriodicOpenRevenue._BusinessArea,
      PeriodicOpenRevenue._Customer,
      PeriodicOpenRevenue._FunctionalArea,
      PeriodicOpenRevenue._Segment,
      PeriodicOpenRevenue._WBSElement,
      PeriodicOpenRevenue._ProfitCenter,
      PeriodicOpenRevenue._CostCenter,
      PeriodicOpenRevenue._ControllingArea
}
```
