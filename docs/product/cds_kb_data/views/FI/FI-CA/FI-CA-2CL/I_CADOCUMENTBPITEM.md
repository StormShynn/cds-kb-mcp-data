---
name: I_CADOCUMENTBPITEM
description: "Cadocumentbpitem"
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
# I_CADOCUMENTBPITEM

**Cadocumentbpitem**

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
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CreationDate` |  | |  | `cpudt_op` | `DATS(8)` | Document Item Creation Date |
| `CreationTime` |  | |  | `cputm_op` | `TIMS(6)` | Time of Document Item Creation |
| `LastChangeDate` |  | |  | `chdate` | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  | `chtime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
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
| `CADocumentOriginCode` |  | |  | `herkf_kk` | `CHAR(2)` | Document Origin Key |
| `CAGroupingKeyDocumentItems` |  | |  | `psgrp` | `CHAR(4)` | Grouping Key for Document Items |
| `CASubstituteDocumentNumber` |  | |  | `abwbl` | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CASubstituteDocumentCategory` |  | |  | `abwtp` | `CHAR(1)` | Category of substitute document in FI-CA |
| `CAStatisticalCodeOfOriginItem` |  | |  | `astkz` | `CHAR(1)` | Statistical Key of the Triggering Item |
| `CADocumentNumberOfOriginItem` |  | |  | `asblg` | `CHAR(12)` | Number of Triggering Document |
| `CAReferenceDocument` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `CAClassificationKey` |  | |  | `opord` | `CHAR(35)` | Classification Key |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CADeferralDate` |  | |  | `studt` | `DATS(8)` | Deferral To |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `CAExchangeRate` |  | |  | `cast( abs(kursf) as fis_absolute_exchangerate preserving type )` | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  | `cast( case when kursf < 0 then 'X' when kursf >= 0 then ' ' end as fis_indirect_quotation preserving type )` | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `CAAmountInLocalCurrency` |  | |  | `betrh` | `CURR(13)` | Amount In Local Currency With +/- Signs |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAAmountInSecondCurrency` |  | |  | `betr2` | `CURR(13)` | Amount in second parallel currency with +/- sign |
| `CAAmountInThirdCurrency` |  | |  | `betr3` | `CURR(13)` | Amount in third parallel currency with +/- sign |
| `CADocBPItemTotalAmountInTC` |  | |  | `oriop` | `CURR(13)` | Total Amount of Business Partner Item |
| `CADocBPItemOriglOpenAmountInTC` |  | |  | `augia` | `CURR(13)` | Business Partner Item Amount in Partial Clearing |
| `CAClearingDeductionAmountInTC` |  | |  | `augda` | `CURR(13)` | Assigned Payment Difference for Clearing |
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
| `CATaxAmountIsSetFromExternal` |  | |  | `inttx` | `CHAR(1)` | Internal Tax Characteristic for Tax Handling |
| `TaxCountry` |  | |  | `tax_country` | `CHAR(3)` | Tax Reporting Country/Region |
| `TransToTaxCntryCrcyCnvrsnFctr` |  | |  | `taxc_factor` | `DEC(31)` | Factor for Conversion into Tax Country/Region Currency |
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
| `PlannedAmtInTransactionCrcy` |  | |  | `cast( fdwbt as fis_fdwbt )` | `CURR(23)` | Planned Amount in Transaction Currency |
| `CAAltvBPForPayment` |  | |  | `emgpa` | `CHAR(10)` | Alternative Business Partner for Payments |
| `CABankOfAltvBPForPayment` |  | |  | `embvt` | `CHAR(4)` | Bank Details ID of Payee |
| `CAAddressOfAltvBPForPayment` |  | |  | `emadr` | `CHAR(10)` | Address Number |
| `CACardOfAltvBPForPayment` |  | |  | `emcrd` | `CHAR(6)` | Alternative Payment Card ID in Document |
| `SEPAMandateCAInternalID` |  | |  | `emmnd` | `NUMC(6)` | Mandate Identifier |
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
| `CAFactoringItem` |  | |  | `opupf` | `NUMC(3)` | Subitems in Factoring |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` |  | | `_CompanyCode` | `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Country` |  | | `_CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_PaytAltvBusinessPartner` | | ✓ | | | | |
| `_CAAccountAssignmentCategory` | | ✓ | | | | |
| `_CAAccountDeterminationCode` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAClearingReason` | | ✓ | | | | |
| `_CAClearingRestrictionCode` | | ✓ | | | | |
| `_CAClearingStatus` | | ✓ | | | | |
| `_CADbtflOrValueAdjmtCode` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CASubstituteDocument` | | ✓ | | | | |
| `_CAClearingDocument` | | ✓ | | | | |
| `_CAOriginDocument` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADunningProcedure` | | ✓ | | | | |
| `_CAFactoringClrgCheckStatus` | | ✓ | | | | |
| `_CAFactoringReceivableStatus` | | ✓ | | | | |
| `_CAInterestCode` | | ✓ | | | | |
| `_CAInternalPostingReasonCode` | | ✓ | | | | |
| `_CAMainTransaction` | | ✓ | | | | |
| `_CANegativePostingControlCode` | | ✓ | | | | |
| `_CAOriglStatisticalItemCode` | | ✓ | | | | |
| `_CAOtherTaxCode` | | ✓ | | | | |
| `_CAPartnerSettlementStatus` | | ✓ | | | | |
| `_CAPaymentMethod` | | ✓ | | | | |
| `_CAPaytPreNotificationCode` | | ✓ | | | | |
| `_CAPaytSpecificationCategory` | | ✓ | | | | |
| `_CAPeriodCode` | | ✓ | | | | |
| `_CAProviderContract` | | ✓ | | | | |
| `_CARevenueDistrCurrentStatus` | | ✓ | | | | |
| `_CARevenueDistrLastStatus` | | ✓ | | | | |
| `_CARoundingItemCode` | | ✓ | | | | |
| `_CASEPAPreNotifOriginCode` | | ✓ | | | | |
| `_CASEPAPreNotificationRqmtCode` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CASubTransaction` | | ✓ | | | | |
| `_CASubstituteDocumentCategory` | | ✓ | | | | |
| `_CAWithholdingTaxCategory` | | ✓ | | | | |
| `_CAWithholdingTaxSupplement` | | ✓ | | | | |
| `_CAWorkflowCheckProcess` | | ✓ | | | | |
| `_CAWorkflowCheckReason` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PaymentCompanyCode` | | ✓ | | | | |
| `_CashFlowCompanyCode` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_CollvBillsAltvContractAccount` | | ✓ | | | | |
| `_RevnDistrFnlRcpntContrAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_ReceivingCountry` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ClearingCurrency` | | ✓ | | | | |
| `_GLPostingCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_DownPaymentTaxAccount` | | ✓ | | | | |
| `_DownPaymentOffsetTaxAccount` | | ✓ | | | | |
| `_CashFlowAccount` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PlanningLevel` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_WithholdingTaxCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_PaytAltvBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CAAccountAssignmentCategory` | `I_CAAccountAssignmentCategory` | [0..1] |
| `_CAAccountDeterminationCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAClearingReason` | `I_CAClearingReason` | [0..1] |
| `_CAClearingRestrictionCode` | `I_CAClearingRestrictionCode` | [0..1] |
| `_CAClearingStatus` | `I_CAClearingStatus` | [0..1] |
| `_CADbtflOrValueAdjmtCode` | `I_CADbtflOrValueAdjmtCode` | [0..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CASubstituteDocument` | `I_CADocument` | [0..1] |
| `_CAClearingDocument` | `I_CADocument` | [0..1] |
| `_CAOriginDocument` | `I_CADocument` | [0..1] |
| `_CADocumentType` | `I_CADocumentType` | [0..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [0..1] |
| `_CADunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_CAFactoringClrgCheckStatus` | `I_CAFactoringClrgCheckStatus` | [0..1] |
| `_CAFactoringReceivableStatus` | `I_CAFactoringReceivableStatus` | [0..1] |
| `_CAInterestCode` | `I_CAInterestCode` | [0..1] |
| `_CAInternalPostingReasonCode` | `I_CAIntPostingReasonCode` | [0..1] |
| `_CAMainTransaction` | `I_CAMainTransaction` | [1..1] |
| `_CANegativePostingControlCode` | `I_CANegativePostingCtrlCode` | [0..1] |
| `_CAOriglStatisticalItemCode` | `I_CAOriglStstclItemCode` | [1..1] |
| `_CAOtherTaxCode` | `I_CAOtherTaxCode` | [0..1] |
| `_CAPartnerSettlementStatus` | `I_CAPartnerSettlementStatus` | [0..1] |
| `_CAPaymentMethod` | `I_CAPaymentMethod` | [0..1] |
| `_CAPaytPreNotificationCode` | `I_CAPaytPreNotificationCode` | [0..1] |
| `_CAPaytSpecificationCategory` | `I_CAPaytSpecificationCat` | [0..1] |
| `_CAPeriodCode` | `I_CAPeriodCode` | [0..1] |
| `_CAProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CARevenueDistrCurrentStatus` | `I_CARevenueDistrStatus` | [0..1] |
| `_CARevenueDistrLastStatus` | `I_CARevenueDistrStatus` | [0..1] |
| `_CARoundingItemCode` | `I_CARoundingItemCode` | [0..1] |
| `_CASEPAPreNotifOriginCode` | `I_CASEPAPreNotifOriginCode` | [0..1] |
| `_CASEPAPreNotificationRqmtCode` | `I_CASEPAPreNotifRqmtCode` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CASubTransaction` | `I_CASubTransaction` | [1..1] |
| `_CASubstituteDocumentCategory` | `I_CASubstituteDocCategory` | [0..1] |
| `_CAWithholdingTaxCategory` | `I_CAWithholdingTaxCat` | [0..1] |
| `_CAWithholdingTaxSupplement` | `I_CAWithholdingTaxSupplement` | [0..1] |
| `_CAWorkflowCheckProcess` | `I_CAWorkflowCheckProcess` | [0..1] |
| `_CAWorkflowCheckReason` | `I_CAWorkflowCheckReason` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PaymentCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashFlowCompanyCode` | `I_CompanyCode` | [0..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_CollvBillsAltvContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_RevnDistrFnlRcpntContrAccount` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_ReceivingCountry` | `I_Country` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_ClearingCurrency` | `I_Currency` | [0..1] |
| `_GLPostingCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ReconciliationAccount` | `I_GLAccount` | [1..1] |
| `_DownPaymentTaxAccount` | `I_GLAccount` | [0..1] |
| `_DownPaymentOffsetTaxAccount` | `I_GLAccount` | [0..1] |
| `_CashFlowAccount` | `I_GLAccount` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_PlanningLevel` | `I_PlanningLevel` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_WithholdingTaxCode` | `I_WithholdingTaxCode` | [0..1] |
| `_Extension` | `E_CADocumentBPItemPhysical` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Document Business Partner Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgDocumentBusPartItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XXL } }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CADocumentBPItem
  as select from dfkkop

  association [0..1] to I_BusinessArea                as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _PaytAltvBusinessPartner       on  $projection.CAAltvBPForPayment = _PaytAltvBusinessPartner.BusinessPartner
  association [0..1] to I_CAAccountAssignmentCategory as _CAAccountAssignmentCategory   on  $projection.CAAccountAssignmentCategory = _CAAccountAssignmentCategory.CAAccountAssignmentCategory
  association [0..1] to I_CAAccountDetnCode           as _CAAccountDeterminationCode    on  $projection.CAAccountDeterminationCode = _CAAccountDeterminationCode.CAAccountDeterminationCode
  association [1..1] to I_CAApplicationArea           as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAClearingReason            as _CAClearingReason              on  $projection.CAClearingReason = _CAClearingReason.CAClearingReason
  association [0..1] to I_CAClearingRestrictionCode   as _CAClearingRestrictionCode     on  $projection.CAClearingRestrictionCode = _CAClearingRestrictionCode.CAClearingRestrictionCode
  association [0..1] to I_CAClearingStatus            as _CAClearingStatus              on  $projection.CAClearingStatus = _CAClearingStatus.CAClearingStatus
  association [0..1] to I_CADbtflOrValueAdjmtCode     as _CADbtflOrValueAdjmtCode       on  $projection.CADoubtfulOrValueAdjmtCode = _CADbtflOrValueAdjmtCode.CADoubtfulOrValueAdjmtCode
  association [1..1] to I_CADocument                  as _CADocument                    on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CASubstituteDocument          on  $projection.CASubstituteDocumentNumber = _CASubstituteDocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CAClearingDocument            on  $projection.CAClearingDocumentNumber = _CAClearingDocument.CADocumentNumber
  association [0..1] to I_CADocument                  as _CAOriginDocument              on  $projection.CADocumentNumberOfOriginItem = _CAOriginDocument.CADocumentNumber
  association [0..1] to I_CADocumentType              as _CADocumentType                on  $projection.CADocumentType    = _CADocumentType.CADocumentType
                                                                                        and $projection.CAApplicationArea = _CADocumentType.CAApplicationArea
  association [0..1] to I_CADocumentOriginCode        as _CADocumentOriginCode          on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode                                                                                      
  association [0..1] to I_CADunningProcedure          as _CADunningProcedure            on  $projection.CADunningProcedure = _CADunningProcedure.CADunningProcedure
  association [0..1] to I_CAFactoringClrgCheckStatus  as _CAFactoringClrgCheckStatus    on  $projection.CAFactoringCheckStsForClrgInfo = _CAFactoringClrgCheckStatus.CAFactoringCheckStsForClrgInfo
  association [0..1] to I_CAFactoringReceivableStatus as _CAFactoringReceivableStatus   on  $projection.CACurrentFactoringStatusOfRbl = _CAFactoringReceivableStatus.CACurrentFactoringStatusOfRbl
  association [0..1] to I_CAInterestCode              as _CAInterestCode                on  $projection.CAInterestCode = _CAInterestCode.CAInterestCode
  association [0..1] to I_CAIntPostingReasonCode      as _CAInternalPostingReasonCode   on  $projection.CAInternalPostingReasonCode = _CAInternalPostingReasonCode.CAInternalPostingReasonCode
  association [1..1] to I_CAMainTransaction           as _CAMainTransaction             on  $projection.CAApplicationArea = _CAMainTransaction.CAApplicationArea
                                                                                        and $projection.CAMainTransaction = _CAMainTransaction.CAMainTransaction
  association [0..1] to I_CANegativePostingCtrlCode   as _CANegativePostingControlCode  on  $projection.CANegativePostingControlCode = _CANegativePostingControlCode.CANegativePostingControlCode
  association [1..1] to I_CAOriglStstclItemCode       as _CAOriglStatisticalItemCode    on  $projection.CAStatisticalCodeOfOriginItem = _CAOriglStatisticalItemCode.CAStatisticalCodeOfOriginItem
  association [0..1] to I_CAOtherTaxCode              as _CAOtherTaxCode                on  $projection.CAOtherTaxCode = _CAOtherTaxCode.CAOtherTaxCode
                                                                                        and $projection.Country        = _CAOtherTaxCode.Country
  association [0..1] to I_CAPartnerSettlementStatus   as _CAPartnerSettlementStatus     on  $projection.CAPartnerSettlementStatus = _CAPartnerSettlementStatus.CAPartnerSettlementStatus
  association [0..1] to I_CAPaymentMethod             as _CAPaymentMethod               on  $projection.Country         = _CAPaymentMethod.Country
                                                                                        and $projection.CAPaymentMethod = _CAPaymentMethod.CAPaymentMethod
  association [0..1] to I_CAPaytPreNotificationCode   as _CAPaytPreNotificationCode     on  $projection.CAPaymentPreNotificationCode = _CAPaytPreNotificationCode.CAPaymentPreNotificationCode
  association [0..1] to I_CAPaytSpecificationCat      as _CAPaytSpecificationCategory   on  $projection.CAPaymentSpecificationCategory = _CAPaytSpecificationCategory.CAPaymentSpecificationCategory
  association [0..1] to I_CAPeriodCode                as _CAPeriodCode                  on  $projection.CAPeriodCode = _CAPeriodCode.CAPeriodCode
  association [0..1] to I_CAProviderContractHeader    as _CAProviderContract            on  $projection.CASubApplication = 'P'
                                                                                        and $projection.CAContract       = _CAProviderContract.CAProviderContract
  association [0..1] to I_CARevenueDistrStatus        as _CARevenueDistrCurrentStatus   on  $projection.CARevenueDistrCurrentStatus = _CARevenueDistrCurrentStatus.CARevenueDistributionStatus
  association [0..1] to I_CARevenueDistrStatus        as _CARevenueDistrLastStatus      on  $projection.CARevenueDistrLastStatus = _CARevenueDistrLastStatus.CARevenueDistributionStatus
  association [0..1] to I_CARoundingItemCode          as _CARoundingItemCode            on  $projection.CARoundingItemCode = _CARoundingItemCode.CARoundingItemCode
  association [0..1] to I_CASEPAPreNotifOriginCode    as _CASEPAPreNotifOriginCode      on  $projection.CASEPAPreNotifOriginCode = _CASEPAPreNotifOriginCode.CASEPAPreNotifOriginCode
  association [0..1] to I_CASEPAPreNotifRqmtCode      as _CASEPAPreNotificationRqmtCode on  $projection.CASEPAPreNotificationRqmtCode = _CASEPAPreNotificationRqmtCode.CASEPAPreNotificationRqmtCode
  association [0..1] to I_CAStatisticalItemCode       as _CAStatisticalItemCode         on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CASubApplication            as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [1..1] to I_CASubTransaction            as _CASubTransaction              on  $projection.CAApplicationArea = _CASubTransaction.CAApplicationArea
                                                                                        and $projection.CAMainTransaction = _CASubTransaction.CAMainTransaction
                                                                                        and $projection.CASubTransaction  = _CASubTransaction.CASubTransaction
  association [0..1] to I_CASubstituteDocCategory     as _CASubstituteDocumentCategory  on  $projection.CASubstituteDocumentCategory = _CASubstituteDocumentCategory.CASubstituteDocumentCategory
  association [0..1] to I_CAWithholdingTaxCat         as _CAWithholdingTaxCategory      on  $projection.CAWithholdingTaxCategory = _CAWithholdingTaxCategory.CAWithholdingTaxCategory
  association [0..1] to I_CAWithholdingTaxSupplement  as _CAWithholdingTaxSupplement    on  $projection.CAWithholdingTaxSupplement = _CAWithholdingTaxSupplement.CAWithholdingTaxSupplement
                                                                                        and $projection.Country                    = _CAWithholdingTaxSupplement.Country
  association [0..1] to I_CAWorkflowCheckProcess      as _CAWorkflowCheckProcess        on  $projection.CAWorkflowCheckProcess = _CAWorkflowCheckProcess.CAWorkflowCheckProcess
  association [0..1] to I_CAWorkflowCheckReason       as _CAWorkflowCheckReason         on  $projection.CAWorkflowCheckReason = _CAWorkflowCheckReason.CAWorkflowCheckReason
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [1..1] to I_CompanyCode                 as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _PaymentCompanyCode            on  $projection.CAPaymentCompanyCode = _PaymentCompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                 as _CashFlowCompanyCode           on  $projection.CACashFlowCompanyCode = _CashFlowCompanyCode.CompanyCode
  association [1..1] to I_ContractAccountHeader       as _ContractAccount               on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _CollvBillsAltvContractAccount on  $projection.AltvContractAcctForCollvBills = _CollvBillsAltvContractAccount.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _RevnDistrFnlRcpntContrAccount on  $projection.CARevenueDistrFinalRecipient = _RevnDistrFnlRcpntContrAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner      as _ContractAccountPartner        on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                        and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  association [0..1] to I_ControllingArea             as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Country                     as _Country                       on  $projection.Country = _Country.Country
  association [0..1] to I_Country                     as _ReceivingCountry              on  $projection.CAReceivingCountry = _ReceivingCountry.Country
  association [0..1] to I_Country                     as _TaxCountry                    on  $projection.TaxCountry = _TaxCountry.Country
  association [1..1] to I_Currency                    as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                    as _ClearingCurrency              on  $projection.CAClearingCurrency = _ClearingCurrency.Currency
  association [0..1] to I_Currency                    as _GLPostingCurrency             on  $projection.CAGLPostingCurrency = _GLPostingCurrency.Currency
  association [0..1] to I_Currency                    as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Division                    as _Division                      on  $projection.Division = _Division.Division
  association [1..1] to I_GLAccount                   as _ReconciliationAccount         on  $projection.CAReconciliationAccount = _ReconciliationAccount.GLAccount
                                                                                        and $projection.CompanyCode = _ReconciliationAccount.CompanyCode
  association [0..1] to I_GLAccount                   as _DownPaymentTaxAccount         on  $projection.CADownPaymentTaxAccount = _DownPaymentTaxAccount.GLAccount
                                                                                        and $projection.CompanyCode = _DownPaymentTaxAccount.CompanyCode
  association [0..1] to I_GLAccount                   as _DownPaymentOffsetTaxAccount   on  $projection.CADownPaymentOffsetTaxAccount = _DownPaymentOffsetTaxAccount.GLAccount
                                                                                        and $projection.CompanyCode = _DownPaymentOffsetTaxAccount.CompanyCode
  association [0..1] to I_GLAccount                   as _CashFlowAccount               on  $projection.CACashFlowAccount = _CashFlowAccount.GLAccount
                                                                                        and $projection.CompanyCode = _CashFlowAccount.CompanyCode
  association [0..1] to I_Partnercompany              as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany
  association [0..1] to I_PlanningLevel               as _PlanningLevel                 on  $projection.PlanningLevel = _PlanningLevel.PlanningLevel
  association [0..*] to I_ProfitCenter                as _ProfitCenter                  on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                        and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..1] to I_Segment                     as _Segment                       on  $projection.Segment = _Segment.Segment
  association [0..1] to I_WithholdingTaxCode          as _WithholdingTaxCode            on  $projection.Country            = _WithholdingTaxCode.Country
                                                                                        and $projection.WithholdingTaxCode = _WithholdingTaxCode.WithholdingTaxCode

  association [1..1] to E_CADocumentBPItemPhysical    as _Extension                     on  $projection.CADocumentNumber       = _Extension.CADocumentNumber
                                                                                        and $projection.CARepetitionItemNumber = _Extension.CARepetitionItemNumber
                                                                                        and $projection.CABPItemNumber         = _Extension.CABPItemNumber
                                                                                        and $projection.CASubItemNumber        = _Extension.CASubItemNumber


{
      @ObjectModel.foreignKey.association: '_CADocument'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key opbel                                                           as CADocumentNumber,
  key opupw                                                           as CARepetitionItemNumber,
  key opupk                                                           as CABPItemNumber,
  key opupz                                                           as CASubItemNumber,

      cpudt_op                                                        as CreationDate,
      cputm_op                                                        as CreationTime,
      chdate                                                          as LastChangeDate,
      chtime                                                          as LastChangeTime,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                           as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                           as BusinessArea,
      bupla                                                           as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                         as Segment,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                           as ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                           as Division,
      pernr                                                           as PersonnelNumber,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      vbund                                                           as PartnerCompany,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart                                                           as BusinessPartner,
      vtref                                                           as CAContract,
      vtpos                                                           as CAProviderContractItemNumber,
      vtre2                                                           as CAAdditionalContract,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      vkont                                                           as ContractAccount,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                           as CASubApplication,
      @ObjectModel.foreignKey.association: '_CollvBillsAltvContractAccount'
      abwkt                                                           as AltvContractAcctForCollvBills,
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      hkont                                                           as CAReconciliationAccount,

      /* posting attributes */
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                           as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAMainTransaction'
      hvorg                                                           as CAMainTransaction,
      @ObjectModel.foreignKey.association: '_CASubTransaction'
      tvorg                                                           as CASubTransaction,
      @ObjectModel.foreignKey.association: '_CAAccountDeterminationCode'
      kofiz                                                           as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_CADbtflOrValueAdjmtCode'
      infoz                                                           as CADoubtfulOrValueAdjmtCode,
      @ObjectModel.foreignKey.association: '_CAAccountAssignmentCategory'
      kontt                                                           as CAAccountAssignmentCategory,
      kontl                                                           as CAAccountAssignment,
      @ObjectModel.foreignKey.association: '_CADocumentType'
      blart                                                           as CADocumentType,
      xanza                                                           as CAIsDownPaymentRequest,
      @Semantics.booleanIndicator: true
      verkz                                                           as CAItemIsOnlyForSettlement,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                                           as CAStatisticalItemCode,
      optxt                                                           as CABPItemText,
      whang                                                           as CANumberOfRepetitionItems,
      whgrp                                                           as CARepetitionGroup,
      abrzu                                                           as CAStartDateOfBillingPeriod,
      abrzo                                                           as CAEndDateOfBillingPeriod,
      grkey                                                           as CAGroupingCodeForBPItems,
      @ObjectModel.foreignKey.association: '_CAPeriodCode'
      persl                                                           as CAPeriodCode,
      xaesp                                                           as CAChangeIsForbidden,
      @ObjectModel.foreignKey.association: '_CAInterestCode'
      ikey                                                            as CAInterestCode,
      @ObjectModel.foreignKey.association: '_CARoundingItemCode'
      rndps                                                           as CARoundingItemCode,
      @ObjectModel.foreignKey.association: '_ReceivingCountry'
      landl                                                           as CAReceivingCountry,
      @ObjectModel.foreignKey.association: '_CAInternalPostingReasonCode'
      intbu                                                           as CAInternalPostingReasonCode,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckReason'
      c4eye                                                           as CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckProcess'
      c4eyp                                                           as CAWorkflowCheckProcess,
      @ObjectModel.foreignKey.association: '_CANegativePostingControlCode'
      negbu                                                           as CANegativePostingControlCode,
      @ObjectModel.foreignKey.association: '_CAPartnerSettlementStatus'
      ptitm                                                           as CAPartnerSettlementStatus,
      @Semantics.booleanIndicator: true
      palix                                                           as CAIsPartOfJointLiability,
      herkf_kk                                                        as CADocumentOriginCode,
      psgrp                                                           as CAGroupingKeyDocumentItems,

      /* document references */
      @ObjectModel.foreignKey.association: '_CASubstituteDocument'
      abwbl                                                           as CASubstituteDocumentNumber,
      @ObjectModel.foreignKey.association: '_CASubstituteDocumentCategory'
      abwtp                                                           as CASubstituteDocumentCategory,
      @ObjectModel.foreignKey.association: '_CAOriglStatisticalItemCode'
      astkz                                                           as CAStatisticalCodeOfOriginItem,
      @ObjectModel.foreignKey.association: '_CAOriginDocument'
      asblg                                                           as CADocumentNumberOfOriginItem,
      xblnr                                                           as CAReferenceDocument,
      opord                                                           as CAClassificationKey,

      /* dates and amounts */
      bldat                                                           as DocumentDate,
      budat                                                           as CAPostingDate,
      faedn                                                           as CANetDueDate,
      studt                                                           as CADeferralDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                                           as TransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      _CompanyCode.Currency                                           as CompanyCodeCurrency,

      //kursf                                                                                                                                                                                                                                                                                                           as  CAExchangeRate,  ////replace due to conversion exit EXCRT
      cast( abs(kursf) as fis_absolute_exchangerate preserving type ) as CAExchangeRate,
      cast( case when kursf < 0  then 'X'
                 when kursf >= 0 then ' '
            end as fis_indirect_quotation preserving type )           as ExchRateIsIndirectQuotation,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betrh                                                           as CAAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                           as CAAmountInTransactionCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // AdditionaCurrency1 would be right, but too many dependant tables
      betr2                                                           as CAAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // AdditionaCurrency2 would be right, but too many dependant tables
      betr3                                                           as CAAmountInThirdCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      oriop                                                           as CADocBPItemTotalAmountInTC,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      augia                                                           as CADocBPItemOriglOpenAmountInTC,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      augda                                                           as CAClearingDeductionAmountInTC,

      /* cash discount */
      faeds                                                           as CACashDiscountDueDate,
      sktpz                                                           as CACashDiscountRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      skfbt                                                           as CAEligibleAmountForCshDiscount,

      /* tax data */
      mwskz                                                           as TaxCode,
      mwszkz                                                          as CASupplementaryTaxCode,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sbeth                                                           as CATaxAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbetw                                                           as CATaxAmountInTransCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // AdditionaCurrency1 would be right, but too many dependant tables
      sbet2                                                           as CATaxAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency' // AdditionaCurrency2 would be right, but too many dependant tables
      sbet3                                                           as CATaxAmountInThirdCurrency,
      @ObjectModel.foreignKey.association: '_DownPaymentTaxAccount'
      mwsko                                                           as CADownPaymentTaxAccount,
      @ObjectModel.foreignKey.association: '_DownPaymentOffsetTaxAccount'
      mwvko                                                           as CADownPaymentOffsetTaxAccount,
      txjcd                                                           as TaxJurisdiction,
      txdat                                                           as CATaxDate,
      @ObjectModel.foreignKey.association: '_WithholdingTaxCode'
      qsskz                                                           as WithholdingTaxCode,
      @ObjectModel.foreignKey.association: '_CAWithholdingTaxSupplement'
      qssew                                                           as CAWithholdingTaxSupplement,
      @ObjectModel.foreignKey.association: '_CAWithholdingTaxCategory'
      qsptp                                                           as CAWithholdingTaxCategory,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      qsshb                                                           as CABaseAmountForWithholdingTax,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      qbshb                                                           as CAWithholdingTaxAmount,
      qsprz                                                           as CAWithholdingTaxPercentage,
      qsznr                                                           as WithholdingTaxCertificate,
      @ObjectModel.foreignKey.association: '_CAOtherTaxCode'
      strkz                                                           as CAOtherTaxCode,
      txgrp                                                           as CAGroupingCodeForTaxItems,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sctax                                                           as CATaxPortionInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                           as CATaxPortionInTransCurrency,
      xustpd                                                          as CATaxIsCalculatedExternally,
      inttx                                                           as CATaxAmountIsSetFromExternal,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      tax_country                                                     as TaxCountry,
      taxc_factor                                                     as TransToTaxCntryCrcyCnvrsnFctr,

      /* payment data */
      @ObjectModel.foreignKey.association: '_CAPaymentMethod'
      pymet                                                           as CAPaymentMethod,
      @ObjectModel.foreignKey.association: '_PaymentCompanyCode'
      pybuk                                                           as CAPaymentCompanyCode,
      pygrp                                                           as CAGroupingForPayment,
      @ObjectModel.foreignKey.association: '_CAPaytSpecificationCategory'
      pdtyp                                                           as CAPaymentSpecificationCategory,

      /* clearing data */
      @ObjectModel.foreignKey.association: '_CAClearingStatus'
      augst                                                           as CAClearingStatus,
      augdt                                                           as CAClearingDate,
      @ObjectModel.foreignKey.association: '_CAClearingDocument'
      augbl                                                           as CAClearingDocumentNumber,
      augbd                                                           as CAPostingDateOfClearingDoc,
      @ObjectModel.foreignKey.association: '_CAClearingReason'
      augrd                                                           as CAClearingReason,
      @ObjectModel.foreignKey.association: '_ClearingCurrency'
      augwa                                                           as CAClearingCurrency,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augbt                                                           as CAClearingAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augbs                                                           as CATaxAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      augsk                                                           as CACashDiscAmountInClearingCrcy,
      augvd                                                           as CAValueDateForClearing,
      @ObjectModel.foreignKey.association: '_CAClearingRestrictionCode'
      augrs                                                           as CAClearingRestrictionCode,
      xragl                                                           as CAClearingPostingIsReset,
      augob                                                           as CAItemIsWithdrawn,

      /* dunning and collections */
      xmanl                                                           as CAItemIsExcludedFromDunning,
      @ObjectModel.foreignKey.association: '_CADunningProcedure'
      mahnv                                                           as CADunningProcedure,
      inkps                                                           as CAGrpgCodeForTransfToCollAgcy,
      xcolc                                                           as CAIsIncludedInCollectionCase,

      /* cash management data */
      fdgrp                                                           as CashPlanningGroup,
      @ObjectModel.foreignKey.association: '_PlanningLevel'
      fdlev                                                           as PlanningLevel,
      fdztg                                                           as CAAdditionalDaysForCashMgmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( fdwbt as fis_fdwbt )                                      as PlannedAmtInTransactionCrcy,

      /* alternative business partner for payment */
      @ObjectModel.foreignKey.association: '_PaytAltvBusinessPartner'
      emgpa                                                           as CAAltvBPForPayment,
      embvt                                                           as CABankOfAltvBPForPayment,
      emadr                                                           as CAAddressOfAltvBPForPayment,
      emcrd                                                           as CACardOfAltvBPForPayment,
      emmnd                                                           as SEPAMandateCAInternalID,

      /* GL data */
      @ObjectModel.foreignKey.association: '_GLPostingCurrency'
      pswsl                                                           as CAGLPostingCurrency,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      pswbt                                                           as CAGLPostingAmount,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      pswtx                                                           as CAGLPostingTaxAmount,
      xeiph                                                           as CAIsSeparateLineItemInGL,

      /* cash flow data */
      xcsha                                                           as CAIsCashFlowItem,
      @ObjectModel.foreignKey.association: '_CashFlowAccount'
      reacc                                                           as CACashFlowAccount,
      @ObjectModel.foreignKey.association: '_CashFlowCompanyCode'
      rebuk                                                           as CACashFlowCompanyCode,

      /* pre notification data */
      @ObjectModel.foreignKey.association: '_CAPaytPreNotificationCode'
      xpyor                                                           as CAPaymentPreNotificationCode,
      pnnum                                                           as CASEPAPreNotificationNumber,
      @ObjectModel.foreignKey.association: '_CASEPAPreNotifOriginCode'
      pnhkf                                                           as CASEPAPreNotifOriginCode,
      pnexd                                                           as CASEPAPreNotifExecutionDate,
      @ObjectModel.foreignKey.association: '_CASEPAPreNotificationRqmtCode'
      pnctr                                                           as CASEPAPreNotificationRqmtCode,

      /* revenue distribution data */
      @ObjectModel.foreignKey.association: '_RevnDistrFnlRcpntContrAccount'
      finre                                                           as CARevenueDistrFinalRecipient,
      @ObjectModel.foreignKey.association: '_CARevenueDistrCurrentStatus'
      rdsta                                                           as CARevenueDistrCurrentStatus,
      @ObjectModel.foreignKey.association: '_CARevenueDistrLastStatus'
      rdstb                                                           as CARevenueDistrLastStatus,

      /* Factoring */
      @ObjectModel.foreignKey.association: '_CAFactoringReceivableStatus'
      fasta                                                           as CACurrentFactoringStatusOfRbl,
      @ObjectModel.foreignKey.association: '_CAFactoringClrgCheckStatus'
      pasta                                                           as CAFactoringCheckStsForClrgInfo,
      opupf                                                           as CAFactoringItem,

      /* Additional data */
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompanyCode.ControllingArea                                    as ControllingArea,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      _CompanyCode.ChartOfAccounts                                    as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_Country'
      _CompanyCode.Country                                            as Country,


      /* Associations */
      _BusinessArea,
      _BusinessPartner,
      _CAAccountAssignmentCategory,
      _CAAccountDeterminationCode,
      _CAApplicationArea,
      _CAClearingDocument,
      _CAClearingReason,
      _CAClearingRestrictionCode,
      _CAClearingStatus,
      _CADbtflOrValueAdjmtCode,
      _CADocument,
      _CADocumentType,
      _CADunningProcedure,
      _CAFactoringClrgCheckStatus,
      _CAFactoringReceivableStatus,
      _CAInterestCode,
      _CAInternalPostingReasonCode,
      _CAMainTransaction,
      _CANegativePostingControlCode,
      _CAOriginDocument,
      _CAOriglStatisticalItemCode,
      _CAOtherTaxCode,
      _CAPartnerSettlementStatus,
      _CAPaymentMethod,
      _CAPaytPreNotificationCode,
      _CAPaytSpecificationCategory,
      _CAPeriodCode,
      _CAProviderContract,
      _CARevenueDistrCurrentStatus,
      _CARevenueDistrLastStatus,
      _CARoundingItemCode,
      _CASEPAPreNotificationRqmtCode,
      _CASEPAPreNotifOriginCode,
      _CashFlowAccount,
      _CashFlowCompanyCode,
      _CAStatisticalItemCode,
      _CASubApplication,
      _CASubstituteDocumentCategory,
      _CASubstituteDocument,
      _CASubTransaction,
      _CAWithholdingTaxCategory,
      _CAWithholdingTaxSupplement,
      _CAWorkflowCheckProcess,
      _CAWorkflowCheckReason,
      _ClearingCurrency,
      _CollvBillsAltvContractAccount,
      _CompanyCode,
      _CompanyCodeCurrency,
      _ContractAccount,
      _ContractAccountPartner,
      _ControllingArea,
      _ChartOfAccounts,
      _Country,
      _Division,
      _DownPaymentOffsetTaxAccount,
      _DownPaymentTaxAccount,
      _GLPostingCurrency,
      _PartnerCompany,
      _PaytAltvBusinessPartner,
      _PlanningLevel,
      _PaymentCompanyCode,
      _ProfitCenter,
      _ReceivingCountry,
      _ReconciliationAccount,
      _RevnDistrFnlRcpntContrAccount,
      _Segment,
      _TaxCountry,
      _TransactionCurrency,
      _WithholdingTaxCode,
      _CADocumentOriginCode
}
```
