---
name: I_BUPAIDENTIFICATION
description: "Bupaidentification"
semantic_vi: "View Bupaidentification hiển thị dữ liệu xác định đối tác kinh doanh, bao gồm các loại, số và cơ quan cấp giấy tờ, có thể được sử dụng để xác thực hoặc truy xuất thông tin đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "identification"
  - "xác định"
  - "bupa"
  - "ap-md-bp"
  - "sap"
  - "cds view"
semantic_en: "The Bupaidentification view exposes business partner identification data, including identification types, numbers, and issuing institutes, which can be used to validate or retrieve business partner information."
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: yes
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_BUPAIDENTIFICATION

**Bupaidentification**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `BPIdentificationType` | ✓ | |  | `type` | `CHAR(6)` | Identification Type |
| `BPIdentificationNumber` | ✓ | |  | `idnumber` | `CHAR(60)` | Identification Number |
| `BPIdnNmbrIssuingInstitute` |  | |  | `institute` | `CHAR(40)` | Responsible Institution for ID Number |
| `BPIdentificationEntryDate` |  | |  | `entry_date` | `DATS(8)` | Date of Entry for ID Number |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region in Which ID Number is Valid or Was Assigned |
| `Region` |  | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `ValidityStartDate` |  | |  | `valid_date_from` | `DATS(8)` | Validity Start for ID Number |
| `ValidityEndDate` |  | |  | `valid_date_to` | `DATS(8)` | Validity End for ID Number |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |
| `_BuPaIdentificationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BuPaIdentificationType` | `I_BuPaIdentificationType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Business Partner Identification' //same as DDL description
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.representativeKey: 'BPIdentificationNumber'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerIdentification'
@Analytics.technicalName: 'IBUPAID'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
                {
                    table: 'BUT0ID', role: #MAIN,
                    viewElement: ['BusinessPartner','BPIdentificationType' , 'BPIdentificationNumber'],
                    tableElement: ['partner','type','idnumber']
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
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'IDT',
  allowNewDatasources: false,
  dataSources: ['_BusinessPartner'],
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  }
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_BuPaIdentification
  as select from but0id 
  association [1..1] to I_BusinessPartner     as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  
  association [0..1] to I_BuPaIdentificationType     as _BuPaIdentificationType on $projection.BPIdentificationType = _BuPaIdentificationType.BPIdentificationType
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner     as BusinessPartner,
  @ObjectModel.foreignKey.association: '_BuPaIdentificationType'
  key type        as BPIdentificationType,
  key idnumber    as BPIdentificationNumber,
      institute   as BPIdnNmbrIssuingInstitute,
      entry_date  as BPIdentificationEntryDate,
      country     as Country,
      region      as Region,
    //  but0ID.idnumber_guid as IdentificationUUID,
      valid_date_from as ValidityStartDate,
      valid_date_to as ValidityEndDate,
      _BusinessPartner.AuthorizationGroup as AuthorizationGroup,
      _BusinessPartner,
      _BuPaIdentificationType
}
```
