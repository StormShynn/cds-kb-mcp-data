---
name: I_CADOCUMENT
description: "Cadocument"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENT

**Cadocument**

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
| `CAReconciliationKey` |  | |  | `fikey` | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CADocumentType` |  | |  | `blart` | `CHAR(2)` | Document Type |
| `CADocumentOriginCode` |  | |  | `herkf` | `CHAR(2)` | Document Origin Key |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `cpudt` | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  | `cputm` | `TIMS(6)` | Time of Entry |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Transaction Currency |
| `DocumentDate` |  | |  | `bldat` | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `ExchangeRateDate` |  | |  | `wwert` | `DATS(8)` | Translation Date |
| `CAReferenceDocument` |  | |  | `xblnr` | `CHAR(16)` | Reference Document Number |
| `CAReturnReason` |  | |  | `rlgrd` | `CHAR(3)` | Return Reason |
| `CAPostingReason` |  | |  | `abgrd` | `CHAR(2)` | Posting Reason (For Write-Offs And Transfer Postings) |
| `CASeparateDocIsCreatedInGL` |  | |  | `xeibh` | `CHAR(1)` | Create Separate Document in General Ledger |
| `ReferenceDocumentType` |  | |  | `awtyp` | `CHAR(5)` | Reference Transaction |
| `OriginalReferenceDocument` |  | |  | `awkey` | `CHAR(20)` | Object Key |
| `CAReversedDocumentNumber` |  | |  | `stbel` | `CHAR(12)` | Number of Reversed Document |
| `CADocumentClass` |  | |  | `bltyp` | `CHAR(1)` | Document Class |
| `CAClearingInformation` |  | |  | `aginf` | `CHAR(1)` | Clearing Information |
| `CATaxCompanyCode` |  | |  | `stbuk` | `CHAR(4)` | Tax Company Code |
| `CAReversalDocumentNumber` |  | |  | `storb` | `CHAR(12)` | Number of Reversal Document |
| `CADocumentSupplements` |  | |  | `appdx` | `CHAR(1)` | Existing document supplements |
| `LogicalSystem` |  | |  | `awsys` | `CHAR(10)` | Logical System of Source Document |
| `CADocumentVersion` |  | |  | `versn` | `CHAR(3)` | Version Number |
| `CAWorkflowCheckReason` |  | |  | `c4eye` | `CHAR(2)` | Check Reason for Workflows Acc. to Dual Control Principle |
| `CAWorkflowCheckProcess` |  | |  | `c4eyp` | `CHAR(1)` | Editing Process to Be Confirmed |
| `CADocumentTransactionClass` |  | |  | `tatyp` | `CHAR(1)` | Transaction Class of Document |
| `CADocumentTypeForGLTransfer` |  | |  | `hbbla` | `CHAR(2)` | Document Type for Transfer to General Ledger |
| `CADocContainsCashFlowItems` |  | |  | `xcsha` | `CHAR(1)` | Document Contains Assignments from Cash Flows |
| `CAStorageLocationOfTaxSuplmnt` |  | |  | `utloc` | `CHAR(2)` | Storage Location of Tax Supplement for Telco Tax (U.S.A) |
| `CATaxCodeWasExchanged` |  | |  | `xtxch` | `CHAR(1)` | Tax Codes Were Exchanged |
| `TaxReportingDate` |  | |  | `vatdate` | `DATS(8)` | Tax Reporting Date |
| `TaxFulfillmentDate` |  | |  | `fulfilldate` | `DATS(8)` | Tax Settlement Date |
| `CARequestedPeriodForGLTransfer` |  | |  | `wnper` | `NUMC(2)` | Requested Special Period for Transfer to General Ledger |
| `IsIndividualPosting` |  | |  | `xsing` | `CHAR(1)` | Individual Posting |
| `CADocumentIsAged` |  | |  | `xdaag` | `CHAR(1)` | Data Aging: Document was already in historical area |
| `LastChangeDate` |  | |  | `chdate` | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  | `chtime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `CAInvcgRefPostingDocType` |  | |  | `cadoctype` | `CHAR(4)` | Reference Document Type of Posting Document for Invoicing |
| `CAInvoicingDocument` |  | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CA1stCountrySpecificReference` |  | |  | `glo_ref1_hd` | `CHAR(80)` | Country/Region-Specific Reference 1 in Document |
| `CAFirstCountrySpecificDate` |  | |  | `glo_dat1_hd` | `DATS(8)` | Country-/Region-Specific Date 1 in Document |
| `CAClassificationKey` |  | |  | `opord` | `CHAR(35)` | Classification Key |
| `_AccountingDocType` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAClearingInformation` | | ✓ | | | | |
| `_CADocTransactionClass` | | ✓ | | | | |
| `_CADocumentClass` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADocumentSupplement` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CADocumentVersion` | | ✓ | | | | |
| `_CAInvcgDocument` | | ✓ | | | | |
| `_CAInvcgRefPostgDocType` | | ✓ | | | | |
| `_CAPostingReason` | | ✓ | | | | |
| `_CAReturnReason` | | ✓ | | | | |
| `_CARequestedSpecialPeriod` | | ✓ | | | | |
| `_CATaxSupplementStorageLoc` | | ✓ | | | | |
| `_CAWorkflowCheckReason` | | ✓ | | | | |
| `_CAWorkflowCheckProcess` | | ✓ | | | | |
| `_CATaxCompanyCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingDocType` | `I_AccountingDocumentType` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAClearingInformation` | `I_CAClearingInformation` | [0..1] |
| `_CADocTransactionClass` | `I_CADocTransactionClass` | [1..1] |
| `_CADocumentClass` | `I_CADocumentClass` | [0..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_CADocumentSupplement` | `I_CADocumentSupplement` | [0..1] |
| `_CADocumentType` | `I_CADocumentType` | [1..1] |
| `_CADocumentVersion` | `I_CADocumentVersion` | [0..1] |
| `_CAInvcgDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_CAInvcgRefPostgDocType` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_CAPostingReason` | `I_CAPostingReason` | [0..1] |
| `_CAReturnReason` | `I_CAReturnReason` | [0..*] |
| `_CARequestedSpecialPeriod` | `I_CARequestedSpecialPeriod` | [1..1] |
| `_CATaxSupplementStorageLoc` | `I_CATaxSupplementStorageLoc` | [0..1] |
| `_CAWorkflowCheckReason` | `I_CAWorkflowCheckReason` | [0..1] |
| `_CAWorkflowCheckProcess` | `I_CAWorkflowCheckProcess` | [0..1] |
| `_CATaxCompanyCode` | `I_CompanyCode` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_Extension` | `E_CADocumentHeader` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics.dataExtraction.enabled: true

@EndUserText.label: 'Contract Accounting Document'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentNumber',
                sapObjectNodeType.name: 'ContrAcctgDocument',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL } }

@VDM.viewType: #BASIC

define view entity I_CADocument
  as select from dfkkko

  association [0..1] to I_AccountingDocumentType    as _AccountingDocType         on  $projection.CADocumentTypeForGLTransfer = _AccountingDocType.AccountingDocumentType
  association [1..1] to I_CAApplicationArea         as _CAApplicationArea         on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAClearingInformation     as _CAClearingInformation     on  $projection.CAClearingInformation = _CAClearingInformation.CAClearingInformation
  association [1..1] to I_CADocTransactionClass     as _CADocTransactionClass     on  $projection.CADocumentTransactionClass = _CADocTransactionClass.CADocumentTransactionClass
  association [0..1] to I_CADocumentClass           as _CADocumentClass           on  $projection.CADocumentClass = _CADocumentClass.CADocumentClass
  association [1..1] to I_CADocumentOriginCode      as _CADocumentOriginCode      on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode
  association [0..1] to I_CADocumentSupplement      as _CADocumentSupplement      on  $projection.CADocumentSupplements = _CADocumentSupplement.CADocumentSupplements
  association [1..1] to I_CADocumentType            as _CADocumentType            on  $projection.CADocumentType    = _CADocumentType.CADocumentType
                                                                                  and $projection.CAApplicationArea = _CADocumentType.CAApplicationArea
  association [0..1] to I_CADocumentVersion         as _CADocumentVersion         on  $projection.CADocumentVersion = _CADocumentVersion.CADocumentVersion
  association [0..1] to I_CAInvcgDocHeader          as _CAInvcgDocument           on  $projection.CAInvoicingDocument = _CAInvcgDocument.CAInvoicingDocument
  association [0..1] to I_CAInvcgRefPostgDocTyp     as _CAInvcgRefPostgDocType    on  $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocType.CAInvcgRefPostingDocType
  association [0..1] to I_CAPostingReason           as _CAPostingReason           on  $projection.CADocumentOriginCode = _CAPostingReason.CADocumentOriginCode
                                                                                  and $projection.CAPostingReason      = _CAPostingReason.CAPostingReason
  association [0..*] to I_CAReturnReason            as _CAReturnReason            on  $projection.CAReturnReason = _CAReturnReason.CAReturnReason
                                                                                  and _CAReturnReason.HouseBank  is not initial
  association [1..1] to I_CARequestedSpecialPeriod  as _CARequestedSpecialPeriod  on  $projection.CARequestedPeriodForGLTransfer = _CARequestedSpecialPeriod.CARequestedPeriodForGLTransfer
  association [0..1] to I_CATaxSupplementStorageLoc as _CATaxSupplementStorageLoc on  $projection.CAStorageLocationOfTaxSuplmnt = _CATaxSupplementStorageLoc.CAStorageLocationOfTaxSuplmnt
  association [0..1] to I_CAWorkflowCheckReason     as _CAWorkflowCheckReason     on  $projection.CAWorkflowCheckReason = _CAWorkflowCheckReason.CAWorkflowCheckReason
  association [0..1] to I_CAWorkflowCheckProcess    as _CAWorkflowCheckProcess    on  $projection.CAWorkflowCheckProcess = _CAWorkflowCheckProcess.CAWorkflowCheckProcess
  association [0..1] to I_CompanyCode               as _CATaxCompanyCode          on  $projection.CATaxCompanyCode = _CATaxCompanyCode.CompanyCode
  association [1..1] to I_Currency                  as _TransactionCurrency       on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_User                      as _CreatedByUser             on  $projection.CreatedByUser = _CreatedByUser.UserID
  // Key User Extensibility. Is registerd in transaction SCFD_REGISTRY. Do not change E_CADocumentHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CADocumentHeader          as _Extension                 on  $projection.CADocumentNumber = _Extension.CADocumentNumber

{
  key opbel       as CADocumentNumber,

      fikey       as CAReconciliationKey,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk       as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CADocumentType'
      blart       as CADocumentType,
      @ObjectModel.foreignKey.association: '_CADocumentOriginCode'
      herkf       as CADocumentOriginCode,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      ernam       as CreatedByUser,
      cpudt       as CreationDate,
      cputm       as CreationTime,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers       as TransactionCurrency,
      bldat       as DocumentDate,
      budat       as CAPostingDate,
      wwert       as ExchangeRateDate,
      xblnr       as CAReferenceDocument,
      @ObjectModel.foreignKey.association: '_CAReturnReason'
      rlgrd       as CAReturnReason,
      @ObjectModel.foreignKey.association: '_CAPostingReason'
      abgrd       as CAPostingReason,
      xeibh       as CASeparateDocIsCreatedInGL,
      //xbwer
      awtyp       as ReferenceDocumentType,
      awkey       as OriginalReferenceDocument,
      stbel       as CAReversedDocumentNumber,
      //stmet
      @ObjectModel.foreignKey.association: '_CADocumentClass'
      bltyp       as CADocumentClass,
      @ObjectModel.foreignKey.association: '_CAClearingInformation'
      aginf       as CAClearingInformation,
      @ObjectModel.foreignKey.association: '_CATaxCompanyCode'
      stbuk       as CATaxCompanyCode,
      storb       as CAReversalDocumentNumber,
      @ObjectModel.foreignKey.association: '_CADocumentSupplement'
      appdx       as CADocumentSupplements,
      awsys       as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CADocumentVersion'
      versn       as CADocumentVersion,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckReason'
      c4eye       as CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckProcess'
      c4eyp       as CAWorkflowCheckProcess,
      @ObjectModel.foreignKey.association: '_CADocTransactionClass'
      tatyp       as CADocumentTransactionClass,
      @ObjectModel.foreignKey.association: '_AccountingDocType'
      hbbla       as CADocumentTypeForGLTransfer,
      xcsha       as CADocContainsCashFlowItems,
      @ObjectModel.foreignKey.association: '_CATaxSupplementStorageLoc'
      utloc       as CAStorageLocationOfTaxSuplmnt,
      xtxch       as CATaxCodeWasExchanged,
      vatdate     as TaxReportingDate,
      fulfilldate as TaxFulfillmentDate,
      @ObjectModel.foreignKey.association: '_CARequestedSpecialPeriod'
      wnper       as CARequestedPeriodForGLTransfer,
      xsing       as IsIndividualPosting,
      //keypp
      //_dataging
      xdaag       as CADocumentIsAged,
      //trsla
      //locok
      //bttype
      //cbttype
      //closingstep
      chdate      as LastChangeDate,
      chtime      as LastChangeTime,
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocType'
      cadoctype   as CAInvcgRefPostingDocType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocument'
      invdocno    as CAInvoicingDocument,
      glo_ref1_hd as CA1stCountrySpecificReference,
      glo_dat1_hd as CAFirstCountrySpecificDate,
      opord       as CAClassificationKey,

      /* associations */
      _AccountingDocType,
      _CAApplicationArea,
      _CAClearingInformation,
      _CADocTransactionClass,
      _CADocumentClass,
      _CADocumentOriginCode,
      _CADocumentSupplement,
      _CADocumentType,
      _CADocumentVersion,
      _CAInvcgDocument,
      _CAInvcgRefPostgDocType,
      _CAPostingReason,
      _CAReturnReason,
      _CARequestedSpecialPeriod,
      _CATaxCompanyCode,
      _CATaxSupplementStorageLoc,
      _CAWorkflowCheckProcess,
      _CAWorkflowCheckReason,
      _CreatedByUser,
      _TransactionCurrency
}
```
