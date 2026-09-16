---
name: I_SRVCSEPAMANDATERELEVANCETEXT
description: "Srvcsepamandaterelevancetext"
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
# I_SRVCSEPAMANDATERELEVANCETEXT

**Srvcsepamandaterelevancetext**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SrvcSEPAMandateRelevance` | ✓ | |  | `cast(domvalue_l as crm_sepa_on)` | `CHAR(1)` | Sepa : Mandate Relevance for Service |
| `SrvcSEPAMandateRelevanceText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEPASRVRELTEXT'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Service SEPA Mandate Relevance - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcSEPAMandateRelevance',  
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics: {
    dataExtraction.enabled: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_SrvcSEPAMandateRelevanceText
  as select from dd07t
  association [1..1] to I_SrvcSEPAMandateRelevance as _SrvcSEPAMandateRelevance on $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                 as Language,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
  key cast(domvalue_l  as crm_sepa_on) as SrvcSEPAMandateRelevance,

      @Semantics.text: true
      ddtext                           as SrvcSEPAMandateRelevanceText,

      _SrvcSEPAMandateRelevance,
      _Language
}
where
      dd07t.domname  = 'CRM_SEPA_ON'
  and dd07t.as4local = 'A'
```
