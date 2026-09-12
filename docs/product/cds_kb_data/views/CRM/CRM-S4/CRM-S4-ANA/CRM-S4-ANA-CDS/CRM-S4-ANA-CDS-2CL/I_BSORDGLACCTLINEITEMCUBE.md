---
name: I_BSORDGLACCTLINEITEMCUBE
description: "Bsordglacctlineitemcube"
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - analytical
  - item-level
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BSORDGLACCTLINEITEMCUBE

**Bsordglacctlineitemcube**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `BusinessSolutionOrder` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `BusinessSolutionOrderItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `BusSolnOrdType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusSolnOrdDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `BusSolnOrdItmDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `BusSolnOrdItmStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `BusSolnOrdStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `CostAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Cost Amount in Company Code Currency |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `SlsItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `SrvcContrItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `ExpnItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `SbscrBilgItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `SrvcPrtItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `SrvcItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `EntProjItmRevenueAmount` |  | |  |  | `CURR(23)` | Revenue Amount in Company Code Currency |
| `CalendarYear` |  | | `_CalendarPeriod` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | | `_CalendarPeriod` | `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | | `_CalendarPeriod` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `Product` |  | |  |  | `CHAR(40)` | Product Sold |
| `_ServiceObjType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarPeriod` | `I_CalendarDate` | [1] |

## Source Code

```abap
@EndUserText.label: 'GL Account Item for Soln Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IBSGLLINITMCUBE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
   dataCategory: #CUBE,
   internalName: #LOCAL
   }
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE
}
@Aggregation.allowPrecisionLoss:true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_BSOrdGLAcctLineItemCube
  with parameters
    P_DisplayCurrency : vdm_v_display_currency

  as select from P_BSOrdGLAcctLineItemCube

  association [1] to I_CalendarDate as _CalendarPeriod on $projection.PostingDate = _CalendarPeriod.CalendarDate

{
          @ObjectModel.foreignKey.association: '_ServiceObjType'
  key     ServiceObjectType,
          @ObjectModel.text.element: 'BusSolnOrdDescription'
          @EndUserText.label: 'Solution Order'
  key     BusinessSolutionOrder,

          @ObjectModel.text.element: 'BusSolnOrdItmDescription'
          @EndUserText.label: 'Solution Order Item'
  key     BusinessSolutionOrderItem,

          @ObjectModel.foreignKey.association: '_CompanyCode'
          @Environment.sql.passValue: true
  key     CompanyCode,

          @ObjectModel.foreignKey.association: '_FiscalYear'
          @Environment.sql.passValue: true
  key     FiscalYear,

          @ObjectModel.foreignKey.association: '_JournalEntry'
  key     AccountingDocument,
  key     LedgerGLLineItem,

          @ObjectModel.foreignKey.association: '_SemanticTag'
  key     SemanticTag,


          @ObjectModel.foreignKey.association: '_ServiceDocumentType'
          @EndUserText.label: 'Solution Order Type'
          BusSolnOrdType,

          @Semantics.text: true
          @EndUserText.label: 'Solution Order Description'
          BusSolnOrdDescription,

          @Semantics.text: true
          BusSolnOrdItmDescription,

          @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
          @EndUserText.label: 'Solution Order Item Status'
          BusSolnOrdItmStatus,

          @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
          @EndUserText.label: 'Solution Order Status'
          BusSolnOrdStatus,

          @ObjectModel.foreignKey.association: '_TransactionCurrency'
          @Semantics.currencyCode:true
          TransactionCurrency,

          @Semantics.currencyCode: true
          $parameters.P_DisplayCurrency   as DisplayCurrency,
          

          @ObjectModel.foreignKey.association: '_SalesOrganization'
          SalesOrganization,
          @ObjectModel.foreignKey.association: '_DistributionChannel'
          DistributionChannel,
          @ObjectModel.foreignKey.association: '_Division'
          Division,
          @ObjectModel.foreignKey.association: '_SalesOffice'
          SalesOffice,
          @ObjectModel.foreignKey.association: '_SalesGroup'
          SalesGroup,
          @ObjectModel.foreignKey.association: '_SoldToParty'
          SoldToParty,

          PostingDate,
          @Semantics.currencyCode:true
          CompanyCodeCurrency,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Revenue'
          RevenueAmountInCompanyCodeCrcy,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Cost'
          CostAmountInCompanyCodeCrcy,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Margin'
          RecognizedMarginAmtInCCCrcy,

          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SlsItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcContrItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          ExpnItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SbscrBilgItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcPrtItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          EntProjItmRevenueAmount,
          
          @Semantics.calendar.year
          _CalendarPeriod.CalendarYear    as CalendarYear,
          @Semantics.calendar.quarter
          _CalendarPeriod.CalendarQuarter as CalendarQuarter,
          @Semantics.calendar.month
          _CalendarPeriod.CalendarMonth   as CalendarMonth,

          @Semantics.fiscal.yearVariant: true
          @ObjectModel.foreignKey.association: '_FiscalYearVariant'
          FiscalYearVariant,
          FiscalPeriod,
          FiscalQuarter,
          Product,

          _ServiceObjType,
          _CompanyCode,
          _FiscalYear,
          _JournalEntry,
          _SemanticTag,
          _ServiceDocumentType,
          @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_SrvcDocItmLifecycleStatus'
          _ServiceDocItemStatus,
          _SrvcDocItmLifecycleStatus,
          @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_SrvcDocLifecycleStatus'
          _ServiceDocumentStatus,
          _SrvcDocLifecycleStatus,
          _TransactionCurrency,
          _SalesOrganization,
          _DistributionChannel,
          _Division,
          _SalesOffice,
          _SalesGroup,
          _SoldToParty,
          _CalendarPeriod._CalendarYear,
          _CalendarPeriod._CalendarQuarter,
          _CalendarPeriod._CalendarMonth,
          _FiscalYearVariant
          
}
```
