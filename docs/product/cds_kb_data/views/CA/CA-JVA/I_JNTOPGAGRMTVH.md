---
name: I_JNTOPGAGRMTVH
description: "Jntopgagrmtvh"
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
  - value-help
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTVH

**Jntopgagrmtvh**

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
| `JntOpgAgrmt` | ✓ | |  | `joa` | `CHAR(6)` | Joint Operating Agreement |
| `JntOpgAgrmtText` |  | |  | `coalesce( _JntOpgAgrmtText[1:Language = $session.system_language ].JntOpgAgrmtText , _JntOpgAgrmtText[1:Language = 'E' ].JntOpgAgrmtText )` | `CHAR(40)` |  |
| `_CompanyCode` | | ✓ | | | | |
| `_JntOpgAgrmtText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmtText` | `I_JntOpgAgrmtText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJOAVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JntOpgAgrmt',
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
   usageType: {
       serviceQuality: #C,
       sizeCategory: #L,
       dataClass: #MASTER
   }          }
@EndUserText.label: 'Joint Operating Agreement'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.privilegedAssociations:[ '_JntOpgAgrmtText' ]

define view I_JntOpgAgrmtVH
  as select from t8ju as JntOpgAgrmt
  association [1..1] to I_CompanyCode     as _CompanyCode     on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntOpgAgrmtText as _JntOpgAgrmtText on  $projection.CompanyCode = _JntOpgAgrmtText.CompanyCode
                                                              and $projection.JntOpgAgrmt = _JntOpgAgrmtText.JntOpgAgrmt
{
  key bukrs                                                           as CompanyCode,
      @EndUserText.label: 'Joint Operating Agreement'
  key joa                                                             as JntOpgAgrmt,
      @EndUserText.label: 'JOA Description'
      @Semantics.text: true
      coalesce( _JntOpgAgrmtText[1:Language = $session.system_language ].JntOpgAgrmtText ,
                _JntOpgAgrmtText[1:Language = 'E' ].JntOpgAgrmtText ) as JntOpgAgrmtText,

      _JntOpgAgrmtText,
      _CompanyCode

}
```
