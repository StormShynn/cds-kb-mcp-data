---
name: I_COSTCENTERTEXT
description: "Cost CenterTEXT"
app_component: CO-OM-2CL
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
  - CO
  - CO-OM
  - interface-view
  - text-view
  - cost-center
  - text
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERTEXT

**Cost CenterTEXT**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
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
| `CostCenter` | ✓ | |  | `kostl` | `CHAR(10)` | Cost Center |
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | | `_md` | `datab` | `DATS(8)` | Valid-From Date |
| `CostCenterName` |  | |  | `cast(cskt.ktext as fis_kostl_name preserving type)` | `CHAR(20)` | Cost Center Name |
| `CostCenterDescription` |  | |  | `cast(cskt.ltext as fis_kostl_ltext preserving type)` | `CHAR(40)` | Description of Cost Center |
| `_ControllingAreaText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Center - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERT'
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CostCenter'
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@Search.searchable: true
//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_CostCenterText
  as select from cskt
    left outer to one join   csks as _md on  cskt.kostl = _md.kostl
                             and cskt.kokrs = _md.kokrs
                             and cskt.datbi = _md.datbi


  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea as _ControllingAreaText on $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_ControllingArea as _ControllingArea     on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: 'CostCenterDescription'
  key cskt.kostl                                     as CostCenter,

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cskt.kokrs                                     as ControllingArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cskt.spras                                     as Language,

      @Semantics.businessDate.to: true
  key cskt.datbi                                     as ValidityEndDate,

      @Semantics.businessDate.from: true
      _md.datab                                      as ValidityStartDate,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast(cskt.ktext as fis_kostl_name preserving type)  as CostCenterName,

      @Semantics.text: true
      cast(cskt.ltext as fis_kostl_ltext preserving type) as CostCenterDescription,

      _ControllingArea,
      _Language,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
```
