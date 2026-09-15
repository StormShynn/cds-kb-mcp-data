---
name: I_SRVCCANCLNPROCEDURETEXT
description: "Srvccanclnproceduretext"
app_component: CRM-S4-REP-RFW
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCCANCLNPROCEDURETEXT

**Srvccanclnproceduretext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `SrvcCanclnProcedure` | ✓ | |  | `cancproc` | `CHAR(4)` | Cancellation Procedure |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key of Description |
| `SrvcCanclnProcedureText` |  | |  | `cancproc_t` | `CHAR(40)` | Description (40 Characters) |
| `_SrvcCanclnProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcCanclnProcedure` | `I_SrvcCanclnProcedure` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Procedure - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCPROCTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcCanclnProcedure',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcCanclnProcedureText
  as select from crmc_cancproc_t
  association [1]    to I_SrvcCanclnProcedure as _SrvcCanclnProcedure on $projection.SrvcCanclnProcedure = _SrvcCanclnProcedure.SrvcCanclnProcedure
  association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcCanclnProcedure'
  key cancproc   as SrvcCanclnProcedure,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,
      @Semantics.text: true
      cancproc_t as SrvcCanclnProcedureText,

      _SrvcCanclnProcedure,
      _Language
}
```
