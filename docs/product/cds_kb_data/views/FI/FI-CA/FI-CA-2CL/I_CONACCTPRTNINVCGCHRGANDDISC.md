---
name: I_CONACCTPRTNINVCGCHRGANDDISC
description: "Conacctprtninvcgchrganddisc"
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
# I_CONACCTPRTNINVCGCHRGANDDISC

**Conacctprtninvcgchrganddisc**

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
| `ContractAccount` | ✓ | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `BusinessPartner` | ✓ | |  | `gpart` | `CHAR(10)` | Business Partner Number |
| `CAInvcgChargeAndDiscountKey` | ✓ | |  | `chgkey` | `CHAR(8)` | Charge and Discount Key |
| `CAInvcgChrgAndDiscKeyStartDate` | ✓ | |  | `date_from` | `DATS(8)` | Valid-From Date for Charge and Discount Key |
| `CAInvcgChrgAndDiscKeyEndDate` |  | |  | `date_to` | `DATS(8)` | Valid-To Date for Charge and Discount Key |
| `CAApplicationArea` |  | |  | `cast( 'C' as applk_kk preserving type )` | `CHAR(1)` | Application Area |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgChrgAndDiscKey` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgChrgAndDiscKey` | `I_CAInvcgChrgAndDiscKey` | [1..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [1..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics.technicalName: 'ICONACCTPARTICD'

@EndUserText.label: 'Contr Acct Partner Invcg Charge and Disc'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAInvcgChargeAndDiscountKey',
                sapObjectNodeType.name: 'ContrAcctPrtnInvcgChrgAndDisc',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view entity I_ConAcctPrtnInvcgChrgAndDisc
  as select from fkkvkp_chgdisc

  association [1..1] to I_BusinessPartner        as _BusinessPartner        on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CAApplicationArea      as _CAApplicationArea      on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [1..1] to I_CAInvcgChrgAndDiscKey  as _CAInvcgChrgAndDiscKey  on  $projection.CAInvcgChargeAndDiscountKey = _CAInvcgChrgAndDiscKey.CAInvcgChargeAndDiscountKey
                                                                            and _CAInvcgChrgAndDiscKey.CAApplicationArea = 'C'
  association [1..1] to I_ContractAccountHeader  as _ContractAccount        on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [1..1] to I_ContractAccountPartner as _ContractAccountPartner on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                            and $projection.ContractAccount = _ContractAccountPartner.ContractAccount

{
      @ObjectModel.foreignKey.association: '_ContractAccount'
  key vkont                                   as ContractAccount,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key gpart                                   as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgChrgAndDiscKey'
  key chgkey                                  as CAInvcgChargeAndDiscountKey,
      @Semantics.businessDate.from: true
  key date_from                               as CAInvcgChrgAndDiscKeyStartDate,

      @Semantics.businessDate.to: true
      date_to                                 as CAInvcgChrgAndDiscKeyEndDate,

      //needs to be kept due to be compatible (view is C1 released)
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      cast( 'C' as applk_kk preserving type ) as CAApplicationArea,

      _BusinessPartner,
      _CAApplicationArea,
      _CAInvcgChrgAndDiscKey,
      _ContractAccount,
      _ContractAccountPartner
}
```
