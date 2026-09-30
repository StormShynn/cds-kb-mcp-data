---
name: I_CABILLGPLNITMAMTDATETYPE
description: "Cabillgplnitmamtdatetype"
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
# I_CABILLGPLNITMAMTDATETYPE

**Cabillgplnitmamtdatetype**

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
| `CABillgPlnItemAmountDateType` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type )` | `CHAR(1)` | Type of Amount Determination Date |
| `_CABillgPlnItmAmtDateTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmAmtDateTypeText` | `I_CABillgPlnItmAmtDateTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abr Pln Art des Betragsermittlungsdatums'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItemAmountDateType',
  sapObjectNodeType.name: 'CABillgPlnItmAmtDateType',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnItmAmtDateType
  as select from dd07l

  association [1..*] to I_CABillgPlnItmAmtDateTypeText as _CABillgPlnItmAmtDateTypeText on $projection.CABillgPlnItemAmountDateType = _CABillgPlnItmAmtDateTypeText.CABillgPlnItemAmountDateType
{
      @ObjectModel.text.association: '_CABillgPlnItmAmtDateTypeText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type ) as CABillgPlnItemAmountDateType,
      _CABillgPlnItmAmtDateTypeText
}
where
      domname  = 'BIP_AMOUNT_DATE_TYPE_KK'
  and as4local = 'A'
```
