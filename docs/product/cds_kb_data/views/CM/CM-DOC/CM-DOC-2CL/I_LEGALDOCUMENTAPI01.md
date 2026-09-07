---
name: I_LEGALDOCUMENTAPI01
description: "Legaldocumentapi 01"
app_component: CM-DOC-2CL
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
  - CM-DOC
  - interface-view
  - document
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCUMENTAPI01

**Legaldocumentapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
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
| `LglCntntMDocumentUUID` | ✓ | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocument` |  | |  |  | `CHAR(10)` | Document ID |
| `LglCntntMDocumentIsTopVersion` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `LegalTransaction` |  | |  |  | `CHAR(10)` | Legal Transaction ID |
| `LegalTransactionUUID` |  | |  |  | `RAW(16)` | Universal Unique Identifier |
| `LglCntntMDocContentType` |  | |  |  | `CHAR(4)` | Document Content Type |
| `LglCntntMDocAccessLvl` |  | |  |  | `CHAR(4)` | Access Level |
| `InternalDocumentStatus` |  | |  |  | `CHAR(2)` | Document Status |
| `LglCntntMLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `DocumentDescription` |  | |  |  | `CHAR(255)` | Name |
| `LglCntntMIsMandatory` |  | |  |  | `CHAR(1)` | Mandatory |
| `DocumentVersion` |  | |  |  | `NUMC(2)` | Obsolete:--Document Version |
| `LegalDocumentVersion` |  | |  |  | `NUMC(4)` | Legal Document Version |
| `LglCntntMChangedByUser` |  | |  |  | `CHAR(12)` | Changed By User |
| `LglCntntMChangedUTCDateTime` |  | |  |  | `DEC(21)` | Changed UTC Date Time |
| `LglCntntMCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LglCntntMCreatedUTCDateTime` |  | |  |  | `DEC(15)` | Created On |
| `_LegalTransaction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |
| `_Extension` | `E_LegalDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILEGALDOCAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey               : ['LglCntntMDocument','LegalDocumentVersion'],
  representativeKey         : 'LglCntntMDocumentUUID',
  usageType.serviceQuality  : #A,
  usageType.sizeCategory    : #L,
  usageType.dataClass       : #TRANSACTIONAL,
  sapObjectNodeType.name    : 'LegalDocument'
}

@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Document'
define view I_LegalDocumentAPI01
  as select from I_LegalDocument
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
  association [1..1] to E_LegalDocument         as _Extension        on $projection.LglCntntMDocumentUUID = _Extension.LglCntntMDocumentUUID
{

  key LglCntntMDocumentUUID,

      LglCntntMDocument,
      LglCntntMDocumentIsTopVersion,
      LegalTransaction,
      LegalTransactionUUID,
      LglCntntMDocContentType,
      LglCntntMDocAccessLvl,
      InternalDocumentStatus,
      LglCntntMLanguage,
      DocumentDescription,
      LglCntntMIsMandatory,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'LegalDocumentVersion'
      DocumentVersion,
      LegalDocumentVersion, //new field for document version number(NUMC4)

      // Administrative Data
      LglCntntMChangedByUser,
      LglCntntMChangedUTCDateTime,
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,

      /* Associations */
      _LegalTransaction
}
where

     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
