---
name: I_JNTVNTRVALDINVMTGRP
description: "Jntvntrvaldinvmtgrp"
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
# I_JNTVNTRVALDINVMTGRP

**Jntvntrvaldinvmtgrp**

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
| `JointVenture` | ✓ | |  | `cast( vname as jv_name preserving type )` | `CHAR(6)` | Joint Venture |
| `JointVentureEquityType` | ✓ | |  | `etype` | `CHAR(3)` | Equity Type |
| `JntVntrEquityFundingDateValue` | ✓ | |  | `fdate` | `NUMC(8)` | Valid from date (inverted: 99999999 - YYYYMMDD) |
| `JointVentureEquityFundingDate` |  | |  | `fdate` | `NUMC(8)` | Valid from date (inverted: 99999999 - YYYYMMDD) |
| `JointVentureEquityGroup` |  | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JointVentureEquityGroupActive` |  | |  | `egroupact` | `CHAR(1)` | Equity Group Active Status |
| `JointVentureDefBillCurrency` |  | |  | `bcurr` | `CHAR(2)` | JV Default Billing Currency |
| `JVAFundingGrpInEquityGrp` |  | |  | `fundgroup` | `CHAR(6)` | JV Funding group |
| `JVAEquityGroupIntrstCalcGrpID` |  | |  | `ic_group` | `CHAR(10)` | JV Interest Calculation Group ID |
| `JointVentureEquityTypeName` |  | | `_JntVntrEquityTypeDesc` | `JointVentureEquityTypeName` | `CHAR(35)` | Investment Type Description |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_JntVntrEquityType` | | ✓ | | | | |
| `_JntVntrEquityTypeDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JointVenture` | `I_JointVenture` | [1..1] |
| `_JntVntrEquityType` | `I_JntVntrEquityTypeMaster` | [1..1] |
| `_JntVntrEquityTypeDesc` | `I_JntVntrEquityTypeDesc` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVVALDINVGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Joint Ventures Valid Investment Groups'
@ObjectModel.representativeKey: 'JntVntrEquityFundingDateValue'
@Analytics: {
    dataCategory: #DIMENSION
}
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
define view I_JntVntrValdInvmtGrp
  as select from t8jg
  association [1..1] to I_CompanyCode             as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_JointVenture            as _JointVenture      on  $projection.CompanyCode  = _JointVenture.CompanyCode
                                                                        and $projection.JointVenture = _JointVenture.JointVenture
  association [1..1] to I_JntVntrEquityTypeMaster as _JntVntrEquityType on  $projection.CompanyCode            = _JntVntrEquityType.CompanyCode
                                                                        and $projection.JointVentureEquityType = _JntVntrEquityType.JointVentureEquityType
  association [1..1] to I_JntVntrEquityTypeDesc as _JntVntrEquityTypeDesc on  $projection.CompanyCode            = _JntVntrEquityTypeDesc.CompanyCode
                                                                          and $projection.JointVentureEquityType = _JntVntrEquityTypeDesc.JointVentureEquityType 
                                                                          and  _JntVntrEquityTypeDesc.Language   = $session.system_language                                                                 
{
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                    as CompanyCode,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrValueHelp',
                           element: 'JointVenture' }
              }]  
      @ObjectModel.foreignKey.association: '_JointVenture'
      @ObjectModel.text.element: [ 'JointVentureName' ]
  key cast( vname as jv_name preserving type ) as JointVenture,
       @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]                
      @ObjectModel.foreignKey.association: '_JntVntrEquityType'
      @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]  
  key etype                                    as JointVentureEquityType,
  key fdate                                    as JntVntrEquityFundingDateValue,
      //For compatibility reason keep the old GTN name
      fdate                                    as JointVentureEquityFundingDate,
      egrup                                    as JointVentureEquityGroup,
      egroupact                                as JointVentureEquityGroupActive,
      bcurr                                    as JointVentureDefBillCurrency,
      fundgroup                                as JVAFundingGrpInEquityGrp,
      ic_group                                 as JVAEquityGroupIntrstCalcGrpID,
      @UI.hidden: true
      _JntVntrEquityTypeDesc.JointVentureEquityTypeName as JointVentureEquityTypeName,
      @UI.hidden: true
      _JointVenture._Text[1:Language = $session.system_language ].JointVentureName,

      _CompanyCode,
      _JointVenture,
      _JntVntrEquityType,
      _JntVntrEquityTypeDesc
      
 }
```
