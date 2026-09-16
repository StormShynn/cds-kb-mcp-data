---
name: I_SRVCDOCCREDITSTATUSTEXT
description: "Srvcdoccreditstatustext"
app_component: CRM-S4-BF-CM-2CL
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
  - CRM
  - interface-view
  - text-view
  - text
  - status
  - credit
  - component:CRM-S4-BF-CM-2CL
  - lob:Other
---
# I_SRVCDOCCREDITSTATUSTEXT

**Srvcdoccreditstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BF-CM-2CL` |
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
| `SrvcDocCreditStatus` | ✓ | |  | `cast ( domvalue_l as crms4_stat_credit_h )` | `CHAR(1)` | Credit Status of Header |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SrvcDocCreditStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SrvcDocCreditStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocCreditStatus` | `I_SrvcDocCreditStatus` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Credit Status of Service Trans - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SrvcDocCreditStatus',
    usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING},
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Search.searchable: true
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'ISERVCRDTSTSTEXT',
    compiler.compareFilter: true,
    preserveKey: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK"] }*/
define view I_SrvcDocCreditStatusText
  as select from dd07t

  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] }*/
  association [1..1] to I_SrvcDocCreditStatus as _SrvcDocCreditStatus on $projection.SrvcDocCreditStatus = _SrvcDocCreditStatus.SrvcDocCreditStatus
  association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcDocCreditStatus'
  key cast ( domvalue_l as crms4_stat_credit_h )  as SrvcDocCreditStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type ) as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      ddtext                                      as SrvcDocCreditStatusText,
      _SrvcDocCreditStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_CREDIT_H'
  and as4local = 'A'
```
