---
name: I_BUSINESSPARTNERTAXNUMBER
description: "Business PartnerTAXNUMBER"
semantic_vi: "Chỉ ra số thuế của đối tác kinh doanh cho các loại thuế và nhóm xác thực khác nhau, được sử dụng để lấy và quản lý thông tin thuế cho đối tác kinh doanh."
keywords:
  - "business partner"
  - "tax number"
  - "tax type"
  - "authorization group"
  - "lob other"
  - "bo business partner"
  - "ap md bp"
  - "ap md"
  - "ap"
  - "interface view"
  - "partner"
  - "tax"
semantic_en: "Exposes business partner tax numbers for various tax types and authorization groups, used to retrieve and manage tax information for business partners."
app_component: AP-MD-BP
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
  - tax
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTAXNUMBER

**Business PartnerTAXNUMBER**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
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
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `BPTaxType` | ✓ | |  | `taxtype` | `CHAR(4)` | Tax Number Category |
| `BPTaxNumber` |  | |  | `taxnum` | `CHAR(20)` | Business Partner Tax Number |
| `BPTaxLongNumber` |  | |  | `taxnumxl` | `CHAR(60)` | Business Partner Tax Number |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |
| `_TaxCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_TaxCategoryText` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPATAXNUMBER'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
   delta.changeDataCapture: {
      mapping:[
                {
                    table: 'DFKKBPTAXNUM', role: #MAIN,
                    viewElement: ['BusinessPartner','BPTaxType'],
                    tableElement: ['partner','taxtype']
                },
                 {
                    table: 'BUT000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }               
                
           ]
   }
 }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,   
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm : #SESSION_VARIABLE
@ObjectModel.representativeKey:'BPTaxType'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Core view for Tax Number'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerTax'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Businesspartnertaxnumber
  as select from dfkkbptaxnum as BusinessPartnerTaxNumber
  
  association [1..1] to I_BusinessPartner    as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..*] to I_BusPartTaxTypeText as _TaxCategoryText on $projection.BPTaxType = _TaxCategoryText.BPTaxType
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartnerTaxNumber.partner  as BusinessPartner,
  key BusinessPartnerTaxNumber.taxtype  as BPTaxType,
      BusinessPartnerTaxNumber.taxnum   as BPTaxNumber,
      BusinessPartnerTaxNumber.taxnumxl as BPTaxLongNumber,
      _BusinessPartner.AuthorizationGroup,
      _TaxCategoryText,
      _BusinessPartner
      //concat(taxtype,taxnum) as FullTax
}
```
