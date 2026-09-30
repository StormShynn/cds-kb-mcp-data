---
name: I_CABILLGDOCITEM
description: "Cabillgdocitem"
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
# I_CABILLGDOCITEM

**Cabillgdocitem**

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
| `CABillgDocument` | ✓ | |  | `billdocno` | `CHAR(12)` | Number of Billing Document |
| `CABillgDocItem` | ✓ | |  | `billdocitem` | `NUMC(8)` | Sequential Number of Document Item |
| `CAIsDocItemSimulated` |  | |  | `item_simulated` | `CHAR(1)` | Line Item Is Simulated |
| `CABillgDocumentItemType` |  | |  | `itemtype` | `CHAR(8)` | Type of Billing Item |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CAInvcgIsItemPostingRelevant` |  | |  | `postrel` | `CHAR(1)` | Item Is Relevant for Posting |
| `CAInvcgIsItemPrintingRelevant` |  | |  | `printrel` | `CHAR(1)` | Item Is Relevant for Printing |
| `CABillgDocItemAmount` |  | |  | `bill_amount` | `CURR(13)` | Amount in Billing Document Item |
| `CABillgCurrency` |  | |  | `bill_curr` | `CUKY(5)` | Currency of Billing Document |
| `CATaxIsIncluded` |  | |  | `tax_included` | `CHAR(1)` | Tax Included in Amount |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `UnitOfMeasure` |  | |  | `qty_unit` | `UNIT(3)` | Base Unit of Measure |
| `CABillgDocItemExternalNumber` |  | |  | `refitem` | `CHAR(10)` | Number of Line Item in External System |
| `CABillgDocItemIsReversal` |  | |  | `reversalitem` | `CHAR(1)` | Reversal Item |
| `CAInvcgDocItemIsReversal` |  | |  | `reversalitem` | `CHAR(1)` | Reversal Item |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type )` | `CHAR(2)` | Category of Invoice Correction |
| `CAInvcgIsNotBPRelevant` |  | |  | `not_bprel` | `CHAR(1)` | Not Relevant for Business Partner Items |
| `CAInvcgSubstituteGroupPrinting` |  | |  | `print_substitute` | `CHAR(4)` | Substitute Group for Invoice Printing |
| `CAItemPeriodStartDate` |  | |  | `date_from` | `DATS(8)` | Start of Period of Line Item |
| `CAItemPeriodEndDate` |  | |  | `date_to` | `DATS(8)` | End of Period of Line Item |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `BusinessPlace` |  | |  | `cast(bupla as farp_bupla preserving type)` | `CHAR(4)` | Business Place |
| `Segment` |  | |  | `segmt` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `CAAccountDeterminationCode` |  | |  | `kofiz` | `CHAR(2)` | Account Determination ID |
| `CATaxDetnType` |  | |  | `tax_det_type` | `CHAR(2)` | Type of Tax Calculation |
| `CATaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Country/Region for Tax Report |
| `CATaxDateType` |  | |  | `tax_date_type` | `CHAR(2)` | Type of Tax Date |
| `CABillgTaxGroup` |  | |  | `tax_group` | `CHAR(8)` | Grouping of Tax Items |
| `CAExternalTaxDate` |  | |  | `ext_tax_date` | `DATS(8)` | External Tax Date |
| `CATaxDeterminationCode` |  | |  | `ermwskz` | `CHAR(2)` | Indicator: Tax Determination Code |
| `CAAltvTaxDeterminationCode` |  | |  | `cast(ermwskz_b2b as ermwskz_b2b_gfn_kk preserving type )` | `CHAR(2)` | Alternative Tax Determination Code |
| `CAAltvTaxCode` |  | |  | `mwskz_b2b` | `CHAR(2)` | Alternative Tax Code for Deliveries Abroad |
| `CAOtherTaxCode` |  | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `WithholdingTaxCode` |  | |  | `qsskz` | `CHAR(2)` | Withholding Tax Code |
| `CAIsDownPaymentRequest` |  | |  | `xanza` | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CABillgDeferredRevenueCategory` |  | |  | `cast(defrev_cat as defrev_cat_gfn_kk preserving type )` | `CHAR(2)` | Deferred Revenue Category |
| `CABillgDeferredRevenueDate` |  | |  | `defrev_pdate` | `DATS(8)` | Transfer Posting Date for Delayed Revenues |
| `CAInvcgDfrrdRevenueStatus` |  | |  | `cast(defrev_stat as defrev_stat_gfn_kk preserving type )` | `CHAR(1)` | Status of Processing Deferred Revenues |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` | `CHAR(1)` | Relevant for Revenue Accounting |
| `CARevenueAccountingServiceType` |  | |  | `service_type` | `CHAR(6)` | Service Type for Revenue Accounting |
| `CAInvcgAccrualPostingType` |  | |  | `cast(billac_type as billac_type_gfn_kk preserving type )` | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `CABillgDocItemIsBIRelevant` |  | |  | `qty_bw_rel` | `CHAR(1)` | Quantity Is BI-Relevant |
| `CABillgDocItemIsFICORelevant` |  | |  | `qty_fi_co_rel` | `CHAR(1)` | Quantity Is FI/CO-Relevant |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CAIsPrepaid` |  | |  | `prepaid` | `CHAR(1)` | Prepaid |
| `CABillgIsPrepaidBalanceChg` |  | |  | `pprefill` | `CHAR(1)` | Prepaid Account Balance Change |
| `CABillgPartnerSettlementCat` |  | |  | `cast(pscat as pscat_gfn_kk preserving type )` | `CHAR(4)` | Partner Settlement Category |
| `CABillgDocItemCrtnMethod` |  | |  | `item_crmet` | `CHAR(2)` | Method Used to Create Billing Document Item |
| `CABillgFunction` |  | |  | `bill_function` | `CHAR(12)` | Billing Function |
| `CABillgGrpgOfAdditionalItems` |  | |  | `cast(add_group as add_group_gfn_kk preserving type )` | `CHAR(8)` | Grouping of Additional Items |
| `CABillgGrpgOfPaymentData` |  | |  | `py_group` | `CHAR(8)` | Grouping of Payment Data |
| `CABillgGroupingSourceItems` |  | |  | `src_group` | `CHAR(8)` | Grouping of Source Items |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type )` | `INT4(10)` | Number of Billable Items |
| `CADiscBaseItmGroup` |  | |  | `disc_group` | `NUMC(4)` | Grouping of Base Items in Billing Document |
| `CAReasonSecurityDeposit` |  | |  | `sec_reason` | `CHAR(4)` | Reason for Requesting a Security Deposit |
| `CABillgReqReason` |  | |  | `cast(billreqrsn as billreqrsn_gfn_kk preserving type )` | `CHAR(4)` | Billing Request Reason |
| `CABllbleItmDiscountKey` |  | |  | `cast(disckey as disckey_gfn_kk preserving type )` | `CHAR(8)` | Discount/Charge Key |
| `CABllbleItmDiscountVersion` |  | |  | `disckey_versno` | `NUMC(2)` | Version Number of Disccount on Billable Items |
| `CABillingQuantity` |  | |  | `cast ( quantity_pdp + quantity_adp as quantity_kk )` | `QUAN(31)` | Billing Quantity |
| `CABillgQuantityBeforeDecPoint` |  | |  | `quantity_pdp` | `DEC(17)` | Billing Quantity: Places before Decimal Point |
| `CABillgQuantityAfterDecPoint` |  | |  | `quantity_adp` | `DEC(14)` | Billing Quantity: Places after Decimal Point |
| `CADependentItemType` |  | |  | `cast(dittype as dittype_gfn_kk preserving type )` | `CHAR(8)` | Dependent Item Type |
| `ConditionType` |  | |  | `condition_type` | `CHAR(4)` | Condition Type |
| `CAAltvMDOriginalIsEnbld` |  | |  | `altmd_orig` | `CHAR(1)` | Alternative Original Master Data |
| `CARevenueDistributionUUID` |  | |  | `diskey` | `CHAR(22)` | Key of Revenue Distribution (GUID) |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` | `CHAR(20)` | Offsetting Reference Key |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` | `CHAR(1)` | Action Code for Offsetting |
| `CAInvcgOffsettingGroup` |  | |  | `offset_group` | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgOffsettingRefKeyLong` |  | |  | `cast(invbill_i.offset_refid_l as inv_offset_refid_long_gfn_kk preserving type)` | `CHAR(32)` | Offsetting Reference Key (Long) |
| `CAAllowance` |  | |  | `allowance` | `CHAR(1)` | Allowance |
| `CAAllowanceID` |  | |  | `allowance_id` | `CHAR(35)` | Allowance ID |
| `RAOriginalDocItemType` |  | |  | `cast(invbill_i.ra_origdoc_type as rai_ority_gfn_kk preserving type)` | `CHAR(4)` | Revenue Accounting Original Item Type |
| `RAOriginalDocItemID` |  | |  | `cast(invbill_i.ra_origdoc_id as rai_oriid_gfn_kk preserving type)` | `CHAR(35)` | Revenue Accounting Original Item ID |
| `CAAmountPerUnitAmount` |  | |  | `amount_per_unit_amnt` | `CURR(13)` | Amount per Quantity |
| `CAAmountPerUnitCurrency` |  | |  | `amount_per_unit_cuky` | `CUKY(5)` | Currency of Amount per Quantity |
| `CAAmountPerUnitQuantityUnit` |  | |  | `amount_per_unit_qtyu` | `UNIT(3)` | Unit of Measure for Amount per Quantity |
| `CAAmountPerUnitQuantity` |  | |  | `amount_per_unit_quan` | `QUAN(31)` | Quantity of Amount per Quantity |
| `CAIntcoCompanyCodeRequesting` |  | |  | `ico_bukrs_req` | `CHAR(4)` | Requesting Company Code |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` | `CHAR(4)` | Supplying Company Code |
| `CAIntcoType` |  | |  | `cast(invbill_i.ico_type as ico_type_gfn_kk preserving type)` | `CHAR(4)` | Intercompany Settlement Type |
| `CAIntcoProcedure` |  | |  | `cast(invbill_i.ico_proc as ico_proc_gfn_kk preserving type)` | `CHAR(2)` | Intercompany Settlement Procedure |
| `CABillToParty` |  | |  | `bill_to_party` | `CHAR(10)` | Bill-to Party |
| `CABillToRegion` |  | |  | `bill_to_region` | `CHAR(3)` | Bill-To Region |
| `CABillFromRegion` |  | |  | `bill_from_region` | `CHAR(3)` | Region Where the Delivery Plant is Located |
| `CAControlCode` |  | |  | `steuc` | `CHAR(16)` | Control Code for Consumption Taxes in Foreign Trade |
| `CASupplyRegion` |  | |  | `supply_region` | `CHAR(3)` | Supply Region |
| `CABillToCountry` |  | |  | `bill_to_country` | `CHAR(3)` | Bill-to Country |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` | `NUMC(8)` | WBS Element Internal ID |
| `_CABillgDocumentItemType` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CAInvcgAccrualPostingType` | | ✓ | | | | |
| `_CABillgFunction` | | ✓ | | | | |
| `_CABllbleItmDiscountKey` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CABillgReqReason` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CABillgCurrency` | | ✓ | | | | |
| `_CATaxCountry` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CATaxDetnType` | | ✓ | | | | |
| `_CATaxDateType` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CABillgDeferredRevnCat` | | ✓ | | | | |
| `_CADeferredRevenueStatus` | | ✓ | | | | |
| `_CAIsRevnAcctgRelevant` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CABillgDocItemCrtnMethod` | | ✓ | | | | |
| `_CADependentItemType` | | ✓ | | | | |
| `_CABillgDocHeader` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAIntcoCompanyCodeRequesting` | | ✓ | | | | |
| `_CAIntcoCompanyCodeSupplying` | | ✓ | | | | |
| `_CAIntcoType` | | ✓ | | | | |
| `_CAIntcoProcedure` | | ✓ | | | | |
| `_CAAmountPerUnitQuantityUnit` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocumentItemType` | `I_CABillgDocumentItemType` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CAInvcgAccrualPostingType` | `I_CAInvcgAccrualPostingType` | [0..1] |
| `_CABillgFunction` | `I_CABillgFunction` | [0..1] |
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CABillgReqReason` | `I_CABillgReqReason` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CABillgCurrency` | `I_Currency` | [0..1] |
| `_CATaxCountry` | `I_Country` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CATaxDateType` | `I_CATaxDateType` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CABillgDeferredRevnCat` | `I_CABillgDeferredRevnCat` | [0..1] |
| `_CADeferredRevenueStatus` | `I_CADeferredRevenueStatus` | [0..1] |
| `_CAIsRevnAcctgRelevant` | `I_CAIsRevnAcctgRelevant` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CABillgDocItemCrtnMethod` | `I_CABillgDocItemCrtnMethod` | [0..1] |
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [1..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAIntcoCompanyCodeRequesting` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeSupplying` | `I_CompanyCode` | [0..1] |
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoProcedure` | `I_CAIntcoProcedure` | [0..1] |
| `_CAAmountPerUnitQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CABillgDocItem` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_i',
          role: #MAIN,
          viewElement: ['CABillgDocument', 'CABillgDocItem'],
          tableElement: ['billdocno', 'billdocitem']
      } ]
    }
  },
  technicalName: 'ICAINVBILL_I'
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgDocItem',
  sapObjectNodeType.name: 'ContrAcctgBillingDocumentItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsbelegposition'
define view entity I_CABillgDocItem
  as select from dfkkinvbill_i as invbill_i

  association [0..1] to I_CABillgDocumentItemType    as _CABillgDocumentItemType      on  $projection.CABillgDocumentItemType = _CABillgDocumentItemType.CABillgDocumentItemType
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType       on  $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CAInvcgAccrualPostingType  as _CAInvcgAccrualPostingType    on  $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType
  association [0..1] to I_CABillgFunction            as _CABillgFunction              on  $projection.CABillgFunction = _CABillgFunction.CABillgFunction
  association [0..1] to I_CABllbleItmDiscountKey     as _CABllbleItmDiscountKey       on  $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_CABillgReqReason           as _CABillgReqReason             on  $projection.CABillgReqReason = _CABillgReqReason.CABillgReqReason
  association [0..1] to I_Division                   as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_BusinessArea               as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                    as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..*] to I_ProfitCenter               as _ProfitCenter                 on  $projection.ProfitCenter = _ProfitCenter.ProfitCenter
  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode            on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CompanyCode                as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Currency                   as _CABillgCurrency              on  $projection.CABillgCurrency = _CABillgCurrency.Currency
  association [0..1] to I_Country                    as _CATaxCountry                 on  $projection.CATaxCountry = _CATaxCountry.Country

  association [0..1] to I_CAInvcgCorrectionCat       as _CAInvcgCorrectionCat         on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CATaxDetnType              as _CATaxDetnType                on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CATaxDateType              as _CATaxDateType                on  $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_CAStatisticalItemCode      as _CAStatisticalItemCode        on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CABillgDeferredRevnCat     as _CABillgDeferredRevnCat       on  $projection.CABillgDeferredRevenueCategory = _CABillgDeferredRevnCat.CABillgDeferredRevenueCategory
  association [0..1] to I_CADeferredRevenueStatus    as _CADeferredRevenueStatus      on  $projection.CAInvcgDfrrdRevenueStatus = _CADeferredRevenueStatus.CAInvcgDfrrdRevenueStatus
  association [0..1] to I_CAIsRevnAcctgRelevant      as _CAIsRevnAcctgRelevant        on  $projection.CAIsRevenueAccountingRelevant = _CAIsRevnAcctgRelevant.CAIsRevenueAccountingRelevant
  association [0..1] to I_CASubApplication           as _CASubApplication             on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CABillgDocItemCrtnMethod   as _CABillgDocItemCrtnMethod     on  $projection.CABillgDocItemCrtnMethod = _CABillgDocItemCrtnMethod.CABillgDocItemCrtnMethod
  association [0..1] to I_CADependentItemType        as _CADependentItemType          on  $projection.CADependentItemType = _CADependentItemType.CADependentItemType

  association [1..1] to I_CABillgDocHeader           as _CABillgDocHeader             on  $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument

  // prepared enhancements
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory    on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure   on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction      on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeRequesting on  $projection.CAIntcoCompanyCodeRequesting = _CAIntcoCompanyCodeRequesting.CompanyCode
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeSupplying  on  $projection.CAIntcoCompanyCodeSupplying = _CAIntcoCompanyCodeSupplying.CompanyCode
  association [0..1] to I_CAIntcoType                as _CAIntcoType                  on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_CAIntcoProcedure           as _CAIntcoProcedure             on  $projection.CAIntcoProcedure = _CAIntcoProcedure.CAIntcoProcedure
  association [0..1] to I_UnitOfMeasure              as _CAAmountPerUnitQuantityUnit  on  $projection.CAAmountPerUnitQuantityUnit = _CAAmountPerUnitQuantityUnit.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID


  // extension
  association [0..1] to E_CABillgDocItem             as _Extension                    on  $projection.CABillgDocument = _Extension.CABillgDocument
                                                                                      and $projection.CABillgDocItem  = _Extension.CABillgDocItem
{
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                                as CABillgDocument,
  key billdocitem                                              as CABillgDocItem,
      item_simulated                                           as CAIsDocItemSimulated,
      @ObjectModel.foreignKey.association: '_CABillgDocumentItemType'
      itemtype                                                 as CABillgDocumentItemType,
      vtref                                                    as CAContract,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                    as CompanyCode,
      -- fkey in upper view
      hvorg                                                    as CAMainTransaction,
      -- fkey in upper view
      tvorg                                                    as CASubTransaction,
      postrel                                                  as CAInvcgIsItemPostingRelevant,
      printrel                                                 as CAInvcgIsItemPrintingRelevant,
      @Semantics.amount.currencyCode: 'CABillgCurrency'
      bill_amount                                              as CABillgDocItemAmount,
      @ObjectModel.foreignKey.association: '_CABillgCurrency'
      bill_curr                                                as CABillgCurrency,
      tax_included                                             as CATaxIsIncluded,
      -- fkey in upper view
      mwskz                                                    as TaxCode,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      qty_unit                                                 as UnitOfMeasure,
      refitem                                                  as CABillgDocItemExternalNumber,
      reversalitem                                             as CABillgDocItemIsReversal,

      @API.element: {
        releaseState: #DEPRECATED,
        successor:    'CABillgDocItemIsReversal'
      }
      reversalitem                                             as CAInvcgDocItemIsReversal,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type )         as CAInvcgCorrectionCategory,
      not_bprel                                                as CAInvcgIsNotBPRelevant,
      print_substitute                                         as CAInvcgSubstituteGroupPrinting,
      date_from                                                as CAItemPeriodStartDate,
      date_to                                                  as CAItemPeriodEndDate,
      faedn                                                    as CANetDueDate,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                    as Division,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                    as BusinessArea,
      cast(bupla as farp_bupla preserving type)                as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segmt                                                    as Segment,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                    as ProfitCenter,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                    as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                             as CATaxDetnType,
      @ObjectModel.foreignKey.association: '_CATaxCountry'
      tax_country                                              as CATaxCountry,
      @ObjectModel.foreignKey.association: '_CATaxDateType'
      tax_date_type                                            as CATaxDateType,
      tax_group                                                as CABillgTaxGroup,
      ext_tax_date                                             as CAExternalTaxDate,
      ermwskz                                                  as CATaxDeterminationCode,
      cast(ermwskz_b2b as ermwskz_b2b_gfn_kk preserving type ) as CAAltvTaxDeterminationCode,
      -- fkey in upper view
      mwskz_b2b                                                as CAAltvTaxCode,
      -- fkey in upper view
      strkz                                                    as CAOtherTaxCode,
      -- fkey in upper view
      txjcd                                                    as TaxJurisdiction,
      -- fkey in upper view
      qsskz                                                    as WithholdingTaxCode,
      xanza                                                    as CAIsDownPaymentRequest,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                                    as CAStatisticalItemCode,
      @ObjectModel.foreignKey.association: '_CABillgDeferredRevnCat'
      cast(defrev_cat as defrev_cat_gfn_kk preserving type )   as CABillgDeferredRevenueCategory,
      defrev_pdate                                             as CABillgDeferredRevenueDate,
      @ObjectModel.foreignKey.association: '_CADeferredRevenueStatus'
      cast(defrev_stat as defrev_stat_gfn_kk preserving type ) as CAInvcgDfrrdRevenueStatus,
      @Semantics.booleanIndicator:true
      rarel                                                    as CAIsRevenueAccountingRelevant,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                             as CARevenueAccountingServiceType,
      @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
      cast(billac_type as billac_type_gfn_kk preserving type ) as CAInvcgAccrualPostingType,
      qty_bw_rel                                               as CABillgDocItemIsBIRelevant,
      qty_fi_co_rel                                            as CABillgDocItemIsFICORelevant,
      vtpos                                                    as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                    as CASubApplication,
      prepaid                                                  as CAIsPrepaid,
      pprefill                                                 as CABillgIsPrepaidBalanceChg,
      -- fkey missing
      cast(pscat as pscat_gfn_kk preserving type )             as CABillgPartnerSettlementCat,
      @ObjectModel.foreignKey.association: '_CABillgDocItemCrtnMethod'
      item_crmet                                               as CABillgDocItemCrtnMethod,
      @ObjectModel.foreignKey.association: '_CABillgFunction'
      bill_function                                            as CABillgFunction,
      cast(add_group as add_group_gfn_kk preserving type )     as CABillgGrpgOfAdditionalItems,
      py_group                                                 as CABillgGrpgOfPaymentData,
      src_group                                                as CABillgGroupingSourceItems,
      cast(bit_number as bit_number_gfn_kk preserving type )   as CABllbleItmNumber,
      disc_group                                               as CADiscBaseItmGroup,
      sec_reason                                               as CAReasonSecurityDeposit,
      @ObjectModel.foreignKey.association: '_CABillgReqReason'
      cast(billreqrsn as billreqrsn_gfn_kk preserving type )   as CABillgReqReason,
      @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
      cast(disckey as disckey_gfn_kk preserving type )         as CABllbleItmDiscountKey,
      disckey_versno                                           as CABllbleItmDiscountVersion,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast ( quantity_pdp + quantity_adp
             as quantity_kk )                                  as CABillingQuantity,
      quantity_pdp                                             as CABillgQuantityBeforeDecPoint,
      quantity_adp                                             as CABillgQuantityAfterDecPoint,
      @ObjectModel.foreignKey.association: '_CADependentItemType'
      cast(dittype as dittype_gfn_kk preserving type )         as CADependentItemType,
      condition_type                                           as ConditionType,
      altmd_orig                                               as CAAltvMDOriginalIsEnbld,

      _CABillgDocHeader,
      _CABillgReqReason,
      _Division,
      _BusinessArea,
      _CompanyCode,
      _Segment,
      _CATaxCountry,
      _CABillgCurrency,
      _ProfitCenter,
      _CAAccountDetnCode,
      _UnitOfMeasure,
      _CABillgDocumentItemType,
      _CARevnAcctgServiceType,
      _CAInvcgAccrualPostingType,
      _CABillgFunction,
      _CABllbleItmDiscountKey,
      _CAInvcgCorrectionCat,
      _CATaxDetnType,
      _CATaxDateType,
      _CAStatisticalItemCode,
      _CABillgDeferredRevnCat,
      _CADeferredRevenueStatus,
      _CAIsRevnAcctgRelevant,
      _CASubApplication,
      _CABillgDocItemCrtnMethod,
      _CADependentItemType,

      // Moved from Extension View  X_S4C_I_CABILLGDOCITEM
      invbill_i.diskey                                         as CARevenueDistributionUUID,
      invbill_i.offset_refid                                   as CAInvcgOffsettingReferenceKey,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      invbill_i.offset_cat                                     as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      invbill_i.offset_proc                                    as CAInvcgOffsettingProcedure,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      invbill_i.offset_action                                  as CAInvcgOffsettingAction,
      invbill_i.offset_group                                   as CAInvcgOffsettingGroup,
      cast(invbill_i.offset_refid_l as inv_offset_refid_long_gfn_kk preserving type) as CAInvcgOffsettingRefKeyLong,
      invbill_i.allowance                                      as CAAllowance,
      invbill_i.allowance_id                                   as CAAllowanceID,
      cast(invbill_i.ra_origdoc_type as rai_ority_gfn_kk preserving type) as RAOriginalDocItemType,
      cast(invbill_i.ra_origdoc_id as rai_oriid_gfn_kk preserving type) as RAOriginalDocItemID,
      @Semantics.amount.currencyCode: 'CAAmountPerUnitCurrency'
      invbill_i.amount_per_unit_amnt                           as CAAmountPerUnitAmount,
      invbill_i.amount_per_unit_cuky                           as CAAmountPerUnitCurrency,
      @ObjectModel.foreignKey.association: '_CAAmountPerUnitQuantityUnit'
      invbill_i.amount_per_unit_qtyu                           as CAAmountPerUnitQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'CAAmountPerUnitQuantityUnit'
      invbill_i.amount_per_unit_quan                           as CAAmountPerUnitQuantity,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeRequesting'
      invbill_i.ico_bukrs_req                                  as CAIntcoCompanyCodeRequesting,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeSupplying'
      invbill_i.ico_bukrs_sup                                  as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_CAIntcoType'
      cast(invbill_i.ico_type as ico_type_gfn_kk preserving type) as CAIntcoType,
      @ObjectModel.foreignKey.association: '_CAIntcoProcedure'
      cast(invbill_i.ico_proc as ico_proc_gfn_kk preserving type) as CAIntcoProcedure,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_party                                  as CABillToParty,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_region                                 as CABillToRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_from_region                               as CABillFromRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.steuc                                          as CAControlCode,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.supply_region                                  as CASupplyRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_country                                as CABillToCountry,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,      

      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CAInvcgOffsettingAction,
      _CAAmountPerUnitQuantityUnit,
      _CAIntcoCompanyCodeRequesting,
      _CAIntcoCompanyCodeSupplying,
      _CAIntcoType,
      _CAIntcoProcedure,
      _WBSElementBasicData
}
```
