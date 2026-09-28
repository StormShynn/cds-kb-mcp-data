---
name: I_CAOPENITEMLISTITEM
description: "Caopenitemlistitem"
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOPENITEMLISTITEM

**Caopenitemlistitem**

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
| `CAOpenItemListUUID` | ✓ | |  | `guid` | `RAW(16)` | Key for Business Partner Item (in OI Lists) |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `BusinessPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `PersonnelNumber` |  | |  | `pernr` | `NUMC(8)` | Personnel Number |
| `PartnerCompany` |  | |  | `vbund` | `CHAR(6)` | Company ID of Trading Partner |
| `BusinessPartner` |  | |  | `gpart` | `CHAR(10)` | Business Partner Number |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CAAdditionalContract` |  | |  | `vtre2` | `CHAR(20)` | Additional Reference Information |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `AltvContractAcctForCollvBills` |  | |  | `abwkt` | `CHAR(12)` | Alternative Contract Account for Collective Bills |
| `CAReconciliationAccount` |  | |  | `hkont` | `CHAR(10)` | General ledger account |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CAMainTransaction` |  | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CAAccountDeterminationCode` |  | |  | `kofiz` | `CHAR(2)` | Account Determination ID |
| `CADoubtfulOrValueAdjmtCode` |  | |  | `infoz` | `NUMC(3)` | Doubtful Entry / Individual Value Adjustment |
| `CAAccountAssignmentCategory` |  | |  | `kontt` | `CHAR(2)` | Account Assignment Category |
| `CAAccountAssignment` |  | |  | `kontl` | `CHAR(50)` | Account Assgt String for Application-Specific Account Assgts |
| `CADocumentType` |  | |  | `blart` | `CHAR(2)` | Document Type |
| `CAIsDownPaymentRequest` |  | |  | `xanza` | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CAItemIsOnlyForSettlement` |  | |  | `verkz` | `CHAR(1)` | Item Can Only Be Cleared |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CABPItemText` |  | |  | `optxt` | `CHAR(50)` | Item text |
| `CANumberOfRepetitionItems` |  | |  | `whang` | `NUMC(3)` | Number of repetition items |
| `CARepetitionGroup` |  | |  | `whgrp` | `NUMC(3)` | Repetition group |
| `CAStartDateOfBillingPeriod` |  | |  | `abrzu` | `DATS(8)` | Lower Limit of Billing Period |
| `CAEndDateOfBillingPeriod` |  | |  | `abrzo` | `DATS(8)` | Upper Limit of the Billing Period |
| `CAGroupingCodeForBPItems` |  | |  | `grkey` | `CHAR(3)` | Grouping Key for Displaying Open Items |
| `CAPeriodCode` |  | |  | `persl` | `CHAR(4)` | Key for Period Assignment |
| `CAChangeIsForbidden` |  | |  | `xaesp` | `CHAR(1)` | Printing - No Changes Possible |
| `CAInterestCode` |  | |  | `ikey` | `CHAR(2)` | Interest Key |
| `CARoundingItemCode` |  | |  | `rndps` | `CHAR(1)` | Type of Rounding Item |
| `CAReceivingCountry` |  | |  | `landl` | `CHAR(3)` | Destination Country/Region (for Tax Reports) |
| `CAInternalPostingReasonCode` |  | |  | `intbu` | `CHAR(1)` | Reason for Automatic Creation of Posting |
| `CAWorkflowCheckReason` |  | |  | `c4eye` | `CHAR(2)` | Check Reason for Workflows Acc. to Dual Control Principle |
| `CAWorkflowCheckProcess` |  | |  | `c4eyp` | `CHAR(1)` | Editing Process to Be Confirmed |
| `CANegativePostingControlCode` |  | |  | `negbu` | `NUMC(1)` | Control Field for Negative Posting |
| `CAPartnerSettlementStatus` |  | |  | `ptitm` | `CHAR(1)` | Status of Partner Settlement Using Billable Items |
| `CAIsPartOfJointLiability` |  | |  | `palix` | `CHAR(1)` | Item Is Part of a Collaborative Liability |
| `CASubstituteDocumentNumber` |  | |  | `abwbl` | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CASubstituteDocumentCategory` |  | |  | `abwtp` | `CHAR(1)` | Category of substitute document in FI-CA |
| `CAStatisticalCodeOfOriginItem` |  | |  | `astkz` | `CHAR(1)` | Statistical Key of the Triggering Item |
| `CADocumentNumberOfOriginItem` |  | |  | `asblg` | `CHAR(12)` | Number of Triggering Document |
| `CAReferenceDocument` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CADeferralDate` |  | |  | `studt` | `DATS(8)` | Deferral To |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | | `_CompCode` | `Currency` | `CUKY(5)` | Currency Key |
| `CAExchangeRate` |  | |  | `cast( abs( kursf ) as fis_absolute_exchangerate preserving type )` | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  | `cast( case when kursf < 0 then 'X' else ' ' end as fis_indirect_quotation preserving type )` | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `CAAmountInLocalCurrency` |  | |  | `betrh` | `CURR(13)` | Amount In Local Currency With +/- Signs |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAAmountInSecondCurrency` |  | |  | `betr2` | `CURR(13)` | Amount in second parallel currency with +/- sign |
| `CAAmountInThirdCurrency` |  | |  | `betr3` | `CURR(13)` | Amount in third parallel currency with +/- sign |
| `CACashDiscountDueDate` |  | |  | `faeds` | `DATS(8)` | Due Date for Cash Discount |
| `CACashDiscountRate` |  | |  | `sktpz` | `DEC(5)` | Cash Discount Percentage Rate |
| `CAEligibleAmountForCshDiscount` |  | |  | `skfbt` | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CASupplementaryTaxCode` |  | |  | `mwszkz` | `CHAR(2)` | Supplementary Tax |
| `CATaxAmountInLocalCurrency` |  | |  | `sbeth` | `CURR(13)` | Tax Amount in Local Currency With +/- Sign |
| `CATaxAmountInTransCurrency` |  | |  | `sbetw` | `CURR(13)` | Tax Amount in Transaction Currency with +/- Sign |
| `CATaxAmountInSecondCurrency` |  | |  | `sbet2` | `CURR(13)` | Tax Amount in Second Parallel Currency |
| `CATaxAmountInThirdCurrency` |  | |  | `sbet3` | `CURR(13)` | Tax amount in third parallel currency |
| `CADownPaymentTaxAccount` |  | |  | `mwsko` | `CHAR(10)` | Account for Posting Sales / Purchase Tax for Down Payments |
| `CADownPaymentOffsetTaxAccount` |  | |  | `mwvko` | `CHAR(10)` | Account for Offsetting Tax Posting in Down Payments |
| `TaxJurisdiction` |  | |  | `txjcd` | `CHAR(15)` | Tax Jurisdiction |
| `CATaxDate` |  | |  | `txdat` | `DATS(8)` | Decisive Date for Calculating Taxes |
| `WithholdingTaxCode` |  | |  | `qsskz` | `CHAR(2)` | Withholding Tax Code |
| `CAWithholdingTaxSupplement` |  | |  | `qssew` | `CHAR(2)` | Withholding Tax Supplement |
| `CAWithholdingTaxCategory` |  | |  | `qsptp` | `CHAR(1)` | Line Item Category From Withholding Tax View |
| `CABaseAmountForWithholdingTax` |  | |  | `qsshb` | `CURR(13)` | Tax Base Amount |
| `CAWithholdingTaxAmount` |  | |  | `qbshb` | `CURR(13)` | Withholding Tax Amount (in Document Currency) |
| `CAWithholdingTaxPercentage` |  | |  | `qsprz` | `NUMC(6)` | Withholding Tax Percentage |
| `WithholdingTaxCertificate` |  | |  | `qsznr` | `CHAR(10)` | Certificate Number of the Withholding Tax Exemption |
| `CAOtherTaxCode` |  | |  | `strkz` | `CHAR(2)` | Tax Code for Other Taxes |
| `CAGroupingCodeForTaxItems` |  | |  | `txgrp` | `CHAR(6)` | Grouping Key for Tax Items |
| `CATaxPortionInLocalCurrency` |  | |  | `sctax` | `CURR(13)` | Tax Portion in FI-CA Local Currency |
| `CATaxPortionInTransCurrency` |  | |  | `sttax` | `CURR(13)` | Tax Portion in Document Currency |
| `CATaxIsCalculatedExternally` |  | |  | `xustpd` | `CHAR(1)` | Tax on Sales/Purchases Was Calculated by Document |
| `CAPaymentMethod` |  | |  | `pymet` | `CHAR(1)` | Payment Method |
| `CAPaymentCompanyCode` |  | |  | `pybuk` | `CHAR(4)` | Company Code for Automatic Payment Transactions |
| `CAGroupingForPayment` |  | |  | `pygrp` | `CHAR(10)` | Grouping field for automatic payments |
| `CAPaymentSpecificationCategory` |  | |  | `pdtyp` | `CHAR(1)` | Category of Payment Specification |
| `CAClearingStatus` |  | |  | `augst` | `CHAR(1)` | Clearing Status |
| `CAClearingDate` |  | |  | `augdt` | `DATS(8)` | Clearing Date |
| `CAClearingDocumentNumber` |  | |  | `augbl` | `CHAR(12)` | Clearing Document or Printed Document |
| `CAPostingDateOfClearingDoc` |  | |  | `augbd` | `DATS(8)` | Clearing Document Posting Date |
| `CAClearingReason` |  | |  | `augrd` | `CHAR(2)` | Clearing Reason |
| `CAClearingCurrency` |  | |  | `augwa` | `CUKY(5)` | Clearing Currency |
| `CAClearingAmountInClearingCrcy` |  | |  | `augbt` | `CURR(13)` | Clearing Amount in Clearing Currency |
| `CATaxAmountInClearingCrcy` |  | |  | `augbs` | `CURR(13)` | Tax Amount in Clearing Currency |
| `CACashDiscAmountInClearingCrcy` |  | |  | `augsk` | `CURR(13)` | Cash Discount Granted/Surcharge Levied in Clearing Currency |
| `CAValueDateForClearing` |  | |  | `augvd` | `DATS(8)` | Clearing Value Date |
| `CAClearingRestrictionCode` |  | |  | `augrs` | `CHAR(1)` | Clearing restriction |
| `CAClearingPostingIsReset` |  | |  | `xragl` | `CHAR(1)` | Clearing posting reversed |
| `CAItemIsWithdrawn` |  | |  | `augob` | `CHAR(1)` | Item Canceled |
| `CAItemIsExcludedFromDunning` |  | |  | `xmanl` | `CHAR(1)` | Exclude Item from Dunning Run |
| `CADunningProcedure` |  | |  | `mahnv` | `CHAR(2)` | Dunning Procedure |
| `CAGrpgCodeForTransfToCollAgcy` |  | |  | `inkps` | `NUMC(3)` | Collection Item |
| `CAIsIncludedInCollectionCase` |  | |  | `xcolc` | `CHAR(1)` | Item Is Included in Collection Case |
| `CashPlanningGroup` |  | |  | `fdgrp` | `CHAR(10)` | Planning Group |
| `PlanningLevel` |  | |  | `fdlev` | `CHAR(2)` | Planning Level |
| `CAAdditionalDaysForCashMgmt` |  | |  | `fdztg` | `NUMC(2)` | Cash Management Extra Days |
| `PlannedAmtInTransactionCrcy` |  | |  | `cast(cast(fdwbt as abap.curr( 23, 2 )) as fis_fdwbt)` | `CURR(23)` | Planned Amount in Transaction Currency |
| `CAAltvBPForPayment` |  | |  | `emgpa` | `CHAR(10)` | Alternative Business Partner for Payments |
| `CABankOfAltvBPForPayment` |  | |  | `embvt` | `CHAR(4)` | Bank Details ID of Payee |
| `CAAddressOfAltvBPForPayment` |  | |  | `emadr` | `CHAR(10)` | Address Number |
| `CACardOfAltvBPForPayment` |  | |  | `emcrd` | `CHAR(6)` | Alternative Payment Card ID in Document |
| `CAGLPostingCurrency` |  | |  | `pswsl` | `CUKY(5)` | Update Currency for General Ledger Transaction Figures |
| `CAGLPostingAmount` |  | |  | `pswbt` | `CURR(13)` | Amount for Updating in General Ledger |
| `CAGLPostingTaxAmount` |  | |  | `pswtx` | `CURR(13)` | Tax Amount for Update in General Ledger |
| `CAIsSeparateLineItemInGL` |  | |  | `xeiph` | `CHAR(1)` | Create Line Item in General Ledger |
| `CAIsCashFlowItem` |  | |  | `xcsha` | `CHAR(1)` | Document Contains Assignments from Cash Flows |
| `CACashFlowAccount` |  | |  | `reacc` | `CHAR(10)` | Originating Account in Cash Flow Anlaysis |
| `CACashFlowCompanyCode` |  | |  | `rebuk` | `CHAR(4)` | Partner Company Code for Cash Flow Analysis |
| `CAPaymentPreNotificationCode` |  | |  | `xpyor` | `CHAR(1)` | Item Included in a Payment Order |
| `CASEPAPreNotificationNumber` |  | |  | `pnnum` | `CHAR(16)` | Number of Debit Memo Notification |
| `CASEPAPreNotifOriginCode` |  | |  | `pnhkf` | `CHAR(2)` | Origin of Direct Debit Pre-Notification |
| `CASEPAPreNotifExecutionDate` |  | |  | `pnexd` | `DATS(8)` | Date of Execution of Direct Debit Pre-Notifcation |
| `CASEPAPreNotificationRqmtCode` |  | |  | `pnctr` | `CHAR(1)` | Necessity of a Notification |
| `CARevenueDistrFinalRecipient` |  | |  | `finre` | `CHAR(12)` | Contract Account of Final Recipient |
| `CARevenueDistrCurrentStatus` |  | |  | `rdsta` | `CHAR(1)` | Current Distribution Status |
| `CARevenueDistrLastStatus` |  | |  | `rdstb` | `CHAR(1)` | Last Distribution Status Reported |
| `CACurrentFactoringStatusOfRbl` |  | |  | `fasta` | `CHAR(1)` | Factoring: Current Status of Receivable |
| `CAFactoringCheckStsForClrgInfo` |  | |  | `pasta` | `CHAR(1)` | Factoring: Check Status for Clearing Information |
| `SEPAMandateCAInternalID` |  | |  | `emmnd` | `NUMC(6)` | Mandate Identifier |
| `ControllingArea` |  | | `_CompCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | | `_CompCode` | `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Country` |  | | `_CompCode._Country` | `Country` | `CHAR(3)` | Country/Region Key |
| `TaxCalculationProcedure` |  | | `_CompCode._Country` | `TaxCalculationProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `_CADocument` | | ✓ | | | | |
| `_CASubstituteDocument` | | ✓ | | | | |
| `_CAClearingDocument` | | ✓ | | | | |
| `_CAOriginDocument` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_AltvBPForPayment` | | ✓ | | | | |
| `_CAPartner` | | ✓ | | | | |
| `_CAHeader` | | ✓ | | | | |
| `_CAHeaderCollvBills` | | ✓ | | | | |
| `_CAHeaderFinalRec` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_MainTransaction` | | ✓ | | | | |
| `_SubTransaction` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CompCodePayt` | | ✓ | | | | |
| `_CompCodeCashFlow` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ReconAccount` | | ✓ | | | | |
| `_TaxAccount` | | ✓ | | | | |
| `_OffsetTaxAccount` | | ✓ | | | | |
| `_CashFlowAccount` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ClearingCurrency` | | ✓ | | | | |
| `_GLPostingCurrency` | | ✓ | | | | |
| `_PaytMethod` | | ✓ | | | | |
| `_InterestCode` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_ReceivingCountry` | | ✓ | | | | |
| `_WithholdingTaxCode` | | ✓ | | | | |
| `_WorkflowCheckReason` | | ✓ | | | | |
| `_WorkflowCheckProcess` | | ✓ | | | | |
| `_PeriodCode` | | ✓ | | | | |
| `_ClearingReason` | | ✓ | | | | |
| `_AcctAssgmtCat` | | ✓ | | | | |
| `_WhldgTaxSuplmnt` | | ✓ | | | | |
| `_OtherTaxCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ClrgRstrcnCode` | | ✓ | | | | |
| `_CAOpenItemList` | | ✓ | | | | |
| `_DocHeader` | | ✓ | | | | |
| `_SubstitDocHeader` | | ✓ | | | | |
| `_ClearingDocHeader` | | ✓ | | | | |
| `_OriginDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CASubstituteDocument` | `I_CADocument` | [0..1] |
| `_CAClearingDocument` | `I_CADocument` | [0..1] |
| `_CAOriginDocument` | `I_CADocument` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_AltvBPForPayment` | `I_BusinessPartner` | [0..1] |
| `_CAPartner` | `I_ContractAccountPartner` | [1..1] |
| `_CAHeader` | `I_ContractAccountHeader` | [1..1] |
| `_CAHeaderCollvBills` | `I_ContractAccountHeader` | [0..1] |
| `_CAHeaderFinalRec` | `I_ContractAccountHeader` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_DocType` | `I_CADocumentType` | [0..1] |
| `_MainTransaction` | `I_CAMainTransaction` | [1..1] |
| `_SubTransaction` | `I_CASubTransaction` | [1..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_CompCodePayt` | `I_CompanyCode` | [0..1] |
| `_CompCodeCashFlow` | `I_CompanyCode` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ReconAccount` | `I_GLAccountInChartOfAccounts` | [1..1] |
| `_TaxAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsetTaxAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CashFlowAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_ClearingCurrency` | `I_Currency` | [0..1] |
| `_GLPostingCurrency` | `I_Currency` | [0..1] |
| `_PaytMethod` | `I_CAPaymentMethod` | [0..1] |
| `_InterestCode` | `I_CAInterestCode` | [0..1] |
| `_DunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_ReceivingCountry` | `I_Country` | [0..1] |
| `_WithholdingTaxCode` | `I_WithholdingTaxCode` | [0..1] |
| `_WorkflowCheckReason` | `I_CAWorkflowCheckReason` | [0..1] |
| `_WorkflowCheckProcess` | `I_CAWorkflowCheckProcess` | [0..1] |
| `_PeriodCode` | `I_CAPeriodCode` | [0..1] |
| `_ClearingReason` | `I_CAClearingReason` | [0..1] |
| `_AcctAssgmtCat` | `I_CAAccountAssignmentCategory` | [0..1] |
| `_WhldgTaxSuplmnt` | `I_CAWithholdingTaxSupplement` | [0..1] |
| `_OtherTaxCode` | `I_CAOtherTaxCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ClrgRstrcnCode` | `I_CAClearingRestrictionCode` | [0..1] |
| `_CAOpenItemList` | `I_CAOpenItemList` | [0..1] |
| `_Extension` | `E_CAOpenItemListItem` | [1..1] |
| `_DocHeader` | `I_CADocumentHeader` | [1..1] |
| `_SubstitDocHeader` | `I_CADocumentHeader` | [0..1] |
| `_ClearingDocHeader` | `I_CADocumentHeader` | [0..1] |
| `_OriginDocHeader` | `I_CADocumentHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Contract Accounting Open Item List Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_CAOpenItemListItem
  as select from dfkkop_listp

  association [1..1] to I_CADocument                  as _CADocument           on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CASubstituteDocument on  $projection.CASubstituteDocumentNumber = _CASubstituteDocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CAClearingDocument   on  $projection.CAClearingDocumentNumber = _CAClearingDocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CAOriginDocument     on  $projection.CADocumentNumberOfOriginItem = _CAOriginDocument.CADocumentNumber
  association [0..1] to I_BusinessArea                as _BusinessArea         on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                     as _Segment              on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Division                    as _Division             on  $projection.Division = _Division.Division
  association [1..1] to I_BusinessPartner             as _BusinessPartner      on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _AltvBPForPayment     on  $projection.CAAltvBPForPayment = _AltvBPForPayment.BusinessPartner
  association [1..1] to I_ContractAccountPartner      as _CAPartner            on  $projection.BusinessPartner = _CAPartner.BusinessPartner
                                                                               and $projection.ContractAccount = _CAPartner.ContractAccount
  association [1..1] to I_ContractAccountHeader       as _CAHeader             on  $projection.ContractAccount = _CAHeader.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _CAHeaderCollvBills   on  $projection.AltvContractAcctForCollvBills = _CAHeaderCollvBills.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _CAHeaderFinalRec     on  $projection.CARevenueDistrFinalRecipient = _CAHeaderFinalRec.ContractAccount
  association [0..1] to I_CAProviderContractHeader    as _ProviderContract     on  $projection.CASubApplication = 'P'
                                                                               and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [0..1] to I_CADocumentType              as _DocType              on  $projection.CADocumentType    = _DocType.CADocumentType
                                                                               and $projection.CAApplicationArea = _DocType.CAApplicationArea
  association [1..1] to I_CAMainTransaction           as _MainTransaction      on  $projection.CAApplicationArea = _MainTransaction.CAApplicationArea
                                                                               and $projection.CAMainTransaction = _MainTransaction.CAMainTransaction
  association [1..1] to I_CASubTransaction            as _SubTransaction       on  $projection.CAApplicationArea = _SubTransaction.CAApplicationArea
                                                                               and $projection.CAMainTransaction = _SubTransaction.CAMainTransaction
                                                                               and $projection.CASubTransaction  = _SubTransaction.CASubTransaction
  association [1..1] to I_CompanyCode                 as _CompCode             on  $projection.CompanyCode = _CompCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CompCodePayt         on  $projection.CAPaymentCompanyCode = _CompCodePayt.CompanyCode
  association [0..1] to I_CompanyCode                 as _CompCodeCashFlow     on  $projection.CACashFlowCompanyCode = _CompCodeCashFlow.CompanyCode
  association [0..*] to I_ProfitCenter                as _ProfitCenter         on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                               and $projection.controllingarea = _ProfitCenter.ControllingArea
  association [1..1] to I_GLAccountInChartOfAccounts  as _ReconAccount         on  $projection.chartofaccounts         = _ReconAccount.ChartOfAccounts
                                                                               and $projection.CAReconciliationAccount = _ReconAccount.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts  as _TaxAccount           on  $projection.chartofaccounts         = _TaxAccount.ChartOfAccounts
                                                                               and $projection.CADownPaymentTaxAccount = _TaxAccount.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts  as _OffsetTaxAccount     on  $projection.chartofaccounts               = _OffsetTaxAccount.ChartOfAccounts
                                                                               and $projection.CADownPaymentOffsetTaxAccount = _OffsetTaxAccount.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts  as _CashFlowAccount      on  $projection.chartofaccounts   = _CashFlowAccount.ChartOfAccounts
                                                                               and $projection.CACashFlowAccount = _CashFlowAccount.GLAccount
  association [1..1] to I_Currency                    as _Currency             on  $projection.TransactionCurrency = _Currency.Currency
  association [0..1] to I_Currency                    as _ClearingCurrency     on  $projection.CAClearingCurrency = _ClearingCurrency.Currency
  association [0..1] to I_Currency                    as _GLPostingCurrency    on  $projection.CAGLPostingCurrency = _GLPostingCurrency.Currency
  association [0..1] to I_CAPaymentMethod             as _PaytMethod           on  $projection.country         = _PaytMethod.Country
                                                                               and $projection.CAPaymentMethod = _PaytMethod.CAPaymentMethod
  association [0..1] to I_CAInterestCode              as _InterestCode         on  $projection.CAInterestCode = _InterestCode.CAInterestCode
  association [0..1] to I_CADunningProcedure          as _DunningProcedure     on  $projection.CADunningProcedure = _DunningProcedure.CADunningProcedure
  association [0..1] to I_Partnercompany              as _PartnerCompany       on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_Country                     as _Country              on  $projection.country = _Country.Country
  association [0..1] to I_Country                     as _ReceivingCountry     on  $projection.CAReceivingCountry = _ReceivingCountry.Country
  association [0..1] to I_WithholdingTaxCode          as _WithholdingTaxCode   on  $projection.country            = _WithholdingTaxCode.Country
                                                                               and $projection.WithholdingTaxCode = _WithholdingTaxCode.WithholdingTaxCode
  association [0..1] to I_CAWorkflowCheckReason       as _WorkflowCheckReason  on  $projection.CAWorkflowCheckReason = _WorkflowCheckReason.CAWorkflowCheckReason
  association [0..1] to I_CAWorkflowCheckProcess      as _WorkflowCheckProcess on  $projection.CAWorkflowCheckProcess = _WorkflowCheckProcess.CAWorkflowCheckProcess
  association [0..1] to I_CAPeriodCode                as _PeriodCode           on  $projection.CAPeriodCode = _PeriodCode.CAPeriodCode
  association [0..1] to I_CAClearingReason            as _ClearingReason       on  $projection.CAClearingReason = _ClearingReason.CAClearingReason
  association [0..1] to I_CAAccountAssignmentCategory as _AcctAssgmtCat        on  $projection.CAAccountAssignmentCategory = _AcctAssgmtCat.CAAccountAssignmentCategory
  association [0..1] to I_CAWithholdingTaxSupplement  as _WhldgTaxSuplmnt      on  $projection.CAWithholdingTaxSupplement = _WhldgTaxSuplmnt.CAWithholdingTaxSupplement
                                                                               and $projection.country                    = _WhldgTaxSuplmnt.Country
  association [0..1] to I_CAOtherTaxCode              as _OtherTaxCode         on  $projection.CAOtherTaxCode = _OtherTaxCode.CAOtherTaxCode
                                                                               and $projection.country        = _OtherTaxCode.Country
  association [0..1] to I_ControllingArea             as _ControllingArea      on  $projection.controllingarea = _ControllingArea.ControllingArea
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts      on  $projection.chartofaccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_CAClearingRestrictionCode   as _ClrgRstrcnCode       on  $projection.CAClearingRestrictionCode = _ClrgRstrcnCode.CAClearingRestrictionCode
  association [0..1] to I_CAOpenItemList              as _CAOpenItemList       on  $projection.CAOpenItemListUUID = _CAOpenItemList.CAOpenItemListUUID

  association [1..1] to E_CAOpenItemListItem          as _Extension            on  $projection.CAOpenItemListUUID     = _Extension.CAOpenItemListUUID
                                                                               and $projection.CADocumentNumber       = _Extension.CADocumentNumber
                                                                               and $projection.CARepetitionItemNumber = _Extension.CARepetitionItemNumber
                                                                               and $projection.CABPItemNumber         = _Extension.CABPItemNumber
                                                                               and $projection.CASubItemNumber        = _Extension.CASubItemNumber

  /* deprecated associations */
  association [1..1] to I_CADocumentHeader            as _DocHeader            on  $projection.CADocumentNumber = _DocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader            as _SubstitDocHeader     on  $projection.CASubstituteDocumentNumber = _SubstitDocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader            as _ClearingDocHeader    on  $projection.CAClearingDocumentNumber = _ClearingDocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader            as _OriginDocHeader      on  $projection.CADocumentNumberOfOriginItem = _OriginDocHeader.CADocumentNumber
  /* end deprecated associations */

{
      @ObjectModel.foreignKey.association: '_CAOpenItemList'
  key guid                                                              as CAOpenItemListUUID,
      /* business partner item identification */
      @ObjectModel.foreignKey.association: '_DocHeader'
  key opbel                                                             as CADocumentNumber,
  key opupw                                                             as CARepetitionItemNumber,
  key opupk                                                             as CABPItemNumber,
  key opupz                                                             as CASubItemNumber,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                                             as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                             as BusinessArea,
      bupla                                                             as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                           as Segment,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                             as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                             as Division,
      pernr                                                             as PersonnelNumber,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      vbund                                                             as PartnerCompany,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart                                                             as BusinessPartner,
      vtref                                                             as CAContract,
      vtpos                                                             as CAProviderContractItemNumber,
      vtre2                                                             as CAAdditionalContract,
      @ObjectModel.foreignKey.association: '_CAHeader'
      vkont                                                             as ContractAccount,
      subap                                                             as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAHeaderCollvBills'
      abwkt                                                             as AltvContractAcctForCollvBills,
      @ObjectModel.foreignKey.association: '_ReconAccount'
      hkont                                                             as CAReconciliationAccount,

      /* posting attributes */
      applk                                                             as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_MainTransaction'
      hvorg                                                             as CAMainTransaction,
      @ObjectModel.foreignKey.association: '_SubTransaction'
      tvorg                                                             as CASubTransaction,
      kofiz                                                             as CAAccountDeterminationCode,
      infoz                                                             as CADoubtfulOrValueAdjmtCode,
      @ObjectModel.foreignKey.association: '_AcctAssgmtCat'
      kontt                                                             as CAAccountAssignmentCategory,
      kontl                                                             as CAAccountAssignment,
      @ObjectModel.foreignKey.association: '_DocType'
      blart                                                             as CADocumentType,
      xanza                                                             as CAIsDownPaymentRequest,
      verkz                                                             as CAItemIsOnlyForSettlement,
      stakz                                                             as CAStatisticalItemCode,
      optxt                                                             as CABPItemText,
      whang                                                             as CANumberOfRepetitionItems,
      whgrp                                                             as CARepetitionGroup,
      abrzu                                                             as CAStartDateOfBillingPeriod,
      abrzo                                                             as CAEndDateOfBillingPeriod,
      grkey                                                             as CAGroupingCodeForBPItems,
      @ObjectModel.foreignKey.association: '_PeriodCode'
      persl                                                             as CAPeriodCode,
      xaesp                                                             as CAChangeIsForbidden,
      @ObjectModel.foreignKey.association: '_InterestCode'
      ikey                                                              as CAInterestCode,
      rndps                                                             as CARoundingItemCode,
      @ObjectModel.foreignKey.association: '_ReceivingCountry'
      landl                                                             as CAReceivingCountry,
      intbu                                                             as CAInternalPostingReasonCode,
      @ObjectModel.foreignKey.association: '_WorkflowCheckReason'
      c4eye                                                             as CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_WorkflowCheckProcess'
      c4eyp                                                             as CAWorkflowCheckProcess,
      negbu                                                             as CANegativePostingControlCode,
      ptitm                                                             as CAPartnerSettlementStatus,
      palix                                                             as CAIsPartOfJointLiability,

      /* document references */
      @ObjectModel.foreignKey.association: '_SubstitDocHeader'
      abwbl                                                             as CASubstituteDocumentNumber,
      abwtp                                                             as CASubstituteDocumentCategory,
      astkz                                                             as CAStatisticalCodeOfOriginItem,
      @ObjectModel.foreignKey.association: '_OriginDocHeader'
      asblg                                                             as CADocumentNumberOfOriginItem,
      xblnr                                                             as CAReferenceDocument,

      /* dates and amounts */
      bldat                                                             as DocumentDate,
      budat                                                             as CAPostingDate,
      faedn                                                             as CANetDueDate,
      studt                                                             as CADeferralDate,
      @ObjectModel.foreignKey.association: '_Currency'
      waers                                                             as TransactionCurrency,
      _CompCode.Currency                                                as CompanyCodeCurrency,

      cast( abs( kursf ) as fis_absolute_exchangerate preserving type ) as CAExchangeRate,
      cast( case when kursf < 0 then 'X'
                 else ' '
            end as fis_indirect_quotation preserving type )             as ExchRateIsIndirectQuotation,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betrh                                                             as CAAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                             as CAAmountInTransactionCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betr2                                                             as CAAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betr3                                                             as CAAmountInThirdCurrency,

      /* cash discount */
      faeds                                                             as CACashDiscountDueDate,
      sktpz                                                             as CACashDiscountRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      skfbt                                                             as CAEligibleAmountForCshDiscount,

      /* tax data */
      mwskz                                                             as TaxCode,
      mwszkz                                                            as CASupplementaryTaxCode,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sbeth                                                             as CATaxAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbetw                                                             as CATaxAmountInTransCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sbet2                                                             as CATaxAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sbet3                                                             as CATaxAmountInThirdCurrency,
      @ObjectModel.foreignKey.association: '_TaxAccount'
      mwsko                                                             as CADownPaymentTaxAccount,
      @ObjectModel.foreignKey.association: '_OffsetTaxAccount'
      mwvko                                                             as CADownPaymentOffsetTaxAccount,
      txjcd                                                             as TaxJurisdiction,
      txdat                                                             as CATaxDate,
      @ObjectModel.foreignKey.association: '_WithholdingTaxCode'
      qsskz                                                             as WithholdingTaxCode,
      @ObjectModel.foreignKey.association: '_WhldgTaxSuplmnt'
      qssew                                                             as CAWithholdingTaxSupplement,
      qsptp                                                             as CAWithholdingTaxCategory,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      qsshb                                                             as CABaseAmountForWithholdingTax,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      qbshb                                                             as CAWithholdingTaxAmount,
      qsprz                                                             as CAWithholdingTaxPercentage,
      qsznr                                                             as WithholdingTaxCertificate,
      @ObjectModel.foreignKey.association: '_OtherTaxCode'
      strkz                                                             as CAOtherTaxCode,
      txgrp                                                             as CAGroupingCodeForTaxItems,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sctax                                                             as CATaxPortionInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                             as CATaxPortionInTransCurrency,
      xustpd                                                            as CATaxIsCalculatedExternally,

      /* payment data */
      @ObjectModel.foreignKey.association: '_PaytMethod'
      pymet                                                             as CAPaymentMethod,
      @ObjectModel.foreignKey.association: '_CompCodePayt'
      pybuk                                                             as CAPaymentCompanyCode,
      pygrp                                                             as CAGroupingForPayment,
      pdtyp                                                             as CAPaymentSpecificationCategory,


      /* clearing data */
      augst                                                             as CAClearingStatus,
      augdt                                                             as CAClearingDate,
      @ObjectModel.foreignKey.association: '_ClearingDocHeader'
      augbl                                                             as CAClearingDocumentNumber,
      augbd                                                             as CAPostingDateOfClearingDoc,
      @ObjectModel.foreignKey.association: '_ClearingReason'
      augrd                                                             as CAClearingReason,
      @ObjectModel.foreignKey.association: '_ClearingCurrency'
      augwa                                                             as CAClearingCurrency,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augbt                                                             as CAClearingAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augbs                                                             as CATaxAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augsk                                                             as CACashDiscAmountInClearingCrcy,
      augvd                                                             as CAValueDateForClearing,
      @ObjectModel.foreignKey.association: '_ClrgRstrcnCode'
      augrs                                                             as CAClearingRestrictionCode,
      xragl                                                             as CAClearingPostingIsReset,
      augob                                                             as CAItemIsWithdrawn,

      /* dunning and collections */
      xmanl                                                             as CAItemIsExcludedFromDunning,
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      mahnv                                                             as CADunningProcedure,
      inkps                                                             as CAGrpgCodeForTransfToCollAgcy,
      xcolc                                                             as CAIsIncludedInCollectionCase,

      /* cash management data */
      //      @ObjectModel.foreignKey.association: '_CashPlanningGrp'
      fdgrp                                                             as CashPlanningGroup,
      //      @ObjectModel.foreignKey.association: '_PlanningLevel'
      fdlev                                                             as PlanningLevel,
      fdztg                                                             as CAAdditionalDaysForCashMgmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(cast(fdwbt as abap.curr( 23, 2 )) as fis_fdwbt)              as PlannedAmtInTransactionCrcy,

      /* alternative business partner for payment */
      @ObjectModel.foreignKey.association: '_AltvBPForPayment'
      emgpa                                                             as CAAltvBPForPayment,
      embvt                                                             as CABankOfAltvBPForPayment,
      //      @ObjectModel.foreignKey.association: '_AddressOfAltvBP'
      emadr                                                             as CAAddressOfAltvBPForPayment,
      emcrd                                                             as CACardOfAltvBPForPayment,

      /* GL data */
      @ObjectModel.foreignKey.association: '_GLPostingCurrency'
      pswsl                                                             as CAGLPostingCurrency,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      pswbt                                                             as CAGLPostingAmount,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      pswtx                                                             as CAGLPostingTaxAmount,
      xeiph                                                             as CAIsSeparateLineItemInGL,

      /* cash flow data */
      xcsha                                                             as CAIsCashFlowItem,
      @ObjectModel.foreignKey.association: '_CashFlowAccount'
      reacc                                                             as CACashFlowAccount,
      @ObjectModel.foreignKey.association: '_CompCodeCashFlow'
      rebuk                                                             as CACashFlowCompanyCode,

      /* pre notification data */
      xpyor                                                             as CAPaymentPreNotificationCode,
      pnnum                                                             as CASEPAPreNotificationNumber,
      pnhkf                                                             as CASEPAPreNotifOriginCode,
      pnexd                                                             as CASEPAPreNotifExecutionDate,
      pnctr                                                             as CASEPAPreNotificationRqmtCode,

      /* revenue distribution data */
      @ObjectModel.foreignKey.association: '_CAHeaderFinalRec'
      finre                                                             as CARevenueDistrFinalRecipient,
      rdsta                                                             as CARevenueDistrCurrentStatus,
      rdstb                                                             as CARevenueDistrLastStatus,

      /* Factoring */
      fasta                                                             as CACurrentFactoringStatusOfRbl,
      pasta                                                             as CAFactoringCheckStsForClrgInfo,

      emmnd                                                             as SEPAMandateCAInternalID,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompCode.ControllingArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      _CompCode.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_Country'
      _CompCode._Country.Country,
      _CompCode._Country.TaxCalculationProcedure,

      _CompCode,
      _CompCodePayt,
      _CADocument,
      _CASubstituteDocument,
      _CAClearingDocument,
      _CAOriginDocument,
      _BusinessArea,
      _Segment,
      _ProfitCenter,
      _ReconAccount,
      _TaxAccount,
      _OffsetTaxAccount,
      _Division,
      _BusinessPartner,
      _AltvBPForPayment,
      _CAPartner,
      _CAHeader,
      _CAHeaderCollvBills,
      _CAHeaderFinalRec,
      _ProviderContract,
      _DocType,
      _MainTransaction,
      _SubTransaction,
      _CompCodeCashFlow,
      _CashFlowAccount,
      _Currency,
      _ClearingCurrency,
      _GLPostingCurrency,
      _PaytMethod,
      _InterestCode,
      _DunningProcedure,
      _PartnerCompany,
      _Country,
      _ReceivingCountry,
      _WithholdingTaxCode,
      _WorkflowCheckReason,
      _WorkflowCheckProcess,
      _PeriodCode,
      _ClearingReason,
      _AcctAssgmtCat,
      _WhldgTaxSuplmnt,
      _OtherTaxCode,
      _ControllingArea,
      _ChartOfAccounts,
      _ClrgRstrcnCode,
      _CAOpenItemList,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _DocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CASubstituteDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CASubstituteDocument'
      _SubstitDocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAClearingDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAClearingDocument'
      _ClearingDocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAOriginDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAOriginDocument'
      _OriginDocHeader
}
```
