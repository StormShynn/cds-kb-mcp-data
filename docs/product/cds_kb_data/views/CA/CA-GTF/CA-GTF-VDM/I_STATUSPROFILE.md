---
name: I_STATUSPROFILE
description: "Statusprofile"
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
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_STATUSPROFILE

**Statusprofile**

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
| `MasterLanguage` |  | |  | `pflsp` | `LANG(1)` | Maintenance Language |
| `_StatusProfileText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatusProfileText` | `I_StatusProfiletext` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'StatusProfile'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #L 
@AbapCatalog.sqlViewName: 'ISTATUSPROFILE'
@EndUserText.label: 'Status Profile'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'StatusProfile'
//Commented by VDM CDS Suite Plugin:
define view I_StatusProfile as select from tj20
association [0..*] to I_StatusProfiletext as _StatusProfileText on
  $projection.StatusProfile = _StatusProfileText.StatusProfile
association [0..1] to I_Language as _Language on
   $projection.MasterLanguage = _Language.Language
 { 

  @ObjectModel.text.association: '_StatusProfileText'
  key tj20.stsma as StatusProfile,
  @ObjectModel.foreignKey.association: '_Language'
  tj20.pflsp as MasterLanguage,
  _StatusProfileText,
  _Language
}
```
