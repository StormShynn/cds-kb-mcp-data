---
name: I_CAPROVIDERCONTRACTHEADER
description: "Caprovidercontractheader"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - contract
  - header-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROVIDERCONTRACTHEADER

**Caprovidercontractheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAProviderContract` | ✓ | |  | `ProviderContract` | `CHAR(20)` | Identification of a Provider Contract |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `CAProviderContractName` |  | |  |  | `CHAR(35)` | Name of Contract |
| `CAProviderContractExtReference` |  | |  |  | `CHAR(20)` | Technical Key of Provider Contract in External System |
| `CAPrvdrContrStartDateTime` |  | |  |  | `DEC(15)` | Contract Start |
| `CAPrvdrContrEndDateTime` |  | |  |  | `DEC(15)` | Contract End Date |
| `CAAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code for Authorization Check |
| `TimeZoneID` |  | |  |  | `CHAR(6)` | Time Zone |
| `CAProviderContractCategory` |  | |  |  | `CHAR(1)` | Contract Category |
| `CAProviderContractMigrtnStatus` |  | |  |  | `CHAR(1)` | Migration Status |
| `CAProviderContractType` |  | |  |  | `CHAR(1)` | Contract Specification |
| `CAProviderContractStatus` |  | |  |  | `CHAR(1)` | Status of Provider Contract |
| `CAProviderContractSender` |  | |  |  | `CHAR(3)` | Provider Contract Sender |
| `PrvdrContrEarliestEndDateTime` |  | |  |  | `DEC(15)` | End of Minimum Term |
| `MinNrOfMonthsForContractPeriod` |  | |  |  | `NUMC(3)` | Min Length of Contract (Months) |
| `NrOfMonthsForContractRenewal` |  | |  |  | `NUMC(3)` | Contract Extension in Months |
| `NrOfDaysForContrNoticePeriod` |  | |  |  | `NUMC(3)` | Notice Period in Days |
| `BudgetBillingPlanType` |  | |  |  | `CHAR(4)` | Utilities Budget Billing Plan Type |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CAAuthorizationGroup` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |
| `_ProviderContractCategory` | | ✓ | | | | |
| `_ProviderContractMigrtnSts` | | ✓ | | | | |
| `_ProviderContractType` | | ✓ | | | | |
| `_ProviderContractStatus` | | ✓ | | | | |
| `_ProviderContractSender` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRH'

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking : #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              internalName: #LOCAL }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Provider Contract Header'

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { representativeKey: 'CAProviderContract',
                sapObjectNodeType.name: 'ContrAcctgProviderContract',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

define view I_CAProviderContractHeader
  as select from I_ProviderContract

  // Key User Extensibility. Is registered in transaction SCFD_REGISTRY. Do not change E_CAProviderContractHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CAProviderContractHeader as _Extension on $projection.CAProviderContract = _Extension.CAProviderContract
{
  key ProviderContract as CAProviderContract,

      BusinessPartner,
      CreationDate,
      CreationTime,
      CreatedByUser,
      IsMarkedForDeletion,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,
      CAProviderContractName,
      CAProviderContractExtReference,
      CAPrvdrContrStartDateTime,
      CAPrvdrContrEndDateTime,
      CAAuthorizationGroup,
      CompanyCode,
      TimeZoneID,
      CAProviderContractCategory,
      CAProviderContractMigrtnStatus,
      CAProviderContractType,
      CAProviderContractStatus,
      CAProviderContractSender,
      PrvdrContrEarliestEndDateTime,
      MinNrOfMonthsForContractPeriod,
      NrOfMonthsForContractRenewal,
      NrOfDaysForContrNoticePeriod,
      BudgetBillingPlanType,

      /* association */
      _BusinessPartner,
      _CreatedByUser,
      _LastChangedByUser,
      _CAAuthorizationGroup,
      _CompCode,
      _TimeZone,
      _ProviderContractCategory,
      _ProviderContractMigrtnSts,
      _ProviderContractType,
      _ProviderContractStatus,
      _ProviderContractSender

}
```
