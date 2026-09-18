---
name: I_PAYMENTPROGRAMCONTROL
description: "Paymentprogramcontrol"
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
  - payment
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYMENTPROGRAMCONTROL

**Paymentprogramcontrol**

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
| `PaymentRunDate` | ✓ | |  |  | `DATS(8)` | Date on Which the Program Is to Be Run |
| `PaymentRunID` | ✓ | |  |  | `CHAR(6)` | Auto Payment Run ID |
| `ProposalRunIsCarriedOut` |  | |  |  | `CHAR(1)` | Indicator: Payment Proposal Run Carried Out |
| `PaymentProposalIsRevised` |  | |  |  | `CHAR(1)` | Indicator: Payment Proposal is Revised |
| `PaymentRunIsCarriedOut` |  | |  |  | `CHAR(1)` | Indicator: Payment Run is Carried Out |
| `PaytRunDocCreationIsStarted` |  | |  |  | `CHAR(1)` | Indicator: Document Creation Started |
| `PaymentRunIsDeleted` |  | |  |  | `CHAR(1)` | Indicator: Payment Run Data is Deleted |
| `NumberOfCreatedPayments` |  | |  |  | `DEC(7)` | Number of Created Payments |
| `NumberOfPostedPayments` |  | |  |  | `DEC(7)` | Number of Posted Payments |
| `ToNetDueDate` |  | |  |  | `DATS(8)` | "To" Due Date for Customer Items |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Alternative Ex.Rate Type for Payments in Foreign Currency |
| `BranchCompanyCodeAssignment` |  | |  |  | `CHAR(4)` | Allocation Key: Branch - Company Code |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `PaytRunIsForDrctDebitPreNotif` |  | |  |  | `CHAR(1)` | Payment Run for Direct Debit Pre-Notifications |
| `ReferencePaymentRunDate` |  | |  |  | `DATS(8)` | Run Date of Reference Payment Program |
| `ReferencePaymentRunID` |  | |  |  | `CHAR(6)` | Run ID of Reference Payment Program |
| `WrkflwScenIsActv` |  | |  |  | `CHAR(1)` | Workflow of Maintenance of Proposal Run Is Active |
| `_PaymentProposalPayment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPAYTPGMCTRL',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Program Control'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
//    representativeKey: 'PaymentRunID',
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
//    dataCategory: #DIMENSION,
    //dataExtraction.enabled: true,
//    internalName: #LOCAL
//    }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true
  }


define view I_PaymentProgramControl
  as select from R_PaymentProgramControl
  association [0..*] to I_PaymentProposalPayment   as _PaymentProposalPayment  on  $projection.PaymentRunID   = _PaymentProposalPayment.PaymentRunID
                                                                               and $projection.PaymentRunDate = _PaymentProposalPayment.PaymentRunDate  
{

  key PaymentRunDate,
  key PaymentRunID,
      ProposalRunIsCarriedOut,
      PaymentProposalIsRevised,
      PaymentRunIsCarriedOut,
      PaytRunDocCreationIsStarted,
      PaymentRunIsDeleted,
      NumberOfCreatedPayments,
      NumberOfPostedPayments,
      ToNetDueDate,
      ExchangeRateType,
      BranchCompanyCodeAssignment,
      BusinessPlace,
      PaytRunIsForDrctDebitPreNotif,
      ReferencePaymentRunDate,
      ReferencePaymentRunID,
      WrkflwScenIsActv,
      _PaymentProposalPayment

}
```
