---
name: I_CABILLGCYCLE
description: "Cabillgcycle"
semantic_vi: "View Cabillgcycle hiển thị dữ liệu chu kỳ hóa đơn, được sử dụng để xác định kỳ hóa đơn cho khách hàng. Nó thường được sử dụng trong quá trình thu hồi và hóa đơn."
keywords:
  - "billing cycle"
  - "chu kỳ hóa đơn"
  - "accounts receivable"
  - "thu hồi"
  - "fi-ca"
  - "fi-ca-inv"
  - "fi"
  - "finance"
  - "sap cds"
semantic_en: "The Cabillgcycle view exposes billing cycle data, which is used to determine the billing period for customers. It is typically used in accounts receivable and billing processes."
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
# I_CABILLGCYCLE

**Cabillgcycle**

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
| `CABillgCycle` | ✓ | | `_tfk2607` | `cycle` | `CHAR(4)` | Billing Cycle |
| `CALastDayOfBillingPeriod` |  | | `_tfk2607` | `cycle_day` | `CHAR(2)` | Day of Period End |
| `CABillgCyclePeriodCategory` |  | | `_tfk2607` | `cycle_periodcat` | `CHAR(4)` | Frequency of Billing Periods |
| `CABillgCycleIsIndividual` |  | | `_tfk2607` | `individual` | `CHAR(1)` | Can Be Individually Overwritten at Contract Account Level |
| `_CALastDayOfBillingPeriod` | | ✓ | | | | |
| `_CABillgCycleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CALastDayOfBillingPeriod` | `I_CALastDayOfBillingPeriod` | [0..1] |
| `_CABillgCycleText` | `I_CABillgCycleText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abrechnungszyklus'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgCycle',
  sapObjectNodeType.name: 'ContrAcctgBillingCycle',
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

define view entity I_CABillgCycle
  as select from tfk2607 as _tfk2607
  association [0..1] to I_CALastDayOfBillingPeriod as _CALastDayOfBillingPeriod on $projection.CALastDayOfBillingPeriod = _CALastDayOfBillingPeriod.CALastDayOfBillingPeriod
  association [1..*] to I_CABillgCycleText         as _CABillgCycleText         on $projection.CABillgCycle = _CABillgCycleText.CABillgCycle
{
      @ObjectModel.text.association: '_CABillgCycleText'
  key _tfk2607.cycle           as CABillgCycle,

      @ObjectModel.foreignKey.association: '_CALastDayOfBillingPeriod'
      _tfk2607.cycle_day       as CALastDayOfBillingPeriod,
      _tfk2607.cycle_periodcat as CABillgCyclePeriodCategory,
      _tfk2607.individual      as CABillgCycleIsIndividual,

      _CALastDayOfBillingPeriod,
      _CABillgCycleText
}
```
