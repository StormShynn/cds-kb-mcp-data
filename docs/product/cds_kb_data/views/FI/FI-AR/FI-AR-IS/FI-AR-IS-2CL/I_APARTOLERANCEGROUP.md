---
name: I_APARTOLERANCEGROUP
description: "Apartolerancegroup"
semantic_vi: "View Apartolerancegroup hiển thị dữ liệu tài chính liên quan đến nhóm dung sai thanh toán của nhà cung cấp, được sử dụng để quản lý các điều khoản thanh toán và giảm giá cho nhà cung cấp. Nó sẽ được sử dụng bởi các nhà phát triển để tích hợp với tính năng thanh toán của FI-AR-IS-2CL."
keywords:
  - "accounts payable"
  - "dung sai thanh toán"
  - "fi-ar-is-2cl"
  - "payment terms"
  - "thanh toán"
  - "thanh toán của nhà cung cấp"
  - "tính năng thanh toán"
  - "tính năng tài chính"
semantic_en: "The Apartolerancegroup view exposes financial data related to accounts payable tolerance groups, which are used to manage payment terms and discounts for suppliers. It would be used by developers to integrate with accounts payable functionality in SAP FI-AR-IS-2CL."
app_component: FI-AR-IS-2CL
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
  - FI-AR
  - FI-AR-IS
  - interface-view
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_APARTOLERANCEGROUP

**Apartolerancegroup**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
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
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `APARToleranceGroup` | ✓ | |  | `cast( tg.togru as farp_togru )` | `CHAR(4)` | Tolerance Group for the Business Partner/G/L Account |
| `GraceDays` |  | |  | `toler` | `NUMC(2)` | Grace Days |
| `FixedCashDiscount` |  | |  | `cast( tg.sktre as farp_dzbfix )` | `CHAR(1)` | Fixed Payment Terms |
| `ArrearsDaysBaseDateDetn` |  | |  | `vrzde` | `CHAR(1)` | Base Date for Determining Arrears Days for OI Processing |
| `MaxPaytDiffExpnAmountInCCCrcy` |  | |  | `cast( tg.betrh as farp_betrh_043t )` | `CURR(7)` | Maximum Expense Amount from Payment Differences |
| `MaxPaytDiffRevnAmountInCCCrcy` |  | |  | `cast( tg.betrs as farp_betrs_043t )` | `CURR(7)` | Maximum Revenue Amount from Payment Differences |
| `MaxPaymentDiffExpensePercent` |  | |  | `cast( tg.prozh as farp_prozh_043t )` | `DEC(3)` | Max Permitted Expense Percentage from Payment Differences |
| `MaxPaymentDiffRevenuePercent` |  | |  | `cast( tg.prozs as farp_prozs_043t )` | `DEC(3)` | Max Permitted Revenue Percentage from Payment Differences |
| `CompanyCodeCurrency` |  | | `_t001` | `waers` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_APARToleranceGroupText` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_APARToleranceGroupText` | `I_APARToleranceGroupText` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIAPARTOLGROUP',
                   preserveKey:                 true,
                   compiler.compareFilter:      true,
                   buffering.status:            #ACTIVE,
                   buffering.type:              #FULL }

@Analytics:      { dataCategory:                #DIMENSION,
                   internalName:                #LOCAL }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }

@ObjectModel:    { modelingPattern:             #ANALYTICAL_DIMENSION,
                   representativeKey:           'APARToleranceGroup',
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #CUSTOMIZING,
                   supportedCapabilities:       [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                   sapObjectNodeType.name:      'APARToleranceGroup'       
                   }

@AccessControl:  { authorizationCheck:          #NOT_REQUIRED }

@EndUserText:    { label:                       'Tolerance Group for Cust and Suppl' }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@Search:         { searchable:                  false }
define view I_APARToleranceGroup  as select from t043g as tg
  left outer to one join t001                    as _t001                       on  tg.bukrs = _t001.bukrs                                                
  association [0..1] to I_CompanyCode            as _CompanyCode                on  $projection.CompanyCode                    = _CompanyCode.CompanyCode
  association [0..*] to I_APARToleranceGroupText as _APARToleranceGroupText     on  $projection.CompanyCode                    = _APARToleranceGroupText.CompanyCode
                                                                                and $projection.APARToleranceGroup             = _APARToleranceGroupText.APARToleranceGroup
  association [0..1] to I_Currency               as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency            = _CompanyCodeCurrency.Currency   
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key tg.bukrs                                   as CompanyCode,
      @ObjectModel.text.association: '_APARToleranceGroupText'
  key cast( tg.togru as farp_togru )             as APARToleranceGroup,

      tg.toler                                   as GraceDays,
      cast( tg.sktre as farp_dzbfix )            as FixedCashDiscount,
      tg.vrzde                                   as ArrearsDaysBaseDateDetn,
      
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( tg.betrh as farp_betrh_043t )        as MaxPaytDiffExpnAmountInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( tg.betrs as farp_betrs_043t )        as MaxPaytDiffRevnAmountInCCCrcy,
      
      cast( tg.prozh as farp_prozh_043t )        as MaxPaymentDiffExpensePercent,
      cast( tg.prozs as farp_prozs_043t )        as MaxPaymentDiffRevenuePercent,
      
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      // Due to buffering in V1 View we have to use t001 as base, instead of I_CompanyCode (will midterm not be converted to view entity )      
      _t001.waers                                as CompanyCodeCurrency,
      

      _CompanyCode,
      _CompanyCodeCurrency,
      _APARToleranceGroupText
}
```
