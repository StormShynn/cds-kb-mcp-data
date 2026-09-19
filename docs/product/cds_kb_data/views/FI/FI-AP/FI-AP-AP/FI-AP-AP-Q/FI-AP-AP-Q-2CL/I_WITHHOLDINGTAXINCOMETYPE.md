---
name: I_WITHHOLDINGTAXINCOMETYPE
description: "Withholdingtaxincometype"
app_component: FI-AP-AP-Q-2CL
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
  - FI-AP
  - FI-AP-AP
  - interface-view
  - tax
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXINCOMETYPE

**Withholdingtaxincometype**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-Q-2CL` |
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
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `WithholdingTaxIncomeType` | ✓ | |  | `qekar` | `CHAR(4)` | Income Type |
| `_Country` | | ✓ | | | | |
| `_IncomeTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_IncomeTypeText` | `I_WithholdingTaxIncomeTypeText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWINCOMET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Withholding Tax Income Type'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.representativeKey: 'WithholdingTaxIncomeType'
@Metadata.ignorePropagatedAnnotations: true
define view I_WithholdingTaxIncomeType
  as select from t059e
  association [1..1] to I_Country                      as _Country        on  $projection.Country = _Country.Country
  association [1..*] to I_WithholdingTaxIncomeTypeText as _IncomeTypeText on  $projection.WithholdingTaxIncomeType = _IncomeTypeText.WithholdingTaxIncomeType
                                                                          and $projection.Country                  = _IncomeTypeText.Country
{
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key t059e.land1 as Country,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_IncomeTypeText'
  key t059e.qekar as WithholdingTaxIncomeType,

      _Country,
      _IncomeTypeText
}
```
