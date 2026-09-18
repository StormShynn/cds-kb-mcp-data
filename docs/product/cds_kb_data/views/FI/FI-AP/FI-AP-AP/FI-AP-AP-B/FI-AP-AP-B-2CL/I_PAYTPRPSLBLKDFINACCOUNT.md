---
name: I_PAYTPRPSLBLKDFINACCOUNT
description: "Paytprpslblkdfinaccount"
app_component: FI-AP-AP-B-2CL
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
  - FI-AP
  - FI-AP-AP
  - interface-view
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYTPRPSLBLKDFINACCOUNT

**Paytprpslblkdfinaccount**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
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
| `FinancialAccountType` | ✓ | |  | `cast(koart as farp_koart preserving type )` | `CHAR(1)` | Account Type |
| `CompanyCode` | ✓ | |  | `cast(bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `BlockedFinancialAccount` | ✓ | |  | `cast(konko as farp_blocked_acc preserving type )` | `CHAR(10)` | Blocked Account |
| `PaymentRunDate` | ✓ | |  | `laufd` | `DATS(8)` | Date on Which the Program Is to Be Run |
| `PaymentRunID` | ✓ | |  | `cast(laufi as farp_laufi preserving type )` | `CHAR(6)` | Auto Payment Run ID |
| `ConsideredSpecialGLCodes` |  | |  | `umskl` | `CHAR(100)` | Special G/L Indicators to Be Paid |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PaymentProposalPayment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPPBLKDACCT',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Blocked Fin Account'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'BlockedAccount',
    usageType.serviceQuality: #B,
    usageType.dataClass: #TRANSACTIONAL,
    usageType.sizeCategory: #S,

    modelingPattern: #NONE,
    supportedCapabilities: [
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE
                             //#EXTRACTION_DATA_SOURCE,
                             ]
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
//@Analytics: {
//    dataCategory: #FACT,
    //dataExtraction.enabled: true,
//    internalName: #LOCAL
//   }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true
  }



define view I_PaytPrpslBlkdFinAccount
  as select from regus
  association [0..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialAccountType   as _FinancialAccountType   on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_Supplier               as _Supplier               on  $projection.BlockedFinancialAccount = _Supplier.Supplier
                                                                            and FinancialAccountType       = 'K'
  association [0..1] to I_Customer               as _Customer               on  $projection.BlockedFinancialAccount = _Customer.Customer
                                                                            and FinancialAccountType       = 'D'
  association [0..*] to I_PaymentProposalPayment as _PaymentProposalPayment on  $projection.PaymentRunID         = _PaymentProposalPayment.PaymentRunID
                                                                            and $projection.PaymentRunDate       = _PaymentProposalPayment.PaymentRunDate
                                                                            and $projection.FinancialAccountType = _PaymentProposalPayment.FinancialAccountType
                                                                            and (
                                                                               $projection.BlockedFinancialAccount        = _PaymentProposalPayment.Supplier
                                                                               or $projection.BlockedFinancialAccount     = _PaymentProposalPayment.Customer
                                                                             )

{
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key cast(koart as farp_koart  preserving type )      as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type )        as CompanyCode,
  key cast(konko as farp_blocked_acc preserving type ) as BlockedFinancialAccount,
      @Semantics.businessDate.at: true
  key laufd                                            as PaymentRunDate,
  key cast(laufi as farp_laufi preserving type )       as PaymentRunID,
      umskl                                            as ConsideredSpecialGLCodes,
      _CompanyCode,
      _FinancialAccountType,
      _Supplier,
      _Customer,
      _PaymentProposalPayment
}
```
