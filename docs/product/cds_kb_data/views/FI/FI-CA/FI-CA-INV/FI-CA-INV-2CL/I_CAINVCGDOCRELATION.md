---
name: I_CAINVCGDOCRELATION
description: "Cainvcgdocrelation"
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
# I_CAINVCGDOCRELATION

**Cainvcgdocrelation**

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
| `CAInvcgReferenceObject` | ✓ | |  | `refobjname` | `CHAR(10)` | Reference Object |
| `CAReferenceObjectID` | ✓ | |  | `refobjvalue` | `CHAR(40)` | Reference Object ID |
| `CAInvcgCreationDate` | ✓ | |  | `crdate` | `DATS(8)` | Creation Date of Invoicing Document |
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CAInvcgIsDocumentPosted` |  | |  | `invoiced` | `CHAR(1)` | Invoicing Document Posted |
| `CAInvcgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Invoicing Document Is Simulated |
| `CAInvcgIsDocumentPreliminary` |  | |  | `cast(preliminary as inv_preliminary_gfn_kk preserving type)` | `CHAR(1)` | Preliminary Invoice |
| `CAReferenceObjectAddlText` |  | |  | `cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type)` | `CHAR(128)` | Additional Data for Reference Object |
| `_CAInvcgReferenceObj` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgReferenceObj` | `I_CAInvcgReferenceObj` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakturierungsbelegobjektverknüpfungen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'ContrAcctgInvcgDocRelation',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocRelation
  as select from dfkkinvdoc_x
  association [0..1] to I_CAInvcgReferenceObj as _CAInvcgReferenceObj on $projection.CAInvcgReferenceObject = _CAInvcgReferenceObj.CAInvcgReferenceObject
  association [0..1] to I_CAInvcgDocHeader    as _CAInvcgDocHeader    on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
{
      @ObjectModel.foreignKey.association: '_CAInvcgReferenceObj'
  key refobjname                                                    as CAInvcgReferenceObject,
  key refobjvalue                                                   as CAReferenceObjectID,
      @Semantics.systemDate.createdAt: true
  key crdate                                                        as CAInvcgCreationDate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                                      as CAInvoicingDocument,
      invoiced                                                      as CAInvcgIsDocumentPosted,
      simulated                                                     as CAInvcgIsDocumentSimulated,
      cast(preliminary as inv_preliminary_gfn_kk preserving type)   as CAInvcgIsDocumentPreliminary,
      cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type) as CAReferenceObjectAddlText,

      // Make association public
      _CAInvcgReferenceObj,
      _CAInvcgDocHeader
}
```
