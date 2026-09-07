---
name: I_JVAVNTRINTCOVNTR
description: "Jvavntrintcovntr"
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
# I_JVAVNTRINTCOVNTR

**Jvavntrintcovntr**

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
| `JointVentureEquityGroup` | ✓ | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JntVntrIntcoCode` | ✓ | |  | `intcocd` | `CHAR(4)` | Intercompany code |
| `JointVentureIntcoVenture` |  | |  | `intcomvent` | `CHAR(6)` | Joint Venture Intercompany Venture |
| `JointVentureIntcoEquityGrp` |  | |  | `intcompegp` | `CHAR(3)` | JV Intercompany Equity Group |
| `_CompanyCode` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |
| `_JointVentureDesc` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JntVntrEquityGrpText` | | ✓ | | | | |
| `_IntCoCompanyCode` | | ✓ | | | | |
| `_IntCoJointVentureMaster` | | ✓ | | | | |
| `_IntCoJointVentureDesc` | | ✓ | | | | |
| `_IntCoJntVntrEquityGrp` | | ✓ | | | | |
| `_IntCoJntVntrEquityGrpText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [0..1] |
| `_JointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [0..1] |
| `_JntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |
| `_IntCoCompanyCode` | `I_CompanyCode` | [0..1] |
| `_IntCoJointVentureMaster` | `I_JointVentureMasterFld` | [0..1] |
| `_IntCoJointVentureDesc` | `I_JointVentureDesc` | [1..1] |
| `_IntCoJntVntrEquityGrp` | `I_JntVntrEquityGrp` | [0..1] |
| `_IntCoJntVntrEquityGrpText` | `I_JntVntrEquityGrpText` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Venture Intercompany Venture'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'JointVenture'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}

define view entity I_JVAVntrIntCoVntr

  as select from t8ji

  association [0..1] to I_CompanyCode           as _CompanyCode               on  _CompanyCode.CompanyCode = $projection.CompanyCode

  association [0..1] to I_JointVentureMasterFld as _JointVentureMasterFld     on  _JointVentureMasterFld.CompanyCode  = $projection.CompanyCode
                                                                              and _JointVentureMasterFld.JointVenture = $projection.JointVenture

  association [1..1] to I_JointVentureDesc      as _JointVentureDesc          on  _JointVentureDesc.CompanyCode  = $projection.CompanyCode
                                                                              and _JointVentureDesc.JointVenture = $projection.JointVenture
                                                                              and _JointVentureDesc.Language     = $session.system_language

  association [0..1] to I_JntVntrEquityGrp      as _JntVntrEquityGrp          on  _JntVntrEquityGrp.CompanyCode          = $projection.CompanyCode
                                                                              and _JntVntrEquityGrp.JointVenture         = $projection.JointVenture
                                                                              and _JntVntrEquityGrp.JntOpgAgrmtEquityGrp = $projection.JointVentureEquityGroup

  association [1..1] to I_JntVntrEquityGrpText  as _JntVntrEquityGrpText      on  _JntVntrEquityGrpText.CompanyCode          = $projection.CompanyCode
                                                                              and _JntVntrEquityGrpText.JointVenture         = $projection.JointVenture
                                                                              and _JntVntrEquityGrpText.JntOpgAgrmtEquityGrp = $projection.JointVentureEquityGroup
                                                                              and _JntVntrEquityGrpText.Language             = $session.system_language

  association [0..1] to I_CompanyCode           as _IntCoCompanyCode          on  _IntCoCompanyCode.CompanyCode = $projection.JntVntrIntcoCode

  association [0..1] to I_JointVentureMasterFld as _IntCoJointVentureMaster   on  _IntCoJointVentureMaster.CompanyCode  = $projection.JntVntrIntcoCode
                                                                              and _IntCoJointVentureMaster.JointVenture = $projection.JointVentureIntcoVenture

  association [1..1] to I_JointVentureDesc      as _IntCoJointVentureDesc     on  _IntCoJointVentureDesc.CompanyCode  = $projection.JntVntrIntcoCode
                                                                              and _IntCoJointVentureDesc.JointVenture = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJointVentureDesc.Language     = $session.system_language

  association [0..1] to I_JntVntrEquityGrp      as _IntCoJntVntrEquityGrp     on  _IntCoJntVntrEquityGrp.CompanyCode          = $projection.JntVntrIntcoCode
                                                                              and _IntCoJntVntrEquityGrp.JointVenture         = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJntVntrEquityGrp.JntOpgAgrmtEquityGrp = $projection.JointVentureIntcoEquityGrp

  association [1..1] to I_JntVntrEquityGrpText  as _IntCoJntVntrEquityGrpText on  _IntCoJntVntrEquityGrpText.CompanyCode          = $projection.JntVntrIntcoCode
                                                                              and _IntCoJntVntrEquityGrpText.JointVenture         = $projection.JointVentureIntcoVenture
                                                                              and _IntCoJntVntrEquityGrpText.JntOpgAgrmtEquityGrp = $projection.JointVentureIntcoEquityGrp
                                                                              and _IntCoJntVntrEquityGrpText.Language             = $session.system_language

{

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
  key cast( vname as jv_name preserving type ) as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'
  key egrup                                    as JointVentureEquityGroup,
      @ObjectModel.foreignKey.association: '_IntCoCompanyCode'
  key intcocd                                  as JntVntrIntcoCode,
      intcomvent                               as JointVentureIntcoVenture,
      intcompegp                               as JointVentureIntcoEquityGrp,

      _CompanyCode,
      _JointVentureMasterFld,
      _JointVentureDesc,
      _JntVntrEquityGrp,
      _JntVntrEquityGrpText,
      _IntCoCompanyCode,
      _IntCoJointVentureMaster,
      _IntCoJointVentureDesc,
      _IntCoJntVntrEquityGrp,
      _IntCoJntVntrEquityGrpText
}
```
