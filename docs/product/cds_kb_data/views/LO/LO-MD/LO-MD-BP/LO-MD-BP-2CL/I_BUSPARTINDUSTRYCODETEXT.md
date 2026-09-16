---
name: I_BUSPARTINDUSTRYCODETEXT
description: "Business PartnerINDUSTRYCODETEXT"
semantic_vi: "Chứa mã phân loại ngành công nghiệp cho đối tác kinh doanh, được sử dụng để hiển thị phân loại ngành công nghiệp cho khách hàng hoặc nhà cung cấp."
keywords:
  - "business partner"
  - "industry code"
  - "customer industry code"
  - "vendor industry code"
  - "industry classification"
  - "business partner industry code"
  - "lob logistics general"
  - "sap cds view"
  - "interface view"
  - "text view"
semantic_en: "Exposes industry code text for business partners, used to display industry classification for customers or vendors."
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
  - text-view
  - business-partner
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BUSPARTINDUSTRYCODETEXT

**Business PartnerINDUSTRYCODETEXT**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessPartnerIndustryCode` | ✓ | |  | `braco` |  |  |
| `CustomerIndustryCodeText` |  | |  | `vtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INDUSTRYCODET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerIndustryCode',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'BusPartIndustryCode - Text'
define view I_BusPartIndustryCodeText as select from tbrct 

{
    @Semantics.language: true
    key spras as Language,
    
    key braco as BusinessPartnerIndustryCode,
    @Consumption.filter.hidden: true
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @EndUserText.label: 'Industry Code Description'
    vtext as CustomerIndustryCodeText    
}
```
