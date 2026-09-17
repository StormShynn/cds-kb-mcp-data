---
name: I_SRVCDOCEXECUTIONSTATUSTEXT
description: "Srvcdocexecutionstatustext"
app_component: CRM-S4-SRV-SVO-2CL
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCEXECUTIONSTATUSTEXT

**Srvcdocexecutionstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
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
| `ServiceDocumentIsQuotation` | ✓ | |  | `stat_quotation` | `CHAR(1)` | Quotation Status |
| `SrvcDocExecutionStatus` | ✓ | |  | `stat_execution` | `CHAR(2)` | Execution Status |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SrvcDocExecutionStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocExecutionStatus` | `I_SrvcDocExecutionStatus` | [1..1] |
| `_SrvcDocIsQuotation` | `I_Indicator` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transact Execution Status - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SrvcDocExecutionStatus',
    usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING},
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Analytics: {
    technicalName: 'ISRVCDOCEXCSTTXT',
    dataExtraction.enabled: true
}

@Search:
{ searchable: true }

@Metadata: {
    ignorePropagatedAnnotations: true
}
define view entity I_SrvcDocExecutionStatusText
  as select from           crms4c_stat_exec

    left outer to one join dd07t on crms4c_stat_exec.stat_execution = dd07t.domvalue_l

  association [1..1] to I_SrvcDocExecutionStatus as _SrvcDocExecutionStatus on  crms4c_stat_exec.stat_execution = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                            and crms4c_stat_exec.stat_quotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association [1..1] to I_Indicator              as _SrvcDocIsQuotation     on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.IndicatorValue

  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation'
      @Semantics.booleanIndicator
  key crms4c_stat_exec.stat_quotation                   as ServiceDocumentIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
  key crms4c_stat_exec.stat_execution                   as SrvcDocExecutionStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,


      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as SrvcDocExecutionStatusText,
      _SrvcDocExecutionStatus,
      _SrvcDocIsQuotation,
      _Language

}

where
      dd07t.domname  = 'CRMS4_STAT_MAINTENANCE'
  and dd07t.as4local = 'A'
```
