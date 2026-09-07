---
name: I_CAACCOUNTASSIGNMENTCATEGORYT
description: "Caaccountassignmentcategoryt"
semantic_vi: "View I_CAACCOUNTASSIGNMENTCATEGORYT hiển thị các loại phân bổ tài khoản cho kế toán tài chính, được sử dụng để phân loại và theo dõi các giao dịch tài chính."
keywords:
  - "account assignment"
  - "financial accounting"
  - "caaccountassignmentcategory"
  - "caaccountassignmentcatname"
  - "fi-ca"
  - "finance"
  - "tài khoản"
  - "phân bổ tài khoản"
  - "kế toán tài chính"
  - "loại phân bổ tài khoản"
semantic_en: "The I_CAACCOUNTASSIGNMENTCATEGORYT view exposes account assignment categories for financial accounting, which are used to categorize and track financial transactions."
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
# I_CAACCOUNTASSIGNMENTCATEGORYT

**Caaccountassignmentcategoryt**

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
| `CAAccountAssignmentCategory` | ✓ | |  | `kontt` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAAccountAssignmentCatName` |  | |  | `txt30` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true },
             technicalName: 'ICAACCTASSGMTCT' }

@EndUserText.label: 'Account Assignment Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAAccountAssignmentCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAccountAssignmentCategoryT
  as select from tfk000kt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key kontt as CAAccountAssignmentCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      txt30 as CAAccountAssignmentCatName,

      _Language
}
```
