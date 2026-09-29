---
name: I_CONTRACTACCOUNTHEADERSTDVH
description: "Contractaccountheaderstdvh"
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
  - value-help
  - standard-value-help
  - contract
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTHEADERSTDVH

**Contractaccountheaderstdvh**

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
| `ContractAccount` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `ContractAccountName` |  | |  |  | `CHAR(35)` | Contract Account Name |
| `ContractAccountCategory` |  | |  |  | `CHAR(2)` | Contract Account Category |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Consumption.ranked: true

@EndUserText.label: 'Contract Account Header'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'ContractAccount',
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #XL } }

@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view entity I_ContractAccountHeaderStdVH 
  as select from I_ContractAccountHeader {
  
  @ObjectModel.text.element: ['ContractAccountName']
  @EndUserText.label: 'Contract Account'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key ContractAccount,

  @EndUserText.label: 'Description'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  @Semantics.text: true
  ContractAccountName,

  @EndUserText.label: 'Category'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  ContractAccountCategory
}
```
