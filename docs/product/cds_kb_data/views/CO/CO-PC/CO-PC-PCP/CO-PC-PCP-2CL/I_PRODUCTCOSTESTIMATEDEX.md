---
name: I_PRODUCTCOSTESTIMATEDEX
description: "This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value
semantic_en: "This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Cost Estimate Extraction — CDS view giao diện dựa trên P_KEKO."
keywords:
  - "product"
  - "cost"
  - "estimate"
  - "extraction"
  - "costing"
  - "reference"
  - "object"
  - "type"
  - "date"
  - "version"
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
# I_PRODUCTCOSTESTIMATEDEX

**This CDS view provides the header information of cost estimates for materials, sales document items and other planning objects, containing the relevant dates, lot size, unit of measure and further costing-related information. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` | ✓ | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` | ✓ | |  | `case CostingDate when '00000000' then '19000101' else CostingDate end` | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | ✓ | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `Material` |  | |  | `Product` | `CHAR(40)` | Product |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `CompanyCode` |  | | `_ValuationArea` | `CompanyCode` | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `CostEstimateValidityEndDate` |  | |  |  | `DATS(8)` | Costing Date To |
| `MaterialValuationDate` |  | |  | `ValuationDate` | `DATS(8)` | Valuation Date of a Cost Estimate |
| `QuantityStructureDate` |  | |  |  | `DATS(8)` | Quantity Structure Date for Costing |
| `ProductionVersion` |  | |  |  | `CHAR(4)` | Production Version |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `ProductBOMUsage` |  | |  |  | `CHAR(1)` | BOM Usage |
| `AlternativeBillOfMaterial` |  | |  |  | `CHAR(2)` | Alternative BOM |
| `TaskListGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `TaskListType` |  | |  |  | `CHAR(1)` | Task List Type |
| `TaskListGroupCounter` |  | |  |  | `CHAR(2)` | Group Counter |
| `CostingItemIsProductComp` |  | |  |  | `CHAR(1)` | Material Component |
| `CostEstIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator for Product Costing |
| `CostingLotSize` |  | |  |  | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `CostEstimateCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CostEstimateCreationDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Created |
| `CostEstimateStatus` |  | |  |  | `CHAR(2)` | Costing Status |
| `CostEstimateIsReleased` |  | |  |  | `CHAR(1)` | Release of Standard Cost Estimate |
| `CostEstimateReleasedByUser` |  | |  |  | `CHAR(12)` | User Who Released Cost Estimate in Material Master Record |
| `CostEstimateReleaseDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Released in Material Master |
| `CostEstimateMarkingDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Marked |
| `CostEstimateMarkingUser` |  | |  | `CostEstimateMarkedByUser` | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostEstimateMarkedByUser` |  | |  |  | `CHAR(12)` | User Who Marked Cost Estimate in Material Master |
| `CostingErrorMessageType` |  | |  |  | `CHAR(1)` | Message Type |
| `CostEstIsMixedCosting` |  | |  |  | `CHAR(1)` | Mixed Costing Indicator |
| `CostEstimateIsForProcmtAltv` |  | |  |  | `CHAR(1)` | Cost Estimate for a Procurement Alternative |
| `ProcmtAltvCostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number of Procurement Alternative |
| `ProcessCategory` |  | |  |  | `CHAR(4)` | Process Category |
| `CostgMixingRatioValue` |  | |  |  | `DEC(13)` | Mixed Costing: Mixing Ratio |
| `ProcmtAltvValuationVariant` |  | |  |  | `CHAR(3)` | Valuation Variant of Procurement Alternative |
| `SpecialProcurementType` |  | |  |  | `CHAR(2)` | Special Procurement Key for the Costing Object |
| `MaterialProcurementType` |  | |  | `ProductProcurementType` | `CHAR(1)` | Special procurement type |
| `SpecialProcurementPlant` |  | |  |  | `CHAR(4)` | Special Procurement Plant - Costing |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet for Calculating Overhead |
| `CostingOverheadType` |  | |  |  | `CHAR(1)` | Overhead Type |
| `MaterialValnStrategy` |  | |  | `ProductValuationStrategy` | `CHAR(1)` | Valuation Strategy for Raw Materials and Purchased Parts |
| `MaterialValnPurgInfoRecdStrgy` |  | |  | `ProductValnPurgInfoRecdStrgy` | `CHAR(1)` | Substrategy for Material Valuat. with Purchasing Info Record |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CostingOverheadGroup` |  | |  |  | `CHAR(10)` | Costing Overhead Group |
| `CostingOverhead` |  | |  |  | `CHAR(6)` | Overhead key |
| `PostingPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `PostingFiscalYear` |  | |  |  | `NUMC(4)` | Posting Date YYYY |
| `CostingErrorLogID` |  | |  |  | `NUMC(12)` | Error Management Number |
| `CostEstimateTransferControl` |  | |  |  | `CHAR(4)` | Transfer Control |
| `LowLevelCode` |  | |  |  | `CHAR(3)` | Low-Level Code |
| `CostEstimateCostingLevel` |  | |  |  | `NUMC(4)` | Costing Level |
| `CostComponentStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `AuxiliaryCostCompStructure` |  | |  |  | `CHAR(2)` | Cost Component Structure for Auxiliary Cost Component Split |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GroupCurrency` |  | |  | `ControllingAreaCurrency` | `CUKY(5)` | Currency Key for the Group Currency |
| `EstimatedCostCostingRun` |  | |  |  | `CHAR(8)` | Name of Costing Run |
| `EstimatedCostCostingRunDate` |  | |  |  | `DATS(8)` | Costing Run Date |
| `ConfiguredProduct` |  | |  |  | `CHAR(40)` | Configured Material (Variant) |
| `IsMaterialCostedWithQtyStruc` |  | |  | `ProductIsCostedWithQtyStruc` | `CHAR(1)` | Material Is Costed with Quantity Structure |
| `_GroupCurrency` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_ProductCostEstimateItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GroupCurrency` | `I_Currency` | [0..1] |
| `_ValuationArea` | `I_ValuationArea` | [1..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_ProductCostEstimateItem` | `I_ProductCostEstimateItemDEX` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTCOSTESTIMATEDEX')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IPRODCESTDEX'

@AccessControl.authorizationCheck: #CHECK

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { viewElement: [ 'CostingReferenceObject',
                                                                                 'CostEstimate',
                                                                                 'CostingType',
                                                                                 'CostingDate',
                                                                                 'CostingVersion',
                                                                                 'ValuationVariant',
                                                                                 'CostIsEnteredManually' ],
                                                                  role: #MAIN,
                                                                  table: 'KEKO',
                                                                  tableElement: [ 'BZOBJ',
                                                                                  'KALNR',
                                                                                  'KALKA',
                                                                                  'KADKY',
                                                                                  'TVERS',
                                                                                  'BWVAR',
                                                                                  'KKZMA' ] },
                                                                { viewElement: [ 'ValuationArea' ],
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  table: 'T001K',
                                                                  tableElement: [ 'BWKEY' ] } ] }

@Analytics.internalName: #LOCAL

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Product Cost Estimate Extraction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'ProductCostEstimate'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #L }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_ProductCostEstimateDEX
  as select from P_KEKO

  association [0..1] to I_Currency                   as _GroupCurrency
    on $projection.GroupCurrency = _GroupCurrency.Currency

  association [1..1] to I_ValuationArea              as _ValuationArea
    on $projection.ValuationArea = _ValuationArea.ValuationArea

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure
    on $projection.ValuationQuantityUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_Currency                   as _CompanyCodeCurrency
    on $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..*] to I_ProductCostEstimateItemDEX as _ProductCostEstimateItem
    on  $projection.CostingReferenceObject = _ProductCostEstimateItem.CostingReferenceObject
    and $projection.CostEstimate           = _ProductCostEstimateItem.CostEstimate
    and $projection.CostingType            = _ProductCostEstimateItem.CostingType
    and $projection.CostingDate            = _ProductCostEstimateItem.CostingDate
    and $projection.CostingVersion         = _ProductCostEstimateItem.CostingVersion
    and $projection.ValuationVariant       = _ProductCostEstimateItem.ValuationVariant
    and $projection.CostIsEnteredManually  = _ProductCostEstimateItem.CostIsEnteredManually

{
  key CostingReferenceObject,
  key CostEstimate,
  key CostingType,

  key case CostingDate
        when '00000000' then '19000101'
        else  CostingDate end        as CostingDate,

  key CostingVersion,
  key ValuationVariant,
  key CostIsEnteredManually,

      Product                        as Material,
      ValuationType,
      Plant,

      @ObjectModel.foreignKey.association: '_ValuationArea'
      ValuationArea,

      _ValuationArea.CompanyCode,
      ControllingArea,
      CostEstimateValidityStartDate,
      CostEstimateValidityEndDate,
      ValuationDate                  as MaterialValuationDate,
      QuantityStructureDate,
      ProductionVersion,
      BillOfMaterial,
      ProductBOMUsage,
      AlternativeBillOfMaterial,
      TaskListGroup,
      TaskListType,
      TaskListGroupCounter,
      CostingItemIsProductComp,
      CostEstIsMarkedForDeletion,

      @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
      CostingLotSize,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      ValuationQuantityUnit,

      @Semantics.user.createdBy: true
      CostEstimateCreatedByUser,

      CostEstimateCreationDate,

      CostEstimateStatus,

      CostEstimateIsReleased,
      CostEstimateReleasedByUser,
      CostEstimateReleaseDate,

      CostEstimateMarkingDate,

      @API.element: { releaseState: #DEPRECATED, successor: 'CostEstimateMarkedByUser' }
      CostEstimateMarkedByUser       as CostEstimateMarkingUser,

      CostEstimateMarkedByUser,

      CostingErrorMessageType,
      CostEstIsMixedCosting,
      CostEstimateIsForProcmtAltv,
      ProcmtAltvCostEstimate,
      ProcessCategory,
      CostgMixingRatioValue,
      ProcmtAltvValuationVariant,
      SpecialProcurementType,
      ProductProcurementType         as MaterialProcurementType,
      SpecialProcurementPlant,
      CostingSheet,
      CostingOverheadType,
      ProductValuationStrategy       as MaterialValnStrategy,
      ProductValnPurgInfoRecdStrgy   as MaterialValnPurgInfoRecdStrgy,
      CostingVariant,
      Ledger,
      CostingOverheadGroup,
      CostingOverhead,
      PostingPeriod,
      PostingFiscalYear,
      CostingErrorLogID,

      CostEstimateTransferControl,
      LowLevelCode,
      CostEstimateCostingLevel,
      CostComponentStructure,
      AuxiliaryCostCompStructure,
      BusinessArea,
      ProfitCenter,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      @ObjectModel.foreignKey.association: '_GroupCurrency'
      @Semantics.currencyCode: true
      ControllingAreaCurrency        as GroupCurrency,

      EstimatedCostCostingRun,
      EstimatedCostCostingRunDate,
      ConfiguredProduct,
      ProductIsCostedWithQtyStruc    as IsMaterialCostedWithQtyStruc,

      _ValuationArea,
      _GroupCurrency,
      _CompanyCodeCurrency,
      _UnitOfMeasure,
      _ProductCostEstimateItem
}
```
