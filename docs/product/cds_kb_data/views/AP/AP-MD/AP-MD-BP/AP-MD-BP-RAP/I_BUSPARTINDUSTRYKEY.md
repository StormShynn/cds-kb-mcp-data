---
name: I_BUSPARTINDUSTRYKEY
description: "Business PartnerINDUSTRYKEY"
semantic_vi: "View I_BUSPARTINDUSTRYKEY cung cấp thông tin phân loại ngành công nghiệp cho đối tác kinh doanh, có thể được sử dụng để phân loại và phân tích dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "industry classification"
  - "phân loại ngành công nghiệp"
  - "sap"
  - "ap-md-bp-rap"
  - "industry system type"
  - "industry sector"
semantic_en: "The I_BUSPARTINDUSTRYKEY view provides industry classification information for business partners, which can be used to categorize and analyze business partner data."
app_component: AP-MD-BP-RAP
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYKEY

**Business PartnerINDUSTRYKEY**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
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
| `IndustrySystemType` | ✓ | |  | `istype` | `CHAR(4)` | Industry System |
| `IndustrySector` | ✓ | |  | `ind_sector` | `CHAR(10)` | Industry |
| `_Text` | | ✓ | | | | |
| `_BusPartIndustrySystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartIndustryKeyText` | [0..*] |
| `_BusPartIndustrySystem` | `I_BusPartIndustrySystem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDKEY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
      }
    }
  }
@ObjectModel.representativeKey:'IndustrySector'    
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Industry Key'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BusinessPartnerIndustrySector',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ,
                           #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartIndustryKey
  as select from tb038a
  association [0..*] to I_BusPartIndustryKeyText as _Text on  $projection.IndustrySector     = _Text.IndustrySector
                                                           and $projection.IndustrySystemType = _Text.IndustrySystemType
  association [0..1] to I_BusPartIndustrySystem  as _BusPartIndustrySystem on  $projection.IndustrySystemType = _BusPartIndustrySystem.IndustrySystemType                                                         
{
  @ObjectModel.foreignKey.association:'_BusPartIndustrySystem'
  key istype     as IndustrySystemType,
      @ObjectModel.text.association: '_Text'
  key ind_sector as IndustrySector,

      _Text,
      _BusPartIndustrySystem
}
```
