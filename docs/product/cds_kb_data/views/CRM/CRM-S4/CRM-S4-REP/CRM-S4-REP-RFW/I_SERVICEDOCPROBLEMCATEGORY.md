---
name: I_SERVICEDOCPROBLEMCATEGORY
description: "Service DocumentPROBLEMCATEGORY"
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
  - service
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCPROBLEMCATEGORY

**Service DocumentPROBLEMCATEGORY**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcDocProblemCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog: 
    {
        sqlViewName: 'ISRVCDOCPROBCAT',
        preserveKey: true,
        compiler.compareFilter: true,
        buffering: 
            { 
                status: #ACTIVE,
                type: #FULL
            }
    }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service transaction problem category'
@ObjectModel: 
    {
        representativeKey: 'ServiceDocumentProblemCategory',
        usageType: 
            {
                dataClass: #CUSTOMIZING,
                serviceQuality: #A,
                sizeCategory: #S
            },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}

@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
    
@Search.searchable: true
@VDM.viewType: #BASIC

define view I_ServiceDocProblemCategory
  as select from crmc_srqm_prbcat
  association [0..*] to I_SrvcDocProblemCategoryText as _Text on _Text.ServiceDocumentProblemCategory = $projection.ServiceDocumentProblemCategory
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key problem_category as ServiceDocumentProblemCategory,

      _Text
}
```
