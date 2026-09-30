---
name: I_CABILLGDOCHEADER
description: "Cabillgdocheader"
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
# I_CABILLGDOCHEADER

**Cabillgdocheader**

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
| `BusinessPartner` |  | |  | `gpart` | `CHAR(10)` | Business Partner Number for Billing and Invoicing |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number for Billing and Invoicing |
| `CABillgType` |  | |  | `bill_type` | `CHAR(4)` | Billing Type |
| `CABillgDocPeriodStartDate` |  | |  | `cast(date_from as bill_period_from_gfn_kk preserving type )` | `DATS(8)` | Start of Document Period |
| `CABillgDocPeriodEndDate` |  | |  | `cast(date_to as bill_period_to_gfn_kk preserving type )` | `DATS(8)` | End of Document Period |
| `CABillgDocumentReversalReason` |  | |  | `revreason` | `CHAR(2)` | Reversal Reason for Billing Document |
| `CABillgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Billing Document Is Simulated |
| `CABillgDocumentExternal` |  | |  | `cast(refdocno as refdocno_gfn_kk preserving type )` | `CHAR(22)` | Document Number in External System |
| `LogicalSystem` |  | |  | `log_system` | `CHAR(10)` | Logical System |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CABillgDocOriginProcess` |  | |  | `srcprocess` | `NUMC(4)` | Origin Process of Billing Document |
| `CAInvcgSourceDocumentType` |  | |  | `srcdoctype` | `CHAR(3)` | Source Document Type of Billing Document |
| `CAInvcgTechnicalDocumentType` |  | |  | `cast(techdoctype as techdoctype_gfn_kk preserving type )` | `CHAR(1)` | Type of Technical Billing/Invoicing Document |
| `CAInvcgDocumentType` |  | |  | `doctype` | `CHAR(2)` | Document Type |
| `CAInvcgTargetProcess` |  | |  | `targprocess` | `CHAR(4)` | Target Process That Invoices the Source Document |
| `CAInvcgMasterDataType` |  | |  | `mdcat` | `CHAR(1)` | Type of Master Record for Convergent Invoicing |
| `CAInvcgAltvBusinessPartner` |  | |  | `cast(gpart_inv as gpart_inv_gfn_kk preserving type )` | `CHAR(10)` | Altv Business Partner for Invoicing |
| `CAInvcgAltvContractAccount` |  | |  | `cast(vkont_inv as vkont_inv_gfn_kk preserving type )` | `CHAR(12)` | Altv Contract Account for Invoicing |
| `CABillgBaseDate` |  | |  | `bill_basedate` | `DATS(8)` | Baseline Date for Period Assignment in Billing |
| `CABillgCurrency` |  | |  | `bill_curr` | `CUKY(5)` | Currency of Billing Document |
| `CAInvcgCurrency` |  | |  | `cast(inv_curr as inv_curr_gfn_kk preserving type )` | `CUKY(5)` | Invoicing Target Currency |
| `CATaxDetnType` |  | |  | `tax_det_type` | `CHAR(2)` | Type of Tax Calculation |
| `CATaxDateType` |  | |  | `tax_date_type` | `CHAR(2)` | Type of Tax Date |
| `CAInvcgCategory` |  | |  | `inv_category` | `CHAR(4)` | Invoicing Category |
| `CAInvcgControlOfInvoicingUnit` |  | |  | `cast(separate_inv as separate_inv_bitpack_gfn_kk preserving type )` | `CHAR(1)` | Invoicing Unit Control |
| `CAInvcgFirstDate` |  | |  | `invoice_first` | `DATS(8)` | Target Date for Invoicing |
| `CABillgReversalDocument` |  | |  | `cast(reversaldoc as reversalbilldoc_gfn_kk preserving type )` | `CHAR(12)` | Reversal Document for Billing Document |
| `CABillgReversedDocument` |  | |  | `cast(reverseddoc as reversedbilldoc_gfn_kk preserving type )` | `CHAR(12)` | Number of Reversed Billing Document |
| `CABillgAdjustmentDocument` |  | |  | `cast(adjustmentdoc as adjustmentbilldoc_gfn_kk preserving type )` | `CHAR(12)` | Adjustment Billing Document |
| `CABillgAdjustedDocument` |  | |  | `adjusteddoc` | `CHAR(12)` | Number of Adjusted Billing Document |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type )` | `CHAR(2)` | Category of Invoice Correction |
| `CaInvcgIsOrderDeleted` |  | |  | `cast(trigdeleted as trigdeleted_gfn_kk preserving type )` | `CHAR(1)` | Invoicing Request Deleted |
| `CABillgHasAdditionalInvoice` |  | |  | `xinfbill` | `CHAR(1)` | Additional Statement in Another Invoice for Information Only |
| `CAInvcgIsAccrualPostingRlvt` |  | |  | `cast(xbillac as xbillac_gfn_kk preserving type )` | `CHAR(1)` | Relevant for Accrual/Deferral Posting |
| `CABillgLockedForInvoicing` |  | |  | `invlock` | `CHAR(1)` | Billing Document Is Locked for Invoicing |
| `CABillgGrpgOfAdditionalItems` |  | |  | `cast(add_group as add_group_gfn_kk preserving type )` | `CHAR(8)` | Grouping of Additional Items |
| `CABillgDocHasRefObjects` |  | |  | `cast(xinvbill_x as xinvbill_x_gfn_kk preserving type )` | `CHAR(1)` | Object References Exist |
| `CABillgDocumentNumberOfItems` |  | |  | `recnum` | `INT4(10)` | Total Number of Items of a Billing Document |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type )` | `INT4(10)` | Number of Billable Items |
| `CreatedByUser` |  | |  | `crname` | `CHAR(12)` | Created By |
| `CABillgDocCreationDate` |  | |  | `crdate` | `DATS(8)` | Date on Which Billing Document Was Created |
| `CABillgDocCreationTime` |  | |  | `crtime` | `TIMS(6)` | Time at Which Billing Document Was Created |
| `CABillgDocInternalNumber` |  | |  | `cast(billrunno as billrunno_gfn_kk preserving type )` | `CHAR(12)` | Internal Number of Billing Run |
| `CABillgProcess` |  | |  | `bill_process` | `CHAR(4)` | Billing Process |
| `CABillgDocHasPrepaidItems` |  | |  | `prepaid_incl` | `CHAR(1)` | Document Contains Prepaid Items |
| `CABillgDocHasRefillItems` |  | |  | `pprefill_incl` | `CHAR(1)` | Document Contains Items for Prepaid Refill |
| `CABillgDocHasRevnRecgnItems` |  | |  | `revrec_incl` | `CHAR(1)` | Document Contains Posting Data from Revenue Deferral |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` | `CHAR(4)` | Partner Settlement Rule |
| `CABillgDocumentInvcgStatus` |  | |  | `invstatus` | `CHAR(1)` | Invoicing Status of Billing Document |
| `CAInvoicingDocument` |  | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CAInvcgCreationDate` |  | |  | `invcrdate` | `DATS(8)` | Creation Date of Invoicing Document |
| `CASubAreaForParallelization` | ✓ | |  | `keypp` | `NUMC(3)` | Subarea for Parallelization in Mass Processing |
| `CAAltvMDOriginalIsIncluded` |  | |  | `altmd_orig_incl` | `CHAR(1)` | Document Contains Alternative Original Master Data |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_CAInvcgAltvBusinessPartner` | | ✓ | | | | |
| `_CAInvcgAltvContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CABillgCurrency` | | ✓ | | | | |
| `_CAInvcgCurrency` | | ✓ | | | | |
| `_CABillgReversalDocument` | | ✓ | | | | |
| `_CABillgReversedDocument` | | ✓ | | | | |
| `_CABillgAdjustmentDocument` | | ✓ | | | | |
| `_CABillgAdjustedDocument` | | ✓ | | | | |
| `_CABillgDocOriginProcess` | | ✓ | | | | |
| `_CAInvcgTargetProc` | | ✓ | | | | |
| `_CAInvcgCategory` | | ✓ | | | | |
| `_CABillgProcess` | | ✓ | | | | |
| `_CABillgType` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgSourceDocType` | | ✓ | | | | |
| `_CAInvcgDocumentType` | | ✓ | | | | |
| `_CAInvcgDocTechDocType` | | ✓ | | | | |
| `_CABillgDocReversalReason` | | ✓ | | | | |
| `_CAInvcgMasterDataType` | | ✓ | | | | |
| `_CATaxDetnType` | | ✓ | | | | |
| `_CATaxDateType` | | ✓ | | | | |
| `_CAInvcgControlOfInvcgUnit` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CABillgExistsAddInvcg` | | ✓ | | | | |
| `_CABillgLockedForInvcg` | | ✓ | | | | |
| `_CABillgDocInvcgStatus` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_CAInvcgAltvBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CAInvcgAltvContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_CABillgCurrency` | `I_Currency` | [0..1] |
| `_CAInvcgCurrency` | `I_Currency` | [0..1] |
| `_CABillgReversalDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgReversedDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgAdjustmentDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgAdjustedDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgDocOriginProcess` | `I_CABillgDocOriginProcess` | [0..1] |
| `_CAInvcgTargetProc` | `I_CAInvcgTargetProc` | [0..1] |
| `_CAInvcgCategory` | `I_CAInvcgCategory` | [0..1] |
| `_CABillgProcess` | `I_CABillgProcess` | [0..1] |
| `_CABillgType` | `I_CABillgType` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CAInvcgSourceDocType` | `I_CAInvcgSourceDocType` | [0..1] |
| `_CAInvcgDocumentType` | `I_CAInvcgDocumentType` | [0..1] |
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [0..1] |
| `_CABillgDocReversalReason` | `I_CABillgDocReversalReason` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CATaxDateType` | `I_CATaxDateType` | [0..1] |
| `_CAInvcgControlOfInvcgUnit` | `I_CAInvcgControlOfInvcgUnit` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CABillgExistsAddInvcg` | `I_CABillgExistsAddInvcg` | [0..1] |
| `_CABillgLockedForInvcg` | `I_CABillgLockedForInvcg` | [0..1] |
| `_CABillgDocInvcgStatus` | `I_CABillgDocInvcgStatus` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |
| `_Extension` | `E_CABillgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_h',
          role: #MAIN,
          viewElement: ['CABillgDocument'],
          tableElement: ['billdocno']
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
  representativeKey: 'CABillgDocument',  
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsbelegkopf'
define view entity I_CABillgDocHeader
  as select from dfkkinvbill_h as _dfkkinvbill_h

  association [0..1] to I_BusinessPartner           as _BusinessPartner            on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader     as _ContractAccountHeader      on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_BusinessPartner           as _CAInvcgAltvBusinessPartner on  $projection.CAInvcgAltvBusinessPartner = _CAInvcgAltvBusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader     as _CAInvcgAltvContractAccount on  $projection.CAInvcgAltvContractAccount = _CAInvcgAltvContractAccount.ContractAccount
  association [0..1] to I_ContractAccountPartner    as _ContractAccountPartner     on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                   and $projection.ContractAccount = _ContractAccountPartner.ContractAccount

  association [0..1] to I_Currency                  as _CABillgCurrency            on  $projection.CABillgCurrency = _CABillgCurrency.Currency
  association [0..1] to I_Currency                  as _CAInvcgCurrency            on  $projection.CAInvcgCurrency = _CAInvcgCurrency.Currency

  association [0..1] to I_CABillgDocHeader          as _CABillgReversalDocument    on  $projection.CABillgReversalDocument = _CABillgReversalDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgReversedDocument    on  $projection.CABillgReversedDocument = _CABillgReversedDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgAdjustmentDocument  on  $projection.CABillgAdjustmentDocument = _CABillgAdjustmentDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgAdjustedDocument    on  $projection.CABillgAdjustedDocument = _CABillgAdjustedDocument.CABillgDocument

  association [0..1] to I_CABillgDocOriginProcess   as _CABillgDocOriginProcess    on  $projection.CABillgDocOriginProcess = _CABillgDocOriginProcess.CABillgDocOriginProcess
  association [0..1] to I_CAInvcgTargetProc         as _CAInvcgTargetProc          on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProc.CAInvcgTargetProcess
  association [0..1] to I_CAInvcgCategory           as _CAInvcgCategory            on  $projection.CAInvcgCategory = _CAInvcgCategory.CAInvcgCategory
  association [0..1] to I_CABillgProcess            as _CABillgProcess             on  $projection.CABillgProcess = _CABillgProcess.CABillgProcess
  association [0..1] to I_CABillgType               as _CABillgType                on  $projection.CABillgType = _CABillgType.CABillgType
  association [0..1] to I_CAApplicationArea         as _CAApplicationArea          on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

  association [0..1] to I_CAInvcgSourceDocType      as _CAInvcgSourceDocType       on  _CAInvcgSourceDocType.CAInvcgSourceDocumentCat = 'INVBI'
                                                                                   and $projection.CAInvcgSourceDocumentType          = _CAInvcgSourceDocType.CAInvcgSourceDocumentType
  association [0..1] to I_CAInvcgDocumentType       as _CAInvcgDocumentType        on  $projection.CAInvcgDocumentType            = _CAInvcgDocumentType.CAInvcgDocumentType
                                                                                   and $projection.CAApplicationArea              = _CAInvcgDocumentType.CAApplicationArea
                                                                                   and _CAInvcgDocumentType.NameNumberRangeObject = 'FKKINVBILL'
  association [0..1] to I_CAInvcgDocTechDocType     as _CAInvcgDocTechDocType      on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_CABillgDocReversalReason  as _CABillgDocReversalReason   on  $projection.CABillgDocumentReversalReason = _CABillgDocReversalReason.CABillgDocumentReversalReason

  association [0..1] to I_CAInvcgMasterDataType     as _CAInvcgMasterDataType      on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_CATaxDetnType             as _CATaxDetnType              on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CATaxDateType             as _CATaxDateType              on  $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_CAInvcgControlOfInvcgUnit as _CAInvcgControlOfInvcgUnit  on  $projection.CAInvcgControlOfInvoicingUnit = _CAInvcgControlOfInvcgUnit.CAInvcgControlOfInvoicingUnit
  association [0..1] to I_CAInvcgCorrectionCat      as _CAInvcgCorrectionCat       on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CABillgExistsAddInvcg     as _CABillgExistsAddInvcg      on  $projection.CABillgHasAdditionalInvoice = _CABillgExistsAddInvcg.CABillgHasAdditionalInvoice
  association [0..1] to I_CABillgLockedForInvcg     as _CABillgLockedForInvcg      on  $projection.CABillgLockedForInvoicing = _CABillgLockedForInvcg.CABillgLockedForInvoicing
  association [0..1] to I_CABillgDocInvcgStatus     as _CABillgDocInvcgStatus      on  $projection.CABillgDocumentInvcgStatus = _CABillgDocInvcgStatus.CABillgDocumentInvcgStatus
  association [0..1] to I_CAInvcgDocHeader          as _CAInvcgDocHeader           on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

  // extension
  association [0..1] to E_CABillgDocHeader          as _Extension                  on  $projection.CABillgDocument = _Extension.CABillgDocument
{

      @EndUserText.label: 'Abrechnungsbeleg'
  key billdocno                                                          as CABillgDocument,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart                                                              as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                                              as ContractAccount,
      @ObjectModel.foreignKey.association: '_CABillgType'
      bill_type                                                          as CABillgType,
      cast(date_from as bill_period_from_gfn_kk preserving type )        as CABillgDocPeriodStartDate,
      cast(date_to as bill_period_to_gfn_kk preserving type )            as CABillgDocPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CABillgDocReversalReason'
      revreason                                                          as CABillgDocumentReversalReason,
      simulated                                                          as CABillgIsDocumentSimulated,
      cast(refdocno as refdocno_gfn_kk preserving type )                 as CABillgDocumentExternal,
      log_system                                                         as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                              as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CABillgDocOriginProcess'
      srcprocess                                                         as CABillgDocOriginProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocType'
      srcdoctype                                                         as CAInvcgSourceDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
      cast(techdoctype as techdoctype_gfn_kk preserving type )           as CAInvcgTechnicalDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentType'
      doctype                                                            as CAInvcgDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgTargetProc'
      targprocess                                                        as CAInvcgTargetProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
      mdcat                                                              as CAInvcgMasterDataType,
      @ObjectModel.foreignKey.association: '_CAInvcgAltvBusinessPartner'
      cast(gpart_inv as gpart_inv_gfn_kk preserving type )               as CAInvcgAltvBusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgAltvContractAccount'
      cast(vkont_inv as vkont_inv_gfn_kk preserving type )               as CAInvcgAltvContractAccount,
      bill_basedate                                                      as CABillgBaseDate,
      @ObjectModel.foreignKey.association: '_CABillgCurrency'
      bill_curr                                                          as CABillgCurrency,
      @ObjectModel.foreignKey.association: '_CAInvcgCurrency'
      cast(inv_curr as inv_curr_gfn_kk preserving type )                 as CAInvcgCurrency,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                                       as CATaxDetnType,
      @ObjectModel.foreignKey.association: '_CATaxDateType'
      tax_date_type                                                      as CATaxDateType,
      @ObjectModel.foreignKey.association: '_CAInvcgCategory'
      inv_category                                                       as CAInvcgCategory,
      cast(separate_inv as separate_inv_bitpack_gfn_kk preserving type ) as CAInvcgControlOfInvoicingUnit,
      invoice_first                                                      as CAInvcgFirstDate,
      @ObjectModel.foreignKey.association: '_CABillgReversalDocument'
      cast(reversaldoc as reversalbilldoc_gfn_kk preserving type )       as CABillgReversalDocument,
      @ObjectModel.foreignKey.association: '_CABillgReversedDocument'
      cast(reverseddoc as reversedbilldoc_gfn_kk preserving type )       as CABillgReversedDocument,
      @ObjectModel.foreignKey.association: '_CABillgAdjustmentDocument'
      cast(adjustmentdoc as adjustmentbilldoc_gfn_kk preserving type )   as CABillgAdjustmentDocument,
      @ObjectModel.foreignKey.association: '_CABillgAdjustedDocument'
      adjusteddoc                                                        as CABillgAdjustedDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type )                   as CAInvcgCorrectionCategory,
      cast(trigdeleted as trigdeleted_gfn_kk preserving type )           as CaInvcgIsOrderDeleted,
      xinfbill                                                           as CABillgHasAdditionalInvoice,
      cast(xbillac as xbillac_gfn_kk preserving type )                   as CAInvcgIsAccrualPostingRlvt,
      @ObjectModel.foreignKey.association: '_CABillgLockedForInvcg'
      invlock                                                            as CABillgLockedForInvoicing,
      cast(add_group as add_group_gfn_kk preserving type )               as CABillgGrpgOfAdditionalItems,
      cast(xinvbill_x as xinvbill_x_gfn_kk preserving type )             as CABillgDocHasRefObjects,
      recnum                                                             as CABillgDocumentNumberOfItems,
      cast(bit_number as bit_number_gfn_kk preserving type )             as CABllbleItmNumber,
      @Semantics.user.createdBy: true
      crname                                                             as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      crdate                                                             as CABillgDocCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                                             as CABillgDocCreationTime,
      cast(billrunno as billrunno_gfn_kk preserving type )               as CABillgDocInternalNumber,
      @ObjectModel.foreignKey.association: '_CABillgProcess'
      bill_process                                                       as CABillgProcess,
      prepaid_incl                                                       as CABillgDocHasPrepaidItems,
      pprefill_incl                                                      as CABillgDocHasRefillItems,
      revrec_incl                                                        as CABillgDocHasRevnRecgnItems,
      ptsrl                                                              as CAPartnerSettlementRule,
      @ObjectModel.foreignKey.association: '_CABillgDocInvcgStatus'
      invstatus                                                          as CABillgDocumentInvcgStatus,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
      invdocno                                                           as CAInvoicingDocument,
      invcrdate                                                          as CAInvcgCreationDate,
      keypp                                                              as CASubAreaForParallelization,
      altmd_orig_incl                                                    as CAAltvMDOriginalIsIncluded,

      // Make association public
      _ContractAccountPartner,
      _BusinessPartner,
      _ContractAccountHeader,
      _CAInvcgAltvBusinessPartner,
      _CAInvcgAltvContractAccount,
      _CABillgReversalDocument,
      _CABillgReversedDocument,
      _CABillgAdjustedDocument,
      _CABillgAdjustmentDocument,
      _CAApplicationArea,
      _CABillgCurrency,
      _CAInvcgCurrency,
      _CABillgDocOriginProcess,
      _CAInvcgSourceDocType,
      _CAInvcgTargetProc,
      _CAInvcgCategory,
      _CABillgProcess,
      _CABillgType,
      _CAInvcgDocTechDocType,
      _CAInvcgMasterDataType,
      _CATaxDetnType,
      _CATaxDateType,
      _CAInvcgDocumentType,
      _CAInvcgControlOfInvcgUnit,
      _CAInvcgCorrectionCat,
      _CABillgExistsAddInvcg,
      _CABillgLockedForInvcg,
      _CABillgDocInvcgStatus,
      _CABillgDocReversalReason,
      _CAInvcgDocHeader
}
```
