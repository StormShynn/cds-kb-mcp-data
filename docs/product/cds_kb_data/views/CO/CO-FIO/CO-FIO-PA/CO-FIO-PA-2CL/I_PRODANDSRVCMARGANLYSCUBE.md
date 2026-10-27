---
name: I_PRODANDSRVCMARGANLYSCUBE
description: "Product and Service Margins - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODANDSRVCMARGANLYSCUBE')/$value
semantic_en: "Product and Service Margins - Cube"
semantic_vi: "Product and Service Margins - Cube — CDS view giao diện dựa trên P_ProdAndSrvcMargMultiCrcy."
keywords:
  - "product"
  - "and"
  - "service"
  - "margins"
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
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
---
# I_PRODANDSRVCMARGANLYSCUBE

**Product and Service Margins - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODANDSRVCMARGANLYSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `RecognizedRevnAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `BilledRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInDspCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `RevenueAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `RecognizedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizableCostAmtInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `COGSAdjustmentAmtInDspCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `RecognizedMargAmtInDisplayCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `AccruedRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `DeferredRevenueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `DeferredCOGSAmtInDspCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `ImminentLossRsrvAmtInDspCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `ProjAndSlsOrdStkAmtInDspCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInDspCrcy` |  | |  |  | `CURR(23)` | Manual Contract Accruals Income Statement in Display Crcy |
| `DownPaymentAmountInDspCrcy` |  | |  |  | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `_CurrencyField` | | ✓ | | | | |
| `_CurrencyField1` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_ServiceContractNew` | | ✓ | | | | |
| `_ServiceContractItemNew` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_ServiceContractTypeNew` | | ✓ | | | | |
| `_ObjectType` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ServiceDocumentTypeNew` | | ✓ | | | | |
| `_ServiceDocumentNew` | | ✓ | | | | |
| `_ServiceDocumentItemNew` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyField` | `I_PrjMargAnlysRptCrcyFld` | [0..1] |
| `_CurrencyField1` | `I_ProdSrvcMargRepCrcyFld` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODANDSRVCMARGANLYSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODANDSRVCMARGANLYSCUBE')/$value)*

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
@EndUserText.label: 'Product and Service Margins - Cube'
define view entity I_ProdAndSrvcMargAnlysCube
  with parameters
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from P_ProdAndSrvcMargMultiCrcy as ProdAndSrvcMargMultiCrcy

  association [0..1] to I_PrjMargAnlysRptCrcyFld as _CurrencyField on  $projection.CurrencyField = _CurrencyField.CurrencyField
  association [0..1] to I_ProdSrvcMargRepCrcyFld as _CurrencyField1 on $projection.CurrencyField = _CurrencyField1.CurrencyField

  association [1..1] to E_JournalEntryItem       as _Extension     on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                   and $projection.CompanyCode        = _Extension.CompanyCode
                                                                   and $projection.FiscalYear         = _Extension.FiscalYear
                                                                   and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                   and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
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
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_GLAccountHierarchy'
      @Environment.sql.passValue: true
  key GLAccountHierarchy,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
      @ObjectModel.foreignKey.association: '_CurrencyField1'
      @Environment.sql.passValue: true
  key CurrencyField,
      FiscalYearVariant,
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_ServiceContractNew'
      ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
      ServiceContractItem,
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,
      @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
      ServiceContractType,
      @ObjectModel.foreignKey.association: '_ObjectType'
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_ServiceDocumentTypeNew'
      ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocumentNew'
      ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceDocumentItemNew'
      ServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      BaseUnit,

      BillableControl,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      Material,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      PersonnelNumber,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,

      WBSElement,

      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      //cast( WBSElementExternalID as fis_wbsext_no_conv ) as WBSElementExternalID,  //Need to be converted in Query
      WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      ValuationArea,
      AssetClass,
      PostingDate,

      Currency,

      //////////////////////////////////////////////////////////////////////
      //  Key Figures with Semantic Tag
      //////////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity,

      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedRevnAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      BilledRevenueAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      SalesDeductionAmountInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RevenueAdjustmentAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedCOGSAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizableCostAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      COGSAdjustmentAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      RecognizedMargAmtInDisplayCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      AccruedRevenueAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DeferredRevenueAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      AccruedCOGSAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DeferredCOGSAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ImminentLossRsrvAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      SalesDeductReserveAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      UnrlzdCostsReserveAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      ProjAndSlsOrdStkAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      MnlContrAccrPnLItmAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @Aggregation.default: #SUM
      DownPaymentAmountInDspCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////
      _Ledger,
      _SourceLedger,
      _CompanyCode,
      _FiscalYear,
      _JournalEntry,
      _GLAccountHierarchy,
      _SemanticTag,
      _ServiceContractNew,
      _ServiceContractItemNew,
      _SolutionOrder,
      _ProviderContract,
      _ProviderContractItem,
      _ServiceContractTypeNew,
      _ObjectType,
      _ProjectExternalID,
      _ProfitCenter,
      _ServiceDocumentTypeNew,
      _ServiceDocumentNew,
      _ServiceDocumentItemNew,
      _BillToParty,
      _BusinessTransactionType,
      _Customer,
      _CustomerGroup,
      _GLAccountInChartOfAccounts,
      _CustomerSupplierIndustry,
      _SoldProduct,
      _SoldProductGroup,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesOrganization,
      _ShipToParty,
      _ChartOfAccounts,
      _ControllingArea,
      _BaseUnit,
      _DistributionChannel,
      _Division,
      _Equipment,
      _FunctionalArea,
      _Product,
      _PartnerCostCtrActivityType,
      _Plant,
      _CustomerSupplierCountry,
      _WBSElementExternalID,
      _SalesDistrict,
      _Order,
      _Supplier,
      _AccountingDocumentType,
      _CostCenter,
      _FinancialAccountType,
      _Segment,
      _CurrentProfitCenter,
      _CurrentCostCenter,
      _ServiceDocument,
      _CurrencyField,
      _CurrencyField1
}
where
  GLAccountHierarchy = $parameters.P_GLAccountHierarchy
```
