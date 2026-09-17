---
name: I_PROFITCENTERVH
description: "Profit CenterVH"
app_component: EC-PCA-MD-2CL
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
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - value-help
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERVH

**Profit CenterVH**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
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
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | ✓ | |  |  | `CHAR(10)` | Profit Center |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ProfitCenterStandardHierarchy` |  | |  |  | `CHAR(12)` | Profit center area |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ProfitCtrResponsiblePersonName` |  | |  |  | `CHAR(20)` | Person Responsible for Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `_ControllingAreaText` | | ✓ | | | | |
| `_SegmentText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [1..1] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_Text` | `I_ProfitCenterText` | [0..*] |
| `_ProfitCenterExt` | `E_ProfitCenter` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Profit Center'

@AbapCatalog.sqlViewName: 'IFIPROFITCTRVH'
@AbapCatalog.compiler.compareFilter: true

@ObjectModel.representativeKey: 'ProfitCenter'
@ObjectModel.semanticKey:  [ 'ControllingArea', 'ProfitCenter', 'ValidityEndDate' ]

@ObjectModel.dataCategory:#VALUE_HELP

@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@Metadata.ignorePropagatedAnnotations: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked: true

@AccessControl.authorizationCheck: #CHECK

//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
@AccessControl.privilegedAssociations: ['_ControllingAreaText','_SegmentText','_Text']
// ]--GENERATED
@UI.textArrangement: #TEXT_LAST
define view I_ProfitCenterVH as select distinct from I_ProfitCenter
   
  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [1..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_SegmentText      as _SegmentText on   $projection.Segment = _SegmentText.Segment
  // ]--GENERATED
  association[0..*] to I_ProfitCenterText           as _Text               on  $projection.ControllingArea    = _Text.ControllingArea and
                                                                                $projection.ProfitCenter       = _Text.ProfitCenter    and
                                                                                $projection.ValidityEndDate    = _Text.ValidityEndDate
  association [0..1] to E_ProfitCenter     as _ProfitCenterExt      on  $projection.ControllingArea = _ProfitCenterExt.ControllingArea and
                                                                        $projection.ProfitCenter    = _ProfitCenterExt.ProfitCenter    and
                                                                        $projection.ValidityEndDate = _ProfitCenterExt.ValidityEndDate

 {
  
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
  @ObjectModel.foreignKey.association: null
  @UI.lineItem: [{ position: 20 }]
  key ControllingArea,
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
  
 // @ObjectModel.text.association: '_Text'
  @ObjectModel.text.element: 'ProfitCenterName'
  @UI.lineItem: [{ position: 10 }]
  key ProfitCenter,
  @UI.lineItem: [{ position: 30 }]
  key ValidityEndDate,
      @UI.lineItem: [{ position: 60 }]
      ProfitCenterStandardHierarchy,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @Semantics.text: true
      @UI.lineItem: [{ position: 40 }]
      _Text[1:Language=$session.system_language].ProfitCenterName,
      @UI.lineItem: [{ position: 50 }]
      ValidityStartDate,
      @Search: {
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      } 
      @UI.lineItem: [{ position: 70 }]
      ProfitCtrResponsiblePersonName,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.text.association: '_SegmentText'
      @UI.lineItem: [{ position: 80 }]
      // ]--GENERATED
      Segment,
      
      _ControllingArea,
      _Segment,
      @Consumption.hidden: true
      _Text,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText,
      @Consumption.hidden: true
      _SegmentText
      // ]--GENERATED

}
```
