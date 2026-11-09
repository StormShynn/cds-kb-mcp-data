---
name: I_PRODUCTCOSTESTIMATEITEMDEX
description: "This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value
semantic_en: "This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Cost Estimate Item Extraction — CDS view giao diện dựa trên P_CKIS."
keywords:
  - "product"
  - "cost"
  - "estimate"
  - "item"
  - "extraction"
  - "controlling"
  - "ledger"
  - "costing"
  - "reference"
  - "object"
  - "type"
  - "date"
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - document
  - interface-view
  - lob:controlling
  - material
  - plan
  - bo:material
  - product
---
# I_PRODUCTCOSTESTIMATEITEMDEX

**This CDS view provides the results at item level of cost estimates for materials, sales document items and other planning objects. The information can be used to analyze the calculated costs and the origins of the costs. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingLedger` | ✓ | |  |  | `CHAR(2)` | Ledger for Controlling Objects |
| `CostingReferenceObject` | ✓ | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` | ✓ | |  | `case CostingDate when '00000000' then '19000101' else CostingDate end` | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | ✓ | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `CostingItem` | ✓ | |  |  | `NUMC(5)` | Unit Costing Line Item Number |
| `CostingItemCategory` |  | |  |  | `CHAR(1)` | Item Category |
| `CostElement` |  | |  |  | `CHAR(10)` | Cost Element |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `CostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Main Cost Component Split |
| `AuxiliaryCostComponent` |  | |  |  | `NUMC(3)` | Cost Component Number of Auxiliary Cost Component Split |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  | `Product` | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `GroupCurrency` |  | |  | `ControllingAreaCurrency` | `CUKY(5)` | Currency Key for the Group Currency |
| `TotalPriceInGroupCrcy` |  | |  | `cast(TotalPriceInInCtrlgAreaCrcy as ck_gpkw preserving type)` | `CURR(15)` | Total Price in Group Currency |
| `FixedPriceInGroupCrcy` |  | |  | `cast(FixedPriceInCtrlgAreaCrcy as ck_fpkw preserving type)` | `CURR(15)` | Fixed Price in Group Currency |
| `TotalAmountInGroupCrcy` |  | |  | `cast(TotalAmountInCtrlgAreaCrcy as ck_twkw preserving type)` | `CURR(15)` | Total Amount in Group Currency |
| `FixedAmountInGroupCurrency` |  | |  | `cast(FixedAmountInCtrlgAreaCrcy as ck_fwkw preserving type)` | `CURR(15)` | Total Amount in Group Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `TotalPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Total Price in Company Code Currency |
| `FixedPriceInCompanyCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Price in Company Code Currency |
| `TotalAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Total Amount in Company Code Currency |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(15)` | Fixed Amount in Company Code Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity |
| `AssyScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Scrap Quantity |
| `CompScrapQuantityInValnQtyUnit` |  | |  |  | `QUAN(15)` | Component Scrap Quantity |
| `CostingPriceUnitQty` |  | |  |  | `DEC(5)` | Price Unit of Prices in Controlling Area Currency |
| `CostingPriceQtyUnit` |  | |  |  | `UNIT(3)` | Price Quantity Unit |
| `CostingObject` |  | |  |  | `NUMC(8)` | Object ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Operation` |  | |  |  | `CHAR(4)` | Operation or Phase Number |
| `CostingValuationStrategy` |  | |  |  | `CHAR(1)` | Valuation Strategy for Material Component |
| `MaterialValnPurgInfoRecdStrgy` |  | |  | `ProductValnPurgInfoRecdStrgy` | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingInfoRecordCategory` |  | |  |  | `CHAR(1)` | Purchasing info record category |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `TransferCostEstimate` |  | |  |  | `NUMC(12)` | Transfer Cost Estimate |
| `TransferCostingType` |  | |  |  | `CHAR(2)` | Transfer Costing Type |
| `TransferCostingDate` |  | |  |  | `DATS(8)` | Transfer Costing Date |
| `TransferCostingVersion` |  | |  |  | `NUMC(2)` | Transfer Costing Version |
| `TransferValuationVariant` |  | |  |  | `CHAR(3)` | Transfer Valuation Variant |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixing Ratio |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `BillOfMaterialItemNumber` |  | |  |  | `CHAR(4)` | Bill of Material Item Number |
| `CostingItemIsAssembly` |  | |  |  | `CHAR(1)` | Assembly Indicator for Item |
| `ValuationSegmentation` |  | |  |  | `CHAR(30)` | Valuation Segmentation Unit |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `LowLevelCode` |  | |  |  | `CHAR(3)` | Low-Level Code |
| `CostCompSplitIsExisting` |  | |  |  | `CHAR(1)` | Main Cost Component Split for KALKTAB Item Exists |
| `HasError` |  | |  |  | `CHAR(1)` | Error Indicator |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Lot-Size-Independent Indicator |
| `_CostEstimateHead` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_CostingUnitOfMeasure` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostEstimateHead` | `I_ProductCostEstimateDEX` | [1..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CostingUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_GroupCurrency` | `I_Currency` | [1..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEITEMDEX')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IPRODCESTITEMDEX'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { viewElement: [ 'ControllingLedger',
                                                                                 'CostingReferenceObject',
                                                                                 'CostEstimate',
                                                                                 'CostingType',
                                                                                 'CostingDate',
                                                                                 'CostingVersion',
                                                                                 'ValuationVariant',
                                                                                 'CostIsEnteredManually',
                                                                                 'CostingItem' ],
                                                                  role: #MAIN,
                                                                  table: 'CKIS',
                                                                  tableElement: [ 'LEDNR',
                                                                                  'BZOBJ',
                                                                                  'KALNR',
                                                                                  'KALKA',
                                                                                  'KADKY',
                                                                                  'TVERS',
                                                                                  'BWVAR',
                                                                                  'KKZMA',
                                                                                  'POSNR' ],
                                                                  filter: [ { tableElement: 'LEDNR', value: '00' } ] },
                                                                { viewElement: [ 'CostingReferenceObject',
                                                                                 'CostEstimate',
                                                                                 'CostingType',
                                                                                 'CostingDate',
                                                                                 'CostingVersion',
                                                                                 'ValuationVariant',
                                                                                 'CostIsEnteredManually' ],
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  table: 'KEKO',
                                                                  tableElement: [ 'BZOBJ',
                                                                                  'KALNR',
                                                                                  'KALKA',
                                                                                  'KADKY',
                                                                                  'TVERS',
                                                                                  'BWVAR',
                                                                                  'KKZMA' ] } ] }

@Analytics.internalName: #LOCAL

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Product Cost Estimate Item Extraction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.sapObjectNodeType.name: 'ProductCostEstimateItem'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #XL }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_ProductCostEstimateItemDEX
  as select from P_CKIS

  association [1..1] to I_ProductCostEstimateDEX as _CostEstimateHead
    on  $projection.CostingReferenceObject = _CostEstimateHead.CostingReferenceObject
    and $projection.CostEstimate           = _CostEstimateHead.CostEstimate
    and $projection.CostingType            = _CostEstimateHead.CostingType
    and $projection.CostingDate            = _CostEstimateHead.CostingDate
    and $projection.CostingVersion         = _CostEstimateHead.CostingVersion
    and $projection.ValuationVariant       = _CostEstimateHead.ValuationVariant
    and $projection.CostIsEnteredManually  = _CostEstimateHead.CostIsEnteredManually

  association [0..1] to I_UnitOfMeasure          as _BaseUnitOfMeasure
    on $projection.BaseUnit = _BaseUnitOfMeasure.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure          as _CostingUnitOfMeasure
    on $projection.CostingPriceQtyUnit = _CostingUnitOfMeasure.UnitOfMeasure

  association [1..1] to I_Currency               as _GroupCurrency
    on $projection.GroupCurrency = _GroupCurrency.Currency

  association [1..1] to I_Currency               as _CompanyCodeCurrency
    on $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

{
  key ControllingLedger,
  key CostingReferenceObject,
  key CostEstimate,
  key CostingType,

  key case CostingDate
        when '00000000' then '19000101'
        else CostingDate end                                       as CostingDate,

  key CostingVersion,
  key ValuationVariant,
  key CostIsEnteredManually,
  key CostingItem,

      CostingItemCategory,
      CostElement,
      CostOriginGroup,
      CostComponent,
      AuxiliaryCostComponent,
      CompanyCode,
      Plant,
      Product                                                      as Material,
      ValuationType,
      Creditor,

      @ObjectModel.foreignKey.association: '_GroupCurrency'
      ControllingAreaCurrency                                      as GroupCurrency,

      @Semantics.amount.currencyCode: 'GroupCurrency'
      cast(TotalPriceInInCtrlgAreaCrcy as ck_gpkw preserving type) as TotalPriceInGroupCrcy,

      @Semantics.amount.currencyCode: 'GroupCurrency'
      cast(FixedPriceInCtrlgAreaCrcy as ck_fpkw preserving type)   as FixedPriceInGroupCrcy,

      @Semantics.amount.currencyCode: 'GroupCurrency'
      cast(TotalAmountInCtrlgAreaCrcy as ck_twkw preserving type)  as TotalAmountInGroupCrcy,

      @Semantics.amount.currencyCode: 'GroupCurrency'
      cast(FixedAmountInCtrlgAreaCrcy as ck_fwkw preserving type)  as FixedAmountInGroupCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalPriceInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedPriceInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalAmountInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedAmountInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityInBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      AssyScrapQuantityInValnQtyUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CompScrapQuantityInValnQtyUnit,

      @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
      CostingPriceUnitQty,

      @ObjectModel.foreignKey.association: '_CostingUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      CostingPriceQtyUnit,

      CostingObject,
      CostCenter,
      CostCtrActivityType,
      ProfitCenter,
      Operation,
      CostingValuationStrategy,
      ProductValnPurgInfoRecdStrgy                                 as MaterialValnPurgInfoRecdStrgy,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchasingInfoRecordCategory,
      PurchasingDocument,
      PurchasingDocumentItem,

      TransferCostEstimate,
      TransferCostingType,
      TransferCostingDate,
      TransferCostingVersion,
      TransferValuationVariant,

      CostEstIsMixedCosting,
      CostgMixingRatioValue,
      ProcmtAltvCostEstimate,
      BillOfMaterialItemNumber,
      CostingItemIsAssembly,
      ValuationSegmentation,
      BusinessArea,
      WBSElementInternalID,
      LowLevelCode,
      CostCompSplitIsExisting,
      HasError,

      @Semantics.booleanIndicator: true
      IsLotSizeIndependent,

      _CostEstimateHead,
      _CostingUnitOfMeasure,
      _BaseUnitOfMeasure,
      _CompanyCodeCurrency,
      _GroupCurrency
}
```
