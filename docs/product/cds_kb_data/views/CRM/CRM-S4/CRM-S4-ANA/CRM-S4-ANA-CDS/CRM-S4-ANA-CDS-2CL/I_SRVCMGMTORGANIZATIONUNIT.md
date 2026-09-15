---
name: I_SRVCMGMTORGANIZATIONUNIT
description: "Srvcmgmtorganizationunit"
app_component: CRM-S4-ANA-CDS-2CL
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
  - CRM
  - interface-view
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SRVCMGMTORGANIZATIONUNIT

**Srvcmgmtorganizationunit**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
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
| `OrgUnitTypeIDConcatenated` | ✓ | |  | `otjid` | `CHAR(10)` | Concatenation of Object Type and Object ID |
| `OrganizationalUnit` |  | |  | `objid` | `NUMC(8)` | Object ID |
| `Language` |  | |  | `langu` | `LANG(1)` | Language Key |
| `StartDate` |  | |  | `begda` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `endda` | `DATS(8)` | End Date |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcMgmtOrganizationUnitText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Management Organizational Unit'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'OrgUnitTypeIDConcatenated',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Search.searchable: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ISRVCORGUNIT'
@Analytics.internalName: #LOCAL

define view entity I_SrvcMgmtOrganizationUnit
  as select from hrp1000
  association [0..*] to I_SrvcMgmtOrganizationUnitText as _Text        on  $projection.OrgUnitTypeIDConcatenated = _Text.OrgUnitTypeIDConcatenated

{
           @Search.defaultSearchElement: true
           @ObjectModel.text.association: '_Text'
           @Search.fuzzinessThreshold: 0.8
           @Search.ranking: #HIGH
  key      otjid as OrgUnitTypeIDConcatenated,
           objid as OrganizationalUnit,
           langu as Language,
           begda as StartDate,
           endda as EndDate,

           _Text
}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
