---
name: I_BR_SDEXTTXCALCMATLUSAGEVH
description: "BR Sdexttxcalcmatlusagevh"
semantic_vi: "View I_BR_SDEXTTXCALCMATLUSAGEVH cung cấp dữ liệu sử dụng vật liệu cho các tính toán thuế ngoài, thường được sử dụng trong các giao dịch tài chính và địa phương hóa."
keywords:
  - "material usage"
  - "external tax calculation"
  - "financial transaction"
  - "localization"
  - "fi"
  - "fi-loc"
  - "fi-loc-txs"
  - "sap cds"
  - "interface view"
  - "value help"
  - "finance"
  - "tax calculation"
semantic_en: "The I_BR_SDEXTTXCALCMATLUSAGEVH view provides material usage data for external tax calculations, typically used in financial transactions and localization."
app_component: FI-LOC-TXS
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
  - FI-LOC
  - FI-LOC-TXS
  - interface-view
  - value-help
  - component:FI-LOC-TXS
  - lob:Finance
---
# I_BR_SDEXTTXCALCMATLUSAGEVH

**BR Sdexttxcalcmatlusagevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TXS` |
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
| `ExtTxCalcInternalCodeValue` | ✓ | |  |  |  |  |
| `ExtTxCalcInternalCodeText` |  | |  | `cast ( max( ExtTxCalcInternalCodeText ) as txs_intcode_desc )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel:{
  usageType:{
    sizeCategory: #XL,
    serviceQuality: #C,
    dataClass: #MASTER
  },
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
  representativeKey: 'ExtTxCalcInternalCodeValue',
  supportedCapabilities: [#VALUE_HELP_PROVIDER],
  modelingPattern: #VALUE_HELP_PROVIDER
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.ranked:true
@EndUserText.label: 'Customer Usage'
@Analytics.technicalName: 'IBRCBTAMATERIALUSAGE'
define view entity I_BR_SDExtTxCalcMatlUsageVH
  as select from I_BR_ExtTxCalcInternalCode
{
      @ObjectModel.text.element: ['ExtTxCalcInternalCodeText']
      @UI.textArrangement: #TEXT_ONLY
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
  key ExtTxCalcInternalCodeValue,
      @Semantics.text: true
      @Search.defaultSearchElement: false
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.7
      cast ( max( ExtTxCalcInternalCodeText ) as txs_intcode_desc ) as ExtTxCalcInternalCodeText
}
where
      ExtTxCalcComponent         = 'SD'
  and Country                    = 'BR'
  and ExtTxCalcInternalCodeGroup = 'API_MATERIAL_USAGE'

group by
  ExtTxCalcInternalCodeValue
```
