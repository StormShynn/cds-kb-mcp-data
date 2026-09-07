---
name: I_STATUSPROFILETEXT
description: "Statusprofiletext"
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
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_STATUSPROFILETEXT

**Statusprofiletext**

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
| `StatusProfile` | ✓ | |  | `stsma` | `CHAR(8)` | Status Profile |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `StatusProfileName` |  | |  | `txt` | `CHAR(30)` | Text (30 Characters) |
| `_StatusProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatusProfile` | `I_StatusProfile` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'StatusProfile'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #L 
@AbapCatalog.sqlViewName: 'ISTATUSPROFILET'
@EndUserText.label: 'Status Profile - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@AccessControl: {
  authorizationCheck: #CHECK
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]

define view I_StatusProfiletext as select from tj20

left outer join tj20t on 
    tj20.stsma = tj20t.stsma 
  
association [0..1] to I_StatusProfile as _StatusProfile on
    $projection.StatusProfile = _StatusProfile.StatusProfile
    
association [0..1] to I_Language as _Language on 
    $projection.Language = _Language.Language 
    
{
  @ObjectModel.foreignKey.association: '_StatusProfile'
  key tj20.stsma as StatusProfile, 
  
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language' 
  key tj20t.spras as Language, 
  
  @Semantics.text: true
  tj20t.txt as StatusProfileName,
  
  _StatusProfile,
  _Language
  
}
```
