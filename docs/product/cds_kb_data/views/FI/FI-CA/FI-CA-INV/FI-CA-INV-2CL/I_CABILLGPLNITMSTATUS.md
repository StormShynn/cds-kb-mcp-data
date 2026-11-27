---
name: I_CABILLGPLNITMSTATUS
description: "Cabillgplnitmstatus"
semantic_vi: "View I_CABILLGPLNITMSTATUS hiển thị dữ liệu trạng thái mục kế hoạch cho hóa đơn trong thành phần FI-CA-INV-2CL. Nó được sử dụng để lấy trạng thái mục kế hoạch trong hóa đơn."
keywords:
  - "invoice"
  - "hóa đơn"
  - "planned item"
  - "trạng thái mục kế hoạch"
  - "fi-ca-inv-2cl"
  - "fi"
  - "fi-ca"
  - "fi-ca-inv"
  - "interface-view"
  - "status"
semantic_en: "The I_CABILLGPLNITMSTATUS view exposes planned item status data for invoices in the FI-CA-INV-2CL component. It is used to retrieve the status of planned items in invoices."
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
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITMSTATUS

**Cabillgplnitmstatus**

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
| `CABillgPlnItemStatus` | ✓ | |  | `cast( substring(dd07l.domvalue_l, 1, 1) as bipitem_status_kk preserving type )` | `CHAR(1)` | Status of Billing Plan Item |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABillgPlnItmStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Status der Abrechnungsplanposition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItemStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgPlanItemStatus',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnItmStatus
  as select from dd07l
  association [0..*] to I_CABillgPlnItmStatusText as _Text on $projection.CABillgPlnItemStatus = _Text.CABillgPlnItemStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( substring(dd07l.domvalue_l, 1, 1) as bipitem_status_kk preserving type ) as CABillgPlnItemStatus,

      _Text
}

where
      dd07l.domname  = 'BIPITEM_STATUS_KK'
  and dd07l.as4local = 'A';
```
