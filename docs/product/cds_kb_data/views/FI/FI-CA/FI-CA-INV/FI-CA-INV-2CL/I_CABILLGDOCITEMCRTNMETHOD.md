---
name: I_CABILLGDOCITEMCRTNMETHOD
description: "Cabillgdocitemcrtnmethod"
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
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCITEMCRTNMETHOD

**Cabillgdocitemcrtnmethod**

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
| `CABillgDocItemCrtnMethod` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,2 ) as billitem_crmet_kk preserving type )` | `CHAR(2)` | Method Used to Create Billing Document Item |
| `_CABillgDocItemCrtnMethodText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocItemCrtnMethodText` | `I_CABillgDocItemCrtnMethodText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Erstell.methode d. Abr.bel.pos.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocItemCrtnMethod',
  sapObjectNodeType.name: 'ContrAcctgBillgDocItmCrtnMeth',
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
define view entity I_CABillgDocItemCrtnMethod
  as select from dd07l

  association [1..*] to I_CABillgDocItemCrtnMethodText as _CABillgDocItemCrtnMethodText on $projection.CABillgDocItemCrtnMethod = _CABillgDocItemCrtnMethodText.CABillgDocItemCrtnMethod
{
      @ObjectModel.text.association: '_CABillgDocItemCrtnMethodText'
  key cast ( substring( dd07l.domvalue_l,1,2 )  as billitem_crmet_kk preserving type ) as CABillgDocItemCrtnMethod,
      _CABillgDocItemCrtnMethodText
}
where
      domname  = 'BILLITEM_CRMET_KK'
  and as4local = 'A'
```
