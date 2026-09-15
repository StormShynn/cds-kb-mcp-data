---
name: I_SRVCMGMTORGANIZATIONUNITTEXT
description: "Srvcmgmtorganizationunittext"
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
  - text-view
  - text
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SRVCMGMTORGANIZATIONUNITTEXT

**Srvcmgmtorganizationunittext**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `OrganizationalUnit` |  | |  | `objid` | `NUMC(8)` | Object ID |
| `StartDate` |  | |  | `begda` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `endda` | `DATS(8)` | End Date |
| `OrganizationalUnitShortName` |  | |  | `short` | `CHAR(12)` | Object Abbreviation |
| `OrganizationalUnitName` |  | |  | `stext` | `CHAR(40)` | Object Name |
| `_SrvcMgmtOrganizationUnit` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcMgmtOrganizationUnit` | `I_SrvcMgmtOrganizationUnit` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Mgmt Organizational Unit - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'OrgUnitTypeIDConcatenated',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #L
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE,
   #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.technicalName: 'ISRVCORGUNITTXT'

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcMgmtOrganizationUnitText
  as select from hrp1000
  association [1]    to I_SrvcMgmtOrganizationUnit as _SrvcMgmtOrganizationUnit on $projection.OrgUnitTypeIDConcatenated = _SrvcMgmtOrganizationUnit.OrgUnitTypeIDConcatenated
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{
        @ObjectModel.foreignKey.association: '_SrvcMgmtOrganizationUnit'
  key   otjid as OrgUnitTypeIDConcatenated,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   langu as Language,
        objid as OrganizationalUnit,
        begda as StartDate,
        endda as EndDate,      
        short as OrganizationalUnitShortName,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Semantics.text: true
        stext as OrganizationalUnitName,

        _SrvcMgmtOrganizationUnit,
        _Language

}
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
