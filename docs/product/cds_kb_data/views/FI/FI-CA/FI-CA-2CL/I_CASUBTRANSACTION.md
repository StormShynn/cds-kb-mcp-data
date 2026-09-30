---
name: I_CASUBTRANSACTION
description: "Casubtransaction"
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
# I_CASUBTRANSACTION

**Casubtransaction**

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
| `CAApplicationArea` | ✓ | |  | `applk` | `CHAR(1)` | Application Area |
| `CAMainTransaction` | ✓ | |  | `hvorg` | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` | ✓ | |  | `tvorg` | `CHAR(4)` | Subtransaction for Document Item |
| `CAMainTransactionForReversal` |  | |  | `hvorg_rev` | `CHAR(4)` | Main Transaction for Offsetting Item for Reversal |
| `CASubTransactionForReversal` |  | |  | `tvorg_rev` | `CHAR(4)` | Subtransaction for Offsetting Item for Reversal |
| `CADueDateDeterminationRule` |  | |  | `faetp` | `CHAR(1)` | Special Due Date Determination |
| `CAWithholdingTaxAmountType` |  | |  | `qsvtp` | `CHAR(1)` | Withholding Tax Amount Type |
| `CARuleForAddlReceivables` |  | |  | `rladdr` | `CHAR(2)` | Rule For Additional Receivable |
| `CAIsPaymentTransaction` |  | |  | `xpayt` | `CHAR(1)` | Payment Transaction |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_MainTransaction` |  | |  | `_CAMainTransaction` |  |  |
| `_MainTransactionRev` |  | |  | `_CAReversalMainTransaction` |  |  |
| `_SubTransactionRev` |  | |  | `_CAReversalSubTransaction` |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAMainTransaction` | | ✓ | | | | |
| `_CAReversalMainTransaction` | | ✓ | | | | |
| `_CAReversalSubTransaction` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAMainTransaction` | `I_CAMainTransaction` | [1..1] |
| `_CAReversalMainTransaction` | `I_CAMainTransaction` | [0..1] |
| `_CAReversalSubTransaction` | `I_CASubTransaction` | [0..1] |
| `_Text` | `I_CASubTransactionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Subtransaction'

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled: true }

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CASubTransaction',
                sapObjectNodeType.name: 'ContrAcctgSubtransaction',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubTransaction
  as select from tfktvo

  association [1..1] to I_CAApplicationArea    as _CAApplicationArea         on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [1..1] to I_CAMainTransaction    as _CAMainTransaction         on  $projection.CAApplicationArea = _CAMainTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransaction = _CAMainTransaction.CAMainTransaction
  association [0..1] to I_CAMainTransaction    as _CAReversalMainTransaction on  $projection.CAApplicationArea            = _CAReversalMainTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransactionForReversal = _CAReversalMainTransaction.CAMainTransaction
  association [0..1] to I_CASubTransaction     as _CAReversalSubTransaction  on  $projection.CAApplicationArea            = _CAReversalSubTransaction.CAApplicationArea
                                                                             and $projection.CAMainTransactionForReversal = _CAReversalSubTransaction.CAMainTransaction
                                                                             and $projection.CASubTransactionForReversal  = _CAReversalSubTransaction.CASubTransaction
  association [0..*] to I_CASubTransactionText as _Text                      on  $projection.CAApplicationArea = _Text.CAApplicationArea
                                                                             and $projection.CAMainTransaction = _Text.CAMainTransaction
                                                                             and $projection.CASubTransaction  = _Text.CASubTransaction
{
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key tfktvo.applk     as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAMainTransaction'
  key tfktvo.hvorg     as CAMainTransaction,
      @ObjectModel.text.association: '_Text'
  key tfktvo.tvorg     as CASubTransaction,

      @ObjectModel.foreignKey.association: '_CAReversalMainTransaction'
      tfktvo.hvorg_rev as CAMainTransactionForReversal,
      @ObjectModel.foreignKey.association: '_CAReversalSubTransaction'
      tfktvo.tvorg_rev as CASubTransactionForReversal,
      tfktvo.faetp     as CADueDateDeterminationRule,
      tfktvo.qsvtp     as CAWithholdingTaxAmountType,
      tfktvo.rladdr    as CARuleForAddlReceivables,
      tfktvo.xpayt     as CAIsPaymentTransaction,
      /*
            hvorg_spl,
            tvorg_spl,
            xnega,
      */

      /* Associations */
      _CAApplicationArea,
      _CAMainTransaction,
      _CAReversalMainTransaction,
      _CAReversalSubTransaction,
      _Text,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea, 

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAMainTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAMainTransaction'
      _CAMainTransaction as _MainTransaction,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAReversalMainTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAReversalMainTransaction'
      _CAReversalMainTransaction as _MainTransactionRev,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAReversalSubTransaction'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAReversalSubTransaction'
      _CAReversalSubTransaction as _SubTransactionRev
}
where
  applk = 'C'
```
