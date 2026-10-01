---
name: C_CMMDTYHDGEVALREPORTQUERY
description: "CMMF Hedge Acc Evaluation Report - Qry"
app_component: FIN-FSCM-CMM-HACC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYHDGEVALREPORTQUERY')/$value
semantic_en: "CMMF Hedge Acc Evaluation Report - Qry"
semantic_vi: "CMMF Hedge Acc Evaluation Report - Qry — CDS view tiêu dùng dựa trên I_CmmdtyHdgEvalReportCube."
keywords:
  - "cmmf"
  - "hedge"
  - "acc"
  - "evaluation"
  - "report"
  - "qry"
  - "date"
  - "calculation"
  - "base"
  - "transaction"
  - "company"
  - "code"
  - "deal"
  - "identifier"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-FSCM-CMM-HACC
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-HACC
  - lob:finance
  - lob:sourcing & procurement
---
# C_CMMDTYHDGEVALREPORTQUERY

**CMMF Hedge Acc Evaluation Report - Qry**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-HACC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYHDGEVALREPORTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EvaluationDate` | ✓ | |  |  | `DATS(8)` | Evaluation Date |
| `DueCalculationBaseDate` | ✓ | |  |  | `DATS(8)` | Field of type DATS |
| `FinTransactionCompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinTransactionDealIdentifier` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `CmmdtyHdgEvalRunDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Counterparty` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(100)` | Text (100 characters) |
| `OnBehalfOfCompany` |  | |  |  | `CHAR(4)` | On Behalf of Company Code |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `HedgingClassification` |  | |  |  | `CHAR(5)` | Hedging Classification |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CmmdtyHdgFinTransInitPortfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `CmmdtyHdgFinTransLastPortfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `FinTransContractStartDate` |  | |  |  | `DATS(8)` | Contract Conclusion Date |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Payment or Delivery Date |
| `FinTransactionPricingStartDate` |  | |  |  | `DATS(8)` | Start of Calculation Period |
| `FinTransactionPricingEndDate` |  | |  |  | `DATS(8)` | End of Calculation Period |
| `Quantity` |  | |  |  | `QUAN(13)` | Quantity |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmHdgFinTransCmmdtyPriceAmt` |  | |  |  | `DEC(13)` | Commodity Price |
| `FinancialTransactionAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `FinTransFlowPaytAmtCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXBuyAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmmdtyHdgFinTransFXBuyCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXSellAmount` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmmdtyHdgFinTransFXSellCrcy` |  | |  |  | `CUKY(5)` | Payment Currency |
| `CmmdtyHdgFinTransFXCrcyRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `CmmdtyHdgFinTransFXSpotRate` |  | |  |  | `DEC(13)` | Spot Rate |
| `CmmdtyHdgFinTransFXSwapRate` |  | |  |  | `DEC(13)` | Swap Rate |
| `CommodityHedgePlanExposureID` |  | |  |  | `CHAR(13)` | Character field 13 digits |
| `CmmdtyHdgPlanExposureDirection` |  | |  |  | `CHAR(4)` | Undefined range (can be used for patch levels) |
| `CmmdtyHedgePlanExposureDCSID` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `CmmdtyHdgPlnExpsrPrcgStartDate` |  | |  |  | `DATS(8)` | Date data element for SYST |
| `CmmdtyHdgPlnExpsrPrcgEndDate` |  | |  |  | `DATS(8)` | Date data element for SYST |
| `CmmdtyHdgPlnExpsrDelivStrtDate` |  | |  |  | `DATS(8)` | Date data element for SYST |
| `CmmdtyHdgPlnExpsrDelivEndDate` |  | |  |  | `DATS(8)` | Date data element for SYST |
| `CmmdtyHdgPlanExposureHedgeBook` |  | |  |  | `CHAR(10)` | Character Field with Length 10 |
| `CmmdtyHdgPlnExpsrIsAcctgRlvt` |  | |  |  | `CHAR(1)` | New Input Values |
| `CmmdtyHdgPlnExpsrHedgingArea` |  | |  |  | `CHAR(20)` | Char 20 |
| `CmmdtyHdgPlnExpsrValidFromDate` |  | |  |  | `DATS(8)` | Date data element for SYST |
| `CmmdtyHedgePlnExposureQuantity` |  | |  |  | `QUAN(13)` | Quantity |
| `CmmdtyHdgPlnExpsrQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmHdgExtCmmdtyTransCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CmHdgExtCmmdtyFinTransactionID` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CounterdealItemCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CounterdealItemDealIdentifier` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `CounterdealRequestIdentifier` |  | |  |  | `CHAR(13)` | Hedge Request ID |
| `ValuationCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmHdgTransKeyDteEvalPrcCrcy` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmHdgFinTransKeyDteEvalPrcUoM` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmHdgFinTransKeyDteFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteInPsCFairAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVRskFreeAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDateCrdtValAdjAmt` |  | |  |  | `CURR(21)` | Credit Value Adjustment |
| `CmHdgTransKeyDteDebitValAdjAmt` |  | |  |  | `CURR(21)` | Debit Value Adjustment |
| `CmHdgFinTransKeyDateEvalPrcAmt` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmHdgFinTransBaseDteFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransBaseDteInPsCFairAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransBaseDteNPVRskFreeAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransBaseDteCrdtValAdjAmt` |  | |  |  | `CURR(21)` | Credit Value Adjustment |
| `CmHdgTransBaseDteDebtValAdjAmt` |  | |  |  | `CURR(21)` | Debit Value Adjustment |
| `CmHdgFinTransBaseDteEvalPrcAmt` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `CmmdtyHdgFinTransMaturityDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `CmHdgFinTransMttyDtFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransMatDteInPsCFairAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgFinTransMttyDteEvalPrcAmt` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `TreasuryValuationArea` |  | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `HedgingRelationship` |  | |  |  | `CHAR(10)` | Hedging Relationship Number (External/Internal) |
| `HedgingRelationshipFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Hedging Relationship |
| `HedgingRelationshipStatus` |  | |  |  | `CHAR(2)` | Hedging Relationship Display Status |
| `FinancialExposureSubItem` |  | |  |  | `CHAR(13)` | Exposure Subitem ID |
| `CmmdtyHdgHyptclDrvtvIdentifier` |  | |  |  | `CHAR(13)` | Hypothetical Derivative Instrument Number |
| `CmmdtyHdgHyptclDrvtvPriceAmt` |  | |  |  | `DEC(13)` | Commodity Price |
| `CmmdtyHdgHyptclDrvtvPrcCrcy` |  | |  |  | `CUKY(5)` | Currency Key |
| `CmmdtyHdgHyptclDrvtvPriceUoM` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `CmmdtyHdgHyptclDrvtvFXRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `CmmdtyHdgKeyDteHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgKeyDateHdgRvEffFrznAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgKeyDteHdgRsrvIneffctvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgKeyDteCostHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgKeyDteCostHdgRvEffFrznAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgKeyDteCostHdgRvIneffAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgKeyDtePnLAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgKeyDteBsAdjPostdAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgKeyDteBsAdjCumltvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgBsAdjCostHdgRvEffPostdAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `BsAdjCostHdgRvEffCumltvAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `HdgKeyDteHyptclDrvtvFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvSpotValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgBaseDteHdgRvEffAcAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgBaseDteHdgRvEffFrznAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgBaseDteHdgResIneffctvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgBaseDteCostHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `BaseDteCostHdgRvEffFrznAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgBaseDteCostHdgRvIneffAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgBaseDtePnLAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgHdggRelshpDsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmmdtyHdggRelshpIsLateDsgntd` |  | |  |  | `CHAR(1)` | General Flag |
| `CmHdgHdggInstrDsgntnFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgHdgRelNetDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `HdggInstrNetDdsgntnFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgNetDdsgntnHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `NetDdsgntnHdgRsrvIneffctvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `NetDdsgntnCostHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `NetDdsgntnCostHdgRvIneffAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgNetDdsgntnPnLAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgHdggRelshpGrssDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `HdggInstrGrssDdsgntnFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgGrssDdsgntnHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `GrssDdsgntnHdgRvEffFrznAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `GrssDdsgntnHdgRsrvIneffctvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `GrssDdsgntnCostHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `GrssDdsgntnCostHdgRvEffFrznAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `GrssDdsgntnCostHdgRvIneffAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgGrssDdsgntnPnLAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdggRelshpPlndDdsgntnDte` |  | |  |  | `DATS(8)` | Field of type DATS |
| `HdggInstrPlndDdsgntnFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `PlndDdsgntnRsrvEffctvActvAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmHdgPlndDdsgntnHdgRvIneffAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `PlndDdsgntnCostHdgRvEffAcAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `PlndDdsgntnCostHdgRvIneffAmt` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |
| `CmmdtyHdgPlndDdsgntnPnLAmount` |  | |  |  | `CURR(21)` | Amount of Hedged Item or Hedging Instrument |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYHDGEVALREPORTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYHDGEVALREPORTQUERY')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'CCMMFHAEVRPTQRY',
                compiler.compareFilter: true }

@AccessControl: { authorizationCheck:    #NOT_REQUIRED,  //#PRIVILEGED_ONLY,
                  personalData.blocking: #NOT_REQUIRED }

@Analytics: { query:        true,
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions:             false,
             ignorePropagatedAnnotations: true }

@ObjectModel: { usageType.dataClass:      #MIXED,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #XL,
                supportedCapabilities: [ #ANALYTICAL_QUERY  ],
                modelingPattern: #ANALYTICAL_QUERY }

//@OData.publish: true

@VDM: { viewType: #CONSUMPTION }

@EndUserText.label: 'CMMF Hedge Acc Evaluation Report - Qry'
define view C_CmmdtyHdgEvalReportQuery
  with parameters
    @EndUserText.label: 'Evaluation Date'
    @Environment.systemField: #SYSTEM_DATE
    P_EvalDate                    : sydate, //cmmf_evaluation_date,
    @EndUserText.label: 'Base Date'
    P_RefDate                     : sydate, //cmmf_base_date,
    @Consumption.defaultValue: 'MIXED'
    @EndUserText.label: 'Selection Option'
    P_CmmdtyEvalSelectionApproach : rsnum_c10 // char10 //cmmf_evalrpt_approach

  as select from I_CmmdtyHdgEvalReportCube( P_EvalDate              : $parameters.P_EvalDate,
                                            P_RefDate               : $parameters.P_RefDate,
                                            P_CmmdtyEvalSelectionApproach : $parameters.P_CmmdtyEvalSelectionApproach )
{
      // Selection Parameters   
      //‾‾‾‾‾‾‾‾‾‾
  key EvaluationDate,
  key DueCalculationBaseDate,

      @Consumption.filter: { selectionType:      #INTERVAL,
                             multipleSelections: true,
                             mandatory:          false,
                             hidden:             false }
      @AnalyticsDetails.query.display: #KEY_TEXT
  key FinTransactionCompanyCode,
      @Consumption.filter: { selectionType:      #INTERVAL,
                             multipleSelections: true,
                             mandatory:          false,
                             hidden:             false }
      @AnalyticsDetails.query.display: #KEY_TEXT
  key FinTransactionDealIdentifier,

      // Deal
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      @AnalyticsDetails.query.axis: #ROWS
  key CompanyCode,
      @AnalyticsDetails.query.axis: #ROWS
  key FinancialTransaction,

      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgEvalRunDateTime,

      @Consumption.filter: { selectionType:      #INTERVAL,
                             multipleSelections: true,
                             mandatory:          false,
                             hidden:             false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialInstrProductCategory,

      @Consumption.filter: { selectionType:      #INTERVAL,
                       multipleSelections: true,
                       mandatory:          false,
                       hidden:             false }
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialInstrumentProductType,
      @AnalyticsDetails.query.axis: #ROWS
      FinInstrTransactionCategory,
      @AnalyticsDetails.query.axis: #ROWS
      FinancialInstrTransactionType,

      @AnalyticsDetails.query.axis: #ROWS
      Counterparty,
      @AnalyticsDetails.query.axis: #ROWS
      BusinessPartnerName,

      @AnalyticsDetails.query.axis: #ROWS
      OnBehalfOfCompany,

      @AnalyticsDetails.query.axis: #ROWS
      CreatedByUser,
      @AnalyticsDetails.query.axis: #ROWS
      DerivativeContrSpecification,
      @AnalyticsDetails.query.axis: #ROWS
      HedgingClassification,

      @AnalyticsDetails.query.axis: #ROWS
      Portfolio,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgFinTransInitPortfolio,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgFinTransLastPortfolio,

      @AnalyticsDetails.query.axis: #ROWS
      FinTransContractStartDate,
      @AnalyticsDetails.query.axis: #ROWS
      FinTransFlowPaymentDate,

      @AnalyticsDetails.query.axis: #ROWS
      FinTransactionPricingStartDate,
      @AnalyticsDetails.query.axis: #ROWS
      FinTransactionPricingEndDate,

      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      Quantity,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.unitOfMeasure: true
      UnitOfMeasure,

      CmHdgFinTransCmmdtyPriceAmt,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      FinancialTransactionAmount,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      FinTransFlowPaytAmtCrcy,

      @Semantics.amount.currencyCode: 'CmmdtyHdgFinTransFXBuyCrcy'
      CmmdtyHdgFinTransFXBuyAmount,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      CmmdtyHdgFinTransFXBuyCrcy,
      @Semantics.amount.currencyCode: 'CmmdtyHdgFinTransFXSellCrcy'
      CmmdtyHdgFinTransFXSellAmount,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      CmmdtyHdgFinTransFXSellCrcy,
      CmmdtyHdgFinTransFXCrcyRate,
      CmmdtyHdgFinTransFXSpotRate,
      CmmdtyHdgFinTransFXSwapRate,

      // Commodity Exposure
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      @AnalyticsDetails.query.axis: #ROWS
      CommodityHedgePlanExposureID,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlanExposureDirection,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHedgePlanExposureDCSID,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrPrcgStartDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrPrcgEndDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrDelivStrtDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrDelivEndDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlanExposureHedgeBook,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrIsAcctgRlvt,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrHedgingArea,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgPlnExpsrValidFromDate,
      @Semantics.quantity.unitOfMeasure: 'CmmdtyHdgPlnExpsrQuantityUnit'
      CmmdtyHedgePlnExposureQuantity,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.unitOfMeasure: true
      CmmdtyHdgPlnExpsrQuantityUnit,

      //      CmmdtyHedgeConstellationUUID,
      @AnalyticsDetails.query.axis: #ROWS
      CmHdgExtCmmdtyTransCompanyCode,
      @AnalyticsDetails.query.axis: #ROWS
      CmHdgExtCmmdtyFinTransactionID,
      @AnalyticsDetails.query.axis: #ROWS
      CounterdealItemCompanyCode,
      @AnalyticsDetails.query.axis: #ROWS
      CounterdealItemDealIdentifier,
      @AnalyticsDetails.query.axis: #ROWS
      CounterdealRequestIdentifier,

      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      ValuationCurrency,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      PositionCurrency,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.currencyCode: true
      CmHdgTransKeyDteEvalPrcCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.unitOfMeasure: true
      CmHdgFinTransKeyDteEvalPrcUoM,

      // Classic Key Figures
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      // Evaluation Results on Key Date
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgFinTransKeyDteFairValAmt,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      CmHdgTransKeyDteInPsCFairAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDteNPVRskFreeAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDateCrdtValAdjAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDteDebitValAdjAmt,
      @Semantics.amount.currencyCode: 'CmHdgTransKeyDteEvalPrcCrcy'
      CmHdgFinTransKeyDateEvalPrcAmt,

      // Evaluation Results on Base Date
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgFinTransBaseDteFairValAmt,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      CmHdgTransBaseDteInPsCFairAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransBaseDteNPVRskFreeAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransBaseDteCrdtValAdjAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransBaseDteDebtValAdjAmt,
      @Semantics.amount.currencyCode: 'CmHdgTransKeyDteEvalPrcCrcy'
      CmHdgFinTransBaseDteEvalPrcAmt,

      // Evaluation Results on Maturity
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgFinTransMaturityDate,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgFinTransMttyDtFairValAmt,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      CmHdgTransMatDteInPsCFairAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgTransMttyDteNPVRskFreeAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgTransMttyDtCrdtValAdjAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgTransMttyDteDebtValAdjAmt,
      @Semantics.amount.currencyCode: 'CmHdgTransKeyDteEvalPrcCrcy'
      CmHdgFinTransMttyDteEvalPrcAmt,

      //
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      @AnalyticsDetails.query.axis: #ROWS
      TreasuryValuationArea,

      // Hedge Accounting
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
      @AnalyticsDetails.query.axis: #ROWS
      HedgingRelationship,
      @AnalyticsDetails.query.axis: #ROWS
      HedgingRelationshipFiscalYear,
      @AnalyticsDetails.query.axis: #ROWS
      HedgingRelationshipStatus,

      @AnalyticsDetails.query.axis: #ROWS
      FinancialExposureSubItem,

      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHyptclDrvtvIdentifier,
      CmmdtyHdgHyptclDrvtvPriceAmt,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHyptclDrvtvPrcCrcy,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHyptclDrvtvPriceUoM,

      CmmdtyHdgHyptclDrvtvFXRate,

      // Hedge Accounting Key Figures
      //‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

      // Key Date
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgKeyDteHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDateHdgRvEffFrznAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteHdgRsrvIneffctvAmt,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteCostHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteCostHdgRvEffFrznAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteCostHdgRvIneffAmt,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgKeyDtePnLAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgKeyDteBsAdjPostdAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgKeyDteBsAdjCumltvAmt,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBsAdjCostHdgRvEffPostdAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      BsAdjCostHdgRvEffCumltvAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvFairValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvSpotValAmt,

      // Base Date
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBaseDteHdgRvEffAcAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBaseDteHdgRvEffFrznAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBaseDteHdgResIneffctvAmt,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBaseDteCostHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      BaseDteCostHdgRvEffFrznAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgBaseDteCostHdgRvIneffAmt,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgBaseDtePnLAmount,

      // Designation Date
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHdggRelshpDsgntnDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdggRelshpIsLateDsgntd,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgHdggInstrDsgntnFairValAmt,

      // Net DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHdgRelNetDdsgntnDate,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdggInstrNetDdsgntnFairValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgNetDdsgntnHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      NetDdsgntnHdgRsrvIneffctvAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      NetDdsgntnCostHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      NetDdsgntnCostHdgRvIneffAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgNetDdsgntnPnLAmount,

      // Gross DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmHdgHdggRelshpGrssDdsgntnDate,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdggInstrGrssDdsgntnFairValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgGrssDdsgntnHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      GrssDdsgntnHdgRvEffFrznAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      GrssDdsgntnHdgRsrvIneffctvAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      GrssDdsgntnCostHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      GrssDdsgntnCostHdgRvEffFrznAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      GrssDdsgntnCostHdgRvIneffAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgGrssDdsgntnPnLAmount,

      // Planned DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdggRelshpPlndDdsgntnDte,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdggInstrPlndDdsgntnFairValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      PlndDdsgntnRsrvEffctvActvAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgPlndDdsgntnHdgRvIneffAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      PlndDdsgntnCostHdgRvEffAcAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      PlndDdsgntnCostHdgRvIneffAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgPlndDdsgntnPnLAmount
}
where
      CompanyCode is not initial
  and CompanyCode is initial
```
