---
name: I_CAINVCGDOCITEM
description: "Cainvcgdocitem"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCITEM

**Cainvcgdocitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CAInvcgDocItem` | ✓ | |  | `invdocitem` | `NUMC(8)` | Sequential Number of Document Item |
| `CAInvcgDocumentItemType` |  | |  | `itemtype` | `CHAR(8)` | Type of Invoicing Item |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CAInvcgItmAltvBusinessPartner` |  | |  | `cast(gpart_a as inv_gpart_a_gfn_kk preserving type)` | `CHAR(10)` | Altv Business Partner of Invoicing Item |
| `CAInvcgItmAltvContractAccount` |  | |  | `cast(vkont_a as inv_vkont_a_gfn_kk preserving type)` | `CHAR(12)` | Altv Contract Account of Invoicing item |
| `CAInvcgDocItmAltvMDCat` |  | |  | `cast(gpvkt_a_cat as inv_gpvkt_a_cat_gfn_kk preserving type)` | `CHAR(2)` | Cat of Altv Master Data for Invcg Item |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CAIsDocItemSimulated` |  | |  | `item_simulated` | `CHAR(1)` | Line Item Is Simulated |
| `CAInvcgDocItemIsReversal` |  | |  | `reversalitem` | `CHAR(1)` | Reversal Item |
| `CAInvcgIsInFinalAmt` |  | |  | `cast(totalrel as totalrel_gfn_kk preserving type)` | `CHAR(1)` | Consider Items In Invoice Final Amount |
| `CAInvcgIsItemPostingRelevant` |  | |  | `postrel` | `CHAR(1)` | Item Is Relevant for Posting |
| `CAInvcgIsNotBPRelevant` |  | |  | `not_bprel` | `CHAR(1)` | Not Relevant for Business Partner Items |
| `CAInvcgIsItemPrintingRelevant` |  | |  | `printrel` | `CHAR(1)` | Item Is Relevant for Printing |
| `CAInvcgSubstituteGroupPrinting` |  | |  | `print_substitute` | `CHAR(4)` | Substitute Group for Invoice Printing |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Transaction Currency |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAInvcgDocItmLoclCurrency` |  | |  | `invwaerh` | `CUKY(5)` | Currency key for Proportional Local Currency Amount |
| `CAInvcgDocItmAmtInLoclCurrency` |  | |  | `invbetrh` | `CURR(13)` | Proportional Local Currency Amount of Billing Doc Item |
| `CAInvcgDocItmTaxBaseAmtInLCrcy` |  | |  | `invsbash` | `CURR(13)` | Proportional Taxable Amount in Local Currency (Tax Base) |
| `CACurrencySourceDocument` |  | |  | `cast(srcdoc_curr as srcdoc_curr_gfn_kk preserving type)` | `CUKY(5)` | Currency of Source Document |
| `CAInvcgSourceDocumentAmount` |  | |  | `cast(srcdoc_amt as srcdoc_amt_gfn_kk preserving type)` | `CURR(13)` | Amount in Source Document Currency |
| `CAGroupingCurrencyTranslation` |  | |  | `cast(currc_group as currc_group_gfn_kk preserving type)` | `NUMC(6)` | Grouping for Currency Translation |
| `CAAccountDeterminationCode` |  | |  | `kofiz` | `CHAR(2)` | Account Determination ID |
| `BusinessPlace` |  | |  | `cast(bupla as farp_bupla preserving type)` | `CHAR(4)` | Business Place |
| `BusinessArea` |  | |  | `cast(gsber as fis_rbusa preserving type)` | `CHAR(4)` | Business Area |
| `CATaxIsIncluded` |  | |  | `tax_included` | `CHAR(1)` | Tax Included in Amount |
| `CATaxDetnType` |  | |  | `tax_det_type` | `CHAR(2)` | Type of Tax Calculation |
| `CAInvcgTaxGroupingKey` |  | |  | `taxgr` | `NUMC(6)` | Grouping Key for Tax Display |
| `CAOtherTaxCode` |  | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CATaxDeterminationCode` |  | |  | `ermwskz` | `CHAR(2)` | Indicator: Tax Determination Code |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `CATransactionKeyAccountDetn` |  | |  | `ktosl` | `CHAR(3)` | Transaction Key for Account Determination |
| `CAConditionType` |  | |  | `kschl` | `CHAR(4)` | Condition Type |
| `CATaxRateInPercent` |  | |  | `tax_perc` | `DEC(6)` | Tax Percentage |
| `TaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Tax Reporting Country/Region |
| `TransToTaxCntryCrcyCnvrsnFctr` |  | |  | `taxc_factor` | `DEC(31)` | Factor for Conversion into Tax Country/Region Currency |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` | `CHAR(2)` | Offsetting Procedure |
| `CATaxDate` |  | |  | `txdat` | `DATS(8)` | Decisive Date for Calculating Taxes |
| `CATaxBaseAmount` |  | |  | `sbasw` | `CURR(13)` | Amount Subject to Tax in Transaction Currency (Tax Base Amt) |
| `CATaxAmountInTransCurrency` |  | |  | `sbetw` | `CURR(13)` | Tax Amount in Transaction Currency with +/- Sign |
| `CATaxPortionInTransCurrency` |  | |  | `sttax` | `CURR(13)` | Tax Portion in Document Currency |
| `WithholdingTaxCode` |  | |  | `qsskz` | `CHAR(2)` | Withholding Tax Code |
| `CAIsDownPaymentRequest` |  | |  | `xanza` | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CAInvcgOffsettingGroup` |  | |  | `offset_invgr` | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgDfrrdRevenueStatus` |  | |  | `cast(defrev_stat as defrev_stat_gfn_kk preserving type)` | `CHAR(1)` | Status of Processing Deferred Revenues |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` | `CHAR(1)` | Relevant for Revenue Accounting |
| `CAInvcgRevenueGrouping` |  | |  | `ra_invgr` | `CHAR(6)` | Revenue Grouping of Invoicing |
| `CARevenueAccountingServiceType` |  | |  | `service_type` | `CHAR(6)` | Service Type for Revenue Accounting |
| `CAInvcgAccrualPostingType` |  | |  | `cast(billac_type as billac_type_gfn_kk preserving type)` | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `CAIsPrepaid` |  | |  | `prepaid` | `CHAR(1)` | Prepaid |
| `UnitOfMeasure` |  | |  | `meins` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  | `menge` | `QUAN(13)` | Quantity |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CACashDiscountDueDate` |  | |  | `faeds` | `DATS(8)` | Due Date for Cash Discount |
| `CACashDiscountRate` |  | |  | `sktpz` | `DEC(5)` | Cash Discount Percentage Rate |
| `CAInvcgDocItemDefStatus` |  | |  | `xstund` | `CHAR(1)` | Item Deferred until Due Date for Invoice |
| `CAItemPeriodStartDate` |  | |  | `date_from` | `DATS(8)` | Start of Period of Line Item |
| `CAItemPeriodEndDate` |  | |  | `date_to` | `DATS(8)` | End of Period of Line Item |
| `CAInvcgRefPostingDocType` |  | |  | `cast(cadoctype as cadoctype_gfn_kk preserving type )` | `CHAR(4)` | Reference Document Type of Posting Document for Invoicing |
| `CADocumentNumber` |  | |  | `cast(opbel as opbel_gfn_kk preserving type )` | `CHAR(12)` | Document |
| `CAGroupingKeyDocumentItems` |  | |  | `psgrp` | `CHAR(4)` | Grouping Key for Document Items |
| `CAInvcgGroupingKey` |  | |  | `invgr` | `CHAR(4)` | Grouping Key for Invoicing |
| `CAClearingDocumentNumber` |  | |  | `augbl` | `CHAR(12)` | Clearing Document or Printed Document |
| `CAClearingAmountInTransCrcy` |  | |  | `augbw` | `CURR(13)` | Clearing Amount in Transaction Currency (With +/- Sign) |
| `CAInvcgDocItemCrtnMethod` |  | |  | `item_crmet` | `CHAR(1)` | Creation Method of Invoicing Document Item |
| `CAInvcgFunction` |  | |  | `inv_function` | `CHAR(12)` | Invoicing Function |
| `CAInvcgSourceDocumentCat` |  | |  | `cast(srcdoccat as srcdoccat_gfn_kk preserving type)` | `CHAR(5)` | Category of Source Document To Be Invoiced |
| `CAInvcgSourceDocumentNumber` |  | |  | `cast(srcdocno as srcdocno_gfn_kk preserving type)` | `CHAR(20)` | Source Document Number |
| `CAInvcgDocItemSourceItmCat` |  | |  | `srcitemcat` | `CHAR(5)` | Category of Source Document Item Invoiced |
| `CAInvcgSourceDocumentItem` |  | |  | `srcdocitem` | `CHAR(20)` | Item of Invoiced Source Document |
| `CABllbleItmDiscountKey` |  | |  | `cast(disckey as disckey_gfn_kk preserving type)` | `CHAR(8)` | Discount/Charge Key |
| `CABllbleItmDiscountVersion` |  | |  | `disckey_versno` | `NUMC(2)` | Version Number of Disccount on Billable Items |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type)` | `CHAR(2)` | Category of Invoice Correction |
| `CABillToParty` |  | |  | `bill_to_party` | `CHAR(10)` | Bill-to Party |
| `CABillToRegion` |  | |  | `bill_to_region` | `CHAR(3)` | Bill-To Region |
| `CABillFromRegion` |  | |  | `bill_from_region` | `CHAR(3)` | Region Where the Delivery Plant is Located |
| `CAControlCode` |  | |  | `steuc` | `CHAR(16)` | Control Code for Consumption Taxes in Foreign Trade |
| `CASupplyRegion` |  | |  | `supply_region` | `CHAR(3)` | Supply Region |
| `CABillToCountry` |  | |  | `bill_to_country` | `CHAR(3)` | Bill-to Country |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` | `NUMC(8)` | WBS Element Internal ID |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CAInvcgItmAltvBusinessPartner` | | ✓ | | | | |
| `_CAInvcgItmAltvContractAccount` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAInvcgDocItmAltvMDCat` | | ✓ | | | | |
| `_CAInvcgDocItemType` | | ✓ | | | | |
| `_CAInvcgFunction` | | ✓ | | | | |
| `_CABllbleItmDiscountKey` | | ✓ | | | | |
| `_CAInvcgRefPostgDocTyp` | | ✓ | | | | |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |
| `_CAConditionType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CACurrencySourceDocument` | | ✓ | | | | |
| `_CAInvcgDocItmLoclCurrency` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CAInvcgAccrualPostingType` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_CADeferredRevenueStatus` | | ✓ | | | | |
| `_CAInvcgDocItmDefStatus` | | ✓ | | | | |
| `_CAInvcgDocItmCrtnMethod` | | ✓ | | | | |
| `_CAInvcgDocItmSrceItmCat` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_CATaxDetnType` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CATransactionKeyAcctDetn` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CABillToParty` | | ✓ | | | | |
| `_CABillToRegion` | | ✓ | | | | |
| `_CABillFromRegion` | | ✓ | | | | |
| `_CASupplyRegion` | | ✓ | | | | |
| `_CABillToCountry` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_CADocumentHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CompCode` | `I_CompanyCode` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAInvcgItmAltvBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CAInvcgItmAltvContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_CADocument` | `I_CADocument` | [0..1] |
| `_CAInvcgDocItmAltvMDCat` | `I_CAInvcgDocItmAltvMDCat` | [0..1] |
| `_CAInvcgDocItemType` | `I_CAInvcgDocItemType` | [0..1] |
| `_CAInvcgFunction` | `I_CAInvcgFunction` | [0..1] |
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_CAInvcgRefPostgDocTyp` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [0..1] |
| `_CAConditionType` | `I_ConditionType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CACurrencySourceDocument` | `I_Currency` | [0..1] |
| `_CAInvcgDocItmLoclCurrency` | `I_Currency` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CAInvcgAccrualPostingType` | `I_CAInvcgAccrualPostingType` | [0..1] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CADeferredRevenueStatus` | `I_CADeferredRevenueStatus` | [0..1] |
| `_CAInvcgDocItmDefStatus` | `I_CAInvcgDocItmDefStatus` | [0..1] |
| `_CAInvcgDocItmCrtnMethod` | `I_CAInvcgDocItmCrtnMethod` | [0..1] |
| `_CAInvcgDocItmSrceItmCat` | `I_CAInvcgDocItmSrceItmCat` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CATransactionKeyAcctDetn` | `I_CATransactionKeyAcctDetn` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CABillToParty` | `I_BusinessPartner` | [0..1] |
| `_CABillToRegion` | `I_Region` | [0..1] |
| `_CABillFromRegion` | `I_Region` | [0..1] |
| `_CASupplyRegion` | `I_Region` | [0..1] |
| `_CABillToCountry` | `I_Country` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CAInvcgDocItem` | [0..1] |
| `_CADocumentHeader` | `I_CADocumentHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvdoc_i', 
          role: #MAIN,
          viewElement: ['CAInvoicingDocument', 'CAInvcgDocItem'],
          tableElement: ['invdocno', 'invdocitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CAInvcgDocItem',
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocumentItm',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@EndUserText.label: 'Fakturierungsbelegposition'
define view entity I_CAInvcgDocItem
  as select from dfkkinvdoc_i as invdoc_i
  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

  association [0..1] to I_CompanyCode                as _CompCode                      on  $projection.CompanyCode = _CompCode.CompanyCode
  association [0..1] to I_Division                   as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_BusinessArea               as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_BusinessPartner            as _CAInvcgItmAltvBusinessPartner on  $projection.CAInvcgItmAltvBusinessPartner = _CAInvcgItmAltvBusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader      as _CAInvcgItmAltvContractAccount on  $projection.CAInvcgItmAltvContractAccount = _CAInvcgItmAltvContractAccount.ContractAccount
  association [0..1] to I_CADocument                 as _CADocument                    on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CAInvcgDocItmAltvMDCat     as _CAInvcgDocItmAltvMDCat        on  $projection.CAInvcgDocItmAltvMDCat = _CAInvcgDocItmAltvMDCat.CAInvcgDocItmAltvMDCat

  association [0..1] to I_CAInvcgDocItemType         as _CAInvcgDocItemType            on  $projection.CAInvcgDocumentItemType = _CAInvcgDocItemType.CAInvcgDocumentItemType
  association [0..1] to I_CAInvcgFunction            as _CAInvcgFunction               on  $projection.CAInvcgFunction = _CAInvcgFunction.CAInvcgFunction
  association [0..1] to I_CABllbleItmDiscountKey     as _CABllbleItmDiscountKey        on  $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_CAInvcgRefPostgDocTyp      as _CAInvcgRefPostgDocTyp         on  $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocTyp.CAInvcgRefPostingDocType
  association [0..1] to I_CAInvcgSourceDocCat        as _CAInvcgSourceDocCat           on  $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
  association [0..1] to I_ConditionType              as _CAConditionType               on  $projection.CAConditionType           = _CAConditionType.ConditionType
                                                                                       and _CAConditionType.ConditionUsage       = 'A'
                                                                                       and _CAConditionType.ConditionApplication = 'TX'

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                 on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_CAStatisticalItemCode      as _CAStatisticalItemCode         on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode

  association [0..1] to I_Currency                   as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                   as _CACurrencySourceDocument      on  $projection.CACurrencySourceDocument = _CACurrencySourceDocument.Currency
  association [0..1] to I_Currency                   as _CAInvcgDocItmLoclCurrency     on  $projection.CAInvcgDocItmLoclCurrency = _CAInvcgDocItmLoclCurrency.Currency
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType        on  $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CAInvcgAccrualPostingType  as _CAInvcgAccrualPostingType     on  $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType

  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode             on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CADeferredRevenueStatus    as _CADeferredRevenueStatus       on  $projection.CAInvcgDfrrdRevenueStatus = _CADeferredRevenueStatus.CAInvcgDfrrdRevenueStatus
  association [0..1] to I_CAInvcgDocItmDefStatus     as _CAInvcgDocItmDefStatus        on  $projection.CAInvcgDocItemDefStatus = _CAInvcgDocItmDefStatus.CAInvcgDocItemDefStatus
  association [0..1] to I_CAInvcgDocItmCrtnMethod    as _CAInvcgDocItmCrtnMethod       on  $projection.CAInvcgDocItemCrtnMethod = _CAInvcgDocItmCrtnMethod.CAInvcgDocItemCrtnMethod
  association [0..1] to I_CAInvcgDocItmSrceItmCat    as _CAInvcgDocItmSrceItmCat       on  $projection.CAInvcgDocItemSourceItmCat = _CAInvcgDocItmSrceItmCat.CAInvcgDocItemSourceItmCat
  association [0..1] to I_Country                    as _TaxCountry                    on  $projection.TaxCountry = _TaxCountry.Country
  association [0..1] to I_CATaxDetnType              as _CATaxDetnType                 on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CASubApplication           as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CATransactionKeyAcctDetn   as _CATransactionKeyAcctDetn      on  $projection.CATransactionKeyAccountDetn = _CATransactionKeyAcctDetn.CATransactionKeyAccountDetn
  association [0..1] to I_CAInvcgCorrectionCat       as _CAInvcgCorrectionCat          on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction       on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory     on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure    on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure


  // from X_S4C_I_CAInvcgDocHeader
  association [0..1] to I_BusinessPartner            as _CABillToParty                 on  $projection.CABillToParty = _CABillToParty.BusinessPartner
  association [0..1] to I_Region                     as _CABillToRegion                on  $projection.CABillToCountry = _CABillToRegion.Country
                                                                                       and $projection.CABillToRegion  = _CABillToRegion.Region
  association [0..1] to I_Region                     as _CABillFromRegion              on  $projection.CABillToCountry  = _CABillFromRegion.Country
                                                                                       and $projection.CABillFromRegion = _CABillFromRegion.Region
  association [0..1] to I_Region                     as _CASupplyRegion                on  $projection.CABillToCountry = _CASupplyRegion.Country
                                                                                       and $projection.CASupplyRegion  = _CASupplyRegion.Region
  association [0..1] to I_Country                    as _CABillToCountry               on  $projection.CABillToCountry = _CABillToCountry.Country
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID



  // extension
  association [0..1] to E_CAInvcgDocItem             as _Extension                     on  $projection.CAInvoicingDocument = _Extension.CAInvoicingDocument
                                                                                       and $projection.CAInvcgDocItem      = _Extension.CAInvcgDocItem

  // deprecated
  association [0..1] to I_CADocumentHeader           as _CADocumentHeader              on  $projection.CADocumentNumber = _CADocumentHeader.CADocumentNumber
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                                    as CAInvoicingDocument,
  key invdocitem                                                  as CAInvcgDocItem,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItemType'
      itemtype                                                    as CAInvcgDocumentItemType,
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                                       as CompanyCode,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                       as Division,
      vtref                                                       as CAContract,
      vtpos                                                       as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                       as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAInvcgItmAltvBusinessPartner'
      cast(gpart_a as inv_gpart_a_gfn_kk preserving type)         as CAInvcgItmAltvBusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgItmAltvContractAccount'
      cast(vkont_a as inv_vkont_a_gfn_kk preserving type)         as CAInvcgItmAltvContractAccount,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmAltvMDCat'
      cast(gpvkt_a_cat as inv_gpvkt_a_cat_gfn_kk preserving type) as CAInvcgDocItmAltvMDCat,
      // fkey on upper view
      hvorg                                                       as CAMainTransaction,
      // fkey on upper view
      tvorg                                                       as CASubTransaction,
      item_simulated                                              as CAIsDocItemSimulated,
      reversalitem                                                as CAInvcgDocItemIsReversal,
      cast(totalrel as totalrel_gfn_kk preserving type)           as CAInvcgIsInFinalAmt,
      postrel                                                     as CAInvcgIsItemPostingRelevant,
      not_bprel                                                   as CAInvcgIsNotBPRelevant,
      printrel                                                    as CAInvcgIsItemPrintingRelevant,
      print_substitute                                            as CAInvcgSubstituteGroupPrinting,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                                       as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                       as CAAmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CAInvcgDocItmLoclCurrency'
      invwaerh                                                    as CAInvcgDocItmLoclCurrency,
      @Semantics.amount.currencyCode: 'CAInvcgDocItmLoclCurrency'
      invbetrh                                                    as CAInvcgDocItmAmtInLoclCurrency,
      @Semantics.amount.currencyCode: 'CAInvcgDocItmLoclCurrency'
      invsbash                                                    as CAInvcgDocItmTaxBaseAmtInLCrcy,

      @ObjectModel.foreignKey.association: '_CACurrencySourceDocument'
      cast(srcdoc_curr as srcdoc_curr_gfn_kk preserving type)     as CACurrencySourceDocument,
      @Semantics.amount.currencyCode: 'CACurrencySourceDocument'
      cast(srcdoc_amt as srcdoc_amt_gfn_kk preserving type)       as CAInvcgSourceDocumentAmount,
      cast(currc_group as currc_group_gfn_kk preserving type)     as CAGroupingCurrencyTranslation,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                       as CAAccountDeterminationCode,
      cast(bupla as farp_bupla preserving type)                   as BusinessPlace,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      cast(gsber as fis_rbusa preserving type)                    as BusinessArea,
      tax_included                                                as CATaxIsIncluded,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                                as CATaxDetnType,
      taxgr                                                       as CAInvcgTaxGroupingKey,
      // fkey on upper view
      strkz                                                       as CAOtherTaxCode,
      // fkey on upper view
      mwskz                                                       as TaxCode,
      -- fkey missing
      ermwskz                                                     as CATaxDeterminationCode,
      // fkey on upper view
      txjcd                                                       as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_CATransactionKeyAcctDetn'
      ktosl                                                       as CATransactionKeyAccountDetn,
      @EndUserText.label: 'Steuerkonditionsart'
      @ObjectModel.foreignKey.association: '_CAConditionType'
      kschl                                                       as CAConditionType,
      tax_perc                                                    as CATaxRateInPercent,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      tax_country                                                 as TaxCountry,
      taxc_factor                                                 as TransToTaxCntryCrcyCnvrsnFctr,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      offset_action                                               as CAInvcgOffsettingAction,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                                  as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                                 as CAInvcgOffsettingProcedure,
      txdat                                                       as CATaxDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbasw                                                       as CATaxBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbetw                                                       as CATaxAmountInTransCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                       as CATaxPortionInTransCurrency,
      // fkey on upper view
      qsskz                                                       as WithholdingTaxCode,
      xanza                                                       as CAIsDownPaymentRequest,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                                       as CAStatisticalItemCode,
      offset_invgr                                                as CAInvcgOffsettingGroup,
      @ObjectModel.foreignKey.association: '_CADeferredRevenueStatus'
      cast(defrev_stat as defrev_stat_gfn_kk preserving type)     as CAInvcgDfrrdRevenueStatus,
      @Semantics.booleanIndicator:true
      rarel                                                       as CAIsRevenueAccountingRelevant,
      ra_invgr                                                    as CAInvcgRevenueGrouping,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                                as CARevenueAccountingServiceType,
      @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
      cast(billac_type as billac_type_gfn_kk preserving type)     as CAInvcgAccrualPostingType,
      prepaid                                                     as CAIsPrepaid,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      meins                                                       as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      menge                                                       as Quantity,
      faedn                                                       as CANetDueDate,
      faeds                                                       as CACashDiscountDueDate,
      sktpz                                                       as CACashDiscountRate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmDefStatus'
      xstund                                                      as CAInvcgDocItemDefStatus,
      date_from                                                   as CAItemPeriodStartDate,
      date_to                                                     as CAItemPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocTyp'
      cast(cadoctype as cadoctype_gfn_kk preserving type )        as CAInvcgRefPostingDocType,
      @ObjectModel.foreignKey.association: '_CADocument'
      cast(opbel as opbel_gfn_kk preserving type )                as CADocumentNumber,
      psgrp                                                       as CAGroupingKeyDocumentItems,
      invgr                                                       as CAInvcgGroupingKey,
      augbl                                                       as CAClearingDocumentNumber,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      augbw                                                       as CAClearingAmountInTransCrcy,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmCrtnMethod'
      item_crmet                                                  as CAInvcgDocItemCrtnMethod,
      @ObjectModel.foreignKey.association: '_CAInvcgFunction'
      inv_function                                                as CAInvcgFunction,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
      cast(srcdoccat as srcdoccat_gfn_kk preserving type)         as CAInvcgSourceDocumentCat,
      cast(srcdocno as srcdocno_gfn_kk preserving type)           as CAInvcgSourceDocumentNumber,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmSrceItmCat'
      srcitemcat                                                  as CAInvcgDocItemSourceItmCat,
      srcdocitem                                                  as CAInvcgSourceDocumentItem,
      @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
      cast(disckey as disckey_gfn_kk preserving type)             as CABllbleItmDiscountKey,
      disckey_versno                                              as CABllbleItmDiscountVersion,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type)             as CAInvcgCorrectionCategory,

      // from X_S4C_I_CAInvcgDocItem
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToParty'
      bill_to_party                                               as CABillToParty,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToRegion'
      bill_to_region                                              as CABillToRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillFromRegion'
      bill_from_region                                            as CABillFromRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      steuc                                                       as CAControlCode,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CASupplyRegion'
      supply_region                                               as CASupplyRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToCountry'
      bill_to_country                                             as CABillToCountry,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )    as WBSElementInternalID,

      // Make association public
      _CAInvcgDocHeader,
      _CAInvcgFunction,
      _CompCode,
      _Division,
      _BusinessArea,
      _TransactionCurrency,
      _CAInvcgDocItmLoclCurrency,
      _CACurrencySourceDocument,
      _CAInvcgItmAltvBusinessPartner,
      _CAInvcgItmAltvContractAccount,
      _CAStatisticalItemCode,
      _CAInvcgDocItemType,
      _CABllbleItmDiscountKey,
      _CAInvcgSourceDocCat,
      _CAInvcgRefPostgDocTyp,
      _CADocument,
      _CADeferredRevenueStatus,
      _CAInvcgDocItmAltvMDCat,
      _CAInvcgDocItmDefStatus,
      _CAInvcgDocItmCrtnMethod,
      _CAInvcgDocItmSrceItmCat,
      _CAAccountDetnCode,
      _CARevnAcctgServiceType,
      _CAInvcgAccrualPostingType,
      _CATaxDetnType,
      _TaxCountry,
      _CASubApplication,
      _CATransactionKeyAcctDetn,
      _CAConditionType,
      _UnitOfMeasure,
      _CAInvcgCorrectionCat,
      _CAInvcgOffsettingAction,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _CADocumentHeader,

      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToParty,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillFromRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CASupplyRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToCountry,
      _WBSElementBasicData
}
```
