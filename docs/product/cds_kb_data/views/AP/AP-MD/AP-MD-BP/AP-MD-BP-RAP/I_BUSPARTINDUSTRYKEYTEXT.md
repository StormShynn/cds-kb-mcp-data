---
name: I_BUSPARTINDUSTRYKEYTEXT
description: "Business PartnerINDUSTRYKEYTEXT"
semantic_vi: "Chứa dữ liệu văn bản khóa ngành cho đối tác kinh doanh, hữu ích khi hiển thị thông tin ngành cụ thể."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "industry key text"
  - "text view"
  - "interface view"
  - "sap business partner"
  - "ap-md-bp-rap"
  - "industry sector"
  - "industry system type"
semantic_en: "Exposes industry key text data for business partners, useful when displaying industry-specific information."
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
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYKEYTEXT

**Business PartnerINDUSTRYKEYTEXT**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `IndustrySystemType` | ✓ | |  | `istype` | `CHAR(4)` | Industry System |
| `IndustrySector` | ✓ | |  | `ind_sector` | `CHAR(10)` | Industry |
| `IndustryKeyDescription` |  | |  | `text` | `CHAR(100)` | Description |
| `_BusPartIndustryKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusPartIndustryKey` | `I_BusPartIndustryKey` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDKEYTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Industry Key Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  representativeKey: 'IndustrySector',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true

define view I_BusPartIndustryKeyText
  as select from tb038b
  association [0..1] to I_BusPartIndustryKey as _BusPartIndustryKey on $projection.IndustrySystemType = _BusPartIndustryKey.IndustrySystemType
                                                                    and $projection.IndustrySector = _BusPartIndustryKey.IndustrySector
                                                                
{
      @Semantics.language: true      
  key spras      as Language,
  @ObjectModel.foreignKey.association: '_BusPartIndustryKey'
  key istype     as IndustrySystemType,
  key ind_sector as IndustrySector,
      @Semantics.text: true
      text       as IndustryKeyDescription,
//      text_short as IndustryKeyShortDescription

  _BusPartIndustryKey
}
```
