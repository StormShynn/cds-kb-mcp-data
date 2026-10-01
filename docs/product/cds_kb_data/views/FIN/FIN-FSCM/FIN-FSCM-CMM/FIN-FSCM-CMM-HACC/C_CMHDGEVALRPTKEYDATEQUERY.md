---
name: C_CMHDGEVALRPTKEYDATEQUERY
description: "CMMF Hedge Acc Eval Report Keydate - Qry"
app_component: FIN-FSCM-CMM-HACC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value
semantic_en: "CMMF Hedge Acc Eval Report Keydate - Qry"
semantic_vi: "CMMF Hedge Acc Eval Report Keydate - Qry — CDS view tiêu dùng dựa trên I_CmmdtyHdgEvalReportCube."
keywords:
  - "cmmf"
  - "hedge"
  - "acc"
  - "eval"
  - "report"
  - "keydate"
  - "qry"
  - "evaluation"
  - "date"
  - "transaction"
  - "company"
  - "code"
  - "deal"
  - "identifier"
  - "financial"
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
# C_CMHDGEVALRPTKEYDATEQUERY

**CMMF Hedge Acc Eval Report Keydate - Qry**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EvaluationDate` | ✓ | |  |  | `DATS(8)` | Evaluation Date |
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
| `CmmdtyHdgTransKeyDteNPVSpotAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtNPVSptRskFrAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVFwdAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtNPVFwdRskFrAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgTransKeyDteCCBSAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKDtCCBSRskFreeAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDteNPVOtherAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgKeyDteNPVOthRskFreeAmount` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgTransKeyDateCrdtValAdjAmt` |  | |  |  | `CURR(21)` | Credit Value Adjustment |
| `CmHdgTransKeyDteDebitValAdjAmt` |  | |  |  | `CURR(21)` | Debit Value Adjustment |
| `CmHdgFinTransKeyDateEvalPrcAmt` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
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
| `HdgKeyDteHyptclDrvtvFairValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvFwdValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvSpotValAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmHdgKeyDteHyptclDrvtvCCBSAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `HdgKeyDteHyptclDrvtvNPVOthAmt` |  | |  |  | `CURR(15)` | Net Present Value of OTC Transaction |
| `CmmdtyHdgHdggRelshpDsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmmdtyHdggRelshpIsLateDsgntd` |  | |  |  | `CHAR(1)` | General Flag |
| `CmmdtyHdgHdgRelNetDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmHdgHdggRelshpGrssDdsgntnDate` |  | |  |  | `DATS(8)` | Field of type DATS |
| `CmmdtyHdggRelshpPlndDdsgntnDte` |  | |  |  | `DATS(8)` | Field of type DATS |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMHDGEVALRPTKEYDATEQUERY')/$value)*

```abap
@AbapCatalog: { sqlViewName:            'CCMMFHAEVRKDQRY',
                compiler.compareFilter: true }

@AccessControl: { authorizationCheck:    #NOT_REQUIRED, //#PRIVILEGED_ONLY,
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
                modelingPattern:         #ANALYTICAL_QUERY }

//@OData.publish: true

@VDM: { viewType: #CONSUMPTION }

@EndUserText.label: 'CMMF Hedge Acc Eval Report Keydate - Qry'
   
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view C_CmHdgEvalRptKeyDateQuery
  with parameters
    @EndUserText.label: 'Evaluation Date'
    @Environment.systemField: #SYSTEM_DATE
    P_EvalDate                    : sydate, //cmmf_evaluation_date,
    @Consumption.defaultValue: 'MIXED'
    @EndUserText.label: 'Selection Option'
    P_CmmdtyEvalSelectionApproach : rsnum_c10 // char10 //cmmf_evalrpt_approach

  as select from I_CmmdtyHdgEvalReportCube( P_EvalDate              : $parameters.P_EvalDate,
                                            P_RefDate               : '00000000',
                                            P_CmmdtyEvalSelectionApproach : $parameters.P_CmmdtyEvalSelectionApproach )
{
      // Selection Parameters
      //‾‾‾‾‾‾‾‾‾‾
  key EvaluationDate,

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
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #ROWS
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

      // CmmdtyHedgeConstellationUUID,
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
      CmmdtyHdgTransKeyDteNPVSpotAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKDtNPVSptRskFrAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDteNPVFwdAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKDtNPVFwdRskFrAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmmdtyHdgTransKeyDteCCBSAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKDtCCBSRskFreeAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDteNPVOtherAmount,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteNPVOthRskFreeAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDateCrdtValAdjAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgTransKeyDteDebitValAdjAmt,
      @Semantics.amount.currencyCode: 'CmHdgTransKeyDteEvalPrcCrcy'
      CmHdgFinTransKeyDateEvalPrcAmt,

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
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgKeyDteHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgKeyDateHdgRvEffFrznAmount,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgKeyDteHdgRsrvIneffctvAmt,
      //
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgKeyDteCostHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgKeyDteCostHdgRvEffFrznAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgKeyDteCostHdgRvIneffAmt,
      //
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgKeyDtePnLAmount,
      //
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgKeyDteBsAdjPostdAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgKeyDteBsAdjCumltvAmt,
      //
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgBsAdjCostHdgRvEffPostdAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      BsAdjCostHdgRvEffCumltvAmount,

      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvFairValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvFwdValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvSpotValAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      CmHdgKeyDteHyptclDrvtvCCBSAmt,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      HdgKeyDteHyptclDrvtvNPVOthAmt,

      // Designation Date
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHdggRelshpDsgntnDate,
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdggRelshpIsLateDsgntd,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgHdggInstrDsgntnFairValAmt,

      // Net DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdgHdgRelNetDdsgntnDate,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      HdggInstrNetDdsgntnFairValAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgNetDdsgntnHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      NetDdsgntnHdgRsrvIneffctvAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      NetDdsgntnCostHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      NetDdsgntnCostHdgRvIneffAmount,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgNetDdsgntnPnLAmount,

      // Gross DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmHdgHdggRelshpGrssDdsgntnDate,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      HdggInstrGrssDdsgntnFairValAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgGrssDdsgntnHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      GrssDdsgntnHdgRvEffFrznAmount,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      GrssDdsgntnHdgRsrvIneffctvAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      GrssDdsgntnCostHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      GrssDdsgntnCostHdgRvEffFrznAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      GrssDdsgntnCostHdgRvIneffAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgGrssDdsgntnPnLAmount,

      // Planned DeDesignation
      @AnalyticsDetails.query.axis: #ROWS
      CmmdtyHdggRelshpPlndDdsgntnDte
      //      ,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      HdggInstrPlndDdsgntnFairValAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      PlndDdsgntnRsrvEffctvActvAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmHdgPlndDdsgntnHdgRvIneffAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      PlndDdsgntnCostHdgRvEffAcAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      PlndDdsgntnCostHdgRvIneffAmt,
      //      @Semantics.amount.currencyCode: 'ValuationCurrency'
      //      CmmdtyHdgPlndDdsgntnPnLAmount
}
where
      CompanyCode is not initial
  and CompanyCode is initial
```
