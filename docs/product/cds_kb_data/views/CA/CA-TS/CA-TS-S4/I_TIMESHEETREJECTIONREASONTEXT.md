---
name: I_TIMESHEETREJECTIONREASONTEXT
description: "Timesheetrejectionreasontext"
app_component: CA-TS-S4
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
  - CA-TS
  - interface-view
  - text-view
  - text
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETREJECTIONREASONTEXT

**Timesheetrejectionreasontext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TimeSheetRejectionReason` | ✓ | |  | `reason` | `CHAR(4)` | Reason for rejection |
| `TimeSheetRejectionReasonText` |  | |  | `cast(text as catsrejetext preserving type )` | `CHAR(50)` | Timesheet Rejection Reason Text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTREJECTTXT'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeSheetRejectionReason'
@EndUserText.label: 'Rejection Reason for Timesheet - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_TimeSheetRejectionReasonText
  as select from tcatsdt
//      association[0..1] to I_TimeSheetRejectionReason as _TimeSheetRejectionReason      
//       on $projection.TimeSheetRejectionReason = _TimeSheetRejectionReason.TimeSheetRejectionReason
      association[0..1] to I_Language             as _Language                  
       on $projection.Language = _Language.Language
{

       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  langu  as Language,

//       @ObjectModel.foreignKey.association: '_TimeSheetRejectionReason'
       @ObjectModel.text.element: ['TimeSheetRejectionReasonText']
  key  reason as TimeSheetRejectionReason,

       //@EndUserText.label: 'Rejection Reason Text'
       //Commented Label in CE2111 For ATC Resolution As Part Of ES
       //Casting added for Label
       @Semantics.text: true
       cast(text as catsrejetext preserving type )   as TimeSheetRejectionReasonText,
       
       //Associations
//      _TimeSheetRejectionReason,
      _Language 

}
```
