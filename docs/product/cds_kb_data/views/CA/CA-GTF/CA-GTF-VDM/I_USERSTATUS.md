---
name: I_USERSTATUS
description: "Userstatus"
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
# I_USERSTATUS

**Userstatus**

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
| `UserStatus` | ✓ | |  | `estat` | `CHAR(5)` | User Status |
| `StatusProfile` | ✓ | |  | `stsma` | `CHAR(8)` | Status Profile |
| `StatusAuthorizationKey` |  | |  | `bersl` | `CHAR(8)` | Authorization key |
| `StatusSequenceNumber` |  | |  | `stonr` | `NUMC(2)` | Status Order Number |
| `StatusDisplayPosition` |  | |  | `linep` | `NUMC(2)` | Position of the status in the status display |
| `StatusDisplayPriority` |  | |  | `statp` | `NUMC(2)` | Status display priority at a particular position |
| `_UserStatusText` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserStatusText` | `I_UserStatusText` | [0..*] |
| `_StatusProfile` | `I_StatusProfile` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'UserStatus'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@AbapCatalog.sqlViewName: 'IUSERSTATUS'
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'User Status'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_UserStatus as select from tj30

association [0..*] to I_UserStatusText as _UserStatusText
  on  $projection.UserStatus    = _UserStatusText.UserStatus
  and $projection.StatusProfile = _UserStatusText.StatusProfile

association [0..1] to    I_StatusProfile as _StatusProfile
  on $projection.StatusProfile = _StatusProfile.StatusProfile
{
  @ObjectModel.text.association: '_UserStatusText'
  key tj30.estat as UserStatus,
  
  @ObjectModel.foreignKey.association: '_StatusProfile'
  key tj30.stsma  as StatusProfile,

  tj30.bersl as StatusAuthorizationKey,

  tj30.stonr as StatusSequenceNumber,
  
  tj30.linep as StatusDisplayPosition,
  
  tj30.statp as StatusDisplayPriority ,

  _UserStatusText,
  _StatusProfile

}
```
