---
name: I_CATAXDETERMINATIONCODE
description: "Cataxdeterminationcode"
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
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CATAXDETERMINATIONCODE

**Cataxdeterminationcode**

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
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `CATaxDeterminationCode` | ✓ | |  | `ermwskz` | `CHAR(2)` | Indicator: Tax Determination Code |
| `CATaxDetnCodeValidFromDate` | ✓ | |  | `ab` | `DATS(8)` | Date from which time slice is valid |
| `CATaxDetnCodeValidToDate` |  | |  | `bis` | `DATS(8)` | Date at Which a Time Slice Expires |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCalculationProcedure` |  | | `_Country` | `TaxCalculationProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `_Country` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Tax Determination Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE, 
                sapObjectNodeType.name: 'ContrAcctgTaxDeterminationCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #SQL_DATA_SOURCE, 
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CATaxDeterminationCode
  as select from te011

  association [0..1] to I_Country                 as _Country                 on  $projection.Country                 = _Country.Country
  association [0..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure
  association [0..1] to I_TaxCode                 as _TaxCode                 on  $projection.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure
                                                                              and $projection.TaxCode                 = _TaxCode.TaxCode

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1                            as Country,
  key ermwskz                          as CATaxDeterminationCode,
  key ab                               as CATaxDetnCodeValidFromDate,
      
      bis                              as CATaxDetnCodeValidToDate,
      @ObjectModel.foreignKey.association: '_TaxCode'
      mwskz                            as TaxCode,

      // required for association to TaxCode
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
     _Country.TaxCalculationProcedure as TaxCalculationProcedure,

      /* Associations */
      _Country,
      _TaxCalculationProcedure,
      _TaxCode
}
```
