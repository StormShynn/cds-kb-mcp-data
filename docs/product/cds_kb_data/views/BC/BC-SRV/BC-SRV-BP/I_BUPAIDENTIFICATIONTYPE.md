---
name: I_BUPAIDENTIFICATIONTYPE
description: "Bupaidentificationtype"
semantic_vi: "View Bupaidentificationtype cung cấp thông tin về loại xác định đối tác kinh doanh, loại và các dấu hiệu liên quan."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "identification type"
  - "loại xác định"
  - "sap cds view"
  - "view bupaidentificationtype"
  - "bp identification type"
  - "bp identification category"
  - "is bpperson"
  - "is bporganization"
  - "is bp group"
semantic_en: "The Bupaidentificationtype view provides information about business partner identification types, categories, and related flags. It is used to determine the type of business partner identification."
app_component: BC-SRV-BP
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
  - BC
  - BC-SRV
  - BC-SRV-BP
  - interface-view
  - component:BC-SRV-BP
  - lob:Basis Components
---
# I_BUPAIDENTIFICATIONTYPE

**Bupaidentificationtype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BP` |
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
| `BPIdentificationType` | ✓ | |  | `type` | `CHAR(6)` | Identification Type |
| `BPIdentificationCategory` |  | |  | `category` | `CHAR(6)` | BP Identification Category |
| `IsBPPerson` |  | |  | `xperson` | `CHAR(1)` | Indicator: ID Type Relevant for Persons |
| `IsBPOrganization` |  | |  | `xorganisation` | `CHAR(1)` | Indicator: ID Type Relevant for Organizations |
| `IsBPGroup` |  | |  | `xgroup` | `CHAR(1)` | Indicator: ID Type Relevant for Groups |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_ID_TYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true
  }
}
@ObjectModel.sapObjectNodeType.name: 'BPIdentificationType'
@ObjectModel.representativeKey: 'BPIdentificationType'
@EndUserText.label: 'CDS View for BP Identification Types'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                                         
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

define view I_BuPaIdentificationType as select from tb039a {
 key type as BPIdentificationType,
 category as BPIdentificationCategory,
 xperson as IsBPPerson,
 xorganisation as IsBPOrganization,
 xgroup as IsBPGroup
    
}
```
