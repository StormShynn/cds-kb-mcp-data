---
name: I_CACREDITWORTHINESSITEM
description: "Cacreditworthinessitem"
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
  - credit
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESSITEM

**Cacreditworthinessitem**

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
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `CalendarYear` | ✓ | |  |  | `NUMC(4)` | Calendar year |
| `CACreditWorthinessSequenceNmbr` | ✓ | |  |  | `NUMC(6)` | Sequential Number Of a Creditworthiness Entry |
| `CACreditWorthinessOrigin` |  | |  |  | `CHAR(2)` | Origin of entry related to creditworthiness |
| `CACreditWorthinessDate` |  | |  |  | `DATS(8)` | Creditworthiness Date |
| `CAItemCreditWorthinessValue` |  | |  |  | `NUMC(4)` | Creditworthiness |
| `CAItemCrdtWorthinessIsNegative` |  | |  |  | `CHAR(1)` | Creditworthiness Value is Negative |
| `CAItmCrdtWrthnssWthSignVal` |  | |  | `cast( case when CAItemCrdtWorthinessIsNegative = 'X' then cast( CAItemCreditWorthinessValue as cbetr_kk ) * -1 else cast( CAItemCreditWorthinessValue as cbetr_kk ) end as cbetr_kk )` | `DEC(5)` | Creditworthiness Value with +/- Sign |
| `CACrdtWorthinessItemIsReversed` |  | |  |  | `CHAR(1)` | Creditworthiness Entry Was Reversed |
| `CACrdtWorthinessItemStatus` |  | |  | `cast( case when CACrdtWorthinessItemIsReversed = 'X' then '2' else '1' end as bonis_kk )` | `CHAR(1)` | Creditworthiness Item Status |
| `CACreditWorthinessItemExtKey` |  | |  |  | `CHAR(30)` | Key field of application |
| `CACreditWorthinessItemText` |  | |  |  | `CHAR(32)` | Reference for Manual Creditworthiness Entry |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Run ID |
| `CADunningCounter` |  | |  |  | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CAReturnDocumentNumber` |  | |  |  | `CHAR(12)` | Document Number of Returns Document |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `_CACreditWorthinessItemStatus` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CACreditWorthinessOrigin` | | ✓ | | | | |
| `_CAReturnDocument` | | ✓ | | | | |
| `_CalendarYear` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CACreditWorthinessItemStatus` | `I_CACrdtWorthinessItemStatus` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL, 
              dataExtraction: { enabled: true,
                                delta.changeDataCapture: { mapping: [ { table        : 'dfkkcrp',
                                                                        role         : #MAIN,
                                                                        viewElement  : ['BusinessPartner', 'CalendarYear', 'CACreditWorthinessSequenceNmbr'],
                                                                        tableElement : ['GPART', 'KJAHR', 'LFDNR' ] } ] } } }

@EndUserText.label: 'Creditworthiness Item'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }

@ObjectModel: { modelingPattern:#NONE,
                representativeKey: 'CACreditWorthinessSequenceNmbr',
                sapObjectNodeType.name: 'ContrAcctgCreditWorthinessItem',
                supportedCapabilities: [
                                         #ANALYTICAL_DIMENSION,
                                         #ANALYTICAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #B,
                             sizeCategory: #XL } }

@VDM.viewType: #COMPOSITE

define view entity I_CACreditWorthinessItem
  as select from I_CACreditWorthinessHistoryItm

  association [1..1] to I_CACrdtWorthinessItemStatus as _CACreditWorthinessItemStatus on $projection.CACrdtWorthinessItemStatus = _CACreditWorthinessItemStatus.CACrdtWorthinessItemStatus

{
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_CalendarYear'
  key CalendarYear,
  key CACreditWorthinessSequenceNmbr,

      CACreditWorthinessOrigin,
      CACreditWorthinessDate,

      CAItemCreditWorthinessValue,
      CAItemCrdtWorthinessIsNegative,
      cast( case
        when CAItemCrdtWorthinessIsNegative = 'X'
        then cast( CAItemCreditWorthinessValue as cbetr_kk ) * -1
        else cast( CAItemCreditWorthinessValue as cbetr_kk )
      end as cbetr_kk ) as CAItmCrdtWrthnssWthSignVal,

      CACrdtWorthinessItemIsReversed,
      @ObjectModel.foreignKey.association: '_CACreditWorthinessItemStatus'
      cast( case
        when CACrdtWorthinessItemIsReversed = 'X'
        then '2'
        else '1'
      end as bonis_kk ) as CACrdtWorthinessItemStatus,

      CACreditWorthinessItemExtKey,
      CACreditWorthinessItemText,

      CAApplicationArea,
      ContractAccount,
      CAMassRunDate,
      CAMassRunID,
      CADunningCounter,
      CAReturnDocumentNumber,

      CreatedByUser,
      CreationDate,
      CreationTime,

      /* Associations */
      // own associations
      _CACreditWorthinessItemStatus,
      // associations from I_CACreditWorthinessHistoryItm
      _BusinessPartner,
      _CAApplicationArea,
      _CACreditWorthinessOrigin,
      _CAReturnDocument,
      _CalendarYear,
      _ContractAccount,
      _ContractAccountPartner
}
```
