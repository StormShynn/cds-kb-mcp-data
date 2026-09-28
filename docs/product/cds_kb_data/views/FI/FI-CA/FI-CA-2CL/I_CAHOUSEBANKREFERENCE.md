---
name: I_CAHOUSEBANKREFERENCE
description: "Cahousebankreference"
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
  - bank
  - component:FI-CA-2CL
  - lob:Finance
  - bo:Bank
---
# I_CAHOUSEBANKREFERENCE

**Cahousebankreference**

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
| `CAPaymentCompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code for Automatic Payment Transactions |
| `CAHouseBankReference` | ✓ | |  | `eigbv` | `CHAR(25)` | Own Bank Details |
| `HouseBank` |  | |  | `cast(hbkid as farp_hbkid preserving type)` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  | `cast(hktid as fac_hktid preserving type)` | `CHAR(5)` | House Bank Account |
| `UserCodeAtBank` |  | |  | `bnkid` | `CHAR(14)` | User Number at the Bank |
| `CARegisteredNameOfPayerAtBank` |  | |  | `aufbz` | `CHAR(50)` | Name of Payer Registered at Bank |
| `_Text` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAHouseBankReferenceText` | [0..*] |
| `_CompCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'House Bank Reference'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAHouseBankReference',
                sapObjectNodeType.name: 'ContrAcctgHouseBankReference',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAHouseBankReference
  as select from tfk042h
  
  association [0..*] to I_CAHouseBankReferenceText as _Text     on  $projection.CAPaymentCompanyCode = _Text.CAPaymentCompanyCode
                                                                and $projection.CAHouseBankReference = _Text.CAHouseBankReference
  association [0..1] to I_CompanyCode              as _CompCode on  $projection.CAPaymentCompanyCode = _CompCode.CompanyCode

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompCode'
  key bukrs                                     as CAPaymentCompanyCode,
      @ObjectModel.text.association: '_Text'
  key eigbv                                     as CAHouseBankReference,
  
      cast(hbkid as farp_hbkid preserving type) as HouseBank,
      cast(hktid as fac_hktid preserving type)  as HouseBankAccount,
      bnkid                                     as UserCodeAtBank,
      aufbz                                     as CARegisteredNameOfPayerAtBank,

      _Text,
      _CompCode
}
```
