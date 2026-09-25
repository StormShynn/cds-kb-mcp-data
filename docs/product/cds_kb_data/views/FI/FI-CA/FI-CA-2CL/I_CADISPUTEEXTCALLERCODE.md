---
name: I_CADISPUTEEXTCALLERCODE
description: "Cadisputeextcallercode"
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
  - dispute
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADISPUTEEXTCALLERCODE

**Cadisputeextcallercode**

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
| `CADisputeExternalCallerCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 3 ) as calld_kk preserving type )` | `CHAR(3)` | Identification of External Caller for Dispute Case |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADisputeExtCallerCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dispute External Caller Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADisputeExternalCallerCode',
                sapObjectNodeType.name: 'ContrAcctgDisputeExtCallerCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
@VDM.viewType: #BASIC

define view entity I_CADisputeExtCallerCode
  as select from dd07l

  association [1..*] to I_CADisputeExtCallerCodeText as _Text on $projection.CADisputeExternalCallerCode = _Text.CADisputeExternalCallerCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 3 ) as calld_kk preserving type ) as CADisputeExternalCallerCode,

      _Text
}
where
      domname  = 'CALLD_KK'
  and as4local = 'A'
```
