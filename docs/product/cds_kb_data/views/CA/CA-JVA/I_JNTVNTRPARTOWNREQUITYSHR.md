---
name: I_JNTVNTRPARTOWNREQUITYSHR
description: "Jntvntrpartownrequityshr"
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
# I_JNTVNTRPARTOWNREQUITYSHR

**Jntvntrpartownrequityshr**

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
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JointVenturePartner` | ✓ | |  | `partn` | `CHAR(10)` | JV Partner |
| `JointVenturePartnerShortText` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `JointVenturePartner2ShortText` |  | | `_Customer` | `BPCustomerName` | `CHAR(81)` | Customer Name |
| `JointVenturePartnerLongText` |  | | `_Customer` | `BPCustomerFullName` | `CHAR(220)` | Customer Full Name |
| `JntVntrEquityShare` |  | |  | `eqshare` | `DEC(9)` | Equity Share |
| `JntVntrOwnrIsSuspended` |  | |  | `ownsusp` | `CHAR(1)` | Owner Suspended Flag |
| `JntVntrOwnrSuspendedPerd` |  | |  | `ownsusper` | `NUMC(3)` | JV Owner Suspended |
| `JntVntrOwnrSuspendedYr` |  | |  | `ownsusyear` | `NUMC(4)` | JV Owner Suspended Year |
| `JntVntrOwnrIsNotSuspended` |  | |  | `ownunsus` | `CHAR(1)` | JV Owner Unsuspended |
| `JntVntrOwnrNotSuspendedPerd` |  | |  | `ownususper` | `NUMC(3)` | JV Group Unsuspended Period |
| `JntVntrOwnrNotSuspendedYr` |  | |  | `ownususyr` | `NUMC(4)` | JV Group Unsuspended Year |
| `JntVntrInterestType` |  | |  | `inttype` | `CHAR(1)` | Interest Type |
| `JntVntrDrillingRcvryPercent` |  | |  | `drillrecpc` | `DEC(9)` | JV Drilling Recovery Percentage |
| `JntVntrOpgRcvryPercent` |  | |  | `operrecpc` | `DEC(9)` | JV Operating Recovery Percentage |
| `JntVntrPayIsStppd` |  | |  | `stoppay` | `CHAR(1)` | JV Stop/Pay |
| `JntVntrPartWrkgIntrstPerd` |  | |  | `cioutper` | `NUMC(3)` | Period when CI partner becomes Working interest |
| `JntVntrPartWrkgIntrstYrValue` |  | |  | `cioutyear` | `NUMC(4)` | Year when CI partner becomes Working interest |
| `JntVntrCarriedIntrstGrp` |  | |  | `cigroup` | `CHAR(4)` | JV Carried Interest Group |
| `JntVntrNetProfitIntrstGrp` |  | |  | `npigroup` | `CHAR(4)` | JV Net Profit Interest Group |
| `JntVntrOperatorAddressArea` |  | |  | `regio` | `CHAR(4)` | Operator address by area |
| `JntOpgAgrmtEquityGrpText` |  | | `_JntVntrEquityGrpText` | `JntOpgAgrmtEquityGrpText` | `CHAR(35)` | Equity Group Description |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_JntVntrValueHelp` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_JointVentureSuspenseText` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_JntVntrValueHelp` | `I_JntVntrValueHelp` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_JointVentureSuspenseText` | `I_JointVentureSuspenseText` | [0..*] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVPARTOWNREQSHR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Venture Owner Equity Share'
//@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenturePartner'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'JointVenturePartnerEquityShare'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true


define view I_JntVntrPartOwnrEquityShr
  as select from t8jq
  association [1..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                 as _Customer                 on  $projection.JointVenturePartner = _Customer.Customer
  association [1..1] to I_JntVntrValueHelp         as _JntVntrValueHelp         on  $projection.CompanyCode  = _JntVntrValueHelp.CompanyCode
                                                                                and $projection.JointVenture = _JntVntrValueHelp.JointVenture 
  association [1..1] to I_JntVntrEquityGrp         as _JntVntrEquityGrp         on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JntVntrEquityGrpText     as _JntVntrEquityGrpText     on  $projection.CompanyCode          = _JntVntrEquityGrpText.CompanyCode
                                                                                and $projection.JointVenture         = _JntVntrEquityGrpText.JointVenture
                                                                                and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp
                                                                                and _JntVntrEquityGrpText.Language   = $session.system_language                                                                                 
  association [0..*] to I_JointVentureSuspenseText as _JointVentureSuspenseText on  $projection.JntVntrOwnrIsSuspended = _JointVentureSuspenseText.JntVntrSuspenseStatus
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture                                                                               
  association [1..1] to I_JointVentureDesc         as  _JointVentureDesc        on  $projection.JointVenture =  _JointVentureDesc.JointVenture
                                                                                and $projection.CompanyCode  =  _JointVentureDesc.CompanyCode
                                                                                and _JointVentureDesc.Language   = $session.system_language
                                                                         
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
  key bukrs                        as CompanyCode,                  
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'     
      @ObjectModel.text.association: '_JointVentureDesc'
      @Consumption.valueHelpDefinition : [ 
              { entity:  { name:    'I_JntVntrValueHelp',                           
                           element: 'JointVenture' }
              }]
  key vname                        as JointVenture,
     @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
     @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]     
     @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                           element: 'JntOpgAgrmtEquityGrp' }
              }]        
                         
  key egrup                        as JntOpgAgrmtEquityGrp,
   @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]    
  key partn                        as JointVenturePartner,
      _Customer.CustomerName       as JointVenturePartnerShortText,
      _Customer.BPCustomerName     as JointVenturePartner2ShortText,
      _Customer.BPCustomerFullName as JointVenturePartnerLongText,
      @DefaultAggregation: #SUM
      eqshare                      as JntVntrEquityShare,
      @ObjectModel.text.association: '_JointVentureSuspenseText'
      ownsusp                      as JntVntrOwnrIsSuspended,
      ownsusper                    as JntVntrOwnrSuspendedPerd,
      ownsusyear                   as JntVntrOwnrSuspendedYr,
      ownunsus                     as JntVntrOwnrIsNotSuspended,
      ownususper                   as JntVntrOwnrNotSuspendedPerd,
      ownususyr                    as JntVntrOwnrNotSuspendedYr,
      inttype                      as JntVntrInterestType,
      @DefaultAggregation: #SUM
      drillrecpc                   as JntVntrDrillingRcvryPercent,
      @DefaultAggregation: #SUM
      operrecpc                    as JntVntrOpgRcvryPercent,
      stoppay                      as JntVntrPayIsStppd,
      cioutper                     as JntVntrPartWrkgIntrstPerd,
      cioutyear                    as JntVntrPartWrkgIntrstYrValue,
      cigroup                      as JntVntrCarriedIntrstGrp,
      npigroup                     as JntVntrNetProfitIntrstGrp,
      regio                        as JntVntrOperatorAddressArea,   
     @UI.hidden: true
     _JntVntrEquityGrpText.JntOpgAgrmtEquityGrpText,  


      _CompanyCode,
      _Customer,
      _JntVntrValueHelp,      
      _JntVntrEquityGrp,
      _JointVentureSuspenseText,
      _JointVentureMasterFld,
      _JntVntrEquityGrpText,
      _JointVentureDesc
           
}
```
