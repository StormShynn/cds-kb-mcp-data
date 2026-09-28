---
name: I_CAAUTHORIZATIONGROUP
description: "Caauthorizationgroup"
app_component: FI-CA-2CL
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
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAAUTHORIZATIONGROUP

**Caauthorizationgroup**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAAuthorizationGroupObject` | ✓ | |  | `bgobj` | `CHAR(10)` | Authorization Group Object |
| `CAAuthorizationGroup` | ✓ | |  | `begru` | `CHAR(4)` | Authorization Group |
| `_AuthznGroupObject` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AuthznGroupObject` | `I_CAAuthorizationGroupObject` | [1..1] |
| `_Text` | `I_CAAuthorizationGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Authorization Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAuthorizationGroup',
                sapObjectNodeType.name: 'ContrAcctgAuthorizationGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationGroup
  as select from tfk_begru
  
  association [1..1] to I_CAAuthorizationGroupObject as _AuthznGroupObject on  $projection.CAAuthorizationGroupObject = _AuthznGroupObject.CAAuthorizationGroupObject
  association [0..*] to I_CAAuthorizationGroupText   as _Text              on  $projection.CAAuthorizationGroupObject = _Text.CAAuthorizationGroupObject
                                                                           and $projection.CAAuthorizationGroup       = _Text.CAAuthorizationGroup
{
      @ObjectModel.foreignKey.association: '_AuthznGroupObject'
  key bgobj as CAAuthorizationGroupObject,
      @ObjectModel.text.association: '_Text'
  key begru as CAAuthorizationGroup,

      _AuthznGroupObject,
      _Text
}
```
