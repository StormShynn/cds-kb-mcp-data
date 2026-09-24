---
name: I_CAALTVEXCHANGERATESETCODE
description: "CAALTVExchange RateSETCODE"
semantic_vi: "View CAALTVExchange RateSETCODE cung cấp mã hiệu tập tỷ giá cho các giao dịch tài chính. Nó được sử dụng để xác định các tập tỷ giá cụ thể trong FI-CA-2CL."
keywords:
  - "exchange rate"
  - "tỷ giá"
  - "fi-ca-2cl"
  - "financial transactions"
  - "giao dịch tài chính"
  - "fi"
  - "finance"
  - "tài chính"
semantic_en: "The CAALTVExchange RateSETCODE view provides exchange rate set codes for use in financial transactions. It is used to identify specific exchange rate sets in FI-CA-2CL."
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
  - exchange-rate
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAALTVEXCHANGERATESETCODE

**CAALTVExchange RateSETCODE**

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
| `CAAltvExchangeRateSetCode` | ✓ | |  | `cast ( left( dd07l.domvalue_l, 1 ) as xdexr_kk preserving type )` | `CHAR(1)` | Alternative Exchange Rate for Tax Items |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAltvExchangeRateSetCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Alternative Exchange Rate Set Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAltvExchangeRateSetCode',
                sapObjectNodeType.name: 'ContrAcctgAltvExchRateSetCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAltvExchangeRateSetCode 
 as select from dd07l

  association [1..*] to I_CAAltvExchangeRateSetCodeT as _Text on $projection.CAAltvExchangeRateSetCode = _Text.CAAltvExchangeRateSetCode

{
      @ObjectModel.text.association: '_Text'
  key cast ( left( dd07l.domvalue_l, 1 ) as xdexr_kk preserving type ) as CAAltvExchangeRateSetCode,

      _Text
}
where
      domname  = 'XDEXR_KK'
  and as4local = 'A'
```
