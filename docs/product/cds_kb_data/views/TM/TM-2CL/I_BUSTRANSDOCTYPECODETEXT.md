---
name: I_BUSTRANSDOCTYPECODETEXT
description: "Bustransdoctypecodetext"
semantic_vi: "View I_BUSTRANSDOCTYPECODETEXT cung cấp mô tả văn bản của các loại tài liệu giao dịch kinh doanh trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị tên loại tài liệu trong giao diện người dùng."
keywords:
  - "business transaction"
  - "document type"
  - "text description"
  - "language"
  - "interface"
  - "document type name"
  - "business transaction document type"
  - "tm-2cl"
  - "sap cds view"
  - "tài liệu giao dịch"
  - "loại tài liệu"
  - "mô tả văn bản"
semantic_en: "The I_BUSTRANSDOCTYPECODETEXT view provides text descriptions of business transaction document types in different languages, which can be used to display document type names in a user interface."
app_component: TM-2CL
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
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_BUSTRANSDOCTYPECODETEXT

**Bustransdoctypecodetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
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
| `BusinessTransactionDocType` | ✓ | |  | `btd_tco129` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessTransactionDocTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_BusinessTransactionDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label:                'Business Trans Doc Type Code - Text'}
@Analytics:     {dataExtraction:       {enabled: true},
                 internalName:         #LOCAL}
@ObjectModel:   {representativeKey:    'BusinessTransactionDocType',
                 dataCategory:         #TEXT,
                 usageType:            { serviceQuality: #A,
                                         sizeCategory:   #M,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:      #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IBTDTYPETEXT'
@VDM:           {viewType:               #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck:   #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_BusTransDocTypeCodeText
  as select from /scmtms/c_btdtyt
  association        to parent I_BusTransDocTypeCode as _BusinessTransactionDocType on $projection.BusinessTransactionDocType = _BusinessTransactionDocType.BusinessTransactionDocType //----
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      //      @ObjectModel.foreignKey.association: '_BusTransDocTypeCode'
  key btd_tco129  as BusinessTransactionDocType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      @Semantics.text
      description as BusinessTransactionDocTypeName,

      /* Associations */
      //      _BusinessTransactionDocType,  //---
      _Language,
      _BusinessTransactionDocType
}
```
