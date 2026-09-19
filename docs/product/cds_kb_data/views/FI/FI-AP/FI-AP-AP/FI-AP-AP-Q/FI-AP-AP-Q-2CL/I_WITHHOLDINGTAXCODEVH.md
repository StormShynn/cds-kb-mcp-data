---
name: I_WITHHOLDINGTAXCODEVH
description: "Withholdingtaxcodevh"
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
  - value-help
  - tax
  - component:FI-AP-AP-Q-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXCODEVH

**Withholdingtaxcodevh**

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
| `Country` | ✓ | |  |  | `CHAR(3)` | Country/Region Key |
| `WithholdingTaxType` | ✓ | |  |  | `CHAR(2)` | Indicator for Withholding Tax Type |
| `WithholdingTaxCode` | ✓ | |  |  | `CHAR(2)` | Withholding Tax Code |
| `OfficialWhldgTaxCode` |  | |  |  | `CHAR(4)` | Official Withholding Tax Key |
| `WhldgTaxRelevantPercent` |  | |  |  | `DEC(5)` | Percentage Subject to Withholding Tax |
| `WithholdingTaxPercent` |  | |  |  | `DEC(7)` | Withholding Tax Rate |
| `WhldgTaxCalcFormulaIsUsed` |  | |  |  | `CHAR(1)` | Indicator: Calculate Withholding Tax According to Formula? |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ProvincialTaxCode` |  | |  |  | `CHAR(3)` | Provincial Tax Code |
| `WithholdingTaxIncomeType` |  | |  |  | `CHAR(4)` | Income Type |
| `WithholdingTaxPostingRule` |  | |  |  | `CHAR(1)` | Posting Indicator |
| `WhldgTaxReferenceText` |  | |  |  | `CHAR(16)` | Withholding Tax Key |
| `_Country` | | ✓ | | | | |
| `_TaxCodeText` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_IncomeTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_TaxCodeText` | `I_ExtendedWhldgTaxCodeText` | [1..*] |
| `_RegionText` | `I_RegionText` | [1..1] |
| `_IncomeTypeText` | `I_WithholdingTaxIncomeTypeText` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWHTCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extended Withholding Tax Code'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: #VALUE_HELP_PROVIDER
@Consumption.ranked: true
@ObjectModel.representativeKey: 'WithholdingTaxCode'
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
define view I_WithholdingTaxCodeVH
  as select from I_Extendedwhldgtaxcode
  association [1]    to I_Country                      as _Country        on  $projection.Country = _Country.Country

  association [1..*] to I_ExtendedWhldgTaxCodeText     as _TaxCodeText    on  $projection.WithholdingTaxType = _TaxCodeText.WithholdingTaxType
                                                                          and $projection.WithholdingTaxCode = _TaxCodeText.WithholdingTaxCode
                                                                          and $projection.Country            = _TaxCodeText.CountryCode
  //  association [1..1] to I_OfficialWithholdingTaxKey    as _TaxKey         on  $projection.Country              = _TaxKey.Country
  //                                                                          and $projection.OfficialWhldgTaxCode = _TaxKey.OfficialWhldgTaxCode
  association [1..1] to I_RegionText                   as _RegionText     on  $projection.Country  = _RegionText.Country
                                                                          and $projection.Region   = _RegionText.Region
                                                                          and _RegionText.Language = $session.system_language
  association [1..1] to I_WithholdingTaxIncomeTypeText as _IncomeTypeText on  $projection.Country                  = _IncomeTypeText.Country
                                                                          and $projection.WithholdingTaxIncomeType = _IncomeTypeText.WithholdingTaxIncomeType
                                                                          and _IncomeTypeText.Language             = $session.system_language
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_Country'
  key Country,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
  key WithholdingTaxType,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @ObjectModel.text.association: '_TaxCodeText'
  key WithholdingTaxCode,
      //      @Semantics.text: true
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.7
      //      @Search.ranking: #LOW
      //      @ObjectModel.foreignKey.association: '_TaxKey'
      OfficialWhldgTaxCode,
      WhldgTaxRelevantPercent,
      WithholdingTaxPercent,
      WhldgTaxCalcFormulaIsUsed,
      @ObjectModel.text.association: '_RegionText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      Region,
      ProvincialTaxCode,
      @ObjectModel.text.association: '_IncomeTypeText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      WithholdingTaxIncomeType,
      WithholdingTaxPostingRule,
      WhldgTaxReferenceText,

      _Country,
      _TaxCodeText,
      //     _TaxKey,
      _RegionText,
      _IncomeTypeText
}
```
