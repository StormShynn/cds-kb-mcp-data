---
name: I_CAPROVIDERCONTRACTTECHRSCE
description: "Caprovidercontracttechrsce"
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
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPROVIDERCONTRACTTECHRSCE

**Caprovidercontracttechrsce**

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
| `CAProviderContract` | ✓ | |  | `ProviderContract` | `CHAR(20)` | Identification of a Provider Contract |
| `CATechnicalResourceGroup` | ✓ | |  |  | `NUMC(6)` | Group of IDs |
| `CATechnicalResourceIDType` | ✓ | |  |  | `CHAR(2)` | Type of Identification |
| `CATechnicalResourceID` | ✓ | |  |  | `CHAR(50)` | ID That Can Be Used to Determine a Provider Contract |
| `CATechRsceValidFromDateTime` | ✓ | |  |  | `DEC(15)` | Valid From (Time Stamp) |
| `CATechRsceValidToDateTime` |  | |  |  | `DEC(15)` | Valid To (Time Stamp) |
| `CANormalizedTechnicalResource` |  | |  |  | `CHAR(50)` | Normalized ID |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `_PrvdrContr` | | ✓ | | | | |
| `_TechRsceIDType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrvdrContr` | `I_CAProviderContractHeader` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Kennung am Provider-Vertrag'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICAPRVDRCONTRTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_CAProviderContractTechRsce
  as select from I_ProviderContractTechRsce
  association [1..1] to I_CAProviderContractHeader as _PrvdrContr on $projection.CAProviderContract = _PrvdrContr.CAProviderContract
{

      @ObjectModel.foreignKey.association: '_PrvdrContr'
  key ProviderContract as CAProviderContract,
  key CATechnicalResourceGroup,
      @ObjectModel.foreignKey.association: '_TechRsceIDType'
  key CATechnicalResourceIDType,
  key CATechnicalResourceID,
  key CATechRsceValidFromDateTime,
      CATechRsceValidToDateTime,
      CANormalizedTechnicalResource,

      // Administrative Data
      CreationDate,
      CreationTime,
      CreatedByUser,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,

      // valfr_locl,
      // valto_locl,

      _PrvdrContr,
      _TechRsceIDType

}
```
