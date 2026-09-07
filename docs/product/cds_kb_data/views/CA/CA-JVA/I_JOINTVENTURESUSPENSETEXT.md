---
name: I_JOINTVENTURESUSPENSETEXT
description: "Jointventuresuspensetext"
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
# I_JOINTVENTURESUSPENSETEXT

**Jointventuresuspensetext**

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
| `JntVntrSuspenseStatus` | ✓ | |  | `cast (left(domvalue_l, 1) as jv_suspense_status_cds preserving type)` | `CHAR(1)` | Suspense Status in JVA |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `JntVntrSuspenseStatusText` |  | |  | `cast( ddtext as jv_suspsts_text_cds preserving type )` | `CHAR(60)` | JV Suspense Status Text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVSUSTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  dataCategory:  #TEXT,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY],               
  representativeKey: 'JntVntrSuspenseStatus'
}
@EndUserText.label: 'Joint Venture Suspense - Text'
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_JointVentureSuspenseText
  as select from dd07t
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      //function "left" helps prevent a string truncation warning
      @ObjectModel.text.element: 'JntVntrSuspenseStatusText'
  key cast (left(domvalue_l, 1) as jv_suspense_status_cds preserving type) as  JntVntrSuspenseStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                  as  Language,
      @Semantics.text: true
      cast( ddtext  as jv_suspsts_text_cds preserving type )      as  JntVntrSuspenseStatusText,
      _Language
}
where
      domname  = 'JV_SUSPENSE_STATUS_CDS'
  and as4local = 'A'
```
