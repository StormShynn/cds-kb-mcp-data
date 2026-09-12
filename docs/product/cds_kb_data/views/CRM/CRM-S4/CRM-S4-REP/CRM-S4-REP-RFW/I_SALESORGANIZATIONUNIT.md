---
name: I_SALESORGANIZATIONUNIT
description: "Sales OrganizationUNIT"
app_component: CRM-S4-REP-RFW
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
  - sales-organization
  - component:CRM-S4-REP-RFW
  - lob:Other
  - bo:SalesOrganization
---
# I_SALESORGANIZATIONUNIT

**Sales OrganizationUNIT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
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
| `OrganizationalUnit` | ✓ | |  | `objid` | `NUMC(8)` | Object ID |
| `OrgUnitTypeIDConcatenated` |  | |  | `otjid` | `CHAR(10)` | Concatenation of Object Type and Object ID |
| `StartDate` |  | |  | `begda` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `endda` | `DATS(8)` | End Date |
| `_Text` | | ✓ | | | | |
| `_TextCurrent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesOrganizationUnitText` | [0..*] |
| `_TextCurrent` | `I_SalesOrganizationUnitText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sales Organizational Unit'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISALESORGUNIT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'OrganizationalUnit',
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

define view I_SalesOrganizationUnit
  as select distinct from hrp1000
  association [0..*] to I_SalesOrganizationUnitText as _Text on $projection.OrganizationalUnit = _Text.OrganizationalUnit
  association [0..*] to I_SalesOrganizationUnitText as _TextCurrent on $projection.OrganizationalUnit = _TextCurrent.OrganizationalUnit
                                                                   and $projection.StartDate          = _TextCurrent.StartDate
                                                                   and $projection.EndDate            = _TextCurrent.EndDate
                                                             
{
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key objid         as OrganizationalUnit,
      otjid         as OrgUnitTypeIDConcatenated,
      begda         as StartDate,
      endda         as EndDate,

      _Text,
      _TextCurrent
}
 
where
      hrp1000.otype = 'O'
  and hrp1000.istat = '1'
  and plvar         = '01'
  and begda         <= $session.system_date
  and endda         >= $session.system_date
```
