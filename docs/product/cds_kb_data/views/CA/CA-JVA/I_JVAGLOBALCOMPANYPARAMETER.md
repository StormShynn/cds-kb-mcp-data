---
name: I_JVAGLOBALCOMPANYPARAMETER
description: "Jvaglobalcompanyparameter"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAGLOBALCOMPANYPARAMETER

**Jvaglobalcompanyparameter**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JVAInceptionToDateActiveVal` |  | |  | `itd` | `CHAR(1)` | Inception to date |
| `JVANetAccountActiveVal` |  | |  | `netaccopt` | `CHAR(1)` | JV Net Account option |
| `JVARegionVal` |  | |  | `int_us` | `CHAR(1)` | Joint Venture Region |
| `JVAOperator` |  | |  | `opaccnumb` | `CHAR(10)` | Operator |
| `JVABillingBasis` |  | |  | `billbasis` | `NUMC(1)` | Billing Basis |
| `JVADefaultVenture` |  | |  | `corpvent` | `CHAR(6)` | Joint Venture |
| `JVADefaultEquityGroup` |  | |  | `corpeqgp` | `CHAR(3)` | Equity Group |
| `JVADefaultCostRecoveryCode` |  | |  | `corprecind` | `CHAR(2)` | Corporate Recovery Indicator (corporately funded) |
| `JVARecIndVntrFunded` |  | |  | `corpvbacri` | `CHAR(2)` | Corporate Recovery Indicator (Venture Funded) |
| `JVABalancedVenturesActiveVal` |  | |  | `balancvent` | `CHAR(1)` | JV Balanced Venture Flag |
| `JVAVentureBankAccountVal` |  | |  | `vbank` | `CHAR(1)` | Venture Bank Accounts |
| `JVAInputTaxCode` |  | |  | `taxin` | `CHAR(2)` | Input Tax Code (Usually used when posting expense) |
| `JVAInvoiceLevel` |  | |  | `invlevel` | `CHAR(1)` | Joint Venture Invoice Level |
| `JVAOutputTaxCode` |  | |  | `taxout` | `CHAR(2)` | Output Tax Code (Usually used when posting revenue) |
| `JVATaxJurisdictionCode` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `JVACorpTaxCode` |  | |  | `crptaxcode` | `CHAR(2)` | CRP Tax Code |
| `JVABillingStructure` |  | |  | `bstruct` | `CHAR(4)` | JV Billing Structure |
| `JVAAcctsExclCnstrctnOvhdVal` |  | |  | `xsetcon` | `CHAR(24)` | Set of Accounts to Exclude from Construction Overhead Calc. |
| `JVAAcctsExclCatastropheOvhdVal` |  | |  | `xsetcat` | `CHAR(24)` | Set of Accounts to Exclude from Catastrophe Overhead Calc. |
| `JVAAcctsExclPctg1OvhdRateVal` |  | |  | `xper1` | `CHAR(24)` | Exclusion Set of Accounts - Percent 1 (JVA) |
| `JVAAcctsExclPctg2OvhdRateVal` |  | |  | `xper2` | `CHAR(24)` | Exclusion Set of Accounts - Percent 2 (JVA) |
| `JVAAccountsExclCptlOvhdVal` |  | |  | `xsetcap` | `CHAR(24)` | Set of Accounts to Exclude from Capital Overhead Calc. |
| `JVADefaultOffsetCostCenterVal` |  | |  | `offcc` | `CHAR(10)` | Corporate Offset Cost Centre |
| `JVALineItmsUncompressedActvVal` |  | |  | `expand` | `CHAR(1)` | Store lines in JV single item ledger not compressed |
| `JVATxExpndtrDetailsActvVal` |  | |  | `taxexpdtl` | `CHAR(1)` | Flag for tax being reported on expenditure detail |
| `JVAPostTaxInNextPeriodActvVal` |  | |  | `taxper` | `CHAR(1)` | Post Tax in Next Period |
| `JVAMaxNmbrEquityGrpsPerVntrVal` |  | |  | `eqgnum` | `NUMC(2)` | Maximum Number of Active Equity Groups per Vent./Equity Type |
| `JVAOperationalMonthActiveVal` |  | |  | `pomact` | `CHAR(1)` | Processing Operational Month and Billing Month active |
| `JVARegnGSTNumberVal` |  | |  | `gstno` | `CHAR(20)` | GST registration number |
| `JVADeprAreaForBookDeprVal` |  | |  | `afabe_han` | `NUMC(2)` | Depreciation Area for Book Depreciation |
| `JVADeprAreaForNonBillVal` |  | |  | `afabe_nb` | `NUMC(2)` | Depreciation Area for non billable Cost (Gross) |
| `JVADeprAreaForGrossVal` |  | |  | `afabe_bi` | `NUMC(2)` | Depreciation Area for Gross billable cost |
| `JVACstmRtlPrcCalcActvVal` |  | |  | `crpcal` | `CHAR(1)` | Flag CRP Calculation: Yes or NO |
| `JVAPostgRuleForAstPostingsVal` |  | |  | `am_meth` | `CHAR(1)` | Method for AM/MM Postings |
| `JVAIndexForEstBookCostVal` |  | |  | `wbind` | `CHAR(5)` | Index series to for calculation of estimated book cost (EBC) |
| `JVATblForAddlSelFldVal` |  | |  | `seltab` | `CHAR(30)` | Table for additional selection field |
| `JVAAddSelForCRPTransfersVal` |  | |  | `selfld` | `CHAR(30)` | Field for additional selection in CRP transfers |
| `JVACutbackYearDateVal` |  | |  | `cbyear` | `NUMC(4)` | JV Cutback Year |
| `JVACutbackPeriodVal` |  | |  | `cbperi` | `NUMC(3)` | JV Cutback Period |
| `JVAExchangeRateTypeVal` |  | |  | `kurst` | `CHAR(4)` | JV exchange rate type |
| `JVACorpParCoOvhdCostCtrVal` |  | |  | `offpcocc` | `CHAR(10)` | Corporate PCO Cost Centre |
| `JVACorpParCoOvhdProjectVal` |  | |  | `cast(offpcoproj as ps_s4_pspnr preserving type)` | `NUMC(8)` | WBS Element |
| `JVACorpParCoOvhdOrderVal` |  | |  | `offpcoornr` | `CHAR(12)` | Coporate PCO Order |
| `JVAPostToDefaultVentureActvVal` |  | |  | `postcorp` | `CHAR(1)` | Post also doc. with corporate venture/equity group only_ |
| `JVAVntrDerivationTypeAssetsVal` |  | |  | `asstvent` | `CHAR(1)` | Venture derivation from Asset |
| `JVAGrssPostToIntrstPrtnActvVal` |  | |  | `ci_gross` | `CHAR(1)` | Gross postings to CI Partner |
| `JVACarriedIntrstPostings01Val` |  | |  | `ci_fb01` | `CHAR(1)` | CI Posting in FB01 |
| `JVAUseTransCrcyCutbackPostsVal` |  | |  | `cb_tcurr` | `CHAR(1)` | JV Cutback in transaction currency |
| `JVAFldStsTypeCostCtrVal` |  | |  | `fsjvct` | `CHAR(1)` | Field status JV Cost Center Type |
| `JVAFieldStatusTypeOrderVal` |  | |  | `fsjvot` | `CHAR(1)` | Field status JV Internal Order Type |
| `JVAFieldStatusTypeProjectVal` |  | |  | `fsjvpt` | `CHAR(1)` | Field status JV project type |
| `JVAMessageImpactActiveVal` |  | |  | `budgetmess` | `CHAR(1)` | Indicator: Message for impact on budget for JV Asset Xfers |
| `JVAVentureDistrAssetLinesVal` |  | |  | `vidist` | `CHAR(1)` | Venture info distribution from Asset lines |
| `JVAOperatorAsPartnerActiveVal` |  | |  | `op_as_part` | `CHAR(1)` | Flag: Operator as partner |
| `JVADefaultCostCenterVal` |  | |  | `kostl_corp` | `CHAR(10)` | Corporate cost center for JV |
| `JVADfltCostRcvryCodeForAstVal` |  | |  | `am_corp_ri` | `CHAR(2)` | Coporate Recovery Indicator for AM Postings |
| `JVACostRecCodeForBkSwitchVal` |  | |  | `bank_ri_sw` | `CHAR(1)` | Recovery Indicator switch for bank lines in non-clearing tr. |
| `JVADefaultBillingCrcyVal` |  | |  | `bcurr` | `CHAR(2)` | JV Default Billing Currency |
| `JVABankAccountSwitchActiveVal` |  | |  | `xvba` | `CHAR(1)` | Venture Bank Account Switching is used |
| `JVANoCostObjOnAstActvVal` |  | |  | `xasst_co` | `CHAR(1)` | No CO object on asset lines |
| `Currency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `JVABillingThresholdDebitAmt` |  | |  | `billthres` | `CURR(13)` | Billing threshold (debit) |
| `JVABillingThresholdCreditAmt` |  | |  | `billthresc` | `CURR(13)` | Billing threshold (credit) |
| `JVATransVarInterCompAstVal` |  | |  | `tvarcurr` | `CHAR(4)` | Transfer variant for intercompany asset transfers |
| `JVASplitByLineItemVal` |  | |  | `split_by_li` | `CHAR(1)` | Split by line item |
| `JVARtlPrCalcActvVal` |  | |  | `ec_use` | `CHAR(1)` | CA-JVA-PRC Active in Company Code |
| `JVASprtRptSpprsdPerdsVal` |  | |  | `billthress` | `CHAR(1)` | Prepare separate reports for suppressed periods |
| `JVAProductionMonthActiveVal` |  | |  | `pm_act` | `CHAR(1)` | Joint Venture Production month processing active |
| `JVADeriveEquityGrpProdnMnthVal` |  | |  | `pm_eg` | `CHAR(1)` | Derive Equity Group from Production Month |
| `JVAProductionMonthFromYearVal` |  | |  | `pm_act_year` | `NUMC(2)` | Number of years Production month information is available |
| `JVAFundingActvVal` |  | |  | `funding_active` | `CHAR(1)` | JV Funding Is Active |
| `JVAIntrstCalcActvVal` |  | |  | `intcalc_active` | `CHAR(1)` | JV Interest Calculation Is Active |
| `JVAIntrstCalcAutoGrpgTypeVal` |  | |  | `ic_auto_group` | `NUMC(1)` | JV Interest Calculation Automatic Group Assignment Indicator |
| `JVAInterestCalcRefGroupVal` |  | |  | `ic_group_ref` | `CHAR(10)` | JV Interest Calculation Reference Group |
| `JVALedgerVal` |  | |  | `rldnr` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `JVAFromYearVal` |  | |  | `coalesce(_MasterData.JVAFromYearVal, _t8jz.fryear)` | `NUMC(4)` |  |
| `JVAFromPeriodVal` |  | |  | `coalesce(_MasterData.JVAFromYearVal, _t8jz.frperiod)` | `NUMC(4)` |  |
| `JVAToYearVal` |  | |  | `coalesce(_MasterData.JVAToYearVal, _t8jz.toyear)` | `NUMC(4)` |  |
| `JVAToPeriodVal` |  | |  | `coalesce(_MasterData.JVAToPeriodVal, _t8jz.toperiod)` | `NUMC(3)` |  |
| `JVAStandardPaymentVal` |  | |  | `coalesce(_MasterData.JVAStandardPaymentRate, _t8jz.stpay)` | `DEC(5)` |  |
| `JVANonCompulsoryBenefitsVal` |  | |  | `coalesce(_MasterData.JVANonCompulsoryBenefitsRate, _t8jz.noncomp)` | `DEC(5)` |  |
| `JVACompulsoryBenefitsVal` |  | |  | `coalesce(_MasterData.JVACompulsoryBenefitsRate, _t8jz.compuls)` | `DEC(5)` |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MasterData` | `I_JVAGlobCoCodeMDSetting` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAGLCOPARM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'JV Global Company Parameter C1'
define view I_JVAGlobalCompanyParameter
  as select from t8jz as _t8jz 
  association [0..1] to I_CompanyCode            as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_JVAGlobCoCodeMDSetting as _MasterData  on $projection.CompanyCode = _MasterData.CompanyCode
{
          @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
         @EndUserText: { label: 'Company Code' , quickInfo: 'Company Code' }
  key    bukrs                                                             as CompanyCode,
         @EndUserText: { label: 'Inception to date' , quickInfo: 'Inception to date' }
         itd                                                               as JVAInceptionToDateActiveVal,
         @EndUserText: { label: 'JV Net Account option' , quickInfo: 'JV Net Account option' }
         netaccopt                                                         as JVANetAccountActiveVal,
         @EndUserText: { label: 'Joint Venture Region' , quickInfo: 'Joint Venture Region' }
         int_us                                                            as JVARegionVal,
         @EndUserText: { label: 'Joint Venture Operator' , quickInfo: 'Joint Venture Operator' }
         opaccnumb                                                         as JVAOperator,
         @EndUserText: { label: 'Billing Basis' , quickInfo: 'Billing Basis' }
         billbasis                                                         as JVABillingBasis,
         @EndUserText: { label: 'Default Venture' , quickInfo: 'Default Venture' }
         corpvent                                                          as JVADefaultVenture,
         @EndUserText: { label: 'Default Equity Group' , quickInfo: 'Equity Group' }
         corpeqgp                                                          as JVADefaultEquityGroup,
         @EndUserText: { label: 'Default Recovery Indicator' , quickInfo: 'Default Recovery Indicator (corporately funded)' }
         corprecind                                                        as JVADefaultCostRecoveryCode,
         @EndUserText: { label: 'Default Recovery Indicator (vent funded)' , quickInfo: 'Default Recovery Indicator (venture funded)' }
         corpvbacri                                                        as JVARecIndVntrFunded,
         @EndUserText: { label: 'Balanced Venture Active' , quickInfo: 'Balanced Venture Active' }
         balancvent                                                        as JVABalancedVenturesActiveVal,
         @EndUserText: { label: 'Venture Bank Accounts' , quickInfo: 'Venture Bank Accounts' }
         vbank                                                             as JVAVentureBankAccountVal,
         @EndUserText: { label: 'Input Tax Code (for Expense Postings)' , quickInfo: 'Input Tax Code (for posting expenses)' }
         taxin                                                             as JVAInputTaxCode,
         @EndUserText: { label: 'Joint Venture Invoice Level' , quickInfo: 'Joint Venture Invoice Level' }
         invlevel                                                          as JVAInvoiceLevel,
         @EndUserText: { label: 'Output Tax Code (for Revenue postings)' , quickInfo: 'Output Tax Code (for posting revenues)' }
         taxout                                                            as JVAOutputTaxCode,
         @EndUserText: { label: 'Tax Jurisdiction Code' , quickInfo: 'Tax Jurisdiction Code' }
         txjcd                                                             as JVATaxJurisdictionCode,
         @EndUserText: { label: 'CRP Tax Code' , quickInfo: 'Tax Code for Custom Retail Price postings' }
         crptaxcode                                                        as JVACorpTaxCode,
         @EndUserText: { label: 'JV Billing Structure' , quickInfo: 'JV Billing Structure' }
         bstruct                                                           as JVABillingStructure,
         @EndUserText: { label: 'Accounts Excluded Constr. Overh. Calc.' , quickInfo: 'Set of accounts excluded from construction overhead calculation' }
         xsetcon                                                           as JVAAcctsExclCnstrctnOvhdVal,
         @EndUserText: { label: 'Accounts Excluded Catastr. Overh. Calc.' , quickInfo: 'Set of accounts excluded from catastrophe overhead calculation' }
         xsetcat                                                           as JVAAcctsExclCatastropheOvhdVal,
         @EndUserText: { label: 'Accounts Excluded Percentage Overhead 1' , quickInfo: 'Set of accounts excluded from percentage overhead calculation 1' }
         xper1                                                             as JVAAcctsExclPctg1OvhdRateVal,
         @EndUserText: { label: 'Accounts Excluded Percentage Overhead 2' , quickInfo: 'Set of accounts excluded from percentage overhead calculation 2' }
         xper2                                                             as JVAAcctsExclPctg2OvhdRateVal,
         @EndUserText: { label: 'Accounts Excluded Capital Overhead Calc.' , quickInfo: 'Set of accounts excluded from capital overhead calculation' }
         xsetcap                                                           as JVAAccountsExclCptlOvhdVal,
         @EndUserText: { label: 'Corporate Offset Cost Centre' , quickInfo: 'Default Offset Cost Centre' }
         offcc                                                             as JVADefaultOffsetCostCenterVal,
         @EndUserText: { label: 'Store JVA Single Line Items Uncompressed' , quickInfo: 'Store lines in JVA single item ledger uncompressed' }
         expand                                                            as JVALineItmsUncompressedActvVal,
         @EndUserText: { label: 'Include Tax in Expenditure Details' , quickInfo: 'Option to include tax in expenditure details reporting' }
         taxexpdtl                                                         as JVATxExpndtrDetailsActvVal,
         @EndUserText: { label: 'Post Tax in Next Period' , quickInfo: 'Post Tax in Next Period' }
         taxper                                                            as JVAPostTaxInNextPeriodActvVal,
         @EndUserText: { label: 'Max. No. Active Equity Groups Vent./Type' , quickInfo: 'Maximum Number of Active Equity Groups per Vent./Equity Type' }
         eqgnum                                                            as JVAMaxNmbrEquityGrpsPerVntrVal,
         @EndUserText: { label: 'Processing Oper. Billing Month active' , quickInfo: 'Processing Operational Month and Billing Month active' }
         pomact                                                            as JVAOperationalMonthActiveVal,
         @EndUserText: { label: 'GST Registration No.' , quickInfo: 'GST registration number' }
         gstno                                                             as JVARegnGSTNumberVal,
         @EndUserText: { label: 'Depreciation Area for Book Depreciation' , quickInfo: ' Depreciation Area for Book Depreciation' }
         afabe_han                                                         as JVADeprAreaForBookDeprVal,
         @EndUserText: { label: 'Depr. Area for non billable Cost (Gross)' , quickInfo: 'Depreciation Area for non billable Cost (Gross)' }
         afabe_nb                                                          as JVADeprAreaForNonBillVal,
         @EndUserText: { label: 'Depr. Area for Gross billable cost' , quickInfo: 'Depreciation Area for Gross billable cost' }
         afabe_bi                                                          as JVADeprAreaForGrossVal,
         @EndUserText: { label: 'Custom Retail Price Calculation Active' , quickInfo: 'Custom Retail Price calculation is active' }
         crpcal                                                            as JVACstmRtlPrcCalcActvVal,
         @EndUserText: { label: 'Rule for AM/MM Postings' , quickInfo: 'Posting Rule for AM/MM Postings' }
         am_meth                                                           as JVAPostgRuleForAstPostingsVal,
         @EndUserText: { label: 'Index Series for Est. Book Cost (EBC)' , quickInfo: 'Index series for calculation of estimated book cost (EBC)' }
         wbind                                                             as JVAIndexForEstBookCostVal,
         @EndUserText: { label: 'Table for Additional Selection Fields' , quickInfo: 'Table for additional selection fields' }
         seltab                                                            as JVATblForAddlSelFldVal,
         @EndUserText: { label: 'Add. Selection Field for CRP transfers' , quickInfo: 'Field for additional selection in CRP transfers' }
         selfld                                                            as JVAAddSelForCRPTransfersVal,
         @EndUserText: { label: 'JV Cutback Year' , quickInfo: 'JV Cutback Year' }
         cbyear                                                            as JVACutbackYearDateVal,
         @EndUserText: { label: 'JV Cutback Period' , quickInfo: 'JV Cutback Period' }
         cbperi                                                            as JVACutbackPeriodVal,
         @EndUserText: { label: 'JV Exchange Rate Type' , quickInfo: 'JV exchange rate type' }
         kurst                                                             as JVAExchangeRateTypeVal,
         @EndUserText: { label: 'Corporate PCO Cost Centre' , quickInfo: 'Corporate PCO Cost Centre' }
         offpcocc                                                          as JVACorpParCoOvhdCostCtrVal,
         @EndUserText: { label: 'Corporate PCO Project' , quickInfo: 'Corporate PCO Project' }
         cast(offpcoproj as ps_s4_pspnr preserving type)                   as JVACorpParCoOvhdProjectVal,
         @EndUserText: { label: 'Corporate PCO Order' , quickInfo: 'Corporate PCO Order' }
         offpcoornr                                                        as JVACorpParCoOvhdOrderVal,
         @EndUserText: { label: 'Post Documents with Default Venture Only' , quickInfo: 'Post documents with default venture data only' }
         postcorp                                                          as JVAPostToDefaultVentureActvVal,
         @EndUserText: { label: 'Venture derivation from Asset' , quickInfo: 'Venture derivation from Asset' }
         asstvent                                                          as JVAVntrDerivationTypeAssetsVal,
         @EndUserText: { label: 'Gross postings to CI Partner Active' , quickInfo: 'Gross postings to CI Partner active' }
         ci_gross                                                          as JVAGrssPostToIntrstPrtnActvVal,
         @EndUserText: { label: 'Carried Interest Postings with FB01' , quickInfo:   'Create Carried Interest postings with transaction FB01' }
         ci_fb01                                                           as JVACarriedIntrstPostings01Val,
         @EndUserText: { label: 'JV Cutback in Transaction Currency' , quickInfo: 'Use the given transaction currency for cutback postings' }
         cb_tcurr                                                          as JVAUseTransCrcyCutbackPostsVal,
         @EndUserText: { label: 'Field Status JV Cost Center' , quickInfo: 'Field status for JV Cost Center' }
         fsjvct                                                            as JVAFldStsTypeCostCtrVal,
         @EndUserText: { label: 'Field Status JV Order' , quickInfo: 'Field status for JV Internal Order' }
         fsjvot                                                            as JVAFieldStatusTypeOrderVal,
         @EndUserText: { label: 'Field Status JV Project' , quickInfo: 'Field status for JV project (WBS element)' }
         fsjvpt                                                            as JVAFieldStatusTypeProjectVal,
         @EndUserText: { label: 'Message for Budget Impact Asset Xfers' , quickInfo:   'Message for impact on budget for JV Asset Xfers active' }
         budgetmess                                                        as JVAMessageImpactActiveVal,
         @EndUserText: { label: 'Venture Data Dist. from Asset Lines' , quickInfo:   'Venture data distribution from Asset lines' }
         vidist                                                            as JVAVentureDistrAssetLinesVal,
         @EndUserText: { label: 'Operator as Partner Active' , quickInfo:   'Operator as partner active' }
         op_as_part                                                        as JVAOperatorAsPartnerActiveVal,
         @EndUserText: { label: 'Default Cost Center for Cost Elements' , quickInfo:   'Default cost center for cost element postings' }
         kostl_corp                                                        as JVADefaultCostCenterVal,
         @EndUserText: { label: 'Default Recovery Ind. for AM Postings' , quickInfo:   'Default recovery indicator for AM postings' }
         am_corp_ri                                                        as JVADfltCostRcvryCodeForAstVal,
         @EndUserText: { label: 'Recovery Ind. Switch Bank non-clear Tr.' , quickInfo:   'Recovery Indicator switch for bank lines in non-clearing trans.' }
         bank_ri_sw                                                        as JVACostRecCodeForBkSwitchVal,
         @EndUserText: { label: 'Default JVA Billing Currency' , quickInfo:   'Default JVA Billing Currency' }
         bcurr                                                             as JVADefaultBillingCrcyVal,
         @EndUserText: { label: 'Venture Bank Account Switching active' , quickInfo:   'Venture Bank Account Switching is active' }
         xvba                                                              as JVABankAccountSwitchActiveVal,
         @EndUserText: { label: 'No CO Object on Asset Lines Active' , quickInfo:   'No CO object on asset lines is active' }
         xasst_co                                                          as JVANoCostObjOnAstActvVal,

         @Semantics.currencyCode: true
         @ObjectModel.foreignKey.association: '_Currency'
         _CompanyCode.Currency,

         @EndUserText: { label: 'Billing Threshold (Debit)' , quickInfo:   'Billing threshold (debit)' }
         @Semantics: { amount : { currencyCode: 'Currency'} }
         billthres                                                         as JVABillingThresholdDebitAmt,
         @EndUserText: { label: 'Billing Threshold (Credit)' , quickInfo:   'Billing threshold (credit)' }
         @Semantics: { amount : { currencyCode: 'Currency'} }
         billthresc                                                        as JVABillingThresholdCreditAmt,
         @EndUserText: { label: 'Transfer Var. InterCompany Asset' , quickInfo:   'Transfer variant for intercompany asset transfers' }
         tvarcurr                                                          as JVATransVarInterCompAstVal,
         //@EndUserText: { label: 'Transfer Var. InterCompany Asset' , quickInfo:   'Transfer variant for intercompany asset transfers' }
         //tvarold                                        as JVAOldTransVarInterCompAsset,  //NOT USED ANYMORE!
         @EndUserText: { label: 'Split by Line Item' , quickInfo:   'Split by line item' }
         split_by_li                                                       as JVASplitByLineItemVal,
         @EndUserText: { label: 'Custom Retail Price Calculation Active' , quickInfo:   'Custom Retail Price calculation (CRP) is active' }
         ec_use                                                            as JVARtlPrCalcActvVal,
         @EndUserText: { label: 'Prepare Separate Reports Suppr. Periods' , quickInfo:   'Prepare separate reports for suppressed periods' }
         billthress                                                        as JVASprtRptSpprsdPerdsVal,
         @EndUserText: { label: 'JV Production Month Processing Active' , quickInfo:   'Joint Venture Production month processing active' }
         pm_act                                                            as JVAProductionMonthActiveVal,
         @EndUserText: { label: 'Derive Equity Group from Prod. Month' , quickInfo:   'Derive Equity Group from Production Month' }
         pm_eg                                                             as JVADeriveEquityGrpProdnMnthVal,
         @EndUserText: { label: 'No. of Years Prod. Month Active' , quickInfo:   'Number of years Production month information is available' }
         pm_act_year                                                       as JVAProductionMonthFromYearVal,
         @EndUserText: { label: 'JV Funding Active' , quickInfo:   'JV Funding Is Active' }
         funding_active                                                    as JVAFundingActvVal,
         @EndUserText: { label: 'JV Interest Calculation Active' , quickInfo:   'JV Interest Calculation Is Active' }
         intcalc_active                                                    as JVAIntrstCalcActvVal,
         @EndUserText: { label: 'JV Interest Calc. Autom. Grouping Type' , quickInfo:   'Type of automatic grouping for JV interest calculation' }
         ic_auto_group                                                     as JVAIntrstCalcAutoGrpgTypeVal,
         @EndUserText: { label: 'JV Interest Calculation Reference Group' , quickInfo:   'JV Interest Calculation Reference Group' }
         ic_group_ref                                                      as JVAInterestCalcRefGroupVal,
         @EndUserText: { label: 'GL Ledger used by JVA' , quickInfo:   'GL ledger used by JVA processes for retrieving cost data' }
         rldnr                                                             as JVALedgerVal,

         @EndUserText: { label: 'Billable Postings Allowed: From-Year' , quickInfo: 'Fiscal year as of which billable postings are allowed' }
         coalesce(_MasterData.JVAFromYearVal, _t8jz.fryear)                as JVAFromYearVal,
         @EndUserText: { label: 'Billable Postings Allowed: From-Period' , quickInfo: 'Fiscal period as of which billable postings are allowed' }
         coalesce(_MasterData.JVAFromYearVal, _t8jz.frperiod)              as JVAFromPeriodVal,
         @EndUserText: { label: 'Billable Postings Allowed: To-Year' , quickInfo: 'Fiscal year up to which billable postings are allowed' }
         coalesce(_MasterData.JVAToYearVal, _t8jz.toyear)                  as JVAToYearVal,
         @EndUserText: { label: 'Billable Postings Allowed: To-Period' , quickInfo: 'Fiscal period up to which billable postings are allowed' }
         coalesce(_MasterData.JVAToPeriodVal, _t8jz.toperiod)              as JVAToPeriodVal,

         @EndUserText: { label: 'Percentage for Payroll Burden Clearing' , quickInfo: 'Percentage to be used for payroll burden clearing' }
         coalesce(_MasterData.JVAStandardPaymentRate, _t8jz.stpay)         as JVAStandardPaymentVal,
         @EndUserText: { label: 'Non-Comp. Rate Payroll Burden Clearing' , quickInfo: 'Non-compulsory benefits rate for payroll burden clearing' }
         coalesce(_MasterData.JVANonCompulsoryBenefitsRate, _t8jz.noncomp) as JVANonCompulsoryBenefitsVal,
         @EndUserText: { label: 'Comp. Rate For Canadian Payroll Burden' , quickInfo: 'Compulsory benefits rate for Canadian payroll burden' }
         coalesce(_MasterData.JVACompulsoryBenefitsRate, _t8jz.compuls)    as JVACompulsoryBenefitsVal,

         
         _CompanyCode,
         _CompanyCode._Currency,
         _MasterData


}
```
