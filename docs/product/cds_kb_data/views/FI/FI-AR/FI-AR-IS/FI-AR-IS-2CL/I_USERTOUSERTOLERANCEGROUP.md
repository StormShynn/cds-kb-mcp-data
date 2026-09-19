---
name: I_USERTOUSERTOLERANCEGROUP
description: "Usertousertolerancegroup"
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_USERTOUSERTOLERANCEGROUP

**Usertousertolerancegroup**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `UserID` | ✓ | |  | `usnam` | `CHAR(12)` | User Name |
| `UserToleranceGroup` |  | |  | `cast( rfpro as fins_rfpro )` | `CHAR(4)` | User Tolerance Group For Financial Accounting |
| `_UserToleranceGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserToleranceGroup` | `I_UserToleranceGroup` | [0..*] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIUSRTOUSRTOLGP',
                   preserveKey:                 true,
                   compiler.compareFilter:      true }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             false }

@ObjectModel:    { modelingPattern: #NONE,
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #S,
                   usageType.dataClass:         #CUSTOMIZING,
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE ]
                   }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@EndUserText:    { label:                       'User Assignment to UserTolGroup in Acctg' }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@Search:         { searchable:                  false }

@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
define view I_UserToUserToleranceGroup
  as select from t043
  association [0..*] to I_UserToleranceGroup as _UserToleranceGroup on _UserToleranceGroup.UserToleranceGroup = $projection.UserToleranceGroup

{
  key usnam                       as UserID,
      cast( rfpro as fins_rfpro ) as UserToleranceGroup,
      _UserToleranceGroup
}
```
