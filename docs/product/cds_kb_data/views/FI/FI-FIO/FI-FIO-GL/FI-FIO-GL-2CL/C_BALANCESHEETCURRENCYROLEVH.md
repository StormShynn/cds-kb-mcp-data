---
name: C_BALANCESHEETCURRENCYROLEVH
description: "Balance Sheet Currency Roles"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value
semantic_en: "Balance Sheet Currency Roles"
semantic_vi: "Balance Sheet Currency Roles — CDS view tiêu dùng dựa trên P_BalanceSheetCurrencyRole."
keywords:
  - "balance"
  - "sheet"
  - "currency"
  - "roles"
  - "ledger"
  - "company"
  - "code"
  - "field"
  - "role"
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_BALANCESHEETCURRENCYROLEVH

**Balance Sheet Currency Roles**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role |
| `CurrencyRole` | ✓ | |  |  | `CHAR(2)` | Currency Type |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CurrencyRoleName` |  | |  | `cast( P_BalanceSheetCurrencyRole.CurrencyRoleName as fis_crcyrole_txt )` | `CHAR(80)` | Currency Role Name |
| `CurrencyRoleLongName` |  | |  | `cast( P_BalanceSheetCurrencyRole.CurrencyRoleName as fis_crcyrole_txt_long )` | `CHAR(100)` | Currency Role Name |
| `CurrencyFieldName` |  | |  |  | `CHAR(60)` | Text for Currency Role Field |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BALANCESHEETCURRENCYROLEVH')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Balance Sheet Currency Roles'
@VDM.viewType: #CONSUMPTION
@ObjectModel: { representativeKey: 'CurrencyRole',
                usageType.serviceQuality: #C,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING ,
//                supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
//                modelingPattern: #ANALYTICAL_DIMENSION }
                dataCategory: #VALUE_HELP,
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Metadata.ignorePropagatedAnnotations: true

@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'CFIBSCRCYROLEVH'
@Analytics.internalName:#LOCAL

define view entity C_BalanceSheetCurrencyRoleVH
  as select from P_BalanceSheetCurrencyRole as P_BalanceSheetCurrencyRole

  //  association [0..1] to I_CurrencyField as _CurrencyField on $projection.CurrencyField = _CurrencyField.CurrencyField
{
      @ObjectModel.foreignKey.association: '_Ledger'
  key P_BalanceSheetCurrencyRole.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_BalanceSheetCurrencyRole.CompanyCode,

      @ObjectModel.foreignKey.association: '_CurrencyField'
  key P_BalanceSheetCurrencyRole.CurrencyField,

      @ObjectModel.text.element: ['CurrencyRoleName']
  key P_BalanceSheetCurrencyRole.CurrencyRole,

      P_BalanceSheetCurrencyRole.Currency,

      @Semantics.text: true
      cast( P_BalanceSheetCurrencyRole.CurrencyRoleName as fis_crcyrole_txt )      as CurrencyRoleName,

      @Semantics.text: true
      cast( P_BalanceSheetCurrencyRole.CurrencyRoleName as fis_crcyrole_txt_long ) as CurrencyRoleLongName,

      P_BalanceSheetCurrencyRole.CurrencyFieldName,

      P_BalanceSheetCurrencyRole._CompanyCode,
      P_BalanceSheetCurrencyRole._Ledger,
      P_BalanceSheetCurrencyRole._CurrencyRole,
      P_BalanceSheetCurrencyRole._CurrencyField
}
```
