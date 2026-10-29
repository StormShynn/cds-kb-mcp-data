---
name: I_PRODUCTMARGINANALYSISCUBE
description: "Product Margin - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value
semantic_en: "Product Margin - Cube"
semantic_vi: "Product Margin - Cube — CDS view giao diện dựa trên P_SemTagAndSubldgrItmDisCrcy."
keywords:
  - "Product Margin - Cube"
  - "product"
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
# I_PRODUCTMARGINANALYSISCUBE

**Product Margin - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value) |

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
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Role |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `TradingPartner` |  | | `_Customer` | `TradingPartner` | `CHAR(6)` | Company ID of Trading Partner |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance Amount in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance Amount in Display Currency |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance Amount in Display Currency |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance Amount in Display Currency |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance Amount in Display Currency |
| `_CurrencyField` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_GlobalCompany` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyField` | `I_MargAnlysRptCurrencyField` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_GlobalCompany` | `I_Globalcompany` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..*] |
| `_SemanticTag` | `I_SemanticTag` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_Division` | `I_Division` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_DocumentStore` | `I_ProductMarginAnalysisDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTMARGINANALYSISCUBE')/$value)*

```abap
@EndUserText.label: 'Product Margin - Cube'
@AccessControl: { 
                   authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED
                 }
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ObjectModel: { usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
@VDM.viewType: #COMPOSITE
@Consumption.dbHints:['USE_HEX_PLAN' ]
define view entity I_ProductMarginAnalysisCube
  with parameters
    P_GLAccountHierarchy : fins_sem_tag_hryid
 as select from P_SemTagAndSubldgrItmDisCrcy
                 (     P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                        )
  association [0..1] to I_MargAnlysRptCurrencyField  as _CurrencyField         on  $projection.CurrencyField = _CurrencyField.CurrencyField
  
  association [1..1] to I_CompanyCode                as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Ledger                     as _Ledger                on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_Ledger                     as _SourceLedger          on  $projection.SourceLedger = _SourceLedger.Ledger
  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear            on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                               and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_ProductGroup               as _SoldProductGroup      on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup
  association [0..1] to I_SalesDocument              as _SalesDocument         on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem          as _SalesDocumentItem     on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                               and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_Plant                      as _Plant                 on  $projection.Plant = _Plant.Plant

  association [0..1] to I_Customer                   as _Customer              on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Customer                   as _BillToParty           on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                   as _ShipToParty           on  $projection.ShipToParty = _ShipToParty.Customer
  
  association [0..1] to I_Globalcompany                as _GlobalCompany       on  $projection.tradingpartner = _GlobalCompany.Company
  
  association [0..1] to I_CustomerGroup              as _CustomerGroup         on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_Segment                    as _Segment               on  $projection.Segment = _Segment.Segment
  
  association [0..1] to I_Country                    as _CustomerSupplierCountry       on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
 
  association [0..1] to I_ControllingArea            as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter               as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter                                                                 
                                                                                         
  association [0..1] to I_SalesOrganization          as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_SalesDistrict              as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  
  association [0..1] to I_Product                    as _SoldProduct                   on  $projection.SoldProduct = _SoldProduct.Product
 
  association [0..1] to I_JournalEntry               as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                       and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                       and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..*] to I_GLAccountHierarchy         as _Hierarchy                     on $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy                                                                                                                                  
  association [0..1] to I_SemanticTag                as _SemanticTag                   on $projection.SemanticTag = _SemanticTag.SemanticTag
  association [0..*] to I_CostCenter                 as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea                                                                                                                 and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_Division                   as _Division                      on  $projection.OrganizationDivision = _Division.Division
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                      on  $projection.QuantityUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _CostSourceUnit                on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1]   to I_ProfitCenter             as _CurrentProfitCenter           on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                                                                   and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                                                                   and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
  association [0..1]   to I_CostCenter               as _CurrentCostCenter             on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                                                                   and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                                                                   and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                                                                   and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1]   to I_Supplier                 as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1]   to I_Order                    as _Order                         on  $projection.OrderID = _Order.OrderID
  association [0..1]   to I_AccountingDocumentType   as _AccountingDocumentType        on  '' = _AccountingDocumentType.AccountingDocumentType
  association [0..1]   to I_SrvcDocByDocumentType    as _ServiceDocument               on  '' = _ServiceDocument.ServiceDocumentType
                                                                                                                                   and '' = _ServiceDocument.ServiceDocument

//  association [0..1]   to I_PurchasingDocument       as _PurchasingDocument            on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument

  association [0..1]   to I_BusinessArea             as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1]   to I_FunctionalArea           as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1]   to I_ChartOfAccounts          as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  
  association [0..1]   to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                          and  $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
                                                                                          
  association [0..1]   to I_BusinessTransactionType      as _BusinessTransactionType       on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..1] to I_ReferenceDocumentType          as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1]   to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1]   to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  

  association [1..1] to E_JournalEntryItem           as _Extension             on  $projection.Ledger             = _Extension.SourceLedger
                                                                               and $projection.CompanyCode        = _Extension.CompanyCode
                                                                               and $projection.FiscalYear         = _Extension.FiscalYear
                                                                               and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                               and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

  association [0..1] to I_ProductMarginAnalysisDSt   as _DocumentStore               on  _DocumentStore.tra_ledger        = $projection.Ledger
                                                                                     and _DocumentStore.tra_sourceledger  = $projection.SourceLedger
                                                                                     and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                                     and _DocumentStore.tra_fiscalyear    = $projection.FiscalYear
                                                                                     and _DocumentStore.tra_00006         = $projection.AccountingDocument
                                                                                     and _DocumentStore.tra_00021         = $projection.LedgerGLLineItem
                                                                                     and _DocumentStore.tra_00013         = $projection.GLAccountHierarchy
                                                                                     and _DocumentStore.tra_semantictag   = $projection.SemanticTag
                                                                                     and _DocumentStore.tra_currencyfield = $projection.CurrencyField

                                                                                     
{
        @ObjectModel.foreignKey.association: '_Ledger'
  key   Ledger,
        @ObjectModel.foreignKey.association: '_SourceLedger'
  key   SourceLedger,
        @ObjectModel.foreignKey.association: '_CompanyCode'
  key   CompanyCode,
        @ObjectModel.foreignKey.association: '_FiscalYear'
  key   FiscalYear,
        @ObjectModel.foreignKey.association: '_JournalEntry'
  key   AccountingDocument,
  key   LedgerGLLineItem,
        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   GLAccountHierarchy,
        @ObjectModel.foreignKey.association: '_SemanticTag'
  key   SemanticTag,
        @ObjectModel.foreignKey.association: '_CurrencyField'
  key   CurrencyField,
        CurrencyRole,
        @Semantics.fiscal.year: true
        LedgerFiscalYear,
        FiscalYearVariant,
        @Semantics.fiscal.period: true
        FiscalPeriod,
        FiscalYearPeriod,
        @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
        GLAccount,
        @ObjectModel.foreignKey.association: '_SoldProduct'
        SoldProduct,
        @ObjectModel.foreignKey.association: '_SoldProductGroup'
        SoldProductGroup,
        @ObjectModel.foreignKey.association: '_ProfitCenter'
        ProfitCenter,
        @ObjectModel.foreignKey.association: '_CostCenter'
        CostCenter,
        @ObjectModel.foreignKey.association: '_Plant'
        Plant,
        @ObjectModel.foreignKey.association: '_BusinessArea'
        BusinessArea,
        @ObjectModel.foreignKey.association: '_FunctionalArea'
        FunctionalArea,
        @ObjectModel.foreignKey.association: '_Segment'
        Segment,
        @ObjectModel.foreignKey.association: '_Customer'
        Customer,
        @ObjectModel.foreignKey.association: '_CustomerGroup'
        CustomerGroup,
        @ObjectModel.foreignKey.association:'_GlobalCompany'
        _Customer.TradingPartner,

        @ObjectModel.foreignKey.association: '_SalesDistrict'
        SalesDistrict,
        @ObjectModel.foreignKey.association: '_BillToParty'
        BillToParty,
        @ObjectModel.foreignKey.association: '_ShipToParty'
        ShipToParty,
        @ObjectModel.foreignKey.association: '_DistributionChannel'
        DistributionChannel,
        @ObjectModel.foreignKey.association: '_Order'
        OrderID,
        @ObjectModel.foreignKey.association: '_SalesDocument'
        SalesDocument,
        @ObjectModel.foreignKey.association: '_SalesDocumentItem'
        SalesDocumentItem,
        @ObjectModel.foreignKey.association: '_SalesOrganization'
        SalesOrganization,
        AccountAssignmentType,
        @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'      
        CustomerSupplierCountry,
        CustomerSupplierIndustry,
        
        PurchasingDocument,

        @ObjectModel.foreignKey.association: '_ControllingArea'      
        ControllingArea,
        PostingDate,
        @ObjectModel.foreignKey.association: '_Supplier'
        Supplier,
        FinancialAccountType,
        @ObjectModel.foreignKey.association: '_Division'
        OrganizationDivision, 
        AssetClass,
        ValuationArea,
        
        @ObjectModel.foreignKey.association: '_BusinessTransactionType'
        BusinessTransactionType,
        @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
        ReferenceDocumentType,
        @ObjectModel.foreignKey.association: '_InventoryValuationType'
        InventoryValuationType,
        @ObjectModel.foreignKey.association: '_Product'
        Product,

        @ObjectModel.foreignKey.association: '_ChartOfAccounts'      
        ChartOfAccounts,

        @ObjectModel.foreignKey.association: '_BaseUnit'
        QuantityUnit,
       
        @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
        @Aggregation.default: #SUM
        Quantity,
       
        @ObjectModel.foreignKey.association: '_CostSourceUnit'
        CostSourceUnit,
       
        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
        ValuationQuantity,
       
        Currency,
        
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        AmountInDisplayCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        FixedAmountInDspCrcy,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        InptPrVarcAmtInDspCrcy,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        OutpPrVarcAmtInDspCrcy,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        InptQtyVarcAmtInDspCrcy,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        RsceUsgeVarcAmtInDspCrcy,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        LotSizeVarcAmtInDspCrcy,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        InptRmngVarcAmtInDspCrcy,


        _BusinessTransactionType,
        _ReferenceDocumentType,
        _InventoryValuationType,
        _Product,
        
        _BaseUnit,
        _CostSourceUnit,
        _Division,
        _Hierarchy,
        _SemanticTag,
        _JournalEntry,
        _AccountingDocumentType,
        _CurrentProfitCenter,
        _CurrentCostCenter,
        _Supplier,
        _Order,
        _ServiceDocument,
        _CustomerSupplierCountry,
        _SalesOrganization,
        _DistributionChannel,
        _ProfitCenter,
        _CostCenter,
        _ControllingArea,
        _Ledger,
        _SourceLedger,
        _CompanyCode,
        _FiscalYear,
        _SoldProduct,
        _SoldProductGroup,
        _Plant,
        _BusinessArea,
        _FunctionalArea,
        _Segment,
        _Customer,
        _GlobalCompany,
        _CustomerGroup,
        _BillToParty,
        _ShipToParty,
        _SalesDocument,
        _SalesDocumentItem,
        _SalesDistrict,
        _CurrencyField,
        _ChartOfAccounts,
        _GLAccountInChartOfAccounts,
        
        @Analytics.association.toDocumentStorage: true
        _DocumentStore
}
```
