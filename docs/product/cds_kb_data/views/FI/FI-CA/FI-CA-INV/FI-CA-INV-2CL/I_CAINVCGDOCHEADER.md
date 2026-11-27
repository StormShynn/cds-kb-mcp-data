---
name: I_CAINVCGDOCHEADER
description: "Cainvcgdocheader"
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
  - header-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCHEADER

**Cainvcgdocheader**

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
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CAInvcgProcess` |  | |  | `inv_process` | `CHAR(2)` | Invoicing Process |
| `CAInvcgType` |  | |  | `inv_type` | `CHAR(2)` | Invoicing Type |
| `CAInvcgCategory` |  | |  | `inv_category` | `CHAR(4)` | Invoicing Category |
| `CAInvcgTechnicalDocumentType` |  | |  | `cast(techdoctype as techdoctype_gfn_kk preserving type)` | `CHAR(1)` | Type of Technical Billing/Invoicing Document |
| `CAInvcgTargetProcess` |  | |  | `targprocess` | `CHAR(4)` | Target Process That Invoices the Source Document |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type)` | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CAInvcgMasterDataType` |  | |  | `mdcat` | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `AltvContractAcctForCollvBills` |  | |  | `abwvk` | `CHAR(12)` | Alternative Contract Account for Collective Bills |
| `CASubstituteDocumentNumber` |  | |  | `cast(abwbl as abwbl_gfn_kk preserving type )` | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CreatedByUser` |  | |  | `crname` | `CHAR(12)` | Created By |
| `CAInvcgCreationDate` |  | |  | `crdate` | `DATS(8)` | Creation Date of Invoicing Document |
| `CAInvcgCreationTime` |  | |  | `crtime` | `TIMS(6)` | Time of Creation of Invoicing Document |
| `CAInvcgDocCreationMode` |  | |  | `crmode` | `CHAR(1)` | Creation Mode of Invoicing Document |
| `CAInvcgNmbrOfInvoicingDocItems` |  | |  | `recnum` | `INT4(10)` | Total Number of Items of an Invoicing Document |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type)` | `INT4(10)` | Number of Billable Items |
| `CAInvcgDocInternalNumber` |  | |  | `invrunno` | `CHAR(12)` | Internal Number of Invoicing Run |
| `CAReconciliationKey` |  | |  | `fikey` | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date in Document |
| `CANetDueDate` |  | |  | `faedn` | `DATS(8)` | Due date for net payment |
| `CACashDiscountDueDate` |  | |  | `faeds` | `DATS(8)` | Due Date for Cash Discount |
| `CACashDiscountRate` |  | |  | `sktpz` | `DEC(5)` | Cash Discount Percentage Rate |
| `TransactionCurrency` |  | |  | `total_curr` | `CUKY(5)` | Transaction Currency |
| `CAAmountInTransactionCurrency` |  | |  | `total_amt` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAInvcgIsDocumentPosted` |  | |  | `invoiced` | `CHAR(1)` | Invoicing Document Posted |
| `CAInvcgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Invoicing Document Is Simulated |
| `CAInvcgIsDocumentPreliminary` |  | |  | `cast(preliminary as inv_preliminary_gfn_kk preserving type)` | `CHAR(1)` | Preliminary Invoice |
| `CAInvcgPreliminaryCategory` |  | |  | `cast(prlinv_cat as prlinv_cat_gfn_kk preserving type)` | `CHAR(4)` | Preliminary Invoice Category |
| `CAPrelimInvcgDocValue` |  | |  | `prlinv_cnt` | `NUMC(2)` | Counter for Consecutive Preliminary Invoices |
| `CAPreliminaryInvcgDocStatus` |  | |  | `cast(prlinv_status as prlinv_status_gfn_kk preserving type)` | `CHAR(1)` | Status of Preliminary Invoice |
| `CAInvcgDocumentReversalReason` |  | |  | `revreason` | `CHAR(2)` | Reversal Reason of Invoicing Document |
| `CAInvcgReversalDocument` |  | |  | `cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type)` | `CHAR(12)` | Number of Reversal Invoicing Document |
| `CAInvcgReversedDocument` |  | |  | `cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type)` | `CHAR(12)` | Number of Reversed Invoicing Document |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type)` | `CHAR(2)` | Category of Invoice Correction |
| `CAInvcgDocumentPrintDate` |  | |  | `printdate` | `DATS(8)` | Print Date of Invoicing Document |
| `CAInvcgDocIsLockedForPrinting` |  | |  | `printlock` | `CHAR(1)` | Invoicing Document Locked for Printing |
| `CAPaymentMethod` |  | |  | `pymet` | `CHAR(1)` | Payment Method |
| `CAPaymentFormNumber` |  | |  | `nrzas` | `CHAR(12)` | Payment Form Number |
| `CAInvcgDocFormID` |  | |  | `form_id` | `CHAR(4)` | Form ID for Invoice Printing |
| `ApplicationForm` |  | |  | `formkey` | `CHAR(30)` | Form Name |
| `FormIDForAttachedPaymentMedium` |  | |  | `zlsch` | `CHAR(1)` | Form ID for Attached Payment Medium |
| `CAInvcgDocumentType` |  | |  | `doctype` | `CHAR(2)` | Document Type |
| `CAKeyIdentification` |  | |  | `exkid` | `CHAR(2)` | Key Identification |
| `CAOfficialDocumentNumber` |  | |  | `cast(exbel as exbel_no_conv_kk)` | `CHAR(16)` | Official Document Number |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` | `CHAR(4)` | Partner Settlement Rule |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CAInvcgBaseDate` |  | |  | `invoice_basedate` | `DATS(8)` | Baseline Date for Period Assignment in Invoicing |
| `CAInvcgDocPeriodCategory` |  | |  | `invpercat` | `CHAR(2)` | Category of Invoicing Period |
| `CAInvcgDocPeriodDate` |  | |  | `invperiod` | `DATS(8)` | Invoicing Period |
| `CAInvcgDocPeriodStartDate` |  | |  | `invperiod_from` | `DATS(8)` | Start of Invoicing Period |
| `CADunningCounter` |  | |  | `mazae` | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CAInvcgDocHasChargeOrDiscItems` |  | |  | `cast(chgdoc_ex as chgdoc_ex_gfn_kk preserving type)` | `CHAR(1)` | Invoicing Document Contains Charge/Discount Items |
| `CAInvcgDocHasControlDoc` |  | |  | `cast(cfcsimulated as inv_cfcsimulated_gfn_kk preserving type)` | `CHAR(1)` | Clarification Case Control Document |
| `CAInvcgBolloTaxPostStatus` |  | |  | `bollotax` | `CHAR(1)` | Stamp Tax Posted |
| `CAInvcgDocIsPartOfList` |  | |  | `xsubinv` | `CHAR(1)` | Invoicing Document Is Single Document of Invoicing List |
| `CAInvcgDocHasObjectRelation` |  | |  | `xinvdoc_x` | `CHAR(1)` | Invoicing Document Contains Object Relationships |
| `CAInvcgDocHasSEPAPreNotif` |  | |  | `sepa_prenot` | `CHAR(1)` | Invoicing Document Contains SEPA Pre-Notification |
| `CAInvcgDocExternal` |  | |  | `cast(ext_invdocno as ext_invdocno_gfn_kk preserving type)` | `CHAR(22)` | External Invoicing Document |
| `CAInvcgAdjustmentDocument` |  | |  | `adjustmentdoc` | `CHAR(12)` | Number of Adjustment Invoicing Document |
| `CAInvcgAdjustedDocument` |  | |  | `cast(adjusteddoc as adjustedinvdoc_gfn_kk preserving type)` | `CHAR(12)` | Number of Adjusted Invoicing Document |
| `NameNumberRangeObject` |  | |  | `cast('FKKINV' as nrobj)` | `CHAR(10)` | Number Range Object |
| `CAClassificationKey` |  | |  | `opord` | `CHAR(35)` | Classification Key |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_AltvContractAcctForCollvBills` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgReversalDocument` | | ✓ | | | | |
| `_CAInvcgReversedDocument` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CAInvcgPreliminaryCategory` | | ✓ | | | | |
| `_CAPreliminaryInvcgDocStatus` | | ✓ | | | | |
| `_CAInvcgDocReversalReason` | | ✓ | | | | |
| `_CAInvcgDocLockedforPrint` | | ✓ | | | | |
| `_CAInvcgProcess` | | ✓ | | | | |
| `_CAInvcgCategory` | | ✓ | | | | |
| `_CAInvcgType` | | ✓ | | | | |
| `_CAInvcgDocumentType` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAInvcgPeriodCat` | | ✓ | | | | |
| `_CAInvcgTargetProc` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CAInvcgDocChrgDiscItems` | | ✓ | | | | |
| `_CAInvcgDocCreationMode` | | ✓ | | | | |
| `_CAInvcgMasterDataType` | | ✓ | | | | |
| `_CAInvcgDocTechDocType` | | ✓ | | | | |
| `_CAInvcgDocPartOfList` | | ✓ | | | | |
| `_CAInvcgBolloTaxPostStatus` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CAReconciliationKey` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_AltvContractAcctForCollvBills` | `I_ContractAccountHeader` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgReversalDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_CAInvcgReversedDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CAInvcgPreliminaryCategory` | `I_CAInvcgPreliminaryCategory` | [0..1] |
| `_CAPreliminaryInvcgDocStatus` | `I_CAPreliminaryInvcgDocStatus` | [0..1] |
| `_CAInvcgDocReversalReason` | `I_CAInvcgDocReversalReason` | [0..1] |
| `_CAInvcgDocLockedforPrint` | `I_CAInvcgDocLockedforPrint` | [0..1] |
| `_CAInvcgProcess` | `I_CAInvcgProcess` | [0..1] |
| `_CAInvcgCategory` | `I_CAInvcgCategory` | [0..1] |
| `_CAInvcgType` | `I_CAInvcgType` | [0..1] |
| `_CAInvcgDocumentType` | `I_CAInvcgDocumentType` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAInvcgPeriodCat` | `I_CAInvcgPeriodCat` | [0..1] |
| `_CAInvcgTargetProc` | `I_CAInvcgTargetProc` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CAInvcgDocChrgDiscItems` | `I_CAInvcgDocChrgDiscItems` | [0..1] |
| `_CAInvcgDocCreationMode` | `I_CAInvcgDocCreationMode` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [0..1] |
| `_CAInvcgDocPartOfList` | `I_CAInvcgDocPartOfList` | [0..1] |
| `_CAInvcgBolloTaxPostStatus` | `I_CAInvcgBolloTaxPostStatus` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CAReconciliationKey` | `I_CAReconciliationKey` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_Extension` | `E_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvdoc_h',
          role: #MAIN,
          viewElement: ['CAInvoicingDocument'],
          tableElement: ['invdocno']
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
  representativeKey: 'CAInvoicingDocument',
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fakturierungsbelegkopf'
define view entity I_CAInvcgDocHeader
  as select from dfkkinvdoc_h

  association [0..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader       as _ContractAccountHeader         on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_ContractAccountPartner      as _ContractAccountPartner        on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                        and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _AltvContractAcctForCollvBills on  $projection.AltvContractAcctForCollvBills = _AltvContractAcctForCollvBills.ContractAccount

  association [1..1] to I_CAInvcgDocHeader            as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgDocHeader            as _CAInvcgReversalDocument       on  $projection.CAInvcgReversalDocument = _CAInvcgReversalDocument.CAInvoicingDocument
  association [0..1] to I_CAInvcgDocHeader            as _CAInvcgReversedDocument       on  $projection.CAInvcgReversedDocument = _CAInvcgReversedDocument.CAInvoicingDocument

  association [0..1] to I_Currency                    as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_CAInvcgPreliminaryCategory  as _CAInvcgPreliminaryCategory    on  $projection.CAInvcgPreliminaryCategory = _CAInvcgPreliminaryCategory.CAInvcgPreliminaryCategory
  association [0..1] to I_CAPreliminaryInvcgDocStatus as _CAPreliminaryInvcgDocStatus   on  $projection.CAPreliminaryInvcgDocStatus = _CAPreliminaryInvcgDocStatus.CAPreliminaryInvcgDocStatus

  association [0..1] to I_CAInvcgDocReversalReason    as _CAInvcgDocReversalReason      on  $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReason.CAInvcgDocumentReversalReason
  association [0..1] to I_CAInvcgDocLockedforPrint    as _CAInvcgDocLockedforPrint      on  $projection.CAInvcgDocIsLockedForPrinting = _CAInvcgDocLockedforPrint.CAInvcgDocIsLockedForPrinting
  association [0..1] to I_CAInvcgProcess              as _CAInvcgProcess                on  $projection.CAInvcgProcess    = _CAInvcgProcess.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgProcess.CAApplicationArea
  association [0..1] to I_CAInvcgCategory             as _CAInvcgCategory               on  $projection.CAInvcgCategory = _CAInvcgCategory.CAInvcgCategory
  association [0..1] to I_CAInvcgType                 as _CAInvcgType                   on  $projection.CAInvcgType       = _CAInvcgType.CAInvcgType
                                                                                        and $projection.CAApplicationArea = _CAInvcgType.CAApplicationArea
  association [0..1] to I_CAInvcgDocumentType         as _CAInvcgDocumentType           on  $projection.CAInvcgDocumentType            = _CAInvcgDocumentType.CAInvcgDocumentType
                                                                                        and $projection.CAApplicationArea              = _CAInvcgDocumentType.CAApplicationArea
                                                                                        and _CAInvcgDocumentType.NameNumberRangeObject = 'FKKINVDOC'
  association [0..1] to I_CASubApplication            as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CAInvcgPeriodCat            as _CAInvcgPeriodCat              on  $projection.CAInvcgDocPeriodCategory = _CAInvcgPeriodCat.CAInvcgPeriodCategory
  association [0..1] to I_CAInvcgTargetProc           as _CAInvcgTargetProc             on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProc.CAInvcgTargetProcess
  association [0..1] to I_CAApplicationArea           as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAInvcgCorrectionCat        as _CAInvcgCorrectionCat          on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CAInvcgDocChrgDiscItems     as _CAInvcgDocChrgDiscItems       on  $projection.CAInvcgDocHasChargeOrDiscItems = _CAInvcgDocChrgDiscItems.CAInvcgDocHasChargeOrDiscItems
  association [0..1] to I_CAInvcgDocCreationMode      as _CAInvcgDocCreationMode        on  $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationMode.CAInvcgDocCreationMode
  association [0..1] to I_CAInvcgMasterDataType       as _CAInvcgMasterDataType         on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_CAInvcgDocTechDocType       as _CAInvcgDocTechDocType         on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_CAInvcgDocPartOfList        as _CAInvcgDocPartOfList          on  $projection.CAInvcgDocIsPartOfList = _CAInvcgDocPartOfList.CAInvcgDocIsPartOfList
  association [0..1] to I_CAInvcgBolloTaxPostStatus   as _CAInvcgBolloTaxPostStatus     on  $projection.CAInvcgBolloTaxPostStatus = _CAInvcgBolloTaxPostStatus.CAInvcgBolloTaxPostStatus
  association [0..1] to I_CompanyCode                 as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CAReconciliationKey         as _CAReconciliationKey           on  $projection.CAReconciliationKey = _CAReconciliationKey.CAReconciliationKey
  association [0..1] to I_CAProviderContractHeader    as _ProviderContract              on  $projection.CASubApplication = 'P'
                                                                                        and $projection.CAContract       = _ProviderContract.CAProviderContract

  // extension
  association [0..1] to E_CAInvcgDocHeader            as _Extension                     on  $projection.CAInvoicingDocument = _Extension.CAInvoicingDocument

{
  key invdocno                                                      as CAInvoicingDocument,

      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                         as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAInvcgProcess'
      inv_process                                                   as CAInvcgProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgType'
      inv_type                                                      as CAInvcgType,
      @ObjectModel.foreignKey.association: '_CAInvcgCategory'
      inv_category                                                  as CAInvcgCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
      cast(techdoctype as techdoctype_gfn_kk preserving type)       as CAInvcgTechnicalDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgTargetProc'
      targprocess                                                   as CAInvcgTargetProcess,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type)                     as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                                         as ContractAccount,
      @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
      mdcat                                                         as CAInvcgMasterDataType,
      @ObjectModel.foreignKey.association: '_AltvContractAcctForCollvBills'
      abwvk                                                         as AltvContractAcctForCollvBills,
      cast(abwbl as abwbl_gfn_kk preserving type )                  as CASubstituteDocumentNumber,
      @Semantics.user.createdBy: true
      crname                                                        as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      crdate                                                        as CAInvcgCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                                        as CAInvcgCreationTime,
      @ObjectModel.foreignKey.association: '_CAInvcgDocCreationMode'
      crmode                                                        as CAInvcgDocCreationMode,
      recnum                                                        as CAInvcgNmbrOfInvoicingDocItems,
      cast(bit_number as bit_number_gfn_kk preserving type)         as CABllbleItmNumber,
      invrunno                                                      as CAInvcgDocInternalNumber,
      @ObjectModel.foreignKey.association: '_CAReconciliationKey'
      fikey                                                         as CAReconciliationKey,
      budat                                                         as CAPostingDate,
      bldat                                                         as DocumentDate,
      faedn                                                         as CANetDueDate,
      faeds                                                         as CACashDiscountDueDate,
      sktpz                                                         as CACashDiscountRate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      total_curr                                                    as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      total_amt                                                     as CAAmountInTransactionCurrency,
      invoiced                                                      as CAInvcgIsDocumentPosted,
      simulated                                                     as CAInvcgIsDocumentSimulated,
      cast(preliminary as inv_preliminary_gfn_kk preserving type)   as CAInvcgIsDocumentPreliminary,
      @ObjectModel.foreignKey.association: '_CAInvcgPreliminaryCategory'
      cast(prlinv_cat as prlinv_cat_gfn_kk preserving type)         as CAInvcgPreliminaryCategory,
      prlinv_cnt                                                    as CAPrelimInvcgDocValue,
      @ObjectModel.foreignKey.association: '_CAPreliminaryInvcgDocStatus'
      cast(prlinv_status as prlinv_status_gfn_kk preserving type)   as CAPreliminaryInvcgDocStatus,
      @ObjectModel.foreignKey.association: '_CAInvcgDocReversalReason'
      revreason                                                     as CAInvcgDocumentReversalReason,
      @ObjectModel.foreignKey.association: '_CAInvcgReversalDocument'
      cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type)   as CAInvcgReversalDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgReversedDocument'
      cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type)   as CAInvcgReversedDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type)               as CAInvcgCorrectionCategory,
      printdate                                                     as CAInvcgDocumentPrintDate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocLockedforPrint'
      printlock                                                     as CAInvcgDocIsLockedForPrinting,
      -- fkey in upper view (due to complexity)
      pymet                                                         as CAPaymentMethod,
      nrzas                                                         as CAPaymentFormNumber,
      form_id                                                       as CAInvcgDocFormID,
      formkey                                                       as ApplicationForm,
      @EndUserText.label: 'Formular ID für Zahlungsträger'
      zlsch                                                         as FormIDForAttachedPaymentMedium,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentType'
      doctype                                                       as CAInvcgDocumentType,
      exkid                                                         as CAKeyIdentification,
      cast(exbel as exbel_no_conv_kk)                               as CAOfficialDocumentNumber,
      ptsrl                                                         as CAPartnerSettlementRule,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                         as CompanyCode,
      bupla                                                         as BusinessPlace,
      vtref                                                         as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                         as CASubApplication,
      invoice_basedate                                              as CAInvcgBaseDate,
      @ObjectModel.foreignKey.association: '_CAInvcgPeriodCat'
      invpercat                                                     as CAInvcgDocPeriodCategory,
      invperiod                                                     as CAInvcgDocPeriodDate,
      invperiod_from                                                as CAInvcgDocPeriodStartDate,
      mazae                                                         as CADunningCounter,
      cast(chgdoc_ex as chgdoc_ex_gfn_kk preserving type)           as CAInvcgDocHasChargeOrDiscItems,
      cast(cfcsimulated as inv_cfcsimulated_gfn_kk preserving type) as CAInvcgDocHasControlDoc,
      @ObjectModel.foreignKey.association: '_CAInvcgBolloTaxPostStatus'
      bollotax                                                      as CAInvcgBolloTaxPostStatus,
      @EndUserText.label: 'Subfakturierngsbeleg'
      xsubinv                                                       as CAInvcgDocIsPartOfList,
      @EndUserText.label: 'Objektrelationen vorhanden'
      xinvdoc_x                                                     as CAInvcgDocHasObjectRelation,
      sepa_prenot                                                   as CAInvcgDocHasSEPAPreNotif,
      cast(ext_invdocno as ext_invdocno_gfn_kk preserving type)     as CAInvcgDocExternal,
      adjustmentdoc                                                 as CAInvcgAdjustmentDocument,
      cast(adjusteddoc as adjustedinvdoc_gfn_kk preserving type)    as CAInvcgAdjustedDocument,

      cast('FKKINV' as nrobj)                                       as NameNumberRangeObject,

      // from X_S4C_I_CAInvcgDocItem
      dfkkinvdoc_h.opord                                            as CAClassificationKey,

      // Make association public
      _BusinessPartner,
      _ContractAccountHeader,
      _ContractAccountPartner,
      _AltvContractAcctForCollvBills,
      _CAReconciliationKey,
      _TransactionCurrency,
      _CAInvcgPreliminaryCategory,
      _CAPreliminaryInvcgDocStatus,
      _CAInvcgProcess,
      _CAInvcgType,
      _CAInvcgCategory,
      _CAInvcgDocTechDocType,
      _CAInvcgTargetProc,
      _CAInvcgMasterDataType,
      _CAInvcgDocCreationMode,
      _CAInvcgDocReversalReason,
      _CAInvcgReversalDocument,
      _CAInvcgReversedDocument,
      _CAInvcgCorrectionCat,
      _CAInvcgDocumentType,
      _CAInvcgDocLockedforPrint,
      _CAInvcgPeriodCat,
      _CAInvcgDocChrgDiscItems,
      _CAInvcgBolloTaxPostStatus,
      _CAInvcgDocPartOfList,
      _CompanyCode,
      _CASubApplication,
      _ProviderContract,
      _CAInvcgDocHeader,
      _CAApplicationArea
}
```
