---
name: I_SRVCDOCHEADERLONGTEXT
description: "Srvcdocheaderlongtext"
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - text-view
  - text
  - header-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCHEADERLONGTEXT

**Srvcdocheaderlongtext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `ServiceDocumentLongTextUUID` | ✓ | |  | `text_uuid` | `RAW(16)` | UUID in X form (binary) |
| `TextObjectCategory` |  | |  | `text_object` | `CHAR(10)` | Texts: application object |
| `TextObjectType` |  | |  | `text_id` | `CHAR(4)` | Text ID |
| `Language` |  | |  | `language` | `LANG(1)` | Language Key |
| `ServiceObjectType` |  | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `ServiceDocument` |  | |  | `object_id` | `CHAR(10)` | Transaction ID |
| `ServiceDocumentLongText` |  | |  | `text_content` |  |  |
| `SrvcDocLongTextMimeType` |  | |  | `mimetype` | `CHAR(127)` | MIME Type |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TextObjectCategory` | `I_TextObjectCategory` | [1..1] |
| `_TextObjectType` | `I_TextObjectType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ESH Long text search'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_SrvcDocHeaderLongText as select from crms4d_text as ServiceDocumentText
  association [1..1] to I_TextObjectCategory as _TextObjectCategory on  $projection.TextObjectCategory = _TextObjectCategory.TextObjectCategory
  association [1..1] to I_TextObjectType     as _TextObjectType     on  $projection.TextObjectCategory = _TextObjectType.TextObjectCategory
                                                                    and $projection.TextObjectType     = _TextObjectType.TextObjectType
  association [1..1] to I_Language           as _Language           on  $projection.Language = _Language.Language
  association [1..1] to I_CustMgmtBusObjType as _ServiceObjType     on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType
{
  key ServiceDocumentText.text_uuid    as ServiceDocumentLongTextUUID,
      @ObjectModel.foreignKey.association: '_TextObjectCategory'
      ServiceDocumentText.text_object  as TextObjectCategory,
      @ObjectModel.foreignKey.association: '_TextObjectType'
      ServiceDocumentText.text_id      as TextObjectType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
      ServiceDocumentText.language     as Language,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceDocumentText.objtype_h    as ServiceObjectType,
      ServiceDocumentText.object_id    as ServiceDocument,
      @EndUserText: { label: 'Long Text', quickInfo: 'Long Text' }
      ServiceDocumentText.text_content as ServiceDocumentLongText,
      ServiceDocumentText.mimetype     as SrvcDocLongTextMimeType,

      _TextObjectCategory,
      _TextObjectType,
      _Language,
      _ServiceObjType
}
where
  ServiceDocumentText.text_object = 'CRM_ORDERH'
```
