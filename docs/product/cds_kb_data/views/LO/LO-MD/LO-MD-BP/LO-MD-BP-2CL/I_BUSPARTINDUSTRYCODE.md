---
name: I_BUSPARTINDUSTRYCODE
description: "Business PartnerINDUSTRYCODE"
semantic_vi: "View I_BUSPARTINDUSTRYCODE cung cấp mã ngành cho đối tác kinh doanh, có thể được sử dụng để phân loại và phân tích dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "industry code"
  - "mã ngành"
  - "sap cds view"
  - "cds view"
  - "lob logistics general"
  - "logistics general"
  - "ekko"
  - "ekko view"
semantic_en: "The I_BUSPARTINDUSTRYCODE view provides industry codes for business partners, which can be used to categorize and analyze business partner data."
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - business-partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BUSPARTINDUSTRYCODE

**Business PartnerINDUSTRYCODE**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `BusinessPartnerIndustryCode` | ✓ | |  | `braco` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartIndustryCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INDUSTRYCODE'
@Search.searchable: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerIndustryCode'
@ObjectModel.representativeKey: 'BusinessPartnerIndustryCode'
@ObjectModel: {
modelingPattern: #ANALYTICAL_DIMENSION,
supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                         #EXTRACTION_DATA_SOURCE,
                         #ANALYTICAL_DIMENSION,
                         #CDS_MODELING_ASSOCIATION_TARGET]
} 
@EndUserText.label: 'Business Partner Industry Code'
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: { automatic : true }
      },
    internalName:#LOCAL
}
define view I_BusPartIndustryCode
  as select from tbrc as BusinessPartnerIndustryCode
  association [0..*] to I_BusPartIndustryCodeText as _Text on $projection.BusinessPartnerIndustryCode = _Text.BusinessPartnerIndustryCode

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Industry Code'
  key braco as BusinessPartnerIndustryCode,
      _Text
}
```
