---
name: I_CAACCOUNTASSIGNMENTCATEGORY
description: "Caaccountassignmentcategory"
semantic_vi: "View I_CAACCOUNTASSIGNMENTCATEGORY CDS hiển thị các loại phân bổ chi phí cho kế toán chi phí, được sử dụng để phân loại phân bổ chi phí trong kế hoạch tài chính và phân tích."
keywords:
  - "account assignment category"
  - "phân bổ chi phí"
  - "kế toán chi phí"
  - "financial planning"
  - "phân tích tài chính"
  - "cost accounting"
  - "fi-ca"
  - "fi"
  - "finance"
  - "sap cds view"
semantic_en: "The I_CAACCOUNTASSIGNMENTCATEGORY CDS view exposes account assignment categories for cost accounting, which are used to categorize cost assignments in financial planning and analysis."
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAACCOUNTASSIGNMENTCATEGORY

**Caaccountassignmentcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAAccountAssignmentCategory` | ✓ | |  | `kontt` | `CHAR(2)` | Account Assignment Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAccountAssignmentCategoryT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true }, 
             technicalName: 'ICAACCTASSGMTC' }

@EndUserText.label: 'Account Assignment Category'

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAAccountAssignmentCategory',
                sapObjectNodeType.name: 'ContrAcctgAccountAssignmentCat',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                         #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

define view entity I_CAAccountAssignmentCategory 
  as select from tfk000k
  
  association [0..*] to I_CAAccountAssignmentCategoryT as _Text on $projection.CAAccountAssignmentCategory = _Text.CAAccountAssignmentCategory

{
      @ObjectModel.text.association: '_Text'  
  key kontt as CAAccountAssignmentCategory,
//    funcs   
  
      _Text      
}
```
