---
name: I_JOINTVENTURECOMPANYCODEVH
description: "JOINTVENTURECompany CodeVH"
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
  - company-code
  - component:CA-JVA
  - lob:Cross-Application Components
  - bo:CompanyCode
---
# I_JOINTVENTURECOMPANYCODEVH

**JOINTVENTURECompany CodeVH**

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
| `CompanyCode` | ✓ | |  | `cast(bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  | `butxt` | `CHAR(25)` | Name of Company Code or Company |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVCOMPCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL 
@VDM.viewType: #BASIC
@ObjectModel:{
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION ],
   representativeKey: 'CompanyCode',
   usageType: { sizeCategory: #S,
                dataClass: #ORGANIZATIONAL,
                serviceQuality: #A
                } }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@EndUserText.label: 'JVA Company Code'

define view I_JointVentureCompanyCodeVH
  as select from t001
{
      @ObjectModel.text.element: ['CompanyCodeName']
  key cast(bukrs      as fis_bukrs preserving type) as CompanyCode,
      @Semantics.text: true
      butxt                                         as CompanyCodeName
}
where
  xjvaa = 'X'
```
