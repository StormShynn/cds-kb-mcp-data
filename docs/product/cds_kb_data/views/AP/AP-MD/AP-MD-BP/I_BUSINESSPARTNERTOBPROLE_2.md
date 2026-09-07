---
name: I_BUSINESSPARTNERTOBPROLE_2
description: "Business PartnerTOBPROLE 2"
semantic_vi: "Chỉ ra các vai trò đối tác kinh doanh và dữ liệu liên quan, hữu ích cho việc quản lý mối quan hệ đối tác kinh doanh và quyền truy cập."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "role"
  - "quyền truy cập"
  - "sap"
  - "ap-md-bp"
  - "business partner role"
  - "business partner relationship"
semantic_en: "Exposes business partner roles and their associated data, useful for managing business partner relationships and permissions."
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
# I_BUSINESSPARTNERTOBPROLE_2

**Business PartnerTOBPROLE 2**

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
| `BusinessPartnerDiffTypeValue` | ✓ | |  | `dfval` | `CHAR(20)` | BP: Differentiation type value |
| `ValidFrom` |  | |  | `valid_from` | `DEC(15)` | Validity Start of a BP Role |
| `ValidTo` |  | |  | `valid_to` | `DEC(15)` | Validity End of a BP Role |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerDiffValue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartnerDiffValue` | `I_BPDifferentiationTypeValue` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTOBPROLE2' //must start with "I"

@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: '_BusinessPartner.IsBusinessPurposeCompleted'
@AccessControl.privilegedAssociations:  [ '_BusinessPartnerDiffValue' ]

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                
                {
                    table: 'but100', role: #MAIN,
                    viewElement: ['BusinessPartner' ,'BusinessPartnerRole','BusinessPartnerDiffTypeValue'],
                    tableElement: ['partner', 'rltyp' ,'dfval']
                   
                },
               
                {
                    table: 'but000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }                              
            ]
        }
    }
 } 
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Business Partner assignment to BP Role' //same as DDL description

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
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
@ObjectModel.sapObjectNodeType.name:'BusinessPartnerAssignedRole'

@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerToBPRole_2 
  as select from but100

  association [0..1] to I_BusinessPartnerRole as _BusinessPartnerRole on $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
  association [0..1] to I_BusinessPartner     as _BusinessPartner     on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPDifferentiationTypeValue as _BusinessPartnerDiffValue on $projection.BusinessPartnerDiffTypeValue = _BusinessPartnerDiffValue.BusinessPartnerDiffTypeValue 
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
     @ObjectModel.foreignKey.association: '_BusinessPartnerDiffValue'
  key but100.dfval       as BusinessPartnerDiffTypeValue,
      but100.valid_from  as ValidFrom,
      but100.valid_to    as ValidTo,


      //        Association
      _BusinessPartnerRole,
      _BusinessPartner.AuthorizationGroup,
      _BusinessPartner,
      _BusinessPartnerDiffValue  
}
where
  but100.dfval = ''
```
