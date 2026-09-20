---
name: I_USERTOLERANCEGROUP
description: "Usertolerancegroup"
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
# I_USERTOLERANCEGROUP

**Usertolerancegroup**

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
| `UserToleranceGroup` | ✓ | |  | `cast( rfpro as fins_rfpro )` | `CHAR(4)` | User Tolerance Group For Financial Accounting |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `MaxPaymentDiffRevenueAmount` |  | |  | `betrs` | `CURR(7)` | Maximum Payment Difference for Revenue |
| `MaxPaymentDiffExpenseAmount` |  | |  | `betrh` | `CURR(7)` | Maximum Payment Difference for Expense |
| `MaxPaymentDiffRevenuePercent` |  | |  | `prozs` | `DEC(3)` | Maximum Allowable Revenues from Payment Differences |
| `MaxPaymentDiffExpensePercent` |  | |  | `prozh` | `DEC(3)` | Maximum Expense Permitted from Payment Differences |
| `MaxPaytDiffDiscAdjmtGainAmount` |  | |  | `sknts` | `CURR(7)` | Maximum Discount Adjust. for Gain from Payment Differences |
| `MaxPaytDiffDiscAdjmtLossAmount` |  | |  | `sknth` | `CURR(7)` | Maximum Discount Adjust. for Loss from Payment Differences |
| `MaxJrnlEntrPostgAmtInCCCrcy` |  | |  | `maxbt` | `CURR(23)` | Maximum Amount Posted per Document |
| `MaxJrnlEntrItmPostgAmtInCCCrcy` |  | |  | `maxeb` | `CURR(23)` | Maximum Posting Amount per Line Item |
| `MaximumCashDiscountPercent` |  | |  | `maxsk` | `DEC(5)` | Maximum Cash Discount Percentage Rate |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIUSERTOLGROUP',
                   preserveKey:                 true,
                   compiler.compareFilter:      true }

@Analytics:      { dataCategory:                #DIMENSION,
                   internalName:                #LOCAL }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }

@ObjectModel:    { modelingPattern:  #ANALYTICAL_DIMENSION,
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #CUSTOMIZING,
                   representativeKey: 'UserToleranceGroup',
                   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION]
                   }

@AccessControl:  { authorizationCheck:          #NOT_REQUIRED }

@EndUserText:    { label:                       'Tolerance Group for Group of Users' }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@Search:         { searchable:                  false }

define view I_UserToleranceGroup
  as select from t043t
  association [0..1] to I_CompanyCode as _CompanyCode on _CompanyCode.CompanyCode = $projection.CompanyCode
{
  key cast( rfpro as fins_rfpro ) as UserToleranceGroup,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                       as CompanyCode,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betrs                       as MaxPaymentDiffRevenueAmount,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      betrh                       as MaxPaymentDiffExpenseAmount,
      prozs                       as MaxPaymentDiffRevenuePercent,
      prozh                       as MaxPaymentDiffExpensePercent,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sknts                       as MaxPaytDiffDiscAdjmtGainAmount,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sknth                       as MaxPaytDiffDiscAdjmtLossAmount,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      maxbt                       as MaxJrnlEntrPostgAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      maxeb                       as MaxJrnlEntrItmPostgAmtInCCCrcy,
      maxsk                       as MaximumCashDiscountPercent,
      @Semantics.currencyCode: true
      _CompanyCode.Currency       as CompanyCodeCurrency,
      _CompanyCode
}
```
