---
name: I_CAPOSTINGREASON
description: "Capostingreason"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPOSTINGREASON

**Capostingreason**

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
| `CAPostingReason` | ✓ | |  | `cast( WriteOffReason.CAWriteOffReason as bugrd_kk preserving type )` | `CHAR(2)` | Posting Reason (For Write-Offs And Transfer Postings) |
| `_DocOriginCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_Text` | `I_CAPostingReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Document Posting Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPostingReason',
                sapObjectNodeType.name: 'ContrAcctgPostingReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #C,
                             sizeCategory: #S } }

@VDM.viewType: #COMPOSITE

define view entity I_CAPostingReason
  as select from I_CAWriteOffReason     as WriteOffReason
    join         I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '16'
                                                         or DocOriginCode.CADocumentOriginCode = '17'
                                                         or DocOriginCode.CADocumentOriginCode = '53'
                                                         or DocOriginCode.CADocumentOriginCode = '74'
                                                         or DocOriginCode.CADocumentOriginCode = '2W'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..*] to I_CAPostingReasonText  as _Text          on $projection.CAPostingReason = _Text.CAPostingReason
{
      @ObjectModel.foreignKey.association: '_DocOriginCode'
  key DocOriginCode.CADocumentOriginCode,
      @ObjectModel.text.association: '_Text'
  key cast( WriteOffReason.CAWriteOffReason as bugrd_kk preserving type ) as CAPostingReason,
      _DocOriginCode,
      _Text
}

union select from I_CATransferReason     as TransferReason
  join            I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '34'
                                                          or DocOriginCode.CADocumentOriginCode = '54'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..*] to I_CAPostingReasonText  as _Text          on $projection.CAPostingReason = _Text.CAPostingReason
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( TransferReason.CATransferReason as bugrd_kk preserving type ) as CAPostingReason,

      _DocOriginCode,
      _Text
}

union select from I_CAAdjustmentRequestReason as AdjustmentRequestReason
  join            I_CADocumentOriginCode      as DocOriginCode on DocOriginCode.CADocumentOriginCode = 'A1'
                                                               or DocOriginCode.CADocumentOriginCode = 'A2'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..*] to I_CAPostingReasonText  as _Text          on $projection.CAPostingReason = _Text.CAPostingReason
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( AdjustmentRequestReason.CAAdjustmentRequestReason as bugrd_kk preserving type ) as CAPostingReason,

      _DocOriginCode,
      _Text
}

union select from I_CAReversalReason     as ReversalReason
  join            I_CADocumentOriginCode as DocOriginCode on DocOriginCode.CADocumentOriginCode = '02'
                                                          or DocOriginCode.CADocumentOriginCode = '1S'
                                                          or DocOriginCode.CADocumentOriginCode = '49'
                                                          or DocOriginCode.CADocumentOriginCode = '4S'
                                                          or DocOriginCode.CADocumentOriginCode = 'S7'
                                                          or DocOriginCode.CADocumentOriginCode = 'S9'
                                                          or DocOriginCode.CADocumentOriginCode = '71'
                                                          or DocOriginCode.CADocumentOriginCode = '78'
  association [1..1] to I_CADocumentOriginCode as _DocOriginCode on $projection.CADocumentOriginCode = _DocOriginCode.CADocumentOriginCode
  association [0..*] to I_CAPostingReasonText  as _Text          on $projection.CAPostingReason = _Text.CAPostingReason
{
  key DocOriginCode.CADocumentOriginCode,
  key cast( ReversalReason.CAReversalReason as bugrd_kk preserving type ) as CAPostingReason,

      _DocOriginCode,
      _Text
}
```
