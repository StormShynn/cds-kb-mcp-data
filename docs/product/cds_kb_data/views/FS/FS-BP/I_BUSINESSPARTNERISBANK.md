---
name: I_BUSINESSPARTNERISBANK
description: "Business PartnerISBANK"
semantic_vi: "Chỉ ra thông tin ngân hàng đối tác kinh doanh, được sử dụng khi truy cập hoặc cập nhật thông tin ngân hàng của đối tác kinh doanh."
keywords:
  - "business partner"
  - "bank"
  - "bank information"
  - "partner"
  - "bank details"
  - "business partner bank"
  - "sap cds view"
  - "fs-bp"
  - "interface view"
semantic_en: "Exposes business partner bank information, used when accessing or updating bank details for a business partner."
app_component: FS-BP
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
  - FS
  - FS-BP
  - interface-view
  - business-partner
  - bank
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
  - bo:Bank
---
# I_BUSINESSPARTNERISBANK

**Business PartnerISBANK**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
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
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BankKey` |  | |  | `bankl` |  |  |
| `BankCountry` |  | |  | `banks` |  |  |
| `BPMinimumReserve` |  | |  | `min_reserv` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPMinimumReserve` | | ✓ | | | | |
| `_BPMinimumReserveText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPMinimumReserve` | `I_BPMinimumReserve` | [0..1] |
| `_BPMinimumReserveText` | `I_BPMinimumReserveText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPFINSRVCISBANK',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED
                }
@ObjectModel: { representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BusinessPartnerIsBank',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION            
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true, 
             allowExtensions:true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                       
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Identification as bank'

define view I_BusinessPartnerIsBank
  as select from but0bank
  association [1]    to I_BusinessPartner         as _BusinessPartner         on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */ 
  association [0..1] to I_BPMinimumReserve        as _BPMinimumReserve        on $projection.BPMinimumReserve = _BPMinimumReserve.BPMinimumReserve
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */ 
  association [0..*] to I_BPMinimumReserveText    as _BPMinimumReserveText    on $projection.BPMinimumReserve = _BPMinimumReserveText.BPMinimumReserve
{
  key but0bank.partner    as BusinessPartner,
      but0bank.bankl      as BankKey,
      but0bank.banks      as BankCountry,
      but0bank.min_reserv as BPMinimumReserve,

      _BusinessPartner,
      _BPFinancialServicesExtn,
      _BPMinimumReserve,
      _BPMinimumReserveText
}
```
