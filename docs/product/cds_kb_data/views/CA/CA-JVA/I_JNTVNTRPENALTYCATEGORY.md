---
name: I_JNTVNTRPENALTYCATEGORY
description: "Jntvntrpenaltycategory"
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
# I_JNTVNTRPENALTYCATEGORY

**Jntvntrpenaltycategory**

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
| `JntVntrPenaltyCategory` | ✓ | |  | `pencat` | `CHAR(1)` | Penalty Category |
| `_CompanyCode` | | ✓ | | | | |
| `_JntVntrPenaltyCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_JntVntrPenaltyCategoryText` | `I_JntVntrPenaltyCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVPNLTYCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JntVntrPenaltyCategory',
   usageType: {
       serviceQuality: #A,
       sizeCategory: #S,
       dataClass: #CUSTOMIZING
 }            }
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@EndUserText.label: 'Penalty Category in JVA'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]

define view I_JntVntrPenaltyCategory
  as select from t8jl
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JntVntrPenaltyCategoryText as _JntVntrPenaltyCategoryText on  $projection.CompanyCode            = _JntVntrPenaltyCategoryText.CompanyCode
                                                                                    and $projection.JntVntrPenaltyCategory = _JntVntrPenaltyCategoryText.JntVntrPenaltyCategory
{     
     @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_JointVentureCompanyCodeVH',
                           element: 'CompanyCode' }
              }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.text.association: '_JntVntrPenaltyCategoryText'
  key pencat as JntVntrPenaltyCategory,

      _CompanyCode,
      _JntVntrPenaltyCategoryText
}
```
