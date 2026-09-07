---
name: I_WORKFORCEPERSON_1
description: "Workforceperson 1"
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
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
# I_WORKFORCEPERSON_1

**Workforceperson 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FullName` |  | |  | `PersonFullName` | `CHAR(80)` | Full Name |
| `BirthName` |  | |  | `BusinessPartnerBirthName` | `CHAR(40)` | Name at birth of business partner |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NativePreferredLanguage` |  | |  | `CorrespondenceLanguage` | `LANG(1)` | Business Partner: Correspondence Language |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `_WorkAssignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [1..*] |
| `_BPExtension` | `E_BP_D` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL

}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkforcePerson_1
  as select distinct from I_WorkforcePersonKeyMap as Worker
    inner join            I_BusinessPartner       as BusinessPartner on BusinessPartner.BusinessPartner = Worker.BusinessPartner

  association [1..*] to I_WorkAssignment_1 as _WorkAssignment on $projection.WorkforcePersonExternalID = _WorkAssignment.WorkforcePersonExternalID
  association [0..1] to E_BP_D             as _BPExtension    on $projection.BusinessPartner = _BPExtension.BusinessPartner
{

  key Worker.WorkforcePersonExternalID,
      Worker.BusinessPartner,
      BusinessPartner.FirstName,
      BusinessPartner.MiddleName,
      BusinessPartner.LastName,
      BusinessPartner.PersonFullName           as FullName,
      BusinessPartner.BusinessPartnerBirthName as BirthName,
      BusinessPartner.Initials,
      BusinessPartner.CorrespondenceLanguage   as NativePreferredLanguage,
      @Semantics.booleanIndicator: true
      BusinessPartner.IsBusinessPurposeCompleted,
      BusinessPartner.DataControllerSet,
      BusinessPartner.DataController1,
      BusinessPartner.DataController2,
      BusinessPartner.DataController3,
      BusinessPartner.DataController4,
      BusinessPartner.DataController5,
      BusinessPartner.DataController6,
      BusinessPartner.DataController7,
      BusinessPartner.DataController8,
      BusinessPartner.DataController9,
      BusinessPartner.DataController10,
      BusinessPartner.AuthorizationGroup,


      /*Associations */
      _WorkAssignment

}
```
