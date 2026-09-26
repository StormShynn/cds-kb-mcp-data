---
name: I_CADOCUMENTTYPE
description: "Cadocumenttype"
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
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTTYPE

**Cadocumenttype**

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
| `CADocumentType` | ✓ | |  | `blart` | `CHAR(2)` | Document Type |
| `CAApplicationArea` | ✓ | |  | `applk` | `CHAR(1)` | Application Area |
| `CACrossCompCodePostgIsAllowed` |  | |  | `xgsub` | `CHAR(1)` | Cross-Company Posting Permitted |
| `CAManualPostingIsForbidden` |  | |  | `xintf` | `CHAR(1)` | No Manual Postings Permitted |
| `CANegativePostingCode` |  | |  | `negbl` | `CHAR(1)` | Rule for Negative Postings |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Text` | `I_CADocumentTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : { dataCategory: #DIMENSION,
               dataExtraction.enabled : true}

@EndUserText.label: 'Document Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CADocumentType',
                sapObjectNodeType.name: 'ContrAcctgDocumentType',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CADocumentType
  as select from tfk003

  association [1..1] to I_CAApplicationArea  as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..*] to I_CADocumentTypeText as _Text              on  $projection.CADocumentType    = _Text.CADocumentType
                                                                   and $projection.CAApplicationArea = _Text.CAApplicationArea
{
      @ObjectModel.text.association: '_Text'
  key tfk003.blart as CADocumentType,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key tfk003.applk as CAApplicationArea,

      tfk003.xgsub as CACrossCompCodePostgIsAllowed,
      tfk003.xintf as CAManualPostingIsForbidden,
      tfk003.negbl as CANegativePostingCode,

      /* only technical fields:
            tfk003.numkr,
            tfk003.bllfz,
            tfk003.arclfz,
      */

      /* associations */
      _CAApplicationArea,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
where
  applk = 'C'
```
