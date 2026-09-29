---
name: I_CONTRACTACCOUNTHEADER
description: "Contractaccountheader"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: yes
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
# I_CONTRACTACCOUNTHEADER

**Contractaccountheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | Yes — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CreationDate` |  | |  | `erdat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `ertim` | `TIMS(6)` | Time at which the object was created |
| `CreatedByUser` |  | |  | `ernam` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `IsMarkedForDeletion` |  | |  | `cast(loevm as loevm preserving type)` | `CHAR(1)` | Deletion Indicator |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  | `aetim` | `TIMS(6)` | Last Changed At |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `CAApplicationArea` |  | |  | `applk` | `CHAR(1)` | Application Area |
| `ContractAccountCategory` |  | |  | `vktyp` | `CHAR(2)` | Contract Account Category |
| `ContractAccountExtReference` |  | |  | `vkona` | `CHAR(20)` | Contract Account Number in Legacy System |
| `ContractAccountName` |  | |  | `vkbez` | `CHAR(35)` | Contract Account Name |
| `ContractAccountUUID` |  | |  | `vkuuid` | `RAW(16)` | Contract Account UUID |
| `_ApplArea` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |
| `_Category` | `I_ContractAccountCategory` | [1..1] |
| `_Extension` | `E_ContractAccountHeader` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture.automatic: true },
              technicalName: 'ICTRACCHEADER' }

@EndUserText.label: 'Contract Account'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'ContractAccount',
                sapObjectNodeType.name: 'ContractAccount',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION  ],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL } }

@VDM.viewType: #BASIC

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VKK',
  dataSources: [ '_Extension' ],
  quota: {
    maximumFields: 170,
    maximumBytes: 3400
  }
}


define view entity I_ContractAccountHeader
  as select from fkkvk

  association [1..1] to I_CAApplicationArea       as _ApplArea  on  $projection.CAApplicationArea = _ApplArea.CAApplicationArea
  association [1..1] to I_ContractAccountCategory as _Category  on  $projection.ContractAccountCategory = _Category.ContractAccountCategory
                                                                and $projection.CAApplicationArea       = _Category.CAApplicationArea
  
  association [1..1] to E_ContractAccountHeader   as _Extension on  $projection.ContractAccount = _Extension.ContractAccount

{
      @ObjectModel.text.element: [ 'ContractAccountName' ]
  key vkont                                as ContractAccount,
      @Semantics.systemDate.createdAt: true
      erdat                                as CreationDate,
      @Semantics.systemTime.createdAt: true
      ertim                                as CreationTime,
      //@Semantics.user.createdBy: true
      ernam                                as CreatedByUser,
      cast(loevm as loevm preserving type) as IsMarkedForDeletion,
      @Semantics.systemDate.lastChangedAt: true
      aedat                                as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      aetim                                as LastChangeTime,
      //@Semantics.user.lastChangedBy: true
      aenam                                as LastChangedByUser,
      @ObjectModel.foreignKey.association: '_ApplArea'
      applk                                as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_Category'
      vktyp                                as ContractAccountCategory,
      vkona                                as ContractAccountExtReference,
      @Semantics.text: true
      vkbez                                as ContractAccountName,
      @Semantics.uuid: true
      vkuuid                               as ContractAccountUUID,

      _ApplArea,
      _Category
}
```
