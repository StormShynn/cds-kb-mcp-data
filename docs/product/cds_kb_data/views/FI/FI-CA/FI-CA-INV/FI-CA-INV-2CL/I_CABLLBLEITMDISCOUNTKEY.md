---
name: I_CABLLBLEITMDISCOUNTKEY
description: "Cabllbleitmdiscountkey"
semantic_vi: "View Cabllbleitmdiscountkey hiển thị các khóa giảm giá cho mục và dữ liệu sử dụng cho quản lý kho, hữu ích khi xử lý giảm giá cho mục trong thành phần FI-CA-INV-2CL."
keywords:
  - "inventory management"
  - "giảm giá"
  - "điều khoản giảm giá"
  - "fi-ca-inv-2cl"
  - "công cụ quản lý kho"
  - "đơn vị giảm giá"
  - "giảm giá cho mục"
  - "discount key"
  - "điều khoản giảm giá cho mục"
semantic_en: "The Cabllbleitmdiscountkey view exposes item discount keys and utilization data for inventory management, useful when processing discounts for items in the FI-CA-INV-2CL component."
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
# I_CABLLBLEITMDISCOUNTKEY

**Cabllbleitmdiscountkey**

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
| `CABllbleItmDiscountKey` | ✓ | | `_tfk8117` | `disckey` | `CHAR(8)` | Discount/Charge Key |
| `CABllbleItmDiscUtilzn` |  | | `_tfk8117` | `utilization` | `CHAR(1)` | Use of Discount/Charge |
| `_CABllbleItmDiscountKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmDiscountKeyText` | `I_CABllbleItmDiscountKeyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Rabatt-/Zuschlagschlüssel für abr. Pos.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmDiscountKey',
  sapObjectNodeType.name: 'ContrAcctgBllbleItmDiscountKey',
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
define view entity I_CABllbleItmDiscountKey
  as select from tfk8117 as _tfk8117
  association [0..*] to I_CABllbleItmDiscountKeyText as _CABllbleItmDiscountKeyText on $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKeyText.CABllbleItmDiscountKey

{
      @ObjectModel.text.association: '_CABllbleItmDiscountKeyText'
  key _tfk8117.disckey as CABllbleItmDiscountKey,
      _tfk8117.utilization as CABllbleItmDiscUtilzn,
      _CABllbleItmDiscountKeyText
}
```
