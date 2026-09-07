---
name: I_WORKFORCEPERSONSKILLTAG
description: "Workforcepersonskilltag"
app_component: CA-WFD-BL
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
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKFORCEPERSONSKILLTAG

**Workforcepersonskilltag**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
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
| `WorkforcePersonExternalID` | ✓ | | `_Person` | `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `WorkforcePersonSkillTagID` | ✓ | | `_SkillTag` | `EmployeeSkillTagID` | `RAW(16)` | GUID in 'RAW' format |
| `BusinessPartner` |  | | `_Person` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonTagText` |  | | `_SkillTag` | `EmployeeSkillTagName` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Workforce Person Skill Tag'
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType.dataClass: #MIXED,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WorkforcePersonSkillTag
  as select from I_WorkerCentralPerson as _Person

    inner join   I_EmployeeskillTags   as _SkillTag on _SkillTag.PersonnelNumber = _Person.CentralPerson
    association [0..1] to I_BusinessPartner       as _BusinessPartner on _BusinessPartner.BusinessPartner = _Person.BusinessPartner
    association [1..1] to I_WorkforcePerson_1    as _WorkforcePerson on _WorkforcePerson.WorkforcePersonExternalID = _Person.WorkforcePersonExternalID
    
{
  key _Person.WorkforcePersonExternalID,
  key _SkillTag.EmployeeSkillTagID   as WorkforcePersonSkillTagID,
      _Person.BusinessPartner,
      _SkillTag.EmployeeSkillTagName as WorkforcePersonTagText,
      
      /*Associations */
      _WorkforcePerson,
      _BusinessPartner

}
where _SkillTag.EmployeeSkillTagType = 'U'
```
