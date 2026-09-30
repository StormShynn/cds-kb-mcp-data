---
name: I_INVMTPROJACTLLINEITMCUBE
description: "Invmt Proj for Actual Line Items - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value
semantic_en: "Invmt Proj for Actual Line Items - Cube"
semantic_vi: "Invmt Proj for Actual Line Items - Cube — CDS view giao diện dựa trên P_InvmtProjActlItmMultiCrcy."
keywords:
  - "invmt"
  - "proj"
  - "for"
  - "actual"
  - "line"
  - "items"
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
---
# I_INVMTPROJACTLLINEITMCUBE

**Invmt Proj for Actual Line Items - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role Field |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `StandardProjectWithCodingMask` |  | |  |  | `CHAR(24)` | Standard Project Number (Extern) Edited |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectManagerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CurrencyField` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |
| `_AccountAssignmentType` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_StdProject` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectManagerBP` | | ✓ | | | | |
| `_ProcessingStatus` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [1..1] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_CurrencyField` | `I_PrjMargAnlysRptCrcyFld` | [0..1] |
| `_LedgerFiscalYearForLedger` | `I_FiscalYearForLedger` | [0..1] |
| `_AccountAssignmentType` | `I_AccountAssignmentType` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_Project` | `I_ProjectUnformattedID` | [0..1] |
| `_StdProject` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectManagerBP` | `I_BusinessPartner` | [0..1] |
| `_ProcessingStatus` | `I_EntProjProcessingStatus` | [0..1] |
| `_ProjectProfileCode` | `I_ProjectProfileCode` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INVMTPROJACTLLINEITMCUBE')/$value)*

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
@EndUserText.label: 'Invmt Proj for Actual Line Items - Cube'

define view entity I_InvmtProjActlLineItmCube
  as select from P_InvmtProjActlItmMultiCrcy as InvmtProjActlLineItm

  association [1..1] to I_Ledger                     as _Ledger                     on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_Ledger                     as _SourceLedger               on  $projection.SourceLedger = _SourceLedger.Ledger
  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_JournalEntry               as _JournalEntry               on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                    and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                    and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..1] to I_PrjMargAnlysRptCrcyFld     as _CurrencyField              on  $projection.CurrencyField = _CurrencyField.CurrencyField
  association [0..1] to I_FiscalYearForLedger        as _LedgerFiscalYearForLedger  on  $projection.LedgerFiscalYear = _LedgerFiscalYearForLedger.FiscalYear
                                                                                    and $projection.CompanyCode      = _LedgerFiscalYearForLedger.CompanyCode
                                                                                    and $projection.Ledger           = _LedgerFiscalYearForLedger.Ledger
  association [0..1] to I_AccountAssignmentType      as _AccountAssignmentType      on  $projection.AccountAssignmentType = _AccountAssignmentType.AccountAssignmentType
  association [1]    to I_FiscalYearVariant          as _FiscalYearVariant          on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..*] to I_ProfitCenter               as _ProfitCenter               on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_FunctionalArea             as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [1]    to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [1..1] to I_EnterpriseProject          as _EnterpriseProject          on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [0..1] to I_ProjectUnformattedID       as _Project                    on  $projection.Project = _Project.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _StdProject                 on  $projection.StandardProjectWithCodingMask = _StdProject.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID          on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_BusinessPartner            as _ProjectManagerBP           on  $projection.ProjectManager = _ProjectManagerBP.BusinessPartner
  association [0..1] to I_EntProjProcessingStatus    as _ProcessingStatus           on  _ProcessingStatus.ProcessingStatus = $projection.ProcessingStatus
  association [0..1] to I_ProjectProfileCode         as _ProjectProfileCode         on  $projection.ProjectProfileCode = _ProjectProfileCode.ProjectProfileCode
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID       on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_ControllingDebitCreditCode as _ControllingDebitCreditCode on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode            on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [0..1] to I_SalesOrganization          as _SalesOrganization          on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_UnitOfMeasure              as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _CostSourceUnit             on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1] to I_BusinessTransactionType    as _BusinessTransactionType    on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType


  // For DCL
  association [0..1] to I_Customer                   as _Customer                   on  $projection.Customer = _Customer.Customer
  association [0..1] to I_AccountingDocumentType     as _AccountingDocumentType     on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_ProfitCenter               as _CurrentProfitCenter        on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                    and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_CostCenter                 as _CurrentCostCenter          on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                    and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                    and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_Order                      as _Order                      on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_SalesDocument              as _SalesDocument              on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SrvcDocByDocumentType      as _ServiceDocument            on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                                    and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  // For DCL - end

  //For Extension
  association of exact one to exact one E_JournalEntryItem           as _Extension_acdoca           on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                    and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                    and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                    and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                    and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem

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
      @ObjectModel.foreignKey.association: '_CurrencyField'
      @Environment.sql.passValue: true
  key CurrencyField,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'
      LedgerFiscalYear,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      AccountAssignmentType,
      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_EnterpriseProject'
      ProjectUUID,
      ProjectInternalID,
      @ObjectModel.foreignKey.association: '_Project'
      Project,
      @ObjectModel.foreignKey.association: '_StdProject'
      StandardProjectWithCodingMask,
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      ProjectManagerUUID,
      @ObjectModel.foreignKey.association: '_ProjectManagerBP'
      ProjectManager,
      @ObjectModel.foreignKey.association: '_ProcessingStatus'
      ProcessingStatus,
      @ObjectModel.foreignKey.association: '_ProjectProfileCode'
      ProjectProfileCode,
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,

      WBSIsStatisticalWBSElement,
      Segment,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BusinessTransactionType,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,

      Currency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      AmountInDisplayCurrency,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'CostSourceUnit'
      ValuationQuantity,

      // For DCL
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      CostCenter,
      FinancialAccountType,
      DistributionChannel,
      PostingDate,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      OrganizationDivision,
      AssetClass,
      ValuationArea,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      ServiceDocumentType,
      ServiceDocument,

      _CurrentProfitCenter,
      _Customer,
      _AccountingDocumentType,
      _Order,
      _SalesDocument,
      _CurrentCostCenter,
      _ServiceDocument,
      // For DCL - end


      _Ledger,
      _SourceLedger,
      _CompanyCode,
      _FiscalYear,
      _JournalEntry,
      _CurrencyField,
      _LedgerFiscalYearForLedger,
      _AccountAssignmentType,
      _FiscalYearVariant,
      _ProfitCenter,
      _FunctionalArea,
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _EnterpriseProject,
      _Project,
      _StdProject,
      _ProjectExternalID,
      _ProjectManagerBP,
      _ProcessingStatus,
      _ProjectProfileCode,
      _WBSElementExternalID,
      _ControllingDebitCreditCode,
      _ControllingArea,
      _DebitCreditCode,
      _SalesOrganization,
      _Supplier,
      _BaseUnit,
      _CostSourceUnit,
      _BusinessTransactionType
}
```
