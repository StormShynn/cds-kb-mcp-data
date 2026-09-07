---
name: I_JVACARRIEDINTEREST
description: "Jvacarriedinterest"
app_component: CA-JVA
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
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVACARRIEDINTEREST

**Jvacarriedinterest**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` | ✓ | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JointVentureCarriedPartner` | ✓ | |  | `carrowner` | `CHAR(10)` | JV Carried Partner |
| `JointVentureCarryingPartner` | ✓ | |  | `carryowner` | `CHAR(10)` | JV Carrying Partner |
| `JVACarriedSharePercent` |  | |  | `carrshare` | `DEC(9)` | Carried Share |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JVACarriedPartner` | | ✓ | | | | |
| `_JVACarryOwner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JVACarriedPartner` | `I_JntVntrBusinessPartner` | [1..1] |
| `_JVACarryOwner` | `I_JntVntrBusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVACARRINTRST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Carried Interest'

@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MASTER
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status : #NOT_ALLOWED

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
define view I_JVACarriedInterest
  as select from t8j2c
  association [1..1] to I_CompanyCode            as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JointVentureMasterFld  as _JointVentureMasterFld on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                           and $projection.JointVenture = _JointVentureMasterFld.JointVenture
  association [1..1] to I_JointVentureDesc       as _JointVentureDesc      on  $projection.JointVenture = _JointVentureDesc.JointVenture
                                                                           and $projection.CompanyCode  = _JointVentureDesc.CompanyCode
                                                                           and _JointVentureDesc.Language   = $session.system_language

  association [1..1] to I_JntVntrEquityGrp       as _JntVntrEquityGrp      on  $projection.CompanyCode             = _JntVntrEquityGrp.CompanyCode
                                                                           and $projection.JointVenture            = _JntVntrEquityGrp.JointVenture
                                                                           and $projection.JointVentureEquityGroup = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText   as _JntVntrEquityGrpText  on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                           and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                           and $projection.JointVentureEquityGroup = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                           and _JntVntrEquityGrpText.Language   = $session.system_language    
                                                                                      
  association [1..1] to I_JntVntrBusinessPartner as _JVACarriedPartner     on  $projection.CompanyCode                = _JVACarriedPartner.CompanyCode
                                                                           and $projection.JointVentureCarriedPartner = _JVACarriedPartner.JointVenturePartner

  association [1..1] to I_JntVntrBusinessPartner as _JVACarryOwner         on  $projection.CompanyCode                 = _JVACarryOwner.CompanyCode
                                                                           and $projection.JointVentureCarryingPartner = _JVACarryOwner.JointVenturePartner
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs      as CompanyCode,
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
       @ObjectModel.text.association: '_JointVentureDesc'       
  key vname      as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'  
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_JntVntrEquityGroupValueHelp',
                                            element: 'JntOpgAgrmtEquityGrp' }
                                         }]      
      @ObjectModel.text.association: '_JntVntrEquityGrpText'                         
  key egrup      as JointVentureEquityGroup,
      @ObjectModel.foreignKey.association: '_JVACarriedPartner'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key carrowner  as JointVentureCarriedPartner,
      @ObjectModel.foreignKey.association: '_JVACarryOwner'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key carryowner as JointVentureCarryingPartner,
      carrshare  as JVACarriedSharePercent,

      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrp,
      _JVACarriedPartner,
      _JVACarryOwner, 
      _JointVentureDesc,    
      _JntVntrEquityGrpText
}
```
