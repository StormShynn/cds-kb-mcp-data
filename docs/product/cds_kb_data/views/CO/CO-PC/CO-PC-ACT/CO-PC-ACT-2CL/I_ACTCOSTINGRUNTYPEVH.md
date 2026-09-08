---
name: I_ACTCOSTINGRUNTYPEVH
description: "Actcostingruntypevh"
semantic_vi: "View Actcostingruntypevh cung cấp truy cập vào loại chạy chi phí và các năm và kỳ tài chính liên quan, cho phép các nhà phát triển truy cập và sử dụng dữ liệu này trong các ứng dụng của họ."
keywords:
  - "costing run"
  - "fiscal year"
  - "fiscal period"
  - "actcostingruntypevh"
  - "co-pc-act-2cl"
  - "controlling"
  - "costing run type"
  - "đơn vị chạy chi phí"
  - "năm tài chính"
  - "kỳ tài chính"
semantic_en: "The Actcostingruntypevh view provides access to costing run types and their associated fiscal years and periods, enabling developers to retrieve and utilize this data in their applications."
app_component: CO-PC-ACT-2CL
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
  - CO
  - CO-PC
  - CO-PC-ACT
  - interface-view
  - value-help
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_ACTCOSTINGRUNTYPEVH

**Actcostingruntypevh**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
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
| `CostingRunType` | ✓ | |  |  | `CHAR(8)` | Costing Run in Actual Costing |
| `FiscalYear` | ✓ | |  | `cast( FiscalYear as fis_gjahr_no_conv preserving type )` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  | `cast( FiscalPeriod as fins_fiscalperiod preserving type )` | `NUMC(3)` | Fiscal Period |
| `CostingRunTypeName` |  | |  |  | `CHAR(80)` | Long Name of a Costing Run |
| `CostingRunReferenceType` |  | |  |  | `CHAR(1)` | Run Reference Type for Alternative Valuation Run |
| `CostingRunReferenceTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CostingRunType'
@EndUserText.label: 'Costing Run Type in Actual Costing'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                usageType: {
                            serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MIXED
                           },
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
              }
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ActCostingRunTypeVH
  as select distinct from P_ActCostingRunType

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI.lineItem: [{ position: 10 }]
      @ObjectModel.text.element: ['CostingRunTypeName']
  key CostingRunType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 20 }]
  key cast( FiscalYear as fis_gjahr_no_conv preserving type )   as FiscalYear,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 30 }]
  key cast( FiscalPeriod as fins_fiscalperiod preserving type ) as FiscalPeriod,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 40 }]
      @Semantics.text: true
      CostingRunTypeName,

      @Search.defaultSearchElement: false
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 50 }]
      CostingRunReferenceType,

      @Search.defaultSearchElement: false
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
      @UI.lineItem: [{ position: 40 }]
      CostingRunReferenceTypeName

}
```
