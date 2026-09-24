---
name: I_CABUSTRANSOBJECT
description: "Cabustransobject"
semantic_vi: "View Cabustransobject hiển thị các đối tượng giao dịch kinh doanh liên quan đến kế toán tiền mặt, cung cấp truy cập vào các trường khóa chính như đối tượng giao dịch kinh doanh. Nó được sử dụng để truy xuất và thao tác các đối tượng này trong các ứng dụng FI-CA-2CL."
keywords:
  - "cash accounting"
  - "đối tượng giao dịch kinh doanh"
  - "fi-ca-2cl"
  - "business transaction object"
  - "kế toán tiền mặt"
  - "giao dịch kinh doanh"
  - "transaction object"
  - "fi ca 2cl"
semantic_en: "The Cabustransobject view exposes business transaction objects related to cash accounting, providing access to key fields such as the business transaction object itself. It is used to retrieve and manipulate these objects in FI-CA-2CL applications."
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
# I_CABUSTRANSOBJECT

**Cabustransobject**

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
| `CABusinessTransactionObject` | ✓ | |  | `cast( left( dd07l.domvalue_l, 8 ) as evl_objid_kk preserving type )` | `CHAR(8)` | Business Transaction: Object Identification |
| `_CABusTransObjText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABusTransObjText` | `I_CABusTransObjectText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Object'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusinessTransactionObject',
                sapObjectNodeType.name: 'ContrAcctgBusTransObject',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransObject
  as select from dd07l

  association [1..*] to I_CABusTransObjectText as _CABusTransObjText on $projection.CABusinessTransactionObject = _CABusTransObjText.CABusinessTransactionObject

{
      @ObjectModel.text.association: '_CABusTransObjText'
  key cast( left( dd07l.domvalue_l, 8 ) as evl_objid_kk preserving type ) as CABusinessTransactionObject,

      _CABusTransObjText

}
where
      domname        = 'EVL_OBJID_KK'
  and dd07l.as4local = 'A'
```
