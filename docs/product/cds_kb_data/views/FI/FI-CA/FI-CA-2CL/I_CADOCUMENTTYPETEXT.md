---
name: I_CADOCUMENTTYPETEXT
description: "Cadocumenttypetext"
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
  - text-view
  - document
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTTYPETEXT

**Cadocumenttypetext**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CAApplicationArea` | ✓ | |  | `applk` | `CHAR(1)` | Application Area |
| `CADocumentTypeName` |  | |  | `cast( ltext as blart_text_kk preserving type )` | `CHAR(20)` | Text of Document Type |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_Language` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true } }

@EndUserText.label: 'Document Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADocumentType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CADocumentTypeText
  as select from tfk003t

  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

{
  key blart                                           as CADocumentType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                           as Language,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk                                           as CAApplicationArea,

      @Semantics.text
      cast( ltext as blart_text_kk  preserving type ) as CADocumentTypeName,

      _Language,
      _CAApplicationArea,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea                              as _ApplArea
}
```
