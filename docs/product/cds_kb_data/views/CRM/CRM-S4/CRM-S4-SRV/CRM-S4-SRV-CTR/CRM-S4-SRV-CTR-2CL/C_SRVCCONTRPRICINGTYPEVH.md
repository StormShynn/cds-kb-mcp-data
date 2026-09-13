---
name: C_SRVCCONTRPRICINGTYPEVH
description: "Srvccontrpricingtypevh"
semantic_vi: "Cung cấp danh sách loại giá cả hợp đồng dịch vụ cho việc quản lý hợp đồng dịch vụ CRM. View này được sử dụng để lấy giá trị loại giá cả cho việc chọn trong ứng dụng CRM."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "pricing type"
  - "loại giá cả"
  - "crm"
  - "hợp đồng dịch vụ crm"
  - "service contract management"
  - "quản lý hợp đồng dịch vụ"
  - "pricing type value"
  - "giá trị loại giá cả"
semantic_en: "Provides a list of service contract pricing types for use in CRM service contract management. This view is used to retrieve pricing type values for selection in CRM applications."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - pricing
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# C_SRVCCONTRPRICINGTYPEVH

**Srvccontrpricingtypevh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` | ✓ | |  |  | `CHAR(1)` | Pricing Type |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'PricingType',
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet: {
    sizeCategory: #XS
  },
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
}
@EndUserText.label: 'Pricing Type of Service Contract'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_SrvcContrPricingTypeVH
 as select from I_RepricingPricingType as RepricingPricingType
{
       @ObjectModel.text.association: '_Text'
  key  PricingType,
        
       _Text
}

where
     PricingType = 'B'
  or PricingType = 'C'
```
