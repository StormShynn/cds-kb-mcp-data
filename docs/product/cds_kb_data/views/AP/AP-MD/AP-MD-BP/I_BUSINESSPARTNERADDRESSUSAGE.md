---
name: I_BUSINESSPARTNERADDRESSUSAGE
description: "Business PartnerADDRESSUSAGE"
semantic_vi: "View Business Partner ADDRESSUSAGE cung cấp thông tin về việc sử dụng địa chỉ cho đối tác kinh doanh, bao gồm ngày bắt đầu và kết thúc của hiệu lực và việc sử dụng tiêu chuẩn."
keywords:
  - "business partner"
  - "address usage"
  - "address"
  - "partner"
  - "sap"
  - "ap-md-bp"
  - "address number"
  - "standard usage"
  - "validity start date"
  - "validity end date"
semantic_en: "The Business Partner ADDRESSUSAGE view provides information about the usage of addresses for business partners, including the start and end dates of validity and the standard usage."
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
  - address
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSUSAGE

**Business PartnerADDRESSUSAGE**

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
| `ValidityEndDate` | ✓ | |  | `valid_to` | `DEC(15)` | Validity End of a Business Partner Address Usage |
| `AddressUsage` | ✓ | |  | `adr_kind` | `CHAR(10)` | Address Type |
| `AddressNumber` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `ValidityStartDate` |  | |  | `valid_from` | `DEC(15)` | Validity Start of a Business Partner Address Usage |
| `StandardUsage` |  | |  | `xdfadu` | `CHAR(1)` | Indicator: Standard Address Usage |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRESSUSAGE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #BASIC 
@EndUserText.label: 'Busineess Partner Address Usage Core View'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerAddressUsage'
@Analytics: { dataExtraction: { enabled: true, 
                                delta.changeDataCapture.automatic: true } } 
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE ]                                                                  
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Businesspartneraddressusage as select from but021_fs 

association[1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{    
    key but021_fs.partner   as BusinessPartner,       
    key but021_fs.valid_to  as ValidityEndDate,     
    key but021_fs.adr_kind  as AddressUsage,   
    key but021_fs.addrnumber as AddressNumber, 
    but021_fs.valid_from    as ValidityStartDate, 
    but021_fs.xdfadu as StandardUsage,
    _BusinessPartner.AuthorizationGroup,
    _BusinessPartner    
}
```
