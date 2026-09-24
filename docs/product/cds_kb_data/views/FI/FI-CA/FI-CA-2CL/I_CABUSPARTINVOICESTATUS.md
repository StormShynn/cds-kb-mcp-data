---
name: I_CABUSPARTINVOICESTATUS
description: "CABusiness PartnerINVOICESTATUS"
semantic_vi: "View CABusiness PartnerINVOICESTATUS cung cấp thông tin về trạng thái hóa đơn của đối tác kinh doanh trong ngữ cảnh thu tiền và chi tiền. Nó được sử dụng để theo dõi trạng thái hóa đơn liên quan đến đối tác kinh doanh."
keywords:
  - "business partner"
  - "invoice status"
  - "cabsuspartinvoicestatus"
  - "fi-ca-2cl"
  - "finance"
  - "accounts receivable"
  - "accounts payable"
  - "lob:finance"
  - "component:fi-ca-2cl"
semantic_en: "The CABusiness PartnerINVOICESTATUS view provides information about the invoice status of a business partner in the context of accounts receivable and accounts payable. It is used to track the status of invoices related to a business partner."
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
  - business-partner
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSPARTINVOICESTATUS

**CABusiness PartnerINVOICESTATUS**

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
| `CABusPartnerInvoiceStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l,2 ) as inv_status_dc_kk preserving type )` | `CHAR(2)` | Invoice Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusPartInvoiceStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Partner Invoice Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusPartnerInvoiceStatus',
                sapObjectNodeType.name: 'ContrAcctgBusPrtnInvoiceStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusPartInvoiceStatus
  as select from dd07l

  association [1..*] to I_CABusPartInvoiceStatusText as _Text on $projection.CABusPartnerInvoiceStatus = _Text.CABusPartnerInvoiceStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,2 ) as inv_status_dc_kk preserving type ) as CABusPartnerInvoiceStatus,

      //associations
      _Text

}
where
      domname  = 'INV_STATUS_DC_KK'
  and as4local = 'A'
```
