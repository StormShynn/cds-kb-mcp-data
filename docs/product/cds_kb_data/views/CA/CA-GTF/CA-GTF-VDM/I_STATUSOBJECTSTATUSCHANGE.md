---
name: I_STATUSOBJECTSTATUSCHANGE
description: "Statusobjectstatuschange"
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
  - status
  - component:CA-GTF-VDM
  - lob:Cross-Application Components
---
# I_STATUSOBJECTSTATUSCHANGE

**Statusobjectstatuschange**

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
| `StatusObject` | ✓ | |  | `objnr` | `CHAR(22)` | Object Number |
| `StatusCode` | ✓ | |  | `stat` | `CHAR(5)` | Object status |
| `StatusObjectStatusChangeNumber` | ✓ | |  | `chgnr` | `NUMC(3)` | Change number |
| `LastChangedByUser` |  | |  | `usnam` | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `LastChangeDate` |  | |  | `udate` | `DATS(8)` | Creation Date of Change Document |
| `LastChangeTime` |  | |  | `utime` | `TIMS(6)` | Time of Change |
| `ChangeTransactionCode` |  | |  | `cdtcode` | `CHAR(20)` | Transaction in which a change was made |
| `StatusIsInactive` |  | |  | `inact` | `CHAR(1)` | Indicator: Status Is Inactive |
| `StatusChangeOperationCode` |  | |  | `chind` | `CHAR(1)` | Change Indicator |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISTATUSOBJSTSCHG'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ClientHandling.algorithm:#SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]

@EndUserText.label: 'Change Docs for System or User Status'
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'jcds',role:#MAIN,
                    viewElement:  ['StatusObject', 'StatusCode','StatusObjectStatusChangeNumber'],
                    tableElement: ['objnr', 'stat','chgnr']
                }
            ]
        }
    }
    }
define view I_StatusObjectStatusChange
  as select from jcds
{

  key objnr   as StatusObject,
  key stat    as StatusCode,
  key chgnr   as StatusObjectStatusChangeNumber,
      usnam   as LastChangedByUser,
      udate   as LastChangeDate,
      utime   as LastChangeTime,
      cdtcode as ChangeTransactionCode,
      @Semantics.booleanIndicator
      inact   as StatusIsInactive,
      chind   as StatusChangeOperationCode

}
```
