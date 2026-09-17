---
name: I_PROFITCENTERHIERARCHY
description: "Profit CenterHIERARCHY"
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
# I_PROFITCENTERHIERARCHY

**Profit CenterHIERARCHY**

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
| `ControllingArea` | ✓ | |  | `cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `ProfitCenterHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_prctr preserving type )` | `CHAR(40)` | Profit Center Hierarchy |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` | `DATS(8)` | Validity Start Date |
| `LastChangedByUser` |  | |  | `upduser` | `CHAR(12)` | Last Changed By |
| `LastChangeDateTime` |  | |  | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `LastChangeTime` |  | |  | `updtime` | `DEC(15)` | Last Updated At (Timestamp) |
| `HierarchyShortID` |  | |  | `hrysid` | `CHAR(20)` | Hierarchy ID |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_ProfitCenterHierarchyText` | [*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
// Comments:
//
// Key fields: please see comment in view I_CostCenterHierarchy
//
@ObjectModel.representativeKey: 'ProfitCenterHierarchy' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Profit Center Hierarchy'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPROFITCENTERH'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@Metadata.allowExtensions: true

@Analytics.dataExtraction.enabled: true

//--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@ObjectModel.sapObjectNodeType.name: 'ProfitCenterHierarchy'

define view I_ProfitCenterHierarchy
  as select from hrrp_dir_n
  //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
  association [0..1] to I_ControllingArea           as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [*]    to I_ProfitCenterHierarchyText as _Text                on  $projection.ProfitCenterHierarchy = _Text.ProfitCenterHierarchy
                                                                            and $projection.ControllingArea       = _Text.ControllingArea

  association [0..1] to I_ControllingArea           as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

{

      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
      @Hierarchy.notAssignedNode.filter: true
  key cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )      as ControllingArea,
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_prctr preserving type ) as ProfitCenterHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )    as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )  as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                         as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                         as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                         as LastChangeTime,
      hrrp_dir_n.hrysid                                          as HierarchyShortID,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text,
      _ControllingArea,
      //--[ GENERATED:012:29JlHNUf7jY4ipE4XHfNBG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
where
  hrrp_dir_n.hrytyp = '0106';
```
