---
name: I_CAINVCGACCRUALPOSTINGTYPETXT
description: "Cainvcgaccrualpostingtypetxt"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGACCRUALPOSTINGTYPETXT

**Cainvcgaccrualpostingtypetxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvcgAccrualPostingType` | ✓ | |  | `cast( tfk2715t.billac_type as billac_type_gfn_kk preserving type )` | `CHAR(4)` | Type of Accrual/Deferral Posting |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CAInvcgAccrualPostingTypeTxt` |  | |  | `cast( tfk2715t.text as billac_type_txt_gfn_kk preserving type )` | `CHAR(50)` | Text for Type of Accrual/Deferral Posting |
| `_Language` | | ✓ | | | | |
| `_CAInvcgAccrualPostingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICA2715T'
@EndUserText.label: 'Art der Abgr.buchung - indv. Verf. (Txt)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgAccrualPostingType',
  sapObjectNodeType.name: 'CAInvcgAccrualPostingTypeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgAccrualPostingTypeTxt
  as select from tfk2715t

  association        to parent I_CAInvcgAccrualPostingType as _CAInvcgAccrualPostingType on $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
      @ObjectModel.text.element: ['CAInvcgAccrualPostingTypeTxt']
  key cast( tfk2715t.billac_type as billac_type_gfn_kk preserving type ) as CAInvcgAccrualPostingType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tfk2715t.langu       as Language,

      @Semantics.text: true
      cast( tfk2715t.text as billac_type_txt_gfn_kk preserving type )       as CAInvcgAccrualPostingTypeTxt,
      
      _CAInvcgAccrualPostingType,
      _Language
}
```
