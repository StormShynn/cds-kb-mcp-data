---
name: I_CAFACTORINGRECEIVABLESTATUS
description: "Cafactoringreceivablestatus"
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
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAFACTORINGRECEIVABLESTATUS

**Cafactoringreceivablestatus**

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
| `CACurrentFactoringStatusOfRbl` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as fasta_kk preserving type )` | `CHAR(1)` | Factoring: Current Status of Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAFactoringReceivableStatusT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICADFACRCVBLSTS'
             
@EndUserText.label: 'Factoring Receivable Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACurrentFactoringStatusOfRbl',
                sapObjectNodeType.name: 'ContrAcctgFactoringRblStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
                            
@VDM.viewType: #BASIC

define view entity I_CAFactoringReceivableStatus
  as select from dd07l

  association [1..*] to I_CAFactoringReceivableStatusT as _Text on $projection.CACurrentFactoringStatusOfRbl = _Text.CACurrentFactoringStatusOfRbl

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as fasta_kk preserving type ) as CACurrentFactoringStatusOfRbl,

      _Text
}
where
      domname  = 'FASTA_KK'
  and as4local = 'A'
```
