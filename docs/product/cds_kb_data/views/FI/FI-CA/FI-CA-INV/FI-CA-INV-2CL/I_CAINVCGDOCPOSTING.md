---
name: I_CAINVCGDOCPOSTING
description: "Cainvcgdocposting"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCPOSTING

**Cainvcgdocposting**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CASequenceNumber` | ✓ | |  | `consno` | `NUMC(6)` | Sequence Number |
| `CAInvcgRefPostingDocType` |  | |  | `cast(cadoctype as cadoctype_gfn_kk preserving type )` | `CHAR(4)` | Reference Document Type of Posting Document for Invoicing |
| `CADocumentNumber` |  | |  | `cast(opbel as opbel_gfn_kk preserving type)` | `CHAR(12)` | Document |
| `CARepetitionItemNumber` |  | |  | `opupw` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` |  | |  | `opupk` | `NUMC(4)` | Item Number in FI-CA Document |
| `CAInvcgIsPostedInCurrentInvcg` |  | |  | `xnewdoc` | `CHAR(1)` | Document Posted in Current Invoicing |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgRefPostgDocTyp` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgRefPostgDocTyp` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_CADocument` | `I_CADocument` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakturierungsbelegbuchungen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CASequenceNumber',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocPosting',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocPosting
  as select from dfkkinvdoc_p

  association [1..1] to I_CAInvcgDocHeader      as _CAInvcgDocHeader      on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgRefPostgDocTyp as _CAInvcgRefPostgDocTyp on $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocTyp.CAInvcgRefPostingDocType
  association [0..1] to I_CADocument            as _CADocument            on $projection.CADocumentNumber = _CADocument.CADocumentNumber
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                             as CAInvoicingDocument,
  key consno                                               as CASequenceNumber,
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocTyp'
      cast(cadoctype as cadoctype_gfn_kk preserving type ) as CAInvcgRefPostingDocType,
      @ObjectModel.foreignKey.association: '_CADocument'
      cast(opbel as opbel_gfn_kk preserving type)          as CADocumentNumber,
      opupw                                                as CARepetitionItemNumber,
      opupk                                                as CABPItemNumber,
      xnewdoc                                              as CAInvcgIsPostedInCurrentInvcg,

      _CAInvcgDocHeader,
      _CAInvcgRefPostgDocTyp,
      _CADocument
}
```
