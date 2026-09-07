---
name: I_TIMESHEETSTATUSTEXT
description: "Timesheetstatustext"
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
  - status
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETSTATUSTEXT

**Timesheetstatustext**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TimeSheetStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `TimeSheetStatusText` |  | |  | `cast( ddtext as catsstatustext preserving type )` | `CHAR(60)` | Timesheet Status Text |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTSTATUSTXT'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeSheetStatus'
@EndUserText.label: 'Status for Timesheet Record - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE ]
define view I_TimeSheetStatusText
  as select from dd07t
{

      @Semantics.language: true
  key ddlanguage as Language,

      @EndUserText.label: 'Status Code'
      @ObjectModel.text.element: ['TimesheetStatusText']
  key domvalue_l as TimeSheetStatus,
      // CE2111 : Commeneted @EndUserText.label For Resolving ATC 
      // Casting added to ddtext
      //@EndUserText.label: 'Status Text'
      @Semantics.text: true
      cast( ddtext as catsstatustext preserving type )  as TimeSheetStatusText

}
where
      domname  = 'CATSSTATUS'
  and as4local = 'A'
```
