---
name: I_SERVICEDOCITEMNOTE
description: "Service DocumentITEMNOTE"
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
  - service
  - note
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMNOTE

**Service DocumentITEMNOTE**

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
| `TextObjectKey` | ✓ | |  |  | `CHAR(70)` | Name |
| `TextObjectType` | ✓ | |  |  | `CHAR(4)` | Text ID |
| `TextObjectCategory` | ✓ | |  |  | `CHAR(10)` | Texts: application object |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ServiceDocumentItemUUID` |  | |  |  | `RAW(16)` | GUID of a CRM Order Object |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created by |
| `CreationDate` |  | |  |  | `DATS(8)` | Date created |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time Created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last changed by |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `ServiceOrderNoteText` |  | | `_inotetemp` | `text` |  |  |
| `_Language` | | ✓ | | | | |
| `_TextObjectCategory` | | ✓ | | | | |
| `_TextObjectType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_inotetemp` | `crms4t_note_temp` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Document Item for Note'
@VDM: {
  viewType:  #COMPOSITE
//  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK


@ObjectModel:{
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType.serviceQuality: #C,
  usageType.sizeCategory : #XL ,
  usageType.dataClass: #TRANSACTIONAL
}

//@Analytics.dataCategory: #DIMENSION

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceDocItemNote
  as select from    P_ServiceItemTextObject //I_TextObject - Note Changes
  //  left outer join crms4t_note_temp as _inotetemp on _inotetemp.id = '????' //this join should never satisfy the join condition. intention is to fetch an empty row with left outer join
 association [0..1] to crms4t_note_temp as _inotetemp on _inotetemp.id = '????'
{

      //I_TextObject
  key TextObjectKey,
  key TextObjectType,
  key TextObjectCategory,
  key Language,
      //hextobin( TextObjectKeyUUID ) as ServiceDocumentItemUUID,
      ServiceDocumentItemUUID,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      _inotetemp.text               as ServiceOrderNoteText,
      /* Associations */
      //I_TextObject
      _Language,
      _TextObjectCategory,
      _TextObjectType

}
where
  Language = $session.system_language
 // and TextObjectType = '0002'
```
