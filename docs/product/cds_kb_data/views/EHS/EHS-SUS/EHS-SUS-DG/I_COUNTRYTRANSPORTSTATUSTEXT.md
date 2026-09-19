---
name: I_COUNTRYTRANSPORTSTATUSTEXT
description: "Countrytransportstatustext"
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - interface-view
  - text-view
  - transport
  - country
  - text
  - status
  - component:EHS-SUS-DG
  - lob:Other
---
# I_COUNTRYTRANSPORTSTATUSTEXT

**Countrytransportstatustext**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CountryTransportStatus` | ✓ | |  | `cast( left(dd07t.domvalue_l, 2) as ehdgm_country_transport_status preserving type )` | `CHAR(2)` | Transport Status for Countries |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CountryTransportStatusName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Country/Region Transport Status - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CountryTransportStatus'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ICNTRYTRNSSTATT'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
// used for BOBF Master Data Object
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType:{ serviceQuality: #A,        // < 15 msec
                         sizeCategory:  #S,         // < 1.000
                         dataClass: #META }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CountryTransportStatusText as select from dd07t
    association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( left(dd07t.domvalue_l, 2) as ehdgm_country_transport_status preserving type ) as CountryTransportStatus,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key dd07t.ddlanguage as Language,
    @Semantics.text:true
    dd07t.ddtext as CountryTransportStatusName,
        
    _Language
}
where dd07t.domname  = 'EHDGM_COUNTRY_TRANSPORT_STATUS'
  and dd07t.as4local = 'A'
```
