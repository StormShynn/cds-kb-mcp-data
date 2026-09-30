---
name: I_CAADDLBANKCLEARINGACCOUNT
description: "Additional Bank Clearing Account"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value
semantic_en: "Additional Bank Clearing Account"
semantic_vi: "Additional Bank Clearing Account — CDS view giao diện dựa trên tfk012b."
keywords:
  - "additional"
  - "bank"
  - "clearing"
  - "account"
  - "company"
  - "code"
  - "house"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CAADDLBANKCLEARINGACCOUNT

**Additional Bank Clearing Account**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CABankClearingAccount` | ✓ | |  | `bvrko` | `CHAR(10)` | Bank clearing account |
| `HouseBank` | ✓ | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` | ✓ | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `_CompanyCode` | | ✓ | | | | |
| `_CABankClearingAccount` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CABankClearingAccount` | `I_GLAccount` | [1..1] |
| `_HouseBank` | `I_Housebank` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAADDLBANKCLEARINGACCOUNT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Additional Bank Clearing Account'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAddlBankClearingAccount 
  as select from tfk012b

  association [1..1] to I_CompanyCode as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_GLAccount   as _CABankClearingAccount on  $projection.CABankClearingAccount = _CABankClearingAccount.GLAccount
                                                                and $projection.CompanyCode           = _CABankClearingAccount.CompanyCode
  association [1..1] to I_Housebank   as _HouseBank             on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                and $projection.HouseBank   = _HouseBank.HouseBank
  
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      @ObjectModel.foreignKey.association: '_CABankClearingAccount'
  key bvrko  as CABankClearingAccount,
      @ObjectModel.foreignKey.association: '_HouseBank'
  key hbkid  as HouseBank,
  key hktid  as HouseBankAccount,

      _CABankClearingAccount,
      _CompanyCode,
      _HouseBank      
}
```
