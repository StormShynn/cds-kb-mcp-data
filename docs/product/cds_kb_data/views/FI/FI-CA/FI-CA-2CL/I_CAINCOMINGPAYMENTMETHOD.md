---
name: I_CAINCOMINGPAYMENTMETHOD
description: "Caincomingpaymentmethod"
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
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINCOMINGPAYMENTMETHOD

**Caincomingpaymentmethod**

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
| `Country` | ✓ | |  |  | `CHAR(3)` | Country/Region Key |
| `CAIncomingPaymentMethod` | ✓ | |  | `CAPaymentMethod` | `CHAR(1)` | Payment Method |
| `BankDetailsOfBPAreRequired` |  | |  |  | `CHAR(1)` | Bank Details of Business Partner Required |
| `AddressDetailsAreRequired` |  | |  |  | `CHAR(1)` | Indicator: Street, P.O.box or P.O.box postal code required |
| `IsPaytMethForIncomingPayments` |  | |  |  | `CHAR(1)` | Indicator: Payment Method Used for Incoming Payments |
| `CAIsPaytMethForPostOffcBkAcct` |  | |  |  | `CHAR(1)` | Payment method for post office bank account |
| `ChequeIsCreatedWithPaytMeth` |  | |  |  | `CHAR(1)` | Indicator: Is a Check Created Using This Payment Method? |
| `IsPaytMethForEUInternalTransf` |  | |  |  | `CHAR(1)` | Indicator: EU Internal Transfer w/o Reporting Section |
| `CAPaymentMethodProcessingType` |  | |  |  | `CHAR(1)` | Processing type of payment method |
| `CAPaymentMediumFormat` |  | |  |  | `CHAR(30)` | Payment Medium Format |
| `CAPaytMediumFormatSupplement` |  | |  |  | `CHAR(6)` | Supplement for Payment Medium Format |
| `CAPaymentOrderIsCreated` |  | |  |  | `CHAR(1)` | Payment Order Instead of Payment Posting |
| `CAPaytMethForBillerDirect` |  | |  |  | `CHAR(1)` | Payment Method for FSCM Biller Direct |
| `CAIsPaytSlipWithRefNmbrProced` |  | |  |  | `CHAR(1)` | ISR Procedure |
| `CAPaytMethAddressIsNotRequired` |  | |  |  | `CHAR(1)` | Address not Required |
| `BR_CABoletoAssignmentType` |  | |  |  | `CHAR(1)` | Boleto: Assignment type |
| `CAPaymentMethodNotificationCat` |  | |  |  | `CHAR(1)` | Debit Memo Notification: Category of Payment Method |
| `ContrAcctgIBANOrSWIFTRqmtCode` |  | |  |  | `CHAR(1)` | IBAN and/or SWIFT Code Required |
| `CASEPAMandateIsRequired` |  | |  |  | `CHAR(1)` | SEPA Mandate Required |
| `CASEPAPrenotificationIsCreated` |  | |  |  | `CHAR(1)` | Direct Debit Pre-Notification Intended |
| `CARealTimePaymentCategory` |  | |  |  | `CHAR(1)` | Real-Time Payment: Payment Category |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Incoming Payment Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAIncomingPaymentMethod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Search.searchable: false

@VDM.viewType: #COMPOSITE

define view entity I_CAIncomingPaymentMethod
  as select from I_CAPaymentMethod
{
      @ObjectModel.foreignKey.association: '_Country'
  key Country,
  key CAPaymentMethod as CAIncomingPaymentMethod,

      BankDetailsOfBPAreRequired,
      AddressDetailsAreRequired,
      IsPaytMethForIncomingPayments,
      CAIsPaytMethForPostOffcBkAcct,
      ChequeIsCreatedWithPaytMeth,
      IsPaytMethForEUInternalTransf,
      CAPaymentMethodProcessingType,
      CAPaymentMediumFormat,
      CAPaytMediumFormatSupplement,
      CAPaymentOrderIsCreated,
      CAPaytMethForBillerDirect,
      CAIsPaytSlipWithRefNmbrProced,
      CAPaytMethAddressIsNotRequired,
      BR_CABoletoAssignmentType,
      CAPaymentMethodNotificationCat,
      ContrAcctgIBANOrSWIFTRqmtCode,
      CASEPAMandateIsRequired,
      CASEPAPrenotificationIsCreated,
      CARealTimePaymentCategory,

      /* Associations */
      _Country,
      _Text
}
where
  IsPaytMethForIncomingPayments = 'X'
```
