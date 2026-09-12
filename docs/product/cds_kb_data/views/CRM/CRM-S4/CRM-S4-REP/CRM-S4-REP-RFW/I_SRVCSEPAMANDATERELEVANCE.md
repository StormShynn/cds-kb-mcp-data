---
name: I_SRVCSEPAMANDATERELEVANCE
description: "Srvcsepamandaterelevance"
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCSEPAMANDATERELEVANCE

**Srvcsepamandaterelevance**

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
| `SrvcSEPAMandateRelevance` | ✓ | |  | `cast(domvalue_l as crm_sepa_on )` | `CHAR(1)` | Sepa : Mandate Relevance for Service |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcSEPAMandateRelevanceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISEPAMNDSRVREL'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service SEPA Mandate Relevance'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel: {
                representativeKey: 'SrvcSEPAMandateRelevance',
                //! Code list for the Service SEPA Mandate Relevance
                sapObjectNodeType.name: 'SrvcSEPAMandateRelevance',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
               }

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
    dataExtraction.enabled: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_SrvcSEPAMandateRelevance
  as select from dd07l
  association [0..*] to I_SrvcSEPAMandateRelevanceText as _Text on $projection.SrvcSEPAMandateRelevance = _Text.SrvcSEPAMandateRelevance
{
      @ObjectModel.text.association: '_Text'
  key cast(domvalue_l as crm_sepa_on ) as SrvcSEPAMandateRelevance,

      _Text
}
where
      dd07l.domname  = 'CRM_SEPA_ON'
  and dd07l.as4local = 'A'
```
