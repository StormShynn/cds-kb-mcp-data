---
name: I_LEGALCONTEXTAPI01
description: "Legalcontextapi 01"
app_component: CM-CTX-2CL
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
  - CM-CTX
  - interface-view
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTAPI01

**Legalcontextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
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
| `LglCntntMContextUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMContext` |  | |  |  | `CHAR(5)` | Context ID |
| `LglCntntMContextVersion` |  | |  |  | `CHAR(3)` | Context Version |
| `LglCntntMContextTitle` |  | |  |  | `CHAR(128)` | Legal Transaction Name |
| `LglCntntMContextOwner` |  | |  |  | `CHAR(12)` | Owner |
| `LglCntntMProfile` |  | |  |  | `CHAR(10)` | Profile |
| `LglCntntMContextStatus` |  | |  |  | `CHAR(2)` | Context Status |
| `LglCntntMContextValidFromDate` |  | |  |  | `DATS(8)` | Valid From |
| `LglCntntMContextValidToDate` |  | |  |  | `DATS(8)` | Valid To |
| `LglCntntMCntxtLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `LglCntntMPrevCntxtVers` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMCntxtIsReadOnly` |  | |  |  | `CHAR(1)` | Read Only |
| `LglCntntMGovLaw` |  | |  |  | `CHAR(7)` | Governing Law |
| `LglCntntMCntxtAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `LglCntntMMainOrgType` |  | |  |  | `CHAR(2)` | Entity Technical Type |
| `LglCntntMMainOrgCoCode` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgSalesOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMMainOrgPurOrg` |  | |  |  | `CHAR(10)` | Entity ID |
| `LglCntntMCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LglCntntMCreatedUTCDateTime` |  | |  |  | `DEC(15)` | Created On |
| `LglCntntMChangedUTCDateTime` |  | |  |  | `DEC(21)` | Changed UTC Date Time |
| `LglCntntMChangedByUser` |  | |  |  | `CHAR(12)` | Changed By User |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_LglCntntMContext` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMCONTEXTAPI01'
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey: 'LglCntntMContext',
  representativeKey: 'LglCntntMContextUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Context'
define view I_LegalContextAPI01
  as select from I_LglCntntMContextBasic

  //Extension
  association [1..1] to E_LglCntntMContext as _Extension on $projection.LglCntntMContextUUID = _Extension.LglCntntMContextUUID

{

      //Key
  key LglCntntMContextUUID,

      LglCntntMContext,
      LglCntntMContextVersion,
      LglCntntMContextTitle,
      LglCntntMContextOwner,
      LglCntntMProfile,

      //Status
      LglCntntMContextStatus,


      //Validity
      LglCntntMContextValidFromDate,
      LglCntntMContextValidToDate,

      LglCntntMCntxtLanguage,
      LglCntntMPrevCntxtVers,
      LglCntntMCntxtIsReadOnly,
      LglCntntMGovLaw,
      LglCntntMCntxtAccessLvl,

      //Organization
      LglCntntMMainOrgType,
      LglCntntMMainOrgCoCode,
      LglCntntMMainOrgSalesOrg,
      LglCntntMMainOrgPurOrg,
      
      //Administration
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,
      LglCntntMChangedUTCDateTime,
      LglCntntMChangedByUser

}
where

     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
