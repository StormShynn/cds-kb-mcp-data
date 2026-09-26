---
name: I_CACORRESPONDENCETYPE
description: "Cacorrespondencetype"
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
# I_CACORRESPONDENCETYPE

**Cacorrespondencetype**

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
| `CACorrespondenceType` | ✓ | |  | `cotyp` | `CHAR(4)` | Correspondence Type |
| `CAApplicationArea` |  | |  | `cast( left( applk, 1 ) as applk_kk preserving type )` | `CHAR(1)` | Application Area |
| `CAPeriodicCorrespondence` |  | |  | `cotrg` | `CHAR(1)` | Periodic Correspondence |
| `IsInboundCorrespondence` |  | |  | `incorr` | `CHAR(1)` | FI-CA Correspondence: Inbound Correspondence Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACorrespondenceTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Correspondence Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACorrespondenceType',
                sapObjectNodeType.name: 'ContrAcctgCorrespondenceType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACorrespondenceType
  as select from tfk070a

  association [0..*] to I_CACorrespondenceTypeText as _Text on $projection.CACorrespondenceType = _Text.CACorrespondenceType

{
      @ObjectModel.text.association: '_Text'
  key cotyp                                                as CACorrespondenceType,

      cast( left( applk, 1 ) as applk_kk preserving type ) as CAApplicationArea,
      //      eve_pcc,
      //      eve_ccc,
      //      entid1,
      //      entid2,
      //      entid3,
      //      entid4,
      cotrg                                                as CAPeriodicCorrespondence,
      //      gapsok,
      //      sup_for_no_items,
      incorr                                               as IsInboundCorrespondence,
      //      x_no_rec_simu,
      //      x_no_alt_rec,
      //      x_no_add_rec,
      //      x_no_balance,
      //      x_no_testprint,
      //      x_no_repeatprint,
      //      event_concept,
      //      bte_applk,
      //      bte_namespace,
      //      bte_create,
      //      bte_print,
      //      arc_struct,
      //      bte_unpack,
      //      badi_exit_def,
      //      badi_create,
      //      badi_print,
      //      badi_unpack,
      //      enh_badi_id

      _Text
}
```
