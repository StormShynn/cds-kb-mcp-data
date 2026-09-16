---
name: I_SRVCDOCPROBLEMCATEGORYTEXT
description: "Srvcdocproblemcategorytext"
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
# I_SRVCDOCPROBLEMCATEGORYTEXT

**Srvcdocproblemcategorytext**

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
| `ServiceDocumentProblemCategory` | ✓ | |  | `problem_category` | `CHAR(3)` | Problem Category |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `SrvcDocProblemCategoryName` |  | |  | `description` | `CHAR(40)` | Description |
| `_Language` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ServiceDocProblemCategory` | `I_ServiceDocProblemCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog: 
    {
        sqlViewName: 'ISRVCDOCPCATTXT',
        preserveKey: true,
        compiler.compareFilter: true,
        buffering: 
            { 
                status: #ACTIVE,
                type: #FULL
            }
    }
@AccessControl: 
    {
        personalData.blocking: #NOT_REQUIRED,
        authorizationCheck: #NOT_REQUIRED
    }
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service Transaction Problem Cat - Text'
@ObjectModel: 
    {
        dataCategory: #TEXT,
        representativeKey: 'ServiceDocumentProblemCategory',
        usageType: 
            {
                dataClass: #CUSTOMIZING,
                serviceQuality: #A,
                sizeCategory: #S
            },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC

define view I_SrvcDocProblemCategoryText
  as select from crmc_srqm_pcat_t
  association [0..1] to I_Language                  as _Language                  on _Language.Language = $projection.Language
  association [0..1] to I_ServiceDocProblemCategory as _ServiceDocProblemCategory on _ServiceDocProblemCategory.ServiceDocumentProblemCategory = $projection.ServiceDocumentProblemCategory
{
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
  key problem_category as ServiceDocumentProblemCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu            as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      @Semantics.text: true
      description      as SrvcDocProblemCategoryName,

      _Language,
      _ServiceDocProblemCategory
}
```
