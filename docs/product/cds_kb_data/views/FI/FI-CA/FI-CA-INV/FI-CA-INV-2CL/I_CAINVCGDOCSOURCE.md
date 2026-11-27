---
name: I_CAINVCGDOCSOURCE
description: "Cainvcgdocsource"
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
# I_CAINVCGDOCSOURCE

**Cainvcgdocsource**

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
| `CAInvcgSourceDocumentCat` | ✓ | |  | `cast(srcdoccat as srcdoccat_gfn_kk preserving type)` | `CHAR(5)` | Category of Source Document To Be Invoiced |
| `CAInvcgSourceDocumentNumber` | ✓ | |  | `cast(srcdocno as srcdocno_gfn_kk preserving type)` | `CHAR(20)` | Source Document Number |
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CAInvcgSourceDocumentType` |  | |  | `srcdoctype` | `CHAR(3)` | Type of Source Document to Be Invoiced |
| `LogicalSystem` |  | |  | `log_system` | `CHAR(10)` | Logical System |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `CAInvcgIsDocumentPosted` |  | |  | `invoiced` | `CHAR(1)` | Invoicing Document Posted |
| `CAInvcgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Invoicing Document Is Simulated |
| `CAInvcgIsDocumentPreliminary` |  | |  | `cast(preliminary as inv_preliminary_gfn_kk preserving type)` | `CHAR(1)` | Preliminary Invoice |
| `CAInvcgReversalDocument` |  | |  | `cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type)` | `CHAR(12)` | Number of Reversal Invoicing Document |
| `CAInvcgReversedDocument` |  | |  | `cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type)` | `CHAR(12)` | Number of Reversed Invoicing Document |
| `CAInvcgCreationDate` |  | |  | `crdate` | `DATS(8)` | Creation Date of Invoicing Document |
| `CAInvcgCreationTime` |  | |  | `crtime` | `TIMS(6)` | Time of Creation of Invoicing Document |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |
| `_CAInvcgSourceDocType` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgReversalDocument` | | ✓ | | | | |
| `_CAInvcgReversedDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [0..1] |
| `_CAInvcgSourceDocType` | `I_CAInvcgSourceDocType` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CAInvcgReversalDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_CAInvcgReversedDocument` | `I_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakturierungsbelegquellen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'ContrAcctgInvcgDocSource',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocSource
  as select from dfkkinvdoc_s
  association [1..1] to I_CAInvcgDocHeader     as _CAInvcgDocHeader        on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgSourceDocCat  as _CAInvcgSourceDocCat     on  $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
  association [0..1] to I_CAInvcgSourceDocType as _CAInvcgSourceDocType    on  $projection.CAInvcgSourceDocumentType = _CAInvcgSourceDocType.CAInvcgSourceDocumentType
                                                                           and $projection.CAInvcgSourceDocumentCat  = _CAInvcgSourceDocType.CAInvcgSourceDocumentCat

  association [0..1] to I_CAApplicationArea    as _CAApplicationArea       on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAInvcgDocHeader     as _CAInvcgReversalDocument on  $projection.CAInvcgReversalDocument = _CAInvcgReversalDocument.CAInvoicingDocument
  association [0..1] to I_CAInvcgDocHeader     as _CAInvcgReversedDocument on  $projection.CAInvcgReversedDocument = _CAInvcgReversedDocument.CAInvoicingDocument

{
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
  key cast(srcdoccat as srcdoccat_gfn_kk preserving type)         as CAInvcgSourceDocumentCat,
  key cast(srcdocno  as srcdocno_gfn_kk preserving type)          as CAInvcgSourceDocumentNumber,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                                    as CAInvoicingDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocType'
      srcdoctype                                                  as CAInvcgSourceDocumentType,
      log_system                                                  as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                       as CAApplicationArea,
      invoiced                                                    as CAInvcgIsDocumentPosted,
      simulated                                                   as CAInvcgIsDocumentSimulated,
      cast(preliminary as inv_preliminary_gfn_kk preserving type) as CAInvcgIsDocumentPreliminary,
      @ObjectModel.foreignKey.association: '_CAInvcgReversalDocument'
      cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type) as CAInvcgReversalDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgReversedDocument'
      cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type) as CAInvcgReversedDocument,
      @Semantics.systemDate.createdAt: true
      crdate                                                      as CAInvcgCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                                      as CAInvcgCreationTime,

      _CAInvcgSourceDocCat,
      _CAInvcgSourceDocType,
      _CAApplicationArea,
      _CAInvcgReversalDocument,
      _CAInvcgReversedDocument,
      _CAInvcgDocHeader
}
```
