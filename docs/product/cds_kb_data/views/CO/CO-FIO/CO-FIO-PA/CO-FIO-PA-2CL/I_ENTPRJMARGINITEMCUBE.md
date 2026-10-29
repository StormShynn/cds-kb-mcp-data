---
name: I_ENTPRJMARGINITEMCUBE
description: "Enterprise Project Margin Item - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPRJMARGINITEMCUBE')/$value
semantic_en: "Enterprise Project Margin Item - Cube"
semantic_vi: "Enterprise Project Margin Item - Cube — CDS view giao diện dựa trên P_EnterpriseProjectMarginItem."
keywords:
  - "Enterprise Project Margin Item - Cube"
  - "enterprise"
  - "project"
  - "margin"
  - "item"
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
# I_ENTPRJMARGINITEMCUBE

**Enterprise Project Margin Item - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPRJMARGINITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `OldGLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `ProjectManagerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PersonWorkAgreement` |  | | `_PrjManagerNum` | `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
| `ProcessingStatus` |  | |  |  | `CHAR(2)` | Object Processing Status |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `ProjectUUID` |  | |  |  | `RAW(16)` | Entity Guid |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `_PrjManager` | | ✓ | | | | |
| `_ProjectManagerBP` | | ✓ | | | | |
| `_CurrencyField` | | ✓ | | | | |
| `_CurrencyField1` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_ProcessingStatus` | | ✓ | | | | |
| `_ProcessingStatusText` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_ObjectType` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_ServiceDocumentTypeNew` | | ✓ | | | | |
| `_ServiceDocumentNew` | | ✓ | | | | |
| `_ServiceDocumentItemNew` | | ✓ | | | | |
| `_ServiceContractNew` | | ✓ | | | | |
| `_ServiceContractItemNew` | | ✓ | | | | |
| `_ServiceContractTypeNew` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_OldGLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_AccountAssignmentType` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrjManagerNum` | `I_PersonWorkAgreement_1` | [0..1] |
| `_PrjManager` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ProjectManagerBP` | `I_BusinessPartner` | [0..1] |
| `_CurrencyField` | `I_MargAnlysRptCurrencyField` | [0..1] |
| `_CurrencyField1` | `I_PrjMargAnlysRptCrcyFld` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_DocumentStore` | `I_EntPrjMarginItemDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPRJMARGINITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPRJMARGINITEMCUBE')/$value)*

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
@EndUserText.label: 'Enterprise Project Margin Item - Cube'
define view entity I_EntPrjMarginItemCube
  as select from P_EnterpriseProjectMarginItem as P_EnterpriseProjectMarginItem
  association [0..1] to I_PersonWorkAgreement_1      as _PrjManagerNum              on  $projection.ProjectManager = _PrjManagerNum.Person
  association [0..1] to I_PersonWorkAgreement_1      as _PrjManager                 on  $projection.personworkagreement = _PrjManager.PersonWorkAgreement
  association [0..1] to I_BusinessPartner            as _ProjectManagerBP           on  $projection.ProjectManager = _ProjectManagerBP.BusinessPartner
  association [0..1] to I_MargAnlysRptCurrencyField  as _CurrencyField              on  $projection.CurrencyField = _CurrencyField.CurrencyField
  association [0..1] to I_PrjMargAnlysRptCrcyFld     as _CurrencyField1             on  $projection.CurrencyField = _CurrencyField1.CurrencyField
  association [1..1] to I_EnterpriseProject          as _EnterpriseProject          on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [0..1] to I_ControllingDebitCreditCode as _ControllingDebitCreditCode on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [1..1] to E_JournalEntryItem           as _Extension_acdoca           on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                    and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                    and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                    and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                    and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  //and $projection.ActualPlanJournalEntryItem = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem as _Extension_acdocp           on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                    and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                    and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
  //document store association
  association [0..1] to I_EntPrjMarginItemDSt        as _DocumentStore    on  _DocumentStore.tra_ledger        = $projection.Ledger
                                                                          and _DocumentStore.tra_sourceledger  = $projection.SourceLedger
                                                                          and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                          and _DocumentStore.tra_fiscalyear    = $projection.FiscalYear
                                                                          and _DocumentStore.tra_00033         = $projection.AccountingDocument
                                                                          and _DocumentStore.tra_00016         = $projection.FinancialPlanningReqTransSqnc
                                                                          and _DocumentStore.tra_00013         = $projection.FinancialPlanningDataPacket
                                                                          and _DocumentStore.tra_00020         = $projection.ActualPlanJournalEntryItem
                                                                          and _DocumentStore.tra_currencyfield = $projection.CurrencyField

{
      //      @ObjectModel.foreignKey.association: '_ProjectHierarchy'
      //  key ProjectObjectNode,
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
      //  key I_ActualPlanJournalEntryItem.LedgerGLLineItem,

  key FinancialPlanningReqTransSqnc,
  key FinancialPlanningDataPacket,

  key ActualPlanJournalEntryItem,

      //  @ObjectModel.foreignKey.association: '_CurrencyRole'
      //  key CurrencyRole,
      @ObjectModel.foreignKey.association: '_CurrencyField1'
      @Environment.sql.passValue: true
  key CurrencyField,

      FinancialPlanningEntryItem,

      PlanningCategory,

      ActualPlanCode,

      //      @Environment.sql.passValue: true
      //      CurrencyField,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'
      //@Semantics.fiscal.year: true
      LedgerFiscalYear,

      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FiscalYearVariant,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
      ServiceContractType,
      @ObjectModel.foreignKey.association: '_ServiceContractNew'
      ServiceContract,
      @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
      ServiceContractItem,
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      ProviderContract,
      ProviderContractItem,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      AccountAssignmentType,

      @ObjectModel.foreignKey.association: '_Project'
      Project,

      ProjectInternalID,

      @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query: {axis: #FREE}
      @EndUserText.label: 'Project Definition'
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @ObjectModel.foreignKey.association: '_ProjectProfileCode'
      ProjectProfileCode,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      OriginProfitCenter,

      @ObjectModel.foreignKey.association: '_ServiceDocumentTypeNew'
      ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocumentNew'
      ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceDocumentItemNew'
      ServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_OldGLAccountInChartOfAccounts'
      OldGLAccount,
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      OrganizationDivision,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,

      WBSElement,
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      Segment,
      //     @ObjectModel.foreignKey.association: '_OrderCategory'
      OrderCategory,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      OrderType,

      // Field for access controls  //
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      _CurrentCostCenter,
      _ServiceDocument,
      AssetClass,
      Supplier,
      _Supplier,
      AccountingDocumentType,
      _AccountingDocumentType,
      _CurrentProfitCenter,
      FinancialAccountType,
      ValuationArea,

      ProjectManagerUUID,
      @ObjectModel.foreignKey.association: '_ProjectManagerBP'
      ProjectManager,
      @ObjectModel.foreignKey.association: '_PrjManager'
      _PrjManagerNum.PersonWorkAgreement,
      _PrjManager,

      @ObjectModel.foreignKey.association: '_ProcessingStatus'
      ProcessingStatus,

      _ProcessingStatus,
      _ProcessingStatusText,

      @EndUserText.label: 'Posting Date'
      PostingDate,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      _DebitCreditCode,

      IsCommitment,

      Currency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'Currency'} }
      AmountInDisplayCurrency,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity,

      @ObjectModel.foreignKey.association: '_EnterpriseProject'
      ProjectUUID,

      LedgerGLLineItem,

      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,

      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////
      //      I_ActualPlanJournalEntryItem._OrderCategory,
      //      _CurrencyRole,
      _CurrencyField,
      _CurrencyField1,
      _BaseUnit,
      _Order,
      _Project,
      _ProjectExternalID,
      _WBSElementExternalID,
      _ProjectBasicData,
      _SourceLedger,
      _JournalEntry,
      _CustomerSupplierCountry,
      _CompanyCode,
      _FiscalYear,
      _Ledger,
      _ObjectType, //Don't use this association
      _SolutionOrder,
      _ServiceDocumentTypeNew,
      _ServiceDocumentNew,
      _ServiceDocumentItemNew,
      _ServiceContractNew,
      _ServiceContractItemNew,
      _ServiceContractTypeNew,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _Customer,
      _CustomerGroup,
      _ShipToParty,
      _SoldProduct,
      _SoldProductGroup,
      _ProfitCenter,
      _OriginProfitCenter,
      _SalesOrganization,
      _BillToParty,
      _ChartOfAccounts,
      _ControllingArea,
      _DistributionChannel,
      _FunctionalArea,
      _OldGLAccountInChartOfAccounts,
      _GLAccountInChartOfAccounts,
      _Plant,
      _SalesDistrict,
      _FiscalYearVariant,
      _LedgerFiscalYearForVariant, //Don't use this association
      _ProjectProfileCode,
      _AccountAssignmentType,
      _LedgerFiscalYearForLedger,
      _CostCenter,
      _ProjectManagerBP,
      _EnterpriseProject,
      _ControllingDebitCreditCode,
      
      @Analytics.association.toDocumentStorage: true
      _DocumentStore
}
```
