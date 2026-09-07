---
name: I_LEGALTRANSACTIONAPI01
description: "Legaltransactionapi 01"
app_component: CM-LT-2CL
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
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSACTIONAPI01

**Legaltransactionapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
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
| `LegalTransactionUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMContextUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionHealth` |  | |  |  | `CHAR(4)` | Legal Transaction Status |
| `LglCntntMLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `LglTransWrkFlwModInstce` |  | |  |  | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `LegalTransactionSource` |  | |  |  | `CHAR(3)` | LT Integration source |
| `LglCntntMAgingTemperature` |  | |  |  | `DATS(8)` | Data Filter Value for Data Aging |
| `LglCntntMRtntnPerdStartDate` |  | |  |  | `DATS(8)` | Start of Retention Period |
| `LglCntntMGovLaw` |  | |  |  | `CHAR(7)` | Governing Law |
| `LglCntntMMainOrgType` |  | |  |  | `CHAR(2)` | Entity Technical Type |
| `LglCntntMLongTextUUID` |  | |  |  | `RAW(16)` | Description |
| `CopiedFromLegalTransactionUUID` |  | |  | `LglCntntMCrtedFrmLglTransUUID` | `RAW(16)` | Universal Unique Identifier |
| `IsEndOfPurposeBlocked` |  | |  |  | `CHAR(1)` | Business Purpose Completed |
| `LglCntntMLongText` |  | |  |  |  |  |
| `LglCntntMLongTextMimeType` |  | |  |  | `CHAR(127)` | MIME Type |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglTransAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMMainOrgCoCode` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgPurOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LglCntntMCreatedUTCDateTime` |  | |  |  | `DEC(15)` | Created On |
| `LglCntntMChangedByUser` |  | |  |  | `CHAR(12)` | Changed By User |
| `LglCntntMChangedUTCDateTime` |  | |  |  | `DEC(21)` | Changed UTC Date Time |
| `_LegalContextAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalContextAPI01` | `I_LegalContextAPI01` | [0..1] |
| `_Extension` | `E_LegalTransaction` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILEGALTRAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey: ['LegalTransaction'],
  representativeKey: 'LegalTransactionUUID',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Transaction'

define view I_LegalTransactionAPI01
  as select from I_LegalTransaction

  //Context
  association [0..1] to I_LegalContextAPI01 as _LegalContextAPI01 on $projection.LglCntntMContextUUID = _LegalContextAPI01.LglCntntMContextUUID

  //Extension
  association [1..1] to E_LegalTransaction  as _Extension         on $projection.LegalTransactionUUID = _Extension.LegalTransactionUUID

{

  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      LglCntntMContextUUID,
      LegalTransactionHealth,
      LglCntntMLanguage,
      LglTransWrkFlwModInstce,
      LegalTransactionSource,
      LglCntntMAgingTemperature,
      LglCntntMRtntnPerdStartDate,
      LglCntntMGovLaw,
      LglCntntMMainOrgType,
      LglCntntMLongTextUUID,
      LglCntntMCrtedFrmLglTransUUID as CopiedFromLegalTransactionUUID,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,

      // Notes
      LglCntntMLongText,
      LglCntntMLongTextMimeType,

      // Fields used in DCL
      LglCntntMProfile,
      LglTransAccessLvl,
      LglCntntMMainOrgCoCode,
      LglCntntMMainOrgSalesOrg,
      LglCntntMMainOrgPurOrg,

      //  Administrative data
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,
      LglCntntMChangedByUser,
      LglCntntMChangedUTCDateTime,

      //Assotiations
      _LegalContextAPI01

}

where
     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
