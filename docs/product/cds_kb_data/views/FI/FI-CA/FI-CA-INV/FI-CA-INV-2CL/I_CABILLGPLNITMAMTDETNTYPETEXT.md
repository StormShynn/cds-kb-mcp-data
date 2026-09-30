---
name: I_CABILLGPLNITMAMTDETNTYPETEXT
description: "Cabillgplnitmamtdetntypetext"
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITMAMTDETNTYPETEXT

**Cabillgplnitmamtdetntypetext**

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
| `CABillgPlnItemAmountDetnType` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as bip_amount_det_type_kk preserving type )` | `CHAR(1)` | Type of Amount Determination |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CABillgPlnItmAmtDetnTypeText` |  | |  | `cast( ddtext as bip_amt_det_type_txt_gfn_kk preserving type )` | `CHAR(60)` | Text for Type of Amount Determination |
| `_CABillgPlnItmAmtDetnType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmAmtDetnType` | `I_CABillgPlnItmAmtDetnType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICABIPITMAMTDET'
@EndUserText.label: 'Abr Pln Art der Betragsermittlung - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnItemAmountDetnType',
  sapObjectNodeType.name: 'CABillgPlnItmAmtDetnTypeTxt',
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

define view entity I_CABillgPlnItmAmtDetnTypeText
  as select from dd07t
  association [1..1] to I_CABillgPlnItmAmtDetnType as _CABillgPlnItmAmtDetnType on $projection.CABillgPlnItemAmountDetnType = _CABillgPlnItmAmtDetnType.CABillgPlnItemAmountDetnType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDetnType'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as bip_amount_det_type_kk preserving type ) as CABillgPlnItemAmountDetnType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                                          as Language,
      @Semantics.text: true
      cast( ddtext as bip_amt_det_type_txt_gfn_kk preserving type )                        as CABillgPlnItmAmtDetnTypeText,

      _CABillgPlnItmAmtDetnType,
      _Language
}
where
      domname  = 'BIP_AMOUNT_DET_TYPE_KK'
  and as4local = 'A'
```
