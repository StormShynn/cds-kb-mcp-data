---
name: I_PAYMENTTERMSCONDITIONS
description: "Paymenttermsconditions"
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
  - pricing-condition
  - payment
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSCONDITIONS

**Paymenttermsconditions**

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
| `PaymentTerms` | ✓ | |  | `cast( zterm as farp_dzterm preserving type )` | `CHAR(4)` | Terms of Payment Key |
| `PaymentTermsValidityMonthDay` | ✓ | |  | `cast( ztagg as dztagg_052 preserving type )` | `NUMC(2)` | Day Limit |
| `PaymentTermsFinAccountType` |  | |  | `cast( koart as koart_z preserving type )` | `CHAR(1)` | Account Type of the Customer/Vendor |
| `BslnDteCalcDayOfMnth` |  | |  | `cast( zfael as dzfael preserving type )` | `NUMC(2)` | Calendar Day for the Baseline Date for Payment |
| `BslnDteCalcAddlMnths` |  | |  | `cast( zmona as dzmona preserving type )` | `NUMC(2)` | Additional Months |
| `PaymentBlockingReason` |  | |  | `cast( zschf as farp_dzlspr preserving type )` | `CHAR(1)` | Payment Block on Item |
| `PaymentBlockIsTransferred` |  | |  | `xchpb` | `CHAR(1)` | Transfer Payment Block When Changing Terms of Payment? |
| `PaymentMethod` |  | |  | `cast( zlsch as farp_schzw_bseg preserving type )` | `CHAR(1)` | Payment Method |
| `PaymentMethodIsTransferred` |  | |  | `xchpm` | `CHAR(1)` | Transfer Payment Method When Changing Terms of Payment? |
| `PaymentIsInstallment` |  | |  | `xsplt` | `CHAR(1)` | Indicator: Term for Installment Payment |
| `RecrrgEntPaytTrmsIsFrmAcctMstr` |  | |  | `xscrc` | `CHAR(1)` | Recurring Entries: Add Terms of Payment from Master Record |
| `BslnDteHasNoDfltProposal` |  | |  | `case when zdart = '' then 'X' else '' end` | `CHAR(1)` |  |
| `DocDteIsBslnDteProposal` |  | |  | `case when zdart = 'B' then 'X' else '' end` | `CHAR(1)` |  |
| `PostgDteIsBslnDteProposal` |  | |  | `case when zdart = 'D' then 'X' else '' end` | `CHAR(1)` |  |
| `EntrDteIsBslnDteProposal` |  | |  | `case when zdart = 'C' then 'X' else '' end` | `CHAR(1)` |  |
| `PaymentTermsIsHidden` |  | |  | `f_obsolete` | `CHAR(1)` | Hide Entry in Value Help |
| `CashDiscount1Days` |  | |  | `cast( cast( ztag1 as abap.dec(3,0) ) as farp_dzbd1t preserving type )` | `DEC(3)` | Cash Discount Days 1 |
| `CashDiscount2Days` |  | |  | `cast( cast( ztag2 as abap.dec(3,0) ) as farp_dzbd2t preserving type )` | `DEC(3)` | Cash Discount Days 2 |
| `NetPaymentDays` |  | |  | `cast( cast( ztag3 as abap.dec(3,0) ) as farp_dzbd3t preserving type )` | `DEC(3)` | Net Payment Terms Period |
| `CashDiscount1Percent` |  | |  | `cast( zprz1 as dzbd1p_farp preserving type )` | `DEC(5)` | Cash Discount Percentage 1 |
| `CashDiscount2Percent` |  | |  | `cast( zprz2 as dzbd2p_farp preserving type )` | `DEC(5)` | Cash Discount Percentage 2 |
| `CashDiscount1DayOfMonth` |  | |  | `cast( zstg1 as abap.dec(2,0) )` | `DEC(2)` |  |
| `CashDiscount2DayOfMonth` |  | |  | `cast( zstg2 as abap.dec(2,0) )` | `DEC(2)` |  |
| `CashDiscount3DayOfMonth` |  | |  | `cast( zstg3 as abap.dec(2,0) )` | `DEC(2)` |  |
| `CashDiscount1AdditionalMonths` |  | |  | `cast( zsmn1 as abap.dec(2,0) )` | `DEC(2)` |  |
| `CashDiscount2AdditionalMonths` |  | |  | `cast( zsmn2 as abap.dec(2,0) )` | `DEC(2)` |  |
| `CashDiscount3AdditionalMonths` |  | |  | `cast( zsmn3 as abap.dec(2,0) )` | `DEC(2)` |  |
| `_Text` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentTermsConditionsText` | [0..*] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IFIPAYTTRMSCNDNS',
    compiler.compareFilter:true,
    preserveKey:true
    }
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@EndUserText.label: 'Payment Terms Conditions'
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    modelingPattern:  #ANALYTICAL_DIMENSION,
    representativeKey: 'PaymentTermsValidityMonthDay',
    sapObjectNodeType.name: 'PaymentTermsConditions',
    supportedCapabilities: [
                            #ANALYTICAL_DIMENSION,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE
                            ],
    usageType.dataClass: #CUSTOMIZING,
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #M
    }
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC
    }
define view I_PaymentTermsConditions
  as select from P_PaymentTermsConditions2
  association [0..*] to I_PaymentTermsConditionsText as _Text         on  $projection.PaymentTerms                 = _Text.PaymentTerms
                                                                      and $projection.PaymentTermsValidityMonthDay = _Text.PaymentTermsValidityMonthDay
  association [1..1] to I_PaymentTerms               as _PaymentTerms on  $projection.PaymentTerms                 = _PaymentTerms.PaymentTerms                                                                

{
      @ObjectModel.foreignKey.association: '_PaymentTerms'
  key cast( zterm as farp_dzterm preserving type )                          as PaymentTerms,
      @ObjectModel.text.association: '_Text'
  key cast( ztagg as dztagg_052  preserving type )                          as PaymentTermsValidityMonthDay,

      // do not confuse with FinancialAccountType! this property/code has other code values
      // - D     for customers
      // - K     for suppliers/vendors
      // - SPACE for both customers and suppliers/vendors
      cast( koart as koart_z preserving type )                              as PaymentTermsFinAccountType,
      cast( zfael as dzfael preserving type )                               as BslnDteCalcDayOfMnth,
      cast( zmona as dzmona preserving type )                               as BslnDteCalcAddlMnths,
      cast( zschf as farp_dzlspr preserving type )                          as PaymentBlockingReason,
      xchpb                                                                 as PaymentBlockIsTransferred,
      cast( zlsch as farp_schzw_bseg preserving type )                      as PaymentMethod,
      xchpm                                                                 as PaymentMethodIsTransferred,
      xsplt                                                                 as PaymentIsInstallment,
      xscrc                                                                 as RecrrgEntPaytTrmsIsFrmAcctMstr,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'No Default for Baseline Date Proposal'
      case when zdart = ''
               then 'X'
               else ''
      end as BslnDteHasNoDfltProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Document Date is Baseline Date Proposal'
      case when zdart = 'B'
           then 'X'
           else ''
      end as DocDteIsBslnDteProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Posting Date is Baseline Date Proposal'
      case when zdart = 'D'
           then 'X'
           else ''
      end as PostgDteIsBslnDteProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Entry Date is Baseline Date Proposal'
      case when zdart = 'C'
           then 'X'
           else ''
      end as EntrDteIsBslnDteProposal,
      
      @EndUserText.label: 'Payment Terms is Hidden in Value Help'
      f_obsolete                                                            as PaymentTermsIsHidden,
      
      cast( cast( ztag1 as abap.dec(3,0) ) as farp_dzbd1t preserving type ) as CashDiscount1Days,
      cast( cast( ztag2 as abap.dec(3,0) ) as farp_dzbd2t preserving type ) as CashDiscount2Days,
      cast( cast( ztag3 as abap.dec(3,0) ) as farp_dzbd3t preserving type ) as NetPaymentDays,
      
      cast( zprz1 as dzbd1p_farp preserving type )                          as CashDiscount1Percent,
      cast( zprz2 as dzbd2p_farp preserving type )                          as CashDiscount2Percent,
      
      cast( zstg1 as abap.dec(2,0) )                                        as CashDiscount1DayOfMonth,
      cast( zstg2 as abap.dec(2,0) )                                        as CashDiscount2DayOfMonth,
      cast( zstg3 as abap.dec(2,0) )                                        as CashDiscount3DayOfMonth,
      
      cast( zsmn1 as abap.dec(2,0) )                                        as CashDiscount1AdditionalMonths,
      cast( zsmn2 as abap.dec(2,0) )                                        as CashDiscount2AdditionalMonths,
      cast( zsmn3 as abap.dec(2,0) )                                        as CashDiscount3AdditionalMonths,



      _PaymentTerms,
      _Text
}
```
