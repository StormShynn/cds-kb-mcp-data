---
name: I_BUSINESSPARTNERTARGETGROUP
description: "Business PartnerTARGETGROUP"
semantic_vi: "View Business Partner TARGETGROUP hiển thị các nhóm đối tác kinh doanh TARGETGROUP, được sử dụng để phân loại đối tác kinh doanh cho các mục đích kinh doanh cụ thể. View này có thể được sử dụng để truy xuất và quản lý các nhóm đối tác kinh doanh trong thành phần Financial Services - Business Partner."
keywords:
  - "business partner"
  - "target group"
  - "financial services"
  - "business partner component"
  - "lob other"
  - "bo business partner"
  - "fs bp"
  - "interface view"
  - "categorization"
  - "grouping"
semantic_en: "The Business Partner TARGETGROUP view exposes business partner target groups, which are used to categorize business partners for specific business purposes. This view can be used to retrieve and manage target groups for business partners in the Financial Services - Business Partner component."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - business-partner
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTARGETGROUP

**Business PartnerTARGETGROUP**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerTargetGroup` | ✓ | |  | `group_d` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPTargetGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group for Business Partner'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BusinessPartnerTargetGroup',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BusinessPartnerTargetGroupCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BusinessPartnerTargetGroup
  as select from tp13
  association [0..*] to I_BPTargetGroupText as _Text on $projection.BusinessPartnerTargetGroup = _Text.BusinessPartnerTargetGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp13.group_d as BusinessPartnerTargetGroup,
      _Text
}
```
