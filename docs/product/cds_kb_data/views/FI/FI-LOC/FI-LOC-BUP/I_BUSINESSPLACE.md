---
name: I_BUSINESSPLACE
description: "Businessplace"
semantic_vi: "View Businessplace CDS hiển thị dữ liệu địa điểm kinh doanh của công ty, bao gồm địa chỉ, số thuế và mô tả. Nó được sử dụng để lấy và quản lý địa điểm kinh doanh trong thành phần FI-LOC-BUP."
keywords:
  - "businessplace"
  - "business location"
  - "address"
  - "tax number"
  - "description"
  - "fi-loc-bup"
  - "finance"
  - "company code"
  - "business place start date"
  - "business place end date"
semantic_en: "The Businessplace CDS view exposes business location data for a company, including address, tax numbers, and description. It is used to retrieve and manage business locations in the FI-LOC-BUP component."
app_component: FI-LOC-BUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-BUP
  - interface-view
  - component:FI-LOC-BUP
  - lob:Finance
---
# I_BUSINESSPLACE

**Businessplace**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `BusinessPlace` | ✓ | |  | `branch` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `BusinessPlaceStartDate` |  | |  | `validfrom` |  |  |
| `BusinessPlaceEndDate` |  | |  | `validto` |  |  |
| `TaxNumber1` |  | |  | `stcd1` |  |  |
| `TaxNumber2` |  | |  | `stcd2` |  |  |
| `TaxNumber5` |  | |  | `stcd5` |  |  |
| `BusinessPlaceDescription` |  | |  | `name` |  |  |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPlaceText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Address` | `I_Address_2` | [0..1] |
| `_Extension` | `E_BusinessPlace` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUSINESSPLACE'
@EndUserText.label: 'Business Place Information'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BusinessPlace'
@ObjectModel.semanticKey: ['CompanyCode', 'BusinessPlace']
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

@Analytics.dataExtraction.enabled: true

@Metadata.ignorePropagatedAnnotations: true
@AccessControl.privilegedAssociations: ['_Address']

@ObjectModel.sapObjectNodeType.name: 'BusinessPlace'

define view I_BusinessPlace
  as select from P_BusinessPlace
  association [0..*] to I_BusinessPlaceText as _Text    on $projection.CompanyCode = _Text.CompanyCode
                                                       and $projection.BusinessPlace = _Text.BusinessPlace
  association [1..1] to I_CompanyCode   as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Address_2     as _Address     on $projection.AddressID = _Address.AddressID
                                                       and _Address.AddressPersonID = ''
                                                       and _Address.AddressRepresentationCode = ''
  association [1..1] to E_BusinessPlace as _Extension   on $projection.CompanyCode   = _Extension.CompanyCode
                                                       and $projection.BusinessPlace = _Extension.BusinessPlace
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.text.element:['BusinessPlaceDescription']
  key branch as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Address'
      adrnr  as AddressID,
      validfrom as BusinessPlaceStartDate,
      validto   as BusinessPlaceEndDate,
      stcd1  as TaxNumber1,
      stcd2  as TaxNumber2,
      stcd5  as TaxNumber5,
      @Semantics.text:true
      name   as BusinessPlaceDescription,
      
      _Text,
      _CompanyCode,
      _Address
}
```
