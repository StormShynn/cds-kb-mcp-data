---
name: I_CADOCUMENTGLITEM
description: "Cadocumentglitem"
semantic_vi: "View Cadocumentglitem hiển thị dữ liệu chi tiết khoản mục kế toán cho một tài liệu, cung cấp truy cập vào các trường khóa chính như số tài liệu, số mục và thông tin tài khoản. Nó được sử dụng để lấy dữ liệu tài chính chi tiết cho một tài liệu và các mục cụ thể."
keywords:
  - "cadocumentglitem"
  - "general ledger"
  - "document"
  - "item"
  - "financial data"
  - "fi-ca"
  - "interface view"
  - "document item"
  - "account information"
  - "tài liệu"
  - "khoản mục kế toán"
  - "dữ liệu tài chính"
semantic_en: "The Cadocumentglitem view exposes general ledger item data for a document, providing access to key fields such as document number, item number, and account information. It is used to retrieve detailed financial data for a specific document and its items."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - document
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTGLITEM

**Cadocumentglitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CAGLItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `BusinessPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `PartnerCompany` |  | |  | `vbund` | `CHAR(6)` | Company ID of Trading Partner |
| `GLAccount` |  | |  | `hkont` | `CHAR(10)` | General ledger account |
| `WBSElementInternalID` |  | |  | `cast(ps_psp_pnr as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `ValueDate` |  | |  | `valut` | `DATS(8)` | Value Date |
| `CAExchangeRate` |  | |  | `cast( abs( kursf ) as fis_absolute_exchangerate preserving type )` | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  | `cast( case when kursf < 0 then 'X' when kursf >= 0 then ' ' end as fis_indirect_quotation preserving type )` | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `TransactionCurrency` |  | | `_CADocument` | `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `CAAmountInLocalCurrency` |  | |  | `betrh` | `CURR(13)` | Amount In Local Currency With +/- Signs |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAAmountInSecondCurrency` |  | |  | `betr2` | `CURR(13)` | Amount in second parallel currency with +/- sign |
| `CAAmountInThirdCurrency` |  | |  | `betr3` | `CURR(13)` | Amount in third parallel currency with +/- sign |
| `CAAccountAssignmentCategory` |  | |  | `kontt` | `CHAR(2)` | Account Assignment Category |
| `CAAccountAssignment` |  | |  | `kontl` | `CHAR(50)` | Account Assgt String for Application-Specific Account Assgts |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `SalesOrder` |  | |  | `kdauf` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  | `kdpos` | `NUMC(6)` | Item Number in Sales Order |
| `CAReconciliationKey` |  | |  | `fikey` | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CAInternalPostingReasonCode` |  | |  | `intbu` | `CHAR(1)` | Reason for Automatic Creation of Posting |
| `CANegativePostingControlCode` |  | |  | `negbu` | `NUMC(1)` | Control Field for Negative Posting |
| `CAGLPostingCurrency` |  | |  | `pswsl` | `CUKY(5)` | Update Currency for General Ledger Transaction Figures |
| `LedgerGroup` |  | |  | `ldgrp` | `CHAR(4)` | Ledger Group |
| `ProfitabilitySegment_2` |  | |  | `paobjnr` | `CHAR(10)` | Profitability Segment Number (CO-PA) |
| `ProfitabilitySegmentChanges` |  | |  | `pasubnr` | `NUMC(4)` | Profitability Segment Changes (CO-PA) |
| `PlanningLevel` |  | |  | `fdlev` | `CHAR(2)` | Planning Level |
| `CARepetitionGroup` |  | |  | `whgrp` | `NUMC(3)` | Repetition group |
| `CATransactionKeyAccountDetn` |  | |  | `ktosl` | `CHAR(3)` | Transaction Key for Account Determination |
| `ConditionType` |  | |  | `kschl` | `CHAR(4)` | Condition Type |
| `CAIsSeparateLineItemInGL` |  | |  | `xeiph` | `CHAR(1)` | Create Line Item in General Ledger |
| `QuantityInBaseUnit` |  | |  | `menge` | `QUAN(13)` | Quantity |
| `BaseUnit` |  | |  | `meins` | `UNIT(3)` | Base Unit of Measure |
| `CAGroupingKeyDocumentItems` |  | |  | `psgrp` | `CHAR(4)` | Grouping Key for Document Items |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CASupplementaryTaxCode` |  | |  | `mwszkz` | `CHAR(2)` | Supplementary Tax |
| `CAWithholdingTaxSupplement` |  | |  | `qssew` | `CHAR(2)` | Withholding Tax Supplement |
| `CAOtherTaxCode` |  | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `CAGroupingCodeForTaxItems` |  | |  | `txgrp` | `CHAR(6)` | Grouping Key for Tax Items |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `CAEnteredTaxJurisdictionCode` |  | |  | `txjco` | `CHAR(15)` | Tax Jurisdiction Code (Entered value) |
| `CATaxJurisdictionLevelCounter` |  | |  | `txcnt` | `NUMC(1)` | Level Counter for Multi-Level Taxes in Tax Jurisdiction |
| `CATaxExceptionID` |  | |  | `txexk` | `CHAR(16)` | Key for Tax Exception |
| `CATaxDate` |  | |  | `txdat` | `DATS(8)` | Decisive Date for Calculating Taxes |
| `CATaxBaseAmountInLocalCurrency` |  | |  | `sbash` | `CURR(13)` | Amount Subject to Tax in Local Currency (Tax Base Amount) |
| `CATaxBaseAmount` |  | |  | `sbasw` | `CURR(13)` | Amount Subject to Tax in Transaction Currency (Tax Base Amt) |
| `CANonDeductibleTxAmtInDocCrcy` |  | |  | `ndtax` | `CURR(13)` | Non-Deductible Tax Amount in Document Currency |
| `CANonDeductibleTxAmtInLoclCrcy` |  | |  | `ndtxh` | `CURR(13)` | Non-Deductible Tax Amount in Local Currency |
| `CAContainsNonDeductibleInptTax` |  | |  | `xndtx` | `CHAR(1)` | Contains Non-Deductible Input Tax |
| `CATaxRate` |  | |  | `stprz` | `NUMC(6)` | Tax Rate |
| `GrossIncomeTaxActivityCode` |  | |  | `gricd` | `CHAR(2)` | Activity Code for Gross Income Tax |
| `EmploymentTaxDistributionType` |  | |  | `gityp` | `CHAR(2)` | Distribution Type for Employment Tax |
| `CATaxPortionInLocalCurrency` |  | |  | `sctax` | `CURR(13)` | Tax Portion in FI-CA Local Currency |
| `CATaxPortionInTransCurrency` |  | |  | `sttax` | `CURR(13)` | Tax Portion in Document Currency |
| `CATaxIsCalculatedExternally` |  | |  | `xustpd` | `CHAR(1)` | Tax on Sales/Purchases Was Calculated by Document |
| `CAAltvExchangeRateSetCode` |  | |  | `xdexr` | `CHAR(1)` | Alternative Exchange Rate for Tax Items |
| `TaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Tax Reporting Country/Region |
| `TransToTaxCntryCrcyCnvrsnFctr` |  | |  | `taxc_factor` | `DEC(31)` | Factor for Conversion into Tax Country/Region Currency |
| `CAIsCashFlowItem` |  | |  | `xcsha` | `CHAR(1)` | Document Contains Assignments from Cash Flows |
| `CACashFlowAccount` |  | |  | `reacc` | `CHAR(10)` | Originating Account in Cash Flow Anlaysis |
| `CACashFlowCompanyCode` |  | |  | `rebuk` | `CHAR(4)` | Partner Company Code for Cash Flow Analysis |
| `HouseBank` |  | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `QuantitySignCode` |  | |  | `squan` | `CHAR(1)` | Quantity +/- Sign |
| `BankStatementShortID` |  | |  | `kukey` | `NUMC(8)` | Short Key of Account Statement |
| `BankStatementItem` |  | |  | `esnum` | `NUMC(5)` | Memo Record Number (Line Item Number in Bank Statement) |
| `CashManagementLinkType` |  | |  | `ltype` | `CHAR(2)` | Link Type |
| `CashManagementLink` |  | |  | `lnkid` | `CHAR(32)` | Link ID |
| `CAItmIsCreatedByPostgInterface` |  | |  | `xintb` | `CHAR(1)` | Item Created by Posting Interface |
| `CAStatusOfEuroConversion` |  | |  | `eurou` | `CHAR(1)` | Status of Euro Conversion |
| `CAProfitAnalysisUpdtIsDirect` |  | |  | `xcopa` | `CHAR(1)` | CO-PA update done directly |
| `CAInvcgGroupingKey` |  | |  | `invgr` | `CHAR(4)` | Grouping Key for Invoicing |
| `CACtrlFieldForAcctAssgmtDistr` |  | |  | `aasta` | `CHAR(1)` | Control Field for Account Assignment Distributions |
| `CAUpdateMethodForFundsMgmt` |  | |  | `fmtyp` | `CHAR(2)` | Update Method for FM - FI-CA Integration |
| `OriginalFinancialMgmtArea` |  | |  | `origfikrs` | `CHAR(4)` | Original FM Area for FM Account Assignment |
| `OriglYearForFinMgmtAcctAssgmt` |  | |  | `budgetyear` | `NUMC(4)` | Original Year for FM Account Assignment |
| `EarmarkedFundsDocument` |  | |  | `kblnr` | `CHAR(10)` | Document Number for Earmarked Funds |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `TaxCalculationProcedure` |  | | `_CompanyCode._Country` | `TaxCalculationProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `ProfitabilitySegment` |  | |  | `cast( case when paobjnr > '9999999999' then '9999999999' else lpad( paobjnr, 10, '0' ) end as rkeobjnr_numc )` | `NUMC(10)` | Deprecated: Profitability Segment |
| `CAAltvExchangeRateForTaxItem` |  | |  | `xdexr` | `CHAR(1)` | Alternative Exchange Rate for Tax Items |
| `CATaxItemHasAltvExchangeRate` |  | |  | `xdexr` | `CHAR(1)` | Alternative Exchange Rate for Tax Items |
| `EarmarkedFunds` |  | |  | `kblnr` | `CHAR(10)` | Document Number for Earmarked Funds |
| `_AcctAssgmtCat` |  | |  | `_CAAccountAssignmentCategory` |  |  |
| `_CompCode` |  | |  | `_CompanyCode` |  |  |
| `_CompCodeCashFlow` |  | |  | `_CashFlowCompanyCode` |  |  |
| `_OtherTaxCode` |  | |  | `_CAOtherTaxCode` |  |  |
| `_WhldgTaxSuplmnt` |  | |  | `_CAWithholdingTaxSupplement` |  |  |
| `_BusinessArea` | | ✓ | | | | |
| `_CAAccountAssignmentCategory` | | ✓ | | | | |
| `_CAAcctAssgmtDistrCode` | | ✓ | | | | |
| `_CAAcctDetnTransKey` | | ✓ | | | | |
| `_CAAltvExchangeRateSetCode` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAEuroConversionStatus` | | ✓ | | | | |
| `_CAIntPostingReasonCode` | | ✓ | | | | |
| `_CANegativePostingCtrlCode` | | ✓ | | | | |
| `_CANonDcblInputTaxCode` | | ✓ | | | | |
| `_CAOtherTaxCode` | | ✓ | | | | |
| `_CAWithholdingTaxSupplement` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CashFlowCompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GLPostingCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CashFlowAccount` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_DocHeader` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAAccountAssignmentCategory` | `I_CAAccountAssignmentCategory` | [0..1] |
| `_CAAcctAssgmtDistrCode` | `I_CAAcctAssgmtDistrCode` | [0..1] |
| `_CAAcctDetnTransKey` | `I_CAAcctDetnTransKey` | [0..1] |
| `_CAAltvExchangeRateSetCode` | `I_CAAltvExchangeRateSetCode` | [0..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CAEuroConversionStatus` | `I_CAEuroConversionStatus` | [1..1] |
| `_CAIntPostingReasonCode` | `I_CAIntPostingReasonCode` | [0..1] |
| `_CANegativePostingCtrlCode` | `I_CANegativePostingCtrlCode` | [0..1] |
| `_CANonDcblInputTaxCode` | `I_CANonDcblInputTaxCode` | [0..1] |
| `_CAOtherTaxCode` | `I_CAOtherTaxCode` | [0..1] |
| `_CAWithholdingTaxSupplement` | `I_CAWithholdingTaxSupplement` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CashFlowCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_GLPostingCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [1..1] |
| `_CashFlowAccount` | `I_GLAccount` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CADocumentGLItem` | [1..1] |
| `_DocHeader` | `I_CADocumentHeader` | [1..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document General Ledger Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgDocumentGenLdgrItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #C,
                             sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL } }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CADocumentGLItem
  as select from dfkkopk

  association [0..1] to I_BusinessArea                as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CAAccountAssignmentCategory as _CAAccountAssignmentCategory on  $projection.CAAccountAssignmentCategory = _CAAccountAssignmentCategory.CAAccountAssignmentCategory
  association [0..1] to I_CAAcctAssgmtDistrCode       as _CAAcctAssgmtDistrCode       on  $projection.CACtrlFieldForAcctAssgmtDistr = _CAAcctAssgmtDistrCode.CACtrlFieldForAcctAssgmtDistr
  association [0..1] to I_CAAcctDetnTransKey          as _CAAcctDetnTransKey          on  $projection.CATransactionKeyAccountDetn = _CAAcctDetnTransKey.CATransactionKeyAccountDetn
  association [0..1] to I_CAAltvExchangeRateSetCode   as _CAAltvExchangeRateSetCode   on  $projection.CAAltvExchangeRateSetCode = _CAAltvExchangeRateSetCode.CAAltvExchangeRateSetCode
  association [1..1] to I_CADocument                  as _CADocument                  on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [1..1] to I_CAEuroConversionStatus      as _CAEuroConversionStatus      on  $projection.CAStatusOfEuroConversion = _CAEuroConversionStatus.CAStatusOfEuroConversion
  association [0..1] to I_CAIntPostingReasonCode      as _CAIntPostingReasonCode      on  $projection.CAInternalPostingReasonCode = _CAIntPostingReasonCode.CAInternalPostingReasonCode
  association [0..1] to I_CANegativePostingCtrlCode   as _CANegativePostingCtrlCode   on  $projection.CANegativePostingControlCode = _CANegativePostingCtrlCode.CANegativePostingControlCode
  association [0..1] to I_CANonDcblInputTaxCode       as _CANonDcblInputTaxCode       on  $projection.CAContainsNonDeductibleInptTax = _CANonDcblInputTaxCode.CAContainsNonDeductibleInptTax
  association [0..1] to I_CAOtherTaxCode              as _CAOtherTaxCode              on  $projection.CAOtherTaxCode = _CAOtherTaxCode.CAOtherTaxCode
                                                                                      and $projection.Country        = _CAOtherTaxCode.Country
  association [0..1] to I_CAWithholdingTaxSupplement  as _CAWithholdingTaxSupplement  on  $projection.CAWithholdingTaxSupplement = _CAWithholdingTaxSupplement.CAWithholdingTaxSupplement
                                                                                      and $projection.Country                    = _CAWithholdingTaxSupplement.Country
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [1..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CashFlowCompanyCode         on  $projection.CACashFlowCompanyCode = _CashFlowCompanyCode.CompanyCode
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_Country                     as _TaxCountry                  on  $projection.TaxCountry = _TaxCountry.Country
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.Currency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                    as _GLPostingCurrency           on  $projection.CAGLPostingCurrency = _GLPostingCurrency.Currency
  association [0..1] to I_Currency                    as _TransactionCurrency         on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_GLAccount                   as _GLAccount                   on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                      and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_GLAccount                   as _CashFlowAccount             on  $projection.CACashFlowAccount = _CashFlowAccount.GLAccount
                                                                                      and $projection.CompanyCode       = _CashFlowAccount.CompanyCode
  association [0..*] to I_ProfitCenter                as _ProfitCenter                on  $projection.ProfitCenter = _ProfitCenter.ProfitCenter
  association [0..1] to I_Partnercompany              as _PartnerCompany              on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_Segment                     as _Segment                     on  $projection.Segment = _Segment.Segment
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                    on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData         on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [1..1] to E_CADocumentGLItem            as _Extension                   on  $projection.CADocumentNumber = _Extension.CADocumentNumber
                                                                                      and $projection.CAGLItemNumber   = _Extension.CAGLItemNumber

  /* deprecated associations */
  association [1..1] to I_CADocumentHeader            as _DocHeader                   on  $projection.CADocumentNumber = _DocHeader.CADocumentNumber
  association [1..1] to I_GLAccountInCompanyCode      as _GLAccountInCompanyCode      on  $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
                                                                                      and $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
  /* end deprecated associations */

{
      @ObjectModel.foreignKey.association: '_CADocument'
      @Search.defaultSearchElement: true
  key opbel                                                             as CADocumentNumber,
  key opupk                                                             as CAGLItemNumber,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                             as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                             as BusinessArea,
      bupla                                                             as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                           as Segment,
      prctr                                                             as ProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      vbund                                                             as PartnerCompany,
      @ObjectModel.foreignKey.association: '_GLAccount'
      hkont                                                             as GLAccount,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast(ps_psp_pnr as ps_s4_pspnr preserving type )                  as WBSElementInternalID,

      /* dates and amounts */
      valut                                                             as ValueDate,
      cast( abs( kursf ) as fis_absolute_exchangerate preserving type ) as CAExchangeRate,
      cast( case when kursf < 0  then 'X'
                 when kursf >= 0 then ' '
            end as fis_indirect_quotation preserving type )             as ExchRateIsIndirectQuotation,
      _CADocument.TransactionCurrency                                   as TransactionCurrency,
      _CompanyCode.Currency                                             as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      betrh                                                             as CAAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                             as CAAmountInTransactionCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      betr2                                                             as CAAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      betr3                                                             as CAAmountInThirdCurrency,

      @ObjectModel.foreignKey.association: '_CAAccountAssignmentCategory'
      kontt                                                             as CAAccountAssignmentCategory,
      kontl                                                             as CAAccountAssignment,
      kostl                                                             as CostCenter,
      kdauf                                                             as SalesOrder,
      kdpos                                                             as SalesOrderItem,
      fikey                                                             as CAReconciliationKey,
      @ObjectModel.foreignKey.association: '_CAIntPostingReasonCode'
      intbu                                                             as CAInternalPostingReasonCode,
      @ObjectModel.foreignKey.association: '_CANegativePostingCtrlCode'
      negbu                                                             as CANegativePostingControlCode,
      @ObjectModel.foreignKey.association: '_GLPostingCurrency'
      pswsl                                                             as CAGLPostingCurrency,
      ldgrp                                                             as LedgerGroup,
      paobjnr                                                           as ProfitabilitySegment_2,
      pasubnr                                                           as ProfitabilitySegmentChanges,

      fdlev                                                             as PlanningLevel,
      whgrp                                                             as CARepetitionGroup,
      @ObjectModel.foreignKey.association: '_CAAcctDetnTransKey'
      ktosl                                                             as CATransactionKeyAccountDetn,
      kschl                                                             as ConditionType,
      xeiph                                                             as CAIsSeparateLineItemInGL,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      menge                                                             as QuantityInBaseUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      meins                                                             as BaseUnit,
      psgrp                                                             as CAGroupingKeyDocumentItems,

      /* tax data */
      mwskz                                                             as TaxCode,
      mwszkz                                                            as CASupplementaryTaxCode,
      @ObjectModel.foreignKey.association: '_CAWithholdingTaxSupplement'
      qssew                                                             as CAWithholdingTaxSupplement,
      @ObjectModel.foreignKey.association: '_CAOtherTaxCode'
      strkz                                                             as CAOtherTaxCode,
      txgrp                                                             as CAGroupingCodeForTaxItems,
      txjcd                                                             as TaxJurisdiction,
      txjco                                                             as CAEnteredTaxJurisdictionCode,
      txcnt                                                             as CATaxJurisdictionLevelCounter,
      txexk                                                             as CATaxExceptionID,
      txdat                                                             as CATaxDate,
      @Semantics.amount.currencyCode: 'Currency'
      sbash                                                             as CATaxBaseAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbasw                                                             as CATaxBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ndtax                                                             as CANonDeductibleTxAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ndtxh                                                             as CANonDeductibleTxAmtInLoclCrcy,
      @ObjectModel.foreignKey.association: '_CANonDcblInputTaxCode'
      xndtx                                                             as CAContainsNonDeductibleInptTax,
      stprz                                                             as CATaxRate,
      gricd                                                             as GrossIncomeTaxActivityCode,
      gityp                                                             as EmploymentTaxDistributionType,
      @Semantics.amount.currencyCode: 'Currency'
      sctax                                                             as CATaxPortionInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                             as CATaxPortionInTransCurrency,
      xustpd                                                            as CATaxIsCalculatedExternally,
      @ObjectModel.foreignKey.association: '_CAAltvExchangeRateSetCode'
      xdexr                                                             as CAAltvExchangeRateSetCode,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      tax_country                                                       as TaxCountry,
      taxc_factor                                                       as TransToTaxCntryCrcyCnvrsnFctr,

      /* cash flow data */
      xcsha                                                             as CAIsCashFlowItem,
      @ObjectModel.foreignKey.association: '_CashFlowAccount'
      reacc                                                             as CACashFlowAccount,
      @ObjectModel.foreignKey.association: '_CashFlowCompanyCode'
      rebuk                                                             as CACashFlowCompanyCode,

      hbkid                                                             as HouseBank,
      hktid                                                             as HouseBankAccount,
      squan                                                             as QuantitySignCode,
      kukey                                                             as BankStatementShortID,
      esnum                                                             as BankStatementItem,
      ltype                                                             as CashManagementLinkType,
      lnkid                                                             as CashManagementLink,

      xintb                                                             as CAItmIsCreatedByPostgInterface,
      @ObjectModel.foreignKey.association: '_CAEuroConversionStatus'
      eurou                                                             as CAStatusOfEuroConversion,
      xcopa                                                             as CAProfitAnalysisUpdtIsDirect,
      invgr                                                             as CAInvcgGroupingKey,
      @ObjectModel.foreignKey.association: '_CAAcctAssgmtDistrCode'
      aasta                                                             as CACtrlFieldForAcctAssgmtDistr,
      fmtyp                                                             as CAUpdateMethodForFundsMgmt,
      origfikrs                                                         as OriginalFinancialMgmtArea,
      budgetyear                                                        as OriglYearForFinMgmtAcctAssgmt,
      kblnr                                                             as EarmarkedFundsDocument,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      _CompanyCode.ChartOfAccounts                                      as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_Country'
      _CompanyCode.Country                                              as Country,
      _CompanyCode._Country.TaxCalculationProcedure                     as TaxCalculationProcedure,

      // Associations
      _BaseUnit,
      _BusinessArea,
      _CAAccountAssignmentCategory,
      _CAAcctAssgmtDistrCode,
      _CAAcctDetnTransKey,
      _CAAltvExchangeRateSetCode,
      _CADocument,
      _CAEuroConversionStatus,
      _CAIntPostingReasonCode,
      _CANegativePostingCtrlCode,
      _CANonDcblInputTaxCode,
      _CAOtherTaxCode,
      _CashFlowAccount,
      _CashFlowCompanyCode,
      _CAWithholdingTaxSupplement,
      _ChartOfAccounts,
      _CompanyCode,
      _CompanyCodeCurrency,
      _Country,
      _GLAccount,
      _GLPostingCurrency,
      _ProfitCenter,
      _PartnerCompany,
      _Segment,
      _TaxCountry,
      _TransactionCurrency,
      _WBSElementBasicData,

      /* deprecated fields */
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
      cast( case when paobjnr > '9999999999'
                 then '9999999999'
                 else lpad( paobjnr, 10, '0' )
            end as rkeobjnr_numc )                                      as ProfitabilitySegment,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CATaxItemHasAltvExchangeRate'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CATaxItemHasAltvExchangeRate'
      xdexr                                                             as CAAltvExchangeRateForTaxItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CAAltvExchangeRateSetCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'CAAltvExchangeRateSetCode'
      @Semantics.booleanIndicator: true
      xdexr                                                             as CATaxItemHasAltvExchangeRate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EarmarkedFundsDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EarmarkedFundsDocument'
      kblnr                                                             as EarmarkedFunds,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAAccountAssignmentCategory'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAAccountAssignmentCategory'
      _CAAccountAssignmentCategory                                      as _AcctAssgmtCat,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CompanyCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CompanyCode'
      _CompanyCode                                                      as _CompCode,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CashFlowCompanyCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CashFlowCompanyCode'
      _CashFlowCompanyCode                                              as _CompCodeCashFlow,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _DocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAOtherTaxCode'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAOtherTaxCode'
      _CAOtherTaxCode                                                   as _OtherTaxCode,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAWithholdingTaxSupplement'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAWithholdingTaxSupplement'
      _CAWithholdingTaxSupplement                                       as _WhldgTaxSuplmnt,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccount'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_GLAccount'
      _GLAccountInCompanyCode
}
```
