---
name: I_COMPANYMARGINCUBE
description: "Company Margin - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value
semantic_en: "Company Margin - Cube"
semantic_vi: "Company Margin - Cube — CDS view giao diện dựa trên I_GLAcctLineItemSemTagGLAcct."
keywords:
  - "Company Margin - Cube"
  - "company"
  - "margin"
  - "cube"
  - "ledger"
  - "source"
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
---
# I_COMPANYMARGINCUBE

**Company Margin - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value) |

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
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Product` |  | |  |  | `CHAR(40)` | Product |
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
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs_no_conv preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `CurrencyField` |  | | `_CurrencyField` | `CurrencyField` | `CHAR(4)` | Currency Role |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `VariableAmountInCoCodeCrcy` |  | |  | `cast( $projection.amountincompanycodecurrency - FixedAmountInCoCodeCrcy as fis_hsl_inverted )` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` |  | |  | `cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `InvertedFixedAmtInCoCodeCrcy` |  | |  | `cast( ( FixedAmountInCoCodeCrcy * -1 ) as fis_hfsl )` | `CURR(23)` | Fixed Amount in Company Currency |
| `InvertedVarblAmtInCoCodeCrcy` |  | |  | `cast( ( $projection.VariableAmountInCoCodeCrcy * -1 ) as fis_hsl_inverted )` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `_CurrencyField` | | ✓ | | | | |
| `_ObjectType` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyField` | `I_CompanyMarginCurrencyField` | [0..1] |
| `_ObjectType` | `I_MargAnlysProdAndSrvcObjType` | [0..1] |
| `_SolutionOrder` | `I_ServiceDocument` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value)*

```abap
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #CUBE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, 
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE
                                       ]
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.cacheSettings: { 
  usage:  #MANDATORY,
  useNonTransactional : true }
@Consumption.dbHints: ['USE_HEX_PLAN']
@EndUserText.label: 'Company Margin - Cube'

@Analytics.intentBasedNavigation.filterMapper: 'CL_FCO_COMP_RB_CUBE_EXIT'

define view entity I_CompanyMarginCube
  as select from I_GLAcctLineItemSemTagGLAcct as I_GLAcctLineItemSemTagGLAcct
  association [0..1] to I_CompanyMarginCurrencyField    as _CurrencyField            on  $projection.CurrencyField = _CurrencyField.CurrencyField  
  association [0..1] to I_MargAnlysProdAndSrvcObjType as _ObjectType               on  $projection.AccountAssignmentType = _ObjectType.MarginAnalysisObjectType

  association [0..1] to I_ServiceDocument             as _SolutionOrder            on  $projection.BusinessSolutionOrder = _SolutionOrder.ServiceDocument
                                                                                   and _SolutionOrder.ServiceObjectType  = 'BUS2000172'
  association [0..1] to I_CustomerSupplierIndustry    as _CustomerSupplierIndustry on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry
  association [0..1] to I_Division                    as _Division                 on  $projection.OrganizationDivision = _Division.Division


  /*
    association [0..1] to I_AcctgServiceDocumentType    as _ServiceDocumentTypeNew   on  $projection.ServiceDocumentType = _ServiceDocumentTypeNew.ServiceDocumentType
    association [0..1] to I_AccountingServiceDocument   as _ServiceDocumentNew       on  $projection.ServiceDocumentType = _ServiceDocumentNew.ServiceDocumentType
                                                                                     and $projection.ServiceDocument     = _ServiceDocumentNew.ServiceDocument
    association [0..1] to I_WBSElement                  as _WBSElementData           on  $projection.WBSElementExternalID = _WBSElementData.WBSElement

    association [0..1] to I_AcctgSrvcDocumentItemBasic  as _ServiceDocumentItemNew   on  $projection.ServiceDocumentType = _ServiceDocumentItemNew.ServiceDocumentType
                                                                                     and $projection.ServiceDocument     = _ServiceDocumentItemNew.ServiceDocument
                                                                                     and $projection.ServiceDocumentItem = _ServiceDocumentItemNew.ServiceDocumentItem

    association [0..1] to I_AcctgServiceDocumentType    as _ServiceContractTypeNew   on  $projection.ServiceContractType = _ServiceContractTypeNew.ServiceDocumentType
    association [0..1] to I_AccountingServiceDocument   as _ServiceContractNew       on  $projection.ServiceContractType = _ServiceContractNew.ServiceDocumentType
                                                                                     and $projection.ServiceContract     = _ServiceContractNew.ServiceDocument
    association [0..1] to I_AcctgSrvcDocumentItemBasic  as _ServiceContractItemNew   on  $projection.ServiceContractType = _ServiceContractItemNew.ServiceDocumentType
                                                                                     and $projection.ServiceContract     = _ServiceContractItemNew.ServiceDocument
                                                                                     and $projection.ServiceContractItem = _ServiceContractItemNew.ServiceDocumentItem

    association [0..1] to I_AcctgServiceDocumentItem    as _AcctgServiceDocumentItem on  $projection.ServiceDocumentType = _AcctgServiceDocumentItem.ServiceDocumentType
                                                                                     and $projection.ServiceDocument     = _AcctgServiceDocumentItem.ServiceDocument
                                                                                     and $projection.ServiceDocumentItem = _AcctgServiceDocumentItem.ServiceDocumentItem

  */

  
  association [1..1] to E_JournalEntryItem            as _Extension     on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                        and $projection.CompanyCode        = _Extension.CompanyCode
                                                                        and $projection.FiscalYear         = _Extension.FiscalYear
                                                                        and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                        and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
                                                                        
//document store association
  //association [0..1] to I_CompanyMarginCubeDSt       as _DocumentStore                on  _DocumentStore.tra_ledger   = $projection.Ledger
    //                                                                                   and _DocumentStore.tra_sourceledger        = $projection.SourceLedger
      //                                                                                 and _DocumentStore.tra_companycode        = $projection.CompanyCode
                                                                                       //and _DocumentStore.TRA_FISCALYEAR        = $projection.FiscalYear
                                                                                       //and _DocumentStore.TRA_00037 = $projection.AccountingDocument
                                                                                       //and _DocumentStore.TRA_00031   = $projection.LedgerGLLineItem                                                                        
                                                                                       //and _DocumentStore.TRA_00021        = $projection.GLAccountHierarchy
                                                                                       //and _DocumentStore.TRA_SEMANTICTAG        = $projection.SemanticTag
                                                                                       //and _DocumentStore.tra_00037 = $projection.ValidityStartDate
                                                                                       //and _DocumentStore.tra_00031   = $projection.ValidityEndDate
                                                                        

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

      @Environment.sql.passValue: true
  key GLAccountHierarchy,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,


      //////////////////
      // Technical fields
      //////////////////

      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      FiscalYearVariant,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      @Semantics.fiscal.quarter: true
      FiscalQuarter,
      @Semantics.fiscal.yearQuarter: true
      FiscalYearQuarter,


      //////////////////
      // Characteristics
      //////////////////

      //      @ObjectModel.foreignKey.association: '_ServiceContractNew'
      //      ServiceContract,
      //      @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
      //      ServiceContractItem,
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      //      @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
      //      ServiceContractType,
      @ObjectModel.foreignKey.association: '_ObjectType'
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
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
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity,
      BillableControl,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      PartnerCompany,
      PartnerCompanyCode,
      PersonnelNumber,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,
      cast( WBSElement as fis_wbs_no_conv preserving type )                                         as WBSElement,

      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,

      // cast( _AcctgServiceDocumentItem.ResultAnalysisInternalID as fins_ma_rev_rec_key preserving type )                                                                                                                     as ResultAnalysisInternalID,

      ServicesRenderedDate,

      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      TimeSheetOvertimeCategory,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      Segment,



      LedgerFiscalYear,


      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      PostingDate,
      ValuationArea,
      AssetClass,
      AccountingDocCreatedByUser,
      SubLedgerAcctLineItemType,

      //////////////////
      // Key figures
      //////////////////
      @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true }
      _CurrencyField.CurrencyField as CurrencyField,
      
      CompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,


      // VariableAmountInCoCodeCrcy ==> AmountInCompanyCodeCurrency - FixedAmountInCoCodeCrcy
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast( $projection.amountincompanycodecurrency - FixedAmountInCoCodeCrcy as fis_hsl_inverted ) as VariableAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)                                as InvertedAmtInCoCodeCurrency,

      // you should add an inverted VariableAmountInCoCodeCrcy and an inverted FXD
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast( ( FixedAmountInCoCodeCrcy * -1 ) as fis_hfsl )                                          as InvertedFixedAmtInCoCodeCrcy,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast( ( $projection.VariableAmountInCoCodeCrcy * -1 ) as fis_hsl_inverted )                   as InvertedVarblAmtInCoCodeCrcy,


      --


      //////////////////
      // Associations
      //////////////////
      //_Extension,  //View must not expose association _Extension to extension include view E_JOURNALENTRYITEM
      _ProjectExternalID,
      _SourceLedger,
      _JournalEntry,
      _CompanyCodeCurrency,
      _BaseUnit,
      _SemanticTag,
      _CurrentProfitCenter,
      _CustomerSupplierCountry,
      _GLAccountInCompanyCode,
      _CompanyCode,
      _FiscalYear,
      _Ledger,
      _ObjectType,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      //      _ServiceContractNew,
      //      _ServiceContractItemNew,
      //      _ServiceContractTypeNew,
      _ProviderContract,
      _ProviderContractItem,
      _Customer,
      _CustomerGroup,
      _CustomerSupplierIndustry,
      _ShipToParty,
      _SoldProduct,
      _SoldProductGroup,
      _ProfitCenter,
      _SolutionOrder,
      //      _ServiceDocumentTypeNew,
      //      _ServiceDocumentNew,
      //      _ServiceDocumentItemNew,


      _SalesOrganization,
      _BillToParty,
      _BusinessTransactionType,
      _ChartOfAccounts,
      _ControllingArea,
      _DistributionChannel,
      _Division,
      _Equipment,
      _FunctionalArea,
      _GLAccountInChartOfAccounts,
      _FiscalYearVariant,
      _PartnerCostCtrActivityType,
      _Plant,
      _SalesDistrict,

      _TimeSheetOvertimeCat,
      //      _AcctgServiceDocumentItem,
      _Product,
      //_WBSElementData,
      _WBSElementExternalID,
      _CostCenter,
      _FinancialAccountType,
      _ServiceDocument,
      _ServiceDocumentType,
      _ServiceDocumentItem,
      _Order,
      _CurrentCostCenter,
      _AccountingDocumentType,
      _Supplier, 
      
      //@Analytics.association.toDocumentStorage: true
       // _DocumentStore,
        _CurrencyField
      

}
where
       ValidityStartDate     <= $session.system_date
  and  ValidityEndDate       >= $session.system_date
  and(
       AccountAssignmentType = 'EO'
    or AccountAssignmentType = 'PR'
    or AccountAssignmentType = 'SV' -- Service Order Item
    or AccountAssignmentType = 'SC' -- Service Contract
    or AccountAssignmentType = 'OR'
    or AccountAssignmentType = 'KS'
    or AccountAssignmentType = 'VB' -- Sales Document Item
    or AccountAssignmentType = 'KL' -- Cost center & Activity type
  )
and 
  (
  SemanticTag = 'BILL_REV' or 
  SemanticTag = 'ADJ_REV' or 
  SemanticTag = 'SALES_DED' or 
  SemanticTag = 'RECO_COS' or 
  SemanticTag = 'COGS_3PAR' or 
  SemanticTag = 'ICO_COST' or 
  SemanticTag = 'MATCST' or 
  SemanticTag = 'COGS_PERT' or 
  SemanticTag = 'COGS_MATI' or 
  SemanticTag = 'COGS_SUTI' or 
  SemanticTag = 'COGS_OMAT' or 
  SemanticTag = 'COGS_OPRO' or 
  SemanticTag = 'OVH_CSTADM' or 
  SemanticTag = 'TRAVELCST' or 
  SemanticTag = 'HRD_COST' or 
  SemanticTag = 'LIC_COST' or 
  SemanticTag = 'SERVICECST' or 
  SemanticTag = 'PL_RESULT'
  )
```
