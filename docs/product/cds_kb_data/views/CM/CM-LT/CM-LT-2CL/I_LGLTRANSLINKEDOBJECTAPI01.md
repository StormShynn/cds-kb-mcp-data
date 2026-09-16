---
name: I_LGLTRANSLINKEDOBJECTAPI01
description: "Lgltranslinkedobjectapi 01"
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
# I_LGLTRANSLINKEDOBJECTAPI01

**Lgltranslinkedobjectapi 01**

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
| `LegalTransactionLinkdObjUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMLinkdObjType` |  | |  |  | `CHAR(4)` | Linked Object Type |
| `LglCntntMLinkdObj` |  | |  |  | `CHAR(255)` | Linked Object ID |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LegalTransactionMandatoryFlag` |  | |  |  | `CHAR(1)` | Control Parameter Legal Transaction Mandatory State |
| `LegalTransactionIsTriggerObj` |  | |  |  | `CHAR(1)` | Denotes if linked object is trigger object |
| `LglCntntMIsIntegRelevant` |  | |  |  | `CHAR(1)` | Integrated |
| `LglCntntMIsAddedByIntegVarbl` |  | |  |  | `CHAR(1)` | Added By Integration Variable BAdI |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_LegalTransLinkedObjectExtn` | `E_LegalTransactionLinkedObject` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILTLINKOBJAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LegalTransactionLinkdObjUUID',
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



@EndUserText.label: 'Linked Objects of Legal Transaction'

define view I_LglTransLinkedObjectAPI01
  as select from I_LegalTrLinkedObjects
  association [1..1] to I_LegalTransactionAPI01        as _LegalTransaction           on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID

  // Extension
  association [1..1] to E_LegalTransactionLinkedObject as _LegalTransLinkedObjectExtn on $projection.LegalTransactionLinkdObjUUID = _LegalTransLinkedObjectExtn.LegalTransactionLinkdObjUUID
{
  key LegalTransactionLinkdObjUUID,
      LglCntntMLinkdObjType,
      LglCntntMLinkdObj,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      LegalTransactionIsTriggerObj,
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction
}

where
  _LegalTransaction.IsEndOfPurposeBlocked = ''
```
