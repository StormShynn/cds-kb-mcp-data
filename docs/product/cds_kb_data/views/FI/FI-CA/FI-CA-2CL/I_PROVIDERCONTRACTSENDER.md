---
name: I_PROVIDERCONTRACTSENDER
description: "Providercontractsender"
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
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTSENDER

**Providercontractsender**

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
| `CAProviderContractSender` | ✓ | |  | `sender` | `CHAR(3)` | Provider Contract Sender |
| `CAProviderContractSenderCat` |  | |  | `sendercat` | `CHAR(1)` | Provider Contract Sender Category |
| `ExternalNumberRangeInterval` |  | |  | `cast(nrext as nrext_vt_kk preserving type )` | `CHAR(2)` | Number Range Interval for External Contract Numbers |
| `InternalNumberRangeInterval` |  | |  | `cast(nrint as nrint_vt_kk preserving type )` | `CHAR(2)` | Number Range Interval for Internal Contract Numbers |
| `_Text` | | ✓ | | | | |
| `_SenderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractSenderText` | [0..*] |
| `_SenderCategory` | `I_ProviderContractSenderCat` | [1] |

## Source Code

```abap
@AbapCatalog.dataMaintenance: #RESTRICTED

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Sender'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractSender',
                sapObjectNodeType.name: 'ProviderContractSender',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractSender
  as select from tfk_vt_sender

  association [0..*] to I_ProviderContractSenderText as _Text           on $projection.CAProviderContractSender = _Text.CAProviderContractSender
  association [1]    to I_ProviderContractSenderCat  as _SenderCategory on $projection.CAProviderContractSenderCat = _SenderCategory.CAProviderContractSenderCat

{
      @ObjectModel.text.association: '_Text'
  key sender                                      as CAProviderContractSender,

      @ObjectModel.foreignKey.association: '_SenderCategory'  
      sendercat                                   as CAProviderContractSenderCat,
      cast(nrext as nrext_vt_kk preserving type ) as ExternalNumberRangeInterval,
      cast(nrint as nrint_vt_kk preserving type ) as InternalNumberRangeInterval,

      /* Associations */
      _SenderCategory,
      _Text
}
```
