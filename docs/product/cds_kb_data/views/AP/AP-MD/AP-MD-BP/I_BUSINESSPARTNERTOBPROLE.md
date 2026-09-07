---
name: I_BUSINESSPARTNERTOBPROLE
description: "Business PartnerTOBPROLE"
semantic_vi: "Chỉ ra các vai trò đối tác kinh doanh và quyền hạn của họ cho đối tác kinh doanh và khoảng thời gian cụ thể. Sử dụng để lấy và quản lý các vai trò đối tác kinh doanh và quyền hạn liên quan."
keywords:
  - "business partner"
  - "vai trò đối tác kinh doanh"
  - "quyền hạn"
  - "sap"
  - "ap-md-bp"
  - "interface view"
  - "business partner role"
  - "authorization group"
semantic_en: "Exposes business partner roles and their authorizations for a given business partner and time period. Used to retrieve and manage business partner roles and their associated authorizations."
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
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTOBPROLE

**Business PartnerTOBPROLE**

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
| `mandt` |  | |  |  |  |  |
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRole` | ✓ | |  | `rltyp` | `CHAR(6)` | BP Role |
| `ValidFrom` |  | |  | `valid_from` | `DEC(15)` | Validity Start of a BP Role |
| `ValidTo` |  | |  | `valid_to` | `DEC(15)` | Validity End of a BP Role |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTOBPROLE' //must start with "I"

@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_BusinessPartner.IsBusinessPurposeCompleted'
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
          automatic : true
       }
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE 

@EndUserText.label: 'Business Partner assignment to BP Role' //same as DDL description

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION    
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'BusinessPartnerRole'

@VDM.viewType: #BASIC

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_BusinessPartnerToBPRole_2' 
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerToBPRole 
  as select from but100

  association [0..1] to I_BusinessPartnerRole as _BusinessPartnerRole on $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
  association [0..1] to I_BusinessPartner     as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
   @Consumption.hidden: true
   but100.mandt as mandt,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessPartnerVH',
                     element: 'BusinessPartner' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key but100.partner     as BusinessPartner,
      // @ObjectModel.text.association: '_BusinessPartnerRoleText'
  key but100.rltyp       as BusinessPartnerRole,
  
      but100.valid_from  as ValidFrom,
      but100.valid_to    as ValidTo,


      //        Association
      _BusinessPartnerRole,
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner      
}
where
  but100.dfval = ''
```
