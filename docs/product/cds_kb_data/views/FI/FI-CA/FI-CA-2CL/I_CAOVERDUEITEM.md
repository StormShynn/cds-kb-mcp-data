---
name: I_CAOVERDUEITEM
description: "Caoverdueitem"
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOVERDUEITEM

**Caoverdueitem**

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
| `CADocumentNumber` | ✓ | |  |  | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  |  | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  |  | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  |  | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CAPromiseToPay` | ✓ | |  |  | `CHAR(12)` | Identification of Promise to Pay |
| `CANetDueDate` | ✓ | |  |  | `DATS(8)` | Due date for net payment |
| `CAOverdueItemOrigin` |  | |  |  | `CHAR(1)` | Origin of Overdue Item |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CAAmountInTransactionCurrency` |  | |  |  | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CAAmountInLocalCurrency` |  | |  |  | `CURR(13)` | Amount In Local Currency With +/- Signs |
| `_BusinessPartner` | | ✓ | | | | |
| `_CADocument_2` | | ✓ | | | | |
| `_CADocumentBPItem_2` | | ✓ | | | | |
| `_CAOverdueItemOrigin` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CADocumentBPItem` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CADocument_2` | `I_CADocument` | [0..1] |
| `_CADocumentBPItem_2` | `I_CADocumentBPItem` | [0..1] |
| `_CAOverdueItemOrigin` | `I_CAOverdueItemOrigin` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_CADocumentBPItem` | `I_CADocumentBPItemPhysical` | [0..1] |
| `_CADocument` | `I_CADocumentHeader` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #FACT,
              internalName: #LOCAL }

@EndUserText.label: 'Contract Accounting Overdue Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType:{ dataClass: #MIXED,
                            serviceQuality: #C,
                            sizeCategory: #L } }

@VDM.viewType: #COMPOSITE

define view entity I_CAOverdueItem
  as select from P_CAOverdueItemSelection

  association [1..1] to I_BusinessPartner          as _BusinessPartner     on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CADocument               as _CADocument_2        on  $projection.CADocumentNumber = _CADocument_2.CADocumentNumber
  association [0..1] to I_CADocumentBPItem         as _CADocumentBPItem_2  on  $projection.CADocumentNumber       = _CADocumentBPItem_2.CADocumentNumber
                                                                           and $projection.CARepetitionItemNumber = _CADocumentBPItem_2.CARepetitionItemNumber
                                                                           and $projection.CABPItemNumber         = _CADocumentBPItem_2.CABPItemNumber
                                                                           and $projection.CASubItemNumber        = _CADocumentBPItem_2.CASubItemNumber
  association [0..1] to I_CAOverdueItemOrigin      as _CAOverdueItemOrigin on  $projection.CAOverdueItemOrigin = _CAOverdueItemOrigin.CAOverdueItemOrigin
  association [1..1] to I_CompanyCode              as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ContractAccountHeader    as _ContractAccount     on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_Currency                 as _CompanyCodeCurrency on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [1..1] to I_Currency                 as _TransactionCurrency on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  /* deprecated associations */
  association [0..1] to I_CADocumentBPItemPhysical as _CADocumentBPItem    on  $projection.CADocumentNumber       = _CADocumentBPItem.CADocumentNumber
                                                                           and $projection.CARepetitionItemNumber = _CADocumentBPItem.CARepetitionItemNumber
                                                                           and $projection.CABPItemNumber         = _CADocumentBPItem.CABPItemNumber
                                                                           and $projection.CASubItemNumber        = _CADocumentBPItem.CASubItemNumber
  association [0..1] to I_CADocumentHeader         as _CADocument          on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  /* end deprecated associations */

{
      @ObjectModel.foreignKey.association: '_CADocument'
  key CADocumentNumber,
  key CARepetitionItemNumber,
  key CABPItemNumber,
  key CASubItemNumber,
  key CAPromiseToPay,
  key CANetDueDate,

      @ObjectModel.foreignKey.association: '_CAOverdueItemOrigin'
      CAOverdueItemOrigin,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccount'
      ContractAccount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CAAmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CAAmountInLocalCurrency,

      /* associations */
      _BusinessPartner,
      _CADocument_2,
      _CADocumentBPItem_2,
      _CAOverdueItemOrigin,
      _CompanyCode,
      _CompanyCodeCurrency,
      _ContractAccount,
      _TransactionCurrency,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument_2'
      _CADocument,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocumentBPItem_2'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocumentBPItem_2'
      _CADocumentBPItem

}
where
  CANetDueDate < $session.system_date
```
