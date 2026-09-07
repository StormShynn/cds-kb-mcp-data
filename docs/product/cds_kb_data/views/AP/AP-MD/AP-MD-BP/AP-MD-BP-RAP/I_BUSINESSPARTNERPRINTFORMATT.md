---
name: I_BUSINESSPARTNERPRINTFORMATT
description: "Business PartnerPRINTFORMATT"
semantic_vi: "View Business Partner PRINT FORMATT hiển thị các thiết lập in ấn cho đối tác kinh doanh và các bản dịch của chúng. Nó có thể được sử dụng để lấy hoặc cập nhật các thiết lập in ấn cho đối tác kinh doanh."
keywords:
  - "business partner"
  - "print format"
  - "thiết lập in ấn"
  - "đối tác kinh doanh"
  - "cds view"
  - "view"
  - "sap"
  - "ap-md-bp-rap"
  - "ap-md-bp"
semantic_en: "The Business Partner PRINT FORMATT view exposes business partner print format settings and their translations. It can be used to retrieve or update print format settings for business partners."
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERPRINTFORMATT

**Business PartnerPRINTFORMATT**

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
| `BusinessPartnerPrintFormat` | ✓ | |  | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode )` | `CHAR(1)` | Business Partner Print Format |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerPrintFormatText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPRNTFRMTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Business Partner Category - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'BusinessPartnerPrintFormat',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerPrintFormatT
  as select from dd07t
{
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode ) as BusinessPartnerPrintFormat,
      @Semantics.language: true
  key ddlanguage                                                                         as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      ddtext                                                                             as BusinessPartnerPrintFormatText,
      @Search.defaultSearchElement: true
      @Consumption.hidden: true
      domvalue_l                                                                         as DomainValue
}
where
  domname = 'BU_PRINT_MODE'
```
