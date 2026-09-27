---
name: I_CAPOSTINGREASONTEXT
description: "Capostingreasontext"
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
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPOSTINGREASONTEXT

**Capostingreasontext**

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
| `CADocumentOriginCode` | ✓ | |  |  | `CHAR(2)` | Document Origin Key |
| `CAPostingReason` | ✓ | |  | `cast( WriteOffReasonText.CAWriteOffReason as bugrd_kk preserving type )` | `CHAR(2)` | Posting Reason (For Write-Offs And Transfer Postings) |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `CAPostingReasonName` |  | |  | `cast( WriteOffReasonText.CAWriteOffReasonName as potxt_kk preserving type )` | `CHAR(50)` | Description of Posting Reason |
| `_DocOriginCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document Posting Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAPostingReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #C,
                             sizeCategory: #S } }

@VDM.viewType: #COMPOSITE

define view entity I_CAPostingReasonText
  as select from I_CAWriteOffReasonText as WriteOffReasonText
    join         I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '16'
                                                         or DocOriginCode.CADocumentOriginCode = '17'
                                                         or DocOriginCode.CADocumentOriginCode = '53'
                                                         or DocOriginCode.CADocumentOriginCode = '74'
                                                         or DocOriginCode.CADocumentOriginCode = '2W'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_DocOriginCode'
  key DocOriginCode.CADocumentOriginCode,
  key cast( WriteOffReasonText.CAWriteOffReason as bugrd_kk preserving type )     as CAPostingReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key WriteOffReasonText.Language,
      @Semantics.text
      cast( WriteOffReasonText.CAWriteOffReasonName as potxt_kk preserving type ) as CAPostingReasonName,

      _DocOriginCode,
      _Language
}

union select from I_CATransferReasonText as TransferReasonText
  join            I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '34'
                                                          or DocOriginCode.CADocumentOriginCode = '54'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( TransferReasonText.CATransferReason as bugrd_kk preserving type )     as CAPostingReason,
  key TransferReasonText.Language,
      cast( TransferReasonText.CATransferReasonName as potxt_kk preserving type ) as CAPostingReasonName,

      _DocOriginCode,
      _Language
}

union select from I_CAAdjustmentRequestReasonT as AdjustmentRequestReasonText
  join            I_CADocumentOriginCode       as DocOriginCode on DocOriginCode.CADocumentOriginCode = 'A1'
                                                                or DocOriginCode.CADocumentOriginCode = 'A2'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( AdjustmentRequestReasonText.CAAdjustmentRequestReason as bugrd_kk preserving type )     as CAPostingReason,
  key AdjustmentRequestReasonText.Language,
      cast( AdjustmentRequestReasonText.CAAdjustmentRequestReasonName as potxt_kk preserving type ) as CAPostingReasonName,

      _DocOriginCode,
      _Language
}

union select from I_CAReversalReasonText as ReversalReasonText
  join            I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '02'
                                                          or DocOriginCode.CADocumentOriginCode = '1S'
                                                          or DocOriginCode.CADocumentOriginCode = '49'
                                                          or DocOriginCode.CADocumentOriginCode = '4S'
                                                          or DocOriginCode.CADocumentOriginCode = 'S7'
                                                          or DocOriginCode.CADocumentOriginCode = 'S9'
                                                          or DocOriginCode.CADocumentOriginCode = '71'
                                                          or DocOriginCode.CADocumentOriginCode = '78'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..1] to I_Language             as _Language      on $projection.Language = _Language.Language
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( ReversalReasonText.CAReversalReason as bugrd_kk preserving type ) as CAPostingReason,
  key ReversalReasonText.Language,
      cast( ReversalReasonText.CAReversalReasonText as potxt_kk )             as CAPostingReasonName,

      _DocOriginCode,
      _Language
}
```
