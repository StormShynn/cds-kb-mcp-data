---
name: I_SYSTEMSTATUSTEXT
description: "Systemstatustext"
app_component: CA-GTF-VDM
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
  - CA-GTF
  - CA-GTF-VDM
  - interface-view
  - text-view
  - text
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_SYSTEMSTATUSTEXT

**Systemstatustext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
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
| `SystemStatus` | ✓ | |  | `istat` | `CHAR(5)` | System status |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SystemStatusName` |  | |  | `txt30` | `CHAR(30)` | Individual Status of an Object |
| `SystemStatusShortName` |  | |  | `txt04` | `CHAR(4)` | Individual status of an object (short form) |
| `_SystemStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SystemStatus` | `I_SystemStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SystemStatus'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M 
@EndUserText.label: 'System Status - Text'
@VDM.viewType: #BASIC 
@AbapCatalog.sqlViewName: 'ISYSSTATTEXT'
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'tj02t',role:#MAIN,
                    viewElement:  ['SystemStatus', 'Language'],
                    tableElement: ['istat', 'spras']
                }
            ]
        }
    }
    }
define view I_SystemStatusText as select from tj02t 
association[0..1] to I_SystemStatus as _SystemStatus on $projection.SystemStatus = _SystemStatus.SystemStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language 
 {
  @ObjectModel.foreignKey.association: '_SystemStatus'
  key tj02t.istat as SystemStatus, 
  
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language' 
  key tj02t.spras as Language, 
  
  @Semantics.text: true
  tj02t.txt30 as SystemStatusName,
  
  @Semantics.text: true
  tj02t.txt04 as SystemStatusShortName, 
  
  _SystemStatus,
  _Language
}
```
