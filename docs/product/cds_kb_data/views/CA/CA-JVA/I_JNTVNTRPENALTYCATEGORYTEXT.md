---
name: I_JNTVNTRPENALTYCATEGORYTEXT
description: "Jntvntrpenaltycategorytext"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTRPENALTYCATEGORYTEXT

**Jntvntrpenaltycategorytext**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JntVntrPenaltyCategory` | ✓ | |  | `pencat` | `CHAR(1)` | Penalty Category |
| `JntVntrPenaltyCategoryText` |  | |  | `pctext` | `CHAR(35)` | Penalty Category Text |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_JntVntrPenaltyCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_JntVntrPenaltyCategory` | `I_JntVntrPenaltyCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVPNLTYCATTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JntVntrPenaltyCategory',
   dataCategory: #TEXT,
   usageType: {
       serviceQuality: #A,
       sizeCategory: #S,
       dataClass: #CUSTOMIZING
   }          }
@EndUserText.label: 'Penalty Category in JVA - Text'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE ]

define view I_JntVntrPenaltyCategoryText
  as select from t8jlt
  association [1..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association [1..1] to I_JntVntrPenaltyCategory as _JntVntrPenaltyCategory on  $projection.CompanyCode            = _JntVntrPenaltyCategory.CompanyCode
                                                                            and $projection.JntVntrPenaltyCategory = _JntVntrPenaltyCategory.JntVntrPenaltyCategory
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.foreignKey.association: '_JntVntrPenaltyCategory'
  key pencat as JntVntrPenaltyCategory,
      @Semantics.text
      pctext as JntVntrPenaltyCategoryText,

      _CompanyCode,
      _Language,
      _JntVntrPenaltyCategory

}
```
