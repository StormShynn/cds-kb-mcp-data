---
name: I_CASUBTRANSACTIONTEXT
description: "Casubtransactiontext"
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
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBTRANSACTIONTEXT

**Casubtransactiontext**

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
| `CAApplicationArea` | ✓ | |  | `applk` | `CHAR(1)` | Application Area |
| `CAMainTransaction` | ✓ | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` | ✓ | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CASubTransactionName` |  | |  | `cast( txt30 as tvorg_text_kk preserving type )` | `CHAR(30)` | Text of Subtransaction |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_MainTransaction` |  | |  | `_CAMainTransaction` |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAMainTransaction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAMainTransaction` | `I_CAMainTransaction` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Subtransaction - Text'

@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction.enabled : true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASubTransaction',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE  ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubTransactionText
  as select from tfktvot

  association [1..1] to I_CAApplicationArea as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [1..1] to I_CAMainTransaction as _CAMainTransaction on  $projection.CAApplicationArea = _CAMainTransaction.CAApplicationArea
                                                                  and $projection.CAMainTransaction = _CAMainTransaction.CAMainTransaction
  association [0..1] to I_Language          as _Language          on  $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk                                           as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAMainTransaction'
  key hvorg                                           as CAMainTransaction,
  key tvorg                                           as CASubTransaction,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                           as Language,

      @Semantics.text
      cast( txt30 as tvorg_text_kk  preserving type ) as CASubTransactionName,

      _CAApplicationArea,
      _CAMainTransaction,
      _Language,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea                              as _ApplArea,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAMainTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAMainTransaction'
      _CAMainTransaction                              as _MainTransaction
}
```
