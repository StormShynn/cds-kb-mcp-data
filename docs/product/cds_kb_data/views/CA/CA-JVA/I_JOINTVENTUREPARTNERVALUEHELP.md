---
name: I_JOINTVENTUREPARTNERVALUEHELP
description: "Jointventurepartnervaluehelp"
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
  - partner
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTUREPARTNERVALUEHELP

**Jointventurepartnervaluehelp**

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
| `JointVenturePartner` | ✓ | |  | `cast( jvp.partn as jv_part_cds preserving type )` | `CHAR(10)` | Joint Venture Partner |
| `JointVenturePartnerShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )` | `CHAR(35)` | Name of the joint venture partner |
| `JointVenturePartner2ShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type )` | `CHAR(40)` | JVA Partner name |
| `JntVntrIntcoCode` |  | |  | `intcocd` | `CHAR(4)` | Intercompany code |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@Analytics.technicalName:'IJVPRTNVH'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@ObjectModel:{
   representativeKey: 'JointVenturePartner',
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
   usageType: {
       serviceQuality: #C,
       sizeCategory: #L,
       dataClass: #MASTER
   }          }
@EndUserText.label: 'Joint Venture Partner'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 
@Analytics.settings.valueHelp.supressInitialValue: true
@Consumption.ranked:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@AccessControl.privilegedAssociations:[ '_BusinessPartner' ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_JointVenturePartnerValueHelp
 as select from t8jo as jvp

  association [0..1] to I_CompanyCode     as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.JointVenturePartner = _BusinessPartner.BusinessPartner
{
      @ObjectModel.foreignKey.association: '_CompanyCode'     
      @Search:{ defaultSearchElement: true , fuzzinessThreshold: 0.8 , ranking: #HIGH }
  key jvp.bukrs                                                                                  as CompanyCode,
        @ObjectModel.text.element: ['JointVenturePartner2ShortText']        
  key cast( jvp.partn as jv_part_cds preserving type )                                           as JointVenturePartner,
      @Semantics.text: true
      cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )       as JointVenturePartnerShortText,
      cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type ) as JointVenturePartner2ShortText,
      jvp.intcocd                                                                                as JntVntrIntcoCode,
      _CompanyCode,
      _BusinessPartner
    }
```
