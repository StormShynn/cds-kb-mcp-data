---
name: I_LGLTRANSINTCONTACTAPI01
description: "Lgltransintcontactapi 01"
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
# I_LGLTRANSINTCONTACTAPI01

**Lgltransintcontactapi 01**

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
| `LegalTransactionIntCntctUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMRank` |  | |  |  | `INT2(5)` | Sequence Number |
| `LglCntntMIntCntctUser` |  | |  |  | `CHAR(12)` | User Name |
| `LglCntntMIntContactTeam` |  | |  |  | `CHAR(40)` | Team |
| `LglCntntMIntCntctType` |  | |  |  | `CHAR(4)` | Contact Type |
| `LglCntntMIntContactUserType` |  | |  |  | `CHAR(2)` | Assignment Type |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionMandatoryFlag` |  | |  |  | `CHAR(1)` | Control Parameter Legal Transaction Mandatory State |
| `LglCntntMIsIntegRelevant` |  | |  |  | `CHAR(1)` | Integrated |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  | `CHAR(1)` | Added By Integration Variable BAdI |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTINTCONTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionIntCntctUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass:  #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Internal Contacts of Legal Transaction'
define view I_LglTransIntContactAPI01
  as select from I_LegalTransactionIntContact
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key LegalTransactionIntCntctUUID,
      LglCntntMRank,
      LglCntntMIntCntctUser,
      LglCntntMIntContactTeam,
      LglCntntMIntCntctType,
      LglCntntMIntContactUserType,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction
}
where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
