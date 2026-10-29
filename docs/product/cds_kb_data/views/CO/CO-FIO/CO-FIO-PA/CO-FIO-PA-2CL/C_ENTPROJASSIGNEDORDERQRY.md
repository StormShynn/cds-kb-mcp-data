---
name: C_ENTPROJASSIGNEDORDERQRY
description: "Enterprise Project Assigned Orders Query"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value
semantic_en: "Enterprise Project Assigned Orders Query"
semantic_vi: "Enterprise Project Assigned Orders Query — CDS view tiêu dùng dựa trên Enterprise Project Assigned Orders Query."
keywords:
  - "enterprise"
  - "project"
  - "assigned"
  - "orders"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "assignment"
  - "type"
  - "fiscal"
  - "year"
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - order
  - project
---
# C_ENTPROJASSIGNEDORDERQRY

**Enterprise Project Assigned Orders Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AssignedOrderNumber` |  | |  |  | `CHAR(12)` | Standing order number |
| `ETOOrdCategory` |  | |  |  | `CHAR(2)` | Order Category |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `Project` |  | |  |  | `CHAR(24)` | Project (external ID) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `BillingWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `ProjectManager` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `_LedgerText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENTPROJASSIGNEDORDERQRY')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking:#REQUIRED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Enterprise Project Assigned Orders Query'
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
define transient view entity C_EntProjAssignedOrderQry 
provider contract analytical_query
with parameters
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }
    //@Consumption.defaultValue: 'K4'
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant  : fis_periv
    
  as projection on I_ETOProjectItemCube  as I_ETOProjectItemCube
  association [0..*] to I_LedgerText as _LedgerText on $projection.Ledger = _LedgerText.Ledger
{
  @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger', binding: [
    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
   }
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
  @AnalyticsDetails.query.variableSequence : 90
  @UI.textArrangement: #TEXT_LAST
  @ObjectModel.text.association: '_LedgerText'
  Ledger,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: true, hidden: false }
  CompanyCode,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 110
  @UI.textArrangement: #TEXT_LAST
  AccountAssignmentType,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                       additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] 
  }]
  @Consumption.derivation: { lookupEntity:  'F_FsclYrDteFuncSglVal',
                             resultElement: 'FiscalYear',
                             binding: [ { targetParameter: 'P_DateFunction', 
                                          type : #CONSTANT, 
                                          value: 'CURRENTFISCALYEAR' },
                                        { targetParameter: 'P_FiscalYearVariant', 
                                          type : #PARAMETER, 
                                          value: 'P_FiscalYearVariant' }
                             ]
  }
  @Semantics.fiscal.year: true
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  FiscalYear,

  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', 
                                                element: 'FiscalYear' } ,
                                       additionalBinding: [{ localElement: 'CompanyCode', 
                                                             element: 'CompanyCode' }] 
  }]
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  LedgerFiscalYear,

  @Semantics.fiscal.yearVariant: true
  @UI.textArrangement: #TEXT_LAST
  FiscalYearVariant,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Semantics.fiscal.period: true
  @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                       additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                            { localElement: 'FiscalYear', element: 'FiscalYear' }
                                       ]
  }]

  @UI.textArrangement: #TEXT_LAST
  FiscalPeriod,

  @UI.textArrangement: #TEXT_LAST
  @Semantics.fiscal.yearPeriod: true
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  FiscalYearPeriod,

  @UI.textArrangement: #TEXT_LAST
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND
  ProfitCenter,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProductGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  SoldProduct,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Assgined Order Number'
  AssignedOrderNumber,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label: 'Assgined Order Category'  
  @UI.textArrangement: #TEXT_ONLY  
  ETOOrdCategory,


  SalesDocument,
  
  @EndUserText.label: 'Order'
  OrderID,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false } 
  @EndUserText.label: 'Purchase Order'
  PurchasingDocument,

  @UI.textArrangement: #TEXT_LAST
//  @AnalyticsDetails.query.keyDisplay: #NOT_COMPOUND  
  GLAccount,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Project Profile'
//  @AnalyticsDetails.query: {axis: #ROWS}
  @UI.textArrangement: #TEXT_LAST
  ProjectProfileCode,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query: {axis: #ROWS}
  Project,
  
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }  
  @EndUserText.label: 'Project External ID'  
  ProjectExternalID,


  @EndUserText.label: 'Billing Element'
  BillingWBSElementExternalID, 
  
  @Consumption.valueHelpDefinition: [{ entity: { name : 'I_WBSElementBasicDataStdVH', element : 'WBSElementExternalID' } }]
  WBSElementExternalID,


  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @UI.textArrangement: #TEXT_LAST
  Plant,  

  @UI.textArrangement: #TEXT_LAST
  Product,  

  @UI.textArrangement: #TEXT_LAST
  SalesOrganization,

  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierCountry,

  @UI.textArrangement: #TEXT_LAST
  CustomerSupplierIndustry,

  @UI.textArrangement: #TEXT_LAST
  SalesDistrict,

  @UI.textArrangement: #TEXT_LAST
  ShipToParty,

  @UI.textArrangement: #TEXT_LAST
  BillToParty,

  @UI.textArrangement: #TEXT_LAST
  Segment,


  ServiceContract,

  ServiceContractItem,

  @UI.textArrangement: #TEXT_LAST
  ServiceContractType,

  ServiceDocument,

  ServiceDocumentItem,

  ServiceDocumentType,

  ControllingDebitCreditCode,
  
//  @UI.textArrangement: #TEXT_LAST
//  BusinessSolutionOrder,
//
//  @UI.textArrangement: #TEXT_LAST
//  BusinessSolutionOrderItem,
//
//  @UI.textArrangement: #TEXT_LAST
//  ProviderContract,
//
//  @UI.textArrangement: #TEXT_LAST
//  ProviderContractItem,

  @UI.textArrangement: #TEXT_ONLY //TEXT_LAST
  Currency,

  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true, defaultValue: 'CCC ' }
  @AnalyticsDetails.query: {axis: #COLUMNS}
  @UI.textArrangement: #TEXT_ONLY
  CurrencyField,

  @Semantics.amount.currencyCode: 'Currency'
  @OData.v2.amount.noDecimalShift: true
  @Aggregation.default: #SUM
  AmountInDisplayCurrency,

  
   _LedgerText,
  @EndUserText.label: 'Project Manager'   
   ProjectManager 
  }
where ProjectProfileCode = 'YP05'
```
