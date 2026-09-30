---
name: I_CATAXSUPPLEMENTSTORAGELOC
description: "Cataxsupplementstorageloc"
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
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CATAXSUPPLEMENTSTORAGELOC

**Cataxsupplementstorageloc**

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
| `CAStorageLocationOfTaxSuplmnt` | ✓ | |  | `cast( left( domvalue_l,2 ) as utloc_ut_kk preserving type )` | `CHAR(2)` | Storage Location of Tax Supplement for Telco Tax (U.S.A) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CATaxSupplementStorageLocT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Tax Supplement Storage Location'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAStorageLocationOfTaxSuplmnt',
                sapObjectNodeType.name: 'ContrAcctgTaxSupplementStorLoc',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CATaxSupplementStorageLoc
  as select from dd07l

  association [1..*] to I_CATaxSupplementStorageLocT as _Text on $projection.CAStorageLocationOfTaxSuplmnt = _Text.CAStorageLocationOfTaxSuplmnt

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l,2 ) as utloc_ut_kk preserving type ) as CAStorageLocationOfTaxSuplmnt,

      _Text
}
where
      domname  = 'UTLOC_UT_KK'
  and as4local = 'A'
```
