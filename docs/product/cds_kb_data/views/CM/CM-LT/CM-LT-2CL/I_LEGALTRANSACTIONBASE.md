---
name: I_LEGALTRANSACTIONBASE
description: "Legaltransactionbase"
app_component: CM-LT-2CL
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
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSACTIONBASE

**Legaltransactionbase**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
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
| `LegalTransactionUUID` | ✓ | |  | `legaltransactionuuid` | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  | `legaltransaction` | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | |  | `legaltransactiontitle` | `CHAR(128)` | Legal Transaction Name |
| `LegalTransactionHealth` |  | |  | `legaltransactionhealth` | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMLanguage` |  | |  | `lglcntntmlanguage` | `LANG(1)` | Language Key |
| `LglCntntMCreatedByUser` |  | |  | `lglcntntmcreatedbyuser` | `CHAR(12)` | Created By |
| `LglCntntMCreatedUTCDateTime` |  | |  | `lglcntntmcreatedutcdatetime` | `DEC(15)` | Created On |
| `LglCntntMChangedByUser` |  | |  | `lglcntntmchangedbyuser` | `CHAR(12)` | Changed By User |
| `LglCntntMChangedUTCDateTime` |  | |  | `lglcntntmchangedutcdatetime` | `DEC(21)` | Changed UTC Date Time |
| `LglCntntMProfile` |  | |  | `lglcntntmprofile` | `CHAR(10)` | Profile |
| `IsEndOfPurposeBlocked` |  | |  | `isendofpurposeblocked` | `CHAR(1)` | Business Purpose Completed |
| `LglCntntMGovLaw` |  | |  | `lglcntntmgovlaw` | `CHAR(7)` | Governing Law |
| `LglTransAccessLvl` |  | |  | `lgltransaccesslvl` | `CHAR(4)` | Access Level |
| `LglCntntMMainOrgType` |  | |  | `lglcntntmmainorgtype` | `CHAR(2)` | Entity Technical Type |
| `LglCntntMMainOrgCoCode` |  | |  | `lglcntntmmainorgcocode` | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | |  | `lglcntntmmainorgsalesorg` | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgPurOrg` |  | |  | `lglcntntmmainorgpurorg` | `CHAR(10)` | Entity ID |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_LegalTransaction` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'ILEGALTRBASE'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Basic Data of Legal Transaction'
define view I_LegalTransactionBase
  as select from lcm_legaltr

  //Extension
  association [1..1] to E_LegalTransaction as _Extension on $projection.LegalTransactionUUID = _Extension.LegalTransactionUUID
{
      @Consumption.filter.hidden : true
  key legaltransactionuuid        as LegalTransactionUUID,

      legaltransaction            as LegalTransaction,

      @Semantics.text: true
      legaltransactiontitle       as LegalTransactionTitle,

      legaltransactionhealth      as LegalTransactionHealth,
      lglcntntmlanguage           as LglCntntMLanguage,
      lglcntntmcreatedbyuser      as LglCntntMCreatedByUser,
      lglcntntmcreatedutcdatetime as LglCntntMCreatedUTCDateTime,
      lglcntntmchangedbyuser      as LglCntntMChangedByUser,
      lglcntntmchangedutcdatetime as LglCntntMChangedUTCDateTime,
      lglcntntmprofile            as LglCntntMProfile,
      


      @Consumption.filter.hidden: true
      @Semantics.booleanIndicator: true
      isendofpurposeblocked       as IsEndOfPurposeBlocked,
      lglcntntmgovlaw             as LglCntntMGovLaw,
      lgltransaccesslvl           as LglTransAccessLvl,
      lglcntntmmainorgtype        as LglCntntMMainOrgType,
      lglcntntmmainorgcocode      as LglCntntMMainOrgCoCode,
      lglcntntmmainorgsalesorg    as LglCntntMMainOrgSalesOrg,
      lglcntntmmainorgpurorg      as LglCntntMMainOrgPurOrg
}
```
