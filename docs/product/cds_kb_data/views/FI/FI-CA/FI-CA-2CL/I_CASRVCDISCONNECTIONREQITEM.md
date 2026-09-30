---
name: I_CASRVCDISCONNECTIONREQITEM
description: "Casrvcdisconnectionreqitem"
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
# I_CASRVCDISCONNECTIONREQITEM

**Casrvcdisconnectionreqitem**

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
| `CAServiceDisconnectionRequest` | ✓ | |  | `dscpnr` | `CHAR(10)` | Number of Disconnection Request |
| `CADocumentNumber` | ✓ | |  | `opbel` | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  | `opupz` | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CADunningAmount` |  | |  | `mbetm` | `CURR(13)` | Dunned Amount in Transaction Currency |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CADunningAmountInLocalCurrency` |  | |  | `mbetc` | `CURR(13)` | Dunning notice amount in local currency |
| `LocalCurrency` |  | |  | `wersc` | `CUKY(5)` | Currency Key |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_CADocumentBPItem_2` | | ✓ | | | | |
| `_CADocument_2` | | ✓ | | | | |
| `_CADocumentBPItem` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_LocalCurrency` | `I_Currency` | [1..1] |
| `_CADocumentBPItem_2` | `I_CADocumentBPItem` | [1..1] |
| `_CADocument_2` | `I_CADocument` | [1..1] |
| `_CADocumentBPItem` | `I_CADocumentBPItemPhysical` | [1..1] |
| `_CADocument` | `I_CADocumentHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #FACT,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Service Disconnection Request Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ContrAcctgSrvcDisconncnReqItem',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType:{ dataClass: #TRANSACTIONAL,
                            serviceQuality: #A,
                            sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASrvcDisconnectionReqItem
  as select from dfkk_disco_propi

  association [1..1] to I_Currency                 as _TransactionCurrency on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Currency                 as _LocalCurrency       on  $projection.LocalCurrency = _LocalCurrency.Currency
  association [1..1] to I_CADocumentBPItem         as _CADocumentBPItem_2  on  $projection.CADocumentNumber       = _CADocumentBPItem_2.CADocumentNumber
                                                                           and $projection.CARepetitionItemNumber = _CADocumentBPItem_2.CARepetitionItemNumber
                                                                           and $projection.CABPItemNumber         = _CADocumentBPItem_2.CABPItemNumber
                                                                           and $projection.CASubItemNumber        = _CADocumentBPItem_2.CASubItemNumber
  association [1..1] to I_CADocument               as _CADocument_2        on  $projection.CADocumentNumber = _CADocument_2.CADocumentNumber

  /* deprecated associations */
  association [1..1] to I_CADocumentBPItemPhysical as _CADocumentBPItem    on  $projection.CADocumentNumber       = _CADocumentBPItem.CADocumentNumber
                                                                           and $projection.CARepetitionItemNumber = _CADocumentBPItem.CARepetitionItemNumber
                                                                           and $projection.CABPItemNumber         = _CADocumentBPItem.CABPItemNumber
                                                                           and $projection.CASubItemNumber        = _CADocumentBPItem.CASubItemNumber
  association [1..1] to I_CADocumentHeader         as _CADocument          on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  /* end deprecated associations */

{
  key dscpnr as CAServiceDisconnectionRequest,
      @ObjectModel.foreignKey.association: '_CADocument'
  key opbel  as CADocumentNumber,
  key opupw  as CARepetitionItemNumber,
  key opupk  as CABPItemNumber,
  key opupz  as CASubItemNumber,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mbetm  as CADunningAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers  as TransactionCurrency,

      @Semantics.amount.currencyCode: 'LocalCurrency'
      mbetc  as CADunningAmountInLocalCurrency,
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      wersc  as LocalCurrency,

      /* associations */
      _CADocument_2,
      _CADocumentBPItem_2,
      _LocalCurrency,
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
```
