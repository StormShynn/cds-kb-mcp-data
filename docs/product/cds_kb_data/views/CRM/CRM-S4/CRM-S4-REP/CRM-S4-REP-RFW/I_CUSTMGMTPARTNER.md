---
name: I_CUSTMGMTPARTNER
description: "Custmgmtpartner"
app_component: CRM-S4-REP-RFW
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
  - CRM
  - interface-view
  - partner
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_CUSTMGMTPARTNER

**Custmgmtpartner**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `CustMgmtObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `CustMgmtDocument` | ✓ | |  | `object_id` | `CHAR(10)` | Transaction ID |
| `CustMgmtDocumentItem` | ✓ | |  | `number_int` | `NUMC(6)` | Shortened Item Number in Document |
| `CustMgmtPartnerFunction` | ✓ | |  | `partner_fct` | `CHAR(8)` | Partner func. |
| `CustMgmtPartner` | ✓ | |  | `partner_no` | `CHAR(32)` | Partner Number |
| `CustMgmtPartnerNumberType` | ✓ | |  | `no_type` | `CHAR(2)` | Partner Number Type (e.g. GUID, Pers. No., ...), Internal |
| `CustMgmtPartFunctionCategory` |  | |  | `partner_pft` | `CHAR(4)` | Partner Function Category |
| `CustMgmtBusinessPartner` |  | |  | `partner_id` | `CHAR(10)` | Business Partner Number |
| `CustMgmtPartnerIsMainPartner` |  | |  | `mainpartner` | `CHAR(1)` | Main Partner (For Ambiguous Partner Functions) |
| `AddressID` |  | |  | `addr_nr` | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  | `addr_np` | `CHAR(10)` | Person Number |
| `AddressObjectType` |  | |  | `addr_type` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `_CustMgmtObjectType` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtObjectType` | `I_BusinessObjType` | [1..1] |
| `_PartnerFunction` | `I_CustMgmtPartnerFuncText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm:#SESSION_VARIABLE
@EndUserText.label: 'Customer Management Partner'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ICUSTMGMTPARTNER',
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics: {
    dataExtraction: {
        enabled: true
        }
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
//! Business Object SONT for the Service Document Partner
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentPartner'

@Metadata.ignorePropagatedAnnotations: true

define view I_CustMgmtPartner
  as select from crms4d_partner

  association [1..1] to I_BusinessObjType         as _CustMgmtObjectType on $projection.CustMgmtObjectType = _CustMgmtObjectType.BusinessObjectType
  association [0..*] to I_CustMgmtPartnerFuncText as _PartnerFunction    on $projection.CustMgmtPartnerFunction = _PartnerFunction.PartnerFunction
  association [0..1] to I_BusinessPartner         as _BusinessPartner    on $projection.CustMgmtBusinessPartner = _BusinessPartner.BusinessPartner

{


  key objtype_h                                as CustMgmtObjectType,
  key object_id                                as CustMgmtDocument,
  key number_int                               as CustMgmtDocumentItem,
      @ObjectModel.text.association: '_PartnerFunction'
  key partner_fct                              as CustMgmtPartnerFunction,
  key partner_no                               as CustMgmtPartner,
  key no_type                                  as CustMgmtPartnerNumberType,

      partner_pft                              as CustMgmtPartFunctionCategory,
      partner_id                               as CustMgmtBusinessPartner,

      mainpartner                              as CustMgmtPartnerIsMainPartner,
      addr_nr                                  as AddressID,
      addr_np                                  as AddressPersonID,
      addr_type                                as AddressObjectType,

      //Association
      _CustMgmtObjectType,
      _PartnerFunction,
      _BusinessPartner
      

}
```
