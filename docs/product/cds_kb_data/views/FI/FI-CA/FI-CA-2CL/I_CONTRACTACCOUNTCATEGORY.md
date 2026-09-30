---
name: I_CONTRACTACCOUNTCATEGORY
description: "Contractaccountcategory"
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
# I_CONTRACTACCOUNTCATEGORY

**Contractaccountcategory**

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
| `ContractAccountCategory` | ✓ | |  | `vktyp` | `CHAR(2)` | Contract Account Category |
| `CAApplicationArea` | ✓ | |  | `applk` | `CHAR(1)` | Application Area |
| `CAOnlyOneBPIsAllowed` |  | |  | `xgein` | `CHAR(1)` | Only One Business Partner Allowed |
| `CAOnlyOneContractIsAllowed` |  | |  | `xvein` | `CHAR(1)` | Only One Contract Permitted |
| `CAIsCollectiveBillAccount` |  | |  | `samrg` | `CHAR(1)` | Contract Account is Collective Bill Account |
| `CAIsOneTimeAccount` |  | |  | `cpd` | `CHAR(1)` | Multiple contract account holders possible |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_Text` | `I_ContractAccountCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Contract Account Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'ContractAccountCategory',
                sapObjectNodeType.name: 'ContractAccountCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ContractAccountCategory
  as select from tfk002a

  association [1..1] to I_CAApplicationArea           as _CAApplicationArea on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..*] to I_ContractAccountCategoryText as _Text              on  $projection.ContractAccountCategory = _Text.ContractAccountCategory
                                                                            and $projection.CAApplicationArea       = _Text.CAApplicationArea
{
      @ObjectModel.text.association: '_Text'
  key vktyp as ContractAccountCategory,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk as CAApplicationArea,

      xgein as CAOnlyOneBPIsAllowed,
      xvein as CAOnlyOneContractIsAllowed,
      samrg as CAIsCollectiveBillAccount,
      cpd   as CAIsOneTimeAccount,

      /* associations */
      _CAApplicationArea,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
where
  applk = 'C'
```
