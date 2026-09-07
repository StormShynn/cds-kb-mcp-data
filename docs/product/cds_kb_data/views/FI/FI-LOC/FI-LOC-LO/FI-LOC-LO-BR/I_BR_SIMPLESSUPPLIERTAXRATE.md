---
name: I_BR_SIMPLESSUPPLIERTAXRATE
description: "BR Simplessuppliertaxrate"
semantic_vi: "View I_BR_SIMPLESSUPPLIERTAXRATE CDS hiển thị thuế cho nhà cung cấp tại Brazil, được sử dụng cho các tính toán tài chính."
keywords:
  - "supplier"
  - "tax"
  - "brazil"
  - "financial"
  - "calculations"
  - "cds view"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
semantic_en: "The I_BR_SIMPLESSUPPLIERTAXRATE CDS view exposes tax rates for suppliers in Brazil, used for financial calculations."
app_component: FI-LOC-LO-BR
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
  - FI-LOC-LO
  - interface-view
  - supplier
  - tax
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Supplier
---
# I_BR_SIMPLESSUPPLIERTAXRATE

**BR Simplessuppliertaxrate**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `Supplier` | ✓ | |  | `supplier` |  |  |
| `FiscalYear` | ✓ | |  | `fiscal_year` |  |  |
| `FiscalMonth` | ✓ | |  | `fiscal_month` |  |  |
| `BR_SIMPLESClassCode` | ✓ | |  | `class` |  |  |
| `BR_SIMPLESTaxRate` |  | |  | `rate` |  |  |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` |  |  |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` |  |  |
| `DataControllerSet` |  | | `_Supplier` | `DataControllerSet` |  |  |
| `DataController1` |  | | `_Supplier` | `DataController1` |  |  |
| `DataController2` |  | | `_Supplier` | `DataController2` |  |  |
| `DataController3` |  | | `_Supplier` | `DataController3` |  |  |
| `DataController4` |  | | `_Supplier` | `DataController4` |  |  |
| `DataController5` |  | | `_Supplier` | `DataController5` |  |  |
| `DataController6` |  | | `_Supplier` | `DataController6` |  |  |
| `DataController7` |  | | `_Supplier` | `DataController7` |  |  |
| `DataController8` |  | | `_Supplier` | `DataController8` |  |  |
| `DataController9` |  | | `_Supplier` | `DataController9` |  |  |
| `DataController10` |  | | `_Supplier` | `DataController10` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRSIMPLESSUPTAX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Simples Nac Supplier Tax Rate'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_BR_SIMPLESSupplierTaxRate
  as select from logbr_mm_simples
  association [1..1] to I_Supplier as _Supplier on _Supplier.Supplier = $projection.Supplier
{
  key supplier                       as Supplier,
  key fiscal_year                    as FiscalYear,
  key fiscal_month                   as FiscalMonth,
  key class                          as BR_SIMPLESClassCode,
      rate                           as BR_SIMPLESTaxRate,
      _Supplier.AuthorizationGroup   as AuthorizationGroup,
      _Supplier.SupplierAccountGroup as SupplierAccountGroup,
      
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataControllerSet,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController1,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController2,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController3,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController4,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController5,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController6,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController7,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController8,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController9,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController10
}
```
