---
name: I_TEXTOBJECTTYPETEXT
description: "Textobjecttypetext"
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
  - text-view
  - text
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_TEXTOBJECTTYPETEXT

**Textobjecttypetext**

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
| `TextObjectCategory` | ✓ | |  | `tdobject` | `CHAR(10)` | Texts: application object |
| `TextObjectType` | ✓ | |  | `tdid` | `CHAR(4)` | Text ID |
| `Language` | ✓ | |  | `tdspras` | `LANG(1)` | Language Key |
| `TextObjectTypeName` |  | |  | `tdtext` | `CHAR(30)` | Short Text |
| `_TextObjectCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectCategory` | `I_TextObjectCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_TextObjectType` | `I_TextObjectType` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TextObjectType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'ITXTOBJECTTYPTXT'
@EndUserText.label: 'Text Object Type - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]

define view I_TextObjectTypeText as select from ttxit  
association [0..1] to I_TextObjectCategory as _TextObjectCategory on
    $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
association [0..1] to I_Language as _Language on
    $projection.Language = _Language.Language  
association [0..1] to I_TextObjectType as _TextObjectType on 
    $projection.TextObjectType = _TextObjectType.TextObjectType and
    $projection.TextObjectCategory = _TextObjectType.TextObjectCategory

{
  @ObjectModel.foreignKey.association: '_TextObjectCategory'
  key ttxit.tdobject as TextObjectCategory, 
 
@ObjectModel.foreignKey.association: '_TextObjectType' 
  key ttxit.tdid as TextObjectType, 
  
  @Semantics.language: true
@ObjectModel.foreignKey.association: '_Language'
  key ttxit.tdspras as Language, 
  @Semantics.text: true
  ttxit.tdtext as TextObjectTypeName,
  
  _TextObjectType,
  _TextObjectCategory,
  _Language 
}
```
