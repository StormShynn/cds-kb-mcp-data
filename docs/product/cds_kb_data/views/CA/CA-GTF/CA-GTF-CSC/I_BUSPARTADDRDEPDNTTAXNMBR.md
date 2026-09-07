---
name: I_BUSPARTADDRDEPDNTTAXNMBR
description: "Business PartnerADDRDEPDNTTAXNMBR"
semantic_vi: "View ADDRDEPDNTTAXNMBR của đối tác kinh doanh hiển thị số thuế cho đối tác kinh doanh và địa chỉ của họ, được sử dụng khi quản lý dữ liệu đối tác kinh doanh."
keywords:
  - "business partner"
  - "tax number"
  - "đối tác kinh doanh"
  - "số thuế"
  - "address"
  - "địa chỉ"
  - "ca-gtf-csc"
  - "cross-application components"
  - "lob:cross-application components"
semantic_en: "The Business Partner ADDRDEPDNTTAXNMBR view exposes tax numbers for business partners and their addresses, used when managing business partner data."
app_component: CA-GTF-CSC
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - business-partner
  - tax
  - component:CA-GTF-CSC
  - lob:Cross-Application Components
---
# I_BUSPARTADDRDEPDNTTAXNMBR

**Business PartnerADDRDEPDNTTAXNMBR**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC` |
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
| `BusinessPartnerAddressID` | ✓ | |  | `adrnr` | `CHAR(10)` | Address Number |
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
| `_BusinessPartnerAddress` | `I_BusinessPartnerAddress` | [1..1] |
| `_TaxCategoryText` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTAXNUMBERADDR'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true
@EndUserText.label: 'BP Address Dependent Tax Numbers'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: #CDS_MODELING_DATA_SOURCE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_BusPartAddrDepdntTaxNmbr 
  as select from dfkkbptaxnum_adr as BusinessPartnerTaxNumberAdr
  association [1..1] to I_BusinessPartner    as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_BusinessPartnerAddress as _BusinessPartnerAddress on  $projection.BusinessPartner = _BusinessPartnerAddress.BusinessPartner
                                                                            and $projection.BusinessPartnerAddressID = _BusinessPartnerAddress.AddressNumber
  association [0..*] to I_BusPartTaxTypeText as _TaxCategoryText on $projection.BPTaxType = _TaxCategoryText.BPTaxType  
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  @ObjectModel.sapObjectNodeTypeReference: 'BusinessPartner'
  key BusinessPartnerTaxNumberAdr.partner  as BusinessPartner,
  key BusinessPartnerTaxNumberAdr.adrnr    as BusinessPartnerAddressID,
  @ObjectModel.text.association: '_TaxCategoryText'
  @Consumption.valueHelpDefinition: [ { entity: { name:    'I_BusPartAddrDepdntTaxTypeVH', 
                                                  element: 'BPTaxType' }, 
                                        useAsTemplate: true } ] 
  key BusinessPartnerTaxNumberAdr.taxtype  as BPTaxType,
      BusinessPartnerTaxNumberAdr.taxnum   as BPTaxNumber,
      BusinessPartnerTaxNumberAdr.taxnumxl as BPTaxLongNumber,
      _BusinessPartner.AuthorizationGroup,
      _TaxCategoryText,
      _BusinessPartner
}
```
