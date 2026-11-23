---
name: I_CABILLGREQSTATUSTEXT
description: "Cabillgreqstatustext"
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
  - text-view
  - text
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGREQSTATUSTEXT

**Cabillgreqstatustext**

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
| `CABillgReqStatus` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as billreqstatus_kk preserving type )` | `CHAR(1)` | Status of Billing Request |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CABillgReqStatusText` |  | |  | `cast ( ddtext as descr_60_kk preserving type )` | `CHAR(60)` | Description |
| `_CABillgReqStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgReqStatus` | `I_CABillgReqStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Quellbelegpositionstyp (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgReqStatus',
  sapObjectNodeType.name: 'ContrAcctgBillingReqStatusText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgReqStatusText
  as select from dd07t
  association [0..1] to I_CABillgReqStatus as _CABillgReqStatus on $projection.CABillgReqStatus = _CABillgReqStatus.CABillgReqStatus
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_CABillgReqStatus'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as billreqstatus_kk preserving type ) as CABillgReqStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                   as Language,

      @ObjectModel.sort.enabled: false
      @Semantics.text: true
      cast ( ddtext as descr_60_kk preserving type )                                 as CABillgReqStatusText,

      _CABillgReqStatus,
      _Language
}
where
      domname  = 'BILLREQSTATUS_KK'
  and as4local = 'A'
```
