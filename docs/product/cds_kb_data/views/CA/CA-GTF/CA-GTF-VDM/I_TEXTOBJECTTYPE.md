---
name: I_TEXTOBJECTTYPE
description: "Textobjecttype"
app_component: CA-GTF-VDM
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
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - text
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_TEXTOBJECTTYPE

**Textobjecttype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
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
| `TextObjectType` | ✓ | |  | `tdid` | `CHAR(4)` | Text ID |
| `TextObjectCategory` | ✓ | |  | `tdobject` | `CHAR(10)` | Texts: application object |
| `_TextObjectTypeText` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectTypeText` | `I_TextObjectTypeText` | [0..*] |
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TextObjectType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ITEXTOBJECTTYPE'
@EndUserText.label: 'Text Object Type'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_TextObjectType
  as select from ttxid

  association [0..*] to I_TextObjectTypeText as _TextObjectTypeText on  $projection.TextObjectType     = _TextObjectTypeText.TextObjectType
                                                                    and $projection.TextObjectCategory = _TextObjectTypeText.TextObjectCategory

  association [0..1] to I_TextObjectCategory as _TextObjectCategory on  $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
{

      @ObjectModel.text.association: '_TextobjectTypeText'
  key ttxid.tdid     as TextObjectType,
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
  key ttxid.tdobject as TextObjectCategory,
      _TextObjectCategory,
      _TextObjectTypeText


}
```
