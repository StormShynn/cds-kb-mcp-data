---
name: I_BUSINESSPARTNERPRINTFORMAT
description: "Business PartnerPRINTFORMAT"
semantic_vi: "View Business Partner PRINT FORMAT cung cấp truy cập vào định dạng in của đối tác kinh doanh, được sử dụng để định dạng dữ liệu đối tác kinh doanh cho mục đích in."
keywords:
  - "business partner"
  - "print format"
  - "đối tác kinh doanh"
  - "định dạng in"
  - "sap"
  - "ap-md-bp-rap"
  - "business partner print format"
semantic_en: "The Business Partner PRINT FORMAT view provides access to business partner print formats, which are used to format business partner data for printing. It is used when generating printed reports for business partners."
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
# I_BUSINESSPARTNERPRINTFORMAT

**Business PartnerPRINTFORMAT**

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
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerPrintFormatT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPRNTFRMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Business Partner Print Format'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'BusinessPartnerPrintFormat',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  resultSet.sizeCategory: #XS,
  usageType.dataClass: #META,
  sapObjectNodeType.name: 'BusinessPartnerPrintFormat',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessPartnerPrintFormat
  as select from dd07l
  association [0..*] to I_BusinessPartnerPrintFormatT as _Text on $projection.BusinessPartnerPrintFormat = _Text.BusinessPartnerPrintFormat
{
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Print Format'
      @Consumption.filter.hidden: true
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bu_print_mode ) as BusinessPartnerPrintFormat,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.hidden: true
      domvalue_l                                                                         as DomainValue,

      _Text
}
where
  domname = 'BU_PRINT_MODE'
```
