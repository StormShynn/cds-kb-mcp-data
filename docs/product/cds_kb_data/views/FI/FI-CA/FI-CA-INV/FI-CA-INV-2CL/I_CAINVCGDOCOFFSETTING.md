---
name: I_CAINVCGDOCOFFSETTING
description: "Cainvcgdocoffsetting"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCOFFSETTING

**Cainvcgdocoffsetting**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvoicingDocument` | ✓ | |  | `invdocno` | `CHAR(12)` | Number of Invoicing Document |
| `CAInvcgDocOffsettingItem` | ✓ | |  | `invdocoitem` | `NUMC(8)` | Sequential Number of Document Item |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` | `CHAR(20)` | Offsetting Reference Key |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` | `CHAR(3)` | Offsetting Category |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` | `CHAR(2)` | Offsetting Procedure |
| `CAInvcgOffsettingGroup` |  | |  | `offset_invgr` | `CHAR(6)` | Grouping of Offsetting Items |
| `CAInvcgOffsettingStatus` |  | |  | `offset_status` | `CHAR(1)` | Status of Offsetting Processing |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CAProviderContractItemNumber` |  | |  | `vtpos` | `NUMC(6)` | Contract: Item Number |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CAInvcgDocumentReqd` |  | |  | `invdocno_req` | `CHAR(12)` | Offset Invoice Document |
| `CAItemReqdPeriodStartDate` |  | |  | `date_from_req` | `DATS(8)` | Start of Period of Line Item |
| `CAItemReqdPeriodEndDate` |  | |  | `date_to_req` | `DATS(8)` | End of Period of Line Item |
| `CADocumentNumberReqd` |  | |  | `cast(opbel_req as opbel_gfn_kk preserving type )` | `CHAR(12)` | Document |
| `CARepetitionItemNumberReqd` |  | |  | `opupw_req` | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABusinessPartnerItemNmbrReqd` |  | |  | `opupk_req` | `NUMC(4)` | Item Number in FI-CA Document |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CAInvcgOffsettingStatus` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAInvcgDocumentReqd` | | ✓ | | | | |
| `_CADocumentNumberReqd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CAInvcgOffsettingStatus` | `I_CAInvcgOffsettingStatus` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAInvcgDocumentReqd` | `I_CAInvcgDocHeader` | [1..1] |
| `_CADocumentNumberReqd` | `I_CADocument` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakt.bel. Anrechnungspositionen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CAInvcgDocOffsettingItem',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocOffstgItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocOffsetting
  as select from dfkkinvdoc_o
  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocHeader           on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory  on $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure on $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  association [0..1] to I_CAInvcgOffsettingStatus    as _CAInvcgOffsettingStatus    on $projection.CAInvcgOffsettingStatus = _CAInvcgOffsettingStatus.CAInvcgOffsettingStatus
  association [0..1] to I_CASubApplication           as _CASubApplication           on $projection.CASubApplication = _CASubApplication.CASubApplication

  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocumentReqd        on $projection.CAInvcgDocumentReqd = _CAInvcgDocumentReqd.CAInvoicingDocument
  association [1..1] to I_CADocument                 as _CADocumentNumberReqd       on $projection.CADocumentNumberReqd = _CADocumentNumberReqd.CADocumentNumber

{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                         as CAInvoicingDocument,
  key invdocoitem                                      as CAInvcgDocOffsettingItem,
      offset_refid                                     as CAInvcgOffsettingReferenceKey,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                       as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                      as CAInvcgOffsettingProcedure,
      offset_invgr                                     as CAInvcgOffsettingGroup,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingStatus'
      offset_status                                    as CAInvcgOffsettingStatus,
      vtref                                            as CAContract,
      vtpos                                            as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                            as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentReqd'
      invdocno_req                                     as CAInvcgDocumentReqd,
      date_from_req                                    as CAItemReqdPeriodStartDate,
      date_to_req                                      as CAItemReqdPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CADocumentNumberReqd'
      cast(opbel_req as opbel_gfn_kk preserving type ) as CADocumentNumberReqd,
      opupw_req                                        as CARepetitionItemNumberReqd,
      opupk_req                                        as CABusinessPartnerItemNmbrReqd,

      // associations
      _CAInvcgDocHeader,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CAInvcgOffsettingStatus,
      _CASubApplication,
      _CAInvcgDocumentReqd,
      _CADocumentNumberReqd
}
```
