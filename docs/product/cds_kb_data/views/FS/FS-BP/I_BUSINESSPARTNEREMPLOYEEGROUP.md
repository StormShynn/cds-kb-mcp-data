---
name: I_BUSINESSPARTNEREMPLOYEEGROUP
description: "Business PartnerEMPLOYEEGROUP"
semantic_vi: "View Business Partner EMPLOYEEGROUP cung cấp truy cập thông tin nhóm nhân viên liên quan đến đối tác kinh doanh, cho phép các nhà phát triển truy cập và quản lý dữ liệu này trong các ứng dụng SAP."
keywords:
  - "business partner"
  - "employee group"
  - "sap"
  - "fs-bp"
  - "business partner employee group"
  - "partner"
  - "employee"
  - "group"
  - "lob other"
  - "bo businesspartner"
semantic_en: "The Business Partner EMPLOYEEGROUP view provides access to employee group information associated with business partners, enabling developers to retrieve and manage this data in SAP applications."
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
# I_BUSINESSPARTNEREMPLOYEEGROUP

**Business PartnerEMPLOYEEGROUP**

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
| `BusinessPartnerEmployeeGroup` | ✓ | |  | `staff_grp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPEmployeeGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Employee Group'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: { representativeKey: 'BusinessPartnerEmployeeGroup',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                sapObjectNodeType.name: 'BPEmployeeGroupCode',
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

define view entity I_BusinessPartnerEmployeeGroup
  as select from tp05
  association [0..*] to I_BPEmployeeGroupText as _Text on $projection.BusinessPartnerEmployeeGroup = _Text.BusinessPartnerEmployeeGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tp05.staff_grp as BusinessPartnerEmployeeGroup,
      _Text
}
```
