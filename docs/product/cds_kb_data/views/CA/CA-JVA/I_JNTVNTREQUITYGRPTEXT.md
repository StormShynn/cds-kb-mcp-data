---
name: I_JNTVNTREQUITYGRPTEXT
description: "Jntvntrequitygrptext"
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
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTREQUITYGRPTEXT

**Jntvntrequitygrptext**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `cast( vname as jv_name_cds preserving type )` | `CHAR(6)` | Joint Venture |
| `JntOpgAgrmtEquityGrp` | ✓ | |  | `egrup` | `CHAR(3)` | Equity Group |
| `JntOpgAgrmtEquityGrpText` |  | |  | `cast( egtxt as jv_egtxt_cds preserving type )` | `CHAR(35)` | Equity Group Description |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_JntVntrEquityGrp` | | ✓ | | | | |
| `_JointVentureMasterFld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_JntVntrEquityGrp` | `I_JntVntrEquityGrp` | [1..1] |
| `_JointVentureMasterFld` | `I_JointVentureMasterFld` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVEGRPTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'JntOpgAgrmtEquityGrp'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #M,
  usageType.dataClass: #MASTER,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #NONE
}
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Equity Group - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_JntVntrEquityGrpText
  as select from t8jft
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Language         as _Language         on  $projection.Language = _Language.Language
  association [1..1] to I_JntVntrEquityGrp as _JntVntrEquityGrp on  $projection.CompanyCode          = _JntVntrEquityGrp.CompanyCode
                                                                and $projection.JointVenture         = _JntVntrEquityGrp.JointVenture
                                                                 and $projection.JntOpgAgrmtEquityGrp = _JntVntrEquityGrp.JntOpgAgrmtEquityGrp
  association [1..1] to I_JointVentureMasterFld    as _JointVentureMasterFld    on  $projection.CompanyCode  = _JointVentureMasterFld.CompanyCode
                                                                                and $projection.JointVenture = _JointVentureMasterFld.JointVenture                                                             
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                                                                                                                                            as Language,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                                                                                                                           as CompanyCode,
   @ObjectModel.foreignKey.association: '_JointVentureMasterFld'
  key cast( vname as jv_name_cds preserving type )                                                                                                     as JointVenture,
      @ObjectModel.foreignKey.association: '_JntVntrEquityGrp'      
      @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]
  key egrup                                                                                                                                            as JntOpgAgrmtEquityGrp,
      @Semantics.text: true
      cast( egtxt  as jv_egtxt_cds preserving type )                                                                                                   as JntOpgAgrmtEquityGrpText,
      _Language,
      _CompanyCode,
      _JointVentureMasterFld,
      _JntVntrEquityGrp
}
```
