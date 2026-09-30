---
name: I_CAWRITEOFFHISTORY
description: "Cawriteoffhistory"
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAWRITEOFFHISTORY

**Cawriteoffhistory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAWriteOffDocumentNumber` | ✓ | |  | `abbel` | `CHAR(12)` | Contract account write-off document number |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  | `gpart` | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAWriteOffReason` |  | |  | `abgrd` | `CHAR(2)` | Write-Off Reason |
| `CAWriteOffDate` |  | |  | `abdat` | `DATS(8)` | Date |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CADocumentOriginCode` |  | |  | `herkf` | `CHAR(2)` | Document Origin Key |
| `CADocumentType` |  | |  | `blart` | `CHAR(2)` | Document Type |
| `CAWriteOffIsReversed` |  | |  | `xrvsd` | `CHAR(1)` | Item is reversed |
| `CAMassRunDate` |  | |  | `laufd` | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  | `laufi` | `CHAR(6)` | Additional Identification Characteristic |
| `_BusinessPartner` | | ✓ | | | | |
| `_CADocumentBPItem` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAWriteOffDocument` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CAWriteOffReason` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CADocumentBPItem` | `I_CADocumentBPItem` | [1..1] |
| `_CADocument` | `I_CADocument` | [1..1] |
| `_CAWriteOffDocument` | `I_CADocument` | [1..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_CADocumentType` | `I_CADocumentType` | [1..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CAWriteOffReason` | `I_CAWriteOffReason` | [1..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: {
 dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true }
                                 }

@EndUserText.label: 'Contract Accounting Write Off History'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern:#NONE,
                sapObjectNodeType.name: 'ContrAcctgWriteOffHistory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE
                                          ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_CAWriteOffHistory
  as select from dfkkwoh

  association [1..1] to I_BusinessPartner        as _BusinessPartner        on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CADocumentBPItem       as _CADocumentBPItem       on  $projection.CADocumentNumber       = _CADocumentBPItem.CADocumentNumber
                                                                            and $projection.CARepetitionItemNumber = _CADocumentBPItem.CARepetitionItemNumber
                                                                            and $projection.CABPItemNumber         = _CADocumentBPItem.CABPItemNumber
                                                                            and $projection.CASubItemNumber        = _CADocumentBPItem.CASubItemNumber
  association [1..1] to I_CADocument             as _CADocument             on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [1..1] to I_CADocument             as _CAWriteOffDocument     on  $projection.CAWriteOffDocumentNumber = _CAWriteOffDocument.CADocumentNumber
  association [1..1] to I_CADocumentOriginCode   as _CADocumentOriginCode   on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode
  association [1..1] to I_CADocumentType         as _CADocumentType         on  $projection.CADocumentType    = _CADocumentType.CADocumentType
                                                                            and _CADocumentType.CAApplicationArea = 'C'
  association [0..1] to I_CAStatisticalItemCode  as _CAStatisticalItemCode  on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [1..1] to I_CAWriteOffReason       as _CAWriteOffReason       on  $projection.CAWriteOffReason = _CAWriteOffReason.CAWriteOffReason
  association [1..1] to I_ContractAccountHeader  as _ContractAccount        on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner as _ContractAccountPartner on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                            and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  association [1..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Currency               as _TransactionCurrency    on  $projection.TransactionCurrency = _TransactionCurrency.Currency

{
      @ObjectModel.foreignKey.association: '_CAWriteOffDocument'
  key abbel                                   as CAWriteOffDocumentNumber,
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel                                   as CADocumentNumber,
  key opupw                                   as CARepetitionItemNumber,
  key opupk                                   as CABPItemNumber,
  key opupz                                   as CASubItemNumber,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart                                   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      vkont                                   as ContractAccount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                   as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                   as CAAmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_CAWriteOffReason'
      abgrd                                   as CAWriteOffReason,
      abdat                                   as CAWriteOffDate,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                   as CAStatisticalItemCode,
      @ObjectModel.foreignKey.association: '_CADocumentOriginCode'
      herkf                                   as CADocumentOriginCode,
      @ObjectModel.foreignKey.association: '_CADocumentType'
      blart                                   as CADocumentType,
      xrvsd                                   as CAWriteOffIsReversed,
      laufd                                   as CAMassRunDate,
      laufi                                   as CAMassRunID,

      /* associations */
      _BusinessPartner,
      _CADocument,
      _CADocumentBPItem,
      _CADocumentOriginCode,
      _CADocumentType,
      _CAStatisticalItemCode,
      _CAWriteOffDocument,
      _CAWriteOffReason,
      _ContractAccount,
      _ContractAccountPartner,
      _CompanyCode,
      _TransactionCurrency
}
```
