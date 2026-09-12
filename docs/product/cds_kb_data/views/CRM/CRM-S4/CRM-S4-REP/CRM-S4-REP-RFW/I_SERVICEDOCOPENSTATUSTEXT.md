---
name: I_SERVICEDOCOPENSTATUSTEXT
description: "Service DocumentOPENSTATUSTEXT"
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
  - service
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCOPENSTATUSTEXT

**Service DocumentOPENSTATUSTEXT**

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
| `ServiceDocumentIsOpen` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ServiceDocumentIsOpenName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_ServiceDocOpenStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocOpenStatus` | `I_ServiceDocOpenStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISERVDOCOPNSTATX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Open Status of Srvc Transaction - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ServiceDocumentIsOpen'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocOpenStatusText
  as select from dd07t
  association [1..1] to I_ServiceDocOpenStatus as _ServiceDocOpenStatus on $projection.ServiceDocumentIsOpen = _ServiceDocOpenStatus.ServiceDocumentIsOpen
  association [0..1] to I_Language             as _Language             on _Language.Language = $projection.Language
{

      @ObjectModel.foreignKey.association: '_ServiceDocOpenStatus'
  key domvalue_l     as ServiceDocumentIsOpen,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage     as Language,
      @Semantics.text: true
      ddtext         as ServiceDocumentIsOpenName,

      _ServiceDocOpenStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_OPEN'
  and as4local = 'A'
```
