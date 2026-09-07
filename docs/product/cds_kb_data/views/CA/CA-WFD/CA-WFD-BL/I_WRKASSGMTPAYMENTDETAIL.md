---
name: I_WRKASSGMTPAYMENTDETAIL
description: "Wrkassgmtpaymentdetail"
app_component: CA-WFD-BL
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
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - payment
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WRKASSGMTPAYMENTDETAIL

**Wrkassgmtpaymentdetail**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
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
| `WorkAssignmentExternalID` | ✓ | | `_Assignment` | `WorkAssignmentExternalID` | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` | ✓ | | `_Assignment` | `Country2DigitISOCode` | `CHAR(2)` | Workforce Country ISO Code |
| `BankIdentification` | ✓ | | `_PaymentDetails` | `BankIdentification` | `CHAR(4)` | Bank Details ID |
| `WorkforcePersonExternalID` |  | | `_Assignment` | `WorkforcePersonExternalID` | `CHAR(100)` | External Person ID |
| `BankAccountHolderName` |  | | `_PaymentDetails` | `BankAccountHolderName` | `CHAR(60)` | Account Holder Name |
| `BankAccountName` |  | | `_PaymentDetails` | `BankAccountName` | `CHAR(40)` | Name of Bank Account |
| `BankControlKey` |  | | `_PaymentDetails` | `BankControlKey` | `CHAR(2)` | Bank Control Key |
| `BankCountryKey` |  | | `_PaymentDetails` | `BankCountryKey` | `CHAR(3)` | Bank Country/Region Key |
| `BankNumber` |  | | `_PaymentDetails` | `BankNumber` | `CHAR(15)` | Bank Key |
| `BankName` |  | | `_PaymentDetails` | `BankName` | `CHAR(60)` | Name of Financial Institution |
| `BankAccount` |  | | `_PaymentDetails` | `BankAccount` | `CHAR(18)` | Bank Account Number |
| `IBAN` |  | | `_PaymentDetails` | `IBAN` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `SWIFTCode` |  | | `_PaymentDetails` | `SWIFTCode` | `CHAR(11)` | SWIFT/BIC for International Payments |
| `StartDate` |  | |  | `cast (tstmp_to_dats( _PaymentDetails.ValidityStartDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date)` | `DATS(8)` | Start Date |
| `EndDate` |  | |  | `cast (tstmp_to_dats( _PaymentDetails.ValidityEndDate, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date)` | `DATS(8)` | End Date |
| `BankAccountReferenceText` |  | | `_PaymentDetails` | `BankAccountReferenceText` | `CHAR(20)` | Reference Details for Bank Details |
| `IsBlocked` |  | | `_Assignment` | `IsBlocked` | `CHAR(1)` | Blocked Indicator |
| `_WorkAssignment` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkAssignment` | `I_WorkAssignment_1` | [0..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Work Assignment Payment Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
define view entity I_WrkAssgmtPaymentDetail
  as select from I_WorkAssignmentKeyMapping as _Assignment

    inner join   I_WorkAssignmentBP         as _AssignmentBP   on _AssignmentBP.WorkAssignment = _Assignment.WorkAssignment
    inner join   I_BusinessPartnerBank      as _PaymentDetails on _AssignmentBP.WorkAssignmentBusinessPartner = _PaymentDetails.BusinessPartner

  association [0..1] to I_WorkAssignment_1  as _WorkAssignment  on  _WorkAssignment.WorkAssignmentExternalID = $projection.WorkAssignmentExternalID
                                                                and _WorkAssignment.Country2DigitISOCode     = $projection.Country2DigitISOCode

  association [1]    to I_WorkforcePerson_1 as _WorkforcePerson on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key  _Assignment.WorkAssignmentExternalID,
  key  _Assignment.Country2DigitISOCode,
  key  _PaymentDetails.BankIdentification,
       _Assignment.WorkforcePersonExternalID,
       _PaymentDetails.BankAccountHolderName,
       _PaymentDetails.BankAccountName,
       _PaymentDetails.BankControlKey,
       _PaymentDetails.BankCountryKey,
       _PaymentDetails.BankNumber,
       _PaymentDetails.BankName,
       _PaymentDetails.BankAccount,
       _PaymentDetails.IBAN,
       _PaymentDetails.SWIFTCode,
       cast (tstmp_to_dats( _PaymentDetails.ValidityStartDate,
       abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
       cast (tstmp_to_dats( _PaymentDetails.ValidityEndDate,
         abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
       _PaymentDetails.BankAccountReferenceText,
       //       WorkerPaymentMethod,
       @Semantics.booleanIndicator: true
       @UI.hidden: true
       _Assignment.IsBlocked,

       /* Associations */
       _WorkAssignment,
       _WorkforcePerson

}
```
