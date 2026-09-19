---
name: I_CHMLCMPLNCIDFR
description: "Chmlcmplncidfr"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_CHMLCMPLNCIDFR

**Chmlcmplncidfr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncIdfrUUID` | ✓ | |  | `chmlcmplncidfruuid` | `RAW(16)` | Primary Key of an Identifier |
| `CreationUTCDateTime` |  | |  | `creationutcdatetime` | `DEC(21)` | Creation Date Time |
| `CreatedByUser` |  | |  | `createdbyuser` | `CHAR(12)` | Created By User |
| `LastChangeUTCDateTime` |  | |  | `lastchangeutcdatetime` | `DEC(21)` | Last Change Date Time |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | Last Changed By User |
| `ChmlCmplncIdfrParentID` |  | |  | `cast( chmlcmplncidfrparentid as ehfnd_internal_nr_nc preserving type )` | `CHAR(12)` | Internal Number |
| `ChmlCmplncIdfrParentUUID` |  | |  | `chmlcmplncidfrparentuuid` | `RAW(16)` | UUID of the Parent Object |
| `ChmlCmplncIdfrParentType` |  | |  | `chmlcmplncidfrparenttype` | `CHAR(3)` | Identifier Parent Type |
| `ChmlCmplncIdfrProcgStatus` |  | |  | `chmlcmplncidfrprocgstatus` | `CHAR(2)` | Identifier Processing Status |
| `ChmlCmplncIdfrProcessor` |  | |  | `chmlcmplncidfrprocessor` | `CHAR(10)` | Identifier Processor |
| `ChmlCmplncIdfrReldByUser` |  | |  | `chmlcmplncidfrreldbyuser` | `CHAR(10)` | Identifier Released By |
| `ValidityStartDateTime` |  | |  | `validitystartdatetime` | `DEC(15)` | Valid-From Date Time Stamp |
| `ValidityEndDateTime` |  | |  | `validityenddatetime` | `DEC(15)` | Valid-To Date Time Stamp |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ChmlCmplncInfo` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_ReleasedByUser` | | ✓ | | | | |
| `_ChmlCmplncIdfrValue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ChmlCmplncInfo` | `I_ChmlCmplncInfo` | [0..1] |
| `_Processor` | `I_BusinessUserBasic` | [0..1] |
| `_ReleasedByUser` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Chemical Compliance Identifier'

@AccessControl:{
  authorizationCheck: #MANDATORY,
  // set not_required because admin data fields do not count as personal data and releasedby/processor point to the user
  // and it's not possible to block users
  personalData.blocking: #NOT_REQUIRED,
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser' ]
}

@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #NONE,
  semanticKey: ['ChmlCmplncIdfrUUID'],
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}
define root view entity I_ChmlCmplncIdfr
  as select from ehfndd_ccidfr
  composition [0..*] of I_ChmlCmplncIdfrValue as _ChmlCmplncIdfrValue

  association [0..1] to I_User                as _CreatedByUser     on _CreatedByUser.UserID = $projection.CreatedByUser
  association [0..1] to I_User                as _LastChangedByUser on _LastChangedByUser.UserID = $projection.LastChangedByUser
  association [0..1] to I_ChmlCmplncInfo      as _ChmlCmplncInfo    on _ChmlCmplncInfo.ChmlCmplncInfoUUID = $projection.ChmlCmplncIdfrParentUUID
  association [0..1] to I_BusinessUserBasic   as _Processor         on _Processor.BusinessPartner = $projection.ChmlCmplncIdfrProcessor
  association [0..1] to I_BusinessUserBasic   as _ReleasedByUser    on _ReleasedByUser.BusinessPartner = $projection.ChmlCmplncIdfrReldByUser

{
  key chmlcmplncidfruuid        as ChmlCmplncIdfrUUID,

      @Semantics.systemDateTime.createdAt: true
      creationutcdatetime       as CreationUTCDateTime,

      @Semantics.user.createdBy: true
      createdbyuser             as CreatedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      lastchangeutcdatetime     as LastChangeUTCDateTime,

      @Semantics.user.lastChangedBy: true
      lastchangedbyuser         as LastChangedByUser,

      cast( chmlcmplncidfrparentid as ehfnd_internal_nr_nc preserving type ) as ChmlCmplncIdfrParentID,
      chmlcmplncidfrparentuuid  as ChmlCmplncIdfrParentUUID,
      chmlcmplncidfrparenttype  as ChmlCmplncIdfrParentType,

      chmlcmplncidfrprocgstatus as ChmlCmplncIdfrProcgStatus,
      chmlcmplncidfrprocessor   as ChmlCmplncIdfrProcessor,
      
      chmlcmplncidfrreldbyuser  as ChmlCmplncIdfrReldByUser,
      validitystartdatetime     as ValidityStartDateTime,
      validityenddatetime       as ValidityEndDateTime,

      /* Associations */
      _ChmlCmplncIdfrValue,
      _CreatedByUser,
      _LastChangedByUser,
      _Processor,
      _ReleasedByUser,
      _ChmlCmplncInfo      
}
```
