---
name: I_PROFITCENTERHIERARCHYNODET
description: "Profit CenterHIERARCHYNODET"
app_component: EC-PCA-MD-2CL
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
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERHIERARCHYNODET

**Profit CenterHIERARCHYNODET**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
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
| `ControllingArea` | ✓ | |  | `cast( hrrp_nodet_n.kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `ProfitCenterHierarchy` | ✓ | |  | `cast(hrrp_nodet_n.hryid as fis_hryid_prctr preserving type )` | `CHAR(40)` | Profit Center Hierarchy |
| `HierarchyNode` | ✓ | |  | `hrynode` | `CHAR(50)` | Hierarchy node |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_nodet_n.hryvalto as fis_datbi preserving type )` | `DATS(8)` | Validity End Date |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `HierarchyNodeText` |  | |  | `nodetxt` | `CHAR(50)` | Hierarchy node description |
| `HierarchyNodeShortText` |  | |  | `substring(hrrp_nodet_n.nodetxt, 1, 20)` | `CHAR(20)` |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_nodet_n.hryvalfrom as fis_datab preserving type )` | `DATS(8)` | Validity Start Date |
| `_ControllingAreaText` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_ProfitCenterHierarchy` | [1..*] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'Profit Center Hierarchy Node - Text'
//@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPRFTCTRHNODET'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@Analytics.dataExtraction: {enabled:true}
@ObjectModel.sapObjectNodeType.name:'ProfitCenterHierarchyNodeText'
//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
//@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

define view I_ProfitCenterHierarchyNodeT
  as select from hrrp_nodet_n

  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [0..1] to I_ControllingArea       as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_ControllingArea       as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language              as _Language            on  $projection.Language = _Language.Language

  association [1..*] to I_ProfitCenterHierarchy as _Hierarchy           on  $projection.ProfitCenterHierarchy = _Hierarchy.ProfitCenterHierarchy
                                                                        and $projection.ControllingArea       = _Hierarchy.ControllingArea
  // and $projection.ValidityEndDate       = _Hierarchy.ValidityEndDate   //Reviewed

{
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( hrrp_nodet_n.kokrs as fis_kokrs preserving type )      as ControllingArea,
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_nodet_n.hryid as fis_hryid_prctr preserving type ) as ProfitCenterHierarchy,
      @ObjectModel.text.element: 'HierarchyNodeText'
  key hrrp_nodet_n.hrynode                                         as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast(hrrp_nodet_n.hryvalto as fis_datbi preserving type )    as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                           as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                                         as HierarchyNodeText,
      @Semantics.text: true
      substring(hrrp_nodet_n.nodetxt, 1, 20)                       as HierarchyNodeShortText,

      @Semantics.businessDate.from: true
      cast(hrrp_nodet_n.hryvalfrom as fis_datab preserving type )  as ValidityStartDate,
      _ControllingArea,
      _Hierarchy,
      _Language,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED

}
where
  hrrp_nodet_n.hrytyp = '0106';
```
