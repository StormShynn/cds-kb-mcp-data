---
name: I_PRODMARGCOSTBRKDWNCUBE
description: "Product Profitability CostBrkDwn - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODMARGCOSTBRKDWNCUBE')/$value
semantic_en: "Product Profitability CostBrkDwn - Cube"
semantic_vi: "Product Profitability CostBrkDwn - Cube — CDS view giao diện dựa trên P_GLAcctItemCostBrkDwnDisCrcy."
keywords:
  - "Product Profitability CostBrkDwn - Cube"
  - "product"
  - "profitability"
  - "costbrkdwn"
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
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
---
# I_PRODMARGCOSTBRKDWNCUBE

**Product Profitability CostBrkDwn - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODMARGCOSTBRKDWNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ComponentBreakdownMethod` | ✓ | |  |  | `CHAR(4)` | Component Breakdown Method |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Role |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CostBreakdownStructure` |  | |  |  | `CHAR(2)` | Cost Breakdown Structure |
| `CostBreakdownComponent` |  | |  |  | `CHAR(10)` |  |
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
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Currency Role Currency |
| `FixedAmountInDspCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Currency Role Currency |
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
| `_SalesDistrict` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_CostBreakdownStructure` | | ✓ | | | | |
| `_CostBreakdownComponent` | | ✓ | | | | |
| `_CostBreakdownMethod` | | ✓ | | | | |
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
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CostBreakdownStructure` | `I_CostBreakdownStructure` | [1..1] |
| `_CostBreakdownComponent` | `I_CostBreakdownComponent` | [1..1] |
| `_CostBreakdownMethod` | `I_CostBreakdownMethod` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_DocumentStore` | `I_ProdMargCostBrkDwnDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODMARGCOSTBRKDWNCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODMARGCOSTBRKDWNCUBE')/$value)*

```abap
@EndUserText.label: 'Product Profitability CostBrkDwn - Cube'
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
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_ProdMargCostBrkDwnCube
  with parameters
    P_ComponentBreakdownMethod     : fucb_method,
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from P_GLAcctItemCostBrkDwnDisCrcy
                                  ( 
                                    P_ComponentBreakdownMethod :  $parameters.P_ComponentBreakdownMethod,
                                    P_GLAccountHierarchy : $parameters.P_GLAccountHierarchy
                                  )
  association [0..1] to I_MargAnlysRptCurrencyField  as _CurrencyField             on  $projection.CurrencyField = _CurrencyField.CurrencyField
  
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
  association [0..1] to I_SalesDistrict              as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..*] to I_ProfitCenter               as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter  
  association [0..*] to I_CostCenter                 as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea                            
                                                                                       and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_SalesOrganization          as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                   as _Division                      on  $projection.OrganizationDivision = _Division.Division
  association [0..1] to I_ProfitCenter               as _CurrentProfitCenter           on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                                                                   and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                                                                   and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
  association [0..1] to I_CostCenter                 as _CurrentCostCenter             on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                                                                   and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                                                                   and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                                                                   and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_Order                      as _Order                         on  $projection.OrderID = _Order.OrderID

  association [0..1]   to I_BusinessTransactionType      as _BusinessTransactionType       on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..1] to I_ReferenceDocumentType          as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1]   to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1]   to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  
  association [0..1] to I_Product                    as _SoldProduct                   on  $projection.SoldProduct = _SoldProduct.Product
  association [0..1] to I_JournalEntry               as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                       and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                       and $projection.AccountingDocument = _JournalEntry.AccountingDocument

  association [0..1] to I_BusinessArea               as _BusinessArea          on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea             as _FunctionalArea        on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_ControllingArea            as _ControllingArea       on  $projection.ControllingArea = _ControllingArea.ControllingArea
  
  association [0..1]   to I_ChartOfAccounts          as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1]   to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                          and  $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
 
  association [1..1] to I_CostBreakdownStructure     as _CostBreakdownStructure        on  _CostBreakdownStructure.CostBreakdownStructure     = $projection.CostBreakdownStructure
  association [1..1] to I_CostBreakdownComponent     as _CostBreakdownComponent        on  _CostBreakdownComponent.CostBreakdownStructure     = $projection.CostBreakdownStructure
                                                                                      and  _CostBreakdownComponent.CostBreakdownComponent     = $projection.CostBreakdownComponent
  association [0..1] to I_CostBreakdownMethod        as _CostBreakdownMethod           on  $projection.ComponentBreakdownMethod = _CostBreakdownMethod.ComponentBreakdownMethod   
    
  association [1..1] to E_JournalEntryItem           as _Extension             on  $projection.Ledger             = _Extension.SourceLedger
                                                                               and $projection.CompanyCode        = _Extension.CompanyCode
                                                                               and $projection.FiscalYear         = _Extension.FiscalYear
                                                                               and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                               and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
                                                                               
  association [0..1] to I_ProdMargCostBrkDwnDSt   as _DocumentStore                  on  _DocumentStore.tra_ledger        = $projection.Ledger
                                                                                     and _DocumentStore.tra_sourceledger  = $projection.SourceLedger
                                                                                     and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                                     and _DocumentStore.tra_fiscalyear    = $projection.FiscalYear
                                                                                     and _DocumentStore.tra_00012         = $projection.AccountingDocument
                                                                                     and _DocumentStore.tra_00020         = $projection.LedgerGLLineItem
                                                                                     and _DocumentStore.tra_00013         = $projection.ComponentBreakdownMethod
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
        @ObjectModel.foreignKey.association: '_CostBreakdownMethod' 
  key   ComponentBreakdownMethod,
        @ObjectModel.foreignKey.association: '_CurrencyField'
  key   CurrencyField,
  
        CurrencyRole,
        @Semantics.fiscal.year: true
        LedgerFiscalYear,
        @Semantics.fiscal.period: true
        FiscalPeriod,
        FiscalYearPeriod,
        
        FiscalYearVariant,
        
        @ObjectModel.foreignKey.association: '_CostBreakdownStructure'
        CostBreakdownStructure,

        @ObjectModel.foreignKey.association: '_CostBreakdownComponent'
        CostBreakdownComponent,
        
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
        @ObjectModel.foreignKey.association: '_Division'
        OrganizationDivision,
        @ObjectModel.foreignKey.association: '_Order'
        OrderID,
        @ObjectModel.foreignKey.association: '_SalesDocument'
        SalesDocument,
        @ObjectModel.foreignKey.association: '_SalesDocumentItem'
        SalesDocumentItem,
        @ObjectModel.foreignKey.association: '_SalesOrganization'
        SalesOrganization,
        
        @ObjectModel.foreignKey.association: '_ChartOfAccounts'  
        ChartOfAccounts,
        @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
        GLAccount,
        AccountAssignmentType,
        
        @ObjectModel.foreignKey.association: '_ControllingArea'  
        ControllingArea,
        PostingDate,
        
        @ObjectModel.foreignKey.association: '_BusinessTransactionType'
        BusinessTransactionType,
        @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
        ReferenceDocumentType,
        @ObjectModel.foreignKey.association: '_InventoryValuationType'
        InventoryValuationType,
        @ObjectModel.foreignKey.association: '_Product'
        Product,
       
        Currency,
        
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        AmountInDisplayCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'Currency'} }
        FixedAmountInDspCrcy,
       
        _BusinessTransactionType,
        _ReferenceDocumentType,
        _InventoryValuationType,
        _Product,
        
        _CostBreakdownMethod,
        _ChartOfAccounts,
        _GLAccountInChartOfAccounts,
        _CurrentCostCenter,
        _CurrentProfitCenter,
        _SourceLedger,
        _JournalEntry,
        _ProfitCenter,
        _CostCenter,
        _ControllingArea,
        _Order,
        _DistributionChannel,
        _Division,
        _SalesOrganization,
        _SoldProduct,
        _Ledger,
        _CompanyCode,
        _FiscalYear,
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
        _CostBreakdownStructure,
        _CostBreakdownComponent,
        _SalesDistrict,
        _CurrencyField,
        
        @Analytics.association.toDocumentStorage: true
        _DocumentStore

}
```
