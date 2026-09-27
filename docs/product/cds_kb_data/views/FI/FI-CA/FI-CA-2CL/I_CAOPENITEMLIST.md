---
name: I_CAOPENITEMLIST
description: "Caopenitemlist"
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOPENITEMLIST

**Caopenitemlist**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CAOpenItemListUUID` | ✓ | |  | `guid` | `RAW(16)` | Key for Business Partner Item (in OI Lists) |
| `OpenItemKeyDate` | ✓ | |  | `keydate` | `DATS(8)` | Key Date for Analysis of Open Items |
| `CAOpenItemListName` |  | |  | `txt50` | `CHAR(50)` | Text 50 Characters |
| `CAMassActivityType` |  | |  | `aktyp` | `CHAR(4)` | Mass activity type |
| `CAMassRunDate` |  | |  | `laufd` | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  | `laufi` | `CHAR(6)` | Run ID |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(timestamp as timestampl)` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `TransactionCode` |  | |  | `tcode` | `CHAR(20)` | Transaction Code |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Contract Accounting Open Item List'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #L } }

@VDM.viewType: #BASIC

define view entity I_CAOpenItemList
  as select from dfkkop_listh
{
  key guid                          as CAOpenItemListUUID,
      keydate                       as OpenItemKeyDate,
      txt50                         as CAOpenItemListName,
      aktyp                         as CAMassActivityType,
      laufd                         as CAMassRunDate,
      laufi                         as CAMassRunID,
      ernam                         as CreatedByUser,
      cast(timestamp as timestampl) as CreationDateTime,
      tcode                         as TransactionCode
}
```
