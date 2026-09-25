---
name: I_CACREDITWORTHINESS
description: "Cacreditworthiness"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESS

**Cacreditworthiness**

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
| `CAManualCreditWorthinessValue` |  | |  |  | `NUMC(4)` | Manual Creditworthiness |
| `CACreditWorthinessFactorInPct` |  | |  |  | `NUMC(3)` | Creditworthiness factor as a percentage |
| `CAManualCreditWorthinessDate` |  | |  |  | `DATS(8)` | Date On Which Creditworthiness Was Manually Set |
| `CAFrozenCreditWorthinessValue` |  | |  | `case CACreditWorthinessIsFrozen when 'X' then CAFrozenCreditWorthinessValue else '0000' end` | `NUMC(4)` | Fixed Creditworthiness |
| `CAFrozenCreditWorthinessDate` |  | |  |  | `DATS(8)` | Date When Creditworthiness Is Fixed |
| `CAUnfrozenCreditWorthinessDate` |  | |  |  | `DATS(8)` | Release Date of Fixed Creditworthiness |
| `CAExternalCreditWorthinessVal` |  | |  |  | `NUMC(4)` | External Creditworthiness |
| `CAExternalCreditWorthinessDate` |  | |  |  | `DATS(8)` | Date of Last Change to Rating |
| `CALastReplicatedCrdtWrthnssVal` |  | |  |  | `CHAR(4)` | FI-CA Creditworthiness Last Replicated to Credit Management |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at which the object was created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `CACreditWorthinessIsFrozen` |  | |  |  | `CHAR(1)` | Calculated Creditworthiness is Fixed |
| `_BusinessPartner` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,  
              dataExtraction: { enabled: true,
                                delta: { byElement : { name: 'LastChangeDate', 
                                                       maxDelayInSeconds : 300 } } } }

@EndUserText.label: 'Contract Accounting Creditworthiness'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
             
@ObjectModel: { modelingPattern:#ANALYTICAL_DIMENSION,
                representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'ContrAcctgCreditWorthiness',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #ANALYTICAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],                               
                usageType:{ dataClass: #TRANSACTIONAL,
                            serviceQuality: #B,
                            sizeCategory: #L } }
 
@VDM.viewType: #COMPOSITE

define view entity I_CACreditWorthiness
  as select from P_CACreditWorthinessMaxYear

{
  key BusinessPartner,
      CAManualCreditWorthinessValue,
      CACreditWorthinessFactorInPct,
      CAManualCreditWorthinessDate,
      case CACreditWorthinessIsFrozen
        when 'X' then CAFrozenCreditWorthinessValue
        else '0000'
      end as CAFrozenCreditWorthinessValue,
      CAFrozenCreditWorthinessDate,
      CAUnfrozenCreditWorthinessDate,
      CAExternalCreditWorthinessVal,
      CAExternalCreditWorthinessDate,
      CALastReplicatedCrdtWrthnssVal,
      CreationDate,
      CreationTime,
      LastChangeDate,
      LastChangeTime,
      CACreditWorthinessIsFrozen,

      /* Associations */
      _BusinessPartner
}
```
